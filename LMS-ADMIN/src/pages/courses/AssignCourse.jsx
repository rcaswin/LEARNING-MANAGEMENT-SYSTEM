import { MoreHorizontal, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PageHeader } from "@/components/PageHeader"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function AssignCourse() {
  return (
    <>
      <PageHeader title="Course Management" />
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Assign Instructors</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Assign Instructor
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Assign Instructor to Course</DialogTitle>
                  <DialogDescription>Select an instructor and course to create an assignment.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="instructor">Instructor</label>
                    <Select>
                      <SelectTrigger id="instructor">
                        <SelectValue placeholder="Select instructor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="james">James Wilson</SelectItem>
                        <SelectItem value="sarah">Sarah Lee</SelectItem>
                        <SelectItem value="michael">Michael Miller</SelectItem>
                        <SelectItem value="emily">Emily Davis</SelectItem>
                        <SelectItem value="robert">Robert Brown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="course">Course</label>
                    <Select>
                      <SelectTrigger id="course">
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-dev">Web Development Bootcamp</SelectItem>
                        <SelectItem value="data-science">Data Science Fundamentals</SelectItem>
                        <SelectItem value="mobile-dev">Mobile App Development</SelectItem>
                        <SelectItem value="ui-ux">UI/UX Design Principles</SelectItem>
                        <SelectItem value="js-frameworks">JavaScript Frameworks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label>Role</label>
                    <Select defaultValue="instructor">
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lead">Lead Instructor</SelectItem>
                        <SelectItem value="instructor">Instructor</SelectItem>
                        <SelectItem value="assistant">Assistant Instructor</SelectItem>
                        <SelectItem value="guest">Guest Lecturer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label>Permissions</label>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="edit" defaultChecked />
                        <label htmlFor="edit">Edit Content</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="grade" defaultChecked />
                        <label htmlFor="grade">Grade Assessments</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="manage" defaultChecked />
                        <label htmlFor="manage">Manage Students</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="analytics" defaultChecked />
                        <label htmlFor="analytics">View Analytics</label>
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Assign</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Current Assignments</CardTitle>
            <CardDescription>View and manage instructor assignments to courses.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignments.map((assignment) => (
                  <TableRow key={assignment.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={assignment.instructor} />
                          <AvatarFallback>{assignment.instructor.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{assignment.instructor}</p>
                          <p className="text-sm text-muted-foreground">{assignment.department}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{assignment.course}</TableCell>
                    <TableCell>{assignment.role}</TableCell>
                    <TableCell>{assignment.students}</TableCell>
                    <TableCell>
                      <Badge variant={assignment.status === "Active" ? "default" : "secondary"}>
                        {assignment.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit Assignment</DropdownMenuItem>
                          <DropdownMenuItem>View Course</DropdownMenuItem>
                          <DropdownMenuItem>View Instructor</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Remove Assignment</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Instructor Workload</CardTitle>
              <CardDescription>Current course load for each instructor.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {instructors.map((instructor) => (
                  <div key={instructor.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={instructor.name} />
                        <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{instructor.name}</p>
                        <p className="text-sm text-muted-foreground">{instructor.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <span className="font-medium">{instructor.courses}</span>
                        <span className="text-muted-foreground"> / {instructor.maxCourses} courses</span>
                      </div>
                      <Badge variant={instructor.courses >= instructor.maxCourses ? "secondary" : "outline"}>
                        {instructor.courses >= instructor.maxCourses ? "Full" : "Available"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Unassigned Courses</CardTitle>
              <CardDescription>Courses that need instructors assigned.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {unassignedCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <p className="font-medium">{course.title}</p>
                      <p className="text-sm text-muted-foreground">{course.category}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{course.startDate}</Badge>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            Assign
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Assign Instructor to {course.title}</DialogTitle>
                            <DialogDescription>Select an instructor for this course.</DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="space-y-2">
                              <label htmlFor={`instructor-${course.id}`}>Instructor</label>
                              <Select>
                                <SelectTrigger id={`instructor-${course.id}`}>
                                  <SelectValue placeholder="Select instructor" />
                                </SelectTrigger>
                                <SelectContent>
                                  {instructors.map((instructor) => (
                                    <SelectItem key={instructor.id} value={instructor.id}>
                                      {instructor.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Assign</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

const assignments = [
  {
    id: "asg-1",
    instructor: "James Wilson",
    department: "Computer Science",
    course: "Web Development Bootcamp",
    role: "Lead Instructor",
    students: 245,
    status: "Active",
  },
  {
    id: "asg-2",
    instructor: "Sarah Lee",
    department: "Data Science",
    course: "Data Science Fundamentals",
    role: "Lead Instructor",
    students: 189,
    status: "Active",
  },
  {
    id: "asg-3",
    instructor: "Michael Miller",
    department: "Mobile Development",
    course: "Mobile App Development",
    role: "Lead Instructor",
    students: 156,
    status: "Active",
  },
  {
    id: "asg-4",
    instructor: "Emily Davis",
    department: "Design",
    course: "UI/UX Design Principles",
    role: "Lead Instructor",
    students: 112,
    status: "Active",
  },
  {
    id: "asg-5",
    instructor: "Robert Brown",
    department: "Data Science",
    course: "Python for Data Analysis",
    role: "Lead Instructor",
    students: 203,
    status: "Active",
  },
  {
    id: "asg-6",
    instructor: "James Wilson",
    department: "Computer Science",
    course: "JavaScript Frameworks",
    role: "Lead Instructor",
    students: 178,
    status: "Active",
  },
  {
    id: "asg-7",
    instructor: "Michael Miller",
    department: "Mobile Development",
    course: "iOS Development with Swift",
    role: "Assistant Instructor",
    students: 87,
    status: "Pending",
  },
]

const instructors = [
  {
    id: "ins-1",
    name: "James Wilson",
    department: "Computer Science",
    courses: 2,
    maxCourses: 3,
  },
  {
    id: "ins-2",
    name: "Sarah Lee",
    department: "Data Science",
    courses: 1,
    maxCourses: 2,
  },
  {
    id: "ins-3",
    name: "Michael Miller",
    department: "Mobile Development",
    courses: 2,
    maxCourses: 2,
  },
  {
    id: "ins-4",
    name: "Emily Davis",
    department: "Design",
    courses: 1,
    maxCourses: 3,
  },
  {
    id: "ins-5",
    name: "Robert Brown",
    department: "Data Science",
    courses: 1,
    maxCourses: 2,
  },
]

const unassignedCourses = [
  {
    id: "crs-1",
    title: "Advanced React Development",
    category: "Web Development",
    startDate: "May 15, 2023",
  },
  {
    id: "crs-2",
    title: "Cloud Computing Essentials",
    category: "DevOps",
    startDate: "May 20, 2023",
  },
  {
    id: "crs-3",
    title: "Cybersecurity Fundamentals",
    category: "Security",
    startDate: "June 1, 2023",
  },
]
