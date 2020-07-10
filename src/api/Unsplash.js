import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID jwwfeW0mbqFEVb1SIWHbQRYMhAgcb0YL4pTqkWdG-Tk",
  },
});
