import React from "react";
import { Button, Input } from "antd";
import img from "../assets/1.png";

const PageOne = () => {
  return (
    <div
      style={{
        marginTop: "6rem",
        display: "flex",
        justifyContent: "space-between",
        flex: "1",
      }}
    >
      <div className="pageOne">
        <h1 style={{ fontSize: "3.5rem" }}>
          Welcome to your Digital Front Door!
        </h1>
        <p style={{ color: "#999", fontSize: "1.2rem" }}>
          Where you will <strong>help youe doctor</strong> out by providing
          necessary information to have a <strong>successful visit</strong>
        </p>
        <Input
          placeholder="Enter your mobile number"
          style={{ width: "15rem", display: "block", marginBottom: "1rem" }}
        />
        <Button type="primary" s>
          Submit
        </Button>
      </div>
      <img
        className="imageOne"
        src={img}
        alt=""
        style={{ height: "30rem", marginTop: "-5rem" }}
      />
    </div>
  );
};

export default PageOne;
