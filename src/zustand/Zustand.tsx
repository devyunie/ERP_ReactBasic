import { Address } from 'cluster';
import React, { ChangeEvent } from 'react'
import { create } from 'zustand'

//Zustand :
// - React에서 사용할 수 있는 상태관리 패키지 중하나
// - 상태 관리 패키지 중 과거에는 Redux 패키지가 가장 많이 사용됐자먼 현재는 Zustand로 이동중
// - Redux 고질적 문제점인 복잡한 코드 구조 및 높은 학습 곡선이 그 이유
// - zustand의 단순한 코드 구조와 낮은 학습 곡선이 매우 낮음
// - Redux, Mobx 등과 같은 타패키지에 비해 가벼움 - 빌드 시 패키징 속도가 굉장히 빠름 / 번들의 크기가 줄어듬

// 패키지 설치:
// npm install zustand

// zustand를 이용한 글로벌 상태 선언 방법
// - zustand 패키지에 있는 create 함수로 store를 생성 할 수 있음
// - store : 관리할 상태들과 각 상태에 해당하는 상태 변경 함수들의 집합
// - create 함수를 호출하면 store를 반환하는 훅함수를 반환

// create:
// - 매개변수로 set 매개변수를 받는 콜백함수를 요구함
// - 매개변수로 받는 set 상태 변경을 위한 함수
// - create함수의 매게변수로 전달된 콜백함수는 store 객체를 반환해야함

//const [address, setAddress] = useState(String)('');

// - typeScript에서는 zustand의 store 타입을 create함수의 제너릭으로 전달해줘야함

interface Store {
    address: string;
    //set함수의 매개변수로는 현재 상태(store)를 받는 콜백함수를 전달
    //set함수에 전달한 콜백함수는 변경된 상태 (store) 를 반환

    setAddress: (address: string) => void;
}

const useStore = create<Store>((set) => ({
    address: '',
    setAddress: (address: string) => set((state) => ({ ...state, address }))
}));

export default function Zustand() {

    //zustand로 선언한 상태 사용 방법
    //const { 상태,...,상태변경함수 ,.... } = useStore훅함수();
    const { address, setAddress } = useStore ();
    // const onChange = (event:ChangeEvent<HTMLInputElement>) => {
    //     const { value } = event.target;
    //     setAddress(value);
    // }
    return (
        <div style={{padding:'40px', height:'400px', backgroundColor:'gray'}}>
            {/* <h1>{address}</h1>
            <input value={address} onChange={onChange} /> */}
            <Subcomponent1/>
            <Subcomponent2/>
        </div>
    )
}

function Subcomponent1(){
    return(
        <div style={{margin:'40px',height:'130px', backgroundColor:'red'}}>
            <h1>안녕</h1>
            <Sub2Component1/>
        </div>
    )
}

function Subcomponent2(){
    return(
        <div style={{margin:'40px',height:'130px', backgroundColor:'red'}}>
            <Sub2Component2/>
        </div>
    )
}

function Sub2Component1(){
    const {address} =useStore();
    return(
        <div style={{height:'75px', backgroundColor:'blue'}}>
            <h3 style={{color:'yellow'}}>{address}</h3>
        </div>
    )
}

function Sub2Component2(){
    const {address,setAddress} =useStore();

    const onChange = (event:ChangeEvent<HTMLInputElement>) =>{
        const {value} = event.target;
        setAddress(value);
    }

    return(
        <div style={{height:'75px', backgroundColor:'blue'}}>
            <h3 style={{color:'yellow'}}>{address}</h3>
            <input value={address} onChange={onChange} type="text" />
        </div>
    )
}