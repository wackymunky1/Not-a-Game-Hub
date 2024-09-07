let scene, camera, renderer, player, controls, walls = [];
const keys = { w: false, a: false, s: false, d: false };
const speed = 0.1;

// Initialize the scene
function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xaaaaaa);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.5, 5);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const floorGeometry = new THREE.PlaneGeometry(50, 50);
    const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x555555 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    walls.push(createWall(-10, 0, 0, 0x777777));
    walls.push(createWall(10, 0, 0, 0x777777));
    walls.push(createWall(0, 0, -10, 0x777777));
    walls.push(createWall(0, 0, 10, 0x777777));

    window.addEventListener('keydown', (e) => handleKey(e, true));
    window.addEventListener('keyup', (e) => handleKey(e, false));

    document.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('click', () => {
        document.body.requestPointerLock();
    });

    animate();
}

// Create walls
function createWall(x, y, z, color) {
    const wallGeometry = new THREE.BoxGeometry(20, 5, 
