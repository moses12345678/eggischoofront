import React from "react";
import {Button} from 'react-bootstrap';

export default function Banner(){
    return (
        <div className="bg-primary text-white text-center py-5">
            <h1 className="display-4">Hadja M'Ballou Diawara</h1>
            <p className="lead">Former les leaders de demain</p>
            <p>
                <Button variant="light">Learn more</Button>
            </p>
        </div>
    )
}