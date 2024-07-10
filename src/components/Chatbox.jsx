import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import { useDropzone } from 'react-dropzone';



const Chatbox = ( { onResponse }) => {
    const [text, setText] = useState('');
    // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    // const [attachments, setAttachments] = useState([]);

    // const onEmojiClick = (emoji) => {
    //     setText(text + emoji.native);
    //   };
    // const { getRootProps, getInputProps } = useDropzone({ onDrop });
    
      // const onDrop = (acceptedFiles) => {
      //   setAttachments([...attachments, ...acceptedFiles]);
      // };
  
      const processMessage = () => {         
        event.preventDefault();
        if(text.length >= 1){
          const addMessage ={ id: 100, text: text, sender: 'other' };
          onResponse(addMessage);
          setText('');
        }
      };

  return (
    <div className='mt-10 text-center'>


       <form onSubmit={processMessage} className="mt-auto">
            <textarea
              className="border p-5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg w-9/12"
              rows="5"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Your text..">
            </textarea>
            <button
            className="p-4 absolute bg-blue-500 text-white rounded" type="submit">
              Send
            </button>
        </form>
  </div>
  )
}

export default Chatbox