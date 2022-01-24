import React, { Component } from "react";
import InputTextField from "../component/inputTextField";
import SaveDataService from "../service/SaveDataService";

class DynamicGenerator extends Component {
  generatedFormData =
    localStorage && localStorage.getItem("generatedFormData")
      ? JSON.parse(localStorage.getItem("generatedFormData"))
      : null;

  state = {};

  saveDataService = async formData => {
    const saveDataService = new SaveDataService();

    saveDataService.saveData(formData)
    .then(data => {
        if(data) {
            console.log("saveDataService response data", data);
            alert("Form data saved successfully!");
        }
    })
    .catch(err => {
        console.log('err:', err);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("DynamicGenerator handleSubmit state", this.state);
    this.saveDataService(this.state);
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.generatedFormData && this.generatedFormData.map((field) => {
            return(
                <InputTextField
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={field.className}
                    key={field._id}
                    handleChange={this.handleChange}
                />)
        })}
        <div className="submit-button">
            <button
                className="btn btn-primary mr-2 col-sm-12"
                type="submit"
                onSubmit={this.handleSubmit}
            >
            Save
            </button>
        </div>
      </form>
    );
  };
};

export default DynamicGenerator;
