exports = function(payload)  {
  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("VisualTagModel").collection("Vehicle");
  return mycollection.find({}).toArray();
};