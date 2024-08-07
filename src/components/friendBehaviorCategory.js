import { colors } from "../styles/colors";

export default function FriendBehaviorCategory() {
  const CATEGORY_LIST = [
    {
      title: "의사결정방식",
      leftType: { alphabet: "S", kr: "혼자형", en: "tand-alone type" },
      rightType: { alphabet: "G", kr: "그룹형", en: "roup type" },
      selectedType: ["S"],
    },
    {
      title: "자기방어방식",
      leftType: { alphabet: "M", kr: "지성형", en: "ind-set type" },
      rightType: { alphabet: "E", kr: "감성형", en: "motional type" },
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
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontSize: 16,
        padding: "6px 60px",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {CATEGORY_LIST.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
}
