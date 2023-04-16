import { RoutesMain } from './routes/RoutesMain';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { GlobalStyles } from './styles/GlobalStyles';
import { StyledContainer } from './styles/grid';

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={2000} />
      <StyledContainer>
        <RoutesMain />
      </StyledContainer>
    </>
  )
}

export default App
