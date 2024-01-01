import DayList from './component/DayList';
import Day from './component/Day'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<DayList/>}/>
              <Route path="/day/:day" element={<Day/>}/>
            </Routes>
          </header>
          
        </div>
      </BrowserRouter>

  );
}

export default App;
