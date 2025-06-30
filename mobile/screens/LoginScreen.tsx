import Container from '@/components/Container'
import Forms from '@/forms/Forms'

const LoginScreen = () => {
    return (
        <Container className={`flex flex-col items-center pb-4`}>
            <Forms type={"login"} />
        </Container>
    )
}

export default LoginScreen
