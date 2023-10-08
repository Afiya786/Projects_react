import { useState , useCallback, useEffect, useRef} from 'react'


function App() {
  const [length , setLength] = useState(8);
  
  const[password, setPassword] = useState("");
  
  const passwordGenerator = useCallback(() => {
    let pass ="";
    let string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    

    for(let i=1; i<= length; i++){
       let char = Math.floor(Math.random() * string.length + 1);
       pass += string[char];   
      }

      setPassword(pass);

    

  
  
  },[length, setPassword])
  
  const passwordRef = useRef(null);
  
  const copyPasswordToClipboard = () =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password);
  }

  useEffect(() => {
    passwordGenerator();
  }, [length]);
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rouded-lg px-4 py-9 text-pink-500 bg-gray-800'>
        <h1 className='text-white text-center my-5'>PASSWORD GENERATOR</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type ="text"
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        />
        <button onClick ={copyPasswordToClipboard}
        className='outline-none bg-blue-800 text-black px-3 py-0.5 shrink-0'>COPY</button>

        </div>

        <div className='flex text-lg gap-x-3'>
          <div className='flex items-center gap-x-1'>
            <input 
            type ="range"
            min ={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          


          
        </div>
        
        </div>
    </>
  );
}

export default App
