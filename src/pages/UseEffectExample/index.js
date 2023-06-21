import { useEffect, useState } from "react"
import axios from "axios"

const UseEffectExample = () =>{
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('mounting phase')

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then((data)=>{
    console.log(data,'data')
})

axios.get('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    console.log(response.data)
})

    },[count])

    const handleCount = () =>{
        setCount(count+1)
    }


    return(
        <>
        <p>UseEffectExample</p>
     count:{count}
        <button onClick={handleCount}>Add</button>
        </>
    )
}

export default UseEffectExample