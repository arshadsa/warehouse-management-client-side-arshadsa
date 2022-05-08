import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="container about">
      <br/><br/>
      <h1 className="text-center">Inventory Management</h1>
      <br/>
      <p>
        It is an inventory management website. You can add products in the
        inventory. Track how many items are available in the inventory, the name of the products, quantity available for each of them. This inventory management website helps the business to keep track of their products in the inventory. They can view which items are available in the warehouse, how many of them are available, update their description, delete an item from the inventory and also can mark any item as delivered. It an item is delivered then its quantity gets one down.
      </p><br/>
      <h5>Features and Functionality:</h5>
      <ul>
        <li>View items in the inventory.</li>
        <li>View quantity availabe for the items.</li>
        <li>Update an items quantity.</li>
        <li>Delete an item.</li>
        <li>Mark item as delivered.</li>
      </ul>
      <br/>
    </div>
  );
};

export default About;
