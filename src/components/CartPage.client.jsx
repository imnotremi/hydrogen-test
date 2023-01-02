import {
    useCart,
    CartLineProvider,
    Image,
    useCartLine,
    Money,
    Link,
    CartCost,
    CartLineQuantity,
    CartLineQuantityAdjustButton
} from '@shopify/hydrogen';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

export default function CartPage() {
  return (
    <Suspense>
        <CartTable />
    </Suspense>
  )
}


function CartTable() {
    const { lines, checkoutUrl, status } = useCart();

    if (lines.length === 0) {
        if(status == 'idle') {
            return (
            <div className='w-full h-full'>
                <div className='text-center'>
                    <h1 className='font-bold pt-40 sm:text-3xl'>No items are currently in the cart.</h1>
                </div>
            </div>
            )
        }
    } else {
        return(
        
            
            <>
                <div className='cart-table'>
                    <div>

                        {lines.map(line => {
                            return (
                                <CartLineProvider key={line.id} line={line} className="">
                                    <div className='pt-16'>
                                        <motion.div
                                            className="box"
                                            whileHover={{ scale: [null, 1.01, 1.01] }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <CartLineItem />
                                        </motion.div>
                                    </div>
                                </CartLineProvider>
                            )
                        })}

                        

                    </div>
                </div>

                <div className='lg:p-16 p-5 lg:text-end'>

                    <div className='py-10 text-end'>
                        <div colSpan="2"></div>
                        <div className='font-bold text-xl'>Total:</div>
                        <div className='text-lg'><CartCost withoutTrailingZeros/></div>
                    </div>
                
                    
                    <div className="cart-footer text-center text-lg font-bold pb-10 lg:text-end">
                        <Link to={checkoutUrl} className="checkout-button cursor-pointer px-10 py-4 bg-slate-300 rounded-3xl lg:p-3">Checkout</Link>
                    </div>


                </div>
            </>
            
        
            )
    }
}

function CartLineItem() {

    const { lineId, merchandise, cost } = useCartLine();

    const { image, product, selectedOptions } = merchandise

    return (
        
        <div key={lineId} className="shadow-2xl items-center rounded-3xl lg:grid lg:grid-cols-4 lg:rounded-full ">

        
            <div className='items-center lg:pl-20 lg:py-10 lg:pr-10 w-auto px-5 py-5'>
                <Image className='rounded-3xl lg:overflow-clip' data={image}/>
            </div>


            <div name="Titre+Option+Prix" className='items-center lg:flex lg:grid-flow-col-3 lg:justify-between text-center py-4 lg:p-0'>

                <Link to={`/products/${product.handle}`} className="line-item-product-title font-bold lg:px-3 ">{product.title}</Link>
                
                <div className="line-item-variant items-center text-center py-4 lg:p-0 grid grid-rows-2">
                    {(selectedOptions || []).map(option => (
                    
                        <span className="whitespace-nowrap px-4" key={option.name}>{option.name} : {option.value}  </span>
                    
                    ))}
                </div>

                <Money withoutTrailingZeros data={merchandise.priceV2} className="items-center text-center pb-4 lg:pb-0"/>

            </div>



            <div name="Quantity" className='text-center items-center lg:ml-8'>

                <div className="cart-quantity-selector grid grid-cols-3 bg-slate-100 rounded-3xl mx-16 pt-1">

                    <div className='place-self-end'>
                        <CartLineQuantityAdjustButton adjust='decrease' className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="items-center w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </CartLineQuantityAdjustButton>
                    </div>

                    <div className=''>
                        <CartLineQuantity className=''/>
                    </div>

                    <div className='place-self-start'>
                        <CartLineQuantityAdjustButton adjust='increase' className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="items-center w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </CartLineQuantityAdjustButton>
                    </div>

                </div>

            </div>



            <div className='grid grid-cols-2 lg:pt-5 py-7 justify-between'>

                
                <div className='place-content-end lg:place-content-center flex pr-3 lg:pr-0'>
                    <h1 className='hidden px-2'>Total :</h1>
                    <Money withoutTrailingZeros data={ cost.totalAmount }></Money>
                </div>

                <div className='place-content-start lg:place-content-center pl-10 lg:pl-0'>
                    <CartLineQuantityAdjustButton as="div" className='cart-remove cursor-pointer place-content-center' adjust='remove'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 place-content-center">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        
                    </CartLineQuantityAdjustButton>
                </div>
                
            </div>


        </div>
    )
}