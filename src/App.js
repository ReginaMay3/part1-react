import './App.css';
import Home from './Home';
import Setup from './Setup';
import More from './More';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav class="flex p-6 gap-4 md:gap-10 md:mt-5 md:mr-10 justify-end text-pink-500">
          <Link to="/">Home</Link>
          <Link to="/setup">Setup</Link>
          <Link to="/more">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/setup' element={<Setup />} />
          <Route path='/more' element={<More />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
