import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ item, handleDelete }) => {
   const [rating, setRating] = useState(item.rating)
   const [text, setText] = useState(item.text)

   const handleClick = (id) => {
      console.log(id)
   }
   return (
      <Card>
         <div className='num-display'>{rating}</div>
         <button onClick={() => handleDelete(item.id)} className='close'>
            <FaTimes color='purple' />
         </button>
         <div className='text-display'>{text}</div>
      </Card>
   )
}

export default FeedbackItem
