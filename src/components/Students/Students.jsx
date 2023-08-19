import Title from 'components/shared/Title';

import { students, sortStudents } from 'studentsSort';
import { StudentsTable, TableBox } from './Students.styled';

const Students = () => {
  return (
    <>
      <Title as="h2">Unsorted students:</Title>
      <TableBox>
        <StudentsTable>
          <tbody>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>

            {students.map((student, index) => (
              <tr key={student.name}>
                <td>{index + 1}&#41;</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </StudentsTable>
      </TableBox>

      <Title as="h2">Sorted students:</Title>
      <TableBox>
        <StudentsTable>
          <tbody>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>

            {sortStudents(students).map((student, index) => (
              <tr key={student.name}>
                <td>{index + 1}&#41;</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </StudentsTable>
      </TableBox>
    </>
  );
};

export default Students;
