import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import NewBoard from './Components/NewsBoard'
export default function App() {
  const [category,setCategory]=useState("general")
  return (
    <div className="bg-dark text-white">
      <Navbar setCategory={setCategory}/>
      <NewBoard category={category}/>
      <p className='text-center'>This Website designed and developed by 
        <a href="https://www.linkedin.com/in/rohit-sul-780265283/"> Rohit Sul</a>
      </p>
    </div>
  )
}
