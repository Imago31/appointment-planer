import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function ModalFormBlock({modal,setModal,formSubmit,formInputChange,form,timeInputChange,validate, valid}){
    return(
        <>
            {modal && 
                <div className="modal w3-animate-top"> 
                    <button onClick={() =>{setModal(false)}} className="closeModal">&#10005;</button>
                    <form onSubmit={formSubmit} className="form">
                    <input onChange={formInputChange} value={form.name} name="name" className="inputForm" type="text" placeholder="User name" style={{borderLeft: valid.name && '2px solid red'}}/>
                    <input onChange={formInputChange} value={form.appointment} name="appointment" className="inputForm" type="text" placeholder="Appointment name" style={{borderLeft: valid.appointment && '2px solid red'}}/>
                    <input onChange={formInputChange} value={form.date} name="date" className="inputForm" type="date" placeholder="Date" style={{borderLeft: valid.date && '2px solid red'}}/>
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
                            style={{borderLeft: valid.time && '2px solid red'}}
                    />
                    {Object.keys(valid).length !== 0 && <p style={{color: 'red'}}>All fields are required</p>}
                    <button className="buttonForm" type="submit">Add appointment</button>
                    </form>
                </div>
            }
        </>
    )
}

export default ModalFormBlock;