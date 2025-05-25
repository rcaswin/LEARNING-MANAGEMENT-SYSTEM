import { BarChart, Download, LineChart, PieChart, Search, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { OverviewChart } from "@/components/OverviewChart"
// import { EngagementChart } from "@/components/engagement-chart"

export default function Performance() {
  return (
    <>
      <PageHeader title="Instructor Management" />
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Performance Overview</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Instructor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Instructors</SelectItem>
              <SelectItem value="james">James Wilson</SelectItem>
              <SelectItem value="sarah">Sarah Lee</SelectItem>
              <SelectItem value="michael">Michael Miller</SelectItem>
              <SelectItem value="emily">Emily Davis</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="6months">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1">
                <div className="text-2xl font-bold">4.7</div>
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">+0.2</span>
                <span>from last period</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Student Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <Progress value={92} className="mt-2" />
              <p className="mt-1 text-xs text-muted-foreground">Based on student feedback</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Course Completion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78.5%</div>
              <Progress value={78.5} className="mt-2" />
              <p className="mt-1 text-xs text-muted-foreground">Across all courses</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.5 hrs</div>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">-1.2 hrs</span>
                <span>from last period</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="ratings">Ratings & Reviews</TabsTrigger>
            <TabsTrigger value="engagement">Student Engagement</TabsTrigger>
            <TabsTrigger value="courses">Course Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Performance Trends</CardTitle>
                  <CardDescription>Average ratings and student engagement over time</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <OverviewChart />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Top Instructors</CardTitle>
                  <CardDescription>Based on student ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topInstructors.map((instructor) => (
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
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span>{instructor.rating}</span>
                          </div>
                          <Badge variant="outline">{instructor.courses} courses</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rating Distribution</CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <div className="flex w-10 items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          <span>{rating}</span>
                        </div>
                        <Progress value={ratingDistribution[rating]} className="h-2" />
                        <span className="text-sm">{ratingDistribution[rating]}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Student Feedback</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feedbackCategories.map((category) => (
                      <div key={category.name} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>{category.name}</span>
                          <span className="font-medium">{category.score}/5</span>
                        </div>
                        <Progress value={(category.score / 5) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Response Metrics</CardTitle>
                  <LineChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Average Response Time</span>
                        <span className="font-medium">8.5 hrs</span>
                      </div>
                      <Progress value={(8.5 / 24) * 100} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Response Rate</span>
                        <span className="font-medium">96%</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Student Questions Answered</span>
                        <span className="font-medium">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Assignment Feedback Time</span>
                        <span className="font-medium">2.3 days</span>
                      </div>
                      <Progress value={(2.3 / 7) * 100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ratings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
                <CardDescription>Recent reviews from students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={review.student} />
                            <AvatarFallback>{review.student.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{review.student}</p>
                            <p className="text-xs text-muted-foreground">{review.course}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted-foreground"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm">{review.comment}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Engagement</CardTitle>
                <CardDescription>Engagement metrics over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                {/* <EngagementChart /> */}
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Metrics</CardTitle>
                  <CardDescription>Key engagement indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {engagementMetrics.map((metric) => (
                      <div key={metric.name} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>{metric.name}</span>
                          <span className="font-medium">{metric.value}</span>
                        </div>
                        <Progress value={metric.percentage} className="h-2" />
                        <p className="text-xs text-muted-foreground">{metric.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Student Interaction</CardTitle>
                  <CardDescription>How students interact with instructors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {interactionMetrics.map((metric) => (
                      <div key={metric.name} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{metric.name}</p>
                          <p className="text-sm text-muted-foreground">{metric.description}</p>
                        </div>
                        <Badge variant={metric.trend === "up" ? "default" : "secondary"}>{metric.value}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Performance</CardTitle>
                <CardDescription>Performance metrics by course</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {coursePerformance.map((course) => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{course.title}</p>
                        <Badge variant="outline">{course.students} students</Badge>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Completion Rate</span>
                            <span>{course.completionRate}%</span>
                          </div>
                          <Progress value={course.completionRate} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Average Rating</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                              <span>{course.rating}</span>
                            </div>
                          </div>
                          <Progress value={(course.rating / 5) * 100} className="h-2" />
                        </div>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Student Satisfaction</span>
                            <span>{course.satisfaction}%</span>
                          </div>
                          <Progress value={course.satisfaction} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>Assessment Pass Rate</span>
                            <span>{course.passRate}%</span>
                          </div>
                          <Progress value={course.passRate} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

const topInstructors = [
  {
    id: "INS001",
    name: "Sarah Lee",
    department: "Data Science",
    rating: 4.9,
    courses: 3,
  },
  {
    id: "INS002",
    name: "James Wilson",
    department: "Computer Science",
    rating: 4.8,
    courses: 5,
  },
  {
    id: "INS003",
    name: "Michael Miller",
    department: "Mobile Development",
    rating: 4.7,
    courses: 4,
  },
  {
    id: "INS004",
    name: "Emily Davis",
    department: "Design",
    rating: 4.6,
    courses: 2,
  },
  {
    id: "INS005",
    name: "Robert Brown",
    department: "Data Science",
    rating: 4.5,
    courses: 3,
  },
]

const ratingDistribution = {
  5: 68,
  4: 22,
  3: 7,
  2: 2,
  1: 1,
}

const feedbackCategories = [
  { name: "Teaching Quality", score: 4.8 },
  { name: "Course Materials", score: 4.6 },
  { name: "Responsiveness", score: 4.5 },
  { name: "Clarity of Explanations", score: 4.7 },
  { name: "Engagement", score: 4.4 },
]

const reviews = [
  {
    id: 1,
    student: "Alex Johnson",
    course: "Web Development Bootcamp",
    rating: 5,
    comment:
      "James is an exceptional instructor. His explanations are clear and he's always available to help when needed.",
    date: "Apr 5, 2023",
  },
  {
    id: 2,
    student: "Maria Garcia",
    course: "Data Science Fundamentals",
    rating: 5,
    comment: "Sarah's teaching style is amazing. She breaks down complex concepts into easy-to-understand parts.",
    date: "Apr 3, 2023",
  },
  {
    id: 3,
    student: "James Wilson",
    course: "Mobile App Development",
    rating: 4,
    comment: "Michael is knowledgeable and responsive. The course content is well-structured.",
    date: "Mar 28, 2023",
  },
  {
    id: 4,
    student: "Sarah Lee",
    course: "UI/UX Design Principles",
    rating: 5,
    comment: "Emily's feedback on my design projects was invaluable. She has a great eye for detail.",
    date: "Mar 25, 2023",
  },
]

const engagementMetrics = [
  {
    name: "Average Session Duration",
    value: "45 minutes",
    percentage: 75,
    description: "Average time students spend in each learning session",
  },
  {
    name: "Content Completion Rate",
    value: "82%",
    percentage: 82,
    description: "Percentage of course content completed by enrolled students",
  },
  {
    name: "Discussion Participation",
    value: "68%",
    percentage: 68,
    description: "Percentage of students actively participating in discussions",
  },
  {
    name: "Assignment Submission Rate",
    value: "94%",
    percentage: 94,
    description: "Percentage of assignments submitted on time",
  },
]

const interactionMetrics = [
  {
    name: "Questions Asked",
    value: "245",
    description: "Total questions asked by students",
    trend: "up",
  },
  {
    name: "Forum Posts",
    value: "178",
    description: "Total forum posts by students",
    trend: "up",
  },
  {
    name: "1-on-1 Sessions",
    value: "32",
    description: "Individual sessions with students",
    trend: "down",
  },
  {
    name: "Feedback Responses",
    value: "98%",
    description: "Percentage of student feedback addressed",
    trend: "up",
  },
]

const coursePerformance = [
  {
    id: "CRS001",
    title: "Web Development Bootcamp",
    students: 245,
    completionRate: 85,
    rating: 4.8,
    satisfaction: 92,
    passRate: 88,
  },
  {
    id: "CRS002",
    title: "Data Science Fundamentals",
    students: 189,
    completionRate: 78,
    rating: 4.9,
    satisfaction: 94,
    passRate: 82,
  },
  {
    id: "CRS003",
    title: "Mobile App Development",
    students: 156,
    completionRate: 72,
    rating: 4.7,
    satisfaction: 90,
    passRate: 80,
  },
  {
    id: "CRS004",
    title: "UI/UX Design Principles",
    students: 112,
    completionRate: 80,
    rating: 4.6,
    satisfaction: 88,
    passRate: 85,
  },
]
