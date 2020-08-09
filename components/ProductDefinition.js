const ProductDefinition = (props) => {
    return (
      <button className="snipcart-add-item"
        data-item-id={props.id}
        data-item-name={props.name}
        data-item-price={props.price}
        data-item-image={props.pathname}
        data-item-url="/">
        Add to cart ${props.image}
      </button>
    )
  }
  export default ProductDefinition;