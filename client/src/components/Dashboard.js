import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="relative min-h-screen bg-green-100">
            Dashboard
            <Link to="/surveys/new" class="absolute bottom-32 right-4 w-16 h-16 rounded-full bg-gray-900 shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-white" fill="white" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </Link>
        </div>
    )
}

export default Dashboard;