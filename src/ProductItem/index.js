import './index.css'

const ProductItem = ({products}) => {
    // console.log(products)
    return (
        <div className='product-card-container'>
            <img src={products.img_url} alt={products.title} className='product-img'/>
                <h2 className='product-title'>{products.title}</h2>
                <h3 className='product-price'>Rs.{products.price}/-</h3>
            <button type='submit' className='product-btn'>Buy Now</button>
        </div>
    )
}

export default ProductItem