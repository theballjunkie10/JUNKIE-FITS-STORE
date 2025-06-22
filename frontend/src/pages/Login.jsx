
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import login from "../assets/homescreen.png";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  
  const [currState, setCurrState] = useState("Login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currState === "Sign Up")
       {
    
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          navigate("/")
        } else {
          toast.error(response.data.message);
        }
      } else {
       
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (response.data.success) {
          
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          navigate("/")
        } else {
          toast.error(response.data.message || "Login failed");
        }
      }
    } catch (error) {
      
      console.log("login error response",error);

      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if(error.response?.status ===401 ){
        toast.error("invalid email or password");
      } else  {
        toast.error(error.message || "Something went wrong. please try again");
      }
    }    
  };

  return (
    <div className="absolute top-0 left-0 h-full w-full z-50 bg-white">
     
      <div className="flex h-full w-full">
        
        <div className="w-1/2  hidden sm:block">
          <img
            src={login}
            alt="loginImg"
            className="object-cover h-full w-full"
          />
        </div>
 
        <div className="flex w-full sm:w-1/2 items-center justify-center text-[90%]">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5"
          >
            <div className="w-full mb-4">
              <h3 className="bold-36">{currState}</h3>
            </div>
            {currState === "Sign Up" && (
              <div className="w-full">
                <label htmlFor="name" className="medium-15">
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Name"
                  className="w-full px-3
                         py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                  required
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="email" className="medium-15">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
                className="w-full px-3
                         py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="medium-15">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="w-full px-3
                         py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-dark w-full mt-5 !py-[8px] !rounded"
            >
              {currState === "Sign Up" ? "Sign Up" : "Login"}
            </button>
            <div className="w-full flex flex-col gap-y-3">
              <div className="underline medium-15">Forgot your password?</div>
              {currState === "Login" ? (
                <div className="underline medium-15">
                  Don't have an account?
                  <span
                    onClick={() => setCurrState("Sign Up")}
                    className="cursor-pointer"
                  >
                    {" "}
                    Create account
                  </span>
                </div>
              ) : (
                <div className="underline medium-15">
                  Already have an account?
                  <span
                    onClick={() => setCurrState("Login")}
                    className="cursor-pointer"
                  >
                    {" "}
                    Login
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
