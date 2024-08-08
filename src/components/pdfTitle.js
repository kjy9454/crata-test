import { colors } from "../styles/colors";
import Icon from "./icon";

export default function PdfTitle() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: `linear-gradient(to right, ${colors.gradient1}, ${colors.gradient2})`,
        borderTopLeftRadius: 16,
        width: "100%",
        padding: "20px 36px",
        margin: 36,
        boxSizing: "border-box",
      }}
    >
      <Icon iconName="Icon4" iconSize={80} />
      <div
        style={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <span style={{ fontSize: 28 }}>다면적 행동유형 검사</span>
        <span style={{ fontSize: 48, fontWeight: 700 }}>
          CRATA
          <span style={{ fontWeight: 400, marginLeft: 24 }}>분석 보고서</span>
        </span>
        <span style={{ fontSize: 28, fontWeight: 700 }}>대학생&성인용</span>
      </div>
    </div>
  );
}
