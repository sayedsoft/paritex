
const headerMenu = (headerClass) => {

    var header = $(headerClass),
        items = header.find('.js-header-item'),
        burger = header.find('.js-header-burger'),
        wrap = header.find('.js-header-wrap');
    items.each(() => {
        var item = $(this),
            head = item.find('.js-header-head'),
            body = item.find('.js-header-body');
        head.on('click', (e) => {
            e.stopPropagation();

            if (!item.hasClass('active')) {
                items.removeClass('active');
                item.addClass('active');
            } else {
                items.removeClass('active');
            }
        });
        body.on('click', (e) => {
            e.stopPropagation();
        });
        $('html, body').on('click', () => {
            items.removeClass('active');
        });
    });
    burger.on('click', (e) => {
        e.stopPropagation();
        burger.toggleClass('active');
        wrap.toggleClass('visible');
    });


}

export default headerMenu