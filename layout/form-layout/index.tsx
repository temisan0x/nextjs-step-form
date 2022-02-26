

type AuthProps = {
    children: React.ReactNode //allows multiple children, strings, numbers, fragments, 
}

const Authentication = ({children}: AuthProps) => {
    return (
        <>
            <div className="box-border ">
                hello
            </div>
        </>
    )
}

export default Authentication;