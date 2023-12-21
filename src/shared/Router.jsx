import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Step1 from '../pages/Step1';
import Step2 from '../pages/Step2';
import Step3 from '../pages/Step3';
import Step4 from '../pages/Step4';
import Step5 from '../pages/Step5';
import Result from '../pages/Result';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='step1' element={<Step1 />} />
        <Route path='step2' element={<Step2 />} />
        <Route path='step3' element={<Step3 />} />
        <Route path='step4' element={<Step4 />} />
        <Route path='step5' element={<Step5 />} />
        <Route patt='result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
