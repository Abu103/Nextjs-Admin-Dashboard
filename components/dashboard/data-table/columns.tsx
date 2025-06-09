"use client"

import { ColumnDef, Row } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { DataTableRowActions } from "./data-table-row-actions"
import { Payment } from "@/lib/types"

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: { row: Row<Payment> }) => {
      const status = row.getValue("status") as string;
      const variantMap: Record<string, BadgeVariant> = {
        pending: "secondary",
        processing: "outline",
        success: "default",
        failed: "destructive",
      };
      const variant = variantMap[status] ?? "default";

      return <Badge variant={variant}>{status}</Badge>;
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
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }: { row: Row<Payment> }) => <DataTableRowActions row={row} />,
  },
];