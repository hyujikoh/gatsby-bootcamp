import React from "react";
import { Link } from "gatsby";
function AboutPage(){
    return <main>
        <title>자기소개</title>

        <div style={{display:"flex",gap:20}}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
        <Link to="/test">테스트</Link>
        <Link to="/">홈</Link>
</div>
        <h1>자기소개 페이지입니다.</h1>
    </main>
}


export default AboutPage;