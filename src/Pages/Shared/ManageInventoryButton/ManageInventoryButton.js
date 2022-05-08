import React from "react";
import { Link } from "react-router-dom";

const ManageInventoryButton = () => {
  return (
    <div className="d-flex justify-content-center">
      <Link className="btn btn-primary" to="/manage-inventory">
        Manage Inventory
      </Link>
    </div>
  );
};

export default ManageInventoryButton;
