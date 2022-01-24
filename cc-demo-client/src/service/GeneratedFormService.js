import { Component } from "react";
import axios from "axios";
import { API_URL } from "../util/constants";

class GeneratedFormService extends Component {
    getGeneratedFormDetails = async(insertedIdsArr) => {
      const SDFD_URL = API_URL + "get-generated-form";

      return axios.post(SDFD_URL,
        insertedIdsArr
      )
      .then(response => {
        console.log("response", response);
        return response.data;
      });
    };
};

export default GeneratedFormService;
