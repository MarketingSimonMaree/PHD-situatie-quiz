import { useState } from "react";
import "./styles.css";

function App() {
  const [selectedModal, setSelectedModal] = useState(null);

  // Voeg deze functie toe
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  const modalContent = {
    1: {
      title: "Een plafondhoge deur is mogelijk bij jou! ",
      content:
        "Hier komt de specifieke tekst voor opdekdeur met stalen kozijn...",
      primaryButton: "Verder gaan",
      secondaryButton: "Product informatie",
      primaryUrl: "https://plafondhogedeur.nl/collections/deurmodellen",
      secondaryUrl: "https://plafondhogedeur.nl/collections/deurmodellen",
    },
    2: {
      title: "Houten kozijn",
      content: "Hier komt de specifieke tekst voor houten kozijn...",
      primaryButton: "Verder gaan",
      secondaryButton: "Product informatie",
      primaryUrl: "https://plafondhogedeur.nl/collections/deurmodellen",
      secondaryUrl: "https://plafondhogedeur.nl/collections/deurmodellen",
    },
    3: {
      title: "Lege sparing",
      content: "Hier komt de specifieke tekst voor lege sparing...",
      primaryButton: "Bestel direct",
      secondaryButton: "Meer informatie",
      primaryUrl: "https://plafondhogedeur.nl/collections/deurmodellen",
      secondaryUrl: "https://plafondhogedeur.nl/collections/deurmodellen",
    },
  };

  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://plafondhogedeur.nl/cdn/shop/t/2/assets/phd-logo.svg?v=173245948125749905881618906759"
          alt="Logo"
        />
      </div>
      <h1>Selecteer de situatie bij u thuis. Klik op de foto</h1>
      <div className="grid">
        <div className="card" onClick={() => setSelectedModal(1)}>
          <img
            src="https://files.widgetic.com/file/widgetic-uploads/app/600ee0c5ecb2a1eb798b456b/ko1bioac-l9ig7n.jpg"
            alt="Opdekdeur"
          />
          <h2>
            Opdekdeur met
            <br />
            stalen kozijn
          </h2>
        </div>
        <div className="card" onClick={() => setSelectedModal(2)}>
          <img
            src="https://files.widgetic.com/file/widgetic-uploads/app/600ee0c5ecb2a1eb798b456b/ko1bioac-l9ig7n.jpg"
            alt="Houten kozijn"
          />
          <h2>Houten kozijn</h2>
        </div>
        <div className="card" onClick={() => setSelectedModal(3)}>
          <img
            src="https://files.widgetic.com/file/widgetic-uploads/app/600ee0c5ecb2a1eb798b456b/ko1bioac-l9ig7n.jpg"
            alt="Lege sparing"
          />
          <h2>Lege sparing</h2>
        </div>
      </div>

      {selectedModal && (
        <div className="modal-overlay" onClick={() => setSelectedModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedModal(null)}
            >
              ×
            </button>
            <h2>{modalContent[selectedModal].title}</h2>
            <p>{modalContent[selectedModal].content}</p>
            <div className="button-container">
              <button
                className="modal-button primary"
                onClick={() =>
                  handleButtonClick(modalContent[selectedModal].primaryUrl)
                }
              >
                {modalContent[selectedModal].primaryButton}
              </button>
              <button
                className="modal-button secondary"
                onClick={() =>
                  handleButtonClick(modalContent[selectedModal].secondaryUrl)
                }
              >
                {modalContent[selectedModal].secondaryButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
