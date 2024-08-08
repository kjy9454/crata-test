import Content from "./content";

export default function CrataInfo() {
  const Title = ({ children, style }) => {
    return (
      <span style={{ fontWeight: 700, fontSize: 14, lineHeight: 2, ...style }}>
        {children}
      </span>
    );
  };

  const Text = ({ children }) => {
    return <span style={{ fontSize: 14, lineHeight: 1.4 }}>{children}</span>;
  };
  return (
    <Content title="CRATA분석의 개요" colored style={{ height: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Title style={{ marginTop: 4 }}>인간유형</Title>
        <Text>
          인간유형은 사람의 기질을 기반한 행동방식과 자신의 욕구를 분석하여
          자신을 이해하는데 도움을 준다. 기질의 우선적 작용은 자신우선형과
          환경우선형으로 나누고 기질의 성격을 5가지로 분류하여 총 10가지 의
          인간유형이 된다.
          <br />
          내적자극형(Internal stimulation)은 자신의 마음의 변화를 우선으로
          생각하고 선택의 기준을 삼는다. 외적자극형(External stimulation)은
          자신의 상황의 변화를 우선으로 생각하고 선택의 기준을 삼는다.
          <br />
          ‘성장형(Growth type)’은 자기성장을 중요하게 여기며 배우고 발전하는
          것을 즐긴다. 타인을 통한 대리 만족이 어렵고 개인주의 성향을 가지고
          있다. 독립적이고 조직 안에서 관계적인 부분이 약하다, 기혼여성 이라도
          사회활동 을 통해 인정과 성취감을 우선으로 선택한다.
          <br />
          ‘발산형(Divergent type)’은 타인이나 자신이 속한 조직의 성장을 통해
          자신이 만족감을 느낀다. 자신이 아는 것을 타인을 위해 사용하는 것을
          것을 좋아한다. 대리만족이 가능하고 사람에게 영향력있는 사람이 되는
          것을 우선으 로 선택한다. 호불호가 강하여 자신이 관심 가지는 것과 아닌
          것에 성과에 차이가 크다.
          <br />
          ‘균형형(Balance type)’은 한쪽으로 치우치는 것을 경계하며 대인관계에서
          중간자의 역할을 자처한다. 사람의 생각이나 사고를 치우치지 않게 하려다
          보니 관계에서 중간자로써 경계인으로의 외로움이 있다. 중립자로서 대변
          인의 역할을 한다.
          <br />
          ‘수확형(Harvesting)’은 눈에 보이는 확실한 것을 선호한다. 결과
          지향적이고 확실하고 실질적인 것을 만 들어내는 능력이 탁월하다.
          문제해결 능력이 뛰어나고 현실적인 사고를 중시한다.
          <br />
          ‘축적형(Accumulation type)’은 자신의 준비를 우선시한다. 자기의
          타이밍과 스타일을 중요하게 여기며 자기를 잘 이해한 후 결정하고
          행동하는 것이 중요하다.
        </Text>
        <Title style={{ marginTop: 10 }}>행동유형</Title>
        <Text>
          행동유형은 자신의 무의식적으로 타고난 생존의 방식을 분석하여 자신의
          행동과 조직생활에서의 행동 을 분석하고 조직 구성원간의 협업을 할 때
          일의 방식을 이해하고 시너지를 내는 분 것이다.
          <br />
          자기성장형(Self-growth type)과 조직성장형(Group growth type)이 있고
          두가지 유형이 혼합된 혼 합형도 있다.
        </Text>
        <Title style={{ marginTop: 10 }}>또래집단 행동유형</Title>
        <Text>
          또래 집단행동방식은 의사결정방식과 자기방어방식이 있다. 의사결정방식은
          자신의 의사를 결정할 때 또래에 어떤 영향을 받는지를 분석하여 또래
          대인관계에서의 스트레스의 이유와 경쟁집단에서 시너지를 내는 환경을
          스스로 선택할 수 있도록 돕기 위한 분석이다.
          <br />
          자기방어방식은 자신을 보호하기 위해 또래 사이에서 거절의 방식을 찾아
          관계의 문제점이나 자신의 방식을 인지하므로 해서 문제 행동을 진단하고
          개선할 수 있도록 돕는 분석이다.
        </Text>
        <Title style={{ marginTop: 10 }}>정서적욕구방식</Title>
        <Text>
          정서적 욕구 분석은 자신의 욕구를 이해하고 해소되지 않은 욕구로 인해
          현재에 집중하지 못하고 미해결 과제로 남은 욕구를 인지하고 해결할 수
          있도록 돕거니 인지할 수 있도록 하여 현재 자신의 발전과 성장의 걸림이
          되는 욕구를 찾아서 현재와 미래를 설계하고 발전하는데 도움을 준다.
        </Text>
      </div>
    </Content>
  );
}
