import { useState } from 'react'
import './App.css'

function App() {

  const [notes, setNotes] = useState([]);

  const [state, setState] = useState({
    title: '', 
    note:'',
    id: Math.random() * 10,
  });


  const handleDelete = (id) => {
    let leftNote = notes.filter((note) => note.id !== id);
    setNotes(leftNote);
  }



  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setNotes([...notes, state])
    setState({
      title: "",
      note: ""
    })
  }


  return (
    <div className='App bg-blue-200 h-screen'>
      <h1 className='text-center text-5xl p-5'>React Notes</h1>
      <div className="create-note w-[400px] mx-auto">

        <form onSubmit={handleSubmit} className='flex flex-col'>

          <input 
          className="border-2 border-blue-200 p-2 mb-3"   type="text" 
          placeholder='Add title' 
          name= "title"
          onChange={handleChange} 
          value={state.title} required/>

          <textarea 
          className="border-2 p-2 border-blue-200" 
          name="note" id="" cols="30" rows="8" placeholder='note'
          onChange={handleChange} 
          value={state.note} required
          ></textarea>

          <button type='submit' 
          className='mt-2 border-2 p-2 border-blue-200 bg-blue-500 text-white' >Add Note</button>

        </form>
      </div>

      <div className="notes-container mt-3 border-t-2	border-blue-500 flex-wrap">
        {
          notes.length > 0 ? notes.map((note)=>{
            return (
              <div className="note m-3 w-[300px] border-2 mr-5 bg-white flex-wrap p-3 relative">

              <button className='absolute right-3 text-red-900 font-bold text-2xl hover:text-red-500' onClick={()=>handleDelete(note.id)} >
              X</button>

          <h1 className='font-bold'>{note.title}</h1>
          <p>{note.note}</p>
        </div>
            )
          }) : <p className='p-3'>No notes available!</p>
        }
      </div>
    </div>
  )
}

export default App
