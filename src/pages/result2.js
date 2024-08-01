import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import RoundGraph from "../components/roundGraph";
import { convertDateToAuraSoma } from "../utils/convertToAuraSoma";
import moment from "moment";
import Icon from "../components/icon";

export default function Result() {
  const screenRef = useRef(null);
  const maxWidth = 720;
  const [testWidth, setWidth] = useState(Math.min(window.innerWidth, maxWidth));
  const width = testWidth;
  const outWidth = width * 0.85;
  const borderWidth = Math.max(outWidth * 0.003, 1);
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
  const topLeftTop = width / 2 - (top * outWidth) / 14 + borderWidth;
  const topLeftLeft = width / 2 + borderWidth;
  const adjustedTopLeftAngle = 180 - topLeftAngle; // 각도 보정

  // 상단 오른쪽 대각선
  const { lineLength: topRightLength, angle: topRightAngle } =
    calculateLineAttributes(right, top);
  const topRightTop = width / 2 - (top * outWidth) / 14 - borderWidth;
  const topRightLeft = width / 2 + borderWidth;
  const adjustedTopRightAngle = topRightAngle; // 각도 보정

  // 하단 오른쪽 대각선
  const { lineLength: bottomRightLength, angle: bottomRightAngle } =
    calculateLineAttributes(right, bottom);
  const bottomRightTop = width / 2 + (bottom * outWidth) / 14 - borderWidth; // 위치 조정
  const bottomRightLeft = width / 2 - borderWidth;
  const adjustedBottomRightAngle = 360 - bottomRightAngle; // 각도 보정

  // 하단 왼쪽 대각선
  const { lineLength: bottomLeftLength, angle: bottomLeftAngle } =
    calculateLineAttributes(left, bottom);
  const bottomLeftTop = width / 2 - borderWidth;
  const bottomLeftLeft = width / 2 - (left * outWidth) / 14 + borderWidth;
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
      scale: 2,
      windowWidth: document.body.scrollWidth,
      windowHeight: document.body.scrollHeight,
    }).then((canvas) => {
      let imgData = canvas.toDataURL("image/png");

      let imgWidth = 210;
      let pageHeight = imgWidth * 1.414;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let pdf = new jsPDF("p", "mm");
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 1) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${test}.pdf`);
    });
  };

  const handleResize = () => {
    setWidth(Math.min(window.innerWidth, maxWidth));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
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
        <div id="pdf-content" ref={screenRef} style={{ width: width }}>
          {/* <div style={{ position: "absolute", zIndex: 999 }}>
            <Icon iconName={"Icon3"} iconSize={360} />
            <Icon iconName={"Icon3"} iconSize={36} />
          </div> */}
          <div style={{ width: width, height: width * 1.414 }}>
            <div
              style={{
                display: "flex",
                width,
                height: width,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width,
                  height: borderWidth,
                }}
              />
              {/* x축 */}
              <div
                style={{
                  width,
                  height: borderWidth,
                  backgroundColor: "black",
                  zIndex: 6,
                  position: "absolute",
                  alignSelf: "center",
                }}
              />
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderRight: `${Math.max(width * 0.02, 10)}px solid black`,
                  borderTop: `${Math.max(width * 0.01, 5)}px solid transparent`,
                  borderBottom: `${Math.max(
                    width * 0.01,
                    5
                  )}px solid transparent`,
                  position: "absolute",
                  left: 0,
                }}
              />
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${Math.max(width * 0.02, 10)}px solid black`,
                  borderTop: `${Math.max(width * 0.01, 5)}px solid transparent`,
                  borderBottom: `${Math.max(
                    width * 0.01,
                    5
                  )}px solid transparent`,
                  position: "absolute",
                  left: width - Math.max(width * 0.02, 10) + 1,
                }}
              />
              {/* y축 */}
              <div
                style={{
                  height: width,
                  width: borderWidth,
                  backgroundColor: "black",
                  position: "absolute",
                  left: width / 2 - borderWidth / 2,
                  zIndex: 6,
                }}
              />
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${Math.max(
                    width * 0.01,
                    5
                  )}px solid transparent`,
                  borderBottom: `${Math.max(width * 0.02, 10)}px solid black`,
                  borderRight: `${Math.max(
                    width * 0.01,
                    5
                  )}px solid transparent`,
                  position: "absolute",
                  top: 0,
                }}
              />
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${Math.max(
                    width * 0.01,
                    5
                  )}px solid transparent`,
                  borderTop: `${Math.max(width * 0.02, 10)}px solid black`,
                  borderRight: `${Math.max(
                    width * 0.01,
                    5
                  )}px solid transparent`,
                  position: "absolute",
                  top: width - Math.max(width * 0.02, 10) + 1,
                }}
              />
              <RoundGraph
                outWidth={outWidth}
                colorSize={colorSize}
                borderWidth={borderWidth}
                {...auraSoma}
              />
              {Boolean(top) && Boolean(left) ? (
                <div
                  style={{
                    position: "absolute",
                    top: topLeftTop,
                    left: topLeftLeft,
                    width: topLeftLength,
                    height: Math.max(outWidth * 0.0075, 1.5),
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
                    height: Math.max(outWidth * 0.0075, 1.5),
                    backgroundColor: "red",
                    position: "absolute",
                    left: width / 2 - (left * outWidth) / 14,
                    zIndex: 30,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: Math.max(outWidth * 0.0075, 1.5),
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
                    height: Math.max(outWidth * 0.0075, 1.5),
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
                    width:
                      (right * outWidth) / 14 +
                      Math.max(outWidth * 0.0075, 1.5) / 2,
                    height: Math.max(outWidth * 0.0075, 1.5),
                    backgroundColor: "red",
                    position: "absolute",
                    left: width / 2 - Math.max(outWidth * 0.0075, 1.5) / 2,
                    zIndex: 30,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: Math.max(outWidth * 0.0075, 1.5),
                    height:
                      (top * outWidth) / 14 +
                      Math.max(outWidth * 0.0075, 1.5) / 2,
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
                    height: Math.max(outWidth * 0.0075, 1.5),
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
                    width:
                      (right * outWidth) / 14 +
                      Math.max(outWidth * 0.0075, 1.5) / 2,
                    height: Math.max(outWidth * 0.0075, 1.5),
                    backgroundColor: "red",
                    position: "absolute",
                    left: width / 2 - Math.max(outWidth * 0.0075, 1.5) / 2,
                    zIndex: 30,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: Math.max(outWidth * 0.0075, 1.5),
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
                    height: Math.max(outWidth * 0.0075, 1.5),
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
                    width:
                      (left * outWidth) / 14 +
                      Math.max(outWidth * 0.0075, 1.5) / 2,
                    height: Math.max(outWidth * 0.0075, 1.5),
                    backgroundColor: "red",
                    position: "absolute",
                    left: width / 2 - (left * outWidth) / 14,
                    zIndex: 30,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: Math.max(outWidth * 0.0075, 1.5),
                    height: (bottom * outWidth) / 14,
                    backgroundColor: "red",
                    position: "absolute",
                    top: width / 2,
                    zIndex: 30,
                  }}
                />
              )}
            </div>
          </div>
          <div
            style={{
              width: width,
              height: width * 1.414,
            }}
          >
            여기는 2페이지
          </div>
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
            backgroundColor: "red",
            margin: 20,
          }}
          onClick={handleDownloadPDF}
        >
          PDF DOWNLOAD
        </button>
      </div>
    </div>
  );
}
