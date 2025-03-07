import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { MockDiscordUI } from "@/components/MockDiscordUI"
import { AnimatedList } from "@/components/magicui/animated-list"
import { DiscordMessage } from "@/components/DiscordMessage"

export const DemoSection = () => {
  return (
    <section className="relative bg-brand-25 pb-4">
      <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
      <div className="relative mx-auto">
        <MaxWidthWrapper className="relative">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <MockDiscordUI>
              <AnimatedList>
                <DiscordMessage
                  username="NotificationZ"
                  timestamp="Today at 12:00 PM "
                  badgeText="SignUp"
                  badgeColor="#43b581"
                  title="🥳 New user signed up"
                  content={{
                    name: "Sebastian Mihalache",
                    email: "seb.mih@gmail.com",
                  }}
                />
                <DiscordMessage
                  username="NotificationZ"
                  timestamp="Today at 12:05 PM"
                  badgeText="Revenue"
                  badgeColor="#faa61a"
                  title="💰 Payment Successful"
                  content={{
                    amount: "$100.00",
                    email: "chris.mih@gmail.com",
                    plan: "PRO",
                  }}
                />
                <DiscordMessage
                  username="NotificationZ"
                  timestamp="Today at 14:24 PM"
                  badgeText="Milestone"
                  badgeColor="#5a65f2"
                  title="🚀 Revenue Milestone Achieved"
                  content={{
                    recurringRevenue: "$520.00",
                    growth: "+50%",
                  }}
                />
              </AnimatedList>
            </MockDiscordUI>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}
