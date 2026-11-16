(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=`attached`,u=1e3,d=1001,f=1002,p=1003,m=1004,h=1005,g=1006,_=1007,v=1008,y=1009,b=1010,x=1011,S=1012,C=1013,w=1014,T=1015,E=1016,D=1017,O=1018,k=1020,A=35902,j=35899,M=1021,N=1022,P=1023,F=1026,ee=1027,I=1028,te=1029,ne=1030,re=1031,ie=1033,ae=33776,L=33777,R=33778,z=33779,oe=35840,se=35841,ce=35842,le=35843,ue=36196,de=37492,B=37496,fe=37488,pe=37489,me=37490,he=37491,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,Ce=37815,we=37816,Te=37817,Ee=37818,De=37819,Oe=37820,V=37821,ke=36492,Ae=36494,je=36495,H=36283,Me=36284,U=36285,Ne=36286,Pe=2300,Fe=2301,Ie=2302,Le=2303,Re=2400,ze=2401,Be=2402,Ve=2500,He=3200,Ue=3201,We=`srgb`,Ge=`srgb-linear`,Ke=`linear`,qe=`srgb`,Je=7680,Ye=35044,Xe=35048,Ze=2e3;function Qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function $e(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function et(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function tt(){let e=et(`canvas`);return e.style.display=`block`,e}var nt={};function rt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function it(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function W(...e){e=it(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function G(...e){e=it(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function at(...e){let t=e.join(` `);t in nt||(nt[t]=!0,W(...e))}function ot(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var st={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},ct=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},lt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ut=1234567,dt=Math.PI/180,ft=180/Math.PI;function pt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(lt[e&255]+lt[e>>8&255]+lt[e>>16&255]+lt[e>>24&255]+`-`+lt[t&255]+lt[t>>8&255]+`-`+lt[t>>16&15|64]+lt[t>>24&255]+`-`+lt[n&63|128]+lt[n>>8&255]+`-`+lt[n>>16&255]+lt[n>>24&255]+lt[r&255]+lt[r>>8&255]+lt[r>>16&255]+lt[r>>24&255]).toLowerCase()}function mt(e,t,n){return Math.max(t,Math.min(n,e))}function ht(e,t){return(e%t+t)%t}function gt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function _t(e,t,n){return e===t?0:(n-e)/(t-e)}function vt(e,t,n){return(1-n)*e+n*t}function yt(e,t,n,r){return vt(e,t,1-Math.exp(-n*r))}function bt(e,t=1){return t-Math.abs(ht(e,t*2)-t)}function xt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function St(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ct(e,t){return e+Math.floor(Math.random()*(t-e+1))}function wt(e,t){return e+Math.random()*(t-e)}function Tt(e){return e*(.5-Math.random())}function Et(e){e!==void 0&&(ut=e);let t=ut+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dt(e){return e*dt}function Ot(e){return e*ft}function kt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function At(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function jt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Mt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:W(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Nt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pt(e,t){if(t.constructor===Float32Array)return e;let n=Nt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Ft(e,t){if(t.constructor===Float32Array)return e;let n=Nt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var It={DEG2RAD:dt,RAD2DEG:ft,generateUUID:pt,clamp:mt,euclideanModulo:ht,mapLinear:gt,inverseLerp:_t,lerp:vt,damp:yt,pingpong:bt,smoothstep:xt,smootherstep:St,randInt:Ct,randFloat:wt,randFloatSpread:Tt,seededRandom:Et,degToRad:Dt,radToDeg:Ot,isPowerOfTwo:kt,ceilPowerOfTwo:At,floorPowerOfTwo:jt,setQuaternionFromProperEuler:Mt,normalize:Ft,denormalize:Pt};o=Symbol.iterator;var K=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=K,e.prototype.isVector2=!0;var Lt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:W(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var q=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rt.copy(this).projectOnVector(e),this.sub(Rt)}reflect(e){return this.sub(Rt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=q,t.prototype.isVector3=!0;var Rt=new q,zt=new Lt,Bt=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return at(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Vt.makeScale(e,t)),this}rotate(e){return at(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Vt.makeRotation(-e)),this}translate(e,t){return at(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Vt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=Bt,n.prototype.isMatrix3=!0;var Vt=new Bt,Ht=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ut=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wt(){let e={enabled:!0,workingColorSpace:Ge,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Kt(e.r),e.g=Kt(e.g),e.b=Kt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=qt(e.r),e.g=qt(e.g),e.b=qt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ke:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ge]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:r,transfer:qe,toXYZ:Ht,fromXYZ:Ut,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),e}var Gt=Wt();function Kt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function qt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Jt,Yt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jt===void 0&&(Jt=et(`canvas`)),Jt.width=e.width,Jt.height=e.height;let t=Jt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Jt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=et(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Kt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Kt(t[e]/255)*255):t[e]=Kt(t[e]);return{data:t,width:e.width,height:e.height}}return W(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Xt=0,Zt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xt++}),this.uuid=pt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Qt(r[t].image)):e.push(Qt(r[t]))}else e=Qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Yt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(W(`Texture: Unable to serialize Texture.`),{})}var $t=0,en=new q,tn=class e extends ct{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=d,i=d,a=g,o=v,s=P,c=y,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=pt(),this.name=``,this.source=new Zt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(en).x}get height(){return this.source.getSize(en).y}get depth(){return this.source.getSize(en).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){W(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?W(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case u:e.x-=Math.floor(e.x);break;case d:e.x=e.x<0?0:1;break;case f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case u:e.y-=Math.floor(e.y);break;case d:e.y=e.y<0?0:1;break;case f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null,tn.DEFAULT_MAPPING=300,tn.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var nn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=nn,r.prototype.isVector4=!0;var rn=class extends ct{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:g,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new tn({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:g,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},an=class extends rn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},on=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},sn=class extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},J=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/cn.setFromMatrixColumn(e,0).length(),i=1/cn.setFromMatrixColumn(e,1).length(),a=1/cn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(un,e,dn)}lookAt(e,t,n){let r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),fn.crossVectors(n,mn),fn.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),fn.crossVectors(n,mn)),fn.normalize(),pn.crossVectors(mn,fn),r[0]=fn.x,r[4]=pn.x,r[8]=mn.x,r[1]=fn.y,r[5]=pn.y,r[9]=mn.y,r[2]=fn.z,r[6]=pn.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],ee=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*ee,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*ee,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*ee,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=cn.set(r[0],r[1],r[2]).length(),o=cn.set(r[4],r[5],r[6]).length(),s=cn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ln.copy(this);let c=1/a,l=1/o,u=1/s;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=l,ln.elements[5]*=l,ln.elements[6]*=l,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ze,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ze,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=J,i.prototype.isMatrix4=!0;var cn=new q,ln=new J,un=new q(0,0,0),dn=new q(1,1,1),fn=new q,pn=new q,mn=new q,hn=new J,gn=new Lt,_n=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-mt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:W(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gn.setFromEuler(this),this.setFromQuaternion(gn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER=`XYZ`;var vn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},yn=0,bn=new q,xn=new Lt,Sn=new J,Cn=new q,wn=new q,Tn=new q,En=new Lt,Dn=new q(1,0,0),On=new q(0,1,0),kn=new q(0,0,1),An={type:`added`},jn={type:`removed`},Mn={type:`childadded`,child:null},Nn={type:`childremoved`,child:null},Pn=class e extends ct{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yn++}),this.uuid=pt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new _n,r=new Lt,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new J},normalMatrix:{value:new Bt}}),this.matrix=new J,this.matrixWorld=new J,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.multiply(xn),this}rotateOnWorldAxis(e,t){return xn.setFromAxisAngle(e,t),this.quaternion.premultiply(xn),this}rotateX(e){return this.rotateOnAxis(Dn,e)}rotateY(e){return this.rotateOnAxis(On,e)}rotateZ(e){return this.rotateOnAxis(kn,e)}translateOnAxis(e,t){return bn.copy(e).applyQuaternion(this.quaternion),this.position.add(bn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dn,e)}translateY(e){return this.translateOnAxis(On,e)}translateZ(e){return this.translateOnAxis(kn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cn.copy(e):Cn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),wn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(wn,Cn,this.up):Sn.lookAt(Cn,wn,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),xn.setFromRotationMatrix(Sn),this.quaternion.premultiply(xn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(G(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null):G(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jn),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,e,Tn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wn,En,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Pn.DEFAULT_UP=new q(0,1,0),Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=class extends Pn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},In={type:`move`},Ln=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(In)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Rn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Bn={h:0,s:0,l:0};function Vn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Gt.workingColorSpace){if(e=ht(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Vn(i,r,e+1/3),this.g=Vn(i,r,e),this.b=Vn(i,r,e-1/3)}return Gt.colorSpaceToWorking(this,r),this}setStyle(e,t=We){function n(t){t!==void 0&&parseFloat(t)<1&&W(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:W(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);W(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=We){let n=Rn[e.toLowerCase()];return n===void 0?W(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kt(e.r),this.g=Kt(e.g),this.b=Kt(e.b),this}copyLinearToSRGB(e){return this.r=qt(e.r),this.g=qt(e.g),this.b=qt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return Gt.workingToColorSpace(Hn.copy(this),e),Math.round(mt(Hn.r*255,0,255))*65536+Math.round(mt(Hn.g*255,0,255))*256+Math.round(mt(Hn.b*255,0,255))}getHexString(e=We){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(Hn.copy(this),t);let n=Hn.r,r=Hn.g,i=Hn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=We){Gt.workingToColorSpace(Hn.copy(this),e);let t=Hn.r,n=Hn.g,r=Hn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Bn);let n=vt(zn.h,Bn.h,t),r=vt(zn.s,Bn.s,t),i=vt(zn.l,Bn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new Y;Y.NAMES=Rn;var Un=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new Y(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Wn=class extends Pn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new q,Kn=new q,qn=new q,Jn=new q,Yn=new q,Xn=new q,Zn=new q,Qn=new q,$n=new q,er=new q,tr=new nn,nr=new nn,rr=new nn,ir=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gn.subVectors(e,t),r.cross(Gn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Gn.subVectors(r,t),Kn.subVectors(n,t),qn.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(Kn),s=Gn.dot(qn),c=Kn.dot(Kn),l=Kn.dot(qn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)!==null&&Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Jn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Jn.x),s.addScaledVector(a,Jn.y),s.addScaledVector(o,Jn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return tr.setScalar(0),nr.setScalar(0),rr.setScalar(0),tr.fromBufferAttribute(e,t),nr.fromBufferAttribute(e,n),rr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(tr,i.x),a.addScaledVector(nr,i.y),a.addScaledVector(rr,i.z),a}static isFrontFacing(e,t,n,r){return Gn.subVectors(n,t),Kn.subVectors(e,t),Gn.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Gn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Yn.subVectors(r,n),Xn.subVectors(i,n),Qn.subVectors(e,n);let s=Yn.dot(Qn),c=Xn.dot(Qn);if(s<=0&&c<=0)return t.copy(n);$n.subVectors(e,r);let l=Yn.dot($n),u=Xn.dot($n);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Yn,a);er.subVectors(e,i);let f=Yn.dot(er),p=Xn.dot(er);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Xn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Zn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Zn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Yn,a).addScaledVector(Xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ar=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,sr):sr.fromBufferAttribute(r,t),sr.applyMatrix4(e.matrixWorld),this.expandByPoint(sr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),gr.subVectors(this.max,hr),lr.subVectors(e.a,hr),ur.subVectors(e.b,hr),dr.subVectors(e.c,hr),fr.subVectors(ur,lr),pr.subVectors(dr,ur),mr.subVectors(lr,dr);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-mr.z,mr.y,fr.z,0,-fr.x,pr.z,0,-pr.x,mr.z,0,-mr.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-mr.y,mr.x,0];return!yr(t,lr,ur,dr,gr)||(t=[1,0,0,0,1,0,0,0,1],!yr(t,lr,ur,dr,gr))?!1:(_r.crossVectors(fr,pr),t=[_r.x,_r.y,_r.z],yr(t,lr,ur,dr,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},or=[new q,new q,new q,new q,new q,new q,new q,new q],sr=new q,cr=new ar,lr=new q,ur=new q,dr=new q,fr=new q,pr=new q,mr=new q,hr=new q,gr=new q,_r=new q,vr=new q;function yr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){vr.fromArray(e,a);let o=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),s=t.dot(vr),c=n.dot(vr),l=r.dot(vr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var br=new q,xr=new K,Sr=0,Cr=class extends ct{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ye,this.updateRanges=[],this.gpuType=T,this.version=0,this._normalizationScale=e===void 0?void 0:Nt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix4(e),this.setXYZ(t,br.x,br.y,br.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyNormalMatrix(e),this.setXYZ(t,br.x,br.y,br.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.transformDirection(e),this.setXYZ(t,br.x,br.y,br.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Pt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ft(e,this.array):Math.round(e*t)}},wr=class extends Cr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Tr=class extends Cr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Er=class extends Cr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dr=new ar,Or=new q,kr=new q,Ar=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Dr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(kr)),this.expandByPoint(Or.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jr=0,Mr=new J,Nr=new Pn,Pr=new q,Fr=new ar,Ir=new ar,Lr=new q,Rr=class e extends ct{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=pt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Qe(e)?Tr:wr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Bt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mr.makeRotationFromQuaternion(e),this.applyMatrix4(Mr),this}rotateX(e){return Mr.makeRotationX(e),this.applyMatrix4(Mr),this}rotateY(e){return Mr.makeRotationY(e),this.applyMatrix4(Mr),this}rotateZ(e){return Mr.makeRotationZ(e),this.applyMatrix4(Mr),this}translate(e,t,n){return Mr.makeTranslation(e,t,n),this.applyMatrix4(Mr),this}scale(e,t,n){return Mr.makeScale(e,t,n),this.applyMatrix4(Mr),this}lookAt(e){return Nr.lookAt(e),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Er(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&W(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)G(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(this.boundingBox.min,Fr.min),this.boundingBox.expandByPoint(Lr),Lr.addVectors(this.boundingBox.max,Fr.max),this.boundingBox.expandByPoint(Lr)):(this.boundingBox.expandByPoint(Fr.min),this.boundingBox.expandByPoint(Fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)G(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);else if(e){let n=this.boundingSphere.center;if(Fr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ir.setFromBufferAttribute(n),this.morphTargetsRelative?(Lr.addVectors(Fr.min,Ir.min),Fr.expandByPoint(Lr),Lr.addVectors(Fr.max,Ir.max),Fr.expandByPoint(Lr)):(Fr.expandByPoint(Ir.min),Fr.expandByPoint(Ir.max))}Fr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Lr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Lr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Lr.fromBufferAttribute(a,t),o&&(Pr.fromBufferAttribute(e,t),Lr.add(Pr)),r=Math.max(r,n.distanceToSquared(Lr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&G(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){G(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Cr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let l=new q,u=new q,d=new q,f=new K,p=new K,m=new K,h=new q,g=new q;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new q,b=new q,x=new q,S=new q;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Cr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lr.fromBufferAttribute(e,t),Lr.normalize(),e.setXYZ(t,Lr.x,Lr.y,Lr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Cr(a,r,i)}if(this.index===null)return W(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ye,this.updateRanges=[],this.version=0,this.uuid=pt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Br(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Br(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Br(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=pt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Vr=new q,Hr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Nt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix4(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.applyNormalMatrix(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vr.fromBufferAttribute(this,t),Vr.transformDirection(e),this.setXYZ(t,Vr.x,Vr.y,Vr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){rt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Cr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){rt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?Pt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ft(e,this.data.array):Math.round(e*t)}},Ur=new q,Wr=new q,Gr=new Bt,Kr=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ur.subVectors(n,t).cross(Wr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ur),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gr.getNormalMatrix(e),r=this.coplanarPoint(Ur).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qr=0,Jr=class extends ct{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qr++}),this.uuid=pt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Je,this.stencilZFail=Je,this.stencilZPass=Je,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){W(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?W(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Kr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Yr=new q,Xr=new q,Zr=new q,Qr=new q,$r=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yr.copy(this.origin).addScaledVector(this.direction,t),Yr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xr.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Xr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Qr.dot(this.direction),s=-Qr.dot(Zr),c=Qr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xr).addScaledVector(Zr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Yr.subVectors(e.center,this.origin);let n=Yr.dot(this.direction),r=Yr.dot(Yr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,ee=1/w,I=T-P*D,te=E-F*D,ne=O-P*A,re=k-F*A,ie=j-P*N,ae=M-F*N,L=ie*re-ae*ne,R=I*ae-te*ie,z=ne*te-re*I;if(r){if(L<0||R<0||z<0)return null}else if((L<0||R<0||z<0)&&(L>0||R>0||z>0))return null;let oe=L+R+z;if(oe===0)return null;let se=ee*(L*D+R*A+z*N);return(oe>0?se<0:se>0)?null:this.at(se/oe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ei=class extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ti=new J,ni=new $r,ri=new Ar,ii=new q,ai=new q,oi=new q,si=new q,ci=new q,li=new q,ui=new q,di=new q,fi=class extends Pn{constructor(e=new Rr,t=new ei){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){li.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ci.fromBufferAttribute(s,e),a?li.addScaledVector(ci,r):li.addScaledVector(ci.sub(t),r))}t.add(li)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ri.copy(n.boundingSphere),ri.applyMatrix4(i),ni.copy(e.ray).recast(e.near),ri.containsPoint(ni.origin)===!1&&(ni.intersectSphere(ri,ii)===null||ni.origin.distanceToSquared(ii)>(e.far-e.near)**2)||(ti.copy(i).invert(),ni.copy(e.ray).applyMatrix4(ti),(n.boundingBox===null||ni.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=mi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=mi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=mi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=mi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function pi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;di.copy(s),di.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(di);return l<n.near||l>n.far?null:{distance:l,point:di.clone(),object:e}}function mi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ai),e.getVertexPosition(c,oi),e.getVertexPosition(l,si);let u=pi(e,t,n,r,ai,oi,si,ui);if(u){let e=new q;ir.getBarycoord(ui,ai,oi,si,e),i&&(u.uv=ir.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=ir.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=ir.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};ir.getNormal(ai,oi,si,t.normal),u.face=t,u.barycoord=e}return u}var hi=new nn,gi=new nn,_i=new nn,vi=new nn,yi=new J,bi=new q,xi=new Ar,Si=new J,Ci=new $r,wi=class extends fi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=l,this.bindMatrix=new J,this.bindMatrixInverse=new J,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ar),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,bi),this.boundingBox.expandByPoint(bi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ar),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,bi),this.boundingSphere.expandByPoint(bi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xi.copy(this.boundingSphere),xi.applyMatrix4(r),e.ray.intersectsSphere(xi)!==!1&&(Si.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Si),(this.boundingBox===null||Ci.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Ci)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nn,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():W(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;gi.fromBufferAttribute(r.attributes.skinIndex,e),_i.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(hi.copy(t),t.set(0,0,0,0)):(hi.set(t.x,t.y,t.z,1),t.set(0,0,0)),hi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=_i.getComponent(e);if(r!==0){let i=gi.getComponent(e);yi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(vi.copy(hi).applyMatrix4(yi),r)}}return t.isVector4&&(t.w=hi.w),t.applyMatrix4(this.bindMatrixInverse)}},Ti=class extends Pn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Ei=class extends tn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=p,l=p,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Di=new J,Oi=new J,ki=class e{constructor(e=[],t=[]){this.uuid=pt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){W(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new J)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new J;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Oi;Di.multiplyMatrices(i,t[r]),Di.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ei(t,e,e,P,T);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(W(`Skeleton: No bone found with UUID:`,r),i=new Ti),this.bones.push(i),this.boneInverses.push(new J().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ai=class extends Cr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ji=new J,Mi=new J,Ni=[],Pi=new ar,Fi=new J,Ii=new fi,Li=new Ar,Ri=class extends fi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Fi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Pi.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(Pi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ji),Li.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Li)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ii.geometry=this.geometry,Ii.material=this.material,Ii.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Li.copy(this.boundingSphere),Li.applyMatrix4(n),e.ray.intersectsSphere(Li)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ji),Mi.multiplyMatrices(n,ji),Ii.matrixWorld=Mi,Ii.raycast(e,Ni);for(let e=0,n=Ni.length;e<n;e++){let n=Ni[e];n.instanceId=i,n.object=this,t.push(n)}Ni.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ei(new Float32Array(r*this.count),r,this.count,I,T));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zi=new Ar,Bi=new K(.5,.5),Vi=new q,Hi=class{constructor(e=new Kr,t=new Kr,n=new Kr,r=new Kr,i=new Kr,a=new Kr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ze,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476+Bi.distanceTo(e.center),zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Vi.x=r.normal.x>0?e.max.x:e.min.x,Vi.y=r.normal.y>0?e.max.y:e.min.y,Vi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ui=new J,Wi=class e{constructor(){this.coordinateSystem=Ze,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Hi),n[e].setFromProjectionMatrix(Ui,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Hi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Gi=class extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Y(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ki=new q,qi=new q,Ji=new J,Yi=new $r,Xi=new Ar,Zi=new q,Qi=new q,$i=class extends Pn{constructor(e=new Rr,t=new Gi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ki.fromBufferAttribute(t,e-1),qi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ki.distanceTo(qi);e.setAttribute(`lineDistance`,new Er(n,1))}else W(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(r),Xi.radius+=i,e.ray.intersectsSphere(Xi)===!1)return;Ji.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Ji);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ea(this,e,Yi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ea(this,e,Yi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ea(this,e,Yi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ea(this,e,Yi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ea(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ki.fromBufferAttribute(s,i),qi.fromBufferAttribute(s,a),n.distanceSqToSegment(Ki,qi,Zi,Qi)>r)return;Zi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Zi);if(!(c<t.near||c>t.far))return{distance:c,point:Qi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ta=new q,na=new q,ra=class extends $i{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ta.fromBufferAttribute(t,e),na.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ta.distanceTo(na);e.setAttribute(`lineDistance`,new Er(n,1))}else W(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ia=class extends $i{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},aa=class extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},oa=new J,sa=new $r,ca=new Ar,la=new q,ua=class extends Pn{constructor(e=new Rr,t=new aa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),ca.radius+=i,e.ray.intersectsSphere(ca)===!1)return;oa.copy(r).invert(),sa.copy(e.ray).applyMatrix4(oa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);la.fromBufferAttribute(l,n),da(la,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)la.fromBufferAttribute(l,a),da(la,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function da(e,t,n,r,i,a,o){let s=sa.distanceSqToPoint(e);if(s<n){let n=new q;sa.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var fa=class extends tn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pa=class extends tn{constructor(e,t,n=w,r,i,a,o=p,s=p,c,l=F,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ma=class extends pa{constructor(e,t=w,n=301,r,i,a=p,o=p,s,c=F){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ha=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ga=class e extends Rr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},_a=class e extends Rr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new q,g=new q;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new Er(o,3)),this.setAttribute(`normal`,new Er(s,3)),this.setAttribute(`uv`,new Er(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},va=class e extends Rr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Er(u,3)),this.setAttribute(`normal`,new Er(d,3)),this.setAttribute(`uv`,new Er(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ya=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){W(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,r=[],i=[],a=[],o=new q,s=new J;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new q)}i[0]=new q,a[0]=new q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(mt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(mt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ba=class extends ya{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new K){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xa=class extends ba{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Sa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ca=new q,wa=new q,Ta=new Sa,Ea=new Sa,Da=new Sa,Oa=class extends ya{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(wa.subVectors(r[0],r[1]).add(r[0]),c=wa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ca.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ca),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ta.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ea.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Da.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ta.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ea.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Da.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ta.calc(s),Ea.calc(s),Da.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ka(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Aa(e,t){let n=1-e;return n*n*t}function ja(e,t){return 2*(1-e)*e*t}function Ma(e,t){return e*e*t}function Na(e,t,n,r){return Aa(e,t)+ja(e,n)+Ma(e,r)}function Pa(e,t){let n=1-e;return n*n*n*t}function Fa(e,t){let n=1-e;return 3*n*n*e*t}function Ia(e,t){return 3*(1-e)*e*e*t}function La(e,t){return e*e*e*t}function Ra(e,t,n,r,i){return Pa(e,t)+Fa(e,n)+Ia(e,r)+La(e,i)}var za=class extends ya{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ra(e,r.x,i.x,a.x,o.x),Ra(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ba=class extends ya{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ra(e,r.x,i.x,a.x,o.x),Ra(e,r.y,i.y,a.y,o.y),Ra(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends ya{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends ya{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends ya{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Na(e,r.x,i.x,a.x),Na(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends ya{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Na(e,r.x,i.x,a.x),Na(e,r.y,i.y,a.y),Na(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends ya{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ka(o,s.x,c.x,l.x,u.x),ka(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}},Ka=Object.freeze({__proto__:null,ArcCurve:xa,CatmullRomCurve3:Oa,CubicBezierCurve:za,CubicBezierCurve3:Ba,EllipseCurve:ba,LineCurve:Va,LineCurve3:Ha,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:Wa,SplineCurve:Ga}),qa=class extends ya{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ka[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ka[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Ja=class extends qa{constructor(e){super(),this.type=`Path`,this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Va(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ua(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new za(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ga([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ba(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ya=class extends Ja{constructor(e){super(e),this.uuid=pt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ja().fromJSON(n))}return this}};function Xa(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Za(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=io(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return $a(a,o,n,s,c,l,0),o}function Za(e,t,n,r,i){let a;if(i===ko(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Eo(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Eo(i/r|0,e[i],e[i+1],a);return a&&vo(a,a.next)&&(Do(a),a=a.next),a}function Qa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(vo(n,n.next)||_o(n.prev,n,n.next)===0)){if(Do(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function $a(e,t,n,r,i,a,o){if(!e)return;!o&&a&&lo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?to(e,r,i,a):eo(e))t.push(c.i,e.i,l.i),Do(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=no(Qa(e),t),$a(e,t,n,r,i,a,2)):o===2&&ro(e,t,n,r,i,a):$a(Qa(e),t,n,r,i,a,1);break}}}function eo(e){let t=e.prev,n=e,r=e.next;if(_o(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ho(i,s,a,c,o,l,m.x,m.y)&&_o(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function to(e,t,n,r){let i=e.prev,a=e,o=e.next;if(_o(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=fo(p,m,t,n,r),v=fo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ho(s,u,c,d,l,f,y.x,y.y)&&_o(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ho(s,u,c,d,l,f,b.x,b.y)&&_o(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ho(s,u,c,d,l,f,y.x,y.y)&&_o(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ho(s,u,c,d,l,f,b.x,b.y)&&_o(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function no(e,t){let n=e;do{let r=n.prev,i=n.next.next;!vo(r,i)&&yo(r,n,n.next,i)&&Co(r,i)&&Co(i,r)&&(t.push(r.i,n.i,i.i),Do(n),Do(n.next),n=e=i),n=n.next}while(n!==e);return Qa(n)}function ro(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&go(o,e)){let s=To(o,e);o=Qa(o,o.next),s=Qa(s,s.next),$a(o,t,n,r,i,a,0),$a(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function io(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Za(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(po(o))}i.sort(ao);for(let e=0;e<i.length;e++)n=oo(i[e],n);return n}function ao(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function oo(e,t){let n=so(e,t);if(!n)return t;let r=To(n,e);return Qa(r,r.next),Qa(n,n.next)}function so(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(vo(e,n))return n;do{if(vo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&mo(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Co(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&co(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function co(e,t){return _o(e.prev,e,t.prev)<0&&_o(t.next,e,e.next)<0}function lo(e,t,n,r){let i=e;do i.z===0&&(i.z=fo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,uo(i)}function uo(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function fo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function po(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function mo(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ho(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&mo(e,t,n,r,i,a,o,s)}function go(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!So(e,t)&&(Co(e,t)&&Co(t,e)&&wo(e,t)&&(_o(e.prev,e,t.prev)||_o(e,t.prev,t))||vo(e,t)&&_o(e.prev,e,e.next)>0&&_o(t.prev,t,t.next)>0)}function _o(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function vo(e,t){return e.x===t.x&&e.y===t.y}function yo(e,t,n,r){let i=xo(_o(e,t,n)),a=xo(_o(e,t,r)),o=xo(_o(n,r,e)),s=xo(_o(n,r,t));return!!(i!==a&&o!==s||i===0&&bo(e,n,t)||a===0&&bo(e,r,t)||o===0&&bo(n,e,r)||s===0&&bo(n,t,r))}function bo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function xo(e){return e>0?1:e<0?-1:0}function So(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&yo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Co(e,t){return _o(e.prev,e,e.next)<0?_o(e,t,e.next)>=0&&_o(e,e.prev,t)>=0:_o(e,t,e.prev)<0||_o(e,e.next,t)<0}function wo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function To(e,t){let n=Oo(e.i,e.x,e.y),r=Oo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Eo(e,t,n,r){let i=Oo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Do(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Oo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ko(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ao=class{static triangulate(e,t,n=2){return Xa(e,t,n)}},jo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Mo(e),No(n,e);let a=e.length;t.forEach(Mo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,No(n,t[e]);let o=Ao.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Mo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function No(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Po=class e extends Rr{constructor(e=new Ya([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Er(r,3)),this.setAttribute(`uv`,new Er(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Fo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new q,b=new q,x=new q}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!jo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];jo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||G(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new K(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new K(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=jo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ie(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ie(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=jo.triangulateShape(e,t)}let ee=F.length,I=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],I):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ie(x.x,x.y,x.z)):ie(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],I):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ie(x.x,x.y,x.z)):ie(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ie(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ie(i.x,i.y+g[s-1].y,g[s-1].x+n):ie(i.x,i.y,c+n)}}}te(),ne();function te(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<ee;e++){let n=F[e];ae(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<ee;e++){let n=F[e];ae(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ee;e++){let t=F[e];ae(t[2],t[1],t[0])}for(let e=0;e<ee;e++){let t=F[e];ae(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ne(){let e=r.length/3,t=0;re(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];re(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function re(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);L(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ie(e,t,n){a.push(e),a.push(t),a.push(n)}function ae(e,t,i){R(e),R(t),R(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);z(o[0]),z(o[1]),z(o[2])}function L(e,t,i,a){R(e),R(t),R(a),R(t),R(i),R(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);z(s[0]),z(s[1]),z(s[3]),z(s[1]),z(s[2]),z(s[3])}function R(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function z(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Io(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ka[i.type]().fromJSON(i)),new e(r,t.options)}},Fo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new K(a,o),new K(s,c),new K(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-d),new K(f,1-m),new K(h,1-_)]:[new K(s,1-c),new K(u,1-d),new K(p,1-m),new K(g,1-_)]}};function Io(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Lo=class e extends Rr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ro=class e extends Rr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Er(p,3)),this.setAttribute(`normal`,new Er(m,3)),this.setAttribute(`uv`,new Er(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},zo=class e extends Rr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new q,f=new q,p=new q;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Er(c,3)),this.setAttribute(`normal`,new Er(l,3)),this.setAttribute(`uv`,new Er(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Bo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ho(i))i.isRenderTargetTexture?(W(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ho(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Vo(e){let t={};for(let n=0;n<e.length;n++){let r=Bo(e[n]);for(let e in r)t[e]=r[e]}return t}function Ho(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Uo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Wo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var Go={clone:Bo,merge:Vo},Ko=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jo=class extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ko,this.fragmentShader=qo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bo(e.uniforms),this.uniformsGroups=Uo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new nn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Bt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new J().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yo=class extends Jo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Xo=class extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zo=class extends Xo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Y(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Y(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Y(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return at(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){at(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Qo=class extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$o=class extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function es(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ts(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function ns(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function rs(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function is(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var as=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},os=class extends as{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Re,endingEnd:Re}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ze:i=e,o=2*t-n;break;case Be:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ze:a=e,s=2*n-t;break;case Be:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ss=class extends as{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},cs=class extends as{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ls=class extends as{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=fs(n,t,g,y,r);i[p]=us(x,o,_,b,m)}return i}};function us(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ds(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function fs(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=us(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ds(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ps=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ts(e.settings)&&(n.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ss(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new os(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ls(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pe:t=this.InterpolantFactoryMethodDiscrete;break;case Fe:t=this.InterpolantFactoryMethodLinear;break;case Ie:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return W(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pe;case this.InterpolantFactoryMethodLinear:return Fe;case this.InterpolantFactoryMethodSmooth:return Ie;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;ts(this.settings)&&(ms(this.settings.inTangents,e),ms(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ts(this.settings)&&(hs(this.settings.inTangents,e),hs(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(G(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(G(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){G(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){G(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&$e(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){G(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ie,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ts(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ms(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function hs(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ps.prototype.ValueTypeName=``,ps.prototype.TimeBufferType=Float32Array,ps.prototype.ValueBufferType=Float32Array,ps.prototype.DefaultInterpolation=Fe;var gs=class extends ps{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName=`bool`,gs.prototype.ValueBufferType=Array,gs.prototype.DefaultInterpolation=Pe,gs.prototype.InterpolantFactoryMethodLinear=void 0,gs.prototype.InterpolantFactoryMethodSmooth=void 0;var _s=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}};_s.prototype.ValueTypeName=`color`;var vs=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}};vs.prototype.ValueTypeName=`number`;var ys=class extends as{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Lt.slerpFlat(i,0,a,c-o,a,c,s);return i}},bs=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ys(this.times,this.values,this.getValueSize(),e)}};bs.prototype.ValueTypeName=`quaternion`,bs.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends ps{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName=`string`,xs.prototype.ValueBufferType=Array,xs.prototype.DefaultInterpolation=Pe,xs.prototype.InterpolantFactoryMethodLinear=void 0,xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends ps{constructor(e,t,n,r){super(e,t,n,r)}};Ss.prototype.ValueTypeName=`vector`;var Cs=class{constructor(e=``,t=-1,n=[],r=Ve){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=pt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Ts(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(ps.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=ns(o);o=rs(o,1,c),s=rs(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new vs(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ws(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return vs;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Ss;case`color`:return _s;case`quaternion`:return bs;case`bool`:case`boolean`:return gs;case`string`:return xs}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Ts(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=ws(e.type);if(e.times===void 0){let t=[],n=[];is(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),ts(e.settings)&&(n.settings={inTangents:es(e.settings.inTangents,Float32Array),outTangents:es(e.settings.outTangents,Float32Array)}),n}var Es={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Ds(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Ds(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Ds(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Os=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ks=class{constructor(e){this.manager=e===void 0?Os:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ks.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var As={},js=class extends Error{constructor(e,t){super(e),this.response=t}},Ms=class extends ks{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Es.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(As[e]!==void 0){As[e].push({onLoad:t,onProgress:n,onError:r});return}As[e]=[],As[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&W(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=As[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new js(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Es.add(`file:${e}`,t);let n=As[e];delete As[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=As[e];if(n===void 0)throw this.manager.itemError(e),t;delete As[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ns=new WeakMap,Ps=class extends ks{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Es.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Ns.get(a);e===void 0&&(e=[],Ns.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=et(`img`);function s(){l(),t&&t(this);let n=Ns.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Ns.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Es.remove(`image:${e}`);let n=Ns.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Ns.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Es.add(`image:${e}`,o),i.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},Fs=class extends ks{constructor(e){super(e)}load(e,t,n,r){let i=new tn,a=new Ps(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Is=class extends Pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ls=class extends Is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Rs=new J,zs=new q,Bs=new q,Vs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=y,this.map=null,this.mapPass=null,this.matrix=new J,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zs.setFromMatrixPosition(e.matrixWorld),t.position.copy(zs),Bs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Rs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Rs,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Rs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hs=new q,Us=new Lt,Ws=new q,Gs=class extends Pn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new J,this.projectionMatrix=new J,this.projectionMatrixInverse=new J,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hs,Us,Ws),Ws.x===1&&Ws.y===1&&Ws.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Us,Ws.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Hs,Us,Ws),Ws.x===1&&Ws.y===1&&Ws.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Us,Ws.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ks=new q,qs=new K,Js=new K,Ys=class extends Gs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ft*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ft*2*Math.atan(Math.tan(dt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z)}getViewSize(e,t){return this.getViewBounds(e,qs,Js),t.subVectors(Js,qs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xs=class extends Vs{constructor(){super(new Ys(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ft*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Zs=class extends Is{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Xs}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Qs=class extends Vs{constructor(){super(new Ys(90,1,.5,500)),this.isPointLightShadow=!0}},$s=class extends Is{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Qs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ec=class extends Gs{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tc=class extends Vs{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nc=class extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new tc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},rc=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ic=new WeakMap,ac=class extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&W(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&W(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Es.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{ic.has(a)===!0?(r&&r(ic.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!==`anonymous`?`include`:`same-origin`,o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return Es.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),ic.set(s,t),Es.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Es.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},oc=-90,sc=1,cc=class extends Pn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ys(oc,sc,e,t);r.layers=this.layers,this.add(r);let i=new Ys(oc,sc,e,t);i.layers=this.layers,this.add(i);let a=new Ys(oc,sc,e,t);a.layers=this.layers,this.add(a);let o=new Ys(oc,sc,e,t);o.layers=this.layers,this.add(o);let s=new Ys(oc,sc,e,t);s.layers=this.layers,this.add(s);let c=new Ys(oc,sc,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},lc=class extends Ys{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},uc=`\\[\\]\\.:\\/`,dc=RegExp(`[\\[\\]\\.:\\/]`,`g`),fc=`[^\\[\\]\\.:\\/]`,pc=`[^`+uc.replace(`\\.`,``)+`]`,mc=`((?:WC+[\\/:])*)`.replace(`WC`,fc),hc=`(WCOD+)?`.replace(`WCOD`,pc),gc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,fc),_c=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,fc),vc=RegExp(`^`+mc+hc+gc+_c+`$`),yc=[`material`,`materials`,`bones`,`map`],bc=class{constructor(e,t,n){let r=n||xc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(dc,``)}static parseTrackName(e){let t=vc.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);yc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){W(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){G(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){G(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){G(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){G(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){G(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;G(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xc.Composite=bc,xc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},xc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},xc.prototype.GetterByBindingType=[xc.prototype._getValue_direct,xc.prototype._getValue_array,xc.prototype._getValue_arrayElement,xc.prototype._getValue_toArray],xc.prototype.SetterByBindingTypeAndVersioning=[[xc.prototype._setValue_direct,xc.prototype._setValue_direct_setNeedsUpdate,xc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xc.prototype._setValue_array,xc.prototype._setValue_array_setNeedsUpdate,xc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xc.prototype._setValue_arrayElement,xc.prototype._setValue_arrayElement_setNeedsUpdate,xc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xc.prototype._setValue_fromArray,xc.prototype._setValue_fromArray_setNeedsUpdate,xc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function Sc(e,t,n,r){let i=Cc(r);switch(n){case M:return e*t;case I:return e*t/i.components*i.byteLength;case te:return e*t/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case N:return e*t*3/i.components*i.byteLength;case P:return e*t*4/i.components*i.byteLength;case ie:return e*t*4/i.components*i.byteLength;case ae:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case R:case z:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case B:case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case V:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case H:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*8;case U:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Cc(e){switch(e){case y:case b:return{byteLength:1,components:1};case S:case x:case E:return{byteLength:2,components:1};case D:case O:return{byteLength:2,components:4};case w:case C:case T:return{byteLength:4,components:1};case A:case j:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?W(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function wc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Tc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ec={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
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
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
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
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
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
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
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
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
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
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
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
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
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
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
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
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
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
#include <envmap_physical_pars_fragment>
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
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
#include <envmap_physical_pars_fragment>
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
	#include <premultiplied_alpha_fragment>
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
}`},X={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Dc={basic:{uniforms:Vo([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Ec.meshbasic_vert,fragmentShader:Ec.meshbasic_frag},lambert:{uniforms:Vo([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:Ec.meshlambert_vert,fragmentShader:Ec.meshlambert_frag},phong:{uniforms:Vo([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ec.meshphong_vert,fragmentShader:Ec.meshphong_frag},standard:{uniforms:Vo([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ec.meshphysical_vert,fragmentShader:Ec.meshphysical_frag},toon:{uniforms:Vo([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new Y(0)}}]),vertexShader:Ec.meshtoon_vert,fragmentShader:Ec.meshtoon_frag},matcap:{uniforms:Vo([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Ec.meshmatcap_vert,fragmentShader:Ec.meshmatcap_frag},points:{uniforms:Vo([X.points,X.fog]),vertexShader:Ec.points_vert,fragmentShader:Ec.points_frag},dashed:{uniforms:Vo([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ec.linedashed_vert,fragmentShader:Ec.linedashed_frag},depth:{uniforms:Vo([X.common,X.displacementmap]),vertexShader:Ec.depth_vert,fragmentShader:Ec.depth_frag},normal:{uniforms:Vo([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Ec.meshnormal_vert,fragmentShader:Ec.meshnormal_frag},sprite:{uniforms:Vo([X.sprite,X.fog]),vertexShader:Ec.sprite_vert,fragmentShader:Ec.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ec.background_vert,fragmentShader:Ec.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ec.backgroundCube_vert,fragmentShader:Ec.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ec.cube_vert,fragmentShader:Ec.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ec.equirect_vert,fragmentShader:Ec.equirect_frag},distance:{uniforms:Vo([X.common,X.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ec.distance_vert,fragmentShader:Ec.distance_frag},shadow:{uniforms:Vo([X.lights,X.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:Ec.shadow_vert,fragmentShader:Ec.shadow_frag}};Dc.physical={uniforms:Vo([Dc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ec.meshphysical_vert,fragmentShader:Ec.meshphysical_frag};var Oc={r:0,b:0,g:0},kc=new J,Ac=new Bt;Ac.set(-1,0,0,0,1,0,0,0,1);function jc(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new fi(new ga(1,1,1),new Jo({name:`BackgroundCubeMaterial`,uniforms:Bo(Dc.backgroundCube.uniforms),vertexShader:Dc.backgroundCube.vertexShader,fragmentShader:Dc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(kc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ac),l.material.toneMapped=Gt.getTransfer(i.colorSpace)!==qe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new fi(new Lo(2,2),new Jo({name:`BackgroundMaterial`,uniforms:Bo(Dc.background.uniforms),vertexShader:Dc.background.vertexShader,fragmentShader:Dc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(i.colorSpace)!==qe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Oc,Wo(e)),n.buffers.color.setClear(Oc.r,Oc.g,Oc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Mc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Nc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Pc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(W(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&W(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&W(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Fc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Kr,s=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ic=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new fa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ga(5,5,5),i=new Jo({name:`CubemapFromEquirect`,uniforms:Bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new fi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=g),new cc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Lc=256,Rc=3,zc=20,Bc=256,Vc=16,Hc=3,Uc=new q,Wc=new Y,Gc=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new cc(1,10,null),this._boxMesh=new fi(new ga(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Uc}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Wc));let h=new cc(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Lc,jt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Lc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Kc(e,!1,!1),n=Math.log2(e)-Rc;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Kc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Jc(),this._integrationMaterial=Yc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Vc);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Hc)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Bc*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Xc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Kc(e,t,n){return new Ic(e,{minFilter:v,generateMipmaps:t,type:E,colorSpace:Ge,depthBuffer:n})}function qc(e,t,n){return new Jo({name:e,uniforms:t,vertexShader:Ec.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Jc(){return qc(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yc(){return qc(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xc(){return qc(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Zc(){return qc(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qc(){return qc(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $c(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ic(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Gc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Gc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function el(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&at(`WebGLRenderer: `+e+` extension not supported.`),t}}}function tl(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Tr:wr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function nl(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function rl(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:G(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function il(e,t,n){let r=new WeakMap,i=new nn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new on(h,p,m,u);g.type=T,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function al(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ol={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function sl(e,t,n,r,i,a){let o=new an(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Rr;u.setAttribute(`position`,new Er([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Er([0,2,0,0,2,0],2));let d=new Yo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new fi(u,d),p=new ec(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new an(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}),c=new an(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new pa(t,n),a===!0&&(l.format=ee,l.type=k)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Gt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=ol[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var cl=new tn,ll=new pa(1,1),ul=new ma(1),dl=new on,fl=new sn,pl=new fa,ml=[],hl=[],gl=new Float32Array(16),_l=new Float32Array(9),vl=new Float32Array(4);function yl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ml[i];if(a===void 0&&(a=new Float32Array(i),ml[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function bl(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Sl(e,t){let n=hl[t];n===void 0&&(n=new Int32Array(t),hl[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Cl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function wl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bl(n,t))return;e.uniform2fv(this.addr,t),xl(n,t)}}function Tl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bl(n,t))return;e.uniform3fv(this.addr,t),xl(n,t)}}function El(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bl(n,t))return;e.uniform4fv(this.addr,t),xl(n,t)}}function Dl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bl(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xl(n,t)}else{if(bl(n,r))return;vl.set(r),e.uniformMatrix2fv(this.addr,!1,vl),xl(n,r)}}function Ol(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bl(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xl(n,t)}else{if(bl(n,r))return;_l.set(r),e.uniformMatrix3fv(this.addr,!1,_l),xl(n,r)}}function kl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bl(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xl(n,t)}else{if(bl(n,r))return;gl.set(r),e.uniformMatrix4fv(this.addr,!1,gl),xl(n,r)}}function Al(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function jl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bl(n,t))return;e.uniform2iv(this.addr,t),xl(n,t)}}function Ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bl(n,t))return;e.uniform3iv(this.addr,t),xl(n,t)}}function Nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bl(n,t))return;e.uniform4iv(this.addr,t),xl(n,t)}}function Pl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bl(n,t))return;e.uniform2uiv(this.addr,t),xl(n,t)}}function Il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bl(n,t))return;e.uniform3uiv(this.addr,t),xl(n,t)}}function Ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bl(n,t))return;e.uniform4uiv(this.addr,t),xl(n,t)}}function Rl(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function zl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Rl(ll):cl,n.setTexture2D(t||a,i)}function Bl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fl,i)}function Vl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Rl(ul):pl,n.setTextureCube(t||a,i)}function Hl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||dl,i)}function Ul(e){switch(e){case 5126:return Cl;case 35664:return wl;case 35665:return Tl;case 35666:return El;case 35674:return Dl;case 35675:return Ol;case 35676:return kl;case 5124:case 35670:return Al;case 35667:case 35671:return jl;case 35668:case 35672:return Ml;case 35669:case 35673:return Nl;case 5125:return Pl;case 36294:return Fl;case 36295:return Il;case 36296:return Ll;case 35678:case 36198:case 36298:case 36306:case 35682:return zl;case 35679:case 36299:case 36307:return Bl;case 35680:case 36300:case 36308:case 36293:return Vl;case 36289:case 36303:case 36311:case 36292:return Hl}}function Wl(e,t){e.uniform1fv(this.addr,t)}function Gl(e,t){let n=yl(t,this.size,2);e.uniform2fv(this.addr,n)}function Kl(e,t){let n=yl(t,this.size,3);e.uniform3fv(this.addr,n)}function ql(e,t){let n=yl(t,this.size,4);e.uniform4fv(this.addr,n)}function Jl(e,t){let n=yl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Yl(e,t){let n=yl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Xl(e,t){let n=yl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Zl(e,t){e.uniform1iv(this.addr,t)}function Ql(e,t){e.uniform2iv(this.addr,t)}function $l(e,t){e.uniform3iv(this.addr,t)}function eu(e,t){e.uniform4iv(this.addr,t)}function tu(e,t){e.uniform1uiv(this.addr,t)}function nu(e,t){e.uniform2uiv(this.addr,t)}function ru(e,t){e.uniform3uiv(this.addr,t)}function iu(e,t){e.uniform4uiv(this.addr,t)}function au(e,t,n){let r=this.cache,i=t.length,a=Sl(n,i);bl(r,a)||(e.uniform1iv(this.addr,a),xl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Rl(ll):cl;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ou(e,t,n){let r=this.cache,i=t.length,a=Sl(n,i);bl(r,a)||(e.uniform1iv(this.addr,a),xl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fl,a[e])}function su(e,t,n){let r=this.cache,i=t.length,a=Sl(n,i);bl(r,a)||(e.uniform1iv(this.addr,a),xl(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Rl(ul):pl;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function cu(e,t,n){let r=this.cache,i=t.length,a=Sl(n,i);bl(r,a)||(e.uniform1iv(this.addr,a),xl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||dl,a[e])}function lu(e){switch(e){case 5126:return Wl;case 35664:return Gl;case 35665:return Kl;case 35666:return ql;case 35674:return Jl;case 35675:return Yl;case 35676:return Xl;case 5124:case 35670:return Zl;case 35667:case 35671:return Ql;case 35668:case 35672:return $l;case 35669:case 35673:return eu;case 5125:return tu;case 36294:return nu;case 36295:return ru;case 36296:return iu;case 35678:case 36198:case 36298:case 36306:case 35682:return au;case 35679:case 36299:case 36307:return ou;case 35680:case 36300:case 36308:case 36293:return su;case 36289:case 36303:case 36311:case 36292:return cu}}var uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ul(t.type)}},du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lu(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},pu=/(\w+)(\])?(\[|\.)?/g;function mu(e,t){e.seq.push(t),e.map[t.id]=t}function hu(e,t,n){let r=e.name,i=r.length;for(pu.lastIndex=0;;){let a=pu.exec(r),o=pu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){mu(n,l===void 0?new uu(s,e,t):new du(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new fu(s),mu(n,e)),n=e}}}var gu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);hu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function _u(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var vu=37297,yu=0;function bu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var xu=new Bt;function Su(e){Gt._getMatrix(xu,Gt.workingColorSpace,e);let t=`mat3( ${xu.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(e)){case Ke:return[t,`LinearTransferOETF`];case qe:return[t,`sRGBTransferOETF`];default:return W(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Cu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+bu(e.getShaderSource(t),r)}return i}function wu(e,t){let n=Su(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Tu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Eu(e,t){let n=Tu[t];return n===void 0?(W(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Du=new q;function Ou(){return Gt.getLuminanceCoefficients(Du),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Du.x.toFixed(4)}, ${Du.y.toFixed(4)}, ${Du.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ku(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Mu).join(`
`)}function Au(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ju(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Mu(e){return e!==``}function Nu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fu=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(e){return e.replace(Fu,Lu)}function Lu(e,t){let n=Ec[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Iu(n)}var Ru=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(e){return e.replace(Ru,Bu)}function Bu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Vu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Hu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Uu(e){return Hu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Wu={302:`ENVMAP_MODE_REFRACTION`};function Gu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Wu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ku={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function qu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ku[e.combine]||`ENVMAP_BLENDING_NONE`}function Ju(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Uu(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Gu(n),d=qu(n),f=ku(n),p=Au(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Mu).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Mu).join(`
`),g.length>0&&(g+=`
`)):(h=[Vu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Mu).join(`
`),g=[Vu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ec.tonemapping_pars_fragment,n.toneMapping===0?``:Eu(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ec.colorspace_pars_fragment,wu(`linearToOutputTexel`,n.outputColorSpace),Ou(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Mu).join(`
`)),o=Iu(o),o=Nu(o,n),o=Pu(o,n),s=Iu(s),s=Nu(s,n),s=Pu(s,n),o=zu(o),s=zu(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=_u(i,i.VERTEX_SHADER,v),x=_u(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Cu(i,b,`vertex`),n=Cu(i,x,`fragment`);G(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):W(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new gu(i,m),w=ju(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,vu)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yu++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Yu=0,Xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zu(e),t.set(e,n)),n}},Zu=class{constructor(e){this.id=Yu++,this.code=e,this.usedTimes=0}};function Qu(e){return e===1030||e===37490||e===36285}function $u(e,t,n,r,i,a){let o=new vn,s=new Xu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&W(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Dc[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,ee=!!b,I=ee&&b.isPMREMTexture===!0,te=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,L=!!i.emissiveMap,R=!!i.metalnessMap,z=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.diffuseRoughness>0,le=i.dispersion>0,ue=i.retroreflectivity>0,de=i.iridescence>0,B=i.sheen>0,fe=i.transmission>0,pe=oe&&!!i.anisotropyMap,me=se&&!!i.clearcoatMap,he=se&&!!i.clearcoatNormalMap,ge=se&&!!i.clearcoatRoughnessMap,_e=ce&&!!i.diffuseRoughnessMap,ve=de&&!!i.iridescenceMap,ye=de&&!!i.iridescenceThicknessMap,be=B&&!!i.sheenColorMap,xe=B&&!!i.sheenRoughnessMap,Se=!!i.specularMap,Ce=!!i.specularColorMap,we=!!i.specularIntensityMap,Te=fe&&!!i.transmissionMap,Ee=fe&&!!i.thicknessMap,De=!!i.gradientMap,Oe=!!i.alphaMap,V=i.alphaTest>0,ke=!!i.alphaHash,Ae=!!i.extensions,je=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(je=e.toneMapping);let H=I?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Me={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:ee,envMapMode:ee&&b.mapping,envMapPMREM:I,envMapMaxLod:I?H.length-1:null,envMapSize:I?H[0].width:null,aoMap:te,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:ae,emissiveMap:L,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&Qu(i.normalMap.format),metalnessMap:R,roughnessMap:z,anisotropy:oe,anisotropyMap:pe,clearcoat:se,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,diffuseRoughness:ce,diffuseRoughnessMap:_e,dispersion:le,retroreflection:ue,iridescence:de,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:B,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Ce,specularIntensityMap:we,transmission:fe,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Oe,alphaTest:V,alphaHash:ke,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:te&&p(i.aoMap.channel),lightMapUv:ne&&p(i.lightMap.channel),bumpMapUv:re&&p(i.bumpMap.channel),normalMapUv:ie&&p(i.normalMap.channel),displacementMapUv:ae&&p(i.displacementMap.channel),emissiveMapUv:L&&p(i.emissiveMap.channel),metalnessMapUv:R&&p(i.metalnessMap.channel),roughnessMapUv:z&&p(i.roughnessMap.channel),anisotropyMapUv:pe&&p(i.anisotropyMap.channel),clearcoatMapUv:me&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:ve&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&p(i.sheenRoughnessMap.channel),specularMapUv:Se&&p(i.specularMap.channel),specularColorMapUv:Ce&&p(i.specularColorMap.channel),specularIntensityMapUv:we&&p(i.specularIntensityMap.channel),transmissionMapUv:Te&&p(i.transmissionMap.channel),thicknessMapUv:Ee&&p(i.thicknessMap.channel),alphaMapUv:Oe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ie||oe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Oe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Gt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:L&&i.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Dc[t];n=Go.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Ju(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function ed(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function td(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function nd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function rd(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||td),r.length>1&&r.sort(t||nd),i.length>1&&i.sort(t||nd)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function id(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new rd,e.set(t,[i])):n>=r.length?(i=new rd,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ad(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new Y};break;case`SpotLight`:n={position:new q,direction:new q,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function od(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var sd=0;function cd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ld(e){let t=new ad,n=od(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new J,o=new J;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(cd);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=sd++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ud(e){let t=new ld(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function dd(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ud(e),t.set(n,[a])):r>=i.length?(a=new ud(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var fd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,md=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],hd=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],gd=new J,_d=new q,vd=new q;function yd(e,t,n){let r=new Hi,i=new K,a=new K,o=new nn,s=new Qo,c=new $o,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Jo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:fd,fragmentShader:pd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let h=new Rr;h.setAttribute(`position`,new Cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new fi(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(W(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){W(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){W(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new an(i.x,i.y,{format:ne,type:E,minFilter:g,magFilter:g,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new pa(i.x,i.y,T),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=F,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p}else l.isPointLight?(d.map=new Ic(i.x),d.map.depthTexture=new ma(i.x,w)):(d.map=new an(i.x,i.y),d.map.depthTexture=new pa(i.x,i.y,w)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=F,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=g,d.map.depthTexture.magFilter=g):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let y=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),_d.setFromMatrixPosition(l.matrixWorld),e.position.copy(_d),vd.copy(e.position),vd.add(md[t]),e.up.copy(hd[t]),e.lookAt(vd),e.updateMatrixWorld(),n.makeTranslation(-_d.x,-_d.y,-_d.z),gd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(gd,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,y,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new an(i.x,i.y,{format:ne,type:E}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=x(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function bd(e,t){function n(){let t=!1,n=new nn,r=null,i=new nn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?R(e.DEPTH_TEST):z(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=st[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?R(e.STENCIL_TEST):z(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let ee=null,I={},te=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new nn().fromArray(te),ie=new nn().fromArray(ne);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let L={};L[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),L[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),L[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),R(e.DEPTH_TEST),o.setFunc(3),fe(!1),pe(1),R(e.CULL_FACE),de(0);function R(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function z(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ce(t){return h!==t&&(e.useProgram(t),h=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};le[103]=e.MIN,le[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(z(e.BLEND),g=!1);else if(g===!1&&(R(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:G(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:G(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:G(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:G(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(le[n],le[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function B(t,n){t.side===2?z(e.CULL_FACE):R(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?R(e.SAMPLE_ALPHA_TO_COVERAGE):z(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function pe(t){t===0?z(e.CULL_FACE):(R(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function me(t){t!==k&&(N&&e.lineWidth(t),k=t)}function he(t,n,r){t?(R(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):z(e.POLYGON_OFFSET_FILL)}function ge(t){t?R(e.SCISSOR_TEST):z(e.SCISSOR_TEST)}function _e(t){t===void 0&&(t=e.TEXTURE0+M-1),ee!==t&&(e.activeTexture(t),ee=t)}function ve(t,n,r){r===void 0&&(r=ee===null?e.TEXTURE0+M-1:ee);let i=I[r];i===void 0&&(i={type:void 0,texture:void 0},I[r]=i),(i.type!==t||i.texture!==n)&&(ee!==r&&(e.activeTexture(r),ee=r),e.bindTexture(t,n||L[t]),i.type=t,i.texture=n)}function ye(){let t=I[ee];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ce(){try{e.texSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function V(){try{e.texImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function je(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function H(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function U(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,I={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:R,disable:z,bindFramebuffer:oe,drawBuffers:se,useProgram:ce,setBlending:de,setMaterial:B,setFlipSided:fe,setCullFace:pe,setLineWidth:me,setPolygonOffset:he,setScissorTest:ge,activeTexture:_e,bindTexture:ve,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:Oe,texImage3D:V,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Me,uniformBlockBinding:U,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Se,texSubImage3D:Ce,compressedTexSubImage2D:we,compressedTexSubImage3D:Te,scissor:je,viewport:H,reset:Ne}}function xd(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):et(`canvas`)}function D(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),W(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&W(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function A(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function j(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];W(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||W(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ke:Gt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function M(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,W(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function N(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function P(e){let t=new WeakRef(e);r.get(e).__ref=t,C.add(t),w.register(e,t,t)}function F(e){let t=r.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function I(e){ne(e.target)}function te(e){re(e.target)}function ne(e){e.removeEventListener(`dispose`,I),F(e),ae(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function re(e){e.removeEventListener(`dispose`,te),F(e),R(e)}function ie(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?re(t):ne(t))}C.clear(),b.clear()}function ae(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&L(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function L(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function R(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&ne(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let z=0;function oe(){z=0}function se(){return z}function ce(e){z=e}function le(){let e=z;return e>=i.maxTextures&&W(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),z+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function de(t,i){let a=r.get(t);if(t.isVideoTexture&&Me(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)W(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)W(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function B(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function fe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?Se(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[u]:e.REPEAT,[d]:e.CLAMP_TO_EDGE,[f]:e.MIRRORED_REPEAT},he={[p]:e.NEAREST,[m]:e.NEAREST_MIPMAP_NEAREST,[h]:e.NEAREST_MIPMAP_LINEAR,[g]:e.LINEAR,[_]:e.LINEAR_MIPMAP_NEAREST,[v]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&W(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,I),P(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ue(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&L(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ve(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Gt.getPrimaries(Gt.workingColorSpace),r=o.colorSpace===``?null:Gt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=D(o.image,!1,i.maxTextureSize);t=U(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);_e(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=N(o,t);if(o.isDepthTexture)p=M(o.format===ee,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&be(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Sc(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Sc(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ne(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Ne(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);O(o)&&o.mipmapsAutoUpdate===!0&&k(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ve(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Gt.getPrimaries(Gt.workingColorSpace),r=o.colorSpace===``?null:Gt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=D(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=U(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=j(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=N(o,h);_e(e.TEXTURE_CUBE_MAP,o);let C;if(o.isDepthTexture){if(v=M(o.format===ee,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ne(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(o)&&o.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=j(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),H(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,je(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=M(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;H(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=j(o.internalFormat,c,l,o.normalized,o.colorSpace);H(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,je(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,je(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?pe(i.depthTexture,0):de(i.depthTexture,0);let u=c.__webglTexture,d=je(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)H(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)H(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Oe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,te),P(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&H(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=j(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=je(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(i)?k(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),_e(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),O(a)&&k(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),_e(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);O(i)?k(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ee(t)}function V(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(O(a)&&a.mipmapsAutoUpdate===!0){let t=A(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),k(t),n.unbindTexture()}}}let ke=[];function Ae(t){if(t.samples>0){if(H(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&ke.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function je(e){return Math.min(i.maxSamples,e.samples)}function H(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Me(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function U(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Gt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&W(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):G(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=B,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=H,this.dispose=ie}function Sd(e,t){function n(n,r=``){let i,a=Gt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Cd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wd=`
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

}`,Td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jo({vertexShader:Cd,fragmentShader:wd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new Lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ed=class extends ct{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Td,g={},_=t.getContextAttributes(),v=null,b=null,x=[],S=[],C=new K,T=null,E=null,D=new Ys;D.viewport=new nn;let O=new Ys;O.viewport=new nn;let A=[D,O],j=new lc,M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Ln,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Ln,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Ln,x[e]=t),t.getHandSpace()};function I(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,I),r.removeEventListener(`selectstart`,I),r.removeEventListener(`selectend`,I),r.removeEventListener(`squeeze`,I),r.removeEventListener(`squeezestart`,I),r.removeEventListener(`squeezeend`,I),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}M=null,N=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,b=null,R.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,I),r.addEventListener(`selectstart`,I),r.addEventListener(`selectend`,I),r.addEventListener(`squeeze`,I),r.addEventListener(`squeezestart`,I),r.addEventListener(`squeezeend`,I),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ee:F,a=_.stencil?k:w);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new an(d.textureWidth,d.textureHeight,{format:P,type:y,depthTexture:new pa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new an(f.framebufferWidth,f.framebufferHeight,{format:P,type:y,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),R.setContext(r),R.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=O.near=D.near=t,j.far=O.far=D.far=n,(M!==j.near||N!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,N=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;re(j,i);for(let e=0;e<a.length;e++)re(a[e],i);j.projectionMatrix.copy(D.projectionMatrix),j.projectionMatrixInverse.copy(D.projectionMatrixInverse),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,j,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ft*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let ae=null;function L(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=A[n];o===void 0&&(o=new Ys,o.layers.enable(n),o.viewport=new nn,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ha,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let R=new wc;R.setAnimationLoop(L),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},Dd=new J,Od=new Bt;Od.set(-1,0,0,0,1,0,0,0,1);function kd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Wo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Dd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Od),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ad(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?W(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):W(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var jd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Md=null;function Nd(){return Md===null&&(Md=new Ei(jd,16,16,ne,E),Md.name=`DFG_LUT`,Md.minFilter=g,Md.magFilter=g,Md.wrapS=d,Md.wrapT=d,Md.generateMipmaps=!1,Md.needsUpdate=!0),Md}var Pd=class{constructor(e={}){let{canvas:t=tt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=y}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ie,re,te]),g=new Set([y,w,S,k,D,O]),_=new Uint32Array(4),b=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},C=null,T=null,A=[],j=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,P=!1,F=null,ee=null,I=null,ne=null;this._outputColorSpace=We;let ae=0,L=0,R=null,z=-1,oe=null,se=new nn,ce=new nn,le=null,ue=new Y(0),de=0,B=t.width,fe=t.height,pe=1,me=null,he=null,ge=new nn(0,0,B,fe),_e=new nn(0,0,B,fe),ve=!1,ye=new Hi,be=new Wi,xe=!1,Se=!1,Ce=new J,we=new q,Te=new nn,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return R===null?pe:1}let V=n;function ke(e,n){return t.getContext(e,n)}let Ae,je,H,Me,U,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,Ge,Ke,qe,Je,Ye,Xe,Qe;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,nt,!1),t.addEventListener(`webglcontextrestored`,it,!1),t.addEventListener(`webglcontextcreationerror`,at,!1),V===null){let t=`webgl2`;if(V=ke(t,e),V===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}$e()}catch(e){throw t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),G(`WebGLRenderer: `+e.message),e}function $e(){Ae=new el(V),Ae.init(),Ye=new Sd(V,Ae),je=new Pc(V,Ae,e,Ye),H=new bd(V,Ae),je.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),ee=V.createFramebuffer(),I=V.createFramebuffer(),ne=V.createFramebuffer(),Me=new rl(V),U=new ed,Ne=new xd(V,Ae,H,U,je,Ye,Me),Pe=new $c(N),Fe=new Tc(V),Xe=new Mc(V,Fe),Ie=new tl(V,Fe,Me,Xe),Le=new al(V,Ie,Fe,Xe,Me),Ke=new il(V,je,Ne),He=new Fc(U),Re=new $u(N,Pe,Ae,je,Xe,He),ze=new kd(N,U),Be=new id,Ve=new dd(Ae),Ge=new jc(N,Pe,H,Le,p,s),Ue=new yd(N,Le,je),Qe=new Ad(V,Me,je,H),qe=new Nc(V,Ae,Me),Je=new nl(V,Ae,Me),Me.programs=Re.programs,N.capabilities=je,N.extensions=Ae,N.properties=U,N.renderLists=Be,N.shadowMap=Ue,N.state=H,N.info=Me}m!==1009&&(M=new sl(m,t.width,t.height,o,r,i));let et=new Ed(N,V);this.xr=et,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(e){e!==void 0&&(pe=e,this.setSize(B,fe,!1))},this.getSize=function(e){return e.set(B,fe)},this.setSize=function(e,n,r=!0){et.isPresenting?W(`WebGLRenderer: Can't change size while VR device is presenting.`):(B=e,fe=n,t.width=Math.floor(e*pe),t.height=Math.floor(n*pe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(B*pe,fe*pe).floor()},this.setDrawingBufferSize=function(e,n,r){B=e,fe=n,pe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)G(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){W(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(ge)},this.setViewport=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),H.viewport(se.copy(ge).multiplyScalar(Oe()).round())},this.getScissor=function(e){return e.copy(_e)},this.setScissor=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),H.scissor(ce.copy(_e).multiplyScalar(Oe()).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(e){H.setScissorTest(ve=e)},this.setOpaqueSort=function(e){me=e},this.setTransparentSort=function(e){he=e},this.getClearColor=function(e){return e.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(R!==null){let t=R.texture.format;e=h.has(t)}if(e){let e=R.texture.type,t=g.has(e),n=Ge.getClearColor(),r=Ge.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,V.clearBufferuiv(V.COLOR,0,_)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,V.clearBufferiv(V.COLOR,0,b))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),F=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,nt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),Ge.dispose(),Be.dispose(),Ve.dispose(),Ne.dispose(),U.dispose(),Pe.dispose(),Le.dispose(),Ie.dispose(),Xe.dispose(),Qe.dispose(),Re.dispose(),et.dispose(),et.removeEventListener(`sessionstart`,pt),et.removeEventListener(`sessionend`,mt),ht.stop()};function nt(e){e.preventDefault(),rt(`WebGLRenderer: Context Lost.`),P=!0}function it(){rt(`WebGLRenderer: Context Restored.`),P=!1;let e=Me.autoReset,t=Ue.enabled,n=Ue.autoUpdate,r=Ue.needsUpdate,i=Ue.type;$e(),Me.autoReset=e,Ue.enabled=t,Ue.autoUpdate=n,Ue.needsUpdate=r,Ue.type=i}function at(e){G(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),U.remove(e)}function lt(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){Re.releaseProgram(e)}),e.isShaderMaterial&&Re.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ie.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Xe.setup(i,r,s,n,c);let h,g=qe;if(c!==null&&(h=Fe.get(c),g=Je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n,r){F!==null&&e.isNodeMaterial&&F.setObject(r,e),xe===!0&&He.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),F!==null&&F.renderStart(e,t,n),T=Ve.get(n),T.init(t),j.push(T),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),T.setupLights(),F!==null&&F.updateLights(T.state.lightsArray),Se=this.localClippingEnabled,xe=He.init(this.clippingPlanes,Se),xe===!0&&He.setGlobalState(this.clippingPlanes,t),F!==null&&Ue.render(T.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ut(o,n,t,e),r.add(o)}else ut(i,n,t,e),r.add(i)}}),T=j.pop(),F!==null&&F.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=U.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new wc;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,et.setAnimationLoop(e),e===null?ht.stop():ht.start()},et.addEventListener(`sessionstart`,pt),et.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){G(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(P===!0)return;F!==null&&F.renderStart(e,t);let n=et.enabled===!0&&et.isPresenting===!0,r=M!==null&&(R===null||n)&&M.begin(N,R);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(t),t=et.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,R),T=Ve.get(e,j.length),T.init(t),T.state.textureUnits=Ne.getTextureUnits(),j.push(T),Ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?be.setFromArrayCamera(t):ye.setFromProjectionMatrix(Ce,Ze,t.reversedDepth),Se=this.localClippingEnabled,xe=He.init(this.clippingPlanes,Se),C=Be.get(e,A.length),C.init(),A.push(C),this.info.render.frame++,et.enabled===!0&&et.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,N.sortObjects)}gt(e,t,0,N.sortObjects),C.finish(),F!==null&&F.updateLights(T.state.lightsArray),N.sortObjects===!0&&C.sort(me,he),De=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,De&&Ge.addToRenderList(C,e),this.info.autoReset===!0&&this.info.reset(),xe===!0&&He.beginShadows();let i=T.state.shadowsArray;if(Ue.render(i,e,t),xe===!0&&He.endShadows(),(r&&M.hasRenderPass())===!1){let n=C.opaque,r=C.transmissive;if(T.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}De&&Ge.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(C,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),De&&Ge.render(e),_t(C,e,t)}R!==null&&L===0&&(Ne.updateMultisampleRenderTarget(R),Ne.updateRenderTargetMipmap(R)),r&&M.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),Xe.resetDefaultState(),z=-1,oe=null,j.pop(),j.length>0?(T=j[j.length-1],Ne.setTextureUnits(T.state.textureUnits),xe===!0&&He.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,A.pop(),C=A.length>0?A[A.length-1]:null,F!==null&&F.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)T.pushLight(e),e.castShadow&&T.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?be:ye;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);let i=Le.update(e),a=e.material;a.visible&&C.push(e,i,a,n,Te.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?be:ye;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Le.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Te.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Te.copy(e.boundingSphere.center)),Te.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&C.push(e,i,c,n,Te.z,s,t)}}else a.visible&&C.push(e,i,a,n,Te.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;T.setupLightsView(n),xe===!0&&He.setGlobalState(N.clippingPlanes,n),r&&H.viewport(se.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);T.state.transmissionRenderTarget[r.id]=new an(1,1,{generateMipmaps:!0,type:e?E:y,minFilter:v,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}let a=T.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(ue),de=N.getClearAlpha(),de<1&&N.setClearColor(16777215,.5),N.clear(),De&&Ge.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),T.setupLightsView(r),xe===!0&&He.setGlobalState(N.clippingPlanes,r),yt(e,n,r),Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(ue,de),d!==void 0&&(r.viewport=d),N.toneMapping=u}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){F!==null&&i.isNodeMaterial&&F.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function xt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function St(e,t,n){t.isScene!==!0&&(t=Ee);let r=U.get(e),i=T.state.lights,a=T.state.shadowsArray,o=i.state.version,s=Re.getParameters(e,i.state,a,t,n,T.state.lightProbeGridArray),c=Re.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Pe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=Re.getUniforms(e),F!==null&&e.isNodeMaterial&&F.build(e,n,s),e.onBeforeCompile(s,N),d=Re.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=He.uniform),Tt(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=xt(T.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ct(e,t,n,r,i){let a=U.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=St(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=gu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t,n,r,i){t.isScene!==!0&&(t=Ee),Ne.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=R===null?N.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Pe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=U.get(r),y=T.state.lights;if(xe===!0&&(Se===!0||e!==oe)){let t=e===oe&&r.id===z;He.setState(r,e,t)}let b=!1,S=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==He.numPlanes||v.numIntersection!==He.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===xt(T.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(S=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let C=v.currentProgram;(b===!0||S===!0)&&(C=S===!0?Ct(r,t,i,s,h):St(r,t,i),F&&r.isNodeMaterial&&F.onUpdateProgram(r,C,v));let w=!1,E=!1,D=!1,O=C.getUniforms(),k=v.uniforms;if(H.useProgram(C.program)&&(w=!0,E=!0,D=!0),r.id!==z&&(z=r.id,E=!0),w||oe!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(V,`projectionMatrix`,e.projectionMatrix),O.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(V,we.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&O.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,E=!0,D=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(V,`sunShadowMap`,y.state.sunShadowMap,Ne),y.state.directionalShadowMap.length>0&&O.setValue(V,`directionalShadowMap`,y.state.directionalShadowMap,Ne),y.state.spotShadowMap.length>0&&O.setValue(V,`spotShadowMap`,y.state.spotShadowMap,Ne),y.state.pointShadowMap.length>0&&O.setValue(V,`pointShadowMap`,y.state.pointShadowMap,Ne)),i.isSkinnedMesh){O.setOptional(V,i,`bindMatrix`),O.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(V,`boneTexture`,e.boneTexture,Ne))}i.isBatchedMesh&&(O.setOptional(V,i,`batchingTexture`),O.setValue(V,`batchingTexture`,i._matricesTexture,Ne),O.setOptional(V,i,`batchingIdTexture`),O.setValue(V,`batchingIdTexture`,i._indirectTexture,Ne),O.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(V,`batchingColorTexture`,i._colorsTexture,Ne));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ke.update(i,n,C),(E||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(V,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Nd()),E){if(O.setValue(V,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&Dt(k,D),a&&r.fog===!0&&ze.refreshFogUniforms(k,a),ze.refreshMaterialUniforms(k,r,pe,fe,T.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=x,t=0;for(let n of T.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;k.probesSH.value=e.textures,k.probesMin.value=e.min,k.probesMax.value=e.max,k.probesResolution.value=e.resolution}gu.upload(V,wt(v),k,Ne)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(gu.upload(V,wt(v),k,Ne),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(V,`center`,i.center),O.setValue(V,`modelViewMatrix`,i.modelViewMatrix),O.setValue(V,`normalMatrix`,i.normalMatrix),O.setValue(V,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Qe.update(n,C),Qe.bind(n,C)}}return C}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(e,t,n){let r=U.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){R=e,ae=t,L=n;let r=null,i=!1,a=!1;if(e){let o=U.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest,H.viewport(se),H.scissor(ce),H.setScissorTest(le),z=-1;return}if(o.__webglFramebuffer===void 0)Ne.setupRenderTarget(e);else if(o.__hasExternalTextures)Ne.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ne.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ne.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),ce.copy(e.scissor),le=e.scissorTest}else se.copy(ge).multiplyScalar(pe).floor(),ce.copy(_e).multiplyScalar(pe).floor(),le=ve;if(n!==0&&(r=ee),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(se),H.scissor(ce),H.setScissorTest(le),i){let r=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=U.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}z=-1};function kt(e){let t=U.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=je.textureFormatReadable(e.format),t.__typeReadable=je.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,Ye.convert(c),Ye.convert(l),a)}finally{let e=R===null?null:U.get(R).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,Ye.convert(l),Ye.convert(u),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let p=R===null?null:U.get(R).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,p);let m=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ot(V,m,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(f),V.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ne.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ye.convert(t.format),_=Ye.convert(t.type),v;t.isData3DTexture?(Ne.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ne.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(Ne.setTexture2D(t,0),v=V.TEXTURE_2D),H.activeTexture(V.TEXTURE0),H.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(V.UNPACK_ROW_LENGTH),b=H.getParameter(V.UNPACK_IMAGE_HEIGHT),x=H.getParameter(V.UNPACK_SKIP_PIXELS),S=H.getParameter(V.UNPACK_SKIP_ROWS),C=H.getParameter(V.UNPACK_SKIP_IMAGES);H.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(V.UNPACK_SKIP_PIXELS,l),H.pixelStorei(V.UNPACK_SKIP_ROWS,u),H.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=U.get(e),r=U.get(t),h=U.get(n.__renderTarget),g=U.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||U.has(e)){let n=U.get(e),r=U.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,I),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(V.UNPACK_ROW_LENGTH,y),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(V.UNPACK_SKIP_PIXELS,x),H.pixelStorei(V.UNPACK_SKIP_ROWS,S),H.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&Ne.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ne.setTextureCube(e,0):e.isData3DTexture?Ne.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ne.setTexture2DArray(e,0):Ne.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){ae=0,L=0,R=null,H.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}},Fd=9.81,Id=Math.PI/180,Ld=180/Math.PI,Rd=1/240,zd=.05,Z={R_SC:8.7,E_MAX:65,E_TUCK:30,E_BRAKE_CAP:30,BRAKE_E:22,BRAKE_E_RATE:200,HOLD_E_MAX:25,HOLD_E_RATE:220,HOLD_V0:2,HOLD_SPAN:3,ANALOG_EXP:1.25,AIR_E:30,MU0:.05,C_EDGE:1.1,A_CAP_RACE:2*Fd,A_CAP_FREE:2.6*Fd,GRIP_FREE:1.2,CATCH_E:6,ANTI_CATCH_V:.7,ANTI_CATCH_E:5,DRIFT_GRIP_LOSS:.3,MU_BASE:.035,PLOW:.14,K_AIR:.0042,K_TUCK:.0024,GN_MIN:.5,ETA_B0:5,ETA_SPAN:17,V2_MIN:.3,BETA_MIN_V:.4,PIVOT_RATE:2.8,PIVOT_MIN:.5,PIVOT_V_DIV:2.5,BRAKE_BETA0:40,BRAKE_BETA_K:50,DRIFT_BETA0:20,DRIFT_BETA_SPAN:16,C_PIV:.2,PIV_ARM:.39,W_TAU:.05,ASSIST_GAIN:.6,ASSIST_V0:2,ASSIST_SPAN:4,ASSIST_GT:.4,PUSH_A:1.6,PUSH_V_RACE:2.5,PUSH_V_FREE:4.5,FWD_HYST:1,AUTO_DECEL:2,SCRUB0:.3,SCRUB_K:.25,SCRUB_MIN:.12,ACC_TAU:.15,PARK_V:.9,PARK_TURN:1.8,PARK_SETTLE:1.2,PARK_TAU:.12,PARK_E_MAX:40,PARK_EXIT_DEG:40,PARK_EXIT_RATE:2.5,LAUNCH_V:8,LAUNCH_PROBE:4,LAUNCH_K:1.3,LAUNCH_K_CHARGE:1.9,LAUNCH_LOOKAHEAD:.1,LAUNCH_CLEAR:.001,LAND_LOSS_K:.025,LAND_LOSS_MAX:.3,FREE_CAP_LO:25,FREE_CAP_V0:1,FREE_CAP_SPAN:7.5},Bd={name:`arcade`,assist:1,edgeBuild:[[22,150],[44,55],[90,55]],edgeRelease:360,edgeFollow:260,balanceMargin:6,balanceFloor:15},Vd={name:`realistic`,assist:0,edgeBuild:[[12,90],[30,35],[90,22]],edgeRelease:240,edgeFollow:180,balanceMargin:6,balanceFloor:15},Hd={arcade:Bd,realistic:Vd},Ud=(e,t,n)=>e+(t-e)*n;function Wd(e){let t=Math.min(1,Math.max(0,e)),n=Vd,r=Bd;return{name:t===0?n.name:t===1?r.name:`assist-${t.toFixed(2)}`,assist:t,edgeBuild:n.edgeBuild.map((e,n)=>[Ud(e[0],r.edgeBuild[n][0],t),Ud(e[1],r.edgeBuild[n][1],t)]),edgeRelease:Ud(n.edgeRelease,r.edgeRelease,t),edgeFollow:Ud(n.edgeFollow,r.edgeFollow,t),balanceMargin:Ud(n.balanceMargin,r.balanceMargin,t),balanceFloor:Ud(n.balanceFloor,r.balanceFloor,t)}}var Gd={STOP_V:1,SKID_B:14,FLAT_E:5,CARVE_E:35,CARVE_B:4,DEBOUNCE:.12,TURN_SIDE_E:3,TURN_MIN_DUR:.5,TURN_MIN_V:3,TURN_B_MIN_V:2.5,RATE_CARVE_B:5,RATE_CARVE_E:35,RATE_EDGE_B:12,RATE_EDGE_E:10,WARN_B:15,WARN_V:3};function Kd(e,t,n){let r=Math.abs(t),i=Math.abs(n);return e<Gd.STOP_V?`stop`:r>Gd.SKID_B?`skid`:i<Gd.FLAT_E?`flat`:i>=Gd.CARVE_E&&r<=Gd.CARVE_B?`carve`:`edge`}function qd(e=`stop`){return{shown:e,pending:e,t:0}}function Jd(e,t,n,r=!1){return r?(e.shown=e.pending=t,e.t=0,t):(t===e.shown?(e.pending=t,e.t=0):t===e.pending?e.t+=n:(e.pending=t,e.t=n),e.pending!==e.shown&&e.t>=Gd.DEBOUNCE-1e-9&&(e.shown=e.pending,e.t=0),e.shown)}function Yd(e){return e.maxSlipDeg<Gd.RATE_CARVE_B&&e.maxEdgeDeg>=Gd.RATE_CARVE_E?`carve`:e.maxSlipDeg<Gd.RATE_EDGE_B&&e.maxEdgeDeg>=Gd.RATE_EDGE_E?`edge`:`skid`}function Xd(){return{side:0,dur:0,maxE:0,maxB:0,vMax:0}}function Zd(e,t,n,r){let i=Math.abs(t.edgeDeg)>Gd.TURN_SIDE_E?t.edgeDeg>0?1:-1:0;i!==0&&i!==e.side&&(e.side!==0&&(e.dur>Gd.TURN_MIN_DUR&&e.vMax>Gd.TURN_MIN_V&&r.push({type:`turn`,side:e.side>0?`toe`:`heel`,kind:Yd({maxEdgeDeg:e.maxE,maxSlipDeg:e.maxB}),maxEdgeDeg:e.maxE,maxSlipDeg:e.maxB,dur:e.dur,vMax:e.vMax}),Math.abs(t.slipDeg)>Gd.WARN_B&&t.speed>Gd.WARN_V&&!t.braking&&r.push({type:`warn`,code:`flat-transition`,msg:`换刃时板还横着在滑`})),e.side=i,e.dur=0,e.maxE=0,e.maxB=0,e.vMax=0),e.dur+=n,e.maxE=Math.max(e.maxE,Math.abs(t.edgeDeg)),t.speed>Gd.TURN_B_MIN_V&&(e.maxB=Math.max(e.maxB,Math.abs(t.slipDeg))),e.vMax=Math.max(e.vMax,t.speed)}var Qd=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],$d=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],ef=e=>Math.hypot(e[0],e[1],e[2]),tf=(e,t)=>[e[0]*t,e[1]*t,e[2]*t];function nf(e,t,n){return e[0]+=t[0]*n,e[1]+=t[1]*n,e[2]+=t[2]*n,e}function rf(e,t=[1,0,0]){let n=ef(e);return n>1e-9?[e[0]/n,e[1]/n,e[2]/n]:[t[0],t[1],t[2]]}var af=(e,t)=>nf([e[0],e[1],e[2]],t,-Qd(e,t));function of(e,t,n){let r=Math.cos(n),i=Math.sin(n),a=$d(t,e),o=Qd(t,e)*(1-r);return[e[0]*r+a[0]*i+t[0]*o,e[1]*r+a[1]*i+t[1]*o,e[2]*r+a[2]*i+t[2]*o]}var sf=(e,t,n)=>Math.atan2(Qd(n,$d(e,t)),Qd(e,t)),cf=(e,t,n)=>e<t?t:e>n?n:e,lf=e=>cf(e,0,1);function uf(e){let t=lf(e);return t*t*(3-2*t)}var df=e=>e>0?1:e<0?-1:0;function ff(e,t,n){return e<t?Math.min(t,e+n):Math.max(t,e-n)}function pf(e={}){return e.assist===void 0?typeof e.handling==`string`?Hd[e.handling]:e.handling??Vd:Wd(e.assist)}function mf(){return{speed:0,edgeDeg:0,slipDeg:0,load:1,lean:0,label:`stop`,air:!1,normal:[0,1,0],events:[],vLong:0,vLat:0,aLat:0,gn:Fd,held:!0,parked:!1,fwd:1,edgeCmdDeg:0,edgeCapDeg:Z.E_MAX}}function hf(e,t={}){let n=rf(e.f?[...e.f]:[1,0,0]),r=e.speed??0;return{p:[...e.p],v:tf(n,r),f:n,fwd:1,edgeDeg:0,t:0,mode:t.mode??`free`,handling:pf(t),sidecutRadius:t.sidecutRadius??Z.R_SC,eCmd:0,w:0,air:null,park:null,scrub:Z.SCRUB0,accLP:0,lastSpeed:r,accum:0,labels:qd(`stop`),turn:Xd(),out:mf()}}function gf(e,t,n,r){let i=[];for(e.accum+=cf(Number.isFinite(r)?r:0,0,zd);e.accum>=Rd-1e-9;)e.accum-=Rd,_f(e,t,n,Rd,i);return e.out.events=i,e.out}function _f(e,t,n,r,i){let a=ef(e.v),o=vf(e,t,a,r);e.air?Tf(e,o,n,r,i):e.park||o.park&&a<Z.PARK_V?Ef(e,o,n,r):wf(e,o,n,r,i),e.t+=r}function vf(e,t,n,r){let i=t.go>.15,a=!e.air,o=(n-e.lastSpeed)/r;e.lastSpeed=n,e.accLP+=(o-e.accLP)*Math.min(1,r/Z.ACC_TAU),i||!a?e.scrub=Z.SCRUB0:n>Z.PARK_V&&(e.scrub=cf(e.scrub+(e.accLP+Z.AUTO_DECEL)*Z.SCRUB_K*r,Z.SCRUB_MIN,1));let s=Math.max(lf(t.brake),i||!a||e.park?0:e.scrub),c=Math.abs(t.steer)>.15,l=e.mode===`race`,u=lf(t.boost);return{steer:cf(t.steer,-1,1),analog:t.analog,charge:t.charge,tuck:l?u:0,boost:l?0:u,push:i&&t.brake<.2,drift:c?s:0,brake:c?0:s,park:!i}}function yf(e,t){let n=rf(e.normal(t[0],t[2]),[0,1,0]);return n[1]>0?n:[0,1,0]}function bf(e){let t=Fd*e[1];return[e[0]*t,-Fd+e[1]*t,e[2]*t]}function xf(e,t){for(let[n,r]of e.edgeBuild)if(t<n)return r;return e.edgeBuild[e.edgeBuild.length-1][1]}function Sf(e,t,n){let r=e.handling,i=e.mode===`free`?Z.FREE_CAP_LO+(Z.E_MAX-Z.FREE_CAP_LO)*uf((t-Z.FREE_CAP_V0)/Z.FREE_CAP_SPAN):Z.E_MAX,a=Math.min(1,t*t/(Math.max(n,.001)*e.sidecutRadius)),o=cf(Math.asin(a)*Ld+r.balanceMargin,r.balanceFloor,Z.E_MAX);return o+(i-o)*r.assist}var Cf=(e,t)=>Math.hypot(e,t)/Fd;function wf(e,t,n,r,i){let a=e.handling,o=e.mode===`race`,s=yf(n,e.p),c=Math.max(Z.GN_MIN,Fd*s[1]),l=bf(s),u=rf(af(e.f,s),rf(af([1,0,0],s))),d=$d(u,s),f=ef(e.v),p=af(e.v,s),m=ef(p);p=m>1e-9?tf(p,f/m):[0,0,0];let h=Qd(p,u);h<-Z.FWD_HYST?e.fwd=-1:h>Z.FWD_HYST&&(e.fwd=1);let g=e.fwd,_=t.steer*g,v=t.drift,y=t.brake,b=Qd(l,d),x=Qd(p,d),S=v<=.05&&y<=.05&&Math.abs(_)>.1&&df(_)===df(b)&&Math.abs(b)>Z.ASSIST_GT?Math.abs(_)*Z.ASSIST_GAIN*(1-uf((f-Z.ASSIST_V0)/Z.ASSIST_SPAN)):0,C=Z.E_MAX-(Z.E_MAX-Z.E_TUCK)*t.tuck;y>.1&&(C=Math.min(C,Z.E_BRAKE_CAP));let w=Math.min(C,Sf(e,f,c));if(t.analog&&Math.abs(_)>1e-6)e.eCmd=df(_)*Math.min(w,Math.abs(_)**+Z.ANALOG_EXP*Z.E_MAX);else if(Math.abs(_)<=1e-6){if(y>.08){let t=Math.abs(e.edgeDeg)>5?df(e.edgeDeg):x===0?-1:-df(x);e.eCmd=ff(e.eCmd,t*Z.BRAKE_E*(.6+.4*y),Z.BRAKE_E_RATE*r)}else{let t=cf(-Math.atan2(b,c)*Ld,-Z.HOLD_E_MAX,Z.HOLD_E_MAX)*(1-uf((f-Z.HOLD_V0)/Z.HOLD_SPAN));e.eCmd=ff(e.eCmd,t,Z.HOLD_E_RATE*r)}}else if(e.eCmd!==0&&df(_)!==df(e.eCmd))e.eCmd=ff(e.eCmd,0,a.edgeRelease*r);else{e.eCmd+=_*xf(a,Math.abs(e.eCmd))*r;let t=w*Math.abs(_);e.eCmd=cf(e.eCmd,-t,t)}e.eCmd=cf(e.eCmd,-C,C),e.edgeDeg=ff(e.edgeDeg,e.eCmd,a.edgeFollow*r),(!o||v>.2||y>.2||S>.1)&&df(e.edgeDeg)===df(x)&&Math.abs(x)>Z.ANTI_CATCH_V&&Math.abs(e.edgeDeg)>Z.ANTI_CATCH_E&&(e.edgeDeg=df(e.edgeDeg)*Z.ANTI_CATCH_E);let T=Qd(p,u),E=f>Z.BETA_MIN_V?Math.atan2(x,Math.abs(T)):0,D=E*Ld,O=df(e.edgeDeg),k=Math.abs(e.edgeDeg)*Id,A=O*c*Math.tan(k)+b,j=1/(e.sidecutRadius*Math.cos(k)),M=1-uf((Math.abs(D)-Z.ETA_B0)/Z.ETA_SPAN),N=cf(O*A/Math.max(f*f,Z.V2_MIN),0,j),P=-O*N*M*T,F=0,ee=0;v>.05&&(F=_===0?Math.abs(e.edgeDeg)>5?O:0:df(_),ee=v),y>.05&&y>=ee&&(F=Math.abs(e.edgeDeg)>5?O:Math.abs(D)>3?-df(D)*g:-1,ee=y),ee===0&&S>0&&(F=df(_),ee=S);let I=-F*g*ee*Z.PIVOT_RATE,te=y>.05&&y>=v;if(I!==0&&f>Z.BETA_MIN_V){let e=of(u,s,df(I)*.001),t=Math.atan2(Qd(p,$d(e,s)),Math.abs(Qd(p,e)));if(Math.abs(t)>Math.abs(E)){let e=Z.BRAKE_BETA0+Z.BRAKE_BETA_K*y,t=te?(Math.abs(D)-e+25)/25:(Math.abs(D)-Z.DRIFT_BETA0)/Z.DRIFT_BETA_SPAN;I*=1-uf(t)}}let ne=Math.max(Z.PIVOT_MIN,f/Z.PIVOT_V_DIV),re=cf(I,-ne,ne);e.w+=(P+re-e.w)*Math.min(1,r/Z.W_TAU),u=rf(of(u,s,e.w*r),u),p=of(p,s,P*r);let ie=-P*T,ae=[l[0],l[1],l[2]],L=Math.tan(k),R=o?Math.min(Z.A_CAP_RACE,c*(Z.MU0+Z.C_EDGE*L)):Math.min(Z.A_CAP_FREE,c*(Z.MU0+Z.C_EDGE*L)*Z.GRIP_FREE);R*=1-Z.DRIFT_GRIP_LOSS*(te?0:v);let z=ef(p),oe=Math.abs(e.w-P);z>.3&&oe>.05&&nf(ae,p,-Math.min(Z.C_PIV*R*oe*Z.PIV_ARM,z/r)/z);let se=Qd(p,u);nf(ae,u,-df(se)*Z.MU_BASE*c*Math.min(1,Math.abs(se)/.3));let ce=Z.K_AIR+(Z.K_TUCK-Z.K_AIR)*Math.max(t.tuck,t.boost);nf(ae,p,-ce*z);let le=o?Z.PUSH_V_RACE:Z.PUSH_V_FREE;t.push&&z<le&&v<=.05&&y<=.05&&nf(ae,u,g*Z.PUSH_A*(1-z/le)),nf(p,ae,r);let ue=rf($d(u,s)),de=Qd(p,ue),B=Z.PLOW*de*de,fe=Math.abs(e.edgeDeg)>Z.CATCH_E,pe=Z.MU0*c,me=(!fe||e.edgeDeg>0?R:pe)+(de<0?B:0),he=(!fe||e.edgeDeg<0?R:pe)+(de>0?B:0),ge=ie-de/r,_e=cf(ge,-he,me);nf(p,ue,(_e-ie)*r);let ve=_e===ge;nf(e.p,p,r);let ye=n.height(e.p[0],e.p[2]),be=yf(n,e.p),xe=Math.hypot(p[0],p[2]),Se=!1;if(xe>Z.LAUNCH_V){let r=p[0]/xe,i=p[2]/xe,a=Z.LAUNCH_PROBE,o=n.height(e.p[0]+r*a,e.p[2]+i*a),s=n.height(e.p[0]-r*a,e.p[2]-i*a);Se=-(o-2*ye+s)/(a*a)*xe*xe>(t.charge?Z.LAUNCH_K_CHARGE:Z.LAUNCH_K)*Fd*be[1]*be[1];for(let t=1;Se&&t<=3;t++){let r=Z.LAUNCH_LOOKAHEAD*t/3;Se=ye+p[1]*r-.5*Fd*r*r>n.height(e.p[0]+p[0]*r,e.p[2]+p[2]*r)+Z.LAUNCH_CLEAR}}Se?(e.p[1]=ye+.005,e.air={t:0,gap:0},i.push({type:`launch`})):(e.p[1]=ye,p[1]=-(p[0]*be[0]+p[2]*be[2])/Math.max(.2,be[1])),e.v=p,e.f=u;let Ce=ef(p),we=$d(u,s),Te=Qd(p,u),Ee=Qd(p,we),De=Ce>Z.BETA_MIN_V?Math.atan2(Ee,Math.abs(Te))*Ld:0,Oe=Se?`air`:Kd(Ce,De,e.edgeDeg),V=Jd(e.labels,Oe,r,Se);Zd(e.turn,{edgeDeg:e.edgeDeg,slipDeg:De,speed:Ce,braking:v>.05||y>.05},r,i);let ke=e.out;ke.speed=Ce,ke.edgeDeg=e.edgeDeg,ke.slipDeg=De,ke.aLat=_e,ke.gn=c,ke.load=Cf(c,_e),ke.lean=Math.atan2(_e,c),ke.label=V,ke.air=Se,ke.normal=s,ke.vLong=Te,ke.vLat=Ee,ke.held=ve,ke.parked=!1,ke.fwd=g,ke.edgeCmdDeg=e.eCmd,ke.edgeCapDeg=w}function Tf(e,t,n,r,i){let a=e.air,o=e.v;o[1]-=Fd*r,nf(o,o,-(Z.K_AIR+(Z.K_TUCK-Z.K_AIR)*lf(Math.max(t.tuck,t.boost)))*ef(o)*r),nf(e.p,o,r);let s=t.steer*e.fwd,c=t.analog?df(s)*Math.abs(s)**+Z.ANALOG_EXP*Z.E_MAX:s*Z.AIR_E;e.edgeDeg=ff(e.edgeDeg,c,e.handling.edgeFollow*r),e.eCmd=e.edgeDeg,a.t+=r;let l=n.height(e.p[0],e.p[2]);a.gap=Math.max(a.gap,e.p[1]-l);let u=e.out;if(e.p[1]<=l){let t=yf(n,e.p),a=Qd(o,t),s=Math.max(0,-a);nf(o,t,-a),e.v=tf(o,1-Math.min(Z.LAND_LOSS_MAX,Z.LAND_LOSS_K*s)),e.p[1]=l,e.f=rf(af(e.f,t),e.f),e.air=null,i.push({type:`land`,impact:s});let c=ef(e.v);u.speed=c,u.air=!1,u.normal=t,u.label=Jd(e.labels,Kd(c,0,e.edgeDeg),r,!0),u.load=1}else u.speed=ef(o),u.edgeDeg=e.edgeDeg,u.slipDeg=0,u.load=0,u.aLat=0,u.lean=0,u.air=!0,u.held=!1,u.parked=!1,u.label=Jd(e.labels,`air`,r,!0)}function Ef(e,t,n,r){e.park||={t:0,chosen:!1};let i=e.park;i.t+=r;let a=yf(n,e.p),o=Math.max(Z.GN_MIN,Fd*a[1]),s=bf(a),c=rf(af(e.f,a),rf(af([1,0,0],a))),l=ef(s),u=l>.05?tf(s,1/l):null,d=e=>{let t=rf($d(a,e));return Qd(t,c)<0?tf(t,-1):t},f=!1;if(!t.park){if(!i.chosen&&u){let e=d(u),t=Z.PARK_EXIT_DEG*Id,n=rf([e[0]*Math.cos(t)+u[0]*Math.sin(t),e[1]*Math.cos(t)+u[1]*Math.sin(t),e[2]*Math.cos(t)+u[2]*Math.sin(t)]),i=sf(c,n,a);Math.abs(i)<.05?f=!0:c=of(c,a,cf(i,-Z.PARK_EXIT_RATE*r,Z.PARK_EXIT_RATE*r))}else f=!0}else if(Math.abs(t.steer)>.1)i.chosen=!0,c=of(c,a,-df(t.steer)*Z.PARK_TURN*r);else if(!i.chosen&&u){let e=sf(c,d(u),a);c=of(c,a,cf(e,-Z.PARK_SETTLE*r,Z.PARK_SETTLE*r))}e.f=rf(af(c,a),c),e.v=tf(af(e.v,a),Math.exp(-r/Z.PARK_TAU)),nf(e.p,e.v,r),e.p[1]=n.height(e.p[0],e.p[2]);let p=$d(e.f,a),m=cf(-Math.atan2(Qd(s,p),o)*Ld,-Z.PARK_E_MAX,Z.PARK_E_MAX);e.edgeDeg=ff(e.edgeDeg,m,e.handling.edgeFollow*r),e.eCmd=e.edgeDeg,e.w=0,f&&(e.park=null,e.fwd=1);let h=e.out;h.speed=ef(e.v),h.edgeDeg=e.edgeDeg,h.slipDeg=0,h.load=1,h.aLat=0,h.lean=0,h.gn=o,h.air=!1,h.held=!0,h.parked=!f,h.normal=a,h.vLong=0,h.vLat=0,h.fwd=e.fwd,h.edgeCmdDeg=e.eCmd,h.label=Jd(e.labels,`stop`,r)}var Df=9.81,Of=Math.PI/180,kf=new WeakMap,Af=e=>{let t=kf.get(e);return t||kf.set(e,t={slipDeg:0,side:0,turn:null,flatT:0}),t},jf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Mf=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Nf=e=>{let t=Math.hypot(e[0],e[1],e[2]);return t>1e-9?[e[0]/t,e[1]/t,e[2]/t]:[0,0,1]},Pf=(e,t)=>{let n=jf(e,t);return[e[0]-t[0]*n,e[1]-t[1]*n,e[2]-t[2]*n]};function Ff(e,t){let[n,,r]=t.p,i=e.normal(n,r);return{p:[n,e.height(n,r),r],v:[0,0,0],f:Nf(Pf(t.f,i)),fwd:1,edgeDeg:0,t:0}}function If(e,t,n,r){let i=Af(e),a=[],o=n.normal(e.p[0],e.p[2]),s=Pf(e.v,o),c=Math.hypot(s[0],s[1],s[2]),l=Nf(c>.2?s:Pf([e.f[0]*e.fwd,e.f[1]*e.fwd,e.f[2]*e.fwd],o)),u=Nf(Mf(Nf(Pf(e.f,o)),o)),d=t.steer*e.fwd*50-t.brake*(t.steer===0?18:0);e.edgeDeg+=(d-e.edgeDeg)*(1-Math.exp(-5*r));let f=e.edgeDeg*Of,p=Pf([0,-9.81,0],o),m=Math.hypot(p[0],p[1],p[2]),h=Df*o[1];if(c<.4&&t.go===0&&m<Df*Math.sin(22*Of))s=[0,0,0],c=0;else{let n=[p[0],p[1],p[2]],a=t.go*(c<5?2.2:.4)+t.boost*1.4;n=[n[0]+l[0]*a,n[1]+l[1]*a,n[2]+l[2]*a];let o=Math.sin(Math.abs(f))/11+(c<4?.25*Math.abs(t.steer):0),d=Math.min(2.5*Df,c*c*o)*Math.sign(f),m=jf(u,l),g=Nf([u[0]-l[0]*m,u[1]-l[1]*m,u[2]-l[2]*m]);n=[n[0]+g[0]*d*e.fwd,n[1]+g[1]*d*e.fwd,n[2]+g[2]*d*e.fwd];let _=t.brake*55+(Math.abs(t.steer)>.6&&c<3?10:0);i.slipDeg+=(_-i.slipDeg)*(1-Math.exp(-6*r));let v=.06*h+.0042*(1-.35*t.boost)*c*c+t.brake*(3+.25*c)+Math.abs(Math.sin(i.slipDeg*Of))*2;s=[s[0]+n[0]*r,s[1]+n[1]*r,s[2]+n[2]*r];let y=Math.hypot(s[0],s[1],s[2]),b=Math.max(0,y-v*r);s=y>1e-6?[s[0]*b/y,s[1]*b/y,s[2]*b/y]:[0,0,0],c=b}let g=[e.p[0]+s[0]*r,0,e.p[2]+s[2]*r];g[1]=n.height(g[0],g[2]);let _=n.normal(g[0],g[2]);s=Pf(s,_);let v=Math.hypot(s[0],s[1],s[2]);if(v>1e-6&&(s=[s[0]*c/v,s[1]*c/v,s[2]*c/v]),e.p=g,e.v=s,e.t+=r,c>.3){let t=Nf(s),n=i.slipDeg*Of*(e.edgeDeg>=0?1:-1),r=Nf(Mf(t,_));e.f=Nf([t[0]*Math.cos(n)-r[0]*Math.sin(n)*e.fwd,t[1]*Math.cos(n)-r[1]*Math.sin(n)*e.fwd,t[2]*Math.cos(n)-r[2]*Math.sin(n)*e.fwd]),e.fwd<0&&(e.f=[-e.f[0],-e.f[1],-e.f[2]])}else e.f=Nf(Pf(e.f,_));let y=Math.sin(Math.abs(f))/11,b=Math.min(2.5*Df,c*c*y)*Math.sign(f),x=Math.atan2(b,Df),S=Math.hypot(1,b/Df),C=i.slipDeg*(e.edgeDeg>=0?1:-1),w=Math.abs(e.edgeDeg),T=Math.abs(i.slipDeg),E;E=c<.5?`stop`:T>15?`skid`:w<8?`flat`:w>=35&&T<5?`carve`:`edge`;let D=w>10&&c>1?e.edgeDeg>0?1:-1:0;if(D!==0){i.side!==D&&i.turn&&i.side!==0&&Lf(i,a),i.turn&&i.side===D||(i.turn={maxEdge:0,maxSlip:0,dur:0,vMax:0}),i.side=D,i.flatT=0;let e=i.turn;e.maxEdge=Math.max(e.maxEdge,w),e.maxSlip=Math.max(e.maxSlip,T),e.dur+=r,e.vMax=Math.max(e.vMax,c)}else i.turn&&(i.flatT+=r,i.flatT>.5&&Lf(i,a));return{speed:c,edgeDeg:e.edgeDeg,slipDeg:C,load:S,lean:x,label:E,air:!1,normal:_,events:a}}function Lf(e,t){let n=e.turn;if(e.turn=null,n.dur<.35){e.side=0;return}let r=n.maxSlip>15?`skid`:n.maxEdge>=35&&n.maxSlip<5?`carve`:`edge`;t.push({type:`turn`,side:e.side>0?`toe`:`heel`,kind:r,maxEdgeDeg:Math.round(n.maxEdge),maxSlipDeg:Math.round(n.maxSlip),dur:n.dur,vMax:n.vMax}),r===`skid`&&n.vMax>8&&t.push({type:`warn`,code:`flat-transition`,msg:``}),e.side=0}function Rf(){return new URLSearchParams(globalThis.location?.search??``)}function zf(e=Rf()){let t={},n=e.get(`handling`);(n===`arcade`||n===`realistic`)&&(t.handling=n);let r=e.get(`assist`);return r!==null&&r!==``&&Number.isFinite(Number(r))&&(t.assist=Math.min(1,Math.max(0,Number(r)))),t}var Bf=Rf().get(`physics`)===`stub`?{create:(e,t)=>Ff(e,t),step:(e,t,n,r)=>If(e,t,n,r),dt:1/120,name:`stub`}:{create:(e,t)=>{let[n,,r]=t.p;return hf({p:[n,e.height(n,r),r],f:t.f},zf())},step:(e,t,n,r)=>gf(e,t,n,r),dt:1/120,name:`board`};function Vf(e){return structuredClone(e)}function Hf(){return{steer:0,go:0,brake:0,boost:0,charge:!1,analog:!1}}function Uf(e,t){let n=Math.abs(e);return n>t?Math.sign(e)*Math.min(1,(n-t)/(1-t)):0}var Wf={A:0,B:1,X:2,Y:3,RB:5,LT:6,RT:7,BACK:8,START:9},Gf=[[Wf.B,`rewind`],[Wf.BACK,`map`],[Wf.START,`pause`],[Wf.RB,`camera`],[Wf.Y,`use`]],Kf=.12,qf=.06;function Jf(e){let t=[],n=(e,t)=>e.buttons[t]??{pressed:!1,value:0};return{kind:`gamepad`,poll(){let r=e()??[],i=null;for(let e=0;e<r.length;e++){let t=r[e];if(t&&t.connected!==!1){i=t;break}}if(!i)return t=[],{input:Hf(),active:!1,actions:[]};let a=Uf(i.axes[0]??0,Kf),o=Uf(n(i,Wf.RT).value,qf),s=Uf(n(i,Wf.LT).value,qf),c=+!!n(i,Wf.X).pressed,l=n(i,Wf.A).pressed,u=[];for(let[e,r]of Gf)n(i,e).pressed&&!t[e]&&u.push(r);let d=i.buttons.map(e=>e.pressed),f=d.some(Boolean);return t=d,{input:{steer:a,go:o,brake:s,boost:c,charge:l,analog:!0},active:a!==0||o>0||s>0||f,actions:u}},dispose(){t=[]}}}var Yf={KeyR:`rewind`,KeyC:`camera`,KeyM:`map`,Escape:`pause`,KeyF:`equip`,KeyE:`use`,KeyH:`help`},Xf=[`KeyW`,`ArrowUp`],Zf=[`KeyS`,`ArrowDown`],Qf=[`KeyA`,`ArrowLeft`],$f=[`KeyD`,`ArrowRight`],ep=[`ShiftLeft`,`ShiftRight`],tp=[`Space`],np=new Set([...Xf,...Zf,...Qf,...$f,...ep,...tp]);function rp(e,t=e){let n=new Set,r=[],i=!1,a=e=>{let t=e;return!!t&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`||!!t.isContentEditable)},o=e=>{if(a(e.target))return;if(np.has(e.code)){n.add(e.code),i=!0,e.preventDefault?.();return}let t=Yf[e.code];t&&!e.repeat&&(r.push(t),i=!0)},s=e=>{n.delete(e.code)},c=()=>n.clear();e.addEventListener(`keydown`,o),e.addEventListener(`keyup`,s),t?.addEventListener(`blur`,c);let l=e=>e.some(e=>n.has(e));return{kind:`keyboard`,held:n,poll(){let e={input:{steer:+!!l($f)-!!l(Qf),go:+!!l(Xf),brake:+!!l(Zf),boost:+!!l(ep),charge:l(tp),analog:!1},active:i||n.size>0,actions:r};return r=[],i=!1,e},dispose(){e.removeEventListener(`keydown`,o),e.removeEventListener(`keyup`,s),t?.removeEventListener(`blur`,c),n.clear()}}}var ip={STICK_RADIUS:48,DEADZONE:.12,BRAKE_ON:.22,BRAKE_OFF:.16,BRAKE_STEER_IGNORE:.15,BOOST_ON:.65,BOOST_OFF:.5,BOOST_HOLD_MS:100,FOLLOW:1.25},ap={rewind:`rewind`,camera:`camera`,map:`map`,pause:`pause`},op=(e,t)=>e===void 0?t:typeof e==`function`?e():e;function sp(e,t,n){return n===`right`?e>=t/2:e<t/2}function cp(e){let t=e.now??(()=>typeof performance<`u`?performance.now():Date.now()),n=e.layout??(()=>`left`),r=null,i=null,a=!1,o=null,s=!1,c=!1,l=new Map,u=new Set,d=[],f=()=>ip.STICK_RADIUS*op(e.size,1),p=t=>e.acceptMouse||t.pointerType!==`mouse`,m=t=>e.hit?e.hit(t):sp(t.clientX,e.width(),n())?`steer`:null,h=()=>{u.clear();for(let e of l.values())u.add(e)},g=e=>{if(!p(e))return;let t=m(e);if(t){if(t===`steer`){if(r!==null)return;r=e.pointerId,i={x0:e.clientX,y0:e.clientY,x:e.clientX,y:e.clientY},a=s=!1,o=null}else{l.set(e.pointerId,t),h();let n=ap[t];n&&d.push(n)}c=!0,e.preventDefault?.()}},_=e=>{if(e.pointerId!==r||!i)return;i.x=e.clientX,i.y=e.clientY;let t=f()*ip.FOLLOW,n=i.x-i.x0;n>t?i.x0=i.x-t:n<-t&&(i.x0=i.x+t),e.preventDefault?.()},v=e=>{e.pointerId===r&&(r=null,i=null,a=s=!1,o=null),l.delete(e.pointerId)&&h()},y=()=>{r=null,i=null,a=s=!1,o=null,l.clear(),u.clear()};return e.target.addEventListener(`pointerdown`,g),e.target.addEventListener(`pointermove`,_),e.target.addEventListener(`pointerup`,v),e.target.addEventListener(`pointercancel`,v),{kind:`touch`,get stick(){return i},get pressed(){return u},get braking(){return a},reset:y,poll(){let n=c;c=!1;let r=d;d=[];let l=u.has(`boost`),p=u.has(`jump`);if(!i){let e=Hf();return e.boost=+!!l,e.charge=p,{input:e,active:n||u.size>0,actions:r}}let m=f(),h=Math.max(-1,Math.min(1,(i.x-i.x0)/m)),g=Math.max(-1,Math.min(1,(i.y-i.y0)/m));!a&&g>ip.BRAKE_ON?a=!0:a&&g<ip.BRAKE_OFF&&(a=!1);let _=t();-g>=ip.BOOST_ON?(o??=_,_-o>=ip.BOOST_HOLD_MS&&(s=!0)):-g<ip.BOOST_OFF&&(o=null,s=!1);let v=Math.max(-1,Math.min(1,Uf(h,ip.DEADZONE)*op(e.sensitivity,1)));return a&&Math.abs(v)<=ip.BRAKE_STEER_IGNORE&&(v=0),{input:{steer:v,go:+!a,brake:a?Math.max(.03,(g-ip.BRAKE_OFF)/(1-ip.BRAKE_OFF)):0,boost:s||l?1:0,charge:p,analog:v!==0},active:!0,actions:r}},dispose(){e.target.removeEventListener(`pointerdown`,g),e.target.removeEventListener(`pointermove`,_),e.target.removeEventListener(`pointerup`,v),e.target.removeEventListener(`pointercancel`,v),y()}}}var lp={touch:3,gamepad:2,keyboard:1};function up(e){let t=e.find(e=>e.kind===`keyboard`)?.kind??e[0]?.kind??`keyboard`,n=new Set;return{get source(){return t},poll(){let r=e.map(e=>({kind:e.kind,f:e.poll()})),i=r.filter(e=>e.f.active).sort((e,t)=>lp[t.kind]-lp[e.kind]);i.length&&(t=i[0].kind);let a=r.find(e=>e.kind===t),o=[];for(let e of r)for(let t of e.f.actions)o.push({action:t,source:e.kind});for(let e of o)for(let t of n)t(e);return{input:a?{...a.f.input}:Hf(),actions:o,source:t}},onAction(e){return n.add(e),()=>n.delete(e)},dispose(){for(let t of e)t.dispose();n.clear()}}}function dp(e){let t=[];return e.keyboard&&t.push(rp(e.keyboard)),e.gamepads&&t.push(Jf(e.gamepads)),e.touch&&t.push(`poll`in e.touch?e.touch:cp(e.touch)),up(t)}function fp(e,t){return dp({keyboard:window,gamepads:typeof navigator<`u`&&navigator.getGamepads?()=>navigator.getGamepads():null,touch:t===void 0?{target:e,width:()=>e.clientWidth||window.innerWidth}:t})}var pp={rewind:`rewind`,camera:`camera`,map:`map`,pause:`menu`,help:`help`,use:`use`,equip:`foot`},mp={KeyL:`lines`,KeyU:`units`,KeyI:`stats`,Enter:`confirm`,NumpadEnter:`confirm`};function hp(e,t){let n=new Set,r=!1,i=e.onAction(e=>{let t=pp[e.action];t&&n.forEach(e=>e(t))}),a=e=>{if(e.repeat)return;let t=e.target;if(t&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.tagName===`BUTTON`))return;let r=mp[e.code];r&&n.forEach(e=>e(r))};return t?.addEventListener(`keydown`,a),{poll(){let t=e.poll().input;return r=t.go>0||t.brake>0||Math.abs(t.steer)>.05,t},on(e){return n.add(e),()=>n.delete(e)},get active(){return r},dispose(){i(),e.dispose(),t?.removeEventListener(`keydown`,a)}}}function gp(e,t){return hp(fp(e,t),window)}var _p=(e,t,n)=>e<t?t:e>n?n:e,vp=e=>_p(e,0,1),yp=(e,t,n)=>{let r=vp((n-e)/(t-e));return r*r*(3-2*r)},bp=(e,t)=>1-Math.exp(-e*t),xp=e=>(e=(e+Math.PI)%(2*Math.PI),e<0&&(e+=2*Math.PI),e-Math.PI);function Sp(e,t,n,r){let i=Math.exp(-n*r),a=e.x-t,o=e.v+n*a;return e.x=t+(a+o*r)*i,e.v=(o-n*(a+o*r))*i,e.x}var Cp=(e=0)=>({x:e,v:0});function wp(e){"@babel/helpers - typeof";return wp=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},wp(e)}function Tp(e,t){if(wp(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(wp(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ep(e){var t=Tp(e,`string`);return wp(t)==`symbol`?t:t+``}function Q(e,t,n){return(t=Ep(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Dp=[{name:`near`,dist:4.2,h:1.35,look:2.4,lookDrop:.55},{name:`far`,dist:8.5,h:4.2,look:3.5,lookDrop:.9}],Op={chair:[{name:`lift-close`,dist:5.5,h:1.2,look:4,lookDrop:-.6},{name:`lift-wide`,dist:14,h:5,look:6,lookDrop:1.5}],gondola:[{name:`lift-close`,dist:10,h:2.2,look:6,lookDrop:-.5},{name:`lift-wide`,dist:22,h:8,look:8,lookDrop:2}]},kp=class{constructor(e){Q(this,`override`,null),Q(this,`camera`,void 0),Q(this,`preset`,0),Q(this,`reduceMotion`,!1),Q(this,`touchFov`,!1),Q(this,`heading`,0),Q(this,`pitch`,0),Q(this,`pos`,new q),Q(this,`look`,new q),Q(this,`fov`,52),Q(this,`init`,!1),Q(this,`tmp`,new q),this.camera=new Ys(52,e,.08,6e4)}toggle(){this.preset=(this.preset+1)%Dp.length}snap(){this.init=!1}update(e,t,n,r,i){let a=this.override??Dp[this.preset],o=Math.hypot(n[0],n[2]),s=o>1.5?n:r,c=Math.atan2(s[0],s[2]),l=Math.sin(c),u=Math.cos(c),d=i.height(t[0]+l*6,t[2]+u*6),f=i.height(t[0]-l*6,t[2]-u*6),p=this.override?0:_p(Math.atan2(f-d,12),-.5,.75);this.init||(this.heading=c,this.pitch=p),this.heading+=xp(c-this.heading)*bp(o>1.5?2.6:1.4,e),this.pitch+=(p-this.pitch)*bp(2,e);let m=Math.sin(this.heading),h=Math.cos(this.heading),g=Math.cos(this.pitch*.85),_=Math.sin(this.pitch*.85),v=this.tmp.set(t[0],t[1]+.95,t[2]),y=new q(v.x-m*a.dist*g,v.y+a.dist*_+a.h,v.z-h*a.dist*g),b=i.height(y.x,y.z)+.7;y.y<b&&(y.y=b);let x=new q(v.x+m*a.look*g,v.y-a.look*_-a.lookDrop,v.z+h*a.look*g);this.init||=(this.pos.copy(y),this.look.copy(x),!0);let S=bp(9,e);this.pos.lerp(y,S),this.look.lerp(x,bp(12,e));let C=i.height(this.pos.x,this.pos.z)+.6;this.pos.y<C&&(this.pos.y=C);let w=vp((o-8)/22),T=this.reduceMotion?60:this.touchFov?58+10*w:52+14*w,E=this.camera.aspect;E<1&&(T+=24*vp((1-E)/.55)),this.fov+=(T-this.fov)*bp(2.5,e),this.camera.position.copy(this.pos),this.camera.lookAt(this.look),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix())}get headingRad(){return this.heading}},Ap=class{constructor(e=12,t=30){Q(this,`seconds`,void 0),Q(this,`rate`,void 0),Q(this,`buf`,void 0),Q(this,`head`,0),Q(this,`n`,0),Q(this,`lastT`,-1/0),this.seconds=e,this.rate=t,this.buf=Array(Math.ceil(e*t)+1)}get size(){return this.n}clear(){this.n=0,this.head=0,this.lastT=-1/0,this.buf.fill(void 0)}push(e,t){return e-this.lastT<1/this.rate-1e-9?!1:(this.buf[this.head]={t:e,v:t},this.head=(this.head+1)%this.buf.length,this.n=Math.min(this.n+1,this.buf.length),this.lastT=e,!0)}at(e){return this.buf[(this.head-1-e+this.buf.length*2)%this.buf.length]}get oldest(){return this.n?this.at(this.n-1).t:void 0}get newest(){return this.n?this.at(0).t:void 0}rewind(e){if(!this.n)return;let t=this.at(0).t-e,n=0;for(;n<this.n-1&&this.at(n).t>t;)n++;let r=this.at(n);return this.head=(this.head-n+this.buf.length)%this.buf.length,this.n-=n,this.lastT=r.t,r}},jp={drain:.25,refill:.08,rearm:.15},Mp=class{constructor(){Q(this,`energy`,1),Q(this,`locked`,!1)}reset(){this.energy=1,this.locked=!1}step(e,t,n=!1){let r=Math.max(0,t);return n?(this.energy=Math.min(1,this.energy+r*jp.refill),e):(this.locked&&e<=0&&this.energy>=jp.rearm&&(this.locked=!1),e>0&&!this.locked&&this.energy>0?(this.energy=Math.max(0,this.energy-r*jp.drain*e),this.energy<=0&&(this.locked=!0),e):(this.energy=Math.min(1,this.energy+r*jp.refill),0))}},Np=class{constructor(e,t=.32,n=3.2){Q(this,`piste`,void 0),Q(this,`weave`,void 0),Q(this,`period`,void 0),Q(this,`idx`,0),Q(this,`t`,0),this.piste=e,this.weave=t,this.period=n}input(e,t){this.t+=t;let n=this.piste.pts,r=1/0;for(let t=this.idx;t<Math.min(n.length,this.idx+40);t++){let i=Math.hypot(n[t][0]-e.p[0],n[t][1]-e.p[2]);i<r&&(r=i,this.idx=t)}let i=n[Math.min(n.length-1,this.idx+5)],a=n[Math.min(n.length-1,this.idx+6)],o=a[0]-i[0],s=a[1]-i[1],c=Math.hypot(o,s)||1,l=Math.sin(this.t*2*Math.PI/this.period)*this.piste.width*this.weave,u=i[0]+-s/c*l,d=i[1]+o/c*l,f=Math.hypot(e.v[0],e.v[2]),p=f>.5?e.v[0]/f:e.f[0]*e.fwd,m=f>.5?e.v[2]/f:e.f[2]*e.fwd,h=u-e.p[0],g=d-e.p[2],_=m*h-p*g,v=Math.atan2(_,p*h+m*g);return{go:+(f<6),steer:_p(-v*2.2,-1,1)*e.fwd,brake:_p((f-14)/6,0,.6)}}},Pp=`modulepreload`,Fp=function(e){return`/heygo-slopes-preview/`+e},Ip={},Lp=function(e){return e.pathname.endsWith(`.css`)},Rp=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},zp=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Fp(t,n);let r=s(t),i=Lp(r);return Rp(Ip,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Pp,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Bp=class extends Error{constructor(e,t){super(e),Q(this,`resource`,void 0),this.resource=t,this.name=`ResortLoadError`}},Vp=31,Hp=139;async function Up(e){if(e.length<2||e[0]!==Vp||e[1]!==Hp)return e;if(typeof DecompressionStream>`u`){let{gunzipSync:t}=await zp(async()=>{let{gunzipSync:e}=await import(`./browser-DVTTPdyi.js`);return{gunzipSync:e}},[]);return t(e)}let t=new DecompressionStream(`gzip`),n=new Blob([e]).stream().pipeThrough(t);return new Uint8Array(await new Response(n).arrayBuffer())}function Wp(e){return e.endsWith(`.f32`)?4:e.endsWith(`.i16`)?2:1}function Gp(e,t,n){let r=Wp(e);return t%r===0?n!==void 0&&t/r!==n?`${e}: ${t/r} elements, expected ${n}`:null:`${e}: ${t} bytes not aligned to ${r}`}async function Kp(e,t){if(!e.body){let n=new Uint8Array(await e.arrayBuffer());return t(n.length),n}let n=e.body.getReader(),r=[],i=0;for(;;){let{done:e,value:a}=await n.read();if(e)break;r.push(a),i+=a.length,t(a.length)}let a=new Uint8Array(i),o=0;for(let e of r)a.set(e,o),o+=e.length;return a}var qp=e=>e.length>0&&e[0]===60,Jp=class{constructor(e){Q(this,`cb`,void 0),Q(this,`files`,new Map),this.cb=e}expect(e,t){let n=this.files.get(e);n?n.total=Math.max(t,n.loaded):this.files.set(e,{loaded:0,total:t}),this.emit(e)}add(e,t){let n=this.files.get(e)??{loaded:0,total:0};n.loaded+=t,n.total<n.loaded&&(n.total=n.loaded),this.files.set(e,n),this.emit(e)}done(e){let t=this.files.get(e);t&&(t.total=t.loaded,this.emit(e))}emit(e){if(!this.cb)return;let t=0,n=0,r=0,i=0;for(let e of this.files.values())t+=e.loaded,n+=e.total,r+=e.total>0?e.loaded/e.total:0,i++;this.cb({loaded:t,total:n,file:e,fraction:i?r/i:0})}};async function Yp(e,t,n={}){let r=n.fetch??fetch,i=n.progress,a=[];for(let o of[t+`.gz`,t]){let s=t,c;try{c=await r(e+o)}catch(e){a.push(`${o}: ${e.message}`);continue}if(!c.ok){a.push(`${o}: HTTP ${c.status}`);continue}let l=Number(c.headers.get(`content-length`)||0);l&&i&&i.expect(s,l);let u=await Kp(c,e=>i?.add(s,e));if(qp(u)){a.push(`${o}: got HTML`);continue}try{u=await Up(u)}catch(e){a.push(`${o}: ${e.message}`);continue}let d=Gp(t,u.byteLength,n.expectElems);if(d)a.push(d);else return i?.done(s),u}if(n.optional)return null;throw new Bp(`Failed to load ${t}: ${a.join(`; `)}`,t)}async function Xp(e,t){let n=await e(t);if(!n.ok)throw new Bp(`HTTP ${n.status} for ${t}`,t);let r=await n.text();try{return JSON.parse(r)}catch{throw new Bp(`Invalid JSON at ${t}`,t)}}var Zp=(e,t,n)=>{let r=t.byteOffset%n===0?t:new Uint8Array(t);return new e(r.buffer,r.byteOffset,r.byteLength/n)};async function Qp(e,t,n={}){let r=n.fetch??((e,t)=>fetch(e,t)),i=`${n.root??$p()}${e}/`,a=new Jp(t),o=await Xp(r,i+`meta.json`);if(!o?.grid?.nx)throw new Bp(`Bad meta for ${e}`,`meta.json`);let s=o.grid.nx*o.grid.nz,c=o.far?o.far.nx*o.far.nz:void 0,[l,u,d,f,p,m]=await Promise.all([Xp(r,i+`map.json`),Yp(i,`height.f32`,{fetch:r,expectElems:s,progress:a}),o.far?Yp(i,`far.f32`,{fetch:r,expectElems:c,progress:a,optional:!0}):Promise.resolve(null),Yp(i,`field.i16`,{fetch:r,expectElems:s*3,progress:a}),Yp(i,`pisteid.u8`,{fetch:r,expectElems:s,progress:a}),Yp(i,`trees.f32`,{fetch:r,progress:a,optional:!0})]),h=m?Zp(Float32Array,m,4):new Float32Array;if(h.length%4!=0)throw new Bp(`trees.f32 length not a multiple of 4`,`trees.f32`);return{id:e,meta:o,map:{pistes:l.pistes??[],lifts:l.lifts??[],buildings:l.buildings??[],roads:l.roads??[]},height:Zp(Float32Array,u,4),far:d?Zp(Float32Array,d,4):null,field:Zp(Int16Array,f,2),pisteid:p,trees:h}}function $p(){return`/heygo-slopes-preview/maps/`}async function em(e,t,n={}){let r=(e||`wanlong`).replace(/[^a-z0-9_-]/gi,``);try{return{data:await Qp(r,t,n),fellBack:!1,requested:r}}catch(e){if(r===`testhill`)throw e;return console.warn(`[loader] ${r} unavailable, falling back to testhill:`,e.message),{data:await Qp(`testhill`,t,n),fellBack:!0,requested:r}}}function tm(e,t,n,r){let i=(n-e.x0)/e.dx,a=(r-e.z0)/e.dx;i=Math.min(e.nx-1,Math.max(0,i)),a=Math.min(e.nz-1,Math.max(0,a));let o=Math.floor(i),s=Math.floor(a);o>=e.nx-1&&(o=e.nx-2),s>=e.nz-1&&(s=e.nz-2);let c=i-o,l=a-s,u=s*e.nx+o,d=u+e.nx,f=t[u],p=t[u+1],m=t[d],h=t[d+1];return(f+(p-f)*c)*(1-l)+(m+(h-m)*c)*l}var nm=e=>({x0:e.x0,z0:e.z0,x1:e.x0+(e.nx-1)*e.dx,z1:e.z0+(e.nz-1)*e.dx}),rm=class{constructor(e){Q(this,`src`,void 0),Q(this,`grid`,void 0),Q(this,`ext`,void 0),Q(this,`farExt`,void 0),Q(this,`normalEps`,1.5),this.src=e,this.grid=e.grid,this.ext=nm(e.grid),this.farExt=e.far?nm(e.far.grid):null}inNear(e,t,n=0){let r=this.ext;return e>=r.x0+n&&e<=r.x1-n&&t>=r.z0+n&&t<=r.z1-n}height(e,t){return this.inNear(e,t)||!this.src.far||!this.farExt?tm(this.grid,this.src.height,e,t):tm(this.src.far.grid,this.src.far.height,e,t)}meshHeight(e,t){let n=this.grid,r=(e-n.x0)/n.dx,i=(t-n.z0)/n.dx;if(!(r>=0&&i>=0&&r<=n.nx-1&&i<=n.nz-1))return this.height(e,t);let a=Math.min(n.nx-2,Math.floor(r)),o=Math.min(n.nz-2,Math.floor(i)),s=r-a,c=i-o,l=this.src.height,u=o*n.nx+a,d=u+n.nx,f=l[u],p=l[u+1],m=l[d],h=l[d+1];return a+o&1?s+c<=1?f+(p-f)*s+(m-f)*c:h+(m-h)*(1-s)+(p-h)*(1-c):c>=s?f+(h-m)*s+(m-f)*c:f+(p-f)*s+(h-p)*c}normal(e,t){let n=this.normalEps,r=this.height(e+n,t)-this.height(e-n,t),i=this.height(e,t+n)-this.height(e,t-n),a=-r/(2*n),o=-i/(2*n),s=Math.hypot(a,1,o);return[a/s,1/s,o/s]}slopeDeg(e,t){let n=this.normal(e,t);return Math.acos(Math.min(1,n[1]))*180/Math.PI}cell(e,t){let n=this.grid,r=Math.round((e-n.x0)/n.dx),i=Math.round((t-n.z0)/n.dx);return r<0||i<0||r>=n.nx||i>=n.nz?-1:i*n.nx+r}edgeDist(e,t){let n=this.cell(e,t);return n<0||!this.src.field?300:this.src.field[n*3+2]/10}piste(e,t){let n=this.cell(e,t);if(n<0||!this.src.field||!this.src.pisteid)return null;let r=this.src.pisteid[n];if(r===255)return null;let i=this.src.field;return{id:r,u:i[n*3]/10,s:i[n*3+1]/4,edgeDist:i[n*3+2]/10}}clamp(e,t,n=25){let r=this.ext;return[Math.min(r.x1-n,Math.max(r.x0+n,e)),Math.min(r.z1-n,Math.max(r.z0+n,t))]}};function im(e,t,n){if(!t||t.pts.length<2){let[t,r]=n,i=e.normal(t,r),a=am([i[0],0,i[2]]);return{p:[t,e.height(t,r),r],f:a}}let r=t.pts[0],i=t.pts[Math.min(t.pts.length-1,4)],a=r[0],o=r[1],s=am([i[0]-a,0,i[1]-o]);return{p:[a,e.height(a,o),o],f:s}}function am(e){let t=Math.hypot(e[0],e[2]);return t<1e-6?[0,0,1]:[e[0]/t,0,e[2]/t]}var om=40,sm=4,cm=30,lm=10;function um(e,t,n,r,i,a){let o=Math.max(0,n-1),s=Math.min(e.nx-1,n+1),c=Math.max(0,r-1),l=Math.min(e.nz-1,r+1),u=(t[r*e.nx+s]-t[r*e.nx+o])/((s-o)*e.dx),d=(t[l*e.nx+n]-t[c*e.nx+n])/((l-c)*e.dx),f=Math.hypot(u,1,d);i[a]=-u/f,i[a+1]=1/f,i[a+2]=-d/f}function dm(e,t,n,r,i={}){let a=n*64,o=r*64,s=Math.min(a+64,e.nx-1),c=Math.min(o+64,e.nz-1);if(s<=a||c<=o)return null;let l=s-a+1,u=c-o+1,d=[],f=[],p=[],m=[0,0,0];for(let n=o;n<=c;n++)for(let r=a;r<=s;r++){let a=e.x0+r*e.dx,o=e.z0+n*e.dx,s=t[n*e.nx+r];if(i.heightAt&&(s=i.heightAt(a,o,s)),d.push(a,s,o),um(e,t,r,n,m,0),f.push(m[0],m[1],m[2]),i.field){let t=(n*e.nx+r)*3;p.push(i.field[t]/10,i.field[t+1]/4,i.field[t+2]/10)}}let h=[];for(let t=0;t<u-1;t++)for(let n=0;n<l-1;n++){let r=t*l+n,s=r+1,c=r+l,u=c+1;if(i.keepTri){let r=e.x0+(a+n)*e.dx,s=e.z0+(o+t)*e.dx;if(!i.keepTri(r,s,r+e.dx,s+e.dx))continue}n+t&1?h.push(r,c,s,s,c,u):h.push(r,c,u,r,u,s)}if(h.length===0)return null;if(i.skirt){let t=e=>{for(let t=0;t+1<e.length;t++){let n=e[t],r=e[t+1],a=d.length/3;for(let e of[n,r])d.push(d[e*3],d[e*3+1]-lm,d[e*3+2]),f.push(f[e*3],f[e*3+1],f[e*3+2]),i.field&&p.push(p[e*3],p[e*3+1],p[e*3+2]);h.push(n,a,r,r,a,a+1,n,r,a,r,a+1,a)}},n=e=>Array.from({length:l},(t,n)=>e*l+n),r=e=>Array.from({length:u},(t,n)=>n*l+e);o===0&&t(n(0)),c===e.nz-1&&t(n(u-1)),a===0&&t(r(0)),s===e.nx-1&&t(r(l-1))}let g=new Rr;g.setAttribute(`position`,new Er(d,3)),g.setAttribute(`normal`,new Er(f,3)),i.field&&g.setAttribute(`aRun`,new Er(p,3));let _=d.length/3;return g.setIndex(_>65535?new Tr(h,1):new wr(h,1)),g.computeBoundingSphere(),g.computeBoundingBox(),g}function fm(e,t,n,r,i){let a=new Fn;a.name=`terrain`;let o=[],s=[],c=e.grid,l=Math.ceil((c.nx-1)/64),u=Math.ceil((c.nz-1)/64);for(let t=0;t<u;t++)for(let n=0;n<l;n++){let i=dm(c,e.height,n,t,{field:e.field,skirt:!0});if(!i)continue;let s=new fi(i,r);s.name=`near_${n}_${t}`,s.receiveShadow=!0,s.matrixAutoUpdate=!1,a.add(s),o.push(s)}if(t){let e=t.grid,r=nm(c),o={x0:r.x0+om,z0:r.z0+om,x1:r.x1-om,z1:r.z1-om},l=(e,t)=>Math.min(e-r.x0,r.x1-e,t-r.z0,r.z1-t),u=(e,t,n,r)=>!(e>=o.x0&&n<=o.x1&&t>=o.z0&&r<=o.z1),d=(e,t,r)=>{let i=l(e,t);if(i<0)return r;let a=Math.min(1,i/cm);return n.height(e,t)-sm*a*a*(3-2*a)-.05},f=Math.ceil((e.nx-1)/64),p=Math.ceil((e.nz-1)/64);for(let n=0;n<p;n++)for(let r=0;r<f;r++){let o=dm(e,t.height,r,n,{heightAt:d,keepTri:u});if(!o)continue;let c=new fi(o,i);c.name=`far_${r}_${n}`,c.receiveShadow=!0,c.matrixAutoUpdate=!1,a.add(c),s.push(c)}}return{group:a,near:o,far:s}}var pm=`
float hs_hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float hs_vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  float a = hs_hash(i), b = hs_hash(i+vec2(1.0,0.0)), c = hs_hash(i+vec2(0.0,1.0)), d = hs_hash(i+vec2(1.0,1.0));
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
float hs_fbm(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<4;i++){ s+=a*hs_vnoise(p); p=p*2.03+17.1; a*=0.5; } return s; }
// gradient of fbm by finite differences (world xz units)
vec2 hs_fbmGrad(vec2 p, float e){ return vec2(hs_fbm(p+vec2(e,0.0))-hs_fbm(p-vec2(e,0.0)), hs_fbm(p+vec2(0.0,e))-hs_fbm(p-vec2(0.0,e)))/(2.0*e); }
`;function mm(e){let t=new Xo({color:16777215,roughness:.82,metalness:0}),n={uCord:{value:.045},uCordAmp:{value:.075},uDetail:{value:e.detail??1}};return t.userData.snowUniforms=n,t.onBeforeCompile=t=>{Object.assign(t.uniforms,n),e.run&&(t.defines={...t.defines??{},USE_RUN:``}),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
#ifdef USE_RUN
attribute vec3 aRun;
varying vec3 vRun;
#endif
varying vec3 vSnowW;
varying vec3 vSnowN;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
#ifdef USE_RUN
vRun = aRun;
#endif
vSnowW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vSnowN = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uCord;
uniform float uCordAmp;
uniform float uDetail;
#ifdef USE_RUN
varying vec3 vRun;
#endif
varying vec3 vSnowW;
varying vec3 vSnowN;
${pm}
float hs_pisteMask(){
#ifdef USE_RUN
  float n = hs_fbm(vSnowW.xz*0.08) - 0.5;
  return 1.0 - smoothstep(-1.5, 4.5, vRun.z + n*5.0);
#else
  return 0.0;
#endif
}`).replace(`#include <color_fragment>`,`#include <color_fragment>
{
  vec3 Ng = normalize(vSnowN);
  float steep = 1.0 - Ng.y;                       // 0 flat .. ~0.3 at 45deg
  float camD = length(vSnowW - cameraPosition);
  // wild snow: subtle blue-white variation, wind crust patches
  float w1 = hs_fbm(vSnowW.xz*0.035);
  float w2 = hs_fbm(vSnowW.xz*0.4);
  vec3 wild = mix(vec3(0.86,0.90,0.97), vec3(0.95,0.96,0.98), w1);
  wild *= 0.97 + 0.05*w2;
  // rock on steep faces (noisy threshold)
  float rockN = hs_fbm(vSnowW.xz*0.05 + 3.1);
  float rock = smoothstep(0.30, 0.42, steep + (rockN-0.5)*0.22);
  vec3 rockCol = mix(vec3(0.20,0.18,0.16), vec3(0.34,0.31,0.28), hs_fbm(vSnowW.xz*0.3 + vec2(0.0, vSnowW.y*0.5)));
  wild = mix(wild, rockCol, rock*0.85);
  // slope darkening (steeper → greyer)
  wild *= 1.0 - 0.22*smoothstep(0.06, 0.32, steep);
  vec3 col = wild;
#ifdef USE_RUN
  float pm = hs_pisteMask();
  // groomed: very white, groomer pass bands 4.6 m wide
  float band = floor(vRun.x / 4.6);
  float bandJ = hs_hash(vec2(band, 7.0));
  float bx = abs(fract(vRun.x / 4.6) - 0.5) * 4.6;    // distance to band centre
  float seam = 1.0 - 0.05*(1.0 - smoothstep(2.15, 2.3, bx));
  float seamFade = 1.0 - smoothstep(30.0, 120.0, camD);
  vec3 groomed = vec3(0.975,0.975,0.985) * (0.975 + 0.035*bandJ) * mix(1.0, 1.0 - 0.06*(1.0-smoothstep(2.0,2.3,bx)), seamFade);
  groomed *= 1.0 - 0.10*smoothstep(0.10, 0.32, steep);
  // edge berm: slightly creamier loose snow just inside the edge
  float berm = smoothstep(-4.0, -0.5, vRun.z) * (1.0 - smoothstep(0.5, 3.0, vRun.z));
  groomed = mix(groomed, vec3(0.93,0.94,0.96), berm*0.5);
  col = mix(col, groomed, pm * (1.0 - rock));
#endif
  diffuseColor.rgb *= col;
}`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
#ifdef USE_RUN
roughnessFactor = mix(roughnessFactor, 0.7, hs_pisteMask());
#endif`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
{
  vec3 Nw = normalize(vSnowN);
  float camD = length(vSnowW - cameraPosition);
  // wild snow bumps: two scales, gradient of fbm in world xz
  vec2 g1 = hs_fbmGrad(vSnowW.xz*0.35, 0.05) * 0.35 * 0.16;
  vec2 g2 = hs_fbmGrad(vSnowW.xz*1.8, 0.05) * 1.8 * 0.035 * (1.0 - smoothstep(15.0, 60.0, camD));
  vec2 gw = (g1 + g2) * uDetail;
  vec3 bump = vec3(gw.x, 0.0, gw.y);
#ifdef USE_RUN
  float pm = hs_pisteMask();
  bump *= 1.0 - 0.75*pm;
  // corduroy: ridge height profile h(u); perturb along the in-surface gradient of u
  vec3 dpx = dFdx(vSnowW), dpy = dFdy(vSnowW);
  float dux = dFdx(vRun.x), duy = dFdy(vRun.x);
  vec3 Nf = cross(dpx, dpy);
  vec3 r1 = cross(dpy, Nf), r2 = cross(Nf, dpx);
  float det = dot(dpx, r1);
  vec3 gu = abs(det) > 1e-12 ? (r1*dux + r2*duy)/det : vec3(0.0);
  float fw = max(abs(dux), abs(duy)) / uCord;        // ridges per pixel
  float cordFade = 1.0 - smoothstep(0.18, 0.5, fw);
  float ph = fract(vRun.x / uCord);
  // asymmetric rounded ridge: derivative of h(u) = amp * (smooth triangle)
  float dh = (ph < 0.5 ? 1.0 : -1.0) * smoothstep(0.0, 0.12, ph) * smoothstep(1.0, 0.88, ph);
  // slight wobble along s so lines are not perfectly straight
  float wob = hs_vnoise(vec2(floor(vRun.x / uCord), vRun.y*0.15));
  float amp = uCordAmp * (0.7 + 0.6*wob) * cordFade * pm * (1.0 - smoothstep(-1.0, 1.5, vRun.z));
  bump += gu * (dh * amp);
#endif
  vec3 Np = normalize(Nw - bump + Nw*dot(bump, Nw));
  normal = normalize((viewMatrix * vec4(Np, 0.0)).xyz);
}`)},t.customProgramCacheKey=()=>e.run?`hs-snow-run`:`hs-snow`,t}var hm={geoFadeStart:30,geoFadeEnd:40,cardFadeStart:210,cardFadeEnd:250,farVis:1900};function gm(e,t,n){let r=(Math.imul(e|0,2654435761)^Math.imul(Math.floor(t*4),2246822507)^Math.imul(Math.floor(n*4),3266489909))>>>0;return r^=r>>>15,r=Math.imul(r,739982445)>>>0,r^=r>>>12,(r>>>0)%4}var _m=class{constructor(e,t,n,r=32){Q(this,`xz`,void 0),Q(this,`stride`,void 0),Q(this,`cell`,void 0),Q(this,`x0`,void 0),Q(this,`z0`,void 0),Q(this,`nx`,void 0),Q(this,`nz`,void 0),Q(this,`start`,void 0),Q(this,`items`,void 0),this.xz=e,this.stride=t,this.cell=r;let i=1/0,a=1/0,o=-1/0,s=-1/0;for(let r=0;r<n;r++){let n=e[r*t],c=e[r*t+1];n<i&&(i=n),n>o&&(o=n),c<a&&(a=c),c>s&&(s=c)}n||(i=a=0,o=s=0),this.x0=i,this.z0=a,this.nx=Math.max(1,Math.floor((o-i)/r)+1),this.nz=Math.max(1,Math.floor((s-a)/r)+1);let c=this.nx*this.nz,l=new Uint32Array(n),u=new Uint32Array(c+1);for(let r=0;r<n;r++){let n=this.cellIndex(e[r*t],e[r*t+1]);l[r]=n,u[n+1]++}for(let e=0;e<c;e++)u[e+1]+=u[e];this.start=u.slice();let d=u.slice(0,c);this.items=new Uint32Array(n);for(let e=0;e<n;e++)this.items[d[l[e]]++]=e}cellIndex(e,t){let n=Math.min(this.nx-1,Math.max(0,Math.floor((e-this.x0)/this.cell)));return Math.min(this.nz-1,Math.max(0,Math.floor((t-this.z0)/this.cell)))*this.nx+n}query(e,t,n,r){let{cell:i,nx:a,nz:o,x0:s,z0:c,xz:l,stride:u}=this,d=Math.max(0,Math.floor((e-n-s)/i)),f=Math.min(a-1,Math.floor((e+n-s)/i)),p=Math.max(0,Math.floor((t-n-c)/i)),m=Math.min(o-1,Math.floor((t+n-c)/i)),h=n*n,g=0;for(let n=p;n<=m;n++)for(let i=d;i<=f;i++){let o=n*a+i;for(let n=this.start[o],i=this.start[o+1];n<i;n++){let i=this.items[n],a=l[i*u]-e,o=l[i*u+1]-t;if(a*a+o*o<h){if(g>=r.length)return g;r[g++]=i}}}return g}};function vm(e=3){let t=[],n=[],r=[],i=[];for(let a=0;a<e;a++){let o=a*Math.PI/e,s=Math.cos(o),c=-Math.sin(o),l=Math.sin(o),u=Math.cos(o);for(let e of[1,-1]){let a=t.length/3;for(let[i,a]of[[-.5,0],[.5,0],[.5,1],[-.5,1]])t.push(s*i,a,c*i),n.push(l*e,0,u*e),r.push(i+.5,a);e>0?i.push(a,a+1,a+2,a,a+2,a+3):i.push(a,a+2,a+1,a,a+3,a+2)}}return{position:new Float32Array(t),normal:new Float32Array(n),uv:new Float32Array(r),index:new Uint16Array(i)}}function ym(){return{position:new Float32Array([-.5,0,0,.5,0,0,.5,1,0,-.5,1,0]),normal:new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1]),uv:new Float32Array([0,0,1,0,1,1,0,1]),index:new Uint16Array([0,1,2,0,2,3])}}function bm(e){return[{tiers:8,spokes:11,baseR:.36,topR:.06,crownBase:.12,droop:.07,notch:.62,seed:11},{tiers:9,spokes:10,baseR:.31,topR:.05,crownBase:.16,droop:.06,notch:.58,seed:23},{tiers:7,spokes:12,baseR:.4,topR:.07,crownBase:.1,droop:.09,notch:.66,seed:37},{tiers:10,spokes:9,baseR:.28,topR:.05,crownBase:.22,droop:.05,notch:.55,seed:53}][(e%4+4)%4]}var xm=.9,Sm=256,Cm=512,wm=768,Tm=460,Em=512,Dm=2241322,Om=3426619,km=15331317,Am=3877922;function jm(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Mm(e){let t=jm(e.seed),n=[],r=[],i=new Y(Dm),a=new Y(Om),o=new Y(km),s=new Y(Am),c=new Y,l=(e,t,i,a,o,s)=>{n.push(...e,...t,...i),r.push(a.r,a.g,a.b,o.r,o.g,o.b,s.r,s.g,s.b)},u=e.tiers,d=e.spokes,f=1-e.crownBase;for(let n=0;n<u;n++){let r=n/(u-1),s=e.crownBase+f*r**.92*.86,p=f/u*(2.3-.9*r),m=Math.min(1,s+p),h=(e.baseR+(e.topR-e.baseR)*r**.85)*(.92+.16*t()),g=t()*Math.PI*2,_=[0,m,0],v=[0,s+p*.28,0],y=[],b=[];for(let n=0;n<2*d;n++){let r=n%2==0,i=g+n/(2*d)*Math.PI*2+(t()-.5)*.25,a=h*(r?1:e.notch)*(.88+.24*t()),o=s-(r?e.droop*(h/e.baseR)*(.7+.6*t()):0)+(t()-.5)*.012;y.push([Math.cos(i)*a,o,Math.sin(i)*a]),b.push(+!!r)}let x=.55+.35*r;for(let e=0;e<2*d;e++){let t=y[e],n=y[(e+1)%(2*d)],r=c.copy(a).lerp(o,Math.min(1,x+.3*b[e])).clone(),s=c.copy(a).lerp(o,Math.min(1,x+.3*b[(e+1)%(2*d)])).clone();l(_,n,t,c.copy(a).lerp(o,x*.75).clone(),s,r);let u=i,f=c.copy(i).lerp(a,.5).clone();l(v,t,n,u,f,f)}}let p=.022,m=.012,h=-.03,g=e.crownBase+.15;for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=(e+1)/6*Math.PI*2,r=[Math.cos(t)*p,h,Math.sin(t)*p],i=[Math.cos(n)*p,h,Math.sin(n)*p],a=[Math.cos(t)*m,g,Math.sin(t)*m],o=[Math.cos(n)*m,g,Math.sin(n)*m];l(r,a,o,s,s,s),l(r,o,i,s,s,s)}let _=new Rr;return _.setAttribute(`position`,new Er(n,3)),_.setAttribute(`color`,new Er(r,3)),_.computeVertexNormals(),_.computeBoundingSphere(),_}function Nm(e,t){let n=e.position.slice();for(let e=0;e<n.length;e+=3)n[e]*=t,n[e+2]*=t;let r=new Rr;return r.setAttribute(`position`,new Cr(n,3)),r.setAttribute(`normal`,new Cr(e.normal,3)),r.setAttribute(`uv`,new Cr(e.uv,2)),r.setIndex(new Cr(e.index,1)),r}function Pm(e,t){let n=new an(Tm*4,Em,{samples:4,generateMipmaps:!0,minFilter:v,magFilter:g,type:y,colorSpace:``}),r=new Wn,i=new ei({vertexColors:!0});t.forEach((e,t)=>{let n=new fi(e,i);n.position.x=(t+.5)*xm,r.add(n)});let a=new ec(0,xm*4,1,0,-2,2);a.position.set(0,0,1);let o=e.getRenderTarget(),s=e.getClearColor(new Y),c=e.getClearAlpha();return e.setClearColor(new Y(Om).lerp(new Y(km),.72),0),e.setRenderTarget(n),e.clear(),e.render(r,a),e.setRenderTarget(o),e.setClearColor(s,c),i.dispose(),n.texture.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy()),n.texture}function Fm(){let e=new Uint8Array(65536),t=new Y(Om).lerp(new Y(km),.6);for(let n=0;n<64;n++)for(let r=0;r<256;r++){let i=(r%64+.5)/64-.5,a=(n+.5)/64,o=a>.1&&Math.abs(i)<.42*(1-a),s=(n*256+r)*4;e[s]=t.r*255,e[s+1]=t.g*255,e[s+2]=t.b*255,e[s+3]=o?255:0}let n=new Ei(e,256,64);return n.generateMipmaps=!0,n.minFilter=v,n.magFilter=g,n.needsUpdate=!0,n}var Im={geo:new Y(1,.35,.35),cross:new Y(.35,1,.35),bill:new Y(.45,.55,1)};function Lm(e,t,n,r){let i=hm,a=t===`geo`?[-2,-1]:t===`cross`?[i.geoFadeStart,i.geoFadeEnd]:[i.cardFadeStart,i.cardFadeEnd],o=t===`geo`?[i.geoFadeStart,i.geoFadeEnd]:t===`cross`?[i.cardFadeStart,i.cardFadeEnd]:[1e6,2e6],s=r?Im[t]:new Y(1,1,1);e.onBeforeCompile=e=>{e.uniforms.uCamPos=n.uCamPos,e.uniforms.uLodIn={value:new K(a[0],a[1])},e.uniforms.uLodOut={value:new K(o[0],o[1])},e.uniforms.uLodTint={value:s};let r=t!==`geo`;e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform vec3 uCamPos;
varying float vLodD;
${r?`attribute float aVariant;`:``}
vec3 lodOrigin() { return (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz; }
${t===`bill`?`
vec2 lodFacing() {
  vec3 l = inverse(mat3(instanceMatrix)) * (uCamPos - lodOrigin());
  return normalize(l.xz + vec2(1e-5, 0.0));
}`:``}`).replace(`#include <begin_vertex>`,t===`bill`?`vec2 lodF = lodFacing(); vec3 lodR = vec3(lodF.y, 0.0, -lodF.x);
vec3 transformed = lodR * position.x + vec3(0.0, position.y, 0.0);
vLodD = distance(lodOrigin(), uCamPos);`:`#include <begin_vertex>
vLodD = distance(lodOrigin(), uCamPos);`).replace(`#include <beginnormal_vertex>`,t===`bill`?`vec2 lodFn = lodFacing(); vec3 lodRn = vec3(lodFn.y, 0.0, -lodFn.x);
vec3 objectNormal = normalize(vec3(lodFn.x, 0.0, lodFn.y) * 0.55 + lodRn * position.x * 1.7 + vec3(0.0, 0.55 + 0.3 * position.y, 0.0));`:t===`cross`?`vec3 objectNormal = normalize(normal * 0.5 + vec3(position.x, 0.0, position.z) * 1.7 + vec3(0.0, 0.55 + 0.3 * position.y, 0.0));`:`#include <beginnormal_vertex>`).replace(`#include <uv_vertex>`,r?`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vec2((uv.x + aVariant) / 4.0, uv.y);
#endif`:`#include <uv_vertex>`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec2 uLodIn, uLodOut;
uniform vec3 uLodTint;
varying float vLodD;`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
{
  // complementary dither: neighbours in a band keep disjoint pixel sets
  float lodN = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
  float lodIn = smoothstep(uLodIn.x, uLodIn.y, vLodD);
  float lodOut = smoothstep(uLodOut.x, uLodOut.y, vLodD);
  if (lodN < 1.0 - lodIn || lodN >= 1.0 - lodOut) discard;
}`).replace(`#include <map_fragment>`,r?`#include <map_fragment>
#ifdef USE_MAP
{
  // keep thin foliage from dissolving in the smaller mips
  vec2 lodTd = fwidth(vMapUv * vec2(textureSize(map, 0)));
  diffuseColor.a = min(1.0, diffuseColor.a * (1.0 + 0.35 * max(0.0, log2(max(lodTd.x, lodTd.y)))));
}
#endif
diffuseColor.rgb *= uLodTint;`:`#include <map_fragment>
diffuseColor.rgb *= uLodTint;`)},e.customProgramCacheKey=()=>`tree-lod-${t}-${+!!r}`}function Rm(e,t,n={}){let r=new Fn;r.name=`trees`;let i=Math.min(Math.floor(e.length/4),n.maxTrees??1/0),a=n.heightScale??13,o=!!n.debug,s={uCamPos:{value:new q(1e9,0,0)}},c=new Float32Array(i*16),l=new Uint8Array(i),u=new Float32Array(i),d=new J,f=new Lt,p=new q,m=new q,h=new q(0,1,0);for(let n=0;n<i;n++){let r=e[n*4],i=e[n*4+1],o=e[n*4+2]||1,s=e[n*4+3]||0,g=a*o;m.set(r,t.height(r,i)-.25,i),f.setFromAxisAngle(h,s),p.set(g,g,g),d.compose(m,f,p).toArray(c,n*16),l[n]=gm(n,r,i),u[n]=.9+(Math.imul(n,2654435761)>>>0)/4294967296*.14}let g=Array.from({length:4},(e,t)=>Mm(bm(t))),_=new Xo({vertexColors:!0,roughness:.92,flatShading:!0});Lm(_,`geo`,s,o);let v=new Qo({depthPacking:Ue});Lm(v,`geo`,s,!1);let y=g.map(e=>{let t=new Ri(e,_,wm);return t.count=0,t.frustumCulled=!1,t.castShadow=!0,t.receiveShadow=!0,t.customDepthMaterial=v,t.instanceMatrix.setUsage(Xe),t.setColorAt(0,new Y(1,1,1)),t.name=`trees-geo`,r.add(t),t}),b=new _m(e,4,i,32),x=new Uint32Array(wm*4),S=new q(1e9,0,0),C=0,w=new Y;function T(e){S.copy(e);let t=b.query(e.x,e.z,hm.geoFadeEnd+12,x);for(let e of y)e.count=0;C=0;for(let n=0;n<t;n++){let t=x[n],r=c[t*16+13]-e.y;if(Math.abs(r)>hm.geoFadeEnd+30)continue;let i=y[l[t]];i.count>=wm||(d.fromArray(c,t*16),i.setMatrixAt(i.count,d),i.setColorAt(i.count,w.setScalar(u[t])),i.count++,C++)}for(let e of y)e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0)}let E=n.renderer?Pm(n.renderer,g):Fm(),D={map:E,alphaTest:.42,roughness:.95,metalness:0,side:0},O=new Xo(D);Lm(O,`cross`,s,o);let k=new Qo({depthPacking:Ue,map:E,alphaTest:.42});Lm(k,`cross`,s,!1);let A=new Xo(D);Lm(A,`bill`,s,o);let j=Nm(vm(3),xm),M=Nm(ym(),xm);function N(t){let n=new Map;for(let r=0;r<i;r++){let i=`${Math.floor(e[r*4]/t)},${Math.floor(e[r*4+1]/t)}`,a=n.get(i);a||n.set(i,a=[]),a.push(r)}return[...n.values()]}function P(e,t,n,r){let i=new Rr;for(let t of[`position`,`normal`,`uv`])i.setAttribute(t,e.getAttribute(t));i.setIndex(e.getIndex());let a=new Float32Array(n.length),o=new Ri(i,t,n.length);return n.forEach((e,t)=>{d.fromArray(c,e*16),o.setMatrixAt(t,d),o.setColorAt(t,w.setScalar(u[e])),a[t]=l[e]}),i.setAttribute(`aVariant`,new Ai(a,1)),o.computeBoundingSphere(),o.matrixAutoUpdate=!1,o.name=r,o}let F=N(Sm).map(e=>{let t=P(j,O,e,`trees-cross`);return t.castShadow=!0,t.receiveShadow=!0,t.customDepthMaterial=k,r.add(t),t}),ee=N(Cm).map(e=>{let t=P(M,A,e,`trees-bill`);return t.castShadow=!1,t.receiveShadow=!1,r.add(t),t}),I=0,te=0;return{group:r,count:i,update(e){s.uCamPos.value.copy(e),S.distanceToSquared(e)>9&&T(e),I=te=0;for(let t of F){let n=t.boundingSphere;t.visible=e.distanceTo(n.center)-n.radius<hm.cardFadeEnd,t.visible&&I++}for(let t of ee){let n=t.boundingSphere,r=e.distanceTo(n.center);t.visible=r-n.radius<hm.farVis&&r+n.radius>hm.cardFadeStart,t.visible&&te++}},stats:()=>({total:i,geo:C,cardBuckets:I,billBuckets:te})}}var zm={easy:`#2fae5b`,intermediate:`#2f7ee6`,advanced:`#1d2026`,expert:`#e04a3c`,freeride:`#f08a24`},Bm=e=>zm[e]??`#8a93a0`;function Vm(e,t){let n=new Fn;n.name=`buildings`;let r=new Xo({color:14275788,roughness:.8}),i=new Xo({color:10107698,roughness:.6});for(let a of e){if(!a.pts||a.pts.length<3)continue;let e=-1/0,o=1/0;for(let[n,r]of a.pts){let i=t.height(n,r);e=Math.max(e,i),o=Math.min(o,i)}let s=a.h??8,c=new Ya(a.pts.map(([e,t])=>new K(e,-t))),l=new Po(c,{depth:s+(e-o)+2,bevelEnabled:!1});l.rotateX(-Math.PI/2),l.translate(0,o-2,0);let u=new fi(l,[r,r]);u.castShadow=!0,u.receiveShadow=!0,n.add(u);let d=new Po(c,{depth:.6,bevelEnabled:!1});d.rotateX(-Math.PI/2),d.translate(0,e+s,0);let f=new fi(d,i);f.castShadow=!0,n.add(f)}return n}function Hm(e,t){let n=new Fn;n.name=`pisteLines`;for(let r of e){let e=r.pts.map(([e,n])=>new q(e,t.height(e,n)+.4,n)),i=new $i(new Rr().setFromPoints(e),new Gi({color:Bm(r.difficulty),depthTest:!0}));n.add(i)}return n}var Um={pylonH:13,nodeH:11,fillerH:12,clearance:7,sagK:.048,fillerDepth:8,stationLen:9,rampLen:22,boardD:6,unloadD:6,railLen:16,epochMs:Date.UTC(2026,0,1),tableStep:.5},Wm=e=>(e-Um.epochMs)/1e3;function Gm(e){let t=(e.type??``).toLowerCase();if(t===`magic_carpet`||t===`rope_tow`||t===`platter`||t===`t-bar`||t===`drag_lift`)return{kind:`carpet`,seats:1,speed:1,spacing:3,hang:0,gauge:1.2,detach:!1,slow:1,endH:.3};let n=t===`gondola`||t===`cable_car`||t===`mixed_lift`,r=Math.max(1,Math.round(e.occupancy??(n?8:4))),i=n?6:5,a=e.capacity&&e.capacity>0?e.capacity:0,o=a?Math.max(12,i*3600*r/a):n?42:24;return n?{kind:`gondola`,seats:r,speed:i,spacing:o,hang:3.2,gauge:5.6,detach:!0,slow:.8,endH:3.2+.35}:{kind:`chair`,seats:r,speed:i,spacing:o,hang:2.3,gauge:r*.62+2.6,detach:!0,slow:.8,endH:2.3+.55}}function Km(e,t){return Math.min(Um.clearance,t.endH+.3*Math.max(0,e-Um.railLen))}function qm(e,t,n,r){return e+(t-e)*r-Um.sagK*n*r*(1-r)}var Jm=class{constructor(e,t,n=Gm(e)){Q(this,`data`,void 0),Q(this,`spec`,void 0),Q(this,`supports`,[]),Q(this,`cum`,[]),Q(this,`pts`,void 0),Q(this,`length`,void 0),Q(this,`loop`,void 0),Q(this,`radius`,void 0),Q(this,`T`,void 0),Q(this,`period`,void 0),Q(this,`carriers`,void 0),Q(this,`headway`,void 0),Q(this,`fillers`,void 0),this.data=e,this.spec=n,this.pts=e.pts.map(e=>[e[0],e[1]]);let r=0;this.cum.push(0);for(let e=1;e<this.pts.length;e++)r+=Math.hypot(this.pts[e][0]-this.pts[e-1][0],this.pts[e][1]-this.pts[e-1][1]),this.cum.push(r);this.length=r,this.radius=n.gauge/2,this.loop=2*r+2*Math.PI*this.radius;let i=this.pts.length;for(let r=0;r<i;r++){let a=r===0||r===i-1,o=e.pts[r][2],[s,c]=this.pts[r],l=n.kind===`carpet`||a?n.endH:o?Um.pylonH:Um.nodeH;this.supports.push({d:this.cum[r],x:s,z:c,ground:t(s,c),h:l,kind:a?`end`:o?`pylon`:`node`,dir:this.dirAtVertex(r)})}let a=Um.railLen;if(n.kind!==`carpet`&&r>2*a+10){let e=(e,n,r)=>{let[i,a]=this.pointAt(e),o=t(i,a);return{d:e,x:i,z:a,ground:o,h:n-o,kind:r,dir:this.dirAt(e)}},i=e=>{let[n,r]=this.pointAt(e),[i,a]=this.dirAt(e);return t(n-a*this.radius,r+i*this.radius)},o=Math.min(Um.boardD,r/4),s=Math.max(r-Um.unloadD,r*3/4),c=i(o)+n.endH,l=i(s)+n.endH,[u,d]=this.pointAt(a),[f,p]=this.pointAt(r-a),m=this.supports.filter(e=>e.kind!==`end`&&e.d>a+4&&e.d<r-a-4);this.supports.splice(0,this.supports.length,e(0,c,`end`),e(o,c,`rail`),e(a,Math.max(c,t(u,d)+n.endH),`rail`),...m,e(r-a,Math.max(l,t(f,p)+n.endH),`rail`),e(s,l,`rail`),e(r,l,`end`))}let o=0;if(n.kind!==`carpet`&&r>0){let e=[this.supports[0]],i=(a,s,c)=>{let l=s.d-a.d;if(l>1&&c<Um.fillerDepth){let u=Math.max(2,Math.ceil(l/4)),d=0,f=-1;for(let e=1;e<u;e++){let i=e/u,o=a.d+l*i,[c,p]=this.pointAt(o),m=qm(a.ground+a.h,s.ground+s.h,l,i),h=Km(Math.min(o,r-o),n)-(m-t(c,p));h>d&&(d=h,f=o)}if(f>0&&f-a.d>6&&s.d-f>6){let[n,r]=this.pointAt(f),l={d:f,x:n,z:r,ground:t(n,r),h:Um.fillerH,kind:`filler`,dir:this.dirAt(f)};o++,i(a,l,c+1),e.push(l),i(l,s,c+1);return}}};for(let t=1;t<this.supports.length;t++)i(this.supports[t-1],this.supports[t],0),e.push(this.supports[t]);this.supports.splice(0,this.supports.length,...e)}this.fillers=o;let s=Um.tableStep,c=Math.max(2,Math.ceil(this.loop/s)+1);this.T=new Float64Array(c);for(let e=1;e<c;e++){let t=(e-.5)*s;this.T[e]=this.T[e-1]+s/this.speedAt(t)}let l=(c-1)*s;this.period=this.T[c-1]-(l-this.loop)/this.speedAt(this.loop);let u=n.kind===`carpet`||r<=0?0:Math.max(1,Math.round(this.period/(n.spacing/n.speed)));this.carriers=u,this.headway=u?this.period/u:1/0}dirAtVertex(e){let t=this.pts.length,n=this.pts[Math.max(0,e-1)],r=this.pts[Math.min(t-1,e+1)],i=Math.hypot(r[0]-n[0],r[1]-n[1])||1;return[(r[0]-n[0])/i,(r[1]-n[1])/i]}seg(e){let t=this.cum,n=0,r=t.length-1;for(;r-n>1;){let i=n+r>>1;t[i]<=e?n=i:r=i}return n}pointAt(e){e=Math.min(this.length,Math.max(0,e));let t=Math.min(this.seg(e),this.pts.length-2),n=this.cum[t+1]-this.cum[t]||1,r=(e-this.cum[t])/n,i=this.pts[t],a=this.pts[t+1];return[i[0]+(a[0]-i[0])*r,i[1]+(a[1]-i[1])*r]}dirAt(e){e=Math.min(this.length,Math.max(0,e));let t=Math.min(this.seg(e),this.pts.length-2),n=this.pts[t],r=this.pts[t+1],i=Math.hypot(r[0]-n[0],r[1]-n[1])||1;return[(r[0]-n[0])/i,(r[1]-n[1])/i]}cableY(e){let t=this.supports;e=Math.min(this.length,Math.max(0,e));let n=0,r=t.length-1;for(;r-n>1;){let i=n+r>>1;t[i].d<=e?n=i:r=i}let i=t[n],a=t[Math.min(n+1,t.length-1)],o=a.d-i.d;return o<=1e-6?i.ground+i.h:qm(i.ground+i.h,a.ground+a.h,o,(e-i.d)/o)}endDist(e){let t=this.length,n=this.radius;if(e=(e%this.loop+this.loop)%this.loop,e<t)return Math.min(e,t-e);if(e<t+Math.PI*n)return 0;if(e<2*t+Math.PI*n){let r=2*t+Math.PI*n-e;return Math.min(r,t-r)}return 0}speedAt(e){let t=this.spec;return t.detach?t.slow+(t.speed-t.slow)*yp(Um.stationLen,Um.stationLen+Um.rampLen,this.endDist(e)):t.speed}timeAt(e){e=Math.min(this.loop,Math.max(0,e));let t=e/Um.tableStep,n=Math.min(this.T.length-2,Math.floor(t));return this.T[n]+(this.T[n+1]-this.T[n])*(t-n)}distAtTime(e){let t=this.period;e=(e%t+t)%t;let n=this.T,r=0,i=n.length-1;for(;i-r>1;){let t=r+i>>1;n[t]<=e?r=t:i=t}let a=n[i]>n[r]?(e-n[r])/(n[i]-n[r]):0;return Math.min(this.loop,(r+a)*Um.tableStep)}loopPoint(e,t={x:0,y:0,z:0,dx:0,dz:1,up:!0,d:0}){let n=this.length,r=this.radius;if(e=(e%this.loop+this.loop)%this.loop,e<n||e>=n+Math.PI*r&&e<2*n+Math.PI*r){let i=e<n,a=i?e:2*n+Math.PI*r-e,[o,s]=this.pointAt(a),[c,l]=this.dirAt(a),u=i?r:-r;return t.x=o-l*u,t.z=s+c*u,t.y=this.cableY(a),t.dx=i?c:-c,t.dz=i?l:-l,t.up=i,t.d=a,t}let i=e<n+Math.PI*r,a=(i?e-n:e-(2*n+Math.PI*r))/r,o=i?n:0,[s,c]=this.pointAt(o),[l,u]=this.dirAt(o),d=i?1:-1,f=-u*d,p=l*d,m=l*d,h=u*d,g=Math.cos(a),_=Math.sin(a);return t.x=s+(f*g+m*_)*r,t.z=c+(p*g+h*_)*r,t.y=this.cableY(o),t.dx=-f*_+m*g,t.dz=-p*_+h*g,t.up=!i,t.d=o,t}carrierTau(e,t){return t+e*this.headway}get boardS(){return Math.min(Um.boardD,this.length/4)}get unloadS(){return Math.max(this.length-Um.unloadD,this.length*3/4)}nextBoarding(e,t=1.5){let n=this.headway,r=this.period,i=this.timeAt(this.boardS),a=((i-e)%n+n)%n;a<t&&(a+=n);let o=((i-(e+a))%r+r)%r;return{k:Math.round(o/n)%this.carriers,at:e+a,wait:a}}get boardTau(){return this.timeAt(this.boardS)}get unloadTau(){return this.timeAt(this.unloadS)}boardPoint(){return this.loopPoint(this.boardS)}cablePolyline(e,t=8){let n=[],r=new Set;for(let e of this.supports)r.add(e.d);for(let e=0;e<this.length;e+=t)r.add(e);r.add(this.length);let i=[...r].sort((e,t)=>e-t),a={x:0,y:0,z:0,dx:0,dz:1,up:!0,d:0};for(let t of i){let r=e?t:2*this.length+Math.PI*this.radius-t;this.loopPoint(r,a),n.push({x:a.x,y:a.y,z:a.z,d:t})}return n}minClearance(e,t=2){let n=1/0,r=-1/0,i=this.spec.kind===`carpet`?0:Math.min(Um.railLen,this.length/4);for(let a=i;a<=this.length-i;a+=t){let[t,i]=this.pointAt(a),o=this.cableY(a)-e(t,i);n=Math.min(n,o),r=Math.max(r,Km(Math.min(a,this.length-a),this.spec)-o)}return{clearance:n,deficit:r}}},Ym={maxSpeed:4,boardRadius:12,cancelRadius:32,fastRate:4,fastNear:25,fastFar:60,exitAhead:9,exitSide:4,pisteSearch:260},Xm=class e{constructor(e,t,n=[],r=Math.random){Q(this,`height`,void 0),Q(this,`pistes`,void 0),Q(this,`lines`,void 0),Q(this,`state`,{mode:`free`}),Q(this,`rng`,void 0),this.height=t,this.pistes=n,this.lines=e,this.rng=r}static build(t,n,r=[]){return new e(t.filter(e=>e.pts.length>=2).map(e=>new Jm(e,n)),n,r)}rideable(e){let t=this.lines[e];return!!t&&t.spec.kind!==`carpet`&&t.carriers>0}nearest(e,t){let n=null;return this.lines.forEach((r,i)=>{if(!this.rideable(i))return;let a=r.boardPoint(),o=Math.hypot(a.x-e,a.z-t);(!n||o<n.dist)&&(n={lift:i,dist:o})}),n}available(e,t,n){if(this.state.mode!==`free`)return null;let r=this.nearest(e,t);return r&&r.dist<=Ym.boardRadius&&n<=Ym.maxSpeed?r.lift:null}use(e,t,n,r){let i=this.state;if(i.mode===`wait`)return this.state={mode:`free`},[{type:`cancel`,lift:i.lift,reason:`user`}];if(i.mode===`ride`)return[this.exit(i.lift,!0)];let a=this.nearest(e,t);if(!a||a.dist>Ym.boardRadius)return[{type:`denied`,reason:`far`}];if(n>Ym.maxSpeed)return[{type:`denied`,reason:`fast`}];let o=this.lines[a.lift].nextBoarding(r);return this.state={mode:`wait`,lift:a.lift,k:o.k,at:o.at},[{type:`queue`,lift:a.lift,wait:o.wait}]}waitLeft(e){return this.state.mode===`wait`?Math.max(0,this.state.at-e):0}update(e,t,n,r,i=0){let a=this.state;if(a.mode===`wait`){let e=this.lines[a.lift],i=e.boardPoint();if(Math.hypot(i.x-n,i.z-r)>Ym.cancelRadius)return this.state={mode:`free`},[{type:`cancel`,lift:a.lift,reason:`left`}];if(t>=a.at){let n=e.spec.seats,r=e.spec.kind===`chair`?Math.floor(this.rng()*n):0;return this.state={mode:`ride`,lift:a.lift,k:a.k,tau:e.boardTau+(t-a.at),seat:r},[{type:`board`,lift:a.lift}]}return[]}if(a.mode===`ride`){let t=this.lines[a.lift];if(a.tau+=e*this.rate(a.lift,a.tau,i),a.tau>=t.unloadTau)return[this.exit(a.lift,!1)]}return[]}rate(e,t,n){if(n<=0)return 1;let r=this.lines[e],i=r.endDist(r.distAtTime(t));return 1+(Ym.fastRate-1)*Math.min(1,n)*yp(Ym.fastNear,Ym.fastFar,i)}seat(e=0){let t=this.state;if(t.mode!==`ride`)return null;let n=this.lines[t.lift],r=n.distAtTime(t.tau),i=n.loopPoint(r),a=n.boardS,o=n.unloadS;return{grip:i,progress:Math.min(1,Math.max(0,(r-a)/(o-a))),speed:n.speedAt(r)*this.rate(t.lift,t.tau,e)}}get ridingCarrier(){let e=this.state;return e.mode===`ride`?{lift:e.lift,k:e.k}:null}exitPose(e){let t=this.lines[e],[n,r]=t.pointAt(t.length),[i,a]=t.dirAt(t.length),o=t.radius+Ym.exitSide,s=n+i*Ym.exitAhead-a*o,c=r+a*Ym.exitAhead+i*o,l=this.height(s,c),u=1/0,d=null;for(let e of this.pistes){let[t,n]=e.pts[0],r=Math.hypot(t-s,n-c);r<u&&r<Ym.pisteSearch&&r>3&&(u=r,d=[(t-s)/r,(n-c)/r])}if(!d){let e=this.height(s+3,c)-this.height(s-3,c),t=this.height(s,c+3)-this.height(s,c-3),n=Math.hypot(e,t);d=n>1e-6?[-e/n,-t/n]:[i,a]}return{p:[s,l,c],f:[d[0],0,d[1]]}}exit(e,t){this.state={mode:`free`};let n=this.exitPose(e);return{type:`exit`,lift:e,skipped:t,p:n.p,f:n.f}}};function Zm(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Rr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Qm(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Qm(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Qm(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Cr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function $m(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function eh(e,t){let n=new Y(t),r=e.getAttribute(`position`).count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new Cr(i,3)),e}var th=(e,t,n,r,i,a,o,s=0)=>{let c=new ga(e,t,n);return s&&c.rotateX(s),c.translate(r,i,a),eh(c,o)},nh=e=>{let t=Zm(e.map(e=>e.index?e.toNonIndexed():e),!1);return t.computeBoundingSphere(),t},rh={metal:8226704,dark:2895926,cable:2764339,cabin:15659507,stripe:1940627,glass:1713712,seat:3104671,concrete:12567236,roof:4026255,wall:14472908,belt:3159098};function ih(e){let t=rh,n=1.85,r=1.95,i=-e.hang,a=[th(n,.95,r,0,i+.475,0,t.cabin),th(1.87,.12,1.97,0,i+.9,0,t.stripe),th(1.79,.86,1.89,0,i+1.39,0,t.glass),th(n,.2,r,0,i+1.92,0,t.cabin),th(1.4500000000000002,.1,1.5499999999999998,0,i+2.07,0,t.cabin),th(.12,-i-2.1-.18,.12,0,(i+2.12-.18)/2,0,t.dark),th(.3,.26,.7,0,-.1,0,t.dark)];for(let e of[-1,1])for(let o of[-1,1])a.push(th(.09,.86,.09,e*(n/2-.045),i+1.39,o*(r/2-.045),t.cabin));return a.push(th(1.55,.1,1.65,0,i-.05,0,t.dark)),nh(a)}function ah(e){let t=rh,n=e.seats*.6,r=-e.hang,i=[th(n,.12,.5,0,r-.06,.02,t.seat),th(n,.6,.08,0,r+.3,-.27,t.seat,-.18),th(n+.06,.06,.06,0,r-.15,-.2,t.dark),th(n+.06,.06,.06,0,r+.62,-.36,t.dark),th(n,.05,.08,0,r-.5,.5,t.dark),th(n,.05,.05,0,r+1.05,0,t.dark),th(.1,-r-.85,.1,0,(r+.62-.2)/2,-.4,t.dark),th(.3,.26,.7,0,-.1,-.2,t.dark)];for(let e of[-1,1])i.push(th(.05,.45,.05,n/2*e,r-.3,.48,t.dark)),i.push(th(.05,.05,.62,e*(n/2+.02),r+1.05,-.17,t.dark)),i.push(th(.05,.8,.05,e*(n/2+.02),r+.25,-.33,t.dark));return nh(i)}function oh(e){return e.kind===`gondola`?ih(e):ah(e)}function sh(e,t,n){let r=Math.atan2(t.dx,t.dz),i=e.kind===`chair`?(n-(e.seats-1)/2)*.6:0,a=Math.cos(r),o=Math.sin(r);return{p:[t.x+i*a,t.y-e.hang,t.z-i*o],yaw:r}}var ch=class{constructor(e,t){Q(this,`lines`,void 0),Q(this,`group`,new Fn),Q(this,`carriers`,[]),Q(this,`m`,new J),Q(this,`q`,new Lt),Q(this,`pos`,new q),Q(this,`one`,new q(1,1,1)),Q(this,`yAxis`,new q(0,1,0)),Q(this,`lp`,{x:0,y:0,z:0,dx:0,dz:1,up:!0,d:0}),this.lines=e,this.group.name=`lifts`;let n=rh,r=new Xo({color:n.metal,roughness:.45,metalness:.6}),i=new Xo({vertexColors:!0,roughness:.5,metalness:.25}),a=e.flatMap(e=>e.spec.kind===`carpet`?[]:e.supports.filter(e=>e.kind!==`end`&&e.kind!==`rail`).map(t=>({s:t,l:e}))),o=new va(.26,.42,1,10);o.translate(0,.5,0);let s=new ga(1,.34,.42),c=new ga(.28,.32,2.4),l=new Ri(o,r,Math.max(1,a.length)),u=new Ri(s,r,Math.max(1,a.length)),d=new Ri(c,new Xo({color:n.dark,roughness:.5,metalness:.5}),Math.max(1,a.length*2));l.count=u.count=a.length,d.count=a.length*2,a.forEach(({s:e,l:t},n)=>{this.q.setFromAxisAngle(this.yAxis,Math.atan2(e.dir[0],e.dir[1])),this.m.compose(this.pos.set(e.x,e.ground-1,e.z),this.q,new q(1,e.h+.6,1)),l.setMatrixAt(n,this.m),this.m.compose(this.pos.set(e.x,e.ground+e.h-.45,e.z),this.q,new q(t.spec.gauge+.9,1,1)),u.setMatrixAt(n,this.m);for(let r of[-1,1]){let i=r*t.radius;this.m.compose(this.pos.set(e.x-e.dir[1]*i,e.ground+e.h-.12,e.z+e.dir[0]*i),this.q,this.one),d.setMatrixAt(n*2+ +(r>0),this.m)}});for(let e of[l,u,d])e.castShadow=!0,e.receiveShadow=!0,e.computeBoundingSphere(),this.group.add(e);let f=[];for(let t of e)if(t.spec.kind!==`carpet`){for(let e of[!0,!1]){let n=t.cablePolyline(e,8);for(let e=1;e<n.length;e++)f.push(n[e-1].x,n[e-1].y,n[e-1].z,n[e].x,n[e].y,n[e].z)}for(let e of[t.length,2*t.length+Math.PI*t.radius]){let n=t.loopPoint(e);for(let r=1;r<=8;r++){let i=t.loopPoint(e+Math.PI*t.radius*r/8);f.push(n.x,n.y,n.z,i.x,i.y,i.z),n=i}}}let p=new Rr;p.setAttribute(`position`,new Er(f,3));let m=new ra(p,new Gi({color:n.cable}));m.name=`cables`,this.group.add(m);let h=[];for(let n of e)n.spec.kind===`carpet`?h.push(...uh(n,t)):h.push(...lh(n,t,`bottom`),...lh(n,t,`top`));if(h.length){let e=new fi(nh(h),new Xo({vertexColors:!0,roughness:.75,metalness:.05}));e.castShadow=!0,e.receiveShadow=!0,e.name=`stations`,this.group.add(e)}let g=new Map;for(let t of e){if(t.spec.kind===`carpet`||t.carriers<=0){this.carriers.push(null);continue}let e=`${t.spec.kind}:${t.spec.seats}`,n=g.get(e);n||(n=oh(t.spec),g.set(e,n));let r=new Ri(n,i,t.carriers);r.instanceMatrix.setUsage(Xe),r.castShadow=!0,r.receiveShadow=!0;let a=new ar;for(let e of t.supports)a.expandByPoint(new q(e.x,e.ground-5,e.z)),a.expandByPoint(new q(e.x,e.ground+e.h+2,e.z));a.expandByScalar(t.radius+3),r.boundingSphere=a.getBoundingSphere(new Ar),r.name=`carriers:${t.data.id}`,this.carriers.push(r),this.group.add(r)}}get carrierCount(){return this.carriers.reduce((e,t)=>e+(t?t.count:0),0)}get towerCount(){return this.group.children[0].count}update(e,t,n){this.lines.forEach((r,i)=>{let a=this.carriers[i];if(a&&!(n&&a.boundingSphere&&a.boundingSphere.center.distanceTo(n)-a.boundingSphere.radius>6e3)){for(let n=0;n<r.carriers;n++){let o=t&&t.lift===i&&t.k===n?t.tau:r.carrierTau(n,e);r.loopPoint(r.distAtTime(o),this.lp),this.q.setFromAxisAngle(this.yAxis,Math.atan2(this.lp.dx,this.lp.dz)),this.m.compose(this.pos.set(this.lp.x,this.lp.y,this.lp.z),this.q,this.one),a.setMatrixAt(n,this.m)}a.instanceMatrix.needsUpdate=!0}})}};function lh(e,t,n){let r=rh,i=n===`top`,a=i?e.length:0,[o,s]=e.pointAt(a),[c,l]=e.dirAt(a),u=i?1:-1,d=Um.railLen+1,f=e.radius+2.5,p=e.spec.gauge+4.2,m=Math.atan2(c,l),h=1/0,g=-1/0;for(let e=-d;e<=f;e+=2){let n=u*e;for(let e of[-p/2,0,p/2]){let r=t(o+c*n-l*e,s+l*n+c*e);h=Math.min(h,r)}}for(let t=0;t<=d;t+=1)g=Math.max(g,e.cableY(i?e.length-t:t));g=Math.max(g,e.cableY(a));let _=e.loopPoint(i?e.unloadS:e.boardS),v=t(_.x,_.z)+.12,y=Math.max(g+.9,v+3.6),b=d+f,x=(f-d)/2,S=[],C=(e,t,n,r)=>(e.translate(n,r,t*u),e.rotateY(m),e.translate(o,0,s),e),w=Math.min(h,v)-1.5;S.push(C(th(p,v-w,b,0,0,0,r.concrete),x,0,(v+w)/2)),S.push(C(th(p+1.2,.35,b+1.2,0,0,0,r.roof),x,0,y+.18)),S.push(C(th(p+1.3,.5,.2,0,0,0,r.wall),x-(b+1.2)/2,0,y-.05));for(let e of[-p/2+.25,p/2-.25])for(let t of[-d+.4,(f-d)/2,f-.4])S.push(C(th(.35,y-w,.35,0,0,0,r.wall),t,e,(y+w)/2));let T=new va(e.radius,e.radius,.28,28,1,!0);eh(T,r.dark),S.push(C(T,0,0,e.cableY(a)+.12));let E=eh(new va(.6,.6,Math.max(.5,y-e.cableY(a)),12),r.metal);S.push(C(E,0,0,(y+e.cableY(a))/2));let D=th(2.6,2.6,2.8,0,0,0,r.wall);return S.push(C(D,-d*.45,p/2+2.2,v+1.3)),S.push(C(th(2.9,.18,3.1,0,0,0,r.roof),-d*.45,p/2+2.2,v+2.7)),S.push(C(th(.05,.9,2,0,0,0,r.glass),-d*.45,p/2+3.52,v+1.6)),S}function uh(e,t){let n=[];for(let r=0;r<e.length;r+=4){let i=Math.min(e.length,r+4),[a,o]=e.pointAt(r),[s,c]=e.pointAt(i),l=t(a,o),u=t(s,c),d=th(1.3,.16,Math.hypot(s-a,c-o,u-l)+.05,0,0,0,rh.belt);d.rotateX(-Math.atan2(u-l,Math.hypot(s-a,c-o))),d.rotateY(Math.atan2(s-a,c-o)),d.translate((a+s)/2,(l+u)/2+.08,(o+c)/2),n.push(d)}return n}async function dh(e,t,n={}){let r=()=>new Promise(e=>setTimeout(e,0)),i=new rm({grid:e.meta.grid,height:e.height,field:e.field,pisteid:e.pisteid,far:e.far&&e.meta.far?{grid:e.meta.far,height:e.far}:null}),a=new Fn;a.name=`world`,t?.(`mesh`),await r();let o=fm({grid:e.meta.grid,height:e.height,field:e.field},e.far&&e.meta.far?{grid:e.meta.far,height:e.far}:null,i,mm({run:!0}),mm({run:!1,detail:.6}));a.add(o.group),t?.(`trees`),await r();let s=Rm(e.trees,i,{renderer:n.renderer,debug:n.treeDebug});a.add(s.group),t?.(`lifts`),await r();let c=(e,t)=>i.height(e,t),l=Xm.build(e.map.lifts,c,e.map.pistes),u=new ch(l.lines,c);a.add(u.group),a.add(Vm(e.map.buildings??[],i));let d=Hm(e.map.pistes,i);return d.visible=!1,a.add(d),{data:e,terrain:i,root:a,meshes:o,pisteLines:d,lifts:l,liftRender:u,treeCount:s.count,treeStats:()=>s.stats(),update:e=>s.update(e)}}function fh(e,t){let n=It.degToRad(e),r=It.degToRad(t);return new q(Math.sin(n)*Math.cos(r),Math.sin(r),-Math.cos(n)*Math.cos(r)).normalize()}var ph={zenith:new Y(2911432),mid:new Y(6265052),horizon:new Y(11060970),ground:new Y(11847384),sun:new Y(16773596),scale:1.45};function mh(e,t){return new Jo({name:`hs-sky`,side:1,depthWrite:!1,fog:!1,uniforms:{uSun:{value:e.clone()},uZenith:{value:ph.zenith.clone()},uMid:{value:ph.mid.clone()},uHorizon:{value:ph.horizon.clone()},uGround:{value:ph.ground.clone()},uSunCol:{value:ph.sun.clone()},uClouds:{value:+!!t},uScale:{value:ph.scale}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_Position = p.xyww; // at far plane
      }`,fragmentShader:`
      uniform vec3 uSun, uZenith, uMid, uHorizon, uGround, uSunCol;
      uniform float uClouds, uScale;
      varying vec3 vDir;
      float h21(vec2 p){ p = fract(p*vec2(233.34, 851.73)); p += dot(p, p+23.45); return fract(p.x*p.y); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.0-2.0*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
      float fbm(vec2 p){ float s=0.0,a=0.5; for(int i=0;i<5;i++){ s+=a*vn(p); p=p*2.07+11.3; a*=0.5; } return s; }
      void main() {
        vec3 d = normalize(vDir);
        float e = d.y;
        vec3 col;
        if (e >= 0.0) {
          float t1 = smoothstep(0.0, 0.22, e);
          float t2 = smoothstep(0.18, 0.75, e);
          col = mix(uHorizon, uMid, t1);
          col = mix(col, uZenith, t2);
        } else {
          col = mix(uHorizon, uGround, smoothstep(0.0, 0.15, -e));
        }
        float cs = max(dot(d, normalize(uSun)), 0.0);
        // forward-scatter glow (wide + narrow) and disc
        col += uSunCol * (0.22 * pow(cs, 6.0) + 0.55 * pow(cs, 90.0));
        col = mix(col, uSunCol * 22.0, smoothstep(0.99955, 0.99975, cs));
        // faint cirrus
        if (uClouds > 0.5 && e > 0.015) {
          vec2 uv = d.xz / (e + 0.08) * 0.9;
          float c = fbm(uv * 1.6 + vec2(3.0, 1.0));
          c = smoothstep(0.52, 0.85, c) * smoothstep(0.015, 0.25, e) * 0.55;
          col = mix(col, vec3(0.97, 0.98, 1.0) + uSunCol * 0.25 * pow(cs, 8.0), c);
        }
        gl_FragColor = vec4(col * uScale, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function hh(e,t,n={}){let r=fh(n.azDeg??140,n.elDeg??36),i=new Ro(1,48,24),a=new fi(i,mh(r,!0));a.scale.setScalar(5e4),a.frustumCulled=!1,a.renderOrder=-1,t.add(a);let o=new Gc(e),s=new Wn,c=mh(r,!1);c.uniforms.uSunCol.value=ph.sun.clone().multiplyScalar(.25),s.add(new fi(i,c));let l=o.fromScene(s,.04,.1,100);t.environment=l.texture,t.environmentIntensity=.5,o.dispose();let u=new Ls(11127024,15133940,.35);t.add(u);let d=new nc(16773858,3.5);d.castShadow=!0;let f=n.shadowSize??40,p=d.shadow.camera;p.left=-f,p.right=f,p.top=f,p.bottom=-f,p.near=1,p.far=700,p.updateProjectionMatrix(),d.shadow.mapSize.set(n.shadowMap??2048,n.shadowMap??2048),d.shadow.bias=-3e-4,d.shadow.normalBias=.05,d.shadow.radius=2.5,t.add(d),t.add(d.target),t.fog=new Un(ph.horizon.clone().lerp(new Y(16777215),.25).multiplyScalar(ph.scale*.92),18e-5);let m=2*f/d.shadow.mapSize.x,h=new J().lookAt(new q,r.clone().negate(),new q(0,1,0)),g=h.clone().invert(),_=new q;return{sun:d,hemi:u,sky:a,sunDir:r,follow(e){_.copy(e).applyMatrix4(g),_.x=Math.round(_.x/m)*m,_.y=Math.round(_.y/m)*m,_.applyMatrix4(h),d.target.position.copy(_),d.position.copy(_).addScaledVector(r,350),d.target.updateMatrixWorld(),a.position.copy(e)},dispose(){l.dispose()}}}var gh=(e=0,t=0,n=0)=>[e,t,n],_h=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],vh=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],yh=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],bh=(e,t,n)=>[e[0]+t[0]*n,e[1]+t[1]*n,e[2]+t[2]*n],xh=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Sh=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Ch=e=>Math.hypot(e[0],e[1],e[2]),wh=e=>{let t=Ch(e);return t>1e-9?[e[0]/t,e[1]/t,e[2]/t]:[0,1,0]};function Th(e,t,n){let r=Math.cos(n),i=Math.sin(n),a=Sh(t,e),o=xh(t,e)*(1-r);return[e[0]*r+a[0]*i+t[0]*o,e[1]*r+a[1]*i+t[1]*o,e[2]*r+a[2]*i+t[2]*o]}function Eh(e,t,n,r,i){let a=vh(t,e),o=Ch(a),s=(n+r)*.9995,c=Math.abs(n-r)+1e-4,l=o>1e-9?yh(a,1/o):[0,-1,0],u=Math.min(s,Math.max(c,o)),d=bh(e,l,u),f=(n*n-r*r+u*u)/(2*u),p=Math.sqrt(Math.max(0,n*n-f*f)),m=vh(i,yh(l,xh(i,l)));return Ch(m)<1e-6&&(m=Math.abs(l[1])<.9?Sh(l,[0,1,0]):Sh(l,[1,0,0])),m=wh(m),{mid:_h(bh(e,l,f),yh(m,p)),end:d}}var Dh={boardLen:1.56,boardWaist:.25,boardNoseW:.29,boardThick:.016,stanceHalf:.27,duckDeg:15,duckBackDeg:-15,ankleH:.085,footZ:-.01,balanceZ:0,thigh:.44,shin:.43,hipHalf:.1,spine:.5,neck:.07,headR:.115,shoulderHalf:.19,upperArm:.29,foreArm:.27},Oh={flat:{out:.3,fwd:.12,y:-.48},heel:{out:.32,fwd:.22,y:-.47},toe:{out:.34,fwd:-.02,y:-.49}};function kh(e){let t=Math.min(1,Math.abs(e)/.8),n=Oh.flat,r=e<0?Oh.heel:Oh.toe,i=e=>n[e]+(r[e]-n[e])*t;return{out:i(`out`),fwd:i(`fwd`),y:i(`y`)}}var Ah={torso:.2,thigh:.13,hand:.05};function jh(e,t,n,r,i=[0,0,0]){let a=vh(n,t),o=vh(e,t),s=xh(a,a),c=bh(t,a,s>1e-12?Math.min(1,Math.max(0,xh(o,a)/s)):0),l=vh(e,c),u=Ch(l);return u>=r?e:bh(c,u>1e-6?yh(l,1/u):wh(i),r)}var Mh=[1,0,0];function Nh(e,t,n=Dh.boardWaist){let r=n/2,i=t>=0?1:-1,a=[0,r*Math.abs(Math.sin(t)),i*r*(1-Math.cos(t))];return _h(Th(e,Mh,t),a)}function Ph(e,t=Dh){let n=Math.PI/180;return{ankle:[Nh([t.stanceHalf,t.boardThick+t.ankleH,t.footZ],e,t.boardWaist),Nh([-t.stanceHalf,t.boardThick+t.ankleH,t.footZ],e,t.boardWaist)],footDir:[Th(Th([0,0,1],[0,1,0],t.duckDeg*n),Mh,e),Th(Th([0,0,1],[0,1,0],t.duckBackDeg*n),Mh,e)],boardUp:Th([0,1,0],Mh,e)}}function Fh(e,t=Dh){let n=e.edge,r=Math.min(1,Math.max(0,e.flex)),i=e.tuck??0,a=Nh(gh(),n,t.boardWaist),{ankle:o,footDir:s}=Ph(n,t),c=e.lean,l=[0,Math.cos(c),Math.sin(c)],u=[0,-Math.sin(c),Math.cos(c)],d=bh(yh(_h(o[0],o[1]),.5),Th([0,0,1],Mh,n),t.balanceZ),f=(t.thigh+t.shin)*(.975-.26*r-.08*i),p=t.stanceHalf-t.hipHalf,m=Math.sqrt(Math.max(.05,f*f-p*p)),h=.06*r+(c<0?.08*Math.min(1,-c/.8):-.03*Math.min(1,c/.8)),g=bh(bh(d,l,m),u,-h),_=Th(Mh,l,e.twist*.35),v=[bh(g,_,t.hipHalf),bh(g,_,-t.hipHalf)],y=[gh(),gh()];for(let e=0;e<2;e++){let n=_h(u,yh(Mh,e===0?.35:-.35)),r=Eh(v[e],o[e],t.thigh,t.shin,n);y[e]=r.mid}let b=.16+.38*r+.35*i+(c<0?.35*Math.min(1,-c/.9):.05*Math.min(1,c/.9)),x=c*.55+b,S=[0,Math.cos(x),Math.sin(x)],C=bh(g,S,t.spine),w=e.twist,T=Th(Mh,S,w),E=wh(Sh(T,S)),D=bh(C,S,-.07),O=[bh(D,T,t.shoulderHalf),bh(D,T,-t.shoulderHalf)],k;if(e.armPose){let t=e.armPose.shoulders;k=[0,1].map(e=>_h(yh(S,t[e].lift),yh(E,t[e].fwd)));for(let e=0;e<2;e++)O[e]=_h(O[e],k[e])}let A=bh(C,S,t.neck),j=e.worldUp?wh(e.worldUp):[0,1,0],M=bh(A,wh(_h(yh(S,.4),yh(j,.6))),t.headR+.03),N=Th([e.fwd,0,0],[0,1,0],-e.fwd*(e.look??0)),P=wh(_h(yh(N,.85),yh(E,.35))),F=e.fwd>0?0:1,ee=1-F,I=[gh(),gh()],te=e.t??0,ne=.02*Math.sin(te*1.7);if(e.armPose)for(let t=0;t<2;t++){let n=t===0?1:-1,r=e.armPose.hands[t],i=_h(O[t],_h(_h(yh(T,n*r.out),yh(E,r.fwd)),yh(S,r.y)));i=jh(i,g,C,Ah.torso,E);for(let e=0;e<2;e++)i=jh(i,v[e],y[e],Ah.thigh,E);I[t]=i}else if(e.arms===`natural`){let e=kh(c);for(let t=0;t<2;t++){let n=t===0?1:-1,i=t===F?1:-1;I[t]=_h(O[t],_h(_h(yh(T,n*e.out),yh(E,e.fwd+.06*r)),yh(S,e.y+.08*r+i*ne)))}}else I[F]=_h(O[F],_h(_h(yh(N,.3),yh(E,.22+.1*r)),yh(S,-.32+ne))),I[ee]=_h(O[ee],_h(_h(yh(N,-.12),yh(E,.18+.1*r)),yh(S,-.4-ne)));let re=[gh(),gh()],ie=[gh(),gh()];for(let e=0;e<2;e++){let n=_h(_h(yh(T,e===0?1:-1),yh(E,-.6)),yh(S,-.3)),r=Eh(O[e],I[e],t.upperArm,t.foreArm,n);re[e]=r.mid,ie[e]=r.end}return{boardPos:a,boardEdge:n,ankle:o,footDir:s,knee:y,hip:v,pelvis:g,chest:C,neck:A,head:M,headFwd:P,shoulder:O,elbow:re,hand:ie,bodyUp:l,torsoUp:S,shoulderShift:k}}function Ih(e=0,t=Dh){let n=[0,.11,-.04],r=[bh(n,Mh,t.hipHalf),bh(n,Mh,-t.hipHalf)],i=t.stanceHalf-t.hipHalf,a=[0,1].map(e=>{let n=(e===0?1:-1)*i*.6,a=Math.sqrt(t.thigh*t.thigh-n*n);return _h(r[e],[n,0,a])}),o=[0,1].map(e=>{let n=(e===0?1:-1)*i*.4,r=.17,o=-Math.sqrt(Math.max(0,t.shin*t.shin-n*n-r*r));return _h(a[e],[n,o,r])}),s=[0,o[0][1]-t.ankleH-t.boardThick,(o[0][2]+o[1][2])/2+.01],c=[Th([0,0,1],[0,1,0],t.duckDeg*Math.PI/180),Th([0,0,1],[0,1,0],t.duckBackDeg*Math.PI/180)],l=-.14,u=[0,Math.cos(l),Math.sin(l)],d=bh(n,u,t.spine),f=bh(d,u,t.neck),p=bh(f,[0,1,0],t.headR+.03),m=.45*Math.sin(e*.23)+.2*Math.sin(e*.61),h=wh([Math.sin(m),-.12,Math.cos(m)]),g=bh(d,u,-.07),_=[bh(g,Mh,t.shoulderHalf),bh(g,Mh,-t.shoulderHalf)],v=[gh(),gh()],y=[gh(),gh()];for(let e=0;e<2;e++){let n=_h(yh(_h(yh(a[e],.55),yh(r[e],.45)),1),[0,.09,0]),i=Eh(_[e],n,t.upperArm,t.foreArm,[e===0?1:-1,-.2,-.6]);v[e]=i.mid,y[e]=i.end}return{boardPos:s,boardEdge:0,ankle:o,footDir:c,knee:a,hip:r,pelvis:n,chest:d,neck:f,head:p,headFwd:h,shoulder:_,elbow:v,hand:y,bodyUp:[0,1,0],torsoUp:u}}var Lh={edge:Math.PI/2,yaw:-Math.PI/2};function Rh(e,t,n=0,r=Dh){let i=Math.min(1,Math.abs(t)/3.2),a=t<0?-1:1,o=r.thigh+r.shin,s=2*Math.PI*e,c=i<.02?0:.18+.32*i,l=.006*Math.sin(n*1.7),u=o*.95,d=u*Math.sin(c),f=r.ankleH+Math.min(o*.965,Math.sqrt((o*.985)**2-d*d))-Math.abs(Math.cos(s))*.015*i+l,p=[0,f,.02*i*a],m=[bh(p,Mh,r.hipHalf),bh(p,Mh,-r.hipHalf)],h=[gh(),gh()],g=[gh(),gh()];for(let e=0;e<2;e++){let t=Math.sin(s+e*Math.PI),n=Math.max(0,Math.cos(s+e*Math.PI))*.09*i;h[e]=[m[e][0]*.9,r.ankleH+n,p[2]+a*u*Math.sin(c*t)],g[e]=Eh(m[e],h[e],r.thigh,r.shin,[0,0,1]).mid}let _=[wh([.08,0,1]),wh([-.08,0,1])],v=.05+.12*i*a,y=[0,Math.cos(v),Math.sin(v)],b=bh(p,y,r.spine),x=bh(b,y,r.neck),S=bh(x,[0,1,0],r.headR+.03),C=i<.05?.35*Math.sin(n*.31):0,w=wh([Math.sin(C),-.15,Math.cos(C)]),T=bh(b,y,-.07),E=[bh(T,Mh,r.shoulderHalf),bh(T,Mh,-r.shoulderHalf)],D=[-(r.shoulderHalf+.13),f-.08,p[2]+.04],O=[gh(),gh()],k=[gh(),gh()],A=r.upperArm+r.foreArm;for(let e=0;e<2;e++){let t=e===1?[D[0]+.03,D[1]+r.boardNoseW/2+.02,D[2]+.12]:_h(E[0],[.07,-A*.93,-a*A*.5*Math.sin(c*Math.sin(s))]),n=Eh(E[e],t,r.upperArm,r.foreArm,[e===0?.3:-.6,-.2,-1]);O[e]=n.mid,k[e]=n.end}return{boardPos:D,boardEdge:Lh.edge,boardYaw:Lh.yaw,ankle:h,footDir:_,knee:g,hip:m,pelvis:p,chest:b,neck:x,head:S,headFwd:w,shoulder:E,elbow:O,hand:k,bodyUp:[0,1,0],torsoUp:y}}var zh=(e,t,n)=>({out:e,fwd:t,y:n}),Bh={relax:zh(.2,.16,-.46),toe:{lead:zh(.15,.36,-.52),trail:zh(.38,0,-.3)},heel:{lead:zh(.34,.3,-.24),trail:zh(.2,-.3,-.52)},skid:{lead:zh(.22,.42,-.14),trail:zh(.24,.36,-.18)},tuck:zh(-.06,.3,-.42),air:zh(.44,.08,-.14),shoulder:{reach:{lift:-.03,fwd:.03},balance:{lift:.015,fwd:0},skid:{lift:.005,fwd:.02},tuck:{lift:.01,fwd:.04},air:{lift:.035,fwd:0}},carve:{e0:18,e1:50,v0:3,v1:7},skidW:{s0:10,s1:32,v0:1.2,v1:4},twist:{counter:.16,antic:.3,max:.49,base:.32,tuckClose:.4},look:.22,lead:.35,spring:{hz:2.1,zeta:.82},shoulderSpring:{hz:3.2,zeta:.9},noise:{amp:.008,ampSpeed:.016,hz:[.31,.57,.93]}},Vh=(e,t,n)=>({out:e.out+(t.out-e.out)*n,fwd:e.fwd+(t.fwd-e.fwd)*n,y:e.y+(t.y-e.y)*n}),Hh=(e,t,n)=>({lift:e.lift+(t.lift-e.lift)*n,fwd:e.fwd+(t.fwd-e.fwd)*n}),Uh=(e,t,n)=>({lift:e.lift+t.lift*n,fwd:e.fwd+t.fwd*n});function Wh(e,t,n,r=Bh.lead){let i=Math.abs(e)>3?Math.sign(e):0;if(Math.abs(n)>.15&&Math.sign(n)!==i)return _p(n,-1,1);if(i!==0&&t*i<0){let n=Math.abs(e/t);return-i*.5*(1-yp(r*.5,r*1.5,n))}return 0}function Gh(e){let t=Bh,n=e.fwd>0?0:1,r=1-n,i=+!!e.air,a=yp(t.skidW.v0,t.skidW.v1,e.speed),o=i?0:Math.max(vp(e.brake)*a,yp(t.skidW.s0,t.skidW.s1,Math.abs(e.slipDeg))*a),s=e.edgeDeg>=0?1:-1,c=i?0:yp(t.carve.e0,t.carve.e1,Math.abs(e.edgeDeg))*yp(t.carve.v0,t.carve.v1,e.speed)*(1-o),l=vp(e.tuck)*(1-i),u=[{...t.relax},{...t.relax}],d=[{lift:0,fwd:0},{lift:0,fwd:0}],f=s>0?t.toe:t.heel,p=s>0?n:r;u[n]=Vh(u[n],f.lead,c),u[r]=Vh(u[r],f.trail,c),d[p]=Uh(d[p],t.shoulder.reach,c),d[1-p]=Uh(d[1-p],t.shoulder.balance,c),u[n]=Vh(u[n],t.skid.lead,o),u[r]=Vh(u[r],t.skid.trail,o);for(let e=0;e<2;e++)d[e]=Hh(d[e],t.shoulder.skid,o);for(let e=0;e<2;e++)u[e]=Vh(u[e],t.tuck,l),d[e]=Hh(d[e],t.shoulder.tuck,l),u[e]=Vh(u[e],t.air,i),d[e]=Hh(d[e],t.shoulder.air,i);return{hands:u,shoulders:d,twist:_p(t.twist.antic*e.antic-t.twist.counter*_p(e.turnRate,-3,3),-t.twist.max,t.twist.max)*(1-.5*l),look:t.look*e.antic,w:{carve:c,skid:o,tuck:l,air:i,side:s}}}function Kh(e,t,n=0){let r=Bh.twist;return t*r.base*(1-r.tuckClose*vp(n))-t*e}function qh(e,t,n,r,i){let a=2*Math.PI*n,o=Math.max(0,Math.min(i,.1));for(;o>1e-6;){let n=Math.min(o,1/240);e.v+=(a*a*(t-e.x)-2*r*a*e.v)*n,e.x+=e.v*n,o-=n}return e.x}function Jh(e,t){let n=Bh.noise.hz;return Math.sin(e*2*Math.PI*n[0]+t*1.7)*.5+Math.sin(e*2*Math.PI*n[1]+t*4.1)*.3+Math.sin(e*2*Math.PI*n[2]+t*2.3)*.2}var Yh=[`out`,`fwd`,`y`],Xh=class{constructor(){Q(this,`hs`,[]),Q(this,`ss`,[]),Q(this,`init`,!1),Q(this,`prevEdge`,0),Q(this,`prevT`,-1),Q(this,`edgeRate`,0),Q(this,`last`,null)}reset(){this.init=!1,this.prevT=-1,this.edgeRate=0}copyFrom(e){this.hs=e.hs.map(e=>e.map(e=>({...e}))),this.ss=e.ss.map(e=>e.map(e=>({...e}))),this.init=e.init,this.prevEdge=e.prevEdge,this.prevT=e.prevT,this.edgeRate=e.edgeRate,this.last=e.last}edgeAnticipation(e,t,n){if(this.prevT>=0&&t>this.prevT+1e-6){let n=(e-this.prevEdge)/(t-this.prevT);this.edgeRate+=(n-this.edgeRate)*Math.min(1,(t-this.prevT)/.06)}return t!==this.prevT&&(this.prevEdge=e,this.prevT=t),Wh(e,this.edgeRate,n)}step(e,t,n){let r=Gh(t),i=Bh;this.init||=(this.hs=r.hands.map(e=>Yh.map(t=>({x:e[t],v:0}))),this.ss=r.shoulders.map(e=>[{x:e.lift,v:0},{x:e.fwd,v:0}]),!0);let a=i.noise.amp+(i.noise.ampSpeed-i.noise.amp)*vp(t.speed/12),o=r.hands.map((t,r)=>{let o={};return Yh.forEach((s,c)=>{let l=a*Jh(n,r*3+c+1)*(s===`out`?.6:1);o[s]=qh(this.hs[r][c],t[s]+l,i.spring.hz,i.spring.zeta,e)}),o}),s=r.shoulders.map((t,n)=>({lift:qh(this.ss[n][0],t.lift,i.shoulderSpring.hz,i.shoulderSpring.zeta,e),fwd:qh(this.ss[n][1],t.fwd,i.shoulderSpring.hz,i.shoulderSpring.zeta,e)}));return this.last={...r,hands:o,shoulders:s},this.last}},Zh=Math.PI/180;function Qh(e=Dh.boardLen,t=Dh.boardWaist,n=Dh.boardNoseW,r=7.8){let i=e*.78,a=i/2,o=n/2-t/2,s=Math.max(r,(a*a+o*o)/(2*o)),c=new Ya,l=[];for(let e=0;e<=24;e++){let r=-a+i*e/24,o=t/2+(s-Math.sqrt(Math.max(0,s*s-r*r)));l.push(new K(r,Math.min(n/2,o)))}let u=(e-i)/2;for(let e=1;e<=10;e++){let t=e/10*Math.PI;l.push(new K(a+Math.sin(t)*u,n/2*Math.cos(t)))}for(let e=23;e>=0;e--){let r=-a+i*e/24,o=t/2+(s-Math.sqrt(Math.max(0,s*s-r*r)));l.push(new K(r,-Math.min(n/2,o)))}for(let e=1;e<10;e++){let t=e/10*Math.PI;l.push(new K(-a-Math.sin(t)*u,-Math.cos(t)*(n/2)))}return c.setFromPoints(l),c}function $h(){let e=new Po(Qh(),{depth:Dh.boardThick,bevelEnabled:!0,bevelThickness:.003,bevelSize:.004,bevelSegments:1,steps:1});e.rotateX(-Math.PI/2);let t=e.getAttribute(`position`),n=Dh.boardLen*.39;for(let e=0;e<t.count;e++){let r=t.getX(e),i=Math.max(0,Math.abs(r)-n);t.setY(e,t.getY(e)+i*i*1.6)}return e.computeVertexNormals(),e}var eg=(e,t)=>new _a(e,Math.max(.001,t),4,10),tg={jacket:14239022,pants:8819084,helmet:2040358,goggle:15759914,board:3129524,boardBase:1389626,glove:1776928,boot:2828840},ng=class{constructor(){Q(this,`root`,new Fn),Q(this,`sLean`,Cp()),Q(this,`sFlex`,Cp(.2)),Q(this,`sTwist`,Cp(.3)),Q(this,`sEdge`,Cp()),Q(this,`sTuck`,Cp()),Q(this,`upper`,new Xh),Q(this,`time`,0),Q(this,`dims`,Dh),Q(this,`arms`,`reach`),Q(this,`flexBias`,0),Q(this,`flexScale`,1),Q(this,`lastPose`,null),Q(this,`tmpM`,new J),Q(this,`bx`,new q),Q(this,`by`,new q),Q(this,`bz`,new q)}reset(){this.sLean=Cp(),this.sFlex=Cp(.2),this.sTwist=Cp(.3),this.sEdge=Cp(),this.sTuck=Cp(),this.upper.reset()}copyStateFrom(e){this.sLean={...e.sLean},this.sFlex={...e.sFlex},this.sTwist={...e.sTwist},this.sEdge={...e.sEdge},this.sTuck={...e.sTuck},this.time=e.time,this.upper.copyFrom(e.upper),this.root.visible=e.root.visible}update(e,t,n,r,i){this.time+=e;let a=r.normal;this.by.set(a[0],a[1],a[2]).normalize(),this.bx.set(n.f[0],n.f[1],n.f[2]),this.bx.addScaledVector(this.by,-this.bx.dot(this.by)).normalize(),(!isFinite(this.bx.x)||this.bx.lengthSq()<.5)&&this.bx.set(1,0,0),this.bz.crossVectors(this.bx,this.by).normalize(),this.tmpM.makeBasis(this.bx,this.by,this.bz).setPosition(t[0],t[1],t[2]),this.root.matrix.copy(this.tmpM),this.root.matrixAutoUpdate=!1,this.root.matrixWorldNeedsUpdate=!0;let o=r.speed,s=_p(r.lean,-1.15,1.15),c=_p(r.edgeDeg*Zh,s-.35,s+.35),l=Sp(this.sTuck,vp(i.boost),7,e),u=vp(.26+.2*vp(o/9)+.32*vp(r.load-1)+.18*Math.min(1,Math.abs(r.edgeDeg)/60)+.35*l+.12*i.brake+(r.label===`skid`?.08:0)+(r.air?.3:0)),d=this.flexBias+(1-this.flexBias)*this.flexScale*u,f=_p(i.steer*n.fwd,-1,1),p=r.air?0:this.upper.edgeAnticipation(r.edgeDeg,n.t,f),m=r.air?0:9.81*Math.tan(_p(r.lean,-1.3,1.3))/Math.max(4,o),h=this.upper.step(e,{edgeDeg:r.edgeDeg,slipDeg:r.slipDeg,speed:o,turnRate:m,air:r.air,brake:i.brake,tuck:l,antic:p,fwd:n.fwd},this.time),g=Kh(h.twist,n.fwd,l),_=Sp(this.sLean,s,12,e),v=Sp(this.sEdge,c,16,e),y=Sp(this.sFlex,d,d>this.sFlex.x?6:12,e),b=Sp(this.sTwist,g,7,e),x=[this.bx.y,this.by.y,this.bz.y],S=Fh({lean:_,edge:v,flex:y,twist:b,fwd:n.fwd,tuck:l*.6,worldUp:x,t:this.time,arms:this.arms,armPose:h,look:h.look},this.dims);this.lastPose=S,this.apply(S)}sit(e,t,n){this.time+=e;let r=Math.sin(n),i=Math.cos(n);this.bz.set(r,0,i),this.by.set(0,1,0),this.bx.set(i,0,-r),this.tmpM.makeBasis(this.bx,this.by,this.bz).setPosition(t[0],t[1],t[2]),this.root.matrix.copy(this.tmpM),this.root.matrixAutoUpdate=!1,this.root.matrixWorldNeedsUpdate=!0;let a=Ih(this.time,this.dims);this.lastPose=a,this.apply(a)}walk(e,t,n,r,i){this.time+=e;let a=Math.sin(n),o=Math.cos(n);this.bz.set(a,0,o),this.by.set(0,1,0),this.bx.set(o,0,-a),this.tmpM.makeBasis(this.bx,this.by,this.bz).setPosition(t[0],t[1],t[2]),this.root.matrix.copy(this.tmpM),this.root.matrixAutoUpdate=!1,this.root.matrixWorldNeedsUpdate=!0;let s=Rh(r,i,this.time,this.dims);this.lastPose=s,this.apply(s)}},rg=class extends ng{constructor(e=tg){super(),Q(this,`board`,new Fn),Q(this,`bootMeshes`,[]),Q(this,`segs`,[]),Q(this,`headGroup`,new Fn),Q(this,`pelvisMesh`,void 0),Q(this,`handMeshes`,[]),Q(this,`v1`,new q),Q(this,`v2`,new q),Q(this,`yAxis`,new q(0,1,0)),this.root.name=`rider`;let t=(e,t=.7)=>new Xo({color:e,roughness:t}),n=t(e.jacket,.75),r=t(e.pants,.85),i=t(e.helmet,.35),a=t(e.glove,.8),o=t(e.boot,.6),s=new Xo({color:e.board,roughness:.35,metalness:.05}),c=new fi($h(),[s,s]),l=new fi($h(),new Xo({color:e.boardBase,roughness:.4}));l.scale.set(1.001,.4,1.001),l.position.y=-.002,this.board.add(c,l);for(let e of[1,-1]){let n=e*Dh.duckDeg*Zh,r=new Fn;r.position.set(e*Dh.stanceHalf,Dh.boardThick,0),r.rotation.y=n;let i=new fi(new ga(.12,.13,.3),o);i.position.set(0,.07,.02);let a=new fi(new ga(.14,.2,.03),t(1118998,.5));a.position.set(0,.12,-.12),a.rotation.x=-.25;let s=new fi(new ga(.15,.03,.12),t(1118998,.5));s.position.set(0,.12,.02),r.add(i,a,s),this.board.add(r),this.bootMeshes.push(i)}this.root.add(this.board);let u=(e,t)=>{this.root.add(e),this.segs.push({mesh:e,get:t})};for(let e=0;e<2;e++){u(new fi(eg(.078,Dh.thigh-.1),r),t=>[t.hip[e],t.knee[e]]),u(new fi(eg(.064,Dh.shin-.08),r),t=>[t.knee[e],t.ankle[e]]),u(new fi(eg(.058,Dh.upperArm-.06),n),t=>[t.shoulder[e],t.elbow[e]]),u(new fi(eg(.05,Dh.foreArm-.06),n),t=>[t.elbow[e],t.hand[e]]);let t=new fi(new Ro(.052,10,8),a);this.root.add(t),this.handMeshes.push(t)}let d=new _a(.15,Dh.spine-.18,4,12);d.scale(1.25,1,.8),u(new fi(d,n),e=>[e.pelvis,e.chest]),this.pelvisMesh=new fi(new _a(.12,.12,4,10),r),this.pelvisMesh.geometry.rotateZ(Math.PI/2),this.pelvisMesh.geometry.scale(1,.9,.85),this.root.add(this.pelvisMesh);let f=new fi(new Ro(Dh.headR,16,12),t(14857364,.6)),p=new fi(new Ro(Dh.headR*1.13,16,10,0,Math.PI*2,0,Math.PI*.58),i);p.position.y=.012;let m=new fi(new zo(Dh.headR*1.08,.022,6,24),t(e.goggle,.5));m.rotation.x=Math.PI/2-.12,m.position.y=0;let h=new fi(new ga(.17,.06,.04),new Xo({color:15901498,roughness:.15,metalness:.6,emissive:3807744}));h.position.set(0,0,Dh.headR*1);let g=new fi(new va(.06,.07,.1,10),n);g.position.y=-Dh.headR-.02,this.headGroup.add(f,p,m,h,g),this.root.add(this.headGroup),this.root.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})}place(e,t,n){this.v1.set(t[0],t[1],t[2]),this.v2.set(n[0],n[1],n[2]),e.position.copy(this.v1).add(this.v2).multiplyScalar(.5),this.v2.sub(this.v1).normalize(),e.quaternion.setFromUnitVectors(this.yAxis,this.v2)}apply(e){this.board.position.set(e.boardPos[0],e.boardPos[1],e.boardPos[2]),this.board.rotation.set(e.boardEdge,e.boardYaw??0,0,e.boardYaw?`YXZ`:`XYZ`);for(let t of this.segs){let[n,r]=t.get(e);this.place(t.mesh,n,r)}let t=this.segs[this.segs.length-1].mesh,n=this.v1.set(e.shoulder[0][0]-e.shoulder[1][0],e.shoulder[0][1]-e.shoulder[1][1],e.shoulder[0][2]-e.shoulder[1][2]).normalize(),r=this.v2.set(e.torsoUp[0],e.torsoUp[1],e.torsoUp[2]).normalize(),i=new q().crossVectors(n,r).normalize();t.quaternion.setFromRotationMatrix(new J().makeBasis(n,r,i));let a=new q(e.hip[0][0]-e.hip[1][0],e.hip[0][1]-e.hip[1][1],e.hip[0][2]-e.hip[1][2]).normalize(),o=new q(e.bodyUp[0],e.bodyUp[1],e.bodyUp[2]),s=new q().crossVectors(a,o).normalize();o.crossVectors(s,a).normalize(),this.pelvisMesh.position.set(e.pelvis[0],e.pelvis[1]-.02,e.pelvis[2]),this.pelvisMesh.quaternion.setFromRotationMatrix(new J().makeBasis(a,o,s));for(let t=0;t<2;t++)this.handMeshes[t].position.set(e.hand[t][0],e.hand[t][1],e.hand[t][2]);let c=new q(e.headFwd[0],e.headFwd[1],e.headFwd[2]),l=new q(e.head[0]-e.neck[0],e.head[1]-e.neck[1],e.head[2]-e.neck[2]).normalize(),u=new q().crossVectors(l,c).normalize();c.crossVectors(u,l).normalize(),this.headGroup.position.set(e.head[0],e.head[1],e.head[2]),this.headGroup.quaternion.setFromRotationMatrix(new J().makeBasis(u,l,c))}},ig={zh:{"app.title":`HeyGo Slopes`,"mode.free":`自由滑`,"mode.freeSub":`自由探索 · M 查看雪场地图`,"btn.camera":`视角`,"btn.map":`地图`,"btn.menu":`菜单`,"map.north":`北向固定`,"map.hint":`地图 M`,"info.alt":`海拔`,"info.slope":`坡度`,"info.offPiste":`雪道外`,"unit.kmh":`km/h`,"unit.mph":`mph`,"unit.m":`m`,"unit.ft":`ft`,"speed.boost":`加速 Shift`,"label.stop":`停`,"label.skid":`搓雪`,"label.flat":`平板`,"label.carve":`刻滑`,"label.edge":`走刃`,"label.air":`空中`,"label.crash":`摔倒`,"dash.edge":`立刃`,"dash.slip":`侧滑`,"dash.load":`受力`,"dash.heel":`后刃`,"dash.toe":`前刃`,"turns.title":`最近的弯`,"turns.empty":`还没有完成的弯`,"turn.carve":`刻滑弯`,"turn.edge":`走刃弯`,"turn.skid":`搓雪弯`,"turn.toe":`前刃`,"turn.heel":`后刃`,"turn.detail":`{side} · 立刃 {edge}° · 侧滑 {slip}°`,"keys.go":`前进`,"keys.brake":`刹车`,"keys.turn":`转弯`,"keys.boost":`加速`,"keys.rewind":`倒回几秒前`,"keys.camera":`视角`,"hint.start":`按住 W / ↑ 滑行`,"toast.rewind":`已倒回 3 秒`,"toast.foot.off":`已下板步行（W 走 · Shift 跑 · F 上板）`,"toast.foot.on":`已上板`,"toast.foot.fast":`先停下来才能下板`,"toast.rewindEmpty":`没有可倒回的记录`,"toast.camera.near":`视角：跟拍`,"toast.camera.far":`视角：高机位`,"toast.flat-transition":`换刃时板还横着在滑 · 竞速赛里这里会卡刃`,"toast.catch-risk":`小心卡刃 · 立刃太大速度不够`,"toast.fallback":`未找到雪场 {want}，已载入测试雪场`,"toast.units":`单位：{u}`,"toast.lines":`雪道中心线：{on}`,on:`开`,off:`关`,"menu.title":`已暂停`,"menu.resume":`继续滑行`,"menu.units":`单位`,"menu.lang":`Language / 语言`,"menu.metric":`公制 km/h · m`,"menu.imperial":`英制 mph · ft`,"menu.lines":`显示雪道中心线（调试）`,"load.title":`正在加载雪场`,"load.bytes":`已加载 {a} / {b} MB`,"load.stage.data":`雪场数据`,"load.stage.mesh":`地形网格`,"load.stage.trees":`树林`,"load.stage.lifts":`缆车和建筑`,"load.stage.rider":`雪板和人偶`,"load.stage.ready":`准备好了`,"load.error":`加载失败：{msg}`,"load.retry":`再试一次`,"region.china-hebei":`中国 · 河北`,"difficulty.easy":`初级`,"difficulty.intermediate":`中级`,"difficulty.advanced":`高级`,"touch.hold":`按住这里滑行`,"touch.drag":`左右拖动转弯 · 向下拖动刹车`,"touch.boost":`加速`,"touch.jump":`起跳`,"touch.rewind":`倒回`,"touch.keys":`按住屏幕{side}滑行 · 左右拖动转弯 · 向下拖动刹车 · 右侧按钮：加速 / 起跳（按住蓄力）/ 倒回`,"hint.start.touch":`按住屏幕{side}开始滑行`,"side.left":`左侧`,"side.right":`右侧`,"speed.boost.touch":`加速`,"map.hint.touch":`点击放大`,"mode.freeSub.touch":`自由探索 · 点小地图放大`,"rotate.hint":`横屏体验更好 · 竖屏也能玩`,"set.title":`设置`,"set.section.touch":`触控与舒适度`,"set.section.display":`画面`,"set.section.general":`通用`,"set.touch":`触屏控件`,"set.auto":`自动`,"set.layout":`控件布局`,"set.layout.left":`左手转向`,"set.layout.right":`右手转向`,"set.size":`控件大小`,"set.sens":`转向灵敏度`,"set.quality":`画质`,"set.q.low":`低`,"set.q.medium":`中`,"set.q.high":`高`,"set.qNote":`树木密度和抗锯齿在刷新页面后生效`,"set.pr":`像素比上限`,"set.dynres":`自适应分辨率`,"set.dash":`详细仪表`,"set.reduceMotion":`减少镜头动态`,"set.fullscreen":`全屏`,"toast.reload":`画质已切换 · 树木密度 / 抗锯齿刷新后生效`,"rider.loading":`人物模型加载中`,"toast.riderFallback":`人物模型加载失败，已换回简易人偶`,"load.tapStart":`开始滑雪`,"load.iosTip":`提示：Safari 分享 → 添加到主屏幕，可全屏游玩`,"load.noWebgl":`这个浏览器不支持 WebGL2，无法运行（iPhone 需 iOS 15 及以上）`,"lift.unnamed.gondola":`吊厢缆车`,"lift.unnamed.chair":`吊椅缆车`,"lift.near":`按 E 上缆车 · {name}`,"lift.near.touch":`点这里上缆车 · {name}`,"lift.wait":`等待缆车 · {s} 秒 · E 取消`,"lift.wait.touch":`等待缆车 · {s} 秒 · 点这里取消`,"lift.ride":`{name} · {pct}% · 按住 Shift 快进 · E 直接到顶`,"lift.ride.touch":`{name} · {pct}% · 按住加速快进 · 点这里直接到顶`,"lift.label":`缆车`,"toast.lift.queue":`已排队 · {name} · 约 {s} 秒后上车`,"toast.lift.board":`已上车 · {name}`,"toast.lift.top":`到顶了 · 按住 W 出发`,"toast.lift.cancel":`已取消排队`,"toast.lift.left":`离开了上车点 · 已取消排队`,"toast.lift.fast":`先停下来再上缆车`,"toast.lift.far":`附近没有缆车上车点`,"toast.lift.noRewind":`坐缆车时不能倒回`,"stats.title":`滑行数据`,"stats.run":`本趟`,"stats.lastRun":`上一趟`,"stats.waiting":`从静止起滑开始计一趟`,"stats.time":`用时`,"stats.dist":`距离`,"stats.dist3":`3D 距离`,"stats.drop":`落差`,"stats.vMax":`最高速`,"stats.vAvg":`平均速`,"stats.offPiste":`雪道外`,"stats.quality":`转弯质量`,"stats.turns":`弯数`,"stats.rhythm":`节奏`,"stats.rhythmUnit":`弯/分`,"stats.steady":`稳定度`,"stats.steady.good":`均匀`,"stats.steady.ok":`一般`,"stats.steady.bad":`不均`,"stats.edgeAvg":`平均立刃`,"stats.edgeMax":`最大立刃`,"stats.gMax":`最大 G`,"stats.radius":`转弯半径`,"stats.straight":`直线`,"stats.flatWarn":`换刃横板`,"stats.crashes":`摔倒`,"stats.times":`{n} 次`,"stats.turnsN":`{n} 弯`,"stats.symmetry":`对称`,"stats.today":`今日`,"stats.runs":`趟数`,"stats.totalDist":`总距离`,"stats.totalDrop":`总落差`,"stats.dayVMax":`最高速`,"stats.noPiste":`雪道外`,"stats.toggle":`数据`,"stats.rewound":`倒回 {n} 次`,"summary.title":`本趟总结`,"summary.again":`再来一趟（回到起点）`,"summary.continue":`继续`,"summary.reason.stop":`停下休息`,"summary.reason.bottom":`到达雪道终点`,"summary.reason.lift":`上缆车`,"summary.reason.reset":`重新开始`,"summary.toeHeel":`前刃 / 后刃`,"summary.carve":`刻滑占比`,"toast.again":`回到本趟起点`,"review.fewTurns":`这趟只有 {n} 个弯，多做几个连续弯才看得出节奏`,"review.carve":`刻滑占比 {p}%`,"review.flat":`换刃时板横着 {n} 次，换刃前先让板头回到下山方向`,"review.skid":`搓雪弯占 {p}%，试着减小侧滑、用刃去切雪`,"review.heelWeak":`后刃弯立刃偏小（{a}° vs {b}°），可以多压后刃`,"review.toeWeak":`前刃弯立刃偏小（{a}° vs {b}°），可以多压前刃`,"review.heelFew":`后刃弯明显偏少（{a} vs {b}），两侧弯要均衡`,"review.toeFew":`前刃弯明显偏少（{a} vs {b}），两侧弯要均衡`,"review.rhythm":`弯与弯的间隔不太均匀，试着保持固定节奏`,"review.lowEdge":`平均立刃只有 {a}°，可以再大胆压刃`,"review.offPiste":`{p}% 的时间在雪道外，注意留在雪道内`,"review.great":`节奏和立刃都不错，保持住`,"review.keep":`继续练连续刻滑，让板去切雪而不是搓雪`},en:{"app.title":`HeyGo Slopes`,"mode.free":`Free ride`,"mode.freeSub":`Explore freely · M for resort map`,"btn.camera":`Camera`,"btn.map":`Map`,"btn.menu":`Menu`,"map.north":`North up`,"map.hint":`Map M`,"info.alt":`Alt`,"info.slope":`Slope`,"info.offPiste":`Off piste`,"unit.kmh":`km/h`,"unit.mph":`mph`,"unit.m":`m`,"unit.ft":`ft`,"speed.boost":`Boost Shift`,"label.stop":`Stopped`,"label.skid":`Skidding`,"label.flat":`Flat base`,"label.carve":`Carving`,"label.edge":`On edge`,"label.air":`Air`,"label.crash":`Crash`,"dash.edge":`Edge`,"dash.slip":`Slip`,"dash.load":`Load`,"dash.heel":`Heel`,"dash.toe":`Toe`,"turns.title":`Recent turns`,"turns.empty":`No turns yet`,"turn.carve":`Carved`,"turn.edge":`Edged`,"turn.skid":`Skidded`,"turn.toe":`Toe`,"turn.heel":`Heel`,"turn.detail":`{side} · edge {edge}° · slip {slip}°`,"keys.go":`go`,"keys.brake":`brake`,"keys.turn":`turn`,"keys.boost":`boost`,"keys.rewind":`rewind`,"keys.camera":`camera`,"hint.start":`Hold W / ↑ to ride`,"toast.rewind":`Rewound 3 s`,"toast.foot.off":`Board off — walking (W walk · Shift run · F board on)`,"toast.foot.on":`Board on`,"toast.foot.fast":`Stop first to step off the board`,"toast.rewindEmpty":`Nothing to rewind`,"toast.camera.near":`Camera: chase`,"toast.camera.far":`Camera: high`,"toast.flat-transition":`Board still sideways through the edge change · in a race this catches an edge`,"toast.catch-risk":`Edge-catch risk · too much edge for this speed`,"toast.fallback":`Resort {want} not found, loaded the test hill`,"toast.units":`Units: {u}`,"toast.lines":`Piste centre lines: {on}`,on:`on`,off:`off`,"menu.title":`Paused`,"menu.resume":`Resume`,"menu.units":`Units`,"menu.lang":`Language / 语言`,"menu.metric":`Metric km/h · m`,"menu.imperial":`Imperial mph · ft`,"menu.lines":`Show piste centre lines (debug)`,"load.title":`Loading resort`,"load.bytes":`Loaded {a} / {b} MB`,"load.stage.data":`Resort data`,"load.stage.mesh":`Terrain mesh`,"load.stage.trees":`Forest`,"load.stage.lifts":`Lifts and buildings`,"load.stage.rider":`Board and rider`,"load.stage.ready":`Ready`,"load.error":`Failed to load: {msg}`,"load.retry":`Try again`,"region.china-hebei":`China · Hebei`,"difficulty.easy":`Easy`,"difficulty.intermediate":`Intermediate`,"difficulty.advanced":`Advanced`,"touch.hold":`Hold here to ride`,"touch.drag":`Drag left / right to turn · down to brake`,"touch.boost":`Boost`,"touch.jump":`Jump`,"touch.rewind":`Rewind`,"touch.keys":`Hold the {side} side to ride · drag sideways to turn · drag down to brake · buttons: boost / jump (hold to charge) / rewind`,"hint.start.touch":`Hold the {side} side of the screen to ride`,"side.left":`left`,"side.right":`right`,"speed.boost.touch":`Boost`,"map.hint.touch":`Tap to enlarge`,"mode.freeSub.touch":`Explore freely · tap the minimap`,"rotate.hint":`Best in landscape · portrait works too`,"set.title":`Settings`,"set.section.touch":`Touch & comfort`,"set.section.display":`Display`,"set.section.general":`General`,"set.touch":`Touch controls`,"set.auto":`Auto`,"set.layout":`Layout`,"set.layout.left":`Steer left hand`,"set.layout.right":`Steer right hand`,"set.size":`Control size`,"set.sens":`Steering sensitivity`,"set.quality":`Quality`,"set.q.low":`Low`,"set.q.medium":`Medium`,"set.q.high":`High`,"set.qNote":`Tree density and anti-aliasing apply after a reload`,"set.pr":`Pixel ratio cap`,"set.dynres":`Adaptive resolution`,"set.dash":`Detailed gauges`,"set.reduceMotion":`Reduce camera motion`,"set.fullscreen":`Fullscreen`,"toast.reload":`Quality changed · tree density / anti-aliasing apply after reload`,"rider.loading":`Loading rider model`,"toast.riderFallback":`Rider model failed to load · using the simple rider`,"load.tapStart":`Start riding`,"load.iosTip":`Tip: Safari Share → Add to Home Screen for fullscreen`,"load.noWebgl":`This browser has no WebGL2 (iPhone needs iOS 15+)`,"lift.unnamed.gondola":`Gondola`,"lift.unnamed.chair":`Chairlift`,"lift.near":`Press E to ride · {name}`,"lift.near.touch":`Tap here to ride · {name}`,"lift.wait":`Waiting for the lift · {s} s · E to cancel`,"lift.wait.touch":`Waiting for the lift · {s} s · tap to cancel`,"lift.ride":`{name} · {pct}% · hold Shift to speed up · E to skip to the top`,"lift.ride.touch":`{name} · {pct}% · hold boost to speed up · tap to skip to the top`,"lift.label":`Lift`,"toast.lift.queue":`In line · {name} · boarding in ~{s} s`,"toast.lift.board":`On the lift · {name}`,"toast.lift.top":`At the top · hold W to go`,"toast.lift.cancel":`Left the line`,"toast.lift.left":`Walked away from the lift · left the line`,"toast.lift.fast":`Stop first to get on the lift`,"toast.lift.far":`No lift boarding point nearby`,"toast.lift.noRewind":`Rewind is off while riding a lift`,"stats.title":`Ride stats`,"stats.run":`This run`,"stats.lastRun":`Last run`,"stats.waiting":`A run starts when you set off from a stop`,"stats.time":`Time`,"stats.dist":`Distance`,"stats.dist3":`3D distance`,"stats.drop":`Vertical`,"stats.vMax":`Top speed`,"stats.vAvg":`Avg speed`,"stats.offPiste":`Off piste`,"stats.quality":`Turn quality`,"stats.turns":`Turns`,"stats.rhythm":`Rhythm`,"stats.rhythmUnit":`turns/min`,"stats.steady":`Consistency`,"stats.steady.good":`even`,"stats.steady.ok":`fair`,"stats.steady.bad":`uneven`,"stats.edgeAvg":`Avg edge`,"stats.edgeMax":`Max edge`,"stats.gMax":`Max G`,"stats.radius":`Turn radius`,"stats.straight":`straight`,"stats.flatWarn":`Flat edge changes`,"stats.crashes":`Falls`,"stats.times":`{n}×`,"stats.turnsN":`{n} turns`,"stats.symmetry":`Symmetry`,"stats.today":`Today`,"stats.runs":`Runs`,"stats.totalDist":`Distance`,"stats.totalDrop":`Vertical`,"stats.dayVMax":`Top speed`,"stats.noPiste":`Off piste`,"stats.toggle":`Stats`,"stats.rewound":`rewound {n}×`,"summary.title":`Run summary`,"summary.again":`Ride again (back to start)`,"summary.continue":`Continue`,"summary.reason.stop":`Stopped`,"summary.reason.bottom":`Reached the end of the piste`,"summary.reason.lift":`Took a lift`,"summary.reason.reset":`Restarted`,"summary.toeHeel":`Toe / heel`,"summary.carve":`Carving`,"toast.again":`Back to the start of the run`,"review.fewTurns":`Only {n} turns this run — link more turns to see your rhythm`,"review.carve":`Carving {p}%`,"review.flat":`board still sideways at {n} edge changes — point the nose downhill before switching edges`,"review.skid":`{p}% skidded turns — less sideslip, let the edge cut`,"review.heelWeak":`heelside turns lack edge ({a}° vs {b}°) — press the heel edge harder`,"review.toeWeak":`toeside turns lack edge ({a}° vs {b}°) — press the toe edge harder`,"review.heelFew":`far fewer heelside turns ({a} vs {b}) — balance both sides`,"review.toeFew":`far fewer toeside turns ({a} vs {b}) — balance both sides`,"review.rhythm":`uneven spacing between turns — keep a steady rhythm`,"review.lowEdge":`average edge only {a}° — tip the board more`,"review.offPiste":`{p}% of the time off piste — stay on the run`,"review.great":`good rhythm and edge angles, keep it up`,"review.keep":`keep linking carved turns, cut instead of skid`}},ag=og();function og(){try{let e=new URLSearchParams(globalThis.location?.search??``).get(`lang`);if(e)return e.startsWith(`en`)?`en`:`zh`;let t=globalThis.localStorage?.getItem(`hs.lang`);return t===`en`||t===`zh`?t:`zh`}catch{return`zh`}}var sg=()=>ag;function cg(e){ag=e;try{localStorage.setItem(`hs.lang`,e)}catch{}}function $(e,t){let n=ig[ag][e]??ig.zh[e]??e;if(t)for(let[e,r]of Object.entries(t))n=n.split(`{${e}}`).join(String(r));return n}var lg=class{constructor(e,t=184){Q(this,`data`,void 0),Q(this,`canvas`,void 0),Q(this,`base`,void 0),Q(this,`ppm`,void 0),Q(this,`x0`,void 0),Q(this,`z0`,void 0),Q(this,`ctx`,void 0),Q(this,`radiusM`,260),Q(this,`scaleLabel`,``),Q(this,`lastScaleM`,0),this.data=e,this.canvas=document.createElement(`canvas`),this.canvas.className=`minimap-canvas`,this.ctx=this.canvas.getContext(`2d`),this.setSize(t);let n=e.meta.grid,r=(n.nx-1)*n.dx,i=(n.nz-1)*n.dx;this.ppm=Math.min(.6,2400/Math.max(r,i)),this.x0=n.x0,this.z0=n.z0,this.base=this.renderBase()}setSize(e){let t=Math.min(2,globalThis.devicePixelRatio||1);this.canvas.width=Math.round(e*t),this.canvas.height=Math.round(e*t),this.canvas.style.width=this.canvas.style.height=`${e}px`}renderBase(){let e=this.data,t=e.meta.grid,n=Math.ceil((t.nx-1)*t.dx*this.ppm),r=Math.ceil((t.nz-1)*t.dx*this.ppm),i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`),o=a.createImageData(n,r),s=(n,r)=>e.height[Math.min(t.nz-1,Math.max(0,r))*t.nx+Math.min(t.nx-1,Math.max(0,n))],c=[-.55,.65,-.52],l=Math.hypot(c[0],c[1],c[2]);for(let e=0;e<r;e++){let r=Math.round(e/this.ppm/t.dx);for(let i=0;i<n;i++){let a=Math.round(i/this.ppm/t.dx),u=(s(a+1,r)-s(a-1,r))/(2*t.dx),d=(s(a,r+1)-s(a,r-1))/(2*t.dx),f=Math.hypot(u,1,d),p=.72+.32*Math.max(0,(-u*c[0]+c[1]-d*c[2])/(f*l)),m=(e*n+i)*4;o.data[m]=Math.min(255,214*p),o.data[m+1]=Math.min(255,228*p),o.data[m+2]=Math.min(255,222*p),o.data[m+3]=255}}a.putImageData(o,0,0),a.fillStyle=`rgba(70,110,90,0.22)`;let u=e.trees,d=Math.max(1,3.2*this.ppm);for(let e=0;e<u.length;e+=4)a.fillRect((u[e]-this.x0)*this.ppm-d/2,(u[e+1]-this.z0)*this.ppm-d/2,d,d);a.lineCap=`round`,a.lineJoin=`round`;let f=e=>{a.beginPath(),e.forEach((e,t)=>{let n=(e[0]-this.x0)*this.ppm,r=(e[1]-this.z0)*this.ppm;t?a.lineTo(n,r):a.moveTo(n,r)})};for(let t of e.map.pistes)f(t.pts),a.strokeStyle=`rgba(255,255,255,0.85)`,a.lineWidth=Math.max(3,t.width*this.ppm),a.stroke();for(let t of e.map.pistes)f(t.pts),a.strokeStyle=Bm(t.difficulty),a.lineWidth=Math.max(1.6,t.width*this.ppm*.22),a.stroke();for(let t of e.map.lifts){f(t.pts),a.strokeStyle=`#3a3f47`,a.lineWidth=1.4,a.setLineDash([4,3]),a.stroke(),a.setLineDash([]);for(let e of[t.pts[0],t.pts[t.pts.length-1]])a.fillStyle=`#3a3f47`,a.beginPath(),a.arc((e[0]-this.x0)*this.ppm,(e[1]-this.z0)*this.ppm,2.4,0,Math.PI*2),a.fill()}a.font=`600 10px system-ui, sans-serif`,a.textAlign=`center`,a.textBaseline=`middle`;for(let t of e.map.pistes){let e=t.ref||(t.name||``).split(` `)[0];if(!e)continue;let n=t.pts[Math.floor(t.pts.length*.12)],r=(n[0]-this.x0)*this.ppm,i=(n[1]-this.z0)*this.ppm,o=a.measureText(e).width+6;a.fillStyle=`rgba(255,255,255,0.92)`,a.fillRect(r-o/2,i-7,o,14),a.strokeStyle=`rgba(0,0,0,0.25)`,a.lineWidth=1,a.strokeRect(r-o/2,i-7,o,14),a.fillStyle=`#1d2228`,a.fillText(e,r,i+.5)}return i}draw(e){let t=this.canvas,n=this.ctx,r=t.width,i=r/2,a=i/this.radiusM/this.ppm;n.clearRect(0,0,r,r),n.save(),n.beginPath(),n.arc(i,i,i-1,0,Math.PI*2),n.clip(),n.fillStyle=`#cfdad5`,n.fillRect(0,0,r,r),n.translate(i,i),n.scale(a,a),n.translate(-(e.x-this.x0)*this.ppm,-(e.z-this.z0)*this.ppm),n.imageSmoothingEnabled=!0,n.drawImage(this.base,0,0),n.restore();let o=r/parseFloat(t.style.width||`${r}`);n.save(),n.translate(i,i),n.rotate(Math.atan2(Math.cos(e.heading),Math.sin(e.heading))+Math.PI/2-Math.PI/2),n.scale(o,o),n.beginPath(),n.moveTo(11,0),n.lineTo(-7,-7),n.lineTo(-3,0),n.lineTo(-7,7),n.closePath(),n.fillStyle=`#ffd43b`,n.strokeStyle=`#1c1f24`,n.lineWidth=1.6,n.fill(),n.stroke(),n.restore(),n.save(),n.beginPath(),n.arc(i,i,i-1.5*o,0,Math.PI*2),n.strokeStyle=`rgba(255,255,255,0.75)`,n.lineWidth=2*o,n.stroke(),n.fillStyle=`rgba(16,24,32,0.78)`,n.beginPath(),n.arc(i,13*o,9*o,0,Math.PI*2),n.fill(),n.fillStyle=`#fff`,n.font=`700 ${11*o}px system-ui, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`N`,i,13.5*o);let s=[25,50,100,200,250,500,1e3,2e3].find(e=>e>=this.radiusM*.3)??1e3,c=s/this.radiusM*i;n.strokeStyle=`rgba(20,26,32,0.8)`,n.lineWidth=2*o,n.beginPath(),n.moveTo(i-c/2,r-22*o),n.lineTo(i+c/2,r-22*o),n.stroke(),n.fillStyle=`rgba(20,26,32,0.85)`,n.font=`600 ${9*o}px system-ui, sans-serif`,n.fillText(this.scaleLabel||`${s} m`,i,r-13*o),n.restore(),this.lastScaleM=s}},ug=`hs.settings.v1`,dg=[.8,1,1.2],fg=[1,1.25,1.5,2],pg=[.7,1.3],mg={steerHand:`left`,controlSize:1,sensitivity:1,quality:`auto`,pixelRatioCap:1.5,dynamicRes:!0,detailedDash:null,reduceMotion:!1,touchUi:`auto`},hg=(e,t,n)=>t.includes(e)?e:n;function gg(e){let t=e&&typeof e==`object`?e:{},n=mg,r=typeof t.sensitivity==`number`&&Number.isFinite(t.sensitivity)?Math.round(Math.min(pg[1],Math.max(pg[0],t.sensitivity))*100)/100:n.sensitivity;return{steerHand:hg(t.steerHand,[`left`,`right`],n.steerHand),controlSize:hg(t.controlSize,dg,n.controlSize),sensitivity:r,quality:hg(t.quality,[`auto`,`low`,`medium`,`high`],n.quality),pixelRatioCap:hg(t.pixelRatioCap,fg,n.pixelRatioCap),dynamicRes:typeof t.dynamicRes==`boolean`?t.dynamicRes:n.dynamicRes,detailedDash:typeof t.detailedDash==`boolean`?t.detailedDash:null,reduceMotion:typeof t.reduceMotion==`boolean`?t.reduceMotion:n.reduceMotion,touchUi:hg(t.touchUi,[`auto`,`on`,`off`],n.touchUi)}}var _g=()=>{try{return globalThis.localStorage??null}catch{return null}};function vg(e=_g()){if(!e)return{...mg};try{let t=e.getItem(ug);return gg(t?JSON.parse(t):null)}catch{return{...mg}}}function yg(e,t=_g()){try{t?.setItem(ug,JSON.stringify(gg(e)))}catch{}}var bg=class{constructor(e=_g()){Q(this,`storage`,void 0),Q(this,`subs`,new Set),Q(this,`value`,void 0),this.storage=e,this.value=vg(e)}get(e){return this.value[e]}set(e){let t=gg({...this.value,...e}),n=Object.keys(t).filter(e=>t[e]!==this.value[e]);if(n.length){this.value=t,yg(t,this.storage);for(let e of this.subs)e(t,n)}}on(e){return this.subs.add(e),()=>this.subs.delete(e)}},xg=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function Sg(e,t){let n=document.createElement(`div`);n.className=`pm-settings`;let r=e=>`<div class="pm-row"><span>${xg($(e.label))}</span>${e.options.map(t=>`<button class="pm-chip" data-k="${e.key}" data-v="${xg(JSON.stringify(t.v))}">${xg(t.label)}</button>`).join(``)}</div>`,i=(e,t)=>`<label class="pm-row check"><input type="checkbox" data-k="${e}"> ${xg($(t))}</label>`,a=e=>`${Math.round(e*100)}%`;n.innerHTML=`${t.touchCapable?`
    <div class="pm-section">${xg($(`set.section.touch`))}</div>
    ${r({key:`touchUi`,label:`set.touch`,options:[{v:`auto`,label:$(`set.auto`)},{v:`on`,label:$(`on`)},{v:`off`,label:$(`off`)}]})}
    ${r({key:`steerHand`,label:`set.layout`,options:[{v:`left`,label:$(`set.layout.left`)},{v:`right`,label:$(`set.layout.right`)}]})}
    ${r({key:`controlSize`,label:`set.size`,options:dg.map(e=>({v:e,label:a(e)}))})}
    <div class="pm-row"><span>${xg($(`set.sens`))} <b class="sens-val"></b></span>
      <input class="pm-range" type="range" data-k="sensitivity" min="${pg[0]}" max="${pg[1]}" step="0.05"></div>
    ${i(`reduceMotion`,`set.reduceMotion`)}`:`
    <div class="pm-section">${xg($(`set.section.touch`))}</div>
    ${i(`reduceMotion`,`set.reduceMotion`)}`}
    <div class="pm-section">${xg($(`set.section.display`))}</div>
    ${r({key:`quality`,label:`set.quality`,options:[`auto`,`low`,`medium`,`high`].map(e=>({v:e,label:$(e===`auto`?`set.auto`:`set.q.${e}`)}))})}
    <div class="pm-note">${xg($(`set.qNote`))}</div>
    ${r({key:`pixelRatioCap`,label:`set.pr`,options:fg.map(e=>({v:e,label:`${e}×`}))})}
    ${i(`dynamicRes`,`set.dynres`)}
    ${i(`detailedDash`,`set.dash`)}
    ${t.onFullscreen?`<button class="pm-btn" data-a="fullscreen">${xg($(`set.fullscreen`))}</button>`:``}`,n.addEventListener(`click`,n=>{let r=n.target.closest(`[data-k],[data-a]`);if(!r)return;if(r.dataset.a===`fullscreen`){t.onFullscreen?.();return}let i=r.dataset.k;r instanceof HTMLInputElement&&r.type===`checkbox`?e.set({[i]:r.checked}):r.dataset.v!==void 0&&e.set({[i]:JSON.parse(r.dataset.v)})}),n.addEventListener(`input`,t=>{let n=t.target;n.type===`range`&&e.set({[n.dataset.k]:Number(n.value)})});let o=()=>{let r=e.value;n.querySelectorAll(`.pm-chip[data-k]`).forEach(e=>{e.classList.toggle(`on`,JSON.stringify(r[e.dataset.k])===e.dataset.v)}),n.querySelectorAll(`input[type=checkbox][data-k]`).forEach(e=>{let n=e.dataset.k;e.checked=n===`detailedDash`?t.detailedDash():!!r[n]});let i=n.querySelector(`input[type=range][data-k=sensitivity]`);i&&(i.value=String(r.sensitivity));let a=n.querySelector(`.sens-val`);a&&(a.textContent=`${r.sensitivity.toFixed(2)}×`)};o();let s=e.on(o);return Object.assign(n,{dispose:()=>s(),refresh:o}),n}var Cg={START_V:1.5,REST_V:.6,STOP_END_S:10,END_ZONE_M:25,END_MIN_DIST:60,MIN_TIME:10,MIN_DIST:80,OFF_PISTE_M:3,JUNCTION_M:12,BASE_DROP_M:40,LIFT_END_M:70,RADIUS_TAU:.25,LOAD_TAU:.12,RADIUS_MIN_V:3,RADIUS_MAX:150,EDGE_MIN_V:2,RHYTHM_N:8,HISTORY_S:12,HISTORY_RATE:30};function wg(e){let t=0;for(let n=1;n<e.length;n++)t+=Math.hypot(e[n][0]-e[n-1][0],e[n][1]-e[n-1][1]);return t}function Tg(e,t,n){let r=1/0;for(let i=1;i<n.length;i++){let a=n[i-1][0],o=n[i-1][1],s=n[i][0]-a,c=n[i][1]-o,l=s*s+c*c,u=l>0?Math.min(1,Math.max(0,((e-a)*s+(t-o)*c)/l)):0;r=Math.min(r,Math.hypot(e-a-s*u,t-o-c*u))}return n.length===1?Math.hypot(e-n[0][0],t-n[0][1]):r}function Eg(e,t){let n=wg(e)-t;if(n<=0)return[];let r=[e[0]];for(let t=1;t<e.length;t++){let i=Math.hypot(e[t][0]-e[t-1][0],e[t][1]-e[t-1][1]);if(i>=n){let a=i>0?n/i:0;return r.push([e[t-1][0]+(e[t][0]-e[t-1][0])*a,e[t-1][1]+(e[t][1]-e[t-1][1])*a]),r}n-=i,r.push(e[t])}return r}function Dg(e,t=[],n){let r=e.map(e=>e.pts[e.pts.length-1]),i=n?r.map(e=>e?n(e[0],e[1]):1/0):null,a=i?Math.min(...i):-1/0,o=e.map(e=>e.pts.length>=2?Eg(e.pts,Cg.END_ZONE_M*2):[]);return e.map((n,s)=>{let c=wg(n.pts);if(n.pts.length<2)return{len:c,terminal:!1};let[l,u]=r[s];return i&&i[s]<=a+Cg.BASE_DROP_M||t.some(e=>e.pts.length>=2&&[e.pts[0],e.pts[e.pts.length-1]].some(e=>Math.hypot(e[0]-l,e[1]-u)<=Cg.LIFT_END_M))?{len:c,terminal:!0}:{len:c,terminal:!e.some((e,t)=>t!==s&&o[t].length>=2&&Tg(l,u,o[t])<=e.width/2+Cg.JUNCTION_M)}})}function Og(e,t=e.endT===null){let n=e.turns.length,r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;for(let t of e.turns)t.kind===`carve`?r++:t.kind===`edge`?i++:a++,t.side===`toe`?(o++,s+=t.edge):(c++,l+=t.edge),u+=t.edge;let d=o?s/o:0,f=c?l/c:0,{rhythm:p,cv:m}=kg(e.turns);return{id:e.id,reason:e.reason,active:t,startPiste:e.startPiste,lastPiste:e.lastPiste,time:e.time,moving:e.moving,distH:e.distH,dist3:e.dist3,drop:Math.max(0,e.startY-e.y),vMax:e.vMax,vAvg:e.moving>0?e.dist3/e.moving:0,turns:n,carve:r,edge:i,skid:a,carvePct:n?r/n:0,edgePct:n?i/n:0,skidPct:n?a/n:0,toe:{n:o,edge:d},heel:{n:c,edge:f},symmetry:o&&c?Math.min(d,f)/Math.max(d,f,1e-9):null,edgeAvg:n?u/n:0,edgeMax:e.edgeMax,gMax:e.gMax,rhythm:p,rhythmCv:m,offPistePct:e.moving>0?Math.min(1,e.offPiste/e.moving):0,warns:e.warns,crashes:e.crashes,rewinds:e.rewinds,startP:e.startP,startF:e.startF}}function kg(e,t=Cg.RHYTHM_N){let n=e.slice(-t).map(e=>e.t);if(n.length<3)return{rhythm:null,cv:null};let r=n[n.length-1]-n[0],i=r>0?(n.length-1)/r*60:null,a=n.slice(1).map((e,t)=>e-n[t]);if(a.length<3)return{rhythm:i,cv:null};let o=a.reduce((e,t)=>e+t,0)/a.length,s=Math.sqrt(a.reduce((e,t)=>e+(t-o)**2,0)/a.length);return{rhythm:i,cv:o>0?s/o:null}}var Ag=`hs.day.v1`,jg=(e=new Date)=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,Mg=e=>({date:e,runs:0,distH:0,drop:0,vMax:0,time:0}),Ng=class{constructor(e=null,t=jg){Q(this,`store`,void 0),Q(this,`today`,void 0),Q(this,`d`,void 0),Q(this,`undo`,[]),this.store=e,this.today=t,this.d=Mg(t());try{let t=JSON.parse(e?.getItem(`hs.day.v1`)??`null`),n=e=>typeof e==`number`&&Number.isFinite(e)&&e>=0?e:0;t&&t.date===this.d.date&&(this.d={date:t.date,runs:Math.floor(n(t.runs)),distH:n(t.distH),drop:n(t.drop),vMax:n(t.vMax),time:n(t.time)})}catch{}}get(){let e=this.today();return e!==this.d.date&&(this.d=Mg(e),this.undo=[],this.save()),this.d}commit(e,t){let n=this.get();this.undo.push({id:e,prev:{...n}}),this.undo.length>4&&this.undo.shift(),this.d={date:n.date,runs:n.runs+1,distH:n.distH+t.distH,drop:n.drop+t.drop,vMax:Math.max(n.vMax,t.vMax),time:n.time+t.time},this.save()}undoFrom(e){let t=!1;for(;this.undo.length&&this.undo[this.undo.length-1].id>=e;){let e=this.undo.pop();e.prev.date===this.d.date&&(this.d=e.prev,t=!0)}return t&&this.save(),t}save(){try{this.store?.setItem(Ag,JSON.stringify(this.d))}catch{}}},Pg=e=>({startT:e.startT,endT:e.endT,reason:e.reason,startPiste:e.startPiste,lastPiste:e.lastPiste,time:e.time,moving:e.moving,distH:e.distH,dist3:e.dist3,startY:e.startY,y:e.y,vMax:e.vMax,edgeMax:e.edgeMax,gMax:e.gMax,offPiste:e.offPiste,warns:e.warns,crashes:e.crashes,stopT:e.stopT,inEndZone:e.inEndZone,px:e.px,py:e.py,pz:e.pz}),Fg=class{constructor(e=[],t){Q(this,`pistes`,void 0),Q(this,`phase`,`idle`),Q(this,`armed`,!0),Q(this,`run`,null),Q(this,`last`,null),Q(this,`radius`,null),Q(this,`day`,void 0),Q(this,`nextId`,1),Q(this,`restP`,null),Q(this,`vPrev`,null),Q(this,`aLat`,0),Q(this,`gEma`,1),Q(this,`hist`,new Ap(Cg.HISTORY_S,Cg.HISTORY_RATE)),this.pistes=e,this.day=t??new Ng(null)}step(e){let t=[];this.live(e),this.phase===`idle`&&(e.speed<Cg.REST_V?(this.armed=!0,this.restP=[e.p[0],e.p[1],e.p[2]]):this.armed&&e.speed>=Cg.START_V&&t.push(this.start(e)));let n=this.run;if(this.phase===`run`&&n){n.time+=e.dt,e.speed<Cg.REST_V?n.stopT+=e.dt:(n.stopT=0,n.moving+=e.dt);let r=e.p[0]-n.px,i=e.p[1]-n.py,a=e.p[2]-n.pz,o=Math.hypot(r,a);n.distH+=o,n.dist3+=Math.hypot(o,i),n.px=e.p[0],n.py=e.p[1],n.pz=e.p[2],n.y=e.p[1],n.vMax=Math.max(n.vMax,e.speed),e.air||(e.speed>Cg.EDGE_MIN_V&&(n.edgeMax=Math.max(n.edgeMax,Math.abs(e.edgeDeg))),n.gMax=Math.max(n.gMax,this.gEma));for(let t of e.events)t.type===`turn`?n.turns.push({t:e.t,side:t.side,kind:t.kind,edge:t.maxEdgeDeg,slip:Math.abs(t.maxSlipDeg),dur:t.dur,vMax:t.vMax}):t.type===`warn`&&t.code===`flat-transition`?n.warns++:t.type===`crash`&&n.crashes++;let s=e.piste,c=!!s&&s.edgeDist<=Cg.OFF_PISTE_M;e.speed>=Cg.REST_V&&!c&&(n.offPiste+=e.dt);let l=!1;if(c){n.startPiste<0&&(n.startPiste=s.id),n.lastPiste=s.id;let e=this.pistes[s.id];l=!!e?.terminal&&s.s>=e.len-Cg.END_ZONE_M}let u=l&&!n.inEndZone;n.inEndZone=l,u&&n.distH>=Cg.END_MIN_DIST?t.push(this.finish(`bottom`,e.speed)):n.stopT>=Cg.STOP_END_S&&t.push(this.finish(`stop`,e.speed))}return this.snapshot(e.t),t}endRun(e){return this.phase!==`run`||!this.run?(this.armed=!0,[]):[this.finish(e,0)]}reset(){let e=this.endRun(`reset`);return this.hist.clear(),this.vPrev=null,this.aLat=0,this.radius=null,this.gEma=1,this.restP=null,e}rewindTo(e){let t=this.hist.newest;if(t===void 0)return[];let n=t>e?this.hist.rewind(t-e-1e-6)?.v:this.hist.rewind(0)?.v;if(!n)return[];let r=[];this.day.undoFrom(n.run?n.run.id:n.nextId);let i=!!n.run&&n.run.endT!==null;return this.phase=n.phase,this.armed=n.armed,this.last=n.last,this.restP=n.restP,this.run=n.run,this.run&&n.scalars&&(Object.assign(this.run,n.scalars),this.run.turns.length=n.turnsLen,this.run.rewinds++,i&&r.push({type:`resume`,run:this.run})),this.vPrev=null,this.aLat=0,this.radius=null,r}current(){return this.run?Og(this.run,!0):this.last?Og(this.last,!1):null}start(e){let t=Math.hypot(e.v[0],e.v[2])||1,n=this.restP?[...this.restP]:[e.p[0],e.p[1],e.p[2]],r={id:this.nextId++,startP:n,startF:[e.v[0]/t,0,e.v[2]/t],turns:[],rewinds:0,startT:e.t-e.dt,endT:null,reason:null,startPiste:-1,lastPiste:-1,time:0,moving:0,distH:0,dist3:0,startY:n[1],y:e.p[1],vMax:0,edgeMax:0,gMax:1,offPiste:0,warns:0,crashes:0,stopT:0,inEndZone:!1,px:n[0],py:n[1],pz:n[2]};return this.run=r,this.phase=`run`,this.armed=!1,{type:`start`,run:r}}finish(e,t){let n=this.run;e===`stop`&&(n.time=Math.max(0,n.time-n.stopT)),n.endT=n.startT+n.time,n.reason=e;let r=Og(n,!1),i=n.time>=Cg.MIN_TIME&&n.distH>=Cg.MIN_DIST;return i&&(this.last=n,this.day.commit(n.id,r)),this.run=null,this.phase=`idle`,this.armed=t<Cg.REST_V,this.armed&&(this.restP=[n.px,n.py,n.pz]),{type:`end`,run:n,summary:r,reason:e,valid:i}}live(e){let t=1-Math.exp(-e.dt/Cg.LOAD_TAU);this.gEma+=((e.air?1:e.load)-this.gEma)*t;let n=e.v[0],r=e.v[2],i=Math.hypot(n,r);if(this.vPrev&&e.dt>0&&!e.air&&i>.5){let t=(n-this.vPrev[0])/e.dt,a=(n*((r-this.vPrev[1])/e.dt)-r*t)/i;this.aLat+=(a-this.aLat)*(1-Math.exp(-e.dt/Cg.RADIUS_TAU))}else(e.air||i<=.5)&&(this.aLat=0);this.vPrev=[n,r];let a=Math.abs(this.aLat)>1e-6?i*i/Math.abs(this.aLat):1/0;this.radius=i>=Cg.RADIUS_MIN_V&&a<=Cg.RADIUS_MAX?a:null}snapshot(e){this.hist.push(e,{phase:this.phase,armed:this.armed,run:this.run,scalars:this.run?Pg(this.run):null,turnsLen:this.run?.turns.length??0,last:this.last,nextId:this.nextId,restP:this.restP})}};function Ig(e){if(e.turns<4){let t=[{key:`review.fewTurns`,vars:{n:e.turns}}];return e.offPistePct>.3&&t.push({key:`review.offPiste`,vars:{p:Math.round(e.offPistePct*100)}}),t}let t={key:`review.carve`,vars:{p:Math.round(e.carvePct*100)}},n=e=>Math.round(e*100),r,i=e.toe.edge-e.heel.edge;return r=e.warns>=3?{key:`review.flat`,vars:{n:e.warns}}:e.skidPct>=.5?{key:`review.skid`,vars:{p:n(e.skidPct)}}:e.toe.n>=2&&e.heel.n>=2&&Math.abs(i)>=6?{key:i>0?`review.heelWeak`:`review.toeWeak`,vars:{a:Math.round(Math.min(e.toe.edge,e.heel.edge)),b:Math.round(Math.max(e.toe.edge,e.heel.edge))}}:Math.max(e.toe.n,e.heel.n)>=4&&Math.min(e.toe.n,e.heel.n)<.5*Math.max(e.toe.n,e.heel.n)?{key:e.heel.n<e.toe.n?`review.heelFew`:`review.toeFew`,vars:{a:Math.min(e.toe.n,e.heel.n),b:Math.max(e.toe.n,e.heel.n)}}:e.turns>=6&&e.rhythmCv!==null&&e.rhythmCv>.5?{key:`review.rhythm`}:e.edgeAvg<20?{key:`review.lowEdge`,vars:{a:Math.round(e.edgeAvg)}}:e.offPistePct>.3?{key:`review.offPiste`,vars:{p:n(e.offPistePct)}}:{key:e.carvePct>=.6?`review.great`:`review.keep`},[t,r]}var Lg={carve:`#3fd6b8`,edge:`#6aaeff`,skid:`#f2a541`},Rg=3.6,zg=2.236936,Bg=3.28084,Vg=1609.344,Hg=(e,t)=>Math.round(e*(t===`metric`?Rg:zg)),Ug=e=>e===`metric`?`km/h`:`mph`;function Wg(e,t){if(t===`metric`){if(e<1e3)return`${Math.round(e)} m`;let t=e/1e3;return`${t.toFixed(t<10?2:1)} km`}let n=e/Vg;return n<.2?`${Math.round(e*Bg)} ft`:`${n.toFixed(n<10?2:1)} mi`}var Gg=(e,t)=>t===`metric`?`${Math.round(e)} m`:`${Math.round(e*Bg)} ft`;function Kg(e){let t=Math.max(0,Math.floor(e)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=String(i).padStart(2,`0`);return n?`${n}:${String(r).padStart(2,`0`)}:${a}`:`${r}:${a}`}var qg=e=>`${Math.round(Math.max(0,Math.min(1,e))*100)}%`,Jg=e=>`${Math.round(Math.abs(e))}°`,Yg=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Xg=`hs.stats.open`;function Zg(e){let t=e.map(e=>$(e.key,e.vars)).join(sg()===`zh`?`，`:`, `);return t?t.charAt(0).toUpperCase()+t.slice(1)+(sg()===`zh`?`。`:`.`):``}var Qg=e=>e===null?null:e<.25?`stats.steady.good`:e<.5?`stats.steady.ok`:`stats.steady.bad`,$g=(e,t,n=``)=>`<div class="st-c${n?` ${n}`:``}"><span>${Yg(e)}</span><b>${t}</b></div>`,e_=e=>e.replace(/^([-\d.:,]+)\s(.+)$/,`$1<small>$2</small>`);function t_(e){let t=e?.turns??0,n=n=>{let r=t?e[`${n}Pct`]*100:0;return r>0?`<i style="width:${r.toFixed(1)}%;background:${Lg[n]}"></i>`:``},r=n=>`<span><em style="background:${Lg[n]}"></em>${Yg($(`label.${n}`))} <b>${t?qg(e[`${n}Pct`]):`—`}</b></span>`;return`<div class="st-mix"><div class="st-mixbar">${t?n(`carve`)+n(`edge`)+n(`skid`):``}</div><div class="st-leg">${r(`carve`)}${r(`edge`)}${r(`skid`)}</div></div>`}function n_(e){let t=e=>`${Math.min(100,e/60*100).toFixed(1)}%`,n=t=>{let n=e?.[t];return n&&n.n?`${Yg($(`stats.turnsN`,{n:n.n}))} · ${Jg(n.edge)}`:`—`};return`<div class="st-th">
    <div class="st-th-lab"><span>${Yg($(`dash.heel`))} <b>${n(`heel`)}</b></span><span>${Yg($(`dash.toe`))} <b>${n(`toe`)}</b></span></div>
    <div class="st-th-bar"><div class="l"><i style="width:${e?.heel.n?t(e.heel.edge):`0`}"></i></div><div class="r"><i style="width:${e?.toe.n?t(e.toe.edge):`0`}"></i></div></div>
  </div>`}var r_=(e,t)=>e?`<span class="st-piste"><em style="background:${e.color}"></em>${Yg(e.name)}<small>${Yg(e.difficulty)}</small></span>`:`<span class="st-piste off">${Yg(t)}</span>`,i_=class{constructor(e){Q(this,`o`,void 0),Q(this,`el`,void 0),Q(this,`card`,void 0),Q(this,`body`,void 0),Q(this,`headPiste`,void 0),Q(this,`open`,void 0),Q(this,`compact`,!1),Q(this,`compactOpen`,!1),Q(this,`timer`,0),Q(this,`lastHtml`,``),Q(this,`lastHead`,``),Q(this,`shown`,null),Q(this,`view`,null),this.o=e;let t=null;try{t=localStorage.getItem(Xg)}catch{}this.open=t!==`0`,this.el=document.createElement(`div`),this.card=document.createElement(`div`),this.card.className=`summary hidden`,this.card.addEventListener(`click`,e=>{let t=e.target.closest(`[data-a]`)?.getAttribute(`data-a`);if(t===`again`&&this.shown){let e=this.shown;this.hideSummary(),this.o.onAgain(e)}else t===`continue`&&this.hideSummary();e.stopPropagation()}),this.build()}get isOpen(){return this.compact?this.compactOpen:this.open}get summaryVisible(){return!!this.shown}build(){let e=this.el;e.innerHTML=`<button class="stats-head"><span class="st-ico"><i></i><i></i><i></i></span><b class="st-title">${Yg($(`stats.title`))}</b><span class="st-head-piste"></span><kbd>I</kbd><span class="st-chev"></span></button><div class="stats-body"></div>`,e.querySelector(`.stats-head`).addEventListener(`click`,e=>{e.stopPropagation(),this.toggle(),e.currentTarget.blur()}),this.body=e.querySelector(`.stats-body`),this.body.addEventListener(`click`,e=>{this.compact&&(e.stopPropagation(),this.toggle(!1))}),this.headPiste=e.querySelector(`.st-head-piste`),this.lastHtml=this.lastHead=``,this.applyOpen(),this.view&&this.render(this.view()),this.shown&&this.showSummary(this.shown)}setCompact(e){e!==this.compact&&(this.compact=e,this.compactOpen=!1,this.applyOpen())}toggle(e=!this.isOpen){if(this.compact)this.compactOpen=e;else{this.open=e;try{localStorage.setItem(Xg,e?`1`:`0`)}catch{}}this.applyOpen(),e&&this.view&&this.render(this.view()),this.o.onChange?.()}applyOpen(){this.el.className=`stats${this.isOpen?` open`:``}${this.compact?` drawer`:``}`}update(e,t){this.view=t,this.timer-=e,this.timer>0||(this.timer=.25,this.render(t()))}render(e){let t=this.compact?``:r_(e.piste,$(`stats.noPiste`));if(t!==this.lastHead&&(this.headPiste.innerHTML=t,this.lastHead=t),!this.isOpen)return;let n=this.bodyHtml(e);n!==this.lastHtml&&(this.body.innerHTML=n,this.lastHtml=n)}bodyHtml(e){let t=this.o.units(),n=e.cur,r=e=>`${Hg(e,t)}<small>${Ug(t)}</small>`,i=`<section class="st-sec">
      <h4>${Yg(n?n.active?$(`stats.run`):$(`stats.lastRun`):$(`stats.run`))}</h4>${this.compact?`<div class="st-pr">${r_(e.piste,$(`stats.noPiste`))}</div>`:``}
      ${n?``:`<div class="st-wait">${Yg($(`stats.waiting`))}</div>`}
      <div class="st-grid">
        ${$g($(`stats.time`),n?Kg(n.time):`—`)}
        ${$g($(`stats.dist`),n?e_(Wg(n.distH,t)):`—`)}
        ${$g($(`stats.drop`),n?e_(Gg(n.drop,t)):`—`)}
        ${$g($(`stats.vMax`),n?r(n.vMax):`—`)}
        ${$g($(`stats.vAvg`),n?r(n.vAvg):`—`)}
        ${$g($(`stats.offPiste`),n?qg(n.offPistePct):`—`)}
      </div></section>`,a=Qg(n?.rhythmCv??null),o=`<section class="st-sec">
      <h4>${Yg($(`stats.quality`))}</h4>
      ${t_(n)}
      ${n_(n)}
      <div class="st-grid">
        ${$g($(`stats.turns`),n?String(n.turns):`—`)}
        ${$g($(`stats.rhythm`),n?.rhythm==null?`—`:`${Math.round(n.rhythm)}<small>${Yg($(`stats.rhythmUnit`))}</small>`)}
        ${$g($(`stats.steady`),a?Yg($(a)):`—`,a?a.replace(`stats.steady.`,`sd-`):``)}
        ${$g($(`stats.edgeAvg`),n?.turns?Jg(n.edgeAvg):`—`)}
        ${$g($(`stats.edgeMax`),n?Jg(n.edgeMax):`—`)}
        ${$g($(`stats.gMax`),n?`${n.gMax.toFixed(1)}<small>g</small>`:`—`)}
        ${$g($(`stats.radius`),e.radius===null?`<small class="dim">${Yg($(`stats.straight`))}</small>`:e_(Gg(e.radius,t)),`live`)}
        ${$g($(`stats.flatWarn`),n?String(n.warns):`—`,n&&n.warns?`warn`:``)}
        ${$g($(`stats.crashes`),n?String(n.crashes):`—`)}
      </div></section>`,s=e.day,c=`<section class="st-sec">
      <h4>${Yg($(`stats.today`))}</h4>
      <div class="st-grid g4">
        ${$g($(`stats.runs`),String(s.runs))}
        ${$g($(`stats.totalDist`),e_(Wg(s.distH,t)))}
        ${$g($(`stats.totalDrop`),e_(Gg(s.drop,t)))}
        ${$g($(`stats.dayVMax`),s.runs?r(s.vMax):`—`)}
      </div></section>`;return i+o+c}showSummary(e){this.shown=e;let t=this.o.units(),n=this.o.piste(e.startPiste),r=this.o.piste(e.lastPiste),i=n?`${r_(n,``)}${r&&e.lastPiste!==e.startPiste?`<span class="arrow">→</span>${r_(r,``)}`:``}`:r_(r,$(`stats.noPiste`)),a=[$(`summary.reason.${e.reason??`stop`}`)];e.rewinds&&a.push($(`stats.rewound`,{n:e.rewinds}));let o=(e,t)=>`<div><span>${Yg(e)}</span><b>${t}</b></div>`,s=`${Hg(e.vMax,t)}<small>${Ug(t)}</small>`;this.card.innerHTML=`<div class="sm-card">
      <div class="sm-head"><div class="sm-title">${Yg($(`summary.title`))}</div><div class="sm-meta">${Yg(a.join(` · `))}</div></div>
      <div class="sm-piste">${i}</div>
      <div class="sm-big">
        ${o($(`stats.time`),Kg(e.time))}
        ${o($(`stats.dist`),e_(Wg(e.distH,t)))}
        ${o($(`stats.drop`),e_(Gg(e.drop,t)))}
        ${o($(`stats.vMax`),s)}
      </div>
      <div class="sm-q">
        <div class="sm-carve"><span>${Yg($(`summary.carve`))}</span><b>${e.turns?qg(e.carvePct):`—`}</b><small>${Yg($(`stats.turnsN`,{n:e.turns}))}</small></div>
        ${t_(e)}
        ${n_(e)}
      </div>
      <div class="sm-review">${Yg(Zg(Ig(e)))}</div>
      <div class="sm-btns">
        <button class="pm-btn" data-a="again">${Yg($(`summary.again`))}</button>
        <button class="pm-btn primary" data-a="continue">${Yg($(`summary.continue`))} <kbd>Enter</kbd></button>
      </div>
    </div>`,this.card.classList.remove(`hidden`,`out`),this.o.onChange?.()}hideSummary(){this.shown&&(this.shown=null,this.card.classList.add(`hidden`),this.o.onChange?.())}},a_={stop:`#aab4bf`,skid:`#f2a541`,flat:`#d5dde6`,carve:`#3fd6b8`,edge:`#6aaeff`,air:`#c49bff`,crash:`#ff6b5b`},o_=(e,t,n)=>n||Math.min(e,t)<520||e<720,s_=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.innerHTML=n),r},c_=e=>e.replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),l_=e=>_p(e,-70,70)/70*(Math.PI/2),u_=class{constructor(e,t,n,r){Q(this,`data`,void 0),Q(this,`cb`,void 0),Q(this,`o`,void 0),Q(this,`root`,void 0),Q(this,`units`,void 0),Q(this,`el`,{}),Q(this,`minimap`,void 0),Q(this,`turns`,[]),Q(this,`textTimer`,0),Q(this,`mapBig`,!1),Q(this,`paused`,!1),Q(this,`linesOn`,!1),Q(this,`started`,!1),Q(this,`compact`,!1),Q(this,`rotateDismissed`,!1),Q(this,`credit`,null),Q(this,`stats`,void 0),Q(this,`liftKey`,``),Q(this,`recent`,new Map),this.data=t,this.cb=n,this.o=r,this.units=localStorage.getItem(`hs.units`)||`metric`,this.root=s_(`div`,`hud`),e.appendChild(this.root),this.minimap=new lg(t),this.stats=new i_({units:()=>this.units,piste:e=>r.stats?.piste(e)??null,onAgain:e=>r.stats?.onAgain(e)}),this.build(),addEventListener(`resize`,()=>this.layout()),r.settings.on((e,t)=>{t.includes(`detailedDash`)&&this.applyDash()})}get detailedDash(){return this.o.settings.value.detailedDash??!this.compact}applyDash(){this.el.dash?.classList.toggle(`collapsed`,!this.detailedDash)}layout(){let e=this.o.touch(),t=o_(innerWidth,innerHeight,e),n=t!==this.compact;this.compact=t,this.root.classList.toggle(`compact`,t),this.root.classList.toggle(`touch`,e),this.root.classList.toggle(`portrait`,innerHeight>innerWidth),this.root.classList.toggle(`steer-right`,this.o.hand()===`right`),n&&this.applyDash(),this.placeStats(),this.applyMapSize()}setCredit(e){this.credit=e,this.renderCredit()}renderCredit(){let e=this.el.attr?.querySelector(`.attr-credit`);e&&(e.textContent=this.credit??``,e.style.display=this.credit?``:`none`)}rebuild(){let e=this.paused;this.build(),e&&this.toggleMenu(!0)}build(){let e=this.root;e.innerHTML=``;let t=this.o.touch(),n=$(this.o.hand()===`right`?`side.right`:`side.left`),r=s_(`div`,`hud-tl`);r.append(s_(`div`,`mode-title`,c_($(`mode.free`))),s_(`div`,`mode-sub`,c_($(t?`mode.freeSub.touch`:`mode.freeSub`))));let i=s_(`div`,`btn-row`),a=(e,t,n,r=!1)=>{let i=s_(`button`,`hud-btn${r?` primary`:``}`,`${c_(e)} <kbd>${c_(t)}</kbd>`);return i.addEventListener(`click`,e=>{e.stopPropagation(),n(),i.blur()}),i};i.append(a($(`btn.camera`),`C`,()=>this.cb.onCamera(),!0),a($(`btn.map`),`M`,()=>this.toggleMap()),a($(`btn.menu`),`Esc`,()=>this.toggleMenu())),r.append(i);let o=this.data.meta,s=s_(`div`,`hud-tc`),c=`region.${o.region}`,l=c in ig.zh?$(c):sg()===`en`?o.regionEn??o.region??``:o.region??``,u=sg()===`en`?o.nameEn??o.name:o.name;s.append(s_(`div`,`resort-region`,c_(l)),s_(`div`,`resort-name`,c_(u)));let d=s_(`div`,`hud-tr`),f=s_(`div`,`minimap`);f.append(this.minimap.canvas),f.addEventListener(`click`,()=>this.toggleMap());let p=s_(`div`,`minimap-foot`,`<span>${c_($(`map.north`))}</span><span>${c_($(t?`map.hint.touch`:`map.hint`))}</span>`),m=s_(`div`,`info-line`);d.append(f,p,m),this.el.info=m,this.el.mapWrap=f;let h=s_(`div`,`hud-br speedo`);h.innerHTML=`
      <svg viewBox="0 0 200 120" class="speedo-arc"><path d="M20 105 A85 85 0 0 1 180 105" class="arc-bg"/><path d="M20 105 A85 85 0 0 1 180 105" class="arc-fg"/></svg>
      <div class="speedo-num">0</div><div class="speedo-unit"></div>
      <div class="boost-bar"><i></i></div><div class="boost-label">${c_($(t?`speed.boost.touch`:`speed.boost`))}</div>`,h.title=`km/h ⇄ mph`,h.addEventListener(`click`,()=>{this.o.touch()||this.setUnits(this.units===`metric`?`imperial`:`metric`)}),this.el.speedNum=h.querySelector(`.speedo-num`),this.el.speedUnit=h.querySelector(`.speedo-unit`),this.el.speedArc=h.querySelector(`.arc-fg`),this.el.boost=h.querySelector(`.boost-bar i`);let g=s_(`div`,`hud-bc dash`);g.innerHTML=`
      <div class="dash-label">—</div>
      <div class="dash-gauge">
        <svg viewBox="0 0 200 118">
          <path d="M22 100 A78 78 0 0 1 178 100" class="g-bg"/>
          <path d="M22 100 A78 78 0 0 1 44.8 44.8" class="g-heel"/>
          <path d="M155.2 44.8 A78 78 0 0 1 178 100" class="g-toe"/>
          <line x1="100" y1="100" x2="100" y2="34" class="g-needle"/>
          <circle cx="100" cy="100" r="5" class="g-hub"/>
        </svg>
        <div class="g-lab l">${c_($(`dash.heel`))}</div><div class="g-lab r">${c_($(`dash.toe`))}</div>
      </div>
      <div class="dash-vals">
        <div><span>${c_($(`dash.edge`))}</span><b class="v-edge">0°</b></div>
        <div><span>${c_($(`dash.slip`))}</span><b class="v-slip">0°</b></div>
        <div class="slip-bar"><i></i></div>
        <div><span>${c_($(`dash.load`))}</span><b class="v-load">1.0 g</b></div>
      </div>`,this.el.label=g.querySelector(`.dash-label`),this.el.needle=g.querySelector(`.g-needle`),this.el.vEdge=g.querySelector(`.v-edge`),this.el.vSlip=g.querySelector(`.v-slip`),this.el.vLoad=g.querySelector(`.v-load`),this.el.slipBar=g.querySelector(`.slip-bar i`),this.el.dash=g,g.addEventListener(`click`,()=>this.o.settings.set({detailedDash:!this.detailedDash}));let _=s_(`div`,`hud-bl`),v=s_(`div`,`panel turns`,`<div class="panel-title">${c_($(`turns.title`))}<b class="turns-n"></b></div><ul></ul>`);this.el.turnList=v.querySelector(`ul`),this.el.turnsN=v.querySelector(`.turns-n`),v.querySelector(`.panel-title`).addEventListener(`click`,()=>v.classList.toggle(`open`));let y=e=>`<kbd>${e}</kbd>`,b=t?s_(`div`,`panel keys touch-keys`,c_($(`touch.keys`,{side:n}))):s_(`div`,`panel keys`,`
      <div>${y(`W / ↑`)} ${c_($(`keys.go`))} · ${y(`S / ↓`)} ${c_($(`keys.brake`))} · ${y(`A D / ← →`)} ${c_($(`keys.turn`))}</div>
      <div>${y(`Shift`)} ${c_($(`keys.boost`))} · ${y(`R`)} ${c_($(`keys.rewind`))} · ${y(`C`)} ${c_($(`keys.camera`))}</div>`);_.append(v,b);let x=s_(`div`,`lift-prompt hidden`);x.addEventListener(`click`,e=>{e.stopPropagation(),this.cb.onUse?.()}),this.el.lift=x,this.liftKey=``;let S=s_(`div`,`toasts`);this.el.toasts=S;let C=s_(`div`,`start-hint`,c_(t?$(`hint.start.touch`,{side:n}):$(`hint.start`)));this.el.hint=C,this.started&&C.classList.add(`hide`);let w=s_(`div`,`pause-menu hidden`);w.innerHTML=`<div class="pm-card">
      <div class="pm-title">${c_($(`menu.title`))}</div>
      <button class="pm-btn primary" data-a="resume">${c_($(`menu.resume`))}</button>
      <div class="pm-pair"><div class="pm-row"><span>${c_($(`menu.units`))}</span>
        <button class="pm-chip" data-a="metric">${c_($(`menu.metric`))}</button>
        <button class="pm-chip" data-a="imperial">${c_($(`menu.imperial`))}</button></div>
      <div class="pm-row"><span>${c_($(`menu.lang`))}</span>
        <button class="pm-chip" data-a="zh">中文</button><button class="pm-chip" data-a="en">English</button></div></div>
      <div class="pm-settings-slot"></div>
      <label class="pm-row check"><input type="checkbox" data-a="lines"> ${c_($(`menu.lines`))}</label>
    </div>`,this.el.settingsPanel?.dispose?.();let T=Sg(this.o.settings,{touchCapable:this.o.touchCapable,detailedDash:()=>this.detailedDash,onFullscreen:this.o.onFullscreen});w.querySelector(`.pm-settings-slot`).replaceWith(T),this.el.settingsPanel=T,w.addEventListener(`click`,e=>{let t=e.target.closest(`[data-a]`)?.getAttribute(`data-a`);t?(t===`resume`&&this.toggleMenu(!1),(t===`metric`||t===`imperial`)&&this.setUnits(t),(t===`zh`||t===`en`)&&(cg(t),this.cb.onLang(t),this.rebuild()),t===`lines`&&this.setLines(e.target.checked)):e.target===w&&this.toggleMenu(!1)}),this.el.menu=w;let E=s_(`div`,`attribution`,`<span>${c_(this.data.meta.attribution??``)}</span><span class="attr-credit"></span>`);this.el.attr=E,this.renderCredit();let D=s_(`div`,`rotate-hint`,`<svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M3 14a9 9 0 0 0 6 6M21 10a9 9 0 0 0-6-6"/></svg>${c_($(`rotate.hint`))}`);this.rotateDismissed&&D.classList.add(`hide`),D.addEventListener(`click`,()=>{this.rotateDismissed=!0,D.classList.add(`hide`)}),setTimeout(()=>{this.rotateDismissed=!0,D.classList.add(`hide`)},7e3),this.el.bl=_,this.stats.build(),e.append(r,s,d,h,g,_,this.stats.el,x,S,C,D,this.stats.card,w,E),this.compact=!o_(innerWidth,innerHeight,t),this.renderTurns(),this.refreshMenu(),this.layout()}placeStats(){let e=this.el.bl;e&&(this.stats.setCompact(this.compact),this.compact&&this.stats.el.parentElement!==e?e.insertBefore(this.stats.el,e.querySelector(`.keys`)):!this.compact&&this.stats.el.parentElement!==this.root&&this.root.insertBefore(this.stats.el,this.el.lift))}refreshMenu(){let e=this.el.menu;e.querySelectorAll(`.pm-chip[data-a]`).forEach(e=>{let t=e.getAttribute(`data-a`);e.classList.toggle(`on`,t===this.units||t===sg())});let t=e.querySelector(`input[data-a=lines]`);t&&(t.checked=this.linesOn),this.el.settingsPanel?.refresh?.(),e.classList.toggle(`hidden`,!this.paused)}setUnits(e){this.units=e,localStorage.setItem(`hs.units`,e),this.cb.onUnits(e),this.refreshMenu(),this.toast($(`toast.units`,{u:e===`metric`?`km/h · m`:`mph · ft`}))}setLines(e){this.linesOn=e,this.cb.onLines(e),this.refreshMenu()}toggleLines(){this.setLines(!this.linesOn),this.toast($(`toast.lines`,{on:$(this.linesOn?`on`:`off`)}))}toggleMenu(e=!this.paused){this.paused=e,this.refreshMenu(),this.cb.onMenu(e)}get isPaused(){return this.paused}toggleMap(){this.mapBig=!this.mapBig,this.applyMapSize(),this.cb.onMap()}applyMapSize(){this.el.mapWrap.classList.toggle(`big`,this.mapBig),this.minimap.setSize(this.mapBig?Math.round(Math.min(560,innerHeight*.7,innerWidth*.86)):this.compact?Math.min(innerWidth,innerHeight)<420?96:112:184),this.minimap.radiusM=this.mapBig?1100:260}setLift(e){let t=this.el.lift;if(!t)return;let n=this.o.touch(),r=``;e?.kind===`near`?r=$(n?`lift.near.touch`:`lift.near`,{name:e.name}):e?.kind===`wait`?r=$(n?`lift.wait.touch`:`lift.wait`,{s:String(Math.ceil(e.secs))}):e?.kind===`ride`&&(r=$(n?`lift.ride.touch`:`lift.ride`,{name:e.name,pct:String(Math.round(e.progress*100))}));let i=`${e?.kind??``}|${r}`;if(i===this.liftKey)return;this.liftKey=i,t.classList.toggle(`hidden`,!e),t.className=`lift-prompt${e?` ${e.kind}`:` hidden`}`;let a=e?.kind===`ride`?`<i style="width:${(e.progress*100).toFixed(1)}%"></i>`:``;t.innerHTML=`<span>${c_(r)}</span>${a}`}markStarted(){this.started||(this.started=!0,this.el.hint.classList.add(`hide`))}toast(e,t=`info`,n=2600){let r=performance.now();if((this.recent.get(e)??-1e9)>r-(t===`warn`?6e3:800))return;this.recent.set(e,r);let i=s_(`div`,`toast ${t}`,c_(e));for(this.el.toasts.append(i);this.el.toasts.children.length>3;)this.el.toasts.firstElementChild.remove();setTimeout(()=>i.classList.add(`out`),n),setTimeout(()=>i.remove(),n+400)}handleEvents(e){for(let t of e)if(t.type===`turn`)this.turns.unshift(t),this.turns.length=Math.min(this.turns.length,5),this.renderTurns();else if(t.type===`warn`){let e=`toast.${t.code}`;this.toast(t.msg&&sg()===`zh`&&!/^[\x00-\x7f]*$/.test(t.msg)?t.msg:$(e),`warn`,3600)}}renderTurns(){let e=this.el.turnList;e&&(this.el.turnsN&&(this.el.turnsN.textContent=this.turns.length?` ${this.turns.length}`:``),e.innerHTML=this.turns.length?this.turns.map(e=>`<li><b style="color:${Lg[e.kind]}">${c_($(`turn.${e.kind}`))}</b>
      <span>${c_($(`turn.detail`,{side:$(e.side===`toe`?`turn.toe`:`turn.heel`),edge:Math.round(e.maxEdgeDeg),slip:Math.round(Math.abs(e.maxSlipDeg))}))}</span></li>`).join(``):`<li class="empty">${c_($(`turns.empty`))}</li>`)}update(e,t,n){let r=t.out,i=l_(r.edgeDeg),a=100+Math.sin(i)*66,o=100-Math.cos(i)*66;this.el.needle.setAttribute(`x2`,a.toFixed(1)),this.el.needle.setAttribute(`y2`,o.toFixed(1));let s=this.units===`metric`?r.speed*Rg:r.speed*zg,c=this.units===`metric`?100:62;if(this.el.speedArc.style.strokeDasharray=`${(_p(s/c,0,1)*267).toFixed(1)} 400`,this.el.slipBar.style.width=`${_p(Math.abs(r.slipDeg)/60,0,1)*100}%`,this.el.slipBar.style.background=Math.abs(r.slipDeg)>15?`#f2a541`:`#7fd8c4`,this.el.boost.style.width=`${Math.round(_p(n,0,1)*100)}%`,this.textTimer-=e,this.textTimer<=0){this.textTimer=1/12,this.el.speedNum.textContent=String(Math.round(s)),this.el.speedUnit.textContent=$(this.units===`metric`?`unit.kmh`:`unit.mph`);let e=this.el.label;e.textContent=t.onLift?$(`lift.label`):$(`label.${r.label}`),e.style.color=t.onLift?`#9fd3ff`:a_[r.label],this.el.vEdge.textContent=`${Math.round(Math.abs(r.edgeDeg))}°`,this.el.vSlip.textContent=`${Math.round(Math.abs(r.slipDeg))}°`,this.el.vLoad.textContent=`${r.load.toFixed(1)} g`;let n=this.data.meta.elevBase+t.altitude,i=this.units===`metric`?`${Math.round(n)} m`:`${Math.round(n*Bg)} ft`;this.el.info.innerHTML=`${c_($(`info.alt`))} <b>${i}</b> · ${c_($(`info.slope`))} <b>${Math.round(t.slopeDeg)}°</b> · <b>${c_(t.pisteName??$(`info.offPiste`))}</b>`}let l=this.minimap.lastScaleM;this.minimap.scaleLabel=this.units===`metric`?`${l} m`:`${Math.round(l*Bg)} ft`,this.minimap.draw({x:t.x,z:t.z,heading:t.heading})}},d_=class{constructor(e){Q(this,`root`,void 0),Q(this,`bar`,void 0),Q(this,`bytes`,void 0),Q(this,`stage`,void 0),Q(this,`dest`,void 0),Q(this,`err`,void 0),this.root=document.createElement(`div`),this.root.className=`loading`,this.root.innerHTML=`<div class="ld-card">
      <div class="ld-logo">HeyGo <span>Slopes</span></div>
      <div class="ld-title">${$(`load.title`)}</div>
      <div class="ld-dest"></div>
      <div class="ld-bar"><i></i></div>
      <div class="ld-meta"><span class="ld-bytes"></span><span class="ld-stage"></span></div>
      <div class="ld-err hidden"></div>
    </div>`,e.appendChild(this.root),this.bar=this.root.querySelector(`.ld-bar i`),this.bytes=this.root.querySelector(`.ld-bytes`),this.stage=this.root.querySelector(`.ld-stage`),this.dest=this.root.querySelector(`.ld-dest`),this.err=this.root.querySelector(`.ld-err`)}setDestination(e){this.dest.textContent=e}setProgress(e,t,n){this.bar.style.width=`${Math.round(Math.min(1,Math.max(0,e))*100)}%`,n>0&&(this.bytes.textContent=$(`load.bytes`,{a:(t/1048576).toFixed(1),b:(n/1048576).toFixed(1)}))}setStage(e){this.stage.textContent=$(`load.stage.${e}`)}showError(e,t){this.err.classList.remove(`hidden`),this.err.innerHTML=`<div>${$(`load.error`,{msg:e.replace(/</g,`&lt;`)})}</div><button class="pm-btn primary">${$(`load.retry`)}</button>`,this.err.querySelector(`button`).addEventListener(`click`,t)}waitForStart(e){this.root.classList.add(`ready`);let t=document.createElement(`div`);return t.className=`ld-start`,t.innerHTML=`<button class="pm-btn primary ld-go">${$(`load.tapStart`)}</button>${e?`<div class="ld-tip">${e}</div>`:``}`,this.root.querySelector(`.ld-card`).append(t),new Promise(e=>t.querySelector(`button`).addEventListener(`click`,()=>e(),{once:!0}))}hide(){this.root.classList.add(`out`),setTimeout(()=>this.root.remove(),600)}},f_={boost:`<svg viewBox="0 0 24 24"><path d="M6 13l6-6 6 6M6 19l6-6 6 6"/></svg>`,jump:`<svg viewBox="0 0 24 24"><path d="M12 19V6M6 11l6-6 6 6M5 21h14"/></svg>`,rewind:`<svg viewBox="0 0 24 24"><path d="M4 5v5h5"/><path d="M5.5 15a7 7 0 1 0 1.2-7.4L4 10"/></svg>`,camera:`<svg viewBox="0 0 24 24"><path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.4"/></svg>`,map:`<svg viewBox="0 0 24 24"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14"/></svg>`,pause:`<svg viewBox="0 0 24 24"><path d="M9 5v14M15 5v14"/></svg>`},p_=class{constructor(e,t){Q(this,`o`,void 0),Q(this,`root`,void 0),Q(this,`source`,void 0),Q(this,`stickEl`,void 0),Q(this,`knob`,void 0),Q(this,`idle`,void 0),Q(this,`arrows`,void 0),Q(this,`buttons`,new Map),Q(this,`visible`,!1),Q(this,`started`,!1),this.o=t,this.root=document.createElement(`div`),this.root.className=`touch-layer hidden`,e.prepend(this.root),this.build();let n={target:this.root,width:()=>this.root.clientWidth||innerWidth,size:t.size,sensitivity:t.sensitivity,layout:t.hand,hit:e=>this.hit(e)};this.source=cp(n);for(let e of[`contextmenu`,`selectstart`,`dblclick`])this.root.addEventListener(e,e=>e.preventDefault());this.root.addEventListener(`touchstart`,e=>{e.cancelable&&e.preventDefault()},{passive:!1}),this.root.addEventListener(`touchmove`,e=>{e.cancelable&&e.preventDefault()},{passive:!1})}build(){let e=this.root;e.innerHTML=`
      <div class="tc-idle"><div class="tc-ring"><i></i></div>
        <div class="tc-idle-txt"><b>${$(`touch.hold`)}</b><span>${$(`touch.drag`)}</span></div></div>
      <div class="tc-stick hidden"><div class="tc-base">
        <i class="tc-arr l"></i><i class="tc-arr r"></i><i class="tc-arr d"></i></div>
        <div class="tc-knob"></div></div>
      <div class="tc-cluster">
        <div class="tc-row">
          ${this.btn(`camera`,$(`btn.camera`),`sm`)}${this.btn(`map`,$(`btn.map`),`sm`)}${this.btn(`pause`,$(`btn.menu`),`sm`)}
        </div>
        ${this.btn(`rewind`,$(`touch.rewind`),`md tc-rewind`)}
        ${this.btn(`boost`,$(`touch.boost`),`lg tc-boost`)}
        ${this.btn(`jump`,$(`touch.jump`),`xl tc-jump`)}
      </div>`,this.stickEl=e.querySelector(`.tc-stick`),this.knob=e.querySelector(`.tc-knob`),this.idle=e.querySelector(`.tc-idle`),this.arrows={l:e.querySelector(`.tc-arr.l`),r:e.querySelector(`.tc-arr.r`),d:e.querySelector(`.tc-arr.d`)},this.buttons.clear(),e.querySelectorAll(`[data-touch]`).forEach(e=>this.buttons.set(e.dataset.touch,e)),this.started&&this.idle.classList.add(`quiet`),this.applySettings()}btn(e,t,n){return`<div class="tc-btn ${n}" data-touch="${e}" role="button" aria-label="${t}">${f_[e]}<span>${t}</span></div>`}hit(e){let t=e.target,n=t&&typeof t.closest==`function`?t.closest(`[data-touch]`):null;return n?n.dataset.touch:t&&typeof t.closest==`function`&&t.closest(`.tc-cluster`)?null:sp(e.clientX,this.root.clientWidth||innerWidth,this.o.hand())?`steer`:null}applySettings(){this.root.classList.toggle(`steer-right`,this.o.hand()===`right`),this.root.style.setProperty(`--tc`,String(this.o.size()))}setVisible(e){this.visible=e,this.root.classList.toggle(`hidden`,!e),e||this.source.reset()}get isVisible(){return this.visible}markStarted(){this.started||(this.started=!0,this.idle.classList.add(`quiet`))}update(){if(!this.visible)return;let e=this.source.stick;if(this.idle.classList.toggle(`hidden`,!!e),this.stickEl.classList.toggle(`hidden`,!e),e){let t=ip.STICK_RADIUS*this.o.size(),n=e.x-e.x0,r=e.y-e.y0,i=Math.hypot(n,r);i>t&&(n*=t/i,r*=t/i),this.stickEl.style.transform=`translate(${e.x0}px, ${e.y0}px)`,this.knob.style.transform=`translate(${n.toFixed(1)}px, ${r.toFixed(1)}px)`;let a=n/t;this.arrows.l.classList.toggle(`on`,a<-ip.DEADZONE),this.arrows.r.classList.toggle(`on`,a>ip.DEADZONE),this.arrows.d.classList.toggle(`on`,this.source.braking),this.stickEl.classList.toggle(`braking`,this.source.braking)}for(let[e,t]of this.buttons)t.classList.toggle(`on`,this.source.pressed.has(e))}},m_=/Mobi|Android|iPhone|iPad|iPod|HarmonyOS|OpenHarmony/i;function h_(e){let t=/iPhone|iPad|iPod/i.test(e.ua)||/Macintosh/i.test(e.ua)&&e.maxTouchPoints>1,n=/Android/i.test(e.ua),r=m_.test(e.ua)||t,i=e.coarse||e.maxTouchPoints>0&&(r||!!e.anyCoarse),a=r||e.coarse&&e.screenMin<820;return{touch:i,mobile:a,phone:a&&e.screenMin>0&&e.screenMin<500,ios:t,android:n}}function g_(){let e=e=>{try{return!!globalThis.matchMedia?.(e).matches}catch{return!1}},t=globalThis.navigator,n=globalThis.screen;return{ua:t?.userAgent??``,coarse:e(`(pointer: coarse)`),anyCoarse:e(`(any-pointer: coarse)`),maxTouchPoints:t?.maxTouchPoints??0,screenMin:n?Math.min(n.width,n.height):0}}var __={low:{level:`low`,antialias:!1,shadowMap:1024,treeFraction:.35,viewDistance:9e3,fogScale:1.6},medium:{level:`medium`,antialias:!1,shadowMap:1024,treeFraction:.65,viewDistance:2e4,fogScale:1.2},high:{level:`high`,antialias:!0,shadowMap:2048,treeFraction:1,viewDistance:6e4,fogScale:1}};function v_(e,t){return __[e===`auto`?t.mobile?`medium`:`high`:e]}function y_(e,t){return Math.max(.5,Math.min(Number.isFinite(e)&&e>0?e:1,t))}function b_(e,t,n=4){if(t>=1)return e;let r=Math.floor(e.length/n),i=[];for(let e=0;e<r;e++){let n=Math.imul(e+1,2654435761);n^=n>>>15,n=Math.imul(n,2246822519),n^=n>>>13,(n>>>0)/4294967296<t&&i.push(e)}let a=new Float32Array(i.length*n);return i.forEach((t,r)=>a.set(e.subarray(t*n,t*n+n),r*n)),a}var x_=class{constructor(e={min:.6,max:1,step:.1,window:20,slowMs:20,fastMs:12.5,slowFrac:.05,fastFrac:.8,calm:8,maxCalm:64}){Q(this,`opts`,void 0),Q(this,`scale`,void 0),Q(this,`n`,0),Q(this,`slow`,0),Q(this,`fast`,0),Q(this,`quiet`,0),Q(this,`wait`,void 0),Q(this,`probed`,!1),this.opts=e,this.scale=e.max,this.wait=e.calm}reset(e=this.opts.max){this.scale=e,this.n=this.slow=this.fast=this.quiet=0,this.wait=this.opts.calm,this.probed=!1}sample(e){if(!(e>0)||e>250)return!1;let t=this.opts;if(this.n++,e>t.slowMs&&this.slow++,e<t.fastMs&&this.fast++,this.n<t.window)return!1;let n=this.slow/this.n,r=this.fast/this.n;this.n=this.slow=this.fast=0;let i=this.scale;return n>t.slowFrac?(this.probed&&(this.wait=Math.min(t.maxCalm,this.wait*2)),this.probed=!1,this.quiet=0,this.scale=Math.max(t.min,S_(this.scale-t.step))):(this.quiet++,this.scale<t.max&&(r>t.fastFrac||this.quiet>=this.wait)?(this.scale=Math.min(t.max,S_(this.scale+t.step)),this.quiet=0,this.probed=!0):this.quiet>=this.wait&&(this.probed=!1)),this.scale!==i}},S_=e=>Math.round(e*10)/10;async function C_(e=document.documentElement){let t=!1,n=!1;try{let n=e;document.fullscreenElement||(e.requestFullscreen?await e.requestFullscreen({navigationUI:`hide`}):n.webkitRequestFullscreen&&await n.webkitRequestFullscreen()),t=!!(document.fullscreenElement??document.webkitFullscreenElement)}catch{}try{let e=screen.orientation;e?.lock&&(await e.lock(`landscape`),n=!0)}catch{}return{fullscreen:t,locked:n}}var w_=Math.PI/180,T_=(e,t,n)=>e<t?t:e>n?n:e,E_=(e,t,n)=>{let r=T_((n-e)/(t-e),0,1);return r*r*(3-2*r)},D_={len:1.56,waist:.25},O_=.02,k_={low:{segments:2500,meters:600,ageS:240,spray:0,debris:!1},medium:{segments:6e3,meters:1500,ageS:480,spray:128,debris:!0},high:{segments:14e3,meters:3e3,ageS:900,spray:320,debris:!0}};function A_(e,t){return Math.min(e,e*Math.abs(Math.sin(t*w_)))}function j_(e){return T_(.2+.022*e,.2,.6)}function M_(e,t,n){let r=Math.abs(t),i=Math.abs(e),a=E_(.5,1.5,n),o=E_(7,18,r)*a,s=E_(4,12,i);return{groove:(1-o)*s*a,depth:E_(8,50,i),skid:o,flat:(1-o)*(1-s)*E_(1.5,3,n)}}var N_=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],P_=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],F_=(e,t)=>{let n=Math.hypot(e[0],e[1],e[2]);return n>1e-9?[e[0]/n,e[1]/n,e[2]/n]:t},I_=(e,t)=>{let n=N_(e,t);return[e[0]-t[0]*n,e[1]-t[1]*n,e[2]-t[2]*n]};function L_(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var R_=class{constructor(e,t,n=O_){Q(this,`sink`,void 0),Q(this,`heightAt`,void 0),Q(this,`lift`,void 0),Q(this,`dist`,0),Q(this,`time`,0),Q(this,`debris`,!0),Q(this,`last`,null),Q(this,`airborne`,!1),Q(this,`moving`,!1),Q(this,`skidRecent`,0),Q(this,`qSign`,1),Q(this,`groove`,{key:0,prev:null}),Q(this,`skid`,{key:0,prev:null}),Q(this,`flat`,{key:0,prev:null}),Q(this,`rand`,L_(24301)),Q(this,`lastSkid`,{w:0,amount:0,q:[0,0,1]}),this.sink=e,this.heightAt=t,this.lift=n}breakAll(){this.groove.prev=this.skid.prev=this.flat.prev=null,this.last=null}reset(){this.breakAll(),this.airborne=!1,this.moving=!1,this.skidRecent=0}record(e,t){if(this.time+=t,e.air){this.airborne||this.breakAll(),this.airborne=!0;return}let n=e.n,r=F_(P_(e.f,n),[0,0,1]),i=F_(I_(e.f,n),[1,0,0]);this.airborne&&(this.airborne=!1,this.breakAll(),this.stamp(e.p,i,r,n,.9));let a=M_(e.edgeDeg,e.slipDeg,e.speed);if(this.skidRecent=Math.max(a.skid,this.skidRecent-t*.8),e.speed<.45){this.moving&&this.last&&this.stamp(e.p,i,r,n,.55+.35*this.skidRecent),this.moving=!1;return}if(!this.moving&&e.speed<.9)return;this.moving=!0;let o=e.p;if(this.last){let t=Math.hypot(o[0]-this.last[0],o[1]-this.last[1],o[2]-this.last[2]);if(t<j_(e.speed))return;this.dist+=t}this.last=[o[0],o[1],o[2]];let s=F_(I_(e.v,n),i),c=F_(P_(n,s),r),l=e.edgeDeg>=0?1:-1;if(a.groove>.02){let t=this.across(c,r,-l),i=D_.waist/2*Math.cos(Math.abs(e.edgeDeg)*w_),s=[o[0]+r[0]*l*i,o[1],o[2]+r[2]*l*i];this.extend(this.groove,l,this.section(s,t,n,z_(a.groove,a.depth)))}else this.close(this.groove);if(a.skid>.02){let t=e.slipDeg>=0?1:-1,i=this.skid.prev!==null&&this.skid.key===t?[c[0]*this.qSign,c[1]*this.qSign,c[2]*this.qSign]:this.across(c,r,t,!0),l=Math.max(D_.waist,A_(D_.len,e.slipDeg)),u=.95+.08*this.rand();this.extend(this.skid,t,this.section(o,i,n,B_(a.skid,l,u))),this.lastSkid={w:l,amount:a.skid,q:i},this.debris&&a.skid>.3&&e.speed>2.5&&this.scatter(o,i,s,n,l,a.skid,e.speed)}else this.close(this.skid),this.lastSkid.amount=0;a.flat>.02?this.extend(this.flat,1,this.section(o,c,n,V_(a.flat))):this.close(this.flat)}across(e,t,n,r=!1){let i=N_(e,t)*n,a=i>=0?1:-1;return r&&(Math.abs(i)<.25&&(a=this.qSign),this.qSign=a),[e[0]*a,e[1]*a,e[2]*a]}extend(e,t,n){e.prev&&e.key===t&&this.sink.segment(e.prev,n),e.key=t,e.prev=n}close(e){e.prev=null}section(e,t,n,r){let i=new Float32Array(21),a=new Float32Array(21),o=new Float32Array(28);for(let s=0;s<7;s++){let c=e[0]+t[0]*r.y[s],l=e[2]+t[2]*r.y[s];i[s*3]=c,i[s*3+1]=this.heightAt(c,l)+this.lift,i[s*3+2]=l;let u=Math.cos(r.tilt[s]),d=Math.sin(r.tilt[s]),f=F_([n[0]*u+t[0]*d,n[1]*u+t[1]*d,n[2]*u+t[2]*d],n);a[s*3]=f[0],a[s*3+1]=f[1],a[s*3+2]=f[2],o[s*4]=r.shade[s],o[s*4+1]=r.alpha[s],o[s*4+2]=r.streak[s],o[s*4+3]=r.y[s]}return{pos:i,nrm:a,attr:o,dist:this.dist,t:this.time}}stamp(e,t,n,r,i){let a=D_.len/2,o=null;for(let[s,c]of[[-a,.82],[-a*.55,1],[a*.55,1],[a,.82]]){let a=[e[0]+t[0]*s,e[1],e[2]+t[2]*s],l=this.section(a,n,r,V_(i,D_.waist*c,.05));o&&this.sink.segment(o,l),o=l}}scatter(e,t,n,r,i,a,o){let s=Math.floor(a*Math.min(1,o/10)*2.2+this.rand());for(let o=0;o<s;o++){let o=i/2+.05+this.rand()*(.25+.35*a),s=(this.rand()-.5)*.5,c=.015+this.rand()*.035,l=.025+this.rand()*.05,u=[e[0]+t[0]*o+n[0]*s,e[1],e[2]+t[2]*o+n[2]*s],d=(this.rand()-.5)*1.6,f=Math.cos(d),p=Math.sin(d),m=[t[0]*f+n[0]*p,t[1]*f+n[1]*p,t[2]*f+n[2]*p],h=[n[0]*f-t[0]*p,n[1]*f-t[1]*p,n[2]*f-t[2]*p],g=.5+.4*this.rand(),_=this.section(u,h,r,H_(c,g)),v=[u[0]+m[0]*l,u[1],u[2]+m[2]*l];this.sink.segment(_,this.section(v,h,r,H_(c*.35,g*.7)))}}};function z_(e,t){let n=.03+.03*t,r=.04+.05*t,i=.03+.03*t,a=e*(.7+.3*t),o=.8-.36*t;return{y:[-.006,0,n,n+.008,n+r,n+r+i*.5,n+r+i],shade:[1,o,o+.05,.995,.985,1.05,1.02],alpha:[0,a,a,a*.85,a*.8,a*.85,0],tilt:[0,(35+30*t)*w_,(10+15*t)*w_,-4*w_,-7*w_,4*w_,12*w_],streak:[-.001,-.001,-.001,-.3,-.3,-.001,-.001]}}function B_(e,t,n=1){let r=t/2,i=.05+.1*e,a=e*.9,o=n*(1-.1*Math.min(1,t/D_.len));return{y:[-r-.04,-r,-r+.04,r*.3,r,r+i*.45,r+i],shade:[1,.78*n,.86*o,.88*o,.91*o,1.12,1.04],alpha:[0,a,a,a,a,a*.9,0],tilt:[0,22*w_,-3*w_,2*w_,-6*w_,6*w_,22*w_],streak:[.001,.4,1,1,.8,.1,.001]}}function V_(e,t=D_.waist,n=.025){let r=t/2,i=e*.5;return{y:[-r-n,-r,-r+.03,0,r-.03,r,r+n],shade:[1.03,.84,.975,.98,.975,.84,1.03],alpha:[0,i,i*.8,i*.75,i*.8,i,0],tilt:[0,18*w_,0,0,0,-18*w_,0],streak:[-.001,-.001,-.4,-.4,-.4,-.001,-.001]}}function H_(e,t){return{y:[-e,-e*.6,-e*.2,0,e*.2,e*.6,e],shade:[1.04,1.1,1.12,1.12,1.1,1.02,.98],alpha:[0,t,t,t,t,t,0],tilt:[-30*w_,-20*w_,-5*w_,0,5*w_,25*w_,30*w_],streak:[-.001,-.001,-.001,-.001,-.001,-.001,-.001]}}var U_=class{constructor(e){Q(this,`capacity`,void 0),Q(this,`head`,0),Q(this,`count`,0),Q(this,`seq`,0),Q(this,`dirtyStart`,0),Q(this,`dirtyN`,0),this.capacity=e}alloc(){let e=this.head;return this.dirtyN===0&&(this.dirtyStart=e),this.dirtyN=Math.min(this.capacity,this.dirtyN+1),this.head=(this.head+1)%this.capacity,this.count=Math.min(this.capacity,this.count+1),{slot:e,seq:this.seq++}}takeDirty(){let e=this.dirtyN,t=this.dirtyStart;return this.dirtyN=0,e===0?[]:e>=this.capacity?[[0,this.capacity]]:t+e<=this.capacity?[[t,e]]:[[t,this.capacity-t],[0,e-(this.capacity-t)]]}clear(){this.head=this.count=this.dirtyN=0}},W_=`
attribute vec4 aTrail;
attribute vec3 aAge;
uniform vec3 uHead;
uniform vec3 uSpan;
varying vec4 vTrail;
varying float vTrailDist;
varying float vTrailFade;`,G_=`
varying vec4 vTrail;
varying float vTrailDist;
varying float vTrailFade;
float tr_hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float tr_noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(tr_hash(i), tr_hash(i+vec2(1.0,0.0)), u.x), mix(tr_hash(i+vec2(0.0,1.0)), tr_hash(i+vec2(1.0,1.0)), u.x), u.y); }`,K_=class{constructor(e){Q(this,`mesh`,void 0),Q(this,`ring`,void 0),Q(this,`material`,void 0),Q(this,`geo`,void 0),Q(this,`aPos`,void 0),Q(this,`aNrm`,void 0),Q(this,`aTrail`,void 0),Q(this,`aAge`,void 0),Q(this,`uniforms`,{uHead:{value:new q},uSpan:{value:new q(1,1,1)}}),Q(this,`headDist`,0),this.ring=new U_(e);let t=e*7*2,n=new Rr,r=e=>(e.setUsage(Xe),e);this.aPos=r(new Cr(new Float32Array(t*3),3)),this.aNrm=r(new Cr(new Int8Array(t*3),3,!0)),this.aTrail=r(new Cr(new Float32Array(t*4),4)),this.aAge=r(new Cr(new Float32Array(t*3),3)),n.setAttribute(`position`,this.aPos),n.setAttribute(`normal`,this.aNrm),n.setAttribute(`aTrail`,this.aTrail),n.setAttribute(`aAge`,this.aAge);let i=new Uint32Array(e*6*6),a=0;for(let t=0;t<e;t++){let e=t*7*2,n=e+7;for(let t=0;t<6;t++)i[a++]=e+t,i[a++]=n+t,i[a++]=e+t+1,i[a++]=e+t+1,i[a++]=n+t,i[a++]=n+t+1}n.setIndex(new Cr(i,1)),n.setDrawRange(0,0),this.geo=n;let o=new Xo({color:new Y(.972,.976,.988),roughness:.8,metalness:0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});o.onBeforeCompile=e=>{Object.assign(e.uniforms,this.uniforms),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${W_}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vTrail = aTrail;
vTrailDist = aAge.y;
vec3 tAge = uHead - aAge;
vTrailFade = (1.0 - smoothstep(0.7*uSpan.x, uSpan.x, tAge.x)) * (1.0 - smoothstep(0.7*uSpan.y, uSpan.y, tAge.y)) * (1.0 - smoothstep(0.5*uSpan.z, uSpan.z, tAge.z));`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${G_}`).replace(`#include <color_fragment>`,`#include <color_fragment>
{
  float px = fwidth(vTrail.w);                         // metres per pixel across the track
  float camD = length(vViewPosition);
  float shade = vTrail.x;
  float streak = abs(vTrail.z), thin = step(vTrail.z, 0.0);
  // fine scratches along the travel direction (skid scrape / base polish), gone once sub-pixel
  float sc = tr_noise(vec2(vTrail.w * 55.0, vTrailDist * 0.6)) * 0.65 + tr_noise(vec2(vTrail.w * 140.0, vTrailDist * 1.7)) * 0.35;
  shade *= 1.0 + streak * (sc - 0.5) * 0.3 * (1.0 - smoothstep(0.004, 0.02, px));
  // thin features (cut lines, edge marks, clumps) alias when far: pull toward neutral as they go sub-pixel
  shade = mix(shade, mix(shade, 1.0, 0.55), thin * smoothstep(0.015, 0.06, px));
  diffuseColor.rgb *= shade;
  diffuseColor.a *= vTrail.y * vTrailFade * (1.0 - smoothstep(320.0, 900.0, camD));
}`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.5, abs(vTrail.z));`)},o.customProgramCacheKey=()=>`hs-trail`,this.material=o,this.mesh=new fi(n,o),this.mesh.name=`snow-trails`,this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.renderOrder=1}segment(e,t){let{slot:n,seq:r}=this.ring.alloc(),i=t.pos[0]-e.pos[0],a=t.pos[2]-e.pos[2],o=e.pos[18]-e.pos[0],[s,c]=i*(e.pos[20]-e.pos[2])-a*o>0?[t,e]:[e,t],l=n*7*2;this.write(l,s,r),this.write(l+7,c,r)}write(e,t,n){let r=this.aPos.array,i=this.aNrm.array,a=this.aTrail.array,o=this.aAge.array;r.set(t.pos,e*3);for(let n=0;n<21;n++)i[e*3+n]=Math.round(t.nrm[n]*127);a.set(t.attr,e*4);for(let r=0;r<7;r++)o[(e+r)*3]=n,o[(e+r)*3+1]=t.dist,o[(e+r)*3+2]=t.t}flush(e,t,n){let r=this.ring.takeDirty();if(r.length){for(let[e,t]of[[this.aPos,3],[this.aNrm,3],[this.aTrail,4],[this.aAge,3]]){e.clearUpdateRanges();for(let[n,i]of r)e.addUpdateRange(n*14*t,i*14*t);e.needsUpdate=!0}this.geo.setDrawRange(0,this.ring.count*6*6)}this.uniforms.uHead.value.set(this.ring.seq,t,n),this.uniforms.uSpan.value.set(this.ring.capacity,e.meters,e.ageS)}clear(){this.ring.clear(),this.geo.setDrawRange(0,0)}dispose(){this.geo.dispose(),this.material.dispose()}},q_=class{constructor(e){Q(this,`capacity`,void 0),Q(this,`points`,void 0),Q(this,`pos`,void 0),Q(this,`col`,void 0),Q(this,`vel`,void 0),Q(this,`life`,void 0),Q(this,`n`,0),Q(this,`acc`,0),Q(this,`rand`,L_(659918)),Q(this,`geo`,void 0),this.capacity=e;let t=Math.max(1,e);this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t*2);let n=new Rr;n.setAttribute(`position`,new Cr(this.pos,3).setUsage(Xe)),n.setAttribute(`color`,new Cr(this.col,4).setUsage(Xe)),n.setDrawRange(0,0),this.geo=n;let r=new Uint8Array(4096);for(let e=0;e<32;e++)for(let t=0;t<32;t++){let n=Math.hypot(t+.5-16,e+.5-16)/16,i=(e*32+t)*4;r[i]=r[i+1]=r[i+2]=255,r[i+3]=Math.round(255*Math.max(0,1-n*n)**1.5)}let i=new Ei(r,32,32);i.needsUpdate=!0;let a=new aa({size:.075,sizeAttenuation:!0,map:i,vertexColors:!0,transparent:!0,depthWrite:!1,color:new Y(1.7,1.72,1.78)});this.points=new ua(n,a),this.points.name=`snow-spray`,this.points.frustumCulled=!1,this.points.renderOrder=2}emit(e,t,n,r,i,a,o,s){if(!(this.capacity<=0||o<=0))for(this.acc+=o*e;this.acc>=1;){if(--this.acc,this.n>=this.capacity)continue;let e=this.n++,o=this.rand,c=(o()*2-1)*a*.8+a*.5;this.pos[e*3]=t[0]+r[0]*c,this.pos[e*3+1]=t[1]+.04,this.pos[e*3+2]=t[2]+r[2]*c;let l=s*(.6+.8*o()),u=s*(.35+.6*o());for(let t=0;t<3;t++)this.vel[e*3+t]=n[t]*(.45+.3*o())+r[t]*l+i[t]*u+(o()-.5)*.6;let d=.45+.5*o();this.life[e*2]=d,this.life[e*2+1]=d}}update(e){if(this.capacity<=0)return;let t=0;for(let n=0;n<this.n;n++){let r=this.life[n*2]-e;if(r<=0)continue;let i=Math.exp(-2.4*e);for(let r=0;r<3;r++)this.vel[n*3+r]=this.vel[n*3+r]*i-(r===1?9.81*e:0),this.pos[t*3+r]=this.pos[n*3+r]+this.vel[n*3+r]*e,this.vel[t*3+r]=this.vel[n*3+r];this.life[t*2]=r,this.life[t*2+1]=this.life[n*2+1];let a=r/this.life[t*2+1];this.col[t*4]=this.col[t*4+1]=this.col[t*4+2]=1,this.col[t*4+3]=Math.min(1,a*1.6)*.85,t++}this.n=t,this.geo.setDrawRange(0,t),this.points.visible=t>0,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}get alive(){return this.n}dispose(){this.geo.dispose(),this.points.material.dispose()}},J_=class{constructor(e,t){Q(this,`heightAt`,void 0),Q(this,`root`,new Fn),Q(this,`mesh`,void 0),Q(this,`spray`,void 0),Q(this,`sampler`,void 0),Q(this,`q`,void 0),Q(this,`level`,void 0),Q(this,`frame`,null),this.heightAt=e,this.root.name=`trails`,this.setQuality(t)}setQuality(e){if(this.level===e)return;let t=k_[e],n=this.sampler;this.mesh&&(this.root.remove(this.mesh.mesh),this.mesh.dispose()),this.spray&&(this.root.remove(this.spray.points),this.spray.dispose()),this.mesh=new K_(t.segments),this.spray=new q_(t.spray),this.sampler=new R_(this.mesh,this.heightAt),n&&(this.sampler.dist=n.dist,this.sampler.time=n.time),this.sampler.debris=t.debris,this.root.add(this.mesh.mesh),t.spray>0&&this.root.add(this.spray.points),this.q=t,this.level=e}record(e,t){this.sampler.record(e,t),this.frame=e}reset(){this.sampler.reset(),this.frame=null}update(e){let t=this.frame;if(t&&!t.air&&this.q.spray>0){let n=this.sampler.lastSkid,r=M_(t.edgeDeg,t.slipDeg,t.speed),i=T_((t.speed-2)/10,0,1);if(n.amount>.1&&this.spray.emit(e,t.p,t.v,n.q,t.n,n.w/2,n.amount*i*this.q.spray*.9,1.2+2.2*i),r.groove>.5&&r.depth>.5){let n=F_(P_(t.f,t.n),[0,0,1]),a=t.edgeDeg>=0?-1:1;this.spray.emit(e,t.p,t.v,[n[0]*a,n[1]*a,n[2]*a],t.n,.1,(r.depth-.5)*i*this.q.spray*.35,1+1.5*i)}}this.frame=null,this.spray.update(e),this.mesh.flush(this.q,this.sampler.dist,this.sampler.time)}clear(){this.mesh.clear(),this.reset()}stats(){return{segments:this.mesh.ring.count,capacity:this.mesh.ring.capacity,meters:Math.round(this.sampler.dist),spray:this.spray.alive,level:this.level}}},Y_={dismountMaxSpeed:.6,walkSpeed:1.4,runSpeed:3.2,backSpeed:.8,accel:6,turnRate:2.4,maxUphillDeg:32,strideWalk:1.5,strideRun:2.4,idleBelow:.15},X_=Math.PI/180;function Z_(e,t){return!t&&e<=Y_.dismountMaxSpeed}function Q_(e,t,n){let r=Math.atan2(n[0],n[2]);return{p:[t[0],e.height(t[0],t[2]),t[2]],yaw:r,speed:0,phase:0,mode:`idle`}}function $_(e){return{p:[e.p[0],e.p[1],e.p[2]],f:[Math.sin(e.yaw),0,Math.cos(e.yaw)]}}function ev(e,t,n,r,i,a=.5){let o=e.height(t+r*a,n+i*a)-e.height(t,n);return Math.atan2(o,a)/X_}function tv(e,t,n,r){let i=e.yaw-nv(t.steer,-1,1)*Y_.turnRate*r,a=t.boost>.5,o=t.go>0?t.go*(a?Y_.runSpeed:Y_.walkSpeed):0;t.brake>0&&!(t.go>0)&&(o=-t.brake*Y_.backSpeed);let s=Math.sin(i),c=Math.cos(i),l=Math.sign(o)||Math.sign(e.speed)||1,u=ev(n,e.p[0],e.p[2],s*l,c*l);u>Y_.maxUphillDeg?o=0:u>0&&(o*=1-.6*(u/Y_.maxUphillDeg));let d=e.speed+(o-e.speed)*(1-Math.exp(-Y_.accel*r));Math.abs(d)<.001&&o===0&&(d=0);let f=e.p[0]+s*d*r,p=e.p[2]+c*d*r;d!==0&&Math.atan2(n.height(f,p)-n.height(e.p[0],e.p[2]),Math.abs(d)*r)/X_>Y_.maxUphillDeg&&(f=e.p[0],p=e.p[2],d=0);let m=Math.abs(d),h=m>(Y_.walkSpeed+Y_.runSpeed)/2?Y_.strideRun:Y_.strideWalk,g=m<Y_.idleBelow?e.phase:(e.phase+m*r/h)%1,_=m<Y_.idleBelow?`idle`:m>(Y_.walkSpeed+Y_.runSpeed)/2?`run`:`walk`;return{p:[f,n.height(f,p),p],yaw:i,speed:d,phase:g,mode:_}}function nv(e,t,n){return e<t?t:e>n?n:e}var rv=24,iv=3;function av(){try{return!!document.createElement(`canvas`).getContext(`webgl2`)}catch{return!1}}async function ov(e,t){let n=new URLSearchParams(location.search),r=h_(g_());n.has(`touch`)&&(r.touch=!0);let i=new bg,a=()=>i.value.touchUi===`on`||i.value.touchUi===`auto`&&r.touch;document.documentElement.classList.toggle(`is-touch`,r.touch);let o=new d_(t);if(!av())throw o.showError($(`load.noWebgl`),()=>location.reload()),Error(`WebGL2 unavailable`);o.setStage(`data`);let s;try{s=await em(n.get(`map`),e=>o.setProgress(e.fraction,e.loaded,e.total))}catch(e){throw o.showError(e.message,()=>location.reload()),e}let{fellBack:c,requested:l}=s,u=v_(i.value.quality,r),d=u,f=u.treeFraction<1?{...s.data,trees:b_(s.data.trees,u.treeFraction)}:s.data;o.setDestination(sg()===`en`?f.meta.nameEn??f.meta.name:f.meta.name);let p=new Pd({canvas:e,antialias:u.antialias,powerPreference:`high-performance`}),m=new x_,h=()=>{let e=i.value.dynamicRes?m.scale:1;p.setPixelRatio(y_(devicePixelRatio,i.value.pixelRatioCap)*e),p.setSize(innerWidth,innerHeight,!1)};h(),p.toneMapping=4,p.toneMappingExposure=Number(new URLSearchParams(location.search).get(`exposure`))||.85,p.outputColorSpace=We,p.shadowMap.enabled=!0,p.shadowMap.type=1;let g=new Wn,_=hh(p,g,{shadowMap:u.shadowMap}),v=g.fog.density,y=await dh(f,e=>o.setStage(e),{renderer:p,treeDebug:n.get(`trees`)===`lod`});g.add(y.root);let b=y.terrain,x=n.get(`trails`)!==`0`,S=new J_((e,t)=>b.meshHeight(e,t),u.level);x&&g.add(S.root),o.setStage(`rider`);let C=new rg,w=C;g.add(w.root);let T=f.map.pistes[f.meta.spawn?.piste??0]??f.map.pistes[0],E=f.meta.grid,D=f.meta.spawn,O=D&&Number.isFinite(D.x)&&Number.isFinite(D.z)?{p:[D.x,b.height(D.x,D.z),D.z],f:Number.isFinite(D.heading)?[Math.sin(D.heading),0,-Math.cos(D.heading)]:im(b,T,[D.x,D.z]).f}:im(b,T,[E.x0+E.nx*E.dx/2,E.z0+E.nz*E.dx/2]),k=Bf.create(b,O),A=[...k.p],j=()=>({speed:0,edgeDeg:0,slipDeg:0,load:1,lean:0,label:`stop`,air:!1,normal:b.normal(k.p[0],k.p[2]),events:[]}),M=j(),N=new Ap(12,30);N.push(k.t,Vf(k));let P=new kp(innerWidth/innerHeight),F=()=>{g.fog.density=v*u.fogScale,P.camera.far=u.viewDistance,S.setQuality(u.level),P.camera.updateProjectionMatrix(),_.sun.shadow.mapSize.x!==u.shadowMap&&(_.sun.shadow.mapSize.set(u.shadowMap,u.shadowMap),_.sun.shadow.map?.dispose(),_.sun.shadow.map=null)};F();let ee=()=>{P.reduceMotion=i.value.reduceMotion,P.touchFov=a()};ee();let I=new p_(t,{hand:()=>i.value.steerHand,size:()=>i.value.controlSize,sensitivity:()=>i.value.sensitivity});I.setVisible(a());let te=gp(e,I.source),ne=null,re=n.has(`autopilot`)&&T?new Np(T):null,ie=!1,ae=new Mp,L=y.lifts,R=0,z=()=>Wm(Date.now())+R,oe=0,se=e=>{let t=L.lines[e].data;return(sg()===`en`?t.nameEn??t.name:t.name)||$(L.lines[e].spec.kind===`gondola`?`lift.unnamed.gondola`:`lift.unnamed.chair`)},ce=null;try{ce=localStorage}catch{}let le=new Fg(Dg(f.map.pistes,f.map.lifts,(e,t)=>b.height(e,t)),new Ng(ce)),ue=e=>{let t=f.map.pistes[e];if(!t)return null;let n=`difficulty.${t.difficulty}`;return{name:(sg()===`en`?t.nameEn??t.name:t.name)||`—`,color:Bm(t.difficulty),difficulty:n in ig.zh?$(n):``}},de=e=>{for(let t of e)t.type===`end`&&t.valid?B.stats.showSummary(t.summary):(t.type===`start`||t.type===`resume`)&&B.stats.hideSummary()},B=new u_(t,f,{onCamera:()=>Ce(`camera`),onMap:()=>{},onMenu:e=>{ie=e},onUnits:()=>{},onLang:()=>I.build(),onLines:e=>{y.pisteLines.visible=e},onUse:()=>Ce(`use`)},{touch:a,hand:()=>i.value.steerHand,settings:i,touchCapable:r.touch||r.mobile,onFullscreen:r.mobile?()=>{C_()}:void 0,stats:{piste:e=>ue(e),onAgain:e=>{Se(e.startP,e.startF),B.toast($(`toast.again`))}}});i.on((e,t)=>{if((t.includes(`touchUi`)||t.includes(`steerHand`))&&(I.setVisible(a()),I.applySettings(),ee(),B.rebuild()),t.includes(`controlSize`)&&I.applySettings(),t.includes(`reduceMotion`)&&ee(),(t.includes(`pixelRatioCap`)||t.includes(`dynamicRes`))&&(m.reset(),h()),t.includes(`quality`)){let t=v_(e.quality,r),n=t.antialias!==d.antialias||t.treeFraction!==d.treeFraction;u=t,F(),m.reset(),h(),n&&B.toast($(`toast.reload`),`info`,3600)}}),c&&l!==`testhill`&&B.toast($(`toast.fallback`,{want:l}),`warn`,4200);let fe=null,pe=`idle`,me=()=>n.get(`rider`)!==`basic`&&u.level!==`low`,he=e=>{e!==w&&(e.copyStateFrom(w),w.lastPose&&e.apply(w.lastPose),g.remove(w.root),g.add(e.root),w=e,B.setCredit(w===fe?`Rider: UE5 Manny web-ready by SketchPunk (CC BY 4.0)`:null))},ge=()=>{if(!me()){he(C);return}if(fe){he(fe);return}if(pe!==`idle`)return;pe=`loading`;let e=document.createElement(`div`);e.className=`rider-load`,e.innerHTML=`<span></span><i></i>`;let n=e.querySelector(`span`),r=e.querySelector(`i`),i=e=>{n.textContent=`${$(`rider.loading`)} ${Math.round(e*100)}%`,r.style.width=`${Math.round(e*100)}%`};i(0),t.appendChild(e);let a=performance.now();zp(async()=>{let{loadMannyAssets:e,MannyRider:t,riderAssetBase:n}=await import(`./manny-R1oE_Oud.js`);return{loadMannyAssets:e,MannyRider:t,riderAssetBase:n}},[]).then(async({loadMannyAssets:e,MannyRider:t,riderAssetBase:n})=>{let r=new t(await e(n(),i));try{await p.compileAsync(r.root,P.camera,g)}catch{}fe=r,pe=`idle`,console.info(`[rider] Manny ready in ${Math.round(performance.now()-a)} ms (${Math.round(r.triangles)} tris)`),me()&&he(r)}).catch(e=>{console.warn(`[rider] Manny failed, keeping the basic rider`,e),pe=`failed`,B.toast($(`toast.riderFallback`),`warn`,3600)}).finally(()=>{e.classList.add(`out`),setTimeout(()=>e.remove(),600)})};i.on((e,t)=>{t.includes(`quality`)&&ge()}),n.has(`lines`)&&B.setLines(!0);let _e=()=>Math.hypot(k.v[0],k.v[2]),ve=null;function ye(){if(L.state.mode===`free`){if(ve){let e=$_(ve);ve=null,k=Bf.create(b,e),A=[...k.p],M=j(),N.clear(),N.push(k.t,Vf(k)),w.reset(),B.toast($(`toast.foot.on`))}else Z_(_e(),M.air)?(re=null,de(le.endRun(`reset`)),ve=Q_(b,k.p,[k.f[0]*k.fwd,0,k.f[2]*k.fwd]),B.toast($(`toast.foot.off`))):B.toast($(`toast.foot.fast`),`warn`)}}function be(e,t){ve=null,de(le.reset()),k=Bf.create(b,{p:e,f:t}),A=[...k.p],M=j(),N.clear(),N.push(k.t,Vf(k)),w.reset(),S.reset(),P.snap()}function xe(e){for(let t of e)switch(t.type){case`queue`:B.toast($(`toast.lift.queue`,{name:se(t.lift),s:String(Math.ceil(t.wait))})),re=null,de(le.endRun(`lift`));break;case`cancel`:B.toast($(t.reason===`left`?`toast.lift.left`:`toast.lift.cancel`),t.reason===`left`?`warn`:`info`);break;case`denied`:B.toast($(t.reason===`fast`?`toast.lift.fast`:`toast.lift.far`),`warn`);break;case`board`:{let e=L.lines[t.lift].spec.kind===`gondola`?`gondola`:`chair`;de(le.endRun(`lift`)),oe=0,P.override=Op[e][0],P.snap(),w.root.visible=e!==`gondola`,B.toast($(`toast.lift.board`,{name:se(t.lift)}));break}case`exit`:P.override=null,w.root.visible=!0,be(t.p,t.f),B.toast($(`toast.lift.top`))}}function Se(e,t){L.state.mode!==`free`&&(L.state={mode:`free`},P.override=null,w.root.visible=!0),re=null,be([e[0],b.height(e[0],e[2]),e[2]],t)}function Ce(e){if(e===`menu`)B.toggleMenu(),I.source.reset();else if(!ie){if(e===`stats`)B.stats.toggle();else if(e===`confirm`)B.stats.hideSummary();else if(e===`foot`)ye();else switch(e){case`camera`:{let e=L.state.mode===`ride`?L.lines[L.state.lift]:null;if(e){let t=Op[e.spec.kind===`gondola`?`gondola`:`chair`];oe=(oe+1)%t.length,P.override=t[oe],B.toast($(oe===0?`toast.camera.near`:`toast.camera.far`));break}P.toggle(),B.toast($(P.preset===0?`toast.camera.near`:`toast.camera.far`));break}case`use`:if(ve){let e=$_(ve);ve=null,be(e.p,e.f)}xe(L.use(k.p[0],k.p[2],_e(),z()));break;case`map`:B.toggleMap();break;case`lines`:B.toggleLines();break;case`units`:B.setUnits(B.units===`metric`?`imperial`:`metric`);break;case`rewind`:{if(L.state.mode===`ride`||ve){B.toast($(`toast.lift.noRewind`));break}re=null;let e=N.rewind(iv);if(!e){B.toast($(`toast.rewindEmpty`));break}k=Vf(e.v),A=[...k.p],M=j(),de(le.rewindTo(k.t)),w.reset(),S.reset(),B.toast($(`toast.rewind`));break}}}}te.on(Ce),addEventListener(`resize`,()=>{h(),P.camera.aspect=innerWidth/innerHeight,P.camera.updateProjectionMatrix()}),document.addEventListener(`visibilitychange`,()=>{document.hidden&&I.source.reset()}),w.update(0,k.p,k,M,{steer:0,go:0,brake:0,boost:0,charge:!1,analog:!1}),P.update(.016,k.p,k.v,k.f,b),_.follow(new q(...k.p)),y.update(P.camera.position),p.compile(g,P.camera),ge(),o.setStage(`ready`),(r.mobile||a())&&(await o.waitForStart(r.ios?$(`load.iosTip`):null),C_()),o.hide();let we=0,Te=performance.now(),Ee=0,De=0,Oe=60,V=new q,ke=e=>{requestAnimationFrame(ke);let t=Math.min(.1,Math.max(0,(e-Te)/1e3));Te=e,Ee+=t,De++,Ee>.5&&(Oe=De/Ee,Ee=0,De=0);let n=te.poll(t);re&&!ie&&(n={...n,...re.input(k,t)}),ne&&(n={...n,...ne}),(n.go>0||te.active)&&(B.markStarted(),I.markStarted()),I.update(),i.value.dynamicRes&&!ie&&m.sample(t*1e3)&&h();let r=n.boost;ie||(n={...n,boost:ae.step(n.boost,t,L.state.mode===`ride`)});let a=[],o=z();ie||xe(L.update(t,o,k.p[0],k.p[2],r));let s=L.seat(r);if(!ie&&ve)ve=tv(ve,{steer:n.steer,go:n.go,brake:n.brake,boost:r},b,t),we=0;else if(!ie&&!s){we+=t;let e=0;for(;we>=Bf.dt&&e<rv;){A=[...k.p],M=Bf.step(k,n,b,Bf.dt),M.events.length&&a.push(...M.events),x&&S.record({p:k.p,v:k.v,f:k.f,n:M.normal,edgeDeg:M.edgeDeg,slipDeg:M.slipDeg,speed:M.speed,air:M.air},Bf.dt),N.push(k.t,Vf(k));let t=b.piste(k.p[0],k.p[2]),r=le.step({t:k.t,dt:Bf.dt,p:k.p,v:k.v,speed:M.speed,edgeDeg:M.edgeDeg,load:M.load,air:M.air,events:M.events,piste:t});r.length&&de(r),we-=Bf.dt,e++}e>=rv&&(we=0)}let c=ie?1:we/Bf.dt,l=ve?[ve.p[0],ve.p[1],ve.p[2]]:[A[0]+(k.p[0]-A[0])*c,A[1]+(k.p[1]-A[1])*c,A[2]+(k.p[2]-A[2])*c],u=L.state.mode===`ride`?L.state:null,d=u?L.lines[u.lift]:null;if(s&&d){let e=sh(d.spec,s.grip,u.seat);if(l[0]=e.p[0],l[1]=e.p[1],l[2]=e.p[2],!ie){w.sit(t,e.p,e.yaw);let n=[s.grip.dx*s.speed,0,s.grip.dz*s.speed],r=d.spec.kind===`gondola`?[s.grip.x,s.grip.y-d.spec.hang+.2,s.grip.z]:[e.p[0],e.p[1]-.4,e.p[2]];P.update(t,r,n,[s.grip.dx,0,s.grip.dz],b)}}else if(!ie&&ve){w.walk(t,ve.p,ve.yaw,ve.phase,ve.speed);let e=[Math.sin(ve.yaw),0,Math.cos(ve.yaw)];P.update(t,l,[e[0]*ve.speed,0,e[2]*ve.speed],e,b)}else if(!ie){w.update(t,l,k,M,n);let e=[k.f[0]*k.fwd,k.f[1]*k.fwd,k.f[2]*k.fwd];P.update(t,l,k.v,e,b)}ie||(x&&S.update(t),_.follow(V.set(l[0],l[1],l[2])),y.update(P.camera.position)),y.liftRender.update(o,u?{lift:u.lift,k:u.k,tau:u.tau}:null,P.camera.position);let v=L.state;if(v.mode===`ride`&&s)B.setLift({kind:`ride`,name:se(v.lift),progress:s.progress});else if(v.mode===`wait`)B.setLift({kind:`wait`,name:se(v.lift),secs:L.waitLeft(o)});else{let e=ie?null:L.available(l[0],l[2],ve?0:_e());B.setLift(e===null?null:{kind:`near`,name:se(e)})}let C=b.piste(l[0],l[2]),T=C?f.map.pistes[C.id]:null,E=T?sg()===`en`?T.nameEn??T.name:T.name:null,D=ve?Math.abs(ve.speed):Math.hypot(k.v[0],k.v[2]),O=ve?ve.yaw:s?Math.atan2(s.grip.dx,s.grip.dz):D>.5?Math.atan2(k.v[0],k.v[2]):Math.atan2(k.f[0]*k.fwd,k.f[2]*k.fwd),F=s?{...M,speed:s.speed,edgeDeg:0,slipDeg:0,load:1}:ve?{...j(),speed:D,label:`stop`}:M;B.update(t,{out:F,x:l[0],z:l[2],altitude:l[1],slopeDeg:b.slopeDeg(l[0],l[2]),heading:O,pisteName:E,onLift:!!s},ae.energy),a.length&&B.handleEvents(a),B.stats.update(t,()=>({cur:le.current(),radius:s?null:le.radius,day:le.day.get(),piste:s?null:C&&C.edgeDist<=3?ue(C.id):null})),p.render(g,P.camera)};return requestAnimationFrame(ke),{renderer:p,scene:g,rider:()=>w===fe?`manny`:`basic`,camera:P.camera,riderRoot:()=>w.root,state:()=>k,output:()=>M,setInputOverride:e=>{ne=e},fps:()=>Oe,world:y,device:r,settings:i,quality:()=>u,pixelRatio:()=>p.getPixelRatio(),renderScale:()=>m.scale,lifts:L,goToLift:(e,t=!1)=>{let n=L.lines[e];if(!n)return;L.state.mode!==`free`&&(L.state={mode:`free`},P.override=null,w.root.visible=!0);let r=n.boardPoint(),i=r.x-r.dz*3.2,a=r.z+r.dx*3.2;be([i,b.height(i,a),a],[r.dx,0,r.dz]),re=null,t&&xe(L.use(i,a,0,z()))},setLiftClockOffset:e=>{R=e},trails:()=>S.stats(),clearTrails:()=>S.clear(),trailSystem:S,place:(e,t,n,r)=>{let i=Math.hypot(n,r)||1;Se([e,0,t],[n/i,0,r/i])},stats:le,onFoot:()=>ve,toggleFoot:ye}}ov(document.getElementById(`view`),document.getElementById(`ui`)).then(e=>{window.__hs=e}).catch(e=>console.error(`[heygo-slopes] start failed`,e));export{xc as $,v as A,Zo as B,Pe as C,ia as D,Gi as E,Jr as F,m as G,f as H,It as I,ec as J,vs as K,J as L,Ge as M,ks as N,ra as O,rc as P,aa as Q,fi as R,as as S,$i as T,p as U,Xo as V,h as W,$s as X,Ys as Y,ua as Z,ac as _,Q as a,wi as at,zr as b,ar as c,tn as ct,d,q as dt,Lt as et,Y as f,Ss as ft,Fn as g,Ms as h,$m as i,ki as it,_ as j,g as k,Cr as l,Fs as lt,nc as m,Dh as n,u as nt,Cs as o,Ar as ot,Gt as p,Pn as q,Eh as r,We as rt,Ti as s,Zs as st,ng as t,bs as tt,Rr as u,K as ut,Ai as v,Fe as w,Hr as x,Ri as y,ei as z};
//# sourceMappingURL=index-BYfjcq6N.js.map