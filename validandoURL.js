const fetchData = async (url) => {
  const response = await fetch(url);

  if (!response) {
    throw new Error("Erro na solicitação");
  }

  return response.json();
};

module.exports = { fetchData };
