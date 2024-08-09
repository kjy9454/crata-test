import { useState } from "react";
import { colors } from "../styles/colors";

export default function SelfAnalysis() {
  const [stimulation, setStimulation] = useState("I");
  const [type, setType] = useState("H");
  const CATEGORY_LIST = [
    {
      title: "정보수집방식",
      leftType: {
        alphabet: "I",
        kr: "직관형",
        en: "ntutive type",
        level: 10,
      },
      rightType: {
        alphabet: "E",
        kr: "경험형",
        en: "xperiential type",
        level: 2,
      },
    },
    {
      title: "능력표현방식",
      leftType: {
        alphabet: "D",
        kr: "설계형",
        en: "esign type",
        level: 1,
      },
      rightType: {
        alphabet: "T",
        kr: "기술형",
        en: "echnical type",
        level: 1,
      },
    },
    {
      title: "목표실행방식",
      leftType: {
        alphabet: "T",
        kr: "전술형",
        en: "actical type",
        level: 1,
      },
      rightType: {
        alphabet: "S",
        kr: "전략형",
        en: "trategic type",
        level: 1,
      },
    },
    {
      title: "목적성취방식",
      leftType: {
        alphabet: "T",
        kr: "과제형",
        en: "ask type",
        level: 1,
      },
      rightType: {
        alphabet: "R",
        kr: "관계형",
        en: "eleational type",
        level: 1,
      },
    },
    {
      title: "의사결정방식",
      leftType: {
        alphabet: "S",
        kr: "혼자형",
        en: "tand-alone type",
        level: 1,
      },
      rightType: {
        alphabet: "G",
        kr: "그룹형",
        en: "roup type",
        level: 1,
      },
    },
    {
      title: "자기방어방식",
      leftType: {
        alphabet: "M",
        kr: "지성형",
        en: "ind-set type",
        level: 1,
      },
      rightType: {
        alphabet: "E",
        kr: "감성형",
        en: "motional type",
        level: 1,
      },
    },
  ];

  const Item = ({ title, leftType, rightType, style }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: colors.navy,
          width: "100%",
          fontSize: 14,
          marginTop: 14,
          ...style,
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              height: 40,
              width: 40,
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              fontSize: 20,
            }}
          >
            {leftType.alphabet}
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
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
                  display: "flex",
                  flex: 1,
                  height: "100%",
                  flexDirection: "row-reverse",
                }}
              >
                {new Array(10).fill("").map((_, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor:
                        index > leftType.level - 1
                          ? "transparent"
                          : colors.primary,
                      height: "100%",
                      display: "flex",
                      flex: 1,
                      borderRight: `1px solid ${colors.primary}`,
                      borderTopLeftRadius: index === 9 ? 18 : 0,
                      borderBottomLeftRadius: index === 9 ? 18 : 0,
                    }}
                  />
                ))}
              </div>
              <span style={{ fontWeight: 600, padding: "0 4px" }}>{title}</span>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  height: "100%",
                }}
              >
                {new Array(10).fill("").map((_, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor:
                        index > rightType.level - 1
                          ? "transparent"
                          : colors.primary,
                      height: "100%",
                      display: "flex",
                      flex: 1,
                      borderLeft: `1px solid ${colors.primary}`,
                      borderTopRightRadius: index === 9 ? 18 : 0,
                      borderBottomRightRadius: index === 9 ? 18 : 0,
                    }}
                  />
                ))}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <span style={{ fontWeight: 600, color: colors.gray }}>
                  {leftType.kr}
                </span>
                <span style={{ display: "flex", color: colors.gray }}>
                  (<span style={{ fontWeight: 600 }}>{leftType.alphabet}</span>
                  {leftType.en})
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ fontWeight: 600, color: colors.gray }}>
                  {rightType.kr}
                </span>
                <span style={{ display: "flex", color: colors.gray }}>
                  (<span style={{ fontWeight: 600 }}>{rightType.alphabet}</span>
                  {rightType.en})
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              height: 40,
              width: 40,
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              fontSize: 20,
            }}
          >
            {rightType.alphabet}
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
        padding: "0px 40px",
        justifyContent: "space-between",
      }}
    >
      {CATEGORY_LIST.map((item, index) => (
        <Item key={index} style={{ marginTop: index ? 14 : 0 }} {...item} />
      ))}
    </div>
  );
}
