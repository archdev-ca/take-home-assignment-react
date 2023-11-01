type Props = {
    children: React.ReactNode
}
function Card({children}: Props) {
  return (
    <div className='bg-white p-14 rounded-large flex flex-col items-start shadow-md'>
        {children}
    </div>
  )
}

export default Card