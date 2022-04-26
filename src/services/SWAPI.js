import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

// const sleep = async delay => new Promise(r => setTimeout(r, delay))

/**
 * Get all people
 */
const getPeoples = async (page) => {
    try {
        const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
        return res.data

    } catch (err) {
        return err.response.status
    }
}

/**
 * Get a certain person
 */
const getPeople = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}/people/${id}`)
        return res.data

    } catch (err) {
        return err.response.status
    }
}

/**
 * Get all films
 */
const getFilms = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/films`)
        return res.data

    } catch (err) {
        return err.response.status
    }
}

/**
 * Get certain film
 */
const getFilm = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}/films/${id}`)
        return res.data

    } catch (err) {
        return err.response.status
    }
}

const actions = {
    getPeoples,
    getPeople,
    getFilms,
    getFilm,
}

export default actions