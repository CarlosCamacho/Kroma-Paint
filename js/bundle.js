(() => {
  // js/palette.js
  var DEFAULT_PALETTE = [63, 54, 60, 57, 51, 27, 45, 38, 0, 18, 9, 36, 11, 31, 26, 7];
  var BASIC_STD_RGB = [18, 54, 9, 36, 63, 27, 45, 38, 0, 18, 0, 63, 0, 18, 0, 38];
  var PMODE4_ARTIFACT = [0, 38, 9, 18, 54, 63, 27, 45, 0, 0, 0, 0, 0, 0, 0, 0];
  var PRESET_PALETTES = {
    default16: { label: "Default Palette (16)", count: 16, codes: DEFAULT_PALETTE.slice() },
    basic_rgb: { label: "CoCo BASIC RGB (16)", count: 16, codes: BASIC_STD_RGB.slice() },
    pmode4: { label: "PMODE 4 Artifact Colors (16)", count: 16, codes: PMODE4_ARTIFACT.slice() },
    aap_dga16: { label: "AAP-DGA16 (16)", count: 16, codes: [0, 1, 16, 24, 4, 12, 34, 56, 7, 10, 48, 31, 52, 47, 55, 63] },
    adl16: { label: "adl16 (16)", count: 16, codes: [0, 5, 3, 5, 3, 33, 35, 15, 56, 21, 53, 56, 60, 51, 55, 63] },
    anb16: { label: "ANB16 (16)", count: 16, codes: [0, 14, 63, 60, 42, 14, 39, 53, 53, 49, 21, 7, 14, 29, 35, 5] },
    arq16: { label: "ARQ16 (16)", count: 16, codes: [63, 60, 56, 28, 39, 0, 5, 10, 53, 35, 60, 23, 55, 14, 46, 17] },
    better16: { label: "Better16 (16)", count: 16, codes: [0, 8, 4, 7, 2, 32, 15, 42, 56, 20, 52, 57, 28, 60, 55, 63] },
    bit_dream: { label: "Bit-Dream (16)", count: 16, codes: [0, 4, 2, 1, 53, 34, 21, 15, 62, 37, 17, 29, 63, 60, 51, 47] },
    bot16: { label: "BOT16 (16)", count: 16, codes: [62, 50, 17, 31, 53, 60, 26, 24, 53, 39, 42, 3, 39, 33, 12, 1] },
    breaking_point: { label: "Breaking Point (16)", count: 16, codes: [63, 0, 62, 56, 56, 56, 56, 47, 43, 15, 0, 7, 14, 28, 56, 56] },
    bubblegum_16: { label: "Bubblegum 16 (16)", count: 16, codes: [0, 4, 36, 52, 52, 63, 60, 37, 33, 5, 3, 28, 51, 17, 10, 1] },
    color_graphics_adapter: { label: "Color Graphics Adapter (16)", count: 16, codes: [0, 7, 56, 63, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 34, 55] },
    commodore_64: { label: "Commodore 64 (16)", count: 16, codes: [0, 7, 56, 56, 63, 35, 35, 6, 35, 56, 58, 21, 28, 42, 14, 42] },
    commodore_vic_20: { label: "Commodore VIC-20 (16)", count: 16, codes: [0, 63, 35, 60, 6, 35, 57, 59, 42, 61, 21, 58, 14, 14, 49, 62] },
    console16: { label: "Console16 (16)", count: 16, codes: [37, 33, 54, 52, 18, 3, 27, 29, 9, 5, 45, 12, 1, 0, 63, 14] },
    corruption_16: { label: "Corruption-16 (16)", count: 16, codes: [62, 56, 49, 7, 6, 56, 7, 7, 0, 0, 2, 7, 49, 56, 53, 34] },
    crayon_16: { label: "Crayon 16 (16)", count: 16, codes: [0, 35, 39, 53, 60, 55, 63, 49, 58, 17, 3, 11, 42, 60, 39, 39] },
    dawnbringer_16: { label: "DawnBringer 16 (16)", count: 16, codes: [0, 5, 7, 7, 35, 6, 35, 7, 14, 35, 56, 21, 56, 28, 53, 63] },
    go_line: { label: "Go-line (16)", count: 16, codes: [5, 33, 37, 52, 55, 22, 21, 14, 0, 11, 25, 26, 63, 56, 35, 7] },
    intellivision: { label: "Intellivision (16)", count: 16, codes: [0, 56, 63, 38, 52, 54, 2, 16, 21, 11, 29, 57, 33, 39, 6, 49] },
    jehkoba16: { label: "Jehkoba16 (16)", count: 16, codes: [0, 58, 29, 24, 17, 49, 53, 63, 53, 35, 60, 39, 35, 14, 28, 0] },
    macintosh_ii: { label: "Macintosh II (16)", count: 16, codes: [63, 54, 38, 36, 44, 12, 8, 25, 16, 2, 6, 35, 56, 56, 7, 0] },
    mappletosh_16: { label: "Mappletosh 16 (16)", count: 16, codes: [36, 38, 35, 6, 0, 7, 56, 56, 16, 3, 8, 14, 25, 58, 63, 47] },
    melody_16: { label: "Melody 16 (16)", count: 16, codes: [56, 14, 7, 29, 59, 63, 56, 14, 1, 7, 35, 35, 53, 62, 21, 21] },
    mem16: { label: "mem16 (16)", count: 16, codes: [1, 7, 7, 35, 53, 55, 49, 21, 7, 28, 56, 59, 62, 60, 46, 42] },
    micro_roguelike: { label: "Micro roguelike (16)", count: 16, codes: [0, 7, 7, 14, 56, 35, 35, 39, 60, 21, 30, 15, 57, 53, 55, 63] },
    microsoft_vga: { label: "MICROSOFT VGA (16)", count: 16, codes: [0, 32, 16, 48, 8, 40, 24, 56, 56, 36, 18, 54, 9, 45, 27, 63] },
    microsoft_windows: { label: "Microsoft Windows (16)", count: 16, codes: [0, 7, 56, 63, 4, 36, 2, 18, 6, 54, 1, 9, 5, 45, 3, 27] },
    minecraftia16: { label: "Minecraftia16 (16)", count: 16, codes: [34, 52, 55, 48, 6, 24, 29, 14, 42, 42, 60, 35, 0, 7, 56, 63] },
    miyazaki_16: { label: "Miyazaki 16 (16)", count: 16, codes: [0, 3, 7, 49, 56, 58, 63, 24, 28, 7, 35, 60, 3, 21, 49, 53] },
    oxygen_16: { label: "Oxygen 16 (16)", count: 16, codes: [63, 55, 30, 56, 49, 39, 53, 28, 21, 42, 7, 7, 35, 7, 7, 0] },
    pastel_horizon: { label: "PASTEL HORIZON (16)", count: 16, codes: [7, 56, 63, 63, 60, 43, 57, 29, 29, 14, 24, 56, 35, 39, 53, 62] },
    pico_8: { label: "PICO-8 (16)", count: 16, codes: [0, 3, 5, 17, 35, 7, 56, 63, 37, 52, 54, 19, 25, 42, 46, 60] },
    pico_db: { label: "PICO-DB (16)", count: 16, codes: [0, 1, 5, 3, 35, 7, 56, 63, 35, 53, 55, 21, 28, 14, 60, 60] },
    psyche16: { label: "psyche16 (16)", count: 16, codes: [63, 63, 46, 46, 7, 0, 37, 5, 42, 14, 55, 53, 50, 20, 31, 28] },
    pyxel: { label: "PYXEL (16)", count: 16, codes: [0, 7, 5, 24, 35, 14, 57, 63, 33, 49, 53, 56, 28, 29, 60, 60] },
    rampy16: { label: "Rampy16 (16)", count: 16, codes: [1, 7, 56, 62, 35, 39, 14, 42, 14, 14, 28, 29, 21, 51, 49, 60] },
    retrobubble: { label: "retrobubble. (16)", count: 16, codes: [56, 14, 5, 0, 3, 21, 35, 5, 7, 55, 39, 34, 56, 62, 53, 53] },
    rgbi_improved: { label: "RGBI Improved (16)", count: 16, codes: [0, 32, 34, 6, 25, 8, 44, 56, 7, 52, 55, 48, 31, 41, 46, 63] },
    rgr_proto16: { label: "RGR-Proto16 (16)", count: 16, codes: [62, 56, 14, 3, 49, 21, 53, 39, 7, 3, 0, 0, 5, 33, 53, 32] },
    ruzx_spectrum: { label: "RuZX-Spectrum (16)", count: 16, codes: [1, 14, 56, 63, 8, 15, 32, 37, 12, 44, 17, 50, 10, 31, 6, 55] },
    sara_98a: { label: "SARA-98A (16)", count: 16, codes: [33, 39, 39, 60, 63, 62, 53, 35, 35, 4, 4, 6, 7, 28, 56, 0] },
    sara_98c: { label: "SARA-98C (16)", count: 16, codes: [63, 60, 60, 53, 35, 33, 4, 0, 1, 5, 14, 42, 56, 14, 3, 1] },
    shine_16: { label: "Shine 16 (16)", count: 16, codes: [59, 29, 1, 14, 42, 63, 56, 7, 4, 5, 35, 53, 55, 51, 21, 3] },
    simplejpc_16: { label: "SimpleJPC-16 (16)", count: 16, codes: [0, 1, 6, 35, 53, 62, 63, 59, 21, 28, 6, 7, 35, 42, 56, 60] },
    st_16_natural: { label: "ST 16 Natural (16)", count: 16, codes: [0, 5, 35, 53, 55, 49, 3, 21, 29, 15, 5, 14, 46, 63, 56, 7] },
    super_cassette_vision: { label: "Super Cassette Vision (16)", count: 16, codes: [0, 36, 52, 60, 54, 48, 16, 18, 58, 8, 9, 41, 45, 27, 56, 63] },
    sweetie_16: { label: "Sweetie 16 (16)", count: 16, codes: [1, 5, 35, 39, 53, 51, 21, 3, 3, 14, 29, 31, 63, 56, 14, 7] },
    system_mini_16: { label: "System Mini 16 (16)", count: 16, codes: [0, 7, 56, 63, 10, 15, 32, 39, 16, 22, 42, 47, 34, 53, 29, 54] },
    taffy_16: { label: "Taffy 16 (16)", count: 16, codes: [1, 14, 57, 63, 53, 39, 39, 14, 29, 23, 51, 55, 53, 39, 35, 7] },
    the_perfect_palette_pocket: { label: "The Perfect Palette pocket (16)", count: 16, codes: [60, 37, 5, 62, 52, 35, 55, 21, 17, 59, 25, 14, 43, 0, 56, 63] },
    ty_old_90s_adventure_16: { label: "TY - Old 90s Adventure 16 (16)", count: 16, codes: [56, 56, 35, 7, 35, 6, 4, 49, 7, 7, 28, 14, 7, 7, 7, 0] },
    yu_no_pc_98: { label: "YU-NO (PC-98) (16)", count: 16, codes: [0, 56, 63, 7, 35, 60, 62, 14, 57, 0, 7, 7, 28, 53, 39, 60] }
  };
  function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
  }
  function cocoRGB222_to_rgb(code) {
    const r = (code >> 5 & 1) * 2 + (code >> 2 & 1), g = (code >> 4 & 1) * 2 + (code >> 1 & 1), b = (code >> 3 & 1) * 2 + (code >> 0 & 1);
    return [Math.round(r * 255 / 3), Math.round(g * 255 / 3), Math.round(b * 255 / 3)];
  }
  function rgb_to_cocoRGB222(r, g, b) {
    const rq = Math.round(clamp(r, 0, 255) * 3 / 255), gq = Math.round(clamp(g, 0, 255) * 3 / 255), bq = Math.round(clamp(b, 0, 255) * 3 / 255);
    return (rq >> 1 & 1) << 5 | (gq >> 1 & 1) << 4 | (bq >> 1 & 1) << 3 | (rq & 1) << 2 | (gq & 1) << 1 | bq & 1;
  }
  function hsvToRgb(h, s, v) {
    const i = Math.floor(h * 6), f = h * 6 - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s);
    let r, g, b;
    switch (i % 6) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      default:
        r = v;
        g = p;
        b = q;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
  function cocoComposite_to_rgb(code) {
    const I = code >> 4 & 3, P = code & 15;
    return hsvToRgb(P / 16, 0.85, 0.18 + I / 3 * 0.82);
  }
  function artifact_color_for(x, leftBit, bit, rightBit) {
    const parity = x & 1, on = (leftBit ? 1 : 0) + (bit ? 1 : 0) + (rightBit ? 1 : 0);
    if (bit && leftBit && rightBit) return [240, 240, 240];
    if (bit && on >= 2) return parity ? [150, 190, 255] : [255, 190, 120];
    if (bit) return parity ? [70, 130, 255] : [255, 140, 60];
    return [0, 0, 0];
  }
  function nearestCocoCode(rgb) {
    let best = 0, bestD = 1e9;
    for (let c = 0; c < 64; c++) {
      const cc = cocoRGB222_to_rgb(c), d = (rgb[0] - cc[0]) ** 2 + (rgb[1] - cc[1]) ** 2 + (rgb[2] - cc[2]) ** 2;
      if (d < bestD) {
        bestD = d;
        best = c;
      }
    }
    return best;
  }
  function mappedPreset(name) {
    return PRESET_PALETTES[name] ? PRESET_PALETTES[name].codes.slice() : DEFAULT_PALETTE.slice();
  }

  // js/patterns.js
  var DEFAULT_PATTERNS = [[153, 66, 36, 165, 165, 36, 66, 153], [195, 165, 90, 36, 36, 90, 165, 195], [85, 0, 85, 0, 85, 0, 85, 0], [170, 85, 170, 85, 170, 85, 170, 85], [17, 68, 17, 68, 17, 68, 17, 68], [85, 255, 85, 255, 85, 255, 85, 255], [136, 0, 34, 0, 136, 0, 34, 0], [165, 90, 165, 90, 90, 165, 90, 165], [34, 17, 136, 68, 34, 17, 136, 68], [73, 146, 36, 73, 146, 36, 73, 146], [170, 170, 170, 170, 170, 170, 170, 170], [0, 255, 0, 255, 0, 255, 0, 255], [51, 204, 0, 51, 204, 0, 51, 204], [255, 17, 17, 17, 255, 17, 17, 17], [204, 51, 204, 51, 204, 51, 204, 51], [170, 170, 85, 85, 170, 170, 85, 85]];
  function clonePatterns(patterns) {
    return patterns.map((p) => p.slice());
  }
  function patternOn(pattern, x, y) {
    return (pattern[y & 7] >> 7 - (x & 7) & 1) === 1;
  }
  function drawPatternPreview(pattern, canvas2, fgCode, bgCode) {
    const ctx2 = canvas2.getContext("2d");
    const img = ctx2.createImageData(8, 8);
    const fg = cocoRGB222_to_rgb(fgCode), bg = cocoRGB222_to_rgb(bgCode);
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
      const on = (pattern[y] >> 7 - x & 1) === 1;
      const rgb = on ? fg : bg;
      const i = (y * 8 + x) * 4;
      img.data[i] = rgb[0];
      img.data[i + 1] = rgb[1];
      img.data[i + 2] = rgb[2];
      img.data[i + 3] = 255;
    }
    ctx2.putImageData(img, 0, 0);
  }
  function drawPatternEditor(pattern, canvas2) {
    const ctx2 = canvas2.getContext("2d");
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    const cell = canvas2.width / 8;
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
      const on = (pattern[y] >> 7 - x & 1) === 1;
      ctx2.fillStyle = on ? "#111" : "#fff";
      ctx2.fillRect(x * cell, y * cell, cell, cell);
      ctx2.strokeStyle = "#999";
      ctx2.strokeRect(x * cell + 0.5, y * cell + 0.5, cell, cell);
    }
  }
  function drawPatternFillPreview(pattern, container, fgCode, bgCode) {
    container.innerHTML = "";
    for (let i = 0; i < 16; i++) {
      const c = document.createElement("canvas");
      c.width = 8;
      c.height = 8;
      drawPatternPreview(pattern, c, fgCode, bgCode);
      container.appendChild(c);
    }
  }
  var PATTERN_SETS = {
    default: { label: "Default Patterns", patterns: clonePatterns(DEFAULT_PATTERNS) },
    macpaint: { label: "MacPaint", patterns: [[0, 0, 0, 0, 0, 0, 0, 0], [136, 0, 34, 0, 136, 0, 34, 0], [170, 0, 170, 0, 170, 0, 170, 0], [170, 85, 170, 85, 170, 85, 170, 85], [204, 102, 51, 153, 204, 102, 51, 153], [240, 240, 240, 15, 15, 15, 15, 15], [129, 66, 36, 24, 24, 36, 66, 129], [17, 34, 68, 136, 17, 34, 68, 136], [255, 129, 129, 129, 129, 129, 129, 255], [24, 60, 126, 255, 255, 126, 60, 24], [51, 102, 204, 153, 51, 102, 204, 153], [1, 3, 7, 15, 31, 63, 127, 255], [128, 192, 224, 240, 248, 252, 254, 255], [24, 24, 60, 60, 126, 126, 255, 255], [255, 126, 126, 60, 60, 24, 24, 0], [221, 119, 221, 119, 221, 119, 221, 119]] },
    scottish: { label: "Scottish Patches", patterns: [[255, 255, 255, 255, 255, 255, 255, 255], [195, 195, 195, 195, 195, 195, 195, 195], [240, 240, 15, 15, 240, 240, 15, 15], [204, 204, 51, 51, 204, 204, 51, 51], [170, 85, 170, 85, 170, 85, 170, 85], [17, 17, 238, 238, 17, 17, 238, 238], [129, 66, 36, 24, 24, 36, 66, 129], [153, 153, 102, 102, 153, 153, 102, 102], [240, 204, 240, 204, 51, 15, 51, 15], [136, 136, 136, 255, 17, 17, 17, 255], [60, 60, 255, 255, 60, 60, 0, 0], [129, 66, 129, 66, 24, 24, 231, 231], [224, 224, 224, 28, 28, 28, 3, 3], [195, 102, 60, 24, 24, 60, 102, 195], [255, 0, 255, 0, 255, 0, 255, 0], [15, 30, 60, 120, 240, 120, 60, 30]] },
    rpg: { label: "RPG Terrain", patterns: [[255, 255, 255, 255, 255, 255, 255, 255], [34, 85, 34, 136, 34, 85, 34, 136], [24, 60, 126, 219, 255, 126, 60, 24], [129, 66, 36, 24, 24, 36, 66, 129], [0, 24, 60, 126, 60, 24, 0, 0], [3, 6, 12, 24, 48, 96, 192, 128], [170, 68, 170, 17, 170, 68, 170, 17], [238, 119, 187, 221, 238, 119, 187, 221], [24, 24, 90, 60, 24, 36, 102, 195], [240, 144, 240, 144, 15, 9, 15, 9], [17, 34, 17, 34, 68, 136, 68, 136], [51, 51, 0, 0, 51, 51, 204, 204], [8, 28, 62, 127, 62, 28, 8, 0], [193, 98, 52, 24, 12, 70, 131, 1], [255, 153, 36, 66, 36, 153, 255, 66], [0, 16, 56, 124, 254, 124, 56, 16]] },
    natural: { label: "Natural Elements", patterns: [[17, 34, 68, 136, 17, 34, 68, 136], [136, 68, 34, 17, 136, 68, 34, 17], [51, 51, 204, 204, 51, 51, 204, 204], [24, 36, 90, 165, 90, 36, 24, 0], [129, 195, 231, 255, 231, 195, 129, 0], [240, 240, 0, 0, 240, 240, 0, 0], [15, 15, 0, 0, 15, 15, 0, 0], [204, 102, 51, 153, 204, 102, 51, 153], [255, 195, 153, 102, 60, 102, 153, 195], [3, 7, 14, 28, 56, 112, 224, 192], [129, 66, 36, 90, 36, 66, 129, 0], [24, 24, 24, 255, 24, 24, 24, 255], [68, 170, 17, 68, 170, 17, 68, 170], [224, 112, 56, 28, 14, 7, 3, 1], [153, 85, 51, 17, 51, 85, 153, 255], [187, 221, 238, 119, 187, 221, 238, 119]] },
    scifi: { label: "Sci-Fi", patterns: [[0, 255, 0, 255, 0, 255, 0, 255], [24, 24, 255, 24, 24, 255, 24, 24], [195, 0, 60, 0, 195, 0, 60, 0], [129, 0, 24, 0, 129, 0, 24, 0], [240, 15, 240, 15, 240, 15, 240, 15], [15, 240, 15, 240, 15, 240, 15, 240], [60, 102, 195, 129, 129, 195, 102, 60], [255, 129, 129, 189, 189, 129, 129, 255], [129, 66, 36, 24, 24, 36, 66, 129], [34, 0, 136, 0, 34, 0, 136, 0], [204, 204, 0, 51, 51, 0, 204, 204], [0, 60, 102, 195, 195, 102, 60, 0], [153, 153, 0, 0, 153, 153, 255, 255], [255, 231, 195, 129, 129, 195, 231, 255], [24, 60, 126, 255, 24, 24, 24, 24], [255, 255, 129, 129, 129, 129, 255, 255]] }
  };

  // js/layers.js
  function makeLayer(state2, name) {
    return { name, visible: true, pix: new Uint16Array(state2.w * state2.h).fill(255), palette: new Uint8Array(DEFAULT_PALETTE) };
  }
  function mergeDown(state2, idx) {
    if (idx <= 0 || idx >= state2.layers.length) return false;
    const top = state2.layers[idx], bot = state2.layers[idx - 1];
    for (let i = 0; i < top.pix.length; i++) if (top.pix[i] !== 255) bot.pix[i] = top.pix[i];
    state2.layers.splice(idx, 1);
    state2.activeLayer = Math.max(0, idx - 1);
    return true;
  }
  function flattenLayers(state2) {
    const merged = new Uint16Array(state2.w * state2.h).fill(255);
    for (const layer of state2.layers) {
      if (!layer.visible) continue;
      for (let i = 0; i < merged.length; i++) if (layer.pix[i] !== 255) merged[i] = layer.pix[i];
    }
    const single = makeLayer(state2, "Layer 1");
    single.pix = merged;
    single.palette = new Uint8Array(state2.layers[0].palette);
    state2.layers = [single];
    state2.activeLayer = 0;
  }

  // js/coco_formats.js
  function unpackPacked(data, w, h, bpp) {
    const pix = new Uint16Array(w * h);
    let pi = 0;
    if (bpp === 4) {
      for (let i = 0; i < data.length && pi < pix.length; i++) {
        pix[pi++] = data[i] >> 4 & 15;
        if (pi < pix.length) pix[pi++] = data[i] & 15;
      }
    } else if (bpp === 2) {
      for (let i = 0; i < data.length && pi < pix.length; i++) {
        pix[pi++] = data[i] >> 6 & 3;
        if (pi < pix.length) pix[pi++] = data[i] >> 4 & 3;
        if (pi < pix.length) pix[pi++] = data[i] >> 2 & 3;
        if (pi < pix.length) pix[pi++] = data[i] & 3;
      }
    } else if (bpp === 1) {
      for (let i = 0; i < data.length && pi < pix.length; i++) {
        for (let b = 7; b >= 0 && pi < pix.length; b--) pix[pi++] = data[i] >> b & 1;
      }
    }
    return pix;
  }
  function parseMGE(buf, name) {
    const u = new Uint8Array(buf);
    if (u.length < 51) throw new Error("MGE too small");
    const palette2 = u.slice(1, 17);
    const compressed = u[18] === 0;
    const titleBytes = u.slice(19, 49);
    let title = "";
    for (const c of titleBytes) {
      if (!c) break;
      title += String.fromCharCode(c & 127);
    }
    let raw;
    if (compressed) {
      const out = [];
      for (let i = 51; i + 1 < u.length; i += 2) {
        const count = u[i], value = u[i + 1];
        if (count === 0) break;
        for (let j = 0; j < count; j++) out.push(value);
      }
      raw = new Uint8Array(out);
    } else raw = u.slice(51, 51 + 32e3);
    return { title: title || name, w: 320, h: 200, colors: 16, palette: Array.from(palette2), pix: unpackPacked(raw, 320, 200, 4), display: "rgb" };
  }
  function parseHRS(buf, name) {
    const u = new Uint8Array(buf);
    if (u.length < 16 + 30720) throw new Error("HRS too small");
    return { title: name, w: 320, h: 192, colors: 16, palette: Array.from(u.slice(0, 16)), pix: unpackPacked(u.slice(16, 16 + 30720), 320, 192, 4), display: "rgb" };
  }
  function parseRAT(buf, name) {
    const u = new Uint8Array(buf);
    if (u.length < 19) throw new Error("RAT too small");
    const esc = u[0], comp = u[1], pal = u.slice(2, 18);
    let raw;
    if (comp === 0) {
      raw = u.slice(19);
    } else {
      const out = [];
      for (let i = 19; i < u.length; i++) {
        const b = u[i];
        if (b === esc && i + 2 < u.length) {
          const reps = u[++i], val = u[++i];
          for (let j = 0; j < reps; j++) out.push(val);
        } else out.push(b);
      }
      raw = new Uint8Array(out);
    }
    return { title: name, w: 320, h: 199, colors: 16, palette: Array.from(pal), pix: unpackPacked(raw, 320, 199, 4), display: "rgb" };
  }
  function parseVEF(buf, name) {
    const u = new Uint8Array(buf);
    if (u.length < 18) throw new Error("VEF too small");
    const flags = u[0], type = u[1], pal = u.slice(2, 18), compressed = (flags & 128) !== 0;
    const table = { 0: [320, 200, 16, 4, 32e3], 1: [640, 200, 4, 2, 32e3], 2: [160, 200, 16, 4, 16e3], 3: [320, 200, 4, 2, 16e3], 4: [640, 200, 2, 1, 16e3] };
    if (!(type in table)) throw new Error("Unsupported VEF type");
    const [w, h, colors, bpp, size] = table[type];
    let raw;
    if (!compressed) {
      raw = u.slice(18, 18 + size);
    } else {
      const out = [];
      let i = 18;
      while (i < u.length && out.length < size) {
        const hdr = u[i++];
        if (i >= u.length) break;
        if (hdr < 128) {
          const count = hdr;
          for (let j = 0; j < count && i < u.length && out.length < size; j++) out.push(u[i++]);
        } else {
          const count = hdr - 128, val = u[i++];
          for (let j = 0; j < count && out.length < size; j++) out.push(val);
        }
      }
      raw = new Uint8Array(out);
    }
    return { title: name, w, h, colors, palette: Array.from(pal), pix: unpackPacked(raw, w, h, bpp), display: "rgb" };
  }
  function parseCM3(buf, name) {
    const u = new Uint8Array(buf);
    if (u.length < 29) throw new Error("CM3 too small");
    const flags = u[0], pal = u.slice(1, 17), twoPages = (flags & 128) !== 0, skipPatterns = (flags & 1) !== 0;
    const dataOff = 29 + (skipPatterns ? 0 : 243), h = twoPages ? 384 : 192, size = 320 * h / 2;
    const raw = u.slice(dataOff, dataOff + size);
    return { title: name, w: 320, h, colors: 16, palette: Array.from(pal), pix: unpackPacked(raw, 320, h, 4), display: "rgb" };
  }
  function parseImageFile(name, buf) {
    const lower = name.toLowerCase();
    if (lower.endsWith(".mge")) return parseMGE(buf, name);
    if (lower.endsWith(".hrs") || /\.hr\d?$/.test(lower)) return parseHRS(buf, name);
    if (lower.endsWith(".rat")) return parseRAT(buf, name);
    if (lower.endsWith(".vef")) return parseVEF(buf, name);
    if (lower.endsWith(".cm3")) return parseCM3(buf, name);
    throw new Error("Unsupported image format");
  }

  // js/dsk_reader.js
  function decodeAsciiName(bytes) {
    return Array.from(bytes).map((b) => String.fromCharCode((b || 32) & 127)).join("").replace(/\s+$/, "");
  }
  function scanDSK(buf) {
    const u = new Uint8Array(buf);
    if (u.length !== 161280) throw new Error("Only standard 161280-byte CoCo DSK images are supported in this build.");
    const trackOffset = (t) => t * 18 * 256, sectorOffset = (s) => (s - 1) * 256, dirStart = trackOffset(17) + sectorOffset(3), gmapStart = trackOffset(17) + sectorOffset(2);
    const dir = u.slice(dirStart, dirStart + 8 * 256), gmap = u.slice(gmapStart, gmapStart + 68);
    const granuleOffset = (g) => {
      let track = Math.floor(g / 2);
      if (track >= 17) track++;
      return trackOffset(track) + (g & 1 ? 9 * 256 : 0);
    };
    const entries = [];
    for (let e = 0; e < 72; e++) {
      const off = e * 32, firstByte = dir[off];
      if (firstByte === 0 || firstByte === 255) continue;
      const name = decodeAsciiName(dir.slice(off, off + 8)), ext = decodeAsciiName(dir.slice(off + 8, off + 11)), firstGran = dir[off + 13], lastSectorBytes = dir[off + 14] << 8 | dir[off + 15], fullName = ext ? `${name}.${ext}` : name;
      if (firstGran > 67) continue;
      const content = [];
      let gran = firstGran, guard = 0;
      while (guard++ < 300 && gran <= 67) {
        const next = gmap[gran], goff = granuleOffset(gran);
        if ((next & 192) === 192) {
          const usedSectors = next & 15;
          const bytes = (usedSectors ? usedSectors - 1 : 0) * 256 + (lastSectorBytes || 256);
          for (let i = 0; i < Math.min(bytes, 9 * 256); i++) content.push(u[goff + i]);
          break;
        } else {
          for (let i = 0; i < 9 * 256; i++) content.push(u[goff + i]);
          gran = next;
        }
      }
      entries.push({ name: fullName, ext: ext.toLowerCase(), data: new Uint8Array(content) });
    }
    return entries;
  }

  // js/io.js
  function download(blob, name) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 100);
  }
  function sanitizeFilename(name) {
    return (name || "Untitled").replace(/\s+\./g, ".").replace(/\s+/g, " ").trim().replace(/[\\/:*?"<>|]/g, "_");
  }
  function saveProject(state2) {
    const obj = { v: 8, title: state2.title, w: state2.w, h: state2.h, colors: state2.colors, display: state2.display, zoom: state2.zoom, fg: state2.fg, bg: state2.bg, grid: state2.grid, snap: state2.snap, gridSize: state2.gridSize, gridSizeY: state2.gridSizeY, aspect: state2.aspect, usePattern: state2.usePattern, patternIndex: state2.patternIndex, patterns: state2.patterns, activeLayer: state2.activeLayer, layers: state2.layers.map((l) => ({ name: l.name, visible: l.visible, palette: Array.from(l.palette), pix: Array.from(l.pix) })) };
    download(new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" }), `${sanitizeFilename(state2.title)}.c3p`);
  }
  function loadProjectObject(obj) {
    return { title: obj.title || "Untitled", w: obj.w, h: obj.h, colors: obj.colors, display: obj.display || "rgb", zoom: obj.zoom || 2, fg: obj.fg ?? 0, bg: obj.bg ?? 0, grid: !!obj.grid, snap: !!obj.snap, gridSize: obj.gridSize || 8, gridSizeY: obj.gridSizeY || obj.gridSize || 8, aspect: obj.aspect || "coco", usePattern: !!obj.usePattern, patternIndex: obj.patternIndex || 0, patterns: obj.patterns, activeLayer: obj.activeLayer || 0, layers: obj.layers.map((l, i) => ({ name: l.name || `Layer ${i + 1}`, visible: l.visible !== false, palette: new Uint8Array(l.palette), pix: new Uint16Array(l.pix) })) };
  }
  function savePaletteJSON(palette2) {
    download(new Blob([JSON.stringify({ palette: Array.from(palette2) }, null, 2)], { type: "application/json" }), "palette.json");
  }
  function savePatternsJSON(patterns) {
    download(new Blob([JSON.stringify({ patterns }, null, 2)], { type: "application/json" }), "patterns.json");
  }
  function exportBMP(flat, w, h, title) {
    const rowSize = w * 3 + 3 >> 2 << 2, imgSize = rowSize * h, fileSize = 54 + imgSize, ab = new ArrayBuffer(fileSize), dv = new DataView(ab), u8 = new Uint8Array(ab);
    let p = 0;
    dv.setUint8(p++, 66);
    dv.setUint8(p++, 77);
    dv.setUint32(p, fileSize, true);
    p += 4;
    dv.setUint32(p, 0, true);
    p += 4;
    dv.setUint32(p, 54, true);
    p += 4;
    dv.setUint32(p, 40, true);
    p += 4;
    dv.setInt32(p, w, true);
    p += 4;
    dv.setInt32(p, h, true);
    p += 4;
    dv.setUint16(p, 1, true);
    p += 2;
    dv.setUint16(p, 24, true);
    p += 2;
    dv.setUint32(p, 0, true);
    p += 4;
    dv.setUint32(p, imgSize, true);
    p += 4;
    dv.setInt32(p, 2835, true);
    p += 4;
    dv.setInt32(p, 2835, true);
    p += 4;
    dv.setUint32(p, 0, true);
    p += 4;
    dv.setUint32(p, 0, true);
    p += 4;
    let dst = 54;
    for (let y = h - 1; y >= 0; y--) {
      let row = dst;
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        u8[row++] = flat[i + 2];
        u8[row++] = flat[i + 1];
        u8[row++] = flat[i];
      }
      while (row - dst < rowSize) u8[row++] = 0;
      dst += rowSize;
    }
    download(new Blob([ab], { type: "image/bmp" }), `${sanitizeFilename(title)}.bmp`);
  }
  function exportRawIndexed(state2) {
    const bytes = new Uint8Array(state2.w * state2.h);
    let i = 0;
    const bg = state2.bg;
    for (let y = 0; y < state2.h; y++) for (let x = 0; x < state2.w; x++) {
      let idx = bg;
      for (const layer of state2.layers) {
        if (!layer.visible) continue;
        const v = layer.pix[y * state2.w + x];
        if (v !== 255) idx = v;
      }
      bytes[i++] = idx & 255;
    }
    download(new Blob([bytes], { type: "application/octet-stream" }), `${sanitizeFilename(state2.title)}.bin`);
  }

  // js/tools.js
  var TOOL_DEFS = [["select", "fa-solid fa-vector-square", "Select"], ["fixedSelect", "fa-regular fa-object-group", "Fixed Select"], ["picker", "fa-solid fa-eye-dropper", "Pick Color"], ["fill", "fa-solid fa-fill-drip", "Fill"], ["pencil", "fa-solid fa-pencil", "Pencil"], ["brush", "fa-solid fa-paintbrush", "Brush"], ["spray", "fa-solid fa-spray-can-sparkles", "Airbrush"], ["text", "fa-solid fa-a", "Text"], ["line", "fa-solid fa-slash", "Line"], ["stamp", "fa-solid fa-stamp", "Stamp"], ["rectOutline", "fa-regular fa-square", "Rectangle"], ["rectFill", "fa-solid fa-square", "Filled Rectangle"], ["ellipseOutline", "fa-regular fa-circle", "Ellipse"], ["ellipseFill", "fa-solid fa-circle", "Filled Ellipse"], ["pan", "fa-solid fa-hand", "Pan"], ["eraser", "fa-solid fa-eraser", "Eraser"]];
  function layerPix(state2, layer, x, y) {
    if (x < 0 || y < 0 || x >= state2.w || y >= state2.h) return 255;
    return layer.pix[y * state2.w + x];
  }
  function setLayerPix(state2, layer, x, y, v) {
    if (x < 0 || y < 0 || x >= state2.w || y >= state2.h) return;
    layer.pix[y * state2.w + x] = v;
  }
  function paintBrush(state2, layer, x, y, val) {
    const s = state2.brush, o = Math.floor(s / 2), pattern = state2.patterns[state2.patternIndex];
    for (let yy = y - o; yy < y - o + s; yy++) for (let xx = x - o; xx < x - o + s; xx++) {
      if (val === 255) setLayerPix(state2, layer, xx, yy, 255);
      else if (!state2.usePattern) setLayerPix(state2, layer, xx, yy, val);
      else setLayerPix(state2, layer, xx, yy, patternOn(pattern, xx, yy) ? val : state2.bg);
    }
  }
  function floodFill(state2, layer, x, y, target) {
    const stack = [[x, y]], seen = new Uint8Array(state2.w * state2.h), pattern = state2.patterns[state2.patternIndex];
    while (stack.length) {
      const [cx, cy] = stack.pop();
      if (cx < 0 || cy < 0 || cx >= state2.w || cy >= state2.h) continue;
      const idx = cy * state2.w + cx;
      if (seen[idx]) continue;
      seen[idx] = 1;
      if (layer.pix[idx] !== target) continue;
      layer.pix[idx] = !state2.usePattern ? state2.fg : patternOn(pattern, cx, cy) ? state2.fg : state2.bg;
      stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]);
    }
  }
  function normSel(sel) {
    if (!sel) return null;
    return { x0: Math.min(sel.x0, sel.x1), y0: Math.min(sel.y0, sel.y1), x1: Math.max(sel.x0, sel.x1), y1: Math.max(sel.y0, sel.y1) };
  }
  function linePoints(x0, y0, x1, y1) {
    const pts = [];
    let dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1, dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1, err = dx + dy;
    while (true) {
      pts.push([x0, y0]);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) {
        err += dy;
        x0 += sx;
      }
      if (e2 <= dx) {
        err += dx;
        y0 += sy;
      }
    }
    return pts;
  }
  function flipClipboardH(clip) {
    if (!clip) return clip;
    const out = new Uint16Array(clip.w * clip.h);
    for (let y = 0; y < clip.h; y++) for (let x = 0; x < clip.w; x++) out[y * clip.w + x] = clip.data[y * clip.w + (clip.w - 1 - x)];
    return { w: clip.w, h: clip.h, data: out };
  }
  function flipClipboardV(clip) {
    if (!clip) return clip;
    const out = new Uint16Array(clip.w * clip.h);
    for (let y = 0; y < clip.h; y++) for (let x = 0; x < clip.w; x++) out[y * clip.w + x] = clip.data[(clip.h - 1 - y) * clip.w + x];
    return { w: clip.w, h: clip.h, data: out };
  }
  function rotateClipboard(clip) {
    if (!clip) return clip;
    const out = new Uint16Array(clip.w * clip.h);
    for (let y = 0; y < clip.h; y++) for (let x = 0; x < clip.w; x++) {
      const nx = clip.h - 1 - y, ny = x;
      out[ny * clip.h + nx] = clip.data[y * clip.w + x];
    }
    return { w: clip.h, h: clip.w, data: out };
  }
  function resizeIndexed(src, sw, sh, dw, dh, algo = "nearest") {
    const out = new Uint16Array(dw * dh);
    for (let y = 0; y < dh; y++) for (let x = 0; x < dw; x++) {
      if (algo === "nearest") {
        const sx = Math.min(sw - 1, Math.floor(x * sw / dw)), sy = Math.min(sh - 1, Math.floor(y * sh / dh));
        out[y * dw + x] = src[sy * sw + sx];
      } else {
        const x0 = Math.floor(x * sw / dw), x1 = Math.min(sw - 1, Math.floor((x + 1) * sw / dw)), y0 = Math.floor(y * sh / dh), y1 = Math.min(sh - 1, Math.floor((y + 1) * sh / dh));
        const counts = /* @__PURE__ */ new Map();
        for (let yy = y0; yy <= y1; yy++) for (let xx = x0; xx <= x1; xx++) {
          const v = src[yy * sw + xx];
          counts.set(v, (counts.get(v) || 0) + 1);
        }
        let best = 0, bcount = -1;
        for (const [v, c] of counts) if (c > bcount) {
          bcount = c;
          best = v;
        }
        out[y * dw + x] = best;
      }
    }
    return out;
  }

  // js/filters.js
  function applyPaletteBrightnessContrast(palette2, brightness, contrast) {
    const out = new Uint8Array(palette2.length);
    const b = brightness / 100 * 128;
    const c = contrast / 100 + 1;
    for (let i = 0; i < palette2.length; i++) {
      const [r, g, b0] = cocoRGB222_to_rgb(palette2[i] & 63);
      const nr = clamp((r - 128) * c + 128 + b, 0, 255), ng = clamp((g - 128) * c + 128 + b, 0, 255), nb = clamp((b0 - 128) * c + 128 + b, 0, 255);
      out[i] = rgb_to_cocoRGB222(nr, ng, nb);
    }
    return out;
  }
  function applyOrderedDither(flat, w, h, palette2, maxColors) {
    const bayer = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
    const out = new Uint16Array(w * h);
    const pal = Array.from(palette2.slice(0, maxColors)).map((p) => cocoRGB222_to_rgb(p));
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      let r = flat[i], g = flat[i + 1], b = flat[i + 2];
      const n = (bayer[y & 3][x & 3] - 7.5) * 8;
      r = clamp(r + n, 0, 255);
      g = clamp(g + n, 0, 255);
      b = clamp(b + n, 0, 255);
      let best = 0, bd = 1e9;
      for (let p = 0; p < pal.length; p++) {
        const c = pal[p], d = (r - c[0]) ** 2 + (g - c[1]) ** 2 + (b - c[2]) ** 2;
        if (d < bd) {
          bd = d;
          best = p;
        }
      }
      out[y * w + x] = best;
    }
    return out;
  }
  function applyCheckerShade(src, w, h, maxColors) {
    const out = new Uint16Array(src);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if ((x + y & 1) === 1 && out[i] < maxColors - 1) out[i]++;
    }
    return out;
  }
  function applyOutline(src, w, h, lineIndex) {
    const out = new Uint16Array(src);
    for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
      const i = y * w + x, v = src[i];
      let edge = false;
      for (const o of [-1, 1, -w, w]) if (src[i + o] !== v) {
        edge = true;
        break;
      }
      if (edge) out[i] = lineIndex;
    }
    return out;
  }
  function invertPalette(palette2) {
    return new Uint8Array(Array.from(palette2).map((code) => nearestCocoCode(cocoRGB222_to_rgb(code).map((v) => 255 - v))));
  }
  function posterize2(palette2) {
    const out = new Uint8Array(palette2.length);
    for (let i = 0; i < palette2.length; i++) {
      const [r, g, b] = cocoRGB222_to_rgb(palette2[i]);
      const avg = (r + g + b) / 3;
      out[i] = rgb_to_cocoRGB222(avg < 128 ? 0 : 255, avg < 128 ? 0 : 255, avg < 128 ? 0 : 255);
    }
    return out;
  }
  function applyLowPass(src, w, h) {
    const out = new Uint16Array(src.length);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const counts = /* @__PURE__ */ new Map();
      for (let yy = Math.max(0, y - 1); yy <= Math.min(h - 1, y + 1); yy++) for (let xx = Math.max(0, x - 1); xx <= Math.min(w - 1, x + 1); xx++) {
        const v = src[yy * w + xx];
        counts.set(v, (counts.get(v) || 0) + 1);
      }
      let best = src[y * w + x], bc = -1;
      for (const [v, c] of counts) if (c > bc) {
        bc = c;
        best = v;
      }
      out[y * w + x] = best;
    }
    return out;
  }
  function applyHighPass(src, w, h, lineIndex = 1) {
    const out = new Uint16Array(src);
    for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
      const i = y * w + x, v = src[i];
      let diff = 0;
      for (const o of [-1, 1, -w, w]) if (src[i + o] !== v) diff++;
      out[i] = diff >= 2 ? lineIndex : v;
    }
    return out;
  }

  // js/app.js
  var $ = (s) => document.querySelector(s);
  var setClick = (id, fn) => {
    const el = $("#" + id);
    if (el) el.onclick = fn;
  };
  var canvas = $("#view");
  var overlay = $("#overlay");
  var ctx = canvas.getContext("2d", { alpha: false });
  var octx = overlay.getContext("2d");
  var modes = [];
  [192, 200, 225].forEach((h) => {
    modes.push({ w: 128, h, colors: [2, 4, 16] }, { w: 160, h, colors: [2, 4, 16] }, { w: 256, h, colors: [2, 4, 16] }, { w: 320, h, colors: [2, 4] }, { w: 512, h, colors: [2, 4] }, { w: 640, h, colors: [2] });
  });
  var state = { title: "Untitled", w: 320, h: 192, colors: 16, display: "rgb", zoom: 2, fg: 8, bg: 0, tool: "pencil", brush: 1, brushShape: "square", sprayDensity: 40, grid: false, snap: false, gridSize: 8, gridSizeY: 8, gridColor: "#808080", aspect: "coco", layers: [], activeLayer: 0, selection: null, clipboard: null, antsOffset: 0, shapePreview: null, panStart: null, undo: [], redo: [], patternIndex: 0, patterns: clonePatterns(DEFAULT_PATTERNS), projectDirty: false, currentDSK: null, usePattern: false, fixedSel: { w: 16, h: 16 }, textSettings: { font: "Arial", size: 16, style: "normal", align: "left", text: "TEXT" } };
  var savePromptAction = null;
  var patternEditDown = false;
  var patternDrawMode = 1;
  var slotRangeAnchor = null;
  var modal = { new: new bootstrap.Modal("#newModal"), save: new bootstrap.Modal("#savePromptModal"), disk: new bootstrap.Modal("#diskModal"), palette: new bootstrap.Modal("#paletteModal"), patterns: new bootstrap.Modal("#patternsModal"), grid: new bootstrap.Modal("#gridSizeModal"), resize: new bootstrap.Modal("#resizeModal"), bc: new bootstrap.Modal("#bcModal"), export: new bootstrap.Modal("#exportModal"), pencil: new bootstrap.Modal("#pencilModal"), brush: new bootstrap.Modal("#brushModal"), spray: new bootstrap.Modal("#sprayModal"), fixedSel: new bootstrap.Modal("#fixedSelModal"), text: new bootstrap.Modal("#textModal"), about: new bootstrap.Modal("#aboutModal") };
  function activeLayer() {
    return state.layers[state.activeLayer];
  }
  function activeColorCount() {
    return state.colors === 2 ? 2 : state.colors === 4 ? 4 : 16;
  }
  function centerCanvas() {
    requestAnimationFrame(() => {
      const wrap = $("#canvasWrap");
      wrap.scrollLeft = Math.max(0, (wrap.scrollWidth - wrap.clientWidth) / 2);
      wrap.scrollTop = Math.max(0, (wrap.scrollHeight - wrap.clientHeight) / 2);
    });
  }
  function markDirty() {
    state.projectDirty = true;
    updateTitle();
  }
  function clearDirty() {
    state.projectDirty = false;
    updateTitle();
  }
  function updateTitle() {
    $("#docTitle").textContent = state.title + (state.projectDirty ? " *" : "");
  }
  function refreshPaintModeButtons() {
    ["btnPaintFG", "btnPaintPattern"].forEach((id) => $("#" + id) && $("#" + id).classList.remove("active"));
    $("#btnPaintFG") && $("#btnPaintFG").classList.toggle("active", !state.usePattern);
    $("#btnPaintPattern") && $("#btnPaintPattern").classList.toggle("active", state.usePattern);
  }
  function snapPoint(x, y) {
    if (!state.snap) return [x, y];
    const gx = Math.max(1, state.gridSize || 1), gy = Math.max(1, state.gridSizeY || gx);
    return [Math.floor(x / gx) * gx, Math.floor(y / gy) * gy];
  }
  function populatePresetPaletteSelect() {
    const sel = $("#presetPalette");
    if (!sel) return;
    sel.innerHTML = "";
    const ph = document.createElement("option");
    ph.value = "";
    ph.textContent = "Preset Palette\u2026";
    sel.appendChild(ph);
    Object.entries(PRESET_PALETTES).forEach(([key, meta]) => {
      const o = document.createElement("option");
      o.value = key;
      o.textContent = meta.label;
      sel.appendChild(o);
    });
  }
  function palette() {
    return state.layers[0].palette;
  }
  function bytesForMode() {
    const bits = Math.log2(state.colors);
    return Math.ceil(state.w * state.h * bits / 8);
  }
  function clearActiveLayer() {
    activeLayer().pix.fill(state.bg);
  }
  function initDoc(w, h, colors, display) {
    state.title = "Untitled";
    state.w = w;
    state.h = h;
    state.colors = colors;
    state.display = display;
    state.zoom = 2;
    state.fg = Math.min(colors - 1, colors === 16 ? 8 : 0);
    state.bg = 0;
    state.layers = [makeLayer(state, "Layer 1")];
    palette().set(DEFAULT_PALETTE);
    clearActiveLayer();
    state.activeLayer = 0;
    state.selection = null;
    state.clipboard = null;
    state.undo = [];
    state.redo = [];
    state.patternIndex = 0;
    state.patterns = clonePatterns(DEFAULT_PATTERNS);
    state.usePattern = false;
    clearDirty();
    updateTitle();
    updateInfo();
    refreshAllUI();
    applyAspect();
    render();
    centerCanvas();
  }
  function importImage(doc) {
    state.title = (doc.title || "Imported").replace(/\s+$/, "");
    state.w = doc.w;
    state.h = doc.h;
    state.colors = doc.colors;
    state.display = doc.display || "rgb";
    state.zoom = 2;
    state.fg = Math.min(state.colors - 1, state.colors === 16 ? 8 : 0);
    state.bg = 0;
    state.layers = [{ name: "Layer 1", visible: true, pix: new Uint16Array(doc.pix), palette: new Uint8Array(16) }];
    state.layers[0].palette.set(doc.palette.slice(0, 16));
    state.activeLayer = 0;
    state.selection = null;
    state.clipboard = null;
    state.undo = [];
    state.redo = [];
    state.usePattern = false;
    clearDirty();
    updateTitle();
    updateInfo();
    refreshAllUI();
    applyAspect();
    render();
    centerCanvas();
  }
  function applyLoadedProject(obj) {
    const p = loadProjectObject(obj);
    Object.assign(state, p);
    state.patterns = p.patterns ? clonePatterns(p.patterns) : clonePatterns(DEFAULT_PATTERNS);
    state.zoom = 2;
    clearDirty();
    updateTitle();
    updateInfo();
    refreshAllUI();
    applyAspect();
    render();
    centerCanvas();
  }
  function serializeState() {
    return JSON.stringify({ title: state.title, w: state.w, h: state.h, colors: state.colors, display: state.display, fg: state.fg, bg: state.bg, grid: state.grid, snap: state.snap, gridSize: state.gridSize, aspect: state.aspect, usePattern: state.usePattern, patternIndex: state.patternIndex, patterns: state.patterns, activeLayer: state.activeLayer, layers: state.layers.map((l) => ({ name: l.name, visible: l.visible, pix: Array.from(l.pix), palette: Array.from(l.palette) })) });
  }
  function restoreFromSerialized(s) {
    applyLoadedProject(JSON.parse(s));
  }
  function pushUndo() {
    state.undo.push(serializeState());
    if (state.undo.length > 40) state.undo.shift();
    state.redo.length = 0;
  }
  function undo() {
    if (!state.undo.length) return;
    state.redo.push(serializeState());
    restoreFromSerialized(state.undo.pop());
    clearDirty();
    markDirty();
  }
  function redo() {
    if (!state.redo.length) return;
    state.undo.push(serializeState());
    restoreFromSerialized(state.redo.pop());
    clearDirty();
    markDirty();
  }
  function setZoom(z) {
    state.zoom = clamp(z, 0.25, 16);
    $("#zoomPct").textContent = `${Math.round(state.zoom * 100)}%`;
    applyAspect();
    centerCanvas();
  }
  function setDisplayMode(m) {
    state.display = m;
    updateInfo();
    render();
  }
  function setAspect(m) {
    state.aspect = m;
    applyAspect();
    updateInfo();
    render();
  }
  function applyAspect() {
    const sx = state.aspect === "coco" ? 4 / 3 / (state.w / state.h) : 1;
    const cw = Math.max(1, Math.round(state.w * state.zoom * sx)), ch = Math.max(1, Math.round(state.h * state.zoom));
    canvas.width = state.w;
    canvas.height = state.h;
    overlay.width = state.w;
    overlay.height = state.h;
    canvas.style.width = overlay.style.width = `${cw}px`;
    canvas.style.height = overlay.style.height = `${ch}px`;
    $("#canvasCenter").style.width = `${cw}px`;
    $("#canvasCenter").style.height = `${ch}px`;
  }
  function syncColorControls() {
    const code = palette()[state.fg] & 63;
    const rgb = cocoRGB222_to_rgb(code);
    const rEl = $("#rRange"), gEl = $("#gRange"), bEl = $("#bRange");
    if (rEl && gEl && bEl) {
      rEl.value = (code >> 5 & 1) * 2 + (code >> 2 & 1);
      gEl.value = (code >> 4 & 1) * 2 + (code >> 1 & 1);
      bEl.value = (code >> 3 & 1) * 2 + (code >> 0 & 1);
      if ($("#rVal")) $("#rVal").textContent = rEl.value;
      if ($("#gVal")) $("#gVal").textContent = gEl.value;
      if ($("#bVal")) $("#bVal").textContent = bEl.value;
    }
    if ($("#fgSwatch")) $("#fgSwatch").style.background = `rgb(${rgb.join(",")})`;
    if ($("#bgSwatch")) $("#bgSwatch").style.background = `rgb(${cocoRGB222_to_rgb(palette()[state.bg]).join(",")})`;
    const [rr, gg, bb] = rgb.map((v) => Math.round(v));
    const mx = Math.max(rr, gg, bb), mn = Math.min(rr, gg, bb), diff = mx - mn;
    let h = 0;
    if (diff) {
      if (mx === rr) h = (gg - bb) / diff % 6;
      else if (mx === gg) h = (bb - rr) / diff + 2;
      else h = (rr - gg) / diff + 4;
      h = Math.round(h * 60);
      if (h < 0) h += 360;
    }
    const sv = mx === 0 ? 0 : Math.round(diff / mx * 100), vv = Math.round(mx / 255 * 100);
    if ($("#hRange")) {
      $("#hRange").value = h;
      $("#sRange").value = sv;
      $("#vRange").value = vv;
      if ($("#hVal")) $("#hVal").textContent = h;
      if ($("#sVal")) $("#sVal").textContent = sv;
      if ($("#vVal")) $("#vVal").textContent = vv;
      if ($("#hexInput")) $("#hexInput").value = "#" + rgb.map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();
    }
    refreshPaletteUI();
    refreshPatternUI();
  }
  function refreshPaletteUI() {
    const max = activeColorCount();
    const bars = ["#paletteBar", "#slotPickerBar"];
    bars.forEach((sel) => {
      const bar = $(sel);
      if (!bar) return;
      bar.innerHTML = "";
      for (let i = 0; i < max; i++) {
        const div = document.createElement("div");
        div.className = "pal-slot";
        div.style.background = `rgb(${cocoRGB222_to_rgb(palette()[i]).join(",")})`;
        if (i === state.fg) div.classList.add("fg-selected");
        if (i === state.bg) div.classList.add("bg-selected");
        if (slotRangeAnchor === i && sel === "#slotPickerBar") div.classList.add("range-selected");
        div.onclick = () => {
          if (sel === "#slotPickerBar") {
            handleSlotPicker(i);
            return;
          }
          state.fg = i;
          syncColorControls();
        };
        div.oncontextmenu = (e) => {
          e.preventDefault();
          state.bg = i;
          syncColorControls();
        };
        bar.appendChild(div);
      }
    });
    const codes = [...Array(64).keys()].sort((a, b) => {
      const ar = cocoRGB222_to_rgb(a), br = cocoRGB222_to_rgb(b);
      const ah = (Math.atan2(Math.sqrt(3) * (ar[1] - ar[2]), 2 * ar[0] - ar[1] - ar[2]) + Math.PI) / (2 * Math.PI);
      const bh = (Math.atan2(Math.sqrt(3) * (br[1] - br[2]), 2 * br[0] - br[1] - br[2]) + Math.PI) / (2 * Math.PI);
      const as = Math.max(...ar) - Math.min(...ar), bs = Math.max(...br) - Math.min(...br), av = ar[0] + ar[1] + ar[2], bv = br[0] + br[1] + br[2];
      return ah - bh || bs - as || av - bv;
    });
    $("#allColorGrid").innerHTML = "";
    for (const c of codes) {
      const div = document.createElement("div");
      div.className = "all-color";
      div.style.background = `rgb(${cocoRGB222_to_rgb(c).join(",")})`;
      div.onclick = () => {
        palette()[state.fg] = c;
        syncColorControls();
        render();
        markDirty();
      };
      $("#allColorGrid").appendChild(div);
    }
  }
  function handleSlotPicker(slot) {
    const max = activeColorCount();
    if (slot >= max) return;
    if (slotRangeAnchor === null) {
      slotRangeAnchor = slot;
      state.fg = slot;
      refreshPaletteUI();
      return;
    }
    const a = Math.min(slotRangeAnchor, slot), b = Math.max(slotRangeAnchor, slot), c1 = cocoRGB222_to_rgb(palette()[a]), c2 = cocoRGB222_to_rgb(palette()[b]);
    for (let i = a; i <= b; i++) {
      const t = (i - a) / (b - a || 1);
      palette()[i] = rgb_to_cocoRGB222(c1[0] * (1 - t) + c2[0] * t, c1[1] * (1 - t) + c2[1] * t, c1[2] * (1 - t) + c2[2] * t);
    }
    slotRangeAnchor = null;
    syncColorControls();
    render();
    markDirty();
  }
  function refreshPatternUI() {
    const build = (hostSel, draggable) => {
      const bar = $(hostSel);
      bar.innerHTML = "";
      state.patterns.forEach((p, i) => {
        const t = document.createElement("div");
        t.className = "pattern-tile" + (i === state.patternIndex ? " active" : "");
        t.dataset.index = i;
        if (draggable) {
          t.draggable = true;
          t.addEventListener("dragstart", () => t.classList.add("dragging"));
          t.addEventListener("dragend", () => t.classList.remove("dragging"));
          t.addEventListener("dragover", (e) => {
            e.preventDefault();
            t.classList.add("drop-target");
          });
          t.addEventListener("dragleave", () => t.classList.remove("drop-target"));
          t.addEventListener("drop", (e) => {
            e.preventDefault();
            const from = [...bar.children].findIndex((n) => n.classList.contains("dragging"));
            const to = i;
            t.classList.remove("drop-target");
            if (from < 0 || from === to) return;
            const item = state.patterns.splice(from, 1)[0];
            state.patterns.splice(to, 0, item);
            state.patternIndex = to;
            refreshPatternUI();
            render();
            markDirty();
          });
        }
        const c = document.createElement("canvas");
        c.width = 8;
        c.height = 8;
        drawPatternPreview(p, c, palette()[state.fg], palette()[state.bg]);
        t.appendChild(c);
        t.onclick = () => {
          state.patternIndex = i;
          state.usePattern = true;
          refreshPaintModeButtons();
          refreshPatternUI();
          render();
        };
        bar.appendChild(t);
      });
    };
    build("#patternBar", false);
    build("#patternPickerGrid", true);
    drawPatternEditor(state.patterns[state.patternIndex], $("#patternEditor"));
    if ($("#patternPreview4x4")) drawPatternFillPreview(state.patterns[state.patternIndex], $("#patternPreview4x4"), palette()[state.fg], palette()[state.bg]);
  }
  function refreshLayersUI() {
    const list = $("#layerList");
    list.innerHTML = "";
    const order = state.layers.map((l, i) => i).reverse();
    order.forEach((idx) => {
      const layer = state.layers[idx], row = document.createElement("div");
      row.className = "layer-row" + (idx === state.activeLayer ? " active" : "");
      const eye = document.createElement("button");
      eye.className = "btn mac-icon-btn eye-btn";
      eye.innerHTML = `<i class="fa-${layer.visible ? "solid" : "regular"} fa-eye"></i>`;
      eye.onclick = () => {
        layer.visible = !layer.visible;
        refreshLayersUI();
        render();
        markDirty();
      };
      const input = document.createElement("input");
      input.className = "form-control form-control-sm";
      input.value = layer.name;
      input.onfocus = () => state.activeLayer = idx;
      input.onchange = () => {
        layer.name = input.value || layer.name;
        markDirty();
      };
      input.onclick = () => {
        state.activeLayer = idx;
        refreshLayersUI();
      };
      row.append(eye, input);
      row.onclick = (e) => {
        if (e.target === input || e.target.closest("button")) return;
        state.activeLayer = idx;
        refreshLayersUI();
      };
      list.appendChild(row);
    });
    updateInfo();
  }
  function updateInfo() {
    $("#infoImage").textContent = `${state.w} \xD7 ${state.h}`;
    $("#infoColors").textContent = String(state.colors);
    $("#infoDisplay").textContent = state.display === "rgb" ? "RGB" : state.display === "composite" ? "Composite" : "Artifact";
    $("#infoLayers").textContent = String(state.layers.length);
    $("#infoGrid").textContent = state.grid ? `${state.gridSize}px${state.snap ? " snap" : ""}` : "Off";
    const s = normSel(state.selection);
    $("#infoSelection").textContent = s ? `${s.x1 - s.x0 + 1} \xD7 ${s.y1 - s.y0 + 1}` : "\u2014";
    $("#infoMemory").textContent = `${bytesForMode().toLocaleString()} Bytes`;
  }
  function buildToolGrid() {
    const grid = $("#toolGrid");
    TOOL_DEFS.forEach(([name, icon, title]) => {
      const b = document.createElement("button");
      b.className = "btn tool-btn";
      b.title = title;
      b.innerHTML = `<i class="${icon}"></i>`;
      b.onclick = () => setTool(name);
      b.dataset.tool = name;
      grid.appendChild(b);
    });
  }
  function setTool(name) {
    state.tool = name;
    state.selection = null;
    state.shapePreview = null;
    [...document.querySelectorAll(".tool-btn")].forEach((b) => b.classList.toggle("active", b.dataset.tool === name));
    canvas.className = "";
    const map = { pan: "cursor-pan", text: "cursor-text", picker: "cursor-picker", stamp: "cursor-stamp", fill: "cursor-fill", select: "cursor-select", fixedSelect: "cursor-select" };
    canvas.classList.add(map[name] || "cursor-crosshair");
    render();
  }
  function toImageXY(ev) {
    const rect = canvas.getBoundingClientRect(), sx = state.aspect === "coco" ? 4 / 3 / (state.w / state.h) : 1;
    return [Math.floor((ev.clientX - rect.left) / (state.zoom * sx)), Math.floor((ev.clientY - rect.top) / state.zoom)];
  }
  function flattenPreview() {
    const out = new Uint8ClampedArray(state.w * state.h * 4), pal = palette();
    for (let y = 0; y < state.h; y++) for (let x = 0; x < state.w; x++) {
      let idx = state.bg;
      for (const layer of state.layers) {
        if (!layer.visible) continue;
        const v = layer.pix[y * state.w + x];
        if (v !== 255) idx = v;
      }
      let rgb;
      if (state.display === "artifact" && state.colors === 2) {
        const getb = (xx) => {
          let vv = state.bg;
          for (const layer of state.layers) {
            if (!layer.visible) continue;
            const q = layer.pix[y * state.w + clamp(xx, 0, state.w - 1)];
            if (q !== 255) vv = q;
          }
          return vv & 1;
        };
        const bit = getb(x), lb = getb(x - 1), rb = getb(x + 1);
        rgb = bit ? artifact_color_for(x, lb, bit, rb) : cocoRGB222_to_rgb(pal[state.bg] & 63);
      } else {
        rgb = state.display === "rgb" ? cocoRGB222_to_rgb(pal[idx] & 63) : state.display === "composite" ? cocoComposite_to_rgb(pal[idx] & 63) : state.display === "monoGreen" ? [0, Math.round(cocoRGB222_to_rgb(pal[idx] & 63).reduce((a, b) => a + b, 0) / 3), 0] : state.display === "monoAmber" ? [Math.round(cocoRGB222_to_rgb(pal[idx] & 63).reduce((a, b) => a + b, 0) / 3), 191, 0] : state.display === "monoWhite" ? (() => {
          const l = Math.round(cocoRGB222_to_rgb(pal[idx] & 63).reduce((a, b) => a + b, 0) / 3);
          return [l, l, l];
        })() : cocoComposite_to_rgb(pal[idx] & 63);
      }
      const i = (y * state.w + x) * 4;
      out[i] = rgb[0];
      out[i + 1] = rgb[1];
      out[i + 2] = rgb[2];
      out[i + 3] = 255;
    }
    return out;
  }
  function drawOverlay(hover) {
    octx.clearRect(0, 0, state.w, state.h);
    if (state.grid && state.zoom >= 2) {
      octx.strokeStyle = state.gridColor || "rgba(0,0,0,.18)";
      for (let x = 0; x <= state.w; x += state.gridSize) {
        octx.beginPath();
        octx.moveTo(x + 0.5, 0);
        octx.lineTo(x + 0.5, state.h);
        octx.stroke();
      }
      for (let y = 0; y <= state.h; y += state.gridSizeY) {
        octx.beginPath();
        octx.moveTo(0, y + 0.5);
        octx.lineTo(state.w, y + 0.5);
        octx.stroke();
      }
    }
    if (state.shapePreview) {
      const p = state.shapePreview, minx = Math.min(p.x0, p.x1), maxx = Math.max(p.x0, p.x1), miny = Math.min(p.y0, p.y1), maxy = Math.max(p.y0, p.y1);
      octx.save();
      octx.setLineDash([3, 2]);
      octx.strokeStyle = "rgba(0,0,0,.85)";
      if (p.tool === "line") {
        octx.beginPath();
        octx.moveTo(p.x0, p.y0);
        octx.lineTo(p.x1, p.y1);
        octx.stroke();
      } else if (p.tool.startsWith("rect")) octx.strokeRect(minx + 0.5, miny + 0.5, maxx - minx + 1, maxy - miny + 1);
      else if (p.tool.startsWith("ellipse")) {
        octx.beginPath();
        octx.ellipse((minx + maxx) / 2, (miny + maxy) / 2, (maxx - minx + 1) / 2, (maxy - miny + 1) / 2, 0, 0, Math.PI * 2);
        octx.stroke();
      }
      octx.restore();
    }
    const s = normSel(state.selection);
    if (s) {
      octx.save();
      octx.setLineDash([3, 3]);
      octx.lineDashOffset = -state.antsOffset / 2;
      octx.strokeStyle = "rgba(0,0,0,.9)";
      octx.strokeRect(s.x0 + 0.5, s.y0 + 0.5, s.x1 - s.x0 + 1, s.y1 - s.y0 + 1);
      octx.lineDashOffset = -(state.antsOffset + 3) / 2;
      octx.strokeStyle = "rgba(255,255,255,.9)";
      octx.strokeRect(s.x0 + 0.5, s.y0 + 0.5, s.x1 - s.x0 + 1, s.y1 - s.y0 + 1);
      octx.restore();
    }
    if (hover && ["eraser", "brush", "pencil"].includes(state.tool)) {
      const o = Math.floor(state.brush / 2);
      octx.save();
      octx.setLineDash([2, 2]);
      octx.strokeStyle = "rgba(0,0,0,.85)";
      octx.strokeRect(hover.x - o + 0.5, hover.y - o + 0.5, state.brush, state.brush);
      octx.restore();
    }
    if (hover && state.tool === "fixedSelect") {
      const w = Math.min(state.fixedSel.w, state.w), h = Math.min(state.fixedSel.h, state.h);
      octx.save();
      octx.setLineDash([3, 3]);
      octx.strokeStyle = "rgba(0,0,0,.9)";
      octx.strokeRect(hover.x + 0.5, hover.y + 0.5, Math.min(w, state.w - hover.x), Math.min(h, state.h - hover.y));
      octx.restore();
    }
    if (hover && state.tool === "stamp" && state.clipboard) {
      octx.save();
      octx.globalAlpha = 0.75;
      for (let y = 0; y < state.clipboard.h; y++) for (let x = 0; x < state.clipboard.w; x++) {
        const v = state.clipboard.data[y * state.clipboard.w + x];
        if (v === 255) continue;
        octx.fillStyle = `rgb(${cocoRGB222_to_rgb(palette()[v]).join(",")})`;
        octx.fillRect(hover.x + x, hover.y + y, 1, 1);
      }
      octx.restore();
    }
  }
  function render(hover = null) {
    ctx.imageSmoothingEnabled = false;
    const flat = flattenPreview();
    ctx.putImageData(new ImageData(flat, state.w, state.h), 0, 0);
    drawOverlay(hover);
    refreshLayersUI();
    updateInfo();
  }
  function copySelection(cut = false) {
    const s = normSel(state.selection);
    if (!s) return;
    const w = s.x1 - s.x0 + 1, h = s.y1 - s.y0 + 1, data = new Uint16Array(w * h).fill(255), layer = activeLayer();
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const v = layerPix(state, layer, s.x0 + x, s.y0 + y);
      data[y * w + x] = v;
      if (cut && v !== 255) setLayerPix(state, layer, s.x0 + x, s.y0 + y, 255);
    }
    state.clipboard = { w, h, data };
    if (cut) {
      markDirty();
      render();
    }
  }
  function pasteClipboard(x = 0, y = 0) {
    if (!state.clipboard) return;
    const s = normSel(state.selection);
    if (arguments.length === 0 && s) {
      x = s.x0;
      y = s.y0;
    }
    pushUndo();
    const layer = activeLayer();
    for (let yy = 0; yy < state.clipboard.h; yy++) for (let xx = 0; xx < state.clipboard.w; xx++) {
      const v = state.clipboard.data[yy * state.clipboard.w + xx];
      if (v !== 255) setLayerPix(state, layer, x + xx, y + yy, v);
    }
    markDirty();
    render();
  }
  function askBeforeLoss(action) {
    if (!state.projectDirty) {
      action();
      return;
    }
    savePromptAction = action;
    modal.save.show();
  }
  function populateModeSelects() {
    const res = $("#newRes");
    res.innerHTML = "";
    modes.forEach((m, i) => {
      const o = document.createElement("option");
      o.value = `${m.w}x${m.h}`;
      o.textContent = `${m.w} \xD7 ${m.h}`;
      if (m.w === 320 && m.h === 192) o.selected = true;
      res.appendChild(o);
    });
    updateNewModalDepths();
    const rsel = $("#resizeMode");
    rsel.innerHTML = "";
    modes.forEach((m) => {
      const o = document.createElement("option");
      o.value = `${m.w}x${m.h}`;
      o.textContent = `${m.w} \xD7 ${m.h} (${m.colors.join("/")})`;
      rsel.appendChild(o);
    });
  }
  function updateNewModalDepths() {
    const [w, h] = $("#newRes").value.split("x").map(Number);
    const mode = modes.find((m) => m.w === w && m.h === h);
    const depth = $("#newDepth");
    depth.innerHTML = "";
    mode.colors.forEach((c) => {
      const o = document.createElement("option");
      o.value = c;
      o.textContent = `${c} colors`;
      depth.appendChild(o);
    });
    depth.value = String(mode.colors.includes(state.colors) ? state.colors : mode.colors[mode.colors.length - 1]);
    $("#modeHelp").textContent = (h === 225 ? "225-line mode available." : "") + " Width and color options are limited to supported CoCo 3 bitmap modes.";
  }
  function openSelectedDSK() {
    if (!state.currentDSK) return;
    showDiskBrowser(state.currentDSK.entries, state.currentDSK.name);
  }
  function showDiskBrowser(entries, name) {
    const list = $("#diskList");
    list.innerHTML = "";
    if (!entries.length) list.innerHTML = '<div class="text-muted small">No supported CoCo image files found in this DSK.</div>';
    entries.filter((e) => /\.(mge|hrs|hr|hr1|hr2|hr3|rat|vef|cm3)$/i.test(e.name)).forEach((entry) => {
      const row = document.createElement("div");
      row.className = "layer-row";
      const meta = document.createElement("div");
      meta.className = "flex-grow-1";
      meta.innerHTML = `<div><strong>${entry.name}</strong></div><div class="small text-muted">${entry.data.length} bytes</div>`;
      const btn = document.createElement("button");
      btn.className = "btn mac-btn";
      btn.textContent = "Load";
      btn.onclick = () => {
        askBeforeLoss(() => {
          importImage(parseImageFile(entry.name, entry.data.buffer));
          modal.disk.hide();
        });
      };
      row.append(meta, btn);
      list.appendChild(row);
    });
    $("#miReopenDsk").textContent = `Selected: ${name}`;
    $("#miReopenDsk").disabled = false;
    modal.disk.show();
  }
  function applyFilter(name) {
    pushUndo();
    const layer = activeLayer();
    if (name === "orderedDither") {
      const flat = flattenPreview();
      layer.pix = applyOrderedDither(flat, state.w, state.h, palette(), activeColorCount());
    } else if (name === "checkerShade") {
      layer.pix = applyCheckerShade(layer.pix, state.w, state.h, activeColorCount());
    } else if (name === "outline") {
      layer.pix = applyOutline(layer.pix, state.w, state.h, Math.min(activeColorCount() - 1, 1));
    } else if (name === "invertPalette") {
      state.layers.forEach((l) => l.palette = invertPalette(l.palette));
      syncColorControls();
    } else if (name === "lowPass") {
      layer.pix = applyLowPass(layer.pix, state.w, state.h);
    } else if (name === "highPass") {
      layer.pix = applyHighPass(layer.pix, state.w, state.h, Math.min(activeColorCount() - 1, 1));
    } else if (name === "posterize2") {
      state.layers.forEach((l) => l.palette = posterize2(l.palette));
      syncColorControls();
    }
    markDirty();
    render();
  }
  function refreshAllUI() {
    populatePresetPaletteSelect();
    syncColorControls();
    refreshPatternUI();
    refreshLayersUI();
    refreshPaintModeButtons();
    updateTitle();
    updateInfo();
  }
  buildToolGrid();
  populateModeSelects();
  populatePresetPaletteSelect();
  initDoc(320, 192, 16, "rgb");
  setTool("pencil");
  setTool("pencil");
  setAspect("coco");
  $("#miNew").onclick = () => askBeforeLoss(() => {
    updateNewModalDepths();
    modal.new.show();
  });
  $("#btnNewCreate").onclick = () => {
    const [w, h] = $("#newRes").value.split("x").map(Number);
    initDoc(w, h, parseInt($("#newDepth").value, 10), $("#newDisplay").value);
    modal.new.hide();
  };
  $("#newRes").onchange = updateNewModalDepths;
  $("#miOpenProject").onclick = () => askBeforeLoss(() => $("#projectOpen").click());
  $("#projectOpen").addEventListener("change", async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    try {
      applyLoadedProject(JSON.parse(await f.text()));
    } catch (err) {
      alert("Project open failed: " + err.message);
    }
    e.target.value = "";
  });
  $("#miOpenImage").onclick = () => askBeforeLoss(() => $("#imageOpen").click());
  $("#imageOpen").addEventListener("change", async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    try {
      const lower = f.name.toLowerCase(), buf = await f.arrayBuffer();
      if (lower.endsWith(".dsk")) {
        const entries = scanDSK(buf);
        state.currentDSK = { name: f.name, entries };
        showDiskBrowser(entries, f.name);
      } else importImage(parseImageFile(f.name, buf));
    } catch (err) {
      alert("Open failed: " + err.message);
    }
    e.target.value = "";
  });
  $("#miReopenDsk").onclick = openSelectedDSK;
  $("#miSave").onclick = () => {
    saveProject(state);
    clearDirty();
  };
  $("#miExportImage").onclick = () => {
    $("#exportFilename").value = sanitizeFilename(state.title);
    $("#exportDestination").value = "filesystem";
    modal.export.show();
  };
  $("#btnSavePromptCancel").onclick = () => modal.save.hide();
  $("#btnSavePromptDiscard").onclick = () => {
    modal.save.hide();
    if (savePromptAction) savePromptAction();
  };
  $("#btnSavePromptSave").onclick = () => {
    saveProject(state);
    clearDirty();
    modal.save.hide();
    if (savePromptAction) savePromptAction();
  };
  $("#btnExportApply").onclick = () => {
    const fmt = $("#exportFormat").value;
    const dest = $("#exportDestination").value;
    state.title = ($("#exportFilename").value || state.title).trim() || state.title;
    if (dest === "dsk") {
      alert("Saving directly back into a CoCo disk image is not finished in v1.0.8. Please export to the computer file system for now.");
      return;
    }
    const flat = flattenPreview();
    if (fmt === "bmp") {
      exportBMP(flat, state.w, state.h, state.title);
    } else if (fmt === "png") {
      const c = document.createElement("canvas");
      c.width = state.w;
      c.height = state.h;
      c.getContext("2d").putImageData(new ImageData(flat, state.w, state.h), 0, 0);
      c.toBlob((b) => {
        const u = URL.createObjectURL(b);
        const a = document.createElement("a");
        a.href = u;
        a.download = `${sanitizeFilename(state.title)}.png`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(u), 500);
      }, "image/png");
    } else {
      exportRawIndexed(state);
    }
    modal.export.hide();
  };
  $("#miUndo").onclick = undo;
  $("#miRedo").onclick = redo;
  $("#miCut").onclick = () => copySelection(true);
  $("#miCopy").onclick = () => copySelection(false);
  $("#miPaste").onclick = () => pasteClipboard();
  $("#miClear").onclick = () => {
    pushUndo();
    clearActiveLayer();
    markDirty();
    render();
  };
  $("#miClipFlipH").onclick = () => {
    state.clipboard = flipClipboardH(state.clipboard);
    render();
  };
  $("#miClipFlipV").onclick = () => {
    state.clipboard = flipClipboardV(state.clipboard);
    render();
  };
  $("#miClipRotate").onclick = () => {
    state.clipboard = rotateClipboard(state.clipboard);
    render();
  };
  $("#miFlipH").onclick = () => {
    pushUndo();
    for (const l of state.layers) {
      const out = new Uint16Array(l.pix.length);
      for (let y = 0; y < state.h; y++) for (let x = 0; x < state.w; x++) out[y * state.w + x] = l.pix[y * state.w + (state.w - 1 - x)];
      l.pix = out;
    }
    markDirty();
    render();
  };
  $("#miFlipV").onclick = () => {
    pushUndo();
    for (const l of state.layers) {
      const out = new Uint16Array(l.pix.length);
      for (let y = 0; y < state.h; y++) for (let x = 0; x < state.w; x++) out[y * state.w + x] = l.pix[(state.h - 1 - y) * state.w + x];
      l.pix = out;
    }
    markDirty();
    render();
  };
  setClick("miRotate", () => {
    alert("Rotate is currently limited to square-friendly content. Use Resize / Convert Mode for full mode changes.");
  });
  $("#miResize").onclick = () => modal.resize.show();
  $("#btnResizeApply").onclick = () => {
    pushUndo();
    const [w, h] = $("#resizeMode").value.split("x").map(Number);
    const algo = $("#resizeAlgo").value;
    for (const l of state.layers) {
      l.pix = resizeIndexed(l.pix, state.w, state.h, w, h, algo);
    }
    state.w = w;
    state.h = h;
    const m = modes.find((x) => x.w === w && x.h === h);
    state.colors = Math.min(state.colors, Math.max(...m.colors));
    state.fg = Math.min(state.fg, state.colors - 1);
    state.bg = Math.min(state.bg, state.colors - 1);
    updateInfo();
    syncColorControls();
    applyAspect();
    markDirty();
    render();
    centerCanvas();
    modal.resize.hide();
  };
  $("#miBrightness").onclick = () => modal.bc.show();
  $("#btnBCApply").onclick = () => {
    pushUndo();
    const b = parseInt($("#brightnessRange").value, 10), c = parseInt($("#contrastRange").value, 10);
    state.layers.forEach((l) => l.palette = applyPaletteBrightnessContrast(l.palette, b, c));
    syncColorControls();
    markDirty();
    render();
    modal.bc.hide();
  };
  [...document.querySelectorAll(".filter-item")].forEach((b) => b.onclick = () => applyFilter(b.dataset.filter));
  $("#miGrid").onclick = () => {
    state.grid = !state.grid;
    render();
  };
  $("#miSnap").onclick = () => {
    state.snap = !state.snap;
  };
  $("#miGridSize").onclick = () => {
    $("#gridSizeInputX").value = state.gridSize;
    $("#gridSizeInputY").value = state.gridSizeY;
    $("#gridColorInput").value = state.gridColor;
    modal.grid.show();
  };
  $("#btnGridSizeApply").onclick = () => {
    state.gridSize = Math.max(1, parseInt($("#gridSizeInputX").value, 10) || state.gridSize);
    state.gridSizeY = Math.max(1, parseInt($("#gridSizeInputY").value, 10) || state.gridSizeY);
    state.gridColor = $("#gridColorInput").value || state.gridColor;
    render();
    modal.grid.hide();
  };
  $("#miDispRGB").onclick = () => setDisplayMode("rgb");
  $("#miDispComposite").onclick = () => setDisplayMode("composite");
  $("#miDispArtifact").onclick = () => setDisplayMode("artifact");
  $("#miDispMonoWhite") && ($("#miDispMonoWhite").onclick = () => setDisplayMode("monoWhite"));
  $("#miDispMonoGreen") && ($("#miDispMonoGreen").onclick = () => setDisplayMode("monoGreen"));
  $("#miDispMonoAmber") && ($("#miDispMonoAmber").onclick = () => setDisplayMode("monoAmber"));
  $("#miAspectModern").onclick = () => setAspect("modern");
  $("#miAspectCoco").onclick = () => setAspect("coco");
  $("#miAbout") && ($("#miAbout").onclick = () => modal.about.show());
  $("#brushSize") && ($("#brushSize").oninput = () => {
    state.brush = parseInt($("#brushSize").value, 10);
    $("#brushSizeVal").textContent = `${state.brush} px`;
  });
  $("#pencilSizeRange") && ($("#pencilSizeRange").oninput = () => {
    state.brush = parseInt($("#pencilSizeRange").value, 10);
    $("#pencilSizeVal").textContent = `${state.brush} px`;
  });
  $("#sprayDensity") && ($("#sprayDensity").oninput = () => {
    state.sprayDensity = parseInt($("#sprayDensity").value, 10);
    $("#sprayDensityVal").textContent = String(state.sprayDensity);
  });
  $("#spraySize") && ($("#spraySize").oninput = () => {
    state.brush = parseInt($("#spraySize").value, 10);
    $("#spraySizeVal").textContent = `${state.brush} px`;
  });
  $("#brushShape") && ($("#brushShape").onchange = () => state.brushShape = $("#brushShape").value);
  $("#fixedSelW").oninput = () => state.fixedSel.w = Math.max(1, parseInt($("#fixedSelW").value, 10) || 1);
  $("#fixedSelH").oninput = () => state.fixedSel.h = Math.max(1, parseInt($("#fixedSelH").value, 10) || 1);
  $("#btnPaintFG").onclick = () => {
    state.usePattern = false;
    refreshPaintModeButtons();
    render();
  };
  $("#btnPaintPattern").onclick = () => {
    state.usePattern = true;
    refreshPaintModeButtons();
    render();
  };
  $("#swapFG").onclick = () => {
    const t = state.fg;
    state.fg = state.bg;
    state.bg = t;
    syncColorControls();
  };
  ["rRange", "gRange", "bRange"].forEach((id) => {
    const el = $("#" + id);
    if (el) el.oninput = () => {
      const r = +$("#rRange").value, g = +$("#gRange").value, b = +$("#bRange").value;
      if ($("#rVal")) $("#rVal").textContent = r;
      if ($("#gVal")) $("#gVal").textContent = g;
      if ($("#bVal")) $("#bVal").textContent = b;
      palette()[state.fg] = (r >> 1 & 1) << 5 | (g >> 1 & 1) << 4 | (b >> 1 & 1) << 3 | (r & 1) << 2 | (g & 1) << 1 | b & 1;
      syncColorControls();
      render();
      markDirty();
    };
  });
  ["hRange", "sRange", "vRange"].forEach((id) => {
    const el = $("#" + id);
    if (el) el.oninput = () => {
      const h = +$("#hRange").value / 360, s = +$("#sRange").value / 100, v = +$("#vRange").value / 100;
      if ($("#hVal")) $("#hVal").textContent = Math.round(h * 360);
      if ($("#sVal")) $("#sVal").textContent = Math.round(s * 100);
      if ($("#vVal")) $("#vVal").textContent = Math.round(v * 100);
      const rgb = hsvToRgb(h, s, v);
      palette()[state.fg] = rgb_to_cocoRGB222(...rgb);
      syncColorControls();
      render();
      markDirty();
    };
  });
  $("#hexInput") && ($("#hexInput").onchange = () => {
    const m = $("#hexInput").value.trim().match(/^#?([0-9a-fA-F]{6})$/);
    if (!m) return;
    const n = parseInt(m[1], 16);
    palette()[state.fg] = rgb_to_cocoRGB222(n >> 16 & 255, n >> 8 & 255, n & 255);
    syncColorControls();
    render();
    markDirty();
  });
  $("#btnSelectColors").onclick = () => {
    slotRangeAnchor = null;
    refreshPaletteUI();
    modal.palette.show();
  };
  $("#btnSlotAdd") && ($("#btnSlotAdd").onclick = () => {
    if (state.colors < 16) {
      state.colors = state.colors === 2 ? 4 : 16;
      updateInfo();
      refreshPaletteUI();
      render();
      markDirty();
    }
  });
  $("#btnSlotDelete") && ($("#btnSlotDelete").onclick = () => {
    if (state.colors > 2) {
      for (let i = state.colors - 1; i >= state.colors / 2; i--) palette()[i] = 0;
      state.colors = state.colors === 16 ? 4 : 2;
      state.fg = Math.min(state.fg, state.colors - 1);
      state.bg = Math.min(state.bg, state.colors - 1);
      updateInfo();
      syncColorControls();
      render();
      markDirty();
    }
  });
  $("#btnPaletteSave").onclick = () => savePaletteJSON(palette());
  $("#btnPaletteLoad").onclick = () => $("#paletteOpen").click();
  $("#paletteOpen").addEventListener("change", async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    try {
      const obj = JSON.parse(await f.text());
      if (Array.isArray(obj.palette)) {
        const max = activeColorCount();
        for (let i = 0; i < 16; i++) palette()[i] = i < Math.min(max, obj.palette.length) ? obj.palette[i] & 63 : 0;
        syncColorControls();
        render();
        markDirty();
      }
    } catch (err) {
      alert("Palette load failed: " + err.message);
    }
    e.target.value = "";
  });
  $("#presetPalette").onchange = () => {
    const val = $("#presetPalette").value;
    if (!val) return;
    const mapped = mappedPreset(val);
    if (mapped.length) {
      const max = activeColorCount();
      for (let i = 0; i < 16; i++) palette()[i] = i < Math.min(max, mapped.length) ? mapped[i] : 0;
      syncColorControls();
      render();
      markDirty();
    }
  };
  $("#btnManagePatterns").onclick = () => {
    refreshPatternUI();
    modal.patterns.show();
  };
  $("#patternSetSelect") && ($("#patternSetSelect").onchange = () => {
    const v = $("#patternSetSelect").value;
    if (PATTERN_SETS[v]) {
      state.patterns = clonePatterns(PATTERN_SETS[v].patterns);
      state.patternIndex = 0;
      refreshPatternUI();
      render();
      markDirty();
    }
  });
  $("#btnPatternsSave").onclick = () => savePatternsJSON(state.patterns);
  $("#btnPatternsLoad").onclick = () => $("#patternsOpen").click();
  $("#patternsOpen").addEventListener("change", async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    try {
      const obj = JSON.parse(await f.text());
      if (Array.isArray(obj.patterns) && obj.patterns.length === 16) {
        state.patterns = clonePatterns(obj.patterns);
        refreshPatternUI();
        render();
        markDirty();
      }
    } catch (err) {
      alert("Pattern load failed: " + err.message);
    }
    e.target.value = "";
  });
  $("#patternEditor").addEventListener("pointerdown", (e) => {
    patternEditDown = true;
    const r = e.target.getBoundingClientRect();
    const cell = e.target.width / 8;
    const x = Math.max(0, Math.min(7, Math.floor((e.clientX - r.left) / cell))), y = Math.max(0, Math.min(7, Math.floor((e.clientY - r.top) / cell)));
    patternDrawMode = state.patterns[state.patternIndex][y] >> 7 - x & 1 ? 0 : 1;
    state.patterns[state.patternIndex][y] = patternDrawMode ? state.patterns[state.patternIndex][y] | 1 << 7 - x : state.patterns[state.patternIndex][y] & ~(1 << 7 - x);
    drawPatternEditor(state.patterns[state.patternIndex], e.target);
    refreshPatternUI();
    render();
    markDirty();
  });
  $("#patternEditor").addEventListener("pointermove", (e) => {
    if (!patternEditDown) return;
    const r = e.target.getBoundingClientRect();
    const cell = e.target.width / 8;
    const x = Math.max(0, Math.min(7, Math.floor((e.clientX - r.left) / cell))), y = Math.max(0, Math.min(7, Math.floor((e.clientY - r.top) / cell)));
    state.patterns[state.patternIndex][y] = patternDrawMode ? state.patterns[state.patternIndex][y] | 1 << 7 - x : state.patterns[state.patternIndex][y] & ~(1 << 7 - x);
    drawPatternEditor(state.patterns[state.patternIndex], e.target);
    refreshPatternUI();
    render();
    markDirty();
  });
  window.addEventListener("pointerup", () => patternEditDown = false);
  $("#btnLayerAdd").onclick = () => {
    pushUndo();
    const l = makeLayer(state, `Layer ${state.layers.length + 1}`);
    l.palette = new Uint8Array(palette());
    state.layers.push(l);
    state.activeLayer = state.layers.length - 1;
    markDirty();
    render();
  };
  $("#btnLayerDelete").onclick = () => {
    if (state.layers.length <= 1) return;
    pushUndo();
    state.layers.splice(state.activeLayer, 1);
    state.activeLayer = Math.max(0, state.activeLayer - 1);
    markDirty();
    render();
  };
  $("#btnLayerMerge").onclick = () => {
    if (state.activeLayer <= 0) return;
    pushUndo();
    mergeDown(state, state.activeLayer);
    markDirty();
    render();
  };
  $("#btnLayerFlatten").onclick = () => {
    pushUndo();
    flattenLayers(state);
    markDirty();
    render();
  };
  $("#docTitle").onclick = () => {
    const n = prompt("Image name", state.title);
    if (n !== null && n.trim()) {
      state.title = n.trim();
      updateTitle();
      markDirty();
    }
  };
  var isDown = false;
  var startX = 0;
  var startY = 0;
  var lastHover = null;
  canvas.addEventListener("pointerdown", (ev) => {
    canvas.setPointerCapture(ev.pointerId);
    const [rx0, ry0] = toImageXY(ev);
    const [rx, ry] = snapPoint(rx0, ry0);
    const x = clamp(rx, 0, state.w - 1), y = clamp(ry, 0, state.h - 1);
    $("#statusCoords").textContent = `X:${x} Y:${y}`;
    if (state.tool === "pan") {
      state.panStart = { x: ev.clientX, y: ev.clientY, sl: $("#canvasWrap").scrollLeft, st: $("#canvasWrap").scrollTop };
      isDown = true;
      return;
    }
    isDown = true;
    startX = x;
    startY = y;
    const layer = activeLayer();
    if (state.tool === "text") {
      pushUndo();
      const l = makeLayer(state, `Text ${state.layers.length + 1}`);
      l.palette = new Uint8Array(palette());
      state.layers.push(l);
      state.activeLayer = state.layers.length - 1;
      const tc = document.createElement("canvas");
      tc.width = state.w;
      tc.height = state.h;
      const tctx = tc.getContext("2d");
      const style = state.textSettings.style === "italic" ? "italic " : state.textSettings.style === "bold" ? "bold " : "";
      tctx.font = `${style}${state.textSettings.size}px ${state.textSettings.font}`;
      tctx.textBaseline = "top";
      tctx.fillStyle = "#ffffff";
      const lines = state.textSettings.text.split(/\r?\n/);
      let yy = y;
      lines.forEach((line) => {
        let xx = x;
        const w = tctx.measureText(line).width;
        if (state.textSettings.align === "center") xx -= w / 2;
        else if (state.textSettings.align === "right") xx -= w;
        tctx.fillText(line, xx, yy);
        if (state.textSettings.style === "underline") {
          tctx.fillRect(xx, yy + state.textSettings.size + 1, w, 1);
        }
        yy += state.textSettings.size + 2;
      });
      const img = tctx.getImageData(0, 0, state.w, state.h).data;
      for (let py = 0; py < state.h; py++) for (let px = 0; px < state.w; px++) {
        if (img[(py * state.w + px) * 4 + 3]) setLayerPix(state, activeLayer(), px, py, state.fg);
      }
      state.selection = null;
      markDirty();
      render({ x, y });
      return;
    }
    if (["pencil", "brush", "eraser", "spray"].includes(state.tool)) {
      pushUndo();
      if (state.tool === "spray") {
        for (let i = 0; i < state.sprayDensity; i++) {
          const a = Math.random() * Math.PI * 2, r = Math.random() * state.brush * 2;
          paintBrush(state, layer, Math.round(x + Math.cos(a) * r), Math.round(y + Math.sin(a) * r), state.tool === "eraser" ? 255 : state.fg);
        }
      } else paintBrush(state, layer, x, y, state.tool === "eraser" ? 255 : state.fg);
      markDirty();
      render({ x, y });
    } else if (state.tool === "fill") {
      pushUndo();
      floodFill(state, layer, x, y, layerPix(state, layer, x, y));
      markDirty();
      render({ x, y });
    } else if (state.tool === "picker") {
      const v = layerPix(state, layer, x, y);
      if (v !== 255) {
        state.fg = v;
        syncColorControls();
      }
    } else if (state.tool === "select") {
      state.selection = { x0: x, y0: y, x1: x, y1: y };
      render({ x, y });
    } else if (state.tool === "fixedSelect") {
      const w = Math.min(state.fixedSel.w, state.w), h = Math.min(state.fixedSel.h, state.h);
      state.selection = { x0: x, y0: y, x1: Math.min(state.w - 1, x + w - 1), y1: Math.min(state.h - 1, y + h - 1) };
      render({ x, y });
    } else if (state.tool === "stamp") {
      pushUndo();
      pasteClipboard(x, y);
    } else state.shapePreview = { x0: x, y0: y, x1: x, y1: y, tool: state.tool };
  });
  canvas.addEventListener("pointermove", (ev) => {
    const [rx0, ry0] = toImageXY(ev);
    const [rx, ry] = snapPoint(rx0, ry0);
    const x = clamp(rx, 0, state.w - 1), y = clamp(ry, 0, state.h - 1);
    lastHover = { x, y };
    $("#statusCoords").textContent = `X:${x} Y:${y}`;
    if (!isDown) {
      render(lastHover);
      return;
    }
    if (state.tool === "pan" && state.panStart) {
      const wrap = $("#canvasWrap");
      wrap.scrollLeft = state.panStart.sl - (ev.clientX - state.panStart.x);
      wrap.scrollTop = state.panStart.st - (ev.clientY - state.panStart.y);
      return;
    }
    const layer = activeLayer();
    if (["pencil", "brush", "eraser"].includes(state.tool)) {
      for (const [px, py] of linePoints(startX, startY, x, y)) paintBrush(state, layer, px, py, state.tool === "eraser" ? 255 : state.fg);
      startX = x;
      startY = y;
      markDirty();
      render(lastHover);
    } else if (state.tool === "spray") {
      for (let i = 0; i < Math.max(1, Math.round(state.sprayDensity / 2)); i++) {
        const a = Math.random() * Math.PI * 2, r = Math.random() * state.brush * 2;
        paintBrush(state, layer, Math.round(x + Math.cos(a) * r), Math.round(y + Math.sin(a) * r), state.fg);
      }
      markDirty();
      render(lastHover);
    } else if (state.tool === "select" && state.selection) {
      state.selection.x1 = x;
      state.selection.y1 = y;
      render(lastHover);
    } else if (state.shapePreview) {
      state.shapePreview.x1 = x;
      state.shapePreview.y1 = y;
      render(lastHover);
    }
  });
  canvas.addEventListener("pointerup", (ev) => {
    if (!isDown) return;
    isDown = false;
    const [rx0, ry0] = toImageXY(ev);
    const [rx, ry] = snapPoint(rx0, ry0);
    const x = clamp(rx, 0, state.w - 1), y = clamp(ry, 0, state.h - 1), layer = activeLayer();
    if (["line", "rectOutline", "rectFill", "ellipseOutline", "ellipseFill"].includes(state.tool)) {
      pushUndo();
      let x0 = startX, y0 = startY, x1 = x, y1 = y;
      if (state.tool === "line") {
        for (const [px, py] of linePoints(x0, y0, x1, y1)) paintBrush(state, layer, px, py, state.fg);
      } else if (state.tool.startsWith("rect")) {
        const minx = Math.min(x0, x1), maxx = Math.max(x0, x1), miny = Math.min(y0, y1), maxy = Math.max(y0, y1);
        for (let yy = miny; yy <= maxy; yy++) for (let xx = minx; xx <= maxx; xx++) {
          const edge = yy === miny || yy === maxy || xx === minx || xx === maxx;
          if (state.tool === "rectFill") setLayerPix(state, layer, xx, yy, !state.usePattern || state.patterns[state.patternIndex][yy & 7] >> 7 - (xx & 7) & 1 ? state.fg : state.bg);
          else if (edge) setLayerPix(state, layer, xx, yy, state.fg);
        }
      } else {
        const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, rx2 = Math.abs(x1 - x0) / 2, ry2 = Math.abs(y1 - y0) / 2;
        for (let yy = Math.floor(Math.min(y0, y1)); yy <= Math.ceil(Math.max(y0, y1)); yy++) for (let xx = Math.floor(Math.min(x0, x1)); xx <= Math.ceil(Math.max(x0, x1)); xx++) {
          const dx = (xx - cx) / (rx2 || 1), dy = (yy - cy) / (ry2 || 1), d = dx * dx + dy * dy;
          if (state.tool === "ellipseFill") {
            if (d <= 1) setLayerPix(state, layer, xx, yy, state.fg);
          } else if (d <= 1.05 && d >= 0.82) setLayerPix(state, layer, xx, yy, state.fg);
        }
      }
      state.shapePreview = null;
      markDirty();
      render(lastHover);
    }
  });
  canvas.addEventListener("pointerleave", () => {
    if (!isDown) render(null);
  });
  $("#zoomIn").onclick = () => {
    setZoom(state.zoom * 2);
    render(lastHover);
  };
  $("#zoomOut").onclick = () => {
    setZoom(state.zoom / 2);
    render(lastHover);
  };
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
      e.preventDefault();
      undo();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") {
      e.preventDefault();
      redo();
    }
  });
  window.addEventListener("beforeunload", (e) => {
    if (state.projectDirty) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
  function tick() {
    state.antsOffset = (state.antsOffset + 1) % 12;
    if (state.selection) drawOverlay(lastHover);
    requestAnimationFrame(tick);
  }
  tick();
})();
