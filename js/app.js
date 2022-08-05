let nowYear = new Date().getFullYear();

function calcAge(){
    let myAge = nowYear - 1996;
    $('#age').html(myAge);

    let expYears = (nowYear - 2021) + `<i class="bi bi-calendar-check" style="font-size: 30px"></i>`;
    $('.exp-years').html(expYears);

    let expYear = nowYear - 2021;
    $('.exp-year').html(expYear);

    if(expYear>1){
        $('#year').html('years');
    }
}

calcAge();

$('#navbar-toggler').on('click',function (){
    $('.navbar-collapse').toggleClass('show');
});

$('#exp-con').on('mouseover',function (){
    $('#exp-con').addClass('for-unicon');
    $('#things-con').addClass('dnone')
    $('#uni-con').addClass('dnone')
})

$('#exp-con').on('mouseout',function (){
    $('#exp-con').removeClass('for-unicon');
    $('#things-con').removeClass('dnone')
    $('#uni-con').removeClass('dnone')
})

$('#uni-con').on('mouseover',function (){
    $('#uni-con').addClass('for-unicon');
    $('#things-con').addClass('dnone')
    $('#exp-con').addClass('dnone')
})

$('#uni-con').on('mouseout',function (){
    $('#uni-con').removeClass('for-unicon')
    $('#things-con').removeClass('dnone')
    $('#exp-con').removeClass('dnone')
})

$('#things-con').on('mouseover',function (){
    $('#things-con').addClass('for-unicon')
    $('#exp-con').addClass('dnone')
    $('#uni-con').addClass('dnone')
})

$('#things-con').on('mouseout',function (){
    $('#things-con').removeClass('for-unicon')
    $('#exp-con').removeClass('dnone')
    $('#uni-con').removeClass('dnone')
})