import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ item }) => {
   // eslint-disable-next-line no-unused-vars
   const [rating, setRating] = useState(item.rating)
   // eslint-disable-next-line no-unused-vars
   const [text, setText] = useState(item.text)
   const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

   return (
      <Card>
         <div className='num-display'>{rating}</div>
         <button onClick={() => deleteFeedback(item.id)} className='close'>
            <FaTimes color='purple' />
         </button>
         <button onClick={() => editFeedback(item)} className='edit'>
            <FaEdit color='purple' />
         </button>
         <div className='text-display'>{text}</div>
      </Card>
   )
}

Card.propTypes = {
   item: PropTypes.array
}

export default FeedbackItem
