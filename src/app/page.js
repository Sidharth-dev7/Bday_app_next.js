'use client';  // Add this at the top

import { useEffect, useState } from "react";

export default function Home() {
  const [showCake, setShowCake] = useState(false);

  useEffect(() => {
    const isFirstTime = localStorage.getItem("first_time_login");

    if (!isFirstTime) {
      setShowCake(true);
      localStorage.setItem("first_time_login", "yes");
    }
  }, []);

  const closeCake = () => {
    setShowCake(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Happy Birthday App!</h1>

      {showCake && (
        <div 
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: "999",
          }}
        >
          <h2 style={{ color: "white" }}>🎂 Happy Birthday! 🎂</h2>
          <img 
            src="/giphy.gif" 
            alt="Birthday Cake" 
            style={{ width: "300px", height: "auto", margin: "20px 0" }}
          />
          <button 
            onClick={closeCake} 
            style={{
              padding: "10px 20px",
              backgroundColor: "pink",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Thank You!
          </button>
        </div>
      )}
    </div>
  );
}

