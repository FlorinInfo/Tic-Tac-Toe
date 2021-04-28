$(".players").hide();
$(".playground").hide();

$(".homepage").click(()=>{
    $(".homepage").hide();
    $(".players").show();
})

let player1 = "";
let player2 = "";

$(".players__start-btn").click(()=>{
    $(".players").hide();
    $(".playground").show();
    player1 = $(".players__name-1").val();
    player2 = $(".players__name-2").val();
    $(".playground__name-1").text(`${player1}`);
    $(".playground__name-2").text(`${player2}`);
})