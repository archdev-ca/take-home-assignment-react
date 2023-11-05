type Props = {
    height?: number | string
    width?: number | string
}

const SkeletonRectangle = ({ height, width }: Props) => {
    return (
        <div
            style={{
                width: width ? width : `100%`,
                height: height ? height : '20px',
            }}
            className={`rounded-md animate-pulse bg-slate-200`}
        ></div>
    )
}

export default SkeletonRectangle
