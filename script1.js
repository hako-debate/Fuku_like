// すべての機能を削除する
var all_kino0 = document.querySelector(".sitemap");
all_kino0.remove();

// Class属性で要素を取得
var key_element = document.getElementById('menu');
var list_element = key_element.firstElementChild;

// 新しいHTML要素を作成
var new_element1 = document.createElement("li");
new_element1.setAttribute("class","menu6");
var new_link = document.createElement("a");
new_link.setAttribute("href","Favorite");
new_link.textContent = 'お気に入り';

// 指定した要素の後に挿入
new_element1.appendChild(new_link);
list_element.appendChild(new_element1);

// すべての機能を再追加
var all_kino = document.createElement("li");
all_kino.setAttribute("class","sitemap");
var all_features = document.createElement("a");
all_features.setAttribute("href","https://www3.fukuchiyama.ac.jp/opac4/opac/Information/all_features")
all_features.textContent = "すべての機能を見る";

all_kino.appendChild(all_features);
list_element.appendChild(all_kino);


// お気に入り一覧表示
if (document.URL.slice(-8) == "Favorite"){
    var all_delete = document.getElementById('contents');
    all_delete.remove();
    // ひとまずフッター削除
    var footer_del = document.getElementById("footer");
    footer_del.remove();
    // localStorageからURL、タイトル参照
    var data1 = localStorage.getItem("favorite");
    data1 = JSON.parse(data1);
    var title1 = localStorage.getItem("title");
    title1 = JSON.parse(title1);
    // HTML動的生成
    var contain = document.getElementById("container");
    var main = document.createElement("main");
    main.setAttribute("id","contents");
    var main_box = document.createElement("div");
    main_box.setAttribute("class","main-box");
    var new_text = document.createElement("div");
    new_text.setAttribute("id","NotFound");
    if (data1.length==0){
        var link1 = document.createElement("p");
        link1.textContent = "該当なし";
        new_text.appendChild(link1)
    }else{
        //各リンクブロック作成
        for (var i=0; i<data1.length; ++i){
            var URL=data1[i];
            var link1 = document.createElement("p");
            var link2 = document.createElement("a");
            link2.setAttribute("href",URL);
            link2.textContent = title1[i];
            link1.appendChild(link2);
            new_text.appendChild(link1)
        }
    }
    main_box.appendChild(new_text);
    main.appendChild(main_box);
    contain.appendChild(main);
    // フッター再追加
    var footer = document.createElement("footer");
    footer.setAttribute("id","footer");
    var div = document.createElement("div");
    div.setAttribute("class","credit");
    var link1 = document.createElement("a");
    link1.setAttribute("href","https://www3.fukuchiyama.ac.jp/opac4/opac/Top/about_service");
    link1.setAttribute("target","_blank");
    link1.textContent = "このサービスについて";
    div.appendChild(link1);
    footer.appendChild(div);
    contain.appendChild(footer);
}