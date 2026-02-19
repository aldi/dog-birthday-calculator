import { useState, useCallback, memo } from 'react';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo.jsx';
import Birthdays from './components/Birthdays.jsx';
import calculateBirthdays from './utils/calculateBirthdays';

const getTodayString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const particleElements = [...Array(10)].map((_, i) => (
  <div key={i} className="particle" />
));

const Particles = memo(function Particles() {
  return <div className="particles">{particleElements}</div>;
});

function App() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(getTodayString());
  const [datesArr, setDatesArr] = useState(null);

  const handleCalculation = useCallback(() => {
    if (name.trim() === '') {
      alert("Please enter your dog's name! 🐕");
    } else {
      setDatesArr(calculateBirthdays(dateOfBirth));
    }
  }, [name, dateOfBirth]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        handleCalculation();
      }
    },
    [handleCalculation]
  );

  return (
    <>
      <BackgroundVideo />
      <Particles />

      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6-desktop is-8-tablet is-12-mobile">
                <div className="glass-card animate-fade-in-up">
                  <span className="paw-decoration top-right">🐾</span>
                  <span className="paw-decoration bottom-left">🐾</span>

                  <div className="text-center">
                    <span className="dog-icon">🐶</span>
                    <h1 className="app-title">Dog Birthday Calculator</h1>
                    <p className="app-subtitle">Discover your pup's special days</p>
                  </div>

                  <div className="form-section">
                    <div className="input-group">
                      <label className="input-label" htmlFor="name">
                        Dog's Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="modern-input"
                        placeholder="Enter your dog's name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        autoComplete="off"
                      />
                    </div>

                    <div className="input-group">
                      <label className="input-label" htmlFor="dogBirthday">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="dogBirthday"
                        className="modern-input"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        max={getTodayString()}
                      />
                    </div>

                    <div className="text-center">
                      <button
                        onClick={handleCalculation}
                        className="calculate-btn"
                        id="calculate"
                      >
                        🎂 Calculate Birthdays
                      </button>
                    </div>
                  </div>

                  {datesArr && (
                    <div className="results-section animate-fade-in-up">
                      <Birthdays name={name} datesArr={datesArr} />
                    </div>
                  )}

                  <p className="footer-text">
                    Made with 💛 for dog lovers everywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
