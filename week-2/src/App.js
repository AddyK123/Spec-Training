import './App.css';
import Navbar from './components/Navbar';
import CreateSource from './components/CreateSource';
import Source from './components/Source';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
          <CreateSource />
          <Source number = "1" name = "Presbo" email= "presbo@columbia.edu" />
          <Source number = "2" name = "John Jay Mouse" email= "mouse@columbia.edu"/>
          <Source number = "3" name = "Water Bottle Man" email= "flipper@columbia.edu"/>
      </main>
    </div>
  );
}

export default App;
