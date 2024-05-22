import axios from "axios";

const baseURL = "http://localhost:8001";

export async function registerForm(form) {
  try {
    const { data } = await axios.post(`${baseURL}/form/`, form);
    return data;
  } catch (err) {
    console.error("Error registering form:", err);
    return { error: err.message || "An error occurred" };
  }
}
