// show course titel and module name 
db.modules.aggregate([
    {$lookup:{
        from:"courses",
        localField:"courseId",
        foreignField:"_id",
        as:"course"
    }},
    {$unwind:"$course"},
    {$project:{
        _id:0,
        course_title:"$course.title",
        module_title:"$title"
    }}
])


db.courses.aggregate([
  {
    $lookup:{
      from:"modules",
      localField:"_id",
      foreignField:"courseId",
      as:"modules"
    }
  },
  {$unwind:"$modules"},
  {
    $project:{
      _id:0,
      course_title:"$title",
      modules:"$modules.title"
    }
  }
])


// how many student are there in lms
db.students.countDocuments()

// how many courses are there in lms
db.courses.countDocuments()


// 
