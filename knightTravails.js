function getPossibleKnightMoves(position) {
    const [positionX, positionY] = position;
    const knightOffsets = [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
    ];

    const possibleMoves = [];

    for (const [dx, dy] of knightOffsets) {
        const newPositionX = positionX + dx;
        const newPositionY = positionY + dy;
        if (
            newPositionX >= 0 &&
            newPositionX <= 7 &&
            newPositionY >= 0 &&
            newPositionY <= 7
        ) {
            possibleMoves.push([newPositionX, newPositionY]);
        }
    }

    return possibleMoves;
}

function knightMoves(start, end) {
    const queue = [[start]]; // holds the paths (a path is an array of positions [[x1, y1], [x2, y2]], ...)
    const set = new Set(); // to prevent duplicate positions

    while (queue.length > 0) {
        const currentPath = queue.shift();
        const currentPosition = currentPath[currentPath.length - 1];

        set.add(currentPosition.toString());

        if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
            return currentPath;
        }

        for (const move of getPossibleKnightMoves(currentPosition)) {
            if (set.has(move.toString())) {
                continue;
            }

            const newPath = [...currentPath, move];
            queue.push(newPath);
        }
    }
}
