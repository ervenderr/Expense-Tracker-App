import React from 'react';
import { AudioLines, TrendingDown, TrendingUp } from "lucide-react";
import Chart from './Chart';
import TransactionHistory from './TransactionHistory';
import { LayoutDashboard } from '../Utils/NavLinks'

const Dashboard = () => {

    

    return (

        <div className='py-12 px-4 sm:px-10 w-full h-screen'>
            <h1 className='text-3xl font-extrabold justify-center items-center'>Dashboard <LayoutDashboard  className='text-yellow inline mb-2'/></h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div className='lg:col-span-2 col-span-3 w-full py-5'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                        <div className='h-[150px] rounded-lg flex p-4 justify-between items-center bg-[#f1c40f23] shadow-md'>
                            <div>
                                <span className='text-lg font-semibold text-tertiary'>Current Balance</span>
                                <h1 className='text-3xl sm:text-xl font-medium mt-5'>₱14552</h1>
                                <span className='text-md text-green-500 font-semibold'>+ 10%</span>
                            </div>
                            <div className='flex p-0 m-0'>
                                <AudioLines height={50} width={50} className='sm:h-14 sm:w-14' stroke='#f1c40f' />
                            </div>
                        </div>

                        <div className='h-[150px] rounded-lg flex p-4 justify-between items-center bg-[#f9f4ff] shadow-md'>
                            <div>
                                <span className='text-lg font-semibold text-tertiary'>Total Income</span>
                                <h1 className='text-3xl sm:text-xl font-medium mt-5'>₱14552</h1>
                                <span className='text-md text-red-500 font-semibold'>— 10%</span>
                            </div>
                            <div className='flex p-0 m-0'>
                                <TrendingDown stroke='#e74c3c' height={50} width={50} className='sm:h-14 sm:w-14' />
                            </div>
                        </div>

                        <div className='h-[150px] rounded-lg flex p-4 justify-between items-center bg-[#fff3f7] shadow-md'>
                            <div>
                                <span className='text-lg font-semibold text-tertiary'>Total Expenses</span>
                                <h1 className='text-3xl sm:text-xl font-medium mt-5'>₱14552</h1>
                                <span className='text-md text-green-500 font-semibold'>+ 10%</span>
                            </div>
                            <div className='flex p-0 m-0'>
                                <TrendingUp stroke='#2ecc71' height={50} width={50} className='sm:h-14 sm:w-14' />
                            </div>
                        </div>
                    </div>

                    <div className='mt-7 grid grid-cols-1 gap-5'>
                        <div className='border rounded-lg p-5' style={{ height: '400px' }}>
                            <span className='text-lg font-semibold'>Funds Overview</span>
                            <Chart />
                        </div>
                    </div>
                </div>

                <div className='lg:col-span-1 col-span-3 h-full w-full mt-5'>
                    <div className='h-full'>
                        <TransactionHistory />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
