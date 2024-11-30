
function InputBlock(props){
    return(
        <div className="inputBlock">
            <button onClick={() =>{props.setModal(true)}} className="openModal">Add appointment</button>
            <input onChange={props.filterTermin} type="text" placeholder='filter by name...' className="userInput"/>
        </div>
    )
}

export default InputBlock;