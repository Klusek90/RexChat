

const Chatwindow = (  { messages } ) => {


  return (
 <div className=''>
      <div 
      // className=" bg-transparent p-4 rounded shadow-xl"
      >
       
          {messages.map((message) => (
            <div
              key={message.id}
              // className={`mb-3 p-3 rounded w-[80%] ${
              //   message.sender === 'user' ? 'bg-blue-500 text-right row-end-1' : 'bg-gray-700 text-left row-start-1'
              // }`}
            >
              {message.text}
            </div>
          ))}
        
      </div>
    </div>
  )
}

export default Chatwindow