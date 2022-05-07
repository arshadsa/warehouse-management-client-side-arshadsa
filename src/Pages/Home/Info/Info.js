import React from "react";

const Info = () => {
  return (
    <div className="container">
      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Plan for the Next Quarter</h2>
            <p>
              Our plan for the next quarter will be to engage more customer to our stores. We need to update our inventory management efficiency to serve more customers and reduce the order fulfilment time.
            </p>
            <button class="btn btn-outline-light" type="button">
              Learn more
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-light border rounded-3">
            <h2>Best Employee of the Week</h2>
            <p>
              We value our employees hard work. We appreciate your dedication to our company. This years best employee is Morshen Alam. He is an executive in our Dhaka warehouse. He has served over 2100 customers in last month.
            </p>
            <button class="btn btn-outline-secondary" type="button">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
