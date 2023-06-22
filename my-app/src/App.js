import './App.css';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greeting name="JavaScript">Language of the web</Greeting>
      <Greeting name="Golang" />
      <Greeting name="Swift">Language for iOS apps</Greeting>
      <hr />
      <Welcome name="Java" />
      <Welcome name="Kotlin" />
      <Welcome name="Flutter">Language for cross-mobile development</Welcome>
    </div>
  );
}

export default App;
