
import React,{useState,useEffect} from 'react'

export default function Home() {

  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

//   // 1 Case - All dependency
//   useEffect(() => {
//     console.log("Screen refreshed")
//   })

//   // 2nd Case -  dependency
//   useEffect(() => {
//     console.log("Screen refreshed")
//   },[counter2,counter1])

  // 3rd Case -  empty array
  useEffect(() => {
    console.log("Screen refreshed")
  },[])

  return (
    <>
        <h1>{counter1}</h1>
        <h1>{counter2}</h1>

        <button onClick={() => setCounter1(counter1 + 1)}>Increment 1</button>
        <button onClick={() => setCounter2(counter2 + 1)}>Increment 2</button>

    </>
  )
}
