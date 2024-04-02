import { Route, Routes } from "react-router-dom";
import LoginForm from "./containers/Forms/LoginForm/LoginForm";
import SignUpForm from "./containers/Forms/SignUpForm/SignUpForm";
import Users from "./containers/ChatApp/Users/Users";
import Chat from "./containers/ChatApp/Chat/Chat";
import ForgotPassword from "./containers/Forms/ForgotPassword/ForgotPassword";

const App = (props) => {
  return (
    <div className="container d-flex justify-content-center my-4">
      <Routes>
        <Route path="/" Component={LoginForm} />
        <Route path="/signup" Component={SignUpForm} />
        <Route path="/forgotpassword" Component={ForgotPassword} />
        <Route path="/users" Component={Users} />
        <Route path="/chat" Component={Chat} />
      </Routes>
    </div>
  );
};

export default App;
