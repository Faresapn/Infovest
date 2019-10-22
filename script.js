$(document).ready(function(){
    $(".belum-dipilih").click(function(){
        let totalBeli = 2;
        let totalPilih = $(".total-pilih").length;

        if(totalBeli == totalPilih){
            alert("Anda sudah menggiring bola" + totalBeli);
        }else{
            $(this).addClass('totalPilih');

            $("#total-pilih").html(totalPilih + 1);
        }
    });
});