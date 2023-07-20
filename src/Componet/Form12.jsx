import React, { useState } from 'react';
import  './Foemtype.css'

const Form12 = () => {
  
const [data, setdata] = useState ({
     Fristname : "",
     Lastname : "",
     City : "",
     Aadress : "", 
     State : "",
     country : "",
     Gender : "",
     BoXx : {},
 })

    const myhendal = (e) => {
        setdata({...data, [e.target.name] : e.target.value})
     }
  
   const mychenaj = (e) => {
       e.preventDefault();
       console.log(data);
   }


    return (
        <div >
            <form onSubmit={mychenaj} className='Form_11'>

                  <label className='px-5'></label>
                  <label className='px-5'></label>
                  <label className='px-5'></label>
                  <label className='px-5'></label>
                  Date :-  <input type='Date' className='Date_pro' />
                                         
                                         <br/><br/> <br/>
                <label>Fristname</label>
                <input type='text' name='Fristname'value={data.Fristname} className='Form_12pro' placeholder='Fristname'  onChange={myhendal}/><br/><br/>

                <label>Lastname</label>
                <input type='text' name='Lastname' value={data.Lastname} className='Form_12pro' placeholder='Lastname' onChange={myhendal}/><br/><br/>

                <label className='px-3'>City</label>
                <input type='text' name='City' value={data.City} className='Form_12pro' placeholder='City' onChange={myhendal}/><br/><br/>

                <label>Aadress</label>
                <input type='text' name='Aadress' value={data.Aadress} className='Form_12pro' placeholder='Aadress' onChange={myhendal}/><br/><br/>

                <label className='px-2'>State</label>
                <input type='text' name='State'value={data.State} className='Form_12pro' placeholder='State' onChange={myhendal}/><br/><br/>

                <label>country</label>
                <input type='text' name='country' value={data.country} className='Form_12pro' placeholder='country' onChange={myhendal}/> <br/><br/>
                      
                <label className='px-4'></label>
                <textarea name="w3review" className='Form_12pro' rows="4" cols="50" disabled>
                     revues..............................
                </textarea>
                
                <br/><br/>

                <span className=''>Gender  :-- </span>  
                 <input type='radio' name='Gender'  className='Form_13pro' value='male' onChange={myhendal}/>
                  male
                  <input type='radio' name='Gender'  className='Form_13pro' value='Femel' onChange={myhendal}/>
                  Femel
                  <input type='radio' name='Gender'  className='Form_13pro' value='Other' onChange={myhendal}/>
                  Other
 
             <br/><br/>

             <span> checkbox :-</span>
                 <input type='checkbox' name='BoXx' className='Form_13pro' value='Reding'  onChange={myhendal}/>
                  Reding
                  <input type='checkbox' name='BoXx' className='Form_13pro' value='book'  onChange={myhendal}/>
                  book
                  <input type='checkbox' name='BoXx' className='Form_13pro' value='song' onChange={myhendal}/>
                  Song


                <br/><br/>
                <span className='px-4'></span> 
                   <input type='submit' value='save' className='btn btn-dark px-5 button_pro'/>

            </form>

            <div>
                {data?.data?.map((index, value) => {
                     return (
                        <div key={index}>
                            {value.Fristname}
                            {value.Lastname}
                            {value.City}
                            {value.Aadress}
                            {value.State}
                            {value.country}
                            {value.Gender}
                            {value.BoXx}
                        </div>
                     )
                })}


                {/* {data?.object?.map( (val, index) => {
                    return( <>{val.name} </> )
                })} */}
                
            </div>

            
        </div>
    );
}

export default Form12;
