import xx99mark1Mobile from '../../../assets/image-xx99-mark-one-headphones-product-details-mobile.jpg'
import xx99mark1Tablet from '../../../assets/image-xx99-mark-one-headphones-product-details-tablet.jpg'
import xx99mark1Desktop from '../../../assets/image-xx99-mark-one-headphones-product-details-desktop.jpg'

export default function OtherProducts() {
  return (
    <div className='flex flex-col gap-8 items-center mb-14'>
        <img src={xx99mark1Desktop} alt="mark1 headphones" className='rounded-lg sm:min-w-[220px]' />
        <h4 className='font-bold text-2xl tracking-[1.7px] text-center'>XX99 MARK I</h4>
        <button className='bg-orange text-white font-bold text-[13px] uppercase tracking-[1px] py-[15px] px-8 hover:bg-orange-hover'>see product</button>
    </div>
  )
}
