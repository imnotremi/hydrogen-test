import { useShopQuery, gql, CacheLong, useRouteParams, Seo } from "@shopify/hydrogen"
import { Suspense } from "react";
import Footer from "../../components/Footer.client";
import Layout from "../../components/Layout.server"
import ProductDetails from "../../components/ProductDetails.client"
import RecommendedSection from "../../components/Recommended.server"


export default function Product() {

    const { handle } = useRouteParams();

    const { data : { product : product } } = useShopQuery({
        query: QUERY,
        cache: CacheLong, 
        variables: {
            handle
        }
    })

    return (
        <Layout >
            <Suspense>
                <Seo type="product" data={product}/>
            </Suspense>
            <div className="container pt-10">  
                <ProductDetails product={product}/>
            </div>

            <div className=" place-content-center pb-14 pt-10 mx-16">
                <h1 className="text-center font-bold text-xl pb-5">Description</h1>
                <div className="transform transition duration-500 hover:scale-105 product-description container p-5 rounded-xl text-center max-w-fit shadow-2xl" dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></div>
            </div>

            <RecommendedSection current={product.id} product={product}/>
        <Footer/>
        </Layout>
    ) 
}

const QUERY = gql`
    query Product($handle: String!) {
    product(handle: $handle) {
        title
        id
        descriptionHtml
        media(first:1) {
        nodes {
            ... on MediaImage {
            id
            image {
                url
                altText
                width
                height
            }
            }
        }
        }
        variants(first: 100) {
        nodes {
            id
            availableForSale
            priceV2{
            amount
            currencyCode
            }
            compareAtPriceV2{
            amount
            currencyCode
            }
            selectedOptions {
            name
            value
            }
        }
        }
    }
    }
`;
