"use client"

import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Person>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "first_name",
        header: "First Name",
    },
    {
        accessorKey: "last_name",
        header: "Last Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "date_of_birth",
        header: "Date of Birth",
    }
]