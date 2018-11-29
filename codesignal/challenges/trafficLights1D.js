function trafficLights1D(roadMap) {
  let time = 0;
  for (let i = 0; i < roadMap.length; i++) {
    time += roadMap[i][0] - (roadMap[i - 1] ? roadMap[i - 1][0] : 0);
    let green = Math.floor(time / roadMap[i][1]) % 2 === 0;
    if (!green) {
      time = time + (roadMap[i][1] - (time % roadMap[i][1]));
    }
  }
  return time;
}
