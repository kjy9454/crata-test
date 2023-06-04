import React, { useRef, useState } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import RoundGraph from "./components/roundGraph";

export default function App() {
  const screenRef = useRef(null);
  const width = 800;
  const outWidth = width - 200;
  const [top, setTop] = useState(3);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [bottom, setBottom] = useState(0);

  const test = "test";

  const handleDownloadPDF = () => {
    const input = document.getElementById("pdf-content");

    toPng(input)
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        img.onload = function () {
          const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: "a3",
          });

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
    <div>
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
          <RoundGraph
            outWidth={outWidth}
            top={top}
            bottom={bottom}
            left={left}
            right={right}
          />

          <div style={{ width, height: 2, backgroundColor: "black" }} />
          <div
            style={{
              height: width,
              width: 2,
              backgroundColor: "black",
              position: "absolute",
              left: width / 2 - 1,
              zIndex: 2,
            }}
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
          <div>top</div>
          {new Array(7).fill("").map((x, i) => (
            <button key={i} onClick={() => setTop(i === 0 ? i : i + 1)}>
              {i}
            </button>
          ))}
          <div>bottom</div>
          {new Array(7).fill("").map((x, i) => (
            <button key={i} onClick={() => setBottom(i === 0 ? i : i + 1)}>
              {i}
            </button>
          ))}
          <div>left</div>
          {new Array(7).fill("").map((x, i) => (
            <button key={i} onClick={() => setLeft(i === 0 ? i : i + 1)}>
              {i}
            </button>
          ))}
          <div>right</div>
          {new Array(7).fill("").map((x, i) => (
            <button key={i} onClick={() => setRight(i === 0 ? i : i + 1)}>
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
  );
}
