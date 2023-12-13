import { useState } from "react";
//import Home from "./pages/home/Home";
import Header from './components/header/Header';
import Share from "./components/share/Share";
import Register from "./pages/register/Register";
//import Profile from "./pages/profile/Profile";
//import Messenger from "./pages/messenger/Messenger";



function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Share open={open} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
     {/*  <Home /> */}
     {/*   < Profile /> */}
     {/*  < Messenger /> */}
    <Register />

      
    </div>
  );
}

export default App;
