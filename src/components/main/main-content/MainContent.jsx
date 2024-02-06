import React from 'react'

const MainContent = () => {

    const articleItems = [
        {
            imgUrl: '/main/article-preview.jpg',
            title: 'Lorem Ipsum is simply dummy',
            user: 'alco',
            date: '26 Janvier 2023'
        },
        {
            imgUrl: '/main/article-preview.jpg',
            title: 'Lorem Ipsum is simply dummy',
            user: 'alco',
            date: '26 Janvier 2023'
        },
        {
            imgUrl: '/main/article-preview.jpg',
            title: 'Lorem Ipsum is simply dummy',
            user: 'alco',
            date: '26 Janvier 2023'
        },
        {
            imgUrl: '/main/article-preview.jpg',
            title: 'Lorem Ipsum is simply dummy',
            user: 'alco',
            date: '26 Janvier 2023'
        },
    ]





    const articleElements = articleItems.map((item, index) => {
        return (
            <div key={index} className="similar-articles__item item-similar">
                <div className="item-similar__body">
                    <div className="item-similar__img">
                        <img src={item.imgUrl} alt="article photo" />
                    </div>
                    <h2 className="item-similar__title">
                        <a href="#!" className="item-similar__title-link">{item.title}</a>
                    </h2>
                    <div className="item-similar__info">
                        <div className="item-similar__user">{item.user}</div>
                        <div className="item-similar__date">{item.date}</div>
                    </div>
                </div>

            </div>
        )
    })


    return (
        <div className="main-content">
            <div className="bread-crumbs">
                <a href='#!' className="bread-crumbs_item">Home</a>
                <a href='#!' className="bread-crumbs_item">Lorem Ipsum is</a>
                <a href='#!' className="bread-crumbs_item">Lorem Ipsum is simply dummy</a>
            </div>
            <article className="article">
                <h1 className="article__title">Lorem Ipsum is simply dummy</h1>
                <p className="article__text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </p>
            </article>
            <div className="similar-articles">
                <a href='#!' className="similar-articles__title">Similar articles</a>
                <div className="similar-articles__body">
                    {articleElements}
                </div>
            </div>
        </div>
    )
}

export default MainContent