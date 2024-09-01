import { count } from 'console';
import React, { useState } from 'react'

//컴포넌트로 상태 전달
// - 부모 요소에서 자식 요소로 상태를 전달할 수 있음
// - 자식 요소의 속성으로 전달

// - 자식 컴포넌트에서 상태를 변경하면 부모 컴포넌트가 리렌더링됨
// - 부모컴포넌트의 자식 컴포넌트 중 해당 상태를 사용하지 않는 컴포넌트까지 리렌더링됨
// - 코드의 복잡성 (컴포넌트의 속성 복잡성)이 증가
// - 이 문제를 해결하기 위해 글로벌 상태로 관리하는 방법이 파생됨
// - 글로벌 상태 관리 기법으로 context, Redux, zustand라는 기법이 존재

export default function ForwordingStateComponent() {
    
    const [count, setCount] = useState<number>(0);
    const onIncrease = () =>{
        setCount(count + 1);
    }
    return (
        <div>
            <Child1 count={count} />
            <Child2 />
            <Child3 onIncrease={onIncrease}/>

        </div>
    )
}

interface Child1Props{
    count: number;
}

function Child1({count}:Child1Props){
    return (
        <div style={{height: '200px', backgroundColor:'#FFA7A7'}}>
            <h1>{count}</h1>
        </div>
    )
}
function Child2(){
    return (
        <div style={{height: '200px', backgroundColor:'#FAEF7D'}}></div>
    )
}

interface Child3Props{
    // count: number;
    // setCount: React.Dispatch<React.SetStateAction<number>>
    onIncrease: () => void;
}

function Child3({/*count,*/ /*setCount*/ onIncrease}: Child3Props){

    // const onIncrease = () =>{
    //     // setCount(count+1); //위에 에서 count 값을 받아와서 setCount 실행
    //     setCount((count)=> count+1); //위에서 count를 받지 않고 setCount 실행
    // }
    
    return (
        <div style={{height: '200px', backgroundColor:'#B7F0B1'}}>
            {/* <div>{count}</div> */}
            <button style={{width:'50px', height:'50px'}} 
                    onClick={onIncrease}>+</button>
        </div>
    )
}