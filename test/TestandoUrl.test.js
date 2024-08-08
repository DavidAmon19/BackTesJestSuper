const { fetchData } = require("../validandoURL");

test("Deve retornar dados com sucesso", async () => {
  const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  expect(data).toHaveProperty("id", 1);
});
