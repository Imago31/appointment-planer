import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function ModalFormBlock({modal,setModal,formSubmit,formInputChange,form,timeInputChange}){
    return(
        <>
            {modal && 
                <div className="modal w3-animate-top"> 
                    <button onClick={() =>{setModal(false)}} className="closeModal">&#10005;</button>
                    <form onSubmit={formSubmit} className="form">
                    <input onChange={formInputChange} value={form.name} name="name" className="inputForm" type="text" placeholder="User name"/>
                    <input onChange={formInputChange} value={form.appointment} name="appointment" className="inputForm" type="text" placeholder="Appointment name"/>
                    <input onChange={formInputChange} value={form.date} name="date" className="inputForm" type="date" placeholder="Date"/>
                    <Flatpickr
                            name="time"
                            value={form.time}
                            onChange={timeInputChange}
                            placeholder={"--:--"}
                            options={{
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: "H:i",
                                time_24hr: true,
                            }}
                            className="inputForm"
                    />
                    <button className="buttonForm" type="submit">Add appointment</button>
                    </form>
                </div>
            }
        </>
    )
}

export default ModalFormBlock;