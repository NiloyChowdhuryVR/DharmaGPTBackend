import React, { useState } from "react";
import testImg from "../media/swastikaLogo.png";
import { useParams } from "react-router-dom";

const ChatOne = () => {
  const [formvalue, setFormvalue] = useState({ question: "" });
  const [status,setStatus] = useState("Online");
  const { chatname } = useParams();
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const messageBox = document.querySelector(".messageBox");
  const inputQs = document.querySelector(".inputQs");

  const scrollToBottom = ()=>{
    messageBox.scrollTop = messageBox.scrollHeight;
  }
  
  const handleSubmit = async (e)=>{
    
    e.preventDefault();
    onEnter();
    console.log(formvalue.question);
    try{
      const response = await fetch(`https://dharmaback.onrender.com/chat/${chatname}`,{
      method: 'POST',
      body:JSON.stringify(formvalue),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.text();
    // console.log(data)
    setStatus("Online");
    e.target.reset();
    if (data) {
      let message = document.createElement('div');
      message.classList.add("message","incoming");
      let result = data.replaceAll("\\n","<br/>");
      message.innerHTML = result;
      messageBox.appendChild(message);
    } else {
      let message = document.createElement('div');
      message.classList.add("message","incoming");
      message.innerHTML = "I can't answer you for this question, dear. Here's what you can do - <br/> 1. Try to be more specific with your question <br/> 2. Check for any typing mistake in your question <br/> 3. Ask another question ";
      messageBox.appendChild(message);
    }
    scrollToBottom();
  }catch(e){
        console.log(e);
      }
  
  }



  const onEnter = ()=>{
    let message = document.createElement('div');
    message.classList.add("message","outgoing");

    message.innerHTML = formvalue.question;
    messageBox.appendChild(message);
    scrollToBottom();
    setStatus("Typing...");
    //To Reset the input value
    setFormvalue({...formvalue,question:""});
    // inputQs.value = "";

  }

  return (
    <div className="chatContainer">
      <div className="wrapper">
        <div className="chatHead">
          <div className="chatIcon">
            <img src={testImg} alt="headerImage" />
          </div>
          <div className="chatDetails">
            <h5>{chatname}</h5>
            <p className="typingStatus">{status}</p>
          </div>
        </div>
        <div className="messageBox">
          {/* <div className="incoming message">
            Lorem, ipsum do
          </div>
          <div className="outgoing message">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              aspernatur deleniti neque quisquam modi nisi error explicabo ab
              nostrum doloremque.
          </div> */}
        </div>
        <div className="chatInput">
          <form method="POST" onSubmit={handleSubmit}>
            <input
              type="text"
              value={formvalue.question}
              name="question"
              onChange={handleInput}
              className="inputQs"
            />
            <input type="submit" value="Enter" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatOne;
