import Home from "Pages/Home"
import AuthLayout from "auth"
import Login from "Pages/Login"
import PrivateRoot from "Components/PrivateRoot"

const routes = [
    {
        path:"/",
        element:<Home/>,
        auth:true
    },
    {
        path:"/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"login",
                element:<Login></Login>
            }
        ]
    }
]

const authCheck = routes => routes.map(route=>{
    if (route?.auth){
        route.element = <PrivateRoot>{route.element}</PrivateRoot>
    }
    if (route?.children){
        route.children = authCheck(route.children )
    }
    return route
})
export default authCheck(routes)