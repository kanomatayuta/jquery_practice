$(function(){
  //select-boxが変更されたら発動
  $(".select-box").on("change",function(){
    //変数bにselect-boxのvalue属性値を代入
    var b =$(this).val();
    //変数cにfood-list liを代入
    var c = $(".food-list li");
    //allとvalue属性値が同値の場合はfood-list liを全て表示し、それ以外だったら繰り返し処理を行う
    "all" === b ? c.show() :$.each(c,function(e,a){
      // 取得された値aにデータcategory-typeを設定
      var d =$(a).data("category-type");
    //bとdが同値だった場合表示し異なる値だった場合表示しない
      b === d ? $(a).show() :$(a).hide()
    });
  });
});