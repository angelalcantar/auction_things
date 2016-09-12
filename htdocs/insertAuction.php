<?php
$user = 'root';
$password = 'root';
$db = 'auctions';
$host = 'localhost';
$port = 8889;

$link = mysql_connect(
   "$host:$port", 
   $user, 
   $password
);
$db_selected = mysql_select_db(
   $db, 
   $link
);


if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
    $date = $_POST['date'];
    $auction_name = $_POST['auction_name'];

    if($date !=''){
        //Insert Query of SQL
        $query = mysql_query("insert into auction(date, auction_name) values ('$date', '$auction_name')");
        header('Location: auction-item.html');
    }
       else{
           echo "<p>Insertion Failed <br/> Some Fields are Blank....!!</p>";
       }
}

mysql_close($link); // Closing Connection with Server
?>