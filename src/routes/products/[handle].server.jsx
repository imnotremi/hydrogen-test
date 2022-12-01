import { useShopQuery, gql, CacheLong, useRouteParams, Seo } from "@shopify/hydrogen"
import { Suspense } from "react";
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

            <div className="text-center pb-14">
                <div className="product-description pt-4 " dangerouslySetInnerHTML={{__html: product.descriptionHtml}}></div>
            </div>

            <RecommendedSection current={product.id} product={product}/>
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
