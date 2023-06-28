import logo from './logo.svg';
import './App.css';

import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'
import ImageUploadForm from './pages/Image';
import UseEffectExample from './pages/UseEffectExample';
import TodoList from './pages/TodoList';
import WeatherApp from './pages/WeatherApp';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import NavBar from './component/NavBar';
function App() {
  return (
    
   <>

   <BrowserRouter>
   <NavBar/>

   <Routes>
    <Route path='/' element={<UseEffectExample/>}/>
    
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/register' element={<RegisterForm/>}/>
   </Routes>


   </BrowserRouter>
   {/* <LoginForm/> */}
   {/* <RegisterForm/> */}
   {/* <ImageUploadForm/> */}
   {/* <UseEffectExample/>
   <TodoList/>
   <WeatherApp/> */}
   </>
  )}
   

export default App;
