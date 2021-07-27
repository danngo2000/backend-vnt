import React from 'react'
import Layout from '../../components/Layout/Layout'
import ProductId from '../../components/Products/ProductId'
import TableProducts from '../../components/Products/TableProducts'

const Index = () => {
    return (
        <Layout>
        <TableProducts />
        <ProductId />
      </Layout>
    )
}

export default Index
