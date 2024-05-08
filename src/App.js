import './App.css';
import Header from './components/Header';
import ThemeProvider from './components/ThemeContext';
import ThemeChanger from './components/ThemeChanger';

const App = () => {

  return (
    <div className="App">
      <header>
        <h1>Affichage</h1>
      </header>


      <ThemeProvider>
        <Header />
        <ThemeChanger />
      </ThemeProvider>
    </div>
  );
}

export default App;
