import React, { Component } from 'react';

export default class New extends Component {
    render(){
        return(
            <div style={{display:"flex", marginTop:"6rem", alignItems:"center", flexDirection:"column"}}>
                <h1>글쓰기</h1>
                <div style={{border:"1px solid black", width:'50%', height:"50rem"}}>
                    <form style={{margin:"2rem"}}>
                        <h3 >제목</h3>
                        <input
                            placeholder="제목입력"
                        />
                        <h3 style={{marginTop:"2rem"}}>내용</h3>
                        <textarea
                            placeholder="내용입력"
                            cols="100"
                            rows="20"
                        /><br/>
                        <button>제출</button>
                    </form>
                </div>
            </div>
            
        );
    }
}