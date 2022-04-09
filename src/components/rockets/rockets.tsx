import React, { useEffect, useState } from "react";
import { getRockets } from "../../services/service";
import './rockets.css';

const Rockets = () => {

    const [rockets, setRockets] = useState<any>(undefined);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await getRockets();
        console.log(response)
        setRockets(response)
    };
    return (
        <div>
            <h2 className="title">Rockets</h2>
            <div className="rocketsContainer">
                {!rockets ? 'Cargando ...' :
                    rockets.map((rocket: any, index:any) => {
                        return (
                            <div className="card" key={index}>
                                <img src={rocket.flickr_images[0]} className="rocketImg"/>
                                    <div className="container">
                                        <h4><b>{rocket.name}</b></h4>
                                        <p>{rocket.description}</p>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );

}
export default Rockets;