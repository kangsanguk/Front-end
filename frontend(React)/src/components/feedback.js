import React from 'react'
import './css/Feedback.css';

function feedback() {
  return (
    <div>
        <meta charSet="utf-8" />
        <tilte />
        <div className="sidebar">
          <a className="active" href="#ALL">ALL</a>
          <a href="#OUTER">OUTER</a>
          <a href="#TOP">TOP</a>
          <a href="#SHIRTS">SHIRTS</a>
          <a href="#BOTTOM">BOTTOM</a>
          <a href="#SHOES">SHOES</a>
          <a href="#ACC">ACC</a>
          <a href="#SIMILAR">SIMILAR</a>
        </div>
        <div className="content1">
          <h1> 💬 FEEDBACK</h1>
          <br /><br /><br />
          <div className="container">
            <div className="gallery">
              <a href>
                <div className="gallery-item">
                  <img className="gallery-image" src={require('./img/1.jpg')} />
                  <h1 className="postname">OOTD ~ 👍</h1>
                  <h2 className="postuser">작성자 : <em> _csho_</em> </h2>
                </div>
              </a>
              <a href>
                <div className="gallery-item">
                  <img className="gallery-image" src={require('./img/2.jpeg')} />
                  <h1 className="postname">OOTD ~ 👍</h1>
                  <h2 className="postuser">작성자 : <em> _csho_</em> </h2>
                </div>
              </a>
              <a href>
                <div className="gallery-item">
                  <img className="gallery-image" src={require('./img/3.jpg')} />
                  <h1 className="postname">OOTD ~ 👍</h1>
                  <h2 className="postuser">작성자 : <em> _csho_</em> </h2>
                </div>
              </a>
              <a href>
                <div className="gallery-item">
                  <img className="gallery-image" src={require('./img/4.jpeg')} />
                  <h1 className="postname">OOTD ~ 👍</h1>
                  <h2 className="postuser">작성자 : <em> _csho_</em> </h2>
                </div>
              </a>
              <a href>
                <div className="gallery-item">
                  <img className="gallery-image" src={require('./img/5.jpeg')} />
                  <h1 className="postname">OOTD ~ 👍</h1>
                  <h2 className="postuser">작성자 : <em> _csho_</em> </h2>
                </div>
              </a>
              <a href>
                <div className="gallery-item">
                  <img className="gallery-image" src={require('./img/6.jpg')} />
                  <h1 className="postname">OOTD ~ 👍</h1>
                  <h2 className="postuser">작성자 : <em> _csho_</em> </h2>
                </div>
              </a>
              <a href>
                <div className="gallery-item">
                  <img className="gallery-image" src={require('./img/7.jpeg')} />
                  <h1 className="postname">OOTD ~ 👍</h1>
                  <h2 className="postuser">작성자 : <em> _csho_</em> </h2>
                </div>
              </a>
              <a href>
                <div className="gallery-item">
                  <img className="gallery-image" src={require('./img/8.jpeg')} />
                  <h1 className="postname">OOTD ~ 👍</h1>
                  <h2 className="postuser">작성자 : <em> _csho_</em> </h2>
                </div>
              </a>
              <a href>
                <div className="gallery-item">
                  <img className="gallery-image" src={require('./img/9.jpg')} />
                  <h1 className="postname">OOTD ~ 👍</h1>
                  <h2 className="postuser">작성자 : <em> _csho_</em> </h2>
                </div>
              </a>
              <a href>
                <div className="gallery-item">
                  <img className="gallery-image" src={require('./img/10.jpg')} />
                  <h1 className="postname">OOTD ~ 👍</h1>
                  <h2 className="postuser">작성자 : <em> _csho_</em> </h2>
                </div>
              </a>
            </div>
            <table className="arrows-div">
              <tbody><tr>
                  <td className="back-td"><a href="#" className="button prev">Back</a></td>
                  <td className="paging-td">  
                    <a className="page-numbers current">1</a>
                    <a className="page-numbers" href="#">2</a>
                    <a className="page-numbers" href="#">3</a>
                    <a className="page-numbers" href="#">4</a>
                    <a className="page-numbers" href="#">5</a></td>
                  <td className="prev-td"> <a href="#" className="button next">Next</a></td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </div>
  )
}

export default feedback