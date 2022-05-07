import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Items from "../../Shared/Items/Items";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import TopSellingItems from "../TopSellingItems/TopSellingItems";


const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <br></br>
      <h3 className="text-center">Inventory</h3>
      <br></br>
      <Items noi='6'></Items>   
      <TopSellingItems></TopSellingItems>
      <Info></Info>

    </>
  );
};

export default Home;
