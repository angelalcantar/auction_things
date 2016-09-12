/*$(document).ready(function () {
            $("#submit").click(function () {
                $.ajax({
                    url: 'auctionItemLoad.php', //the script to call to get data          
                    dataType: 'json', //data format      
                    success: function (data) {
                        console.log(data);
                        $.each(data, function (i, row) {
                            console.log(i + " - I");
                            console.log(row + " - Row");
                            var lot_num = row.lot_num;
                            var buyer_id = row.buyer_id;
                            var item_desc = row.item_desc;
                            var quantity = row.quantity;
                            var price = row.price;
                            $('#lot_num_result').append(lot_num + '<br />');
                            $('#buyer_id_result').append(buyer_id + '<br />');
                            $('#item_desc_result').append(item_desc + '<br />');
                            $('#quantity_result').append(quantity + '<br />');
                            $('#price_result').append(price + '<br />');
                        });
                    }
                });
            });
        });*/