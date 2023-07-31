import React, { useState } from "react";
import "./Foemtype.css";
import Dataprnit from "./Dataprnit";

const Form12 = () => {
  
  const [data, setdata] = useState({
    Fristname: "",
    Lastname: "",
    City: "",
    Aadress: "",
    State: "",
    country: "",
    Gender: "",
    BoXx: [],
  });

  const [submittedData, setSubmittedData] = useState([]);

  const myhendal = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const mychenaj = (e) => {
    e.preventDefault();
    console.log(data);
    
    setSubmittedData( (predata) => [...predata, data]);
    setdata({data})
  };


  return (
    <div>
      <form onSubmit={mychenaj} className="Form_11">

        <label className="px-5"></label>
        <label className="px-5"></label>
        <label className="px-5"></label>
        <label className="px-5"></label>
        Date :- <input type="Date" className="Date_pro" />
        <br />
        <br /> <br />
        <label className="">Fristname </label>
        <input
          type="text"
          name="Fristname"
          value={data.Fristname}
          className="Form_12pro"
          placeholder="Fristname"
          onChange={myhendal}
        />
        <br />
        <br />
        <label>Lastname</label>
        <input
          type="text"
          name="Lastname"
          value={data.Lastname}
          className="Form_12pro"
          placeholder="Lastname"
          onChange={myhendal}
        />
        <br />
        <br />
        <label className="px-3">City</label>
        <input
          type="text"
          name="City"
          value={data.City}
          className="Form_12pro"
          placeholder="City"
          onChange={myhendal}
        />
        <br />
        <br />
        <label>Aadress</label>
        <input
          type="text"
          name="Aadress"
          value={data.Aadress}
          className="Form_12pro"
          placeholder="Aadress"
          onChange={myhendal}
        />
        <br />
        <br />
        <label className="px-2">State</label>
        <input
          type="text"
          name="State"
          value={data.State}
          className="Form_12pro"
          placeholder="State"
          onChange={myhendal}
        />
        <br />
        <br />
        <label>country</label>
        <input
          type="text"
          name="country"
          value={data.country}
          className="Form_12pro"
          placeholder="country"
          onChange={myhendal}
        />{" "}
        <br />
        <br />
        <label className="px-4"></label>
        <textarea
          name="w3review"
          className="Form_12pro"
          rows="4"
          cols="50"
          disabled
        >
          revues..............................
        </textarea>
        <br />
        <br />
        <span className="">Gender :-- </span>
        <input
          type="radio"
          name="Gender"
          className="Form_13pro"
          value="male"
          onChange={myhendal}
        />
        male
        <input
          type="radio"
          name="Gender"
          className="Form_13pro"
          value="Femel"
          onChange={myhendal}
        />
        Femel
        <input
          type="radio"
          name="Gender"
          className="Form_13pro"
          value="Other"
          onChange={myhendal}
        />
        Other
        <br />
        <br />
        <span> checkbox :-</span>
        <input
          type="checkbox"
          name="BoXx"
          className="Form_13pro "
          value="Reding"
          onChange={myhendal}
        />
        Reding
        <input
          type="checkbox"
          name="BoXx"
          className="Form_13pro"
          value="book"
          onChange={myhendal}
        />
        book
        <input
          type="checkbox"
          name="BoXx"
          className="Form_13pro"
          value="song"
          onChange={myhendal}
        />
        Song
        <br />
        <br />
        <span className="px-4"></span>
        <input
          type="submit"
          value="save"
          className="btn btn-dark px-5 button_pro"
        />
      </form>
           
      <div>
      <table className='input_Line_data' border={1} max-width="60%" cellPadding={27}>
            {submittedData.map( (data , index ) => (
               <tr key={index}>
                  <td> Fristname:{data.Fristname}</td>
                  <td> Lastname:{data.Lastname}</td>
                  <td> City:{data.City}</td>
                  <td> Aadress:{data.Aadress}</td>
                  <td> State:{data.State}</td>
                  <td> country:{data.country}</td>
                  <td> Gender:{data.Gender}</td>
              </tr>
            ))}
            </table>
      </div>
      
       {/* <Dataprnit ref={data}/> */}

    </div>
  );
};

export default Form12;
