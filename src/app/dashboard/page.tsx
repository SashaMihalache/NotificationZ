import { DashboardContainer } from "@/components/containers/DashboardContainer"
import { DashboardContent } from "@/components/content/DashboardContent"
import { CreateEventModal } from "@/components/modals/CreateEventModal"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
import { redirect } from "next/navigation"
import { title } from "process"

const Page = async () => {
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

  return (
    <DashboardContainer
      cta={
        <CreateEventModal>
          <Button>
            <PlusIcon className="size-4 mr-2" />
            Add Category
          </Button>
        </CreateEventModal>
      }
      title="Dashboard"
    >
      <DashboardContent />
    </DashboardContainer>
  )
}

export default Page
