import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/articleslist" element={<ArticlesList/>}/>
        <Route path="/article/:name" element={<Article/>}/>
    </Routes>
    </>
  );
}

export default App;
