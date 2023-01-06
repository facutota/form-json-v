import './App.css';
import myData from "./data/db.json"
import FormBase from './elements/FormBase';
import "./styles/tailwind.css";



function App() {

  const onSubmit = (e) => {
    e.preventDefault()       
    const formData = new FormData(e.target);
    console.log(formData.getAll());
  }
  {
    myData.items.map(item => (
      console.log(item)
      ));
  }


  return (
    <div className="App">
     <h1 className="text-blue-600">Formulario JSON</h1> 
     <form onSubmit={(e) => onSubmit(e)}>        
    {
        myData.items ? myData.items.map(item => (
          <FormBase 
            
            label={item.label}
            name={item.name}
            required={item.required}
            type={item.type}            
            {
              item.type.includes("select") &&                
                <select>
                  <option value={item.options}></option>
                </select>         
              }   
            
            

            />
        )) : <p>Cargando...</p>
    }
        
      </form>

    </div>
  );
}

export default App;
