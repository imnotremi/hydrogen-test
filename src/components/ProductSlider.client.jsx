import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Images from './Images.js'

export default function ProductSlider() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

  return (
    <div className='relative mt-10 pb-10 mx-32'>

        <motion.div name="carousel" ref={carousel} whileTap={{cursor: "grabbing"}} className='overflow-hidden cursor-grab bg-deep-orange-200'>
            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} name="inner-carousel" className='flex bg-gray-200'>
                {Images.map(image => {
                    return (
                        <motion.div name="item" key={image} className='item sm:min-w-[20rem] min-w-[10rem] p-10'>
                            <img src={image} alt="test" className='w-full h-full rounded-3xl pointer-events-none'/>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>

    </div>
  )
}

