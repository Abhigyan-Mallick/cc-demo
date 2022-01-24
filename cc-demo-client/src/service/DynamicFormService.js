import { Component } from "react";
import axios from "axios";
import { API_URL } from "../util/constants";

class DynamicFormService extends Component {
    saveDynamicFormDetails = async(inputFieldArr) => {
      const SDFD_URL = API_URL + "save-dynamic-form";

      return axios.post(SDFD_URL,
        inputFieldArr
      )
      .then(response => {
        console.log("response", response);
        return response.data;
      });
    };
};

export default DynamicFormService;
