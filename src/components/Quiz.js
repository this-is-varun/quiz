import React from 'react'
import { useState } from 'react';
import './Quiz.css'

const Quiz = () => {

     const data = [{
       question : "who is the president of India",
       option1 : "ram nath",
       option2 : "amitabh bachchan",
       option3 : "sunita aggarwal",
       option4 : "dropadi murmu"
     },
     {
      question : "who is the PM of India",
      option1 : "Narender Damodar Modi",
      option2 : "Arvind kejriwal",
      option3 : "Rahul gandhi",
      option4 : "amit shah"
     },
     {
      question : "Who is the founder of SpaceX",
      option1 : "price",
      option2 : "elon musk",
      option3 : "sunny leone",
      option4 : "me"
     }, {
      question : "4 is the president of India",
      option1 : "ram nath",
      option2 : "amitabh bachchan",
      option3 : "sunita aggarwal",
      option4 : "dropadi murmu"
    },{
      question : "5 is the president of India",
      option1 : "ram nath",
      option2 : "amitabh bachchan",
      option3 : "sunita aggarwal",
      option4 : "dropadi murmu"
    },
    ]

  const [questionCount,setQuestions] = useState(0);
  const [display,setDisplay] = useState("none");
  const [displayNext,setDisplayNext] = useState("block");


const nextQuestion = ()=>{
  setQuestions(questionCount+1);
  if(questionCount >-1){
    setDisplay("block");
   } 
   if(questionCount == data.length-2){
    setDisplayNext('none') 
   }
   
}

const prevQuestion = ()=>{
  setQuestions(questionCount-1);
  if(questionCount<data.length){
    setDisplayNext('block') 
  }
  if(questionCount==1){
    setDisplay('none');
  }

}
 


  return (
    <>
    <div className='backdrop'>

  <div className='header'>
  <a href=""><button>Submit Test</button></a>
  </div>


    <div className='main'>
    <div className='main_box'>

    <h1>{data[questionCount].question} </h1>
    <br />

<form action="#">
<h3>
<input type="checkbox" id="ans1" />
<label for="test1">{data[questionCount].option1}</label>
</h3>
<br />
<h3>
<input type="checkbox" id="ans2"  />
<label for="test2">{data[questionCount].option2}</label>
</h3>
<br />
<h3>
<input type="checkbox" id="ans3" />
<label for="test3">{data[questionCount].option3}</label>
</h3>
<br />
<h3>
<input type="checkbox" id="ans4" />
<label for="test4">{data[questionCount].option4}</label>
</h3>
<br />
</form>
    </div>

  

    </div>

    <div className='footer'>
    <div className='footer_left'> answered/total</div>

<div className='footer_right'>

<button style={{display:display}} onClick={prevQuestion}>Previous</button>
<button style={{display:displayNext}} onClick={nextQuestion}>Next</button>

</div>
    </div>

    

    </div>


 

    </>
  )
}

export default Quiz
