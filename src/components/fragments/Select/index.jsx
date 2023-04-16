import { StyledSelect } from "./styled"

export const Select = ({ children, id , label, register, error }) => {
    return(
        <StyledSelect>
            {label ? <label htmlFor="">{label}</label> : null}
            <select id={id} {...register}>{children}</select>
            {error ? <p>{error.message}</p> : null}
        </StyledSelect>
    )
}