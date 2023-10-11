import { useState } from 'react'

const FeedbackItem = ({ item }) => {
   const [rating, setRating] = useState(item.rating)
   const [text, setText] = useState(item.text)

   const handleClick = () => {
      setRating(10)
   }
   return (
      <div className='card'>
         <div className='num-display'>{rating}</div>
         <div className='text-display'>{text}</div>
      </div>
   )
}

export default FeedbackItem
