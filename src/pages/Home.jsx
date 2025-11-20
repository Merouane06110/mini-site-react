import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container">
        <h2>Présentation</h2>
        <p>
          Ce mini-site a été généré avec React et Vite, et contient une interface 
          moderne, responsive et animée. 
        </p>
      </div>
    </div>
  );
}
