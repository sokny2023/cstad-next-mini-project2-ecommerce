"use client";
import LoadingComponent from "@/app/Loading";
import React from "react";
import router from "next/router";
import { BiDetail } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { IoEllipsisHorizontal } from "react-icons/io5";
import Image from "next/image";
import { ProductTableType } from "@/types/productTable";
import Link from "next/link";

const customStyles = {
  rows: {
    style: {
      // minWidth: "1000px",
      minHeight: "72px", 
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", 
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", 
      paddingRight: "8px",
    },
  },
};

const url_based = "https://store.istad.co/api/products/";
const ProductTable = () => {
  const [getProduct, setProduct] = useState<ProductTableType[]>([]);  
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ProductTableType[]>([]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [productDetail, setProductDetail] = useState({} as ProductTableType)

  function handleDetail(value: ProductTableType) {
    onOpen();
    setProductDetail(value)
    
  }

  const columnsData: TableColumn<ProductTableType>[] = [
    {
      name: "ID",
      selector: (row): any => (
        <div className=" font-bold text-blue-600">{row.id}</div>
      ),
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row): any => (
        <img src={row.image} width={70} height={70} alt="product-img" />
      ),
    },
    {
      name: "Details",
      cell: (row) => (
        <button onClick={() => handleView(row)}><BiDetail /></button>
      ),
    },
    {
      name: "Edit",
      cell: (row) => (
        <button onClick={() => handleEdit(row)}><CiEdit /></button>
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <button onClick={() => handleDelete(row)}><MdDelete /></button>
      ),
    },
  ];

  const handleView = (product: ProductTableType) => {
    <Link href={`/${product.id}`}>

    </Link>
  };

  
  const handleEdit = (product: ProductTableType) => {
    router.push(`/${product.id}`);
  };
  
  const handleDelete = (product: ProductTableType) => {
    router.push(`/${product.id}`);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url_based);
      const response = await data.json();
      setProduct(response.results);
      setFilter(response.results);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!search) {
      setFilter(getProduct);
      return;
    }
    const result = getProduct.filter((item: ProductTableType) => {
      return item.name?.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(result);
  }, [getProduct, search]);

  const paginationComponentOptions = {
    rowsPerPageText: "ជួរដេកក្នុងមួយទំព័រ",
    rangeSeparatorText: "នៃ",
    selectAllRowsItem: true,
    selectAllRowsItemText: "ទាំងអស់",
  };

  return (
    <div className="w-full">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  {productDetail.name}
                </p>
                <p>
                  {productDetail.price}
                </p>
                <Image src={productDetail.image} width={100} height={100} alt="user" />
                <p>detals</p>
                <p>edit</p>
                <p>delte</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
   
      <DataTable
        progressPending={isLoading}
        columns={columnsData}
        fixedHeader={true}
        fixedHeaderScrollHeight="500px"
        selectableRows
        pagination
        subHeader
        // customStyles={customStyles}
        subHeaderComponent={
          <input
            className="border-[1px] px-4 py-2 w-full rounded-md border-blue-400"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        }
        paginationComponentOptions={paginationComponentOptions}
        onSelectedRowsChange={() => console.log("row selected")}
        progressComponent={<LoadingComponent />}
        customStyles={customStyles}
        data={filter}
        // actions={
        //   <Button size="sm" color="primary">
        //     Export PDF
        //   </Button>
        // }
      />
    </div>
  );
};

export default ProductTable;
