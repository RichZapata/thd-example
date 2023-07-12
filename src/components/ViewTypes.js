import React,{useState,useEffect} from "react";
import { ep_types } from "../utils/endpoints";
import { Card, Row, Col, Typography} from "antd";
import { Link } from "react-router-dom";


const{Title} = Typography
const ViewTypes = ( ) => {
    
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const cardStyle = {
        marginTop: 16,
        
    }
    useEffect(() => {
        fetch(ep_types)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPokemonTypes(data.results);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return (
        <>
        <Title>This are all the pokemon types</Title>
        <Row className="posts-container" gutter={16}>
            {pokemonTypes.map((pokemonType) => {
                console.log(pokemonType)
                return (
                    <Col span={8}>
                        <Card style={cardStyle} title={String(pokemonType.name).toUpperCase()} key={pokemonType.name}>
                            <Link to={`/types/${String(pokemonType.url).slice(31,pokemonType.url.length-1)}`}>View all pokemons of this type</Link>
                        </Card>
                    </Col>
                    
                );
            })}
        </Row>
        </>

    );
};

export default ViewTypes