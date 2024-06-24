import axios from "axios";

export default class userService {
  constructor() {
    this.URL = "http://127.0.0.1:8000/api/login";
  }
  async login(body) {
    try {
      return await axios.post(`${this.URL}/login`, { ...body });

      return;
    } catch (err) {
      return alert(err.getMessage());
    }
  }
  async register(body) {
    try {
      return await axios.post(`${this.URL}/register`, { ...body });
    } catch (err) {
      return alert(err.getMessage());
    }
  }
  async resetpassword(body) {
    try {
      return await axios.post(`${this.URL}/resetpassword`, { ...body });
    } catch (err) {
      return alert(err.getMessage());
    }
  }
}
