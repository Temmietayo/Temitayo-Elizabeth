import React from 'react';
import { Link } from 'react-router-dom';

export default function Successful() {
    return (
        <div className="flex flex-col m-auto mt-64 justify-center font-serif w-2/5 p-4">
            <div className="text-center text-3xl font-bold p-4">
                Account has been created successfully
            </div>
            <div className="text-center font-light text-sm leading-snug text-gray-500 p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="m-auto pt-2 pb-2">
                <Link to="/researcher/signin">
                <button className="w-64 h-16 bg-purple-700 text-white rounded-3xl">Proceed to Sign In</button>
                </Link>
                </div>
        </div>
    );
}