$(document).ready(function () {
    var itemCount = 0;

    $('#plus_btn').on('click', function () {
        itemCount++;
        var className = "item-" + itemCount;
        $('.add-items').append(`  
        <div class="border border-2  p-2 mt-3 item ${className}">
            <button id="close_btn" type="button" class="btn btn-danger position-absolute end-0 me-2">Close</button>
            <div class="mt-3">
            <label for="">Product Name</label>
            <input class="input-style name" type="text" placeholder="Product name..">
            </div>
            <div>
            <label for="">Description</label>
            <input class="input-style desc" type="text" placeholder="">
            </div>
            <div>
            <label for="">Quantity</label>
            <input class="input-style qty" type="number" placeholder="">
            </div>
            <div>
            <label for="">Rate</label>
            <input class="input-style rate" type="number" placeholder="">
            </div>
            <div>
            <label for="">Amount</label>
            <input class="input-style amount" type="text" placeholder="">
            </div>
           
        </div>`);

        // Removing the current input field when close button is clicked
        $('.btn-danger').on('click', function () {
            $(this).parent().remove();
        })

    });

    // close button
    $('#close_btn').on('click', function () {
        $('#remove_all').remove();
    });
    // submit button
    $('#submit_btn').on('click', function () {
        let input1 = $('#input_field1').val();
        let input2 = $('#input_field2').val();
        let input3 = $('#input_field3').val();
        let input4 = $('#checkbox_status').prop('checked');
        var items = $('.item');
        console.log({ items });
        var insideObject = [];

        items.each(index => {
            const initialItem =  $(items[index]);
            const name = initialItem.find('.name').val();
            const desc = initialItem.find('.desc').val();
            let qty = initialItem.find('.qty').val();
            let rate = initialItem.find('.rate').val();
            let amount = initialItem.find('.amount').val();
            // converting to number
            qty = +qty;
            rate = +rate;
            amount = +amount;
            console.log(typeof (qty));
            var itemObj = {
                name: name,
                desc: desc,
                qty: qty,
                rate: rate,
                amount: amount
            }
            insideObject.push(itemObj);
            console.log(itemObj);
        });

        var result = {
            bName: input1,
            mobile: input2,
            address: input3,
            due: input4,
            items: insideObject
        };
        console.log(result);
        $('#output_field').html(`
            <div class="border border-2  p-2 mt-2 ">
            <pre>${JSON.stringify(result, null, 2)}</pre>
            </div>
        `);
 
        //For showing all input field items in console
        $("input").each(function () {
            var input = $(this).val();
        });
        //getting total input field items 
        const total = $('.input-style').length;
        console.log(total);
        // $('input').val('');//clearing input field after submit button

    });

});

