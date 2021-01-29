import './App.css';
import NameProp from './components/NameProp';
import Contact from './components/Contact';
import State from './components/State';

function App() {
  const profile = {
    name: 'Bonnie',
    age: 71,
    school: 'Ferris State University',
    graduationYear: 2010,
  };
  return (
    <div className='App'>
      {/*
      <NameProp name='Bonnie' />
      <NameProp name='Ben' />
      <NameProp name='Jessica'
      <Contact name='Paul' age='70 school='Ferris State University' graduationYear: 2010/>
      BELOW Mount Contact*/}
      <Contact {...profile} />
      <p>-------------------------------------------</p>
      <State />
    </div>
  );
}

export default App;
