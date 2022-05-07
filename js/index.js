
$(function(){
    let divWidth = $('#sliderBoard').width();
    let imgCount = $('#banner_container li').length;
    for(i=0; i<imgCount; i++ ){
        $('#banner_button').append('<li></li>')
    }
    $('#banner_button li:nth-child(1)').addClass('clickme')

    $('#banner_container').width(divWidth * imgCount)
    $('#banner_container li').width(divWidth)

    let index;
    $('#banner_button li').click(function(){
        index = $(this).index()

        $('#banner_container').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clickme')
        $('#banner_button li').not(this).removeClass('clickme')
    })

    
    setInterval(autoPlay, 5000)

    index = 0;
    function autoPlay(){
        index++;
        $('#banner_container').animate({
            left:divWidth * (index % imgCount) * -1})

        let val = index % imgCount;
        $('#banner_button li').removeClass('clickme')
        $('#banner_button').find(`li:nth-child(${val+1})`).addClass('clickme')
    }

    
});




