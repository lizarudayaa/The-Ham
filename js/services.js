$("#tabs").click((e) => {
    $(".tabs_item.active").removeClass("active");
    $(e.target).addClass("active");
    $("#tabsContent li").removeClass("active");
    $(`#tabsContent li[data-content=${e.target.dataset.content}]`).addClass("active");
});

