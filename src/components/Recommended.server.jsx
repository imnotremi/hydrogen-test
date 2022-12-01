import { useShopQuery, gql } from "@shopify/hydrogen"; 
import RecommendedProductCard from "./RecommendedProductCard";



export default function RecommendedSection(current) {
  
  const data = useShopQuery({ 
    query: QUERY, 
    }); 

    const { data: { products:{nodes} }, } = data; 



  return (


      <div className="py-7 px-14">
          <h1 className="font-extrabold text-2xl">Recommended Products</h1>

          <div className="flex items-start">
            {nodes.map(nodes => (
              <div className="px-5">
                <RecommendedProductCard product={nodes} key={nodes.id}></RecommendedProductCard>
              </div>
            ))}
          </div>

      </div>    

  )
}

const QUERY = gql`
  query products {
          products(first:10) {
            nodes{
                title
                handle
                id
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


{/* <div className="flex items-start">
            {nodes.map(nodes => (
              <div className="px-5">
                <RecommendedProductCard product={nodes} key={nodes.id}></RecommendedProductCard>
              </div>
            ))} 
          </div> */}
