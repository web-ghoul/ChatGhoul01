import { headerHeight, width } from '@/constants'
import Container from '../Container'
import HeaderMenu from './HeaderMenu'
import Logo from '../Logo'

const ChatsHeader = () => {
    return (
        <Container className={`flex flex-row justify-between items-center bg-primary_bg border-b-[1px] border-solid border-b-[#222222]`} style={{ height: headerHeight, gap: 4 }}>
            <Logo style={{ width: width * 0.15, height: width * 0.15, background: "#000000" }} textClassName={`text-2xl text-white`} />
            <HeaderMenu />
        </Container>
    )
}

export default ChatsHeader
