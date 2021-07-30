
const Box = ({style, size,...Props}) => {
    const selectedSize = size && `box--${size}`;
    return (
        <div 
            className={`box ${selectedSize}`}
            style = {{fontStyle: "italic", ...style}}
            {...Props}
        />
    )
}

export default function StyleEncapsulation() {
    return (
        <div>
            <Box size="small" style={{background: "blue"}}>
                small blue box
            </Box>
            <Box size="medium" style={{background: "green"}}>
                Medium green box
            </Box>
            <Box size="large" style={{background: "gray"}}>
                Large gray box
            </Box>
        </div>
    )
}