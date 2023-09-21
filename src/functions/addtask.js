const Faunaservices = require("@brianmmdev/faunaservice");

exports.handler = async (event, context) => {
  const service = new Faunaservices("fnAFOJi9RFAAUJ7gtXMWZ9GhtHHkZrtDSW8Nzcq-");
  let task = JSON.parse(event.body);
  let created = await service.createRecord("products", task);
  return {
    statusCode: 200,
    header: {
      "Acces-Control-Allow-Origin": "*",
      "Acces-Control-Allow-Headers": "Authorization, Content-Type",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(created)
  };
};
