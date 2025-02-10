import axios from "axios";
// import "gijgo/js/gijgo.min.js";
// import "gijgo/css/gijgo.min.css";

export default {
  name: "HomePage",
  data() {
    return {
      message: "Welcome to My Media Client",
    };
  },
  mounted() {
    axios.get("http://localhost:8000/api/allPostLists").then((response) => {
      console.log(response.data);
    });
    // Initialize Gijgo components if needed
    // $('#datepicker').datepicker();
  },
};
