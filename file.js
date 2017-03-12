  function randomValue() {
      return Math.floor((Math.random() * 6) + 1)
  }

  class Click {
      static add() {
          $('#roller button.add')
              .on('click', function () {
                  $('.dice')
                      .append('<div class="diceNumber">0</div>')
              })
      }

      static roll() {
          $('#roller button.roll')
              .on('click', function () {
                  $('.diceNumber')
                      .each(function (item, number) {
                          $(number)
                              .text(randomValue())
                      })
              })
      }
  }

  $(document)
      .ready(function () {
          Click.add()
          Click.roll()
      })
