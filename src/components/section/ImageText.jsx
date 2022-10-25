import React from 'react'

function ImageText({ attr }) {
    return (
        <>
            <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} target`}>
                <h2 className="blind">유용한 사이트 살펴보기</h2>
                <div className={`imgText__inner ${attr[3]}`}>
                    <div className="imgText__txt">
                        <span>나만 아는 사이트!</span>
                        <h3>유용한 사이트 살펴보기</h3>
                        <p>
                            색에 대한 감각이 없는 사람에게는
                            굉장히 유용한 사이트 입니다.
                        </p>
                        <ul>
                            <li><a href="/">튜토리얼 사이트</a></li>
                            <li><a href="/">레퍼런스 사이트</a></li>
                            <li><a href="/">색 추천 사이트</a></li>
                            <li><a href="/">색 생성 사이트</a></li>
                            <li><a href="/">색상 게임 사이트</a></li>
                            <li><a href="/">Youtube 사이트</a></li>
                        </ul>
                    </div>
                    <div className="imgText__img img1">
                        <a href="/">색 추천 사이트</a>
                    </div>
                    <div className="imgText__img img2">
                        <a href="/" className="blue">색상 게임 사이트</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ImageText