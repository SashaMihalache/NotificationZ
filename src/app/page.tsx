import { Heading } from "./components/Heading"
import { MaxWidthWrapper } from "./components/MaxWidthWrapper"

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
            ul
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default Page
