import './Exercise5.css';

const Box = ({style, className, ...Props}) => {
    console.log(className);
    return (
        <div
            className={`box ${className}`}
            style={{ fontStyle: "italic", ...style }}
            {...Props}
        />
    )
}

export default function PassingProps() {
    return (
        <div>
            <Box className="box--small" style={{ background: "lightblue" }}>
                small lightblue box
            </Box>
            <Box className="box--medium" style={{ background: "pink" }}>
                medium pink box
            </Box>
            <Box className="box--large" style={{ background: "orange" }}>
                large orange box
            </Box>
        </div>
    )
}