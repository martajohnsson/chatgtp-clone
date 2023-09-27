
const  App = ()=> {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
            <li>Test</li>
        </ul>
        <nav>
          <p>Made by Marta</p>
        </nav>
      </section>
      <section className="main">
          <h1>MartaGTP</h1>
          <ul className="feed"></ul>
          <div className="bottom-section">
            <div className="input-container">
                <input/>
                <div id="submit">➡</div>
            </div>
              <p className="info">
                Chat GPT Mar 14 Version. Free Research Preview.
              </p>
          </div>
      </section>
    </div>
  );
}

export default App;
