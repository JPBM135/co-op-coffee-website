$(document).ready(function () {
  class Calendar {
    constructor() {}

    disabledDays() {
      /**
       * @type {NodeListOf<HTMLAnchorElement>} disabledDays
       */
      const disabledDays = document.querySelectorAll(
        ".main__booking__calendar__date-link"
      );
      const len = disabledDays.length;

      for (let i = 0; i < len; i++) {
        disabledDays[i].href = "javascript:void(0)";
      }
    }
  }

  const HKCal = new Calendar();
  HKCal.disabledDays();
});
