import Container from '@/components/Container'
import Forms from '@/forms/Forms'

const ForgotPasswordScreen = () => {
    return (
        <Container className={`flex flex-col items-center pb-4`}>
            <Forms type={"forgotPassword"} />
        </Container>
    )
}

export default ForgotPasswordScreen
