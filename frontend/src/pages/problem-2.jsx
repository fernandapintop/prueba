import { useState } from "react";
import "./problem-2.css";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

const Problem2 = function () {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { t: inputValue };

    try {
      const response = await fetch(`${backendUrl}/api/problem-2`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        setOutputValue(responseData.data);
      }
      if (response.status === 400) {
        const responseData = await response.json();
        setOutputValue(responseData.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="problem2-form-box">
        <h1>Problem #2</h1>
        <form className="problem2-form" onSubmit={handleSubmit}>
          <label>Put the string</label>
          <textarea
            id="input-2"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="enter the data here"
            rows={5}
            cols={20}
          ></textarea>
          <p>Maximum value of f(s) among all the substrings (s)</p>
          <pre className="output" id="output-2">
            {outputValue}
          </pre>
          <button type="submit">Send Data</button>
        </form>
      </div>
      <Link className="link" to={"/"}>
        Volver a inicio &rarr;
      </Link>
    </>
  );
};

export default Problem2;
