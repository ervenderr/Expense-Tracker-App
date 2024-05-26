import React from 'react';
import { AudioLines, TrendingDown, TrendingUp } from "lucide-react";
import Chart from './Chart';
import PieChartDashboard from './PieChart';

const Dashboard = () => {
    return (
        <div className='flex flex-col py-12 px-4 sm:px-10 w-full h-screen'>
            <div className='w-full py-5 '>
                <h1 className='text-2xl font-bold mb-5'>Dashboard</h1>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div className='h-[150px] rounded-lg flex p-6 sm:p-12 justify-between items-center bg-[#f1c40f23] shadow-md'>
                        <div>
                            <span className='text-lg font-semibold'>Current Balance</span>
                            <h1 className='text-3xl sm:text-5xl font-medium mt-5'>₱14552</h1>
                            <span className='text-md text-green-500 font-semibold'>+ 10%</span>
                        </div>
                        <div className='flex p-0 m-0'>
                            <AudioLines height={50} width={50} sm:height={70} sm:width={70} stroke='#f1c40f' />
                        </div>
                    </div>

                    <div className='h-[150px] rounded-lg flex p-6 sm:p-12 justify-between items-center bg-[#f9f4ff] shadow-md'>
                        <div>
                            <span className='text-lg font-semibold'>Total Income</span>
                            <h1 className='text-3xl sm:text-5xl font-medium mt-5'>₱14552</h1>
                            <span className='text-md text-red-500 font-semibold'>— 10%</span>
                        </div>
                        <div className='flex p-0 m-0'>
                            <TrendingDown stroke='#e74c3c' height={50} width={50} sm:height={70} sm:width={70} />
                        </div>
                    </div>

                    <div className='h-[150px] rounded-lg flex p-6 sm:p-12 justify-between items-center bg-[#fff3f7] shadow-md'>
                        <div>
                            <span className='text-lg font-semibold'>Total Expenses</span>
                            <h1 className='text-3xl sm:text-5xl font-medium mt-5'>₱14552</h1>
                            <span className='text-md text-green-500 font-semibold'>+ 10%</span>
                        </div>
                        <div className='flex p-0 m-0'>
                            <TrendingUp stroke='#2ecc71' height={50} width={50} sm:height={70} sm:width={70} />
                        </div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5'>
                    <div className='col-span-2 border mt-7 rounded-lg p-5' style={{ height: '400px' }}>
                        <span className='text-lg font-semibold'>Funds Overview</span>
                        <Chart />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mt-5'>My Transactions</h1>
                        <PieChartDashboard />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
