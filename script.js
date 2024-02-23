// Script Coded By @nazmulhasanovx << -- Telegram
// Script Coded By @nazmulhasanovx << -- Telegram
// Script Coded By @nazmulhasanovx << -- Telegram
// Enter your leaderboard name
let lname = " nazmulhasanov ";
// Enter your initial capital
let iblafp = 1000;

// Change live accout to demo by text and active
document.getElementsByClassName("usermenu__info-name")[0].innerHTML =
  "LIVE ACCOUNT";

let elm1 = document.getElementsByClassName("sidebar__button")[1];
elm1.setAttribute("id", "real");
let elm2 = document.getElementsByClassName("sidebar__button")[2];
elm2.setAttribute("id", "demo");
let eler = document.getElementById("real");
eler.classList.toggle("active");
let eled = document.getElementById("demo");
eled.classList.toggle("active");

//   function for dynamic  all thing

setInterval(function () {
  // Find Tha balance
  let blc = document.getElementsByClassName("usermenu__info-balance")[0]
    .innerHTML;
  blc = blc.replaceAll(",", "");
  blc = blc.replaceAll("$", "");
  blc = blc.replaceAll(".", "");
  blc = blc.substring(0, blc.length - 2);
  blc = parseInt(blc);

  // set profile icoin
  let icoin;
  if (blc < 5000) {
    icoin =
      '<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-standart"></use></svg>';
  } else if (blc >= 5000 && blc < 10000) {
    icoin =
      '<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-pro"></use></svg>';
  } else if (blc >= 10000) {
    icoin =
      '<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-vip"></use></svg>';
  }

  // place profile icoin
  document.getElementsByClassName("usermenu__info-levels")[0].innerHTML = icoin;
}, 1000);

//leader board setting

setInterval(function () {
  //leader board green bar

  var leaderboard = document.getElementsByClassName("app--sidepanel-open")[0];
  if (leaderboard != null) {
    document.getElementsByClassName("position__loading")[0].style.background =
      "#0faf59";
    //  set leaderboard balnce

    let lblc = document.getElementsByClassName("usermenu__info-balance")[0]
      .innerHTML;
    lblc = lblc.replaceAll(",", "");
    lblc = lblc.replaceAll("$", "");
    lblc = lblc.replaceAll(".", "");
    lblc = parseInt(lblc);
    lprofit = lblc - iblafp;
    lprofit = lprofit.toString();

    if (lprofit == 0) {
      let s1 = lprofit.slice(0, 1);
      let s2 = lprofit.slice(1, 3);
      lprofit = "$0.00";
    } else if (lprofit.length == 3) {
      let s1 = lprofit.slice(0, 1);
      let s2 = lprofit.slice(1, 3);
      lprofit = "$" + s1 + "." + s2;
    } else if (lprofit.length == 4) {
      let s1 = lprofit.slice(0, 2);
      let s2 = lprofit.slice(2, 4);
      lprofit = "$" + s1 + "." + s2;
    } else if (lprofit.length == 5) {
      let s1 = lprofit.slice(0, 3);
      let s2 = lprofit.slice(3, 5);
      lprofit = "$" + s1 + "." + s2;
    } else if (lprofit.length == 6) {
      let s1 = lprofit.slice(0, 1); //0,1
      let s2 = lprofit.slice(1, 4); //1,3
      let s3 = lprofit.slice(4, 6); //4,6
      lprofit = "$" + s1 + "," + s2 + "." + s3;
    } else if (lprofit.length == 7) {
      let s1 = lprofit.slice(0, 2); //0,1
      let s2 = lprofit.slice(2, 5); //1,3
      let s3 = lprofit.slice(5, 7); //4,6
      lprofit = "$" + s1 + "," + s2 + "." + s3;
    }
    document.getElementsByClassName(
      "position__header-money --green"
    )[0].innerHTML = lprofit;

    //   All top 20 profit value

    let p1 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[0].innerHTML;
    p1 = p1.replaceAll(",", "");
    p1 = p1.replaceAll("$", "");
    p1 = p1.replaceAll(".", "");
    p1 = parseInt(p1);

    let p2 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[1].innerHTML;
    p2 = p2.replaceAll(",", "");
    p2 = p2.replaceAll("$", "");
    p2 = p2.replaceAll(".", "");
    p2 = parseInt(p2);

    let p3 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[2].innerHTML;
    p3 = p3.replaceAll(",", "");
    p3 = p3.replaceAll("$", "");
    p3 = p3.replaceAll(".", "");
    p3 = parseInt(p3);

    let p4 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[3].innerHTML;
    p4 = p4.replaceAll(",", "");
    p4 = p4.replaceAll("$", "");
    p4 = p4.replaceAll(".", "");
    p4 = parseInt(p4);

    let p5 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[4].innerHTML;
    p5 = p5.replaceAll(",", "");
    p5 = p5.replaceAll("$", "");
    p5 = p5.replaceAll(".", "");
    p5 = parseInt(p5);

    let p6 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[5].innerHTML;
    p6 = p6.replaceAll(",", "");
    p6 = p6.replaceAll("$", "");
    p6 = p6.replaceAll(".", "");
    p6 = parseInt(p6);

    let p7 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[6].innerHTML;
    p7 = p7.replaceAll(",", "");
    p7 = p7.replaceAll("$", "");
    p7 = p7.replaceAll(".", "");
    p7 = parseInt(p7);

    let p8 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[7].innerHTML;
    p8 = p8.replaceAll(",", "");
    p8 = p8.replaceAll("$", "");
    p8 = p8.replaceAll(".", "");
    p8 = parseInt(p8);

    let p9 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[8].innerHTML;
    p9 = p9.replaceAll(",", "");
    p9 = p9.replaceAll("$", "");
    p9 = p9.replaceAll(".", "");
    p9 = parseInt(p9);

    let p10 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[9].innerHTML;
    p10 = p10.replaceAll(",", "");
    p10 = p10.replaceAll("$", "");
    p10 = p10.replaceAll(".", "");
    p10 = parseInt(p10);

    let p11 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[10].innerHTML;
    p11 = p11.replaceAll(",", "");
    p11 = p11.replaceAll("$", "");
    p11 = p11.replaceAll(".", "");
    p11 = parseInt(p11);

    let p12 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[11].innerHTML;
    p12 = p12.replaceAll(",", "");
    p12 = p12.replaceAll("$", "");
    p12 = p12.replaceAll(".", "");
    p12 = parseInt(p12);

    let p13 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[12].innerHTML;
    p13 = p13.replaceAll(",", "");
    p13 = p13.replaceAll("$", "");
    p13 = p13.replaceAll(".", "");
    p13 = parseInt(p13);

    let p14 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[13].innerHTML;
    p14 = p14.replaceAll(",", "");
    p14 = p14.replaceAll("$", "");
    p14 = p14.replaceAll(".", "");
    p14 = parseInt(p14);

    let p15 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[14].innerHTML;
    p15 = p15.replaceAll(",", "");
    p15 = p15.replaceAll("$", "");
    p15 = p15.replaceAll(".", "");
    p15 = parseInt(p15);

    let p16 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[15].innerHTML;
    p16 = p16.replaceAll(",", "");
    p16 = p16.replaceAll("$", "");
    p16 = p16.replaceAll(".", "");
    p16 = parseInt(p16);

    let p17 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[16].innerHTML;
    p17 = p17.replaceAll(",", "");
    p17 = p17.replaceAll("$", "");
    p17 = p17.replaceAll(".", "");
    p17 = parseInt(p17);

    let p18 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[17].innerHTML;
    p18 = p18.replaceAll(",", "");
    p18 = p18.replaceAll("$", "");
    p18 = p18.replaceAll(".", "");
    p18 = parseInt(p18);

    let p19 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[18].innerHTML;
    p19 = p19.replaceAll(",", "");
    p19 = p19.replaceAll("$", "");
    p19 = p19.replaceAll(".", "");
    p19 = parseInt(p19);

    let p20 = document.getElementsByClassName(
      "panel-leader-board__item-money --green"
    )[19].innerHTML;
    p20 = p20.replaceAll(",", "");
    p20 = p20.replaceAll("$", "");
    p20 = p20.replaceAll(".", "");
    p20 = parseInt(p20);

    let p21 = p20 - 10000;

    // calculate total profit
    let blcpo = document.getElementsByClassName(
      "position__header-money --green"
    )[0].innerHTML;
    blcpo = blcpo.replaceAll(",", "");
    blcpo = blcpo.replaceAll("$", "");
    blcpo = blcpo.replaceAll(".", "");
    blcpo = parseInt(blcpo);

    let po;

    // Set posotion in leaderboard session amd also in top 20 list

    if (blcpo < p21) {
      let divi = Math.round(p21 / 30000);
      po = Math.round((32500 - blcpo / divi) / 100);
      document.getElementsByClassName("position__footer ")[0].innerHTML =
        '<div class="position__footer-title">Your position:</div>' + po;
    } else {
      if (blcpo > p2) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>1';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[0].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><img src="/profile/images/top-gold.svg" alt="top-gold"><div class="panel-leader-board__item-key__place ">1</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p2 && blcpo > p3) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>2';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[1].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><img src="/profile/images/top-serebro.svg" alt="top-gold"><div class="panel-leader-board__item-key__place ">2</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p3 && blcpo > p4) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>3';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[2].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><img src="/profile/images/top-bronza.svg" alt="top-gold"><div class="panel-leader-board__item-key__place ">3</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p4 && blcpo > p5) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>4';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[3].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">4</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p5 && blcpo > p6) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>5';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[4].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">5</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p6 && blcpo > p7) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>6';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[5].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">6</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p7 && blcpo > p8) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>7';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[6].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">7</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p8 && blcpo > p9) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>8';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[7].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">8</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p9 && blcpo > p10) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>9';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[8].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">9</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p10 && blcpo > p11) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>10';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[9].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">10</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p11 && blcpo > p12) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>11';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[10].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">11</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p12 && blcpo > p13) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>12';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[11].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">12</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p13 && blcpo > p14) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>13';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[12].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">13</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p14 && blcpo > p15) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>14';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[13].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">14</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p15 && blcpo > p16) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>15';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[14].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">15</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p16 && blcpo > p17) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>16';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[15].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">16</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p17 && blcpo > p18) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>17';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[16].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">17</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p18 && blcpo > p19) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>18';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[17].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">18</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p19 && blcpo > p20) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>19';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[18].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">19</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      } else if (blcpo < p20 && blcpo > p21) {
        document.getElementsByClassName("position__footer ")[0].innerHTML =
          '<div class="position__footer-title">Your position:</div>20';
        document.getElementsByClassName(
          "panel-leader-board__item"
        )[19].innerHTML =
          '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">20</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-in"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
          lname +
          '</div></div><div class="panel-leader-board__item-money --green">' +
          lprofit +
          "</div>";
      }
    }
  }
}, 1000);

//code for pair percentage increase

let v1 = parseInt(
  document
    .getElementsByClassName("tab desktop")[0]
    .getElementsByClassName("tab__payout")[0].innerHTML
);

let v2 = parseInt(
  document
    .getElementsByClassName("tab desktop")[1]
    .getElementsByClassName("tab__payout")[0].innerHTML
);

let v3 = parseInt(
  document
    .getElementsByClassName("tab desktop")[2]
    .getElementsByClassName("tab__payout")[0].innerHTML
);

let v4 = parseInt(
  document
    .getElementsByClassName("tab desktop")[3]
    .getElementsByClassName("tab__payout")[0].innerHTML
);

let v5 = parseInt(
  document
    .getElementsByClassName("tab desktop")[4]
    .getElementsByClassName("tab__payout")[0].innerHTML
);

let v6 = parseInt(
  document
    .getElementsByClassName("tab desktop")[5]
    .getElementsByClassName("tab__payout")[0].innerHTML
);

let v7 = parseInt(
  document
    .getElementsByClassName("tab desktop")[6]
    .getElementsByClassName("tab__payout")[0].innerHTML
);

let v8 = parseInt(
  document
    .getElementsByClassName("tab desktop")[7]
    .getElementsByClassName("tab__payout")[0].innerHTML
);

let v9 = parseInt(
  document
    .getElementsByClassName("tab desktop")[8]
    .getElementsByClassName("tab__payout")[0].innerHTML
);

let v10 = parseInt(
  document
    .getElementsByClassName("tab desktop")[9]
    .getElementsByClassName("tab__payout")[0].innerHTML
);

setInterval(function () {
  let blc = document.getElementsByClassName("usermenu__info-balance")[0]
    .innerHTML;
  blc = blc.replaceAll(",", "");
  blc = blc.replaceAll("$", "");
  blc = blc.replaceAll(".", "");
  blc = blc.substring(0, blc.length - 2);
  blc = parseInt(blc);

  // set percentage
  let av1;
  if (blc < 1000) {
    av1 = v1;
  } else if (blc >= 1000 && blc < 5000) {
    av1 = v1 + 2;
  } else if (blc >= 5000) {
    av1 = v1 + 4;
  }
  document
    .getElementsByClassName("tab desktop")[0]
    .getElementsByClassName("tab__payout")[0].innerHTML = av1 + "%";
  let av2;
  if (blc < 1000) {
    av2 = v2;
  } else if (blc >= 1000 && blc < 5000) {
    av2 = v2 + 2;
  } else if (blc >= 5000) {
    av2 = v2 + 4;
  }
  document
    .getElementsByClassName("tab desktop")[1]
    .getElementsByClassName("tab__payout")[0].innerHTML = av2 + "%";
  let av3;
  if (blc < 1000) {
    av3 = v3;
  } else if (blc >= 1000 && blc < 5000) {
    av3 = v3 + 2;
  } else if (blc >= 5000) {
    av3 = v3 + 4;
  }
  document
    .getElementsByClassName("tab desktop")[2]
    .getElementsByClassName("tab__payout")[0].innerHTML = av3 + "%";
  let av4;
  if (blc < 1000) {
    av4 = v4;
  } else if (blc >= 1000 && blc < 5000) {
    av4 = v4 + 2;
  } else if (blc >= 5000) {
    av4 = v4 + 4;
  }
  document
    .getElementsByClassName("tab desktop")[3]
    .getElementsByClassName("tab__payout")[0].innerHTML = av4 + "%";
  let av5;
  if (blc < 1000) {
    av5 = v5;
  } else if (blc >= 1000 && blc < 5000) {
    av5 = v5 + 2;
  } else if (blc >= 5000) {
    av5 = v5 + 4;
  }
  document
    .getElementsByClassName("tab desktop")[4]
    .getElementsByClassName("tab__payout")[0].innerHTML = av5 + "%";
  let av6;
  if (blc < 1000) {
    av6 = v6;
  } else if (blc >= 1000 && blc < 5000) {
    av6 = v6 + 2;
  } else if (blc >= 5000) {
    av6 = v6 + 4;
  }
  document
    .getElementsByClassName("tab desktop")[5]
    .getElementsByClassName("tab__payout")[0].innerHTML = av6 + "%";
  let av7;
  if (blc < 1000) {
    av7 = v7;
  } else if (blc >= 1000 && blc < 5000) {
    av7 = v7 + 2;
  } else if (blc >= 5000) {
    av7 = v7 + 4;
  }
  document
    .getElementsByClassName("tab desktop")[6]
    .getElementsByClassName("tab__payout")[0].innerHTML = av7 + "%";
  let av8;
  if (blc < 1000) {
    av8 = v8;
  } else if (blc >= 1000 && blc < 5000) {
    av8 = v8 + 2;
  } else if (blc >= 5000) {
    av8 = v8 + 4;
  }
  document
    .getElementsByClassName("tab desktop")[7]
    .getElementsByClassName("tab__payout")[0].innerHTML = av8 + "%";
  let av9;
  if (blc < 1000) {
    av9 = v9;
  } else if (blc >= 1000 && blc < 5000) {
    av9 = v9 + 2;
  } else if (blc >= 5000) {
    av9 = v9 + 4;
  }
  document
    .getElementsByClassName("tab desktop")[8]
    .getElementsByClassName("tab__payout")[0].innerHTML = av9 + "%";
  let av10;
  if (blc < 1000) {
    av10 = v10;
  } else if (blc >= 1000 && blc < 5000) {
    av10 = v10 + 2;
  } else if (blc >= 5000) {
    av10 = v10 + 4;
  }
  document
    .getElementsByClassName("tab desktop")[9]
    .getElementsByClassName("tab__payout")[0].innerHTML = av10 + "%";

  //percentage

  document.getElementsByClassName("section-deal__percent")[0].innerHTML =
    document
      .getElementsByClassName("tab desktop active")[0]
      .getElementsByClassName("tab__payout")[0].innerHTML;

  // perfir percentage
  let input_blc = document.getElementsByClassName("input-control__input")[2]
    .value;
  input_blc = input_blc.replaceAll("$", "");
  input_blc = input_blc.replaceAll(",", "");
  input_blc = parseInt(input_blc);

  let pro_per = parseInt(
    document.getElementsByClassName("section-deal__percent")[0].innerHTML
  );
  //total return
  let total_profit = input_blc + input_blc * (pro_per / 100);
  total_profit = total_profit.toFixed(2);

  document.getElementsByClassName("section-deal__payout")[0].innerHTML =
    "Your payout: <b>" +
    total_profit +
    ' $</b><div class="section-deal__percent">100%</div>';
}, 1000);
