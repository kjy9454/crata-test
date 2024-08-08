import { colors } from "../styles/colors";
import Icon from "./icon";

export default function UserInfo() {
  const borderStyle = `1px solid ${colors.primary}`;

  const Head = ({ children, last }) => {
    return (
      <div
        style={{
          backgroundColor: colors.tableBackground,
          padding: 2,
          borderTop: borderStyle,
          borderBottom: last ? borderStyle : "none",
          fontSize: "14px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          color: colors.navy,
          fontWeight: 600,
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
          borderTop: borderStyle,
          padding: "4px 10px",
          borderBottom: last ? borderStyle : "none",
          fontSize: "14px",
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", marginBottom: 8, alignItems: "center" }}>
        <Icon iconName={"Icon3"} iconSize={20} />
        <div style={{ marginLeft: 8, fontSize: 18, fontWeight: 600 }}>
          작성자 정보
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr 120px 1fr",
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
