import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../Data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
   const [feedback, setFeedback] = useState(FeedbackData)
   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
   })

   // Delete Feedback
   const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delte?')) {
         setFeedback(feedback.filter((item) => item.id !== id))
      }
   }

   // Add Feedback
   const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
   }

   // Set Feedback item to be updated
   const editFeedback = (item) => {
      setFeedbackEdit({
         item,
         edit: true
      })
   }

   // Update Feedback item
   const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => (item.id === id ? { ...updItem } : item)))
   }

   return (
      <FeedbackContext.Provider
         value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
         }}>
         {children}
      </FeedbackContext.Provider>
   )
}

export default FeedbackContext
