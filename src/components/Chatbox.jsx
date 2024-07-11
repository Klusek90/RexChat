import React, { useState } from 'react';
import { Picker } from 'emoji-mart';
import { useDropzone } from 'react-dropzone';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';



const Chatbox = ( { onResponse }) => {
    const [text, setText] = useState('');

    const modules = {
      toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
      ],
      clipboard: {
        matchVisual: false,
      },
      history: {
        delay: 2000,
        maxStack: 500,
        userOnly: false,
      }
    };

    const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ];
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
    <div className='mt-10 text-center mx-auto w-9/12'>


       {/* <form onSubmit={processMessage} className="mt-auto"> */}

         <ReactQuill theme="snow" modules={modules} value={text} onChange={setText} formats={formats} style={{height:'200px'}}/>
            {/* <textarea
              className="border p-5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg w-9/12"
              rows="5"
              value={text}
              // onChange={(e) => setText(e.target.value)}
              placeholder="Your text..">
            </textarea> */}
            <button
            className="p-1 mt-10 bg-green-500 text-white w-full" type="submit" onClick={processMessage}>
              Send
            </button>
        {/* </form> */}
  </div>
  )
}

export default Chatbox