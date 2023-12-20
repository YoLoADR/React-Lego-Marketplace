import "./App.css";
import { mockProducts } from "./db/productsDB";
import Footer from "./containers/Footer";
import Content from "./containers/Content";
import Header from "./containers/Header";
import Navigation from "./containers/Navigation";

export default function App() {
  return (
    <main className="main-container">
      <Navigation />
      <Header />
      <Content products={mockProducts} />
      <Footer />
    </main>
  );
}
