import React from 'react'

export default function CurlyBraces() {
    //Curly Braces:
    // - JSX 에서 자바스크립트 표현식을 작성할 때 사용하는 방법
    // - JSX 안에 {}로 영역을 지정하여 그 안에 자바스크립트를 작성

    const title = 'Curly Braces';
    //1. 요소 컨텐츠에 자바스크립트 표현식을 쓰고자 할 때 사용
    //2. 주석 처리 - HTML 주석을 사용할 수 없기 떄문에 JS 주석을 사용
    //3. JSX에서 인라인 스타일을 적용할 떄 사용
    // - JSX에서 인라인 스타일은 문자열X 객체로 표현 {{ value }} 
    return (
        <>
            <h1 style={{backgroundColor: 'red'}}>{title}</h1>
            <p>{10+30}</p>
        </>
    )
}
