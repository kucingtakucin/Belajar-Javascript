<!DOCTYPE html>
<html>
  <head>
    <title>Belajar ajax</title>
  </head>
  <body>

    <div id="box"></div>

    <input type="text" name="name" id="inputText">
    <button id="button">Ambil Data</button>

    <script type="text/javascript">

      function load_ajax(url, callback){
        //buat objek xmlhttprequest
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = cekStatus;

        function cekStatus(){
          if( xhr.readyState === 4 && xhr.status === 200 ){
            callback( xhr.responseText );
          }
        }

        xhr.open('GET', url, true);
        xhr.send();
      }

      document.getElementById('button').onclick = function(){

        text = document.getElementById('inputText').value;

        load_ajax('data.php?q=' + text, function(data){
            document.getElementById('box').innerHTML = data;
        });
      };


    </script>

  </body>
</html>
