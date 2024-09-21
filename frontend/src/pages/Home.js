import Header from "../components/header/Header"

import Slide from '../components/home/Slide'

const Home = () => {
    return (
        <div>
            <Header />

            <Slide />

            <p className="text-red-500">this is home's page</p>
        </div>
    )
}

export default Home