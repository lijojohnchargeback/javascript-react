/*
Course
   
MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. It follows bson data structure
Document Database
  collection : number of document is called collection
  document : collection of fields and values also includ arrays object etic
  Key features
  1)High permance
   adv: embeded doucment will reduce expensive joins
        dynamic schema support
        Indexes support faster queries and can include keys from embedded documents and arrays.
  2)Rich query language
      Mongodb support query language  using data aggression, text search, geospatial queries
  3)High avaialbility (using replicaset)
    A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and increasing data availability.
  4)Horizontal Scalability
    MongoDB provides horizontal scalability as part of its core functionality:

    Sharding distributes data across a cluster of machines.
  5)Support for Multiple Storage Engines
    MongoDB supports multiple storage engines:


MongoDB Eco System: 
MongoDatabase :Mongodb database, Compass, BI connector, mongodb structure

Mongodb drivers. = Mongdodb servers will interact with mongodb server. and you can use mongdb shell without any programming language

db.collectionName.insertOne({"name":"Lijo"})// create and collection and insert
CREATE = isertOne(data,option),insertMany(data,option)
        _id is consider as primary key of each document
        _id key automatically generate
        _id update case upsert true means it will generate keyy
        db.collection.insertOne()
        db.collection.insertMany()
        db.collection.insert()
        db.collection.update() upsert:true
        db.collection.updateOne() upsert:true
        db.collection.updateMany() upsert:true
        db.collection.findAndModify() upsert:true
        db.collection.findOneAndUpdate() upsert:true
        db.collection.findOneAndReplace() upsert:true
        db.collection.bulkWrite()

READ = find(filter,option),findOne(filter,option)
        { status: { $in: [ "A", "D" ] } }
        { status: "D" }
        and condition
        { status: "A", qty: { $lt: 30 } }
        Specify OR Conditions¶
        { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] }
        Specify AND as well as OR Conditions
        { status: "A", $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ] }

       Match an Embedded/Nested Document
              1)To specify an equality condition on a field that is an embedded/nested document, use the query filter document { <field>: <value> } where <value> is the document to match.

              For example, the following query selects all documents where the field size equals the document { h: 14, w: 21, uom: "cm" }:

              { size: { h: 14, w: 21, uom: "cm" } }
              2)Query on Nested Field
                { "size.h": 14 }
              3)Specify Match using Query Operator¶
                { <field1>: { <operator1>: <value1> }, ... }
                { "size.h": { $lt: 15 } }
        Query an Array
              Match an Array
                db.inventory.find( { tags: ["red", "blank"] } )
              If, instead, you wish to find an array that contains both the elements "red" and "blank", without regard to order or other elements in the array, use the $all operato  
                db.inventory.find( { tags: { $all: ["red", "blank"] } } )
              
              db.inventory.find( { tags: "red" } )
                Query an Array with Compound Filter
                      db.inventory.find( { dim_cm: { $gt: 15, $lt: 20 } } )
                      This will filter only one. below is compound
                Query for an Array Element that Meets Multiple Criteria
                      querying mulitiple crieteria.
                      db.inventory.find( { dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } } } )
                Query an Array by Array Length¶
                      db.inventory.find( { "tags": { $size: 3 } } )

        Query an Array of Embedded Documents
            db.inventory.find( { "instock": { warehouse: "A", qty: 5 } } )
            Specify a Query Condition on a Field Embedded in an Array of Documents
                  db.inventory.find( { 'instock.qty': { $lte: 20 } } )
            Use the Array Index to Query for a Field in the Embedded Document¶
                db.inventory.find( { 'instock.0.qty': { $lte: 20 } } )

            A Single Nested Document Meets Multiple Query Conditions on Nested Fields¶
                db.inventory.find( { "instock": { $elemMatch: { qty: 5, warehouse: "A" } } } )
                db.inventory.find( { "instock": { $elemMatch: { qty: { $gt: 10, $lte: 20 } } } } )

            Combination of Elements Satisfies the Criteria¶
                db.inventory.find( { "instock.qty": { $gt: 10,  $lte: 20 } } )
                db.inventory.find( { "instock.qty": 5, "instock.warehouse": "A" } )

      Project Fields to Return from Query
            db.inventory.find( { status: "A" }, { item: 1, status: 1 } )
             status a and fields item and status will return
             if status 0 that will not return
            db.inventory.find( { status: "A" }, { status: 0, instock: 0 } )
              it will exclude all fields
            Return Specific Fields in Embedded Documents¶
                db.inventory.find(
                  { status: "A" },
                  { item: 1, status: 1, "size.uom": 1 }
                ) 
            Suppress Specific Fields in Embedded Documents
                      db.inventory.find(
            { status: "A" },
            { "size.uom": 0 })
            Project Specific Array Elements in the Returned Array¶
                    db.inventory.find( { status: "A" }, { item: 1, status: 1, instock: { $slice: -1 } } )

            The following example uses the $slice projection operator to return the last element in the instock array:
      Query for Null or Missing Fields¶
            Equality Filter
                    db.inventory.find( { item: null } )
            Type Check
                    db.inventory.find( { item : { $type: 10 } } )
            Existence Check
                    db.inventory.find( { item : { $exists: false } } )
      
      Retryable Writes
         Retryable writes allow MongoDB drivers to automatically retry certain write operations a single time if they encounter network errors, or if they cannot find a healthy primary in the replica sets or sharded cluster. [1]

         If any network error not sure wheather that document exist. That case reentry writ used
         
UPDATE = 
         updateOne(filter,data,option),updateMany(filter,data,option),replaceOne(filter,data)
        db.name.updateOne({email:"Ethelyn.Schneider@emelia.co.uk"},{$set:{email:"lijojohnrbs@gmail.com"}})

        db.name.updateMany({},{$set:{field:value}})

        db.name.update({}.{}), this. replace with everthing except id

        db.collection.replaceOne()

        db.collection.findOneAndReplace().
        db.collection.findOneAndUpdate().
        db.collection.findAndModify().
        db.collection.bulkWrite().

DELETE = deleteOne(filter,option),deleteMany(filter,option)

bulkwrite:
        insertOne
        updateOne
        updateMany
        replaceOne
        deleteOne
        deleteMany
        eg:
        try {
   db.characters.bulkWrite(
      [
         { insertOne :
            {
               "document" :
               {
                  "_id" : 4, "char" : "Dithras", "class" : "barbarian", "lvl" : 4
               }
            }
         },
         { insertOne :
            {
               "document" :
               {
                  "_id" : 5, "char" : "Taeln", "class" : "fighter", "lvl" : 3
               }
            }
         },
         { updateOne :
            {
               "filter" : { "char" : "Eldon" },
               "update" : { $set : { "status" : "Critical Injury" } }
            }
         },
         { deleteOne :
            { "filter" : { "char" : "Brisbane" } }
         },
         { replaceOne :
            {
               "filter" : { "char" : "Meldane" },
               "replacement" : { "char" : "Tanys", "class" : "oracle", "lvl" : 4 }
            }
         }
      ]
   );
}
catch (e) {
   print(e);
}


Aggregation Framework
  building pipe line of steps to retrieve data in the form you need.
  The aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into aggregated results.
  
      db.orders.aggregate([
      { $match: { status: "A" } },
      { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
    ])
   
    First Stage: The $match stage filters the documents by the status field and passes to the next stage those documents that have status equal to "A".

    Second Stage: The $group stage groups the documents by the cust_id field to calculate the sum of the amount for each unique cust_id.

Pipeline
  The MongoDB aggregation pipeline consists of stages. Each stage transforms the documents as they pass through the pipeline. Pipeline stages do not need to produce one output document for every input document

  1) addFields
      adding fields with default value = addFields: db.collectionName.aggregate([{addFields:{name:value,name:value}}])
      adding emebed document.
          db.collectionName.aggregate([{addFields:{"field.field":value}}])
      overWritng existing field
          db.collectionName.aggregate({addFields:{"fieldName":value}})
      replace otherFields with Id
          db.posts.aggregate([{$addFields:{_id:"$body", item:"id"}}])
  2)match 
      this will returna all the matching element
      db.posts.aggregate([{$match:{city:"New York"}}])
      db.posts.aggregate([{$match:{age:{$gt: 25}}}])
      db.posts.aggregate([{$match:{$and:[{age:{$gt: 25}},{gender:"female"}]}}])
      featch all the value which are 4. it filter array  and get 

  3)group
      this will group all document by id
       db.posts.aggregate([{$group:{_id:"$id"}}]) = it is equal to map method. It will group one field and return 
       db.posts.aggregate([{$group:{_id:null}, {count:$sum}}]) count
        db.posts.aggregate([{$group:{_id:"userId"}}])
        db.posts.aggregate([{$group:{_id:"userId.company.location"}}]) emebed expression
        db.posts.aggregate([{$group:{_id:"userId", total:{$sum:"$price"}}}]) two fields
        db.persons.aggregate([{$group:{_id:{age:"$age",gender:"$gender"}}}])
  4)count
      this will count
      Passes a document to the next stage that contains a count of the number of documents input to the stage.
        db.persons.aggregate([{$count:"allDocumentCount"}]) all document county
        db.persons.aggregate([{$count:"country"}]) all country field count
        db.persons.aggregate([]).toArray().length
        db.persons.aggregate([]).itcount()
        db.persons.aggregate([{$count:"total"}])
  5)sort  
        db.persons.aggregate([{$sort:{score:-1}}])
        db.persons.aggregate([{$sort:{age:1,name:1}}]) in this case age will sort and if the same value of age age name will sort
  6)project
        project return 1 means include 0 exclude expression means new field
        db.persons.aggregate([{$project:{name:1, "company.title":1}}])
        db.persons.aggregate([{$project:{_id:0 ,name:1, "company.title":1}}]) _id removed 
        db.persons.aggregate([{$project:{name:0, "company.title":0}}]) other fields will be included
        db.persons.aggregate([{$project:{name:1,isActive:true}}])
        db.persons.aggregate([{$project:{age:1, company:"$company.title"}}]) company title replace as compnay
        $toUper:{"$field":age}
  7)limit
        limit number return 
        db.persons.aggregate([{$limit:100}])
        db.persons.aggregate([{$project:{name:1,age:1}},{$match:{age:{$gt:20}}},{$limit:10}])
  8)unwind  
        unwind will create each array into string and create different document
        db.persons.aggregate([{$unwind:"$tags"},{$limit:100},{$project:{name:1,gender:1,tags:1}}]).pretty()
        db.persons.aggregate([{$unwind:"$tags"},{$group:{_id:{age:"$age",name:"$name",tags:"$tags"}}}])

  9)accumulators
    $sum, $max,$ave,$min
      db.persons.aggregate([{$group:{_id:"$favoriteFruit", count:{$sum:1}}}]) = it will number of documents
  10)unary Operation
    $type, $or,$lt, $gt, $and, $multiply
  11)abc This operator is used to find the absolute value of the specified number. 
      db.person.aggregate([{$project:{ $abs: <number> }}])
  12)bucket
      Categorizes incoming documents into groups, called buckets, based on a specified expression and bucket boundaries and outputs a document per each bucket.
      {
      $bucket: {
          groupBy: <expression>,
          boundaries: [ <lowerbound1>, <lowerbound2>, ... ],
          default: <literal>,
          output: {
            <output1>: { <$accumulator expression> },
            ...
            <outputN>: { <$accumulator expression> }
          }
        eg:
                db.artists.aggregate( [
          // First Stage
          {
            $bucket: {
              groupBy: "$year_born",                        // Field to group by
              boundaries: [ 1840, 1850, 1860, 1870, 1880 ], // Boundaries for the buckets
              default: "Other",                             // Bucket id for documents which do not fall into a bucket
              output: {                                     // Output for each bucket
                "count": { $sum: 1 },
                "artists" :
                  {
                    $push: {
                      "name": { $concat: [ "$first_name", " ", "$last_name"] },
                      "year_born": "$year_born"
                    }
                  }
              }
            }
          },
          // Second Stage
          {
            $match: { count: {$gt: 3} }
          }
        ] )
     13)collStats
        Returns statistics regarding a collection or view.
          syn
                    {
            $collStats:
              {
                latencyStats: { histograms: <boolean> },
                storageStats: { scale: <number> },
                count: {},
                queryExecStats: {}
              }
          }



CREATE
  db.collectionName.insertOne()
  db.collectionName.insertMany([collection],{ordered:false})// roll back if any error exists
  db.collection.insert() -- do not use this. This will give unexprected response
  Automicity  mean if any document field failed to save it will roll back all document.Order means only for multiple document.
  Import data from third party: mongoimport tv-shows.json -d flightData -c movies  --jsonArray --drop
  File name, --d : db name, -c collection name

FIND
  Query Selectors = Comparison,Evaluation,logical,array,element,comment, Geospacial
      Comparison = 
        $eq,
        $gt=greater than,
        $gte = greater than or equal to 
        $in = in takes array [32,42], it is equalt ot 32, 42
        $lt = less tthan
        $lte = less than or equal to 
        $ne = mathc all value not equalt to
        $nin= just opposite to in
      Logiical opration
        $and
        $or
        $nor = nor return all document which fail to mach
        $not = do not match with condition
      Element
        $exists db.users.find({age:{$exists:true}})
               db.users.find({age:{$exist:true, $ne:null}}) = this is to check field exist or not
        $type  db.users.find({phone:{$type:"number"}})
               db.users.find({phone:{$type:["number","string"]}})
      Evaluation operator
         $regex db.users.find({summary:{$regex:/music/}})  search this word document
        $expr: db.users.find({$exp :{$gt:["$volum","$target"]}})
      Array
        $size : db.users.find({hobbies:{$size:3}}) find exact 3 element
        $all : db.users.find({hobies:{$all:["cricket","football"]}}) it will fetch all the matching result without order
        $elemMatch :db.users.find({hobbies:{$elemMatch:{["hobbies.frequency":3, hobbies:"sports"]}}}) this will helps matching document in embeded document.

                  db.collectionName.find({},{name:1}) 1 is included and 0 is exclude. This is called projection
                  db.collectionName.find({name:"quo vero reiciendis velit similique earum"})// single id get
                  db.collectionName.find({},{_id:false}) = id filed will disapear
                  db.collectionName.find().count()  = it gives total coout of the document
                  db.collectionName.find().limit(2) = it limit document
                  db.collectionName.find().skip(200) = first 200 document will skpt
                  db.collectionName.find().skip(200).sort({postId:1}) sort
                  db.collectionName.find({postId:{$lt:3}}) //lt means less than 3. It will give all     the reuslt below 3
                  db.collectionName.find({"postId.number":{$lt:3}})//query embeded documnent
                  db.collectionName.find({postId:{$gt:3}}) greater than 
                  db.collectionName.find({postId:{$eq:3}})  equal
                  db.collectionName.find({postId:{$gt:3,$lt:10}}) multiple condition
                  db.collectionName.find({$and:[{postId:9},{id:{$lt:100}}]}) logical opoeartor and
                  db.collectionName.find({$or:[{postId:9},{id:{$eq:9}}]}) or
      Curser: this approatch stop feching millions of document at same time. It comes with batches
        curser  assign to variable and next()
      remove fileds:
      db.users.find({}, {name:1}) // 1 means include 0 means exclude
        Projection Operators = $,$elematch,$meta,$slice
        $slice will embed array methods to string. For array only required 4

  UPDATE
      $set	Sets the value of a field in a document. It simply adds or edit field. It will not remove
      $inc  increase value db.users.updateOne({name:"thnoas",{$inc:{ age:2/-1 }, $set:{city:"Bangalore"}}})
      db.users.updateOne({name:"thnoas",{$inc:{ age:-2 }, $set:{city:"Bangalore"}} decreament
      $min = db.users.updateOne({name:"chrise"}, {$min:{age:35}}) if age is 
      $max = db.users.updateone
      $mul = multiply
      getride of fields : db.users.updateMany({name:"Lijo"}, {$unset:{phone:""}})
      rename field: db.users.udapteMany({},{$rename:{age:"totalAge"}})
      $upsert = if docuement exist and using upset it will create new document. Using it will not create  db.users.udapteMany({},{$rename:{age:"totalAge"}},{upsert:true})
      db.users.find({$and:[{"hobbies.title":"sports"}, "hobbies.frequence":{$gte:3}]})// this will all the element in the array find matching values.
      db.users.find({hobbies:{$elematch:title:"sports", "frequence":3}})
      db.users.updateMany({hobbies:{$elematch:title:"sports", "frequence":3}},{$set:{"hobbies.$.highFrequency":sports}})
      update all array elemnent
      db.users.updateMany({hobbies:{$elematch:title:"sports", "frequence":3}},{$set:{"hobbies.$[].highFrequency":sports}}) 
      identy same fields and array and update = 
      db.users.updateMany({"hobbies.frequency":{$gt:3}},{$set:{"hobbies.$[el].goodFrequence":true}}, {arrayFilters:[{"el.frequence":{$gt:2}}]})
      adding elementtoarray
      db.users.updateOne({"name:Maria",{$push:{hobbies:{titile:"adf", frequence:2}}}})
       db.users.updateOne({"name:Maria",{$each:[{hobbies:{titile:"adf", frequence:2},{second document}], $sort:{frequence:-1}}}})// multiple document
      addToSet = add only uniquve value only. It will not accept duplcate values
      remove document from array
        db.users.updateOne({"hobbies.frequency":"run"},{$pull:{hobbies:{title:"Hiking"}}})
        last element array
        db.users.updateOne({"hobbies.frequency":"run"},{$pop:{hobbies:{title:"Hiking"}}})
DELETE
      deleteOne && deleteMany


  db.myCollection.drop() delete collection
  db.dropDatabase() delete database

mongoimport

Good mondb suport tools = Robo3T, Mongobooster
UniqueId =  Auto generated and by default id
agregation = playing with data
GRIDF = minimum 16mb. if you want more mb you use GRDF
1)OLTP and OLAP (Online Transaction processing and online anlyticla processing)
 OLAP applies complex queries to large amounts of historical data, aggregated from OLTP databases and other sources, for data mining, analytics, and business intelligence projects
 any format support = video, image etc
 schemaless
 

 An OLTP system captures and maintains transaction data in a database. Each transaction involves individual database records made up of multiple fields or columns. Examples include banking and credit card activity or retail checkout scanning
 schema
 support only text

Importat ponints 
  -- Document Oriented database
  -- No tights rules
  -- data presented in json
  -- easy to change structure

  db.createCollection("name")  = create new collection



Indexing
   index help to improve performance of operation. Index scan is better than all document scan
   if no index query whole collection which affect performance

   
  db.users.explanins("executionStats").find({})// how many minute tootke of execution.
  db.users.dropIndex({"dob.age":1})
  index scan take 20% of your data then it is faster. If your scan all the document and return majority it will be slow
compound index meanns= instaed of one field. it ask more than one   field. It will speed querys.
Sort:db.users.explains()find({}).sort({gender:1})// index will help sorting millions of document
exising indexes = db.users.getIndexes() 
db.users.createIndex({"dob.age":1},{unique:true})//second arg is config
db.users.createIndex({"user":1}.)
db.users.createIndex({email:1},{unique:true, partialFilterExpression:{email:{$exists:true}}}) // this purticar index create email based index
db.users.createIndex({createdAt:1},{expiresAfterSeconds:10}) 10 sencond after saving it will be deleted
covered query = 

Geopatial
to save location
  name:
  location:{
    "type":"Point",
    "coordinates":[-122.45,37]
  }
to find near location
  db.places.find({$near:{$geometry:{type:"Point","coordinates":[-110.44,37]},{$maxDistance:30, $minDistance:10}}})
  $near = it will return if the location is near
db.places.createIndex({location:"2dsphere"})
db.places.find({location:{$geoWithin:{$geomentry:{type:"Polygon",coordinates:[[p1,p2,p3,p3]] }}}})
 
 
Reddies =  it catches server which help us to perform better application while fetching data. It stands between mongoose and mongodb. It is also tiny mememory which runs in our maching also capable of reading and writing data
set(key, value)
hset(key: {key value})
get()
hget()



1)$in = 
      The $in operator selects the documents where the value of a field equals any value in the      specified array. To specify an $in expression
      { field: { $in: [<value1>, <value2>, ... <valueN> ] } }
              { status: { $in: [ "A", "D" ] } }
      you can also use regular expression
2)gt 
      $gt selects those documents where the value of the field is greater than (i.e. >) the specified value.
      db.inventory.find( { qty: { $gt: 20 } } )
      db.inventory.update(
        { "carrier.fee": { $gt: 2 } },
        { $set: { price: 9.99 } },
        { multi: true }
      )
      above case multi means mutiple document new field will be added based on condition
3)$set 
      The $set operator replaces the value of a field with the specified value.
      { $set: { <field1>: <value1>, ... } }
      db.invetory.update({qty:{$gt:25}},{$set:{quantity: 500, details: { model: "14Q31", make: "xyz" }, tags: [ "coats", "outerwear", "clothing" ]}},{multi:true})
      embeded document
          db.products.update(
            { _id: 100 },
            { $set: { "details.make": "zzz" } }
           )
      embeded array
            db.products.update(
            { _id: 100 },
            { $set:
                {
                  "tags.1": "rain gear",
                  "ratings.0.rating": 2
                }
            }
          )
  4)or
        The $or operator performs a logical OR operation on an array of two or more <expressions> and selects the documents that satisfy at least one of the <expressions>. The $or has the following syntax:
        { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }
        db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
        This query will select all documents in the inventory collection where either the quantity field value is less than 20 or the price field value equals

        When evaluating the clauses in the $or expression, MongoDB either performs a collection scan or, if all the clauses are supported by indexes, MongoDB performs index scans. That is, for MongoDB to use indexes to evaluate an $or expression, all the clauses in the $or expression must be supported by indexes. Otherwise, MongoDB will perform a collection scan.

        When using indexes with $or queries, each clause of an $or can use its own index. Consider the following query:
        db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )

        $or and text Queries
        If $or includes a $text query, all clauses in the $or array must be supported by an index. This is because a $text query must use an index, and $or can only use indexes if all its clauses are supported by indexes. If the $text query cannot use an index, the query will return an error.
        $or and GeoSpatial Queries
        $or supports geospatial clauses with the following exception for the near clause (near clause includes $nearSphere and $near). $or cannot contain a near clause with any other clause.
        $or and Sort Operations
        When executing $or queries with a sort(), MongoDB can now use indexes that support the $or clauses. Previous versions did not use the indexes
        $or versus $in
        When using $or with <expressions> that are equality checks for the value of the same field, use the $in operator instead of the $or operator.

        For example, to select all documents in the inventory collection where the quantity field value equals either 20 or 50, use the $in operator:

        db.inventory.find ( { quantity: { $in: [20, 50] } } 
    5)$all
        The $all operator selects the documents where the value of a field is an array that contains all the specified elements. To specify an $all expression, use the following prototype:
        { <field>: { $all: [ <value1> , <value2> ... ] } }

        Equivalent to $and Operation
        { tags: { $all: [ "ssl" , "security" ] } }
        { $and: [ { tags: "ssl" }, { tags: "security" } ] }

     6)addFields
       it will not change existing array. it will create new array

         Adds new fields to documents. $addFields outputs documents that contain all existing fields from the input documents and newly added fields.

        The $addFields stage is equivalent to a $project stage that explicitly specifies all existing fields in the input documents and adds the new fields.
        //db {
            _id: 1,
            student: "Maya",
            homework: [ 10, 5, 10 ],
            quiz: [ 10, 8 ],
            extraCredit: 0
          }
          {
            _id: 2,
            student: "Ryan",
            homework: [ 5, 6, 5 ],
            quiz: [ 8, 8 ],
          }
        //add fields
        db.scores.aggregate( [
          {
            $addFields: {
              totalHomework: { $sum: "$homework" } ,
              totalQuiz: { $sum: "$quiz" }
            }
          },
          {
            $addFields: { totalScore:
              { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
          }
        ] )
        Adding Fields to an Embedded Document¶
          db.vehicles.aggregate( [
                {
                  $addFields: {
                      "specs.fuel_type": "unleaded"
                  }
                }
          ] )
      Add Element to an Array
          db.scores.aggregate([
            { $match: { _id: 1 } },
            { $addFields: { homework: { $concatArrays: [ "$homework", [ 7 ] ] } } }
          ])













  


*/
