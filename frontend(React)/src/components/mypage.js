import React from 'react'
import './css/Mypage.css';

function mypage() {
	return (
		<div>
        <meta charSet="utf-8" />
        <tilte />
        <link rel="stylesheet" href="./css//Mypage.css" />
        <div className="sidebar">
          <a className="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div className="content1">
          <header>
            <h1>📖 MYPAGE</h1>
            <div className="container">
              <div className="profile">
                <div className="profile-image">
                  <img src={require('./img/1.jpg')} width="152px" height={152} alt="" />
                </div>
                <div className="profile-user-settings">
                  <h1 className="profile-user-name">_csh_</h1>
                  <button className="btn profile-edit-btn">프로필 편집</button>
                  <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true" /></button>
                </div>
                <div className="profile-stats">
                  <ul>
                    <li><span className="profile-stat-count">164</span> 팔로우 순위</li>
                    <li><span className="profile-stat-count">188</span> 좋아요 순위</li><br />
                    <li><span className="profile-stat-count">206</span> 게시물</li>
                    <li><span className="profile-stat-count">1,766</span> 팔로워</li>
                    <li><span className="profile-stat-count">11,872</span> 좋아요</li>
                  </ul>
                </div>
                <div className="profile-bio">
                  <p><span className="profile-real-name">최성호 </span> "React is too difficult.😢😢😢" </p>
                </div>
              </div>
              {/* End of profile section */}
            </div>
            {/* End of container */}
          </header>
          <h className="post">🕮 내가 작성한 글</h>
          <main>
            <div className="container">
              <div className="gallery">
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/1.jpg')} className="gallery-image" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/2.jpeg')} className="gallery-image" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/3.jpg')} className="gallery-image" alt="" />
                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true" />
                  </div>
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/4.jpeg')} className="gallery-image" alt="" />
                  <div className="gallery-item-type">
                    <span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true" />
                  </div>
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/5.jpeg')} className="gallery-image" alt="" />
                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true" />
                  </div>
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/6.jpg')} className="gallery-image" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/7.jpeg')} className="gallery-image" alt="" />
                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true" />
                  </div>
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/8.jpeg')} className="gallery-image" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/9.jpg')} className="gallery-image" alt="" />
                  <div className="gallery-item-type">
                    <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true" />
                  </div>
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/10.jpg')} className="gallery-image" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/1.jpg')} className="gallery-image" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
                <div className="gallery-item" tabIndex={0}>
                  <img src={require('./img/3.jpg')} className="gallery-image" alt="" />
                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /></li>
                      <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End of gallery */}
            </div>
            {/* End of container */}
          </main>
        </div>
      </div>
	)
}

export default mypage
