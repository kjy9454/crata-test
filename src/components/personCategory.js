import { useState } from "react";
import { colors } from "../styles/colors";

export default function PersonCategory() {
  const [stimulation, setStimulation] = useState("I");
  const [type, setType] = useState("H");

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        fontSize: 14,
        lineHeight: 1.6,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
        }}
      >
        <span style={{ fontWeight: 600 }}>내적자극형</span>
        <span style={{ display: "flex" }}>
          (<span style={{ fontWeight: 600 }}>I</span>nternal stimulation)
        </span>
      </div>
      <div
        style={{
          flex: 1,
          margin: "4px 10px",
          padding: 8,
          border: `1px solid ${colors.primary}`,
          borderRadius: 999,
          display: "flex",
          color: colors.navy,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            border: `1px solid ${
              stimulation === "I" ? colors.navy : "transparent"
            }`,
            height: 36,
            aspectRatio: 1,
            fontSize: 24,
            textAlign: "center",
          }}
        >
          I
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              border: `1px solid ${type === "G" ? "#000" : "transparent"}`,
              display: "flex",
              padding: "2px",
              borderRadius: 999,
              flex: 1,
              justifyContent: "center",
              margin: "0px 12px",
            }}
          >
            <span style={{ fontWeight: 600 }}>성장형</span>
            <span style={{ display: "flex" }}>
              (<span style={{ fontWeight: 600 }}>G</span>rowth type)
            </span>
          </div>
          <div
            style={{
              border: `1px solid ${type === "D" ? "#000" : "transparent"}`,
              display: "flex",
              padding: "2px",
              borderRadius: 999,
              flex: 1,
              justifyContent: "center",
              margin: "0px 12px",
            }}
          >
            <span style={{ fontWeight: 600 }}>발산형</span>
            <span style={{ display: "flex" }}>
              (<span style={{ fontWeight: 600 }}>D</span>ivergent type)
            </span>
          </div>
          <div
            style={{
              border: `1px solid ${type === "B" ? "#000" : "transparent"}`,
              display: "flex",
              padding: "2px",
              borderRadius: 999,
              flex: 1,
              justifyContent: "center",
              margin: "0px 12px",
            }}
          >
            <span style={{ fontWeight: 600 }}>균형형</span>
            <span style={{ display: "flex" }}>
              (<span style={{ fontWeight: 600 }}>B</span>alance type)
            </span>
          </div>
          <div
            style={{
              border: `1px solid ${type === "H" ? "#000" : "transparent"}`,
              display: "flex",
              padding: "2px",
              borderRadius: 999,
              flex: 1,
              justifyContent: "center",
              margin: "0px 12px",
            }}
          >
            <span style={{ fontWeight: 600 }}>수확형</span>
            <span style={{ display: "flex" }}>
              (<span style={{ fontWeight: 600 }}>H</span>arvesting type)
            </span>
          </div>
          <div
            style={{
              border: `1px solid ${type === "A" ? "#000" : "transparent"}`,
              display: "flex",
              padding: "2px",
              borderRadius: 999,
              flex: 1,
              justifyContent: "center",
              margin: "0px 12px",
            }}
          >
            <span style={{ fontWeight: 600 }}>축적형</span>
            <span style={{ display: "flex" }}>
              (<span style={{ fontWeight: 600 }}>A</span>ccumulation type)
            </span>
          </div>
        </div>
        <div
          style={{
            borderRadius: 999,
            border: `1px solid ${
              stimulation === "E" ? colors.navy : "transparent"
            }`,
            height: 36,
            aspectRatio: 1,
            fontSize: 24,
            textAlign: "center",
          }}
        >
          E
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
        }}
      >
        <span style={{ fontWeight: 600 }}>외적자극형</span>
        <span style={{ display: "flex" }}>
          (<span style={{ fontWeight: 600 }}>E</span>xternal stimulation)
        </span>
      </div>
    </div>
  );
}
