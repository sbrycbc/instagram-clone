import { useState } from "react";
//import Home from "./pages/home/Home";
import Header from './components/header/Header';
import Share from "./components/share/Share";
import Profile from "./pages/profile/Profile";


function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Share open={open} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
     {/*  <Home /> */}
     < Profile />
   

      
    </div>
  );
}

export default App;
