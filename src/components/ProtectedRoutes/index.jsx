import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { TechProvider } from "../../providers/TechContext"

export const ProtectedRoutes = () => {
    const { user, loading } = useContext(UserContext)

    if (loading) {
        return (
            <div className="loading">
                <h3>Carregando...</h3>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/" />
    }

    return (
        <TechProvider>
            <Outlet />
        </TechProvider>
    )
}