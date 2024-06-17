import React from 'react';
import Navbar from './navbar/Navbar';
import Banner from './banner/Banner';
import Usp from './usp/Usp';

export default class EcommerceApp extends React.Component {

    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <Usp />
            </>
        );
    }
}
