$('#userBox').hide();

$('#registerBox').hide()

//点击马上注册
$('#ms-reg').click(function (e) {
    e.preventDefault();
    $('#loginBox').hide();
    $('#registerBox').show();
});

//点击马上登录
$('#ms-log').click(function (e) {
    e.preventDefault();
    $('#loginBox').show();
    $('#registerBox').hide();
});


//点击注册
$('#reg').click(function (e) {
    e.preventDefault();

    $.ajax({
        type: "post",
        url: "http://127.0.0.1:3000/reg",
        data: {
            regname: $('#reg-name').val(),
            regpass: $('#reg-pass').val(),
            regpass2: $('#reg-pass2').val()
        },
        dataType: "json",
        success: function (result) {
            console.log(result);
            $('#reg-tips').html(result.msg);


            if (result.code === 0) {
                $('#reg-name').val('')
                $('#reg-pass').val('')
                $('#reg-pass2').val('')

                setInterval(() => {
                    $('#loginBox').show();
                    $('#registerBox').hide();
                }, 500);
            }
        }
    });
});

//点击登录

$('#login').click(function (e) {
    e.preventDefault();
    $.ajax({
        type: "post",
        url: "http://127.0.0.1:3000/login",
        data: {
            logname: $('#log-user').val(),
            logpass: $('#log-pass').val(),
        },
        dataType: "json",
        success: function (result) {
            console.log(result);
            $('#log-tips').html(result.msg);

            if (result.code === 3) {
                setInterval(() => {
                    $('#registerBox').show();
                    $('#loginBox').hide();
                }, 1000);
            }


            if (result.code === 0) {
                $('#userBox').show();
                $('#loginBox').hide();

                $('#col-user').html($('#log-user').val());
            }


        }
    });
});

//退出
$('#logoutBtn').click(function (e) {
    e.preventDefault();
    $('#loginBox').show();
    $('#userBox').hide();

    $('#log-user').val('')
    $('#log-pass').val('')

});

//cookie

$.ajax({
    type: "get",
    url: "http://127.0.0.1:3000",
    // data: "json",
    dataType: "json",
    success: function (result) {
        console.log(result);
    }
});