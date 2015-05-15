var count = 0 ;
$(document).ready(function () {

    var feature = (function () {
        var initItems = function () {
            var items = loadAllItems();

            _(items).each(function (item) {
                var addCart = '<button>加入购物车</button>';
                var listItem = $('<tr>\
                            <td>' + item.name + '</td>\
                            <td>' + item.price + '</td>\
                            <td>' + item.unit + '</td>\
                            <td>' + addCart + '</td>\
                          </tr>');
                $('#item-table').append(listItem);
            });
        };

        var printDate = function() {
            $("#pay-date").text(utils.getDate());
        };

        return {
            init: initItems,
            printDate: printDate
        };
    })();

    // set a function here to realize the purchasedItem-table, just as method up

        var getPurchasedItems = function () {
            var items = loadAllItems();

            _(items).each(function (item) {
              if ( $("button").on("click",function() ){
                  var purchasedlist = $('<tr>\
                  <td>' + this.name + '</td>\
                  <td>' + this.price + '</td>\
                  <td>' + this.unit + '</td>\
                  <td>' + this.amount + '</td>\
                </tr>');


              }
                            var listItem =
                $('#item-table').append(listItem);
            });
        };

        var printDate = function() {
            $("#pay-date").text(utils.getDate());
        };

        return {
            init: initItems,
            printDate: printDate
        };




    feature.init();
    feature.printDate();
    $("#count").text(count+"");
    $("button").on("click",function(){
      count++;
    //  alert($("#count").text()+1);
      $("#count").text(count+"");
    });
});
