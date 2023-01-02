import { motion } from 'framer-motion';

export default function CollectionCards() {
  return (

    <div className="bg-white my-16 sm:mt-0">
      <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-5">
          Learn more about our <span className="decoration-clone text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Product</span>
        </h2>
        <p className="max-w-2xl text-center text-xl text-gray-500 lg:mx-auto pb-12">
          There are many ways to learn, some are better than others.
        </p>
        
        



                                        
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          
          
          <motion.div
          className="box"
          whileHover={{ scale: [null, 1.01, 1.01] }}
          transition={{ duration: 0.3 }}
          >
            <div className="items-center w-full h-full p-8 rounded-3xl shadow-2xl text-white bg-gradient-to-br from-yellow-300  to-pink-500"> 
              <div className="relative h-48 my-24 px-10">
                <img
                  src="/Images/Boule.png"
                  alt="Sample alt text"
                  layout="fill"
                  className="w-60"
                />
              </div>
              
              <h3 className="font-bold text-3xl">
                Self-Paced Lectures
              </h3>
              <p className="py-5">
                You have a busy life, we undestand that and believe in learning asynchronous. Easily access the course anytime you want to learn.
              </p>
            </div>
          </motion.div>

          


          <motion.div
          className="box"
          whileHover={{ scale: [null, 1.01, 1.01] }}
          transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full p-8 rounded-3xl shadow-2xl text-white bg-gradient-to-br from-pink-400 to-blue-400">
              <div className="relative h-48 my-24 px-10">
                <img
                  src="/Images/Cube.png"
                  alt="Hero Image"
                  layout="fill"
                  className="w-56"
                />
              </div>
              
              <h3 className="font-bold text-3xl">Jam-Packed with Content</h3>
              <p className="py-5">
                Next.js, GraphQL, Shopify Storefront API, Tailwind CSS, Vercel, React Hooks and so much more!
              </p>
            </div>
          </motion.div>


          <motion.div
          className="box"
          whileHover={{ scale: [null, 1.01, 1.01] }}
          transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full p-8 rounded-3xl shadow-2xl text-white bg-gradient-to-br from-green-400 to-blue-400">
              <div className="relative h-48 my-24 px-6">
                <img
                  src="/Images/Triangle.png"
                  alt="Sample alt text"
                  layout="fill"
                  className="w-80"
                />
              </div>
              <h3 className="font-bold text-3xl">
                Action Based
              </h3>
              <p className="py-5">
                This course is designed to get your started in as little time as possible. There are no Uhhs or Hmms. All straight to the point.
              </p>
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  )
}