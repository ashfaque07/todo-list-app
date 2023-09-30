const Faunaservices = require("@brianmmdev/faunaservice");

exports.handler = async (event, context) => {
  const service = new Faunaservices("fnAFOJi9RFAAUJ7gtXMWZ9GhtHHkZrtDSW8Nzcq-");
  let body = JSON.parse(event.body);
  await service.updateRecord("products", '377301364803371088', 'ddd');
  return {
    statusCode: 200,
    header: {
      "Acces-Control-Allow-Origin": "*",
      "Acces-Control-Allow-Headers": "Authorization, Content-Type",
      "Content-Type": "application/json",
    },
    body: JSON.stringify("Updated task: " + body.id + ' '+ body.task),
  };
};
