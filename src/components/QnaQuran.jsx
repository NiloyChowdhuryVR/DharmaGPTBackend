import React, { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/Container";

const QnAQuran = () => {
  const [formvalue,setFormvalue] = useState({question : ""});

  //Getting The Output Fields
  const textQs = document.getElementById('textQs');
  const textAns = document.getElementById('textAns');
  const loader = document.querySelector('.loader');
  const firstQsHeader = document.querySelector('.firstQsHeader');

  //Handelling Input onChange Events
  const handleInput = (e)=>{
    const {name,value} = e.target;
    setFormvalue({...formvalue,[name]:value});
  }

  String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}


  const submitQs = async (e)=>{
    
    e.preventDefault();
    loader.style.display = 'flex';
    firstQsHeader.style.display = 'none';
    console.log(formvalue.question);
    try{
      const response = await fetch('https://dharmaback.onrender.com/quran',{
      method: 'POST',
      body:JSON.stringify(formvalue),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.text();

    const finalData = data.replaceAll("**","<br/><br/>");

    loader.style.display = 'none';

    textQs.innerHTML = "Question : " + formvalue.question;
    textQs.className = "p-2";



    //Check if the fetched data has any value or not

    if(data){
    textAns.innerHTML = "Answer => " + finalData;
  }
  else{
      textAns.innerHTML = "<h2>Sorry, We couldn't Find any specific answer for your question in Quran. Please try searching another question</h2>";

    }

    }
    catch(e){
      console.log(e);
    }
  }

  


  return (
    <>
      <div className="qnaBox">
        <div className="firstQsHeader text-center">
          <h2>Enter A Question to Get Started!</h2>
        </div>
        <div className="loader">
        <Spinner animation="border" variant="warning" className='loading'/>
        <h5 className='text-center'>Please Wait while we search for the Answer...</h5>
        </div>
        <div className="answerBox">
        <br /><br /><br />
        <Container >
        <div className="questionBlock text-center"><h5 id='textQs'> </h5>
        </div>
        <div className="answerBlock text-center" id='textAns'>
        </div>
          </Container>
        </div>
        <div className="questionInput">
        <form method='POST' onSubmit={submitQs}>
          <input type="text" name='question' className='inputField' placeholder='Enter The Question you want to ask!' onChange={handleInput} value={formvalue.question}/>
          <input type="submit" className='submitButton' value="Find" />
        </form>
        </div>
      </div>
    </>
  )
}

export default QnAQuran
