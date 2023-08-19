export const students = [
  { name: 'John', age: 21, grade: 90 },
  { name: 'Jane', age: 20, grade: 85 },
  { name: 'Alice', age: 22, grade: 90 },
  { name: 'Bob', age: 20, grade: 80 },
  { name: 'David', age: 21, grade: 85 },
];

export const sortStudents = students => {
  const compare = key => (a, b) =>
    a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;

  return [...students].sort((a, b) => {
    const gradeCompare = compare('grade')(a, b);
    if (gradeCompare !== 0) return gradeCompare;

    const ageCompare = compare('age')(a, b);
    if (ageCompare !== 0) return ageCompare;

    return compare('name')(a, b);
  });
};
