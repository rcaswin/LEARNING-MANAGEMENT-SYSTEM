import { BarChart, Download, MoreHorizontal, Plus, Search, Star } from "lucide-react"
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
import { Progress } from "@/components/ui/progress"

export default function Instructors() {
  return (
    <>
      <PageHeader title="Instructor Management" />
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">All Instructors</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm" asChild>
              <Link to="/instructors/add">
                <Plus className="mr-2 h-4 w-4" />
                Add Instructor
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Input placeholder="Search instructors..." className="max-w-xs" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Department</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Departments</DropdownMenuItem>
              <DropdownMenuItem>Computer Science</DropdownMenuItem>
              <DropdownMenuItem>Data Science</DropdownMenuItem>
              <DropdownMenuItem>Design</DropdownMenuItem>
              <DropdownMenuItem>Business</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Status</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All Statuses</DropdownMenuItem>
              <DropdownMenuItem>Active</DropdownMenuItem>
              <DropdownMenuItem>On Leave</DropdownMenuItem>
              <DropdownMenuItem>Inactive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Instructors</CardTitle>
            <CardDescription>Manage your platform instructors and their courses.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {instructors.map((instructor) => (
                  <TableRow key={instructor.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={instructor.name} />
                          <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{instructor.name}</p>
                          <p className="text-sm text-muted-foreground">{instructor.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{instructor.department}</TableCell>
                    <TableCell>{instructor.courses}</TableCell>
                    <TableCell>{instructor.students}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span>{instructor.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          instructor.status === "Active"
                            ? "default"
                            : instructor.status === "On Leave"
                              ? "outline"
                              : "secondary"
                        }
                      >
                        {instructor.status}
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
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Instructor</DropdownMenuItem>
                          <DropdownMenuItem>View Courses</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Performance Overview</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Instructors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">+2 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1">
                <div className="text-2xl font-bold">4.7</div>
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-xs text-muted-foreground">+0.2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">145</div>
              <p className="text-xs text-muted-foreground">+4 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.5 hrs</div>
              <p className="text-xs text-muted-foreground">-1.2 hrs from last month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Instructors</CardTitle>
            <CardDescription>Based on student ratings and engagement.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {instructors
                .slice(0, 5)
                .sort((a, b) => b.rating - a.rating)
                .map((instructor) => (
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
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span>{instructor.rating}</span>
                      </div>
                      <div className="w-32">
                        <Progress value={instructor.rating * 20} className="h-2" />
                      </div>
                      <Button variant="ghost" size="icon" asChild>
                        <Link to={`/instructors/performance/${instructor.id}`}>
                          <BarChart className="h-4 w-4" />
                          <span className="sr-only">View Performance</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

const instructors = [
  {
    id: "INS001",
    name: "James Wilson",
    email: "james.wilson@example.com",
    department: "Computer Science",
    courses: 5,
    students: 245,
    rating: 4.8,
    status: "Active",
  },
  {
    id: "INS002",
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    department: "Data Science",
    courses: 3,
    students: 189,
    rating: 4.9,
    status: "Active",
  },
  {
    id: "INS003",
    name: "Michael Miller",
    email: "michael.miller@example.com",
    department: "Mobile Development",
    courses: 4,
    students: 156,
    rating: 4.7,
    status: "Active",
  },
  {
    id: "INS004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    department: "Design",
    courses: 2,
    students: 112,
    rating: 4.6,
    status: "On Leave",
  },
  {
    id: "INS005",
    name: "Robert Brown",
    email: "robert.brown@example.com",
    department: "Data Science",
    courses: 3,
    students: 203,
    rating: 4.5,
    status: "Active",
  },
  {
    id: "INS006",
    name: "Jennifer Garcia",
    email: "jennifer.garcia@example.com",
    department: "Business",
    courses: 2,
    students: 98,
    rating: 4.3,
    status: "Active",
  },
  {
    id: "INS007",
    name: "David Martinez",
    email: "david.martinez@example.com",
    department: "Computer Science",
    courses: 4,
    students: 178,
    rating: 4.4,
    status: "Active",
  },
  {
    id: "INS008",
    name: "Lisa Rodriguez",
    email: "lisa.rodriguez@example.com",
    department: "Design",
    courses: 3,
    students: 134,
    rating: 4.2,
    status: "Inactive",
  },
]
