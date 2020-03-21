<!DOCTYPE html>
<html>
  <head>
    <title>Belajar AJAX</title>
  </head>
  <body>

    <p> Ini bagian atas </p>
    <div id="box"></div>
    <p> Ini bagian bawah </p>

    <button id="btn">ambil data</button>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
    <script type="text/javascript">

      $(document).ready(function(){

        //load, post, get, ajax

        //4. ajax
        $('#btn').click(function(){

          $.ajax({
            url    : 'file.php',
            method : "POST",
            data   : { nama: "hilman", umur: 25 }
          }).done(function(hasil){
            $('#box').html(hasil);
          });

      });


        //2. get dan 3.post
        // $.post('file.php', { 'nama': "hilman" })
        //   .done(function(data){
        //     $('#box').html(data);
        // });

        //1. load
        // $('#box').load('file.php', function(response, status, xhr){
        //     if(status === 'success'){
        //       console.log('berhasil!');
        //     }else{
        //       console.log('gagal!');
        //     }
        // });

      });

    </script>

  </body>
</html>
