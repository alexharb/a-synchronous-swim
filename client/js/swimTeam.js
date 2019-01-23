
const SwimTeam = {

  // direction, start and max all need to match the CSS
  direction: 'left',
  coords: { top: 100, left: 100 },
  max: { top: 0, left: 0, bottom: 295, right: 500 },
  angle: 0,

  move: (direction) => {
    if (!direction) { return; }
    console.log(`Lets go: ${direction}`);

    // set the swim-team's direction

    /* $('.swimmer')
      .removeClass((idx, classNames) => {
        var name = classNames.match(/(turn-\w+)/);
        return name && name[1];
      })
      .addClass(`turn-${direction}`);
    */

    // same direction as last time? -> if yes, move the swim-team
    if (SwimTeam.direction === direction) {
      SwimTeam.updateLoc(direction);
      $('.team')
        .css('top', `${SwimTeam.coords.top}px`)
        .css('left', `${SwimTeam.coords.left}px`);
    }

    SwimTeam.direction = direction;
  },

  updateLoc: (direction) => {
    // calculate what the new position is for the swim-team is
    // but don't let the swim-team get outside the max bounds!
    switch (direction) {
    case 'up':
      if (SwimTeam.coords.top > SwimTeam.max.top) {
        SwimTeam.coords.top -= Math.sin(SwimTeam.angle * Math.PI / 180) * 5;
        SwimTeam.coords.left -= Math.cos(SwimTeam.angle * Math.PI / 180) * 5;
      }
      break;
    case 'down':
      if (SwimTeam.coords.top < SwimTeam.max.bottom) {
        SwimTeam.coords.top += Math.sin(SwimTeam.angle * Math.PI / 180) * 5;
        SwimTeam.coords.left += Math.cos(SwimTeam.angle * Math.PI / 180) * 5;
      }
      break;
    case 'left':
      if (SwimTeam.coords.left > SwimTeam.max.left) {
        SwimTeam.angle-=3;
        $('.team').css({'transform' : 'rotate(' + SwimTeam.angle + 'deg)'});
      }
      break;
    case 'right':
      if (SwimTeam.coords.left < SwimTeam.max.right) {
        SwimTeam.angle+=3;
        $('.team').css({'transform' : 'rotate(' + SwimTeam.angle + 'deg)'});
      }
      break;
    } 
  }

};

var randomMovement = () => {
    // Fetch.fetch((data) => {
    //   setTimeout(() => {
    //       SwimTeam.direction = data;
    //       SwimTeam.move(SwimTeam.direction)}, 1000)
    // }
    Fetch.fetch( (data) => {
      data.forEach((each) => {
        setTimeout(() => {
          SwimTeam.direction = each;
          SwimTeam.move(SwimTeam.direction)}, 100)
      })
    }
    // Fetch.fetch( (data) => {
    //   data.forEach((each) => setTimeout( () => {
    //     SwimTeam.direction = each;
    //     SwimTeam.move(SwimTeam.direction)
    //   }, 1000)
    //   )
    // }
  )
}
