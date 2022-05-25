import axios from "axios";
const BASE_URL = "https://swapi.dev/api/";

/**
 * Get all people
 */
const getPeoples = async (page) => {
    const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
    return res.data
}

/**
 * Get a certain person
 */
const getPeople = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data
}

/**
 * Get all films
 */
const getFilms = async () => {
    const res = await axios.get(`${BASE_URL}/films`)
    return res.data
}

/**
 * Get certain film
 */
const getFilm = async (id) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`)
    return res.data
}

const actions = {
    getPeoples,
    getPeople,
    getFilms,
    getFilm,
}

export default actions