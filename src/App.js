import React from "react";
import "./App.css";
import logo from "./img/logo.svg";
import mainvisual from "./img/mainvisual.jpg";
import about from "./img/about.jpg";
import bicycle1 from "./img/bicycle1.jpg";
import bicycle2 from "./img/bicycle2.jpg";
import bicycle3 from "./img/bicycle3.jpg";

const App = () => {
  return (
    <div>
      <header id="header" className="wrapper">
        <h1 className="site-title">
          <a href="index.html">
            <img src={logo} alt="Profile" />
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#bicycle">Bicycle</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div id="mainvisual">
          <img src={mainvisual} alt="テキストテキストテキスト" />
        </div>

        <section id="about" className="wrapper">
          <h2 className="section-title">About</h2>
          <div className="content">
            <img src={about} alt="テキストテキストテキスト" />
            <div className="text">
              <h3 className="content-title">KAKERU MIYAICHI</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
                <br />
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </section>

        <section id="bicycle" className="wrapper">
          <h2 className="section-title">Bicycle</h2>
          <ul>
            <li>
              <img src={bicycle1} alt="テキストテキストテキスト" />
              <h3 className="content-title">タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
            <li>
              <img src={bicycle2} alt="テキストテキストテキスト" />
              <h3 className="content-title">タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
            <li>
              <img src={bicycle3} alt="テキストテキストテキスト" />
              <h3 className="content-title">タイトルタイトル</h3>
              <p>テキストテキストテキスト</p>
            </li>
          </ul>
        </section>
      </main>

      <footer id="footer">
        <p>© 2020 Profile</p>
      </footer>
    </div>
  );
};

export default App;
