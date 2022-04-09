import React, { useEffect, useState } from "react";
import { getShips } from "../../services/service";
import './ships.css';

const Ships = () => {

    const [ships, setships] = useState<any>(undefined);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await getShips();
        console.log(response)
        setships(response)
    };
    return (
        <div>
            <h2 className="title">Ships</h2>
            <div className="shipsContainer">
                {!ships ? 'Cargando ...' :
                    ships.map((ships: any, index:any) => {
                        return (
                            <div className="card" key={index}>
                                <img src={ships.image} className="shipsImg"/>
                                    <div className="container">
                                        <h4><b>{ships.name}</b></h4>
                                        <b>Missions</b>
                                        <u id="list">
                                        {!ships.missions ? 'Loading missions...': ships.missions
                                        .map((mission:any, index:any) => {
                                            return(
                                                <li key={index} className="mission">Flight: {mission.flight} Name: {mission.name}</li>
                                            )
                                        })}
                                        </u>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );

}
export default Ships;