import { useState } from "react"

function App() {
  const [color, setColor] = useState("lightgreen")
  
  return (
    <div className = "w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl border border-black">
          <button className="outline-none px-7 py-1 rounded-full text-white shadow-lg"
          onClick={()=>setColor("red")}
          style={{backgroundColor:"red"}}>Red</button>
          <button className="outline-none px-7 py-1 rounded-full text-white shadow-lg"
          onClick={()=>setColor("blue")}
          style={{backgroundColor:"blue"}}>Blue</button>
          <button className="outline-none px-7 py-1 rounded-full text-white shadow-lg"
          onClick={()=>setColor("green")}
          style={{backgroundColor:"green"}}>Green</button>
          <button className="outline-none px-7 py-1 rounded-full text-white shadow-lg"
          onClick={()=>setColor("black")}
          style={{backgroundColor:"black"}}>Black</button>
          <button className="outline-none px-7 py-1 rounded-full text-white shadow-lg"
          onClick={()=>setColor("yellow")}
          style={{backgroundColor:"yellow"}}>Yellow</button>
          <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
          onClick={()=>setColor("orange")}
          style={{backgroundColor:"orange"}}>Orange</button>
          <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          onClick={()=>setColor("chocolate")}
          style={{backgroundColor:"chocolate"}}>Chocolate</button>
          <button className="outline-none px-4 py-2 rounded-full text-black shadow-lg border border-black"
          onClick={()=>setColor("white")}
          style={{backgroundColor:"white"}}>white</button>
          <button className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
          onClick={()=>setColor("purple")}
          style={{backgroundColor:"purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
