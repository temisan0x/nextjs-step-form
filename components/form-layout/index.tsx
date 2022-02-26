type AuthProps = {
    children: React.ReactNode //allows multiple children, strings, numbers, fragments, 
}

const Authentication = ({children}: AuthProps) => {
    return (
        <>
            {children}
        </>
    )
}

export default Authentication;