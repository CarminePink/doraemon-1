const string = `.skin {
    background: #93b8ca;
    height: 100vh;
    position: relative;
  }
  .face1 {
    position: absolute;
    border: 2px solid black;
    height: 380px;
    width: 380px;
    border-radius: 50% 50% 50% 50%;
    background: #1e90ff;
  }
  .face1parent {
    position: absolute;
    width: 380px;
    height: 340px;
    left: 50%;
    top: 80px;
    margin-left: -190px;
    overflow: hidden;
    background: #93b8ca;
  }
  
  .face2 {
    width: 340px;
    height: 300px;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    top: 70px;
    margin-left: -170px;
    border-radius: 240px / 210px;
    background: #ffffff;
  }
  .neck {
    position: absolute;
    width: 236px;
    height: 30px;
    border: 1px solid red;
    left: 50%;
    top: 418px;
    margin-left: -118px;
    background: #ff0000;
  }
  .neck::before {
    position: absolute;
    width: 30px;
    height: 30px;
    content: "";
    border-radius: 50%;
    margin-left: -15px;
    top: -1px;
    background: #ff0000;
  }
  .neck::after {
    position: absolute;
    width: 30px;
    height: 30px;
    content: "";
    border-radius: 50%;
    right: 0;
    margin-right: -15px;
    top: -1px;
    background: #ff0000;
  }
  .eye {
    position: absolute;
    width: 75px;
    height: 90px;
    border: 2px solid black;
    left: 50%;
    top: 120px;
    margin-left: -40px;
    border-radius: 60%;
    z-index: 2;
    background: #ffffff;
  }
  .eye.left {
    transform: translateX(-37px);
  }
  .eye.right {
    transform: translateX(37px);
  }
  .eye.left::before {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    content: "";
    left: 70%;
    bottom: 20px;
    border-radius: 50%;
    background: #000000;
  }
  .eye.right::before {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    content: "";
    right: 70%;
    bottom: 20px;
    border-radius: 50%;
    background: #000000;
  }
  .nose {
    position: absolute;
    width: 50px;
    height: 50px;
    left: 50%;
    top: 197px;
    margin-left: -27px;
    border-radius: 50%;
    background: #ff0000;
  }
  .nose::before {
    position: absolute;
    width: 15px;
    height: 15px;
    content: "";
    left: 55%;
    bottom: 40%;
    border-radius: 50%;
    background: #ffffff;
  }
  
  .nose_down {
    position: absolute;
    width: 1px;
    height: 110px;
    border: 1px solid black;
    left: 50%;
    top: 247px;
    background: black;
    z-index: 3;
  }
  
  .mouth {
    position: absolute;
    width: 220px;
    height: 80px;
    left: 50%;
    top: 320px;
    margin-left: -110px;
    overflow: hidden;
  }
  .mouth > .lip.up {
    position: absolute;
    width: 220px;
    height: 80px;
    left: 50%;
    margin-left: -110px;
    bottom: 40px;
    border: 2px solid black;
    border-radius: 80%;
    background: #ffffff;
    z-index: 2;
  }
  .lip.down {
    position: absolute;
    width: 190px;
    height: 60px;
    left: 50%;
    top: 335px;
    margin-left: -95px;
    overflow: hidden;
  }
  .lip.down > .yuan1 {
    position: absolute;
    width: 200px;
    height: 800px;
    left: 50%;
    margin-left: -100px;
    bottom: 0;
    border-radius: 80px / 80px;
    background: #9b000a;
  }
  
  .lip.down > .tongue {
    width: 100%;
    height: 40px;
    position: absolute;
    top: 18px;
    overflow: hidden;
  }
  .lip.down > .tongue > .yuan2 {
    position: absolute;
    width: 105px;
    height: 800px;
    left: 50%;
    margin-left: -50px;
    top: 16px;
    border-radius: 95px /170px;
    background: #ff4760;
  }
  .mustache {
    position: absolute;
    width: 120px;
    height: 100px;
    left: 50%;
    top: 220px;
    margin-left: -60px;
  }
  .mustache.left {
    transform: translateX(-80px);
  }
  .mustache.right {
    transform: translateX(80px);
  }
  .mustache.left > .huzi1 {
    position: absolute;
    width: 100px;
    height: 2px;
    background: black;
    transform: rotate(20deg);
    top: 10px;
  }
  .mustache.left > .huzi2 {
    position: absolute;
    width: 100px;
    height: 2px;
    background: black;
    top: 40px;
    left: -5px;
  }
  .mustache.left > .huzi3 {
    position: absolute;
    width: 100px;
    height: 2px;
    background: black;
    transform: rotate(-20deg);
    top: 70px;
  }
  .mustache.right > .huzi4 {
    position: absolute;
    width: 100px;
    height: 2px;
    background: black;
    transform: rotate(-20deg);
    top: 10px;
    left: 15px;
  }
  .mustache.right > .huzi5 {
    position: absolute;
    width: 100px;
    height: 2px;
    background: black;
    top: 40px;
    left: 20px;
  }
  .mustache.right > .huzi6 {
    position: absolute;
    width: 100px;
    height: 2px;
    background: black;
    transform: rotate(20deg);
    top: 70px;
    left: 15px;
  }
  .bell {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 2px solid black;
    left: 50%;
    top: 430px;
    margin-left: -20px;
    border-radius: 50%;
    background: #ffff00;
    z-index: 2;
    overflow: hidden;
  }
  .bell > .line1 {
    position: absolute;
    width: 40px;
    height: 20px;
    left: 50%;
    margin-left: -20px;
    border: 2px solid black;
    top: -5px;
  }
  .bell > .line2 {
    position: absolute;
    width: 50px;
    height: 25px;
    border: 2px solid black;
    top: -6px;
    left: 50%;
    margin-left: -25px;
  }
  .bell::before {
    position: absolute;
    width: 10px;
    height: 7px;
    content: "";
    border: 1px solid green;
    left: 50%;
    margin-left: -5px;
    top: 55%;
    border-radius: 40%;
    background: black;
  }
  .bell::after {
    position: absolute;
    width: 2px;
    height: 15px;
    content: "";
    left: 50%;
    top: 65%;
    background: black;
    margin-left: -1px;
  }`;

export default string;
