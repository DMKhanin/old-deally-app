import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SortableTable from '@partails/SortableTable';
import { getProductsByShopId } from '@api/ClientAPI';
import { values } from 'draft-js/lib/DefaultDraftBlockRenderMap';

const useProducts = (shopId) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        if (!shopId) return; 
        const response = await getProductsByShopId({ id: shopId });
        setProducts(response);
    }

    useEffect(fetchProducts, [shopId]);
    return products;
}

const useShopId = () => {
  const router = useRouter();
  const { id } = router.query;
  return id;
}

function MyCell({ value }) {
    return <a href="#" >{`${value}`}</a>;
  }

function Test({ value }) {
    return <div>{ value.map(category => <span>{category.name}</span>)}</div>;
}

  
const ProductsPage = () => {
    const shopId = useShopId();
    const products = useProducts(shopId);

    const COLUMNS = [
        // {
        //     Header: 'Id',
        //     accessor: '_id'
        // },
        { 
            Header: 'Picture',
            accessor: 'picture',
            disableSortBy: true,
        },
        { 
            Header: 'Name',
            accessor: 'name',
            disableSortBy: true,
            canFilter: true,
        },
        {
            Header: 'Price',
            accessor: 'price',
            Cell: MyCell,
        },
        {
            Header: 'Categories',
            accessor: 'categoriesList',
            Cell: Test,
            disableSortBy: true,
        }
    ]


    return (
        <>
            { products.length > 0 ? <SortableTable data={products} columns={COLUMNS} /> : null }
        </>
    )
}

export default ProductsPage;