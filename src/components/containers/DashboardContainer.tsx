import { ReactNode } from "react"
import { Button } from "../ui/button"
import { ArrowLeft } from "lucide-react"
import { Heading } from "../Heading"

interface DashboardProps {
  title: string
  children?: ReactNode
  hideBackButton?: boolean
  cta?: ReactNode
}

export const DashboardContainer = ({
  title,
  children,
  hideBackButton,
  cta,
}: DashboardProps) => {
  return (
    <section className="flex flex-1 flex-col h-full w-full">
      <div className="p-6 sm:p-8 flex justify-between border-b">
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-8">
          {hideBackButton ? null : (
            <Button className="w-fit bg-white" variant={"outline"}>
              <ArrowLeft className="size-4" />
            </Button>
          )}

          <Heading> {title}</Heading>

          {cta ? <div>{cta}</div> : null}
        </div>
      </div>

      <div className="flex-1 p-6 sm:p-8 flex flex-col overflow-y-auto">
        {children}
      </div>
    </section>
  )
}
