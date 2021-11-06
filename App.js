import './App.css';
import Counter from './MainComponents/Counter'
import Header from './MainComponents/Header'
import Subscribe from './MainComponents/Subscribe'
import Starwars from './MainComponents/Starwars'
import Posts from './MainComponents/Posts'
import ApiCall2 from './MainComponents/ApiCall2'
import Posts2 from './MainComponents/Posts2'
import Posts3 from './MainComponents/Posts3'

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Subscribe />
      <Starwars />
      <Posts />
      <ApiCall2 />
      <Posts2 />
      <Posts3 />
    </div>
  );
}

export default App;
