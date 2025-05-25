import { BookOpen, Clock, MoreHorizontal, Plus, Search, Users } from "lucide-react"
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

export default function CoursesPage() {
  return (
    <>
      <PageHeader title="Course Management" />
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">All Courses</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button size="sm" asChild>
              <Link to="/courses/add">
                <Plus className="mr-2 h-4 w-4" />
                Add Course
              </Link>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Input placeholder="Search courses..." className="max-w-xs" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Category</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Categories</DropdownMenuItem>
                <DropdownMenuItem>Web Development</DropdownMenuItem>
                <DropdownMenuItem>Data Science</DropdownMenuItem>
                <DropdownMenuItem>Mobile Development</DropdownMenuItem>
                <DropdownMenuItem>Design</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Status</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>All Statuses</DropdownMenuItem>
                <DropdownMenuItem>Published</DropdownMenuItem>
                <DropdownMenuItem>Draft</DropdownMenuItem>
                <DropdownMenuItem>Archived</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Tabs defaultValue="grid" className="space-y-4">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
              <div className="text-sm text-muted-foreground">
                Showing <strong>12</strong> of <strong>24</strong> courses
              </div>
            </div>

            <TabsContent value="grid" className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden p-0">
                    <div className="relative aspect-video">
                    <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute right-2 top-2">
                        <Badge variant={course.status === "Published" ? "default" : "secondary"}>{course.status}</Badge>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-1 h-4 w-4" />
                          {course.students} students
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm font-medium">{course.instructor}</div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Course</DropdownMenuItem>
                            <DropdownMenuItem>Edit Course</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Archive Course</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list" className="space-y-4">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {courses.map((course) => (
                      <div key={course.id} className="flex items-center gap-4 p-4">
                        <div className="relative h-16 w-28 flex-shrink-0 overflow-hidden rounded-md">
                        <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="object-cover w-full h-full"
                      />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{course.title}</h3>
                            <Badge variant={course.status === "Published" ? "default" : "secondary"}>
                              {course.status}
                            </Badge>
                          </div>
                          <p className="line-clamp-1 text-sm text-muted-foreground">{course.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              {course.duration}
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-1 h-4 w-4" />
                              {course.students} students
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="mr-1 h-4 w-4" />
                              {course.instructor}
                            </div>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Course</DropdownMenuItem>
                            <DropdownMenuItem>Edit Course</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Archive Course</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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

const courses = [
  {
    id: "CRS001",
    title: "Web Development Bootcamp",
    description: "A comprehensive course covering HTML, CSS, JavaScript, and modern frameworks.",
    instructor: "James Wilson",
    duration: "12 weeks",
    students: 245,
    status: "Published",
    image: "/assets/courses/dsf.jpg",
  },
  {
    id: "CRS002",
    title: "Data Science Fundamentals",
    description: "Learn the basics of data analysis, visualization, and machine learning.",
    instructor: "Sarah Lee",
    duration: "8 weeks",
    students: 189,
    status: "Published",
    image: "/assets/courses/wdb.png",
  },
  {
    id: "CRS003",
    title: "Mobile App Development",
    description: "Build native mobile applications for iOS and Android platforms.",
    instructor: "Michael Miller",
    duration: "10 weeks",
    students: 156,
    status: "Published",
    image: "/assets/courses/mad.png",
  },
  {
    id: "CRS004",
    title: "UI/UX Design Principles",
    description: "Master the art of creating intuitive and engaging user interfaces.",
    instructor: "Emily Davis",
    duration: "6 weeks",
    students: 112,
    status: "Draft",
    image: "/assets/courses/dsf.jpg",
  },
  {
    id: "CRS005",
    title: "Python for Data Analysis",
    description: "Use Python libraries like Pandas and NumPy for data manipulation and analysis.",
    instructor: "Robert Brown",
    duration: "8 weeks",
    students: 203,
    status: "Published",
    image: "/assets/courses/dsf.jpg",
  },
  {
    id: "CRS006",
    title: "JavaScript Frameworks",
    description: "Deep dive into React, Vue, and Angular for modern web applications.",
    instructor: "James Wilson",
    duration: "9 weeks",
    students: 178,
    status: "Published",
    image: "/assets/courses/dsf.jpg",
  },
  {
    id: "CRS007",
    title: "Cloud Computing Essentials",
    description: "Learn about AWS, Azure, and Google Cloud platforms and services.",
    instructor: "Maria Garcia",
    duration: "7 weeks",
    students: 134,
    status: "Draft",
    image: "/assets/courses/dsf.jpg",
  },
  {
    id: "CRS008",
    title: "Cybersecurity Fundamentals",
    description: "Understand the basics of network security, encryption, and threat prevention.",
    instructor: "Alex Johnson",
    duration: "8 weeks",
    students: 167,
    status: "Published",
    image: "/assets/courses/dsf.jpg",
  },
];
