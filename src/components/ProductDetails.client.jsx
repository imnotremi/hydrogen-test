import { 
  ProductOptionsProvider,
  useProductOptions,
  Image,
  ProductPrice,
  AddToCartButton
} from '@shopify/hydrogen'
import { useState } from 'react';

export default function ProductDetails( { product } ) {

  return (
    <ProductOptionsProvider data={product}>
    <div className='grid lg:grid-cols-2 justify-between items-center'>
      <div className='p-[4rem]'>
        <Image data={product.media.nodes[0].image} className="rounded-3xl w-fit" alt={product.media.nodes[0].image.altText}/>
      </div>
      <div className='items-center'>
        <ProductForm product={product}/>
      </div>
    </div>
    </ProductOptionsProvider>
  )
}


function ProductForm( { product } ) {

    const { options, selectedVariant, selectedOptions, setSelectedOption } = useProductOptions();

    const isOutOfStock = !selectedVariant?.availableForSale || false;



    return (
      <div className='drop-shadow-xl bg-white rounded-xl p-10 w-7/12'>
        <h1 className='font-bold text-3xl'>{product.title}</h1>
        <ProductPrice 
          className="font-light text-lg pb-3"  
          data={product}
          variantId={selectedVariant.id}
        />

        <div className="product-option">
          {options.map(({ name, values }) => {
            if (values.length === 1) {
              return null;
            }
            return (
              <div key={name} className="product-option-group sm:grid-cols-2 flex items-center gap-3">

                <legend className="product-option-name font-bold text-lg py-3 w-12">
                  {name}
                </legend>

                {values.map((value) => {
                const id = `option-${name}-${value}`;
                const checked = selectedOptions[name] === value;

                return (
                  <div key={id} className="product-option-value text-left">
                    <div
                      type="button"
                      checked={checked}
                      name={name}
                      value={value}
                      id={id}
                      className=""
                    />
                    <label
                      htmlFor={id}
                      className={checked ? "bg-slate-500 rounded-full p-2 cursor-pointer" : "bg-slate-200 rounded-full p-2 cursor-pointer"}
                      onClick={() => setSelectedOption(name, value)}
                    >
                      {value}
                    </label>
                  </div>
                );
              })}

              </div>
            )
          })}
        </div>

        <AddToCartButton disabled={isOutOfStock} className='add-to-cart font-bold text-md p-2 rounded-3xl mt-3 bg-slate-300 hover:bg-slate-400'>
          {isOutOfStock ? 'Out of stock' : 'Add to cart'}
        </AddToCartButton>

      </div>

    )
}




/* SAVE */



  // {values.map((value) => {
                    
  //   const id = `option-${name}-${value}`;
  //   const checked = setSelectedOption[name] === value;

  //   const [bgSelected, setBgSelected] = useState(false);

  //   const handleClick = () => {
  //       setBgSelected(!bgSelected);
  //   }

  //   const handleSelected = () => {
  //     setSelectedOption(name, value);
  //     if (bgSelected === true) {
  //       setBgSelected(false);
  //       handleClick()
  //     } else {
  //       setBgSelected(true);
  //       handleClick()
  //      }
      
  //   }



  //   return (
  //     <div key={id} className="product-option-value text-left">
  //       <div 
  //         type="button" 
  //         checked={checked}
  //         name={name}
  //         value={value}
  //         id={id}
  //       // onChange={() =>setSelectedOption(name, value)}
  //         className=""
  //       />
  //       <label 
  //         htmlFor={id}
  //         //onClick={handleClick}
  //         className={bgSelected ? "bg-blue-800" : "bg-blue-200"}
  //         onClick={handleSelected}

  //       >{value}</label>


  //     </div>
  //   )
  // })}

  // </div>
  // )
  // })}
  // </div>

  // <AddToCartButton disabled={isOutOfStock} className='add-to-cart font-bold text-md p-2 rounded-3xl mt-3 bg-slate-300 hover:bg-slate-400'>
  // {isOutOfStock ? 'Out of stock' : 'Add to cart'}
  // </AddToCartButton>

  // </div>

  // )
  // }

