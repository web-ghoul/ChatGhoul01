import Container from '@/components/Container'
import ChatsSection from '@/sections/ChatsSection'
import { LinearGradient } from 'expo-linear-gradient';

const ChatsScreen = () => {
  return (
    <LinearGradient colors={['#000', '#111', '#222']} end={{ x: 0, y: 0.5 }}>
      <Container style={{ gap: 10 }}>
        <ChatsSection />
      </Container>
    </LinearGradient>
  )
}

export default ChatsScreen
