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
    <div className="fixed bottom-0 w-full p-4 bg-gray-100 border-t absolute left-0">
    <div className="flex items-center">
      <button
        className="p-2 focus:outline-none"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      >
        😊
      </button>
      {showEmojiPicker && (
        <Picker
          set="apple"
          onSelect={onEmojiClick}
          style={{ position: 'absolute', bottom: '60px', left: '20px' }}
        />
      )}
      <textarea
        className="flex-grow p-2 ml-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="1"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Napisz wiadomość..."
      ></textarea>
      <div {...getRootProps()} className="p-2 focus:outline-none cursor-pointer">
        <input {...getInputProps()} />
        📎
      </div>
      <button className="p-2 ml-2 bg-blue-500 text-white rounded focus:outline-none">
        Wyślij
      </button>
    </div>
    {attachments.length > 0 && (
      <div className="mt-2">
        {attachments.map((file, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-gray-200 rounded mt-1">
            <span>{file.name}</span>
            <button
              className="text-red-500"
              onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default Chatbox