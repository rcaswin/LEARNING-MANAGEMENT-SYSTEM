import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Save, Upload } from "lucide-react"
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

export default function AddInstructor() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            toast.success({
                title: "Instructor created successfully",
                description: "The new instructor has been added to the system.",
            })
            navigate("/instructors") 
        }, 1000)
    }

    return (
        <>
            <PageHeader title="Add New Instructor" />
            <div className="flex-1 space-y-4 p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" asChild>
                            <Link to="/instructors">
                                <ArrowLeft className="h-4 w-4" />
                                <span className="sr-only">Back</span>
                            </Link>
                        </Button>
                        <h2 className="text-2xl font-bold tracking-tight">Add New Instructor</h2>
                    </div>
                    <Button onClick={handleSubmit} disabled={loading}>
                        {loading ? (
                            "Creating..."
                        ) : (
                            <>
                                <Save className="mr-2 h-4 w-4" />
                                Create Instructor
                            </>
                        )}
                    </Button>
                </div>

                <Tabs defaultValue="details" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="details">Personal Details</TabsTrigger>
                        <TabsTrigger value="professional">Professional Info</TabsTrigger>
                        <TabsTrigger value="courses">Courses & Skills</TabsTrigger>
                        <TabsTrigger value="account">Account Settings</TabsTrigger>
                    </TabsList>

                    <TabsContent value="details" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Personal Information</CardTitle>
                                <CardDescription>Enter the instructor's personal information.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                                    <div className="flex flex-col items-center space-y-2">
                                        <Avatar className="h-24 w-24">
                                            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                                            <AvatarFallback>IN</AvatarFallback>
                                        </Avatar>
                                        <Button variant="outline" size="sm">
                                            <Upload className="mr-2 h-4 w-4" />
                                            Upload Photo
                                        </Button>
                                    </div>
                                    <div className="grid flex-1 gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name">First name</Label>
                                            <Input id="first-name" placeholder="Enter first name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="last-name">Last name</Label>
                                            <Input id="last-name" placeholder="Enter last name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="Enter email address" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone number</Label>
                                            <Input id="phone" placeholder="Enter phone number" />
                                        </div>
                                        <div className="space-y-2 sm:col-span-2">
                                            <Label htmlFor="address">Address</Label>
                                            <Textarea id="address" placeholder="Enter address" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="professional" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Professional Information</CardTitle>
                                <CardDescription>Enter the instructor's professional background and qualifications.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="department">Department</Label>
                                        <Select>
                                            <SelectTrigger id="department">
                                                <SelectValue placeholder="Select department" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="computer-science">Computer Science</SelectItem>
                                                <SelectItem value="data-science">Data Science</SelectItem>
                                                <SelectItem value="design">Design</SelectItem>
                                                <SelectItem value="business">Business</SelectItem>
                                                <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="position">Position</Label>
                                        <Select>
                                            <SelectTrigger id="position">
                                                <SelectValue placeholder="Select position" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="senior-instructor">Senior Instructor</SelectItem>
                                                <SelectItem value="instructor">Instructor</SelectItem>
                                                <SelectItem value="assistant-instructor">Assistant Instructor</SelectItem>
                                                <SelectItem value="guest-lecturer">Guest Lecturer</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2 sm:col-span-2">
                                        <Label htmlFor="bio">Professional Bio</Label>
                                        <Textarea id="bio" placeholder="Enter professional bio" className="min-h-[120px]" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="education">Highest Education</Label>
                                        <Select>
                                            <SelectTrigger id="education">
                                                <SelectValue placeholder="Select education" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="phd">Ph.D.</SelectItem>
                                                <SelectItem value="masters">Master's Degree</SelectItem>
                                                <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="experience">Years of Experience</Label>
                                        <Input id="experience" type="number" placeholder="Enter years of experience" />
                                    </div>
                                    <div className="space-y-2 sm:col-span-2">
                                        <Label htmlFor="certifications">Certifications</Label>
                                        <Textarea id="certifications" placeholder="Enter relevant certifications" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Employment Details</CardTitle>
                                <CardDescription>Enter the instructor's employment information.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="employment-type">Employment Type</Label>
                                        <Select>
                                            <SelectTrigger id="employment-type">
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="full-time">Full-time</SelectItem>
                                                <SelectItem value="part-time">Part-time</SelectItem>
                                                <SelectItem value="contract">Contract</SelectItem>
                                                <SelectItem value="freelance">Freelance</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="join-date">Join Date</Label>
                                        <Input id="join-date" type="date" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="salary">Salary/Rate</Label>
                                        <Input id="salary" placeholder="Enter salary or hourly rate" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="payment-method">Payment Method</Label>
                                        <Select>
                                            <SelectTrigger id="payment-method">
                                                <SelectValue placeholder="Select method" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                                                <SelectItem value="paypal">PayPal</SelectItem>
                                                <SelectItem value="check">Check</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="courses" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Courses & Expertise</CardTitle>
                                <CardDescription>Assign courses and define areas of expertise.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Assign Courses</Label>
                                    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="course-1" />
                                            <Label htmlFor="course-1">Web Development Bootcamp</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="course-2" />
                                            <Label htmlFor="course-2">Data Science Fundamentals</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="course-3" />
                                            <Label htmlFor="course-3">Mobile App Development</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="course-4" />
                                            <Label htmlFor="course-4">UI/UX Design Principles</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="course-5" />
                                            <Label htmlFor="course-5">JavaScript Frameworks</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="course-6" />
                                            <Label htmlFor="course-6">Python for Data Analysis</Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Skills & Expertise</Label>
                                    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-1" />
                                            <Label htmlFor="skill-1">JavaScript</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-2" />
                                            <Label htmlFor="skill-2">Python</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-3" />
                                            <Label htmlFor="skill-3">React</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-4" />
                                            <Label htmlFor="skill-4">Node.js</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-5" />
                                            <Label htmlFor="skill-5">Data Analysis</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-6" />
                                            <Label htmlFor="skill-6">UI/UX Design</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-7" />
                                            <Label htmlFor="skill-7">Mobile Development</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-8" />
                                            <Label htmlFor="skill-8">Database Management</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="skill-9" />
                                            <Label htmlFor="skill-9">Cloud Computing</Label>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="other-skills">Other Skills</Label>
                                    <Textarea id="other-skills" placeholder="Enter any additional skills or expertise" />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
              <CardHeader>
                <CardTitle>Teaching Preferences</CardTitle>
                <CardDescription>Set teaching preferences and availability.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Preferred Teaching Format</Label>
                  <RadioGroup defaultValue="hybrid" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online">Online Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="in-person" id="in-person" />
                      <Label htmlFor="in-person">In-Person Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hybrid" id="hybrid" />
                      <Label htmlFor="hybrid">Hybrid (Online & In-Person)</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Availability</Label>
                  <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="day-1" />
                      <Label htmlFor="day-1">Monday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="day-2" />
                      <Label htmlFor="day-2">Tuesday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="day-3" />
                      <Label htmlFor="day-3">Wednesday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="day-4" />
                      <Label htmlFor="day-4">Thursday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="day-5" />
                      <Label htmlFor="day-5">Friday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="day-6" />
                      <Label htmlFor="day-6">Saturday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="day-7" />
                      <Label htmlFor="day-7">Sunday</Label>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="max-courses">Maximum Courses</Label>
                    <Input id="max-courses" type="number" placeholder="Enter maximum number of courses" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-students">Maximum Students</Label>
                    <Input id="max-students" type="number" placeholder="Enter maximum number of students" />
                  </div>
                </div>
              </CardContent>
            </Card>
                    </TabsContent>

                    <TabsContent value="account" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Settings</CardTitle>
                                <CardDescription>Configure the instructor's account settings.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="username">Username</Label>
                                        <Input id="username" placeholder="Enter username" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Temporary Password</Label>
                                        <Input id="password" type="password" placeholder="Enter temporary password" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Account Status</Label>
                                    <RadioGroup defaultValue="active" className="flex gap-4">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="active" id="active" />
                                            <Label htmlFor="active">Active</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="pending" id="pending" />
                                            <Label htmlFor="pending">Pending</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="inactive" id="inactive" />
                                            <Label htmlFor="inactive">Inactive</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="space-y-2">
                                    <Label>Permissions</Label>
                                    <div className="grid gap-2 sm:grid-cols-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="perm-1" defaultChecked />
                                            <Label htmlFor="perm-1">Create Courses</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="perm-2" defaultChecked />
                                            <Label htmlFor="perm-2">Manage Own Courses</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="perm-3" defaultChecked />
                                            <Label htmlFor="perm-3">Grade Assessments</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="perm-4" defaultChecked />
                                            <Label htmlFor="perm-4">Communicate with Students</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="perm-5" />
                                            <Label htmlFor="perm-5">Manage Other Instructors' Courses</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="perm-6" />
                                            <Label htmlFor="perm-6">Access Analytics</Label>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <p className="text-sm text-muted-foreground">
                                    The instructor will receive an email with login instructions when their account is created.
                                </p>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}
