exports = function(payload) {
    const mongodb = context.services.get("mongodb-atlas");
    const requestlogs = mongodb.database("test").collection("requestlogs");

    return requestlogs
      .insertOne({
        "commits": payload.commits,
        "pushed_by": payload.pusher,
        "repo": payload.repository.html_url
      })
      .then(({ insertedId }) => `Inserted document with _id: ${insertedId}`)
}