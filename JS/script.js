jQuery(document).ready(function($) {
    var pane = $('#pane'),
        box = $('#box'),
        w = pane.width() - box.width(),
        d = {},
        x = 3;

    function newv(v, a, b) {
        var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
        return n < 0 ? 0 : n > w ? w : n;
    }

    $(window).keydown(function(e) { d[e.which] = true; });
    $(window).keyup(function(e) { d[e.which] = false; });

    setInterval(function() {
        box.css({
            left: function(i, v) { return newv(v, 37, 39); },
            top: function(i, v) { return newv(v, 38, 40); }
        });
    }, 20);
});

var panel= $('#panel'),
    box= $('#box'),
    w= panel.width() - box.width(),
    h= panel.height() - 2 * box.height(),
    d= {},
    x=3;
function newv (v, a, b ){
    var n = parseInt (v,10) - (d[a] ? x : 0 ) + (d[b] ? x : 0 );
    return n < 0 ? 0: n > w ? w : n ;

} 
$(window).keyup (function (e){d[e.which]= true;});
$(window).keydown (function (e){d[e.which]= false;});
$(window).keyleft (function (e){d[e.which]= true;});
$(window).keyright (function (e){d[e.which]= false;});
setInterval(function(){
    box.css({
        left:function(i,v){
            return newv (v, 37, 39 );
        },
        top: function (i,v){
            return newv (v, 38, 40);
        },
        right:function(i,v){
            return newv (v, 35, 38 );
        },
        bottom: function (i,v){
            return newv (v, 36, 37);
        }
    })
}, 20);

