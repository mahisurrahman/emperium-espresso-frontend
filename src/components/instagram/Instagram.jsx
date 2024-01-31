import imageOne from '../../../public/cups/Rectangle 10.png'
import imageTwo from '../../../public/cups/Rectangle 11.png'
import imageThree from '../../../public/cups/Rectangle 12.png'
import imageFour from '../../../public/cups/Rectangle 13.png'
import imageFive from '../../../public/cups/Rectangle 14.png'
import imageSix from '../../../public/cups/Rectangle 15.png'
import imageSeven from '../../../public/cups/Rectangle 16.png'
import imageEight from '../../../public/cups/Rectangle 9.png'

const Instagram = () => {
  return (
    <div className="py-10 md:py-20 px-4 md:px-28">
      <div className="text-center">
        <h1 className="text-[#1B1A1A] text-lg font-raleway-font">
          --- Follow Us Now ---
        </h1>
        <h1 className="text-[#331A15] text-5xl font-bold font-rancho-font drop-shadow-xl drop-shadow-black">
          Follow on Instagram
        </h1>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-4 gap-2">
            <img src={imageOne} className='w-full h-full rounded-xl' alt="" />
            <img src={imageTwo} className='w-full h-full rounded-xl' alt="" />
            <img src={imageThree} className='w-full h-full rounded-xl' alt="" />
            <img src={imageFour} className='w-full h-full rounded-xl' alt="" />
            <img src={imageFive} className='w-full h-full rounded-xl' alt="" />
            <img src={imageSix} className='w-full h-full rounded-xl' alt="" />
            <img src={imageSeven} className='w-full h-full rounded-xl' alt="" />
            <img src={imageEight} className='w-full h-full rounded-xl' alt="" />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
