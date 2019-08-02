export const form = {
  applyValidators: () => {
    $("#contact-form").addClass("validate-form");
    $("#contact-form")
      .find("input,textarea")
      .each(function(index, element) {
        if ($(this).attr("aria-required") === "true") {
          $(this).addClass("required");
        }
        if ($(this).attr("name") === "email") {
          $(this).addClass("email");
        }
      });

    if ($(".validate-form").length) {
      $(".validate-form").each(function() {
        $(this).validate({
          ignore: ".ignore",
          rules: {
            hiddenRecaptcha: {
              required: function() {
                if (grecaptcha.getResponse() == "") {
                  return true;
                } else {
                  return false;
                }
              }
            }
          }
        });
      });
    }
  }
};
