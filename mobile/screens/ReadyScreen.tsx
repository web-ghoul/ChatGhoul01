import useGlobal from '@/hooks/useGlobal'
import MakeAppReadySection from '@/sections/MakeAppReadySection'
import { useEffect } from 'react'

const ReadyScreen = () => {
    const { handleFetchAllData } = useGlobal()

    useEffect(() => {
        handleFetchAllData()
    }, [])

    return (
        <MakeAppReadySection />
    )
}

export default ReadyScreen
