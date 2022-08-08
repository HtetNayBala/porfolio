let windowHeight = window.innerHeight;

window.addEventListener('scroll',function (){
    let scrollHeight = window.scrollY;

    if(scrollHeight>windowHeight-200){
        // console.log('bigger')
        $('#navbar').addClass('nav-fix');
        $('#featured-projects').addClass('pt')
    }else{
        $('#navbar').removeClass('nav-fix')
        $('#featured-projects').removeClass('pt')
    };

    if(scrollHeight==0){
        setActive('home');
    }
});

//write current argument between ""
function setActive(current){
    $(`.nav-link`).removeClass('active');

    $(`.nav-link[href='#${current}']`).addClass('active');
};

//with only js
function mySelf(){
    let sectionElements = document.querySelectorAll('section');
    sectionElements.forEach(function (el){
        let waypoint = new Waypoint({
            element : el,
            handler: function (direction){
                if(direction=='down'){
                    setActive(el.getAttribute('id'));
                }
            },offset : '40%'
        });
        let waypoint2 = new Waypoint({
            element : el,
            handler: function (direction){
                if(direction=='up'){
                    setActive(el.getAttribute('id'));
                }
            },offset : '-5%'
        })
    })

}

mySelf();

//with jQuery
// function scrollBar(){
//     let sections = $('section');
//
//     sections.waypoint(function (direction){
//         if(direction == 'down'){
//             let elementId = $(this.element).attr('id');
//             setActive(elementId);
//         }
//     },{
//         offset : '40%',
//     });
//
//     sections.waypoint(function (direction){
//         if(direction == 'up'){
//             let elementId = $(this.element).attr('id');
//             setActive(elementId);
//         }
//     },{
//         offset : '0%',
//     })
// };




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




