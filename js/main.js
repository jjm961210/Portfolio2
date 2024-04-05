'use strict';

const Header = document.querySelectorAll("header > .inner > .MYIN > ul");

const containerBox = document.getElementsByClassName("containerBox");
const TOOL = document.getElementsByClassName("TOOL");
const ToolA = document.getElementsByClassName("ToolA");
const ToolIMG = document.getElementsByClassName("ToolIMG");
const PROJECT = document.getElementsByClassName("PROJECT");



document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener('scroll', function(){
    if( window.scrollY > 150) {
      containerBox[0].style.opacity = "1";
      setTimeout(function(){
        for(let i = 0; i<ToolA.length; i++){
            ToolA[i].style.width = "22%";
            ToolA[i].style.height = '6rem';
        };
        for(let i = 0; i<ToolIMG.length; i++){
            ToolIMG[i].style.height = '4rem';
            ToolIMG[i].style.width = '4rem';
            ToolIMG[i].style.marginTop = '0.3rem';
        };
      },450);
    } else {
      containerBox[0].style.opacity = "0";
      for(let i = 0; i<ToolA.length; i++){
        ToolA[i].style.width = "2.5rem";
        ToolA[i].style.height = '2.5rem';
      };
      for(let i = 0; i<ToolIMG.length; i++){
        ToolIMG[i].style.height = '2.5rem';
        ToolIMG[i].style.width = '2.5rem';
        ToolIMG[i].style.marginTop = '0';
      };
    }
  });
});