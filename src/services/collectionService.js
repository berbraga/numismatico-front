import axios from "axios";

export default class collectionService {
  constructor() {
    this.URL = "http://127.0.0.1:8000/api/collection";
    this.userId = JSON.parse(localStorage.getItem("user")).id;
  }
  async getAll() {
    try {
      const collections = await axios.get(`${this.URL}/${this.userId}/all`);

      return collections.data.collection;
    } catch (err) {
      return err.getMessage();
    }
  }
  async getByCollection(collectionId) {
    try {
      const collections = await axios.get(
        `${this.URL}/${this.userId}/${collectionId}`
      );
      return collections.data.collection;
    } catch (err) {
      return err.getMessage();
    }
  }
  async add(body) {
    try {
      return await axios.post(`${this.URL}/${this.userId}/add`, { ...body });
    } catch (err) {
      return err.getMessage();
    }
  }
  async edit(collectionId, body) {
    try {
      return await axios.post(
        `${this.URL}/${this.userId}/${collectionId}/edit`,
        { ...body }
      );
    } catch (err) {
      return err.getMessage();
    }
  }
}
