Enable Buttons (jotform)

  enableDisableButtonsInMultiForms: function () {
    var allButtons = $$(".form-submit-button");
    allButtons.each(function (b) {
      if (b.up("ul.form-section")) {
        if (
          b.up("ul.form-section").style.display == "none" ||
          b.up("ul.form-section").hasClassName("js-non-displayed-page")
        ) {
          b.disable();
        } else {
          if (
            b.className.indexOf("disabled") == -1 &&
            !b.hasClassName("conditionallyDisabled")
          ) {
            b.enable();
          }
        }
      }
    });
  },