import { headerHeight, width } from '@/constants'
import { usePathname } from 'expo-router'
import Container from '../Container'
import Logo from '../Logo'
import HeaderMenu from './HeaderMenu'

const ChatsHeader = () => {
    const pathname = usePathname()
    return (
        <Container className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ height: headerHeight, gap: 4 }}>
            <Logo style={{ width: width * 0.15, height: width * 0.15, background: "#000000" }} textClassName={`text-2xl text-white`} subTitle={pathname?.split('/')?.[1] || ''} />
            <HeaderMenu />
        </Container>
    )
}

export default ChatsHeader
