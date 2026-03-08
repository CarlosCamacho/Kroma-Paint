export const DEFAULT_PALETTE=[63,54,60,57,51,27,45,38,0,18,9,36,11,31,26,7];
export const BASIC_STD_RGB=[18,54,9,36,63,27,45,38,0,18,0,63,0,18,0,38];
export const PMODE4_ARTIFACT=[0,38,9,18,54,63,27,45,0,0,0,0,0,0,0,0];
export const PRESET_PALETTES={
  default16:{label:'Default Palette (16)',count:16,codes:DEFAULT_PALETTE.slice()},
  basic_rgb:{label:'CoCo BASIC RGB (16)',count:16,codes:BASIC_STD_RGB.slice()},
  pmode4:{label:'PMODE 4 Artifact Colors (16)',count:16,codes:PMODE4_ARTIFACT.slice()},
  aap_dga16:{label:"AAP-DGA16 (16)",count:16,codes:[0, 1, 16, 24, 4, 12, 34, 56, 7, 10, 48, 31, 52, 47, 55, 63]},
  adl16:{label:"adl16 (16)",count:16,codes:[0, 5, 3, 5, 3, 33, 35, 15, 56, 21, 53, 56, 60, 51, 55, 63]},
  anb16:{label:"ANB16 (16)",count:16,codes:[0, 14, 63, 60, 42, 14, 39, 53, 53, 49, 21, 7, 14, 29, 35, 5]},
  arq16:{label:"ARQ16 (16)",count:16,codes:[63, 60, 56, 28, 39, 0, 5, 10, 53, 35, 60, 23, 55, 14, 46, 17]},
  better16:{label:"Better16 (16)",count:16,codes:[0, 8, 4, 7, 2, 32, 15, 42, 56, 20, 52, 57, 28, 60, 55, 63]},
  bit_dream:{label:"Bit-Dream (16)",count:16,codes:[0, 4, 2, 1, 53, 34, 21, 15, 62, 37, 17, 29, 63, 60, 51, 47]},
  bot16:{label:"BOT16 (16)",count:16,codes:[62, 50, 17, 31, 53, 60, 26, 24, 53, 39, 42, 3, 39, 33, 12, 1]},
  breaking_point:{label:"Breaking Point (16)",count:16,codes:[63, 0, 62, 56, 56, 56, 56, 47, 43, 15, 0, 7, 14, 28, 56, 56]},
  bubblegum_16:{label:"Bubblegum 16 (16)",count:16,codes:[0, 4, 36, 52, 52, 63, 60, 37, 33, 5, 3, 28, 51, 17, 10, 1]},
  color_graphics_adapter:{label:"Color Graphics Adapter (16)",count:16,codes:[0, 7, 56, 63, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47, 34, 55]},
  commodore_64:{label:"Commodore 64 (16)",count:16,codes:[0, 7, 56, 56, 63, 35, 35, 6, 35, 56, 58, 21, 28, 42, 14, 42]},
  commodore_vic_20:{label:"Commodore VIC-20 (16)",count:16,codes:[0, 63, 35, 60, 6, 35, 57, 59, 42, 61, 21, 58, 14, 14, 49, 62]},
  console16:{label:"Console16 (16)",count:16,codes:[37, 33, 54, 52, 18, 3, 27, 29, 9, 5, 45, 12, 1, 0, 63, 14]},
  corruption_16:{label:"Corruption-16 (16)",count:16,codes:[62, 56, 49, 7, 6, 56, 7, 7, 0, 0, 2, 7, 49, 56, 53, 34]},
  crayon_16:{label:"Crayon 16 (16)",count:16,codes:[0, 35, 39, 53, 60, 55, 63, 49, 58, 17, 3, 11, 42, 60, 39, 39]},
  dawnbringer_16:{label:"DawnBringer 16 (16)",count:16,codes:[0, 5, 7, 7, 35, 6, 35, 7, 14, 35, 56, 21, 56, 28, 53, 63]},
  go_line:{label:"Go-line (16)",count:16,codes:[5, 33, 37, 52, 55, 22, 21, 14, 0, 11, 25, 26, 63, 56, 35, 7]},
  intellivision:{label:"Intellivision (16)",count:16,codes:[0, 56, 63, 38, 52, 54, 2, 16, 21, 11, 29, 57, 33, 39, 6, 49]},
  jehkoba16:{label:"Jehkoba16 (16)",count:16,codes:[0, 58, 29, 24, 17, 49, 53, 63, 53, 35, 60, 39, 35, 14, 28, 0]},
  macintosh_ii:{label:"Macintosh II (16)",count:16,codes:[63, 54, 38, 36, 44, 12, 8, 25, 16, 2, 6, 35, 56, 56, 7, 0]},
  mappletosh_16:{label:"Mappletosh 16 (16)",count:16,codes:[36, 38, 35, 6, 0, 7, 56, 56, 16, 3, 8, 14, 25, 58, 63, 47]},
  melody_16:{label:"Melody 16 (16)",count:16,codes:[56, 14, 7, 29, 59, 63, 56, 14, 1, 7, 35, 35, 53, 62, 21, 21]},
  mem16:{label:"mem16 (16)",count:16,codes:[1, 7, 7, 35, 53, 55, 49, 21, 7, 28, 56, 59, 62, 60, 46, 42]},
  micro_roguelike:{label:"Micro roguelike (16)",count:16,codes:[0, 7, 7, 14, 56, 35, 35, 39, 60, 21, 30, 15, 57, 53, 55, 63]},
  microsoft_vga:{label:"MICROSOFT VGA (16)",count:16,codes:[0, 32, 16, 48, 8, 40, 24, 56, 56, 36, 18, 54, 9, 45, 27, 63]},
  microsoft_windows:{label:"Microsoft Windows (16)",count:16,codes:[0, 7, 56, 63, 4, 36, 2, 18, 6, 54, 1, 9, 5, 45, 3, 27]},
  minecraftia16:{label:"Minecraftia16 (16)",count:16,codes:[34, 52, 55, 48, 6, 24, 29, 14, 42, 42, 60, 35, 0, 7, 56, 63]},
  miyazaki_16:{label:"Miyazaki 16 (16)",count:16,codes:[0, 3, 7, 49, 56, 58, 63, 24, 28, 7, 35, 60, 3, 21, 49, 53]},
  oxygen_16:{label:"Oxygen 16 (16)",count:16,codes:[63, 55, 30, 56, 49, 39, 53, 28, 21, 42, 7, 7, 35, 7, 7, 0]},
  pastel_horizon:{label:"PASTEL HORIZON (16)",count:16,codes:[7, 56, 63, 63, 60, 43, 57, 29, 29, 14, 24, 56, 35, 39, 53, 62]},
  pico_8:{label:"PICO-8 (16)",count:16,codes:[0, 3, 5, 17, 35, 7, 56, 63, 37, 52, 54, 19, 25, 42, 46, 60]},
  pico_db:{label:"PICO-DB (16)",count:16,codes:[0, 1, 5, 3, 35, 7, 56, 63, 35, 53, 55, 21, 28, 14, 60, 60]},
  psyche16:{label:"psyche16 (16)",count:16,codes:[63, 63, 46, 46, 7, 0, 37, 5, 42, 14, 55, 53, 50, 20, 31, 28]},
  pyxel:{label:"PYXEL (16)",count:16,codes:[0, 7, 5, 24, 35, 14, 57, 63, 33, 49, 53, 56, 28, 29, 60, 60]},
  rampy16:{label:"Rampy16 (16)",count:16,codes:[1, 7, 56, 62, 35, 39, 14, 42, 14, 14, 28, 29, 21, 51, 49, 60]},
  retrobubble:{label:"retrobubble. (16)",count:16,codes:[56, 14, 5, 0, 3, 21, 35, 5, 7, 55, 39, 34, 56, 62, 53, 53]},
  rgbi_improved:{label:"RGBI Improved (16)",count:16,codes:[0, 32, 34, 6, 25, 8, 44, 56, 7, 52, 55, 48, 31, 41, 46, 63]},
  rgr_proto16:{label:"RGR-Proto16 (16)",count:16,codes:[62, 56, 14, 3, 49, 21, 53, 39, 7, 3, 0, 0, 5, 33, 53, 32]},
  ruzx_spectrum:{label:"RuZX-Spectrum (16)",count:16,codes:[1, 14, 56, 63, 8, 15, 32, 37, 12, 44, 17, 50, 10, 31, 6, 55]},
  sara_98a:{label:"SARA-98A (16)",count:16,codes:[33, 39, 39, 60, 63, 62, 53, 35, 35, 4, 4, 6, 7, 28, 56, 0]},
  sara_98c:{label:"SARA-98C (16)",count:16,codes:[63, 60, 60, 53, 35, 33, 4, 0, 1, 5, 14, 42, 56, 14, 3, 1]},
  shine_16:{label:"Shine 16 (16)",count:16,codes:[59, 29, 1, 14, 42, 63, 56, 7, 4, 5, 35, 53, 55, 51, 21, 3]},
  simplejpc_16:{label:"SimpleJPC-16 (16)",count:16,codes:[0, 1, 6, 35, 53, 62, 63, 59, 21, 28, 6, 7, 35, 42, 56, 60]},
  st_16_natural:{label:"ST 16 Natural (16)",count:16,codes:[0, 5, 35, 53, 55, 49, 3, 21, 29, 15, 5, 14, 46, 63, 56, 7]},
  super_cassette_vision:{label:"Super Cassette Vision (16)",count:16,codes:[0, 36, 52, 60, 54, 48, 16, 18, 58, 8, 9, 41, 45, 27, 56, 63]},
  sweetie_16:{label:"Sweetie 16 (16)",count:16,codes:[1, 5, 35, 39, 53, 51, 21, 3, 3, 14, 29, 31, 63, 56, 14, 7]},
  system_mini_16:{label:"System Mini 16 (16)",count:16,codes:[0, 7, 56, 63, 10, 15, 32, 39, 16, 22, 42, 47, 34, 53, 29, 54]},
  taffy_16:{label:"Taffy 16 (16)",count:16,codes:[1, 14, 57, 63, 53, 39, 39, 14, 29, 23, 51, 55, 53, 39, 35, 7]},
  the_perfect_palette_pocket:{label:"The Perfect Palette pocket (16)",count:16,codes:[60, 37, 5, 62, 52, 35, 55, 21, 17, 59, 25, 14, 43, 0, 56, 63]},
  ty_old_90s_adventure_16:{label:"TY - Old 90s Adventure 16 (16)",count:16,codes:[56, 56, 35, 7, 35, 6, 4, 49, 7, 7, 28, 14, 7, 7, 7, 0]},
  yu_no_pc_98:{label:"YU-NO (PC-98) (16)",count:16,codes:[0, 56, 63, 7, 35, 60, 62, 14, 57, 0, 7, 7, 28, 53, 39, 60]},
};

export function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
export function cocoRGB222_to_rgb(code){const r=((code>>5)&1)*2+((code>>2)&1),g=((code>>4)&1)*2+((code>>1)&1),b=((code>>3)&1)*2+((code>>0)&1);return[Math.round(r*255/3),Math.round(g*255/3),Math.round(b*255/3)]}
export function rgb_to_cocoRGB222(r,g,b){const rq=Math.round(clamp(r,0,255)*3/255),gq=Math.round(clamp(g,0,255)*3/255),bq=Math.round(clamp(b,0,255)*3/255);return (((rq>>1)&1)<<5)|(((gq>>1)&1)<<4)|(((bq>>1)&1)<<3)|((rq&1)<<2)|((gq&1)<<1)|(bq&1)}
export function hsvToRgb(h,s,v){const i=Math.floor(h*6),f=h*6-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s);let r,g,b;switch(i%6){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;default:r=v;g=p;b=q}return[Math.round(r*255),Math.round(g*255),Math.round(b*255)]}
export function cocoComposite_to_rgb(code){const I=(code>>4)&3,P=code&15;return hsvToRgb(P/16,.85,.18+(I/3)*.82)}
export function artifact_color_for(x,leftBit,bit,rightBit){const parity=x&1,on=(leftBit?1:0)+(bit?1:0)+(rightBit?1:0);if(bit&&leftBit&&rightBit)return[240,240,240];if(bit&&on>=2)return parity?[150,190,255]:[255,190,120];if(bit)return parity?[70,130,255]:[255,140,60];return[0,0,0]}
export function nearestCocoCode(rgb){let best=0,bestD=1e9;for(let c=0;c<64;c++){const cc=cocoRGB222_to_rgb(c),d=(rgb[0]-cc[0])**2+(rgb[1]-cc[1])**2+(rgb[2]-cc[2])**2;if(d<bestD){bestD=d;best=c}}return best}
export function mappedPreset(name){return PRESET_PALETTES[name]?PRESET_PALETTES[name].codes.slice():DEFAULT_PALETTE.slice()}
