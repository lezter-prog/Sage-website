// StudentPerformancePage.js
import React from "react";
import StudentPerformanceTable from "components/ratetable";
import BarChart from "components/bar";
import { useTheme } from "@emotion/react";

const students = [
  {
    id: 1,
    name: "John Smith",
    modules: [
      { id: "module1", passingRate: 80 },
      { id: "module2", passingRate: 75 },
      { id: "module3", passingRate: 90 },
    ],
  },
  // Add more student data
];

const StudentPerformancePage = () => {
  const theme = useTheme();
  return (
    <div>
      <StudentPerformanceTable backgroundColor={theme.palette.background.alt} students={students} />
      <BarChart students={students} />
    </div>
  );
};

export default StudentPerformancePage;
