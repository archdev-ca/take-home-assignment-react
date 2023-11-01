type Props = {
    children: React.ReactNode
}
function Card({children}: Props) {
  return (
    <div className='bg-white p-14 rounded-[10px] flex flex-col'>
        {children}
    </div>
  )
}

export default Card