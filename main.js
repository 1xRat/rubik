void function main(root = document.body) {
	// Создаём рендерер
	const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
	// Вставляем канвас в html
	root.appendChild(renderer.domElement);

	// Создаём сцену
	const scene = new THREE.Scene();
	scene.background = new THREE.Color();

	// Создаём камеру
	const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.set(25, 40, 25);

	// Создаём управление камерой
	const orbit = new THREE.OrbitControls(camera);

	// Добавляем немнго света
	scene.add(new THREE.AmbientLight(0xF7F7F7));

	// Запускаем перерисовку
	void function animate() {
		TWEEN.update();
		orbit.update();
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}();

}();
