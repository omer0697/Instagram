import {useEffect, useState} from "react"
import Input from "Components/Input";
import {AiFillFacebook} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { setUser } from "store/auth";
import { useNavigate , useLocation } from "react-router-dom";
import { login } from "firebase.js";

export default function Login(){
  
    const dispacth = useDispatch()
    const navigate =  useNavigate()
    const location = useLocation()
    const images = ["https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png","https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png","https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png","https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"]
    const [imageIndex, setImageIndex] = useState(0);
  
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
   
    const enabled = userName && password 
  
    
    
      useEffect(() => {
        let timer = setInterval(() => {
          setImageIndex(prev => (
            prev === images.length - 1 ? 0 : prev + 1
          ));
        }, 2000);
        return () => clearTimeout(timer)
      },[])


      const submitHandle = async e =>{
        e.preventDefault()
        await login(userName,password)
        /*
        navigate(location.state?.return_url || "/",{
          replace:true
        })
        */
      }
  
  
    return (
      <div className="h-full w-full flex flex-wrap overflow-auto gap-x-8  items-center justify-center min-w-[400px]">
        <div className="hidden md:block w-[380px] h-[581px] relative  bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
          <div  className="w-[250px] h-[538px] absolute top-6 right-5">
            <img className="w-full h-full absolute top-0 left-0  duration-700 ease-linear" src={images[imageIndex]}></img>
          </div>
        </div>
        <div className="w-[350px] grid gap-y-3 ">
          <div className="bg-white border px-[40px] pt-10  pb-2">
          <a className="flex justify-center mb-8">
          <img className="h-[51px] " src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"></img>
          </a>
          <form onSubmit={submitHandle} className="grid gap-y-1.5">
            <Input type="text" value={userName} onChange={e=>setUserName(e.target.value)} label="Phone number, username or email"></Input>
            <Input type="password" value={password} onChange={e=>setPassword(e.target.value)} label="Password"></Input>  
            <button disabled={!enabled} type="submit" className="h-[30px] rounded bg-brand text-white font-semibold disabled:opacity-50">Log In</button>
            <div className="flex items-center py-3 mt-2">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="px-4  text-[13px] text-gray-500 font-semibold">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <div className="py-3">
              <a href="#" className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook">
                <AiFillFacebook size={20}></AiFillFacebook>
                Log in with Facebook
              </a>  
            </div>
            <div className="flex justify-center items-center text-[12px] py-1">
              <a className=" text-link" href="#">Forgot password?</a>
            </div>
          </form>
          </div>
          <div className="bg-white border p-4 text-sm text-center">
          Don't have an account? <a href="#" className="font-semibold text-brand">Sign up</a> 
          </div>
          
        </div>
      
      </div> 
    );
  }