import  { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState("");
  const [termin, setTermin] = useState([]);
  const [filter, setFilter] = useState([]);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({
    appointment: '',
    name: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    if (localStorage.getItem('taskData')) {
      setTermin(JSON.parse(localStorage.getItem('taskData')));
      setFilter(termin);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskData', JSON.stringify(termin));
    setFilter(termin);
  }, [termin]);
  

    const filterTermin = (e) =>{
      setValue(e.target.value);
      console.log(e.target.value);
      console.log(value);
      setFilter(termin.filter((item) =>{
        return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 
      }))
      if(e.target.value == ""){
        setFilter(termin)
      }
    }

    const formInputChange= (e) =>{
      const { name, value } = e.target;
      console.log(e.target)
      setForm({
        ...form,
        id: Date.now(),
        [name]: value,
      });
    }

    const formSubmit =(e) =>{
      e.preventDefault();
      console.log(form);
      setTermin([...termin, form]);
      setModal(false)
    }

    function removeTermin(id){
      setTermin(termin.filter(function(items){
          return items.id !== id; 
      }))
  }

  const reverseDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`; 
  };

  return (
    <div className="main">
      <div className="inputBlock">
      <button onClick={() =>{setModal(true)}} className="openModal">Add appointment</button>
        <input onChange={filterTermin} value={value} type="text" placeholder='filter by name...' className="userInput"/>
      </div>
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
        {filter.length == 0 && <h2 className="notFound">Appointment not found</h2>}
      </div>
      :
      <div className='cardBlock nocard'><p className='error'>You have no any appointment, if you want add one click the button below</p><button onClick={() =>{setModal(true)}} className="addTermin">Add appointment</button></div>
      }

      {modal && 
      <div className="modal w3-animate-opacity"> 
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

    </div>
      
  )
}

export default App
