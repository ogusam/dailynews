
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Header from './components/header';
import MainLayout from './components/layouts/mainLayout';
import Post from './components/post';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <MainLayout>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='article/:id' element={<Post/>}/>
    </Routes>
    </MainLayout>
    </BrowserRouter>
    
  );
}

export default App;
