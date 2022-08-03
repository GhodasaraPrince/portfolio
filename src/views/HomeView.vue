
<template>
  <div class="wrapper" id="home">
    <div id="canvas" style="opacity:0.2"></div>
    <div id="fp-nav" class="left fp-nav">
      <ul>
        <li v-for="(item, index) in anchors" :data-menuanchor="item.menuAnchor" v-on:scroll="handleScroll"
          @click="anchorClassHandler(index)">
          <a :class="item.isActive ? 'active' : ''"></a>
        </li>
      </ul>
    </div>
    <div>
      <div id="pagepiling">


        <div class="section" id="section1">
          <div class="main" id="s1">
            <div class="typed-wrapper">
              <span class="Heading-1 type-line1">
              </span>
              <span class="type color-1"></span>
            </div>
          </div>
        </div>

        <div class="section pp-scrollable">
          <div class="intro" id="s2">
            <h1 class="Heading-1">Skills</h1>
            <div class="pad-20">
              <span class="color-1"><i> Below are the metion skills that I know currently other then this i'm learning
                  microsoft azure,
                  python, react.</i></span>
              <br />
              <span class="color-1"><i>Visual studio 2022, vs code, SSMS, npm, git, yarn this are the tools that im
                  familar
                  with.</i></span>
            </div>


            <div class="row-project-box row" style="margin: auto;margin-top: 30px;">
              <div class="col-project-box col-md-6 col-lg-4 col-xl-3">
                <a href="javascript:void" class="project-box">
                  <div class="project-box-inner">
                    <h4>C#</h4>
                    <div class="project-category">Backend</div>
                  </div>
                </a>
              </div>
              <div class="col-project-box col-md-6 col-lg-4 col-xl-3">
                <a href="javascript:void" class="project-box">
                  <div class="project-box-inner">
                    <h4>ASP.NET MVC</h4>
                    <div class="project-category">Backend</div>
                  </div>
                </a>
              </div>
              <div class="col-project-box col-md-6 col-lg-4 col-xl-3">
                <a href="javascript:void" class="project-box">
                  <div class="project-box-inner">
                    <h4>ASP.NET CORE</h4>
                    <div class="project-category">Backend</div>
                  </div>
                </a>
              </div>
              <div class="col-project-box col-md-6 col-lg-4 col-xl-3">
                <a href="javascript:void" class="project-box">
                  <div class="project-box-inner">
                    <h4>ANGULAR</h4>
                    <div class="project-category">Frontend</div>
                  </div>
                </a>
              </div>
              <div class="col-project-box col-md-6 col-lg-4 col-xl-3">
                <a href="javascript:void" class="project-box">
                  <div class="project-box-inner">
                    <h4>VUE</h4>
                    <div class="project-category">Frontend</div>
                  </div>
                </a>
              </div>
              <div class="col-project-box col-md-6 col-lg-4 col-xl-3">
                <a href="javascript:void" class="project-box">
                  <div class="project-box-inner">
                    <h4>SQL</h4>
                    <div class="project-category">Database</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="section pp-scrollable" id="section5">
          <div class="intro" id="s5">
            <div class="typed-wrapper">
              <span class="Heading-1 ">
                About Me
              </span>
            </div>
            <div class="w-80 m-auto flex-col">
              <span class="color-1 pad-5">
                <i> As a developer, I really like to solve different kinds of problems whether it's on the frontend, backend, or SQL.
                 Usually, in my free time, I solve problems on hackerrank or help other team members with their issue.
                </i>
              </span>
              <span class="color-1 pad-5">
                <i> 
                    other than that I really like to learn new stuff in coding like doing the same thing but using different methods
                    I think it helps you to understand the language better.
                </i>
              </span>
              <span class="color-1 pad-5">
                <i> Apart from being a developer, I enjoy most of my time following a number of sci-fi and fantasy genre
                  movies, television shows, and animes.
                </i>
              </span>
              <span class="color-1 pad-5">
                <i>I spend a lot of my free time exploring the latest technology
                  advancements like web3, web5, and blockchain.
                </i>
              </span>
              <span class="color-1 pad-5">
                <i>
                  I also play volleyball, chess, snooker, competitive games, etc.
                </i>
              </span>
              <span class="color-1 pad-5">
                <i>
                  Other than that I like to listen to music a lot, I listen to all kinds of genres.
                </i>
              </span>
              <span class="color-1 pad-5">
                <i>
                  Now I'm also really into fitness so doing gym every day.
                </i>
              </span>
            </div>
          </div>
        </div>
        <div class="section pp-scrollable" id="section3">
          <div class="intro" id="s3" style="position: relative;">
            <h1 class="Heading-1">Experience</h1>
            <!-- <p>Just as you expected!</p> -->
            <div class="container">
              <div class="swiper-container-wrapper swiper-container-wrapper--timeline">
                <!-- Timeline -->
                <ul class="swiper-pagination-custom">
                  <li class='swiper-pagination-switch first active'><span class='switch-title'
                      style="color: darkgray;">2013</span></li>
                  <li class='swiper-pagination-switch'><span class='switch-title' style="color: darkgray;">2020</span>
                  </li>
                  <li class='swiper-pagination-switch'><span class='switch-title' style="color: darkgray;">2021</span>
                  </li>
                  <!-- <li class='swiper-pagination-switch last'><span class='switch-title'>3000</span></li> -->
                </ul>
                <!-- Progressbar -->
                <div class="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"></div>
                <!-- Swiper -->
                <div class="swiper swiper-container swiper-container--timeline">
                  <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                      <div class="row w-80">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="flex-inline-wrapper-fs">
                            <span class="title">
                              2013-2015
                            </span>
                            <span class="bText">
                              Secondary High School & High School(GHSEB)
                            </span>
                            <span class="bText">
                              Plazma International School, Junagadh
                            </span>
                            <span class="bText">
                              SHC 90%
                              HSC 78%
                            </span>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="flex-inline-wrapper-fe">
                            <span class="title">
                              2015-2019
                            </span>
                            <span class="bText">
                              B.Tech (Computer Science & Engg)
                            </span>
                            <span class="bText">
                              Parul University, Baroda
                            </span>
                            <span class="bText">
                              CGPA 6.84
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="row w-80">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="flex-inline-wrapper-fs title">
                            <span class="title">
                              2020-2021
                            </span>
                            <span class="bText  ">
                              ASP.NET DEVELOPER
                            </span>
                            <span class=" bText">
                              Intellial Solution pvt ltd
                            </span>
                            <span class=" bText">
                              Tech Use: ASP.NET MVC, Vue Js, Sql(SSMS)
                            </span>
                            <span class=" bText">
                              ASP.NET Web Form
                            </span>
                            <span class=" bText">
                              Areas worked on: Backend, Frontend, Database
                            </span>

                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="flex-inline-wrapper-fe">
                            <span class="title">
                              Project Description
                            </span>
                            <span class="bText" style="text-align: right;">
                              We have a product-based client so we are making a site on a product which is PCB(Printed
                              Circuit Board).Online selling of PCBs, I made four services in that particular PCB &
                              interact with different systems via APIs. In this project, I made plenty of efficient
                              logic
                              for their different services.
                              Link: <a href="https://www.pcbpower.com/page/pcb-fabrication" target="_blank">PCB
                                Power</a>
                            </span>


                          </div>
                        </div>
                      </div>

                    </div>


                    <div class="swiper-slide">
                      <div class="row w-80">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="flex-inline-wrapper-fs title">
                            <span class="title">
                              2021-Present
                            </span>
                            <span class="bText  ">
                              Senior Software Engineer
                            </span>
                            <span class=" bText">
                              Capgemini
                            </span>
                            <span class=" bText">
                              Tech Use: ASP.NET Core, Angular Js, Sql(SSMS)
                            </span>
                            <span class=" bText">
                              Docker
                            </span>
                            <span class=" bText">
                              Areas worked on: Backend, Frontend, Database,
                            </span>
                            <span class=" bText">
                              Hosting, Cross Team Communication
                            </span>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <div class="flex-inline-wrapper-fe">
                            <span class="title">
                              Project Description
                            </span>
                            <span class="bText" style="text-align: right;">
                              In this Project, we have to do a project which renders all other client's product-based
                              projects in this shell application just by using their endpoint. in this project, I found
                              a
                              way to use module federation and render other micro frontends (other applications) in our
                              shell application, make the authentication, authorization, and routing of the whole
                              application, and also work with other teams to configure their application so they can
                              render their application in our app and did the hosting of the projects using docker.
                              Documented everything so that others can take reference.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section" id="section4">
          <div class="intro" id="s4">
            <div class="position-relative">
              <span class="Heading-1"> Certification</span>
              <div class="center">
                <a href="https://www.hackerrank.com/certificates/04a35c6371b8" target="_blank"> <span
                    class="socials">HackerRank C# Certificate</span> </a>
                <a href="https://www.hackerrank.com/certificates/f5741964671c" target="_blank"> <span
                    class="socials">HackerRank JavaScript Certificate</span></a>
                <a href="javascript:void"><span class="socials">Linkdin C# Certificate</span></a>
                <a href="javascript:void"><span class="socials">Linkdin JavaScript Certificate</span></a>
              </div>
            </div>
            <div style="padding-top: 80px;" class="position-relative">
              <span class="Heading-1"> Socials</span>
              <div class="socials-wrapper">

                <a href="https://www.linkedin.com/in/prince-g-728148197/" target="_blank"> <i
                    class="fa fa-linkedin socials"></i></a>
                <a href="mailto:prince.ghodasara43@gmail.com"> <i class="fa fa-google socials"></i></a>
                <a href="https://www.instagram.com/_princeeee__/" target="_blank"> <i
                    class="fa fa-instagram socials"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Swiper from 'swiper';

$(document).ready(function () {
  var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    }
  });
  $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo($(this).index());
    $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });
});


import { Star } from '../js/star.js'
import '../js/jquery.js'
import '../assets/fa.css'
import '../js/pagePilling/examples.css'
import '../js/pagePilling/jquery.pagepiling.css'
import '../js/pagePilling/jquery.pagepiling.min.js'

import Typed from 'typed.js';
export default {
  name: "HomeView",
  data() {
    return {
      isScroll: 0,
      anchors: [
        {
          menuAnchor: 'firstPage',
          href: '#firstPage',
          isActive: true,
        },
        {
          menuAnchor: 'secondPage',
          href: '#secondPage',
          isActive: false,
        },
        {
          menuAnchor: 'thirdPage',
          href: '#thirdPage',
          isActive: false,
        },
        {
          menuAnchor: 'forthPage',
          href: '#forthPage',
          isActive: false,
        },
        {
          menuAnchor: 'fifthPage',
          href: '#fifthPage',
          isActive: false,
        }
      ],
    }
  },
  created() {
    console.log('create');
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    console.log('destory');
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: {
  },
  methods: {
    handleScroll(evnet) {
      console.log(evnet);
    },
    initPagePilling() {
      $('#pagepiling').pagepiling({
        direction: 'horizontal',
        menu: '#fp-nav',
        sectionsColor: ['#000', '#000', '#000', '#000', '#000'],
        navigation: false,
        onLeave: (index, nextIndex) => {
          console.log({ index: index, next: nextIndex });
          this.anchors.forEach(x => x.isActive = false);
          this.anchors[nextIndex - 1].isActive = true;
        },
      });
    },
    initP5Draw(id) {
      var drops = new Array(300);
      var speed;
      const s = (sketch) => {
        sketch.setup = () => {
          var temp1 = document.getElementById('home').getBoundingClientRect();
          const heightcs = document.getElementById('home').offsetHeight - 5;
          let cnv = sketch.createCanvas(temp1.width, heightcs);
          cnv.parent(id)
          cnv.style('position', 'absolute');
          cnv.style('top', '0');
          cnv.style('left', '0');
          cnv.style('z-index', '10');
          cnv.style('opacity', '0.1');
          for (let i = 0; i < drops.length; i++) {
            drops[i] = new Star(sketch.random(-sketch.width, sketch.width), sketch.random(-sketch.height, sketch.height), sketch.random(sketch.width));
          }
        };

        sketch.draw = () => {
          speed = sketch.map(sketch.mouseX, 0, 500, 5, 20);
          let c = sketch.color('black')
          sketch.background(c);
          sketch.translate(sketch.mouseX * 0.5, sketch.mouseY * 0.5);
          for (let i = 0; i < drops.length; i++) {
            sketch.show(drops[i]);
            sketch.update(drops[i]);
          }
        };
        sketch.show = (drops) => {

          let c = sketch.color(255, 255, 255);
          sketch.noStroke();
          sketch.fill(c);

          let sx = sketch.map(drops.x / drops.z, 0, 1, 0, sketch.width)
          let sy = sketch.map(drops.y / drops.z, 0, 1, 0, sketch.height)
          let distace = sketch.map(drops.z, 0, sketch.width, 5, 0);
          sketch.ellipse(sx, sy, distace + 1.5, distace + 1.5);

          c = sketch.color(255, 255, 255);
          sketch.stroke(c);
          sketch.fill(c);

          let px = sketch.map(drops.x / drops.pz, 0, 1, 0, sketch.width);
          let py = sketch.map(drops.y / drops.pz, 0, 1, 0, sketch.height);
          drops.pz = drops.z;
          sketch.line(px, py, sx + 1.5, sy + 1.5);
        }

        sketch.update = (drops) => {
          drops.z = drops.z - speed;
          if (drops.z < 1) {
            drops.z = sketch.random(sketch.width)
            drops.x = sketch.random(-sketch.width, sketch.width)
            drops.y = sketch.random(-sketch.height, sketch.height)
            drops.pz = drops.z
          }
        }
      };
      const P5 = require("p5");
      new P5(s);
    },
    initTyped() {
      var typed1 = new Typed('.type-line1', {
        strings: ["Hello, I'm Prince Ghodasara and I'm a "],
        typeSpeed: 40,
        startDelay: 2000,
        loop: false,
        onComplete: (self) => {
          self.cursor.remove()
          var typed = new Typed('.type', {
            strings: [' <i> Developer.</i>', ' <i> Web Designer.</i>', '<i> Basically FullStack.</i>'],
            typeSpeed: 40,
            backSpeed: 40,
            backDelay: 10,
            loop: true
          });
        }
      });
    },
    anchorClassHandler(index) {
      this.anchors.forEach(x => x.isActive = false);
      this.anchors[index].isActive = true;
      $.fn.pagepiling.moveTo(index + 1);
    },
    resizeCanvas() {
      window.location.reload();
    }
  },
  mounted() {
    this.initPagePilling();
    this.initP5Draw('s1');
    this.initP5Draw('s2');
    this.initP5Draw('s3');
    this.initP5Draw('s4');
    this.initP5Draw('s5');
    this.initTyped();
  },
  created() {
    window.addEventListener("resize", () => { this.resizeCanvas() });
  },
  destroyed() {
    window.removeEventListener("resize", () => { this.resizeCanvas() });
  },
};
</script>
    
<style>
:root {
  --swiper-theme-color: #007aff;
  --bs-body-color: darkgray;
}

.fa-instagram:before {
  content: "\f16d"
}

.pad-5{
  padding: 5px;
  font-size: 17px;
}

.flex-col{
  display: flex;
  flex-direction: column;
  padding: 30px
}

.section {
  overflow-x: hidden
}

.w-80 {
  width: 80%;
}

.m-auto {
  margin: auto;
}

.section::-webkit-scrollbar {
  width: 5px;
}

.section::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 100px;
}

.section::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-image: linear-gradient(180deg, #1f60a2 0%, #708ad4 99%);
  box-shadow: inset 2px 2px 5px 0 rgba(255, 255, 255, 0.5);
}


.pad-20 {
  padding: 0 20px;
}

a {

  text-decoration: none !important;
}

.position-relative {
  position: relative;
  z-index: 999999;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.socials-wrapper {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 50px;
}

.socials {
  color: #597DA2;
  transition: 0.1s ease 0.1s;
}

.socials:hover {
  color: #007aff;
  text-shadow: 1px 1px 2px black, 0 0 1em #597DA2, 0 0 0.2em #597DA2;
}

.Heading-1 {
  color: darkgray;
  font-size: 3rem;
}

.color-1 {
  color: #597DA2;
}

.bText {
  font-size: 16px;
  transition: 0.5s ease 0.5s;
  color: #597DA2;
}

.flex-wrapper-timeline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}

.flex-inline-wrapper-fs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.flex-inline-wrapper-fe {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.blur {
  filter: blur(500px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #a8b0d4;
  transform: translate(-60%, -40%);
}



.wrapper {
  width: 100%;
  height: 100vh;
}

.typed-wrapper {
  color: #cbd4ff;
  font-size: 50px;
  line-height: initial;
  width: 50%;
  margin: auto;
}

.intro {
  padding-top: 60px;
  height: 100%;
}

.flex-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: 40px;
}

.label-wrapper {
  display: block;
}

.tech-lbl {
  padding: 20px;
}

.row-project-box {
  width: 80%;
  position: relative;
  z-index: 9999999;
}


.project-box {
  display: block;
  position: relative;
  border: 1px solid rgba(169, 169, 169, 0.5);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.project-box-inner {
  width: 100%;
  height: 100%;
  padding: 2.14rem 1.928rem;
}

.project-box h4 {
  margin: 0;
  color: darkgrey;
}

.project-category {
  color: #cccccc;
  margin-top: 0.5rem;
}

.project-box:hover {
  background: #20354a;
  text-decoration: none;
  border-color: transparent;
}

.col-project-box {
  padding: 12px;
}

.project-box:hover h4 {
  color: #000;
}

.project-box:hover .project-category {
  color: #666666;
}

@media (min-width: 768px) {
  .project-category {
    bottom: 1.2rem;
  }
}

.project-box-inner {
 
  width: 100%;
  height: 100%;
  padding: 2.14rem 1.928rem;
}

html,
body {
  position: relative;
  height: 100%;
  overflow: hidden;
  background: #eee;
}

body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

.swiper-container-wrapper--timeline .swiper-slide {
  display: flex;
  background: transparent;
  min-height: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.swiper-container-wrapper--timeline .swiper-slide .container {
  padding: 0;
  width: 100%;
}

.swiper-container-wrapper--timeline .swiper-slide .title {
  color: #888;
  font-size: 18px;
  transition: 0.5s ease 0.5s;
}

.swiper-container-wrapper--timeline .swiper-slide-active .title {
  opacity: 1;
}

.swiper-container-wrapper--timeline .swiper-pagination-progressbar {
  position: relative;
  margin-bottom: 70px;
  background-color: transparent;
  height: 4px;
  border-bottom: 1px solid #888;
  width: 50%;
}

.swiper-container-wrapper--timeline .swiper-pagination-progressbar-fill {
  background-color: #000;
  height: 3px;
  top: 2px;
}

.swiper-container-wrapper--timeline .swiper-pagination-progressbar:before {
  position: absolute;
  top: 2px;
  left: -100%;
  width: 100%;
  height: 3px;
  background-color: #000;
  content: "";
}

.swiper-container-wrapper--timeline .swiper-pagination-progressbar:after {
  position: absolute;
  top: 3px;
  right: -100%;
  width: 100%;
  height: 1px;
  background-color: #888;
  content: "";
}

.swiper-container-wrapper--timeline .swiper-pagination-custom {
  position: relative;
  list-style: none;
  margin: 1rem 0;
  padding: 0;
  display: flex;
  line-height: 1.66;
  bottom: 0;
  z-index: 11;
  width: 75%;
  display: flex;
}

.swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch {
  position: relative;
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: block;
}

.swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch .switch-title {
  position: absolute;
  font-weight: 400;
  right: 0;
  transform: translateX(50%);
  transition: 0.2s all ease-in-out;
  transition-delay: 0s;
  cursor: pointer;
  z-index: 1;
}

.swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch .switch-title:after {
  position: absolute;
  top: calc(100% + 19px);
  right: 50%;
  transform: translateX(50%) translateY(-50%);
  width: 12px;
  height: 12px;
  background: #888;
  border-radius: 2rem;
  content: "";
  transition: 0.2s all ease-in-out;
  transition-delay: 0s;
  z-index: 1;
}

.swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active .switch-title {
  font-weight: 400;
  transition-delay: 0.4s;
}

.swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active .switch-title:after {
  background: #597DA2;
  width: 25px;
  height: 25px;
  transition-delay: 0.4s;
}

.swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active~.swiper-pagination-switch .switch-title {
  color: #888;
  font-weight: 16px;
}

.swiper-container-wrapper--timeline .swiper-pagination-custom .swiper-pagination-switch.active~.swiper-pagination-switch .switch-title:after {
  background: #888;
}
</style>
