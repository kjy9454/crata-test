import { colors } from "../styles/colors";
import Icon from "./icon";

export default function Content({
  title,
  subTitle,
  colored,
  style,
  bodyStyle,
  children,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        border: `1px solid ${colors.primary}`,
        margin: "16px 0",
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: colored ? colors.primary : "transparent",
          color: colored ? "#fff" : "#000",
          display: "flex",
          padding: "8px 14px",
          alignItems: "center",
          borderBottom: `1px solid ${colors.primary}`,
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Icon iconName={colored ? "Icon2" : "Icon3"} iconSize={16} />
          <span style={{ marginLeft: 4, fontWeight: 600 }}>{title}</span>
        </div>
        <span>{subTitle}</span>
      </div>
      <div
        style={{
          height: "100%",
          padding: 12,
          ...bodyStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
}