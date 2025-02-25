import  { useState, useEffect } from 'react';
import './App.css';
import InputBlock from './components/InputBlock';
import CardBlock from './components/CardBlock';
import ModalFormBlock from './components/ModalFormBlock';

function App() {

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
      setFilter(termin.filter((item) =>{
        return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 
      }))
      if(e.target.value === ""){
        setFilter(termin)
      }
    }

    const formInputChange= (e) =>{
      const { name, value } = e.target;
      setForm({
        ...form,
        id: Date.now(),
        [name]: value,
      });
    }

    const timeInputChange= ([selectedTime]) =>{
      const getTime = selectedTime.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hourCycle: "h23", });
      setForm({
        ...form,
        id: Date.now(),
        time: getTime,
      });
    }

    const formSubmit =(e) =>{
      e.preventDefault();
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
      <InputBlock setModal={setModal} filterTermin={filterTermin} />
      <CardBlock termin={termin} filter={filter} reverseDate={reverseDate} removeTermin={removeTermin} setModal={setModal} />
      <ModalFormBlock modal={modal} setModal={setModal} formSubmit={formSubmit} formInputChange={formInputChange} form={form} timeInputChange={timeInputChange}/>
    </div>
  )
}

export default App
