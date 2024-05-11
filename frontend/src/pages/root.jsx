import { Link } from "react-router-dom";
import "./root.css";

const Root = function () {
  return (
    <div className="root-page">
      <h1>Test A2O</h1>
      <div className="root-card">
        <p>Choose Problem</p>
        <Link className="root-link" to={"/problem-1"}>
          Problem #1
        </Link>
        <Link className="root-link" to={"/problem-2"}>
          Problem #2
        </Link>
      </div>
    </div>
  );
};

export default Root;
