import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, Clock, Plus, Save, Upload } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PageHeader } from "@/components/PageHeader"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AddCourse() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      toast.success({
        title: "Course created successfully",
        description: "The new course has been added to the system.",
      })
      navigate("/courses")
    }, 1000)
  }

  return (
    <>
      <PageHeader title="Add New Course" />
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/courses">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h2 className="text-2xl font-bold tracking-tight">Add New Course</h2>
          </div>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? (
              "Creating..."
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Create Course
              </>
            )}
          </Button>
        </div>

        <Tabs defaultValue="details" className="space-y-4">
          <TabsList>
            <TabsTrigger value="details">Course Details</TabsTrigger>
            <TabsTrigger value="content">Content & Structure</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the basic details for your new course.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative aspect-video h-40 w-64 overflow-hidden rounded-lg border bg-muted">
                      <div className="flex h-full w-full items-center justify-center">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Cover Image
                    </Button>
                  </div>
                  <div className="grid flex-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="title">Course Title</Label>
                      <Input id="title" placeholder="Enter course title" />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="description">Short Description</Label>
                      <Textarea id="description" placeholder="Enter a brief description of the course" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-dev">Web Development</SelectItem>
                          <SelectItem value="data-science">Data Science</SelectItem>
                          <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="level">Difficulty Level</Label>
                      <Select>
                        <SelectTrigger id="level">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="all-levels">All Levels</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
                <CardDescription>Provide more detailed information about the course.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full-description">Full Description</Label>
                  <Textarea
                    id="full-description"
                    placeholder="Enter a detailed description of the course"
                    className="min-h-[150px]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <div className="flex items-center gap-2">
                      <Input id="duration" type="number" placeholder="Enter duration" />
                      <Select defaultValue="weeks">
                        <SelectTrigger className="w-[110px]">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hours">Hours</SelectItem>
                          <SelectItem value="days">Days</SelectItem>
                          <SelectItem value="weeks">Weeks</SelectItem>
                          <SelectItem value="months">Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <div className="flex items-center gap-2">
                      <Input id="start-date" type="date" />
                      <Button variant="outline" size="icon">
                        <Calendar className="h-4 w-4" />
                        <span className="sr-only">Calendar</span>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="estimated-hours">Estimated Hours</Label>
                    <div className="flex items-center gap-2">
                      <Input id="estimated-hours" type="number" placeholder="Enter hours" />
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-students">Maximum Students</Label>
                    <Input id="max-students" type="number" placeholder="Enter maximum students (optional)" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Prerequisites</Label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="prereq-1" />
                      <Label htmlFor="prereq-1">Basic Programming Knowledge</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="prereq-2" />
                      <Label htmlFor="prereq-2">HTML & CSS Fundamentals</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="prereq-3" />
                      <Label htmlFor="prereq-3">JavaScript Basics</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="prereq-4" />
                      <Label htmlFor="prereq-4">Database Concepts</Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Tags</Label>
                  <Input placeholder="Enter tags separated by commas" />
                  <p className="text-xs text-muted-foreground">Example: javascript, web development, frontend</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Structure</CardTitle>
                <CardDescription>Define the structure and content of your course.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Modules</Label>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Module
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((moduleNum) => (
                      <div key={moduleNum} className="rounded-lg border p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <Input
                            className="max-w-sm"
                            placeholder={`Module ${moduleNum} Title`}
                            defaultValue={moduleNum === 1 ? "Introduction to the Course" : ""}
                          />
                          <Button variant="ghost" size="sm">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Lesson
                          </Button>
                        </div>
                        <div className="space-y-2">
                          {moduleNum === 1 && (
                            <>
                              <div className="flex items-center gap-2 rounded-md border p-2">
                                <div className="flex-1">
                                  <Input placeholder="Lesson Title" defaultValue="Course Overview" />
                                </div>
                                <Select defaultValue="video">
                                  <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="video">Video</SelectItem>
                                    <SelectItem value="reading">Reading</SelectItem>
                                    <SelectItem value="quiz">Quiz</SelectItem>
                                    <SelectItem value="assignment">Assignment</SelectItem>
                                  </SelectContent>
                                </Select>
                                <Button variant="ghost" size="icon">
                                  <Upload className="h-4 w-4" />
                                  <span className="sr-only">Upload</span>
                                </Button>
                              </div>
                              <div className="flex items-center gap-2 rounded-md border p-2">
                                <div className="flex-1">
                                  <Input placeholder="Lesson Title" defaultValue="Setting Up Your Environment" />
                                </div>
                                <Select defaultValue="video">
                                  <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="video">Video</SelectItem>
                                    <SelectItem value="reading">Reading</SelectItem>
                                    <SelectItem value="quiz">Quiz</SelectItem>
                                    <SelectItem value="assignment">Assignment</SelectItem>
                                  </SelectContent>
                                </Select>
                                <Button variant="ghost" size="icon">
                                  <Upload className="h-4 w-4" />
                                  <span className="sr-only">Upload</span>
                                </Button>
                              </div>
                            </>
                          )}
                          {moduleNum === 2 && (
                            <div className="flex items-center gap-2 rounded-md border p-2">
                              <div className="flex-1">
                                <Input placeholder="Lesson Title" />
                              </div>
                              <Select defaultValue="video">
                                <SelectTrigger className="w-[120px]">
                                  <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="video">Video</SelectItem>
                                  <SelectItem value="reading">Reading</SelectItem>
                                  <SelectItem value="quiz">Quiz</SelectItem>
                                  <SelectItem value="assignment">Assignment</SelectItem>
                                </SelectContent>
                              </Select>
                              <Button variant="ghost" size="icon">
                                <Upload className="h-4 w-4" />
                                <span className="sr-only">Upload</span>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Learning Outcomes</CardTitle>
                <CardDescription>Define what students will learn from this course.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Outcomes</Label>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Outcome
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Enter learning outcome"
                        defaultValue="Understand the fundamentals of the subject"
                      />
                      <Button variant="ghost" size="icon">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Add</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Enter learning outcome"
                        defaultValue="Build practical projects using the skills learned"
                      />
                      <Button variant="ghost" size="icon">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Add</span>
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Enter learning outcome"
                        defaultValue="Apply advanced techniques to solve real-world problems"
                      />
                      <Button variant="ghost" size="icon">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Add</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Assign Instructors</CardTitle>
                <CardDescription>Select instructors for this course.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Primary Instructor</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select primary instructor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="james">James Wilson</SelectItem>
                      <SelectItem value="sarah">Sarah Lee</SelectItem>
                      <SelectItem value="michael">Michael Miller</SelectItem>
                      <SelectItem value="emily">Emily Davis</SelectItem>
                      <SelectItem value="robert">Robert Brown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Additional Instructors</Label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="inst-1" />
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="James Wilson" />
                          <AvatarFallback>JW</AvatarFallback>
                        </Avatar>
                        <Label htmlFor="inst-1">James Wilson</Label>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="inst-2" />
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Sarah Lee" />
                          <AvatarFallback>SL</AvatarFallback>
                        </Avatar>
                        <Label htmlFor="inst-2">Sarah Lee</Label>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="inst-3" />
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Michael Miller" />
                          <AvatarFallback>MM</AvatarFallback>
                        </Avatar>
                        <Label htmlFor="inst-3">Michael Miller</Label>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="inst-4" />
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Emily Davis" />
                          <AvatarFallback>ED</AvatarFallback>
                        </Avatar>
                        <Label htmlFor="inst-4">Emily Davis</Label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Instructor Permissions</Label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-1" defaultChecked />
                      <Label htmlFor="perm-1">Edit Course Content</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-2" defaultChecked />
                      <Label htmlFor="perm-2">Grade Assessments</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-3" defaultChecked />
                      <Label htmlFor="perm-3">Manage Students</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="perm-4" defaultChecked />
                      <Label htmlFor="perm-4">View Analytics</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Settings</CardTitle>
                <CardDescription>Configure general settings for your course.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Course Visibility</Label>
                  <RadioGroup defaultValue="draft" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="draft" id="draft" />
                      <Label htmlFor="draft">Draft (not visible to students)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="published" id="published" />
                      <Label htmlFor="published">Published (visible to all students)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="restricted" id="restricted" />
                      <Label htmlFor="restricted">Restricted (visible to enrolled students only)</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Enrollment Options</Label>
                  <RadioGroup defaultValue="open" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="open" id="open" />
                      <Label htmlFor="open">Open Enrollment (students can enroll anytime)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="scheduled" id="scheduled" />
                      <Label htmlFor="scheduled">Scheduled Enrollment (specific enrollment period)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="invite" id="invite" />
                      <Label htmlFor="invite">Invite Only (manual enrollment by admin)</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="certificate">Certificate</Label>
                    <Select>
                      <SelectTrigger id="certificate">
                        <SelectValue placeholder="Select certificate type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No Certificate</SelectItem>
                        <SelectItem value="completion">Certificate of Completion</SelectItem>
                        <SelectItem value="achievement">Certificate of Achievement</SelectItem>
                        <SelectItem value="custom">Custom Certificate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="zh">Chinese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Additional Settings</Label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="setting-1" defaultChecked />
                      <Label htmlFor="setting-1">Enable Discussion Forum</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="setting-2" defaultChecked />
                      <Label htmlFor="setting-2">Enable Progress Tracking</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="setting-3" defaultChecked />
                      <Label htmlFor="setting-3">Allow Student Feedback</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="setting-4" />
                      <Label htmlFor="setting-4">Enable Peer Reviews</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  You can change these settings at any time after creating the course.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
