function CardBlock({termin,filter,reverseDate,removeTermin,setModal}){
    return(
        <>
            {termin.length != 0 ?
                <div className="cardBlock">
                {
                    filter.map((item) =>{
                    return(
                        <div className="cardBox" key={item.id} >
                        <div className="card">
                            <p className="name">{item.name}</p>
                            <p className="termin">{item.appointment}</p>
                            <p className="date">{reverseDate(item.date)}</p>
                            <p className="time">{item.time}</p>
                        </div>
                        <button onClick={() => removeTermin(item.id)} className="removeTermin">Remove termin</button>
                        </div>
                    )  
        
                    })
                }
                {filter.length == 0 && <p className="error">Appointment not found</p>}
                </div>
                :
                <div className='cardBlock nocard'><p className='error'>You have no any appointment, if you want add one click the button below</p><button onClick={() =>{setModal(true)}} className="addTermin">Add appointment</button></div>
            }
        </>
    )
}

export default CardBlock;