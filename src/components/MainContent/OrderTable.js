import React, {useState} from 'react';
import {Col, Row, Table} from "reactstrap"
import Contact from "./Contact"

const OrderTable = () => {


    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    const [vegetables, setVegetables] = useState([
        {
            id: 0,
            name: "Ziemniaki",
            price: 24,
            count: 0,
            unit: "opak(15kg)"
        },
        {
            id: 1,
            name: "Jaja",
            price: 15,
            count: 0,
            unit: "Sztuka"

        },
        {
            id: 2,
            name: "Marchewka (nie myta)",
            price: 1.4,
            count: 0,
            unit: "kg"

        },
        {
            id: 3,
            name:  "Marchewka (myta)",
            price: 1.6,
            count: 0,
            unit: "kg"

        },
        {
            id: 4,
            name: "Pietruszka (nie myta)",
            price: 2.6,
            count: 0,
            unit: "kg"

        },
        {
            id: 5,
            name: "Pietruszka ( myta)",
            price: 3,
            count: 0,
            unit: "kg"
        },
        {
            id: 6,
            name: "Seler (nie myty)",
            price: 2.6,
            count: 0,
            unit: "kg"
        },
        {
            id: 7,
            name: "Seler ( myty)",
            price: 3,
            count: 0,
            unit: "kg"
        },
        {
            id: 8,
            name: "Cebula",
            price: 2.2,
            count: 0,
            unit: "kg"
        },
        {
            id: 9,
            name: "Buraki",
            price: 1.4,
            count: 0,
            unit: "kg"
        },
        {
            id: 10,
            name: "Kapusta biała",
            price: 1.4,
            count: 0,
            unit: "kg"
        },
        {
            id: 11,
            name: "Kapusta czerwona",
            price: 1.8,
            count: 0,
            unit: "kg"
        },
        {
            id: 12,
            name: "Jabłka",
            price: 5,
            count: 0,
            unit: "kg"
        },
        {
            id: 13,
            name: "Kapusta Kiszona",
            price: 2.4,
            count: 0,
            unit: "0,5kg"
        },
        {
            id: 14,
            name: "Kapusta Kiszona",
            price: 3.2,
            count: 0,
            unit: "1kg"
        },
        {
            id: 15,
            name: "Ogórki kiszone",
            price: 3.2,
            count: 0,
            unit: "Opakowanie(0.4kg)"
        }
    ])

    const handleAdd = id => {
        const _vegetables = vegetables.map(v => {
            if (id == v.id) {
                v.count = v.count + 1;

            }
            return v
        });
        setVegetables(_vegetables)

    }

    const handleSubstract = id => {
        const _vegetables = vegetables.map(v => {
            if (id == v.id) {
                v.count = v.count - 1;
                console.log(v.count)
                if (v.count === -1) {
                    v.count = 0
                }

            }
            return v
        });

    }

    const sumAll = (vegetables[0].count * vegetables[0].price)
        + (vegetables[1].count * vegetables[1].price)
        + (vegetables[2].count * vegetables[2].price)
        + (vegetables[3].count * vegetables[3].price)
        + (vegetables[4].count * vegetables[4].price)
        + (vegetables[5].count * vegetables[5].price)
        + (vegetables[6].count * vegetables[6].price)
        + (vegetables[7].count * vegetables[7].price)
        + (vegetables[8].count * vegetables[8].price)
        + (vegetables[9].count * vegetables[9].price)
        + (vegetables[10].count * vegetables[10].price)
        + (vegetables[11].count * vegetables[11].price)
        + (vegetables[12].count * vegetables[12].price)
        + (vegetables[13].count * vegetables[13].price)
        + (vegetables[14].count * vegetables[14].price)
        + (vegetables[15].count * vegetables[15].price)
    ;

    return (
        <>
            <Row>
                <Col>
                    <Table dark className="table-vegetables">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Warzywo</th>
                            <th>Cena</th>
                            <th>Ilość</th>
                            <th>Jednostka</th>
                            <th></th>
                            <th></th>
                            <th>Suma</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vegetables.map((vegetable, index) => {
                            return (
                                <tr>
                                    <th>{index + 1}</th>
                                    <th>{vegetable.name}</th>
                                    <th>{vegetable.price} zł</th>
                                    <th>{vegetable.count}</th>
                                    <th>{vegetable.unit}</th>
                                    <th onClick={() => handleAdd(index)}
                                        className="plus">+
                                    </th>
                                    <th onClick={() => handleSubstract(index)} className="minus">-</th>
                                    <th>{vegetable.count * vegetable.price} zł</th>
                                </tr>
                            )
                        })}
                        <tr>
                            <th colspan="5">suma</th>
                            <th>
                                {sumAll}
                            </th>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Contact vegetables={vegetables}/>
            </Row>
        </>
    )

}

export default OrderTable;