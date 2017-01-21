var fs = require('fs-promise');

fs.readFile('../dataset/flickr_logos_27_dataset_training_set_annotation.txt', {encoding: 'utf8'})
    .then(function (content) {
        var lines = content.split('\n');
        var map = {};
        var labels = [];
        lines.forEach(function (line) {
            var lineArr = line.split(' ');
            var fileName = lineArr[0];
            var label = lineArr[1].toLowerCase();

            if (!map[label]) {
                map[label] = [];
                labels.push(label);
            }
            map[label].push(fileName);
        });
        return {map: map, labels: labels};
    }).then(function (data) {
        var promises = [];
        promises.push(data);
        data.labels.forEach(function (label) {
            promises.push(fs.mkdirs('../logos/' + label))
        });
        return Promise.all(promises);
    }).then(function (data) {
        var map = data[0].map;
        var labels = data[0].labels;
        labels.forEach(function (label) {
           map[label].forEach(function (filename) {
               fs.copy('../dataset/flickr_logos_27_dataset_images/' + filename, '../logos/' + label + '/' + filename)
           });
        });
    });