import { Clock, FileText, MoreHorizontal, Plus, Search } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PageHeader } from "@/components/PageHeader"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function Assessments() {
  return (
    <>
      <PageHeader title="Assessment & Tests" />
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">All Assessments</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/assessments/quiz">Create MCQ Quiz</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/assessments/coding">Create Coding Challenge</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/assessments/assignment">Create Assignment</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Input placeholder="Search assessments..." className="max-w-xs" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Type</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Types</DropdownMenuItem>
                <DropdownMenuItem>MCQ Quiz</DropdownMenuItem>
                <DropdownMenuItem>Coding Challenge</DropdownMenuItem>
                <DropdownMenuItem>Assignment</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Course</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Courses</DropdownMenuItem>
                <DropdownMenuItem>Web Development Bootcamp</DropdownMenuItem>
                <DropdownMenuItem>Data Science Fundamentals</DropdownMenuItem>
                <DropdownMenuItem>Mobile App Development</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {assessments
                  .filter((a) => a.status === "Active")
                  .map((assessment) => (
                    <Card key={assessment.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>{assessment.title}</CardTitle>
                            <CardDescription className="mt-1">{assessment.course}</CardDescription>
                          </div>
                          <Badge>{assessment.type}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>{assessment.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <FileText className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>{assessment.questions} questions</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>Submissions</span>
                              <span className="font-medium">
                                {assessment.submissions}/{assessment.totalStudents}
                              </span>
                            </div>
                            <Progress value={(assessment.submissions / assessment.totalStudents) * 100} />
                          </div>
                          <div className="flex items-center justify-between">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/assessments/${assessment.id}`}>View Details</Link>
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit Assessment</DropdownMenuItem>
                                <DropdownMenuItem>View Submissions</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">Delete Assessment</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {assessments
                  .filter((a) => a.status === "Upcoming")
                  .map((assessment) => (
                    <Card key={assessment.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>{assessment.title}</CardTitle>
                            <CardDescription className="mt-1">{assessment.course}</CardDescription>
                          </div>
                          <Badge variant="outline">{assessment.type}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>{assessment.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <FileText className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span>{assessment.questions} questions</span>
                            </div>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Starts on:</span> {assessment.startDate}
                          </div>
                          <div className="flex items-center justify-between">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/assessments/${assessment.id}`}>View Details</Link>
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit Assessment</DropdownMenuItem>
                                <DropdownMenuItem>Schedule</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">Delete Assessment</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Past Assessments</CardTitle>
                  <CardDescription>View completed assessments and their results.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assessments
                      .filter((a) => a.status === "Past")
                      .map((assessment) => (
                        <div key={assessment.id} className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-1">
                            <h3 className="font-medium">{assessment.title}</h3>
                            <p className="text-sm text-muted-foreground">{assessment.course}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <Badge variant="secondary">{assessment.type}</Badge>
                              <span>Completed on {assessment.endDate}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/assessments/submissions/${assessment.id}`}>View Results</Link>
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Actions</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Download Results</DropdownMenuItem>
                                <DropdownMenuItem>Archive</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="draft" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Draft Assessments</CardTitle>
                  <CardDescription>Continue working on these assessments before publishing.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assessments
                      .filter((a) => a.status === "Draft")
                      .map((assessment) => (
                        <div key={assessment.id} className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-1">
                            <h3 className="font-medium">{assessment.title}</h3>
                            <p className="text-sm text-muted-foreground">{assessment.course}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <Badge variant="outline">{assessment.type}</Badge>
                              <span>Last edited on {assessment.lastEdited}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/assessments/edit/${assessment.id}`}>Continue Editing</Link>
                            </Button>
                            <Button size="sm" asChild>
                              <Link totalStudents={`/assessments/publish/${assessment.id}`}>Publish</Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}

const assessments = [
  {
    id: "ASM001",
    title: "JavaScript Fundamentals Quiz",
    course: "Web Development Bootcamp",
    type: "MCQ Quiz",
    duration: "45 minutes",
    questions: 20,
    submissions: 180,
    totalStudents: 245,
    status: "Active",
    startDate: "",
    endDate: "",
    lastEdited: "",
  },
  {
    id: "ASM002",
    title: "React Components Challenge",
    course: "Web Development Bootcamp",
    type: "Coding Challenge",
    duration: "2 hours",
    questions: 5,
    submissions: 156,
    totalStudents: 245,
    status: "Active",
    startDate: "",
    endDate: "",
    lastEdited: "",
  },
  {
    id: "ASM003",
    title: "Data Visualization Project",
    course: "Data Science Fundamentals",
    type: "Assignment",
    duration: "1 week",
    questions: 1,
    submissions: 142,
    totalStudents: 189,
    status: "Active",
    startDate: "",
    endDate: "",
    lastEdited: "",
  },
  {
    id: "ASM004",
    title: "Mobile UI Design Assessment",
    course: "Mobile App Development",
    type: "Assignment",
    duration: "3 days",
    questions: 3,
    submissions: 0,
    totalStudents: 156,
    status: "Upcoming",
    startDate: "Apr 15, 2023",
    endDate: "",
    lastEdited: "",
  },
  {
    id: "ASM005",
    title: "Python Data Structures Quiz",
    course: "Python for Data Analysis",
    type: "MCQ Quiz",
    duration: "60 minutes",
    questions: 25,
    submissions: 0,
    totalStudents: 203,
    status: "Upcoming",
    startDate: "Apr 18, 2023",
    endDate: "",
    lastEdited: "",
  },
  {
    id: "ASM006",
    title: "HTML & CSS Final Exam",
    course: "Web Development Bootcamp",
    type: "MCQ Quiz",
    duration: "90 minutes",
    questions: 40,
    submissions: 240,
    totalStudents: 245,
    status: "Past",
    startDate: "",
    endDate: "Mar 28, 2023",
    lastEdited: "",
  },
  {
    id: "ASM007",
    title: "Database Design Project",
    course: "Web Development Bootcamp",
    type: "Assignment",
    duration: "2 weeks",
    questions: 1,
    submissions: 238,
    totalStudents: 245,
    status: "Past",
    startDate: "",
    endDate: "Mar 15, 2023",
    lastEdited: "",
  },
  {
    id: "ASM008",
    title: "Advanced JavaScript Concepts",
    course: "JavaScript Frameworks",
    type: "MCQ Quiz",
    duration: "60 minutes",
    questions: 30,
    submissions: 0,
    totalStudents: 0,
    status: "Draft",
    startDate: "",
    endDate: "",
    lastEdited: "Apr 2, 2023",
  },
  {
    id: "ASM009",
    title: "Cloud Services Implementation",
    course: "Cloud Computing Essentials",
    type: "Assignment",
    duration: "1 week",
    questions: 4,
    submissions: 0,
    totalStudents: 0,
    status: "Draft",
    startDate: "",
    endDate: "",
    lastEdited: "Apr 5, 2023",
  },
]
