import { ArrowUpDown, Check, Download, Eye, Filter, MoreHorizontal, Search, X } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function Submissions() {
  return (
    <>
      <PageHeader title="Assessment & Tests" />
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Submissions & Scores</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Input placeholder="Search submissions..." className="max-w-xs" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Assessment Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="quiz">MCQ Quiz</SelectItem>
              <SelectItem value="coding">Coding Challenge</SelectItem>
              <SelectItem value="assignment">Assignment</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="web-dev">Web Development Bootcamp</SelectItem>
              <SelectItem value="data-science">Data Science Fundamentals</SelectItem>
              <SelectItem value="mobile-dev">Mobile App Development</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="graded">Graded</SelectItem>
              <SelectItem value="pending">Pending Review</SelectItem>
              <SelectItem value="late">Late Submission</SelectItem>
              <SelectItem value="resubmitted">Resubmitted</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recent">Recent Submissions</TabsTrigger>
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Submissions</CardTitle>
                <CardDescription>View and manage recent student submissions.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Assessment</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>
                        <div className="flex items-center gap-1">
                          Submitted
                          <ArrowUpDown className="h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={submission.student} />
                              <AvatarFallback>{submission.student.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{submission.student}</p>
                              <p className="text-xs text-muted-foreground">{submission.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{submission.assessment}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{submission.type}</Badge>
                        </TableCell>
                        <TableCell>{submission.submitted}</TableCell>
                        <TableCell>
                          {submission.score ? (
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{submission.score}%</span>
                              {submission.score >= 70 ? (
                                <Check className="h-4 w-4 text-green-500" />
                              ) : (
                                <X className="h-4 w-4 text-red-500" />
                              )}
                            </div>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              submission.status === "Graded"
                                ? "default"
                                : submission.status === "Pending Review"
                                  ? "outline"
                                  : submission.status === "Late Submission"
                                    ? "secondary"
                                    : "outline"
                            }
                          >
                            {submission.status}
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
                              <DropdownMenuItem asChild>
                                <Link href={`/assessments/submissions/${submission.id}`}>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Submission
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Check className="mr-2 h-4 w-4" />
                                Grade Submission
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Student Profile</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Review</CardTitle>
                <CardDescription>Submissions that need your review and grading.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {submissions
                    .filter((s) => s.status === "Pending Review")
                    .map((submission) => (
                      <div key={submission.id} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={submission.student} />
                            <AvatarFallback>{submission.student.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{submission.student}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{submission.assessment}</span>
                              <span>•</span>
                              <span>{submission.submitted}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{submission.type}</Badge>
                          <Button size="sm" asChild>
                            <Link href={`/assessments/submissions/${submission.id}`}>Review</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="graded" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Graded Submissions</CardTitle>
                <CardDescription>View all graded submissions and their scores.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student</TableHead>
                      <TableHead>Assessment</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Graded By</TableHead>
                      <TableHead>Graded On</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gradedSubmissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={submission.student} />
                              <AvatarFallback>{submission.student.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{submission.student}</span>
                          </div>
                        </TableCell>
                        <TableCell>{submission.assessment}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{submission.score}%</span>
                            {submission.score >= 70 ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <X className="h-4 w-4 text-red-500" />
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{submission.gradedBy}</TableCell>
                        <TableCell>{submission.gradedOn}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/assessments/submissions/${submission.id}`}>View Details</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground">+156 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78.5%</div>
                  <p className="text-xs text-muted-foreground">+2.3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">82%</div>
                  <Progress value={82} className="mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">Requires attention</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Performance</CardTitle>
                  <CardDescription>Average scores by assessment type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assessmentPerformance.map((assessment) => (
                      <div key={assessment.type} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{assessment.type}</Badge>
                            <span className="font-medium">{assessment.name}</span>
                          </div>
                          <span className="font-medium">{assessment.averageScore}%</span>
                        </div>
                        <Progress value={assessment.averageScore} className="h-2" />
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{assessment.submissions} submissions</span>
                          <span>{assessment.passRate}% pass rate</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Student Performance</CardTitle>
                  <CardDescription>Top performing students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topStudents.map((student, index) => (
                      <div key={student.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-medium">
                            {index + 1}
                          </div>
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={student.name} />
                            <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-xs text-muted-foreground">{student.submissions} submissions</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{student.averageScore}%</p>
                          <p className="text-xs text-muted-foreground">{student.completionRate}% completion</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

const submissions = [
  {
    id: "sub-1",
    student: "Alex Johnson",
    email: "alex.johnson@example.com",
    assessment: "JavaScript Fundamentals Quiz",
    type: "MCQ Quiz",
    submitted: "Apr 10, 2023, 10:15 AM",
    score: 85,
    status: "Graded",
  },
  {
    id: "sub-2",
    student: "Maria Garcia",
    email: "maria.garcia@example.com",
    assessment: "React Components Challenge",
    type: "Coding Challenge",
    submitted: "Apr 10, 2023, 9:30 AM",
    score: null,
    status: "Pending Review",
  },
  {
    id: "sub-3",
    student: "James Wilson",
    email: "james.wilson@example.com",
    assessment: "Data Visualization Project",
    type: "Assignment",
    submitted: "Apr 9, 2023, 4:45 PM",
    score: 92,
    status: "Graded",
  },
  {
    id: "sub-4",
    student: "Sarah Lee",
    email: "sarah.lee@example.com",
    assessment: "Mobile UI Design Assessment",
    type: "Assignment",
    submitted: "Apr 9, 2023, 11:20 PM",
    score: null,
    status: "Pending Review",
  },
  {
    id: "sub-5",
    student: "Robert Brown",
    email: "robert.brown@example.com",
    assessment: "Python Data Structures Quiz",
    type: "MCQ Quiz",
    submitted: "Apr 9, 2023, 8:15 AM",
    score: 78,
    status: "Graded",
  },
  {
    id: "sub-6",
    student: "Emily Davis",
    email: "emily.davis@example.com",
    assessment: "HTML & CSS Final Exam",
    type: "MCQ Quiz",
    submitted: "Apr 8, 2023, 3:30 PM",
    score: 65,
    status: "Graded",
  },
  {
    id: "sub-7",
    student: "Michael Miller",
    email: "michael.miller@example.com",
    assessment: "Database Design Project",
    type: "Assignment",
    submitted: "Apr 11, 2023, 12:10 AM",
    score: null,
    status: "Late Submission",
  },
]

const gradedSubmissions = [
  {
    id: "gsub-1",
    student: "Alex Johnson",
    assessment: "JavaScript Fundamentals Quiz",
    score: 85,
    gradedBy: "James Wilson",
    gradedOn: "Apr 10, 2023",
  },
  {
    id: "gsub-2",
    student: "James Wilson",
    assessment: "Data Visualization Project",
    score: 92,
    gradedBy: "Sarah Lee",
    gradedOn: "Apr 10, 2023",
  },
  {
    id: "gsub-3",
    student: "Robert Brown",
    assessment: "Python Data Structures Quiz",
    score: 78,
    gradedBy: "Automated System",
    gradedOn: "Apr 9, 2023",
  },
  {
    id: "gsub-4",
    student: "Emily Davis",
    assessment: "HTML & CSS Final Exam",
    score: 65,
    gradedBy: "Automated System",
    gradedOn: "Apr 9, 2023",
  },
  {
    id: "gsub-5",
    student: "Maria Garcia",
    assessment: "JavaScript Frameworks",
    score: 88,
    gradedBy: "James Wilson",
    gradedOn: "Apr 8, 2023",
  },
]

const assessmentPerformance = [
  {
    type: "MCQ Quiz",
    name: "JavaScript Fundamentals Quiz",
    averageScore: 82,
    submissions: 245,
    passRate: 88,
  },
  {
    type: "Coding Challenge",
    name: "React Components Challenge",
    averageScore: 76,
    submissions: 156,
    passRate: 72,
  },
  {
    type: "Assignment",
    name: "Data Visualization Project",
    averageScore: 85,
    submissions: 189,
    passRate: 90,
  },
  {
    type: "MCQ Quiz",
    name: "HTML & CSS Final Exam",
    averageScore: 79,
    submissions: 245,
    passRate: 84,
  },
]

const topStudents = [
  {
    id: "stu-1",
    name: "James Wilson",
    submissions: 12,
    averageScore: 94,
    completionRate: 100,
  },
  {
    id: "stu-2",
    name: "Maria Garcia",
    submissions: 10,
    averageScore: 92,
    completionRate: 100,
  },
  {
    id: "stu-3",
    name: "Alex Johnson",
    submissions: 11,
    averageScore: 89,
    completionRate: 95,
  },
  {
    id: "stu-4",
    name: "Sarah Lee",
    submissions: 9,
    averageScore: 87,
    completionRate: 90,
  },
  {
    id: "stu-5",
    name: "Robert Brown",
    submissions: 12,
    averageScore: 85,
    completionRate: 100,
  },
]
