import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, User, MoreHorizontal } from "lucide-react"
import { Link } from "react-router-dom"

export default function Queries() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="User Queries" />

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Queries</CardTitle>
            <CardDescription>All user queries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unresolved Queries</CardTitle>
            <CardDescription>Queries awaiting response</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">-12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
            <CardDescription>Time to first response</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2 hours</div>
            <p className="text-xs text-muted-foreground">-0.8 hours from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Common Query Topics</CardTitle>
            <CardDescription>Most frequent issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline">Course Access</Badge>
              <Badge variant="outline">Billing</Badge>
              <Badge variant="outline">Technical</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search queries..." className="pl-8" />
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Queries</TabsTrigger>
          <TabsTrigger value="unresolved">Unresolved</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
          <TabsTrigger value="flagged">Flagged</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-3 text-sm font-medium">
                  <div className="col-span-1">#</div>
                  <div className="col-span-4">Query</div>
                  <div className="col-span-2">User</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                {userQueries.map((query) => (
                  <div
                    key={query.id}
                    className="grid grid-cols-12 items-center border-b px-4 py-3 text-sm last:border-0"
                  >
                    <div className="col-span-1">#{query.id}</div>
                    <div className="col-span-4">
                      <Link href={`/support/queries/${query.id}`} className="font-medium hover:underline">
                        {query.subject}
                      </Link>
                      <p className="text-xs text-muted-foreground">{query.preview}</p>
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted">
                        <User className="h-4 w-4" />
                      </div>
                      <span>{query.user}</span>
                    </div>
                    <div className="col-span-2">{query.category}</div>
                    <div className="col-span-2">
                      <Badge
                        variant="outline"
                        className={`${
                          query.status === "Unresolved"
                            ? "border-yellow-200 bg-yellow-100 text-yellow-800"
                            : query.status === "Resolved"
                              ? "border-green-200 bg-green-100 text-green-800"
                              : query.status === "Flagged"
                                ? "border-red-200 bg-red-100 text-red-800"
                                : "border-blue-200 bg-blue-100 text-blue-800"
                        }`}
                      >
                        {query.status}
                      </Badge>
                    </div>
                    <div className="col-span-1">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="unresolved" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-3 text-sm font-medium">
                  <div className="col-span-1">#</div>
                  <div className="col-span-4">Query</div>
                  <div className="col-span-2">User</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                {userQueries
                  .filter((query) => query.status === "Unresolved")
                  .map((query) => (
                    <div
                      key={query.id}
                      className="grid grid-cols-12 items-center border-b px-4 py-3 text-sm last:border-0"
                    >
                      <div className="col-span-1">#{query.id}</div>
                      <div className="col-span-4">
                        <Link href={`/support/queries/${query.id}`} className="font-medium hover:underline">
                          {query.subject}
                        </Link>
                        <p className="text-xs text-muted-foreground">{query.preview}</p>
                      </div>
                      <div className="col-span-2 flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted">
                          <User className="h-4 w-4" />
                        </div>
                        <span>{query.user}</span>
                      </div>
                      <div className="col-span-2">{query.category}</div>
                      <div className="col-span-2">
                        <Badge variant="outline" className="border-yellow-200 bg-yellow-100 text-yellow-800">
                          {query.status}
                        </Badge>
                      </div>
                      <div className="col-span-1">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="resolved" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-3 text-sm font-medium">
                  <div className="col-span-1">#</div>
                  <div className="col-span-4">Query</div>
                  <div className="col-span-2">User</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                {userQueries
                  .filter((query) => query.status === "Resolved")
                  .map((query) => (
                    <div
                      key={query.id}
                      className="grid grid-cols-12 items-center border-b px-4 py-3 text-sm last:border-0"
                    >
                      <div className="col-span-1">#{query.id}</div>
                      <div className="col-span-4">
                        <Link href={`/support/queries/${query.id}`} className="font-medium hover:underline">
                          {query.subject}
                        </Link>
                        <p className="text-xs text-muted-foreground">{query.preview}</p>
                      </div>
                      <div className="col-span-2 flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted">
                          <User className="h-4 w-4" />
                        </div>
                        <span>{query.user}</span>
                      </div>
                      <div className="col-span-2">{query.category}</div>
                      <div className="col-span-2">
                        <Badge variant="outline" className="border-green-200 bg-green-100 text-green-800">
                          {query.status}
                        </Badge>
                      </div>
                      <div className="col-span-1">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="flagged" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-3 text-sm font-medium">
                  <div className="col-span-1">#</div>
                  <div className="col-span-4">Query</div>
                  <div className="col-span-2">User</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>
                {userQueries
                  .filter((query) => query.status === "Flagged")
                  .map((query) => (
                    <div
                      key={query.id}
                      className="grid grid-cols-12 items-center border-b px-4 py-3 text-sm last:border-0"
                    >
                      <div className="col-span-1">#{query.id}</div>
                      <div className="col-span-4">
                        <Link href={`/support/queries/${query.id}`} className="font-medium hover:underline">
                          {query.subject}
                        </Link>
                        <p className="text-xs text-muted-foreground">{query.preview}</p>
                      </div>
                      <div className="col-span-2 flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted">
                          <User className="h-4 w-4" />
                        </div>
                        <span>{query.user}</span>
                      </div>
                      <div className="col-span-2">{query.category}</div>
                      <div className="col-span-2">
                        <Badge variant="outline" className="border-red-200 bg-red-100 text-red-800">
                          {query.status}
                        </Badge>
                      </div>
                      <div className="col-span-1">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
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
  )
}

const userQueries = [
  {
    id: "2048",
    subject: "How do I download course materials?",
    preview: "I can't find the download button for the course materials...",
    user: "Alex Johnson",
    category: "Course Access",
    status: "Unresolved",
    date: "2 hours ago",
  },
  {
    id: "2047",
    subject: "Certificate name is incorrect",
    preview: "My name is misspelled on my course completion certificate...",
    user: "Sarah Williams",
    category: "Certificates",
    status: "In Progress",
    date: "5 hours ago",
  },
  {
    id: "2046",
    subject: "Request for course extension",
    preview: "Due to personal circumstances, I need an extension for...",
    user: "Michael Chen",
    category: "Course Access",
    status: "Resolved",
    date: "Yesterday",
  },
  {
    id: "2045",
    subject: "Video quality issues on mobile",
    preview: "When I try to watch lectures on my phone, the video quality...",
    user: "Emily Rodriguez",
    category: "Technical",
    status: "Unresolved",
    date: "Yesterday",
  },
  {
    id: "2044",
    subject: "Inappropriate forum comment",
    preview: "A user posted inappropriate content in the discussion forum...",
    user: "David Kim",
    category: "Community",
    status: "Flagged",
    date: "2 days ago",
  },
  {
    id: "2043",
    subject: "Missing quiz in Module 3",
    preview: "The quiz for Module 3 is mentioned in the syllabus but...",
    user: "Jessica Taylor",
    category: "Course Content",
    status: "Resolved",
    date: "3 days ago",
  },
  {
    id: "2042",
    subject: "Refund request for duplicate purchase",
    preview: "I accidentally purchased the same course twice and need...",
    user: "Robert Johnson",
    category: "Billing",
    status: "Unresolved",
    date: "4 days ago",
  },
  {
    id: "2041",
    subject: "Cannot access course after payment",
    preview: "I completed the payment but the course is still locked...",
    user: "Lisa Anderson",
    category: "Course Access",
    status: "Resolved",
    date: "5 days ago",
  },
]
