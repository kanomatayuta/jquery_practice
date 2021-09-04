$(function () {
  // 変数pageCountに１を代入
  let pageCount = 1;
  // compareWordは比較するため変数を作成
  let compareWord = "";
  // .search-btnをクリックすると発動
  $(".search-btn").on("click", function () {
    // #search-inputのvalue値を取得しsearchWordに代入
    const searchWord = $("#search-input").val();
    // searchWordとcompareWordの文字列が一致するかの比較
    if (searchWord !== compareWord) {
      // 違う検索値の場合、１ページから表示
      // .listsの子要素のみ削除(.listsの中身を空にする)
      $(".lists").empty();
      pageCount = 1
      // compareWordにsearchWordを代入
      compareWord = searchWord;
    } else {
      // 同じ検索値の場合
      pageCount++;
    }

    // API
    const settings = {
      url: "https://ci.nii.ac.jp/books/opensearch/search?title=" + searchWord + "&format=json&p=" + pageCount + "&count=20",
      method: "GET"
    }

    // doneは通信に成功した場合、
    $.ajax(settings).done(function (response) {
      // response内容から値を取得しresultに代入
      const result = response['@graph'];
      displayResult(result);
      // failは通信失敗した場合の処理
    }).fail(function (err) {
      displayError(err);
    })
  });

  // ajax成功時
  function displayResult(searchWord) {
    // .messageを削除
    $(".message").remove();
    // 変数responseにajaxでもらったデータを代入
    let response = searchWord[0].items
    // 変数responseに値があるかないか(null)を比較し、１の場合trueの処理へ、０の場合falseの処理処理へ
    if (0 < (null == response)) {
      // trueの場合(検索値が見つからない)
      // .listsの子要素のみ削除(.listsの中身を空にする)
      $(".lists").empty();
      // .listsの前にDOM追加
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
      // falseの場合(検索値がある)
    } else {
      // 引数のgetindexは配列のindex。getValはvalue。getValのみを使えば検索一覧を作成できる
      // ある場合(検索値が見つかった)は、eachで全データ出力するまで繰り返し処理
      $.each(searchWord[0].items, function (getindex, getVal) {
        // 変数resultに下記DOMを代入,  APIでタイトル,作者,出版社,書籍情報のリンク先を取得
        var result = '<li class="lists-item"><div class="list-inner"><p>タイトル：' + ((getVal.title ? getVal.title : "")
          + "</p><p>作者：") + ((getVal["dc:creator"] ? getVal["dc:creator"] : "") + "</p><p>出版社：")
          + ((getVal["dc:publisher"] ? getVal["dc:publisher"][0] : "") + '</p><a href="') + (getVal.link["@id"] + '" target="_blank">書籍情報</a></div></li>');
        // .listsの子要素の先頭にresultを追加
        $(".lists").prepend(result);
      });
    };
  };

  // ajax失敗時
  function displayError(err) {
    // .messageを削除
    $(".message").remove();
    // .listsの子要素のみ削除(.listsの中身を空にする)
    $(".lists").empty();
    // HTTPのステータスコードが0の時。 AJAX要求がキャンセルされた
    if (0 === err.status) {
      // .listsの前にDOM追加
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      // HTTPのステータスコードが400の時。 サーバーが、クライアント側のエラー
    } else if (400 === err.status) {
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      // HTTPのステータスコードがそれ以外の時
    } else {
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
    }
  }

  // reset時
  // .reset-btnをクリックすると発動
  $(".reset-btn").on("click", function () {
    // pageCountに0を代入
    pageCount = 0;
    // .listsの子要素のみ削除(.listsの中身を空にする)
    $(".lists").empty();
    // .messageを削除（.messageごと削除する）
    $(".message").remove();
    // #search-inputのvalue値をクリア
    $("#search-input").val("");
  });
});