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

    const fetchExpenses = async () => {
        try {
          const response = await axios.get(`${baseURL}/get-expense`);
          setExpenses(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    const deleteExpenses = async (id) => {
        try {
            const alerts = confirm("Are you sure you want to delete this expense?");
            if (alerts === true) {
                const response = await axios.delete(`${baseURL}/delete-expense/${id}`);
            }
            fetchExpenses();
        } catch (error) {
            console.error(error);
        }
    }

    const updateExpenses = async (expense) => {
        try {
            const response = await axios.put(`${baseURL}/update-expense/${expense._id}`, expense);
            fetchExpenses();
        } catch (error) {
            console.error(error);
        }
    };

    const addIncome = async (income) => {
        const response = await axios.post(`${baseURL}/add-income`, income)
            .catch((error) => {
                setError(error.response.data.message)
            })
    }

    const fetchIncome = async () => {
        try {
            const response = await axios.get(`${baseURL}/get-income`)
            setIncome(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    const deleteIncome = async (id) => {
        try {
            const alerts = confirm("Are you sure you want to delete this income?");
            if (alerts === true) {
                const response = await axios.delete(`${baseURL}/delete-income/${id}`);
            }
            fetchIncome();
        } catch (error) {
            console.error(error);
        }
    }

    const updateIncome = async (income) => {
        try {
            const response = await axios.put(`${baseURL}/update-income/${income._id}`, income);
            fetchIncome();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <GlobalContext.Provider value={{
            expenses,
            addExpenses,
            fetchExpenses,
            deleteExpenses,
            updateExpenses,
            income,
            addIncome,
            fetchIncome,
            deleteIncome,
            updateIncome,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(GlobalContext)
}