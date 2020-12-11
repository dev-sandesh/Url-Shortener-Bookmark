javascript:(function(){
    var url = window.location.href;
    var accessToken = "2e6c6e3d74787186be9fb720477bae346d33169b";
    var params = {
        "long_url" : url           
    };
fetch("https://api-ssl.bitly.com/v4/shorten", {
    method : "POST",
	headers: {
        'Authorization': 'Bearer 2e6c6e3d74787186be9fb720477bae346d33169b',
        'Content-Type': 'application/json'
    },
    body : JSON.stringify(params)
}).then(
    response => response.text()
).then(
    html => {alert(JSON.parse(html).id);}
)
})();
