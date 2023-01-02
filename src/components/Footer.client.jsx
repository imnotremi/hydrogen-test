import React from 'react'

export default function Footer() {
  return (
    <div className='mt-10'>

        <div className="text-center pb-5 text-xl font-bold">
            <h1 className="transform transition duration-500 hover:scale-105 ">Suivez nous !</h1>
        </div>

        <div className='flex justify-center text-center'>
            <div className='transform transition duration-500 hover:scale-105 px-5 cursor-pointer'>
                <a href="https://www.twitter.com/" target="_blank"><img className='w-[75px]' src="https://img.icons8.com/fluency/96/null/twitter.png"/></a>
            </div>
            <div className='transform transition duration-500 hover:scale-105 px-5 cursor-pointer'>
            <a href="https://www.facebook.com/" target="_blank"><img className='w-[75px]' src="https://img.icons8.com/fluency/96/null/facebook-new.png"/></a>
            </div>
            <div className='transform transition duration-500 hover:scale-105 px-5 cursor-pointer'>
            <a href="https://www.instagram.com/" target="_blank"> <img className='w-[75px]' src="https://img.icons8.com/fluency/96/null/instagram-new.png"/></a>
            </div>
        </div>



        <div className='flex justify-center text-center text-gray-400 p-10'>
            <div className='px-10 cursor-pointer'>Mention Légale</div>
            <div className='px-10 cursor-pointer'>Politique de confidentialité</div>
            <div className='px-10 cursor-pointer'>Contactez-nous</div>
        </div>


    </div>
  )
}
