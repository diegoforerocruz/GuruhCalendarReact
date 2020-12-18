const axios = require("axios");

const functionsUniversidades = () => {
  const getEvents = async (id) => {
    return await axios.get(
        `http://localhost:4000/api/universidad/${id}/eventos`
    );
  };

  return { getEvents };
};

export default functionsUniversidades;