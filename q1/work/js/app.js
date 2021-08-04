// q1
$(function(){
// 読み込み時に#q1にcssを適用し、文字色を緑にする
  $("#q1").css("color","green");
});

// q2
$(function(){
  // #q2をクリック時に発動
  $("#q2").on("click",function(){
  // #q2にcssで背景をピンクに変更させる
    $(this).css("background","pink");
  });
});

// q3
$(function(){
  // #q3をクリック時に発動
  $("#q3").on("click",function(){
  // #q3を3秒かけてフェードアウトする
    $(this).fadeOut(3000);
  });
});

// q4
$(function(){
  // #q4をクリック時に発動
  $("#q4").on("click",function(){
  // #q4にclass="large"を追加する
    $(this).addClass("large");
  });
});

// q5
$(function(){
  // #q5をクリック時に発動
  $("#q5").on("click",function(){
  // #q5にDOMの挿入
    $(this).prepend("DOMの中の前");
    $(this).append("DOMの中の後");
    $(this).before("DOMの前");
    $(this).after("DOMの後");
  });
});

// q6
$(function(){
  // #q6をクリック時に発動
  $("#q6").on("click",function(){
  // #q6を2秒かけて下に100px右に100px移動
    $(this).animate({
    "margin-top": 100,
    "margin-left": 100,
    },2000);
  });
});

// q7
$(function(){
  // #q7をクリック時に発動
  $("#q7").on("click",function(){
    // コンソールに#q7を表示
    console.log(this);
  });
});

// q8
$(function(){
  // #q8の上にマウスポインターが乗った時に発動
  $("#q8").on({mouseenter:function(){
  // #q8にclass="large"を追加する
    $(this).addClass("large")
  },
  // #q8からマウスポインターが外れた時に発動
    mouseleave:function(){
  // #q8のclass="large"を削除する
    $(this).removeClass("large")
  }
  });
});

// q9
$(function(){
  // #q9 liをクリック時に発動
  $("#q9 li").on("click",function(){
  //index番号を取得し変数num代入
    var num = $(this).index();
  //alertで変数numを表示
    alert(num)
  });
});

// q10
$(function(){
  // #q10 liをクリック時に発動
  $("#q10 li").on("click",function(){
  //index番号を取得し変数num代入
  var num = $(this).index();
  //#q11 liのeq(num)番目を指定する
  //指定されたliにclass ="large-text"を追加する
  $("#q11 li").eq(num).addClass("large-text")
  });
});