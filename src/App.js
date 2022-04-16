import './App.css';
import { Title } from './components/Title';
import { Icon } from './components/Icon';
import { Subtext } from './components/Subtext';


function App() {
  return (
    <div className="App">
     <div className="center">
     <Title />
      <Icon />
      <Subtext />
     </div> 
    </div>
  );
}

export default App;
