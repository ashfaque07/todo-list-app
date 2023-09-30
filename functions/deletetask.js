const Faunaservices = require("@brianmmdev/faunaservice");

exports.handler = async (event, context) => {
  const service = new Faunaservices("fnAFPG8VnaAAURSIWI_uDz9qhbafrG6vPVn9U9wp");
  let body = JSON.parse(event.body);
  await service.deleteRecord("products", body.id);
  return {
    statusCode: 200,
    header: {
      "Acces-Control-Allow-Origin": "*",
      "Acces-Control-Allow-Headers": "Authorization, Content-Type",
      "Content-Type": "application/json",
    },
    body: JSON.stringify("Deleted task: " + body.id)
  };
};
