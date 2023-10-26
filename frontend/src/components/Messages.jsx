import React from 'react'

const Messages = ({ messages }) =>
  <>
    {messages.errors && messages.errors.map((el,i) => 
      <div key={i}><p className="text-xs italic text-red-500 mb-4">{el.msg}</p></div>
    )}

    {messages.success && messages.success.map((el,i) => 
      <div key={i}><p className="text-xs italic text-green-500 mb-4">{el.msg}</p></div>
    )}
    
    {messages.info
      ? messages.info.map((el,i) =>
        <div key={i}><p className="text-xs italic text-blue-500 mb-4">{el.msg}</p></div>
      )
      : null
    }
  </>

export default Messages