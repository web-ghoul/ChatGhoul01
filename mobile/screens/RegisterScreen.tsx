import Container from '@/components/Container'
import Forms from '@/forms/Forms'

const RegisterScreen = () => {
    return (
        <Container className={`flex flex-col items-center pb-4`}>
            <Forms type={"register"} />
        </Container>
    )
}

export default RegisterScreen
