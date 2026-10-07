(()=>{var ih=Object.defineProperty;var rh=(r,e,t)=>e in r?ih(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var fl=(r,e,t)=>rh(r,typeof e!="symbol"?e+"":e,t);var la="170";var sh=0,ko=1,ah=2;var An=100,oh=101,lh=102;var ch=200,hh=201,uh=202,dh=203,ca=204,ha=205,ph=206,mh=207,fh=208,gh=209,vh=210,_h=211,xh=212,yh=213,Mh=214,Sh=0,bh=1,Th=2,Eh=3,wh=4,Ah=5,Rh=6,Ch=7;var Ec=4;var wc=300,ni=301,ii=302,ua=303,da=304,hs=306,Bi=1e3,Fi=1001,pa=1002,Lt=1003,Ph=1004;var tr=1005;var Zt=1006,Es=1007;var Qn=1008;var hn=1009,Ac=1010,Rc=1011,zi=1012,Vo=1013,Pn=1014,Jt=1015,Yi=1016,Ho=1017,Go=1018,ri=1020,Cc=35902,Pc=1021,Ic=1022,Bt=1023,Lc=1024,Uc=1025,ki=1026,si=1027,Dc=1028,Wo=1029,Nc=1030,Xo=1031;var jo=1033,Ir=33776,Lr=33777,Ur=33778,Dr=33779,ma=35840,fa=35841,ga=35842,va=35843,_a=36196,xa=37492,ya=37496,Ma=37808,Sa=37809,ba=37810,Ta=37811,Ea=37812,wa=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,Ia=37818,La=37819,Ua=37820,Da=37821,Nr=36492,Na=36494,Oa=36495,Oc=36283,Ba=36284,Fa=36285,za=36286;var Br=2300,ka=2301,ws=2302,gl=2400,vl=2401,_l=2402;var Kn="",dt="srgb",vi="srgb-linear",us="linear",Ve="srgb";var Fn=7680;var Ih=512,Lh=513,Uh=514,Dh=515,Nh=516,Oh=517,Bh=518,Fh=519,xl=35044;var yl="300 es",ai=2e3,Fr=2001,un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Or=Math.PI/180,Va=180/Math.PI;function _i(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(ot[255&r]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]+"-"+ot[255&e]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[63&t|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[255&n]+ot[n>>8&255]+ot[n>>16&255]+ot[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function zh(r,e){return(r%e+e)%e}function As(r,e,t){return(1-t)*r+t*e}function Ti(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var ie=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},we=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],x=i[0],m=i[3],g=i[6],v=i[1],_=i[4],y=i[7],R=i[2],T=i[5],C=i[8];return s[0]=a*x+o*v+l*R,s[3]=a*m+o*_+l*T,s[6]=a*g+o*y+l*C,s[1]=c*x+h*v+d*R,s[4]=c*m+h*_+d*T,s[7]=c*g+h*y+d*C,s[2]=u*x+p*v+f*R,s[5]=u*m+p*_+f*T,s[8]=u*g+p*y+f*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,f=t*d+n*u+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rs.makeScale(e,t)),this}rotate(e){return this.premultiply(Rs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rs=new we;function Bc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function zr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kh(){let r=zr("canvas");return r.style.display="block",r}var Ml={};function Ui(r){r in Ml||(Ml[r]=!0,console.warn(r))}var Fe={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===Ve&&(r.r=Kt(r.r),r.g=Kt(r.g),r.b=Kt(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ve&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?us:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Kt(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function ei(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Sl=[.64,.33,.3,.6,.15,.06],bl=[.2126,.7152,.0722],Tl=[.3127,.329],El=new we().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wl=new we().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),zn;Fe.define({[vi]:{primaries:Sl,whitePoint:Tl,transfer:us,toXYZ:El,fromXYZ:wl,luminanceCoefficients:bl,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:Sl,whitePoint:Tl,transfer:Ve,toXYZ:El,fromXYZ:wl,luminanceCoefficients:bl,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}});var Ha=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zn===void 0&&(zn=zr("canvas")),zn.width=e.width,zn.height=e.height;let n=zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*Kt(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Kt(t[n]/255)):t[n]=Kt(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vh=0,kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Cs(i[a].image)):s.push(Cs(i[a]))}else s=Cs(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Cs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ha.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hh=0,vt=class r extends un{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=_i(),this.name="",this.source=new kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new we,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vt.DEFAULT_IMAGE=null,vt.DEFAULT_MAPPING=wc,vt.DEFAULT_ANISOTROPY=1;var ke=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(p+1)/2,R=(g+1)/2,T=(h+u)/4,C=(d+x)/4,P=(f+m)/4;return _>y&&_>R?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=T/n,s=C/n):y>R?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=P/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=C/s,i=P/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ga=class extends un{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ke(0,0,e,t),this.scissorTest=!1,this.viewport=new ke(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new kr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Ga{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vr=class extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],p=s[a+1],f=s[a+2],x=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=x);if(d!==x||l!==u||c!==p||h!==f){let m=1-o,g=l*u+c*p+h*f+d*x,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,g*v);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let y=o*v;if(l=l*m+u*y,c=c*m+p*y,h=h*m+f*y,d=d*m+x*y,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-o*p,e[t+2]=c*f+h*p+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ps.copy(this).projectOnVector(e),this.sub(Ps)}reflect(e){return this.sub(Ps.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ps=new b,Al=new Ft,zt=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rt):Rt.fromBufferAttribute(s,a),Rt.applyMatrix4(e.matrixWorld),this.expandByPoint(Rt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rt),Rt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),ir.subVectors(this.max,Ei),kn.subVectors(e.a,Ei),Vn.subVectors(e.b,Ei),Hn.subVectors(e.c,Ei),tn.subVectors(Vn,kn),nn.subVectors(Hn,Vn),yn.subVectors(kn,Hn);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-yn.z,yn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,yn.z,0,-yn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-yn.y,yn.x,0];return!!Is(t,kn,Vn,Hn,ir)&&(t=[1,0,0,0,1,0,0,0,1],!!Is(t,kn,Vn,Hn,ir)&&(rr.crossVectors(tn,nn),t=[rr.x,rr.y,rr.z],Is(t,kn,Vn,Hn,ir)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Rt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Gt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gt=[new b,new b,new b,new b,new b,new b,new b,new b],Rt=new b,nr=new zt,kn=new b,Vn=new b,Hn=new b,tn=new b,nn=new b,yn=new b,Ei=new b,ir=new b,rr=new b,Mn=new b;function Is(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Mn.fromArray(r,s);let o=i.x*Math.abs(Mn.x)+i.y*Math.abs(Mn.y)+i.z*Math.abs(Mn.z),l=e.dot(Mn),c=t.dot(Mn),h=n.dot(Mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Gh=new zt,wi=new b,Ls=new b,kt=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Gh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wi.subVectors(e,this.center);let t=wi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wi.copy(e.center).add(Ls)),this.expandByPoint(wi.copy(e.center).sub(Ls))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wt=new b,Us=new b,sr=new b,rn=new b,Ds=new b,ar=new b,Ns=new b,oi=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wt.copy(this.origin).addScaledVector(this.direction,t),Wt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Us.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(Us);let s=.5*e.distanceTo(t),a=-this.direction.dot(sr),o=rn.dot(this.direction),l=-rn.dot(sr),c=rn.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*l-o,u=a*o-l,f=s*h,d>=0)if(u>=-f)if(u<=f){let x=1/h;d*=x,u*=x,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Us).addScaledVector(sr,u),p}intersectSphere(e,t){Wt.subVectors(e.center,this.origin);let n=Wt.dot(this.direction),i=Wt.dot(Wt)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Wt)!==null}intersectTriangle(e,t,n,i,s){Ds.subVectors(t,e),ar.subVectors(n,e),Ns.crossVectors(Ds,ar);let a,o=this.direction.dot(Ns);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}rn.subVectors(this.origin,e);let l=a*this.direction.dot(ar.crossVectors(rn,ar));if(l<0)return null;let c=a*this.direction.dot(Ds.cross(rn));if(c<0||l+c>o)return null;let h=-a*rn.dot(Ns);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class r{constructor(e,t,n,i,s,a,o,l,c,h,d,u,p,f,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,p,f,x,m)}set(e,t,n,i,s,a,o,l,c,h,d,u,p,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Gn.setFromMatrixColumn(e,0).length(),s=1/Gn.setFromMatrixColumn(e,1).length(),a=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,x=c*d;t[0]=u+x*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,x=o*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,f=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,p=a*c,f=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wh,e,Xh)}lookAt(e,t,n){let i=this.elements;return ft.subVectors(e,t),ft.lengthSq()===0&&(ft.z=1),ft.normalize(),sn.crossVectors(n,ft),sn.lengthSq()===0&&(Math.abs(n.z)===1?ft.x+=1e-4:ft.z+=1e-4,ft.normalize(),sn.crossVectors(n,ft)),sn.normalize(),or.crossVectors(ft,sn),i[0]=sn.x,i[4]=or.x,i[8]=ft.x,i[1]=sn.y,i[5]=or.y,i[9]=ft.y,i[2]=sn.z,i[6]=or.z,i[10]=ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],x=n[6],m=n[10],g=n[14],v=n[3],_=n[7],y=n[11],R=n[15],T=i[0],C=i[4],P=i[8],L=i[12],F=i[1],G=i[5],z=i[9],W=i[13],V=i[2],q=i[6],Y=i[10],ne=i[14],te=i[3],me=i[7],_e=i[11],ee=i[15];return s[0]=a*T+o*F+l*V+c*te,s[4]=a*C+o*G+l*q+c*me,s[8]=a*P+o*z+l*Y+c*_e,s[12]=a*L+o*W+l*ne+c*ee,s[1]=h*T+d*F+u*V+p*te,s[5]=h*C+d*G+u*q+p*me,s[9]=h*P+d*z+u*Y+p*_e,s[13]=h*L+d*W+u*ne+p*ee,s[2]=f*T+x*F+m*V+g*te,s[6]=f*C+x*G+m*q+g*me,s[10]=f*P+x*z+m*Y+g*_e,s[14]=f*L+x*W+m*ne+g*ee,s[3]=v*T+_*F+y*V+R*te,s[7]=v*C+_*G+y*q+R*me,s[11]=v*P+_*z+y*Y+R*_e,s[15]=v*L+_*W+y*ne+R*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*u+s*a*u-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*d+t*o*u+i*a*d-n*a*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],x=e[13],m=e[14],g=e[15],v=d*m*c-x*u*c+x*l*p-o*m*p-d*l*g+o*u*g,_=f*u*c-h*m*c-f*l*p+a*m*p+h*l*g-a*u*g,y=h*x*c-f*d*c+f*o*p-a*x*p-h*o*g+a*d*g,R=f*d*l-h*x*l-f*o*u+a*x*u+h*o*m-a*d*m,T=t*v+n*_+i*y+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=v*C,e[1]=(x*u*s-d*m*s-x*i*p+n*m*p+d*i*g-n*u*g)*C,e[2]=(o*m*s-x*l*s+x*i*c-n*m*c-o*i*g+n*l*g)*C,e[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*p-n*l*p)*C,e[4]=_*C,e[5]=(h*m*s-f*u*s+f*i*p-t*m*p-h*i*g+t*u*g)*C,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*g-t*l*g)*C,e[7]=(a*u*s-h*l*s+h*i*c-t*u*c-a*i*p+t*l*p)*C,e[8]=y*C,e[9]=(f*d*s-h*x*s-f*n*p+t*x*p+h*n*g-t*d*g)*C,e[10]=(a*x*s-f*o*s+f*n*c-t*x*c-a*n*g+t*o*g)*C,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*C,e[12]=R*C,e[13]=(h*x*i-f*d*i+f*n*u-t*x*u-h*n*m+t*d*m)*C,e[14]=(f*o*i-a*x*i-f*n*l+t*x*l+a*n*m-t*o*m)*C,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*u+t*o*u)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,f=s*d,x=a*h,m=a*d,g=o*d,v=l*c,_=l*h,y=l*d,R=n.x,T=n.y,C=n.z;return i[0]=(1-(x+g))*R,i[1]=(p+y)*R,i[2]=(f-_)*R,i[3]=0,i[4]=(p-y)*T,i[5]=(1-(u+g))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(f+_)*C,i[9]=(m-v)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Gn.set(i[0],i[1],i[2]).length(),a=Gn.set(i[4],i[5],i[6]).length(),o=Gn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ct.copy(this);let l=1/s,c=1/a,h=1/o;return Ct.elements[0]*=l,Ct.elements[1]*=l,Ct.elements[2]*=l,Ct.elements[4]*=c,Ct.elements[5]*=c,Ct.elements[6]*=c,Ct.elements[8]*=h,Ct.elements[9]*=h,Ct.elements[10]*=h,t.setFromRotationMatrix(Ct),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,f;if(o===ai)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Fr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-s),u=(t+e)*c,p=(n+i)*h,f,x;if(o===ai)f=(a+s)*d,x=-2*d;else{if(o!==Fr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*d,x=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gn=new b,Ct=new Ce,Wh=new b(0,0,0),Xh=new b(1,1,1),sn=new b,or=new b,ft=new b,Rl=new Ce,Cl=new Ft,Vt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vt.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},jh=0,Pl=new b,Wn=new Ft,Xt=new Ce,lr=new b,Ai=new b,qh=new b,Yh=new Ft,Il=new b(1,0,0),Ll=new b(0,1,0),Ul=new b(0,0,1),Dl={type:"added"},Zh={type:"removed"},Xn={type:"childadded",child:null},Os={type:"childremoved",child:null},pt=class r extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new b,t=new Vt,n=new Ft,i=new b(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new we}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(Il,e)}rotateY(e){return this.rotateOnAxis(Ll,e)}rotateZ(e){return this.rotateOnAxis(Ul,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Il,e)}translateY(e){return this.translateOnAxis(Ll,e)}translateZ(e){return this.translateOnAxis(Ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(Ai,lr,this.up):Xt.lookAt(lr,Ai,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),Wn.setFromRotationMatrix(Xt),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dl),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zh),Os.child=e,this.dispatchEvent(Os),Os.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dl),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,e,qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};pt.DEFAULT_UP=new b(0,1,0),pt.DEFAULT_MATRIX_AUTO_UPDATE=!0,pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=new b,jt=new b,Bs=new b,qt=new b,jn=new b,qn=new b,Nl=new b,Fs=new b,zs=new b,ks=new b,Vs=new ke,Hs=new ke,Gs=new ke,ln=class r{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pt.subVectors(e,t),i.cross(Pt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pt.subVectors(i,t),jt.subVectors(n,t),Bs.subVectors(e,t);let a=Pt.dot(Pt),o=Pt.dot(jt),l=Pt.dot(Bs),c=jt.dot(jt),h=jt.dot(Bs),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,f=(a*h-o*l)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qt)!==null&&qt.x>=0&&qt.y>=0&&qt.x+qt.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,qt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qt.x),l.addScaledVector(a,qt.y),l.addScaledVector(o,qt.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Vs.setScalar(0),Hs.setScalar(0),Gs.setScalar(0),Vs.fromBufferAttribute(e,t),Hs.fromBufferAttribute(e,n),Gs.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Vs,s.x),a.addScaledVector(Hs,s.y),a.addScaledVector(Gs,s.z),a}static isFrontFacing(e,t,n,i){return Pt.subVectors(n,t),jt.subVectors(e,t),Pt.cross(jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),.5*Pt.cross(jt).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;jn.subVectors(i,n),qn.subVectors(s,n),Fs.subVectors(e,n);let l=jn.dot(Fs),c=qn.dot(Fs);if(l<=0&&c<=0)return t.copy(n);zs.subVectors(e,i);let h=jn.dot(zs),d=qn.dot(zs);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(jn,a);ks.subVectors(e,s);let p=jn.dot(ks),f=qn.dot(ks);if(f>=0&&p<=f)return t.copy(s);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(qn,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return Nl.subVectors(s,i),o=(d-h)/(d-h+(p-f)),t.copy(i).addScaledVector(Nl,o);let g=1/(m+x+u);return a=x*g,o=u*g,t.copy(n).addScaledVector(jn,a).addScaledVector(qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},cr={h:0,s:0,l:0};function Ws(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Fe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Fe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Fe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Fe.workingColorSpace){if(e=zh(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ws(a,s,e+1/3),this.g=Ws(a,s,e),this.b=Ws(a,s,e-1/3)}return Fe.toWorkingColorSpace(this,i),this}setStyle(e,t=dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=Fc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}copyLinearToSRGB(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return Fe.fromWorkingColorSpace(lt.copy(this),e),65536*Math.round(st(255*lt.r,0,255))+256*Math.round(st(255*lt.g,0,255))+Math.round(st(255*lt.b,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Fe.workingColorSpace){Fe.fromWorkingColorSpace(lt.copy(this),t);let n=lt.r,i=lt.g,s=lt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Fe.workingColorSpace){return Fe.fromWorkingColorSpace(lt.copy(this),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=dt){Fe.fromWorkingColorSpace(lt.copy(this),e);let t=lt.r,n=lt.g,i=lt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(cr);let n=As(an.h,cr.h,t),i=As(an.s,cr.s,t),s=As(an.l,cr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},lt=new Se;Se.NAMES=Fc;var Jh=0,dn=class extends un{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=_i(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ha,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fn,this.stencilZFail=Fn,this.stencilZPass=Fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ca&&(n.blendSrc=this.blendSrc),this.blendDst!==ha&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pn=class extends dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ap=Kh();function Kh(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var $e=new b,hr=new ie,yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xl,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xl&&(e.usage=this.usage),e}};var Gr=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wr=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Me=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qh=0,xt=new Ce,Xs=new pt,Yn=new b,gt=new zt,Ri=new zt,rt=new b,Je=class r extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bc(e)?Wr:Gr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new we().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xt.makeRotationFromQuaternion(e),this.applyMatrix4(xt),this}rotateX(e){return xt.makeRotationX(e),this.applyMatrix4(xt),this}rotateY(e){return xt.makeRotationY(e),this.applyMatrix4(xt),this}rotateZ(e){return xt.makeRotationZ(e),this.applyMatrix4(xt),this}translate(e,t,n){return xt.makeTranslation(e,t,n),this.applyMatrix4(xt),this}scale(e,t,n){return xt.makeScale(e,t,n),this.applyMatrix4(xt),this}lookAt(e){return Xs.lookAt(e),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];gt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,gt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,gt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(gt.min),this.boundingBox.expandByPoint(gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new b,1/0);if(e){let n=this.boundingSphere.center;if(gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(gt.min,Ri.min),gt.expandByPoint(rt),rt.addVectors(gt.max,Ri.max),gt.expandByPoint(rt)):(gt.expandByPoint(Ri.min),gt.expandByPoint(Ri.max))}gt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rt.fromBufferAttribute(o,c),l&&(Yn.fromBufferAttribute(e,c),rt.add(Yn)),i=Math.max(i,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new b,l[P]=new b;let c=new b,h=new b,d=new b,u=new ie,p=new ie,f=new ie,x=new b,m=new b;function g(P,L,F){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,F),u.fromBufferAttribute(s,P),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,F),h.sub(c),d.sub(c),p.sub(u),f.sub(u);let G=1/(p.x*f.y-f.x*p.y);isFinite(G)&&(x.copy(h).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(G),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(G),o[P].add(x),o[L].add(x),o[F].add(x),l[P].add(m),l[L].add(m),l[F].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,L=v.length;P<L;++P){let F=v[P],G=F.start;for(let z=G,W=G+F.count;z<W;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let _=new b,y=new b,R=new b,T=new b;function C(P){R.fromBufferAttribute(i,P),T.copy(R);let L=o[P];_.copy(L),_.sub(R.multiplyScalar(R.dot(L))).normalize(),y.crossVectors(T,L);let F=y.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,F)}for(let P=0,L=v.length;P<L;++P){let F=v[P],G=F.start;for(let z=G,W=G+F.count;z<W;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let i=new b,s=new b,a=new b,o=new b,l=new b,c=new b,h=new b,d=new b;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let x=0,m=l.length;x<m;x++){p=o.isInterleavedBufferAttribute?l[x]*o.data.stride+o.offset:l[x]*h;for(let g=0;g<h;g++)u[f++]=c[p++]}return new yt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ol=new Ce,Sn=new oi,ur=new kt,Bl=new b,dr=new b,pr=new b,mr=new b,js=new b,fr=new b,Fl=new b,gr=new b,Be=class extends pt{constructor(e=new Je,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){fr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(js.fromBufferAttribute(d,e),a?fr.addScaledVector(js,h):fr.addScaledVector(js.sub(t),h))}t.add(fr)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),Sn.copy(e.ray).recast(e.near),ur.containsPoint(Sn.origin)===!1&&(Sn.intersectSphere(ur,Bl)===null||Sn.origin.distanceToSquared(Bl)>(e.far-e.near)**2))return;Ol.copy(s).invert(),Sn.copy(e.ray).applyMatrix4(Ol),n.boundingBox!==null&&Sn.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Sn)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=u.length;f<x;f++){let m=u[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<_;v+=3)i=vr(this,g,e,n,c,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);f<x;f+=3)i=vr(this,a,e,n,c,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,x=u.length;f<x;f++){let m=u[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));v<_;v+=3)i=vr(this,g,e,n,c,h,d,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);f<x;f+=3)i=vr(this,a,e,n,c,h,d,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function vr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,dr),r.getVertexPosition(l,pr),r.getVertexPosition(c,mr);let h=function(d,u,p,f,x,m,g,v){let _;if(_=u.side===1?f.intersectTriangle(g,m,x,!0,v):f.intersectTriangle(x,m,g,u.side===0,v),_===null)return null;gr.copy(v),gr.applyMatrix4(d.matrixWorld);let y=p.ray.origin.distanceTo(gr);return y<p.near||y>p.far?null:{distance:y,point:gr.clone(),object:d}}(r,e,t,n,dr,pr,mr,Fl);if(h){let d=new b;ln.getBarycoord(Fl,dr,pr,mr,d),i&&(h.uv=ln.getInterpolatedAttribute(i,o,l,c,d,new ie)),s&&(h.uv1=ln.getInterpolatedAttribute(s,o,l,c,d,new ie)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,d,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new b,materialIndex:0};ln.getNormal(dr,pr,mr,u.normal),h.face=u,h.barycoord=d}return h}var Mt=class r extends Je{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function f(x,m,g,v,_,y,R,T,C,P,L){let F=y/C,G=R/P,z=y/2,W=R/2,V=T/2,q=C+1,Y=P+1,ne=0,te=0,me=new b;for(let _e=0;_e<Y;_e++){let ee=_e*G-W;for(let se=0;se<q;se++){let ue=se*F-z;me[x]=ue*v,me[m]=ee*_,me[g]=V,c.push(me.x,me.y,me.z),me[x]=0,me[m]=0,me[g]=T>0?1:-1,h.push(me.x,me.y,me.z),d.push(se/C),d.push(1-_e/P),ne+=1}}for(let _e=0;_e<P;_e++)for(let ee=0;ee<C;ee++){let se=u+ee+q*_e,ue=u+ee+q*(_e+1),de=u+(ee+1)+q*(_e+1),oe=u+(ee+1)+q*_e;l.push(se,ue,oe),l.push(ue,de,oe),te+=6}o.addGroup(p,te,L),p+=te,u+=ne}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function li(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ut(r){let e={};for(let t=0;t<r.length;t++){let n=li(r[t]);for(let i in n)e[i]=n[i]}return e}function zc(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Fe.workingColorSpace}var $h={clone:li,merge:ut},Ht=class extends dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Vi=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},on=new b,zl=new ie,kl=new ie,ct=class extends Vi{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Va*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Or*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Va*Math.atan(Math.tan(.5*Or*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){on.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(on.x,on.y).multiplyScalar(-e/on.z),on.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(on.x,on.y).multiplyScalar(-e/on.z)}getViewSize(e,t){return this.getViewBounds(e,zl,kl),t.subVectors(kl,zl)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Or*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zn=-90,Xa=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ct(Zn,1,e,t);i.layers=this.layers,this.add(i);let s=new ct(Zn,1,e,t);s.layers=this.layers,this.add(s);let a=new ct(Zn,1,e,t);a.layers=this.layers,this.add(a);let o=new ct(Zn,1,e,t);o.layers=this.layers,this.add(o);let l=new ct(Zn,1,e,t);l.layers=this.layers,this.add(l);let c=new ct(Zn,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Fr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Xr=class extends vt{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:ni,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ja=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Mt(5,5,5),s=new Ht({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Be(i,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Zt),new Xa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},qs=new b,eu=new b,tu=new we,Yt=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=qs.subVectors(n,t).cross(eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(qs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tu.getNormalMatrix(e),i=this.coplanarPoint(qs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},bn=new kt,_r=new b,ci=class{constructor(e=new Yt,t=new Yt,n=new Yt,i=new Yt,s=new Yt,a=new Yt){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],f=i[9],x=i[10],m=i[11],g=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-s,u-c,m-p,y-g).normalize(),n[1].setComponents(l+s,u+c,m+p,y+g).normalize(),n[2].setComponents(l+a,u+h,m+f,y+v).normalize(),n[3].setComponents(l-a,u-h,m-f,y-v).normalize(),n[4].setComponents(l-o,u-d,m-x,y-_).normalize(),t===ai)n[5].setComponents(l+o,u+d,m+x,y+_).normalize();else{if(t!==Fr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,d,x,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bn)}intersectsSprite(e){return bn.center.set(0,0,0),bn.radius=.7071067811865476,bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(bn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(_r.x=i.normal.x>0?e.max.x:e.min.x,_r.y=i.normal.y>0?e.max.y:e.min.y,_r.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function nu(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),d;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)d=r.FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=r.SHORT;else if(o instanceof Uint32Array)d=r.UNSIGNED_INT;else if(o instanceof Int32Array)d=r.INT;else if(o instanceof Int8Array)d=r.BYTE;else if(o instanceof Uint8Array)d=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=r.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}}(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((d,u)=>d.start-u.start);let h=0;for(let d=1;d<c.length;d++){let u=c[h],p=c[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,c[h]=p)}c.length=h+1;for(let d=0,u=c.length;d<u;d++){let p=c[d];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var In=class r extends Je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,p=[],f=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*u-a;for(let _=0;_<c;_++){let y=_*d-s;f.push(y,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let _=v+c*g,y=v+c*(g+1),R=v+1+c*(g+1),T=v+1+c*g;p.push(_,y,T),p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Re={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ae={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new we}},envmap:{envMap:{value:null},envMapRotation:{value:new we},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new we}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new we}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new we},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new we},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new we},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new we}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new we}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new we}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0},uvTransform:{value:new we}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new we},alphaMap:{value:null},alphaMapTransform:{value:new we},alphaTest:{value:0}}},Ot={basic:{uniforms:ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Se(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ut([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ut([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ut([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Se(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ut([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ut([ae.points,ae.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ut([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ut([ae.common,ae.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ut([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:ut([ae.sprite,ae.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new we},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new we}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:ut([ae.common,ae.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:ut([ae.lights,ae.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Ot.physical={uniforms:ut([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new we},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new we},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new we},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new we},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new we},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new we},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new we},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new we},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new we},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new we},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new we},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new we}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};var xr={r:0,b:0,g:0},Tn=new Vt,iu=new Ce;function ru(r,e,t,n,i,s,a){let o=new Se(0),l,c,h=s===!0?0:1,d=null,u=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function x(m,g){m.getRGB(xr,zc(r)),n.buffers.color.setClear(xr.r,xr.g,xr.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,x(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,x(o,h)},render:function(m){let g=!1,v=f(m);v===null?x(o,h):v&&v.isColor&&(x(v,1),g=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,g){let v=f(g);v&&(v.isCubeTexture||v.mapping===hs)?(c===void 0&&(c=new Be(new Mt(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:li(Ot.backgroundCube.uniforms),vertexShader:Ot.backgroundCube.vertexShader,fragmentShader:Ot.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Tn.copy(g.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iu.makeRotationFromEuler(Tn)),c.material.toneMapped=Fe.getTransfer(v.colorSpace)!==Ve,d===v&&u===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Be(new In(2,2),new Ht({name:"BackgroundMaterial",uniforms:li(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=Fe.getTransfer(v.colorSpace)!==Ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function su(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function c(g){let v=[],_=[],y=[];for(let R=0;R<t;R++)v[R]=0,_[R]=0,y[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:_,attributeDivisors:y,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,_=g.length;v<_;v++)g[v]=0}function d(g){u(g,0)}function u(g,v){let _=s.newAttributes,y=s.enabledAttributes,R=s.attributeDivisors;_[g]=1,y[g]===0&&(r.enableVertexAttribArray(g),y[g]=1),R[g]!==v&&(r.vertexAttribDivisor(g,v),R[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let _=0,y=v.length;_<y;_++)v[_]!==g[_]&&(r.disableVertexAttribArray(_),v[_]=0)}function f(g,v,_,y,R,T,C){C===!0?r.vertexAttribIPointer(g,v,_,R,T):r.vertexAttribPointer(g,v,_,y,R,T)}function x(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(g,v,_,y,R){let T=!1,C=function(P,L,F){let G=F.wireframe===!0,z=n[P.id];z===void 0&&(z={},n[P.id]=z);let W=z[L.id];W===void 0&&(W={},z[L.id]=W);let V=W[G];return V===void 0&&(V=c(r.createVertexArray()),W[G]=V),V}(y,_,v);s!==C&&(s=C,o(s.object)),T=function(P,L,F,G){let z=s.attributes,W=L.attributes,V=0,q=F.getAttributes();for(let Y in q)if(q[Y].location>=0){let ne=z[Y],te=W[Y];if(te===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),ne===void 0||ne.attribute!==te||te&&ne.data!==te.data)return!0;V++}return s.attributesNum!==V||s.index!==G}(g,y,_,R),T&&function(P,L,F,G){let z={},W=L.attributes,V=0,q=F.getAttributes();for(let Y in q)if(q[Y].location>=0){let ne=W[Y];ne===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));let te={};te.attribute=ne,ne&&ne.data&&(te.data=ne.data),z[Y]=te,V++}s.attributes=z,s.attributesNum=V,s.index=G}(g,y,_,R),R!==null&&e.update(R,r.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,function(P,L,F,G){h();let z=G.attributes,W=F.getAttributes(),V=L.defaultAttributeValues;for(let q in W){let Y=W[q];if(Y.location>=0){let ne=z[q];if(ne===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){let te=ne.normalized,me=ne.itemSize,_e=e.get(ne);if(_e===void 0)continue;let ee=_e.buffer,se=_e.type,ue=_e.bytesPerElement,de=se===r.INT||se===r.UNSIGNED_INT||ne.gpuType===Vo;if(ne.isInterleavedBufferAttribute){let oe=ne.data,w=oe.stride,E=ne.offset;if(oe.isInstancedInterleavedBuffer){for(let N=0;N<Y.locationSize;N++)u(Y.location+N,oe.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let N=0;N<Y.locationSize;N++)d(Y.location+N);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let N=0;N<Y.locationSize;N++)f(Y.location+N,me/Y.locationSize,se,te,w*ue,(E+me/Y.locationSize*N)*ue,de)}else{if(ne.isInstancedBufferAttribute){for(let oe=0;oe<Y.locationSize;oe++)u(Y.location+oe,ne.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let oe=0;oe<Y.locationSize;oe++)d(Y.location+oe);r.bindBuffer(r.ARRAY_BUFFER,ee);for(let oe=0;oe<Y.locationSize;oe++)f(Y.location+oe,me/Y.locationSize,se,te,me*ue,me/Y.locationSize*oe*ue,de)}}else if(V!==void 0){let te=V[q];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(Y.location,te);break;case 3:r.vertexAttrib3fv(Y.location,te);break;case 4:r.vertexAttrib4fv(Y.location,te);break;default:r.vertexAttrib1fv(Y.location,te)}}}}p()}(g,v,_,y),R!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:x,resetDefaultState:m,dispose:function(){x();for(let g in n){let v=n[g];for(let _ in v){let y=v[_];for(let R in y)l(y[R].object),delete y[R];delete v[_]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let v=n[g.id];for(let _ in v){let y=v[_];for(let R in y)l(y[R].object),delete y[R];delete v[_]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let v in n){let _=n[v];if(_[g.id]===void 0)continue;let y=_[g.id];for(let R in y)l(y[R].object),delete y[R];delete _[g.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function au(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let d=0;d<o;d++)h+=a[d]*l[d];t.update(h,n,1)}}}function ou(r,e,t,n){let i;function s(u){if(u==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(u){return u===Bt||n.convert(u)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==hn&&n.convert(u)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==Jt&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function lu(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Yt,o=new we,l={value:null,needsUpdate:!1};function c(h,d,u,p){let f=h!==null?h.length:0,x=null;if(f!==0){if(x=l.value,p!==!0||x===null){let m=u+4*f,g=d.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<m)&&(x=new Float32Array(m));for(let v=0,_=u;v!==f;++v,_+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(x,_),x[_+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,x}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||i;return i=d,n=h.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,x=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!x)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let g=s?0:n,v=4*g,_=m.clippingState||null;l.value=_,_=c(p,d,v,u);for(let y=0;y!==v;++y)_[y]=t[y];m.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function cu(r){let e=new WeakMap;function t(i,s){return s===ua?i.mapping=ni:s===da&&(i.mapping=ii),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===ua||s===da){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new ja(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var jr=class extends Vi{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vl=[.125,.215,.35,.446,.526,.582],Ci=20,Ys=new jr,Hl=new Se,Zs=null,Js=0,Ks=0,Qs=!1,wn=(1+Math.sqrt(5))/2,Jn=1/wn,Gl=[new b(-wn,Jn,0),new b(wn,Jn,0),new b(-Jn,0,wn),new b(Jn,0,wn),new b(0,wn,-Jn),new b(0,wn,Jn),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],hi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zs=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs,Js,Ks),this._renderer.xr.enabled=Qs,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Yi,format:Bt,colorSpace:vi,depthBuffer:!1},i=Wl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,d=a-4+1+Vl.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let f=1/p;u>a-4?f=Vl[u-a+4-1]:u===0&&(f=0),c.push(f);let x=1/(p-2),m=-x,g=1+x,v=[m,m,g,m,g,g,m,m,g,g,m,g],_=6,y=6,R=3,T=2,C=1,P=new Float32Array(R*y*_),L=new Float32Array(T*y*_),F=new Float32Array(C*y*_);for(let z=0;z<_;z++){let W=z%3*2/3-1,V=z>2?0:-1,q=[W,V,0,W+2/3,V,0,W+2/3,V+1,0,W,V,0,W+2/3,V+1,0,W,V+1,0];P.set(q,R*y*z),L.set(v,T*y*z);let Y=[z,z,z,z,z,z];F.set(Y,C*y*z)}let G=new Je;G.setAttribute("position",new yt(P,R)),G.setAttribute("uv",new yt(L,T)),G.setAttribute("faceIndex",new yt(F,C)),o.push(G),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(Ci),h=new b(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return i}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,Ys)}_sceneToCubeUV(e,t,n,i){let s=new ct(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Hl),l.toneMapping=0,l.autoClear=!1;let d=new pn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new Be(new Mt,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(Hl),p=!0);for(let x=0;x<6;x++){let m=x%3;m===0?(s.up.set(0,a[x],0),s.lookAt(o[x],0,0)):m===1?(s.up.set(0,0,a[x]),s.lookAt(0,o[x],0)):(s.up.set(0,a[x],0),s.lookAt(0,0,o[x]));let g=this._cubeSize;yr(i,m*g,x>2?g:0,g,g),l.setRenderTarget(i),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ni||e.mapping===ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;yr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Ys)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gl[(i-s-1)%Gl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Be(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,x=isFinite(s)?1+Math.floor(3*f):Ci;x>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to 20`);let m=[],g=0;for(let y=0;y<Ci;++y){let R=y/f,T=Math.exp(-R*R/2);m.push(T),y===0?g+=T:y<x&&(g+=2*T)}for(let y=0;y<m.length;y++)m[y]=m[y]/g;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let _=this._sizeLods[i];yr(t,3*_*(i>v-4?i-v+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,Ys)}};function Wl(r,e,t){let n=new Qt(r,e,t);return n.texture.mapping=hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Xl(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jl(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hu(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===ua||s===da,o=s===ni||s===ii;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new hi(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&function(d){let u=0,p=6;for(let f=0;f<p;f++)d[f]!==void 0&&u++;return u===p}(h)?(t===null&&(t=new hi(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function uu(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ui("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function du(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let x=h.array;u=h.version;for(let m=0,g=x.length;m<g;m+=3){let v=x[m+0],_=x[m+1],y=x[m+2];c.push(v,_,_,y,y,v)}}else{if(d===void 0)return;{let x=d.array;u=d.version;for(let m=0,g=x.length/3-1;m<g;m+=3){let v=m+0,_=m+1,y=m+2;c.push(v,_,_,y,y,v)}}}let p=new(Bc(c)?Wr:Gr)(c,1);p.version=u;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function pu(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let d=0;d<c;d++)h+=l[d];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,l[u],h[u]);else{d.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let u=0;for(let p=0;p<c;p++)u+=l[p]*h[p];t.update(u,n,1)}}}function mu(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function fu(r,e,t){let n=new WeakMap,i=new ke;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,d=n.get(a);if(d===void 0||d.count!==h){let P=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;u===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let _=a.attributes.position.count*v,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let R=new Float32Array(_*y*4*h),T=new Vr(R,_,y,h);T.type=Jt,T.needsUpdate=!0;let C=4*v;for(let L=0;L<h;L++){let F=x[L],G=m[L],z=g[L],W=_*y*4*L;for(let V=0;V<F.count;V++){let q=V*C;u===!0&&(i.fromBufferAttribute(F,V),R[W+q+0]=i.x,R[W+q+1]=i.y,R[W+q+2]=i.z,R[W+q+3]=0),p===!0&&(i.fromBufferAttribute(G,V),R[W+q+4]=i.x,R[W+q+5]=i.y,R[W+q+6]=i.z,R[W+q+7]=0),f===!0&&(i.fromBufferAttribute(z,V),R[W+q+8]=i.x,R[W+q+9]=i.y,R[W+q+10]=i.z,R[W+q+11]=z.itemSize===4?i.w:1)}}d={count:h,texture:T,size:new ie(_,y)},n.set(a,d),a.addEventListener("dispose",P)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let u=0;for(let f=0;f<l.length;f++)u+=l[f];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}}}function gu(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var qr=class extends vt{constructor(e,t,n,i,s,a,o,l,c,h=1026){if(h!==ki&&h!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=Pn),n===void 0&&h===si&&(n=ri),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vc=new vt,ql=new qr(1,1),Hc=new Vr,Gc=new Wa,Wc=new Xr,Yl=[],Zl=[],Jl=new Float32Array(16),Kl=new Float32Array(9),Ql=new Float32Array(4);function xi(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Yl[i];if(s===void 0&&(s=new Float32Array(i),Yl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ds(r,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function vu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function _u(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2fv(this.addr,e),nt(t,e)}}function xu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;r.uniform3fv(this.addr,e),nt(t,e)}}function yu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4fv(this.addr,e),nt(t,e)}}function Mu(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Ql.set(n),r.uniformMatrix2fv(this.addr,!1,Ql),nt(t,n)}}function Su(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Kl.set(n),r.uniformMatrix3fv(this.addr,!1,Kl),nt(t,n)}}function bu(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Jl.set(n),r.uniformMatrix4fv(this.addr,!1,Jl),nt(t,n)}}function Tu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Eu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2iv(this.addr,e),nt(t,e)}}function wu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3iv(this.addr,e),nt(t,e)}}function Au(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4iv(this.addr,e),nt(t,e)}}function Ru(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Cu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2uiv(this.addr,e),nt(t,e)}}function Pu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3uiv(this.addr,e),nt(t,e)}}function Iu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4uiv(this.addr,e),nt(t,e)}}function Lu(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(ql.compareFunction=515,s=ql):s=Vc,t.setTexture2D(e||s,i)}function Uu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gc,i)}function Du(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wc,i)}function Nu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hc,i)}function Ou(r,e){r.uniform1fv(this.addr,e)}function Bu(r,e){let t=xi(e,this.size,2);r.uniform2fv(this.addr,t)}function Fu(r,e){let t=xi(e,this.size,3);r.uniform3fv(this.addr,t)}function zu(r,e){let t=xi(e,this.size,4);r.uniform4fv(this.addr,t)}function ku(r,e){let t=xi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Vu(r,e){let t=xi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Hu(r,e){let t=xi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gu(r,e){r.uniform1iv(this.addr,e)}function Wu(r,e){r.uniform2iv(this.addr,e)}function Xu(r,e){r.uniform3iv(this.addr,e)}function ju(r,e){r.uniform4iv(this.addr,e)}function qu(r,e){r.uniform1uiv(this.addr,e)}function Yu(r,e){r.uniform2uiv(this.addr,e)}function Zu(r,e){r.uniform3uiv(this.addr,e)}function Ju(r,e){r.uniform4uiv(this.addr,e)}function Ku(r,e,t){let n=this.cache,i=e.length,s=ds(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Vc,s[a])}function Qu(r,e,t){let n=this.cache,i=e.length,s=ds(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Gc,s[a])}function $u(r,e,t){let n=this.cache,i=e.length,s=ds(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Wc,s[a])}function ed(r,e,t){let n=this.cache,i=e.length,s=ds(t,i);tt(n,s)||(r.uniform1iv(this.addr,s),nt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hc,s[a])}var qa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return vu;case 35664:return _u;case 35665:return xu;case 35666:return yu;case 35674:return Mu;case 35675:return Su;case 35676:return bu;case 5124:case 35670:return Tu;case 35667:case 35671:return Eu;case 35668:case 35672:return wu;case 35669:case 35673:return Au;case 5125:return Ru;case 36294:return Cu;case 36295:return Pu;case 36296:return Iu;case 35678:case 36198:case 36298:case 36306:case 35682:return Lu;case 35679:case 36299:case 36307:return Uu;case 35680:case 36300:case 36308:case 36293:return Du;case 36289:case 36303:case 36311:case 36292:return Nu}}(t.type)}},Ya=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return Ou;case 35664:return Bu;case 35665:return Fu;case 35666:return zu;case 35674:return ku;case 35675:return Vu;case 35676:return Hu;case 5124:case 35670:return Gu;case 35667:case 35671:return Wu;case 35668:case 35672:return Xu;case 35669:case 35673:return ju;case 5125:return qu;case 36294:return Yu;case 36295:return Zu;case 36296:return Ju;case 35678:case 36198:case 36298:case 36306:case 35682:return Ku;case 35679:case 36299:case 36307:return Qu;case 35680:case 36300:case 36308:case 36293:return $u;case 36289:case 36303:case 36311:case 36292:return ed}}(t.type)}},Za=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},$s=/(\w+)(\])?(\[|\.)?/g;function $l(r,e){r.seq.push(e),r.map[e.id]=e}function td(r,e,t){let n=r.name,i=n.length;for($s.lastIndex=0;;){let s=$s.exec(n),a=$s.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){$l(t,c===void 0?new qa(o,r,e):new Ya(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Za(o),$l(t,h)),t=h}}}var ti=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);td(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function ec(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var nd=0,tc=new we;function nc(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return i}function id(r,e){let t=function(n){Fe._getMatrix(tc,Fe.workingColorSpace,n);let i=`mat3( ${tc.elements.map(s=>s.toFixed(4))} )`;switch(Fe.getTransfer(n)){case us:return[i,"LinearTransferOETF"];case Ve:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}}(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rd(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Mr=new b;function sd(){return Fe.getLuminanceCoefficients(Mr),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Mr.x.toFixed(4)}, ${Mr.y.toFixed(4)}, ${Mr.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pi(r){return r!==""}function ic(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ad=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(r){return r.replace(ad,ld)}var od=new Map;function ld(r,e){let t=Re[e];if(t===void 0){let n=od.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Ja(t)}var cd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(r){return r.replace(cd,hd)}function hd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ac(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ud(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(G){let z="SHADOWMAP_TYPE_BASIC";return G.shadowMapType===1?z="SHADOWMAP_TYPE_PCF":G.shadowMapType===2?z="SHADOWMAP_TYPE_PCF_SOFT":G.shadowMapType===3&&(z="SHADOWMAP_TYPE_VSM"),z}(t),c=function(G){let z="ENVMAP_TYPE_CUBE";if(G.envMap)switch(G.envMapMode){case ni:case ii:z="ENVMAP_TYPE_CUBE";break;case hs:z="ENVMAP_TYPE_CUBE_UV"}return z}(t),h=function(G){let z="ENVMAP_MODE_REFLECTION";return G.envMap&&G.envMapMode===ii&&(z="ENVMAP_MODE_REFRACTION"),z}(t),d=function(G){let z="ENVMAP_BLENDING_NONE";if(G.envMap)switch(G.combine){case 0:z="ENVMAP_BLENDING_MULTIPLY";break;case 1:z="ENVMAP_BLENDING_MIX";break;case 2:z="ENVMAP_BLENDING_ADD"}return z}(t),u=function(G){let z=G.envMapCubeUVHeight;if(z===null)return null;let W=Math.log2(z)-2,V=1/z;return{texelWidth:1/(3*Math.max(Math.pow(2,W),112)),texelHeight:V,maxMip:W}}(t),p=function(G){return[G.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",G.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pi).join(`
`)}(t),f=function(G){let z=[];for(let W in G){let V=G[W];V!==!1&&z.push("#define "+W+" "+V)}return z.join(`
`)}(s),x=i.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Pi).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Pi).join(`
`),g.length>0&&(g+=`
`)):(m=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),g=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Re.tonemapping_pars_fragment:"",t.toneMapping!==0?rd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,id("linearToOutputTexel",t.outputColorSpace),sd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),a=Ja(a),a=ic(a,t),a=rc(a,t),o=Ja(o),o=ic(o,t),o=rc(o,t),a=sc(a),o=sc(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=v+m+a,y=v+g+o,R=ec(i,i.VERTEX_SHADER,_),T=ec(i,i.FRAGMENT_SHADER,y);function C(G){if(r.debug.checkShaderErrors){let z=i.getProgramInfoLog(x).trim(),W=i.getShaderInfoLog(R).trim(),V=i.getShaderInfoLog(T).trim(),q=!0,Y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,R,T);else{let ne=nc(i,R,"vertex"),te=nc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+z+`
`+ne+`
`+te)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):W!==""&&V!==""||(Y=!1);Y&&(G.diagnostics={runnable:q,programLog:z,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:g}})}i.deleteShader(R),i.deleteShader(T),P=new ti(i,x),L=function(z,W){let V={},q=z.getProgramParameter(W,z.ACTIVE_ATTRIBUTES);for(let Y=0;Y<q;Y++){let ne=z.getActiveAttrib(W,Y),te=ne.name,me=1;ne.type===z.FLOAT_MAT2&&(me=2),ne.type===z.FLOAT_MAT3&&(me=3),ne.type===z.FLOAT_MAT4&&(me=4),V[te]={type:ne.type,location:z.getAttribLocation(W,te),locationSize:me}}return V}(i,x)}let P,L;i.attachShader(x,R),i.attachShader(x,T),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),this.getUniforms=function(){return P===void 0&&C(this),P},this.getAttributes=function(){return L===void 0&&C(this),L};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(x,37297)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nd++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var dd=0,Ka=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qa(e),t.set(e,n)),n}},Qa=class{constructor(e){this.id=dd++,this.code=e,this.usedTimes=0}};function pd(r,e,t,n,i,s,a){let o=new Hr,l=new Ka,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,v,_,y){let R=_.fog,T=y.geometry,C=m.isMeshStandardMaterial?_.environment:null,P=(m.isMeshStandardMaterial?t:e).get(m.envMap||C),L=P&&P.mapping===hs?P.image.height:null,F=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let G=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,z=G!==void 0?G.length:0,W,V,q,Y,ne=0;if(T.morphAttributes.position!==void 0&&(ne=1),T.morphAttributes.normal!==void 0&&(ne=2),T.morphAttributes.color!==void 0&&(ne=3),F){let Mi=Ot[F];W=Mi.vertexShader,V=Mi.fragmentShader}else W=m.vertexShader,V=m.fragmentShader,l.update(m),q=l.getVertexShaderID(m),Y=l.getFragmentShaderID(m);let te=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),_e=y.isInstancedMesh===!0,ee=y.isBatchedMesh===!0,se=!!m.map,ue=!!m.matcap,de=!!P,oe=!!m.aoMap,w=!!m.lightMap,E=!!m.bumpMap,N=!!m.normalMap,D=!!m.displacementMap,A=!!m.emissiveMap,U=!!m.metalnessMap,M=!!m.roughnessMap,I=m.anisotropy>0,B=m.clearcoat>0,Q=m.dispersion>0,O=m.iridescence>0,J=m.sheen>0,Z=m.transmission>0,$=I&&!!m.anisotropyMap,ce=B&&!!m.clearcoatMap,le=B&&!!m.clearcoatNormalMap,ge=B&&!!m.clearcoatRoughnessMap,be=O&&!!m.iridescenceMap,Oe=O&&!!m.iridescenceThicknessMap,Ie=J&&!!m.sheenColorMap,ve=J&&!!m.sheenRoughnessMap,ze=!!m.specularMap,Ge=!!m.specularColorMap,Ye=!!m.specularIntensityMap,pe=Z&&!!m.transmissionMap,Ue=Z&&!!m.thicknessMap,He=!!m.gradientMap,On=!!m.alphaMap,Qi=m.alphaTest>0,Tt=!!m.alphaHash,Dt=!!m.extensions,gn=0;m.toneMapped&&(te!==null&&te.isXRRenderTarget!==!0||(gn=r.toneMapping));let k={shaderID:F,shaderType:m.type,shaderName:m.name,vertexShader:W,fragmentShader:V,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:Y,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ee,batchingColor:ee&&y._colorsTexture!==null,instancing:_e,instancingColor:_e&&y.instanceColor!==null,instancingMorph:_e&&y.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:vi,alphaToCoverage:!!m.alphaToCoverage,map:se,matcap:ue,envMap:de,envMapMode:de&&P.mapping,envMapCubeUVHeight:L,aoMap:oe,lightMap:w,bumpMap:E,normalMap:N,displacementMap:u&&D,emissiveMap:A,normalMapObjectSpace:N&&m.normalMapType===1,normalMapTangentSpace:N&&m.normalMapType===0,metalnessMap:U,roughnessMap:M,anisotropy:I,anisotropyMap:$,clearcoat:B,clearcoatMap:ce,clearcoatNormalMap:le,clearcoatRoughnessMap:ge,dispersion:Q,iridescence:O,iridescenceMap:be,iridescenceThicknessMap:Oe,sheen:J,sheenColorMap:Ie,sheenRoughnessMap:ve,specularMap:ze,specularColorMap:Ge,specularIntensityMap:Ye,transmission:Z,transmissionMap:pe,thicknessMap:Ue,gradientMap:He,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:On,alphaTest:Qi,alphaHash:Tt,combine:m.combine,mapUv:se&&x(m.map.channel),aoMapUv:oe&&x(m.aoMap.channel),lightMapUv:w&&x(m.lightMap.channel),bumpMapUv:E&&x(m.bumpMap.channel),normalMapUv:N&&x(m.normalMap.channel),displacementMapUv:D&&x(m.displacementMap.channel),emissiveMapUv:A&&x(m.emissiveMap.channel),metalnessMapUv:U&&x(m.metalnessMap.channel),roughnessMapUv:M&&x(m.roughnessMap.channel),anisotropyMapUv:$&&x(m.anisotropyMap.channel),clearcoatMapUv:ce&&x(m.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(m.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(m.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(m.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(m.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(m.sheenRoughnessMap.channel),specularMapUv:ze&&x(m.specularMap.channel),specularColorMapUv:Ge&&x(m.specularColorMap.channel),specularIntensityMapUv:Ye&&x(m.specularIntensityMap.channel),transmissionMapUv:pe&&x(m.transmissionMap.channel),thicknessMapUv:Ue&&x(m.thicknessMap.channel),alphaMapUv:On&&x(m.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(N||I),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!T.attributes.uv&&(se||On),fog:!!R,useFog:m.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:me,skinning:y.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ne,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:gn,decodeVideoTexture:se&&m.map.isVideoTexture===!0&&Fe.getTransfer(m.map.colorSpace)===Ve,decodeVideoTextureEmissive:A&&m.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(m.emissiveMap.colorSpace)===Ve,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Dt&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&m.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return k.vertexUv1s=c.has(1),k.vertexUv2s=c.has(2),k.vertexUv3s=c.has(3),c.clear(),k},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)g.push(v),g.push(m.defines[v]);return m.isRawShaderMaterial===!1&&(function(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}(g,m),function(v,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),v.push(o.mask)}(g,m),g.push(r.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],v;if(g){let _=Ot[g];v=$h.clone(_.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,g){let v;for(let _=0,y=h.length;_<y;_++){let R=h[_];if(R.cacheKey===g){v=R,++v.usedTimes;break}}return v===void 0&&(v=new ud(r,g,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function md(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function fd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function oc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lc(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.push(u):l.transparent===!0?i.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?n.unshift(u):l.transparent===!0?i.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||fd),n.length>1&&n.sort(o||oc),i.length>1&&i.sort(o||oc)}}}function gd(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new lc,r.set(e,[i])):t>=n.length?(i=new lc,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function vd(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Se};break;case"SpotLight":t={position:new b,direction:new b,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new b,halfWidth:new b,halfHeight:new b}}return r[e.id]=t,t}}}var _d=0;function xd(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yd(r){let e=new vd,t=function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new b);let i=new b,s=new Ce,a=new Ce;return{setup:function(o){let l=0,c=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,u=0,p=0,f=0,x=0,m=0,g=0,v=0,_=0,y=0,R=0;o.sort(xd);for(let C=0,P=o.length;C<P;C++){let L=o[C],F=L.color,G=L.intensity,z=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)l+=F.r*G,c+=F.g*G,h+=F.b*G;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],G);R++}else if(L.isDirectionalLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,Y=t.get(L);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=L.shadow.matrix,m++}n.directional[d]=V,d++}else if(L.isSpotLight){let V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(F).multiplyScalar(G),V.distance=z,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[p]=V;let q=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,q.updateMatrices(L),L.castShadow&&y++),n.spotLightMatrix[p]=q.matrix,L.castShadow){let Y=t.get(L);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.spotShadow[p]=Y,n.spotShadowMap[p]=W,v++}p++}else if(L.isRectAreaLight){let V=e.get(L);V.color.copy(F).multiplyScalar(G),V.halfWidth.set(.5*L.width,0,0),V.halfHeight.set(0,.5*L.height,0),n.rectArea[f]=V,f++}else if(L.isPointLight){let V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let q=L.shadow,Y=t.get(L);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,n.pointShadow[u]=Y,n.pointShadowMap[u]=W,n.pointShadowMatrix[u]=L.shadow.matrix,g++}n.point[u]=V,u++}else if(L.isHemisphereLight){let V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(G),V.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[x]=V,x++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===d&&T.pointLength===u&&T.spotLength===p&&T.rectAreaLength===f&&T.hemiLength===x&&T.numDirectionalShadows===m&&T.numPointShadows===g&&T.numSpotShadows===v&&T.numSpotMaps===_&&T.numLightProbes===R||(n.directional.length=d,n.spot.length=p,n.rectArea.length=f,n.point.length=u,n.hemi.length=x,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=R,T.directionalLength=d,T.pointLength=u,T.spotLength=p,T.rectAreaLength=f,T.hemiLength=x,T.numDirectionalShadows=m,T.numPointShadows=g,T.numSpotShadows=v,T.numSpotMaps=_,T.numLightProbes=R,n.version=_d++)},setupView:function(o,l){let c=0,h=0,d=0,u=0,p=0,f=l.matrixWorldInverse;for(let x=0,m=o.length;x<m;x++){let g=o[x];if(g.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),c++}else if(g.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),d++}else if(g.isRectAreaLight){let v=n.rectArea[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),u++}else if(g.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function cc(r){let e=new yd(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Md(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new cc(r),e.set(t,[s])):n>=i.length?(s=new cc(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}var $a=class extends dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},eo=class extends dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Sd(r,e,t){let n=new ci,i=new ie,s=new ie,a=new ke,o=new $a({depthPacking:3201}),l=new eo,c={},h=t.maxTextureSize,d={[sh]:1,[ko]:0,[ah]:2},u=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new Je;f.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Be(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function v(T,C){let P=e.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qt(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(C,null,P,u,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(C,null,P,p,x,null)}function _(T,C,P,L){let F=null,G=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)F=G;else if(F=P.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let z=F.uuid,W=C.uuid,V=c[z];V===void 0&&(V={},c[z]=V);let q=V[W];q===void 0&&(q=F.clone(),V[W]=q,C.addEventListener("dispose",R)),F=q}return F.visible=C.visible,F.wireframe=C.wireframe,F.side=L===3?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:d[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,P.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(r.properties.get(F).light=P),F}function y(T,C,P,L,F){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let z=e.update(T),W=T.material;if(Array.isArray(W)){let V=z.groups;for(let q=0,Y=V.length;q<Y;q++){let ne=V[q],te=W[ne.materialIndex];if(te&&te.visible){let me=_(T,te,L,F);T.onBeforeShadow(r,T,C,P,z,me,ne),r.renderBufferDirect(P,null,z,me,T,ne),T.onAfterShadow(r,T,C,P,z,me,ne)}}}else if(W.visible){let V=_(T,W,L,F);T.onBeforeShadow(r,T,C,P,z,V,null),r.renderBufferDirect(P,null,z,V,T,null),T.onAfterShadow(r,T,C,P,z,V,null)}}let G=T.children;for(let z=0,W=G.length;z<W;z++)y(G[z],C,P,L,F)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let P=c[C],L=T.target.uuid;L in P&&(P[L].dispose(),delete P[L])}}this.render=function(T,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let L=r.getRenderTarget(),F=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),z=r.state;z.setBlending(0),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=g!==3&&this.type===3,V=g===3&&this.type!==3;for(let q=0,Y=T.length;q<Y;q++){let ne=T[q],te=ne.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;i.copy(te.mapSize);let me=te.getFrameExtents();if(i.multiply(me),s.copy(te.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/me.x),i.x=s.x*me.x,te.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/me.y),i.y=s.y*me.y,te.mapSize.y=s.y)),te.map===null||W===!0||V===!0){let ee=this.type!==3?{minFilter:Lt,magFilter:Lt}:{};te.map!==null&&te.map.dispose(),te.map=new Qt(i.x,i.y,ee),te.map.texture.name=ne.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();let _e=te.getViewportCount();for(let ee=0;ee<_e;ee++){let se=te.getViewport(ee);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),z.viewport(a),te.updateMatrices(ne,ee),n=te.getFrustum(),y(C,P,te.camera,ne,this.type)}te.isPointLightShadow!==!0&&this.type===3&&v(te,P),te.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(L,F,G)}}var bd={[Sh]:1,[Th]:6,[wh]:7,[Eh]:5,[bh]:0,[Rh]:2,[Ch]:4,[Ah]:3};function Td(r,e){let t=new function(){let M=!1,I=new ke,B=null,Q=new ke(0,0,0,0);return{setMask:function(O){B===O||M||(r.colorMask(O,O,O,O),B=O)},setLocked:function(O){M=O},setClear:function(O,J,Z,$,ce){ce===!0&&(O*=$,J*=$,Z*=$),I.set(O,J,Z,$),Q.equals(I)===!1&&(r.clearColor(O,J,Z,$),Q.copy(I))},reset:function(){M=!1,B=null,Q.set(-1,0,0,0)}}},n=new function(){let M=!1,I=!1,B=null,Q=null,O=null;return{setReversed:function(J){if(I!==J){let Z=e.get("EXT_clip_control");I?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT);let $=O;O=null,this.setClear($)}I=J},getReversed:function(){return I},setTest:function(J){J?de(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(J){B===J||M||(r.depthMask(J),B=J)},setFunc:function(J){if(I&&(J=bd[J]),Q!==J){switch(J){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}Q=J}},setLocked:function(J){M=J},setClear:function(J){O!==J&&(I&&(J=1-J),r.clearDepth(J),O=J)},reset:function(){M=!1,B=null,Q=null,O=null,I=!1}}},i=new function(){let M=!1,I=null,B=null,Q=null,O=null,J=null,Z=null,$=null,ce=null;return{setTest:function(le){M||(le?de(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(le){I===le||M||(r.stencilMask(le),I=le)},setFunc:function(le,ge,be){B===le&&Q===ge&&O===be||(r.stencilFunc(le,ge,be),B=le,Q=ge,O=be)},setOp:function(le,ge,be){J===le&&Z===ge&&$===be||(r.stencilOp(le,ge,be),J=le,Z=ge,$=be)},setLocked:function(le){M=le},setClear:function(le){ce!==le&&(r.clearStencil(le),ce=le)},reset:function(){M=!1,I=null,B=null,Q=null,O=null,J=null,Z=null,$=null,ce=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,f=null,x=null,m=null,g=null,v=null,_=null,y=new Se(0,0,0),R=0,T=!1,C=null,P=null,L=null,F=null,G=null,z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,V=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=V>=2);let Y=null,ne={},te=r.getParameter(r.SCISSOR_BOX),me=r.getParameter(r.VIEWPORT),_e=new ke().fromArray(te),ee=new ke().fromArray(me);function se(M,I,B,Q){let O=new Uint8Array(4),J=r.createTexture();r.bindTexture(M,J),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Z=0;Z<B;Z++)M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?r.texImage3D(I,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,O):r.texImage2D(I+Z,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,O);return J}let ue={};function de(M){o[M]!==!0&&(r.enable(M),o[M]=!0)}function oe(M){o[M]!==!1&&(r.disable(M),o[M]=!1)}ue[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ue[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ue[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),de(r.DEPTH_TEST),n.setFunc(3),D(!1),A(1),de(r.CULL_FACE),N(0);let w={[An]:r.FUNC_ADD,[oh]:r.FUNC_SUBTRACT,[lh]:r.FUNC_REVERSE_SUBTRACT};w[103]=r.MIN,w[104]=r.MAX;let E={[ch]:r.ZERO,[hh]:r.ONE,[uh]:r.SRC_COLOR,[ca]:r.SRC_ALPHA,[vh]:r.SRC_ALPHA_SATURATE,[fh]:r.DST_COLOR,[ph]:r.DST_ALPHA,[dh]:r.ONE_MINUS_SRC_COLOR,[ha]:r.ONE_MINUS_SRC_ALPHA,[gh]:r.ONE_MINUS_DST_COLOR,[mh]:r.ONE_MINUS_DST_ALPHA,[_h]:r.CONSTANT_COLOR,[xh]:r.ONE_MINUS_CONSTANT_COLOR,[yh]:r.CONSTANT_ALPHA,[Mh]:r.ONE_MINUS_CONSTANT_ALPHA};function N(M,I,B,Q,O,J,Z,$,ce,le){if(M!==0){if(u===!1&&(de(r.BLEND),u=!0),M===5)O=O||I,J=J||B,Z=Z||Q,I===f&&O===g||(r.blendEquationSeparate(w[I],w[O]),f=I,g=O),B===x&&Q===m&&J===v&&Z===_||(r.blendFuncSeparate(E[B],E[Q],E[J],E[Z]),x=B,m=Q,v=J,_=Z),$.equals(y)!==!1&&ce===R||(r.blendColor($.r,$.g,$.b,ce),y.copy($),R=ce),p=M,T=!1;else if(M!==p||le!==T){if(f===An&&g===An||(r.blendEquation(r.FUNC_ADD),f=An,g=An),le)switch(M){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}x=null,m=null,v=null,_=null,y.set(0,0,0),R=0,p=M,T=le}}else u===!0&&(oe(r.BLEND),u=!1)}function D(M){C!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),C=M)}function A(M){M!==0?(de(r.CULL_FACE),M!==P&&(M===1?r.cullFace(r.BACK):M===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),P=M}function U(M,I,B){M?(de(r.POLYGON_OFFSET_FILL),F===I&&G===B||(r.polygonOffset(I,B),F=I,G=B)):oe(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:de,disable:oe,bindFramebuffer:function(M,I){return l[M]!==I&&(r.bindFramebuffer(M,I),l[M]=I,M===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=I),M===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=I),!0)},drawBuffers:function(M,I){let B=h,Q=!1;if(M){B=c.get(I),B===void 0&&(B=[],c.set(I,B));let O=M.textures;if(B.length!==O.length||B[0]!==r.COLOR_ATTACHMENT0){for(let J=0,Z=O.length;J<Z;J++)B[J]=r.COLOR_ATTACHMENT0+J;B.length=O.length,Q=!0}}else B[0]!==r.BACK&&(B[0]=r.BACK,Q=!0);Q&&r.drawBuffers(B)},useProgram:function(M){return d!==M&&(r.useProgram(M),d=M,!0)},setBlending:N,setMaterial:function(M,I){M.side===2?oe(r.CULL_FACE):de(r.CULL_FACE);let B=M.side===1;I&&(B=!B),D(B),M.blending===1&&M.transparent===!1?N(0):N(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),n.setFunc(M.depthFunc),n.setTest(M.depthTest),n.setMask(M.depthWrite),t.setMask(M.colorWrite);let Q=M.stencilWrite;i.setTest(Q),Q&&(i.setMask(M.stencilWriteMask),i.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),i.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),U(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:D,setCullFace:A,setLineWidth:function(M){M!==L&&(W&&r.lineWidth(M),L=M)},setPolygonOffset:U,setScissorTest:function(M){M?de(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=r.TEXTURE0+z-1),Y!==M&&(r.activeTexture(M),Y=M)},bindTexture:function(M,I,B){B===void 0&&(B=Y===null?r.TEXTURE0+z-1:Y);let Q=ne[B];Q===void 0&&(Q={type:void 0,texture:void 0},ne[B]=Q),Q.type===M&&Q.texture===I||(Y!==B&&(r.activeTexture(B),Y=B),r.bindTexture(M,I||ue[M]),Q.type=M,Q.texture=I)},unbindTexture:function(){let M=ne[Y];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,I){let B=a.get(I);B===void 0&&(B=new WeakMap,a.set(I,B));let Q=B.get(M);Q===void 0&&(Q=r.getUniformBlockIndex(I,M.name),B.set(M,Q))},uniformBlockBinding:function(M,I){let B=a.get(I).get(M);s.get(I)!==B&&(r.uniformBlockBinding(I,B,M.__bindingPointIndex),s.set(I,B))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){_e.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),_e.copy(M))},viewport:function(M){ee.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),ee.copy(M))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},Y=null,ne={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,f=null,x=null,m=null,g=null,v=null,_=null,y=new Se(0,0,0),R=0,T=!1,C=null,P=null,L=null,F=null,G=null,_e.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function hc(r,e,t,n){let i=function(s){switch(s){case hn:case Ac:return{byteLength:1,components:1};case zi:case Rc:case Yi:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case Pn:case Vo:case Jt:return{byteLength:4,components:1};case Cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}(n);switch(t){case Pc:case Lc:return r*e;case Uc:return r*e*2;case Dc:case Wo:return r*e/i.components*i.byteLength;case Nc:case Xo:return r*e*2/i.components*i.byteLength;case Ic:return r*e*3/i.components*i.byteLength;case Bt:case jo:return r*e*4/i.components*i.byteLength;case Ir:case Lr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Dr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fa:case va:return Math.max(r,16)*Math.max(e,8)/4;case ma:case ga:return Math.max(r,8)*Math.max(e,8)/2;case _a:case xa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ma:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case wa:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Nr:case Na:case Oa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Oc:case Ba:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Fa:case za:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ed(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,E){return p?new OffscreenCanvas(w,E):zr("canvas")}function x(w,E,N){let D=1,A=oe(w);if((A.width>N||A.height>N)&&(D=N/Math.max(A.width,A.height)),D<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let U=Math.floor(D*A.width),M=Math.floor(D*A.height);d===void 0&&(d=f(U,M));let I=E?f(U,M):d;return I.width=U,I.height=M,I.getContext("2d").drawImage(w,0,0,U,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+U+"x"+M+")."),I}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),w}return w}function m(w){return w.generateMipmaps}function g(w){r.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(w,E,N,D,A=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let U=E;if(E===r.RED&&(N===r.FLOAT&&(U=r.R32F),N===r.HALF_FLOAT&&(U=r.R16F),N===r.UNSIGNED_BYTE&&(U=r.R8)),E===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(U=r.R8UI),N===r.UNSIGNED_SHORT&&(U=r.R16UI),N===r.UNSIGNED_INT&&(U=r.R32UI),N===r.BYTE&&(U=r.R8I),N===r.SHORT&&(U=r.R16I),N===r.INT&&(U=r.R32I)),E===r.RG&&(N===r.FLOAT&&(U=r.RG32F),N===r.HALF_FLOAT&&(U=r.RG16F),N===r.UNSIGNED_BYTE&&(U=r.RG8)),E===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(U=r.RG8UI),N===r.UNSIGNED_SHORT&&(U=r.RG16UI),N===r.UNSIGNED_INT&&(U=r.RG32UI),N===r.BYTE&&(U=r.RG8I),N===r.SHORT&&(U=r.RG16I),N===r.INT&&(U=r.RG32I)),E===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(U=r.RGB8UI),N===r.UNSIGNED_SHORT&&(U=r.RGB16UI),N===r.UNSIGNED_INT&&(U=r.RGB32UI),N===r.BYTE&&(U=r.RGB8I),N===r.SHORT&&(U=r.RGB16I),N===r.INT&&(U=r.RGB32I)),E===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(U=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(U=r.RGBA16UI),N===r.UNSIGNED_INT&&(U=r.RGBA32UI),N===r.BYTE&&(U=r.RGBA8I),N===r.SHORT&&(U=r.RGBA16I),N===r.INT&&(U=r.RGBA32I)),E===r.RGB&&N===r.UNSIGNED_INT_5_9_9_9_REV&&(U=r.RGB9_E5),E===r.RGBA){let M=A?us:Fe.getTransfer(D);N===r.FLOAT&&(U=r.RGBA32F),N===r.HALF_FLOAT&&(U=r.RGBA16F),N===r.UNSIGNED_BYTE&&(U=M===Ve?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(U=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(U=r.RGB5_A1)}return U!==r.R16F&&U!==r.R32F&&U!==r.RG16F&&U!==r.RG32F&&U!==r.RGBA16F&&U!==r.RGBA32F||e.get("EXT_color_buffer_float"),U}function y(w,E){let N;return w?E===null||E===Pn||E===ri?N=r.DEPTH24_STENCIL8:E===Jt?N=r.DEPTH32F_STENCIL8:E===zi&&(N=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pn||E===ri?N=r.DEPTH_COMPONENT24:E===Jt?N=r.DEPTH_COMPONENT32F:E===zi&&(N=r.DEPTH_COMPONENT16),N}function R(w,E){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Lt&&w.minFilter!==Zt?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function T(w){let E=w.target;E.removeEventListener("dispose",T),function(N){let D=n.get(N);if(D.__webglInit===void 0)return;let A=N.source,U=u.get(A);if(U){let M=U[D.__cacheKey];M.usedTimes--,M.usedTimes===0&&P(N),Object.keys(U).length===0&&u.delete(A)}n.remove(N)}(E),E.isVideoTexture&&h.delete(E)}function C(w){let E=w.target;E.removeEventListener("dispose",C),function(N){let D=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(D.__webglFramebuffer[U]))for(let M=0;M<D.__webglFramebuffer[U].length;M++)r.deleteFramebuffer(D.__webglFramebuffer[U][M]);else r.deleteFramebuffer(D.__webglFramebuffer[U]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[U])}else{if(Array.isArray(D.__webglFramebuffer))for(let U=0;U<D.__webglFramebuffer.length;U++)r.deleteFramebuffer(D.__webglFramebuffer[U]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let U=0;U<D.__webglColorRenderbuffer.length;U++)D.__webglColorRenderbuffer[U]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[U]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let A=N.textures;for(let U=0,M=A.length;U<M;U++){let I=n.get(A[U]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),a.memory.textures--),n.remove(A[U])}n.remove(N)}(E)}function P(w){let E=n.get(w);r.deleteTexture(E.__webglTexture);let N=w.source;delete u.get(N)[E.__cacheKey],a.memory.textures--}let L=0;function F(w,E){let N=n.get(w);if(w.isVideoTexture&&function(D){let A=a.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){let D=w.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(D.complete!==!1)return void Y(N,w,E);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+E)}let G={[Bi]:r.REPEAT,[Fi]:r.CLAMP_TO_EDGE,[pa]:r.MIRRORED_REPEAT},z={[Lt]:r.NEAREST,[Ph]:r.NEAREST_MIPMAP_NEAREST,[tr]:r.NEAREST_MIPMAP_LINEAR,[Zt]:r.LINEAR,[Es]:r.LINEAR_MIPMAP_NEAREST,[Qn]:r.LINEAR_MIPMAP_LINEAR},W={[Ih]:r.NEVER,[Fh]:r.ALWAYS,[Lh]:r.LESS,[Dh]:r.LEQUAL,[Uh]:r.EQUAL,[Bh]:r.GEQUAL,[Nh]:r.GREATER,[Oh]:r.NOTEQUAL};function V(w,E){if(E.type!==Jt||e.has("OES_texture_float_linear")!==!1||E.magFilter!==Zt&&E.magFilter!==Es&&E.magFilter!==tr&&E.magFilter!==Qn&&E.minFilter!==Zt&&E.minFilter!==Es&&E.minFilter!==tr&&E.minFilter!==Qn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,G[E.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,G[E.wrapT]),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,G[E.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,z[E.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,z[E.minFilter]),E.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,W[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Lt||E.minFilter!==tr&&E.minFilter!==Qn||E.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function q(w,E){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",T));let D=E.source,A=u.get(D);A===void 0&&(A={},u.set(D,A));let U=function(M){let I=[];return I.push(M.wrapS),I.push(M.wrapT),I.push(M.wrapR||0),I.push(M.magFilter),I.push(M.minFilter),I.push(M.anisotropy),I.push(M.internalFormat),I.push(M.format),I.push(M.type),I.push(M.generateMipmaps),I.push(M.premultiplyAlpha),I.push(M.flipY),I.push(M.unpackAlignment),I.push(M.colorSpace),I.join()}(E);if(U!==w.__cacheKey){A[U]===void 0&&(A[U]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),A[U].usedTimes++;let M=A[w.__cacheKey];M!==void 0&&(A[w.__cacheKey].usedTimes--,M.usedTimes===0&&P(E)),w.__cacheKey=U,w.__webglTexture=A[U].texture}return N}function Y(w,E,N){let D=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(D=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(D=r.TEXTURE_3D);let A=q(w,E),U=E.source;t.bindTexture(D,w.__webglTexture,r.TEXTURE0+N);let M=n.get(U);if(U.version!==M.__version||A===!0){t.activeTexture(r.TEXTURE0+N);let I=Fe.getPrimaries(Fe.workingColorSpace),B=E.colorSpace===Kn?null:Fe.getPrimaries(E.colorSpace),Q=E.colorSpace===Kn||I===B?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let O=x(E.image,!1,i.maxTextureSize);O=de(E,O);let J=s.convert(E.format,E.colorSpace),Z=s.convert(E.type),$,ce=_(E.internalFormat,J,Z,E.colorSpace,E.isVideoTexture);V(D,E);let le=E.mipmaps,ge=E.isVideoTexture!==!0,be=M.__version===void 0||A===!0,Oe=U.dataReady,Ie=R(E,O);if(E.isDepthTexture)ce=y(E.format===si,E.type),be&&(ge?t.texStorage2D(r.TEXTURE_2D,1,ce,O.width,O.height):t.texImage2D(r.TEXTURE_2D,0,ce,O.width,O.height,0,J,Z,null));else if(E.isDataTexture)if(le.length>0){ge&&be&&t.texStorage2D(r.TEXTURE_2D,Ie,ce,le[0].width,le[0].height);for(let ve=0,ze=le.length;ve<ze;ve++)$=le[ve],ge?Oe&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,$.width,$.height,J,Z,$.data):t.texImage2D(r.TEXTURE_2D,ve,ce,$.width,$.height,0,J,Z,$.data);E.generateMipmaps=!1}else ge?(be&&t.texStorage2D(r.TEXTURE_2D,Ie,ce,O.width,O.height),Oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,O.width,O.height,J,Z,O.data)):t.texImage2D(r.TEXTURE_2D,0,ce,O.width,O.height,0,J,Z,O.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ge&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ce,le[0].width,le[0].height,O.depth);for(let ve=0,ze=le.length;ve<ze;ve++)if($=le[ve],E.format!==Bt)if(J!==null)if(ge){if(Oe)if(E.layerUpdates.size>0){let Ge=hc($.width,$.height,E.format,E.type);for(let Ye of E.layerUpdates){let pe=$.data.subarray(Ye*Ge/$.data.BYTES_PER_ELEMENT,(Ye+1)*Ge/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Ye,$.width,$.height,1,J,pe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,$.width,$.height,O.depth,J,$.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,ce,$.width,$.height,O.depth,0,$.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?Oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,$.width,$.height,O.depth,J,Z,$.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ve,ce,$.width,$.height,O.depth,0,J,Z,$.data)}else{ge&&be&&t.texStorage2D(r.TEXTURE_2D,Ie,ce,le[0].width,le[0].height);for(let ve=0,ze=le.length;ve<ze;ve++)$=le[ve],E.format!==Bt?J!==null?ge?Oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,$.width,$.height,J,$.data):t.compressedTexImage2D(r.TEXTURE_2D,ve,ce,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?Oe&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,$.width,$.height,J,Z,$.data):t.texImage2D(r.TEXTURE_2D,ve,ce,$.width,$.height,0,J,Z,$.data)}else if(E.isDataArrayTexture)if(ge){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ce,O.width,O.height,O.depth),Oe)if(E.layerUpdates.size>0){let ve=hc(O.width,O.height,E.format,E.type);for(let ze of E.layerUpdates){let Ge=O.data.subarray(ze*ve/O.data.BYTES_PER_ELEMENT,(ze+1)*ve/O.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ze,O.width,O.height,1,J,Z,Ge)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,J,Z,O.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ce,O.width,O.height,O.depth,0,J,Z,O.data);else if(E.isData3DTexture)ge?(be&&t.texStorage3D(r.TEXTURE_3D,Ie,ce,O.width,O.height,O.depth),Oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,J,Z,O.data)):t.texImage3D(r.TEXTURE_3D,0,ce,O.width,O.height,O.depth,0,J,Z,O.data);else if(E.isFramebufferTexture){if(be)if(ge)t.texStorage2D(r.TEXTURE_2D,Ie,ce,O.width,O.height);else{let ve=O.width,ze=O.height;for(let Ge=0;Ge<Ie;Ge++)t.texImage2D(r.TEXTURE_2D,Ge,ce,ve,ze,0,J,Z,null),ve>>=1,ze>>=1}}else if(le.length>0){if(ge&&be){let ve=oe(le[0]);t.texStorage2D(r.TEXTURE_2D,Ie,ce,ve.width,ve.height)}for(let ve=0,ze=le.length;ve<ze;ve++)$=le[ve],ge?Oe&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,J,Z,$):t.texImage2D(r.TEXTURE_2D,ve,ce,J,Z,$);E.generateMipmaps=!1}else if(ge){if(be){let ve=oe(O);t.texStorage2D(r.TEXTURE_2D,Ie,ce,ve.width,ve.height)}Oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,J,Z,O)}else t.texImage2D(r.TEXTURE_2D,0,ce,J,Z,O);m(E)&&g(D),M.__version=U.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function ne(w,E,N,D,A,U){let M=s.convert(N.format,N.colorSpace),I=s.convert(N.type),B=_(N.internalFormat,M,I,N.colorSpace),Q=n.get(E),O=n.get(N);if(O.__renderTarget=E,!Q.__hasExternalTextures){let J=Math.max(1,E.width>>U),Z=Math.max(1,E.height>>U);A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY?t.texImage3D(A,U,B,J,Z,E.depth,0,M,I,null):t.texImage2D(A,U,B,J,Z,0,M,I,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),ue(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,D,A,O.__webglTexture,0,se(E)):(A===r.TEXTURE_2D||A>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,D,A,O.__webglTexture,U),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(w,E,N){if(r.bindRenderbuffer(r.RENDERBUFFER,w),E.depthBuffer){let D=E.depthTexture,A=D&&D.isDepthTexture?D.type:null,U=y(E.stencilBuffer,A),M=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=se(E);ue(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I,U,E.width,E.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I,U,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,U,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,M,r.RENDERBUFFER,w)}else{let D=E.textures;for(let A=0;A<D.length;A++){let U=D[A],M=s.convert(U.format,U.colorSpace),I=s.convert(U.type),B=_(U.internalFormat,M,I,U.colorSpace),Q=se(E);N&&ue(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,B,E.width,E.height):ue(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,B,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,B,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function me(w){let E=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){let D=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),D){let A=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,D.removeEventListener("dispose",A)};D.addEventListener("dispose",A),E.__depthDisposeCallback=A}E.__boundDepthTexture=D}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");(function(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,D),!A.depthTexture||!A.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=n.get(A.depthTexture);U.__renderTarget=A,U.__webglTexture&&A.depthTexture.image.width===A.width&&A.depthTexture.image.height===A.height||(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let M=U.__webglTexture,I=se(A);if(A.depthTexture.format===ki)ue(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,M,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,M,0);else{if(A.depthTexture.format!==si)throw new Error("Unknown depthTexture format");ue(A)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,M,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,M,0)}})(E.__webglFramebuffer,w)}else if(N){E.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[D]),E.__webglDepthbuffer[D]===void 0)E.__webglDepthbuffer[D]=r.createRenderbuffer(),te(E.__webglDepthbuffer[D],w,!1);else{let A=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,U=E.__webglDepthbuffer[D];r.bindRenderbuffer(r.RENDERBUFFER,U),r.framebufferRenderbuffer(r.FRAMEBUFFER,A,r.RENDERBUFFER,U)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),te(E.__webglDepthbuffer,w,!1);else{let D=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,A),r.framebufferRenderbuffer(r.FRAMEBUFFER,D,r.RENDERBUFFER,A)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let _e=[],ee=[];function se(w){return Math.min(i.maxSamples,w.samples)}function ue(w){let E=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function de(w,E){let N=w.colorSpace,D=w.format,A=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==vi&&N!==Kn&&(Fe.getTransfer(N)===Ve?D===Bt&&A===hn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),E}function oe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=function(){let w=L;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),L+=1,w},this.resetTextureUnits=function(){L=0},this.setTexture2D=F,this.setTexture2DArray=function(w,E){let N=n.get(w);w.version>0&&N.__version!==w.version?Y(N,w,E):t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+E)},this.setTexture3D=function(w,E){let N=n.get(w);w.version>0&&N.__version!==w.version?Y(N,w,E):t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+E)},this.setTextureCube=function(w,E){let N=n.get(w);w.version>0&&N.__version!==w.version?function(D,A,U){if(A.image.length!==6)return;let M=q(D,A),I=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+U);let B=n.get(I);if(I.version!==B.__version||M===!0){t.activeTexture(r.TEXTURE0+U);let Q=Fe.getPrimaries(Fe.workingColorSpace),O=A.colorSpace===Kn?null:Fe.getPrimaries(A.colorSpace),J=A.colorSpace===Kn||Q===O?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let Z=A.isCompressedTexture||A.image[0].isCompressedTexture,$=A.image[0]&&A.image[0].isDataTexture,ce=[];for(let pe=0;pe<6;pe++)ce[pe]=Z||$?$?A.image[pe].image:A.image[pe]:x(A.image[pe],!0,i.maxCubemapSize),ce[pe]=de(A,ce[pe]);let le=ce[0],ge=s.convert(A.format,A.colorSpace),be=s.convert(A.type),Oe=_(A.internalFormat,ge,be,A.colorSpace),Ie=A.isVideoTexture!==!0,ve=B.__version===void 0||M===!0,ze=I.dataReady,Ge,Ye=R(A,le);if(V(r.TEXTURE_CUBE_MAP,A),Z){Ie&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ye,Oe,le.width,le.height);for(let pe=0;pe<6;pe++){Ge=ce[pe].mipmaps;for(let Ue=0;Ue<Ge.length;Ue++){let He=Ge[Ue];A.format!==Bt?ge!==null?Ie?ze&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,He.width,He.height,ge,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,Oe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?ze&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,He.width,He.height,ge,be,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,Oe,He.width,He.height,0,ge,be,He.data)}}}else{if(Ge=A.mipmaps,Ie&&ve){Ge.length>0&&Ye++;let pe=oe(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ye,Oe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if($){Ie?ze&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce[pe].width,ce[pe].height,ge,be,ce[pe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Oe,ce[pe].width,ce[pe].height,0,ge,be,ce[pe].data);for(let Ue=0;Ue<Ge.length;Ue++){let He=Ge[Ue].image[pe].image;Ie?ze&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,He.width,He.height,ge,be,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,Oe,He.width,He.height,0,ge,be,He.data)}}else{Ie?ze&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ge,be,ce[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Oe,ge,be,ce[pe]);for(let Ue=0;Ue<Ge.length;Ue++){let He=Ge[Ue];Ie?ze&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,ge,be,He.image[pe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,Oe,ge,be,He.image[pe])}}}m(A)&&g(r.TEXTURE_CUBE_MAP),B.__version=I.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}(N,w,E):t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+E)},this.rebindTextures=function(w,E,N){let D=n.get(w);E!==void 0&&ne(D.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&me(w)},this.setupRenderTarget=function(w){let E=w.texture,N=n.get(w),D=n.get(E);w.addEventListener("dispose",C);let A=w.textures,U=w.isWebGLCubeRenderTarget===!0,M=A.length>1;if(M||(D.__webglTexture===void 0&&(D.__webglTexture=r.createTexture()),D.__version=E.version,a.memory.textures++),U){N.__webglFramebuffer=[];for(let I=0;I<6;I++)if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer[I]=[];for(let B=0;B<E.mipmaps.length;B++)N.__webglFramebuffer[I][B]=r.createFramebuffer()}else N.__webglFramebuffer[I]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){N.__webglFramebuffer=[];for(let I=0;I<E.mipmaps.length;I++)N.__webglFramebuffer[I]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(M)for(let I=0,B=A.length;I<B;I++){let Q=n.get(A[I]);Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&ue(w)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let I=0;I<A.length;I++){let B=A[I];N.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[I]);let Q=s.convert(B.format,B.colorSpace),O=s.convert(B.type),J=_(B.internalFormat,Q,O,B.colorSpace,w.isXRRenderTarget===!0),Z=se(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,J,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+I,r.RENDERBUFFER,N.__webglColorRenderbuffer[I])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),te(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(U){t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture),V(r.TEXTURE_CUBE_MAP,E);for(let I=0;I<6;I++)if(E.mipmaps&&E.mipmaps.length>0)for(let B=0;B<E.mipmaps.length;B++)ne(N.__webglFramebuffer[I][B],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,B);else ne(N.__webglFramebuffer[I],w,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);m(E)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(M){for(let I=0,B=A.length;I<B;I++){let Q=A[I],O=n.get(Q);t.bindTexture(r.TEXTURE_2D,O.__webglTexture),V(r.TEXTURE_2D,Q),ne(N.__webglFramebuffer,w,Q,r.COLOR_ATTACHMENT0+I,r.TEXTURE_2D,0),m(Q)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let I=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(I=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(I,D.__webglTexture),V(I,E),E.mipmaps&&E.mipmaps.length>0)for(let B=0;B<E.mipmaps.length;B++)ne(N.__webglFramebuffer[B],w,E,r.COLOR_ATTACHMENT0,I,B);else ne(N.__webglFramebuffer,w,E,r.COLOR_ATTACHMENT0,I,0);m(E)&&g(I),t.unbindTexture()}w.depthBuffer&&me(w)},this.updateRenderTargetMipmap=function(w){let E=w.textures;for(let N=0,D=E.length;N<D;N++){let A=E[N];if(m(A)){let U=v(w),M=n.get(A).__webglTexture;t.bindTexture(U,M),g(U),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(ue(w)===!1){let E=w.textures,N=w.width,D=w.height,A=r.COLOR_BUFFER_BIT,U=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,M=n.get(w),I=E.length>1;if(I)for(let B=0;B<E.length;B++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,M.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,M.__webglFramebuffer);for(let B=0;B<E.length;B++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(A|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(A|=r.STENCIL_BUFFER_BIT)),I){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,M.__webglColorRenderbuffer[B]);let Q=n.get(E[B]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,N,D,0,0,N,D,A,r.NEAREST),l===!0&&(_e.length=0,ee.length=0,_e.push(r.COLOR_ATTACHMENT0+B),w.depthBuffer&&w.resolveDepthBuffer===!1&&(_e.push(U),ee.push(U),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ee)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),I)for(let B=0;B<E.length;B++){t.bindFramebuffer(r.FRAMEBUFFER,M.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,M.__webglColorRenderbuffer[B]);let Q=n.get(E[B]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,M.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let E=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}},this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ue}function wd(r,e){return{convert:function(t,n=""){let i,s=Fe.getTransfer(n);if(t===hn)return r.UNSIGNED_BYTE;if(t===Ho)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Go)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Cc)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Ac)return r.BYTE;if(t===Rc)return r.SHORT;if(t===zi)return r.UNSIGNED_SHORT;if(t===Vo)return r.INT;if(t===Pn)return r.UNSIGNED_INT;if(t===Jt)return r.FLOAT;if(t===Yi)return r.HALF_FLOAT;if(t===Pc)return r.ALPHA;if(t===Ic)return r.RGB;if(t===Bt)return r.RGBA;if(t===Lc)return r.LUMINANCE;if(t===Uc)return r.LUMINANCE_ALPHA;if(t===ki)return r.DEPTH_COMPONENT;if(t===si)return r.DEPTH_STENCIL;if(t===Dc)return r.RED;if(t===Wo)return r.RED_INTEGER;if(t===Nc)return r.RG;if(t===Xo)return r.RG_INTEGER;if(t===jo)return r.RGBA_INTEGER;if(t===Ir||t===Lr||t===Ur||t===Dr)if(s===Ve){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Ir)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Lr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ur)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Dr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Ir)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Lr)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ur)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Dr)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===ma||t===fa||t===ga||t===va){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===ma)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===fa)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===ga)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===va)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===_a||t===xa||t===ya){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===_a||t===xa)return s===Ve?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===ya)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===Ma||t===Sa||t===ba||t===Ta||t===Ea||t===wa||t===Aa||t===Ra||t===Ca||t===Pa||t===Ia||t===La||t===Ua||t===Da){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===Ma)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Sa)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===ba)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Ta)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Ea)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===wa)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Aa)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Ra)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Ca)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Pa)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Ia)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===La)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Ua)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Da)return s===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Nr||t===Na||t===Oa){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Nr)return s===Ve?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Na)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Oa)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Oc||t===Ba||t===Fa||t===za){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Nr)return i.COMPRESSED_RED_RGTC1_EXT;if(t===Ba)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Fa)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===za)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ri?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var to=class extends ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},It=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ad={type:"move"},Di=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ad)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},no=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new vt;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ht({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},io=class extends un{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,x=new no,m=t.getContextAttributes(),g=null,v=null,_=[],y=[],R=new ie,T=null,C=new ct;C.viewport=new ke;let P=new ct;P.viewport=new ke;let L=[C,P],F=new to,G=null,z=null;function W(ee){let se=y.indexOf(ee.inputSource);if(se===-1)return;let ue=_[se];ue!==void 0&&(ue.update(ee.inputSource,ee.frame,c||a),ue.dispatchEvent({type:ee.type,data:ee.inputSource}))}function V(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let ee=0;ee<_.length;ee++){let se=y[ee];se!==null&&(y[ee]=null,_[ee].disconnect(se))}G=null,z=null,x.reset(),e.setRenderTarget(g),p=null,u=null,d=null,i=null,v=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function q(ee){for(let se=0;se<ee.removed.length;se++){let ue=ee.removed[se],de=y.indexOf(ue);de>=0&&(y[de]=null,_[de].disconnect(ue))}for(let se=0;se<ee.added.length;se++){let ue=ee.added[se],de=y.indexOf(ue);if(de===-1){for(let w=0;w<_.length;w++){if(w>=y.length){y.push(ue),de=w;break}if(y[w]===null){y[w]=ue,de=w;break}}if(de===-1)break}let oe=_[de];oe&&oe.connect(ue)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let se=_[ee];return se===void 0&&(se=new Di,_[ee]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ee){let se=_[ee];return se===void 0&&(se=new Di,_[ee]=se),se.getGripSpace()},this.getHand=function(ee){let se=_[ee];return se===void 0&&(se=new Di,_[ee]=se),se.getHandSpace()},this.setFramebufferScaleFactor=function(ee){s=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Qt(p.framebufferWidth,p.framebufferHeight,{format:Bt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ue=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?si:ki,ue=m.stencil?ri:Pn);let oe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(oe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Qt(u.textureWidth,u.textureHeight,{format:Bt,type:hn,depthTexture:new qr(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let Y=new b,ne=new b;function te(ee,se){se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let se=ee.near,ue=ee.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),F.near=P.near=C.near=se,F.far=P.far=C.far=ue,G===F.near&&z===F.far||(i.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,z=F.far),C.layers.mask=2|ee.layers.mask,P.layers.mask=4|ee.layers.mask,F.layers.mask=C.layers.mask|P.layers.mask;let de=ee.parent,oe=F.cameras;te(F,de);for(let w=0;w<oe.length;w++)te(oe[w],de);oe.length===2?function(w,E,N){Y.setFromMatrixPosition(E.matrixWorld),ne.setFromMatrixPosition(N.matrixWorld);let D=Y.distanceTo(ne),A=E.projectionMatrix.elements,U=N.projectionMatrix.elements,M=A[14]/(A[10]-1),I=A[14]/(A[10]+1),B=(A[9]+1)/A[5],Q=(A[9]-1)/A[5],O=(A[8]-1)/A[0],J=(U[8]+1)/U[0],Z=M*O,$=M*J,ce=D/(-O+J),le=ce*-O;if(E.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(le),w.translateZ(ce),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),A[10]===-1)w.projectionMatrix.copy(E.projectionMatrix),w.projectionMatrixInverse.copy(E.projectionMatrixInverse);else{let ge=M+ce,be=I+ce,Oe=Z-le,Ie=$+(D-le),ve=B*I/be*ge,ze=Q*I/be*ge;w.projectionMatrix.makePerspective(Oe,Ie,ve,ze,ge,be),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}(F,C,P):F.projectionMatrix.copy(C.projectionMatrix),function(w,E,N){N===null?w.matrix.copy(E.matrixWorld):(w.matrix.copy(N.matrixWorld),w.matrix.invert(),w.matrix.multiply(E.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(E.projectionMatrix),w.projectionMatrixInverse.copy(E.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*Va*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}(ee,F,de)},this.getCamera=function(){return F},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)};let me=null,_e=new kc;_e.setAnimationLoop(function(ee,se){if(h=se.getViewerPose(c||a),f=se,h!==null){let ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let de=!1;ue.length!==F.cameras.length&&(F.cameras.length=0,de=!0);for(let w=0;w<ue.length;w++){let E=ue[w],N=null;if(p!==null)N=p.getViewport(E);else{let A=d.getViewSubImage(u,E);N=A.viewport,w===0&&(e.setRenderTargetTextures(v,A.colorTexture,u.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(v))}let D=L[w];D===void 0&&(D=new ct,D.layers.enable(w),D.viewport=new ke,L[w]=D),D.matrix.fromArray(E.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(E.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(N.x,N.y,N.width,N.height),w===0&&(F.matrix.copy(D.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),de===!0&&F.cameras.push(D)}let oe=i.enabledFeatures;if(oe&&oe.includes("depth-sensing")){let w=d.getDepthInformation(ue[0]);w&&w.isValid&&w.texture&&x.init(e,w,i.renderState)}}for(let ue=0;ue<_.length;ue++){let de=y[ue],oe=_[ue];de!==null&&oe!==void 0&&oe.update(de,se,c||a)}me&&me(ee,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),f=null}),this.setAnimationLoop=function(ee){me=ee},this.dispose=function(){}}},En=new Vt,Rd=new Ce;function Cd(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===1&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===1&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,En.copy(l),En.x*=-1,En.y*=-1,En.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),i.envMapRotation.value.setFromMatrix4(Rd.makeRotationFromEuler(En)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,zc(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(i,s)):s.isMeshPhongMaterial?(n(i,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(i,s)):s.isMeshStandardMaterial?(n(i,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(i,s),s.isMeshPhysicalMaterial&&function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(i,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(i,s)):s.isPointsMaterial?function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Pd(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,u,p,f){let x=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof x=="number"||typeof x=="boolean"?x:x.clone(),!0;{let g=f[m];if(typeof x=="number"||typeof x=="boolean"){if(g!==x)return f[m]=x,!0}else if(g.equals(x)===!1)return g.copy(x),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[u.id]),delete i[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=i[d.id];p===void 0&&(function(m){let g=m.uniforms,v=0,_=16;for(let R=0,T=g.length;R<T;R++){let C=Array.isArray(g[R])?g[R]:[g[R]];for(let P=0,L=C.length;P<L;P++){let F=C[P],G=Array.isArray(F.value)?F.value:[F.value];for(let z=0,W=G.length;z<W;z++){let V=c(G[z]),q=v%_,Y=q%V.boundary,ne=q+Y;v+=Y,ne!==0&&_-ne<V.storage&&(v+=_-ne),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=V.storage}}}let y=v%_;y>0&&(v+=_-y),m.__size=v,m.__cache={}}(d),p=function(m){let g=function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=g;let v=r.createBuffer(),_=m.__size,y=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,_,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,v),v}(d),i[d.id]=p,d.addEventListener("dispose",h));let f=u.program;n.updateUBOMapping(d,f);let x=e.render.frame;s[d.id]!==x&&(function(m){let g=i[m.id],v=m.uniforms,_=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let y=0,R=v.length;y<R;y++){let T=Array.isArray(v[y])?v[y]:[v[y]];for(let C=0,P=T.length;C<P;C++){let L=T[C];if(l(L,y,C,_)===!0){let F=L.__offset,G=Array.isArray(L.value)?L.value:[L.value],z=0;for(let W=0;W<G.length;W++){let V=G[W],q=c(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,F+z,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(d),s[d.id]=x)},dispose:function(){for(let d in i)r.deleteBuffer(i[d]);a=[],i={},s={}}}}var Yr=class{constructor(e={}){let{canvas:t=kh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this.toneMapping=0,this.toneMappingExposure=1;let y=this,R=!1,T=0,C=0,P=null,L=-1,F=null,G=new ke,z=new ke,W=null,V=new Se(0),q=0,Y=t.width,ne=t.height,te=1,me=null,_e=null,ee=new ke(0,0,Y,ne),se=new ke(0,0,Y,ne),ue=!1,de=new ci,oe=!1,w=!1,E=new Ce,N=new Ce,D=new b,A=new ke,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},M=!1;function I(){return P===null?te:1}let B,Q,O,J,Z,$,ce,le,ge,be,Oe,Ie,ve,ze,Ge,Ye,pe,Ue,He,On,Qi,Tt,Dt,gn,k=n;function Mi(S,H){return t.getContext(S,H)}try{let S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",$o,!1),t.addEventListener("webglcontextrestored",el,!1),t.addEventListener("webglcontextcreationerror",tl,!1),k===null){let H="webgl2";if(k=Mi(H,S),k===null)throw Mi(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}function Qo(){B=new uu(k),B.init(),Tt=new wd(k,B),Q=new ou(k,B,e,Tt),O=new Td(k,B),Q.reverseDepthBuffer&&u&&O.buffers.depth.setReversed(!0),J=new mu(k),Z=new md,$=new Ed(k,B,O,Z,Q,Tt,J),ce=new cu(y),le=new hu(y),ge=new nu(k),Dt=new su(k,ge),be=new du(k,ge,J,Dt),Oe=new gu(k,be,ge,J),He=new fu(k,Q,$),Ye=new lu(Z),Ie=new pd(y,ce,le,B,Q,Dt,Ye),ve=new Cd(y,Z),ze=new gd,Ge=new Md(B),Ue=new ru(y,ce,le,O,Oe,p,l),pe=new Sd(y,Oe,Q),gn=new Pd(k,J,Q,O),On=new au(k,B,J),Qi=new pu(k,B,J),J.programs=Ie.programs,y.capabilities=Q,y.extensions=B,y.properties=Z,y.renderLists=ze,y.shadowMap=pe,y.state=O,y.info=J}Qo();let it=new io(y,k);function $o(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function el(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let S=J.autoReset,H=pe.enabled,j=pe.autoUpdate,K=pe.needsUpdate,X=pe.type;Qo(),J.autoReset=S,pe.enabled=H,pe.autoUpdate=j,pe.needsUpdate=K,pe.type=X}function tl(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function nl(S){let H=S.target;H.removeEventListener("dispose",nl),function(j){(function(K){let X=Z.get(K).programs;X!==void 0&&(X.forEach(function(re){Ie.releaseProgram(re)}),K.isShaderMaterial&&Ie.releaseShaderCache(K))})(j),Z.remove(j)}(H)}function il(S,H,j){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,er(S,H,j),S.side=0,S.needsUpdate=!0,er(S,H,j),S.side=2):er(S,H,j)}this.xr=it,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=B.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=B.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize(Y,ne,!1))},this.getSize=function(S){return S.set(Y,ne)},this.setSize=function(S,H,j=!0){it.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Y=S,ne=H,t.width=Math.floor(S*te),t.height=Math.floor(H*te),j===!0&&(t.style.width=S+"px",t.style.height=H+"px"),this.setViewport(0,0,S,H))},this.getDrawingBufferSize=function(S){return S.set(Y*te,ne*te).floor()},this.setDrawingBufferSize=function(S,H,j){Y=S,ne=H,te=j,t.width=Math.floor(S*j),t.height=Math.floor(H*j),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(ee)},this.setViewport=function(S,H,j,K){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,H,j,K),O.viewport(G.copy(ee).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(se)},this.setScissor=function(S,H,j,K){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,H,j,K),O.scissor(z.copy(se).multiplyScalar(te).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(S){O.setScissorTest(ue=S)},this.setOpaqueSort=function(S){me=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(S=!0,H=!0,j=!0){let K=0;if(S){let X=!1;if(P!==null){let re=P.texture.format;X=re===jo||re===Xo||re===Wo}if(X){let re=P.texture.type,he=re===hn||re===Pn||re===zi||re===ri||re===Ho||re===Go,fe=Ue.getClearColor(),xe=Ue.getClearAlpha(),Ee=fe.r,Ae=fe.g,ye=fe.b;he?(f[0]=Ee,f[1]=Ae,f[2]=ye,f[3]=xe,k.clearBufferuiv(k.COLOR,0,f)):(x[0]=Ee,x[1]=Ae,x[2]=ye,x[3]=xe,k.clearBufferiv(k.COLOR,0,x))}else K|=k.COLOR_BUFFER_BIT}H&&(K|=k.DEPTH_BUFFER_BIT),j&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$o,!1),t.removeEventListener("webglcontextrestored",el,!1),t.removeEventListener("webglcontextcreationerror",tl,!1),ze.dispose(),Ge.dispose(),Z.dispose(),ce.dispose(),le.dispose(),Oe.dispose(),Dt.dispose(),gn.dispose(),Ie.dispose(),it.dispose(),it.removeEventListener("sessionstart",rl),it.removeEventListener("sessionend",sl),vn.stop()},this.renderBufferDirect=function(S,H,j,K,X,re){H===null&&(H=U);let he=X.isMesh&&X.matrixWorld.determinant()<0,fe=function(Ne,ht,at,Pe,Te){ht.isScene!==!0&&(ht=U),$.resetTextureUnits();let Et=ht.fog,xs=Pe.isMeshStandardMaterial?ht.environment:null,Si=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:vi,Bn=(Pe.isMeshStandardMaterial?le:ce).get(Pe.envMap||xs),ys=Pe.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Ms=!!at.attributes.tangent&&(!!Pe.normalMap||Pe.anisotropy>0),Ss=!!at.morphAttributes.position,$t=!!at.morphAttributes.normal,eh=!!at.morphAttributes.color,ul=0;Pe.toneMapped&&(P!==null&&P.isXRRenderTarget!==!0||(ul=y.toneMapping));let dl=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,th=dl!==void 0?dl.length:0,De=Z.get(Pe),nh=g.state.lights;if(oe===!0&&(w===!0||Ne!==F)){let _t=Ne===F&&Pe.id===L;Ye.setState(Pe,Ne,_t)}let wt=!1;Pe.version===De.__version?De.needsLights&&De.lightsStateVersion!==nh.state.version||De.outputColorSpace!==Si||Te.isBatchedMesh&&De.batching===!1?wt=!0:Te.isBatchedMesh||De.batching!==!0?Te.isBatchedMesh&&De.batchingColor===!0&&Te.colorTexture===null||Te.isBatchedMesh&&De.batchingColor===!1&&Te.colorTexture!==null||Te.isInstancedMesh&&De.instancing===!1?wt=!0:Te.isInstancedMesh||De.instancing!==!0?Te.isSkinnedMesh&&De.skinning===!1?wt=!0:Te.isSkinnedMesh||De.skinning!==!0?Te.isInstancedMesh&&De.instancingColor===!0&&Te.instanceColor===null||Te.isInstancedMesh&&De.instancingColor===!1&&Te.instanceColor!==null||Te.isInstancedMesh&&De.instancingMorph===!0&&Te.morphTexture===null||Te.isInstancedMesh&&De.instancingMorph===!1&&Te.morphTexture!==null||De.envMap!==Bn||Pe.fog===!0&&De.fog!==Et?wt=!0:De.numClippingPlanes===void 0||De.numClippingPlanes===Ye.numPlanes&&De.numIntersection===Ye.numIntersection?(De.vertexAlphas!==ys||De.vertexTangents!==Ms||De.morphTargets!==Ss||De.morphNormals!==$t||De.morphColors!==eh||De.toneMapping!==ul||De.morphTargetsCount!==th)&&(wt=!0):wt=!0:wt=!0:wt=!0:wt=!0:(wt=!0,De.__version=Pe.version);let _n=De.currentProgram;wt===!0&&(_n=er(Pe,ht,Te));let pl=!1,bi=!1,bs=!1,Qe=_n.getUniforms(),en=De.uniforms;if(O.useProgram(_n.program)&&(pl=!0,bi=!0,bs=!0),Pe.id!==L&&(L=Pe.id,bi=!0),pl||F!==Ne){O.buffers.depth.getReversed()?(E.copy(Ne.projectionMatrix),function(xn){let je=xn.elements;je[2]=.5*je[2]+.5*je[3],je[6]=.5*je[6]+.5*je[7],je[10]=.5*je[10]+.5*je[11],je[14]=.5*je[14]+.5*je[15]}(E),function(xn){let je=xn.elements;je[11]===-1?(je[10]=-je[10]-1,je[14]=-je[14]):(je[10]=-je[10],je[14]=1-je[14])}(E),Qe.setValue(k,"projectionMatrix",E)):Qe.setValue(k,"projectionMatrix",Ne.projectionMatrix),Qe.setValue(k,"viewMatrix",Ne.matrixWorldInverse);let _t=Qe.map.cameraPosition;_t!==void 0&&_t.setValue(k,D.setFromMatrixPosition(Ne.matrixWorld)),Q.logarithmicDepthBuffer&&Qe.setValue(k,"logDepthBufFC",2/(Math.log(Ne.far+1)/Math.LN2)),(Pe.isMeshPhongMaterial||Pe.isMeshToonMaterial||Pe.isMeshLambertMaterial||Pe.isMeshBasicMaterial||Pe.isMeshStandardMaterial||Pe.isShaderMaterial)&&Qe.setValue(k,"isOrthographic",Ne.isOrthographicCamera===!0),F!==Ne&&(F=Ne,bi=!0,bs=!0)}if(Te.isSkinnedMesh){Qe.setOptional(k,Te,"bindMatrix"),Qe.setOptional(k,Te,"bindMatrixInverse");let _t=Te.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),Qe.setValue(k,"boneTexture",_t.boneTexture,$))}Te.isBatchedMesh&&(Qe.setOptional(k,Te,"batchingTexture"),Qe.setValue(k,"batchingTexture",Te._matricesTexture,$),Qe.setOptional(k,Te,"batchingIdTexture"),Qe.setValue(k,"batchingIdTexture",Te._indirectTexture,$),Qe.setOptional(k,Te,"batchingColorTexture"),Te._colorsTexture!==null&&Qe.setValue(k,"batchingColorTexture",Te._colorsTexture,$));let Ts=at.morphAttributes;Ts.position===void 0&&Ts.normal===void 0&&Ts.color===void 0||He.update(Te,at,_n),(bi||De.receiveShadow!==Te.receiveShadow)&&(De.receiveShadow=Te.receiveShadow,Qe.setValue(k,"receiveShadow",Te.receiveShadow)),Pe.isMeshGouraudMaterial&&Pe.envMap!==null&&(en.envMap.value=Bn,en.flipEnvMap.value=Bn.isCubeTexture&&Bn.isRenderTargetTexture===!1?-1:1),Pe.isMeshStandardMaterial&&Pe.envMap===null&&ht.environment!==null&&(en.envMapIntensity.value=ht.environmentIntensity),bi&&(Qe.setValue(k,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&(At=bs,(Nt=en).ambientLightColor.needsUpdate=At,Nt.lightProbe.needsUpdate=At,Nt.directionalLights.needsUpdate=At,Nt.directionalLightShadows.needsUpdate=At,Nt.pointLights.needsUpdate=At,Nt.pointLightShadows.needsUpdate=At,Nt.spotLights.needsUpdate=At,Nt.spotLightShadows.needsUpdate=At,Nt.rectAreaLights.needsUpdate=At,Nt.hemisphereLights.needsUpdate=At),Et&&Pe.fog===!0&&ve.refreshFogUniforms(en,Et),ve.refreshMaterialUniforms(en,Pe,te,ne,g.state.transmissionRenderTarget[Ne.id]),ti.upload(k,cl(De),en,$));var Nt,At;if(Pe.isShaderMaterial&&Pe.uniformsNeedUpdate===!0&&(ti.upload(k,cl(De),en,$),Pe.uniformsNeedUpdate=!1),Pe.isSpriteMaterial&&Qe.setValue(k,"center",Te.center),Qe.setValue(k,"modelViewMatrix",Te.modelViewMatrix),Qe.setValue(k,"normalMatrix",Te.normalMatrix),Qe.setValue(k,"modelMatrix",Te.matrixWorld),Pe.isShaderMaterial||Pe.isRawShaderMaterial){let _t=Pe.uniformsGroups;for(let xn=0,je=_t.length;xn<je;xn++){let ml=_t[xn];gn.update(ml,_n),gn.bind(ml,_n)}}return _n}(S,H,j,K,X);O.setMaterial(K,he);let xe=j.index,Ee=1;if(K.wireframe===!0){if(xe=be.getWireframeAttribute(j),xe===void 0)return;Ee=2}let Ae=j.drawRange,ye=j.attributes.position,Le=Ae.start*Ee,Ke=(Ae.start+Ae.count)*Ee;re!==null&&(Le=Math.max(Le,re.start*Ee),Ke=Math.min(Ke,(re.start+re.count)*Ee)),xe!==null?(Le=Math.max(Le,0),Ke=Math.min(Ke,xe.count)):ye!=null&&(Le=Math.max(Le,0),Ke=Math.min(Ke,ye.count));let We=Ke-Le;if(We<0||We===1/0)return;let et;Dt.setup(X,K,fe,j,xe);let Xe=On;if(xe!==null&&(et=ge.get(xe),Xe=Qi,Xe.setIndex(et)),X.isMesh)K.wireframe===!0?(O.setLineWidth(K.wireframeLinewidth*I()),Xe.setMode(k.LINES)):Xe.setMode(k.TRIANGLES);else if(X.isLine){let Ne=K.linewidth;Ne===void 0&&(Ne=1),O.setLineWidth(Ne*I()),X.isLineSegments?Xe.setMode(k.LINES):X.isLineLoop?Xe.setMode(k.LINE_LOOP):Xe.setMode(k.LINE_STRIP)}else X.isPoints?Xe.setMode(k.POINTS):X.isSprite&&Xe.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Xe.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))Xe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ne=X._multiDrawStarts,ht=X._multiDrawCounts,at=X._multiDrawCount,Pe=xe?ge.get(xe).bytesPerElement:1,Te=Z.get(K).currentProgram.getUniforms();for(let Et=0;Et<at;Et++)Te.setValue(k,"_gl_DrawID",Et),Xe.render(Ne[Et]/Pe,ht[Et])}else if(X.isInstancedMesh)Xe.renderInstances(Le,We,X.count);else if(j.isInstancedBufferGeometry){let Ne=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ht=Math.min(j.instanceCount,Ne);Xe.renderInstances(Le,We,ht)}else Xe.render(Le,We)},this.compile=function(S,H,j=null){j===null&&(j=S),g=Ge.get(j),g.init(H),_.push(g),j.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),S!==j&&S.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();let K=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let re=X.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){let fe=re[he];il(fe,j,X),K.add(fe)}else il(re,j,X),K.add(re)}),_.pop(),g=null,K},this.compileAsync=function(S,H,j=null){let K=this.compile(S,H,j);return new Promise(X=>{function re(){K.forEach(function(he){Z.get(he).currentProgram.isReady()&&K.delete(he)}),K.size!==0?setTimeout(re,10):X(S)}B.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let vs=null;function rl(){vn.stop()}function sl(){vn.start()}let vn=new kc;function _s(S,H,j,K){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)j=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||de.intersectsSprite(S)){K&&A.setFromMatrixPosition(S.matrixWorld).applyMatrix4(N);let re=Oe.update(S),he=S.material;he.visible&&m.push(S,re,he,j,A.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||de.intersectsObject(S))){let re=Oe.update(S),he=S.material;if(K&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),A.copy(S.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),A.copy(re.boundingSphere.center)),A.applyMatrix4(S.matrixWorld).applyMatrix4(N)),Array.isArray(he)){let fe=re.groups;for(let xe=0,Ee=fe.length;xe<Ee;xe++){let Ae=fe[xe],ye=he[Ae.materialIndex];ye&&ye.visible&&m.push(S,re,ye,j,A.z,Ae)}}else he.visible&&m.push(S,re,he,j,A.z,null)}}let X=S.children;for(let re=0,he=X.length;re<he;re++)_s(X[re],H,j,K)}function al(S,H,j,K){let X=S.opaque,re=S.transmissive,he=S.transparent;g.setupLightsView(j),oe===!0&&Ye.setGlobalState(y.clippingPlanes,j),K&&O.viewport(G.copy(K)),X.length>0&&$i(X,H,j),re.length>0&&$i(re,H,j),he.length>0&&$i(he,H,j),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function ol(S,H,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new Qt(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Yi:hn,minFilter:Qn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Fe.workingColorSpace}));let X=g.state.transmissionRenderTarget[K.id],re=K.viewport||G;X.setSize(re.z,re.w);let he=y.getRenderTarget();y.setRenderTarget(X),y.getClearColor(V),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),M&&Ue.render(j);let fe=y.toneMapping;y.toneMapping=0;let xe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),oe===!0&&Ye.setGlobalState(y.clippingPlanes,K),$i(S,j,K),$.updateMultisampleRenderTarget(X),$.updateRenderTargetMipmap(X),B.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Ae=0,ye=H.length;Ae<ye;Ae++){let Le=H[Ae],Ke=Le.object,We=Le.geometry,et=Le.material,Xe=Le.group;if(et.side===2&&Ke.layers.test(K.layers)){let Ne=et.side;et.side=1,et.needsUpdate=!0,ll(Ke,j,K,We,et,Xe),et.side=Ne,et.needsUpdate=!0,Ee=!0}}Ee===!0&&($.updateMultisampleRenderTarget(X),$.updateRenderTargetMipmap(X))}y.setRenderTarget(he),y.setClearColor(V,q),xe!==void 0&&(K.viewport=xe),y.toneMapping=fe}function $i(S,H,j){let K=H.isScene===!0?H.overrideMaterial:null;for(let X=0,re=S.length;X<re;X++){let he=S[X],fe=he.object,xe=he.geometry,Ee=K===null?he.material:K,Ae=he.group;fe.layers.test(j.layers)&&ll(fe,H,j,xe,Ee,Ae)}}function ll(S,H,j,K,X,re){S.onBeforeRender(y,H,j,K,X,re),S.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(y,H,j,K,S,re),X.transparent===!0&&X.side===2&&X.forceSinglePass===!1?(X.side=1,X.needsUpdate=!0,y.renderBufferDirect(j,H,K,X,S,re),X.side=0,X.needsUpdate=!0,y.renderBufferDirect(j,H,K,X,S,re),X.side=2):y.renderBufferDirect(j,H,K,X,S,re),S.onAfterRender(y,H,j,K,X,re)}function er(S,H,j){H.isScene!==!0&&(H=U);let K=Z.get(S),X=g.state.lights,re=g.state.shadowsArray,he=X.state.version,fe=Ie.getParameters(S,X.state,re,H,j),xe=Ie.getProgramCacheKey(fe),Ee=K.programs;K.environment=S.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(S.isMeshStandardMaterial?le:ce).get(S.envMap||K.environment),K.envMapRotation=K.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",nl),Ee=new Map,K.programs=Ee);let Ae=Ee.get(xe);if(Ae!==void 0){if(K.currentProgram===Ae&&K.lightsStateVersion===he)return hl(S,fe),Ae}else fe.uniforms=Ie.getUniforms(S),S.onBeforeCompile(fe,y),Ae=Ie.acquireProgram(fe,xe),Ee.set(xe,Ae),K.uniforms=fe.uniforms;let ye=K.uniforms;return(S.isShaderMaterial||S.isRawShaderMaterial)&&S.clipping!==!0||(ye.clippingPlanes=Ye.uniform),hl(S,fe),K.needsLights=function(Le){return Le.isMeshLambertMaterial||Le.isMeshToonMaterial||Le.isMeshPhongMaterial||Le.isMeshStandardMaterial||Le.isShadowMaterial||Le.isShaderMaterial&&Le.lights===!0}(S),K.lightsStateVersion=he,K.needsLights&&(ye.ambientLightColor.value=X.state.ambient,ye.lightProbe.value=X.state.probe,ye.directionalLights.value=X.state.directional,ye.directionalLightShadows.value=X.state.directionalShadow,ye.spotLights.value=X.state.spot,ye.spotLightShadows.value=X.state.spotShadow,ye.rectAreaLights.value=X.state.rectArea,ye.ltc_1.value=X.state.rectAreaLTC1,ye.ltc_2.value=X.state.rectAreaLTC2,ye.pointLights.value=X.state.point,ye.pointLightShadows.value=X.state.pointShadow,ye.hemisphereLights.value=X.state.hemi,ye.directionalShadowMap.value=X.state.directionalShadowMap,ye.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ye.spotShadowMap.value=X.state.spotShadowMap,ye.spotLightMatrix.value=X.state.spotLightMatrix,ye.spotLightMap.value=X.state.spotLightMap,ye.pointShadowMap.value=X.state.pointShadowMap,ye.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Ae,K.uniformsList=null,Ae}function cl(S){if(S.uniformsList===null){let H=S.currentProgram.getUniforms();S.uniformsList=ti.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function hl(S,H){let j=Z.get(S);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}vn.setAnimationLoop(function(S){vs&&vs(S)}),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(S){vs=S,it.setAnimationLoop(S),S===null?vn.stop():vn.start()},it.addEventListener("sessionstart",rl),it.addEventListener("sessionend",sl),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(H),H=it.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,H,P),g=Ge.get(S,_.length),g.init(H),_.push(g),N.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),de.setFromProjectionMatrix(N),w=this.localClippingEnabled,oe=Ye.init(this.clippingPlanes,w),m=ze.get(S,v.length),m.init(),v.push(m),it.enabled===!0&&it.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&_s(re,H,-1/0,y.sortObjects)}_s(S,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(me,_e),M=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,M&&Ue.addToRenderList(m,S),this.info.render.frame++,oe===!0&&Ye.beginShadows();let j=g.state.shadowsArray;pe.render(j,S,H),oe===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,X=m.transmissive;if(g.setupLights(),H.isArrayCamera){let re=H.cameras;if(X.length>0)for(let he=0,fe=re.length;he<fe;he++)ol(K,X,S,re[he]);M&&Ue.render(S);for(let he=0,fe=re.length;he<fe;he++){let xe=re[he];al(m,S,xe,xe.viewport)}}else X.length>0&&ol(K,X,S,H),M&&Ue.render(S),al(m,S,H);P!==null&&($.updateMultisampleRenderTarget(P),$.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(y,S,H),Dt.resetDefaultState(),L=-1,F=null,_.pop(),_.length>0?(g=_[_.length-1],oe===!0&&Ye.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,H,j){Z.get(S.texture).__webglTexture=H,Z.get(S.depthTexture).__webglTexture=j;let K=Z.get(S);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,H){let j=Z.get(S);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,j=0){P=S,T=H,C=j;let K=!0,X=null,re=!1,he=!1;if(S){let fe=Z.get(S);if(fe.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(k.FRAMEBUFFER,null),K=!1;else if(fe.__webglFramebuffer===void 0)$.setupRenderTarget(S);else if(fe.__hasExternalTextures)$.rebindTextures(S,Z.get(S.texture).__webglTexture,Z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ae=S.depthTexture;if(fe.__boundDepthTexture!==Ae){if(Ae!==null&&Z.has(Ae)&&(S.width!==Ae.image.width||S.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(S)}}let xe=S.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);let Ee=Z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(X=Array.isArray(Ee[H])?Ee[H][j]:Ee[H],re=!0):X=S.samples>0&&$.useMultisampledRTT(S)===!1?Z.get(S).__webglMultisampledFramebuffer:Array.isArray(Ee)?Ee[j]:Ee,G.copy(S.viewport),z.copy(S.scissor),W=S.scissorTest}else G.copy(ee).multiplyScalar(te).floor(),z.copy(se).multiplyScalar(te).floor(),W=ue;if(O.bindFramebuffer(k.FRAMEBUFFER,X)&&K&&O.drawBuffers(S,X),O.viewport(G),O.scissor(z),O.setScissorTest(W),re){let fe=Z.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe.__webglTexture,j)}else if(he){let fe=Z.get(S.texture),xe=H||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,fe.__webglTexture,j||0,xe)}L=-1},this.readRenderTargetPixels=function(S,H,j,K,X,re,he){if(!S||!S.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe){O.bindFramebuffer(k.FRAMEBUFFER,fe);try{let xe=S.texture,Ee=xe.format,Ae=xe.type;if(!Q.textureFormatReadable(Ee))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ae))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");H>=0&&H<=S.width-K&&j>=0&&j<=S.height-X&&k.readPixels(H,j,K,X,Tt.convert(Ee),Tt.convert(Ae),re)}finally{let xe=P!==null?Z.get(P).__webglFramebuffer:null;O.bindFramebuffer(k.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(S,H,j,K,X,re,he){if(!S||!S.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe){let xe=S.texture,Ee=xe.format,Ae=xe.type;if(!Q.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=S.width-K&&j>=0&&j<=S.height-X){O.bindFramebuffer(k.FRAMEBUFFER,fe);let ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.bufferData(k.PIXEL_PACK_BUFFER,re.byteLength,k.STREAM_READ),k.readPixels(H,j,K,X,Tt.convert(Ee),Tt.convert(Ae),0);let Le=P!==null?Z.get(P).__webglFramebuffer:null;O.bindFramebuffer(k.FRAMEBUFFER,Le);let Ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await function(We,et,Xe){return new Promise(function(Ne,ht){setTimeout(function at(){switch(We.clientWaitSync(et,We.SYNC_FLUSH_COMMANDS_BIT,0)){case We.WAIT_FAILED:ht();break;case We.TIMEOUT_EXPIRED:setTimeout(at,Xe);break;default:Ne()}},Xe)})}(k,Ke,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,re),k.deleteBuffer(ye),k.deleteSync(Ke),re}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,H=null,j=0){S.isTexture!==!0&&(Ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1]);let K=Math.pow(2,-j),X=Math.floor(S.image.width*K),re=Math.floor(S.image.height*K),he=H!==null?H.x:0,fe=H!==null?H.y:0;$.setTexture2D(S,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,he,fe,X,re),O.unbindTexture()},this.copyTextureToTexture=function(S,H,j=null,K=null,X=0){let re,he,fe,xe,Ee,Ae,ye,Le,Ke;S.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,S=arguments[1],H=arguments[2],X=arguments[3]||0,j=null);let We=S.isCompressedTexture?S.mipmaps[X]:S.image;j!==null?(re=j.max.x-j.min.x,he=j.max.y-j.min.y,fe=j.isBox3?j.max.z-j.min.z:1,xe=j.min.x,Ee=j.min.y,Ae=j.isBox3?j.min.z:0):(re=We.width,he=We.height,fe=We.depth||1,xe=0,Ee=0,Ae=0),K!==null?(ye=K.x,Le=K.y,Ke=K.z):(ye=0,Le=0,Ke=0);let et=Tt.convert(H.format),Xe=Tt.convert(H.type),Ne;H.isData3DTexture?($.setTexture3D(H,0),Ne=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?($.setTexture2DArray(H,0),Ne=k.TEXTURE_2D_ARRAY):($.setTexture2D(H,0),Ne=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);let ht=k.getParameter(k.UNPACK_ROW_LENGTH),at=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pe=k.getParameter(k.UNPACK_SKIP_PIXELS),Te=k.getParameter(k.UNPACK_SKIP_ROWS),Et=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,We.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,We.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ee),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ae);let xs=S.isDataArrayTexture||S.isData3DTexture,Si=H.isDataArrayTexture||H.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let Bn=Z.get(S),ys=Z.get(H),Ms=Z.get(Bn.__renderTarget),Ss=Z.get(ys.__renderTarget);O.bindFramebuffer(k.READ_FRAMEBUFFER,Ms.__webglFramebuffer),O.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ss.__webglFramebuffer);for(let $t=0;$t<fe;$t++)xs&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(S).__webglTexture,X,Ae+$t),S.isDepthTexture?(Si&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(H).__webglTexture,X,Ke+$t),k.blitFramebuffer(xe,Ee,re,he,ye,Le,re,he,k.DEPTH_BUFFER_BIT,k.NEAREST)):Si?k.copyTexSubImage3D(Ne,X,ye,Le,Ke+$t,xe,Ee,re,he):k.copyTexSubImage2D(Ne,X,ye,Le,Ke+$t,xe,Ee,re,he);O.bindFramebuffer(k.READ_FRAMEBUFFER,null),O.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Si?S.isDataTexture||S.isData3DTexture?k.texSubImage3D(Ne,X,ye,Le,Ke,re,he,fe,et,Xe,We.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Ne,X,ye,Le,Ke,re,he,fe,et,We.data):k.texSubImage3D(Ne,X,ye,Le,Ke,re,he,fe,et,Xe,We):S.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,ye,Le,re,he,et,Xe,We.data):S.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,ye,Le,We.width,We.height,et,We.data):k.texSubImage2D(k.TEXTURE_2D,X,ye,Le,re,he,et,Xe,We);k.pixelStorei(k.UNPACK_ROW_LENGTH,ht),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Te),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Et),X===0&&H.generateMipmaps&&k.generateMipmap(Ne),O.unbindTexture()},this.copyTextureToTexture3D=function(S,H,j=null,K=null,X=0){return S.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,S=arguments[2],H=arguments[3],X=arguments[4]||0),Ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,H,j,K,X)},this.initRenderTarget=function(S){Z.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),O.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,O.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Fe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Fe._getUnpackColorSpace()}};var ui=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var op=new b;var lp=new b,cp=new b,hp=new b,up=new ie,dp=new ie,pp=new Ce,mp=new b,fp=new b,gp=new b,vp=new ie,_p=new ie,xp=new ie;var yp=new b,Mp=new b;var Sp=new b,bp=new ke,Tp=new ke,Ep=new b,wp=new Ce,Ap=new b,Rp=new kt,Cp=new Ce,Pp=new oi;var Ip=new Ce,Lp=new Ce;var Up=new Ce,Dp=new Ce;var Np=new zt,Op=new Ce,Bp=new Be,Fp=new kt;var ro=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},zp=new Ce,kp=new Se(1,1,1),Vp=new ci,Hp=new zt,Gp=new kt,Wp=new b,Xp=new b,jp=new b,qp=new ro,Yp=new Be;var di=class extends dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zr=new b,Jr=new b,uc=new Ce,Ii=new oi,Sr=new kt,ea=new b,dc=new b,so=class extends pt{constructor(e=new Je,t=new di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Zr.fromBufferAttribute(t,i-1),Jr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zr.distanceTo(Jr);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(i),Sr.radius+=s,e.ray.intersectsSphere(Sr)===!1)return;uc.copy(i).invert(),Ii.copy(e.ray).applyMatrix4(uc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=u,x=p-1;f<x;f+=c){let m=h.getX(f),g=h.getX(f+1),v=br(this,e,Ii,l,m,g);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),x=h.getX(u),m=br(this,e,Ii,l,f,x);m&&t.push(m)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let f=u,x=p-1;f<x;f+=c){let m=br(this,e,Ii,l,f,f+1);m&&t.push(m)}if(this.isLineLoop){let f=br(this,e,Ii,l,p-1,u);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function br(r,e,t,n,i,s){let a=r.geometry.attributes.position;if(Zr.fromBufferAttribute(a,i),Jr.fromBufferAttribute(a,s),t.distanceSqToSegment(Zr,Jr,ea,dc)>n)return;ea.applyMatrix4(r.matrixWorld);let o=e.ray.origin.distanceTo(ea);return o<e.near||o>e.far?void 0:{distance:o,point:dc.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var pc=new b,mc=new b,Hi=class extends so{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)pc.fromBufferAttribute(t,i),mc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pc.distanceTo(mc);e.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zp=new Ce,Jp=new oi,Kp=new kt,Qp=new b;var pi=class extends vt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},St=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new ie:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new b,i=[],s=[],a=[],o=new b,l=new Ce;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new b)}s[0]=new b,a[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(st(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(st(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gi=class extends St{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ao=class extends Gi{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yo(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,i(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Tr=new b,ta=new Yo,na=new Yo,ia=new Yo,oo=class extends St{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(Tr.subVectors(i[0],i[1]).add(i[0]),o=Tr);let d=i[c%s],u=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(Tr.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=Tr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(l),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),ta.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,f,x,m),na.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,f,x,m),ia.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,f,x,m)}else this.curveType==="catmullrom"&&(ta.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),na.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),ia.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return n.set(ta.calc(h),na.calc(h),ia.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fc(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Ni(r,e,t,n){return function(i,s){let a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}function Oi(r,e,t,n,i){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}var Kr=class extends St{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Oi(e,i.x,s.x,a.x,o.x),Oi(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends St{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Oi(e,i.x,s.x,a.x,o.x),Oi(e,i.y,s.y,a.y,o.y),Oi(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qr=class extends St{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends St{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$r=class extends St{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ni(e,i.x,s.x,a.x),Ni(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},es=class extends St{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Ni(e,i.x,s.x,a.x),Ni(e,i.y,s.y,a.y),Ni(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ts=class extends St{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(fc(o,l.x,c.x,h.x,d.x),fc(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ie().fromArray(i))}return this}},ns=Object.freeze({__proto__:null,ArcCurve:ao,CatmullRomCurve3:oo,CubicBezierCurve:Kr,CubicBezierCurve3:lo,EllipseCurve:Gi,LineCurve:Qr,LineCurve3:co,QuadraticBezierCurve:$r,QuadraticBezierCurve3:es,SplineCurve:ts}),ho=class extends St{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ns[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ns[i.type]().fromJSON(i))}return this}},Wi=class extends ho{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qr(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new $r(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Kr(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ts(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Gi(e,t,n,i,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},is=class r extends Je{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=st(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,d=new b,u=new ie,p=new b,f=new b,x=new b,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let v=0;v<=t;v++){let _=n+v*h*i,y=Math.sin(_),R=Math.cos(_);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*y,d.y=e[T].y,d.z=e[T].x*R,a.push(d.x,d.y,d.z),u.x=v/t,u.y=T/(e.length-1),o.push(u.x,u.y);let C=l[3*T+0]*y,P=l[3*T+1],L=l[3*T+0]*R;c.push(C,P,L)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,R=y,T=y+e.length,C=y+e.length+1,P=y+1;s.push(R,T,P),s.push(C,P,T)}this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(o,2)),this.setAttribute("normal",new Me(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},uo=class r extends is{constructor(e=1,t=1,n=4,i=8){let s=new Wi;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},po=class r extends Je{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new b,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ln=class r extends Je{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,x=[],m=n/2,g=0;function v(_){let y=f,R=new ie,T=new b,C=0,P=_===!0?e:t,L=_===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,m*L,0),u.push(0,L,0),p.push(.5,.5),f++;let F=f;for(let G=0;G<=i;G++){let z=G/i*l+o,W=Math.cos(z),V=Math.sin(z);T.x=P*V,T.y=m*L,T.z=P*W,d.push(T.x,T.y,T.z),u.push(0,L,0),R.x=.5*W+.5,R.y=.5*V*L+.5,p.push(R.x,R.y),f++}for(let G=0;G<i;G++){let z=y+G,W=F+G;_===!0?h.push(W,W+1,z):h.push(W+1,W,z),C+=3}c.addGroup(g,C,_===!0?1:2),g+=C}(function(){let _=new b,y=new b,R=0,T=(t-e)/n;for(let C=0;C<=s;C++){let P=[],L=C/s,F=L*(t-e)+e;for(let G=0;G<=i;G++){let z=G/i,W=z*l+o,V=Math.sin(W),q=Math.cos(W);y.x=F*V,y.y=-L*n+m,y.z=F*q,d.push(y.x,y.y,y.z),_.set(V,T,q).normalize(),u.push(_.x,_.y,_.z),p.push(z,1-L),P.push(f++)}x.push(P)}for(let C=0;C<i;C++)for(let P=0;P<s;P++){let L=x[P][C],F=x[P+1][C],G=x[P+1][C+1],z=x[P][C+1];(e>0||P!==0)&&(h.push(L,F,z),R+=3),(t>0||P!==s-1)&&(h.push(F,G,z),R+=3)}c.addGroup(g,R,0),g+=R})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mo=class r extends Ln{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Un=class r extends Je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(u,p,f,x){let m=x+1,g=[];for(let v=0;v<=m;v++){g[v]=[];let _=u.clone().lerp(f,v/m),y=p.clone().lerp(f,v/m),R=m-v;for(let T=0;T<=R;T++)g[v][T]=T===0&&v===m?_:_.clone().lerp(y,T/R)}for(let v=0;v<m;v++)for(let _=0;_<2*(m-v)-1;_++){let y=Math.floor(_/2);_%2==0?(l(g[v][y+1]),l(g[v+1][y]),l(g[v][y])):(l(g[v][y+1]),l(g[v+1][y+1]),l(g[v+1][y]))}}function l(u){s.push(u.x,u.y,u.z)}function c(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,x){x<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=x/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new b,f=new b,x=new b;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],x),o(p,f,x,u)})(i),function(u){let p=new b;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(u),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(n),function(){let u=new b;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let x=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(x,1-m)}var p;(function(){let f=new b,x=new b,m=new b,g=new b,v=new ie,_=new ie,y=new ie;for(let R=0,T=0;R<s.length;R+=9,T+=6){f.set(s[R+0],s[R+1],s[R+2]),x.set(s[R+3],s[R+4],s[R+5]),m.set(s[R+6],s[R+7],s[R+8]),v.set(a[T+0],a[T+1]),_.set(a[T+2],a[T+3]),y.set(a[T+4],a[T+5]),g.copy(f).add(x).add(m).divideScalar(3);let C=d(g);h(v,T+0,f,C),h(_,T+2,x,C),h(y,T+4,m,C)}})(),function(){for(let f=0;f<a.length;f+=6){let x=a[f+0],m=a[f+2],g=a[f+4],v=Math.max(x,m,g),_=Math.min(x,m,g);v>.9&&_<.1&&(x<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(s.slice(),3)),this.setAttribute("uv",new Me(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},fo=class r extends Un{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Er=new b,wr=new b,ra=new b,Ar=new ln,mi=class extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Or*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:x,b:m,c:g}=Ar;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),Ar.getNormal(ra),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let _=(v+1)%3,y=d[v],R=d[_],T=Ar[h[v]],C=Ar[h[_]],P=`${y}_${R}`,L=`${R}_${y}`;L in u&&u[L]?(ra.dot(u[L].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(C.x,C.y,C.z)),u[L]=null):P in u||(u[P]={index0:c[v],index1:c[_],normal:ra.clone()})}}for(let f in u)if(u[f]){let{index0:x,index1:m}=u[f];Er.fromBufferAttribute(o,x),wr.fromBufferAttribute(o,m),p.push(Er.x,Er.y,Er.z),p.push(wr.x,wr.y,wr.z)}this.setAttribute("position",new Me(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},rs=class extends Wi{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Wi().fromJSON(i))}return this}},Id=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=gc(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(n&&(s=function(f,x,m,g){let v=[],_,y,R,T,C;for(_=0,y=x.length;_<y;_++)R=x[_]*g,T=_<y-1?x[_+1]*g:f.length,C=gc(f,R,T,g,!1),C===C.next&&(C.steiner=!0),v.push(zd(C));for(v.sort(Od),_=0;_<v.length;_++)m=Bd(v[_],m);return m}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<i;f+=t)d=r[f],u=r[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Xi(s,a,t,o,l,p,0),a};function gc(r,e,t,n,i){let s,a;if(i===function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=vc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=vc(s,r[s],r[s+1],a);return a&&ps(a,a.next)&&(qi(a),a=a.next),a}function Dn(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!ps(n,n.next)&&Ze(n.prev,n,n.next)!==0)n=n.next;else{if(qi(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Xi(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(h,d,u,p){let f=h;do f.z===0&&(f.z=go(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(x){let m,g,v,_,y,R,T,C,P=1;do{for(g=x,x=null,y=null,R=0;g;){for(R++,v=g,T=0,m=0;m<P&&(T++,v=v.nextZ,v);m++);for(C=P;T>0||C>0&&v;)T!==0&&(C===0||!v||g.z<=v.z)?(_=g,g=g.nextZ,T--):(_=v,v=v.nextZ,C--),y?y.nextZ=_:x=_,_.prevZ=y,y=_;g=v}y.nextZ=null,P*=2}while(R>1)}(f)}(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Ud(r,n,i,s):Ld(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),qi(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?Xi(r=Dd(Dn(r),e,t),e,t,n,i,s,2):a===2&&Nd(r,e,t,n,i,s):Xi(Dn(r),e,t,n,i,s,1);break}}function Ld(r){let e=r.prev,t=r,n=r.next;if(Ze(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&$n(i,o,s,l,a,c,f.x,f.y)&&Ze(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Ud(r,e,t,n){let i=r.prev,s=r,a=r.next;if(Ze(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,d=s.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,x=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,g=go(p,f,e,t,n),v=go(x,m,e,t,n),_=r.prevZ,y=r.nextZ;for(;_&&_.z>=g&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&$n(o,h,l,d,c,u,_.x,_.y)&&Ze(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&$n(o,h,l,d,c,u,y.x,y.y)&&Ze(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=x&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&$n(o,h,l,d,c,u,_.x,_.y)&&Ze(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&$n(o,h,l,d,c,u,y.x,y.y)&&Ze(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Dd(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!ps(i,s)&&Xc(i,n,n.next,s)&&ji(i,s)&&ji(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),qi(n),qi(n.next),n=r=s),n=n.next}while(n!==r);return Dn(n)}function Nd(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kd(a,o)){let l=jc(a,o);return a=Dn(a,a.next),l=Dn(l,l.next),Xi(a,e,t,n,i,s,0),void Xi(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Od(r,e){return r.x-e.x}function Bd(r,e){let t=function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,f,x=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&$n(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),ji(o,i)&&(f<x||f===x&&(o.x>a.x||o.x===a.x&&Fd(a,o)))&&(a=o,x=f)),o=o.next;while(o!==d);return a}(r,e);if(!t)return e;let n=jc(t,r);return Dn(n,n.next),Dn(t,t.next)}function Fd(r,e){return Ze(r.prev,r,e.prev)<0&&Ze(e.next,r,r.next)<0}function go(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function zd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function $n(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function kd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Xc(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&(ji(r,e)&&ji(e,r)&&function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(Ze(r.prev,r,e.prev)||Ze(r,e.prev,e))||ps(r,e)&&Ze(r.prev,r,r.next)>0&&Ze(e.prev,e,e.next)>0)}function Ze(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ps(r,e){return r.x===e.x&&r.y===e.y}function Xc(r,e,t,n){let i=Cr(Ze(r,e,t)),s=Cr(Ze(r,e,n)),a=Cr(Ze(t,n,r)),o=Cr(Ze(t,n,e));return i!==s&&a!==o||!(i!==0||!Rr(r,t,e))||!(s!==0||!Rr(r,n,e))||!(a!==0||!Rr(t,r,n))||!(o!==0||!Rr(t,e,n))}function Rr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Cr(r){return r>0?1:r<0?-1:0}function ji(r,e){return Ze(r.prev,r,r.next)<0?Ze(r,e,r.next)>=0&&Ze(r,r.prev,e)>=0:Ze(r,e,r.prev)<0||Ze(r,r.next,e)<0}function jc(r,e){let t=new vo(r.i,r.x,r.y),n=new vo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function vc(r,e,t,n){let i=new vo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function vo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var cn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];_c(e),xc(n,e);let a=e.length;t.forEach(_c);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,xc(n,t[l]);let o=Id(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function _c(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function xc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var _o=class r extends Je{constructor(e=new rs([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Vd,_,y,R,T,C,P=!1;g&&(_=g.getSpacedPoints(h),P=!0,u=!1,y=g.computeFrenetFrames(h,!1),R=new b,T=new b,C=new b),u||(m=0,p=0,f=0,x=0);let L=o.extractPoints(c),F=L.shape,G=L.holes;if(!cn.isClockWise(F)){F=F.reverse();for(let D=0,A=G.length;D<A;D++){let U=G[D];cn.isClockWise(U)&&(G[D]=U.reverse())}}let z=cn.triangulateShape(F,G),W=F;for(let D=0,A=G.length;D<A;D++){let U=G[D];F=F.concat(U)}function V(D,A,U){return A||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(A,U)}let q=F.length,Y=z.length;function ne(D,A,U){let M,I,B,Q=D.x-A.x,O=D.y-A.y,J=U.x-D.x,Z=U.y-D.y,$=Q*Q+O*O,ce=Q*Z-O*J;if(Math.abs(ce)>Number.EPSILON){let le=Math.sqrt($),ge=Math.sqrt(J*J+Z*Z),be=A.x-O/le,Oe=A.y+Q/le,Ie=((U.x-Z/ge-be)*Z-(U.y+J/ge-Oe)*J)/(Q*Z-O*J);M=be+Q*Ie-D.x,I=Oe+O*Ie-D.y;let ve=M*M+I*I;if(ve<=2)return new ie(M,I);B=Math.sqrt(ve/2)}else{let le=!1;Q>Number.EPSILON?J>Number.EPSILON&&(le=!0):Q<-Number.EPSILON?J<-Number.EPSILON&&(le=!0):Math.sign(O)===Math.sign(Z)&&(le=!0),le?(M=-O,I=Q,B=Math.sqrt($)):(M=Q,I=O,B=Math.sqrt($/2))}return new ie(M/B,I/B)}let te=[];for(let D=0,A=W.length,U=A-1,M=D+1;D<A;D++,U++,M++)U===A&&(U=0),M===A&&(M=0),te[D]=ne(W[D],W[U],W[M]);let me=[],_e,ee=te.concat();for(let D=0,A=G.length;D<A;D++){let U=G[D];_e=[];for(let M=0,I=U.length,B=I-1,Q=M+1;M<I;M++,B++,Q++)B===I&&(B=0),Q===I&&(Q=0),_e[M]=ne(U[M],U[B],U[Q]);me.push(_e),ee=ee.concat(_e)}for(let D=0;D<m;D++){let A=D/m,U=p*Math.cos(A*Math.PI/2),M=f*Math.sin(A*Math.PI/2)+x;for(let I=0,B=W.length;I<B;I++){let Q=V(W[I],te[I],M);de(Q.x,Q.y,-U)}for(let I=0,B=G.length;I<B;I++){let Q=G[I];_e=me[I];for(let O=0,J=Q.length;O<J;O++){let Z=V(Q[O],_e[O],M);de(Z.x,Z.y,-U)}}}let se=f+x;for(let D=0;D<q;D++){let A=u?V(F[D],ee[D],se):F[D];P?(T.copy(y.normals[0]).multiplyScalar(A.x),R.copy(y.binormals[0]).multiplyScalar(A.y),C.copy(_[0]).add(T).add(R),de(C.x,C.y,C.z)):de(A.x,A.y,0)}for(let D=1;D<=h;D++)for(let A=0;A<q;A++){let U=u?V(F[A],ee[A],se):F[A];P?(T.copy(y.normals[D]).multiplyScalar(U.x),R.copy(y.binormals[D]).multiplyScalar(U.y),C.copy(_[D]).add(T).add(R),de(C.x,C.y,C.z)):de(U.x,U.y,d/h*D)}for(let D=m-1;D>=0;D--){let A=D/m,U=p*Math.cos(A*Math.PI/2),M=f*Math.sin(A*Math.PI/2)+x;for(let I=0,B=W.length;I<B;I++){let Q=V(W[I],te[I],M);de(Q.x,Q.y,d+U)}for(let I=0,B=G.length;I<B;I++){let Q=G[I];_e=me[I];for(let O=0,J=Q.length;O<J;O++){let Z=V(Q[O],_e[O],M);P?de(Z.x,Z.y+_[h-1].y,_[h-1].x+U):de(Z.x,Z.y,d+U)}}}function ue(D,A){let U=D.length;for(;--U>=0;){let M=U,I=U-1;I<0&&(I=D.length-1);for(let B=0,Q=h+2*m;B<Q;B++){let O=q*B,J=q*(B+1);w(A+M+O,A+I+O,A+I+J,A+M+J)}}}function de(D,A,U){l.push(D),l.push(A),l.push(U)}function oe(D,A,U){E(D),E(A),E(U);let M=i.length/3,I=v.generateTopUV(n,i,M-3,M-2,M-1);N(I[0]),N(I[1]),N(I[2])}function w(D,A,U,M){E(D),E(A),E(M),E(A),E(U),E(M);let I=i.length/3,B=v.generateSideWallUV(n,i,I-6,I-3,I-2,I-1);N(B[0]),N(B[1]),N(B[3]),N(B[1]),N(B[2]),N(B[3])}function E(D){i.push(l[3*D+0]),i.push(l[3*D+1]),i.push(l[3*D+2])}function N(D){s.push(D.x),s.push(D.y)}(function(){let D=i.length/3;if(u){let A=0,U=q*A;for(let M=0;M<Y;M++){let I=z[M];oe(I[2]+U,I[1]+U,I[0]+U)}A=h+2*m,U=q*A;for(let M=0;M<Y;M++){let I=z[M];oe(I[0]+U,I[1]+U,I[2]+U)}}else{for(let A=0;A<Y;A++){let U=z[A];oe(U[2],U[1],U[0])}for(let A=0;A<Y;A++){let U=z[A];oe(U[0]+q*h,U[1]+q*h,U[2]+q*h)}}n.addGroup(D,i.length/3-D,0)})(),function(){let D=i.length/3,A=0;ue(W,A),A+=W.length;for(let U=0,M=G.length;U<M;U++){let I=G[U];ue(I,A),A+=I.length}n.addGroup(D,i.length/3-D,1)}()}this.setAttribute("position",new Me(i,3)),this.setAttribute("uv",new Me(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ns[i.type]().fromJSON(i)),new r(n,e.options)}},Vd={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new ie(s,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*i],p=e[3*i+1],f=e[3*i+2],x=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-d),new ie(u,1-f),new ie(x,1-g)]:[new ie(o,1-l),new ie(h,1-d),new ie(p,1-f),new ie(m,1-g)]}},xo=class r extends Un{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},yo=class r extends Un{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Mo=class r extends Je{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(i=Math.max(1,i)),p=new b,f=new ie;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let v=g+m,_=v,y=v+n+1,R=v+n+2,T=v+1;o.push(_,y,T),o.push(y,R,T)}}this.setIndex(o),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},So=class r extends Je{constructor(e=new rs([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=i.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;cn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let v=f[m];cn.isClockWise(v)===!0&&(f[m]=v.reverse())}let x=cn.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let v=f[m];p=p.concat(v)}for(let m=0,g=p.length;m<g;m++){let v=p[m];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){let v=x[m],_=v[0]+d,y=v[1]+d,R=v[2]+d;n.push(_,y,R),l+=3}}this.setIndex(n),this.setAttribute("position",new Me(i,3)),this.setAttribute("normal",new Me(s,3)),this.setAttribute("uv",new Me(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},bo=class r extends Je{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new b,u=new b,p=[],f=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],_=g/n,y=0;g===0&&a===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let T=R/t;d.x=-e*Math.cos(i+T*s)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(i+T*s)*Math.sin(a+_*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+y,1-_),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let _=h[g][v+1],y=h[g][v],R=h[g+1][v],T=h[g+1][v+1];(g!==0||a>0)&&p.push(_,y,T),(g!==n-1||l<Math.PI)&&p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(x,3)),this.setAttribute("uv",new Me(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},To=class r extends Un{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Eo=class r extends Je{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new b,d=new b,u=new b;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let x=f/i*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let x=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,g=(i+1)*(p-1)+f,v=(i+1)*p+f;a.push(x,m,v),a.push(m,g,v)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},wo=class r extends Je{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],d=new b,u=new b,p=new b,f=new b,x=new b,m=new b,g=new b;for(let _=0;_<=n;++_){let y=_/n*s*Math.PI*2;v(y,s,a,e,p),v(y+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let R=0;R<=i;++R){let T=R/i*Math.PI*2,C=-t*Math.cos(T),P=t*Math.sin(T);d.x=p.x+(C*g.x+P*x.x),d.y=p.y+(C*g.y+P*x.y),d.z=p.z+(C*g.z+P*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(_/n),h.push(R/i)}}for(let _=1;_<=n;_++)for(let y=1;y<=i;y++){let R=(i+1)*(_-1)+(y-1),T=(i+1)*_+(y-1),C=(i+1)*_+y,P=(i+1)*(_-1)+y;o.push(R,T,P),o.push(T,C,P)}function v(_,y,R,T,C){let P=Math.cos(_),L=Math.sin(_),F=R/y*_,G=Math.cos(F);C.x=T*(2+G)*.5*P,C.y=T*(2+G)*L*.5,C.z=T*Math.sin(F)*.5}this.setIndex(o),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ao=class r extends Je{constructor(e=new es(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,c=new ie,h=new b,d=[],u=[],p=[],f=[];function x(m){h=e.getPointAt(m/t,h);let g=a.normals[m],v=a.binormals[m];for(let _=0;_<=i;_++){let y=_/i*Math.PI*2,R=Math.sin(y),T=-Math.cos(y);l.x=T*g.x+R*v.x,l.y=T*g.y+R*v.y,l.z=T*g.z+R*v.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)x(m);x(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let g=0;g<=i;g++)c.x=m/t,c.y=g/i,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let g=1;g<=i;g++){let v=(i+1)*(m-1)+(g-1),_=(i+1)*m+(g-1),y=(i+1)*m+g,R=(i+1)*(m-1)+g;f.push(v,_,R),f.push(_,y,R)}}()})(),this.setIndex(f),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new ns[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Ro=class extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new b,s=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let x=0;x<3;x++){let m=o.getX(p+x),g=o.getX(p+(x+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),yc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),yc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Me(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function yc(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var $p=Object.freeze({__proto__:null,BoxGeometry:Mt,CapsuleGeometry:uo,CircleGeometry:po,ConeGeometry:mo,CylinderGeometry:Ln,DodecahedronGeometry:fo,EdgesGeometry:mi,ExtrudeGeometry:_o,IcosahedronGeometry:xo,LatheGeometry:is,OctahedronGeometry:yo,PlaneGeometry:In,PolyhedronGeometry:Un,RingGeometry:Mo,ShapeGeometry:So,SphereGeometry:bo,TetrahedronGeometry:To,TorusGeometry:Eo,TorusKnotGeometry:wo,TubeGeometry:Ao,WireframeGeometry:Ro});var fi=class extends dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mn=class extends fi{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Pr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Hd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var gi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Co=class extends gi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gl,endingEnd:gl}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case vl:s=e,o=2*t-n;break;case _l:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vl:a=e,l=2*n-t;break;case _l:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),x=f*f,m=x*f,g=-u*m+2*u*x-u*f,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*f+1,_=(-1-p)*m+(1.5+p)*x+.5*f,y=p*m-p*x;for(let R=0;R!==o;++R)s[R]=g*a[h+R]+v*a[c+R]+_*a[l+R]+y*a[d+R];return s}},Po=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},Io=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ut=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Co(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case ka:t=this.InterpolantFactoryMethodLinear;break;case ws:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return ws}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Hd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ws,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Ut.prototype.TimeBufferType=Float32Array,Ut.prototype.ValueBufferType=Float32Array,Ut.prototype.DefaultInterpolation=ka;var Rn=class extends Ut{constructor(e,t,n){super(e,t,n)}};Rn.prototype.ValueTypeName="bool",Rn.prototype.ValueBufferType=Array,Rn.prototype.DefaultInterpolation=Br,Rn.prototype.InterpolantFactoryMethodLinear=void 0,Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends Ut{};Lo.prototype.ValueTypeName="color";var Uo=class extends Ut{};Uo.prototype.ValueTypeName="number";var Do=class extends gi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ft.slerpFlat(s,0,a,c-o,a,c,l);return s}},ss=class extends Ut{InterpolantFactoryMethodLinear(e){return new Do(this.times,this.values,this.getValueSize(),e)}};ss.prototype.ValueTypeName="quaternion",ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends Ut{constructor(e,t,n){super(e,t,n)}};Cn.prototype.ValueTypeName="string",Cn.prototype.ValueBufferType=Array,Cn.prototype.DefaultInterpolation=Br,Cn.prototype.InterpolantFactoryMethodLinear=void 0,Cn.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Ut{};No.prototype.ValueTypeName="vector";var Oo=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Gd=new Oo,Bo=class{constructor(e){this.manager=e!==void 0?e:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var sa=new Ce,Mc=new b,Sc=new b,os=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ci,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mc),Sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sc),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var bc=new Ce,Li=new b,aa=new b,Fo=class extends os{constructor(){super(new ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Li.setFromMatrixPosition(e.matrixWorld),n.position.copy(Li),aa.copy(n.position),aa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(aa),n.updateMatrixWorld(),i.makeTranslation(-Li.x,-Li.y,-Li.z),bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc)}},Nn=class extends as{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fo}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},zo=class extends os{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends as{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new zo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var em=new Ce,tm=new Ce,nm=new Ce;var cs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Tc(){return performance.now()}var im=new b,rm=new Ft,sm=new b,am=new b;var om=new b,lm=new Ft,cm=new b,hm=new b;var Zo="\\[\\]\\.:\\/",Wd=new RegExp("["+Zo+"]","g"),oa="[^"+Zo+"]",Xd="[^"+Zo.replace("\\.","")+"]",jd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",oa)+/(WCOD+)?/.source.replace("WCOD",Xd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oa)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oa)+"$"),qd=["material","materials","bones","map"],qe=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wd,"")}static parseTrackName(e){let t=jd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);qd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=class{constructor(r,e,t){let n=t||qe.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray],qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var um=new Float32Array(1);var dm=new Ce;var pm=new ie;var mm=new b,fm=new b;var gm=new b;var vm=new b,_m=new Ce,xm=new Ce;var ym=new b,Mm=new Se,Sm=new Se;var bm=new b,Tm=new b,Em=new b;var wm=new b,Am=new Vi;var Rm=new zt;var Cm=new b;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);var ms=class extends ui{constructor(){super();let e=new Mt;e.deleteAttribute("uv");let t=new fi({side:ko}),n=new fi,i=new Nn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Be(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Be(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Be(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new Be(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Be(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Be(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new Be(e,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new Be(e,yi(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let p=new Be(e,yi(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let f=new Be(e,yi(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let x=new Be(e,yi(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new Be(e,yi(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let g=new Be(e,yi(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function yi(r){let e=new pn;return e.color.setScalar(r),e}var Zi=new b;function bt(r,e,t,n,i,s){let a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;Zi.copy(e),Zi[n]=0,Zi.normalize();let c=.5*a/(a+o),h=1-Zi.angleTo(r)/l;return Math.sign(Zi[t])===1?h*c:o/(a+o)+c+c*(1-h)}var fs=class extends Mt{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new b,l=new b,c=new b(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,f=new b,x=.5/i;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*s,h[m+1]=c.y*Math.sign(o.y)+l.y*s,h[m+2]=c.z*Math.sign(o.z)+l.z*s,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:f.set(1,0,0),u[g+0]=bt(f,l,"z","y",s,n),u[g+1]=1-bt(f,l,"y","z",s,t);break;case 1:f.set(-1,0,0),u[g+0]=1-bt(f,l,"z","y",s,n),u[g+1]=1-bt(f,l,"y","z",s,t);break;case 2:f.set(0,1,0),u[g+0]=1-bt(f,l,"x","z",s,e),u[g+1]=bt(f,l,"z","x",s,n);break;case 3:f.set(0,-1,0),u[g+0]=1-bt(f,l,"x","z",s,e),u[g+1]=1-bt(f,l,"z","x",s,n);break;case 4:f.set(0,0,1),u[g+0]=1-bt(f,l,"x","y",s,e),u[g+1]=1-bt(f,l,"y","x",s,t);break;case 5:f.set(0,0,-1),u[g+0]=bt(f,l,"x","y",s,e),u[g+1]=1-bt(f,l,"y","x",s,t);break}}};var qc="data:image/png;base64,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";var Jc=matchMedia("(prefers-reduced-motion: reduce)").matches,Ji=(r,e,t)=>Math.min(t,Math.max(e,r)),Jo=r=>r*r*(3-2*r),gs=(r,e,t)=>Ji((r-e)/(t-e),0,1),Kc=(r,e,t,n)=>r+(e-r)*(1-Math.exp(-t*n));function Jd(){try{let r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl"))}catch{return!1}}var fn={x:0,y:0};addEventListener("pointermove",r=>{fn.x=r.clientX/innerWidth*2-1,fn.y=r.clientY/innerHeight*2-1},{passive:!0});var Ki=class{constructor(e,{fov:t=30,z:n=6}={}){fl(this,"loop",()=>{this.running&&(this.draw(Math.min(this.clock.getDelta(),1/20)),requestAnimationFrame(this.loop))});this.canvas=e,this.renderer=new Yr({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.renderer.outputColorSpace=dt,this.renderer.toneMapping=Ec,this.renderer.toneMappingExposure=1.05,this.scene=new ui;let i=new hi(this.renderer);this.scene.environment=i.fromScene(new ms,.04).texture,i.dispose(),this.camera=new ct(t,1,.1,100),this.camera.position.set(0,0,n),this.clock=new cs(!1),this.visible=!1,this.running=!1,this.time=0,new ResizeObserver(()=>this.resize()).observe(e),new IntersectionObserver(([s])=>{this.visible=s.isIntersecting,this.kick()},{rootMargin:"120px 0px"}).observe(e),document.addEventListener("visibilitychange",()=>this.kick())}resize(){let e=this.canvas.clientWidth,t=this.canvas.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.onResize?.(e,t),this.camera.updateProjectionMatrix(),this.draw(0))}kick(){let e=this.visible&&!document.hidden&&!Jc;e&&!this.running?(this.running=!0,this.clock.start(),requestAnimationFrame(this.loop)):e||(this.running=!1,this.clock.stop(),this.visible&&this.draw(0))}draw(e){this.time+=e,this.update(e,this.time),this.renderer.render(this.scene,this.camera)}};function Ko(r,e=9133302){let t=new ls(16777215,2.4);t.position.set(3,4,5),r.add(t);let n=new Nn(e,40,14,2);n.position.set(-2.5,1.5,-3),r.add(n);let i=new Nn(16727717,18,12,2);i.position.set(2.8,-1.4,-2),r.add(i)}function Qc(r,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,`rgba(0,0,0,${e})`),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,128,128);let s=new Be(new In(r,r*.4),new pn({map:new pi(t),transparent:!0,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s}function Kd(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Yc({top:r,tip:e,width:t,depth:n,colors:i,seed:s,highlight:a}){let o=Kd(s),l=new b().subVectors(e,r),c=new b(-l.y,l.x,0).normalize(),h=new b(0,0,1),d=[{t:0,s:1},{t:.2,s:1.08},{t:.52,s:.7},{t:.8,s:.34}],u=6,p=d.map(({t:P,s:L},F)=>{let G=r.clone().addScaledVector(l,P),z=[];for(let W=0;W<u;W++){let V=W/u*Math.PI*2+Math.PI/6,q=F===0?0:.08,Y=G.clone().addScaledVector(c,Math.cos(V)*t*.5*L*(1+(o()-.5)*q)).addScaledVector(h,Math.sin(V)*n*.5*L*(1+(o()-.5)*q));F===0&&(Y.y=r.y),z.push(Y)}return z}),f=[],x=[],m=new Se(i[0]),g=new Se(i[1]),v=new Se(16777215),_=0,y=(P,L,F,G)=>{f.push(P.x,P.y,P.z,L.x,L.y,L.z,F.x,F.y,F.z);let z=m.clone().lerp(g,G);z.multiplyScalar(.55+o()*.75),a&&_===a&&z.lerp(v,.85),_++;for(let W=0;W<3;W++)x.push(z.r,z.g,z.b)},R=p[0].reduce((P,L)=>P.add(L),new b).divideScalar(u);for(let P=0;P<u;P++)y(R,p[0][(P+1)%u],p[0][P],0);for(let P=0;P<d.length-1;P++)for(let L=0;L<u;L++){let F=p[P][L],G=p[P][(L+1)%u],z=p[P+1][(L+1)%u],W=p[P+1][L],V=(d[P].t+d[P+1].t)/2;y(F,G,z,V),y(F,z,W,V+.05)}let T=p[p.length-1];for(let P=0;P<u;P++)y(T[P],T[(P+1)%u],e,1);let C=new Je;return C.setAttribute("position",new Me(f,3)),C.setAttribute("color",new Me(x,3)),C.computeVertexNormals(),C}function Qd(){let r=new It,e=new mn({vertexColors:!0,flatShading:!0,roughness:.2,metalness:.12,clearcoat:1,clearcoatRoughness:.06,iridescence:.55,iridescenceIOR:1.35,envMapIntensity:.95}),t=new b(0,-1.22,0),n=Yc({top:new b(-.86,1.02,0),tip:t,width:.92,depth:.5,colors:[2057215,3870944],seed:7}),i=Yc({top:new b(.86,1.02,0),tip:t,width:.92,depth:.5,colors:[16723610,9048790],seed:21,highlight:9}),s=new di({color:16777215,transparent:!0,opacity:.16});for(let a of[n,i])r.add(new Be(a,e)),r.add(new Hi(new mi(a,12),s));return r}function $d(r){let e=new Ki(r,{fov:30,z:6.4});Ko(e.scene);let t=Qd();e.scene.add(t);let n=Qc(3.2,.55);n.position.y=-1.75,e.scene.add(n);let i=r.closest("section"),s={rx:0,ry:0,lift:0};e.update=(a,o)=>{let l=i.getBoundingClientRect(),c=Ji(-l.top/Math.max(l.height,1),0,1),h=Math.sin(o*.35)*.5,d=Math.sin(o*.27)*.07,u=a===0?1:1-Math.exp(-4*a);s.ry+=(h+fn.x*.35+c*1.4-s.ry)*u,s.rx+=(d+fn.y*.18-s.rx)*u,s.lift=Kc(s.lift,c,6,a||1),t.rotation.set(s.rx,s.ry,0),t.position.y=Math.sin(o*.8)*.05+s.lift*.5;let p=1-s.lift*.12;t.scale.setScalar(p),n.material.opacity=1-s.lift},e.resize()}function Zc(r){let t=document.createElement("canvas");t.width=t.height=1024;let n=t.getContext("2d");n.setTransform(0,-1,1,0,0,1024);let i=1024/2,s=n.createRadialGradient(i*.8,i*.7,40,i,i,i);s.addColorStop(0,"#3a3a44"),s.addColorStop(1,"#16161b"),n.fillStyle=s,n.fillRect(0,0,1024,1024),n.lineWidth=26,n.strokeStyle="#4b4b56",n.beginPath(),n.arc(i,i,497,0,Math.PI*2),n.stroke(),n.lineWidth=4,n.strokeStyle="#55555f",n.beginPath(),n.arc(i,i,405,0,Math.PI*2),n.stroke();let a="VELINCOIN  \xB7  21 000 000 VLC  \xB7  ";n.fillStyle="#9a9aa5",n.font="600 46px Inter, system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let o=[...a],l=Math.PI*2/o.length;o.forEach((h,d)=>{let u=-Math.PI/2+d*l;n.save(),n.translate(i+Math.cos(u)*444,i+Math.sin(u)*444),n.rotate(u+Math.PI/2),n.fillText(h,0,0),n.restore()}),r&&(n.save(),n.beginPath(),n.arc(i,i,392,0,Math.PI*2),n.clip(),n.globalCompositeOperation="lighten",n.drawImage(r,i-380,i-380,760,760),n.restore());let c=new pi(t);return c.colorSpace=dt,c.anisotropy=8,c}function ep(){let r=document.createElement("canvas");r.width=512,r.height=8;let e=r.getContext("2d");for(let n=0;n<512;n+=4)e.fillStyle=n%8===0?"#ffffff":"#555555",e.fillRect(n,0,4,8);let t=new pi(r);return t.wrapS=Bi,t.repeat.set(8,1),t}var tp=new Promise(r=>{let e=new Image;e.onload=()=>r(e),e.onerror=()=>r(null),e.src=qc});function $c(r){let e=r*.13,t=new mn({color:3947590,metalness:1,roughness:.3,bumpMap:ep(),bumpScale:2,clearcoat:.4}),n=new mn({color:16777215,metalness:.9,roughness:.36,clearcoat:.5,clearcoatRoughness:.08,envMapIntensity:.7}),i=n.clone(),s=new Ln(r,r,e,160,1),a=new Be(s,[t,n,i]),o=c=>{n.map=Zc(c),i.map=Zc(c),n.needsUpdate=i.needsUpdate=!0};o(null),Promise.all([tp,document.fonts?.ready]).then(([c])=>o(c));let l=new It;return a.rotation.x=Math.PI/2,l.add(a),l}function np(r){let e=new Ki(r,{fov:30,z:6.2});Ko(e.scene),e.scene.environmentRotation.set(.45,.8,0);let t=$c(1.25);e.scene.add(t);let n=Qc(3,.5);n.position.y=-1.7,e.scene.add(n);let i=r.closest("section"),s=0,a=0;e.update=(o,l)=>{let c=i.getBoundingClientRect(),h=Ji(1-(c.top+c.height)/(innerHeight+c.height),0,1),d=o===0?1:1-Math.exp(-3.5*o),u=l*.55+h*Math.PI*1.5;a+=(u+fn.x*.3-a)*d,s+=(-.18+fn.y*.15-s)*d,t.rotation.set(s,a,0),t.position.y=Math.sin(l*.9)*.06},e.resize()}function ip(r){let e=new Ki(r,{fov:32,z:9});Ko(e.scene);let{scene:t,camera:n}=e,i=new Se(9133302),s=1.75,a=new fs(1,1,1,5,.12),o=new mi(new Mt(1.03,1.03,1.03)),l=[];function c(){let T=new mn({color:1776419,metalness:.55,roughness:.26,clearcoat:1,clearcoatRoughness:.12,emissive:i,emissiveIntensity:0}),C=new Be(a,T),P=new Hi(o,new di({color:11837691,transparent:!0,opacity:.25})),L=new It;return L.add(C,P),L.userData={mat:T,edges:P.material},L}let h=new It;h.position.x=-1.5,t.add(h);let d=6,u=new Ln(.05,.05,s-1,12),p=new mn({color:7039864,metalness:1,roughness:.3});for(let T=0;T<d;T++){let C=c();if(C.position.set((T-(d-1))*s,0,0),h.add(C),l.push(C),T>0){let P=new Be(u,p);P.rotation.z=Math.PI/2,P.position.set(C.position.x-s/2,0,0),h.add(P)}}let f=c();h.add(f);let x=new Be(u,p);x.rotation.z=Math.PI/2,x.position.set(s/2,0,0),h.add(x);let m=$c(.5);h.add(m);let g=[...document.querySelectorAll(".how-steps .step")],v=new b,_=0,y=0;function R(){let T=innerHeight*(innerWidth<900?.68:.5),C=g.map(L=>L.getBoundingClientRect().top);if(T<C[0])return 0;for(let L=0;L<C.length-1;L++)if(T<C[L+1])return L+(T-C[L])/(C[L+1]-C[L]);let P=g[g.length-1].getBoundingClientRect();return Ji(g.length-1+(T-P.top)/Math.max(P.height,1),0,g.length)}if(e.onResize=(T,C)=>{e.camera.zoom=Ji(T/C/1.15,.62,1)},e.update=(T,C)=>{_=R(),y=T===0?_:Kc(y,_,5,T);let P=y,L=Jo(gs(P,.85,1.55)),F=1-L;f.position.set(s,1.9*F+Math.sin(C*1.6)*.06*F,0),f.rotation.set(.5*F*Math.sin(C*.9),C*.9*F,.2*F);let G=F*(.35+.35*Math.sin(C*11)*Math.sin(C*7.3));f.userData.mat.emissiveIntensity=G*.9,f.userData.edges.opacity=.25+G,x.scale.y=L;let z=gs(P,1.25,2.05)*(d+1.5)-.5;l.concat(f).forEach((q,Y)=>{let ne=Math.exp(-((z-Y)**2)*1.6)*(P>1.3&&P<2.4?1:0);(q!==f||L>.99)&&(q.userData.mat.emissiveIntensity=ne*.75,q.userData.edges.opacity=.25+ne*.75)});let W=Jo(gs(P,1.85,2.45));m.visible=W>.001,m.position.set(s,.1+W*1.55,W*.9),m.scale.setScalar(.4+W*.6),m.rotation.set(-.15*W,(1-W)*Math.PI*2.5+Math.sin(C*.8)*.15*W,0);let V=Jo(gs(P,1.75,2.6));n.position.set(4.2-V*1.2+fn.x*.25,2.6-V*.6-fn.y*.15,8.4-V*2.2),v.set(-1.4+V*2.6,.2+V*.7,0),n.lookAt(v),n.updateProjectionMatrix()},Jc){let T=new IntersectionObserver(()=>e.draw(0),{rootMargin:"-45% 0px -45% 0px"});g.forEach(C=>T.observe(C))}e.resize()}function rp(){if(!Jd()){document.documentElement.classList.add("no-webgl");return}try{let r=document.getElementById("crystal"),e=document.getElementById("chain"),t=document.getElementById("coin");r&&$d(r),e&&ip(e),t&&np(t)}catch(r){console.error(r),document.documentElement.classList.add("no-webgl")}}rp();})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
