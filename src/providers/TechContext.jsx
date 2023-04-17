import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./userContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const [techList, setTechList] = useState([user.techs])

    const addTech = async (formData, setLoading) => {
        const token = localStorage.getItem("@TOKEN")
        try {
            setLoading(true)
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTechList([...techList, data])
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

    }, [])

    return (
        <TechContext.Provider value={{ techList, setTechList, addTech }}>
            {children}
        </TechContext.Provider>
    )
}