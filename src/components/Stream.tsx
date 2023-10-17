'use client'
import React, { useEffect } from 'react'

const Stream = () => {
  const call = async () => {
    const data = await fetch('/api/chat')
    console.log(data)
  }

  return (
    <div>
      <button onClick={call}>Call API</button>
    </div>
  )
}

export default Stream
