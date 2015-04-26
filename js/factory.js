app.factory('pageData_home', function ($http) {
    return {
        get: function (data) {
            return $http.get('/data/home.js', data).then(function (result) {
                return result.data;
            });
        }
    }
});

app.factory('mediaItem', function ($http) {
    return {
        get: function (data) {
            return $http.get('/data/mediaitem.js', data).then(function (result) {
                return result.data;
            });
        }
    }
});


app.factory('commentsData', function ($http) {
    return {
        get: function (data) {
            return $http.get('/data/comments.js', data).then(function (result) {
                return result.data;
            });
        }
    }
});
