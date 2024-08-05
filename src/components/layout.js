export default function Layout({ children, style }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
