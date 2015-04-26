var _data = [];

app.controller('homeCtrl', function ($scope, $http, pageData_home) {

    $scope.images = [];
    $scope.text = {};

    pageData_home.get($scope.data).then(function (data) {

        // render images
        for (var i in data.images) {
            $scope.images.push(data.images[i]);
        }

        // render page text
        $scope.text = data.text;

    });

});

var _comments = null;

app.controller('createCtrl', function ($scope, $http) {

    $scope.data = {};
    $scope.data.heading = 'Create page';
    $scope.data.subheading = 'This is the create page. Go and create';

});

app.controller('commentsCtrl', function ($scope, $http, commentsData) {

    var itemId = 0;

    $scope.commentsList = [];
    $scope.comment = {};
    $scope.data = {};

    $scope.load = function (id, page) {
        
        // set the item id
        $scope.data.itemId = id;
        $scope.data.page = page;

        commentsData.get($scope.data).then(function (data) {
           
            for (var i in data.comments) {
                $scope.commentsList.push(data.comments[i]);
            }
        });

        _data = $scope.commentsList;
    }

    $scope.post = function (itemId, author, commentText) {

        $scope.comment.author = author;
        $scope.comment.itemId = itemId;
        $scope.comment.commentText = commentText;

        $http({
            method: 'POST',
            url: '/postCommentUrl',
            data: $scope.comment
        })

        $scope.commentsList.push($scope.comment);
        $scope.comment = {};
    }

});

app.controller('mediaItemCtrl', function ($scope, $http, mediaItem) {

    $scope.item = {}
    $scope.newComment = {};
    $scope.item.comments = [];
    $scope.data = {};
    $scope.ajaxReady = true;

    mediaItem.get($scope.data).then(function (data) {

        $scope.item = data.mediaItem;

        // render images
        for (var i in data.comments) {
            $scope.item.comments(data.comments[i]);
        }
    });

    // like 
    $scope.post = function (mediaId, likeCount, isLiked) {

        $scope.item.mediaId = mediaId;
        $scope.item.isLiked = isLiked;

        if ($scope.ajaxReady) {

            $scope.ajaxReady = false;

            if (!$scope.item.isLiked) {
                $scope.item.isLiked = true;
                $scope.item.likeCount++;
            }
            else {
                $scope.item.isLiked = false;
                $scope.item.likeCount--;
            }

            $http({
                method: 'POST',
                url: '/postLikeUrl',
                data: $scope.item
            })

            //set ajax ready to false after successful post
            $scope.ajaxReady = true;
        }
    }


    // like 
    //$scope.like = function (image) {

    //    if (typeof (image.ajaxReady) == 'undefined' || image.ajaxReady) {

    //        image.ajaxReady = false;

    //        if (!image.isLiked) {
    //            image.isLiked = true;
    //            image.likeCount++;
    //        }
    //        else {
    //            image.isLiked = false;
    //            image.likeCount--;
    //        }

    //        $http({
    //            method: 'POST',
    //            url: '/serviceUrl',
    //            data: image
    //        })

    //        //set ajax ready to false after successful post
    //        image.ajaxReady = true;
    //    }
    //}
});