import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const exampleRestaurantReview =
    "음식이 전반적으로 깔끔하고 양도 적당했어요. 특히 파스타가 정말 맛있었고, 면이 퍼지지 않고 알덴테로 잘 삶아져서 식감이 좋았습니다. 소스도 너무 느끼하지 않고 재료 본연의 맛이 살아 있어서 만족스러웠어요. 스테이크도 육즙이 풍부하고 고기 잡내가 전혀 없어서 같이 간 일행 모두 만족했습니다. 다만 주말 저녁 시간대라 그런지 웨이팅이 조금 길었고, 내부가 붐벼서 다소 시끄럽게 느껴지긴 했어요. 그럼에도 직원분들이 친절하게 응대해 주셨고 분위기도 전반적으로 좋아서 다음에 다시 방문할 의사는 충분히 있습니다.";

  // const exampleCafeReview =
  //   "카페 분위기가 아늑하고 조용해서 오래 머물기 좋았어요. 인테리어가 깔끔하고 좌석 간 간격도 넉넉해서 혼자 작업하기에도 부담 없었습니다. 아메리카노는 산미가 강하지 않고 고소한 편이라 무난하게 마시기 좋았고, 디저트로 주문한 치즈케이크도 너무 달지 않아서 커피랑 잘 어울렸어요. 다만 콘센트가 있는 좌석이 많지 않아서 노트북을 사용하려면 자리가 조금 제한적일 수 있을 것 같아요. 평일 낮에는 비교적 한산한 편이었고, 조용한 카페를 찾는 분들께는 추천하고 싶습니다.";

  const copyRestaurantExample = () => {
    setInputText(exampleRestaurantReview);
  };

  // const copyCafeExample = () => {
  //   setInputText(exampleCafeReview);
  // };


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
  // const handleTikTokLogin = () => {
  //   const sandboxURL =
  //     "https://www.tiktok.com/auth/authorize/?client_key=awfdq8tcmsjsiwdo&scope=login.basic&response_type=code&redirect_uri=https://review-summary-rho.vercel.app/";

  //   window.location.href = sandboxURL;
  // };

  return (
    <div className="container">
      <h1 className="title">🥗🌯🍩 음식점 리뷰 요약기 🍔🌭🍣</h1>

      {/* TikTok Login 버튼 */}
      {/* <button
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
      </button> */}

      <div className="example-box">
  <div className="example-header">
    <span>✨ 예시 리뷰</span>
  </div>

  <div className="example-item">
    <div className="example-item-header">
      <span>🍽️ 음식점 리뷰</span>
      <button className="copy-btn" onClick={copyRestaurantExample}>
        사용하기
      </button>
    </div>
    <p className="example-text">{exampleRestaurantReview}</p>
  </div>

  {/* <div className="example-item">
    <div className="example-item-header">
      <span>☕ 카페 리뷰</span>
      <button className="copy-btn" onClick={copyCafeExample}>
        사용하기
      </button>
    </div>
    <p className="example-text">{exampleCafeReview}</p>
  </div> */}
</div>



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
          <h2 className="result-title">📌 요약 결과</h2>
          <p className="result-text">{summary}</p>
        </div>
      )}

      {/* 링크 */}
      {/* <div style={{ marginTop: "30px", textAlign: "center" }}>
        <Link to="/terms" style={{ marginRight: "10px" }}>
          Terms of Service
        </Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div> */}
    </div>
  );
}

export default App;
