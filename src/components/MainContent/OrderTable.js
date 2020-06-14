import React, {useEffect, useState} from 'react';
import {Table} from "reactstrap"
import Contact from "./Contact"
import gql from 'graphql-tag';

const OrderTable = () => {


    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://api-eu-central-1.graphcms.com/v2/ckbezx6yk2ha401xy9iiadpxh/master', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: '{ warzywos {  price } }' }),
        })
            .then(res => res.json())
            .then(res => setData(res.data));

    },[])

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
            name: "Marchewka (myta)",
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

    console.log(data);

    const sumAll = (vegetables[0].count * data[0])
        + (vegetables[1].count * data[1])
        + (vegetables[2].count * data[2])
        + (vegetables[3].count * data[3])
        + (vegetables[4].count * data[4])
        + (vegetables[5].count * data[5])
        + (vegetables[6].count * data[6])
        + (vegetables[7].count * data[7])
        + (vegetables[8].count * data[8])
        + (vegetables[9].count * data[9])
        + (vegetables[10].count * data[10])
        + (vegetables[11].count * data[11])
        + (vegetables[12].count * data[12])
        + (vegetables[13].count * data[13])
        + (vegetables[14].count * data[14])
        + (vegetables[15].count * data[15])
    ;

    const decimal = function (n, k = 1) {
        const factor = Math.pow(10, k + 1);
        n = Math.round(Math.round(n * factor) / 10);
        return n / (factor / 10);
    }


    return (
        <>

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
                            <th>{decimal(vegetable.price)} zł</th>
                            <th>{decimal(vegetable.count)}</th>
                            <th>{vegetable.unit}</th>
                            <th onClick={() => handleAdd(index)}
                                className="plus">+
                            </th>
                            <th onClick={() => handleSubstract(index)} className="minus">-</th>
                            <th>{decimal(vegetable.count * vegetable.price)} zł</th>
                        </tr>
                    )
                })}
                <tr>
                    <th colspan="5">suma</th>
                    <th>
                        {decimal(sumAll)} zł
                    </th>
                </tr>
                </tbody>
            </Table>

            <Contact vegetables={vegetables}/>

        </>
    )

}

export default OrderTable;