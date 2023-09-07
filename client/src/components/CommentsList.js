import React from 'react'

const CommentsList = ({comments}) => {
  return (
    <>
        <h3 className='sm:text-2xl text-xl font-bold my-6 text-gray-900'>
            Comments : 
        </h3> 
        {comments.map((comment, index) => (
            <div key={index}>
                <h5 className='text-xl font-bold'>{comment.username}</h5>
                <p className='mt-1 mb-4'>{comment.text}</p>
            </div>
        ))
        }
    </>
  )
}

export default CommentsList
