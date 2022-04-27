import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
    <>
        <Hero>
            <Banner title="Kamar VIP" subtitle="Deluxe Rooms Mulai dari Rp 3.000.000">
                <Link to='/kamar' className="btn-primary">
                    Kamar
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        
    </>
    );
}
