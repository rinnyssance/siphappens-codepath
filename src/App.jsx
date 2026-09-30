import BaristaForm from './components/BaristaForm';
import './App.css';
export default function App() {
  return <div className="app-shell">
    <header className="site-header"><span>A LITTLE LIME. A LITTLE GUESSWORK.</span><b aria-hidden="true">✳</b><span>THE MARGARITA RECIPE GAME</span></header>
    <main>
      <section className="hero" aria-labelledby="title">
        <div className="citrus" aria-hidden="true"><span /></div>
        <div><p className="eyebrow">WELCOME TO YOUR HAPPY HOUR</p><h1 id="title">Sip Happens</h1><p className="tagline">Shake it 'til you make it.</p></div>
        <div className="sun-stamp" aria-hidden="true">GOOD<br />TIMES<br /><span>✳</span></div>
      </section>
      <BaristaForm />
    </main>
    <footer><span>SIP HAPPENS ✳ MADE WITH A TWIST</span><span>A React forms lab · CodePath WEB102</span></footer>
  </div>;
}
