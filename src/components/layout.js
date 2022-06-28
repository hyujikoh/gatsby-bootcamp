import React from "react";
import { Link } from "gatsby";
function Layout( { children }){
    return(
        <>
        <main>
            
            <div style={{display:"flex",gap:20}}>
            <Link to="/">홈</Link>
            <Link to="/about">어바웃</Link>
            <Link to="/test">테스트</Link>
            <Link to="/">홈</Link>
            </div>

            {children}

            <div>Copyright..</div>


        </main>
            
        </>
        
    )
}

export default Layout;