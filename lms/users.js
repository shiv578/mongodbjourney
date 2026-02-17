db.users.insertOne({
  _id: "u1",
  name: "Rahul Dev",
  email: "rahul@gmail.com",
  password: "1234",
  role: "student", // student | instructor | admin
});

db.users.insertOne({
  _id: "u2",
  name: "Aryan",
  email: "aryan@gmail.com",
  password: "1234",
  role: "instructor", // student | instructor | admin
});

db.users.insertOne({
  _id: "u3",
  name: "admin",
  email: "admin@gmail.com",
  password: "1234",
  role: "admin", // student | instructor | admin
});






// ////////////////////////////////////user login, course enrollment, progress tracking ///////////////////////////////////////


// search eamil and password
db.users.find({
  email:"shubham1234@gmail.com",
  password:"shubham1234"
})

// display all courses
db.courses.find()

// display all modules of c1
db.modules.find({courseId:"c1"})

// display all lessons of c1m
db.lessons.find({moduleId:"c1m1"})

// enroll user u1 to course c1
db.enrollments.insertOne({
  studentId: "u1",
  courseId: "c1",
});

// complete the lesson c1m1l1 by user u1
db.lessonsprogress.insertOne({
  studentId: "u1",
  lessonId: "c1m1l1",
  status: "completed", // completed | in-progress
});

// check the progress of user u1 in lession c1m1l1 complete or not
db.lessonsprogress.find({
  studentId: "u1",
  lessonId: "c1m1l1",
});


// change password of user u1
db.users.updateOne(
  { _id: "u1" },
  { $set: { password: "newpassword123" } }
);

// show profile of user u1
db.users.find({ _id: "u1" });



/////////////////////////////////////////admin interface ///////////////////////////////////////

// user management crud operations
// courses management crud operations
// module management crud operations
// lesson management crud operations
