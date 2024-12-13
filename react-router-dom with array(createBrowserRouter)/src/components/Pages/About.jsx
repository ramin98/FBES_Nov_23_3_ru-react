import { useLocation } from "react-router-dom"

function About() {
    let location = useLocation()
    console.log(location.state)
    
    return(
        <section>
            <h1>About</h1>
        </section>
    )
}

export default About