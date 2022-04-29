import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <h1>Welcome to Star Wars encyclopedia</h1>
            <p>
                <strong>Click this link if your with the dark side: </strong>
                <Link to="/not-found">THE LINK</Link>
            </p>
        </>
    )
}

export default HomePage