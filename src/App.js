import './App.css';
import Home from './Home';
import Setup from './Setup';
import More from './More';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div class="md:text-left p-2; m-auto p-[25px] text-center">
        <nav class="flex gap-4 justify-end text-pink-500">
          <Link to="/" class="m-0">Home</Link>
          <Link to="/setup">Setup</Link>
          <Link to="/more">Contact</Link>
        </nav>
        <br/>
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
