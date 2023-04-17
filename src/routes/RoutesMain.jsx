import { Route, Routes } from "react-router-dom"
import { ProtectedRoutes } from "../components/ProtectedRoutes"
import { PublicRoutes } from "../components/PublicRoutes"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { UserPage } from "../pages/UserPage"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
                <Route path="/user" element={<UserPage />} />
            </Route>
        </Routes>
    )
}