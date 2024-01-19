import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Overview from "scenes/overview";
import Sessions from "scenes/sessions";
import Contents from "scenes/contents";
import Interaction from "scenes/interaction"
import Completion from "scenes/completion"
import Grades from "scenes/grades";
import Rates from "scenes/rates"
import ModuleGrades from "scenes/module-grades"
import ViewGrades from "scenes/module-grades/module-grades"
import NoInstructorCourse from "scenes/no-instructor"
import InstructorUssage from "scenes/instructor-ussage"
import CourseContent from "scenes/instructor-ussage/course-content"
import UserStore from "stores/UserStore";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/sessions" element={<Sessions/>} />
                <Route path="/contents" element={<Contents/>} />
                <Route path="/interaction" element={<Interaction/>} />
                <Route path="/completion" element={<Completion/>} />
                <Route path="/grades" element={<Grades/>} />
                <Route path="/rates" element={<Rates/>} />
                <Route path="/module-grades" element={<ModuleGrades/>} />
                <Route path="/view/grades" element={<ViewGrades/>} />
                <Route path="/no-instructor/courses" element={<NoInstructorCourse/>} />
                <Route path="/instructor-ussage" element={<InstructorUssage/>} />
                <Route path="/course-content" element={<CourseContent/>} />
              </Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    );
}

export default App;
