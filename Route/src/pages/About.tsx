import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <section style={styles.wrap}>
      <span style={styles.badge}>path="/about"</span>
      <h1 style={styles.title}>👋 소개 페이지</h1>
      <p style={styles.sub}>
        useNavigate로도 이동할 수 있고, Link로도 이동할 수 있어요.
      </p>
      <button style={styles.btn} onClick={() => navigate(-1)}>
        ← 뒤로 가기
      </button>
    </section>
  );
}
export default About;

const styles = {
  wrap: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.25rem",
    padding: "3rem 2rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 800,
    margin: 0,
    color: "#ffffff",
  },
  sub: {
    fontSize: "1rem",
    color: "#888",
    margin: 0,
    textAlign: "center",
    maxWidth: "520px",
  },
  btn: {
    marginTop: "0.5rem",
    padding: "10px 24px",
    background: "#FCD535",
    color: "#0b0e11",
    border: "none",
    borderRadius: "6px",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: "14px",
  },
  badge: {
    fontSize: "12px",
    background: "#1e2329",
    border: "1px solid #2b3139",
    padding: "4px 10px",
    borderRadius: "99px",
    color: "#888",
  },
} as const;
