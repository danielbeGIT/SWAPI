import Image from 'react-bootstrap/Image'
import SadBabyYoda from '../assets/images/sad-baby-yoda.gif'

const NotFound = () => {
	return (
		<>
			<h3>Sorry, the force could not be found 😔</h3>
			<Image src={SadBabyYoda} fluid />
		</>
	)
}

export default NotFound