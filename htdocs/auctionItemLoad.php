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
  
  

  $result = mysql_query("SELECT lot_num, buyer_id, item_desc, quantity, price FROM auction_items where auction_id = (SELECT id FROM auction ORDER BY date_created desc Limit 1) ORDER BY id DESC");          //query

    $table_data = array();
   while($row = mysql_fetch_array($result)){
       $table_data[]= (array('lot_num' => $row["lot_num"], 'buyer_id' => $row["buyer_id"], 'item_desc' => $row["item_desc"], 'quantity' => $row["quantity"], 'price' => $row["price"]));
    }
   // $array = mysql_fetch_row($result);

    echo json_encode($table_data);
  
  mysql_close($link); // Connection Closed
?>