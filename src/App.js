import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Profile from "./component/profile";
import Todo from "./todo/todo";
import Login from "./component/login";
import PrivateRoute from "./privateRouter";
import NotFound from "./component/404error"

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
        
          <Route path="/login" element={<Login />} />

          <Route path="/toToManagement" element={<PrivateRoute element={<Todo />} />} />
          <Route path="/" element={<PrivateRoute element={<Profile />} />} />

        
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
