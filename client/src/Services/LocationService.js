import axios from "axios";

class LocationService {
  constructor() {}
  async getUserLocation() {
    const res = await axios.get("http://ip-api.com/json/");
    return res.data;
  }
}

export default LocationService;
