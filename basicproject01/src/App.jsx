import { useState } from "react"

function App() {
  const [coolor , setCoolor] = useState("yellow");
  
  
  // const changeColor1 = () =>{
  //   setCoolor("red");
  // }

  

  return(
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: coolor}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
      <button onClick={() => setCoolor("red")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"red"}}>RED</button>
      <button  onClick={() => setCoolor("blue")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"blue"}}>BLUE</button>
      <button  onClick={() => setCoolor("green")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"green"}}>GREEN</button>
      <button  onClick={() => setCoolor("orange")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"orange"}}>ORANGE</button>
      <button  onClick={() => setCoolor("pink")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"pink"}}>PINK</button>
      <button  onClick={() => setCoolor("skyblue")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"skyblue"}}>SKYBLUE</button>
      <button  onClick={() => setCoolor("brown")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"brown"}}>BROWN</button>
      <button  onClick={() => setCoolor("violet")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"violet"}}>VIOLET</button>
      <button  onClick={() => setCoolor("olive")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"olive"}}>OLIVE</button>
      <button onClick={() => setCoolor("black")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"black"}}>BLACKE</button>
      <button  onClick={() => setCoolor("purple")}className="outline-none px-4 py-1 rounded-3xl" style={{backgroundColor:"purple"}}>PURPLE</button>
      </div>
      </div>
      </div>
      </>
  
  )
}

  

export default App
