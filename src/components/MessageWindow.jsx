

const Chatwindow = (  { messages } ) => {


  return (
    <div className="flex items-center justify-center">
  <div className="flex flex-col overflow-y-auto p-2 chat">
    {messages.map((message) => (
      <div
        key={message.id}
        className={`flex mb-2 p-3 rounded items-start ${
          message.sender === 'user'
            ? 'bg-blue-500 text-white self-end text-right flex-row-reverse'
            : 'bg-gray-700 text-white self-start text-left'
        }`}
      >
        <img
          className="h-10 w-10 rounded-full m-2"
          src={message.sender === 'user' ? 'src/images/rex.png' : 'src/images/rex.png'}
          alt=""
        />
        <div className="flex flex-col">
          <div>{message.text}</div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Chatwindow