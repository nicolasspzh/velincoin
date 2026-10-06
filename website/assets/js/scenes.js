// The three 3D models of the page: the crystal V (hero), the chain of blocks
// (how a block is made) and the coin (supply). Each canvas renders only while
// it is on screen; with reduced motion every scene shows still frames.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (t) => t * t * (3 - 2 * t);
const range = (v, a, b) => clamp((v - a) / (b - a), 0, 1);
const damp = (current, target, lambda, dt) => current + (target - current) * (1 - Math.exp(-lambda * dt));

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

// Pointer position in -1..1, shared by all scenes
const pointer = { x: 0, y: 0 };
addEventListener('pointermove', (e) => {
  pointer.x = (e.clientX / innerWidth) * 2 - 1;
  pointer.y = (e.clientY / innerHeight) * 2 - 1;
}, { passive: true });

class Stage {
  constructor(canvas, { fov = 30, z = 6 } = {}) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    this.camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 100);
    this.camera.position.set(0, 0, z);
    this.clock = new THREE.Clock(false);
    this.visible = false;
    this.running = false;
    this.time = 0;
    new ResizeObserver(() => this.resize()).observe(canvas);
    new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      this.kick();
    }, { rootMargin: '120px 0px' }).observe(canvas);
    document.addEventListener('visibilitychange', () => this.kick());
  }

  resize() {
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.onResize?.(w, h);
    this.camera.updateProjectionMatrix();
    this.draw(0);
  }

  kick() {
    const shouldRun = this.visible && !document.hidden && !reduceMotion;
    if (shouldRun && !this.running) {
      this.running = true;
      this.clock.start();
      requestAnimationFrame(this.loop);
    } else if (!shouldRun) {
      this.running = false;
      this.clock.stop();
      if (this.visible) this.draw(0);
    }
  }

  loop = () => {
    if (!this.running) return;
    this.draw(Math.min(this.clock.getDelta(), 1 / 20));
    requestAnimationFrame(this.loop);
  };

  draw(dt) {
    this.time += dt;
    this.update(dt, this.time);
    this.renderer.render(this.scene, this.camera);
  }
}

function addLights(scene, rim = 0x8b5cf6) {
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(3, 4, 5);
  scene.add(key);
  const back = new THREE.PointLight(rim, 40, 14, 2);
  back.position.set(-2.5, 1.5, -3);
  scene.add(back);
  const pink = new THREE.PointLight(0xff3ea5, 18, 12, 2);
  pink.position.set(2.8, -1.4, -2);
  scene.add(pink);
}

function contactShadow(size, opacity) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, `rgba(0,0,0,${opacity})`);
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(size, size * 0.4),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false })
  );
  mesh.rotation.x = -Math.PI / 2;
  return mesh;
}

// ---------------------------------------------------------------- crystal V

// Deterministic randomness so the crystal has the same facets on every visit
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// One arm of the V: hexagonal cross-sections tapering from a flat top to the tip
function crystalArm({ top, tip, width, depth, colors, seed, highlight }) {
  const rand = rng(seed);
  const axis = new THREE.Vector3().subVectors(tip, top);
  const across = new THREE.Vector3(-axis.y, axis.x, 0).normalize();
  const zAxis = new THREE.Vector3(0, 0, 1);
  const rings = [
    { t: 0, s: 1.0 },
    { t: 0.2, s: 1.08 },
    { t: 0.52, s: 0.7 },
    { t: 0.8, s: 0.34 },
  ];
  const sides = 6;
  const pts = rings.map(({ t, s }, ri) => {
    const center = top.clone().addScaledVector(axis, t);
    const ring = [];
    for (let k = 0; k < sides; k++) {
      const a = (k / sides) * Math.PI * 2 + Math.PI / 6;
      const j = ri === 0 ? 0 : 0.08;
      const p = center.clone()
        .addScaledVector(across, Math.cos(a) * width * 0.5 * s * (1 + (rand() - 0.5) * j))
        .addScaledVector(zAxis, Math.sin(a) * depth * 0.5 * s * (1 + (rand() - 0.5) * j));
      if (ri === 0) p.y = top.y; // flat top edge, like the logo
      ring.push(p);
    }
    return ring;
  });

  const positions = [];
  const cols = [];
  const cTop = new THREE.Color(colors[0]);
  const cBottom = new THREE.Color(colors[1]);
  const white = new THREE.Color(0xffffff);
  let face = 0;
  const pushTri = (a, b, c, t) => {
    positions.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
    const col = cTop.clone().lerp(cBottom, t);
    col.multiplyScalar(0.55 + rand() * 0.75);
    if (highlight && face === highlight) col.lerp(white, 0.85);
    face++;
    for (let i = 0; i < 3; i++) cols.push(col.r, col.g, col.b);
  };

  // top cap
  const capCenter = pts[0].reduce((acc, p) => acc.add(p), new THREE.Vector3()).divideScalar(sides);
  for (let k = 0; k < sides; k++) pushTri(capCenter, pts[0][(k + 1) % sides], pts[0][k], 0);
  // walls
  for (let r = 0; r < rings.length - 1; r++) {
    for (let k = 0; k < sides; k++) {
      const a = pts[r][k], b = pts[r][(k + 1) % sides], c = pts[r + 1][(k + 1) % sides], d = pts[r + 1][k];
      const t = (rings[r].t + rings[r + 1].t) / 2;
      pushTri(a, b, c, t);
      pushTri(a, c, d, t + 0.05);
    }
  }
  // tip
  const last = pts[pts.length - 1];
  for (let k = 0; k < sides; k++) pushTri(last[k], last[(k + 1) % sides], tip, 1);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  geo.computeVertexNormals();
  return geo;
}

function buildCrystal() {
  const group = new THREE.Group();
  const material = new THREE.MeshPhysicalMaterial({
    vertexColors: true,
    flatShading: true,
    roughness: 0.2,
    metalness: 0.12,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    iridescence: 0.55,
    iridescenceIOR: 1.35,
    envMapIntensity: 0.95,
  });
  const tip = new THREE.Vector3(0, -1.22, 0);
  const left = crystalArm({ top: new THREE.Vector3(-0.86, 1.02, 0), tip, width: 0.92, depth: 0.5, colors: [0x1f63ff, 0x3b10e0], seed: 7 });
  const right = crystalArm({ top: new THREE.Vector3(0.86, 1.02, 0), tip, width: 0.92, depth: 0.5, colors: [0xff2e9a, 0x8a12d6], seed: 21, highlight: 9 });
  const edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.16 });
  for (const geo of [left, right]) {
    group.add(new THREE.Mesh(geo, material));
    group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 12), edgeMat));
  }
  return group;
}

function heroScene(canvas) {
  const stage = new Stage(canvas, { fov: 30, z: 6.4 });
  addLights(stage.scene);
  const crystal = buildCrystal();
  stage.scene.add(crystal);
  const shadow = contactShadow(3.2, 0.55);
  shadow.position.y = -1.75;
  stage.scene.add(shadow);

  const hero = canvas.closest('section');
  const state = { rx: 0, ry: 0, lift: 0 };
  stage.update = (dt, t) => {
    const rect = hero.getBoundingClientRect();
    const scrolled = clamp(-rect.top / Math.max(rect.height, 1), 0, 1);
    const idleY = Math.sin(t * 0.35) * 0.5;
    const idleX = Math.sin(t * 0.27) * 0.07;
    const k = dt === 0 ? 1 : 1 - Math.exp(-4 * dt);
    state.ry += (idleY + pointer.x * 0.35 + scrolled * 1.4 - state.ry) * k;
    state.rx += (idleX + pointer.y * 0.18 - state.rx) * k;
    state.lift = damp(state.lift, scrolled, 6, dt || 1);
    crystal.rotation.set(state.rx, state.ry, 0);
    crystal.position.y = Math.sin(t * 0.8) * 0.05 + state.lift * 0.5;
    const s = 1 - state.lift * 0.12;
    crystal.scale.setScalar(s);
    shadow.material.opacity = 1 - state.lift;
  };
  stage.resize();
}

// ---------------------------------------------------------------- coin

function faceTexture(logo) {
  const size = 1024;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  // the cylinder cap maps the texture turned by a quarter; draw through the inverse
  g.setTransform(0, -1, 1, 0, 0, size);
  const mid = size / 2;
  const base = g.createRadialGradient(mid * 0.8, mid * 0.7, 40, mid, mid, mid);
  base.addColorStop(0, '#3a3a44');
  base.addColorStop(1, '#16161b');
  g.fillStyle = base;
  g.fillRect(0, 0, size, size);
  // rim and inner ring
  g.lineWidth = 26;
  g.strokeStyle = '#4b4b56';
  g.beginPath(); g.arc(mid, mid, 497, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 4;
  g.strokeStyle = '#55555f';
  g.beginPath(); g.arc(mid, mid, 405, 0, Math.PI * 2); g.stroke();
  // lettering around the ring
  const text = 'VELINCOIN  ·  21 000 000 VLC  ·  ';
  g.fillStyle = '#9a9aa5';
  g.font = '600 46px Inter, system-ui, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  const chars = [...text];
  const step = (Math.PI * 2) / chars.length;
  chars.forEach((ch, i) => {
    const a = -Math.PI / 2 + i * step;
    g.save();
    g.translate(mid + Math.cos(a) * 444, mid + Math.sin(a) * 444);
    g.rotate(a + Math.PI / 2);
    g.fillText(ch, 0, 0);
    g.restore();
  });
  // the crystal V inlaid in the middle; 'lighten' drops the logo's dark backing
  if (logo) {
    g.save();
    g.beginPath(); g.arc(mid, mid, 392, 0, Math.PI * 2); g.clip();
    g.globalCompositeOperation = 'lighten';
    g.drawImage(logo, mid - 380, mid - 380, 760, 760);
    g.restore();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function reedingTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 8;
  const g = c.getContext('2d');
  for (let x = 0; x < 512; x += 4) {
    g.fillStyle = x % 8 === 0 ? '#ffffff' : '#555555';
    g.fillRect(x, 0, 4, 8);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.repeat.set(8, 1);
  return tex;
}

const logoImage = new Promise((resolve) => {
  const img = new Image();
  img.onload = () => resolve(img);
  img.onerror = () => resolve(null);
  img.src = 'assets/img/logo-mark.png';
});

function buildCoin(radius) {
  const thickness = radius * 0.13;
  const sideMat = new THREE.MeshPhysicalMaterial({
    color: 0x3c3c46, metalness: 1, roughness: 0.3, bumpMap: reedingTexture(), bumpScale: 2, clearcoat: 0.4,
  });
  const faceA = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.9, roughness: 0.36, clearcoat: 0.5, clearcoatRoughness: 0.08, envMapIntensity: 0.7 });
  const faceB = faceA.clone();
  const geo = new THREE.CylinderGeometry(radius, radius, thickness, 160, 1);
  const mesh = new THREE.Mesh(geo, [sideMat, faceA, faceB]);
  const setFaces = (img) => {
    faceA.map = faceTexture(img);
    faceB.map = faceTexture(img);
    faceA.needsUpdate = faceB.needsUpdate = true;
  };
  setFaces(null);
  Promise.all([logoImage, document.fonts?.ready]).then(([img]) => setFaces(img));
  const group = new THREE.Group();
  mesh.rotation.x = Math.PI / 2; // face towards the camera
  group.add(mesh);
  return group;
}

function coinScene(canvas) {
  const stage = new Stage(canvas, { fov: 30, z: 6.2 });
  addLights(stage.scene);
  // turn the room so its brightest panel is not mirrored straight back when the face is square on
  stage.scene.environmentRotation.set(0.45, 0.8, 0);
  const coin = buildCoin(1.25);
  stage.scene.add(coin);
  const shadow = contactShadow(3, 0.5);
  shadow.position.y = -1.7;
  stage.scene.add(shadow);
  const section = canvas.closest('section');
  let rx = 0, ry = 0;
  stage.update = (dt, t) => {
    const rect = section.getBoundingClientRect();
    const through = clamp(1 - (rect.top + rect.height) / (innerHeight + rect.height), 0, 1);
    const k = dt === 0 ? 1 : 1 - Math.exp(-3.5 * dt);
    // slow turn, a little faster as the section passes, tilted towards the pointer
    const spin = t * 0.55 + through * Math.PI * 1.5;
    ry += (spin + pointer.x * 0.3 - ry) * k;
    rx += (-0.18 + pointer.y * 0.15 - rx) * k;
    coin.rotation.set(rx, ry, 0);
    coin.position.y = Math.sin(t * 0.9) * 0.06;
  };
  stage.resize();
}

// ---------------------------------------------------------------- chain

function chainScene(canvas) {
  const stage = new Stage(canvas, { fov: 32, z: 9 });
  addLights(stage.scene);
  const { scene, camera } = stage;
  const violet = new THREE.Color(0x8b5cf6);
  const spacing = 1.75;
  const blockGeo = new RoundedBoxGeometry(1, 1, 1, 5, 0.12);
  const edgeGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.03, 1.03, 1.03));
  const blocks = [];

  function makeBlock() {
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0x1b1b23, metalness: 0.55, roughness: 0.26, clearcoat: 1, clearcoatRoughness: 0.12,
      emissive: violet, emissiveIntensity: 0,
    });
    const mesh = new THREE.Mesh(blockGeo, mat);
    const edges = new THREE.LineSegments(edgeGeo, new THREE.LineBasicMaterial({ color: 0xb4a0fb, transparent: true, opacity: 0.25 }));
    const group = new THREE.Group();
    group.add(mesh, edges);
    group.userData = { mat, edges: edges.material };
    return group;
  }

  const chain = new THREE.Group();
  chain.position.x = -1.5;
  scene.add(chain);
  const count = 6;
  const linkGeo = new THREE.CylinderGeometry(0.05, 0.05, spacing - 1, 12);
  const linkMat = new THREE.MeshPhysicalMaterial({ color: 0x6b6b78, metalness: 1, roughness: 0.3 });
  for (let i = 0; i < count; i++) {
    const b = makeBlock();
    b.position.set((i - (count - 1)) * spacing, 0, 0);
    chain.add(b);
    blocks.push(b);
    if (i > 0) {
      const link = new THREE.Mesh(linkGeo, linkMat);
      link.rotation.z = Math.PI / 2;
      link.position.set(b.position.x - spacing / 2, 0, 0);
      chain.add(link);
    }
  }
  const fresh = makeBlock();
  chain.add(fresh);
  const freshLink = new THREE.Mesh(linkGeo, linkMat);
  freshLink.rotation.z = Math.PI / 2;
  freshLink.position.set(spacing / 2, 0, 0);
  chain.add(freshLink);

  const coin = buildCoin(0.5);
  chain.add(coin);

  const steps = [...document.querySelectorAll('.how-steps .step')];
  const look = new THREE.Vector3();
  let progress = 0;
  let shown = 0;

  function scrollProgress() {
    // narrow screens read the steps below the sticky scene, so the focus line sits lower
    const mid = innerHeight * (innerWidth < 900 ? 0.68 : 0.5);
    const tops = steps.map((s) => s.getBoundingClientRect().top);
    if (mid < tops[0]) return 0;
    for (let i = 0; i < tops.length - 1; i++) {
      if (mid < tops[i + 1]) return i + (mid - tops[i]) / (tops[i + 1] - tops[i]);
    }
    const last = steps[steps.length - 1].getBoundingClientRect();
    return clamp(steps.length - 1 + (mid - last.top) / Math.max(last.height, 1), 0, steps.length);
  }

  stage.onResize = (w, h) => {
    // keep the whole chain in frame on narrow, tall canvases
    stage.camera.zoom = clamp((w / h) / 1.15, 0.62, 1);
  };

  stage.update = (dt, t) => {
    progress = scrollProgress();
    shown = dt === 0 ? progress : damp(shown, progress, 5, dt);
    const p = shown;

    // 1. mining: the new block hovers above the end of the chain and flickers
    const dock = smooth(range(p, 0.85, 1.55));
    const hover = 1 - dock;
    fresh.position.set(spacing, 1.9 * hover + Math.sin(t * 1.6) * 0.06 * hover, 0);
    fresh.rotation.set(0.5 * hover * Math.sin(t * 0.9), (t * 0.9) * hover, 0.2 * hover);
    const flicker = hover * (0.35 + 0.35 * Math.sin(t * 11) * Math.sin(t * 7.3));
    fresh.userData.mat.emissiveIntensity = flicker * 0.9;
    fresh.userData.edges.opacity = 0.25 + flicker;
    freshLink.scale.y = dock;

    // 2. verification: a pulse runs along the chain into the new block
    const wave = range(p, 1.25, 2.05) * (count + 1.5) - 0.5;
    blocks.concat(fresh).forEach((b, i) => {
      const glow = Math.exp(-((wave - i) ** 2) * 1.6) * (p > 1.3 && p < 2.4 ? 1 : 0);
      if (b !== fresh || dock > 0.99) {
        b.userData.mat.emissiveIntensity = glow * 0.75;
        b.userData.edges.opacity = 0.25 + glow * 0.75;
      }
    });

    // 3. ownership: a coin rises out of the new block and turns to the viewer
    const rise = smooth(range(p, 1.85, 2.45));
    coin.visible = rise > 0.001;
    coin.position.set(spacing, 0.1 + rise * 1.55, rise * 0.9);
    coin.scale.setScalar(0.4 + rise * 0.6);
    coin.rotation.set(-0.15 * rise, (1 - rise) * Math.PI * 2.5 + Math.sin(t * 0.8) * 0.15 * rise, 0);

    // camera drifts along with the story
    const focus = smooth(range(p, 1.75, 2.6));
    camera.position.set(4.2 - focus * 1.2 + pointer.x * 0.25, 2.6 - focus * 0.6 - pointer.y * 0.15, 8.4 - focus * 2.2);
    look.set(-1.4 + focus * 2.6, 0.2 + focus * 0.7, 0);
    camera.lookAt(look);
    camera.updateProjectionMatrix();
  };

  if (reduceMotion) {
    // still frames: redraw when the visitor reaches another step
    const io = new IntersectionObserver(() => stage.draw(0), { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach((s) => io.observe(s));
  }
  stage.resize();
}

// ---------------------------------------------------------------- start

function start() {
  if (!webglAvailable()) {
    document.documentElement.classList.add('no-webgl');
    return;
  }
  try {
    const crystal = document.getElementById('crystal');
    const chain = document.getElementById('chain');
    const coin = document.getElementById('coin');
    if (crystal) heroScene(crystal);
    if (chain) chainScene(chain);
    if (coin) coinScene(coin);
  } catch (err) {
    console.error(err);
    document.documentElement.classList.add('no-webgl');
  }
}

start();
