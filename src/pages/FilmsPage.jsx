// API
import SW_API from "../services/SWAPI"

// Imported react
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"
import Image from 'react-bootstrap/Image'

// Helper
import getIdFromUrl from '../helper/index'

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
    
				<ListGroup className="d-flex flex-wrap justify-content-center">
					{films.map(film =>
						<ListGroup.Item
							key={getIdFromUrl(film.url)} 
							to={`/films/${getIdFromUrl(film.url)}`} 
							className="card border-1 rounded mb-5 p-0 col-md-5 col-sm-3 col-xs-12"
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
                                    to={`/films/${getIdFromUrl(film.url)}`} 
                                    type="button" 
                                    className="btn btn-primary" 
                                >
                                    Read More
                                </Link>

							</div>
						</ListGroup.Item>
					)}
				</ListGroup>
			)}

			<div className="buttons d-flex justify-content-between">
                <button 
                type="button" 
                className="btn btn-primary"
				>
					Previous Page
				</button>
                
                <button 
                type="button" 
                className="btn btn-primary"
				>
					Next Page
				</button>
            </div>
    	</>
	)
}

export default FilmsPage