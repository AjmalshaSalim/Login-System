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
        <div className="LoginScreen h-screen pt-28 justify-center items-center text-lime-800">
            <div className=" container mx-auto bg-lime-200 bg-opacity-70 w-96 h-min rounded-3xl shadow-lg transition-transform hover:scale-105">
                <div className="layer1 h-20 py-5 text-3xl text-lime-800">
                    <p>Sign In</p>
                </div>
                <div className="layer2 h-20 py-5">
                    <label htmlFor="" className="input p-4">User name </label>
                    <input type="text" className="Username rounded-md text-center p-4 h-5 shadow-md font-light" placeholder="Enter Name"
                    onChange={handleChange} name="name"/>
                </div>
                <div className="layer3 h-20 py-5">
                    <label htmlFor="" className="input p-4">Password </label>
                    <input type="password" className="Password rounded-md text-center p-4 h-5 shadow-md font-light" placeholder="Enter Password"
                    onChange={handleChange} name="password" />
                </div>
                <div className="layer4 h-20 py-5">
                    <button className="submit w-80 h-12 bg-lime-400 rounded-xl hover:bg-lime-500" type="submit" onClick={handleSubmit}>
                        Login</button>
                </div>
                <h3 className="message pb-3">{loginData?.message}</h3>
            </div>
            <div className="p-10">
            <button className="login bg-transparent border-2 border-lime-400 rounded-xl w-80 h-12 hover:bg-lime-500"
     onClick={()=>navigate("/signup")}>Signup</button>
            </div>
        </div>
    )
}
export default Login;