import { subscribe } from 'diagnostics_channel';
import { stat } from 'fs';
import React, { useEffect, useState } from 'react'

    // CustomHook
    // - 리엑트에서는 훅 함수의 호출은 반드시 함수형 컴포넌트 코드 블럭에서만 호출가능
    // - 함수명의 시작을 use로 시작하는 이름으로 작성하여 커스텀 훅 함수를 만들 수 있음
    // - 커스텀 훅에는 다른 훅 함수들이 포함 될 수 있음

//첫글자가 대문자이면 컴포넌트 함수이다. (TSX)

//1. 현재 훅 함수를 사용하고 있는데 stateFunction 같은경우는 함수형 컴포넌트가 아니기 때문에 사용이 불가능 하다
// const stateFunction = () => {
const useStateFunction = () => {
    const [state1, setState1] = useState<number>(0);
    const [state2, setState2] = useState<number>(0);
    useEffect(() => {
        console.log('state1 변경!');
    },[state1]);

    useEffect(() => {
        console.log('state2 변경!');
    },[state2]);

    useEffect(() => {
        console.log('state1 또는 state2 변경!');
    },[state1,state2]);

    return {state1, state2, setState1, setState2};
};


export default function CustomHook() {
    // const stateFunction = () => {
    //     const [state1, setState1] = useState<number>(0);
    //     const [state2, setState2] = useState<number>(0);
    //     useEffect(() => {
    //         console.log('state1 변경!');
    //     },[state1]);
    
    //     useEffect(() => {
    //         console.log('state2 변경!');
    //     },[state2]);
    
    //     useEffect(() => {
    //         console.log('state1 또는 state2 변경!');
    //     },[state1,state2]);
    
    //     return [state1, state2, setState1, setState2];
    // };
    
    const {state1,state2,setState1,setState2} = useStateFunction(); //stateFunction 에서 useStateFunction로 변경
    
    const onState1Add = () => {
        setState1(state1+1);
    }
    const onState2Add = () => {
        setState2(state2+1);
    }
    return (
        <div>
            <div>{state1} <button onClick={onState1Add}>state1+1</button></div>
            <div>{state2} <button onClick={onState2Add}>state2+1</button></div>
            <SubComponent/>
        </div>
    )
}

function SubComponent() {

    const {state1,state2,setState1,setState2} = useStateFunction(); //stateFunction 에서 useStateFunction로 변경

    const onState1Add = () => {
        setState1(state1+1);
    }
    const onState2Add = () => {
        setState2(state2+1);
    }
    return (
        <div>
            <div>{state1} <button onClick={onState1Add}>state1+1</button></div>
            <div>{state2} <button onClick={onState2Add}>state2+1</button></div>
        </div>
    )
}
