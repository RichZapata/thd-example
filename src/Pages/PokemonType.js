import React, {useState,useEffect} from "react";
import { ep_types } from "../utils/endpoints";
import { useParams } from "react-router-dom";
import { Card, Row, Col, Typography} from "antd";



const{Title} = Typography

const PokemonType = () => {
    const params = useParams();
    const [pokemons, setPokemons] = useState([]);
    const cardStyle = {
        marginTop: 16 
    }
    useEffect(() => {
        fetch(`${ep_types}${params.typeId}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data.pokemon);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return(
        <>
            <Title>This are all the pokemon types</Title>
            <Row className="posts-container" gutter={16}>
                {pokemons.map((pokemon) => {
                    return (
                        <Col span={8}>
                            <Card style={cardStyle} title={String(pokemon.pokemon.name).toUpperCase()} key={String(pokemon.pokemon.name)}>
                                
                            </Card>
                        </Col>
                        
                    );
                })}
            </Row>
        </>

    );
};

export default PokemonType;