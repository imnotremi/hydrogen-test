import { useShopQuery, CacheLong, gql, Seo, Link } from "@shopify/hydrogen"; 
import { Suspense } from "react";
import CartBubble from "./CartBubble.client";

export default function Layout({children}) { 

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
                <div className="container flex items-center justify-between py-4">
                    <Link to="/" className="font-bold logo  min-w-[33.33%]">
                    {shop.name}
                    </Link>
                    <ul className="flex items-center justify-around list-none font-nav gap-3 max-w-[33.33%]">
                        <li className="text-slate-600 hover:text-slate-800"><a href="/catalog">Catalog</a></li>
                        <li className="text-slate-600 hover:text-slate-800"><a href="/collections/freestyle">Freestyle</a></li>
                        <li className="text-slate-600 hover:text-slate-800"><a href="#">Link 3</a></li>
                    </ul>
                    <Link to="/cart" className="flex items-center justify-end font-nav gap-3 w-[33.33%] text-slate-600 hover:text-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <CartBubble />
                    </Link>
                </div>
            </header>

            <main> 
                <Suspense>{children}</Suspense>
            </main> 


    </>
); }  

    const SHOP_QUERY = gql` 
    query ShopInfo { 
        shop { 
            name 
            description 
        } 
        } 
    `;