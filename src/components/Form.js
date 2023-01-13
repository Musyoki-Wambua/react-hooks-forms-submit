import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState ([]);
  const [errors, setErrors]= useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit (event){
    event.preventDefault();
    const formData= {firstName: firstName,lastName: lastName,};

    if(firstName.length > 0){
      // if not empty create a new object formData with said properties 
      const formData= {firstName: firstName,lastName: lastName};
      const dataArray= [...submittedData, formData];

      // update the submittedData with the new array
      setSubmittedData(dataArray);
      // clear input fields and errors
      setFirstName('');
      setLastName("");
      setErrors([])
    }else {
      setErrors(["First name is required!"]);
    }

    // use spread operator to create a new array with the objects of formData being added into the new array as the last element.
    
    const dataArray= [...submittedData, formData];
    // dataArray has all the previous elements as well as the newly added one
    setSubmittedData(dataArray);
    // props.sendFormDataSomewhere(formData);
    setFirstName("");
    setLastName("");
  }
  const listOfSubmissions= submittedData.map((data, index) => {
    return (
      <div key= {index}> 
      {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      
      {errors && errors.length > 0 
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}

    <h3> Submissions</h3>
    {listOfSubmissions}
    </div>

    
  );
}

export default Form;
