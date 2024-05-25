import React from 'react'
import { AudioLines, TrendingDown, TrendingUp } from "lucide-react"
import Chart from './Chart'

const Dashboard = () => {
    return (
        <div className='flex flex-col py-12 px-10 w-full h-screen'>

            <div className='w-full px-10 py-5'>
                <h1 className='text-2xl font-bold'>Dashboard</h1>

                <div className='flex space-x-8'>
                    <div className='w-2/5 h-[220px] rounded-lg flex p-12 mt-5 justify-between items-center bg-[#f1c40f23] shadow-md'>
                        <div>
                            <span className='text-lg font-semibold'>Current Balance</span>
                            <h1 className='text-5xl font-medium mt-5'>₱14552</h1>
                            <span className='text-md text-green-500 font-semibold'>+ 10%</span>
                        </div>
                        <div className='flex gap-none] p-0 m-0'>
                            <AudioLines height={100} width={100} stroke='#f1c40f' />
                        </div>
                    </div>

                    <div className='w-2/5 h-[220px] rounded-lg flex p-12 mt-5 justify-between items-center bg-[#f9f4ff] shadow-md'>
                        <div>
                            <span className='text-lg font-semibold'>Total Income</span>
                            <h1 className='text-5xl font-medium mt-5'>₱14552</h1>
                            <span className='text-md text-red-500 font-semibold'>— 10%</span>
                        </div>
                        <div className='flex gap-none] p-0 m-0'>
                            <TrendingDown stroke='#e74c3c' height={100} width={100} />
                        </div>
                    </div>

                    <div className='w-2/5 h-[220px] rounded-lg flex p-12 mt-5 justify-between items-center bg-[#fff3f7] shadow-md'>
                        <div>
                            <span className='text-lg font-semibold'>Total Expenses</span>
                            <h1 className='text-5xl font-medium mt-5'>₱14552</h1>
                            <span className='text-md text-green-500 font-semibold'>+ 10%</span>
                        </div>
                        <div className='flex gap-none] p-0 m-0'>
                            <TrendingUp stroke='#2ecc71' height={100} width={100} />
                        </div>
                    </div>
                </div>

                <div className='flex space-x-8 flex-col border w-full mt-7 rounded-lg p-5'>
                    <Chart />
                </div>

                <div className='w-2/5 h-[220px] rounded-lg flex p-12 mt-5 justify-between items-center bg-[#fff3f7] shadow-md'>
                        <div>
                            <span className='text-lg font-semibold'>Total Expenses</span>
                            <h1 className='text-5xl font-medium mt-5'>₱14552</h1>
                            <span className='text-md text-green-500 font-semibold'>+ 10%</span>
                        </div>
                        <div className='flex gap-none] p-0 m-0'>
                            <TrendingUp stroke='#2ecc71' height={100} width={100} />
                        </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard