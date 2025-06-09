// app/(dashboard)/page.tsx
"use client"; // This page uses client components like the dynamic chart

import dynamic from "next/dynamic";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import StatsCard from "@/components/dashboard/stats-card";
import RecentSales from "@/components/dashboard/recent-sales";
import { DataTable } from "@/components/dashboard/data-table/data-table";
import { paymentColumns } from "@/components/dashboard/data-table/columns";
import { Skeleton } from "@/components/ui/skeleton";
import { payments } from "@/lib/placeholder-data";
import { Payment } from "@/lib/types"; // <-- 1. IMPORT THE PAYMENT TYPE

const OverviewChart = dynamic(
  () => import("@/components/dashboard/overview-chart"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[350px] w-full" />,
  }
);

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
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
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
          <CardDescription>
            A list of recent payments from your customers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* ▼▼▼ THE FIX IS HERE ▼▼▼ */}
          <DataTable<Payment, unknown>
            columns={paymentColumns}
            data={payments}
          />
          {/* ▲▲▲ THE FIX IS HERE ▲▲▲ */}
        </CardContent>
      </Card>
    </div>
  );
}