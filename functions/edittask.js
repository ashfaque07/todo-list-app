const Faunaservices = require("@brianmmdev/faunaservice");

exports.handler = async (event, context) => {
  const service = new Faunaservices("fnAFOJi9RFAAUJ7gtXMWZ9GhtHHkZrtDSW8Nzcq-");
  let body = JSON.parse(event.body);
  let updateTask = {
    task: body.task
  }
  await service.updateRecord("products", body.id, updateTask);
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
