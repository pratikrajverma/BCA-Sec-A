// show dbs 
// use BCAsectionA
db

// db.createCollection('students')

// show collections

// db.students.drop()
// db.dropDatabase()



db.students.insertOne(
    {
        _id: 1,
        name: 'Ankit',
        age: 23
    }
)


db.students.find()

db.teachers.find()

db.students.insertOne(
    {
        name: 'Payal',
        age: 17,
        gender:'female',
        cgpa:7.9
    }
)

db.students.insertMany([
    {
        name: 'Ankit',
        age:17,
        gender:'male',
        cgpa:6.5,
        course:'BTech'
    },
    {
        name: 'Jigar',
        age:18,
        gender:'male',
        cgpa:9.5,
        course:'BTech'
    },
    {
        name: 'Rahul',
        age:25,
        gender:'male',
        cgpa:10,
        course:'MCA'
    },
    {
        name: 'Payal',
        age:29,
        gender:'female',
        cgpa:9.5,
        course:'BCA'
    },
    {
        name: 'Swati',
        age:26,
        gender:'female',
        cgpa:5.5,
        course:'BCA'
    },
    {
        name: 'Nandan',
        age:37,
        gender:'male',
        cgpa:9.5,
        course:'BTech'
    },
])


db.students.find({
    name: 'Rahul'
})



// db.students.findOne({
//    _id: ObjectId('6ac76af16464812d8eb361e3')
// })


db.students.find()


db.students.findOne()


db.students.find(
    {course:'BCA'}
)

db.students.findOne(
    {course:'BCA'}
)

db.students.deleteOne({
    name: 'Ankit'
})

db.students.deleteMany({
    gender:'female'
})


db.students.updateOne(
    {_id: ObjectId('6ac76af16464812d8eb361e1')},
    { $set : { cgpa: 10}}
)

db.students.updateMany(
    {gender : 'male'},
    {$set : {course : 'BCA'}}

)