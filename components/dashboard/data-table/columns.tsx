// components/dashboard/data-table/columns.tsx
"use client"

import { ColumnDef, Row } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { DataTableRowActions } from "./data-table-row-actions" // <-- THE CORRECTED IMPORT

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: Row<Payment> }) => {
      const status = row.getValue("status") as string
      const variant = {
        pending: "secondary",
        processing: "outline",
        success: "default",
        failed: "destructive",
      }[status] ?? "default"

      return <Badge variant={variant as any}>{status}</Badge>
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }: { row: Row<Payment> }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }: { row: Row<Payment> }) => <DataTableRowActions row={row} />,
  },
]