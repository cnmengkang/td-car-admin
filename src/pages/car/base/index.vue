<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';

const lineArr = [
  [116.478935, 39.997761],
  [116.478939, 39.997825],
  [116.478912, 39.998549],
  [116.478912, 39.998549],
  [116.478998, 39.998555],
  [116.478998, 39.998555],
  [116.479282, 39.99856],
  [116.479658, 39.998528],
  [116.480151, 39.998453],
  [116.480784, 39.998302],
  [116.480784, 39.998302],
  [116.481149, 39.998184],
  [116.481573, 39.997997],
  [116.481863, 39.997846],
  [116.482072, 39.997718],
  [116.482362, 39.997718],
  [116.483633, 39.998935],
  [116.48367, 39.998968],
  [116.484648, 39.999861],
];

AMapLoader.load({
  key: 'fd90e1c069744428d64520ae754eb7b3', // 申请好的Web端开发者Key，首次调用 load 时必填
  version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
}).then((AMap) => {
  const map = new AMap.Map('container', {
    resizeEnable: true,
    center: [116.397428, 39.90923],
    zoom: 17,
  });
  const marker = new AMap.Marker({
    map,
    position: [116.478935, 39.997761],
    icon: 'https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png',
    offset: new AMap.Pixel(-13, -26),
  });
  const polyline = new AMap.Polyline({
    map,
    path: lineArr,
    showDir: true,
    strokeColor: 'red', // 线颜色
    strokeWeight: 26, // 线宽
    strokeStyle: 'solid', // 线样式
  });
  const passedPolyline = new AMap.Polyline({
    map,
    strokeColor: '#AF5', // 线颜色
    strokeWeight: 10, // 线宽
  });

  marker.on('moving', function (e: any) {
    passedPolyline.setPath(e.passedPath);
    map.setCenter(e.target.getPosition(), true);
  });

  map.setFitView();
});
</script>

<template>
  <div id="container"></div>
</template>
<style scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
