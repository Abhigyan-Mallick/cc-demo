import React, { useState, Fragment } from "react";
import DynamicFormService from "../service/DynamicFormService";
import GeneratedFormService from "../service/GeneratedFormService";

const DynamicCreator = () => {
  const [inputFields, setInputFields] = useState([
    { name: '', placeholder: '', required: '', className: '' }
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ name: '', placeholder: '', required: '', className: '' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "name") {
        values[index].name = event.target.value;
    } else if (event.target.name === "placeholder") {
        values[index].placeholder = event.target.value;
    } else if (event.target.name === "required") {
        values[index].required = event.target.value;
    } else {
        values[index].className = event.target.value;
    }

    setInputFields(values);
  };

  const getGeneratedFormService = async insertedIds => {
    const generatedFormService = new GeneratedFormService();

    const insertedIdsArr = Object.values(insertedIds);

    generatedFormService.getGeneratedFormDetails(insertedIdsArr)
        .then(data => {
            if(data) {
            console.log("generatedFormService response data", data);
            localStorage.setItem("generatedFormData", JSON.stringify(data));
            }
        })
        .catch(err => {
        console.log('err:', err);
        });
    };

  const createDynamicFormService = async inputFields => {
    const dynamicFormService = new DynamicFormService();

    dynamicFormService.saveDynamicFormDetails(inputFields)
    .then(data => {
        if(data) {
            console.log("dynamicFormService response data", data);
            alert("Dynamic form details saved successfully!");
            getGeneratedFormService(data.insertedIds);
        }
    })
    .catch(err => {
        console.log('err:', err);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
    const inputFieldArr = new Array(JSON.stringify(inputFields));
    createDynamicFormService(inputFieldArr);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-12">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={inputField.name}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-12">
                <label htmlFor="placeholder">Placeholder</label>
                <input
                  type="text" 
                  className="form-control" 
                  id="placeholder"
                  name="placeholder"
                  value={inputField.placeholder}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-12">
                <label htmlFor="required">Required</label>
                <input
                  type="text" 
                  className="form-control" 
                  id="required"
                  name="required"
                  value={inputField.required}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-12">
                <label htmlFor="className">ClassName</label>
                <input
                  type="text" 
                  className="form-control" 
                  id="className"
                  name="className"
                  value={inputField.className}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-12">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  Remove Textbox
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  Add Textbox
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2 col-sm-12"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
        <br/>
        <pre>
            {JSON.stringify(inputFields, null, 2)}
        </pre>
      </form>
    </Fragment>
  );
};

export default DynamicCreator;
