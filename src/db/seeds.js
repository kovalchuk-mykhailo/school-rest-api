const groupOptions = [
  {
    name: "pmp11",
    year: 2012,
  },
  {
    name: "pmp12",
    year: 2012,
  },
];

const studentOptions = [
  {
    name: "Mykhailo",
    surname: "Kovalchuk",
    groupid: 1,
  },
  {
    name: "John",
    surname: "Snow",
    groupid: 1,
  },
  { name: "Mykola", surname: "Kovalchuk", groupid: 2 },
  {
    name: "Daenerys",
    surname: "Targaryen",
    groupid: 2,
  },
];

const teacherOptions = [
  {
    name: "Severus",
    surname: "Snape",
  },
  {
    name: "Rubeus",
    surname: "Hagrid",
  },
  { name: "Leonardo", surname: "Blue" },
  {
    name: "Donatello",
    surname: "Violet",
  },
];

const lessonOptions = [
  {
    topic: "History of Magic",
    classroom: 111,
    schedulenumber: 1,
    groupid: 1,
    teacherid: 1,
  },
  {
    topic: "Potions",
    classroom: 161,
    schedulenumber: 2,
    groupid: 1,
    teacherid: 1,
  },
  {
    topic: "Math",
    classroom: 431,
    schedulenumber: 3,
    groupid: 2,
    teacherid: 4,
  },
  {
    topic: "Biology",
    classroom: 73,
    schedulenumber: 5,
    groupid: 2,
    teacherid: 3,
  },
  {
    topic: "Life",
    classroom: 66,
    schedulenumber: 6,
    groupid: 2,
    teacherid: 2,
  },
];

const seedDb = (db) => async () => {
  try {
    groupOptions.forEach(async (opt) => {
      await db.Group.findOrCreate({ where: opt, defaults: opt });
    });

    studentOptions.forEach(async (opt) => {
      await db.Student.findOrCreate({ where: opt, defaults: opt });
    });

    teacherOptions.forEach(async (opt) => {
      await db.Teacher.findOrCreate({ where: opt, defaults: opt });
    });

    lessonOptions.forEach(async (opt) => {
      await db.Lesson.findOrCreate({ where: opt, defaults: opt });
    });
  } catch (error) {
    console.log("Seeding of db error", error.message);
  }
};

module.exports = seedDb;
