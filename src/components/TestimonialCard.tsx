import Image from "next/image"
import { Icons } from "@/components/Icons"
import { StarRating } from "@/components/StarRating"

type TestimonialCardProps = {
  text: string
  author: {
    name: string
    handle: string
    image: string
  }
  className?: string
}

export const TestimonialCard = ({
  text,
  author,
  className = "",
}: TestimonialCardProps) => {
  return (
    <div
      className={`flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 ${className}`}
    >
      <StarRating className="mb-2 justify-center lg:justify-start" />
      <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
        {text}
      </p>
      <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
        <Image
          src={author.image}
          className="rounded-full object-cover"
          alt={author.name}
          width={48}
          height={48}
        />
        <div className="flex flex-col items-center sm:items-start">
          <p className="font-semibold flex items-center">
            {author.name}
            <Icons.verificationBadge className="size-4 inline-block ml-1.5" />
          </p>
          <p className="text-sm text-gray-600">{author.handle}</p>
        </div>
      </div>
    </div>
  )
}
