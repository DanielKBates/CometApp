// import axios from "axios";

// export default {
//     getMessages: function(query) {
//         return axios.get("/api/messages", { params: { q: query }});
//     }
// }
export default {
    getMessage: token => {
      return fetch('/api/message', {
        headers: {
          "authorization": `Bearer ${token}`
        },
      });
    }
  };
  