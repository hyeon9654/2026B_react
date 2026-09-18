import { useState, useEffect } from "react";

function RandomUser( props ){
    const [myJSON , setMyJSON] = useState( { result : [] });    // 객체안에 빈배열 속성으로 초기화
    // useEffect( () => { 하고싶은코드 }, [ ] ) // 최초 1번만 실행
    useEffect( async function(){
        const response = axios( 'https://api.randomuser.me?results=10');
        const data = response.data;
    }, [])
}
    //
    let reTag = myJSON.result.map((data)=>{
        return(
            <tr key={data.login.md5}>
                <td><img src={data.picture.thumbnail} alt={data.login.username}/></td>
                <td><a href="/" onClick={(e)=>{
                    e.preventDefault();
                    props.onProfile(data);
                }}>{data.login.username}</a>
                </td>
                <td>{data.name.title} {data.name.first} {data.name.last}</td>
                <td>{data.nat}</td>
                <td>{data.email}</td>
            </tr>
        );
    });
    