import { Link, useNavigate } from "react-router-dom"

function Header() {
    let navigate = useNavigate()
    
    return(
        <header>
            <h1>Header</h1>
            <ul>
                {/* <li><Link to='/'>HOME</Link></li> */}
                <li><button onClick={() => navigate('/', {state: {address:'BAKU'}})}>HOME</button></li>
                <li><Link to='/products'>PRODUCTS</Link></li>
                <li><Link state={{address:'BAKU'}} to='/about'>ABOUT</Link></li>
            </ul>
        </header>
    )
}

export default Header