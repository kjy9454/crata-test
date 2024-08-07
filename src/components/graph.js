import useScreenSize from "../hooks/useScreenSize";
import moment from "moment";
import { colors } from "../styles/colors";
import RoundGraph from "./roundGraph";
import { convertDateToAuraSoma } from "../utils/convertToAuraSoma";
import { PDF_PADDING } from "../utils/consts";

export default function Graph({
  colorSize,
  top,
  left,
  right,
  bottom,
  birthDate,
}) {
  const { width: screenWidth } = useScreenSize();
  const width = (screenWidth - PDF_PADDING * 2) * 0.45;
  const outWidth = width * 0.85;
  const borderWidth = Math.max(Math.round(outWidth * 0.003), 1);
  const auraSoma = convertDateToAuraSoma(moment(birthDate).format("YYYYMMDD"));
  // 선의 길이와 각도 계산
  const calculateLineAttributes = (widthProp, heightProp) => {
    const lineWidth = (widthProp * outWidth) / 14;
    const lineHeight = (heightProp * outWidth) / 14;
    const lineLength = Math.sqrt(
      lineWidth * lineWidth + lineHeight * lineHeight
    );
    const angle = Math.atan2(lineHeight, lineWidth) * (180 / Math.PI);
    return { lineWidth, lineHeight, lineLength, angle };
  };

  // 상단 왼쪽 대각선
  const { lineLength: topLeftLength, angle: topLeftAngle } =
    calculateLineAttributes(left, top);
  const topLeftTop = width / 2 - (top * outWidth) / 14 + borderWidth;
  const topLeftLeft = width / 2 + borderWidth;
  const adjustedTopLeftAngle = 180 - topLeftAngle; // 각도 보정

  // 상단 오른쪽 대각선
  const { lineLength: topRightLength, angle: topRightAngle } =
    calculateLineAttributes(right, top);
  const topRightTop = width / 2 - (top * outWidth) / 14 - borderWidth;
  const topRightLeft = width / 2 + borderWidth;
  const adjustedTopRightAngle = topRightAngle; // 각도 보정

  // 하단 오른쪽 대각선
  const { lineLength: bottomRightLength, angle: bottomRightAngle } =
    calculateLineAttributes(right, bottom);
  const bottomRightTop = width / 2 + (bottom * outWidth) / 14 - borderWidth; // 위치 조정
  const bottomRightLeft = width / 2 - borderWidth;
  const adjustedBottomRightAngle = 360 - bottomRightAngle; // 각도 보정

  // 하단 왼쪽 대각선
  const { lineLength: bottomLeftLength, angle: bottomLeftAngle } =
    calculateLineAttributes(left, bottom);
  const bottomLeftTop = width / 2 - borderWidth;
  const bottomLeftLeft = width / 2 - (left * outWidth) / 14 + borderWidth;
  const adjustedBottomLeftAngle = bottomLeftAngle; // 각도 보정

  return (
    <div
      style={{
        display: "flex",
        width,
        height: width,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width,
          height: borderWidth,
        }}
      />
      {/* x축 */}
      <div
        style={{
          width,
          height: borderWidth,
          backgroundColor: "black",
          zIndex: 6,
          position: "absolute",
        }}
      />
      <div
        style={{
          width: 0,
          height: 0,
          borderRight: `${Math.max(Math.round(width * 0.02), 5)}px solid black`,
          borderTop: `${Math.max(
            Math.round(width * 0.01),
            2.5
          )}px solid transparent`,
          borderBottom: `${Math.max(
            Math.round(width * 0.01),
            5
          )}px solid transparent`,
          position: "absolute",
          left: 0,
        }}
      />
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: `${Math.max(Math.round(width * 0.02), 5)}px solid black`,
          borderTop: `${Math.max(
            Math.round(width * 0.01),
            2.5
          )}px solid transparent`,
          borderBottom: `${Math.max(
            Math.round(width * 0.01),
            5
          )}px solid transparent`,
          position: "absolute",
          right: 0,
        }}
      />
      {/* y축 */}
      <div
        style={{
          height: width,
          width: borderWidth,
          backgroundColor: "black",
          position: "absolute",
          alignSelf: "center",
          zIndex: 6,
        }}
      />
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: `${Math.max(
            Math.round(width * 0.01),
            2.5
          )}px solid transparent`,
          borderBottom: `${Math.max(
            Math.round(width * 0.02),
            5
          )}px solid black`,
          borderRight: `${Math.max(
            Math.round(width * 0.01),
            2.5
          )}px solid transparent`,
          position: "absolute",
          top: 0,
        }}
      />
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: `${Math.max(width * 0.01, 2.5)}px solid transparent`,
          borderTop: `${Math.max(Math.round(width * 0.02), 5)}px solid black`,
          borderRight: `${Math.max(
            Math.round(width * 0.01),
            2.5
          )}px solid transparent`,
          position: "absolute",
          bottom: 0,
          alignSelf: "center",
        }}
      />
      <RoundGraph
        outWidth={outWidth}
        colorSize={colorSize}
        borderWidth={borderWidth}
        {...auraSoma}
      />
      {Boolean(top) && Boolean(left) ? (
        <div
          style={{
            position: "absolute",
            top: topLeftTop,
            left: topLeftLeft,
            width: topLeftLength,
            height: Math.max(outWidth * 0.0075, 2),
            zIndex: 30,
            overflow: "hidden",
            transform: `rotate(${adjustedTopLeftAngle}deg)`,
            transformOrigin: "0 0", // 회전 기준점 설정
            backgroundColor: colors.graphLine,
          }}
        />
      ) : Boolean(left) ? (
        <div
          style={{
            width: (left * outWidth) / 14,
            height: Math.max(outWidth * 0.0075, 2),
            backgroundColor: colors.graphLine,
            position: "absolute",
            left: width / 2 - (left * outWidth) / 14,
            zIndex: 30,
          }}
        />
      ) : (
        <div
          style={{
            width: Math.max(outWidth * 0.0075, 2),
            height: (top * outWidth) / 14,
            backgroundColor: colors.graphLine,
            position: "absolute",
            top: top ? width / 2 - (top * outWidth) / 14 : 2,
            zIndex: 30,
          }}
        />
      )}
      {Boolean(top) && Boolean(right) ? (
        <div
          style={{
            position: "absolute",
            top: topRightTop,
            left: topRightLeft,
            width: topRightLength,
            height: Math.max(outWidth * 0.0075, 2),
            zIndex: 30,
            overflow: "hidden",
            transform: `rotate(${adjustedTopRightAngle}deg)`,
            transformOrigin: "0 0", // 회전 기준점 설정
            backgroundColor: colors.graphLine,
          }}
        />
      ) : Boolean(right) ? (
        <div
          style={{
            width: (right * outWidth) / 14 + Math.max(outWidth * 0.0075, 2) / 2,
            height: Math.max(outWidth * 0.0075, 2),
            backgroundColor: colors.graphLine,
            position: "absolute",
            left: width / 2 - Math.max(outWidth * 0.0075, 2) / 2,
            zIndex: 30,
          }}
        />
      ) : (
        Boolean(top) && (
          <div
            style={{
              width: Math.max(outWidth * 0.0075, 2),
              height:
                (top * outWidth) / 14 + Math.max(outWidth * 0.0075, 2) / 2,
              backgroundColor: colors.graphLine,
              position: "absolute",
              top: top ? width / 2 - (top * outWidth) / 14 : 2,
              zIndex: 30,
            }}
          />
        )
      )}
      {Boolean(bottom) && Boolean(right) ? (
        <div
          style={{
            position: "absolute",
            top: bottomRightTop,
            left: bottomRightLeft,
            width: bottomRightLength,
            height: Math.max(outWidth * 0.0075, 2),
            zIndex: 30,
            overflow: "hidden",
            transform: `rotate(${adjustedBottomRightAngle}deg)`,
            transformOrigin: "0 0", // 회전 기준점 설정
            backgroundColor: colors.graphLine,
          }}
        />
      ) : Boolean(right) ? (
        <div
          style={{
            width: (right * outWidth) / 14 + Math.max(outWidth * 0.0075, 2) / 2,
            height: Math.max(outWidth * 0.0075, 2),
            backgroundColor: colors.graphLine,
            position: "absolute",
            left: width / 2 - Math.max(outWidth * 0.0075, 2) / 2,
            zIndex: 30,
          }}
        />
      ) : (
        Boolean(bottom) && (
          <div
            style={{
              width: Math.max(outWidth * 0.0075, 1.5),
              height:
                (bottom * outWidth) / 14 + Math.max(outWidth * 0.0075, 1.5) / 2,
              backgroundColor: colors.graphLine,
              position: "absolute",
              top: width / 2 - Math.max(outWidth * 0.0075, 1.5) / 2,
              zIndex: 30,
            }}
          />
        )
      )}
      {Boolean(bottom) && Boolean(left) ? (
        <div
          style={{
            position: "absolute",
            top: bottomLeftTop,
            left: bottomLeftLeft,
            width: bottomLeftLength,
            height: Math.max(outWidth * 0.0075, 1.5),
            zIndex: 30,
            overflow: "hidden",
            transform: `rotate(${adjustedBottomLeftAngle}deg)`,
            transformOrigin: "0 0", // 회전 기준점 설정
            backgroundColor: colors.graphLine,
          }}
        />
      ) : Boolean(left) ? (
        <div
          style={{
            width:
              (left * outWidth) / 14 + Math.max(outWidth * 0.0075, 1.5) / 2,
            height: Math.max(outWidth * 0.0075, 1.5),
            backgroundColor: colors.graphLine,
            position: "absolute",
            left: width / 2 - (left * outWidth) / 14,
            zIndex: 30,
          }}
        />
      ) : (
        <div
          style={{
            width: Math.max(outWidth * 0.0075, 1.5),
            height: (bottom * outWidth) / 14,
            backgroundColor: colors.graphLine,
            position: "absolute",
            top: width / 2,
            zIndex: 30,
          }}
        />
      )}
    </div>
  );
}
