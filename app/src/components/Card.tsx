type Props = {
    children: React.ReactNode
    classNames?: string
}
function Card({ children, classNames }: Props) {
    return <div className={`bg-white rounded-large shadow-card ${classNames}`}>{children}</div>
}

export default Card
