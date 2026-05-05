import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.left}>
          <span style={styles.brand}>● Route</span>
          <span style={styles.muted}>React Router 학습용 데모</span>
        </div>

        <div style={styles.links}>
          <Link to="/" style={styles.link}>홈</Link>
          <Link to="/about" style={styles.link}>소개</Link>
          <Link to="/post/1" style={styles.link}>게시글</Link>
        </div>

        <p style={styles.copy}>
          © {new Date().getFullYear()} 3회차 프론트 세션
        </p>
      </div>
    </footer>
  );
}
export default Footer;

const styles = {
  footer: {
    width: "100%",
    background: "#0b0e11",
    borderTop: "1px solid #2b3139",
  },
  inner: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "20px 24px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  brand: {
    color: "#FCD535",
    fontWeight: 700,
    fontSize: "13px",
    letterSpacing: "0.02em",
  },
  muted: {
    fontSize: "12px",
    color: "#707a8a",
  },
  links: {
    display: "flex",
    gap: "0.25rem",
  },
  link: {
    color: "#b7bdc6",
    textDecoration: "none",
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "4px",
  },
  copy: {
    fontSize: "11px",
    color: "#555",
    margin: 0,
  },
} as const;
