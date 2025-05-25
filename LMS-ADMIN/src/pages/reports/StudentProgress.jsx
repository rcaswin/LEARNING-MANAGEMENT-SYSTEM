import { PageHeader } from "@/components/PageHeader"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Filter, Printer, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StudentProgress() {
  const studentProgress = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.j@example.com",
      course: "Advanced Web Development",
      progress: 85,
      lastActive: "2 hours ago",
      status: "On Track",
    },
    {
      id: 2,
      name: "Samantha Lee",
      email: "sam.lee@example.com",
      course: "Data Science Fundamentals",
      progress: 92,
      lastActive: "1 day ago",
      status: "Ahead",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "m.chen@example.com",
      course: "Mobile App Development",
      progress: 67,
      lastActive: "3 hours ago",
      status: "Behind",
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "e.wilson@example.com",
      course: "UX/UI Design Principles",
      progress: 78,
      lastActive: "5 hours ago",
      status: "On Track",
    },
    {
      id: 5,
      name: "David Kim",
      email: "d.kim@example.com",
      course: "Cybersecurity Essentials",
      progress: 45,
      lastActive: "2 days ago",
      status: "At Risk",
    },
    {
      id: 6,
      name: "Jessica Martinez",
      email: "j.martinez@example.com",
      course: "Cloud Computing",
      progress: 88,
      lastActive: "1 hour ago",
      status: "On Track",
    },
    {
      id: 7,
      name: "Ryan Taylor",
      email: "r.taylor@example.com",
      course: "Artificial Intelligence",
      progress: 72,
      lastActive: "4 hours ago",
      status: "On Track",
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "Ahead":
        return <Badge className="bg-green-500">Ahead</Badge>
      case "On Track":
        return <Badge className="bg-blue-500">On Track</Badge>
      case "Behind":
        return <Badge className="bg-yellow-500">Behind</Badge>
      case "At Risk":
        return <Badge className="bg-red-500">At Risk</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <PageHeader title="Student Progress"/>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75.3%</div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">On Track Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">1,945 out of 2,853 students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">At Risk Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12%</div>
            <p className="text-xs text-muted-foreground">342 out of 2,853 students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inactive Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8%</div>
            <p className="text-xs text-muted-foreground">228 out of 2,853 students</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student Progress Details</CardTitle>
          <CardDescription>View and manage individual student progress across all courses</CardDescription>
          <div className="flex items-center gap-2 mt-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search students..." className="pl-8 w-full md:w-[300px]" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="ahead">Ahead</SelectItem>
                <SelectItem value="ontrack">On Track</SelectItem>
                <SelectItem value="behind">Behind</SelectItem>
                <SelectItem value="atrisk">At Risk</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
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
                <TableHead>Student Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentProgress.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-muted-foreground">{student.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-[80px]">
                        <Progress value={student.progress} className="h-2" />
                      </div>
                      <span className="text-sm">{student.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.lastActive}</TableCell>
                  <TableCell>{getStatusBadge(student.status)}</TableCell>
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
