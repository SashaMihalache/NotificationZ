import { db } from "@/db"
import { router } from "../__internals/router"
import { privateProcedure } from "../procedures"
import { startOfMonth } from "date-fns"
import { z } from "zod"
import {
  CATEGORY_NAME_VALIDATOR,
  EVENT_CATEGORY_VALIDATOR,
} from "@/lib/validators/category-validator"
import { parseColor } from "@/utils"
import { HTTPException } from "hono/http-exception"

export const categoryRouter = router({
  getEventCategories: privateProcedure.query(async ({ c, ctx }) => {
    const now = new Date()
    const firstDayOfMonth = startOfMonth(now)

    const categories = await db.eventCategory.findMany({
      where: {
        userId: ctx.user.id,
      },
      select: {
        id: true,
        name: true,
        emoji: true,
        color: true,
        updatedAt: true,
        createdAt: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    })

    const categoriesWithCounts = await Promise.all(
      categories.map(async (category) => {
        const [uniqueFieldCount, eventsCount, lastPing] = await Promise.all([
          db.event
            .findMany({
              where: {
                EventCategory: { id: category.id },
                createdAt: { gte: firstDayOfMonth },
              },
              select: { fields: true },
              distinct: ["fields"],
            })
            .then((events) => {
              const fieldNames = new Set<string>()

              events.forEach((event) => {
                Object.keys(event.fields as object).forEach((fieldName) => {
                  fieldNames.add(fieldName)
                })
              })

              return fieldNames.size
            }),

          db.event.count({
            where: {
              EventCategory: { id: category.id },
              createdAt: { gte: firstDayOfMonth },
            },
          }),

          db.event.findFirst({
            where: { EventCategory: { id: category.id } },
            orderBy: { createdAt: "desc" },
            select: { createdAt: true },
          }),
        ])

        return {
          ...category,
          uniqueFieldCount,
          eventsCount,
          lastPing: lastPing?.createdAt || null,
        }
      })
    )

    return c.superjson({
      categories: categoriesWithCounts,
    })
  }),

  deleteCategory: privateProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ c, input, ctx }) => {
      const { name } = input

      await db.eventCategory.delete({
        where: {
          name_userId: {
            name,
            userId: ctx.user.id,
          },
        },
      })

      return c.superjson({ success: true })
    }),

  createEventCategory: privateProcedure
    .input(EVENT_CATEGORY_VALIDATOR)
    .mutation(async ({ c, input, ctx }) => {
      const { user } = ctx
      const { color, name, emoji } = input

      // TODO: add plan logic

      const eventCategory = await db.eventCategory.create({
        data: {
          name: name.toLowerCase(),
          color: parseColor(color),
          emoji,
          userId: user.id,
        },
      })

      return c.json({ eventCategory })
    }),

  insertQuickstartCategories: privateProcedure.mutation(async ({ c, ctx }) => {
    const { user } = ctx

    await db.eventCategory.createMany({
      data: [
        {
          name: "Work",
          color: parseColor("#FFD700"),
          emoji: "💼",
          userId: user.id,
        },
        {
          name: "Personal",
          color: parseColor("#FF6347"),
          emoji: "🏠",
          userId: user.id,
        },
        {
          name: "Health",
          color: parseColor("#20B2AA"),
          emoji: "🏋️",
          userId: user.id,
        },
        {
          name: "Finance",
          color: parseColor("#FF4500"),
          emoji: "💰",
          userId: user.id,
        },
      ],
    })

    return c.superjson({ success: true })
  }),

  pollCategory: privateProcedure
    .input(z.object({ name: CATEGORY_NAME_VALIDATOR }))
    .query(async ({ c, input, ctx }) => {
      const { name } = input

      const category = await db.eventCategory.findUnique({
        where: {
          name_userId: {
            name,
            userId: ctx.user.id,
          },
        },
        include: {
          _count: {
            select: {
              events: true,
            },
          },
        },
      })

      if (!category) {
        throw new HTTPException(404, { message: `Category ${name} not found` })
      }

      const hasEvents = category._count.events > 0

      return c.json({ hasEvents })
    }),
})
