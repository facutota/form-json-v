import { useEffect, useState } from "react";
import myData from "./data/db.json"
import Form from './elements/Form';
import ResultForm from "./elements/resultForm";
import getAllForms from "./functions/readAForm";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,   
  redirect,
} from "react-router-dom";

import "./styles/tailwind.css";



export default function App() {
    
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Root />}>
         
        <Route element={<Navigate to="/form" replace />} path="/" />
        
        <Route element={<MainForm />} path="form" > </Route>
        <Route element={<Result />} path="result" ></Route>
        {/* el path=* sirve para cuando mandan alguna direccion que no existe en route */}
        <Route element={<h2>Not Found</h2>} path="*" />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

function Root() {
  return (
    <main>
      <header>
        
      </header>
      <Outlet />
    </main>
  );
}

function MainForm() {
  return (
    <div className="flex-col items-center max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <h1 className="text-blue-600 font-medium leading-tight text-5xl">Formulario JSON</h1>
      
        <Form id="json-form" className="flex-center" schema={myData.items}   />
        
    </div>
  );
}

function Result(){
  useEffect(() => {
     getAllForms().then(form => {
         setAllForm(form);
       })
       .catch(err => {
         alert(err);
       });
     }, []);

     const [allForm, setAllForm] = useState(null);
  return(
    <div>
    {
      allForm && allForm.map(form => 
         <ResultForm form={form}/>)
   }
   </div>
  )
}

async function resultFormAction({  }) {
  
  //let formData = await request.formData();
  
  return navigator(`/result`);
}
