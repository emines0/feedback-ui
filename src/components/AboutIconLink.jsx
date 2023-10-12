import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutIconLink = () => {
   return (
      <div className='about-link'>
         <Link
            to={{
               pathname: '/about'
               // could add
               // search:'?sort=name' - query parameter
               // hash: #hello - hash
            }}>
            <FaQuestion size={30} />
         </Link>
      </div>
   )
}

export default AboutIconLink
