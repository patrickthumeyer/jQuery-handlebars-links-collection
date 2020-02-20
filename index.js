let source = $("#entry-template").html();
let templateFunction = Handlebars.compile(source);

$("form").submit(function(e) {
  e.preventDefault();
  let title = $("[name=title]").val();
  let description = $("[name=description]").val();
  let link = $("[name=link]").val();

  $(".link-list").prepend(
    templateFunction({
      titleKey: title,
      descriptionKey: description,
      linkKey: link
    })
  );
});
