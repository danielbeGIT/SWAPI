// API
import SW_API from "../services/SWAPI"

// Imported react
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

// Image
import LoadingYoda from '../assets/images/yoda-force.gif'

const FilmsPage = () => {
	const [films, setFilms] = useState([])
	const [loading, setLoading] = useState(false)

	// Get films from api
	const getFilms = async () => {
		// get data
		const data = await SW_API.getFilms()

		// set data results to people
		setFilms(data.results)

		// Set loading to true for the load to be visible.
		setLoading(true)
	}

	// Get films from api when component is first mounted
	useEffect(() => {
		getFilms()
	}, [])

	if(!loading) {
        return (
            <>
                <h2 className="loading">Channeling the force..</h2>
                <br />
                <Image src={LoadingYoda} fluid />
            </>
          
        )
    }


	return (
		<>
			<h1>Films</h1>

			{films.length > 0 && (
				<div className="row d-flex justify-content-between">
					{films.map((film, index) => (
						<ListGroup.Item
							key={index} 
							className="card border-1 rounded m-3 p-0 col-lg-3 col-md-5 col-sm-12"
						>
							<div className="card-header p-3">
								<strong>{film.title}</strong>
							</div>

							<div className="card-body">
								<p className="card-header bg-white bold">
									<strong>Episode: </strong>
									{film.episode_id}
								</p>
								<p className="card-header bg-white bold">
									<strong>Released: </strong>
									{film.release_date}
								</p>
								<p className="card-header bg-white bold mb-3">
									{film.characters.length} 
									<strong> characters</strong>
								</p>

								<Link 
									type="button" 
                                    to={`/films/${index + 1}`} 
                                    className="btn btn-primary" 
                                >
                                    Read More
                                </Link>

							</div>
						</ListGroup.Item>
					))}
				</div>
			)}
			<div className="d-flex justify-content-between mt-4">
                <Button
                    variant="primary"
                >
                    Previous Page
                </Button>

                (Amount of pages)

                <Button
                    variant="primary"
                >
                    Next Page
                </Button>
            </div>
    	</>
	)
}

export default FilmsPage