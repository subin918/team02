$(document).ready(function () {
  // 각 테이블 섹션과 탭에 대한 매핑
  var sections = {
    '#physical': 0,
    '#communication': 1,
    '#nursing': 2,
    '#recovery': 3
  };

  var $tabs = $(".phy_tab ul li");
  var $window = $(window);

  // 스크롤할 때 이벤트 감지
  $window.on('scroll', function () {
    var scrollPosition = $window.scrollTop();
    var offset = 300; // 스크롤 위치 조정 (헤더나 상단 공간이 있을 경우)

    // 각 테이블 섹션의 위치를 확인하여 탭 활성화
    for (var section in sections) {
      var sectionTop = $(section).offset().top - offset;

      if (scrollPosition >= sectionTop) {
        $tabs.removeClass("active");
        $tabs.eq(sections[section]).addClass("active");
      }
    }
  });

  // 첫 번째 탭에 기본적으로 active 클래스 추가
  $tabs.eq(0).addClass("active");

  // 탭 클릭 시 해당 섹션으로 스크롤 이동
  $tabs.find('a').on('click', function (e) {
    e.preventDefault();

    var target = $(this).attr('href');
    var targetOffset = $(target).offset().top - 80; // 헤더 크기에 맞춰 스크롤 조정

    $('html, body').animate({
      scrollTop: targetOffset
    }, 100);

    // 클릭한 탭에 active 클래스 추가
    $tabs.removeClass("active");
    $(this).parent().addClass("active");
  });

  $('.cla_down').click(function () {
    $('.cla_depth2').slideToggle(300);

    $(this).toggleClass('cla_rotate');
  });

  $('.cla_down2').click(function () {
    $('.cla_depth2_center').slideToggle(300);

    $(this).toggleClass('cla_rotate');
  });

  $('.cla_down3').click(function () {
    $('.cla_depth2_last').slideToggle(300);

    $(this).toggleClass('cla_rotate');
  });

  $('.dep_cla_down1').click(function () {
    $('.dep_depth2_one').slideToggle(300);

    $(this).toggleClass('cla_rotate');
  });

  $('.dep_cla_down2').click(function () {
    $('.dep_depth2_two').slideToggle(300);

    $(this).toggleClass('cla_rotate');
  });

  $('.dep_cla_down3').click(function () {
    $('.dep_depth2_three').slideToggle(300);

    $(this).toggleClass('cla_rotate');
  });

  $('.dep_cla_down4').click(function () {
    $('.dep_depth2_four').slideToggle(300);

    $(this).toggleClass('cla_rotate');
  });

  // 현재 년도를 가져오기 위한 h3 요소
  const yearElement = document.querySelector('.dep_year');

  // 이전 버튼과 다음 버튼 요소
  const dep_prevButton = document.querySelector('.dep_prev');
  const dep_nextButton = document.querySelector('.dep_next');

  // 초기 년도 값을 가져오기 (숫자만 추출)
  let currentYear = parseInt(yearElement.textContent.replace('년', ''));

  // 이전 버튼 클릭 시 년도 감소
  dep_prevButton.addEventListener('click', function () {
    currentYear--; // 년도 감소
    yearElement.textContent = currentYear + '년'; // h3 텍스트 업데이트
  });

  // 다음 버튼 클릭 시 년도 증가
  dep_nextButton.addEventListener('click', function () {
    currentYear++; // 년도 증가
    yearElement.textContent = currentYear + '년'; // h3 텍스트 업데이트
  });

});


