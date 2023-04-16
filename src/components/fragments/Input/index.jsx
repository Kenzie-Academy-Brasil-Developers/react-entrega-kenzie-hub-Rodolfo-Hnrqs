import { toast } from "react-toastify"
import { StyledInput } from "./styled"

export const Input = ({ type, id , placeholder,  label, register, error }) => {
    return(
        <StyledInput>
            {label ? <label htmlFor="">{label}</label> : null}
            <input type={type} id={id} placeholder={placeholder} {...register} />
            {error ? <p>{error.message}</p> : null}
        </StyledInput>
    )
}