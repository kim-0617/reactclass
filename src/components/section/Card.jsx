import React from 'react';

const title = {
    title: "화가 되어보기🧐",
    desc: "색에 대해 알았다면, 그림을 그려볼까요?"
}

const data = [
    {
        num: "01",
        title: "밑그림 그리기",
        desc: "그림을 그리기에 앞서서 먼저 밑그림을 그려야겠죠? 아 참 그전에 뭘 그릴지 목표부터 정해야 합니다. 우선 일상생활에서 흔히 볼 수 있는 것들을 그려봐요 우리.",
        link: "더 자세히 보기",
    },

    {
        num: "02",
        title: "채색 구상하기",
        desc: "밑그림을 훌륭하게 스케치 했다면, 채색을 해야겠죠? 꼭 그 물체가 있는 그대로의 색을 칠할 필요 없습니다. 본인의 독창성에 맞게 색을 생각해보죠.",
        link: "더 자세히 보기",
    },

    {
        num: "03",
        title: "채색 하기",
        desc: "마무리 단계 입니다. 색을 다 구상 했다면, 물감으로 칠해 봐야 겠죠? 앞서서 배웠던 색의 효과와 힘에대해 주의하면서 색을 채워줍니다. 완성!",
        link: "더 자세히 보기",
    },
];

const Cont = ({ data }) => {
    return (
        <article className="card">
            <figure className="card__header">
                <img src={`assets/img/card_bg${data.num}.jpg`} alt={`${data.title}`} />
            </figure>
            <div className="card__body">
                <h3 className="tit">{data.title}</h3>
                <p className="desc">
                    {data.desc}
                </p>
                <a href="/" className="btn">
                    {data.link}
                    <span aria-hidden="true">
                        <svg width="101" height="8" viewBox="0 0 101 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100.354 4.35355C100.549 4.15829 100.549 3.84171 100.354 3.64645L97.1716 0.464466C96.9763 0.269204 96.6597 0.269204 96.4645 0.464466C96.2692 0.659728 96.2692 0.976311 96.4645 1.17157L99.2929 4L96.4645 6.82843C96.2692 7.02369 96.2692 7.34027 96.4645 7.53553C96.6597 7.7308 96.9763 7.7308 97.1716 7.53553L100.354 4.35355ZM0 4.5H100V3.5H0V4.5Z"
                                fill="black" />
                        </svg>
                    </span>
                </a>
            </div>
        </article>
    );
}

function Card({ attr }) {
    return (
        <>
            <section id="cardType" className={`card__wrap ${attr[0]} ${attr[1]} target`}>
                <h2>{title.title}</h2>
                <p>{title.desc}</p>
                <div className={`card__inner ${attr[2]}`}>
                    {data.map((info, index) => {
                        return <Cont data={info} key={index} />
                    })}
                </div>
            </section>
        </>
    );
}

export default Card