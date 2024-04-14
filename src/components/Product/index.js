import './index.css' // Import CSS for styling

const Product = ({image, name, offerPrice, realPrice, discount, addToBag}) => (
  <div className="product">
    <div className="product-image">
      <img src={image} alt={name} />
    </div>
    <div className="product-details">
      <h3 className="product-name">{name}</h3>
      <div className="price">
        <span className="offer-price">₹{offerPrice}</span>
        <span className="real-price">₹{realPrice}</span>
        <span className="discount">{discount}% off</span>
      </div>
      <button className="add-to-bag" type="button" onClick={addToBag}>
        Add to Bag
      </button>
    </div>
  </div>
)

export default Product
