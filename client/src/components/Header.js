import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payment from './Payment';

const Header = ({ auth }) => {
    console.log(auth);

    const rightContent = () => {
        switch(auth) {
            case null:
                return (
                    <li><a href='/auth/google' class="border rounded-md px-3 py-1 md:py-2 font-medium cursor-pointer hover:bg-bgprimary text-white hover:border-transparent">Sign with google
                    </a></li>
                )
            case false:
                return (
                    <li><a href='/auth/google' class="border rounded-md px-3 py-1 md:py-2 font-medium cursor-pointer hover:bg-bgprimary text-white hover:border-transparent">Sign with google
                    </a></li>
                );
            default:
                return [
                    <li key="1"><Payment /></li>,
                    <li class="" key="2">Credit: <strong>{auth.credits}</strong></li>,
                    <li key="3"><a href='/api/logout' class="border rounded-md px-3 py-1 md:py-2 font-medium cursor-pointer hover:bg-bgprimary hover:border-transparent">Logout
                    </a></li>
                ];
        }
    }

    return (
        <div class="h-16 md:h-20 flex justify-between shadow w-full bg-gray-900 px-4 md:px-12 items-center">
            <Link to={auth ? '/surveys' : '/'}
                class="text-white cursor-pointer text-2xl  md:text-3xl font-bold"    
            >
                Emaily
            </Link>
            <ul class="flex items-center gap-x-3 md:gap-x-6 text-white">
                {rightContent()}
            </ul>
        </div>
    )
}

const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default connect(mapStateToProps)(Header);