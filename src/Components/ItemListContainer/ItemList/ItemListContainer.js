import React, { useState } from 'react'
import ItemList from './ItemList'


const ItemListContainer = ({titulo}) => {


    return (
    <div>
        <ItemList titulo={titulo} />
    </div>
  )
}

export default ItemListContainer