import Dice from './assets/icon-dice.svg'
import Divider2 from './assets/pattern-divider-desktop.svg'
import { useState , useEffect } from 'react'


//state when the app loads
//fetch advice from an API
//when the button is cliked the advice(state) changes

const App =()=> {
 
  const [advice, setAdvice] = useState('Hello there')
 
 const handleClick = async ()=>{
   const res = await fetch(`https://api.adviceslip.com/advice`)
   const result = await res.json()
   const advice = result.slip
    setAdvice(advice)
}

useEffect(()=>{
handleClick()
}, [])


 
  return (
    
    <div className="flex justify-center items-center h-screen bg-dark-blue font-Manrope font-semibold tracking-wide">
      <article className="mx-3 my-6  pb-10 rounded-lg border-2 border-grey-1 text-center bg-grey-1 max-w-sm">
                   <h4 className="text-[13px] text-green-1 py-5"> ADVICE #{advice.id}</h4>
                   <p className='text-white px-8' id="advice-text">{advice.advice} </p>
                   <img className="px-8 my-6" src={Divider2} alt="divider"/>
                  <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 ">
                      <button onClick={()=>handleClick()} className="dice-icon  bg-green-1 w-20 h-20 rounded-full flex items-center justify-center" >
                        <img id='image' src={Dice} alt="" />
                        </button>
                 </div>
      </article>
    </div>
   
  )
}

export default App
