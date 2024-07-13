/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j194h1rq8na4w5h")

  // remove
  collection.schema.removeField("cazjudyp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "brtk9f1a",
    "name": "category",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ahds4s0ym5asvxg",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j194h1rq8na4w5h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cazjudyp",
    "name": "category",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "j194h1rq8na4w5h",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("brtk9f1a")

  return dao.saveCollection(collection)
})