
const Box = () => {
    const props = { style: { fontStyle: "italic" } }
    return (
        <div>
            <div {...props} className="box box--small">small lightblue box</div>
            <div {...props} className="box box--medium">medium pink box</div>
            <div {...props} className="box box--large">large orange box</div>
            <div className="box" {...props}>sizeless box</div>
        </div>
    )
}

export default function PassingProps() {
    return (
        <div>
            <Box />
        </div>
    )
}