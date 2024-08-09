import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import A4Layout from "../components/a4Layout";
import Layout from "../components/layout";
import UserInfo from "../components/userInfo";
import PdfTitle from "../components/pdfTitle";
import Content from "../components/content";
import CrataInfo from "../components/crataInfo";
import PersonCategory from "../components/personCategory";
import Graph from "../components/graph";
import BehaviorCategory from "../components/behaviorCategory";
import Explanation from "../components/explanation";
import FriendBehaviorCategory from "../components/friendBehaviorCategory";
import Table, { TD, TH, TR } from "../components/table";
import Icon from "../components/icon";
import { colors } from "../styles/colors";
import Solution from "../components/solution";
import SelfAnalysis from "../components/selfAnalysis";

export default function Result() {
  const [colorSize, setColorSize] = useState(3);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [bottom, setBottom] = useState(0);

  const test = "test";
  const [birthDate, setBirthDate] = useState(moment().format("YYYY-MM-DD"));

  const handleDownloadPDF = async () => {
    const style = document.createElement("style");
    document.head.appendChild(style);
    style.sheet?.insertRule(
      "body > div:last-child img { display: inline-block; }"
    );
    const input = document.getElementById("pdf-content");
    if (!input) {
      console.error("pdf-content element not found");
      return;
    }
    await html2canvas(input, {
      scale: 1,
      windowWidth: document.body.scrollWidth,
      windowHeight: document.body.scrollHeight,
    }).then((canvas) => {
      let imgData = canvas.toDataURL("image/png");

      let imgWidth = 210;
      let pageHeight = imgWidth * 1.414;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      console.log(heightLeft);
      let pdf = new jsPDF("p", "mm");
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 1) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${test}.pdf`);
    });
  };

  return (
    <Layout>
      <div id="pdf-content">
        <A4Layout page={1}>
          <PdfTitle />
          <UserInfo />
          <div>
            <div style={{ color: "black" }}>
              <input
                style={{
                  border: "1px solid black",
                }}
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
              <span>오라소마 기준 날짜</span>
            </div>
            <div style={{ margin: 10 }}>오라소마 크기</div>
            {new Array(7).fill("a").map((x, i) => (
              <button
                key={i}
                style={{
                  backgroundColor: "gray",
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                }}
                onClick={() => {
                  setColorSize(i ? i + 1 : 0);
                }}
              >
                {i}
              </button>
            ))}

            <div>
              <div style={{ margin: 10 }}>TOP</div>
              {new Array(7).fill("a").map((x, i) => (
                <button
                  key={i}
                  style={{
                    backgroundColor: "gray",
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  onClick={() => {
                    setTop(i ? i + 1 : 0);
                  }}
                >
                  {i}
                </button>
              ))}
            </div>
            <div>
              <div style={{ margin: 10 }}>RIGHT</div>
              {new Array(7).fill("a").map((x, i) => (
                <button
                  key={i}
                  style={{
                    backgroundColor: "gray",
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  onClick={() => {
                    setRight(i ? i + 1 : 0);
                  }}
                >
                  {i}
                </button>
              ))}
            </div>
            <div>
              <div style={{ margin: 10 }}>BOTTOM</div>
              {new Array(7).fill("a").map((x, i) => (
                <button
                  key={i}
                  style={{
                    backgroundColor: "gray",
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  onClick={() => {
                    setBottom(i ? i + 1 : 0);
                  }}
                >
                  {i}
                </button>
              ))}
            </div>
            <div>
              <div style={{ margin: 10 }}>LEFT</div>
              {new Array(7).fill("a").map((x, i) => (
                <button
                  key={i}
                  style={{
                    backgroundColor: "gray",
                    width: 30,
                    height: 30,
                    marginLeft: 10,
                  }}
                  onClick={() => {
                    setLeft(i ? i + 1 : 0);
                  }}
                >
                  {i}
                </button>
              ))}
            </div>
            <button
              style={{
                borderRadius: 8,
                padding: "2px 16px",
                backgroundColor: "lightblue",
                margin: 20,
              }}
              onClick={handleDownloadPDF}
            >
              PDF DOWNLOAD
            </button>
          </div>
        </A4Layout>
        <A4Layout page={2}>
          <CrataInfo />
        </A4Layout>
        <A4Layout page={3}>
          <Graph
            colorSize={colorSize}
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            birthDate={birthDate}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <Content title={"인간유형"}>
              <PersonCategory />
            </Content>
            <Content
              title={"해설"}
              colored
              style={{ marginTop: -8, height: "100%" }}
            >
              <div></div>
            </Content>
          </div>
        </A4Layout>
        <A4Layout page={4}>
          <Graph
            colorSize={colorSize}
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            birthDate={birthDate}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <Content title={"행동유형"} style={{ height: "100%" }}>
              <BehaviorCategory />
            </Content>
          </div>
        </A4Layout>
        <A4Layout page={5}>
          <Content colored title="해설" style={{ height: "100%" }}>
            <Explanation />
          </Content>
        </A4Layout>
        <A4Layout page={6}>
          <Graph
            colorSize={colorSize}
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            birthDate={birthDate}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <Content title="또래집단 행동유형">
              <FriendBehaviorCategory />
            </Content>
            <Content
              colored
              title="해설"
              style={{ height: "100%", marginTop: -8 }}
            >
              <div></div>
            </Content>
          </div>
        </A4Layout>
        <A4Layout page={7}>
          <Graph
            colorSize={colorSize}
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            birthDate={birthDate}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <Content
              title="정서적 만족 유형"
              subTitle={"세상을 가치롭게 변화시키는 개혁자"}
              style={{ height: "100%" }}
              bodyStyle={{ padding: 0 }}
            >
              <Table>
                <thead>
                  <tr>
                    {["인지방식", "행동방식"].map((data, index) => (
                      <TH key={index} index={index}>
                        {data}
                      </TH>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {["· 인지 :", "· 행동 :"].map((data, index) => (
                      <TD key={index} style={{ padding: 14 }} index={index}>
                        {data}
                      </TD>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </Content>
          </div>
        </A4Layout>
        <A4Layout page={8}>
          <Graph
            colorSize={colorSize}
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            birthDate={birthDate}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <Content
              title="기본 역량 분석"
              style={{ height: "100%" }}
              bodyStyle={{ padding: 0 }}
            >
              <Table>
                <thead>
                  <tr>
                    {["역량", "인지", "행동"].map((data, index) => (
                      <TH key={index} index={index}>
                        {data}
                      </TH>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: "center",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 6,
                          }}
                        >
                          <Icon iconName={"Round"} iconSize={12} />
                          <div style={{ width: 6 }} />
                          <Icon iconName={"RoundFilled"} iconSize={12} />
                        </div>
                        <span style={{ fontWeight: 500 }}>중심 역량</span>
                        <span style={{ fontSize: 12 }}>
                          (자신의 뿌리 역할을 하는 능력)
                        </span>
                        <span
                          style={{
                            fontWeight: 500,
                            marginTop: 4,
                          }}
                        >
                          S E
                        </span>
                      </div>,
                      <div style={{ display: "flex" }}>
                        <span style={{ fontWeight: 500 }}>전략형</span>(
                        <span style={{ fontWeight: 500 }}>S</span>
                        trategic type)
                      </div>,
                      <div style={{ display: "flex" }}>
                        <span style={{ fontWeight: 500 }}>경험형</span>(
                        <span style={{ fontWeight: 500 }}>E</span>
                        xperiential type)
                      </div>,
                    ],
                    [
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: "center",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 6,
                          }}
                        >
                          <Icon iconName={"Star"} iconSize={12} />
                          <div style={{ width: 6 }} />
                          <Icon iconName={"StarFilled"} iconSize={12} />
                        </div>
                        <span style={{ fontWeight: 500 }}>핵심 역량</span>
                        <span style={{ fontSize: 12 }}>
                          (자신의 강점이 되는 능력)
                        </span>
                        <span
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          E E
                        </span>
                      </div>,
                      <div style={{ display: "flex" }}>
                        <span style={{ fontWeight: 500 }}>경험형</span>(
                        <span style={{ fontWeight: 500 }}>E</span>
                        xperiential type)
                      </div>,
                      <div style={{ display: "flex" }}>
                        <span style={{ fontWeight: 500 }}>경험형</span>(
                        <span style={{ fontWeight: 500 }}>E</span>
                        xperiential type)
                      </div>,
                    ],
                    [
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: "center",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 6,
                          }}
                        >
                          <Icon iconName={"Triangle"} iconSize={12} />
                        </div>
                        <span style={{ fontWeight: 500 }}>성장 역량</span>
                        <span style={{ fontSize: 12 }}>
                          (자신을 변화 시키는 능력)
                        </span>
                        <span
                          style={{
                            fontWeight: 500,
                            marginTop: 4,
                          }}
                        >
                          S
                        </span>
                      </div>,
                      <div></div>,
                      <div style={{ display: "flex" }}>
                        <span style={{ fontWeight: 500 }}>전략형</span>(
                        <span style={{ fontWeight: 500 }}>S</span>
                        trategic type)
                      </div>,
                    ],
                    [
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          textAlign: "center",
                          height: "100%",
                        }}
                      >
                        <span style={{ fontWeight: 500 }}>잠재 역량</span>
                        <span style={{ fontSize: 12 }}>
                          (무의식에 숨겨진 능력)
                        </span>
                      </div>,
                      <div></div>,
                      <div></div>,
                    ],
                  ].map((rowData, index) => (
                    <TR key={index} index={index} totalRow={4}>
                      {rowData.map((data, index) => (
                        <TD key={index} style={{ padding: 6 }} index={index}>
                          {data}
                        </TD>
                      ))}
                    </TR>
                  ))}
                </tbody>
              </Table>
            </Content>
          </div>
        </A4Layout>
        <A4Layout page={9}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <Content title={"자가분석"}>
              <SelfAnalysis />
            </Content>
            <Content
              title={"해설"}
              style={{ flex: 1, marginTop: -8 }}
              colored
            ></Content>
          </div>
        </A4Layout>
        <A4Layout page={10}>
          <Content title={"솔루션 (에너지 분석)"}>
            <Solution />
          </Content>
          <Table
            style={{
              borderLeft: `1px solid ${colors.primary}`,
              borderRight: `1px solid ${colors.primary}`,
            }}
          >
            <thead>
              <tr>
                {["인지 에너지", "행동 에너지"].map((data, index) => (
                  <TH key={index} index={index}>
                    {data}
                  </TH>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {["", ""].map((data, index) => (
                  <TD key={index} index={index}></TD>
                ))}
              </tr>
            </tbody>
          </Table>
        </A4Layout>
      </div>
    </Layout>
  );
}
