import { useShopQuery, CacheLong, gql, Seo, Link } from "@shopify/hydrogen"; 
import { Suspense } from "react";
import CartBubble from "./CartBubble.client";
import { useState } from "react";




export default function Header({children}) {

    

    const data = useShopQuery({ 
        query: SHOP_QUERY, 
        cache: CacheLong(), 
        preload: true,
        }); 
    
        const { data: { shop }, } = data; 

    
      //console.log("data: ", data); 




      

  return (

<>

        <Seo 
            type="defaultSeo"
            data={{
                title: shop.name,
                description: shop.description
            }}
        />

    <header>
    <div className='fixed w-full text-black flex justify-between p-4 items-center'>


        <div className="text-2xl font-bold text-center uppercase">
            <Link to="/" className=" font-bold logo min-w-[33.33%]">
                    {shop.name}
            </Link>
        </div>

        <nav>

        


            <ul className="hidden md:flex gap-8 p-6 uppercase">
                <li>Home</li>
                <li>Jsp</li>
                <li>Jsp encore</li>
            </ul>



        </nav>


    </div>

    </header>


    <main> 
            <Suspense>{children}</Suspense>
        </main> 



</>
  )
}


const SHOP_QUERY = gql` 
query ShopInfo { 
    shop { 
        name 
        description 
    } 
    } 
`;
