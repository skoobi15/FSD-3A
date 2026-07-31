import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "#8B7355",
        color: "#fff",
        padding: "20px 40px",
      }}
    >
      <div>
        <h4 style={{ margin: 0 }}>Serving Delicious Meals Since 2026</h4>
        <p style={{ margin: "10px 0 0 0" }}>
          📍 Contact: +91 XXXXXXXXXX
          <br />
          ✉️ Food@gmail.com
        </p>
      </div>

      <div>
        <h4 style={{ margin: 0 }}>Opening Hours</h4>
        <p style={{ margin: "10px 0 0 0" }}>
          Mon–Fri : 10 AM – 10 PM
          <br />
          Sat–Sun : 9 AM – 11 PM
        </p>
      </div>
    </footer>
  );
};

export default Footer;