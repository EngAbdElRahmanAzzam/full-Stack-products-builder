interface IProps{
    color :string;
}

const ColorCircle = ({color}:IProps) => {

    return (
        <div className="text-sm w-fit flex" style={{background:color}}>
            <p className="px-" >{color}</p>
            <p>X</p>
        </div>
    )
}

export default ColorCircle