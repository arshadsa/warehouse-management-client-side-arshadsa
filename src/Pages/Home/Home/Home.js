import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Items from "../../Shared/Items/Items";
import ManageInventoryButton from "../../Shared/ManageInventoryButton/ManageInventoryButton";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import TopSellingItems from "../TopSellingItems/TopSellingItems";


const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <br></br><br></br>
      <h1 className="text-center">Inventory</h1>
      <br></br><br></br>
      <Items noi='6'></Items>  
      <ManageInventoryButton></ManageInventoryButton> 
      <TopSellingItems></TopSellingItems>
      <Info></Info>

    </>
  );
};

export default Home;
