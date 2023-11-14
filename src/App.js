import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register/Register";
import DetailPage from "./pages/DetailPage/DetailPage";
import HeadLayout from "./layout/HeadLayout";
import HeadFootLayout from "./layout/HeadFootLayout";
import Spinner from "./components/Spinner/Spinner";
import Purchase from "./pages/Purchase/Purchase";
import UserPage from "./pages/AdminPage/UserPage";
import Films from "./pages/AdminPage/Edit/Films";
import AddUser from "./pages/AdminPage/AddUser";
import AdminPage from "./pages/AdminPage/AdminPage";
import AddNew from "./pages/AdminPage/AddNew";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        <Spinner />
        <Routes>
          <Route path="/" element={<HeadFootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Route>
          <Route path="/" element={<HeadLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/purchase/:idBooking" element={<Purchase />} />
          </Route>
          {/* admin */}
          {/*  */}
          <Route path="/admin" element={<AdminPage />}>
            <Route path="users" element={<UserPage />}></Route>
            <Route path="films" element={<Films />}></Route>
            <Route path="films/addnew" element={<AddNew />}></Route>
            <Route path="users/adduser" element={<AddUser />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
