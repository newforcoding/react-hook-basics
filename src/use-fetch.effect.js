import {useState,useEffect} from 'react'

const useFetch = (url) =>{
   const [data,setData] = useState(null)

   useEffect(()=>{
     const fetchData = async () =>{
         const res = await fetch(url)
         const dataArray = await res.json()
         setData(dataArray[0])
     } 
     fetchData()
   },[url])
   return data
}

export default useFetch

//The useFetch custom hook accepts a ‘URL’ parameter, does the fetching, 
//and returns the data to the components that requested the data. 