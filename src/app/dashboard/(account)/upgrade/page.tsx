import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { DashboardPage } from "../../DashboardPage"
import { UpgradePageContent } from "./UpgradePageContent"

const Page = async () => {
  const auth = await currentUser()

  if (!auth) {
    return redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: {
      externalId: auth.id,
    },
  })

  if (!user) {
    return redirect("/sign-in")
  }

  return (
    <DashboardPage title="Pro Membership">
      <UpgradePageContent plan={user.plan} key={"pro"} />
    </DashboardPage>
  )
}

export default Page
