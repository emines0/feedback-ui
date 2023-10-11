import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

const FeedbackList = ({ feedback, handleDelete }) => {
   if (!feedback || feedback.length === 0) {
      return <p>No Feedback Yet</p>
   }
   return (
      <div>
         <div className='feedback-list'>
            {feedback.map((item) => (
               <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
         </div>
      </div>
   )
}

export default FeedbackList
