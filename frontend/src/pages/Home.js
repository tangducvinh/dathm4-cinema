import Outlet from 'react-router-dom'

import Slide from '../components/home/Slide'
import NavBar from "../components/home/NavBar"
import IntroduceText from '../components/home/IntroduceText'

const Home = () => {
    return (
        <div className='pb-[50px]'>
            <Slide />

            <NavBar></NavBar>

            <IntroduceText />
        </div>
    )
}

export default Home