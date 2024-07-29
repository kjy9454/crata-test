import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import RoundGraph from "../components/roundGraph";
import { convertDateToAuraSoma } from "../utils/convertToAuraSoma";
import moment from "moment";

export default function Result() {
  const screenRef = useRef(null);
  const width = 600;
  const outWidth = width - 200;
  const [colorSize, setColorSize] = useState(3);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [bottom, setBottom] = useState(0);

  const test = "test";
  const [birthDate, setBirthDate] = useState(moment().format("YYYY-MM-DD"));

  const auraSoma = convertDateToAuraSoma(moment(birthDate).format("YYYYMMDD"));
  // 선의 길이와 각도 계산
  const calculateLineAttributes = (widthProp, heightProp) => {
    const lineWidth = (widthProp * outWidth) / 14;
    const lineHeight = (heightProp * outWidth) / 14;
    const lineLength = Math.sqrt(
      lineWidth * lineWidth + lineHeight * lineHeight
    );
    const angle = Math.atan2(lineHeight, lineWidth) * (180 / Math.PI);
    return { lineWidth, lineHeight, lineLength, angle };
  };

  // 상단 왼쪽 대각선
  const { lineLength: topLeftLength, angle: topLeftAngle } =
    calculateLineAttributes(left, top);
  const topLeftTop = width / 2 - (top * outWidth) / 14 + 1;
  const topLeftLeft = width / 2 + 1;
  const adjustedTopLeftAngle = 180 - topLeftAngle; // 각도 보정

  // 상단 오른쪽 대각선
  const { lineLength: topRightLength, angle: topRightAngle } =
    calculateLineAttributes(right, top);
  const topRightTop = width / 2 - (top * outWidth) / 14;
  const topRightLeft = width / 2;
  const adjustedTopRightAngle = topRightAngle; // 각도 보정

  // 하단 오른쪽 대각선
  const { lineLength: bottomRightLength, angle: bottomRightAngle } =
    calculateLineAttributes(right, bottom);
  const bottomRightTop = width / 2 + (bottom * outWidth) / 14 - 1; // 위치 조정
  const bottomRightLeft = width / 2 - 1;
  const adjustedBottomRightAngle = 360 - bottomRightAngle; // 각도 보정

  // 하단 왼쪽 대각선
  const { lineLength: bottomLeftLength, angle: bottomLeftAngle } =
    calculateLineAttributes(left, bottom);
  const bottomLeftTop = width / 2 - 1;
  const bottomLeftLeft = width / 2 - (left * outWidth) / 14 + 1;
  const adjustedBottomLeftAngle = bottomLeftAngle; // 각도 보정

  const handleDownloadPDF = async () => {
    const style = document.createElement("style");
    document.head.appendChild(style);
    style.sheet?.insertRule(
      "body > div:last-child img { display: inline-block; }"
    );
    const input = document.getElementById("pdf-content");
    if (!input) {
      console.error("pdf-content element not found");
      return;
    }
    await html2canvas(input, {
      windowWidth: document.body.scrollWidth,
      windowHeight: document.body.scrollHeight,
    }).then(function (canvas) {
      // document.body.appendChild(canvas);
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const pdf = new jsPDF("l", "px", [imgWidth, imgHeight]);
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${test}.pdf`);
    });
  };

  return (
    <div>
      <div style={{ position: "absolute", zIndex: 999, color: "black" }}>
        <input
          style={{
            border: "1px solid black",
          }}
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <p>오라소마 기준 날짜</p>
      </div>
      <div id="pdf-content" ref={screenRef} style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            width,
            height: width,
            alignItems: "center",
            justifyContent: "center",
            borderRight: "dashed 1px black",
          }}
        >
          <div
            style={{
              width,
              height: 2,
            }}
          />
          <div
            style={{
              width,
              height: 2,
              backgroundColor: "black",
              zIndex: 6,
              position: "absolute",
              alignSelf: "center",
            }}
          />
          <div
            style={{
              height: width,
              width: 2,
              backgroundColor: "black",
              position: "absolute",
              left: width / 2 - 1,
              zIndex: 6,
            }}
          />
          <RoundGraph outWidth={outWidth} colorSize={colorSize} {...auraSoma} />
          {Boolean(top) && Boolean(left) ? (
            <div
              style={{
                position: "absolute",
                top: topLeftTop,
                left: topLeftLeft,
                width: topLeftLength,
                height: "2px",
                zIndex: 30,
                overflow: "hidden",
                transform: `rotate(${adjustedTopLeftAngle}deg)`,
                transformOrigin: "0 0", // 회전 기준점 설정
                backgroundColor: "red",
              }}
            />
          ) : Boolean(left) ? (
            <div
              style={{
                width: (left * outWidth) / 14,
                height: 2,
                backgroundColor: "red",
                position: "absolute",
                left: width / 2 - (left * outWidth) / 14,
                zIndex: 30,
              }}
            />
          ) : (
            <div
              style={{
                width: 2,
                height: (top * outWidth) / 14,
                backgroundColor: "red",
                position: "absolute",
                top: top ? width / 2 - (top * outWidth) / 14 : 2,
                zIndex: 30,
              }}
            />
          )}
          {Boolean(top) && Boolean(right) ? (
            <div
              style={{
                position: "absolute",
                top: topRightTop,
                left: topRightLeft,
                width: topRightLength,
                height: "2px",
                zIndex: 30,
                overflow: "hidden",
                transform: `rotate(${adjustedTopRightAngle}deg)`,
                transformOrigin: "0 0", // 회전 기준점 설정
                backgroundColor: "red",
              }}
            />
          ) : Boolean(right) ? (
            <div
              style={{
                width: (right * outWidth) / 14,
                height: 2,
                backgroundColor: "red",
                position: "absolute",
                left: width / 2,
                zIndex: 30,
              }}
            />
          ) : (
            <div
              style={{
                width: 2,
                height: (top * outWidth) / 14,
                backgroundColor: "red",
                position: "absolute",
                top: top ? width / 2 - (top * outWidth) / 14 : 2,
                zIndex: 30,
              }}
            />
          )}
          {Boolean(bottom) && Boolean(right) ? (
            <div
              style={{
                position: "absolute",
                top: bottomRightTop,
                left: bottomRightLeft,
                width: bottomRightLength,
                height: "2px",
                zIndex: 30,
                overflow: "hidden",
                transform: `rotate(${adjustedBottomRightAngle}deg)`,
                transformOrigin: "0 0", // 회전 기준점 설정
                backgroundColor: "red",
              }}
            />
          ) : Boolean(right) ? (
            <div
              style={{
                width: (right * outWidth) / 14,
                height: 2,
                backgroundColor: "red",
                position: "absolute",
                left: width / 2,
                zIndex: 30,
              }}
            />
          ) : (
            <div
              style={{
                width: 2,
                height: (bottom * outWidth) / 14,
                backgroundColor: "red",
                position: "absolute",
                top: width / 2,
                zIndex: 30,
              }}
            />
          )}
          {Boolean(bottom) && Boolean(left) ? (
            <div
              style={{
                position: "absolute",
                top: bottomLeftTop,
                left: bottomLeftLeft,
                width: bottomLeftLength,
                height: "2px",
                zIndex: 30,
                overflow: "hidden",
                transform: `rotate(${adjustedBottomLeftAngle}deg)`,
                transformOrigin: "0 0", // 회전 기준점 설정
                backgroundColor: "red",
              }}
            />
          ) : Boolean(left) ? (
            <div
              style={{
                width: (left * outWidth) / 14,
                height: 2,
                backgroundColor: "red",
                position: "absolute",
                left: width / 2 - (left * outWidth) / 14,
                zIndex: 30,
              }}
            />
          ) : (
            <div
              style={{
                width: 2,
                height: (bottom * outWidth) / 14,
                backgroundColor: "red",
                position: "absolute",
                top: width / 2,
                zIndex: 30,
              }}
            />
          )}
        </div>
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            padding: 20,
            width,
          }}
        >
          여기에 결과 글자
        </div>
      </div>
      <div>
        <div style={{ margin: 10 }}>오라소마 크기</div>
        {new Array(7).fill("a").map((x, i) => (
          <button
            key={i}
            style={{
              backgroundColor: "gray",
              width: 30,
              height: 30,
              marginLeft: 10,
            }}
            onClick={() => {
              setColorSize(i ? i + 1 : 0);
            }}
          >
            {i}
          </button>
        ))}
      </div>
      <div>
        <div style={{ margin: 10 }}>TOP</div>
        {new Array(7).fill("a").map((x, i) => (
          <button
            key={i}
            style={{
              backgroundColor: "gray",
              width: 30,
              height: 30,
              marginLeft: 10,
            }}
            onClick={() => {
              setTop(i ? i + 1 : 0);
            }}
          >
            {i}
          </button>
        ))}
      </div>
      <div>
        <div style={{ margin: 10 }}>RIGHT</div>
        {new Array(7).fill("a").map((x, i) => (
          <button
            key={i}
            style={{
              backgroundColor: "gray",
              width: 30,
              height: 30,
              marginLeft: 10,
            }}
            onClick={() => {
              setRight(i ? i + 1 : 0);
            }}
          >
            {i}
          </button>
        ))}
      </div>
      <div>
        <div style={{ margin: 10 }}>BOTTOM</div>
        {new Array(7).fill("a").map((x, i) => (
          <button
            key={i}
            style={{
              backgroundColor: "gray",
              width: 30,
              height: 30,
              marginLeft: 10,
            }}
            onClick={() => {
              setBottom(i ? i + 1 : 0);
            }}
          >
            {i}
          </button>
        ))}
      </div>
      <div>
        <div style={{ margin: 10 }}>LEFT</div>
        {new Array(7).fill("a").map((x, i) => (
          <button
            key={i}
            style={{
              backgroundColor: "gray",
              width: 30,
              height: 30,
              marginLeft: 10,
            }}
            onClick={() => {
              setLeft(i ? i + 1 : 0);
            }}
          >
            {i}
          </button>
        ))}
      </div>

      <button
        style={{
          borderRadius: 8,
          padding: "2px 16px",
          backgroundColor: "yellowgreen",
          margin: 20,
        }}
        onClick={handleDownloadPDF}
      >
        PDF DOWNLOAD
      </button>
    </div>
  );
}
