// Layer coordinates come from the updated Figma card frames. Background exports
// are clipped to the card; foreground exports retain their own visible bounds.
const base='/presentation-v2/';
export const presentationCovers={
 rrs:{width:589,height:453,title:'Retail Robotics Solution',type:'AI, B2B2C',background:base+'rrs-background.png',foreground:[115,51,358.339,402.071],shift:80,pieces:[
  {src:base+'rrs-device.png',box:[0,0,358.339,335.874]},
  {src:base+'rrs-screen.png',box:[7.132,6.577,344.86,322.695]},
  {src:base+'rrs-hand.png',box:[127.101,273.073,191.4,128.998]},
 ],mobile:base+'mobile-rrs.png',mobileTitle:'RRS',mobileCategory:{ru:'FoodTech · AI checkout',en:'FoodTech · AI checkout'}},
 avrora:{width:470,height:345,title:'Aurora BPM',type:'B2B, Enterprise',background:base+'aurora-background.png',foreground:[0,0,470,345],shift:100,pieces:[
  {src:base+'imgMacBook16Pro.png',box:[26,-37.9845,417.469,440.691],inner:[Math.hypot(.585801*417.469,.320391*440.691),Math.hypot(.414199*417.469,.679609*440.691)],rotate:-30},
  {src:base+'imgChangeThis1.png',box:[35.8238,-33.948,351.5645,338.5434],inner:[270.384,234.81],rotate:-30,mask:{src:base+'imgChangeThis.svg',size:[269.236,233.631],offset:[.652,1.31]}},
 ],mobile:base+'mobile-aurora.png',mobileTitle:'Aurora BPM',mobileCategory:{ru:'B2B · Производство',en:'B2B · Manufacturing'}},
 skibo:{width:577,height:470,title:'Skibo',type:'Mobile, B2C',background:base+'skibo-background.png',foreground:[0,0,577,470],shift:90,pieces:[
  {src:base+'imgHand1.png',box:[197,84,412.403,386.373]},
  {src:base+'imgChangeThis3.png',box:[217.356,87.279,144.56,261.331],mask:{src:base+'imgChangeThis2.svg',size:[139.845,259.539],offset:[2.078,.289]}},
 ],mobile:base+'mobile-skibo.png',mobileTitle:'Skibo',mobileCategory:{ru:'Mobile · Аренда снаряжения',en:'Mobile · Equipment rental'}},
 idol:{width:589,height:303,title:'IDOL',type:'AI, SaaS · Concept',background:base+'idol-background.png',foreground:[0,0,589,354],shift:88,pieces:[
  {src:base+'imgMacBook16Pro1.png',box:[70.209,31.573,372.248,226.068]},
  {src:base+'imgChangeThis5.png',box:[196.996,35.845,240.061,206.586],mask:{src:base+'imgChangeThis4.svg',size:[240.216,191.834],offset:[-.155,.5]}},
  {src:base+'imgPlatform.png',box:[0,216.403,589,137.35]},
 ]},
 kaspi:{width:470,height:411,title:'Kaspi / Cinema',type:'Fintech · Concept',background:base+'kaspi-background.png',foreground:[0,0,470,411],shift:90,pieces:[
  {src:base+'imgHand2.png',box:[34,124.574,402.038,286.426]},
  {src:base+'imgShadow.png',box:[180.997,81.995,115.667,237.764],blend:'multiply'},
  {src:base+'imgChangeThis7.png',box:[183.911,84.748,109.769,231.725],mask:{src:base+'imgChangeThis6.svg',size:[108.049,230.506],offset:[.769,.944]}},
 ]},
 taza:{width:577,height:286,title:'Taza Store',type:'Mobile, B2B',background:base+'taza-background.png',foreground:[0,0,577,338],shift:76,pieces:[
  {src:base+'imgHand3.png',box:[262.477,231.088,124.921,106.907]},
  {src:base+'imgIPhoneAir.png',box:[213.259,21.993,111.303,229.973]},
  {src:base+'imgChangeThis9.png',box:[217.644,25.568,102.436,222.662],mask:{src:base+'imgChangeThis8.svg',size:[102.338,222.533],offset:[.135,.09]}},
  {src:base+'imgThumb.png',box:[269.286,221.335,43.044,44.044]},
 ]},
};
export const featuredProjectSlugs=['rrs','avrora','skibo','idol','kaspi','taza'];

export function getPresentationCover(project) {
 return presentationCovers[project.slug]||{width:589,height:453,title:project.name,type:project.category,backgroundColor:project.color||'#eadccf',ink:'#672c2c',image:project.decisions?.[0]?.image||project.cover,foreground:[205,50,180,370],shift:80};
}
