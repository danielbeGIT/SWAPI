import Image from 'react-bootstrap/Image'
import LoadingYoda from '../assets/images/yoda-force.gif'

const Loading = () => {
    return (
        <>
            <h2 className="loading">Channeling the force..</h2>
            <br />
            <Image src={LoadingYoda} fluid />
        </>
    )
}

export default Loading