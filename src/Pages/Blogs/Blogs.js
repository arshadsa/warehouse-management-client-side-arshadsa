import React from 'react';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='container about'>
      <br></br><br></br>
      <h5>What are the differences between javascript and nodejs?</h5>
      <p><strong>Ans: </strong>Javascript is a programming language. NodeJS is an interpreter or running environment for Javascript laguage. JavaScript is used for the client side and NodeJS is used for the server side. NodeJS is used to write javascript logic for server side rendering. That means the logic are understood by the server.</p>
      <h5>When should you use nodejs and when should you use mongodb?</h5>
      <p><strong>Ans: </strong>I will use NodeJS for backend server. It will respond to the api calls. Then it will get data from MongoDB database. I will not fetch data directly from react frontend, because, my database credentials will be visible by the users. Therefore, I will use NodeJS for all server side logic and communication with the MongoDB server.</p>
      <h5>What are the differences between sql and nosql databases.</h5>
      <p><strong>Ans: </strong>SQL stands for Structured Query Language. NoSQL databases (aka "not only SQL") are non-tabular databases and store data differently than relational tables. SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
      <h5>What is the purpose of jwt and how does it work?</h5>
      <p><strong>Ans: </strong>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
      <br /><br />
    </div>
  );
};

export default Blogs;