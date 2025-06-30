import Container from '@/components/Container'
import ChatsSection from '@/sections/ChatsSection'

const ChatsScreen = () => {
  return (
    <Container className={`bg-primary_bg`} style={{ gap: 10 }}>
      <ChatsSection />
    </Container>
  )
}

export default ChatsScreen
