
import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/about';
import Login from './component/login';
import Services from './component/services';
import Signup from './component/signup';
import AxiosUse from './axios/axiosUse';
import Image from './component/image';
import CricketData from './axios/cricApi';
import NewApi from './axios/newApi';
import FaceApi from './axios/faceApi';
import Quiz from './component/quiz';
import { QuizPage, LevelSelection } from "./component/Quizpage";
import ReviewPage from './component/Reviewpage';

function App() {
  return (
<div>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/service' element={<Services/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/quiz' element={<Quiz/>}></Route>
      <Route path="/quiz/:subject" element={<LevelSelection />} />
      <Route path="/quiz/:subject/:level" element={<QuizPage />} />
      <Route path="/review" element={<ReviewPage />} />
      {/* <Route path='/' element={<AxiosUse/>}/>/ */}
      {/* <Route path='/' element={<CricketData/>}/> */}
      {/* <Route path='/' element={<NewApi/>}/> */}
      {/* <Route path='/' element={<FaceApi/>}/> */}
      {/* <Route path="/photo/:id" element={<Image/>}/> */}
    </Routes>
  </Router>

</div>
  );
}

export default App;
