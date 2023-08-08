interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}:ErrorMessageProps){
    return <p className=' text-red-700 flex justify-center items-center '>Error:{error}</p>
}