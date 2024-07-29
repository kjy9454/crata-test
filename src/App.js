import React, { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import RoundGraph from "./components/roundGraph";
// import ResultForPDF from "./components/ResultForPDF";
import moment from "moment";
import { convertDateToAuraSoma } from "./utils/convertToAuraSoma";

export default function App() {
  const screenRef = useRef(null);
  const [mobWidth, setMobWidth] = useState(window.innerWidth);
  const mobOutWidth = mobWidth - 100;
  const width = 800;
  const outWidth = width - 200;
  const [colorSize, setColorSize] = useState(3);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [birthDate, setBirthDate] = useState(moment().format("YYYY-MM-DD"));

  const auraSoma = convertDateToAuraSoma(moment(birthDate).format("YYYYMMDD"));
  const [status, setStatus] = useState("hidden");

  const test = "test";

  useEffect(() => {
    const handleResize = () => {
      setMobWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDownloadPDF = () => {
    const input = document.getElementById("pdf-content");
    console.log(11111, input);
    toPng(input)
      .then((dataUrl) => {
        console.log(22222);
        const img = new Image();
        img.src = dataUrl;
        img.onload = function () {
          const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: "a3",
          });
          console.log(33333);
          const imgHeight =
            (pdf.internal.pageSize.getWidth() / img.width) * img.height;
          pdf.addImage(
            img,
            "PNG",
            0,
            0,
            pdf.internal.pageSize.getWidth(),
            imgHeight
          );

          pdf.save(`${test}.pdf`);
        };
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div className="overflow-hidden w-screen h-screen">
      <div className="md:hidden flex-col">
        <div className="flex flex-col">
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              width: mobWidth,
              height: mobWidth,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
            <RoundGraph
              outWidth={outWidth}
              colorSize={colorSize}
              {...auraSoma}
            />

            <div
              style={{ width: mobWidth, height: 2, backgroundColor: "black" }}
            />
            <div
              style={{
                height: mobWidth,
                width: 2,
                backgroundColor: "black",
                position: "absolute",
                left: mobWidth / 2 - 1,
                zIndex: 2,
              }}
            />

            {Boolean(top) && Boolean(left) ? (
              <svg
                width={(left * mobOutWidth) / 14}
                height={(top * mobOutWidth) / 14}
                style={{
                  position: "absolute",
                  top: top ? mobWidth / 2 - (top * mobOutWidth) / 14 : 2,
                  left: mobWidth / 2 - (left * mobOutWidth) / 14,
                  zIndex: 30,
                }}
              >
                <line
                  x1={(left * mobOutWidth) / 14}
                  y1="0"
                  x2="0"
                  y2={(top * mobOutWidth) / 14}
                  stroke="red"
                  strokeWidth="2"
                />
              </svg>
            ) : Boolean(left) ? (
              <div
                style={{
                  width: (left * mobOutWidth) / 14,
                  height: 2,
                  backgroundColor: "red",
                  position: "absolute",
                  left: mobWidth / 2 - (left * mobOutWidth) / 14,
                  zIndex: 30,
                }}
              />
            ) : (
              <div
                style={{
                  width: 2,
                  height: (top * mobOutWidth) / 14,
                  backgroundColor: "red",
                  position: "absolute",
                  top: top ? mobWidth / 2 - (top * mobOutWidth) / 14 : 2,
                  zIndex: 30,
                }}
              />
            )}
            {Boolean(top) && Boolean(right) ? (
              <svg
                width={(right * mobOutWidth) / 14}
                height={(top * mobOutWidth) / 14}
                style={{
                  position: "absolute",
                  top: mobWidth / 2 - (top * mobOutWidth) / 14,
                  left: mobWidth / 2,
                  zIndex: 30,
                }}
              >
                <line
                  x1="0"
                  y1="0"
                  x2={(right * mobOutWidth) / 14}
                  y2={(top * mobOutWidth) / 14}
                  stroke="red"
                  strokeWidth="2"
                />
              </svg>
            ) : Boolean(right) ? (
              <div
                style={{
                  width: (right * mobOutWidth) / 14,
                  height: 2,
                  backgroundColor: "red",
                  position: "absolute",
                  left: mobWidth / 2,
                  zIndex: 30,
                }}
              />
            ) : (
              <div
                style={{
                  width: 2,
                  height: (top * mobOutWidth) / 14,
                  backgroundColor: "red",
                  position: "absolute",
                  top: top ? mobWidth / 2 - (top * mobOutWidth) / 14 : 2,
                  zIndex: 30,
                }}
              />
            )}
            {Boolean(bottom) && Boolean(right) ? (
              <svg
                width={(right * mobOutWidth) / 14}
                height={(bottom * mobOutWidth) / 14}
                style={{
                  position: "absolute",
                  top: mobWidth / 2,
                  left: mobWidth / 2,
                  zIndex: 30,
                }}
              >
                <line
                  x1={(right * mobOutWidth) / 14}
                  y1="0"
                  x2="0"
                  y2={(bottom * mobOutWidth) / 14}
                  stroke="red"
                  strokeWidth="2"
                />
              </svg>
            ) : Boolean(right) ? (
              <div
                style={{
                  width: (right * mobOutWidth) / 14,
                  height: 2,
                  backgroundColor: "red",
                  position: "absolute",
                  left: mobWidth / 2,
                  zIndex: 30,
                }}
              />
            ) : (
              <div
                style={{
                  width: 2,
                  height: (bottom * mobOutWidth) / 14,
                  backgroundColor: "red",
                  position: "absolute",
                  top: mobWidth / 2,
                  zIndex: 30,
                }}
              />
            )}
            {Boolean(bottom) && Boolean(left) ? (
              <svg
                width={(left * mobOutWidth) / 14}
                height={(bottom * mobOutWidth) / 14}
                style={{
                  position: "absolute",
                  top: mobWidth / 2,
                  left: mobWidth / 2 - (left * mobOutWidth) / 14,
                  zIndex: 30,
                }}
              >
                <line
                  x1={(left * mobOutWidth) / 14}
                  y1={(bottom * mobOutWidth) / 14}
                  x2="0"
                  y2="0"
                  stroke="red"
                  strokeWidth="2"
                />
              </svg>
            ) : Boolean(left) ? (
              <div
                style={{
                  width: (left * mobOutWidth) / 14,
                  height: 2,
                  backgroundColor: "red",
                  position: "absolute",
                  left: mobWidth / 2 - (left * mobOutWidth) / 14,
                  zIndex: 30,
                }}
              />
            ) : (
              <div
                style={{
                  width: 2,
                  height: (bottom * mobOutWidth) / 14,
                  backgroundColor: "red",
                  position: "absolute",
                  top: mobWidth / 2,
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
              width: mobWidth,
            }}
          >
            여기에 결과 글자
            <div style={{ margin: 10 }}>오라소마 크기</div>
            {new Array(7).fill("").map((x, i) => (
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
            <div>top</div>
            {new Array(7).fill("").map((x, i) => (
              <button
                style={{
                  backgroundColor: "gray",
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                }}
                key={i}
                onClick={() => setTop(i === 0 ? i : i + 1)}
              >
                {i}
              </button>
            ))}
            <div>bottom</div>
            {new Array(7).fill("").map((x, i) => (
              <button
                style={{
                  backgroundColor: "gray",
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                }}
                key={i}
                onClick={() => setBottom(i === 0 ? i : i + 1)}
              >
                {i}
              </button>
            ))}
            <div>left</div>
            {new Array(7).fill("").map((x, i) => (
              <button
                style={{
                  backgroundColor: "gray",
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                }}
                key={i}
                onClick={() => setLeft(i === 0 ? i : i + 1)}
              >
                {i}
              </button>
            ))}
            <div>right</div>
            {new Array(7).fill("").map((x, i) => (
              <button
                style={{
                  backgroundColor: "gray",
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                }}
                key={i}
                onClick={() => setRight(i === 0 ? i : i + 1)}
              >
                {i}
              </button>
            ))}
          </div>
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
      {/* web */}
      <div className={`${status} md:flex flex-col`}>
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
        <div
          ref={screenRef}
          // className={`aspect-a3 bg-red-300`}
          style={{ height: 1000, width: (1000 / 297) * 420 }}
        >
          <div className="flex">
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
              <RoundGraph
                outWidth={outWidth}
                colorSize={colorSize}
                {...auraSoma}
              />
              {Boolean(top) && Boolean(left) ? (
                <svg
                  width={(left * outWidth) / 14}
                  height={(top * outWidth) / 14}
                  style={{
                    position: "absolute",
                    top: top ? width / 2 - (top * outWidth) / 14 : 2,
                    left: width / 2 - (left * outWidth) / 14,
                    zIndex: 30,
                  }}
                >
                  <line
                    x1={(left * outWidth) / 14}
                    y1="0"
                    x2="0"
                    y2={(top * outWidth) / 14}
                    stroke="red"
                    strokeWidth="2"
                  />
                </svg>
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
                <svg
                  width={(right * outWidth) / 14}
                  height={(top * outWidth) / 14}
                  style={{
                    position: "absolute",
                    top: width / 2 - (top * outWidth) / 14,
                    left: width / 2,
                    zIndex: 30,
                  }}
                >
                  <line
                    x1="0"
                    y1="0"
                    x2={(right * outWidth) / 14}
                    y2={(top * outWidth) / 14}
                    stroke="red"
                    strokeWidth="2"
                  />
                </svg>
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
                <svg
                  width={(right * outWidth) / 14}
                  height={(bottom * outWidth) / 14}
                  style={{
                    position: "absolute",
                    top: width / 2,
                    left: width / 2,
                    zIndex: 30,
                  }}
                >
                  <line
                    x1={(right * outWidth) / 14}
                    y1="0"
                    x2="0"
                    y2={(bottom * outWidth) / 14}
                    stroke="red"
                    strokeWidth="2"
                  />
                </svg>
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
                <svg
                  width={(left * outWidth) / 14}
                  height={(bottom * outWidth) / 14}
                  style={{
                    position: "absolute",
                    top: width / 2,
                    left: width / 2 - (left * outWidth) / 14,
                    zIndex: 30,
                  }}
                >
                  <line
                    x1={(left * outWidth) / 14}
                    y1={(bottom * outWidth) / 14}
                    x2="0"
                    y2="0"
                    stroke="red"
                    strokeWidth="2"
                  />
                </svg>
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
              <div style={{ margin: 10 }}>오라소마 크기</div>
              {new Array(7).fill("").map((x, i) => (
                <button
                  key={i}
                  style={{
                    backgroundColor: "lightgray",
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
              <div>top</div>
              {new Array(7).fill("").map((x, i) => (
                <button
                  key={i}
                  style={{
                    backgroundColor: "lightgray",
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  onClick={() => setTop(i === 0 ? i : i + 1)}
                >
                  {i}
                </button>
              ))}
              <div>bottom</div>
              {new Array(7).fill("").map((x, i) => (
                <button
                  key={i}
                  style={{
                    backgroundColor: "lightgray",
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  onClick={() => setBottom(i === 0 ? i : i + 1)}
                >
                  {i}
                </button>
              ))}
              <div>left</div>
              {new Array(7).fill("").map((x, i) => (
                <button
                  key={i}
                  style={{
                    backgroundColor: "lightgray",
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  onClick={() => setLeft(i === 0 ? i : i + 1)}
                >
                  {i}
                </button>
              ))}
              <div>right</div>
              {new Array(7).fill("").map((x, i) => (
                <button
                  key={i}
                  style={{
                    backgroundColor: "lightgray",
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  onClick={() => setRight(i === 0 ? i : i + 1)}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
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
      <div
        ref={screenRef}
        id="pdf-content"
        style={{
          // height: 1000,
          // width: (1000 / 297) * 420,
          height: (mobWidth / 420) * 297,
          width: mobWidth,
          // zIndex: -1,
          position: "absolute",
          // top: 0,
        }}
      ></div>
    </div>
  );
}
