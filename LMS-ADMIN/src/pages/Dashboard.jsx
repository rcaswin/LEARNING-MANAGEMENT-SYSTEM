import { useState } from "react"
import {
    BarChart3,
    BookOpen,
    FileText,
    GraduationCap,
    MessageSquare,
    Users,
    Bell,
} from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PageHeader } from "@/components/PageHeader"
import { OverviewChart } from "@/components/OverviewChart"

const recentEnrollments = [
    { id: 1, student: "Alex Johnson", course: "Advanced JavaScript", status: "In Progress" },
    { id: 2, student: "Maria Garcia", course: "Python for Data Science", status: "Completed" },
    { id: 3, student: "James Wilson", course: "UI/UX Design Fundamentals", status: "Just Started" },
    { id: 4, student: "Sarah Lee", course: "Full Stack Development", status: "In Progress" },
]

const topCourses = [
    { id: 1, title: "Web Development Bootcamp", completion: 92 },
    { id: 2, title: "Data Science Fundamentals", completion: 88 },
    { id: 3, title: "Mobile App Development", completion: 85 },
    { id: 4, title: "Machine Learning Basics", completion: 78 },
    { id: 5, title: "UI/UX Design Principles", completion: 75 },
]

const recentActivities = [
    {
        icon: <Users className="h-4 w-4" />, title: "New User Registration",
        description: "5 new students registered", time: "2 hours ago"
    },
    {
        icon: <BookOpen className="h-4 w-4" />, title: "Course Updated",
        description: "Web Development Bootcamp content updated", time: "4 hours ago"
    },
    {
        icon: <FileText className="h-4 w-4" />, title: "New Assessment Created",
        description: "JavaScript Fundamentals Quiz added", time: "Yesterday"
    },
    {
        icon: <MessageSquare className="h-4 w-4" />, title: "New Feedback",
        description: "3 new course reviews submitted", time: "Yesterday"
    },
]

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState("overview")

    return (
            <div className="flex min-h-screen w-full">
                <main className="flex-1">
                    <PageHeader title="Admin Dashboard"/>
                    <div className="flex-1 space-y-4 p-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                            <div className="flex items-center gap-2">
                                <Button variant="outline">Download Report</Button>
                                <Button>Add New</Button>
                            </div>
                        </div>
                        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
                            <TabsList>
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                                <TabsTrigger value="activities">Recent Activities</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                                            <Users className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">2,853</div>
                                            <p className="text-xs text-muted-foreground">+12% from last month</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">145</div>
                                            <p className="text-xs text-muted-foreground">+4 new this week</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                                            <BarChart3 className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">78.5%</div>
                                            <Progress value={78.5} className="mt-2" />
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Instructor Count</CardTitle>
                                            <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">32</div>
                                            <p className="text-xs text-muted-foreground">+2 new instructors</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                    <Card className="col-span-4">
                                        <CardHeader>
                                            <CardTitle>Overview</CardTitle>
                                        </CardHeader>
                                        <CardContent className="pl-2">
                                        <OverviewChart />
                                        </CardContent>
                                    </Card>
                                    <Card className="col-span-3">
                                        <CardHeader>
                                            <CardTitle>Recent Enrollments</CardTitle>
                                            <CardDescription>Latest student enrollments</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {recentEnrollments.map((enrollment) => (
                                                    <div key={enrollment.id} className="flex items-center gap-4">
                                                        <Avatar className="h-9 w-9">
                                                            <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt={enrollment.student} />
                                                            <AvatarFallback>{enrollment.student.charAt(0)}</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-1">
                                                            <p className="text-sm font-medium leading-none">{enrollment.student}</p>
                                                            <p className="text-sm text-muted-foreground">{enrollment.course}</p>
                                                        </div>
                                                        <Badge variant={enrollment.status === "Completed" ? "default" : "outline"}>
                                                            {enrollment.status}
                                                        </Badge>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="analytics" className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    <Card className="col-span-2">
                                        <CardHeader>
                                            <CardTitle>Engagement Analytics</CardTitle>
                                            <CardDescription>Student engagement over the past 30 days</CardDescription>
                                        </CardHeader>
                                        <CardContent className="pl-2">
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Top Performing Courses</CardTitle>
                                            <CardDescription>Based on completion rates</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-4">
                                                {topCourses.map((course) => (
                                                    <div key={course.id} className="space-y-2">
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-sm font-medium leading-none">{course.title}</p>
                                                            <p className="text-sm font-medium">{course.completion}%</p>
                                                        </div>
                                                        <Progress value={course.completion} />
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="activities" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Recent Activities</CardTitle>
                                        <CardDescription>Latest actions across the platform</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {recentActivities.map((activity, index) => (
                                                <div key={index} className="flex items-start gap-4 rounded-lg border p-4">
                                                    <div className="rounded-full bg-muted p-2">{activity.icon}</div>
                                                    <div className="flex-1 space-y-1">
                                                        <p className="text-sm font-medium leading-none">{activity.title}</p>
                                                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                                                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </main>
            </div>
    )
}