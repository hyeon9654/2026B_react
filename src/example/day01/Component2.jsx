// Component2.jsx 만들고 78~79 코드 따라서 작성
// App.jsx -> Component2.jsx

// 1. 일반 함수 형식으로 작성한 컴포넌트 생성
function FrontComp( props ) { 
    return (<>
    <li>프론트엔드</li>
    <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>jQuery</li>
    </ul>
    </>)    
}
 //2. 화살표 함수 형식으로 작성한 컴포넌트 생성
const BackComp = ( props ) => {
    return (<>
    <li>백엔드</li>
    <ul>
        <li>Java</li>
        <li>Oracle</li>
        <li>JSP</li>
        <li>Spring Boot</li>
    </ul>
    </>)    
}
// 3. 익명 함수 형식으로 작성한 컴포넌트 생성
const FormComp = function( props ) { 
    return (<>
    <form>
        <select name="gubun">
            <option value="front">프론트엔드</option>
            <option value="front">백엔드</option>
        </select>
        <input type="text" name="title"/>
        <input type="summit" value="추가"/>
    </form>
    </>)
}
// 4. 3가지 컴포넌트를 합치는 컴포넌트 생성 [최상위 컴포넌트]
export default function Component2( props ){ 
    return (<>
    <div>
        <h2>React - Component </h2>
        <ol> 
            <FrontComp></FrontComp>
            <BackComp/>
        </ol>
        <FormComp/>
        </div>
    </>)
}


