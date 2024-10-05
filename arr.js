$(function () {
  $("#demo-fixed").mobiscroll().scrollview({
    theme: "ios",
    themeVariant: "light",
    layout: "fixed",
    itemWidth: 80,
  });

  $("#demo-variable").mobiscroll().scrollview({
    theme: "ios",
    themeVariant: "light",
  });

  $("#demo-paging").mobiscroll().scrollview({
    theme: "ios",
    themeVariant: "light",
    layout: 3,
    paging: true,
  });

  $("#demo-fullpage").mobiscroll().scrollview({
    theme: "ios",
    themeVariant: "light",
    layout: 1,
    paging: true,
  });
});
