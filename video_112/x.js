// Using References
let author = {
  name: "Mosh Hamdeani",
};

let course = {
  author: "id",
};

// Using Embedded Documents
let course = {
  author: {
    name: "Mosh Hamedani",
  },
};

// Hybrid
let author = {
  name: "Mosh",
  // 50 other properties
};

let course = {
  author: {
    id: "ref",
    name: "Mosh",
  },
};
