import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import { useDropzone } from 'react-dropzone';


const Chatbox = () => {
    const [text, setText] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [attachments, setAttachments] = useState([]);

    const onEmojiClick = (emoji) => {
        setText(text + emoji.native);
      };
    
      const onDrop = (acceptedFiles) => {
        setAttachments([...attachments, ...acceptedFiles]);
      };
    
      const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="fixed bottom-14  left-12 w-10/12 bg-transparent ">
    <div className="flex items-center">
      {/* <button
        className="p-2 focus:outline-none"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      >
        😊
      </button> */}
      {/* {showEmojiPicker && (
        <Picker
          set="apple"
          onSelect={onEmojiClick}
          style={{ position: 'absolute', bottom: '60px', left: '20px' }}
        />
      )} */}
      <textarea
        className="flex-grow border p-10 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Your text.."
      ></textarea>

      <button className="p-2 ml-2 bg-blue-500 text-white rounded focus:outline-none w-[8%] py-10">
        Send
      </button>
    </div>
  </div>
  )
}

export default Chatbox