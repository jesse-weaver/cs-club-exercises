function genTree(maxDepth, currentDepth = 1) {
  if (currentDepth > maxDepth) {
    return null;
  }
  const node = {
    depth: currentDepth,
  };
  node.left = genTree(maxDepth, currentDepth + 1, node);
  node.right = genTree(maxDepth, currentDepth + 1, node);
  return node;
}

const renderer = () => {
  const growthScalar = document.body.clientHeight / 5;
  const startPosition = [document.body.clientWidth / 2, document.body.clientHeight];
  const canvas = document.getElementById('canvas');
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  const ctx = canvas.getContext('2d');
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'black';
  const rendered = new Map();
  return function renderNode(node) {
    let position = startPosition;
    if (rendered.has(node)) {
      position = rendered.get(node);
    }
    const scalar = growthScalar / node.depth;
    const newY = position[1] - scalar;
    if (node.left) {
      ctx.beginPath();
      ctx.moveTo(position[0], position[1]);
      // draw line to left
      const newX = position[0] - scalar;
      ctx.lineTo(newX, newY);
      ctx.stroke();
      rendered.set(node.left, [newX, newY]);
    }
    if (node.right) {
      ctx.beginPath();
      ctx.moveTo(position[0], position[1]);
      // draw line to right
      const newX = position[0] + scalar;
      ctx.lineTo(newX, newY);
      ctx.stroke();
      rendered.set(node.right, [newX, newY]);
    }
  }
}

function renderTree(tree) {
  const renderNode = renderer();
  // FILL THIS OUT!
}

renderTree(genTree(10));
