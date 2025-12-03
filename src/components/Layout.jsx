import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
<main style={{ flex: 1 }}>
  <div className="container">{children}</div>
</main>


      <Footer />
    </div>
  );
}
