import React, { useState } from "react";
//import { useNavigate } from 'react-router-dom';

function RegisterCustomer() {

    //const navigate=useNavigate();

    const [customer, setCustomer] = useState({});

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };

   
    
     const saveCustomer = async (e) => {      //Event handling Logic
        e.preventDefault();
         console.log(customer);

      
     try {
            const response = await fetch(
                "http://localhost:5000/api/customers/addCustomer",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(customer)
                }
            );

           if (response.ok) {

                const result = await response.json();

                console.log(result);
                

                alert("Customer Registered Successfully");
                 //navigate("/");
            }
            else 
                {
                alert("Failed to Register Customer");
                }
            }
            catch (error) {
                console.error(error);
                alert("Error occurred");
            }
    };


    return (
        <div className="container mt-4">

            <h2 className="text-center mb-3">Customer Registration</h2>

            <form onSubmit={saveCustomer}>

                <table className="table table-bordered">

                    <tbody>

                        <tr>
                            <td><b>Customer Code</b></td>
                            <td>
                                <input type="text" name="CustomerCode" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>First Name</b></td>
                            <td>
                                <input type="text" name="FirstName" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Last Name</b></td>
                            <td>
                                <input type="text" name="LastName" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Date Of Birth</b></td>
                            <td>
                                <input type="date" name="DateOfBirth" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Gender</b></td>
                            <td>
                                <select name="Gender" className="form-control"
                                    onChange={handleChange}>
                                    <option value="">Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td><b>Email</b></td>
                            <td>
                                <input type="email" name="Email" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Mobile Number</b></td>
                            <td>
                                <input type="text" name="MobileNumber" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Address Line 1</b></td>
                            <td>
                                <input type="text" name="AddressLine1" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Address Line 2</b></td>
                            <td>
                                <input type="text" name="AddressLine2" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>City</b></td>
                            <td>
                                <input type="text" name="City" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>State</b></td>
                            <td>
                                <input type="text" name="State" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Postal Code</b></td>
                            <td>
                                <input type="text" name="PostalCode" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Country</b></td>
                            <td>
                                <input type="text" name="Country" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>PAN Number</b></td>
                            <td>
                                <input type="text" name="PanNumber" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Aadhaar Number</b></td>
                            <td>
                                <input type="text" name="AadhaarNumber" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Occupation</b></td>
                            <td>
                                <input type="text" name="Occupation" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Annual Income</b></td>
                            <td>
                                <input type="number" name="AnnualIncome" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Nominee Name</b></td>
                            <td>
                                <input type="text" name="NomineeName" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Nominee Relationship</b></td>
                            <td>
                                <input type="text" name="NomineeRelationship" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td><b>Nominee Contact Number</b></td>
                            <td>
                                <input type="text" name="NomineeContactNumber" className="form-control"
                                    onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2" className="text-center">
                                <button className="btn btn-primary">
                                    Save Customer
                                </button>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </form>

        </div>
    );
}

export default RegisterCustomer;