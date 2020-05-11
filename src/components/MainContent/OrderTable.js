import React, {useState} from 'react';
import {Col, Row, Table} from "reactstrap"
import Contact from "./Contact"

const OrderTable = () => {


    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    const [vegetables, setVegetables] = useState([
        {
            id: 0,
            name: "podatoes",
            price: 20,
            count: 0,
            unit: "opak(15kg)"
        },
        {
            id: 1,
            name: "carrots",
            price: 15,
            count: 0,
            unit: "kg"

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
        setVegetables(_vegetables)
    }

    const sumAll = ()=>{
        return 0;
    }

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