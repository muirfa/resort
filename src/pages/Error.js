import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export default function Error() {
    return <Hero>
        <Banner title='MAAF' subtitle="Halaman Tidak Tersedia">
            <Link to='/' className='btn-primary'>
                Halaman Utama
            </Link>
        </Banner>    
    </Hero>;
}