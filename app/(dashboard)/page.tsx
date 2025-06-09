import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DollarSign, Users, CreditCard, Activity } from "lucide-react"
import StatsCard from "@/components/dashboard/stats-card"
import OverviewChart from "@/components/dashboard/overview-chart"
import RecentSales from "@/components/dashboard/recent-sales"
import { DataTable } from "@/components/dashboard/data-table/data-table"
import { paymentColumns } from "@/components/dashboard/data-table/columns"


// Dummy data for the data table
const payments = [
  { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
  { id: "489e1d42", amount: 125, status: "processing", email: "example@gmail.com" },
  { id: "f62e4b81", amount: 75, status: "success", email: "test@test.com" },
  { id: "a1b2c3d4", amount: 200, status: "failed", email: "user@domain.com" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1% from last month"
          icon={DollarSign}
        />
        <StatsCard
          title="Subscriptions"
          value="+2350"
          change="+180.1% from last month"
          icon={Users}
        />
        <StatsCard
          title="Sales"
          value="+12,234"
          change="+19% from last month"
          icon={CreditCard}
        />
        <StatsCard
          title="Active Now"
          value="+573"
          change="+201 since last hour"
          icon={Activity}
        />
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
        <Card className="col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>
              You made 265 sales this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
          <CardDescription>A list of recent payments from your customers.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={paymentColumns} data={payments} />
        </CardContent>
      </Card>
    </div>
  )
}