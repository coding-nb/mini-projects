import { useState } from "react";

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className="w-full min-h-screen transition-colors duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12">
        <div className="flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-xl justify-center">
         <button onClick={()=> setColor("red")} className="outline-none bg-red px-2 rounded-full shadow-sm" style={{backgroundColor:"red"}}>Red</button>
         <button onClick={()=> setColor("green")} className="outline-none bg-red px-2 rounded-full shadow-sm" style={{backgroundColor:"green"}}>Green</button>
         <button onClick={()=> setColor("yellow")} className="outline-none bg-red px-2 rounded-full shadow-sm" style={{backgroundColor:"yellow"}}>Yellow</button>
         <button onClick={()=> setColor("pink")} className="outline-none bg-red px-2 rounded-full shadow-sm" style={{backgroundColor:"pink"}}>Pink</button>
         <button onClick={()=> setColor("orange")} className="outline-none bg-red px-2 rounded-full shadow-sm" style={{backgroundColor:"orange"}}>Orange</button>
        </div>
      </div>
    </div>
  );
}

export default App;
