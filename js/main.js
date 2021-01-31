(function(){
    $(document).ready(init);
    var firebaseConfig = {
        apiKey: "AIzaSyA95XkJoYB4U_IIbsGbwp8vHQv_tq0fGiA",
        authDomain: "workout-bingo-849a2.firebaseapp.com",
        projectId: "workout-bingo-849a2",
        storageBucket: "workout-bingo-849a2.appspot.com",
        messagingSenderId: "945157229663",
        appId: "1:945157229663:web:139af14dcec5227d24dfea",
        measurementId: "G-FLWL3WS677"
    };

    function init(){
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();

        $("#join").on("click", join);
        $("#start").on("click", start);

        $("#random").on("click", random);

        $("#joinBack").on("click", joinBack);
        $("#selectBack").on("click", selectBack);
    }

    function random(){
        $("#selectDiv").fadeOut(800, () => {
            $("#randomizedBoard").fadeIn();
        });
    }

    function joinBack(){
        $("#joinBackDiv").fadeOut(800);
        $("#joinDiv").fadeOut(800, () => {
            $("#optionsDiv").fadeIn();
        })
    }

    function selectBack(){
        $("#selectBackDiv").fadeOut(800);
        $("#selectDiv").fadeOut(800, () => {
            $("#optionsDiv").fadeIn();
        })
    }

    function start(){
        $("#optionsDiv").fadeOut(800, () => {
            $("#selectDiv").fadeIn();
            $("#selectBackDiv").fadeIn();
        })
    }

    function join(){
        $("#optionsDiv").fadeOut(800, () => {
            $("#joinDiv").fadeIn();
            $("#joinBackDiv").fadeIn();
        });
    }
})();