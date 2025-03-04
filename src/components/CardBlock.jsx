function CardBlock({termin,filter,reverseDate,setModal,removeConfirm}){

    const dateDiff = (targetDate) =>{
        let date = new Date();
        let month = date.getMonth()+1;
        if(month <10){month = '0' + month}
        let todayDate = `${date.getFullYear()}-${month}-${date.getDate()}`;
        let diffDate = (new Date(targetDate).getTime() - new Date(todayDate).getTime())/(1000*60*60*24);
        return diffDate;
    }

    return(
        <>
            {termin.length !== 0 ?
                <div className="cardBlock">
                {
                    filter.map((item) =>{
                    return(
                        <div className="cardBox" key={item.id} >
                        <div className="card" style={{borderTop: dateDiff(item.date) < 3  && '3px solid red'}}>
                            <p className="name">{item.name}</p>
                            <p className="appointment">{item.appointment}</p>
                            <p className="date" style={{color: dateDiff(item.date) < 3  && 'red'}}>{reverseDate(item.date)}</p>
                            <p className="time">{item.time}</p>
                        </div>
                        <button onClick={() => removeConfirm(item.id)} className="removeTermin">Remove appointment</button>
                        </div>
                    )  
        
                    })
                }
                {filter.length === 0 && <p className="error">Appointment not found</p>}
                </div>
                :
                <div className='cardBlock nocard'><p className='error'>You have no any appointment, if you want add one click the button below</p><button onClick={() =>{setModal(true)}} className="addTermin">Add appointment</button></div>
            }
        </>
    )
}

export default CardBlock;