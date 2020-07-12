import React, {useEffect, useState} from 'react';
import {Table} from "reactstrap"
import Contact from "./Contact";

const OrderTable = () => {


    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    const [load, setLoad] = useState(false)
    const [data, setData] = useState([])
    const [sum, setSum] = useState(0);

    useEffect(() => {
        fetch('https://api-eu-central-1.graphcms.com/v2/ckbezx6yk2ha401xy9iiadpxh/master', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({query: '{ warzywos { title, jednostka, price ,count} }'}),
        })
            .then(res => res.json())
            .then(res => setVegetables(res.data.warzywos))
            .then(() => setLoad(true))


    }, [])

    const [vegetables, setVegetables] = useState([
        {
            id: 0,
            count: 0,

        },
        {
            id: 1,
            count: 0,

        },
        {
            id: 2,
            count: 0,

        },
        {
            id: 3,
            count: 0,

        },
        {
            id: 4,
            count: 0,

        },
        {
            id: 5,
            count: 0,
        },
        {
            id: 6,
            count: 0,
        },
        {
            id: 7,
            count: 0,
        },
        {
            id: 8,
            count: 0,
        },
        {
            id: 9,
            count: 0,
        },
        {
            id: 10,
            count: 0,
        },
        {
            id: 11,
            count: 0,
        },
        {
            id: 12,
            count: 0,
        },
        {
            id: 13,
            count: 0,
        },
        {
            id: 14,
            count: 0,
        },
        {
            id: 15,
            count: 0,
        }
    ])

    const handleAdd = title => {
        const _vegetables = vegetables.map(v => {
            if (title === v.title) {
                v.count = v.count + 1;
            }
            return v
        });
        setVegetables(_vegetables)

    }

    const handleSubstract = title => {
        const _vegetables = vegetables.map(v => {
            if (title == v.title) {
                v.count = v.count - 1;
                if(v.count === -1 ){
                    v.count = v.count + 1;
                }
            }
            return v
        });
        setVegetables(_vegetables)

    }

    const decimal = function (n, k = 1) {
        const factor = Math.pow(10, k + 1);
        n = Math.round(Math.round(n * factor) / 10);
        return n / (factor / 10);
    }

    const {warzywos} = data;


    const sumAll = decimal(vegetables[0].count * vegetables[0].price)
        + decimal(vegetables[1].count * vegetables[1].price)
        + decimal(vegetables[2].count * vegetables[2].price)
        + decimal(vegetables[3].count * vegetables[3].price)
        + decimal(vegetables[4].count * vegetables[4].price)
        + decimal(vegetables[5].count * vegetables[5].price)
        + decimal(vegetables[6].count * vegetables[6].price)
        + decimal(vegetables[7].count * vegetables[7].price)
        + decimal(vegetables[8].count * vegetables[8].price)
        + decimal(vegetables[9].count * vegetables[9].price)
        + decimal(vegetables[10].count * vegetables[10].price)
        + decimal(vegetables[11].count * vegetables[11].price)
        + decimal(vegetables[12].count * vegetables[12].price)
    ;

    console.log(sumAll)


    return (
        <>
            {load &&
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
                                <th>{vegetable.title}</th>
                                <th>{decimal(vegetable.price)} zł</th>
                                <th>{decimal(vegetable.count)}</th>
                                <th>{vegetable.jednostka}</th>
                                <th onClick={() => handleAdd(vegetable.title)}
                                    className="plus">+
                                </th>
                                <th onClick={() => handleSubstract(vegetable.title)} className="minus">-</th>
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
            }
        </>
    )

}

export default OrderTable;