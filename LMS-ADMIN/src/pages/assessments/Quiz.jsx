import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Plus, Save, Trash } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PageHeader } from "@/components/PageHeader"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

export default function Quiz() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([
    { id: 1, type: "multiple-choice" },
    { id: 2, type: "multiple-choice" },
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      toast.success({
        title: "Quiz created successfully",
        description: "The new MCQ quiz has been added to the system.",
      })
      navigate("/assessments")
    }, 1000)
  }

  const addQuestion = () => {
    setQuestions([...questions, { id: questions.length + 1, type: "multiple-choice" }])
  }

  const removeQuestion = (id) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((q) => q.id !== id))
    }
  }

  return (
    <>
      <PageHeader title="Add MCQ Quiz" />
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to="/assessments">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h2 className="text-2xl font-bold tracking-tight">Add MCQ Quiz</h2>
          </div>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? (
              "Creating..."
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Create Quiz
              </>
            )}
          </Button>
        </div>

        <Tabs defaultValue="details" className="space-y-4">
          <TabsList>
            <TabsTrigger value="details">Quiz Details</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the basic details for your MCQ quiz.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Quiz Title</Label>
                  <Input id="title" placeholder="Enter quiz title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the quiz and its purpose"
                    className="min-h-[150px]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Difficulty Level</Label>
                    <Select>
                      <SelectTrigger id="difficulty">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time-limit">Time Limit (minutes)</Label>
                    <Input id="time-limit" type="number" placeholder="Enter time limit" defaultValue="30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="points">Total Points</Label>
                    <Input id="points" type="number" placeholder="Enter total points" defaultValue="100" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passing-score">Passing Score (%)</Label>
                    <Input id="passing-score" type="number" placeholder="Enter passing score" defaultValue="70" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Associated Course</Label>
                  <Select>
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-dev">Web Development Bootcamp</SelectItem>
                      <SelectItem value="data-science">Data Science Fundamentals</SelectItem>
                      <SelectItem value="mobile-dev">Mobile App Development</SelectItem>
                      <SelectItem value="js-frameworks">JavaScript Frameworks</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="Enter tags separated by commas" />
                  <p className="text-xs text-muted-foreground">Example: javascript, react, frontend</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Instructions</CardTitle>
                <CardDescription>Provide instructions for students taking the quiz.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="instructions">Quiz Instructions</Label>
                  <Textarea
                    id="instructions"
                    placeholder="Enter instructions for students"
                    className="min-h-[150px]"
                    defaultValue="Read each question carefully and select the best answer. You can navigate between questions using the Next and Previous buttons. Make sure to submit your quiz before the time limit expires."
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="questions" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Quiz Questions</h3>
              <Button onClick={addQuestion}>
                <Plus className="mr-2 h-4 w-4" />
                Add Question
              </Button>
            </div>

            <div className="space-y-6">
              {questions.map((question, index) => (
                <Card key={question.id}>
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle>Question {index + 1}</CardTitle>
                      <CardDescription>Multiple choice question</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue={question.type}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Question type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                          <SelectItem value="multiple-answer">Multiple Answer</SelectItem>
                          <SelectItem value="true-false">True/False</SelectItem>
                          <SelectItem value="short-answer">Short Answer</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeQuestion(question.id)}
                        disabled={questions.length <= 1}
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`question-${question.id}`}>Question Text</Label>
                      <Textarea
                        id={`question-${question.id}`}
                        placeholder="Enter your question"
                        defaultValue={index === 0 ? "What is the correct way to declare a variable in JavaScript?" : ""}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Answer Options</Label>
                        <Button variant="outline" size="sm">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Option
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4].map((option) => (
                          <div key={option} className="flex items-center gap-2">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border">
                              {String.fromCharCode(64 + option)}
                            </div>
                            <Input
                              placeholder={`Option ${option}`}
                              defaultValue={
                                index === 0 && option === 1
                                  ? "var x = 10;"
                                  : index === 0 && option === 2
                                    ? "let x = 10;"
                                    : index === 0 && option === 3
                                      ? "const x = 10;"
                                      : index === 0 && option === 4
                                        ? "All of the above"
                                        : ""
                              }
                            />
                            <div className="flex items-center gap-2">
                              <Checkbox
                                id={`correct-${question.id}-${option}`}
                                defaultChecked={index === 0 && option === 4}
                              />
                              <Label htmlFor={`correct-${question.id}-${option}`} className="text-sm">
                                Correct Answer
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`explanation-${question.id}`}>Explanation (Optional)</Label>
                      <Textarea
                        id={`explanation-${question.id}`}
                        placeholder="Explain the correct answer"
                        defaultValue={
                          index === 0
                            ? "All three ways (var, let, and const) can be used to declare variables in JavaScript, but they have different scoping rules and behaviors."
                            : ""
                        }
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor={`points-${question.id}`}>Points</Label>
                        <Input id={`points-${question.id}`} type="number" defaultValue="10" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`difficulty-${question.id}`}>Difficulty</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger id={`difficulty-${question.id}`}>
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <Button variant="outline" onClick={addQuestion}>
                <Plus className="mr-2 h-4 w-4" />
                Add Another Question
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Quiz Settings</CardTitle>
                <CardDescription>Configure settings for your MCQ quiz.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Visibility</Label>
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
                      <RadioGroupItem value="scheduled" id="scheduled" />
                      <Label htmlFor="scheduled">Scheduled (publish at a specific time)</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="datetime-local" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input id="end-date" type="datetime-local" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Quiz Behavior</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="shuffle">Shuffle Questions</Label>
                        <p className="text-sm text-muted-foreground">
                          Randomize the order of questions for each student
                        </p>
                      </div>
                      <Switch id="shuffle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="shuffle-options">Shuffle Answer Options</Label>
                        <p className="text-sm text-muted-foreground">
                          Randomize the order of answer options for each question
                        </p>
                      </div>
                      <Switch id="shuffle-options" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="one-at-time">One Question at a Time</Label>
                        <p className="text-sm text-muted-foreground">Show only one question at a time to students</p>
                      </div>
                      <Switch id="one-at-time" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="immediate-feedback">Immediate Feedback</Label>
                        <p className="text-sm text-muted-foreground">
                          Show correct/incorrect feedback after each question
                        </p>
                      </div>
                      <Switch id="immediate-feedback" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Attempts</Label>
                  <RadioGroup defaultValue="single" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single" id="single" />
                      <Label htmlFor="single">Single Attempt</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="multiple" id="multiple" />
                      <Label htmlFor="multiple">Multiple Attempts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unlimited" id="unlimited" />
                      <Label htmlFor="unlimited">Unlimited Attempts</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-attempts">Maximum Attempts (if multiple)</Label>
                  <Input id="max-attempts" type="number" defaultValue="3" />
                </div>
                <div className="space-y-2">
                  <Label>Results Display</Label>
                  <RadioGroup defaultValue="after-submission" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="after-submission" id="after-submission" />
                      <Label htmlFor="after-submission">After Submission</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="after-due-date" id="after-due-date" />
                      <Label htmlFor="after-due-date">After Due Date</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="never" id="never" />
                      <Label htmlFor="never">Never (Only Show Score)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  You can change these settings at any time after creating the quiz.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
