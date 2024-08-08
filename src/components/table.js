import { colors } from "../styles/colors";

export default function Table({ children, style }) {
  return (
    <table
      style={{
        width: "100%",
        height: "100%",
        tableLayout: "fixed",
        borderCollapse: "collapse",
        ...style,
      }}
    >
      {children}
    </table>
  );
}

export function TH({ children, index, style }) {
  return (
    <th
      style={{
        backgroundColor: colors.primary,
        color: "#fff",
        padding: 8,
        fontWeight: 700,
        borderLeft: index ? "1px solid #fff" : "",
        ...style,
      }}
    >
      {children}
    </th>
  );
}

export function TD({ children, index, style }) {
  return (
    <td
      style={{
        fontSize: 14,
        borderLeft: index ? `1px solid ${colors.primary}` : "",
        verticalAlign: "top",
        flex: 1,
        ...style,
      }}
    >
      {children}
    </td>
  );
}

export function TR({ children, index, totalRow, style }) {
  return (
    <tr
      style={{
        borderTop: index ? `1px solid ${colors.primary}` : "",
        height: `${100 / (totalRow || 1)}%`,
        ...style,
      }}
    >
      {children}
    </tr>
  );
}
