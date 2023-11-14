import { useNavigate } from "react-router-dom"
import { useMyContext } from "./context";
import  Axios  from "axios";
import { useEffect, useState } from "react";
function Home(props){
    const navigate=useNavigate();
    const Context=useMyContext();

const [data,setData]=useState()

const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };
useEffect(()=>{
    getData();
},[]);
    return(
<div className="container flex h-screen justify-center items-center gap-4">
    <p>{data}</p>
    <button className="login bg-lime-300 rounded-md w-20 h-10"
     onClick={()=>navigate("/login")}>Login</button>
    <button className="signup bg-lime-300 rounded-md w-20 h-10" onClick={()=>navigate("/signup")}>Signup</button>
    <div><h1>WELCOME HOME</h1>
    <h1>{props.data}</h1>
    </div>
    <h1>{Context}</h1>
</div>
    )
}
export default Home