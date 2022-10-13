import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Posts from "./Pages/Posts/Posts";
import EditPost from "./Pages/Posts/EditPost";
import AddPost from "./Pages/Posts/AddPost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts/add" element={<AddPost />}></Route>
          <Route path="/posts/:id/edit" element={<EditPost />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
