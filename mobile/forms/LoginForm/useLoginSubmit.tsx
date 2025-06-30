import { LoginTypes } from "@/types/forms"

const useLoginSubmit = () => {
    const handleLogin = async (values: LoginTypes) => {
        console.log(values)
    }

    return { handleLogin }
}

export default useLoginSubmit
