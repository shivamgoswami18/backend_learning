const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Course 5",
    author: "Author5",
    isPublished: false,
    tags: ["frontend", "backend"],
    price: 30,
  });

  try {
    const result = await course.save();
    console.log("Course created successfully:", result);
  } catch (err) {
    console.error("Error creating course:", err.message);
  }
}

// createCourse();

async function getCourses() {
  const courses = await Course.find({ isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
    .sort({ price: -1 })
    .select({ name: 1, author: 1 });

  console.log(courses);
}

// getCourses();

// async function updateCourse(id) {
//   console.log(id)
//   const course = await Course.findById(id);
//   if (!course) {
//     console.log("Course not found");
//     return;
//   }
//   course.isPublished = true;
//   course.author = "Another Author";
//   const result = await course.save();
//   console.log(result);
// }

// updateCourse("5a68fdf95db93f6477053ddd");

async function updateCourse(id) {
  const result = await Course.findByIdAndUpdate(
    id,
    {
      $set: {
        author: "Moshhsss",
        isPublished: false,
      },
    },
    { new: true }
  );
  if (!result) {
    console.log("Course not found for id:", id);
    return;
  }
  console.log(result);
}

// updateCourse("5a68fdf95db93f6477053ddd");

async function deleteCourse(id) {
  const result = await Course.deleteOne({ _id: id });
  if (!result) {
    console.log("Course not found for id:", id);
    return;
  }
  console.log(result);
}

// deleteCourse("5a68fdd7bee8ea64649c2777");
