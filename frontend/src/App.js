import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Protected from "./components/Protected/Protected";
import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import Signup from "./pages/Signup/Signup";
import Crypto from "./pages/Crypto/Crypto";
import Blog from "./pages/Blog/Blog";
import SubmitBlog from "./pages/SubmitBlog/SubmitBlog";

function App() {
  const isAuth = useSelector(state => state.user.auth);
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  {" "}
                  <Home />
                </div>
              }
            />

            <Route
              path="crypto"
              exact
              element={<div className={styles.main}><Crypto /></div>}
            />
            <Route
              path="blogs"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}><Blog /></div>
                </Protected>
              }
            />
            <Route
              path="submit"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}><SubmitBlog /></div>
                </Protected>
              }
            />
            <Route
              path="signup"
              exact
              element={<div className={styles.main}><Signup /></div>}
            />
            <Route
              path="login"
              exact
              element={<div className={styles.main}><Login /></div>}
            />

            <Route 
            path="*"
            element={<div className={styles.main}><Error /></div>}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
