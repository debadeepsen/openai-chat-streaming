'use client'

import { useChat } from 'ai/react'
import SendIcon from './SendIcon'

export default function Stream() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  })

  return (
    <div>
      {!!messages?.length && (
        <div className='p-4 mb-4 leading-6'>
          {messages.map((m, index) => (
            <div key={index} className='flex chat-message'>
              <div
                className={m.role === 'user' ? 'basis-1/4' : 'basis-0'}
              ></div>
              <div
                className={
                  (m.role === 'user' ? 'bg-teal-600/20' : 'bg-zinc-600/20') +
                  ' p-4 mb-4 basis-full'
                }
              >
                {m.content}
              </div>
              <div
                className={m.role === 'assistant' ? 'basis-1/4' : 'basis-0'}
              ></div>
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
