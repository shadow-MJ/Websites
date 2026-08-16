export default function Stars({ rating, size = "1rem" }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            fontSize: size,
            color: i < Math.round(rating) ? "var(--primary)" : "#ddd",
          }}
        >
          ★
        </span>
      ))}
    </>
  );
}
