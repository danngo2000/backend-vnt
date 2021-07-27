import { useRouter } from 'next/dist/client/router'
import React from 'react'


const ProductId = () => {
    const router = useRouter()
  return (
    <>
      <div className='product-overplay open' onClick={() => router.push('/products')} />
      <div className='product-overplay-content'>

      </div>
    </>
  )
}

export default ProductId
