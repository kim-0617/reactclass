import React from 'react';

const title = {
    small: "색상 mbti",
    big: "강렬한 색감은 사람을 이끈다 👏"
}

const data = [
    {
        class: "t1",
        title: "강렬한 빨강",
        desc: "빨간색은 너무도 강렬한 색입니다. 주의를 기해주세요. 빨강은 피, 태양 정렬, 열정, 주의, 식욕 증진의 효과가 있습니다.",
        link: "더보기",
    },
    {
        class: "t2",
        title: "시원한 파랑",
        desc: "파랑색은 보기만 해도 시원해지는 색이죠? 그렇습니다. 파랑은 바다, 청량감, 시원함, 식욕 감퇴등의 효과가 있습니다.",
        link: "더보기",
    },
    {
        class: "t3",
        title: "청초한 녹색",
        desc: "녹색은 자연의 색이죠. 슈렉이나 헐크 말고 인간과 관련된 녹색은 없을걸요? 녹색은 편안함, 식욕 감퇴등의 효과가 있습니다.",
        link: "더보기",
    },
    {
        class: "t4",
        title: "깨끗한 흰색",
        desc: "흰색은 모든 색의 시작점이라고 생각합니다. 굉장히 중요한 색이지요. 세상에 흰색보다 깨끗한 색이 있을까요",
        link: "더보기",
    },
    {
        class: "t5",
        title: "우아한 보라",
        desc: "보라색은 빨강색과 파랑색을 섞었을 때 나오는 색깔이죠. 보라색은 그 자체만으로 우아하고 엘레강스한 느낌을 내죠",
        link: "더보기",
    },
    {
        class: "t6",
        title: "암울한 검정",
        desc: "여러분들은 검정색을 보면 무슨감정을 느끼십니까? 검정은 예로부터 주검, 쓸쓸, 고독을 나타내곤 했었죠",
        link: "더보기",
    },
];

const Cont = ({ data }) => {
    return (
        <div className={`text ${data.class}`}>
            <h3 className="text__title">{data.title}</h3>
            <p className="text__desc">
                {data.desc}
            </p>
            <a href="/" className="text__btn">{data.link}</a>
        </div>
    );
}

function Text({ attr }) {
    return (
        <>
            <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]} ${attr[2]} target`}>
                <span>{title.small}</span>
                <h2 className="mb70">{title.big}</h2>
                <div className="text__inner">
                    {data.map((info, index) => {
                        return <Cont key={index} data={info} />
                    })}
                </div>
            </section>
        </>
    );
}

export default Text