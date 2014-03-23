function foo (x) {
    return x / 4;
}

function FunctionGraph (options) {

    var self = this;
    self._graph = [];

    options.width = options.width || 60;
    options.height = options.height || 40;
    options.center = options.center || {
        x: Math.floor(options.width / 2)
      , y: Math.floor(options.height / 2)
    }

    for (var i = 0; i < options.height; ++i) {
        self._graph[i] = [];
        for (var ii = 0; ii < options.width; ++ii) {
            self._graph[i].push(" ");
        }
    }

    self._graph[options.center.y][options.center.x] = "+";

    for (var i = 0; i < options.width; ++i) {
        var character = "-";
        if (i === options.center.x) {
            character = "+";
        } else if (i === options.width - 1) {
            character = ">";
        }

        self._graph[options.center.y][i] = character;
    }

    for (var i = 0; i < options.height; ++i) {
        var character = "|";
        if (i === options.center.y) {
            character = "+";
        } else if (i === 0) {
            character = "^";
        }

        self._graph[i][options.center.x] = character;
    }

    function addPoint (x, y) {
        x = parseInt(x);
        y = parseInt(y);
        console.log(x, y);
        self._graph[options.center.y - y][options.center.x + x] = ".";
    }
    self.addPoint = addPoint;

    self.toString = function () {
        var str = "";
        for (var i = 0; i < self._graph.length; ++i) {
            str += self._graph[i].join("") + "\n";
        }

        return str;
    };
}

var graph = new FunctionGraph ({
    height: 30
  , width: 50
});

graph.addPoint(0, 0);
graph.addPoint(1, 1);
graph.addPoint(-1, 1);
graph.addPoint(-1, -1);
graph.addPoint(1, -1);

console.log(graph.toString());
