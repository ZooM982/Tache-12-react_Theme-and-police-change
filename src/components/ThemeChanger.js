import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {

  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Passer en mode sombre
      </label>
      <br />
      <br />
      <label>
        <input
          type="checkbox"
          checked={theme === 'red'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'red' : 'light')
          }}
        />
        Passer en mode rouge
      </label>
    </ThemeContext.Provider>
  )
}

function Form({ children }) {
  return (
    <Panel title="Changement de theme">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
    
  );
}
