import { Heading } from "@/components/Heading"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"
import { ShinyButton } from "@/components/ShinyButton"
import { TestimonialCard } from "@/components/TestimonialCard"

const testimonials = [
  {
    text: "NotificationZ has been a game changer for our team. We are now able to monitor our SaaS in real-time and react to critical events instantly. The Discord integration is seamless and the notifications are delivered in a timely manner.",
    author: {
      name: "Michaela Larson",
      handle: "@michaela_larson",
      image: "/user-2.png",
    },
    className: "rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]",
  },
  {
    text: "I have been using NotificationZ for a few months now and I am very happy with the results. The product is easy to use and the notifications are delivered in real-time. I would recommend NotificationZ to any SaaS owner looking to monitor their business.",
    author: {
      name: "Albertho Mihalache",
      handle: "@albertho",
      image: "/user-1.png",
    },
    className: "rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]",
  },
]

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
        <div>
          <h2 className="text-center text-base/7 font-semibold text-brand-600">
            Real-World Experiences
          </h2>
          <Heading className="text-center">What Our Customers Say</Heading>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>

        <ShinyButton
          href="/sign-up"
          className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          Start For Free Today
        </ShinyButton>
      </MaxWidthWrapper>
    </section>
  )
}
