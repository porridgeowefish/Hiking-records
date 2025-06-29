// main.js

// ！！关键改动在这里 ！！
// 我们把 AMapLoader 的调用放在 main.js 的最顶层
// 这样整个文件的逻辑都会在地图API加载完毕后才执行
AMapLoader.load({
    key: "c2c436f0e314b3a8fa693fc9736f33e8", // 你的Web端开发者 Key
    version: "2.0",
    plugins: ['AMap.Terrain'], // 如果需要地形插件，可以在这里加上
})
.then((AMap) => {
    // 这个 then 函数内部，就是 AMap 准备就绪的安全区域
    // 所有的地图操作都应该放在这里面

    // 1. 初始化地图
    const map = new AMap.Map("container", {
        viewMode: "3D",
        pitch: 2,
        zoom: 6,
        center: [108.94, 34.26],
        mapStyle: "amap://styles/macaron"
    });

    // 2. 异步获取山峰数据
    fetch('mountain.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应错误');
            }
            return response.json();
        })
        .then(mountains => {
            console.log('成功获取到山峰数据:', mountains);
            
            const mountainListElement = document.getElementById('mountain-list');

            // 3. 遍历数据，创建地图标记和列表项
            mountains.forEach(mountain => {
                const marker = new AMap.Marker({
                    position: mountain.position,
                    title: `${mountain.name} (海拔: ${mountain.altitude}米)`,
                });
                map.add(marker);

                const listItem = document.createElement('li');
                listItem.textContent = `${mountain.name} - ${mountain.date}`;
                listItem.onclick = function() {
                    map.setCenter(mountain.position);
                    map.setZoom(13);
                };
                mountainListElement.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('加载山峰数据或处理时出错:', error);
            alert('加载山峰数据失败，请检查 "mountains.json" 文件。');
        });

})
.catch((e) => {
    // 如果地图API加载失败，打印错误
    console.error("高德地图API加载失败:", e);
    alert("高德地图API加载失败，请检查网络或Key是否正确。");
});