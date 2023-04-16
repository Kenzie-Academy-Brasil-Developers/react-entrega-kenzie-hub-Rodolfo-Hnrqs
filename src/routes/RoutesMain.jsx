import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { UserPage } from "../pages/UserPage"

export const RoutesMain = () => {
    const localStorageUser = localStorage.getItem("@USER");
    const [user, setUser] = useState(localStorageUser ? JSON.parse(localStorageUser) : null)
    return(
        <Routes>
            <Route path="/" element={<LoginPage user={user} setUser={setUser} />}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/user" element={<UserPage user={user} setUser={setUser} />} />
        </Routes>
    )
}