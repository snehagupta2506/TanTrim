import {useState} from 'react'
import Navbar from '../Navbar' // Import the Navbar component
import ProductList from '../ProductList'
import ReviewPage from '../ReviewPage' // Import the ProductList component
import './index.css' // Import the CSS file for styling

const HomePage = () => {
  const [showReviewPage, setShowReviewPage] = useState(false)

  const toggleReviewPage = () => {
    setShowReviewPage(!showReviewPage)
  }

  return (
    <div className="home-page">
      <Navbar />
      <div className="content">
        <ProductList />
      </div>
      <div>
        <button type="button" onClick={toggleReviewPage}>
          Click me to view what our customers say
        </button>
        {showReviewPage && <ReviewPage />}
      </div>
    </div>
  )
}

export default HomePage
