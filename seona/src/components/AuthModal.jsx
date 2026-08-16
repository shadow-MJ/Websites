import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function AuthModal() {
  const { authModalOpen, authTab, setAuthTab, closeAuthModal, login, register, toast } = useApp();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginBusy, setLoginBusy] = useState(false);

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regError, setRegError] = useState("");
  const [regBusy, setRegBusy] = useState(false);

  function handleClose() {
    setLoginError("");
    setRegError("");
    closeAuthModal();
  }

  async function submitLogin(e) {
    e.preventDefault();
    setLoginError("");
    setLoginBusy(true);
    try {
      const user = await login(loginEmail, loginPassword);
      setLoginEmail("");
      setLoginPassword("");
      handleClose();
      toast("Welcome back", `Logged in as ${user.name}.`);
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginBusy(false);
    }
  }

  async function submitRegister(e) {
    e.preventDefault();
    setRegError("");
    setRegBusy(true);
    try {
      const user = await register(regName, regEmail, regPassword);
      setRegName("");
      setRegEmail("");
      setRegPassword("");
      handleClose();
      toast("Account created", `Welcome, ${user.name}!`);
    } catch (err) {
      setRegError(err.message);
    } finally {
      setRegBusy(false);
    }
  }

  return (
    <>
      <div
        id="auth-modal-overlay"
        className={authModalOpen ? "open" : ""}
        onClick={handleClose}
      ></div>
      <div id="auth-modal" className={authModalOpen ? "open" : ""}>
        <button className="auth-modal-close" onClick={handleClose} aria-label="Close">
          &times;
        </button>
        <div className="auth-tabs">
          <button
            className={`auth-tab ${authTab === "login" ? "active" : ""}`}
            onClick={() => setAuthTab("login")}
          >
            LOG IN
          </button>
          <button
            className={`auth-tab ${authTab === "register" ? "active" : ""}`}
            onClick={() => setAuthTab("register")}
          >
            SIGN UP
          </button>
        </div>

        <form className={`auth-form ${authTab !== "login" ? "hidden" : ""}`} onSubmit={submitLogin}>
          <div className={`auth-error ${!loginError ? "hidden" : ""}`}>{loginError}</div>
          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full btn-sq" disabled={loginBusy}>
            {loginBusy ? "LOGGING IN..." : "LOG IN"}
          </button>
        </form>

        <form className={`auth-form ${authTab !== "register" ? "hidden" : ""}`} onSubmit={submitRegister}>
          <div className={`auth-error ${!regError ? "hidden" : ""}`}>{regError}</div>
          <div className="form-field">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              required
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              required
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              required
              minLength={6}
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
            />
            <div className="form-hint">At least 6 characters.</div>
          </div>
          <button type="submit" className="btn btn-primary w-full btn-sq" disabled={regBusy}>
            {regBusy ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
          </button>
        </form>
      </div>
    </>
  );
}
