import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import GlobalStyle from './Global';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        {/* <NavBar /> */}
        <Home />
      </div>
    </>
  );
}

export default App;
