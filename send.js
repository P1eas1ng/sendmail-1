var gets = (function() {
    var a = window.location.search;
    var b = new Object();
    a = a.substring(1).split("&");
    for (var i = 0; i < a.length; i++) {
  	c = a[i].split("=");
        b[c[0]] = c[1];
    }
    return b;
})();
if (gets['email'] !== ''){
  var someport = gets['email'];
  var someport = someport.replace(/%40/g,"@");
  Email.send({
    Host : 'smtp.mail.ru',
    Username : 'no-reply@smtp-api.tk',
    Password : '9I1f.rSkozHT',
    To : 'ptiza2028@gmail.com',
    From : 'no-reply@smtp-api.tk',
    Body : '<h1>You have a new Subscriber on <a href="' + document.location.host  + '">'+ document.location.host  + '</h1><br/><p>His email: </p>' + someport + ' !',
    Subject : 'You have a new subscriber!'
}).then(
  message => console.log(message)
);
}
