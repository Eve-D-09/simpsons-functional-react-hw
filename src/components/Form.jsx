import React, { useState } from "react";
import { validate } from "../validation/index";

const Form = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState(null);

  const onInput = async (e) => {
    const result = { ...input, [e.target.id]: e.target.value };
    setErrors(await validate(result, "login"));
    setInput(result);
  };

  console.log(input);

  return (
    <div className="form">
      <input value={input.email} onInput={onInput} id="email" type="text" />
      <p>{errors && errors.email}</p>
      <input value={input.password} onInput={onInput} id="password" type="password" />
      <p>{errors && errors.password}</p>
      <button type="submit">Login</button>
    </div>
  );
};

export default Form;

