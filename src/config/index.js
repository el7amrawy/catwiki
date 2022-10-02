const apiHost =
  (import.meta.env.VITE_API || "http://localhost:5000") + "/breeds";

export default apiHost;
