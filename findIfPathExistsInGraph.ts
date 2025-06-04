function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const map = new Map();
    const seen = new Set();
    let found = false;

    // Populate map
    for (let i = 0; i < edges.length; i++) {
        if (!map.has(edges[i][0])) {
            map.set(edges[i][0], []);
        }
        if (!map.has(edges[i][1])) {
            map.set(edges[i][1], []);
        }
        map.get(edges[i][0]).push(edges[i][1]);
        map.get(edges[i][1]).push(edges[i][0]);
    }

    // Search for the destination from the source
    function search(node): boolean {
        if (node === destination) {
            return true;
        }
        seen.add(node);
        const neighbors = map.get(node);
        // Search each neighbor and continue when none are left
        if (neighbors) {
            for (let i = 0; i < neighbors.length; i++) {
                if (!seen.has(neighbors[i])) {
                    if (search(neighbors[i])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    return search(source);
};
