import React from "react";
import RoundGraph from "./roundGraph";

export default function ResultForPDF({ top, bottom, left, right, width }) {
  const outWidth = (width / 8) * 6;
  return (
    <>
      <div className="flex">
        <div
          style={{
            backgroundColor: "yellowgreen",
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
            // backgroundColor: "white",
            color: "black",
            padding: 20,
            width,
          }}
        >
          여기에 결과 글자
        </div>
      </div>
    </>
  );
}
