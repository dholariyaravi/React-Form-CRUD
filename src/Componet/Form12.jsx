import React, { useEffect, useState } from "react";
import "./Foemtype.css";
import { useNavigate } from "react-router-dom";
import Dataprnit from "./Dataprnit";
import { Link, json } from 'react-router-dom';
import Login from "./Login";
import { toast } from "react-toastify";

const Form12 = (propa) => {


  const [submittedData, setSubmittedData] = useState(() => {
    const saved = localStorage.getItem("USERData");
    const initialValue = JSON.parse(saved);
    return initialValue || "";

  });

  // const [submittedData, setSubmittedData] = useState([]);

  const [add, setadd] = useState(-1);
  const naviget = useNavigate()
  const [data, setdata] = useState({
    Date: "",
    Fristname: "",
    Lastname: "",
    email: "",
    MobaliNo: "",
    Gender: "",
    password: "",
  });

  const myhendal = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  // ====================localStorage DATA======================= 

  useEffect(() => {
    localStorage.setItem('USERData', JSON.stringify(submittedData));

  }, [submittedData]);


  // ========================Delete=======================
  function mydelete(index) {
    console.log(index, "this index row want to be delete");
    let total = [...submittedData]
    total.splice(index, 1)
    setSubmittedData(total)
  }
  // ========================Edit=======================
  const myupdate = (index) => {
    let updata = submittedData[index]
    setdata(updata)
    setadd(index)
  }
  // ===============================================
  const mychenaj = (e) => {
    e.preventDefault();
    console.log(data);

    setSubmittedData((predata) => [...predata, data]);
    setdata({ data })

    // alert('Registration successful');

    if (add >= 0) {
      let p = [...submittedData]
      p[add].Fristname = data.Fristname
      p[add].Lastname = data.Lastname
      p[add].email = data.email
      p[add].MobaliNo = data.MobaliNo
      p[add].Gender = data.Gender
      p[add].password = data.password
      setSubmittedData(p)
    } else {

      const mydata11 = [...submittedData]
      mydata11.push(data)
      setSubmittedData(mydata11)
    }
    setadd(-1);

  };
  // naviget('/login')


  return (
    <div>
      <form onSubmit={mychenaj} className="Form_11">

        <label className="px-5"></label>

        <div className="row">
          <div className="col-sm-8">  </div>

          <div className="col-sm-4 text-end">
            Date :-
            <input type="Date"
              name="Date"
              className="Date_pro"
              value={data.Date || ""}
              onChange={myhendal}
            />
            <br />
            <br />
          </div>


          <div className="col-sm-6">
            <label className="">Fristname </label>
            <input
              type="text"
              name="Fristname"
              value={data.Fristname || ""}
              className="Form_12pro"
              placeholder="Fristname"
              onChange={myhendal}
            />
            <br />
            <br />
          </div>

          <div className="col-sm-6">
            <label className="text-start">Lastname</label>
            <input
              type="text"
              name="Lastname"
              value={data.Lastname || ""}
              className="Form_12pro"
              placeholder="Lastname"
              onChange={myhendal}
            />
            <br />
            <br />
          </div>

          <div className="col-sm-6">
            <label className="px-3">email</label>
            <input
              type="text"
              name="email"
              value={data.email || ""}
              className="Form_12pro"
              placeholder="email"
              onChange={myhendal}
            />
            <br />
            <br />
          </div>

          <div className="col-sm-6">
            <label>MobaliNo</label>
            <input
              type="text"
              name="MobaliNo"
              value={data.MobaliNo || ""}
              className="Form_12pro"
              placeholder="MobaliNo"
              onChange={myhendal}
            />
            <br />
            <br />
          </div>

          <div className="col-sm-6">
            <label className="px-3">Password</label>
            <input
              type="password"
              name="password"
              value={data.password || ""}
              className="Form_12pro"
              placeholder="password"
              onChange={myhendal}
            />
            <br />
            <br />
          </div>

          <br />
          <br />

          <div className="col-sm-6">
            <br />
            <div className="center_gred py-4">
              <span className="">Gender :-- </span>
              <input
                type="radio"
                name="Gender"
                value="male"
                onChange={myhendal}
              />
              male
              <input
                type="radio"
                name="Gender"
                value="Femel"
                onChange={myhendal}
              />
              Femel
              <input
                type="radio"
                name="Gender"
                value="other"
                onChange={myhendal}
              />
              Other
            </div>
          </div>
        </div>

        <br />
        <br />
        <span className="px-4"></span>
        <input
          type="submit"
          value="submit"
          className="btn btn-dark button_pro text-center"
        />

      </form>
      <div className='text-center'>
        <Link to={"/login"} >Already have an account?</Link>
      </div>
      <br />

      {/* ========================= / */}
      <div>
        <table className="center_gred1" border={1} width="auto" cellPadding={22}>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Fristname</th>
              <th>Lastname</th>
              <th>email</th>
              <th>password</th>
              <th>MobaliNo</th>
              <th>Gender</th>
            </tr>
            {submittedData.map((data, index) => {
              return (
                <tr key={index} >
                  <td>{data.Date}</td>
                  <td>{data.Fristname}</td>
                  <td>{data.Lastname}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>{data.MobaliNo}</td>
                  <td>{data.Gender}</td>
                  <td><button className="btn btn-dark my-1" onClick={() => myupdate(index)}>Update</button></td>
                  {/* <td><button className="btn btn-dark delete button"
                   onClick={() =>  mydelete(index)}>Delete</button></td> */}
                  <button
                    className="delete button btn btn-dark my-3"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Do you really want to delete this Crumb?"
                      )
                      if (confirmBox === true) {
                        mydelete(index)
                      }
                    }}>
                    Delete
                  </button>

                </tr>
              )
            }
            )}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      {/* <Dataprnit ref={data}/> */}

    </div>
  );
};

export default Form12;
