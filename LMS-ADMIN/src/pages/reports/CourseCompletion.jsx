import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Filter, Printer, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { OverviewChart } from "@/components/OverviewChart"

export default function CourseCompletion() {
  // Sample course completion data
  const courseCompletion = [
    {
      id: 1,
      title: "Advanced Web Development",
      instructor: "Dr. Sarah Johnson",
      enrolled: 245,
      completionRate: 78,
      avgCompletionTime: "6 weeks",
      status: "Active",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Prof. Michael Chen",
      enrolled: 312,
      completionRate: 65,
      avgCompletionTime: "8 weeks",
      status: "Active",
    },
    {
      id: 3,
      title: "Mobile App Development",
      instructor: "Jennifer Lee, MSc",
      enrolled: 187,
      completionRate: 82,
      avgCompletionTime: "5 weeks",
      status: "Active",
    },
    {
      id: 4,
      title: "UX/UI Design Principles",
      instructor: "David Wilson",
      enrolled: 156,
      completionRate: 91,
      avgCompletionTime: "4 weeks",
      status: "Active",
    },
    {
      id: 5,
      title: "Cybersecurity Essentials",
      instructor: "Dr. Robert Taylor",
      enrolled: 203,
      completionRate: 72,
      avgCompletionTime: "7 weeks",
      status: "Active",
    },
    {
      id: 6,
      title: "Cloud Computing",
      instructor: "Maria Rodriguez, PhD",
      enrolled: 178,
      completionRate: 68,
      avgCompletionTime: "6 weeks",
      status: "Active",
    },
    {
      id: 7,
      title: "Artificial Intelligence",
      instructor: "Prof. James Kim",
      enrolled: 225,
      completionRate: 58,
      avgCompletionTime: "10 weeks",
      status: "Active",
    },
  ]

  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        heading="Course Completion"
        subheading="Track and analyze course completion rates and metrics"
        actions={
          <>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button size="sm" className="h-8 gap-1">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">73.4%</div>
            <Progress value={73} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Completions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Completion Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.5 weeks</div>
            <p className="text-xs text-muted-foreground">-0.8 weeks from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dropout Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.8%</div>
            <p className="text-xs text-muted-foreground">-2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Completion Trends</CardTitle>
            <CardDescription>Monthly course completion rates over time</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <OverviewChart />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Completion by Category</CardTitle>
            <CardDescription>Completion rates across different course categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Web Development</span>
                  <span className="text-sm">82%</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Data Science</span>
                  <span className="text-sm">68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Mobile Development</span>
                  <span className="text-sm">76%</span>
                </div>
                <Progress value={76} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">UX/UI Design</span>
                  <span className="text-sm">91%</span>
                </div>
                <Progress value={91} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Cybersecurity</span>
                  <span className="text-sm">72%</span>
                </div>
                <Progress value={72} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Completion Details</CardTitle>
          <CardDescription>View and analyze completion rates for individual courses</CardDescription>
          <div className="flex items-center gap-2 mt-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search courses..." className="pl-8 w-full md:w-[300px]" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="webdev">Web Development</SelectItem>
                <SelectItem value="datascience">Data Science</SelectItem>
                <SelectItem value="mobiledev">Mobile Development</SelectItem>
                <SelectItem value="uxui">UX/UI Design</SelectItem>
                <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Title</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Enrolled</TableHead>
                <TableHead>Completion Rate</TableHead>
                <TableHead>Avg. Completion Time</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courseCompletion.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>
                    <div className="font-medium">{course.title}</div>
                  </TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>{course.enrolled} students</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-[80px]">
                        <Progress value={course.completionRate} className="h-2" />
                      </div>
                      <span className="text-sm">{course.completionRate}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{course.avgCompletionTime}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
