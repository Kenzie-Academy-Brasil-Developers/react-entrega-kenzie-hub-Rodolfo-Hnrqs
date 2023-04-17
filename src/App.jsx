import { RoutesMain } from './routes/RoutesMain';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
      <RoutesMain />
    </>
  )
}

export default App
