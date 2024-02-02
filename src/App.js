import { useState } from 'react';
import './App.css';
import { SearchTerms } from './components';

function App() {
  const [rows, setRows] = useState([
    { id: 1, toggle: false, searchTerm: 'airpods max', searchVolume: '450K', difficulty: 'Hard' },
    { id: 2, toggle: false, searchTerm: 'beats headphones', searchVolume: '368K', difficulty: 'Medium' },
    { id: 3, toggle: false, searchTerm: 'bluetooth headphones', searchVolume: '215K', difficulty: 'Very Hard' },
    { id: 4, toggle: false, searchTerm: 'apple headphones', searchVolume: '384K', difficulty: 'Easy' },
    { id: 5, toggle: false, searchTerm: 'sony headphones', searchVolume: '509K', difficulty: 'Possible' },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchTerms rows={rows} setRows={setRows} />
      </header>
    </div>
  );
}

export default App;
