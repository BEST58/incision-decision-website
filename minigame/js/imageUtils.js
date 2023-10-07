const getImg = (src) => {
  const img = new Image();
  img.src = src;
  return img;
}

const images = {
  block: getImg('images/block.png'),
  capBottom: getImg('images/capBottom.png'),
  capLeft: getImg('images/capLeft.png'),
  capRight: getImg('images/capRight.png'),
  capTop: getImg('images/capTop.png'),
  pipeConnectorBottom: getImg('images/pipeConnectorBottom.png'),
  pipeConnectorDownwards: getImg('images/pipeConnectorDownwards.png'),
  pipeConnectorLeft: getImg('images/pipeConnectorLeft.png'),
  pipeConnectorRight: getImg('images/pipeConnectorRight.png'),
  pipeConnectorTop: getImg('images/pipeConnectorTop.png'),
  pipeCornerTopLeft: getImg('images/pipeCornerTopLeft.png'),
  pipeCornerTopRight: getImg('images/pipeCornerTopRight.png'),
  pipeCornerBottomLeft: getImg('images/pipeCornerBottomLeft.png'),
  pipeCornerBottomRight: getImg('images/pipeCornerBottomRight.png'),
  pipeCross: getImg('images/pipeCross.png'),
  pipeHorizontal: getImg('images/pipeHorizontal.png'),
  pipeVertical: getImg('images/pipeVertical.png'),
};

function findImage(row, col) {
  if (
    map[row][col - 1] === ' ' &&
    map[row][col + 1] === ' ' &&
    map[row - 1][col] === ' ' &&
    map[row + 1][col] === ' '
  ) {
    if (
      map[row - 1][col - 1] === '-' &&
      map[row - 1][col + 1] === '-' &&
      map[row + 1][col - 1] === '-' &&
      map[row + 1][col + 1] === '-'
    ) {
      return images.pipeCross;
    } else {
      return images.block;
    }
  }

  if (
    map[row][col - 1] !== '-' &&
    map[row][col + 1] !== '-' &&
    map[row - 1] && map[row - 1][col] === '-' &&
    map[row + 1] && map[row + 1][col] === '-'
  ) {
    return images.pipeVertical;
  }

  if (
    map[row][col - 1] === '-' &&
    map[row][col + 1] === '-' &&
    (!map[row - 1] || map[row - 1][col] === ' ') &&
    (!map[row + 1] || map[row + 1][col] === ' ')
  ) {
    return images.pipeHorizontal;
  }

  return images.block;
}