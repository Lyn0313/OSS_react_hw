import React from 'react';

const Novel = () => {
    return (
        <div>
          <table className="table">
            <tr>
              <td><a href="http://page.kakao.com"><div>카카오페이지<div className="Image"><img src="chrome-search://thumb2/http://page.kakao.com"/></div></div></a></td>
              <td><a href="http://novel.naver.com/webnovel"><div>네이버 웹소설<img src="chrome-search://thumb2/http://novel.naver.com/webnovel"/></div></a></td>
              <td><div className="empty"></div></td>
            </tr>
            <tr>
              <td><div className="empty"></div></td>
              <td><div className="empty"></div></td>
              <td><div className="empty"></div></td>
            </tr>
          </table>
        </div>
    );
};

export default Novel;
