import myData from "./data/db.json"
import Form from './elements/form';

import "./styles/tailwind.css";



function App() {

  return (
    <div className="flex-col items-center max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <h1 className="text-blue-600 font-medium leading-tight text-5xl">Formulario JSON</h1>
      
        <Form id="json-form" className="flex-center" schema={myData.items} />
    
    </div>
  );
}

export default App;
