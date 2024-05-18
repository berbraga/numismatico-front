import axios from "axios";

export default class cedulaService {
  constructor() {
    this.URL = "http://127.0.0.1:8000/api";
  }
  async create(body) {
    try {
      console.log("bdfkjsabfsd", body);
      return await axios.post(`${this.URL}/`, { ...body });

      return;
    } catch (err) {
      return err.getMessage();
    }
  }
  async changeToMarketplace(idCedula) {
    try {
      console.log("bdfkjsabfsd", idCedula);
      return await axios.post(`${this.URL}/${idCedula}`);
    } catch (err) {
      return err.getMessage();
    }
  }
  async getMyCedula(id) {
    try {
      const cedula = await axios.get(`${this.URL}/${id}`);

      return cedula.data.money;
    } catch (err) {
      return err.getMessage();
    }
  }
  async getMarcketplaceCedula() {
    try {
      const cedula = await axios.get(`${this.URL}/`);

      return cedula.data.money;
    } catch (err) {
      return err.getMessage();
    }
  }
}
