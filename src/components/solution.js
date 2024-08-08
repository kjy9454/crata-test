import { colors } from "../styles/colors";

export default function Solution() {
  const SOLUTION_LIST = [
    {
      title: "에너지",
      leftType: { alphabet: "T", kr: "기술형", en: "echnical type" },
      rightType: { alphabet: "M", kr: "지성형", en: "ind-set type" },
    },
    {
      title: "에너지",
      leftType: { alphabet: "S", kr: "직관형", en: "trategic type" },
      rightType: { alphabet: "E", kr: "경험형", en: "xperiential type" },
    },
  ];

  const Item = ({ title, leftType, rightType, index }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: colors.navy,
          width: "100%",
          fontSize: 14,
          marginTop: index ? 6 : 0,
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
          <span style={{ fontWeight: 600 }}>{title}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
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
    );
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        fontSize: 16,
        padding: 10,
      }}
    >
      <span style={{ color: colors.gray, padding: 16, fontSize: 14 }}>
        인지
      </span>
      <div
        style={{
          height: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          fontSize: 16,
          justifyContent: "space-evenly",
        }}
      >
        {SOLUTION_LIST.map((item, index) => (
          <Item key={index} {...item} index={index} />
        ))}
      </div>
      <span style={{ color: colors.gray, padding: 16, fontSize: 14 }}>
        행동
      </span>
    </div>
  );
}
