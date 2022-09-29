import { useEffect, useState } from "react"


export default function Input({label, type="text", ...props}){

    const [show,setShow] = useState(false)
    const [inputType,setInputType] = useState(type)



    useEffect(()=>{
        if (show){
            setInputType("text")
            
        }
        else if (type === "password") {
            setInputType("password")
            

        }
    },[show])

    return(
        <label className="block relative">
        <input  required={true} type={inputType}  className="bg-zinc-50 px-[9px] border outline-none focus:border-gray-400 rounded-sm w-full text-xs h-[38px] valid:pt-[10px] peer" {...props}></input>
        <small className="absolute top-1/2 left-3 cursor-text pointer-events-none text-xs text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
        {type ==="password" && props?.value &&(
            <div type="button" onClick={()=>setShow(show => !show)} className="absolute select-none cursor-pointer top-0 right-0 h-full flex items-center text-sm font-semibold pr-2">
                {show ? "Hide" : "Show"}
            </div>
        ) }
      </label>
    )
}