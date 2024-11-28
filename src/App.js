import { useState } from 'react'
import './App.css'

function App() {

const terminData= [
  {termin: "Зубной врач", date: "7.12.2024", time: "14:00", name: "Рубен"},
  {termin: "Джоб центр-интеграция в работу", date: "10.12.2024", time: "9:30", name: "Люда"},
  {termin: "Плановый осмотр ребенка", date: "14.12.2024", time: "14:00", name: "Марк"},
  {termin: "Дедсад-разговор с родителями", date: "18.12.2024", time: "13:00", name: "Аделя"},
  {termin: "Встреча с коучинг бератором", date: "22.12.2024", time: "15:30", name: "Рубен"},
]

  const [termin] = useState(terminData);
  const [filter, setFilter] = useState(terminData);
  const [inputValue, setInputValue] = useState("");
  const [form, setForm] = useState({
    appointment: '',
    name: '',
    date: '',
    time: ''
  });
  const [modal, setModal] = useState(false);

    const filterTermin = (e) =>{
      setInputValue(e.target.value)
      setFilter(termin.filter((item) =>{
        return item.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 
      }))
      if(e.target.value == ""){
        setFilter(termin)
      }
    }

    const formInputChange= (e) =>{
      const { name, value } = e.target;
      console.log(e.target.value)
      setForm({
        ...form,
        [name]: value,
      });
      console.log(form.appointment)
    }


  return (
    <div className="main">
      <button onClick={() =>{setModal(true)}} className="openModal">Add appointment</button>
      <div className="inputBlock">
        <input placeholder='filter by name...' value={inputValue} onChange={filterTermin} className="userInput" type="text" />
        {/* <button className='userButton'>Sort by date</button> */}
      </div>
      {termin.length != 0 ?
      <div className="cardBlock">
        {
          filter.map((item) =>{
            return(
              <div className="cardBox" key={item.id} >
                <div className="card">
                  <p className="name">{item.name}</p>
                  <p className="termin">{item.termin}</p>
                  <p className="date">{item.date}</p>
                  <p className="time">{item.time}</p>
                </div>
                <button className="removeTermin">Remove termin</button>
              </div>
            )  

          })
        }
        {filter.length == 0 && <h2>Appointment not found</h2>}
      </div>
      :
      <div className='cardBlock nocard'><p className='error'>You have no any appointment, if you want add one click the button below</p><button className="add_termin">Add appointment</button></div>
      }

      {modal && 
      <div className="modal w3-animate-opacity"> 
        <button onClick={() =>{setModal(false)}} className="closeModal">&#10005;</button>
        <form  className="form">
          <input onChange={formInputChange} value={form.appointment} name="appointment" className="inputForm" type="text" placeholder="Appointment name"/>
          <input name="name" className="inputForm" type="text" placeholder="User name"/>
          <input name="date" className="inputForm" type="date" placeholder="Date"/>
          <input name="time" className="inputForm" type="time" placeholder="Time"/>
          <button className="buttonForm" type="submit">Add appointment</button>
        </form>
      </div>
      }

    </div>
      
    
  )
}

export default App
