type Props = {
    children: React.ReactNode
}
function Card({ children }: Props) {
    return <div className="bg-white p-14 rounded-large shadow-card">{children}</div>
}

export default Card
