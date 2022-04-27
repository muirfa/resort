import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    // componentDidMount(){}
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room){
            return (
                <div className="error">
                    <h3>Tidak ada Ruangan jenis tersebut</h3>
                    <Link to="/kamar" className="btn-primary">
                        Kembali ke Rooms
                    </Link>
                </div>
            );
        }
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    
    const [mainImg, ...defaultImg] = images;
    
    
        return (
        <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
            <Banner title={`${name} room`}>
                <Link to='/kamar' className='btn-primary'>
                    Kembali ke Rooms
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((item, index) => {
                    return <img key={index} src={item} alt={name} />;
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>keterangan</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>informasi</h3>
                    <h6>harga : Rp {price}</h6>
                    <h6>luas : {size} M2</h6>
                    <h6>
                        kapasitas maksimal :{" "}
                        {capacity > 1 ? `${capacity} orang` : `${capacity} person`}
                    </h6>
                    <h6>{pets ? "binatang peliharaan dibolehkan" : "binatang peliharaan tidak diperbolehkan"}</h6>
                    <h6>{breakfast && "termasuk gratis makan pagi"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>Tambahan</h6>
            <ul className="extras">
                {extras.map((item, index) => {
                    return <li key={index}>- {item}</li>;
                })}
            </ul>
        </section>
        </>
        );
    }
}
