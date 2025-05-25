import {
  BookOpen,
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  PieChart,
  Settings,
  Users,
  Wrench,
} from "lucide-react"

import { Link } from "react-router-dom"

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from "@/components/ui/collapsible"

import { useSidebar } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"

export function AppSidebar() {

  const { setOpen } = useSidebar()
  const isMobile = useIsMobile()

  const isActive = (path) => {
    return window.location.pathname === path
  }

  const isActiveGroup = (paths) => {
    return paths.some((path) => window.location.pathname.startsWith(path))
  }

  const handleLinkClick = () => {
    if (isMobile) {
      setOpen(false)
    }
  }
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex h-14 items-center border-b px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <GraduationCap className="h-6 w-6" />
            <span>Skill Wave</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={isActive("/")}>
                <Link to="/" onClick={handleLinkClick}>
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Collapsible className="w-full" defaultOpen={isActiveGroup(["/users"])}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>User Management</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/users")}>
                        <Link to="/users" onClick={handleLinkClick}>All Users</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/users/add")}>
                        <Link to="/users/add" onClick={handleLinkClick}>Add User</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Collapsible className="w-full" defaultOpen={isActiveGroup(["/instructors"])}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent cursor-pointer">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Instructor Management</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/instructors")}>
                        <Link to="/instructors" onClick={handleLinkClick}>All Instructors</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/instructors/add")}>
                        <Link to="/instructors/add" onClick={handleLinkClick}>Add Instructor</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/instructors/performance")}>
                        <Link to="/instructors/performance" onClick={handleLinkClick}>Performance Overview</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Collapsible className="w-full" defaultOpen={isActiveGroup(["/courses"])}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent cursor-pointer">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Course Management</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/courses")}>
                        <Link to="/courses" onClick={handleLinkClick}>All Courses</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/courses/add")}>
                        <Link to="/courses/add" onClick={handleLinkClick}>Add Course</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/courses/assign")}>
                        <Link to="/courses/assign" onClick={handleLinkClick}>Assign Instructors</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Collapsible className="w-full" defaultOpen={isActiveGroup(["/assessments"])}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Assessment & Tests</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/assessments")}>
                        <Link to="/assessments" onClick={handleLinkClick}>All Assessments</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/assessments/quiz")}>
                        <Link to="/assessments/quiz" onClick={handleLinkClick}>Add MCQ Quiz</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/assessments/submissions")}>
                        <Link to="/assessments/submissions" onClick={handleLinkClick}>Submissions & Scores</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            {/* <SidebarMenuItem>
              <Collapsible className="w-full" defaultOpen={isActiveGroup(["/reports"])}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent">
                  <div className="flex items-center gap-2">
                    <PieChart className="h-4 w-4" />
                    <span>Reports & Analytics</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/reports/students")}>
                        <Link to="/reports/students">Student Progress</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/reports/completion")}>
                        <Link to="/reports/completion">Course Completion</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/reports/assessments")}>
                        <Link to="/reports/assessments">Assessment Analytics</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/reports/instructors")}>
                        <Link to="/reports/instructors">Instructor Metrics</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/reports/engagement")}>
                        <Link to="/reports/engagement">Engagement Trends</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Collapsible className="w-full" defaultOpen={isActiveGroup(["/feedback"])}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Feedback & Reviews</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/feedback/students")}>
                        <Link to="/feedback/students">Student Feedback</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/feedback/courses")}>
                        <Link to="/feedback/courses">Course Reviews</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/feedback/issues")}>
                        <Link to="/feedback/issues">Common Issues</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Collapsible className="w-full" defaultOpen={isActiveGroup(["/settings"])}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>System Settings</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/settings/branding")}>
                        <Link to="/settings/branding">Branding & Theme</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/settings/maintenance")}>
                        <Link to="/settings/maintenance">Maintenance Mode</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <Collapsible className="w-full" defaultOpen={isActiveGroup(["/support"])}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md p-2 hover:bg-sidebar-accent">
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    <span>Support & Queries</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/support/queries")}>
                        <Link to="/support/queries">View User Queries</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/support/tickets")}>
                        <Link to="/support/tickets">Support Tickets</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={isActive("/support/respond")}>
                        <Link to="/support/respond">Respond to Issues</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem> */}

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
