import Container from '@/components/Container'
import ChatsSection from '@/sections/ChatsSection'
import React from 'react'

const ChatsScreen = () => {
  return (
    <Container className={`bg-primary_bg flex-1`}>
      <ChatsSection />
    </Container>
  )
}

export default ChatsScreen
