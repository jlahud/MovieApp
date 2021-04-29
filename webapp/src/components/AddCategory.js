import React, { useState } from "react";

const AddCategory = ({ addCategory }) => {
  const [categoryName, setCategoryName] = useState("");
  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };
  const handleSubmit = () => {
    setCategoryName('')
  }
  return (
    <div id="categoryModal" className="modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Category</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label
                className="col-form-label col-form-label-lg"
              >
                Category Name
              </label>
              <input
                value={categoryName}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter category name"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                addCategory(categoryName);
                handleSubmit();
              }}
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
