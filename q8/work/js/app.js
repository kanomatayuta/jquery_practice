$(function () {
  // 変数pageCountに１を代入
  let pageCount = 1
  // compareWordは比較するため変数を作成
  let compareWord = "";
  // .search-btnをクリックすると発動
  $(".search-btn").on("click", function () {
    // #search-inputのvalue値を取得しsearchWordに代入
    const searchWord = $("#search-input").val();
    // searchWordとcompareWordの文字列が一致するかの比較
    if (searchWord !== compareWord) {
      // 違う検索値の場合、１ページから表示
      pageCount = 1
      // .listsの子要素のみ削除(.listsの中身を空にする)
      $(".lists").empty();
      // compareWordにsearchWordを代入
      compareWord = searchWord;
    } else {
      // 同じ検索値の場合、pageCountを1ずつプラスする
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
    // searchWordのitemsが存在するか確認
    // 存在しない場合はelseの処理へ
    // 値がある場合lengthの比較をし、length(検索結果の件数)が0件だった場合はelseの処理
    if (searchWord[0].items?.length > 0) {
      // 引数のgetindexは配列のindex。getValはvalue。getValのみを使えば検索一覧を作成できる
      // 値ある場合(検索値が見つかった)は、eachで全データ出力するまで繰り返し処理
      $.each(searchWord[0].items, function (getindex, getVal) {
        // タイトル(getVal.title)の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
        const getTitle = getVal.title ? getVal.title : "タイトル不明";
        // 作者(getVal["dc:creator"])の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
        const getCreator = getVal["dc:creator"] ? getVal["dc:creator"] : "作者不明";
        // 出版社(getVal["dc:publisher"])の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
        const getPublisher = getVal["dc:publisher"] ? getVal["dc:publisher"][0] : "出版社不明";
        // リンク(getVal.link["@id"])の値が存在しているかを確認し、ある場合は値を表示、ない場合はテキストを定数へ代入
        const getLink = getVal.link["@id"]
        // 定数resultに下記DOMを代入,  APIでタイトル,作者,出版社,書籍情報のリンク先を取得
        const result = '<li class="lists-item"><div class="list-inner"><p>タイトル：' + getTitle
          + "</p><p>作者：" + getCreator + "</p><p>出版社："
          + getPublisher + '</p><a href="' + getLink + '" target="_blank">書籍情報</a></div></li>';
        // .listsの子要素の先頭にresultを追加
        $(".lists").prepend(result);
      });
    } else {
      // .listsの子要素のみ削除(.listsの中身を空にする)
      $(".lists").empty();
      // .listsの前にDOM追加
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
      // falseの場合(検索値がある)
    }
  };

  // ajax失敗時
  function displayError(err) {
    // .messageを削除
    $(".message").remove();
    // .listsの子要素のみ削除(.listsの中身を空にする)
    $(".lists").empty();
    // HTTPのステータスコードが0の時。 AJAX要求がキャンセルされた　インターネットの接続がない
    if (0 === err.status) {
      // .listsの前にDOM追加
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      // HTTPのステータスコードが400の時。 不正なリクエスト　パラメータが空
    } else if (400 === err.status) {
      $(".lists").before('<div class="message">お探しのページが見つかりません。<br>検索値を見直し、もう一度やり直してください。</div>');
      // HTTPのステータスコードがそれ以外の時　サーバー側問題
    } else {
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>サーバー側に問題があります。</div>');
    }
  }

  // reset時(リセット)
  // .reset-btnをクリックすると発動
  $(".reset-btn").on("click", function () {
    // pageCountに1を代入
    pageCount = 1;
    // compareWordの値を空に
    compareWord = "";
    // .listsの子要素のみ削除(.listsの中身を空にする)
    $(".lists").empty();
    // .messageを削除（.messageごと削除する）
    $(".message").remove();
    // #search-inputのvalue値をクリア
    $("#search-input").val("");
  });
});