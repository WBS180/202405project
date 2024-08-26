$(document).ready(function(){
  // 초기 텍스트 위치를 지정한다.
  $('.slider_text').css('left', -300);
});

$(document).ready(function () {
  // 슬라이더를 움직여주는 함수
  function moveSlider(index) {
    // 슬라이더를 이동합니다.
    var willMoveLeft = -(index * 600);
    $('.slider_panel').animate({ left: willMoveLeft }, 'slow');

    // control_button에 active클래스를 부여/제거합니다.
    $('.control_button[data-index=' + index + ']').addClass('active');
    $('.control_button[data-index!=' + index + ']').removeClass('active');

    // 글자를 이동합니다.
    $('.slider_text[data-index=' + index + ']').show().animate({
      left: 0
    }, 'slow');
    $('.slider_text[data-index!=' + index + ']').hide('slow', function () {
      $(this).css('left', -300);
    });
  }

  // 초기 텍스트 위치 지정 및 data-index 할당
  $('.slider_text').css('left', -300).each(function (index) {
    $(this).attr('data-index', index);
    $(this).css('color', 'white');
  });

  // 컨트롤 버튼의 클릭 핸들러 지정 및 data-index 할당
  $('.control_button').each(function (index) {
    $(this).attr('data-index', index);
  }).click(function () {
    var index = $(this).attr('data-index');
    moveSlider(index);
  });

  // 초기 슬라이더 위치 지정
  var randomNumber = Math.round(Math.random() * 4);
  moveSlider(randomNumber);
});

// 배경용
// 페이지가 로드될 때 배경이미지를 켜는 효과 적용
window.onload = function() {
  var background = document.getElementById('woprojcet');
  var body = document.body;
  var canvas = document.querySelector('.animation_canvas');
  var youtubeVideos = document.querySelectorAll('#youtube iframe');

  // 페이지 로드 후 바로 어둡게 효과 적용
  background.style.opacity = '0.3'; // 배경 어둡게
  body.style.backgroundColor = '#000'; // 배경 색 어둡게
  body.style.transition = 'background-color 1s, opacity 1s'; // 트랜지션 효과 적용

  // 캔버스와 유튜브 영상들을 숨김
  canvas.style.opacity = '0';
  youtubeVideos.forEach(function(video) {
      video.style.opacity = '0';
  });

  // 2초 뒤에 다시 밝아지는 효과 적용
  setTimeout(function() {
      background.style.opacity = '1'; // 배경 밝게
      body.style.backgroundColor = '#fff'; // 배경 색 밝게

      // 캔버스와 유튜브 영상들을 보임
      canvas.style.opacity = '1';
      youtubeVideos.forEach(function(video) {
          video.style.opacity = '1';
      });
  }, 2000);

  // 페이지 내용이 나타나는 애니메이션
  body.style.opacity = '0';
  body.style.animation = 'fadeIn 1s ease forwards';
};





