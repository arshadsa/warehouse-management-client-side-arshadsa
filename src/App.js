import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewItem from "./Pages/AddNewItem/AddNewItem";
import Home from "./Pages/Home/Home/Home";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Items from "./Pages/Shared/Items/Items";
import SingleItemDetails from "./Pages/SingleItemDetails/SingleItemDetails";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import MyItems from "./Pages/MyItems/MyItems";
import PageTitle from "./Pages/Shared/PageTitle/PageTitle";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import EditItem from "./Pages/EditItem/EditItem";
import ManageInventoryButton from "./Pages/Shared/ManageInventoryButton/ManageInventoryButton";
import { ToastContainer } from "react-bootstrap";

// Starting point of the app
function App() {
  return (
    <>
      <Header></Header>
      {/* Routes. It also has some require routes */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/"
          element={
            <RequireAuth>
              <PageTitle title="Inventory"></PageTitle>
              <Items></Items>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <SingleItemDetails></SingleItemDetails>
              <ManageInventoryButton></ManageInventoryButton>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage-inventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add-new-item"
          element={
            <RequireAuth>
              <PageTitle title="Add Item"></PageTitle>
              <AddNewItem></AddNewItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/user/:id"
          element={
            <RequireAuth>
              <PageTitle title="My Items"></PageTitle>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/blogs"
          element={
            <>
              <PageTitle title="Blogs"></PageTitle>
              <Blogs></Blogs>
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <PageTitle title="About"></PageTitle>
              <About></About>
            </>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/edititem/:id"
          element={
            <RequireAuth>
              <PageTitle title="Edit Item"></PageTitle>
              <EditItem></EditItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="*"
          element={
            <>
              <PageTitle title="404 Not Found"></PageTitle>
              <NotFound></NotFound>
            </>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
