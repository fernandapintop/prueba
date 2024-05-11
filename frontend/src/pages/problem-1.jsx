import "./problem-1.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const validInput = function (lines) {
  const linesLength = lines.length;
  const line1 = lines[0];
  const line2 = lines[1];
  let obstacles1 = [];
  if (linesLength >= 3) {
    const indiceStart = 2;

    for (let i = indiceStart; i < lines.length; i++) {
      obstacles1.push(lines[i].split(" "));
    }
  }

  const obstaclesArray = obstacles1.map((subArray) =>
    subArray.map((num) => parseInt(num))
  );

  console.log(obstaclesArray);

  const [n, k] = line1.split(" ").map((num) => parseInt(num));
  const [rq, cq] = line2.split(" ").map((num) => parseInt(num));

  const dataTosend = {
    n,
    k,
    rq,
    cq,
    obstacles: obstaclesArray,
  };
  return dataTosend;
};

const Problem1 = function () {
  const [InputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const parse = InputValue;
    const lines = parse.split("\n");

    const data = validInput(lines);

    try {
      const response = await fetch("http://localhost:3000/problem-1", {
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
      <div className="problem1-form-box">
        <h1>Problem #1</h1>
        <form className="problem1-form" onSubmit={handleSubmit}>
          <label>Put the values here</label>
          <textarea
            id="input-1"
            value={InputValue}
            onChange={handleInputChange}
            placeholder="enter the data here"
            rows={10}
            cols={50}
          ></textarea>
          <p>Queens Attack</p>
          <pre className="output-1" id="output-1">
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

export default Problem1;
