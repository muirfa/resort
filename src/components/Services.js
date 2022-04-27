import React, { Component } from 'react'
import Title from './Title'
import {FaUtensils, FaHiking, FaShuttleVan, FaGuitar} from "react-icons/fa";
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaUtensils/>,
                title:"Restauran",
                info: 'Pengunjung dapat menikmati makanan dan minuman dengan berbagai menu dalam dan luar negeri'
            },
            {
                icon:<FaHiking/>,
                title:"Pemandu Wisata",
                info: 'Pengunjung yang ingin berwisata disekitaran hotel akan didampingi oleh pemandu wisata'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Shuttle Van",
                info: 'Pengunjung dapat meminta hotel untuk menjemput dibandara'
            },
            {
                icon:<FaGuitar/>,
                title:"Live Music",
                info: 'Pada malam hari pengunjung akan dihibur oleh live music dari jam 19.00 - 21.00'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Fasilitas" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
