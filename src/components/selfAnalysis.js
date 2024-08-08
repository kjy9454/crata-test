import { useState } from "react";
import { colors } from "../styles/colors";

export default function SelfAnalysis() {
  const [stimulation, setStimulation] = useState("I");
  const [type, setType] = useState("H");
  const CATEGORY_LIST = [
    {
      title: "성과만족방식",
      leftType: { alphabet: "S", kr: "자기성장형", en: "elf-growth type" },
      rightType: { alphabet: "G", kr: "조직성장형", en: "roup growh type" },
      selectedType: ["S", "G"],
    },
    {
      title: "정보수집방식",
      leftType: { alphabet: "I", kr: "직관형", en: "ntutive type" },
      rightType: { alphabet: "E", kr: "경험형", en: "xperiential type" },
      selectedType: ["E"],
    },
    {
      title: "능력표현방식",
      leftType: { alphabet: "D", kr: "설계형", en: "esign type" },
      rightType: { alphabet: "T", kr: "기술형", en: "echnical type" },
      selectedType: [],
    },
    {
      title: "목표실행방식",
      leftType: { alphabet: "T", kr: "전술형", en: "actical type" },
      rightType: { alphabet: "S", kr: "전략형", en: "trategic type" },
      selectedType: ["S"],
    },
    {
      title: "목적성취방식",
      leftType: { alphabet: "T", kr: "과제형", en: "ask type" },
      rightType: { alphabet: "R", kr: "관계형", en: "elational type" },
      selectedType: [],
    },
  ];

  const Item = ({ title, leftType, rightType, selectedType }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: colors.navy,
          width: "100%",
          fontSize: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            borderRadius: 999,
            border: `1px solid ${colors.primary}`,
            justifyContent: "center",
            position: "relative",
            marginBottom: 4,
            height: 34,
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: 40,
              width: 40,
              borderRadius: 999,
              border: `1px solid ${
                selectedType.includes(leftType.alphabet)
                  ? colors.navy
                  : "transparent"
              }`,
              position: "absolute",
              left: 8,
              top: -3,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              fontSize: 20,
              backgroundColor: selectedType.includes(leftType.alphabet)
                ? "#fff"
                : "transparent",
            }}
          >
            {leftType.alphabet}
          </div>
          <span style={{ fontWeight: 600 }}>{title}</span>
          <div
            style={{
              height: 40,
              width: 40,
              borderRadius: 999,
              border: `1px solid ${
                selectedType.includes(rightType.alphabet)
                  ? colors.navy
                  : "transparent"
              }`,
              position: "absolute",
              right: 8,
              top: -3,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              fontSize: 20,
              backgroundColor: selectedType.includes(rightType.alphabet)
                ? "#fff"
                : "transparent",
            }}
          >
            {rightType.alphabet}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <span style={{ fontWeight: 600, color: colors.gray }}>
              {leftType.kr}
            </span>
            <span style={{ display: "flex", color: colors.gray }}>
              (<p style={{ fontWeight: 600 }}>{leftType.alphabet}</p>
              {leftType.en})
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ fontWeight: 600, color: colors.gray }}>
              {rightType.kr}
            </span>
            <span style={{ display: "flex", color: colors.gray }}>
              (<p style={{ fontWeight: 600 }}>{rightType.alphabet}</p>
              {rightType.en})
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontSize: 16,
        padding: "14px 60px",
        justifyContent: "space-between",
      }}
    >
      {CATEGORY_LIST.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}
