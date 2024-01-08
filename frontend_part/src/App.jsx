import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Body from './components/body/Body'
import Bsccsit from './components/bsc_csit/Bsccsit.JSX';
import Footer from './components/footer/Footer';
// import Iit from './components/chapters/IIT/Iit';
// import Iit from './components/bsc_csit/chapters/IIT/Iit';
// import Syllabus from './components/chapters/IIT/Syllabus';
import Syllabus from './components/bsc_csit/chapters/IIT/Syllabus';
import Chapter from './components/bsc_csit/chapters/IIT/Chapter';
import Lectures from './components/bsc_csit/chapters/IIT/Lectures';
import { Route, Routes,BrowserRouter, Navigate } from "react-router-dom";
import Handwrittennotes from './components/bsc_csit/chapters/IIT/Handwrittennotes';
// import Example from "./components/Example"
import MyComponent from './components/Example';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import SendPasswordResetEmail from './components/auth/SendPasswordResetEmail';
import Resetpassword from './components/auth/Resetpassword';
import Changepassword from './components/auth/Changepassword';
import { useSelector } from 'react-redux';

function App() {
  const [count, setCount] = useState(0)
  const {access_token} = useSelector(state => state.auth);

  return (
    <>
     <BrowserRouter>
    <Navbar/>
    <Routes>
            <Route exact path="/" element={<Body />}/>
                {/* <Route exact path="/csit" element={<Bsccsit/>}/> */}
                <Route  exact path="/csit" element={access_token ? <Bsccsit/> : <Navigate to="/login" />} />
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="login" element={!access_token ? <Login /> : <Navigate to="/csit" />} />
                <Route exact path="/sendpasswordresetemail" element={<SendPasswordResetEmail/>}/>{/*forget password  */}
                <Route exact path="api/user/reset/:id/:token" element={<Resetpassword/>}/>
                {/* <Route exact path="/reset" element={<Resetpassword/>}/> */}
                <Route exact path="/changepassword" element={<Changepassword/>}/>
                {/* <Route exact path="/changepassword" element={access_token ? <Changepassword/> : <Navigate to="/login" />}/> */}
                
                {/* <Route exact path="/csit/iit" element={<Iit}/> */}
                {/* <Route exact path="csit/iit/syllabus" element={<Syllabus/>}/> */}

                <Route exact path="csit/iit/syllabus" element={access_token ? <Syllabus/> : <Navigate to="/login" />}/>
                <Route exact path="/csit/iit/chapter" element={access_token ? <Chapter/> : <Navigate to="/login" />}/>
                <Route exact path="/csit/iit/lecture/" element={access_token ? <Lectures/> : <Navigate to="/login" />}/>
                <Route exact path='/csit/iit/notes' element={access_token ? <Handwrittennotes/> : <Navigate to="/login" />}/>
            <Route/>
            {/* <Route exact path="/service" element={<Service}/>
            <Route exact path="/about" element={<About}/>
            <Route path="*" element={<NotFound} /> */}
      </Routes>
      {/* <Footer/> */}
      {/* <MyComponent/> */}
      </BrowserRouter>
    </>
  )
}

export default App
