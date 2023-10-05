
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* E2(a) */}
        <h1>
          Hello world!
        </h1>

        <h2>
          It is {new Date().toLocaleTimeString()}.
        </h2>
      </header>
    </div>
  );
}

export default App;
