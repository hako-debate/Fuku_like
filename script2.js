// お気に入りボタンを追加
var favorite_box = document.querySelector(".image");
var check_element = document.createElement("input");
check_element.setAttribute("type","checkbox");
check_element.setAttribute("id","ch1");
check_element.setAttribute("style","transform:scale(2.5)");
favorite_box.appendChild(check_element);

// 予めチェック
var data0 = localStorage.getItem("favorite");
data0 = JSON.parse(data0);
if (data0 != null){
    for (var i=0; i<data0.length; ++i){
        if (document.URL==data0[i]){
            var checkbox1 = document.getElementById('ch1');
            checkbox1.checked = true;
        }
    }
}

// ボタン操作時に実行
document.getElementById("ch1").onclick = function(){ch1();};

// チェックつけた、つけてない時の実行するやつ
function ch1() {
    if (document.getElementById("ch1").checked){
        // キーfavoriteにURLを保存
        var data1 = localStorage.getItem("favorite");
        data1 = JSON.parse(data1);
        var name_data = localStorage.getItem("title");
        name_data = JSON.parse(name_data);
        if (data1 == null){
            data1=[];
            name_data=[];
        }
        data1.push(document.URL);
        name_data.push(document.querySelector('.title').innerText);
        localStorage.setItem("favorite",JSON.stringify(data1));
        localStorage.setItem("title",JSON.stringify(name_data));
    }
    else {
        var data1 = localStorage.getItem("favorite");
        data1 = JSON.parse(data1);
        var name_data = localStorage.getItem("title");
        name_data = JSON.parse(name_data);
        for (var i=0; i<data1.length; ++i){
            if (document.URL==data1[i]){
                data1.splice(i,1);
                name_data.splice(i,1);
            }
        }
        localStorage.setItem("favorite",JSON.stringify(data1));
        localStorage.setItem("title",JSON.stringify(name_data));
    }
}
