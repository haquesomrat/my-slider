const images = [
    'images/20210722_173157.jpg',
    'images/134395661_405966670707382_7131393636503541250_n.jpg',
    'images/181184121_367732631323433_6661603209357388026_n.jpg',
    'images/206846328_839554990332339_858723377893721613_n.jpg',
    'images/214511544_471491590957755_6072359723942254339_n.jpg',
    'images/241362559_1088308605309514_5178033696850628891_n.jpg',
    'images/241486419_1235989090160941_8309878590852272915_n.jpg',
    'images/97125087_237894250847959_323416908609093632_n.jpg'

];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000)