app.directive('like', function () {

    return {
        restrict: 'E',
        templateUrl: 'views/templates/like.html',
        scope: {
            _post: '&post',
            ngModel: '=',
            item: '@'
        },
        link: function (scope, element, attrs) {

            scope.post = function () {

                //scope._post({ itemId: scope.itemid, likeCount: scope.likeCount, isLike : scope.isLike });
                scope._post({ mediaId: scope.item.mediaId, likeCount: scope.item.likeCount, isLiked: scope.item.isLiked });
            }

            attrs.$observe('item', function (val) {
                scope.item = angular.fromJson(val);
            });
        }
    }
});


// comments directives
app.directive('comments', function () {
    return {
        restrict: 'AE',
        templateUrl: 'views/templates/comments.html',
        scope: {
            _load: '&load',
            _post: '&post',
            ngModel: '=',
            commentsList: '@'
        },
        link: function (scope, element, attrs) {

            scope.itemid = attrs.itemid;
            scope.page = 1;

            scope.load = function () {
                scope._load({ id: scope.itemid, page: scope.page });
                scope.page++;
            }

            scope.post = function () {
                scope._post({ itemId: scope.itemid, author: 'Adam', text: scope.commentText });
            }

            attrs.$observe('commentsList', function (val) {
                scope.commentsList = angular.fromJson(val);
            });

            // init load
            scope.load();
        }
    };
});