import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { ArrowLeft, Save } from "lucide-react"
// import axios from "axios"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardDescription, CardFooter,
  CardHeader, CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PageHeader } from "@/components/PageHeader"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function AddUser() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    role: "student",
    username: "",
    password: "",
    confirmPassword: "",
    status: "active",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match", {
        description: "Make sure both password fields are the same.",
      })
      setLoading(false)
      return
    }

    const { confirmPassword, ...submitData } = formData

    try {
      await axios.post("http://localhost:8080/users/add", submitData)
      toast.success("User created successfully", {
        description: "The new user has been added to the system.",
      })
      navigate("/users")
    } catch (error) {
      toast.error("Failed to create user", {
        description: error.message || "Something went wrong",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader title="Add New User" />
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/users">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h2 className="text-2xl font-bold tracking-tight">Add New User</h2>
          </div>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Creating..." : <>
              <Save className="mr-2 h-4 w-4" />
              Create User
            </>}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Enter user info</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Education</Label>
                <Input id="education" value={formData.education} onChange={handleChange} placeholder="Enter education" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Account login and status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" value={formData.username} onChange={handleChange} placeholder="Enter username" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
              </div>
            </div>
            <div className="space-y-6">
              <Label>Account Status</Label>
              <RadioGroup defaultValue={formData.status} onValueChange={(val) => handleSelectChange("status", val)} className="flex gap-4">
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
          </CardContent>
        </Card>
      </div>
    </>
  )
}
