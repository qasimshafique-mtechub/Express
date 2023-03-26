import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminSignup from "./Admin/pages/AdminSignup.js";
import AddBlog from "./Admin/pages/blogs/AddBlog.js";
import Blogs from "./Admin/pages/blogs/Blogs.js";
import OneBlog from "./Admin/pages/blogs/OneBlog.js";
import Corporate from "./Admin/pages/Corporate/Corporate.js";
import Login from "./Admin/pages/Login.js";
import Persuasive from "./Admin/pages/Persuasive/Persuasive.js";
import Resume2 from "./Admin/pages/Resume/Resume2.js";
import Resume1 from "./Admin/pages/Template/Resume1";
import GoogleCallback from "./Pages/GoogleCallback.js";
import HomePage from "./Pages/HomePage.js";
import ForgetPassword from "./shared/ForgetPassword.js";
import ResetNewPassword from "./shared/ResetNewPassword.js";
import Verify from "./shared/Verify.js";
import { Button } from "./styles/Button.styled";
import UserSignup from "./User/Pages/UserSignup.js";
import Navbar from './Components/Navbar';
import Profile from "./Admin/pages/Profile.js";
import ColorButton from "./ColorButton.js";
import ColorPicker from "./ColorPicker.js";
import Dashboard from "./Admin/pages/Dashboard/Dashboard.js";
function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route path="/user/signup" element={<UserSignup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/new_password/:otp" element={<ResetNewPassword />} />
          <Route path="/auth/google" element={<GoogleCallback />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/create" element={<AddBlog />} />
          <Route path="/blog/:id" element={<OneBlog />} />
          <Route path="/resume1" element={<Resume1 />} />
          <Route path="/resume2" element={<Resume2 />} />
          <Route path="/resume3" element={<Corporate />} />
          <Route path="/resume4" element={<Persuasive />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
