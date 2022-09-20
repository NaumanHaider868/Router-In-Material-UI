import _Navbar from './componet/_Navbar'
import _Home from './componet/_Home'
import _Pricing from './componet/_Pricing'
import _Blog from './componet/_Blog'
import _Products from './componet/_Products'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <_Navbar/>
      <Routes>
        <Route path='/' element={<_Home/>} />
        <Route path='pricing' element={<_Pricing/>} />
        <Route path='blog' element={<_Blog/>} />
        <Route path='products' element={<_Products/>} />
      </Routes>
    </div>
  );
}

export default App;
