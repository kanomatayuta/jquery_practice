$(function(){
  //.nav liをクリック時に発動
  $(".nav li").on("click",function(){
    // 変数numにnav liのindex値を取得し代入
    var num = $(".nav li").index(this);
    //.description liにis-hiddenクラスを追加
    $(".description li").addClass("is-hidden");
    //.description liに変数num取得したindex値番目のis-hiddenクラスを削除
    $(".description li").eq(num).removeClass("is-hidden");
  });
});