import useScreenSize from "../hooks/useScreenSize";
import { colors } from "../styles/colors";
import { PDF_PADDING } from "../utils/consts";
export default function A4Layout({ children, style, page }) {
  const { width, maxWidth } = useScreenSize();

  return (
    <div
      style={{
        width,
        maxWidth,
        height: width * 1.414,
        position: "relative",
        padding: PDF_PADDING,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        ...style,
      }}
    >
      <>
        {page > 1 && (
          <div style={{ width: "100%" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                color: colors.primary,
                borderTop: `1px solid ${colors.primary}`,
                borderBottom: `1px solid ${colors.primary}`,
                padding: "2px 6px",
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  fontWeight: "bold",
                }}
              >
                {"CRATA "}
                <span style={{ fontSize: 24, fontWeight: 500 }}>
                  분석보고서
                </span>
              </span>
              <span style={{ fontSize: 14, fontWeight: 500 }}>
                대학생&성인용
              </span>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "baseline",
                borderBottom: `1px solid ${colors.primary}`,
                padding: "6px 12px",
                fontSize: 14,
              }}
            >
              · 홍길동(남00/세)
              <span style={{ marginLeft: 14 }}>· 개인고유번호 : 00.00.00.</span>
            </div>
          </div>
        )}
        {children}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderTop: `1px solid ${colors.primary}`,
            padding: 10,
            width: "100%",
          }}
        >
          <span style={{ fontSize: 12 }}>
            CRATA 결과지의 저작권은 크라타연구소에 있으며, 보고서의 일부 또는
            전부를 게시, 배포하는 등의 행위를 절대 금합니다.
            <br />
            Copyright (c) 2024 by CRATA LAB All Rights Reserved.
          </span>
          {page && (
            <span style={{ alignSelf: "center", fontSize: 14, marginTop: 4 }}>
              -{page}-
            </span>
          )}
        </div>
      </>
    </div>
  );
}
