import { useApp } from "../context/AppContext";

export default function ToastContainer() {
  const { toasts } = useApp();
  return (
    <div id="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.type}`}>
          <div className="toast-title">{t.title}</div>
          <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>{t.msg || ""}</div>
        </div>
      ))}
    </div>
  );
}
