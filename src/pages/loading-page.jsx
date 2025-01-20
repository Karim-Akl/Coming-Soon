import React from 'react';
import "../styles/loading.css"
const LoadingPage = () => {
  return (
    <div>
      <div id="preloader">
        <div className="waviy">
          <span style={{ animationDelay: '0.1s' }}>L</span>
          <span style={{ animationDelay: '0.2s' }}>o</span>
          <span style={{ animationDelay: '0.3s' }}>a</span>
          <span style={{ animationDelay: '0.4s' }}>d</span>
          <span style={{ animationDelay: '0.5s' }}>i</span>
          <span style={{ animationDelay: '0.6s' }}>n</span>
          <span style={{ animationDelay: '0.7s' }}>g</span>
          <span style={{ animationDelay: '0.8s' }}>.</span>
          <span style={{ animationDelay: '0.9s' }}>.</span>
          <span style={{ animationDelay: '1.0s' }}>.</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
