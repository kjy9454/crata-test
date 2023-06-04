import React from "react";

const RoundGraph = ({ outWidth, top, bottom, left, right }) => {
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
                alignItems:
                  left === 0 && top && bottom && right === 0
                    ? "center"
                    : (right === 0 && top && bottom) ||
                      (left === 0 && top && bottom)
                    ? "center"
                    : (top === 0 && (left || right)) ||
                      (bottom && !(top && left && right))
                    ? "flex-start"
                    : (top === 0 && (left || right)) ||
                      (top && !(bottom && left && right))
                    ? "flex-end"
                    : "center",
                justifyContent:
                  top === 0 || bottom === 0
                    ? "center"
                    : left === 0 && top && bottom
                    ? "flex-start"
                    : right === 0 && top && bottom
                    ? "flex-end"
                    : "center",
                position: "absolute",
                borderRadius: 999,
                border: i === 0 ? "2px solid green" : "2px solid black",
                width: (outWidth / 7) * (i + 1),
                aspectRatio: 1,
                alignSelf: "center",
                zIndex: 3,
                backgroundColor: i === 0 ? "yellow" : "transparent",
                color: "black",
                fontSize: outWidth / 14 - 6,
              }}
            >
              {i === 0 && (
                <div
                  style={{
                    width: outWidth / 14,
                    textAlign: "center",
                  }}
                >
                  A
                </div>
              )}
            </div>
          );
        })}
    </>
  );
};

export default RoundGraph;
