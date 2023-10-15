"use client";

import {
  Column,
  Table,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
  FilterFn,
  SortingFn,
  ColumnDef,
  flexRender,
  FilterFns,
  Row,
} from "@tanstack/react-table";

import {
  RankingInfo,
  rankItem,
  compareItems,
} from "@tanstack/match-sorter-utils";

// import { makeData, Person } from "./makeData";
import { useEffect, useMemo, useReducer, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/constants";
import { Nft, NftResponse } from "@/types";
import Image from "next/image";
import { MinterModal } from ".";
import Link from "next/link";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
  let dir = 0;

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]?.itemRank!,
      rowB.columnFiltersMeta[columnId]?.itemRank!
    );
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

const MintTable = () => {
  // const rerender = useReducer(() => ({}), {})[1];

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [data, setData] = useState<NftResponse>();
  // const [data, setData] = useState<Person[]>(() => makeData(50000));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [IsSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [tokenId, setTokenId] = useState(null);
  const [assetName, setAssetName] = useState<string | null>("");
  const [publicKeyLocal, setPublicKeyLocal] = useState<string | null>("");
  const [tokenLocal, setTokenLocal] = useState<string | null>(
    localStorage.getItem("token")
  );
  // const refreshData = () => setData((old) => makeData(50000));

  const columns = useMemo<ColumnDef<Nft>[]>(
    () => [
      {
        header: "Image",
        accessorKey: "image",
        cell: ({ row }: { row: Row<Nft> }) => {
          return (
            <span>
              {/* {row.original.image} */}
              <Image
                src={`${row.original.image}`}
                height={50}
                width={50}
                alt={`${row.original.name}`}
              />
            </span>
          );
        },
      },
      { header: "Name", accessorKey: "name" },
      // { header: "Id", accessorKey: "id" },
      {
        header: "Asset Id",
        accessorKey: "id",
        // Set the cell renderer for the "Progress" column
        cell: ({ row }: { row: Row<Nft> }) => {
          return (
            <span className="underline text-blue-600">
              <Link
                href={`https://solscan.io/token/${row.original.id}?cluster=devnet`}
                target="_blank"
              >
                {formatText(row.original.id)}
              </Link>
            </span>
          );
        },
      },
      { header: "Supply", accessorKey: "supply" },
      {
        header: "Mint",
        accessorKey: "mint",
        // Set the cell renderer for the "Progress" column
        cell: ({ row }: { row: Row<Nft> }) => {
          return (
            <span>
              <button
                onClick={() => {
                  handleMint(row.original.id);
                  setAssetName(row.original.name);
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Mint
              </button>
            </span>
          );
        },
      },
    ],
    []
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setTokenLocal(token);
      console.log(token);
    }
  }, []);

  useEffect(() => {
    const publicKey = localStorage.getItem("publicKey");
    if (publicKey) {
      setPublicKeyLocal(publicKey);
    }
  }, []);

  const fetchData = async () => {
    console.log(tokenLocal);
    try {
      const response = await axios.get(
        `${baseUrl}/asset/creator/${publicKeyLocal}`,
        {
          headers: {
            Authorization: `Bearer ${tokenLocal}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);
      console.log(response);

      setData(response.data);
    } catch (error) {
      console.error("Error Loading Mint data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (IsSuccessModalOpen) {
      console.log("sucess Modal is Open");

      setTimeout(() => {
        setIsSuccessModalOpen(false);
      }, 2000);
    }
  }, [IsSuccessModalOpen]);

  function formatText(text: string) {
    if (text.length <= 8) {
      return text; // No need for trimming if the text is already 8 characters or less
    }

    const start = text.slice(0, 4);
    const end = text.slice(-4);

    return `${start}...${end}`;
  }

  console.log(data);

  const handleMint = (id: any) => {
    setTokenId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTokenId(null);
  };

  // const successModal = () => {
  //   setIsSuccessModalOpen(false);
  //   setAssetName(null);
  // };

  // const handleSubmitModal = (amount: number, privateKey: string) => {
  //   // Handle the form submission here, e.g., send data to the server
  //   // You can access the selectedId here too
  //   console.log("Minting with ID:", tokenId);
  //   console.log("Amount:", amount);
  //   console.log("Private Key:", privateKey);
  // };

  const table = useReactTable({
    data: data || [],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  // useEffect(() => {
  //   if (table.getState().columnFilters[0]?.id === "fullName") {
  //     if (table.getState().sorting[0]?.id !== "fullName") {
  //       table.setSorting([{ id: "fullName", desc: false }]);
  //     }
  //   }
  // }, [table.getState().columnFilters[0]?.id]);

  return (
    <div className="p-2 w-full overflow-auto min-h-[33rem] bg-gray-300 rounded-xl">
      {/* <div>
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={value => setGlobalFilter(String(value))}
          className="p-2 font-lg shadow border border-block"
          placeholder="Search all columns..."
        />
      </div> */}
      <div className="h-2 w-full bg-gray-500 rounded-t-md" />
      <table className="w-full overflow-y-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="h-8">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="text-left"
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                        {/* {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null} */}
                      </>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table?.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="h-10 hover:bg-gray-400 rounded-md">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-2" />
      {data !== undefined && data?.length > 5 ? (
        <div className="flex items-center gap-2">
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <></>
      )}
      <MinterModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        tokenId={tokenId} // Pass the tokenId as a prop
        assetName={assetName}
        // onSubmit={handleSubmitModal}
      />

      {/* <div>{table.getPrePaginationRowModel().rows.length} Rows</div> */}
      {/* <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div> */}
      <div>
        {/* <button onClick={() => refreshData()}>Refresh Data</button> */}
      </div>
      {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
    </div>
  );
};

function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>;
  table: Table<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === "number"
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  return typeof firstValue === "number" ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[0] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ""
          }`}
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? "")}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? "")}
          value={(columnFilterValue as [number, number])?.[1] ?? ""}
          onChange={(value) =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ""
          }`}
          className="w-24 border shadow rounded"
        />
      </div>
      <div className="h-1" />
    </div>
  ) : (
    <>
      <datalist id={column.id + "list"}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? "") as string}
        onChange={(value) => column.setFilterValue(value)}
        placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
        className="w-36 border shadow rounded"
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
}

// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default MintTable;
