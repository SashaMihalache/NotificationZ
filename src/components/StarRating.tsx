import { Star } from "lucide-react"

export const StarRating = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-5 text-brand-600 fill-brand-600" />
      ))}
    </div>
  )
}
