import {useState,useEffect} from 'react'
import styles from  './Data.module.css'
export const Data = () =>{

  const [data,setData] = useState(null)
  const [error,setError] = useState(null)
  const url = 'https://jsonplaceholder.typicode.com/users'

  const getData = async ()=>{
    
    try{
      const response = await fetch(url)
      const endpoint = await response.json()

      setData(endpoint)
      
      setError(null)
    } 
    catch(err){
      console.log(err.message)
      setError('couldnt fetch data')
    }

  }

  useEffect(()=>{
    getData()
  },[url])

 

  return(
    <div>
      {data && data.map((value,index)=>(
        <div key={index} className={styles.box}>
          <h3>name:{value.name}</h3>
          <h4>usename:{value.username}</h4>
          <h4>email:{value.email}</h4>
      
        
        </div>
      ))}
    </div>
  )

}