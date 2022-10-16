 import './App.css';
 import Home from './components/Home'
 import Quiz from './components/Quiz'
 import EndQuiz from './components/EndQuiz';
 import Error from './components/Error';
 import { BrowserRouter,Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/endquiz" element={<EndQuiz />} />
        <Route path='*' element={<Error />} />

         
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
