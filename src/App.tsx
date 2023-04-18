import { Navigation } from './components/Navigation';
import { TaskCard } from './components/TaskCard';
import { SearchBar } from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <SearchBar />
      <TaskCard />
    </div>
  )
}

export default App
