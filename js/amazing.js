'use strict';

$(document).ready(() => {
    let loadMore = $('.load_btn');

    $('.all').click((event) => {
        event.preventDefault();
        $('.photo_item').hide();
        $('.photo_item:not(.hidden)').show();
        loadMore.show();
    });

    $('.graphic').click((event) => {
        event.preventDefault();
        $('.photo_item').filter('li[data-category*="graphic"]').show();
        $('.photo_item').filter(':not(li[data-category*="graphic"])').hide();
        loadMore.hide();
    });

    $('.web').click((event) => {
        event.preventDefault();
        $('.photo_item').filter('li[data-category*="web"]').show();
        $('.photo_item').filter(':not(li[data-category*="web"])').hide();
        loadMore.hide();
    });

    $('.landing').click((event) => {
        event.preventDefault();
        $('.photo_item').filter('li[data-category*="landing"]').show();
        $('.photo_item').filter(':not(li[data-category*="landing"])').hide();
        loadMore.hide();
    });

    $('.wordpress').click((event) => {
        event.preventDefault();
        $('.photo_item').filter('li[data-category*="wordpress"]').show();
        $('.photo_item').filter(':not(li[data-category*="wordpress"])').hide();
        loadMore.hide();
    })
});


/* Button */

$(document).ready(() => {

    $('.load_more').click((event) => {

        setTimeout(() => {
            $('.load_more').hide();
            $('.photo_item.hidden').slice(0, 12).removeClass('hidden').show();

            if (!$('.photo_item').hasClass('hidden')) {
                $('.load_btn').remove();
            }
        }, 1000);

    });


});