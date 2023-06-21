import { useEffect, useState } from "react"

const UseEffectExample = () =>{
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log('mounting phase')
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