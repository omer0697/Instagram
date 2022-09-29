import {Outlet} from "react-router-dom"

export default function AuthLayout(){
    return(
        <div className="h-full w-full flex flex-wrap overflow-auto gap-x-8  items-center justify-center min-w-[400px]">
            <Outlet></Outlet>
        </div>   
    )
}