export default function Explanation() {
  const DATA = [
    {
      title: "성과만족방식",
      desc: "",
    },
    {
      title: "정보수집방식",
      desc: "",
    },
    {
      title: "능력표현방식",
      desc: "",
    },
    {
      title: "목표실행방식",
      desc: "",
    },
    {
      title: "목적성취방식",
      desc: "",
    },
  ];
  return (
    <div
      style={{
        fontSize: 14,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {DATA.map(({ title, desc }) => (
        <div key={title} style={{ flex: 1, display: "flex" }}>
          · {title} : {desc}
        </div>
      ))}
    </div>
  );
}
