import './App.css';
import Estado from './component/Estado';
import { Contact } from './models/Contact.class';

function App() {

const exampleContact = new Contact('Jessica', 'Ramirez', 'ramzgonz.j@gmail.com', false);

  return (
    <div className="App">
      <Estado contact = {exampleContact} />
    </div>
  );
}

export default App;
