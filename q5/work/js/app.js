$(function(){
  // .dropdwn liをホバーした時に発動
  $(".dropdwn li").hover(function(){
    //.dropdwn liの子要素ulを取得し、スライドダウンで表示。
    // .stopは現在実行しているアニメをすぐに停止し、次の行のanimateを実行するようする
    $(this).children("ul").stop().slideDown()
    .children("ul").stop().slideUp()
  },function(){
    //.dropdwn liの子要素ulを取得し、スライドアップで非表示。
    // .stopは現在実行しているアニメをすぐに停止し、次の行のanimateを実行するようする
    $(this).children("ul").stop().slideUp()
  });
});