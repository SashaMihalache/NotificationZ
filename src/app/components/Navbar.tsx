import Link from "next/link"
import { MaxWidthWrapper } from "@/app/components/MaxWidthWrapper"

export const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b boder-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex z-40 font-semibold">
            Home
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
