// services/github.services.js
const urlAPI = "https://api.github.com";

const getUser = async (user) => {
  try {
    const response = await fetch(`${urlAPI}/users/${user}`);
    if (!response.ok) {
      console.log("Usuário não encontrado na base de dados!");
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null; 
  }
};

export { getUser };
