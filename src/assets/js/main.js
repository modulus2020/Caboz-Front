let mybutton=document.getElementById("btn-back-to-top");

window.onscroll=function() {
    scrollFunction();
}

;

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display="block";
    }

    else {
        mybutton.style.display="none";
    }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

$(document).ready(function() {
        $('#overlay').fadeIn().delay(300).fadeOut();
    });

document.querySelector('.second-button').addEventListener('click', function() {
        document.querySelector('.animated-icon2').classList.toggle('open');
    });

function searchCollectionTitle() {
    var input,
    filter,
    table,
    tr,
    td,
    i,
    txtValue;
    input=document.getElementById("search-input");
    filter=input.value.toUpperCase();
    table=document.getElementById("collection-table");
    tr=table.getElementsByTagName("tr");

    for (i=0; i < tr.length; i++) {
        td=tr[i].getElementsByTagName("td")[2];

        if (td) {
            txtValue=td.textContent || td.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display="";
            }

            else {
                tr[i].style.display="none";
            }
        }
    }
}

function searchActivity() {
    var input,
    filter,
    table,
    tr,
    td,
    i,
    txtValue;
    input=document.getElementById("search-input");
    filter=input.value.toUpperCase();
    table=document.getElementById("activity-table");
    tr=table.getElementsByTagName("tr");

    for (i=0; i < tr.length; i++) {
        td=tr[i].getElementsByTagName("td")[1];

        if (td) {
            txtValue=td.textContent || td.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display="";
            }

            else {
                tr[i].style.display="none";
            }
        }
    }
}

$(".dropdown-menu.day-range li a").click(function() {
        var selText=$(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });


function searchCollection() {
    var input,
    filter,
    table,
    tr,
    td,
    i,
    txtValue;
    input=document.getElementById("searchInput");
    filter=input.value.toUpperCase();
    table=document.getElementById("collectionTable");
    tr=table.getElementsByTagName("tr");

    for (i=0; i < tr.length; i++) {
        td=tr[i].getElementsByTagName("td")[0];

        if (td) {
            txtValue=td.textContent || td.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display="";
            }

            else {
                tr[i].style.display="none";
            }
        }
    }
}



$(document).ready(function() {
        $("#collectionTable").on('click', '.collection-title', function() {
                // get the current row
                var currentRow=$(this).closest("tr");

                var col=currentRow.find(".collection-title").text();
                var colhmtl=currentRow.find(".collection-title").html();

                const proj=document.getElementById('getProject');
                const projLast=document.getElementById('getProjectLast');
                //$("#searchInput").val(col);
                $(this).attr('disabled', true);
                //$(this).prop("disabled", true);
                $(currentRow).css("background", "#131416");
                $(currentRow).css("border-bottom", "1px solid #3c3939");
                var value=$(this).text();
                var input=$("#searchInput");

                var names_arr=$("#searchInput").val();
                var myarray=names_arr.split(', ');
                var collectionNames=jQuery.inArray(value, myarray);

                if(collectionNames==-1) {
                    input.val(input.val() + value + ', ');
                    //$( "#step2" ).append( '<p>Test</p>' );
                    return false;
                }

                //proj.insertAdjacentHTML('afterbegin', colhmtl);
                //projLast.insertAdjacentHTML('afterbegin', colhmtl);
                //$("#collectionTable").hide();
            });
    });

$(document).ready(function() {
        $("#x").on('click', function() {
                $('#searchInput').val('');
                $('tr').removeAttr('style');
                $('input[type=checkbox]').attr("disabled", false);
                //$('input').prop("disabled", false);
            });
    });

$(document).ready(function() {
        $("#priceset").keyup(function() {
                $("#show_price").text($(this).val());
                $("#show_ordervalue").text($(this).val());
                var price=$('#priceset').val();
                var fee=0.10875;
                var total=parseInt(price) + fee;
                $("#totalSOL").text(total);
            });

        $("#priceset").change(function() {
                $("#show_price").text($(this).val());
                $("#show_ordervalue").text($(this).val());
                var price=$('#priceset').val();
                var fee=0.10875;
                var total=parseInt(price) + fee;
                $("#totalSOL").text(total);
            });

        $('#priceRange').on("mousemove touchmove", function(e) {
                $("#show_price").text($(this).val());
                $("#show_ordervalue").text($(this).val());
                var price=$('#priceset').val();
                var fee=0.10875;
                var total=parseInt(price) + fee;
                $("#totalSOL").text(total);
            });

        $("#rarityset").keyup(function() {
                $("#show_rarity").text($(this).val());
                $("#show_fees").text('0.10875');
            });

        $("#rarityset").change(function() {
                $("#show_rarity").text($(this).val());
                $("#show_fees").text('0.10875');
            });

        $('#rarityRange').on("mousemove touchmove", function(e) {
                $("#show_rarity").text($(this).val());
                $("#show_fees").text('0.10875');
            });
    });

$(".dropdown-menu li a").click(function() {
        var selText=$(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

/*
function searchOrders() {
	var input, filter, maindiv, order, projdiv, i, txtValue;
    input = document.getElementById("searchordersinput");
    filter = input.value.toUpperCase();
    maindiv = document.getElementById("ordersDiv");
	projdiv = document.getElementsByClassName("collection-name");
    order = maindiv.getElementsByClassName("orderItem");

	for (i = 0; i < projdiv.length; i++) {
		
			txtValue = projdiv.textContent || projdiv.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
               projdiv.style.display = "block";
            } else {
               projdiv.style.display = "none";	
			}
    }
}*/


jQuery.expr[':'].contains=function(a, i, m) {
    return jQuery(a).text().toUpperCase() .indexOf(m[3].toUpperCase())>=0;
}

;

function searchOrders() {
    var clientSearch=document.getElementById("searchordersinput");
    var s=clientSearch.value;

    $('#ordersDiv div').show();
    $('#ordersDiv div:not(:contains("' + s + '"))').hide();

}

$("#clientSearch").keyup(function() {
        searchOrders();
    });


$(".getrarity").click(function() {
        var rarity=$(this).text();
        var id=$(this).data("id");
        $(".rarityinput" +id).val(rarity);
    });

$(".gettraits").click(function() {
        var traits=$(this).text();
        var id=$(this).data("id");
        $(".traitsinput" +id).val(traits);
    });