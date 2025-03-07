import { DashboardContainer } from "@/components/containers/DashboardContainer"
import { DashboardContent } from "@/components/content/DashboardContent"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

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
    <DashboardContainer user={user}>
      <DashboardContent />
    </DashboardContainer>
  )
}

export default Page
