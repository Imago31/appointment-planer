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

    const filterTermin = (e) =>{
      setInputValue(e.target.value)
      setFilter(termin.filter((item) =>{
        return item.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 
      }))
      if(e.target.value == ""){
        setFilter(termin)
      }
    }


  return (
    <div className="main">
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
    </div>
    
  )
}

export default App
