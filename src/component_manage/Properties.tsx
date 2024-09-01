import React, { ReactNode } from 'react'
//Properties(속성)
// - 부모 컴포넌트(호출부)에서 자식 컴포넌트로 데이터를 전달하기 위한 객체
// - 부모 컴포넌트에서는 HTML과 동일한 방식으로 (속성명 = 데이터)로 전달
// - 자식 컴포넌트에서는 함수의 매개변수 방식으로 속성 값을 받음
// - 전달할 수 있는 데이터는 변수에 담을수 있는 모든 데이터 형태
// - 컴포넌트가 리렌더링이 되는 기준
// - Properties는 부모 -> 자식으로 데이터 전송 O / 자식 -> 부모로 데이터 전송 X

interface Props{
    sequence: number;
    title: string;
    subTitle:string;
    contents:string;
    child?: ReactNode; //선택적
}
function Child({sequence, title, subTitle, contents, child}: Props){
    // const {title, subTitle, contents}=props;
    return(
        <div>
            <h1>{sequence}</h1>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>{contents}</p>
            {child}
        </div>
    )
}

export default function Properties() {
    const article = {
        sequence: 1,
        title: '엔디비아 맹추격',
        subTitle: '최경미 기자',
        contents: '행보로 풀이된다'
    }
    return (
        <>
            <Child sequence={article.sequence} title={article.title} subTitle={article.subTitle} contents={article.contents} />
            <Child sequence={2} title='NC소프트' subTitle='조아리 기자' contents='nc soft 기대'/>
            <Child {...article} child={<h1>안녕하세요</h1>}/> 
        </>
    )
}
