import './App.css';
import Navbar from './components/Navbar';
import CreateSource from './components/CreateSource';
import Source from './components/Source';
import {useState} from 'react';


function App() {
  const [values, setValues] = useState([
    {number: 1, name: "Presbo", email: "Presbo@columbia.edu"},
    {number: 2, name: "John Jay Mouse", email: "mouse@columbia.edu"},
    {number: 3, name: "Water Bottle Man", email: "flipper@columbia.edu"}
  ]);
  
  let current_id = values.length +1;

  function deleteSource (number){
    setValues(values.filter((value)=> value.number !== number));
  };
  
  function addSource (value){
    const newValue = {number: current_id, name: value.name, email: value.email}; 
    setValues([...values, newValue]);
    current_id++;
  };
  
  return (
    <div className="App">
      <Navbar />
      <main>
          <CreateSource addSource = {(addSource)}/>
          {
            values.map(value => {
              return (
                <Source
                  number={value.number}
                  name={value.name}
                  email={value.email}
                  deleteSource={deleteSource}
                />
              )
            })
          };
      </main>
    </div>
  );
}

export default App;
