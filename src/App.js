import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import queryClient from 'querys/query';
import MainRouter from './pages';

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MainRouter />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
