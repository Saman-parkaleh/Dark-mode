import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const getMode = () => {
    const initialMode = localStorage.getItem("mode");
    if (initialMode == null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return true;
      } else {
        return false;
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"));
    }
  };

  const [dark, setDark] = useState(getMode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);

  return (
    <div className={dark ? "contaner dark-mode" : "contaner"}>
      <div className="heder">
        <div className="list">
          <ul>
            <li>Home</li>
            <li>AboutUs</li>
            <li> ContactUs</li>
          </ul>
        </div>
        <label className="btn">
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="content ">
        <div className="label">
          <h1> {dark ? "Dark mode is enabled" : " Light mode is enabled"}</h1>
        </div>
        <div className="boximags">
          <div className="card">
            <div className="card-item">
              <img src="image/1.jpg" alt="" />
              <h2>کارت اول</h2>
              <p>این کارت اول است</p>
            </div>
            <div className="card-item">
              <img src="image/2.jpg" alt="" />
              <h2>کارت دوم</h2>
              <p>این کارت دوم است</p>
            </div>
            <div className="card-item">
              <img src="image/3.jpg" alt="" />
              <h2>کارت سوم</h2>
              <p>این کارت سوم است</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
