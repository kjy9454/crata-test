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
      scale: 2,
      windowWidth: document.body.scrollWidth,
      windowHeight: document.body.scrollHeight,
    }).then((canvas) => {
      let imgData = canvas.toDataURL("image/png");

      let imgWidth = 210;
      let pageHeight = imgWidth * 1.414;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

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
              <p>오라소마 기준 날짜</p>
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
      </div>
    </Layout>
  );
}
