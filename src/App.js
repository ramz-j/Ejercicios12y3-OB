import './App.css';
import ComponenteA from './component/ComponenteA';
import { Contact } from './models/Contact.class';

function App() {

const exampleContact = new Contact('Jessica', 'Ramirez', 'ramzgonz.j@gmail.com', false);

  return (
    <div className="App">
      <ComponenteA contact = {exampleContact} />
    </div>
  );
}

export default App;
