import { Link, Image, Money } from "@shopify/hydrogen"

export default function ProductCard ({product}) {

    const { priceV2: price, compareAtPriceV2: compareAtPrice} = product.variants.nodes[0] || {};

    const isDiscounted = compareAtPrice?.amount > price?.amount;

    return (
        <div className="product-grid-item pt-10 w-auto">

            <Link to={`/products/${product.handle}`} className="image-container">
                <Image alt={product.featuredImage.altText} data={product.featuredImage} className="rounded-3xl"/>
            </Link>

            <div className="product-grid-item-title">
                {product.title}
            </div>

            <Money withoutTrailingZeros data={price}/>
            {isDiscounted && (
                <Money withoutTrailingZeros className="product-compare-at-price" data={compareAtPrice}/>
            )}


        </div>
    )
}