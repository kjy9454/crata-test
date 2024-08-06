import { colors } from "../styles/colors";
import Icon from "./icon";

export default function Content({ title, colored, style, children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        border: `1px solid ${colors.primary}`,
        margin: 16,
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: colored ? colors.primary : "transparent",
          color: colored ? "#fff" : "#000",
          display: "flex",
          padding: "8px 10px",
          alignItems: "center",
          borderBottom: `1px solid ${colors.primary}`,
        }}
      >
        <Icon iconName={colored ? "Icon2" : "Icon3"} iconSize={16} />
        <span style={{ marginLeft: 4, fontWeight: 600, fontSize: 16 }}>
          {title}
        </span>
      </div>
      <div style={{ height: "100%", padding: 10 }}>{children}</div>
    </div>
  );
}
