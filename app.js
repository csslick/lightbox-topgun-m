// app.js

/* 
  1.이미지 썹네일 클릭 
    -> light box에 해당 이미지 url 변경 
    -> 팝업 display
  2.닫기 버튼 클릭 
    -> popup창 닫기
*/

const img = document.querySelectorAll('#gallery li');
// 각 썹네일 이미지 요소에 이벤트 등록
for(let i = 0; i < img.length; i++) {
  img[i].addEventListener('click', function(){
    // 이미지 탐색 후 URL값 가져오기
    let imgUrl = img[i].children[0].getAttribute('src');
    console.log(imgUrl);
  });
  // console.log(img[i].children[0]);
}
