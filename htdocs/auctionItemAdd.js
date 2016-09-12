$(document).ready(function () {
    
        function loadResults() {
        $.ajax({
            url: 'auctionItemLoad.php', //the script to call to get data          
            dataType: 'json', //data format      
            success: function (data) {
                console.log(data);
                //Full Reset
                $('#lot_num_result').empty();
                $('#buyer_id_result').empty();
                $('#item_desc_result').empty();
                $('#quantity_result').empty();
                $('#price_result').empty();
                
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
    };
    
    $("#submit").click(function () {
        var lot_num = $("#lot_num").val();
        var buyer_id = $("#buyer_id").val();
        var item_desc = $("#item_desc").val();
        var quantity = $("#quantity").val();
        var price = $("#price").val();
        // Returns successful data submission message when the entered information is stored in database.
        var dataString = 'lot_num1=' + lot_num + '&buyer_id1=' + buyer_id + '&item_desc1=' + item_desc + '&quantity1=' + quantity + '&price=' + price;
        if (lot_num == '' || buyer_id == '' || item_desc == '' || quantity == '' || price == '') {
            alert("Please Fill All Fields");
        }
        else {
            // AJAX Code To Submit Form.
            $.ajax({
                type: "POST"
                , url: "ajaxsubmit.php"
                , data: dataString
                , cache: false
                , success: function (result) {
                    alert(result);
                    loadResults();
                }
                , function (data) {
                    if (data == "Form Submitted Succesfully") {
                        $('#addAuctionItem')[0].reset();
                    }
                }
            });
        }
        return false;
    });


});
//