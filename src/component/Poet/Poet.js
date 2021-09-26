import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import './Poet.css'

const Poet = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faAddressBook} />
    return (
        <div className="poet-container">
            <div className="rounded shadow card text-dark bg-light mb-3 border-warning " style={{width: '18rem', height: '35rem'}}>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <img className="img-info card-img-top" src={props.poet.img} alt="..." />
                </div>
                    <div className="card-body">
                        <h4 className="card-title">Name: {props.poet.name}</h4>
                        <h5 className>Awards : {props.poet.awards}</h5>
                        <h5>Fans: {props.poet.fans}</h5>
                        <p>Born: {props.poet.born}</p>
                        <p>Died: {props.poet.died}</p>
                        <p className="card-text">Occupation: {props.poet.occupation}</p>
                        <button onClick={()=> props.handleAddToCart(props.poet)} className="btn-color">{cartIcon} Follow Now</button>
                    </div>
                </div>
            </div>
           );
    };

export default Poet;