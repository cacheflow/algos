var canPlaceFlowers = function(flowerbed, n) {
	var count = 0;
	for(var i = 0; i < flowerbed.length; i++) {
		if(flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0) ) {
				count++
				flowerbed[i] = 1
		}
	}
	return count >= n
};

canPlaceFlowers([1, 0, 0, 0, 1], 2)
