import { EllipsisVertical  } from 'lucide-react';
import React from 'react'

const TransactionHistory = () => {

    const transactions = [
        { id: 1, date: '2024-05-25', description: 'Grocery Shopping', amount: '-₱2000', type: 'expense' },
        { id: 2, date: '2024-05-24', description: 'Salary', amount: '+₱15000', type: 'income' },
        { id: 3, date: '2024-05-23', description: 'Electricity Bill', amount: '-₱3500', type: 'expense' },
        { id: 4, date: '2024-05-22', description: 'Freelance Work', amount: '+₱8000', type: 'income' },
    ];

    return (
        <div className='w-full h-full border rounded-lg bg-white'>
            <div className='flex items-center justify-between px-8 py-3 border-b bg-gray-50'>
                <h1 className='text-lg font-bold'>Transaction History</h1>
                <div className='flex items-center'>
                    <span className='text-sm text-gray-600'>Sort By</span>
                    <select className='ml-2 border rounded-md p-1 text-sm'>
                        <option>Date</option>
                        <option>Amount</option>
                        <option>Type</option>
                    </select>
                </div>
            </div>
            <div className='px-8 py-3'>
                <ul className='divide-y'>
                    {transactions.map(transaction => (
                        <li key={transaction.id} className='flex justify-between py-3'>
                            <div>
                                <span className='block text-sm font-medium text-gray-800'>{transaction.description}</span>
                                <span className='block text-sm text-gray-500'>{transaction.date}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className={`text-sm font-medium ${transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
                                    {transaction.amount}
                                </span>
                                <EllipsisVertical className='ml-2 cursor-pointer text-gray-600' />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TransactionHistory