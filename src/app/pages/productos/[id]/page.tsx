import React from 'react'

function Page({ params }: { params: { id: string } }) {
  return (
    <div>
        <h1>el product encontrado es:{params.id}</h1>
    </div>
  )
}

export default Page