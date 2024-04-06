import React from 'react'

async function deleteProduct(id: number) {
    const response = await fetch(`YOUR_API_BASE_URL/products/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }
    // Product deletion logic
  }

const DeleteProductComponent = () => {
  return (
    <div>
      
    </div>
  )
}

export default DeleteProductComponent
