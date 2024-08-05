import useScreenSize from "../hooks/useScreenSize";
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        ...style,
      }}
    >
      <>
        {page > 1 && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                color: "skyblue",
                fontSize: 36,
                fontWeight: "bold",
              }}
            >
              {"CRATA "}
              <span
                style={{ color: "skyblue", fontSize: 24, fontWeight: "normal" }}
              >
                분석보고서
              </span>
            </span>
            <span style={{ color: "skyblue" }}>대학생&성인용</span>
          </div>
        )}
        {children}
        {page && <p style={{ alignSelf: "center" }}>-{page}-</p>}
      </>
    </div>
  );
}
