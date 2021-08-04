//API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });


$(function () {
  //イベント発生時コールバック関数の引数として渡される
  function a(e) {
    //.messageを削除
  $(".message").remove();
   //ajaxでもらったデータがnullかどうかを見て処理、nullだった場合には40行目、nullじゃない場合は、eachで全データ出力するまで繰り返し処理
   //引数の「h」は配列のindex、「c」はvalue。「c」のみを使えば検索一覧を作成できる
    var b; 0 < (null == (b = e[0].items) ? void 0 : b.length) ? $.each(e[0].items,function (h, c) {
      //変数gに下記DOMを代入
      var g = '<li class="lists-item"><div class="list-inner"><p>タイトル：'
      //APIでタイトルを取得
      + ((c.title ? c.title : "")
      + "</p><p>作者：")
      //APIで作者を取得
      + ((c["dc:creator"] ? c["dc:creator"] : "")
      + "</p><p>出版社：")
      //APIで出版社を取得
      + ((c["dc:publisher"] ? c["dc:publisher"][0] : "")
      + '</p><a href="')
      //APIでリンク先を取得
      + (c.link["@id"]
      +'" target="_blank">書籍情報</a></div></li>');
      //.listsの子要素の先頭にgを追加
      $(".lists").prepend(g)
    }) :
    //.listsの前にDOM追加
    $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
  }
    //変数dに１を代入し変数fを作成
    var d = 1, f = "";
  //.search-btnをクリックすると発動
    $(".search-btn").on("click", function () {
    //#search-inputのvalue値を取得し変数eに代入
    var e = $("#search-input").val();
    //API（URL）とパラメータを指定（フォーマットはjsonで、情報を取得する）
    // 検索ワードが空かどうかを見て、空だったらfailの通信失敗のほうへ。空じゃなければdoneの成功の方へ
    e !== f ? (d = 1, $(".lists").empty(), f = e) : d++; $.ajax({
      url: "https://ci.nii.ac.jp/books/opensearch/search?title="
      + e + "&format=json&p=" + d + "&count=20", method: "GET"
      //doneは通信に成功した場合、failは通信失敗した場合の処理
    }).done(function (b) { a(b["@graph"]) }).fail(function (b) {
      //.listsの子要素のみ削除(.listsの中身を空にする)
      $(".lists").empty();
      //.messageを削除（.messageごと削除する）
      $(".message").remove();
      //HTTPのステータスコードステータスを見て、0の時がAjax失敗時にlistsの前にDOM追加
      0 === b.status ? $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>') :
      //.listsの前にDOM追加
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
    })
  });
  //.reset-btnをクリックすると発動
  $(".reset-btn").on("click", function () {
    //dに１を代入しfを作成
    d = 1; f = "";
    //.listsの子要素のみ削除(.listsの中身を空にする)
    $(".lists").empty();
    //.messageを削除（.messageごと削除する）
    $(".message").remove();
    //#search-inputのvalue値をクリア
    $("#search-input").val("") })
});