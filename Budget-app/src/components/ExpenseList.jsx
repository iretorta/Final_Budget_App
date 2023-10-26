import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap"
import { FiPlusCircle } from "react-icons/fi"
import { AiOutlineMinusCircle } from "react-icons/ai"
import { TiDelete } from "react-icons/ti"
import { AppContext } from "./contexts/Mycontext";

function ExpenseList() {
    const { expenses, dispatch,currency } = useContext(AppContext)

    return (
        <div>
            <Table className="Table">
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Budget Allocation</th>
                        <th>Increse by 10</th>
                        <th>Decrese by 10</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        expenses.map((e) => (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{currency}{e.amount}</td>
                                <td><FiPlusCircle className="inc"
                                    onClick={() => {
                                        let add = e.id;
                                        dispatch(
                                            {
                                                type : "INC_EX",
                                                payload:add
                                            }
                                        )
                                    }}
                                /></td>
                                <td><AiOutlineMinusCircle className="dec"
                                    onClick={() => {
                                        let dec = e.id
                                        dispatch(
                                            {
                                                type: "DEC_EX",
                                                payload: dec
                                            }
                                        )
                                    }}
                                /></td>
                                <td><TiDelete className="delete"
                                    onClick={() => {
                                        let val = e.id
                                        dispatch(
                                            {
                                                type: "DEL_EX",
                                                payload: val
                                            }
                                        )
                                    }}></TiDelete></td>

                            </tr>
                        ))
                    }

                </tbody>

            </Table>
        </div>
    );
}

export default ExpenseList;