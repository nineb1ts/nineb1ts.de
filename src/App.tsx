import "./App.css";
import Typewriter from "./Typewriter";

function App() {
  return (
    <div className="page">
      <main>
        <section className="hero noselect">
          <div className="container grid">
            <div className="hero-content">
              <h1 className="hero-title">
                nineb<span className="one">1</span>t<span className="s">s</span>
              </h1>

              <Typewriter />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
