//初期表示は非表示


function clickBtn1(){
    const p1 = document.getElementById("pf1");
    const p2 = document.getElementById("pf2");
    const p3 = document.getElementById("pf3");
    const p4 = document.getElementById("pf4");
    const p5 = document.getElementById("pf5");
  
    if(p1.style.display=="block"){
      // noneで非表示
      p1.style.display ="none";
    }else{
      // blockで表示
      p1.style.display ="block";
      p2.style.display ="none";
      p3.style.display ="none";
      p4.style.display ="none";
      p5.style.display ="none";
      }
    }
function clickBtn2(){
  const p1 = document.getElementById("pf1");
  const p2 = document.getElementById("pf2");
  const p3 = document.getElementById("pf3");
  const p4 = document.getElementById("pf4");
  const p5 = document.getElementById("pf5");

  if(p2.style.display=="block"){
    // noneで非表示
    p2.style.display ="none";
  }else{
    // blockで表示
    p1.style.display ="none";
    p2.style.display ="block";
    p3.style.display ="none";
    p4.style.display ="none";
    p5.style.display ="none";
    }
  }
function clickBtn3(){
  const p1 = document.getElementById("pf1");
  const p2 = document.getElementById("pf2");
  const p3 = document.getElementById("pf3");
  const p4 = document.getElementById("pf4");
  const p5 = document.getElementById("pf5");

  if(p3.style.display=="block"){
    // noneで非表示
    p3.style.display ="none";
  }else{
    // blockで表示
    p1.style.display ="none";
    p2.style.display ="none";
    p3.style.display ="block";
    p4.style.display ="none";
    p5.style.display ="none";
    }
  }
function clickBtn4(){
  const p1 = document.getElementById("pf1");
  const p2 = document.getElementById("pf2");
  const p3 = document.getElementById("pf3");
  const p4 = document.getElementById("pf4");
  const p5 = document.getElementById("pf5");

  if(p4.style.display=="block"){
    // noneで非表示
    p4.style.display ="none";
  }else{
    // blockで表示
    p1.style.display ="none";
    p2.style.display ="none";
    p3.style.display ="none";
    p4.style.display ="block";
    p5.style.display ="none";
    }
  }
  function clickBtn5(){
  const p1 = document.getElementById("pf1");
  const p2 = document.getElementById("pf2");
  const p3 = document.getElementById("pf3");
  const p4 = document.getElementById("pf4");
  const p5 = document.getElementById("pf5");

  if(p5.style.display=="block"){
    // noneで非表示
    p5.style.display ="none";
  }else{
    // blockで表示
    p1.style.display ="none";
    p2.style.display ="none";
    p3.style.display ="none";
    p4.style.display ="none";
    p5.style.display ="block";
    }
  }