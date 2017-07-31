var peer = null;
var conn = null;

document.addEventListener('DOMContentLoaded', function() {
    peer = new Peer('peerjs-diekus-1', {key: 'zq2g0io6sk29y66r'});

    conn = peer.connect('peerjs-diekus-2');
        conn.on('open', function(){
        conn.send('hi!');
    });

    peer.on('connection', function(conn) {
        conn.on('data', function(data){
            // Will print 'hi!'
            console.log(data);
        });
    });

});
