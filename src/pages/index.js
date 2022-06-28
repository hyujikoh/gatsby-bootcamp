import React from "react"
import { Link } from "gatsby";
const IndexPage =() =>{
  return (
<main>
    <title>Home Page???</title>

    <div style={{display:"flex",gap:20}}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
        <Link to="/test">테스트</Link>
        <Link to="/">홈</Link>
</div>
    <h1>Home Page!!!</h1>

</main>

  );
};


export default IndexPage;
