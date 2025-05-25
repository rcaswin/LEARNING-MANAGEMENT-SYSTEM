import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, MoreHorizontal } from "lucide-react"
import { Link } from "react-router-dom"

export default function Tickets() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Support Tickets" />

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
            <CardDescription>Active support tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
            <CardDescription>Time to first response</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 hours</div>
            <p className="text-xs text-muted-foreground">-15% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <CardDescription>Tickets resolved successfully</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">+2% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction Score</CardTitle>
            <CardDescription>Based on user feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5</div>
            <p className="text-xs text-muted-foreground">+0.2 from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search tickets..." className="pl-8" />
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
        <Button size="sm">New Ticket</Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Tickets</TabsTrigger>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 border-b bg-muted/50 px-4 py-3 text-sm font-medium">
                  <div className="col-span-1">#</div>
                  <div className="col-span-3">Subject</div>
                  <div className="col-span-2">Requester</div>
                  <div className="col-span-2">Category</div>
                  <div className="col-span-2">Status</div>
                  <div className="col-span-1">Priority</div>
                  <div className="col-span-1">Actions</div>
                </div>
                {supportTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="grid grid-cols-12 items-center border-b px-4 py-3 text-sm last:border-0"
                  >
                    <div className="col-span-1">#{ticket.id}</div>
                    <div className="col-span-3">
                      <Link href={`/support/tickets/${ticket.id}`} className="font-medium hover:underline">
                        {ticket.subject}
                      </Link>
                    </div>
                    <div className="col-span-2">{ticket.requester}</div>
                    <div className="col-span-2">{ticket.category}</div>
                    <div className="col-span-2">
                      <Badge
                        variant="outline"
                        className={`${
                          ticket.status === "Open"
                            ? "border-blue-200 bg-blue-100 text-blue-800"
                            : ticket.status === "Pending"
                              ? "border-yellow-200 bg-yellow-100 text-yellow-800"
                              : ticket.status === "Resolved"
                                ? "border-green-200 bg-green-100 text-green-800"
                                : "border-red-200 bg-red-100 text-red-800"
                        }`}
                      >
                        {ticket.status}
                      </Badge>
                    </div>
                    <div className="col-span-1">
                      <Badge
                        variant="outline"
                        className={`${
                          ticket.priority === "High"
                            ? "border-red-200 bg-red-100 text-red-800"
                            : ticket.priority === "Medium"
                              ? "border-yellow-200 bg-yellow-100 text-yellow-800"
                              : "border-green-200 bg-green-100 text-green-800"
                        }`}
                      >
                        {ticket.priority}
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

const supportTickets = [
  {
    id: "1024",
    subject: "Cannot access course materials",
    requester: "Alex Johnson",
    category: "Course Access",
    status: "Open",
    priority: "High",
    created: "2 hours ago",
  },
  {
    id: "1023",
    subject: "Payment failed but account charged",
    requester: "Sarah Williams",
    category: "Billing",
    status: "Pending",
    priority: "High",
    created: "5 hours ago",
  },
  {
    id: "1022",
    subject: "Certificate not generating after completion",
    requester: "Michael Chen",
    category: "Certificates",
    status: "Open",
    priority: "Medium",
    created: "Yesterday",
  },
  {
    id: "1021",
    subject: "Video playback issues on mobile",
    requester: "Emily Rodriguez",
    category: "Technical",
    status: "Pending",
    priority: "Medium",
    created: "Yesterday",
  },
  {
    id: "1020",
    subject: "Request for course refund",
    requester: "David Kim",
    category: "Billing",
    status: "Open",
    priority: "Medium",
    created: "2 days ago",
  },
  {
    id: "1019",
    subject: "Quiz answers marked incorrectly",
    requester: "Jessica Taylor",
    category: "Assessments",
    status: "Resolved",
    priority: "Medium",
    created: "3 days ago",
  },
  {
    id: "1018",
    subject: "Need extension for assignment deadline",
    requester: "Robert Johnson",
    category: "Courses",
    status: "Resolved",
    priority: "Low",
    created: "4 days ago",
  },
  {
    id: "1017",
    subject: "Login issues after password reset",
    requester: "Lisa Anderson",
    category: "Account",
    status: "Resolved",
    priority: "High",
    created: "5 days ago",
  },
]
