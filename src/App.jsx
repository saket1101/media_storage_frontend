import './App.css'
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Content from "./pages/Home/Content";
import Upload from './pages/Media/UploadFiles';
import PrivateRoute from './middleware/privateroute';
import AllFiles from './pages/Media/AllFiles';

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route path="/" element={<Content />} />
        <Route path='/dashboard/add-media' element={<Upload />} />
        <Route path='/dashboard/all-media' element={<AllFiles />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
