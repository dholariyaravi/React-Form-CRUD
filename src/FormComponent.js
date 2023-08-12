// // FormComponent.js
// import React, { useState } from "react";

// const FormComponent = () => {
//   const [formData, setFormData] = useState({ name: "", age: "" });

//   const [submittedData, setSubmittedData] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData((prevData) => [...prevData, formData]);
//     setFormData({formData});
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Name"
//         />
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//           placeholder="Age"
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <div>
//         {submittedData.map((data, index) => (
//           <div key={index}>
//             <p>Name: {data.name}</p>
//             <p>Age: {data.age}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FormComponent;




import React, { useState } from 'react';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      const newData = { name, age };
      const existingData = JSON.parse(localStorage.getItem('userData')) || [];
      const updatedData = [...existingData, newData];
      localStorage.setItem('userData', JSON.stringify(updatedData));

      // Clear input fields
      setName('');
      setAge('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;



  // const getLocartdata = () => {
  //   let Localcarddata = localStorage.getItem('data111');
  //   if (Localcarddata === []) {
  //     return [] ;
  //   }else{
  //      return JSON.parse(Localcarddata);
  //   }
  // };

  // localStorage.getItem login ........... 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(Login)
    
  //   // Check if user exists in local storage
  //   let mail = localStorage.getItem('USERData')
  //   let pass = localStorage.getItem('USERData')

  //   if(!emaillog || !passwordlog){
  //    setflag(true);
  //    console.log('Empty');
  //   }else if ( passwordlog !== pass || emaillog !== mail){
  //    setflag(true);

  //   } else{
  //       setHome(!home);
  //       setflag(false);
  //   }
  // };
