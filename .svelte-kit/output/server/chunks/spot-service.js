import axios from "axios";
const spotService = {
  baseUrl: "http://Serenity:4000",
  async signup(user) {
    try {
      const response = await axios.post(this.baseUrl + "/api/users", user);
      return true;
    } catch (error) {
      return false;
    }
  },
  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      if (response.data.success) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        const session = {
          name: response.data.name,
          token: response.data.token,
          _id: response.data.id
        };
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async createSpot(spot, session) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.post(this.baseUrl + "/api/spots", spot);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  },
  /////////////////////////////////////////////////////////
  // Check this works, especially the id in the HTTP bit //
  /////////////////////////////////////////////////////////
  async deleteSpot(id, session) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.delete(this.baseUrl + `/api/spots/${id}`);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  },
  async getSpots(session) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/spots");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getUsers(session) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getAnalytics(session) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/spots/analytics/");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getUserSpotCount(session) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/users/spotCount/");
      return response.data;
    } catch (error) {
      return [];
    }
  }
};
export {
  spotService as s
};