import { DashboardPage } from "@/app/dashboard/DashboardPage"
import { DashboardContent } from "@/components/content/DashboardContent"
import { CreateEventModal } from "@/components/modals/CreateEventModal"
import { PaymentSuccessModal } from "@/components/modals/PaymentSuccessModal"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { createCheckoutSession } from "@/lib/stripe"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
import { redirect, useSearchParams } from "next/navigation"
import { title } from "process"

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const Page = async ({ searchParams }: PageProps) => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    redirect("/sign-in")
  }

  const intent = searchParams.intent

  if (intent === "upgrade") {
    const session = await createCheckoutSession({
      userEmail: user.email,
      userId: user.id,
    })

    if (session.url) {
      redirect(session.url)
    }
  }

  const success = searchParams.success

  return (
    <>
      {success ? <PaymentSuccessModal /> : null}
      <DashboardPage
        cta={
          <CreateEventModal>
            <Button className="w-full sm:w-fit">
              <PlusIcon className="size-4 mr-2" />
              Add Category
            </Button>
          </CreateEventModal>
        }
        title="Dashboard"
      >
        <DashboardContent />
      </DashboardPage>
    </>
  )
}

export default Page
