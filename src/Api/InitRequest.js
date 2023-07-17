export const InitRequest = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://nerviidevelopperhelperapi-23c3658a0264.herokuapp.com";
  } else {
    return "http://localhost:5000";
  }
};
