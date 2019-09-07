import axios from "axios";

export default {
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUsersExcept: function (id) {
    return axios.get("/api/users/except/" + id);
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  updateUser: function (id, userData) {
    return axios.put("/api/users/" + id, userData);
  },
  getMessages: function () {
    return axios.get("/api/messages/");
  },
  findMessages: function (userIds) {
    return axios.get("api/messages/" + userIds)
  },
  createMessage: function (messageData) {
    return axios.post("api/messages/", messageData)
  }
};