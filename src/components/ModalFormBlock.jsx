function ModalFormBlock({modal,setModal,formSubmit,formInputChange,form}){
    return(
        <>
            {modal && 
                <div className="modal w3-animate-top"> 
                    <button onClick={() =>{setModal(false)}} className="closeModal">&#10005;</button>
                    <form onSubmit={formSubmit} className="form">
                    <input onChange={formInputChange} value={form.name} name="name" className="inputForm" type="text" placeholder="User name"/>
                    <input onChange={formInputChange} value={form.appointment} name="appointment" className="inputForm" type="text" placeholder="Appointment name"/>
                    <input onChange={formInputChange} value={form.date} name="date" className="inputForm" type="date" placeholder="Date"/>
                    <input onChange={formInputChange} value={form.time} name="time" className="inputForm" type="time" placeholder="Time"/>
                    <button className="buttonForm" type="submit">Add appointment</button>
                    </form>
                </div>
            }
        </>
    )
}

export default ModalFormBlock;