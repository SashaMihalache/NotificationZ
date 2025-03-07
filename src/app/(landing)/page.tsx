import { Check, Star } from "lucide-react"
import { Heading } from "@/components/Heading"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { ShinyButton } from "@/components/ShinyButton"
import { MockDiscordUI } from "@/components/MockDiscordUI"
import {
  AnimatedList,
  AnimatedListItem,
} from "@/components/magicui/animated-list"
import { DiscordMessage } from "@/components/DiscordMessage"
import Image from "next/image"
import { BentoGrid } from "@/components/BentoGrid"
import { Icons } from "@/components/Icons"

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper>
          <div className="reative mx-auto text-center flex flex-col items-center gap-10">
            <div className="">
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              <i>NotificationZ</i> is the easises way to monitor your SaaS. Get
              instant notifications for{" "}
              <span className="font-semibold">
                sales, new users, or any other event
              </span>{" "}
              sent directly to your Discord.
            </p>

            <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Real-time Discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new users or any other event",
              ].map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex gap-1.5 items-center text-left"
                  >
                    <Check className="size-5 shrink-0 text-brand-700" />
                    {item}
                  </li>
                )
              })}
            </ul>

            <div className="w-full max-w-80">
              <ShinyButton href="/sign-up">Start for free Today</ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

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
                    timestamp="Today at 12:05lkijihugytfrdeswaq    PM "
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
                    timestamp="Today at 14:24 PM "
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

      <section className="relative py-24 sm:py-32 bg-brand-25">
        <BentoGrid />
      </section>

      <section className="relative py-24 sm:py-32 bg-white">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Real-World Experiences
            </h2>
            <Heading className="text-center">What Our Customers Say</Heading>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
              </div>

              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                NotificationZ has been a game changer for our team. We are now
                able to monitor our SaaS in real-time and react to critical
                events instantly. The Discord integration is seamless and the
                notifications are delivered in a timely manner.
              </p>

              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                <Image
                  src="/user-2.png"
                  className="rounded-full object-cover"
                  alt="Michaela Larson"
                  width={48}
                  height={48}
                />

                <div className="flex flex-col items-center sm:items-start">
                  <p className="font-semibold flex items-center">
                    Michaela Larson
                    <Icons.verificationBadge className="size-4 inline-block  ml-1.5" />
                  </p>
                  <p className="text-sm text-gray-600">@michaela_larson</p>
                </div>
              </div>
            </div>

            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
                <Star className="size-5 text-brand-600 fill-brand-600" />
              </div>

              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                I have been using NotificationZ for a few months now and I am
                very happy with the results. The product is easy to use and the
                notifications are delivered in real-time. I would recommend
                NotificationZ to any SaaS owner looking to monitor their
                business.
              </p>

              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                <Image
                  src="/user-1.png"
                  className="rounded-full object-cover"
                  alt="Albertho Mihalache"
                  width={48}
                  height={48}
                />

                <div className="flex flex-col items-center sm:items-start">
                  <p className="font-semibold flex items-center">
                    Albertho Mihalache
                    <Icons.verificationBadge className="size-4 inline-block  ml-1.5" />
                  </p>
                  <p className="text-sm text-gray-600">@albertho</p>
                </div>
              </div>
            </div>
          </div>
          <ShinyButton
            href="/sign-up"
            className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Start For Free Today
          </ShinyButton>
        </MaxWidthWrapper>
      </section>
    </>
  )
}

export default Page
