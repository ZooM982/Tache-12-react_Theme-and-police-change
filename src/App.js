import './App.css';
import ThemeProvider from './components/ThemeContext';
import ThemeChanger from './components/ThemeChanger';
import Header from './components/Header';


const App = () => {

  return (
    <div className="App">

      <ThemeProvider>
        <Header />
        <hr />
        <ThemeChanger />
      </ThemeProvider>
    </div>
  );
}

export default App;
