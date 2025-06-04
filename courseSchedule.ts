function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let map = new Map();

    for (let i = 0; i < prerequisites.length; i++) {
        if (!map.has(prerequisites[i][0])) {
            map.set(prerequisites[i][0], []);
        }
        map.get(prerequisites[i][0]).push(prerequisites[i][1]);
    }

    let visiting = 1;
    let visited = 2;
    const state = new Array(numCourses).fill(0);

    function backtrack(curr) {
        if (state[curr] === visiting) {
            return false;
        }
        if (state[curr] === visited) {
            return true;
        }

        state[curr] = 1;

        if (map.has(curr)) {
            for (let i = 0; i < map.get(curr).length; i++) {
                if (!backtrack(map.get(curr)[i])) {
                    return false;
                }
            }
        }

        state[curr] = 2;
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!backtrack(i)) {
            return false;
        }
    }

    return true;
};
