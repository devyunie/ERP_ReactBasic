import React from 'react'
import './ExampleTs2.css'

interface Props {
    employeeId?: string,
    name?: string,
    attendance: boolean
}

// function AttendanceStatus({ attendance }: Props) {
//     return (
//         <div className='td' style={{ color: attendance === true ? 'blue' : 'red' }}>●</div>
//     )
// }

function TableComponent({ employeeId, name, attendance }: Props) {
    const color = attendance ? 'blue' : 'red';
    return (
        <div className='tr'>
            <div className='td'>{employeeId}</div>
            <div className='td'>{name}</div>
            <div className='td' style={{ color: color}}>●</div>
        </div>
    )
}

function EmployeeTableComponentBase() {
    const employee1 = {
        employeeId: '202401',
        name: '홍길동',
        attendance: true
    };
    return (
        <div className='table'>
            <div className='th'>
                <div className='td'>사번</div>
                <div className='td'>이름</div>
                <div className='td'>출근상태</div>
            </div>
            <TableComponent {...employee1}/>
            <TableComponent employeeId='202402' name='이영희' attendance={true} />
            <TableComponent employeeId='202403' name='김철수' attendance={false} />
        </div>
    )

}



export default function ExampleTs2() {


    return (
        <EmployeeTableComponentBase />
    )
}
