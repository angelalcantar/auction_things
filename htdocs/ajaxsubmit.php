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

//Fetching Values from URL
$query = "SELECT id FROM auction ORDER BY date_created desc Limit 1";
$queryResult = mysql_query($query, $link);
$row = mysql_fetch_assoc($queryResult);
$lot_num2=$_POST['lot_num1'];
$buyer_id2=$_POST['buyer_id1'];
$item_desc2=$_POST['item_desc1'];
$quantity2=$_POST['quantity1'];
$price2=$_POST['price']; 

//Insert query
$query = mysql_query("insert into auction_items(auction_id, lot_num, buyer_id, item_desc, quantity, price) values ('$row[id]', '$lot_num2', '$buyer_id2', '$item_desc2','$quantity2','$price2')");
if($query){
    echo "Form Submitted Succesfully";
}
else{
    echo "Error";
}
mysql_close($link); // Connection Closed
?>