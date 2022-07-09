import { useReducer } from 'react';
import { reducer, initialeState, State } from './state/state';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllRestaurants from './pages/AllRestaurants/AllRestaurants';
import Restaurant from './pages/Restaurant/Restaurant';
import CreateRestaurant from './components/CreateRestaurant'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialeState);
  return (
    <State.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<CreateRestaurant />} />
          <Route path="/all" element={<AllRestaurants />} />
          <Route path="all/:id" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </State.Provider>
  );
}

export default App;
