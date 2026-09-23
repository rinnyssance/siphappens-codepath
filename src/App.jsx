import { useState } from "react";
import Card from "./components/Card";
import { events } from "./data";
import "./App.css";

const categories = [
  "All opportunities",
  "Technology",
  "Arts & culture",
  "Community",
  "Entrepreneurship",
];

export default function App() {
  const [category, setCategory] = useState("All opportunities");
  const visibleEvents = events.filter(
    (event) => category === "All opportunities" || event.category === category,
  );
  return (
    <>
      <a className="skip-link" href="#board">
        Skip to opportunities
      </a>
      <header className="site-header">
        <a className="wordmark" href="#">
          <span className="brand-icon" aria-hidden="true">
            ✳
          </span>{" "}
          757 <span>Create & Connect</span>
        </a>
        <a className="header-link" href="#board">
          Explore the board <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> HAMPTON ROADS, VIRGINIA
            </p>
            <h1 id="hero-title">
              Good things happen
              <br />
              when we <em>connect.</em>
            </h1>
            <p className="intro">
              Discover creative and tech opportunities around Hampton Roads.
              Find your people, try something new, and make a little room for
              possibility.
            </p>
            <a className="primary-link" href="#board">
              Find your next thing <span aria-hidden="true">↘</span>
            </a>
            <p className="hero-caption">Seven cities. Endless possibilities.</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-grid" />
            <div className="sun">✳</div>
            <div className="art-label">
              LOCAL IDEAS.
              <br />
              REAL CONNECTIONS.
            </div>
            <div className="code-sticker">
              &lt; hello, 757 /&gt;<small>LET’S BUILD SOMETHING.</small>
            </div>
            <div className="connect-sticker">
              create
              <br />
              <i>&</i> connect<span>↗</span>
            </div>
            <div className="wave wave-one" />
            <div className="wave wave-two" />
            <span className="art-footnote">
              A LITTLE CURIOSITY GOES A LONG WAY
            </span>
          </div>
        </section>
        <aside className="example-notice">
          <span aria-hidden="true">ⓘ</span>
          <p>
            <strong>A board for inspiration.</strong> All events below are
            fictional examples for a student project—not scheduled events. Links
            lead to related learning resources.
          </p>
        </aside>
        <section id="board" className="board" aria-labelledby="board-title">
          <div className="board-heading">
            <div>
              <p className="eyebrow">YOUR COMMUNITY, YOUR NEXT CHAPTER</p>
              <h2 id="board-title">A little something for everyone.</h2>
            </div>
            <span className="count" aria-live="polite">
              {visibleEvents.length} opportunities
            </span>
          </div>
          <div
            className="filters"
            aria-label="Filter opportunities by category"
          >
            {categories.map((item) => (
              <button
                key={item}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="card-grid">
            {visibleEvents.map((event) => (
              <Card key={event.id} event={event} />
            ))}
          </div>
        </section>
        <section className="closing">
          <span aria-hidden="true">✳</span>
          <div>
            <h2>Your next great idea starts with a hello.</h2>
            <p>Stay curious. Show up. Create something together.</p>
          </div>
          <a href="#board">Back to the board ↑</a>
        </section>
      </main>
      <footer>
        <a className="footer-brand" href="#">
          757 Create & Connect
        </a>
        <p>
          Created by{" "}
          <a
            href="https://github.com/rinnyssance"
            target="_blank"
            rel="noreferrer"
          >
            Rinnyssance
          </a>{" "}
          for{" "}
          <a href="https://www.codepath.org/" target="_blank" rel="noreferrer">
            Codepath
          </a>
        </p>
        <a
          href="https://github.com/rinnyssance"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </footer>
    </>
  );
}
