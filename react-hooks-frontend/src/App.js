// import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import {BrowserRouter, Route,Routes} from "react-router-dom";
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route index element={<ListEmployeeComponent />} />
        <Route path="/" element={<ListEmployeeComponent />}></Route> 
        <Route path="/employees" element={<ListEmployeeComponent />}></Route>
        <Route path="*" element={<ListEmployeeComponent />}></Route>
        <Route path="/add-employee" element={<AddEmployeeComponent />}></Route>
        <Route path="/edit-employee/:id" element={<AddEmployeeComponent />}></Route>
      </Routes>
      <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
