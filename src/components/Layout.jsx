import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold">
            <Link to="/">MiniSite</Link>
          </div>
          <ul className="flex gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="flex-1">
        {children}
      </div>

      <footer className="bg-gray-800 text-gray-200">
        <div className="container mx-auto p-4 text-center">
          © {new Date().getFullYear()} MiniSite — Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
