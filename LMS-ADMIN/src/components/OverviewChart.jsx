"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function OverviewChart() {
  const data = [
    {
      name: "Jan",
      students: 400,
      courses: 24,
    },
    {
      name: "Feb",
      students: 500,
      courses: 28,
    },
    {
      name: "Mar",
      students: 600,
      courses: 35,
    },
    {
      name: "Apr",
      students: 800,
      courses: 40,
    },
    {
      name: "May",
      students: 1000,
      courses: 48,
    },
    {
      name: "Jun",
      students: 1200,
      courses: 52,
    },
    {
      name: "Jul",
      students: 1500,
      courses: 58,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="students" fill="#8884d8" name="Students" />
        <Bar yAxisId="right" dataKey="courses" fill="#82ca9d" name="Courses" />
      </BarChart>
    </ResponsiveContainer>
  )
}
