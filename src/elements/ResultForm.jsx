import React from "react";

function ResultForm( {form} ) {
    
    return(
        <div>
            <div>
                <h2>Full Name</h2>
                <p>{form.full_name}</p>
            </div>
            <div>
                <h2>Email</h2>
                <p>{form.email}</p>
            </div>
            <div>
                <h2>Birth Date</h2>
                <p>{form.birth_date}</p>
            </div>
            <div>
                <h2>Country of Origin</h2>
                <p>{form.country_of_origin}</p>
            </div>

        </div>
    )
}

export default ResultForm;