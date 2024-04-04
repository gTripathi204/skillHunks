import { useEffect, useState } from "react";
import { postData } from "../apis/userApis";

export const Home = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState(null);
  const [actionTaken, setActionTaken] = useState(false);

  const submitHandler = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      let data = {
        name: name,
        number: number,
      };
      const response = await postData(`${apiUrl}/putData`, data);
      console.log("Gaurav", response);
      if (response.code === 200) {
        setMessage(response.message);
        setName("");
        setNumber("");
        setActionTaken(true);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } else {
        setMessage(response.message);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ background: "#E5E4E2", height: "100vh" }}>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid" style={{ margin: "auto 2rem" }}>
          <div style={{ display: "flex" }}>
            <img
              src="/logo.jpeg"
              alt="Logo"
              style={{ height: "3rem", marginRight: "1rem" }}
            />
            <h1 style={{ fontFamily: "ui-monospace" }}>SkillHunks</h1>
          </div>
        </div>
      </nav>

      <div
        class="card"
        style={{ width: "80%", margin: "2rem auto", background: "#f5eaae" }}
      >
        <div class="card-body">
          Established in 2021 Skillhunks has been a pioneer in providing Jobs to
          professionals in their respected fields. With over 2600+ job
          recommendations Skillhunks stands strong as an intermediary between
          Job seekers and job providers.
        </div>
      </div>

      <div
        class="card"
        style={{ width: "50%", margin: "2rem auto", background: "#e3e1cf" }}
      >
        <div class="card-body">
          Join us to connect with your dreams and get the best recommendations
          from top recruiters. Follow us on our social handles for instant
          updates.{" "}
        </div>
      </div>
      {actionTaken ? (
        <>
          <div
            class="card"
            style={{
              width: "30%",
              margin: "1rem auto",
              height: "5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center", // Optional: Align text center
              background: "#90EE90",
            }}
          >
            <h3>Subscribed Successfully</h3>
          </div>
        </>
      ) : (
        <div class="card" style={{ width: "30%", margin: "1rem auto" }}>
          <div class="card-header">Subscribe</div>
          <div class="card-body">
            <div>
              <input
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
              ></input>
              <br />
              <input
                placeholder="Phone"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                style={{ marginBottom: "1rem" }}
              ></input>
              <br />
              <button
                type="button"
                class="btn btn-success"
                onClick={submitHandler}
              >
                Subscribe{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
