import React from 'react';

const title = {
    small: "나만 아는 사이트!",
    big: "유용한 사이트 살펴보기",
    desc: "색에 대한 감각이 없는 사람에게는 굉장히 유용한 사이트 입니다."
}

const lis = [
    { text: "튜토리얼 사이트" },
    { text: "레퍼런스 사이트" },
    { text: "색 추천 사이트" },
    { text: "색 생성 사이트" },
    { text: "색상 게임 사이트" },
    { text: "Youtube 사이트" },
];

const Cont = ({ data }) => {
    return (
        <li>
            <a href="/">{data.text}</a>
        </li>
    );
}

function ImageText({ attr }) {
    return (
        <>
            <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]} target`}>
                <h2 className="blind">유용한 사이트 살펴보기</h2>
                <div className={`imgText__inner ${attr[3]}`}>
                    <div className="imgText__txt">
                        <span>{title.small}</span>
                        <h3>{title.big}</h3>
                        <p>
                            {title.desc}
                        </p>
                        <ul>
                            {lis.map((info, index) => {
                                return <Cont key={index} data={info} />
                            })}
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