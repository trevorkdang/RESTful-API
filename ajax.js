//Ajax file to handle user interface and http get requests to the server to fetch data
$document.ready(function () {

    //event handler for getAllTweets button click
    $("#getAllTweets").click(function () {
        //get request to endpoint on the server
        $.get("/tweets", function (data){ 
            //callback function that executes when success
            $("#output").html(JSON.stringify(data, null, 2)); //stringify used to format
        });
    });

    //event handler for getAllUsers button click
    $("#getAllUsers").click(function () {
        //very similar to getAllTweets
        $.get("/users", function (data){
            $("#output").html(JSON.stringify(data, null, 2));
        });
    });

    //event handler for getAllLinks button click
    $("#getAllLinks").click(function () {
        //very similar to getAllTweets
        $.get("/external_links", function (data){
            $("#output").html(JSON.stringify(data, null, 2));
        });
    });

    //event handler for getTweetDetails button click
    $("#getTweetDetails").click(function () {
        //here a tweetId is needed in the input field, so retrieve the ID str value
        const tweetId = $("#tweetId").val();
        //makes a get request to the server with tweetId
        $.get("/tweets/" + tweetId, function (data){
            $("#output").html(JSON.stringify(data, null, 2));
        });
    });

    //event handler for getUserDetails button click
    $("#getUserDetails").click(function () {
        //similar to getTweetDetails
        const screenName = $("#screenName").val();
        $.get("/users/" + screenName, function (data){
            $("#output").html(JSON.stringify(data, null, 2));
        });
    });

});
