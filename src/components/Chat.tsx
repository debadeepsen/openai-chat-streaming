'use client'

import { useChat } from 'ai/react'
import SendIcon from './SendIcon'

export default function Stream() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  return (
    <div>
      {!!messages?.length && (
        <div className='rounded-sm bg-zinc-200/70 p-4 mb-4 leading-6'>
          {messages.map((m, index) => (
            <div key={index} className='flex'>
              <div className='font-bold'>{m.role === 'user' ? 'User: ' : 'AI: '}</div>
              <div>{m.content}</div>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <input
            placeholder='Ask something to GPT...'
            className='w-full'
            name='chat'
            value={input}
            onChange={handleInputChange}
          />
          <button type='submit'>
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  )
}
