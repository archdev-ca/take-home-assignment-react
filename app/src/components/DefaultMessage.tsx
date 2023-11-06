type Props = {
    title: string
    message: string
}

function DefaultMessage({ title, message }: Props) {
    return (
        <div className="text-center">
            <p className="text-2xl mb-4">{title}</p>
            <p>{message}</p>
        </div>
    )
}

export default DefaultMessage
