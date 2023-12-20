import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Step1 from '../pages/Step1';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='step1' element={<Step1 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
