

const Chatwindow = (  { messages } ) => {


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-1/2 h-3/4 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 p-3 rounded ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white self-end text-right '
                : 'bg-gray-700 text-white self-start text-left'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
    </div>

  )
}

export default Chatwindow