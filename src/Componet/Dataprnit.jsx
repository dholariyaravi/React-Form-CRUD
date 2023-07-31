import React from 'react';

const Dataprnit = (data) => {
    return (
        <div>
                 <table className='input_Line_data' border={1} max-width="60%" cellPadding={27}>
            <tbody>
                <tr>
                    <td>Fristname</td>
                    <td>Lastname</td>
                    <td>City</td>
                    <td>Aadress</td>
                    <td>State</td>
                    <td>country</td>
                    <td>Gender</td>
                    <td>BoXx</td>
                </tr>
                {
                  data?.submittedData?.map (
                        (info,ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{info.Fristname}</td>
                                    <td>{info.Lastname}</td>
                                    <td>{info.City}</td>
                                    <td>{info.Aadress}</td>
                                    <td>{info.State}</td>
                                    <td>{info.country}</td>
                                    <td>{info.Gender}</td>
                                    <td>{info.BoXx}</td>
                                </tr>
                            )
                        }
                     )
                }
             </tbody>
            </table>
        </div>
    );
}

export default Dataprnit;
