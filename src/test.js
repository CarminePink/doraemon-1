import string from "./css.js"; //模块化 把那一大段css代码放到了css.js文件了 再在这里导入
let n = 0;
demo1.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);

let time = 100;
const run = () => {
  n += 1;
  //console.log(n + "" + string.substring(0, n));
  if (n > string.length) {
    window.clearInterval(id);
    return;
  }
  demo1.innerText = string.substring(0, n);
  demo2.innerHTML = string.substring(0, n);
  demo1.scrollTop = demo1.scrollHeight;
};
const play = () => {
  return setInterval(run, time);
};
const pause = () => {
  window.clearInterval(id);
};
const slow = () => {
  pause();
  time = 300;
  id = play();
};
const normal = () => {
  pause();
  time = 100;
  id = play();
};
const fast = () => {
  pause();
  time = 0;
  id = play();
};

let id = play();

btnPause.onclick = () => {
  pause();
};
btnPlay.onclick = () => {
  id = play();
};
btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;
// id = setInterval(()=>{
//   run()
// }, time)
// 等价于
// id = setInterval(run, time);
