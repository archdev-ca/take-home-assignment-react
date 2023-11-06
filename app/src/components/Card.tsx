type Props = {
    children: React.ReactNode
    classNames?: string
}
function Card({ children, classNames = '' }: Props) {
    return <div className={`bg-white rounded-large shadow-card overflow-hidden ${classNames}`}>{children}</div>
}

export default Card
