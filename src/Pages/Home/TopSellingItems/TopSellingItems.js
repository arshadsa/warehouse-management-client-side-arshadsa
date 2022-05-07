import React from 'react';

const TopSellingItems = () => {
  return (
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="/Echo-dot.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Top Selling Item of the week.</h1>
        <p class="lead">Echo dot is our top selling item in last week. We have delivered over 127 units of Echo dot last week. More 1032 units were sold in last year making it the most profitable item for our business.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Statistics</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Learn More</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TopSellingItems;