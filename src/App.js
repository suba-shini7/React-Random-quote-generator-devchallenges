import './App.css';
import Axios from "axios";
import { useEffect,useState } from 'react';

function App() {
  const [Quote,setQuote]=useState("");
  const [Author,setAuthor]=useState("");

   const generateQuotes=( ()=>{
    Axios.get("https://api.quotable.io/quotes/random").then(res => setQuote(res.data[0].content))
    Axios.get("https://api.quotable.io/quotes/random").then(res => setAuthor(res.data[0].author))
   })
   
  useEffect(()=>{
    generateQuotes()
  },[])
  return (
    <div className='main'>
      <div className='btn'>
      <button onClick={generateQuotes}>random  <i class="bi bi-arrow-clockwise"></i></button>
      </div>
      <div className='container'>
       
      <div className='quotes'>
      <div className='line'></div>
     <p>{Quote}</p>
     </div>
     <div className='author'>
     <p>{Author}</p>
     </div>
      </div>
     
    
     
    
    
    

    

   
    </div>
  );
}

export default App;
