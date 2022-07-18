import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // const [loading,setLoading]=useState(false)
  const [advice, setAdvice] = useState('')

  //**fetching Advices from Api */

  const fetchAdvice = () => {
    // setLoading(true)
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const advice = response.data.slip.advice;
        setAdvice(advice)
      })
      // setLoading(false)
      .catch((error) => {
        // setLoading(false)
        console.log(error);
      })

  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (

    <div className='app'>
      <div className='card'>
        <h1>{advice}</h1>
 
        <button type='submit' className='btn' onClick={fetchAdvice}><span>Give Me Advice</span></button>
      </div>
    </div>
  );
}

export default App;
