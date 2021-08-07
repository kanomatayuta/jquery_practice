$(function(){
  //select-boxが変更されたら発動
  $(".select-box").on("change",function(){
    //selectVal変数にselect-boxのvalue属性値を代入
    var  getVal= $(this).val();
    //変数cにfood-list liを代入
    var getType = $(".food-list li");
    //getValで取得したValue属性値がallと同値の場合はfood-list liを全て表示し、それ以外だったら繰り返し処理を行う
    "all" === getVal ? getType.show() :$.each(getType,function(e,getFood){
      // 取得されたgetFood値にデータcategory-typeを設定し変数に代入
      var category = $(getFood).data("category-type");
    //getValとcategoryが同値だった場合getFoodを表示し、異なる値だった場合getFoodは表示しない
    getVal === category ? $(getFood).show() :$(getFood).hide()
    });
  });
});