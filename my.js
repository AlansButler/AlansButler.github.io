

function updateImage() {
  document.getElementById("demo1").innerHTML = "ui Called";
  var image = document.getElementById("imgID2");
  if (i%2==0) {
    image.src = "DSCN4527.JPG";
    document.getElementById("demo1").innerHTML = "IsOdd";
  }
  else {
    image.src = "DSCN4528.JPG";
    document.getElementById("demo1").innerHTML = "IsEven";
  }
  image.refresh;
  i++;

  document.getElementById("demo2").innerHTML = i.toString();


  var t = setTimeout(updateImage, 5500);
}

function updateImage2() {
  
  //document.getElementById("demo1").innerHTML = "ui2";
  //var i = 0;
  var imgs = ["DSCN4527.JPG", "DSCN4528.JPG", "DSCN4529.JPG", "DSCN4530.JPG", "DSCN4531.JPG",
              "DSCN4532.JPG", "DSCN4534.JPG", "DSCN4535.JPG", "DSCN4536.JPG", "DSCN4537.JPG",
              "DSCN4538.JPG", "DSCN4539.JPG", "DSCN4540.JPG", "DSCN4541.JPG", "DSCN4543.JPG",
              "DSCN4544.JPG", "DSCN4545.JPG", "KirkAndBobe.jpg", "IanGolfing.mp4"];

  for (i = 0; i < imgs.length; i++) {
    var anchor = document.createElement("a");
    anchor.href = "Pics\\" + imgs[i];
    
    if (imgs[i].endsWith("mp4") == true) {
      //imgd.innerHTML = imgs[i];
      //imgd.alt = imgs[i];
      anchor.innerHTML = imgs[i];
    }
    //anchor.setAttribute("href") = imgs[0];
    var imgd = document.createElement("img");
    imgd.id = "imgID" + i;
    //console.log;
    imgd.src = "Pics\\" + imgs[i];  // \ is the escape seq
    
    
    imgd.width = 500;
    anchor.appendChild(imgd);
    document.body.appendChild(anchor);
  }
  /*
  for (i = 0; i < imgs.length; i++) {
    var imgd = document.createElement("img");
    imgd.setAttribute('width', '120px');
    document.body.appendChild(imgd);
    imgd.src = imgs[i];
  }
  */
}

document.getElementById("demo2").innerHTML = "Gets called";

