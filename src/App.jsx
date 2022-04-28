import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

// Imported components
import Navigation from './components/Navigation'

// Imported pages
import HomePage from './pages/HomePage'
import PeoplesPage from './pages/PeoplesPage'
import PeoplePage from './pages/PeoplePage'
import FilmsPage from './pages/FilmsPage'
import FilmPage from './pages/FilmPage'
import NotFound from './pages/NotFound'

const App = () => {

	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/people" element={<PeoplesPage />} />
					<Route path="/people/:id" element={<PeoplePage />} />
					<Route path="/films" element={<FilmsPage />} />
					<Route path="/films/:id" element={<FilmPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App


/**
 * TODO LIST
 * 
 * fix previous and next page and text in the middle
 */