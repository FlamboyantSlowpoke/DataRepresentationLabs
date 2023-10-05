
import './App.css';
// import Header from './components/content';
import Header from './components/content';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* functional component call */}
        <Header />

        {/* E2(a) */}
        <h1>
          Hello world!
        </h1>
        {/* E2(b) */}
        <h2>
          It is {new Date().toLocaleTimeString()}.
        </h2>
      </header>
    </div>
  );
}

export default App;
