import { useLocation } from "react-router-dom"

function Home() {
    let location = useLocation()
    console.log(location.state)
    
    return(
        <section>
            <h1>Home</h1>
        </section>
    )
}

export default Home