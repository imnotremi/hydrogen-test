import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen"; 
import ProductCard from "../components/ProductGridItem.server";


export default function HomeCatalog() {

    const data = useShopQuery({ 
        query: QUERY, 
        cache: CacheLong(), 
        preload: true,
        }); 

        const { data: { products:{nodes} }, } = data; 

  return (
    <div>

        <h1 className="font-bold text-2xl text-center pt-5">Our product</h1>

        <div className="w-auto items-center">
            <div className=" grid sm:grid-cols-2 gap-10 grid-rows-2 lg:grid-cols-3 container place-self-center">
                {nodes.map((product) => (
                    <div className="place-self-center">
                        <ProductCard product={product}></ProductCard>
                    </div>
                ))} 
            </div>
        </div>
    </div>
  )
}



const QUERY = gql`
query products {
        products(first:6) {
        nodes{
            title
            handle
            featuredImage{
                url
                altText
                height
                width
            }
            variants(first: 1){
            nodes {
                priceV2 {
                    amount
                    currencyCode
                }
                compareAtPriceV2 {
                    amount
                    currencyCode
                }
            }
            }
        }
        }
    }
`;