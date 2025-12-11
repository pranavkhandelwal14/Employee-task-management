import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 p-20 border-emerald-600 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 outline-none bg-transparent border-emerald-600 rounded-full px-6 py-2 text-lg placeholder:text-gray-400"
            type="email"
            placeholder="Enter you email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 outline-none bg-transparent border-emerald-600 rounded-full px-6 py-2 text-lg placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter you Password"
          />
          <button className="mt-7 outline-none border-none bg-emerald-600 font-semibold hover:bg-emerald-700 w-full rounded-full px-8 py-2 text-lg">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
