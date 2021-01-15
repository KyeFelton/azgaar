import React from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Table from "react-bootstrap/Table"

import character from "./images/character.jpg"
import "../App.css"

function Content() {
    return (
        <Container className="content">
            <Row>
                <Col md>
                    <Container className="imageContainer">
                        <img src={character} width="100%" height="auto" alt=""></img>
                    </Container>
                </Col>
                <Col md>
                    <h1 className="mt-3">Sir Dragon Guy</h1>
                    <p>Species: Reptilian</p>
                    <p>Gender: Male</p>
                    <p>Class: Soldier</p>
                    <Row>
                        <Col>
                            <Table className="table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Skill</th>
                                        <th scope="col">Level</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Melee</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>Range</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Armour</td>
                                        <td>3 (+2)</td>
                                    </tr>
                                    <tr>
                                        <td>Hitpoints</td>
                                        <td>2 / 20</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <Table className="table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Skill</th>
                                        <th scope="col">Level</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Stealth</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>Perception</td>
                                        <td>2</td>
                                    </tr>
                                    <tr>
                                        <td>Charisma</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Intimidation</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>Agility</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>Speed</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Strength</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Content