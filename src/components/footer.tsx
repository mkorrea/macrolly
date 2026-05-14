import FooterBg from '@/assets/footer-bg.png'

export function Footer() {
  return (
    <div className='relative h-60 z-0 -mt-40'>
      <img src={FooterBg} className='h-full w-full' />

      <div className='absolute flex justify-center w-full bottom-6 z-40'>
        <h1 className="text-xl bg-linear-to-r from-secondary to-primary text-transparent bg-clip-text w-fit font-logo tracking-wider drop-shadow-logo font-medium lg:text-2xl  ">
          macrolly
        </h1>
      </div>
    </div>
  )
}