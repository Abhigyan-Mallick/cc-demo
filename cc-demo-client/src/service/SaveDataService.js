import { Component } from "react";
import axios from "axios";
import { API_URL } from "../util/constants";

class SaveDataService extends Component {
    saveData = async(formData) => {
      const SDFD_URL = API_URL + "save-data";

      return axios.post(SDFD_URL,
        formData
      )
      .then(response => {
        console.log("response", response);
        return response.data;
      });
    };
};

export default SaveDataService;
