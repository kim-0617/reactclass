import React from 'react'

function Banner({ attr }) {
    return (
        <>
            <section id="bannerType" className={`banner__wrap ${attr[0]} target`}>
                <h2 className="blind">배너 영역</h2>
                <div className="banner__inner">
                    <h3 className="title">강렬한 색의 조화</h3>
                    <p className="desc">
                        더 많은 정보는 아래 링크를 참조해 주세요
                        <a href="/">youtube.com/c/Webstoryboy</a>
                    </p>
                    <span className="small">한난대비</span>
                </div>
            </section>
        </>
    );
}

export default Banner