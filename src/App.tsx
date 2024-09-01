import React from 'react';
import './App.css';
import Component, { ClassComponent, FunctionComponent } from './component/Component'
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import Gallery from './example/ExampleTs1';
import ConditionalRender from './component_manage/ConditionalRender';
// import ExampleTs2 from './example/ExampleTs2';
import ListRender from './component_manage/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import ForwordingStateComponent from './interaction/\bForwordingStateComponent';
import HookComponent from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';
import CustomHook from './hook/CustomHook';
import { Outlet, Route, Routes, useLocation } from 'react-router';
import { disconnect } from 'process';
import QueryString from './router/QueryString';
import PathVariable from './router/PathVariable';
import PathMove from './router/PathMove';
import Zustand from './zustand/Zustand';

// react-router 패키지
// react의 SPA(single page application)에서 라우팅을 구현하기 위한 라이브러리
// 웹페이지에서 다양한 경로에 따른 뷰를 관리할 수 있도록 도와줌
// 웹어플리케이션 내에서 URL 이동이 있을때 브라우저를 새로고침 하지 않습니다. (서버에 새로운 요청을 보내지 않습니다.)
// 웹어플리케이션 내에서 네이비게이션 역할을 수행
// - npm install react-router
// - npm install react-router-dom

// - root 경로에 있는 index.tsx의 root.render()안에 <App/> 컴포넌트를 <BrowserRouter / > 컴포넌트로 묶어야함
// <BrowserRouter / > URL를 사용하여 브라우저 주소 표시줄에 현재위치를 저장하고 탐색할 수 있도록 하는 컴포넌트
//- 특정 URL 패턴에 대해서 컴포넌트를 각각 다르게 렌더링 하고자 한다면 App.tsx에 
//<Routs>컴포넌트와 <Route>컴포넌트를 사용하여 경로에 따라 화면을 다르게 보이게 하는게 가능
// <Routes> : <Route> 컴포넌트로 URL에 따른 컴포넌트들을 렌더링을 할수 있도록 도와줌
//<Route> :  URL 패턴에 따라서 렌더링 하고자 하는 컴포넌트를 지정하는 컴포넌트
// - path 속성: URL 패턴을 지정
// - element 속성 : 렌더링할 컴포넌트 지정 (요소 자체로 지정 가능)
// - index 속성: 현재 라우터의 기본 라우터 지정

function Layout(){
  //useLocation:
  // - 현재 경로에 대한 객체를 반환하는 react-router 훅함수
  // - pathname : 현재 path
  const {pathname} = useLocation();
  console.log(pathname);

    //<Outlet /> : 부모 <Route>에 해당 컴포넌트가 element로 등록되었을때 자식 <Route>의 element가 해당위치에 렌더링 되도록 하는 컴포넌트
    return(
      <div>
        <div style={{height: '100px', backgroundColor:'red'}}></div>
        <Outlet/>
        <div style={{height: '100px', backgroundColor:'blue'}}></div>
      </div>
    )
}

function App() {
  return (
    <Routes>
      <Route index element={<h1>기본페이지</h1>}/>
      <Route path='/component' element={<Layout/>}>
        <Route index element = {<Component/>} />
        <Route path = 'ClassComponent' element = {<ClassComponent/>} />
        <Route path = 'FunctionComponent' element = {<FunctionComponent/>} />
        <Route path = 'CurlyBraces' element={<CurlyBraces/>}/>
      </Route>

      <Route path = '/router'>
      //http://localhost:3000/router/query-String?name=홍길동&age=23
        <Route path = 'query-String' element={<QueryString/>}/>
      //http://localhost:3000/router/path-Valiable/홍길동
        <Route path = 'path-Valiable/:name' element={<PathVariable/>}/>
        <Route path = 'path-move' element={<PathMove/>}/>
      </Route>
      <Route path='/zustand' element={<Zustand/>}/>
      <Route path='*' element={<h1>404 Error !!!</h1>}/>
      {/* <Component /> */}
      {/* <ClassComponent />  */}
      {/* <FunctionComponent /> */}
      {/* <CurlyBraces /> */}
      {/* <Properties /> */}
      {/* <Gallery /> */}
      {/* <ConditionalRender /> */}
      {/* <ExampleTs2/> */}
      {/* <ListRender/> */}
      {/* <EventComponent /> */}
      {/* <StateComponent/> */}
      {/* <ForwordingStateComponent /> */}
      {/* <HookComponent1 /> */}
      {/* <HookComponent2/> */}
      {/* <CustomHook/> */}
    </Routes>
  );
}

export default App;
