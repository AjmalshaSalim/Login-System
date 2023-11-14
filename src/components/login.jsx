import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const[loginData,loginState]=useState({
name:"",
password:"",
message:""
    })

    const navigate=useNavigate();

const handleChange=(event)=>{
    const{name,value}=event.target;
loginState((prevState)=>({
    ...prevState,
 [name]:value,
}))

};
const handleSubmit=()=>{
 const data=localStorage.getItem("userData");
const parsedData=JSON.parse(data)

    console.log(parsedData.Username);
    console.log(loginData.name);

if(parsedData.Username===loginData.name){
    if(parsedData.Password===loginData.password){
        navigate("/home");
    }else{
        loginState((prevState)=>({
            ...prevState,
            message:"Password doesn't matching"
        }))
    }

}else{
loginState((prevState)=>({
 ...prevState,
 message:"user doesn't exist"
}))
}

}
    return (
        <div className="Login flex h-screen justify-center items-center text-lime-800">
            <div className=" container bg-lime-200 w-96 h-min rounded-3xl gap-4 shadow-lg transition-transform hover:scale-105">
                <div className="layer1 h-20 py-5 text-3xl text-lime-800">
                    <p>Sign In</p>
                </div>
                <div className="layer2 h-20 py-5">
                    <label htmlFor="" className="input p-4">User name </label>
                    <input type="text" className="Username rounded-md text-center p-4 h-5" placeholder="Enter Name"
                    onChange={handleChange} name="name"/>
                </div>
                <div className="layer3 h-20 py-5">
                    <label htmlFor="" className="input p-4">Password </label>
                    <input type="password" className="Password rounded-md text-center p-4 h-5" placeholder="Enter Password"
                    onChange={handleChange} name="password" />
                </div>
                <div className="layer4 h-20 py-5">
                    <button className="submit w-80 h-12 bg-lime-400 rounded-xl hover:bg-lime-500" type="submit" onClick={handleSubmit}>
                        Login</button>
                </div>
                <h3 className="message pb-3">{loginData?.message}</h3>
            </div>
            <button className="login bg-lime-300 rounded-lg w-20 h-10 ms-20 mb-96 hover:bg-lime-500"
     onClick={()=>navigate("/signup")}>Signup</button>
        </div>
    )
}
export default Login;