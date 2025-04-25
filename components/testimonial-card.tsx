import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  company: string
  quote: string
  rating: number
  imageSrc: string
}

export default function TestimonialCard({ name, company, quote, rating, imageSrc }: TestimonialCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:translate-y-[-5px]">
      <div className="mb-4 flex items-center gap-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <div className="mb-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <blockquote className="text-gray-600">
        <p>"{quote}"</p>
      </blockquote>
    </div>
  )
}
