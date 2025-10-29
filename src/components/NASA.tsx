import axios from 'axios'
import  { useEffect, useState } from 'react'

function NASA() {
    const [date , setDate] = useState("")
    const [explanation , setExplanation] = useState("")
    const [image , setImage] = useState("")
    const [title , setTitle] = useState("")
  
    const fetchhandler = async ()=>{
       try{
         const URL = await axios.get("https://api.nasa.gov/planetary/apod?api_key=R6lSI1NfCWya1buWieWN08znX9fUbuKkReCPYdDR")
        const res = URL.data
        setDate(res.date)
        setExplanation(res.explanation)
        setImage(res.hdurl)
        setTitle(res.title)
       }catch(err){
        console.log(err)
       }
    }

    useEffect(()=>{
        fetchhandler()
    }, [])
  return (
    <div>
      
        <h1 className='font-bold text-gray-300 p-12'>{title}</h1>
         <img  className='mx-auto my-6 w-full rounded-2xl shadow-lg' src={image}/>
        <p className='rounded bg-gray-700 text-2xl p-6'>{date}</p>
        <p className='rounded font-sans text-gray-300 bg-gray-500 p-6 text-2xl mb-24'>{explanation}</p>
       
    </div>
  )
}

export default NASA