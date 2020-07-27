import React from 'react'

export default ({person}) => (
    <div>
        <div><b>Выбран пользователь:</b> {person.firstName + ' ' + person.lastName}</div>
        <div>
            <b>Описание:</b> {person.description}
        </div>
        <div>
            <b>Адрес проживания:</b> {person.address.streetAddress}
        </div>
        <div>
            <b>Город:</b> {person.address.city}
        </div>
        <div>
            <b>Провинция/штат:</b> {person.address.state}
        </div>
        <div>
            <b>Индекс:</b> {person.address.zip}
        </div>
    </div>
)