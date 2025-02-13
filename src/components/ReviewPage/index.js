import {useEffect, useState} from 'react'
import './index.css'

const ReviewPage = () => {
  const [reviews, setReviews] = useState([])

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        'https://admin.tomedes.com/api/v1/get-reviews?page=1',
      )
      const data = await response.json()
      setReviews(data.data)
    } catch (error) {
      console.error('Error fetching reviews:', error)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  return (
    <div className="review-page">
      <h1>What our customers say</h1>
      <div className="review-container">
        {reviews.map(review => (
          <div key={review.ID} className="review">
            <p className="text">{review.Reviews}</p>
            <div className="box">
              <h3>{review.Name}</h3>
            </div>

            <p>Rating:{review.rating}*</p>

            {/* You can include other review details as needed */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewPage
