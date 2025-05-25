import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import './App.css'

import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import Users from "./pages/users/Users"
import AddUser from "./pages/users/AddUser"
import Courses from "./pages/courses/Courses"
import AddCourse from "./pages/courses/AddCourse"
import AssignCourse from "./pages/courses/AssignCourse"
import Instructors from "./pages/instructors/Instructors"
import AddInstructor from "./pages/instructors/AddInstructor"
import Performance from "./pages/instructors/Performance"
import Assessments from "./pages/assessments/Assessments"
import Quiz from "./pages/assessments/Quiz"
import Submissions from "./pages/assessments/Submissions"
import StudentProgress from "./pages/reports/StudentProgress"
import CourseCompletion from "./pages/reports/CourseCompletion"
import Queries from "./pages/support/Queries"
import Tickets from "./pages/support/Tickets"
import Respond from "./pages/support/Respond"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />

          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/add" element={<AddInstructor />} />
          <Route path="/instructors/performance" element={<Performance />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/add" element={<AddCourse />} />
          <Route path="/courses/assign" element={<AssignCourse />} />

          <Route path="/assessments" element={<Assessments />} />
          <Route path="/assessments/quiz" element={<Quiz />} />
          <Route path="/assessments/submissions" element={<Submissions />} />

          <Route path="/reports/students" element={<StudentProgress />} />
          <Route path="/reports/completion" element={<CourseCompletion />} />

          <Route path="/support/queries" element={<Queries />} />
          <Route path="/support/tickets" element={<Tickets />} />
          <Route path="/support/respond" element={<Respond />} />
        </Routes>
        <Toaster/>
      </main>
    </SidebarProvider>
  )
}

export default App

