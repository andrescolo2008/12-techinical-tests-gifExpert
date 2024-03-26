import { useState } from 'react'


function App() {
  const [task, setTask] = useState(['limpiar el piso','barrer el piso','limpiar escritorio'])
 
  
  const [inputValue, setinputValue] = useState('valor inicial')

  const onInputChange= ({target:{value}}) =>{
    
    setinputValue(value)
    
    
  }


  const onSubmit= (event ) =>{
    event.preventDefault()
    console.log(inputValue);
    
  }


  const addTask= ( ) =>{
    if(inputValue.trim() <=2 ) return;
    if(task.includes(inputValue)) return
   setTask([inputValue,...task])
   setinputValue('')
   console.log(inputValue);
   
   gif(inputValue)

  }

  const gif= async( ) =>{
    const url=`http://api.giphy.com/v1/gifs/search?api_key=tOuGo3jNBa9ARQ5eyCuR6crElbBVtfnJ&q=${inputValue}&limit=5`
    const resp= await fetch(url);
    const{data}=await resp.json()

    const gifimg= data.map( img=>({ 
       id:img.id,
       title:img.title,
       url:img.images.downsized_medium.url
    }))


    console.log(gifimg);
    
  }

  const deleteTask = (taskToDelete) => {
    const updatedTasks = task.filter(taskItem => taskItem !== taskToDelete);
    setTask(updatedTasks);
  }
  
  
    
  

  return (
    <>
      <div className="container">

        <div className="row">

          <div className="col-md-7" >

            <h1>Todos list</h1>
            <h2>add or delete a task</h2>
            <form onSubmit={onSubmit}>
              <input 
              type="text" 
              placeholder='Todo task'
              value={inputValue}
              onChange={onInputChange}
              />
            </form>
              <button
              onClick={addTask}
              >
                add task
              </button>
              <button
             onClick={deleteTask} >
                delete task
              </button>

          </div>
      <div className="col-md-5" style={{paddingLeft:'20px'}}>

        <ol>
          { 
          task.map( taskItem=>{ return <li key={taskItem}>{taskItem}
            <button onClick={() => deleteTask(taskItem)}>
             
             delete task
             
             </button> 
             </li>  
           } ) }
          
        </ol>
      
       </div>
        </div>
    
      </div>

    </>
  )
}


export default App
