import Icon from "./icon";

export default function UserInfo() {
  const Head = ({ children, last }) => {
    return (
      <div
        style={{
          backgroundColor: "skyblue",
          padding: 8,
          borderTop: "1px solid blue",
          borderBottom: last ? "1px solid blue" : "none",
          fontSize: "1rem",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    );
  };
  const Body = ({ children, last }) => {
    return (
      <div
        style={{
          borderTop: "1px solid blue",
          padding: "8px 10px",
          borderBottom: last ? "1px solid blue" : "none",
          fontSize: "1rem",
        }}
      >
        {children}
      </div>
    );
  };
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", marginBottom: 16, alignItems: "center" }}>
        <Icon iconName={"Icon3"} />
        <div style={{ marginLeft: 8, fontSize: 24, fontWeight: "bold" }}>
          작성자 정보
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px auto 120px auto",
        }}
      >
        <Head>이름</Head>
        <Body>홍길동</Body>
        <Head>규준집단</Head>
        <Body>일반 성인</Body>
        <Head>개인고유번호</Head>
        <Body>0000.00.00.(남)</Body>
        <Head>연령</Head>
        <Body>00세</Body>
        <Head last>검사일</Head>
        <Body last>0000.00.00.</Body>
        <Head last>검사자</Head>
        <Body last></Body>
      </div>
    </div>
  );
}
