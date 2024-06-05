import React from 'react'
import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL

const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

    const [expenses, setExpenses] = React.useState([])
    const [income, setIncome] = React.useState([])
    const [error, setError] = React.useState(null)

    const addExpenses = async (expenses) => {
        const response = await axios.post(`${baseURL}/add-expense`, expenses)
            .catch((error) => {
                setError(error.response.data.message)
            })
    }

    return (
        <GlobalContext.Provider value={{
            addExpenses
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(GlobalContext)
}