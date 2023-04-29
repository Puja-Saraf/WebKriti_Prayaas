import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8000/v1" });
export const api = {
  login: (data) => API.post("/auth/login", data),
  signup: (data) => API.post("/auth/signup", data),
  getAllEvents: () => API.get("/events/events"),
  getSingleEvent: (event_id) => API.get(`/events/event?event_id=${event_id}`),
  createEvent: (data) => API.post("/events/event", data),
  updateEvent: (data) => API.put("/events/event", data),
  deleteEvent: (data) => API.delete("/events/event", data),

  getAllStories: () => API.get("/stories/stories"),
  getSingleStory: (story_id) => API.get(`/stories/story?story_id=${story_id}`),
  createStory: (data) => API.post("/stories/story", data),
  updateEvent: (data) => API.put("/stories/story", data),
  deleteEvent: (data) => API.delete("/stories/story", data),

  getSingleUser: (user_id) => API.get(`/users/user?user_id=${user_id}`),
};
