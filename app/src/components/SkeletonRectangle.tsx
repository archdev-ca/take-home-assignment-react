type Props = {
    height?: number | string
    width?: number | string
}

const SkeletonRectangle = ({ height, width }: Props) => {
    return (
        <span
            style={{
                width: width ? width : `100%`,
                height: height ? height : '20px',
            }}
            className={`block rounded-md animate-pulse bg-slate-200`}
        ></span>
    )
}

export default SkeletonRectangle
