import React from 'react';

const data = {
    title: "강렬한 색의 조화",
    desc: "더 많은 정보는 아래 링크를 참조해 주세요",
    link: "youtube.com/c/Webstoryboy",
    small: "한난대비"
}

function Banner({ attr }) {
    return (
        <>
            <section id="bannerType" className={`banner__wrap ${attr[0]} target`}>
                <h2 className="blind">배너 영역</h2>
                <div className="banner__inner">
                    <h3 className="title">{data.title}</h3>
                    <p className="desc">
                        {data.desc}
                        <a href="/">{data.link}</a>
                    </p>
                    <span className="small">{data.small}</span>
                </div>
            </section>
        </>
    );
}

export default Banner