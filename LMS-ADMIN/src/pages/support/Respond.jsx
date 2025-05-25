import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/PageHeader"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, User, Clock, PaperclipIcon, Send, ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function Respond() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Respond to Issue" />

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link to="/support/tickets">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Tickets
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Cannot access course materials</CardTitle>
                  <CardDescription>Ticket #1024 • Opened 2 hours ago</CardDescription>
                </div>
                <Badge variant="outline" className="border-blue-200 bg-blue-100 text-blue-800">
                  Open
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alex Johnson" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Alex Johnson</span>
                        <span className="ml-2 text-sm text-muted-foreground">Student</span>
                      </div>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <p className="text-sm">
                        Hello, I'm having trouble accessing the course materials for "Advanced JavaScript Patterns".
                        When I click on the course content, I get an error message saying "Access Denied". I've already
                        paid for this course and it shows up in my enrolled courses. Can you please help me resolve this
                        issue?
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <MessageSquare className="mr-1 h-3 w-3" />
                        Initial Request
                      </span>
                      <span className="flex items-center">
                        <User className="mr-1 h-3 w-3" />
                        via Web Portal
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Support Team" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">Support Team</span>
                        <span className="ml-2 text-sm text-muted-foreground">Automated Response</span>
                      </div>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <div className="rounded-md bg-muted p-4">
                      <p className="text-sm">
                        Thank you for contacting support. Your ticket has been received and will be addressed by our
                        team as soon as possible. Our current response time is approximately 4 hours.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <MessageSquare className="mr-1 h-3 w-3" />
                        Auto-Response
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        Sent Automatically
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="mb-4 font-medium">Your Response</h3>
                  <div className="space-y-4">
                    <Tabs defaultValue="reply">
                      <TabsList>
                        <TabsTrigger value="reply">Reply</TabsTrigger>
                        <TabsTrigger value="note">Internal Note</TabsTrigger>
                        <TabsTrigger value="template">Templates</TabsTrigger>
                      </TabsList>
                      <TabsContent value="reply" className="mt-4">
                        <Textarea
                          placeholder="Type your response here..."
                          className="min-h-[150px]"
                          defaultValue="Hi Alex, I'm looking into your issue with accessing the Advanced JavaScript Patterns course. Let me check your enrollment status and permissions. I'll get back to you shortly with more information."
                        />
                      </TabsContent>
                      <TabsContent value="note" className="mt-4">
                        <Textarea
                          placeholder="Add an internal note (not visible to the user)..."
                          className="min-h-[150px]"
                        />
                      </TabsContent>
                      <TabsContent value="template" className="mt-4">
                        <div className="space-y-4">
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a response template" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="access-issue">Course Access Issue</SelectItem>
                              <SelectItem value="billing-issue">Billing Problem</SelectItem>
                              <SelectItem value="technical-issue">Technical Support</SelectItem>
                              <SelectItem value="refund-request">Refund Request</SelectItem>
                            </SelectContent>
                          </Select>
                          <Textarea placeholder="Template content will appear here..." className="min-h-[150px]" />
                        </div>
                      </TabsContent>
                    </Tabs>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <PaperclipIcon className="h-4 w-4" />
                        Attach Files
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button variant="outline">Save Draft</Button>
                        <Button className="flex items-center gap-1">
                          <Send className="h-4 w-4" />
                          Send Response
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Ticket Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                  <Select defaultValue="open">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Priority</h3>
                  <Select defaultValue="high">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Category</h3>
                  <Select defaultValue="course-access">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="course-access">Course Access</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="content">Content</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Assigned To</h3>
                  <Select defaultValue="unassigned">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unassigned">Unassigned</SelectItem>
                      <SelectItem value="john">John Smith</SelectItem>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                      <SelectItem value="michael">Michael Lee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="pt-2">
                  <Button className="w-full">Update Ticket</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>User Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alex Johnson" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Alex Johnson</p>
                    <p className="text-sm text-muted-foreground">Student</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="text-sm">alex.johnson@example.com</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Joined</p>
                    <p className="text-sm">March 15, 2023</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Enrolled Courses</p>
                    <p className="text-sm">4 active courses</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Previous Tickets</p>
                    <p className="text-sm">2 (1 resolved, 1 closed)</p>
                  </div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/users/profile/alex-johnson">View Full Profile</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
