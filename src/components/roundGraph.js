import React from "react";

const RoundGraph = ({
  outWidth,
  colorSize,
  backgroundColor,
  borderColor,
  borderWidth,
}) => {
  return (
    <>
      {Array(7)
        .fill("a")
        .map((x, i) => {
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                borderRadius: 999,
                boxSizing: "content-box",
                border: `${
                  i === colorSize - 1
                    ? Math.max(outWidth * 0.015, 3)
                    : borderWidth
                }px solid ${
                  i === colorSize - 1 && borderColor ? borderColor : "black"
                }`,
                width: (outWidth / 7) * (i + 1),
                aspectRatio: 1,
                alignSelf: "center",
                backgroundColor:
                  i < colorSize && backgroundColor ? backgroundColor : "white",
                color: "black",
                fontSize: 40,
                zIndex: 6 - i,
              }}
            ></div>
          );
        })}
      <div
        style={{
          position: "absolute",
          borderRadius: 999,
          zIndex: 999,
          color: "black",
          fontSize: (outWidth / 7) * 0.6 || 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>AB</div>
      </div>
    </>
  );
};

export default RoundGraph;
