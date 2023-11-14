import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [state, setState] = useState({
        Username: "",
        Mobile: "",
        Password: "",
        Password2: "",
        message: "",
    });
const navigate=useNavigate();
    const handleInput = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const CheckHandleInput = () => {
        if (state.Password === state.Password2) {
            localStorage.setItem("userData", JSON.stringify(state));
navigate("/login");
        } else {
            setState((prevState) => ({
                ...prevState,
                message: "Password not matching",
            }));
        }
    };

    return (
        <div className="Login flex h-screen justify-center items-center text-lime-800">
            <div className="container bg-lime-200 w-96 h-min rounded-3xl gap-4 shadow-lg transition-transform hover:scale-105">
                <div className="layer1 h-20 py-5 text-3xl text-lime-800">
                    <p>Sign Up</p>
                </div>
                <div className="layer2 h-20 py-5">
                    <label htmlFor="" className="input p-4">
                        Username
                    </label>
                    <input
                        type="text"
                        className="Username rounded-md text-center p-4 h-5"
                        placeholder="Enter User Name"
                        name="Username"
                        onChange={handleInput}
                    />
                </div>
                <div className="layer2 h-20 py-5">
                    <label htmlFor="" className="input p-4">
                        Mobile No
                    </label>
                    <input
                        type="number"
                        className="Username rounded-md text-center p-4 h-5"
                        placeholder="Enter Mobile No"
                        name="Mobile"
                        onChange={handleInput}
                    />
                </div>
                <div className="layer3 h-20 py-5">
                    <label htmlFor="" className="input p-4">
                        Password
                    </label>
                    <input
                        type="password"
                        className="Password rounded-md text-center p-4 h-5"
                        placeholder="Enter Password"
                        name="Password"
                        onChange={handleInput}
                    />
                </div>
                <div className="layer3 h-20 py-5">
                    <label htmlFor="" className="input p-4">
                        Password
                    </label>
                    <input
                        type="password"
                        className="Password rounded-md text-center p-4 h-5"
                        placeholder="Confirm Password"
                        name="Password2"
                        onChange={handleInput}
                    />
                </div>
                <div className="layer4 h-20 py-5">
                    <button
                        className="submit w-80 h-12 bg-lime-400 rounded-xl hover:bg-lime-500"
                        onClick={CheckHandleInput}
                    >
                        Register
                    </button>
                </div>
            </div>
            <h2>{state.message}</h2>
            <button className="login bg-lime-300 rounded-lg w-20 h-10 ms-20 mb-96 hover:bg-lime-500"
     onClick={()=>navigate("/login")}>Login</button>
        </div>
    );
}

export default Signup;
