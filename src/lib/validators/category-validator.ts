import { z } from "zod"

export const CATEGORY_NAME_VALIDATOR = z
  .string()
  .min(1, "Category name is required.")
  .regex(
    /^[a-zA-Z0-9-]+$/,
    "Category name can only contain letters, numbers or hyphens."
  )

export const EVENT_CATEGORY_VALIDATOR = z.object({
  name: CATEGORY_NAME_VALIDATOR,
  color: z
    .string()
    .min(1, "Color is required.")
    .regex(/^#[0-9A-Fa-f]{6}$/, "Color must be a valid hex code."),
  emoji: z.string().emoji("Emoji is required.").optional(),
})
