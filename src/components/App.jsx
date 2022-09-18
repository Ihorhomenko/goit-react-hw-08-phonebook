import { Container } from "./container/container";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home/home";
import { AppBar } from "./appBar";
import { Login } from "./login/login";
import { Registration } from "./registration/registration";
import { PhoneBook } from "./Phonebook/phoneBook";

import 'bootstrap/dist/css/bootstrap.min.css';


export const App = () => {
  return (
    <Container>
      <AppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/phonebook" element={<PhoneBook/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </Container>
    
  );
};
