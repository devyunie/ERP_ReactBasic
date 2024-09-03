import axios from 'axios'
import React from 'react'

// axios 패키지
// - js에서 사용하는 HTTP 클라이언트 라이브러리
// - nodeJs와 브라우저 환경에서 동작함
// - Fetch API, jQuery기반의 Ajax 보다 간편함
// - axios는 기본적으로 비동기 처리를 수행함

//npm install axios
export default function Axios() {

    //axios 객체
    // - http method에 해당하는 메서드를 포함하고 잇음
    // - 각각의 http method 메서드는 메개변수로 URL, DATA, OPTION을 받을수 있음 ->DATA 주의 Request body 의미
    // - get ,delete : url / option
    // - post put patch : url data option 
    axios
        .get('http://3.34.99.196:400/api/quantification-modelg')
        //각각의 http method메서드는 then으로 response 객체를 받는 콜백함수를 전달
        .then((response)=>{
            //response 객체는 status, header, body(data)를 포함 하고 있음
            console.log(response.data);
        })
        //http 요청에 대한 실패 (network error 400~500상태) 처리
        .catch((error)=>{
            //AxiosError 객체를 받아옴
            //만약 응답이 존재하는 실패일 경우 axioserror 객체 안이 response 속성으로 해당 응답에 접근
            console.log(error)
        })
        //option 매개변수
        // - request에 대한 각종 설정
        axios.get('http://3.34.99.196:4000/api/quantification-model',{
            headers: {Authorization: 'Bearer otsdflsf'},
            params: { 'time': '1213'}
        })
        //주의 request body가 존재하는 요청에 대해서는 매개변수의 위치 주의
        axios.post('http://3.34.99.196:4000/api',{} ,{
            headers: {Authorization: 'Bearer otsdflsf'},
            params: { 'time': '1213'}
        })
        //CORS Error
        //Cross Origin Resource Sharing
        //- JS를 이용한 request 요청시 출처로 다른 요청에 대하여 자원 공유 정책
        
        axios.get('https://naver.com')

    return (
        <div>Axios</div>
    )
}
