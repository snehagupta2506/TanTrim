import Product from '../Product' // Import the Product component
import './index.css' // Import the CSS file for styling

const ProductList = () => {
  // Dummy data for products
  const products = [
    {
      id: 1,
      name: 'Retro bag',
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja3BhY2tzfGVufDB8fDB8fHww',
      offerPrice: 500,
      realPrice: 600,
      discount: 20,
    },
    {
      id: 2,
      name: 'wildcarft bag',
      image:
        'https://plus.unsplash.com/premium_photo-1664110691115-790e20a41744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja3BhY2tzfGVufDB8fDB8fHww',
      offerPrice: 700,
      realPrice: 800,
      discount: 15,
    },
    {
      id: 3,
      name: 'Flipkart bag',
      image:
        'https://media.istockphoto.com/id/1617878544/photo/black-school-bag-isolated-on-a-white-background-back-to-school-concept.webp?b=1&s=170667a&w=0&k=20&c=4DrNbR6k2RgvezZH2hh8ApKcq1B81E3ooaJYFjQu_xc=',
      offerPrice: 900,
      realPrice: 1000,
      discount: 10,
    },
    {
      id: 4,
      name: 'Woodland',
      image:
        'https://media.istockphoto.com/id/924367952/photo/black-backpack-standing-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=QyltfT_nBz3k1nW8to5MzSHdzgWjImsnpR6pgjwCxH8=',
      offerPrice: 900,
      realPrice: 1000,
      discount: 10,
    },
    {
      id: 5,
      name: 'Woodland bag',
      image:
        'https://media.istockphoto.com/id/1254949422/photo/school-bag-backpack-with-supplies-for-school.webp?b=1&s=170667a&w=0&k=20&c=AjLF8NmdzqYroLO5HDnrDkbomt0TkWK-HVhZ4orXwm0=',
      offerPrice: 900,
      realPrice: 1000,
      discount: 10,
    },
    {
      id: 6,
      name: 'Fasttrack',
      image:
        'https://images.unsplash.com/photo-1621624959365-071359461b94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja3BhY2tzfGVufDB8fDB8fHww',
      offerPrice: 900,
      realPrice: 1000,
      discount: 10,
    },
    {
      id: 7,
      name: 'Woodland',
      image:
        'https://media.istockphoto.com/id/924367952/photo/black-backpack-standing-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=QyltfT_nBz3k1nW8to5MzSHdzgWjImsnpR6pgjwCxH8=',
      offerPrice: 900,
      realPrice: 1000,
      discount: 10,
    },
    // Add more products as needed
  ]

  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          image={product.image}
          offerPrice={product.offerPrice}
          realPrice={product.realPrice}
          discount={product.discount}
        />
      ))}
    </div>
  )
}

export default ProductList
