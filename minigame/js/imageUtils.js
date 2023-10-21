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
      map[row - 1][col - 1] === '█' &&
      map[row - 1][col + 1] === '█' &&
      map[row + 1][col - 1] === '█' &&
      map[row + 1][col + 1] === '█'
    ) {
      return images.pipeCross;
    } else {
      return images.block;
    }
  }

  if (
    map[row] && map[row][col - 1] === '█' &&
    map[row][col + 1] === '█' &&
    map[row - 1] && map[row - 1][col] === '█' &&
    map[row + 1] && map[row + 1][col] === '█'
  ) {
    return images.pipeCross;
  }

  if (
    (!map[row - 1] || map[row - 1][col] === ' ') &&
    (map[row + 1] && map[row + 1][col] === '█')
  ) {
    if (
      map[row][col - 1] === '█' &&
      map[row][col + 1] !== '█') {
      return images.pipeCornerTopRight;
    } else if (
    map[row][col - 1] !== '█' &&
    map[row][col + 1] === '█') {
      return images.pipeCornerTopLeft;
    } else if (
      map[row][col - 1] !== '█' &&
      map[row][col + 1] !== '█') {
      return images.capTop;
    } else if (
      map[row][col - 1] === '█' &&
      map[row][col + 1] === '█') {
      return images.pipeConnectorTop;
    }

    return images.pipeVertical;
  }

  if (
    (map[row - 1] && map[row - 1][col] === '█') &&
    (!map[row + 1] || map[row + 1][col] === ' ')
  ) {
    if (
      map[row][col - 1] === '█' &&
      map[row][col + 1] !== '█') {
      return images.pipeCornerBottomRight;
    } else if (
      map[row][col - 1] !== '█' &&
      map[row][col + 1] === '█') {
      return images.pipeCornerBottomLeft;
    } else if (
      map[row][col - 1] !== '█' &&
      map[row][col + 1] !== '█') {
      return images.capBottom;
    } else if (
      map[row][col - 1] === '█' &&
      map[row][col + 1] === '█') {
      return images.pipeConnectorBottom;
    }

    return images.pipeVertical;
  }

  if (
    map[row][col - 1] !== '█' &&
    map[row][col + 1] !== '█' &&
    map[row - 1] && map[row - 1][col] === '█' &&
    map[row + 1] && map[row + 1][col] === '█'
  ) {
    return images.pipeVertical;
  }

  if (
    (map[row][col - 1] !== '█') &&
    (map[row][col + 1] === '█')
  ) {
    if (
      (!map[row - 1] || map[row - 1][col] === ' ') &&
      (!map[row + 1] || map[row + 1][col] === ' ')) {
      return images.capLeft;
    } else if (
      (map[row - 1] && map[row - 1][col] !== ' ') &&
      (map[row + 1] && map[row + 1][col] !== ' ')) {
      return images.pipeConnectorRight;
    }

    return images.pipeHorizontal;
  }

  if (
    (map[row][col - 1] === '█') &&
    (map[row][col + 1] !== '█')
  ) {
    if (
      (!map[row - 1] || map[row - 1][col] === ' ') &&
      (!map[row + 1] || map[row + 1][col] === ' ')) {
      return images.capRight;
    } else if (
      (map[row - 1] && map[row - 1][col] !== ' ') &&
      (map[row + 1] && map[row + 1][col] !== ' ')) {
      return images.pipeConnectorLeft;
    }

    return images.pipeHorizontal;
  }

  if (
    map[row][col - 1] === '█' &&
    map[row][col + 1] === '█' &&
    (!map[row - 1] || map[row - 1][col] === ' ') &&
    (!map[row + 1] || map[row + 1][col] === ' ')
  ) {
    return images.pipeHorizontal;
  }

  return images.block;
}