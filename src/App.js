import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
     <Toaster/>
     <ToastContainer/>
    </div>
  );
}

export default App;
