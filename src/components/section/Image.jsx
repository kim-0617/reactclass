import React from 'react'

function Image({ attr }) {
    return (
        <>
            <section id="imageType" className={`image__wrap ${attr[0]} ${attr[1]}`}>
                <h2>강렬한 색감은 사람을 이끈다</h2>
                <p>이렇게 강렬한 사람을 본적 있습니까? 이게 바로 색의 효과입니다. 빨강색은 뭐든 돋보기에 해주죠</p>
                <div className={`image__inner ${attr[2]}`}>
                    <article className="image img1">
                        <h3 className="image__title">빨강은 강렬한 색채의 상징</h3>
                        <p className="image__desc">
                            빨강은 무척이나 강렬한 색채입니다.
                            색 그자체가 의미하는 바도 명확하구요.
                            이렇게 무채색 계열에 빨강을 입히면 주목성을 이끌 수 있습니다...
                        </p>
                        <a href="/" title="자세히 보기" className="image__btn">자세히 보기</a>
                    </article>
                    <article className="image img2">
                        <h3 className="image__title">쓸쓸한 느낌의 검정</h3>
                        <p className="image__desc">
                            그림에서 무엇이 연상되시나요?
                            고독.. 겨울.. 기약없는 기다림... 이러한 것들이 내포되어 있죠..
                            검정색의 배경은 사람을 참 쓸쓸하게 하죠?
                        </p>
                        <a href="/" title="자세히 보기" className="image__btn yellow">자세히 보기</a>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Image