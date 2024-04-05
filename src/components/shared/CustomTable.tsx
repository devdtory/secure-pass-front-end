"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { timeAgo } from "@/utils/helpers";

const data: Items[] = [
  {
    id: "1",
    title: {
      name: "Netflix",
      iconUrl: "/assets/icons/get-started/step-1.svg",
    },
    link: "#",
    lastUsed: new Date(1617604485000),
  },
  {
    id: "2",
    title: {
      name: "Amazon Prime",
      iconUrl: "/assets/icons/get-started/step-2.svg",
    },
    link: "#",
    lastUsed: new Date(1710604485000),
  },
  {
    id: "3",
    title: {
      name: "Hulu",
      iconUrl: "/assets/icons/get-started/step-3.svg",
    },
    link: "#",
    lastUsed: new Date(1710602170000),
  },
  {
    id: "4",
    title: {
      name: "Disney+",
      iconUrl: "/assets/icons/get-started/step-4.svg",
    },
    link: "#",
    lastUsed: new Date(1712273189000),
  },
];

export type Items = {
  id: string;
  title: {
    name: string;
    iconUrl: string;
  };
  link: string;
  lastUsed: Date | number;
};

export const columns: ColumnDef<Items>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() ? "indeterminate" : false)
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <div className="flex justify-center items-center absolute left-[15px] top-0 h-full ">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      let title = row.getValue("title") as
        | { name: string; iconUrl: string }
        | undefined;
      return (
        <>
          <div className="capitalize text-[16px] leading-[24px] font-[500] flex items-center justify-start gap-x-3">
            <Image
              alt="title"
              src={title.iconUrl}
              className=""
              width={40}
              height={40}
            />
            {title?.name ?? ""}
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "lastUsed",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Used
          <Image
            alt="sort"
            src={"/assets/icons/arrow-down.svg"}
            className="ml-2 h-4 w-4"
            width={20}
            height={20}
          />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{timeAgo(row.getValue("lastUsed"))}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="flex item-center gap-x-5 justify-end group-hover:opacity-100 opacity-0 transition-colors duration-200 mr-10">
          <Link href="#">
            <Image
              alt="sort"
              src={"/assets/icons/link.svg"}
              className=""
              width={24}
              height={24}
            />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex justify-center items-center focus:outline-none">
                <Image
                  alt="sort"
                  src={"/assets/icons/kabab.svg"}
                  className=""
                  width={24}
                  height={24}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#252525] w-[180px] border-none rounded-[5px] text-[14px] text-[#EFEFEF]"
            >
              <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-4">
                Move to folder
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#555555]"/>
              <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-4">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-4 flex justify-between items-center w-full">
                Attach a file
                <Image
                  alt="sort"
                  src={"/assets/icons/premium.svg"}
                  className="ml-2 h-4 w-4"
                  width={20}
                  height={20}
                />
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-4 flex justify-between items-center w-full">
                Share
                <Image
                  alt="sort"
                  src={"/assets/icons/premium.svg"}
                  className="ml-2 h-4 w-4"
                  width={20}
                  height={20}
                />
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-4">
                Password History
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#3A3A3A]/50 px-4">
                Move to Trash
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="relative">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`${
                        header.id === "select"
                          ? "absolute left-[0px] top-0 h-full flex justify-center items-center"
                          : ""
                      }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-[16px] text-[#A0A0A0]">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <SecondaryButton
            minWidth="150px"
            title="Previous"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          ></SecondaryButton>
          <SecondaryButton
            minWidth="150px"
            title="Next"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
