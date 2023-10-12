import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
   const { feedback } = useContext(FeedbackContext)

   if (!feedback || feedback.length === 0) {
      return <p>No Feedback Yet</p>
   }
   return (
      <div>
         <AnimatePresence>
            <div className='feedback-list'>
               {feedback.map((item) => (
                  <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                     <FeedbackItem key={item.id} item={item} />
                  </motion.div>
               ))}
            </div>
         </AnimatePresence>
      </div>
   )
   // return (
   //    <div>
   //       <div className='feedback-list'>
   //          {feedback.map((item) => (
   //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
   //          ))}
   //       </div>
   //    </div>
   // )
}

export default FeedbackList
