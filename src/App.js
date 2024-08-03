import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './templates/HomePage';
import DescPage from './templates/DescPage';
import LoginPage from './templates/LoginPage';
import ContactPage from './templates/ContactPage';


function App() {
  return (
    <Router basename='b-planet/'>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="desc/:id" element={<DescPage />}></Route>
        <Route exact path="login/" element={<LoginPage />}></Route>
        <Route exact path="contact/" element={<ContactPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
