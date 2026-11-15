export const duration = 10;
export const posterTime = 3.45;

const width = 1280;
const height = 720;
const lavender = '#c4b5f4';
const cream = '#fff5e8';
const panel = [132, 45, 1016, 572, 15];

const copy = {
  ru: ['Партия на линии', 'План производства', 'План на согласовании'],
  en: ['On the production line', 'Production plan', 'Plan under review'],
};

const clamp = (v) => Math.max(0, Math.min(1, v));
const mix = (a, b, p) => a + (b - a) * p;
const smooth = (p) => p * p * (3 - 2 * p);
const timeIn = (time, start, end) => clamp((time - start) / (end - start));
const ease = (time, start, end) => smooth(timeIn(time, start, end));
const boundsAt = (a, b, p) => a.map((v, i) => mix(v, b[i], p));

export function createAvroraStoryboard(ctx, images, lang, fontFamily) {
  const labels = copy[lang] ?? copy.ru;
  const font = fontFamily || 'system-ui, sans-serif';

  function rect([x, y, w, h, radius = 0]) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, Math.min(radius, w / 2, h / 2));
  }

  function within(bounds, draw) {
    if (bounds[2] <= 0 || bounds[3] <= 0) return;
    ctx.save();
    rect(bounds);
    ctx.clip();
    draw();
    ctx.restore();
  }

  function fill(bounds, color) {
    rect(bounds);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function bitmap(key, [x, y, w, h]) {
    ctx.drawImage(images[key], x, y, w, h);
  }

  function shadow(x, y, w, h, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(w, h);
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
    gradient.addColorStop(0, 'rgba(28, 2, 9,' + alpha + ')');
    gradient.addColorStop(1, 'rgba(28, 2, 9,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(-1, -1, 2, 2);
    ctx.restore();
  }

  function bottle(key, x, foot, h, angle = 0, contact = true) {
    const image = images[key];
    const w = h * image.width / image.height;
    if (x + w < -240 || x - w > width + 240) return;
    if (contact) shadow(x + w * .22, foot - 1, w * .83, Math.max(12, h * .054), .64);
    ctx.save();
    ctx.translate(x, foot);
    ctx.rotate(angle);
    bitmap(key, [-w / 2, -h, w, h]);
    ctx.restore();
  }

  function background(time, zoom = 1, pivotX = 630, pivotY = 295) {
    const phase = time / duration * Math.PI * 2;
    const wobble = Math.sin(phase) * 14;
    ctx.save();
    ctx.translate(pivotX, pivotY);
    ctx.scale(zoom, zoom);
    ctx.translate(-pivotX, -pivotY);
    bitmap('line', [-48 + wobble, -25, 1376, 770]);
    ctx.restore();
  }

  function caption(text, x, y, show, large = false) {
    if (show <= 0) return;
    ctx.save();
    ctx.font = '750 ' + (large ? 51 : 38) + 'px ' + font;
    ctx.textAlign = large ? 'left' : 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = cream;
    ctx.globalAlpha = show;
    ctx.fillText(text, x, y + (1 - show) * 13, large ? width - x - 42 : width - 160);
    ctx.restore();
  }

  function home(time, foregroundText = true, zoom = 1) {
    const phase = time / duration * Math.PI * 2;
    const dx = 47 * Math.sin(phase);
    const x = 490 + dx;
    const foot = 606;
    const cameraX = x - 8;
    const cameraY = 126;
    background(time, zoom, cameraX, cameraY);
    ctx.save();
    ctx.translate(cameraX, cameraY);
    ctx.scale(zoom, zoom);
    ctx.translate(-cameraX, -cameraY);
    bottle('grapefruit', x - 300, foot - 42, 365);
    bottle('mint', x, foot, 530);
    bottle('lemon', x + 238, foot - 34, 399);
    ctx.restore();

    if (foregroundText) {
      const show = (1 - ease(time, .77, 1.31)) + ease(time, 9.55, 9.98);
      ctx.save();
      ctx.globalAlpha = clamp(show);
      bitmap('logo', [1019, 106, 98, 98]);
      ctx.restore();
      caption(labels[0], 861, 259, clamp(show), true);
    }
  }

  function screenshot(name, bounds, widthFraction = 1) {
    const [x, y, w, h, radius] = bounds;
    if (widthFraction <= 0) return;
    ctx.save();
    ctx.shadowColor = '#23091087';
    ctx.shadowBlur = 29;
    ctx.shadowOffsetY = 13;
    within([x - 45, y - 38, w * widthFraction + 45, h + 84], () => {
      fill([x, y, w, h, radius], '#fff');
    });
    ctx.shadowColor = 'transparent';
    ctx.restore();
    within(bounds, () => within([x, y, w * widthFraction, h], () => bitmap(name, bounds)));
  }

  function driftingPanel(time, start, end) {
    const p = timeIn(time, start, end);
    return boundsAt(panel, [124, 39, 1032, 581, 15], p);
  }

  function calendar(time) {
    const focus = ease(time, .82, 2.05);
    const spread = ease(time, 2.00, 2.84);
    const aperture = boundsAt([95, 248, 1090, 12, 6], [-1, -1, width + 2, height + 2, 0], spread);
    if (spread < 1) {
      home(time, true, mix(1, 4.25, focus));
      if (time > 1.81) {
        const count = 9;
        for (let i = 0; i < count; i++) {
          const start = 1.81 + i * .025;
          const open = ease(time, start, 2.23 + i * .018);
          const x = 183 + 108 * i;
          fill([x, mix(310, 49, open), 2, 600 * open, 1], '#eee6f780');
        }
        const lead = ease(time, 1.86, 2.25);
        fill([95, 248, 1090 * lead, 12, 6], lavender);
      }
      if (spread > 0) {
        within(aperture, () => {
          const release = ease(time, 2.12, 2.78);
          background(time);
          screenshot('calendar', panel, release);
        });
      }
    } else {
      background(time);
      screenshot('calendar', driftingPanel(time, 2.84, 4.24));
    }

    const show = ease(time, 2.52, 2.99) * (1 - ease(time, 3.98, 4.26));
    caption(labels[1], 640, 666, show);
  }

  function strip(bounds, angle, color) {
    const [x, y, w, h] = bounds;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    fill([-w / 2, -h / 2, w, h, Math.min(12, h / 2)], color);
    ctx.restore();
  }

  function lane(time) {
    const start = 4.21;
    const p = time - start;
    const shift = 157 * p;
    const beltX = 642;
    const beltY = 553;
    const angle = -.18;
    const out = Math.sin(Math.PI * timeIn(time, start, 6.85));
    strip([beltX, beltY, 1640, 204], angle, '#801822');
    strip([beltX, beltY, 1638, 165], angle, lavender);

    ctx.save();
    ctx.translate(beltX, beltY);
    ctx.rotate(angle);
    within([-820, -75, 1640, 150], () => {
      for (let i = 0; i < 13; i++) {
        const x = -940 + i * 162 + shift % 162;
        fill([x, -73, 1.4, 146], '#50407838');
      }
      fill([-820, -60, 1640, 2], '#fff4');
      fill([-820, 59, 1640, 2], '#fff4');
    });
    ctx.restore();

    const foot = (x) => beltY + (x - beltX) * Math.tan(angle) + 45;
    const mint = 380 + shift;
    const lemon = 110 + shift;
    const grapefruit = 710 + shift;
    bottle('grapefruit', grapefruit, foot(grapefruit) - 26, 364 + out * 16, -.075);
    bottle('mint', mint, foot(mint), 496 + out * 25, -.075);
    bottle('lemon', lemon, foot(lemon) + 5, 414 + out * 15, -.075);
  }

  function calendarToLane(time) {
    const p = ease(time, 4.22, 5.10);
    background(time);
    const before = driftingPanel(4.22, 2.84, 4.24);
    const panelExit = boundsAt(before, [-135, -73, 1490, 838, 0], p);
    screenshot('calendar', panelExit);

    const [left, top, screenW, screenH] = panelExit;
    const barX = left + 936.5 * screenW / 1450;
    const barY = top + 332.5 * screenH / 816;
    const unfold = ease(time, 4.26, 5.10);
    const bar = boundsAt([barX, barY, 601 * screenW / 1450, 87 * screenH / 816], [640, 360, 2700, 1800], unfold);
    const [x, y, w, h] = bar;
    if (unfold > 0) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-.18 * unfold);
      rect([-w / 2, -h / 2, w, h, mix(5, 30, unfold)]);
      ctx.clip();
      ctx.rotate(.18 * unfold);
      ctx.translate(-x, -y);
      background(time);
      lane(time);
      ctx.restore();
    }

    const lead = ease(time, 4.22, 4.38) * (1 - ease(time, 4.39, 4.81));
    if (lead > 0) {
      ctx.save();
      ctx.globalAlpha = lead;
      strip(bar, -.18 * unfold, lavender);
      ctx.restore();
    }
    caption(labels[1], 640, 666, ease(time, 2.52, 2.99) * (1 - ease(time, 3.98, 4.26)));
  }

  function approval(time) {
    const arrival = ease(time, 6.27, 7.15);
    const bounds = driftingPanel(time, 7.15, 8.40);
    const [x, y, w, h] = bounds;
    if (arrival < 1) {
      background(time);
      lane(time);
      const foregroundX = mix(-860, 2350, timeIn(time, 6.03, 7.24));
      const foregroundH = 2080;
      const edge = foregroundX - foregroundH * .18;
      const reveal = clamp((edge - x) / w);
      if (reveal > 0) {
        within([0, 0, edge, height], () => {
          background(time);
          screenshot('approval', bounds);
        });
      }
      bottle('mint', foregroundX, 1730, foregroundH, -.06, false);
    } else {
      background(time);
      screenshot('approval', bounds);
    }

    if (time > 6.78 && time < 7.67) {
      within(bounds, () => {
        for (const [i, centerX] of [295, 550, 809].entries()) {
          const fraction = ease(time, 6.95 + i * .105, 7.43 + i * .105);
          if (fraction >= 1) continue;
          const cx = x + centerX * w / 1450;
          const cy = y + 246 * h / 816;
          const radius = 29 * w / 1450;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.arc(cx, cy, radius, -Math.PI / 2 + fraction * 2 * Math.PI, 3 * Math.PI / 2);
          ctx.closePath();
          ctx.fillStyle = '#fff';
          ctx.fill();
        }
      });
    }
    caption(labels[2], 640, 666, ease(time, 6.86, 7.32) * (1 - ease(time, 8.15, 8.53)));
  }

  function finish(time) {
    const p = timeIn(time, 8.40, 9.54);
    home(time);
    if (p >= 1) return;
    const foregroundX = mix(-670, 2350, p);
    const foregroundH = 2140;
    const edge = foregroundX + foregroundH * .17;
    within([Math.max(0, edge), 0, width - Math.max(0, edge), height], () => approval(time));
    bottle('mint', foregroundX, 1790, foregroundH, -.07, false);
  }

  return (time) => {
    const t = ((time % duration) + duration) % duration;
    const { width: targetWidth, height: targetHeight } = ctx.canvas;
    const fit = Math.min(targetWidth / width, targetHeight / height);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#721c1b';
    ctx.fillRect(0, 0, targetWidth, targetHeight);
    ctx.setTransform(fit, 0, 0, fit, (targetWidth - width * fit) / 2, (targetHeight - height * fit) / 2);

    if (t < .82) home(t);
    else if (t < 4.22) calendar(t);
    else if (t < 5.10) calendarToLane(t);
    else if (t < 6.03) {
      background(t);
      lane(t);
    } else if (t < 8.40) approval(t);
    else finish(t);
  };
}
