import './App.css';
import { Routes, Route} from 'react-router-dom';
import Archive from './components/Archive';
import Header from './components/Header'
import Profile from './components/Profile';
import NewEntry from './components/NewEntry';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/archive' element={<Archive />}/>
          <Route path='profile' element={<Profile />}/>
          <Route path='/new-entry' element={<NewEntry />} />
      </Routes>
    </div>
  );
}

export default App;
