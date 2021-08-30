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


// $(function () {
//   //検索結果表示するための関数(search_result_disp)、引数を受け取る
//   function search_result_disp(searchWord) {
//     //.messageを削除
//   $(".message").remove();
//    //ajaxでもらったデータがnullかどうかを見て処理、nullだった場合には40行目、nullじゃない場合は、eachで全データ出力するまで繰り返し処理
//    //引数のgetindexは配列のindex。getValはvalue。getValのみを使えば検索一覧を作成できる
//     var response;0 < (null == (response = searchWord[0].items) ? void 0 : response.length) ? $.each(searchWord[0].items,function (getindex,getVal) {
//       //変数resultに下記DOMを代入,  APIでタイトルを取得
//       var result = '<li class="lists-item"><div class="list-inner"><p>タイトル：'+ ((getVal.title ? getVal.title : "")
//       //APIで作者を取得
//       + "</p><p>作者：")+ ((getVal["dc:creator"] ? getVal["dc:creator"] : "")
//       //APIで出版社を取得
//       + "</p><p>出版社：")
//       + ((getVal["dc:publisher"] ? getVal["dc:publisher"][0] : "")
//       //APIで書籍情報のリンク先を取得
//       + '</p><a href="')+ (getVal.link["@id"]+'" target="_blank">書籍情報</a></div></li>');
//       //.listsの子要素の先頭にresultを追加
//       $(".lists").prepend(result)
//     }) :
//     //.listsの前にDOM追加
//     $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
//   }

//     //変数pageCountに１を代入,empty_conp_valは空どうか比較するため変数を作成
//     var pageCount = 1, empty_conp_val = "";
//   //.search-btnをクリックすると発動
//     $(".search-btn").on("click", function () {
//     //#search-inputのvalue値を取得しsearchWordに代入
//     var searchWord = $("#search-input").val();
//     //API（URL）とパラメータを指定（フォーマットはjsonで、情報を取得する）
//     // 検索ワードが空かどうかを見て、空だったらfailの通信失敗のほうへ。空じゃなければdoneの成功の方へ
//     searchWord !== empty_conp_val ? (pageCount = 1, $(".lists").empty(), empty_conp_val = searchWord) : pageCount++;
//     $.ajax({
//       url: "https://ci.nii.ac.jp/books/opensearch/search?title="
//       + searchWord + "&format=json&p=" + pageCount + "&count=20", method: "GET"
//       //doneは通信に成功した場合、failは通信失敗した場合の処理
//     }).done(function (response) {search_result_disp(response["@graph"])
//   }).fail(function (response) {
//       //.listsの子要素のみ削除(.listsの中身を空にする)
//       $(".lists").empty();
//       //.messageを削除（.messageごと削除する）
//       $(".message").remove();
//       //HTTPのステータスコードステータスを見て、0の時がAjax失敗時にlistsの前にDOM追加
//       0 === response.status ? $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>') :
//       //.listsの前にDOM追加
//       $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
//     })
//   });
//   //.reset-btnをクリックすると発動
//   $(".reset-btn").on("click", function () {
//     //変数pageCountに１を代入,empty_conp_valは空どうか比較するため変数を作成
//     pageCount = 1; empty_conp_val = "";
//     //.listsの子要素のみ削除(.listsの中身を空にする)
//     $(".lists").empty();
//     //.messageを削除（.messageごと削除する）
//     $(".message").remove();
//     //#search-inputのvalue値をクリア
//     $("#search-input").val("") })
// });


//修正−１
// $(function () {
//   //定数pageCountに１を代入,emptyConpは空どうか比較するため定数を作成
//   var pageCount = 1;
//   var emptyConp = "";
//   //.search-btnをクリックすると発動
//   $(".search-btn").on("click", function () {
//     //#search-inputのvalue値を取得しsearchWordに代入
//     const searchWord = $("#search-input").val();
//     // searchWordとemptyConpの文字列が一致するかの比較
//     if (searchWord !== emptyConp) {
//       const settings = {
//         url: "https://ci.nii.ac.jp/books/opensearch/search?title=" + searchWord + "&format=json&p=" + pageCount + "&count=20",
//         method: "GET"
//       }
//       //doneは通信に成功した場合、
//       $.ajax(settings).done(function (response) {
//         // response内容から値を取得するしresultに代入
//         const result = response['@graph'];
//         displayResult(result);
//         //failは通信失敗した場合の処理
//       }).fail(function (err) {
//         displayError(err);
//       })
//       //検索ワードが空だった時
//     } else {
//       //.messageを削除（.messageごと削除する）
//       $(".message").remove();
//       //.listsの子要素のみ削除(.listsの中身を空にする)
//       $(".lists").empty();
//       //.listsの前にDOM追加
//       $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
//       console.log("検索ワードが空です");
//     }
//   });

//   //ajax成功時
//   function displayResult(searchWord) {
//     //.messageを削除
//     $(".message").remove();
//     // ajaxでもらったデータがnullかどうかを見て処理
//     if (0 < (null == (response = searchWord[0].items))) {
//       // nullだった場合(検索値が見つからない)
//       response = void (0);
//       //.listsの前にDOM追加
//       $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
//       console.log("ajax成功、検索結果なし");
//       //nullではない場合
//     } else {
//       if (response.length) {
//         //引数のgetindexは配列のindex。getValはvalue。getValのみを使えば検索一覧を作成できる
//         //nullじゃない場合は、eachで全データ出力するまで繰り返し処理
//         $.each(searchWord[0].items, function (_getindex, getVal) {
//           //変数resultに下記DOMを代入,  APIでタイトル,作者,出版社,書籍情報のリンク先を取得
//           const result = '<li class="lists-item"><div class="list-inner"><p>タイトル：' + ((getVal.title ? getVal.title : "")
//             + "</p><p>作者：") + ((getVal["dc:creator"] ? getVal["dc:creator"] : "") + "</p><p>出版社：")
//             + ((getVal["dc:publisher"] ? getVal["dc:publisher"][0] : "") + '</p><a href="') + (getVal.link["@id"] + '" target="_blank">書籍情報</a></div></li>');
//           //.listsの子要素の先頭にresultを追加
//           $(".lists").prepend(result);
//           console.log("ajax成功、検索結果あり");
//           console.log(pageCount);
//         });
//       };
//     };
//   };
//   //ajax失敗時
//   function displayError(err) {
//     //.messageを削除
//     $(".message").remove();
//     //HTTPのステータスコードが0の時
//     if (0 === err.status) {
//       //.listsの前にDOM追加
//       $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
//       console.log("ajax失敗、未通信");
//     }
//   }

//   //reset時
//   //.reset-btnをクリックすると発動
//   $(".reset-btn").on("click", function () {
//     pageCount = 1;
//     //.listsの子要素のみ削除(.listsの中身を空にする)
//     $(".lists").empty();
//     //.messageを削除（.messageごと削除する）
//     $(".message").remove();
//     //#search-inputのvalue値をクリア
//     $("#search-input").val("");
//   });
// });



//修正−2
$(function () {
  //変数pageCountに１を代入,emptyConpは空どうか比較するため定数を作成
  let pageCount = 1;
  let emptyConp = "";
  //.search-btnをクリックすると発動
  $(".search-btn").on("click", function () {
    //#search-inputのvalue値を取得しsearchWordに代入
    const searchWord = $("#search-input").val();
    // searchWordとemptyConpの文字列が一致するかの比較
    if (searchWord !== emptyConp) {
      // 違う検索値の場合、１ページから表示
      pageCount = 1;
      //.listsの子要素のみ削除(.listsの中身を空にする)
      $(".lists").empty();
      // emptyConpにsearchWordを代入
      emptyConp = searchWord;
      console.log("違う検索ワード")
    } else {
      // 同じ検索値の場合
      pageCount++;
      console.log("同じ検索ワード")
    }
    const settings = {
      url: "https://ci.nii.ac.jp/books/opensearch/search?title=" + searchWord + "&format=json&p=" + pageCount + "&count=20",
      method: "GET"
    }
    //doneは通信に成功した場合、
    $.ajax(settings).done(function (response) {
      // response内容から値を取得しresultに代入
      const result = response['@graph'];
      displayResult(result);
      pageCount++
      //failは通信失敗した場合の処理
    }).fail(function (err) {
      displayError(err);
    })
  });

  //ajax成功時
  function displayResult(searchWord) {
    //.messageを削除
    $(".message").remove();
    // ajaxでもらったデータがnullかどうかを見て処理
    if (0 < (null == (response = searchWord[0].items))) {
      // nullだった場合(検索値が見つからない)
      response = void (0);
      //.listsの子要素のみ削除(.listsの中身を空にする)
      $(".lists").empty();
      //.listsの前にDOM追加
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
      console.log("ajax成功、検索結果なし");
      //nullではない場合
    } else {
      if (response.length) {
        //引数のgetindexは配列のindex。getValはvalue。getValのみを使えば検索一覧を作成できる
        //nullじゃない場合は、eachで全データ出力するまで繰り返し処理
        $.each(searchWord[0].items, function (_getindex, getVal) {
          //変数resultに下記DOMを代入,  APIでタイトル,作者,出版社,書籍情報のリンク先を取得
          const result = '<li class="lists-item"><div class="list-inner"><p>タイトル：' + ((getVal.title ? getVal.title : "")
            + "</p><p>作者：") + ((getVal["dc:creator"] ? getVal["dc:creator"] : "") + "</p><p>出版社：")
            + ((getVal["dc:publisher"] ? getVal["dc:publisher"][0] : "") + '</p><a href="') + (getVal.link["@id"] + '" target="_blank">書籍情報</a></div></li>');
          //.listsの子要素の先頭にresultを追加
          $(".lists").prepend(result);
          console.log("ajax成功、検索結果あり");
        });
      }
    };
  };
  //ajax失敗時
  function displayError(err) {
    //.messageを削除
    $(".message").remove();
    //HTTPのステータスコードが0の時
    // AJAX要求がキャンセルされた
    if (0 === err.status) {
      //.listsの前にDOM追加
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      console.log("ajax失敗、未通信");
    } else {
      //HTTPのステータスコードが400の時
      // サーバーが、クライアント側のエラー
      if (400 === err.status) {
        $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      }
    }
  }

  //reset時
  //.reset-btnをクリックすると発動
  $(".reset-btn").on("click", function () {
    pageCount = 1;
    //.listsの子要素のみ削除(.listsの中身を空にする)
    $(".lists").empty();
    //.messageを削除（.messageごと削除する）
    $(".message").remove();
    //#search-inputのvalue値をクリア
    $("#search-input").val("");
  });
});

