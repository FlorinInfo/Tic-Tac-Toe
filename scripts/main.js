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

    // alert(player1);
    // alert(player2);
})


// Game logic

let firstTurn = 'x';

let playground = Array(3).fill(Array(3));

function verifyWinner(a, b, player){
    if(a==1) {
        if(playground[a][b]==playground[a+1][b]==playground[a+2][b]) return player;
        if(playground[a][b]==playground[a][b+1]==playground[a][b+2]) return player;
        if(playground[a][b]==playground[a+1][b+1]==playground[a+2][b+2]) return player;
    }
    if(a==2) {
        if(playground[a][b]==playground[a+1][b]==playground[a-1][b]) return player;
        if(playground[a][b]==playground[a][b+1]==playground[a][b+2]) return player;
        if(playground[a][b]==playground[a+1][b+1]==playground[a+2][b+2]) return player;
    }
    if(a==3) {
        if(playground[a][b]==playground[a+1][b]==playground[a+2][b]) return player;
        if(playground[a][b]==playground[a][b+1]==playground[a][b+2]) return player;
        if(playground[a][b]==playground[a+1][b+1]==playground[a+2][b+2]) return player;
    }
}

// $(".playground__xo").click(()=>{
   
// }) 

