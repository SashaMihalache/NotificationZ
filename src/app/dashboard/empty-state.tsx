import { useMutation, useQueryClient } from "@tanstack/react-query"
import { client } from "../lib/client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreateEventModal } from "@/components/modals/CreateEventModal"

export const EmptyState = () => {
  const queryClient = useQueryClient()

  const { mutate: insertQuickstartCategories, isPending } = useMutation({
    mutationFn: async () => {
      await client.category.insertQuickstartCategories.$post()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-event-categories"] })
    },
  })

  return (
    <Card className="flex flex-col items-center justify-center rounded-2xl flex-1 text-center p-6">
      <h1 className="mt-2 text-xl/8 font-medium tracking-tight text-gray-900">
        No Event Categories Yet.
      </h1>

      <p className="text-sm/6 text-gray-600 max-w-prose mt-2 mb-8">
        Start tracking events by creating your first category.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center spaxe-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          variant={"outline"}
          className="flex items-center space-x-2 w-full sm:auto"
          onClick={() => insertQuickstartCategories()}
          disabled={isPending}
        >
          <span className="size-5">🚀</span>
          <span>
            {isPending ? "Creating..." : "Insert Quickstart Categories"}
          </span>
        </Button>

        <CreateEventModal containerClassName="w-full sm:auto">
          <Button className="flex items-center space-x-2 w-full sm:auto">
            <span className="size-5">🎉</span>
            <span>Add Event Category</span>
          </Button>
        </CreateEventModal>
      </div>
    </Card>
  )
}
