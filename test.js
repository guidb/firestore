var firestore = require("./index")
var db = new firestore.firestore("./firebase.json")

async function test() {
    console.log("test add")
    var dataa = {
        "title": "hay",
        "version": "1"
    }
    var add = await db.add("users", "data1", dataa)
    console.log(add)
    console.log("test get")
    var get = await db.get("users", "data1")
    console.log(get)
    console.log("test update")
    var data_update = {
        "title": "new title",
        "version": "2"
    }
    var update = await db.update("users", "data1", data_update)
    var datda = {
        "title": "hay",
        "version": "1"
    }
    db.add("users", "datatemp", datda)
    console.log(update)
    console.log("test get all")
    var getall = await db.getAll("users")
    console.log(getall)
    console.log("test delte data temp")
    var Option = {
        "type": "doc",
        "name": "users",
        "doc" : "datatemp"
    }
    var delet = await db.delete(Option)

    console.log(delet)

}

test()