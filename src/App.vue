<template>
  <div id="app">
    <!-- <div class="bg-danger" style="position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    padding: 0;
    margin: 0;"></div> -->
    <div class="container">
      <h1>Dashboard</h1>
      <div class="row">

        <!--กล่องแสดงข้อมูล-->
        <data-card name="Temperature" path="temperature" suffix="°C" />
        <data-card name="Humidity" path="humidity" suffix="%" />
        <data-card id="musichere" name="Music" path="music" />
        <!--กล่องแสดงข้อมูล-->
        <audio id="myAudio">
          <source src="https://www.w3schools.com/tags/horse.ogg" type="audio/ogg">
          <source src="https://www.w3schools.com/tags/horse.mp3" type="audio/mpeg">
          Your browser does not support the audio tag.
        </audio>
      </div><br>
      <h1>Random Game</h1>
      <hr>
      <br>
      <button id="play-btn" class="btn btn-block btn-success btn-lg">Start!</button>
      <br>
      <br>
      <div id="game-slot" class="row">
        <div class="col-3 d-flex justify-content-center">
          <div class="circle bg-secondary"></div>
        </div>

        <div class="col-3 d-flex justify-content-center">
          <div class="circle bg-secondary"></div>
        </div>

        <div class="col-3 d-flex justify-content-center">
          <div class="circle bg-secondary"></div>
        </div>

        <div class="col-3 d-flex justify-content-center">
          <div class="circle bg-secondary"></div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <data-card name="Result" path="result" />
      <data-card id="sitt" name="Sit" path="sit" />
    </div>
  </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
  import DataCard from "@/components/DataCard";
  import {
    database
  } from "firebase";
  import ControlCard from "@/components/ControlCard";
  export default {
    name: "app",
    components: {
      DataCard,
      ControlCard
    },
    mounted() {
      var bgset = ["bg-primary", "bg-danger", "bg-success", "bg-warning"];
      var bgsets = ["bg-primary", "bg-danger", "bg-success", "bg-warning"];
      $(document).ready(function () {
        $("#game-slot").hide();

        // $("body").hide();
        // $("html").css("background", "black");

        $("#play-btn").click(function () {
          $(this).slideUp();
          $("#game-slot").slideDown();

          var runRand = setInterval(() => {
            $(".circle").each(function (index) {
              var curbg = bgset[Math.floor(Math.random() * index)];
              $(this)
                .removeClass()
                .addClass("circle " + curbg);
            });
          }, 150);
          var answer = [];
          setTimeout(() => {
            clearInterval(runRand);
            $(".circle").each(function (index) {
              var curbg = bgset[Math.floor(Math.random() * (4 - index))];
              if (bgset.indexOf(curbg) > -1) {
                answer.push(bgsets.indexOf(curbg));
                bgset.splice(bgset.indexOf(curbg), 1);
              }
              $(this)
                .removeClass()
                .addClass("circle " + curbg);
            });
            console.log("this" + answer);
            database().ref('game/answer').set(answer.join(""))
          }, 1000);
        });

        setInterval(() => {
          if ($("#musichere > h2").text() == "ON") {
            var audio = new Audio('https://www.w3schools.com/tags/horse.mp3');
            audio.play();
          } else {
            // $("#myAudio").pause();
          }
        }, 100);

        setInterval(() => {
          if ($("#sitt > h2").text() == "true") {
            $("body").fadeIn();
            $("html").css("background", "white");
          } else {
            $("body").fadeOut();
            $("html").css("background", "black");
          }
        }, 100);

      });
    }
  };
</script>
<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px 0;
  }

  .circle {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
</style>
