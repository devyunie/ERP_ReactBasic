import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function QueryString() {
    //useSearchParam() :
    // - url에서 Query String 값을 받을 수 있도록 하는 react-router의 훅 함수
    const [queryParam] = useSearchParams();
    const name = queryParam.get('name');
    const age = queryParam.get('age');

    return (
        <div>
            <div style={{backgroundColor:'red'}}></div>
            NAME : {name} / AGE : {age};
        </div>
    )
}
