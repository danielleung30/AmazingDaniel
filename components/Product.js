import ProductDefinition from './ProductDefinition'
const Product = (props) => {
  return (
    <div className="product">
      <div className="product__information">
        <h2 className="product__title">{props.name}</h2>
        <p className="product__description">{props.description}</p>
        <ProductDefinition product={props} />
      </div>
      <img src={props.image} alt="product image" className="product__image" />
    </div>
  )
}
export default Product;