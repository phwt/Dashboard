<template>
  <div id="app">
    <h1>Dashboard</h1>
    <div class="container">
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
  </div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
import DataCard from "@/components/DataCard";
import { database } from "firebase";
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
    $(document).ready(function() {
      $("#game-slot").hide();

      $("#play-btn").click(function() {
        $(this).slideUp();
        $("#game-slot").slideDown();

        var runRand = setInterval(() => {
          $(".circle").each(function(index) {
            var curbg = bgset[Math.floor(Math.random() * index)];
            $(this)
              .removeClass()
              .addClass("circle " + curbg);
          });
        }, 150);
        var answer = [];
        setTimeout(() => {
          clearInterval(runRand);
          $(".circle").each(function(index) {
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
          database().ref('game/answer').set(JSON.stringify(answer))
        }, 1000);
      });
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
