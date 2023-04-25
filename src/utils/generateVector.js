const generateConeCoords = (lineCoords) => {
  const { x, y, z, cone, color } = lineCoords;
  if (cone) {
    return {
      'type': 'cone', 'showscale': false,
      'color': color,
      x: [x[1]],
      y: [y[1]],
      z: [z[1]],
      u: [0.2 * (x[1] - x[0])],
      v: [0.2 * (y[1] - y[0])],
      w: [0.2 * (z[1] - z[0])],
    }
  }
}

const generate_LineCoords = (lineCoords) => {
  const { x, y, z, color, name, dotted } = lineCoords;
  return {
    'type': 'scatter3d', 'mode': 'lines+text', 'name': name,
    'textposition': 'middle left', 'showlegend': false,
    'text': name,
    'x': x, 'y': y, 'z': z,
    'line': {
      'width': 6,
      'color': color,
      'dash': dotted ? 'dashdot' : 'solid',
    },
  }
}

export { generateConeCoords, generate_LineCoords };
