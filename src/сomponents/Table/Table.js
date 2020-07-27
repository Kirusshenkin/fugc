import React from 'react'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown,faSortUp } from '@fortawesome/free-solid-svg-icons';


export default props => (
    <Table>
        <thead>
            <tr>
                <th onClick={props.onSort.bind(null, 'id')}>
                    ID {props.sortField === 'id' ? <FontAwesomeIcon icon={(props.sort === 'desc') ? faSortDown : faSortUp}/> : null}
                </th>
                <th onClick={props.onSort.bind(null, 'firstName')}>
                    First Name {props.sortField === 'firstName' ? <FontAwesomeIcon icon={(props.sort === 'desc') ? faSortDown : faSortUp}/> : null}
                </th>
                <th onClick={props.onSort.bind(null, 'lastName')}>
                    Last Name {props.sortField === 'lastName' ? <FontAwesomeIcon icon={(props.sort === 'desc') ? faSortDown : faSortUp}/> : null}
                </th>
                <th onClick={props.onSort.bind(null, 'email')}>
                    Email {props.sortField === 'email' ? <FontAwesomeIcon icon={(props.sort === 'desc') ? faSortDown : faSortUp}/> : null}
                </th>
                <th onClick={props.onSort.bind(null, 'phone')}>
                    Phone {props.sortField === 'phone' ? <FontAwesomeIcon icon={(props.sort === 'desc') ? faSortDown : faSortUp}/> : null}
                </th>
            </tr>
            </thead>
            <tbody>
                {props.data ? props.data.map(item => (
                <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
                )): null}
        </tbody>
    </Table>
)