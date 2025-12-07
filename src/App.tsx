import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main content/Main";

export default function App() {
  return (
    <div className="landing-container">
      <Header />

      <main className="flex-1">
        <Main />
      </main>

      <Footer />
    </div>
  );
}