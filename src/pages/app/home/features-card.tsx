interface FeaturesCardProps {
  icon: string
  title: string
  description: string
  image: string
}

export function FeaturesCard({ icon, title, description, image }: FeaturesCardProps ) {
  return (
    <div className="flex items-center justify-between rounded-lg shadow-card min-h-28 bg-white overflow-hidden md:min-h-31 lg:max-w-90 flex-1 lg:flex-col">
      <div className="flex items-center w-full pl-4 py-5 pr-3 gap-x-2 lg:flex-col lg:gap-y-9 lg:pb-8">
        <div className="min-w-1/5 flex justify-center ">
          <img src={icon} className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
        </div>
        <div className="flex flex-col gap-y-2 lg:gap-y-4 flex-1">
          <h2 className="text-subtitle font-semibold text-center md:text-xl">{title}</h2>
          <p className="text-description text-center text-sm md:text-base">{description}</p>
        </div>
      </div>

      <img src={image} className="hidden lg:flex w-full h-50 object-cover" />
    </div>
  )
}