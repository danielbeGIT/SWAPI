import Image from 'react-bootstrap/Image'
import SadBabyYoda from '../assets/images/sad-baby-yoda.gif'

const NotFound = () => {
	return (
		<>
			<h1>Sorry, the force could not be found 😔</h1>

			<Image src={SadBabyYoda} fluid />
		</>
	)
}

export default NotFound