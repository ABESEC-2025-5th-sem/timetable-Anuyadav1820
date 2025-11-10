import React, { useState } from 'react'
import productsData from '../data/product.json'

export default function Body(){
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = productsData.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div style={{maxWidth:1100, margin:'2rem auto', padding:'0 16px'}}>
      <h1 style={{textAlign:'center', marginTop:0}}>Products</h1>
      <div style={{marginBottom:24}}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            outline: 'none'
          }}
        />
      </div>
      <div style={{marginTop:24, display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:20}}>
        {filteredProducts.map(p=> (
          <div key={p.id} style={{border:'1px solid #ddd', borderRadius:8, padding:12, background:'#fff'}}>
            <div style={{height:140, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
              <img src={p.image} alt={p.name} style={{maxWidth:'100%', maxHeight:'100%', objectFit:'cover'}}/>
            </div>
            <h3 style={{fontSize:16, margin:'12px 0 6px'}}>{p.name}</h3>
            <p style={{margin:0, fontWeight:600}}>₹{p.price}</p>
            <p style={{marginTop:8, color:'#666', fontSize:13}}>{p.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
