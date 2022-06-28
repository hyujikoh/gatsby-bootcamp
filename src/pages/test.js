import { Link } from "gatsby";
import React from "react";

function TestPage(){
    return <main>
        <title>test</title>


<div style={{display:"flex",gap:20}}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
        <Link to="/test">테스트</Link>
        <Link to="/">홈</Link>
</div>
            

        <h1>테스트 페이지입니다.</h1>
    </main>
}


export default TestPage;