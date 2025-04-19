import React from "react";
import "../styles/loading.css";
const LoadingPage = () => {
  return (
    <div>
      <div id="preloader">
        <div className="waviy">
          {/* alwataniacandle */}
          <span style={{ animationDelay: "0.1s" }}>A</span>
          <span style={{ animationDelay: "0.2s" }}>K</span>
          <span style={{ animationDelay: "0.3s" }}>L</span>
          <span style={{ animationDelay: "0.9s" }}>&nbsp;</span>
          <span style={{ animationDelay: "0.4s" }}>H</span>
          <span style={{ animationDelay: "0.5s" }}>O</span>
          <span style={{ animationDelay: "0.8s" }}>M</span>
          <span style={{ animationDelay: "0.6s" }}>E</span>
          {/* <span style={{ animationDelay: "0.7s" }}>i</span>
          <span style={{ animationDelay: "0.8s" }}>a</span>
          <span style={{ animationDelay: "0.9s" }}>&nbsp;</span>
          <span style={{ animationDelay: "1.0s" }}>C</span>
          <span style={{ animationDelay: "1.1s" }}>a</span>
          <span style={{ animationDelay: "1.2s" }}>n</span>
          <span style={{ animationDelay: "1.3s" }}>d</span>
          <span style={{ animationDelay: "1.4s" }}>l</span>
          <span style={{ animationDelay: "1.5s" }}>e</span> */}
          <span style={{ animationDelay: "0.9s" }}>&nbsp;</span>
          <span style={{ animationDelay: "1.6s" }}>.</span>
          <span style={{ animationDelay: "1.7s" }}>.</span>
          <span style={{ animationDelay: "1.8s" }}>.</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
