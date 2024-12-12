import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'
          //useState hook use 
function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow]=useState(false)
  const [charAllow, setCharAllow]=useState(false)
  const [password, setPassword]=useState("")
  const [buttonText, setButtonText] = useState("Copy");
  
            //useref Hook
  const passwordRef = useRef(null)
           //useCallBack hook
  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str+="0123456789"
    if(charAllow) str+="!#$%&?@^_`|~"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random() * str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

   },[length,numAllow,charAllow,setPassword])

    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select()
     passwordRef.current?.setSelectionRange(0,999) // this line is used to copy only range text
    window.navigator.clipboard.writeText(password).then(() => {
      setButtonText('Copied');
      setTimeout(() => setButtonText('Copy'), 4000); // Reset to "Copy" after 4 seconds
    });
    },[password]);
          //useEffect hook
   useEffect(() => {
    passwordGenerator()
   },[length, numAllow, charAllow,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-2 py-3 my-8
     text-orange-500 bg-gray-800'>
      <h1 className='text-center text-white my-3 font-serif text-2xl'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 "'>
        <input
         type="text"
         value={password}
         className="outline-none w-full py-1 px-3"
         placeholder="password"
         readOnly
         ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className=" outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-red-400"
        >
         {buttonText}
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8} 
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox" 
           defaultChecked={numAllow}
           id='numberInput'
           className='cursor-pointer'
           onChange={()=>{
            setNumAllow((prev)=>!prev);
           }}
           />
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllow}
          id="charInput"
          className='cursor-pointer'
          onChange={()=>{
            setCharAllow((prev)=>!prev);
          }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div> 
    </>
  )
}

export default App
