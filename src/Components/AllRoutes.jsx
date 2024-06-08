import { Routes, Route } from "react-router-dom"

//import All Pages.
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
    )
}

export default AllRoutes;