import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const resetPassword = async (e) => {

        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            alert("New Password and Confirm Password do not match");
            return;
        }

        try {

            const token = localStorage.getItem("token");

            const response = await fetch(
                `http://localhost:5000/api/users/resetPassword/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (response.ok) {

                alert(data.message);

                navigate("/UserListForAdmin");

            } else {

                alert(data.message);

            }

        } catch (err) {

            console.log(err);
            alert("Something went wrong");

        }

    };

    return (

        <div className="container mt-5">

            <div className="card">

                <div className="card-header bg-primary text-white">
                    <h3>Reset User Password</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={resetPassword}>

                        <div className="mb-3">
                            <label className="form-label">
                                New Password
                            </label>

                            <input
                                type="password"
                                name="newPassword"
                                className="form-control"
                                value={formData.newPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            Reset Password
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );
}

export default ResetPassword;