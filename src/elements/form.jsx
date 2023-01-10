import React, { Component } from 'react';
import createForm from '../functions/createForm';
import ResultForm from './resultForm';
import { Route, Routes } from 'react-router-dom';


class Form extends Component {
    state = {
        data: {}
    };

    // Método para manejar los cambios en los campos de entrada
    handleChange = event => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [name]: value
            }
        }));
    };

    // Método para enviar los datos del formulario al servidor
    handleSubmit = async event => {
        try {
            event.preventDefault(); // Evita que el formulario sea enviado hasta que se valide
            // Obtén los datos del formulario del estado
            const { data } = this.state;   
             
            await createForm(data);        
            
        } catch (error) {
            console.log(error);
        }
        

    };


    render() {
        const { schema } = this.props; // Obtén el esquema del formulario desde las propiedades
        const { data } = this.state; // Obtén los datos del formulario del estado

        // Crea un elemento de formulario y añade los elementos del formulario dinámicamente a partir del esquema
        return (
            <div>
                <form className='block p-6 rounded-lg shadow-lg bg-white max-w-sm' action="/result" onSubmit={this.handleSubmit} >
                    {schema.map((field, i) => {
                        switch (field.type) {
                            case 'text':
                                return (
                                    <div className='form-group mb-6' key={i}>
                                        <label className='form-label inline-block mb-2 text-gray-700' htmlFor={field.name}>{field.label}:</label>
                                        <input className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                                     border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            type="text"
                                            name={field.name}
                                            required={field.required}
                                            value={data[field.name] || ''}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                );
                            case 'email':
                                return (
                                    <div className='form-group mb-6' key={i}>
                                        <label className='form-label inline-block mb-2 text-gray-700' htmlFor={field.name}>{field.label}:</label>
                                        <input className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                                     border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            type="email"
                                            name={field.name}
                                            required={field.required}
                                            value={data[field.name] || ''}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                );
                            case 'textarea':
                                return (
                                    <div className='form-group mb-6' key={i}>
                                        <label className='form-label inline-block mb-2 text-gray-700' htmlFor={field.name}>{field.label}:</label>
                                        <textarea className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                                     border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            name={field.name}
                                            required={field.required}
                                            value={data[field.name] || ''}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                );
                            case 'select':
                                return (
                                    <div className='form-group mb-6' key={i}>
                                        <label className='form-label inline-block mb-2 text-gray-700' htmlFor={field.name}>{field.label}:</label>
                                        <select name={field.name} value={data[field.name] || ''} required={field.required} onChange={this.handleChange}>
                                            <option className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                                     border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                                value="">--Por favor elegir una opcion de la lista--</option>
                                            {field.options.map(option => (
                                                <option className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                                            border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                                    key={option.value} value={option.value} onChange={this.handleChange}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                );
                            case 'date':
                                return (
                                    <div className='form-group mb-6' key={i}>
                                        <label className='form-label inline-block mb-2 text-gray-700' htmlFor={field.name}>{field.label}:</label>
                                        <input className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                                     border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            type="date"
                                            name={field.name}
                                            required={field.required}
                                            value={data[field.name] || ''}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                );
                            case 'checkbox':
                                return (
                                    <div className='form-group form-check mb-6' key={i}>
                                        <label className='form-label inline-block mb-2 text-gray-700' htmlFor={field.name}>{field.label}:</label>
                                        <input className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 
                                    focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-rigth mr-2 cursor-pointer'
                                            type="checkbox"
                                            name={field.name}
                                            required={field.required}
                                            value="Acepto"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                );
                            case 'submit':
                                return (
                                    <button type="submit" className='w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' key={i}>Enviar</button>
                                );
                            default:
                                return null;

                        }
                      

                    })}

                </form>
                
            </div>
        );
    }
}

export default Form;