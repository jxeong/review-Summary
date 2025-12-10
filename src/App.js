import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const summarize = async () => {
    if (!inputText.trim()) {
      alert("요약할 텍스트를 입력하세요!");
      return;
    }

    setLoading(true);
    setSummary("");

    try {
      const res = await axios.post(
        "https://jxeong-reviewsummary-t5.hf.space/summarize",
        { text: inputText }
      );
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      setSummary("요약 중 오류가 발생했습니다.");
    }

    setLoading(false);
  };

  // TikTok Login 버튼에서 실행할 함수
  const handleTikTokLogin = () => {
    const sandboxURL =
      "https://www.tiktok.com/auth/authorize/?client_key=awfdq8tcmsjsiwdo&scope=login.basic&response_type=code&redirect_uri=https://review-summary-rho.vercel.app/";

    window.location.href = sandboxURL;
  };

  return (
    <div className="container">
      <h1 className="title">🥗🌯🍩 음식점 리뷰 요약기 🍔🌭🍣</h1>

      {/* TikTok Login 버튼 */}
      <button
        className="tiktok-login-btn"
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleTikTokLogin}
      >
        Login with TikTok
      </button>

      <textarea
        className="input-area"
        rows={10}
        placeholder="리뷰 텍스트를 입력하세요..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>

      <button className="summarize-btn" onClick={summarize} disabled={loading}>
        {loading ? "요약 중..." : "요약하기"}
      </button>

      {summary && (
        <div className="result-box">
          <h2 className="result-title">📌 요약 결과:</h2>
          <p className="result-text">{summary}</p>
        </div>
      )}

      {/* 링크 */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <Link to="/terms" style={{ marginRight: "10px" }}>
          Terms of Service
        </Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </div>
  );
}

export default App;
