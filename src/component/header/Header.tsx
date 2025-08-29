
import Image from 'next/image';
import Gala from '../../assets/galaxix.png'
import Rede from '../../assets/rede.png'
import Explorar from '../../assets/telescopio.png'
import Hamb from '../hamb/hambMenu';

export default function Header() {
  return (
    <>


    <header className="flex justify-center items-center mx-auto text-blue-100 border-b border-blue-100 mt-5 mb-5 ">

      <section className="flex justify-between gap-10 mb-2 sm:gap-10 md:gap-25 lg:gap-40 font-poppins">

        <div className="flex justify-center gap-2 mx-4">
          <h1 className="text-xl font-semibold">Cosmic Explorer</h1>
          <Image src={Gala} alt="Gala" className="w-7 h-7" />
        </div>

        <div className='flex mt-1'>
          <Hamb />
        </div>
        
        <div className='hidden sm:flex sm:gap-5'>
              <div className='flex justify-center gap-2 hover:bg-blue-950 hover:font-semibold rounded-md w-40 p-1 '>
                        <Image src={Rede} alt='' className='w-6 h-6' />
                        <a href='#'className='text-base'>Sistema Solar</a>
              </div>

              <div className='flex justify-center gap-2 hover:bg-blue-950 hover:font-semibold rounded-md w-35 p-1 '>
                        <Image src={Explorar} alt='' className='w-6 h-6' />
                        <a href='#' className='text-base'>Explorar</a>
              </div>      
        </div>
      </section>
    </header>
    </>
    )
}