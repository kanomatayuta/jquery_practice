$(function(){
  //.drawer_buttonをクリック時に発動
  $(".drawer_button").on("click",function(){
    //.drawer_buttonにactiveクラスをトグル処理(クラスがある場合はクラスを削除し、無い場合はクラスを追加する)をする
    $(this).toggleClass("active");
    //.drawer_bgをフェードイン・アウトで表示、非表示の切り替えをする
    $(".drawer_bg").fadeToggle();
    //navにopenクラスをトグル処理(クラスがある場合はクラスを削除し、無い場合はクラスを追加する)をする
    $("nav").toggleClass("open")
  });
  //.drawer_bgをクリック時に発動
  $(".drawer_bg").on("click",function(){
    //.drawer_bgを非表示にする
    $(this).hide();
    //.drawer_buttonの.activeクラスを削除
    $(".drawer_button").removeClass("active");
    //navの.openクラスを削除
    $("nav").removeClass("open")
  })
});