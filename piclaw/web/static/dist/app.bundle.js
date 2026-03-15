var f6=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var H$,c_,A1,x6,D2,q1,P1,M1,S1,Z3,e$,_3,I6,Q$={},U$=[],T6=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,F$=Array.isArray;function Q2(_,$){for(var j in $)_[j]=$[j];return _}function N3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function C1(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?H$.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return V$(_,z,Z,N,null)}function V$(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++A1:N,__i:-1,__u:0};return N==null&&c_.vnode!=null&&c_.vnode(K),K}function y$(_){return _.children}function W$(_,$){this.props=_,this.context=$}function R2(_,$){if($==null)return _.__?R2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?R2(_):null}function u6(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=Q2({},$);K.__v=$.__v+1,c_.vnode&&c_.vnode(K),K3(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?R2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,T1(Z,K,N),$.__e=$.__=null,K.__e!=j&&f1(K)}}function f1(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),f1(_)}function Q1(_){(!_.__d&&(_.__d=!0)&&D2.push(_)&&!B$.__r++||q1!=c_.debounceRendering)&&((q1=c_.debounceRendering)||P1)(B$)}function B$(){try{for(var _,$=1;D2.length;)D2.length>$&&D2.sort(M1),_=D2.shift(),$=D2.length,u6(_)}finally{D2.length=B$.__r=0}}function x1(_,$,j,Z,N,K,z,L,X,O,q){var W,y,k,x,I,v,C,H=Z&&Z.__k||U$,b=$.length;for(X=m6(j,$,H,X,b),W=0;W<b;W++)(k=j.__k[W])!=null&&(y=k.__i!=-1&&H[k.__i]||Q$,k.__i=W,v=K3(_,k,y,N,K,z,L,X,O,q),x=k.__e,k.ref&&y.ref!=k.ref&&(y.ref&&z3(y.ref,null,k),q.push(k.ref,k.__c||x,k)),I==null&&x!=null&&(I=x),(C=!!(4&k.__u))||y.__k===k.__k?X=I1(k,X,_,C):typeof k.type=="function"&&v!==void 0?X=v:x&&(X=x.nextSibling),k.__u&=-7);return j.__e=I,X}function m6(_,$,j,Z,N){var K,z,L,X,O,q=j.length,W=q,y=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=V$(null,z,null,null,null):F$(z)?z=_.__k[K]=V$(y$,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=V$(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,X=K+y,z.__=_,z.__b=_.__b+1,L=null,(O=z.__i=v6(z,j,X,W))!=-1&&(W--,(L=j[O])&&(L.__u|=2)),L==null||L.__v==null?(O==-1&&(N>q?y--:N<q&&y++),typeof z.type!="function"&&(z.__u|=4)):O!=X&&(O==X-1?y--:O==X+1?y++:(O>X?y--:y++,z.__u|=4))):_.__k[K]=null;if(W)for(K=0;K<q;K++)(L=j[K])!=null&&(2&L.__u)==0&&(L.__e==Z&&(Z=R2(L)),m1(L,L));return Z}function I1(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=I1(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=R2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function v6(_,$,j,Z){var N,K,z,L=_.key,X=_.type,O=$[j],q=O!=null&&(2&O.__u)==0;if(O===null&&L==null||q&&L==O.key&&X==O.type)return j;if(Z>(q?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((O=$[z=N>=0?N--:K++])!=null&&(2&O.__u)==0&&L==O.key&&X==O.type)return z}return-1}function U1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||T6.test($)?j:j+"px"}function X$(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||U1(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||U1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(S1,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=Z3,_.addEventListener($,K?_3:e$,K)):_.removeEventListener($,K?_3:e$,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(L){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function B1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=Z3++;else if($.t<j.u)return;return j(c_.event?c_.event($):$)}}}function K3(_,$,j,Z,N,K,z,L,X,O){var q,W,y,k,x,I,v,C,H,b,S,g,a,t,l,Z_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(X=!!(32&j.__u),K=[L=$.__e=j.__e]),(q=c_.__b)&&q($);_:if(typeof Z_=="function")try{if(C=$.props,H=Z_.prototype&&Z_.prototype.render,b=(q=Z_.contextType)&&Z[q.__c],S=q?b?b.props.value:q.__:Z,j.__c?v=(W=$.__c=j.__c).__=W.__E:(H?$.__c=W=new Z_(C,S):($.__c=W=new W$(C,S),W.constructor=Z_,W.render=g6),b&&b.sub(W),W.state||(W.state={}),W.__n=Z,y=W.__d=!0,W.__h=[],W._sb=[]),H&&W.__s==null&&(W.__s=W.state),H&&Z_.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=Q2({},W.__s)),Q2(W.__s,Z_.getDerivedStateFromProps(C,W.__s))),k=W.props,x=W.state,W.__v=$,y)H&&Z_.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),H&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(H&&Z_.getDerivedStateFromProps==null&&C!==k&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(C,S),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(C,W.__s,S)===!1){$.__v!=j.__v&&(W.props=C,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),U$.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&z.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(C,W.__s,S),H&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(k,x,I)})}if(W.context=S,W.props=C,W.__P=_,W.__e=!1,g=c_.__r,a=0,H)W.state=W.__s,W.__d=!1,g&&g($),q=W.render(W.props,W.state,W.context),U$.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,g&&g($),q=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++a<25);W.state=W.__s,W.getChildContext!=null&&(Z=Q2(Q2({},Z),W.getChildContext())),H&&!y&&W.getSnapshotBeforeUpdate!=null&&(I=W.getSnapshotBeforeUpdate(k,x)),t=q!=null&&q.type===y$&&q.key==null?u1(q.props.children):q,L=x1(_,F$(t)?t:[t],$,j,Z,N,K,z,L,X,O),W.base=$.__e,$.__u&=-161,W.__h.length&&z.push(W),v&&(W.__E=W.__=null)}catch(i){if($.__v=null,X||K!=null)if(i.then){for($.__u|=X?160:128;L&&L.nodeType==8&&L.nextSibling;)L=L.nextSibling;K[K.indexOf(L)]=null,$.__e=L}else{for(l=K.length;l--;)N3(K[l]);$3($)}else $.__e=j.__e,$.__k=j.__k,i.then||$3($);c_.__e(i,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):L=$.__e=R6(j.__e,$,j,Z,N,K,z,X,O);return(q=c_.diffed)&&q($),128&$.__u?void 0:L}function $3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some($3))}function T1(_,$,j){for(var Z=0;Z<j.length;Z++)z3(j[Z],j[++Z],j[++Z]);c_.__c&&c_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){c_.__e(K,N.__v)}})}function u1(_){return typeof _!="object"||_==null||_.__b>0?_:F$(_)?_.map(u1):Q2({},_)}function R6(_,$,j,Z,N,K,z,L,X){var O,q,W,y,k,x,I,v=j.props||Q$,C=$.props,H=$.type;if(H=="svg"?N="http://www.w3.org/2000/svg":H=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(O=0;O<K.length;O++)if((k=K[O])&&"setAttribute"in k==!!H&&(H?k.localName==H:k.nodeType==3)){_=k,K[O]=null;break}}if(_==null){if(H==null)return document.createTextNode(C);_=document.createElementNS(N,H,C.is&&C),L&&(c_.__m&&c_.__m($,K),L=!1),K=null}if(H==null)v===C||L&&_.data==C||(_.data=C);else{if(K=K&&H$.call(_.childNodes),!L&&K!=null)for(v={},O=0;O<_.attributes.length;O++)v[(k=_.attributes[O]).name]=k.value;for(O in v)k=v[O],O=="dangerouslySetInnerHTML"?W=k:O=="children"||(O in C)||O=="value"&&("defaultValue"in C)||O=="checked"&&("defaultChecked"in C)||X$(_,O,null,k,N);for(O in C)k=C[O],O=="children"?y=k:O=="dangerouslySetInnerHTML"?q=k:O=="value"?x=k:O=="checked"?I=k:L&&typeof k!="function"||v[O]===k||X$(_,O,k,v[O],N);if(q)L||W&&(q.__html==W.__html||q.__html==_.innerHTML)||(_.innerHTML=q.__html),$.__k=[];else if(W&&(_.innerHTML=""),x1($.type=="template"?_.content:_,F$(y)?y:[y],$,j,Z,H=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&R2(j,0),L,X),K!=null)for(O=K.length;O--;)N3(K[O]);L||(O="value",H=="progress"&&x==null?_.removeAttribute("value"):x!=null&&(x!==_[O]||H=="progress"&&!x||H=="option"&&x!=v[O])&&X$(_,O,x,v[O],N),O="checked",I!=null&&I!=_[O]&&X$(_,O,I,v[O],N))}return _}function z3(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){c_.__e(N,j)}}function m1(_,$,j){var Z,N;if(c_.unmount&&c_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||z3(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){c_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&m1(Z[N],$,j||typeof _.type!="function");j||N3(_.__e),_.__c=_.__=_.__e=void 0}function g6(_,$,j){return this.constructor(_,j)}function v1(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),c_.__&&c_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],K3($,_=(!Z&&j||$).__k=C1(y$,null,[_]),N||Q$,Q$,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?H$.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),T1(K,_,z)}H$=U$.slice,c_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(L){_=L}throw _}},A1=0,x6=function(_){return _!=null&&_.constructor===void 0},W$.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Q2({},this.state),typeof _=="function"&&(_=_(Q2({},j),this.props)),_&&Q2(j,_),_!=null&&this.__v&&($&&this._sb.push($),Q1(this))},W$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Q1(this))},W$.prototype.render=y$,D2=[],P1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,M1=function(_,$){return _.__v.__b-$.__v.__b},B$.__r=0,S1=/(PointerCapture)$|Capture$/i,Z3=0,e$=B1(!1),_3=B1(!0),I6=0;var s2,K0,t$,H1,a2=0,R1=[],N0=c_,F1=N0.__b,y1=N0.__r,J1=N0.diffed,D1=N0.__c,E1=N0.unmount,w1=N0.__;function Y3(_,$){N0.__h&&N0.__h(K0,_,a2||$),a2=0;var j=K0.__H||(K0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return a2=1,c6(c1,_)}function c6(_,$,j){var Z=Y3(s2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):c1(void 0,$),function(L){var X=Z.__N?Z.__N[0]:Z.__[0],O=Z.t(X,L);X!==O&&(Z.__N=[O,Z.__[1]],Z.__c.setState({}))}],Z.__c=K0,!K0.__f)){var N=function(L,X,O){if(!Z.__c.__H)return!0;var q=Z.__c.__H.__.filter(function(y){return y.__c});if(q.every(function(y){return!y.__N}))return!K||K.call(this,L,X,O);var W=Z.__c.props!==L;return q.some(function(y){if(y.__N){var k=y.__[0];y.__=y.__N,y.__N=void 0,k!==y.__[0]&&(W=!0)}}),K&&K.call(this,L,X,O)||W};K0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=K0;K0.componentWillUpdate=function(L,X,O){if(this.__e){var q=K;K=void 0,N(L,X,O),K=q}z&&z.call(this,L,X,O)},K0.shouldComponentUpdate=N}return Z.__N||Z.__}function m(_,$){var j=Y3(s2++,3);!N0.__s&&g1(j.__H,$)&&(j.__=_,j.u=$,K0.__H.__h.push(j))}function J(_){return a2=5,p_(function(){return{current:_}},[])}function p_(_,$){var j=Y3(s2++,7);return g1(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function M(_,$){return a2=8,p_(function(){return _},$)}function p6(){for(var _;_=R1.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(q$),$.__h.some(j3),$.__h=[]}catch(j){$.__h=[],N0.__e(j,_.__v)}}}N0.__b=function(_){K0=null,F1&&F1(_)},N0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),w1&&w1(_,$)},N0.__r=function(_){y1&&y1(_),s2=0;var $=(K0=_.__c).__H;$&&(t$===K0?($.__h=[],K0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(q$),$.__h.some(j3),$.__h=[],s2=0)),t$=K0},N0.diffed=function(_){J1&&J1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(R1.push($)!==1&&H1===N0.requestAnimationFrame||((H1=N0.requestAnimationFrame)||h6)(p6)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),t$=K0=null},N0.__c=function(_,$){$.some(function(j){try{j.__h.some(q$),j.__h=j.__h.filter(function(Z){return!Z.__||j3(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],N0.__e(Z,j.__v)}}),D1&&D1(_,$)},N0.unmount=function(_){E1&&E1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{q$(Z)}catch(N){$=N}}),j.__H=void 0,$&&N0.__e($,j.__v))};var k1=typeof requestAnimationFrame=="function";function h6(_){var $,j=function(){clearTimeout(Z),k1&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);k1&&($=requestAnimationFrame(j))}function q$(_){var $=K0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),K0=$}function j3(_){var $=K0;_.__c=_.__(),K0=$}function g1(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function c1(_,$){return typeof $=="function"?$(_):$}var p1=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],L=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=L:z===4?Z[1]=Object.assign(Z[1]||{},L):z===5?(Z[1]=Z[1]||{})[$[++K]]=L:z===6?Z[1][$[++K]]+=L+"":z?(N=_.apply(L,p1(_,L,j,["",null])),Z.push(N),L[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(L)}return Z},b1=new Map;function i6(_){var $=b1.get(this);return $||($=new Map,b1.set(this,$)),($=p1(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",L="",X=[0],O=function(y){K===1&&(y||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,y,z):K===3&&(y||z)?(X.push(3,y,z),K=2):K===2&&z==="..."&&y?X.push(4,y,0):K===2&&z&&!y?X.push(5,0,!0,z):K>=5&&((z||!y&&K===5)&&(X.push(K,0,z,N),K=6),y&&(X.push(K,y,0,N),K=6)),z=""},q=0;q<j.length;q++){q&&(K===1&&O(),O(q));for(var W=0;W<j[q].length;W++)Z=j[q][W],K===1?Z==="<"?(O(),X=[X],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:L?Z===L?L="":z+=Z:Z==='"'||Z==="'"?L=Z:Z===">"?(O(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[q][W+1]===">")?(O(),K===3&&(X=X[0]),K=X,(X=X[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(O(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,X=X[0])}return O(),X}(_)),$),arguments,[])).length>1?$:$[0]}var Q=i6.bind(C1);async function d_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function h1(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function l6(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:L}=await j.read();if(L)break;N+=Z.decode(z,{stream:!0});let X=N.split(`

`);N=X.pop()||"";for(let O of X){let q=h1(O);if(q)$(q.event,q.data)}}N+=Z.decode();let K=h1(N);if(K)$(K.event,K.data)}async function J$(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return d_(Z)}async function i1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return d_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function l1(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",L=N?`&scope=${encodeURIComponent(N)}`:"",X=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return d_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${L}${X}`)}async function n1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return d_(`/thread/${_}${j}`)}async function o1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return d_(N,{method:"DELETE"})}async function t2(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return d_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function D$(){return d_("/agent/active-chats")}async function G3(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/branches${$}`)}async function O3(_,$={}){return d_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function L3(_,$={}){return d_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function X3(_){return d_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function d1(){return d_("/agents")}async function r1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/status${$}`)}async function V3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/context${$}`)}async function W3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/queue-state${$}`)}async function q3(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function Q3(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function x2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/models${$}`)}async function s1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function U3(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function a1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function B3(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await l6(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function t1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function e1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return d_(j)}async function _4(_,$,j){return d_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function X2(_){return`/media/${_}`}function $4(_){return`/media/${_}/thumbnail`}async function e2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function j4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Z4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function E$(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return d_(Z)}async function N4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return d_(N)}async function K4(_){return d_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function H3(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",L=await fetch(""+z,{method:"POST",body:Z});if(!L.ok){let X=await L.json().catch(()=>({error:"Upload failed"})),O=Error(X.error||`HTTP ${L.status}`);throw O.status=L.status,O.code=X.code,O}return L.json()}async function z4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function Y4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function G4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function O4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return d_($,{method:"DELETE"})}async function w$(_,$=!1){return d_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function F3(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function L4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class y3{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_request",($)=>{this.onEvent("agent_request",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),this.eventSource.addEventListener("agent_request_timeout",($)=>{this.onEvent("agent_request_timeout",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function o0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function o_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function g2(_,$=!1){let j=o0(_);if(j===null)return $;return j==="true"}function c2(_,$=null){let j=o0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function k$(_){return String(_||"").trim().toLowerCase()}function J3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return k$($[1]||"")}function X4(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=k$(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function V4(_,$,j={}){let Z=J3($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return X4(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return k$(K?.agent_name).startsWith(Z)})}function D3(_){let $=k$(_);return $?`@${$} `:""}function W4(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return X4(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function q4({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function U2({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let L=`${_}-file-pill`,X=`${_}-file-name`,O=`${_}-file-remove`,q=z==="message"?Q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return Q`
    <span class=${L} title=${j||$} onClick=${N}>
      ${q}
      <span class=${X}>${$}</span>
      ${Z&&Q`
        <button
          class=${O}
          onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),Z()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var o6=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function d6({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${Q4(j)} / ${Q4(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,L=$/100*z,X=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return Q`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${L} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function Q4(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function U4({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:L,fileRefs:X=[],onRemoveFileRef:O,onClearFileRefs:q,messageRefs:W=[],onRemoveMessageRef:y,onClearMessageRefs:k,activeModel:x=null,modelUsage:I=null,thinkingLevel:v=null,supportsThinking:C=!1,contextUsage:H=null,notificationsEnabled:b=!1,notificationPermission:S="default",onToggleNotifications:g,onModelChange:a,onModelStateChange:t,activeEditorPath:l=null,onAttachEditorFile:Z_,onOpenFilePill:i,followupQueueItems:U_=[],onInjectQueuedFollowup:q_,onRemoveQueuedFollowup:r,onSubmitIntercept:__,onMessageResponse:K_,onPopOutChat:j_,isAgentActive:G_=!1,activeChatAgents:L_=[],currentChatJid:F_="web:default"}){let[N_,J_]=T(""),[w_,r_]=T(""),[D_,T_]=T([]),[k_,h_]=T(!1),[p,X_]=T([]),[V_,W_]=T(0),[y_,b_]=T(!1),[u_,B_]=T([]),[S_,f_]=T(0),[z0,i_]=T(!1),[e_,U0]=T(!1),[C_,_0]=T(!1),[B0,D0]=T([]),[H0,Y0]=T(!1),[E0,l_]=T(0),R_=J(null),P0=J(null),g_=J(null),n_=J(null),w0=J(null),Q_=J(null),P=J(0),e=200,A_=(U)=>{let f=new Set,n=[];for(let Y_ of U||[]){if(typeof Y_!=="string")continue;let P_=Y_.trim();if(!P_||f.has(P_))continue;f.add(P_),n.push(P_)}return n},m_=()=>{let U=o0("piclaw_compose_history");if(!U)return[];try{let f=JSON.parse(U);if(!Array.isArray(f))return[];return A_(f)}catch{return[]}},k0=(U)=>{o_("piclaw_compose_history",JSON.stringify(U))},r0=J(m_()),q0=J(-1),G0=J(""),X0=N_.trim()||D_.length>0||X.length>0||W.length>0,s0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),M0=typeof window<"u"&&typeof Notification<"u",v0=typeof window<"u"?Boolean(window.isSecureContext):!1,i2=M0&&v0&&S!=="denied",w2=S==="granted"&&b,g0=w2?"Disable notifications":"Enable notifications",$0=W4(L_,{currentChatJid:F_,limit:4}),j2=$0.length>0,O0=!j&&q4({footerWidth:E0,visibleAgentCount:$0.length,hasContextIndicator:Boolean(H&&H.percent!=null)}),j0=x||"",x_=C&&v?` (${v})`:"",I0=x_.trim()?`${v}`:"",c0=typeof I?.hint_short==="string"?I.hint_short.trim():"",Z2=[I0||null,c0||null].filter(Boolean).join(" • "),F2=[j0?`Current model: ${j0}${x_}`:null,I?.plan?`Plan: ${I.plan}`:null,c0||null,I?.primary?.reset_description||null,I?.secondary?.reset_description||null].filter(Boolean),k2=e_?"Switching model…":F2.join(" • ")||`Current model: ${j0}${x_} (tap to open model picker)`,F0=(U)=>{if(!U||typeof U!=="object")return;let f=U.model??U.current;if(typeof t==="function")t({model:f??null,thinking_level:U.thinking_level??null,supports_thinking:U.supports_thinking,provider_usage:U.provider_usage??null});if(f&&typeof a==="function")a(f)},b2=(U)=>{let f=U||R_.current;if(!f)return;f.style.height="auto",f.style.height=`${f.scrollHeight}px`,f.style.overflowY="hidden"},l2=(U)=>{if(!U.startsWith("/")||U.includes(`
`)){b_(!1),X_([]);return}let f=U.toLowerCase().split(" ")[0];if(f.length<1){b_(!1),X_([]);return}let n=o6.filter((Y_)=>Y_.name.startsWith(f)||Y_.name.replace(/-/g,"").startsWith(f.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===f))i_(!1),B_([]),X_(n),W_(0),b_(!0);else b_(!1),X_([])},y2=(U)=>{let f=N_,n=f.indexOf(" "),Y_=n>=0?f.slice(n):"",P_=U.name+Y_;J_(P_),b_(!1),X_([]),requestAnimationFrame(()=>{let a_=R_.current;if(!a_)return;let M_=P_.length;a_.selectionStart=M_,a_.selectionEnd=M_,a_.focus()})},u2=(U)=>{if(J3(U)==null){i_(!1),B_([]);return}let f=V4(L_,U,{currentChatJid:F_});if(f.length>0&&!(f.length===1&&D3(f[0].agent_name).trim().toLowerCase()===String(U||"").trim().toLowerCase()))b_(!1),X_([]),B_(f),f_(0),i_(!0);else i_(!1),B_([])},W2=(U)=>{let f=D3(U?.agent_name);if(!f)return;J_(f),i_(!1),B_([]),requestAnimationFrame(()=>{let n=R_.current;if(!n)return;let Y_=f.length;n.selectionStart=Y_,n.selectionEnd=Y_,n.focus()})},s_=(U)=>{if(j)r_(U);else J_(U),l2(U),u2(U);requestAnimationFrame(()=>b2())},A2=(U)=>{let f=j?w_:N_,n=f&&!f.endsWith(`
`)?`
`:"",Y_=`${f}${n}${U}`.trimStart();s_(Y_)},S0=(U)=>{let f=U?.command?.model_label;if(f)return f;let n=U?.command?.message;if(typeof n==="string"){let Y_=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(Y_?.[1])return Y_[1].trim()}return null},C0=async(U)=>{if(j||e_)return;U0(!0);try{let f=await t2("default",U,null,[],null,F_),n=S0(f);F0({model:n??x??null,thinking_level:f?.command?.thinking_level,supports_thinking:f?.command?.supports_thinking});try{let Y_=await x2(F_);if(Y_)F0(Y_)}catch{}return _?.(),!0}catch(f){return console.error("Failed to switch model:",f),alert("Failed to switch model: "+f.message),!1}finally{U0(!1)}},N2=async()=>{await C0("/cycle-model")},z$=async(U)=>{if(!U||e_)return;if(await C0(`/model ${U}`))_0(!1)},Q0=(U)=>{U.preventDefault(),U.stopPropagation(),_0((f)=>!f)},P2=(U)=>{if(U==="queue"||U==="steer"||U==="auto")return U;return G_?"queue":null},K2=async(U,f,n={})=>{let{includeMedia:Y_=!0,includeFileRefs:P_=!0,includeMessageRefs:a_=!0,clearAfterSubmit:M_=!0,recordHistory:Z0=!0}=n||{},h0=typeof U==="string"?U:U&&typeof U?.target?.value==="string"?U.target.value:N_,J2=typeof h0==="string"?h0:"";if(!J2.trim()&&(Y_?D_.length===0:!0)&&(P_?X.length===0:!0)&&(a_?W.length===0:!0))return;b_(!1),X_([]),i_(!1),B_([]);let T0=Y_?[...D_]:[],Y2=P_?[...X]:[],G2=a_?[...W]:[],i0=J2.trim();if(Z0&&i0){let O2=r0.current,y0=A_(O2.filter((f2)=>f2!==i0));if(y0.push(i0),y0.length>200)y0.splice(0,y0.length-200);r0.current=y0,k0(y0),q0.current=-1,G0.current=""}if(M_)J_(""),T_([]),q?.(),k?.();(async()=>{try{if(await __?.({content:i0,submitMode:f,fileRefs:Y2,messageRefs:G2,mediaFiles:T0})){_?.();return}let y0=[];for(let u of T0){let d=await s1(u);y0.push(d.id)}let f2=Y2.length?`Files:
${Y2.map((u)=>`- ${u}`).join(`
`)}`:"",V=G2.length?`Referenced messages:
${G2.map((u)=>`- message:${u}`).join(`
`)}`:"",B=y0.length?`Images:
${y0.map((u,d)=>{let o=T0[d]?.name||`image-${d+1}`;return`- attachment:${u} (${o})`}).join(`
`)}`:"",w=[i0,f2,V,B].filter(Boolean).join(`

`),E=await t2("default",w,null,y0,P2(f),F_);if(K_?.(E),E?.command){F0({model:E.command.model_label??x??null,thinking_level:E.command.thinking_level,supports_thinking:E.command.supports_thinking});try{let u=await x2(F_);if(u)F0(u)}catch{}}_?.()}catch(O2){console.error("Failed to post:",O2)}})()},z2=(U)=>{q_?.(U)},M2=(U)=>{if(U.isComposing)return;if(j&&U.key==="Escape"){U.preventDefault(),r_(""),L?.();return}if(z0&&u_.length>0){let f=R_.current?.value??(j?w_:N_);if(!String(f||"").match(/^@([a-zA-Z0-9_-]*)$/))i_(!1),B_([]);else{if(U.key==="ArrowDown"){U.preventDefault(),f_((n)=>(n+1)%u_.length);return}if(U.key==="ArrowUp"){U.preventDefault(),f_((n)=>(n-1+u_.length)%u_.length);return}if(U.key==="Tab"||U.key==="Enter"){U.preventDefault(),W2(u_[S_]);return}if(U.key==="Escape"){U.preventDefault(),i_(!1),B_([]);return}}}if(y_&&p.length>0){let f=R_.current?.value??(j?w_:N_);if(!String(f||"").startsWith("/"))b_(!1),X_([]);else{if(U.key==="ArrowDown"){U.preventDefault(),W_((n)=>(n+1)%p.length);return}if(U.key==="ArrowUp"){U.preventDefault(),W_((n)=>(n-1+p.length)%p.length);return}if(U.key==="Tab"){U.preventDefault(),y2(p[V_]);return}if(U.key==="Enter"&&!U.shiftKey){if(!(R_.current?.value??(j?w_:N_)).includes(" ")){U.preventDefault();let P_=p[V_];b_(!1),X_([]),K2(P_.name);return}}if(U.key==="Escape"){U.preventDefault(),b_(!1),X_([]);return}}}if(!j&&(U.key==="ArrowUp"||U.key==="ArrowDown")&&!U.metaKey&&!U.ctrlKey&&!U.altKey&&!U.shiftKey){let f=R_.current;if(!f)return;let n=f.value||"",Y_=f.selectionStart===0&&f.selectionEnd===0,P_=f.selectionStart===n.length&&f.selectionEnd===n.length;if(U.key==="ArrowUp"&&Y_||U.key==="ArrowDown"&&P_){let a_=r0.current;if(!a_.length)return;U.preventDefault();let M_=q0.current;if(U.key==="ArrowUp"){if(M_===-1)G0.current=n,M_=a_.length-1;else if(M_>0)M_-=1;q0.current=M_,s_(a_[M_]||"")}else{if(M_===-1)return;if(M_<a_.length-1)M_+=1,q0.current=M_,s_(a_[M_]||"");else q0.current=-1,s_(G0.current||""),G0.current=""}requestAnimationFrame(()=>{let Z0=R_.current;if(!Z0)return;let h0=Z0.value.length;Z0.selectionStart=h0,Z0.selectionEnd=h0});return}}if(U.key==="Enter"&&!U.shiftKey&&(U.ctrlKey||U.metaKey)){U.preventDefault();let f=R_.current?.value??(j?w_:N_);if(j){if(f.trim())N?.(f.trim(),Z)}else K2(f,"steer");return}if(U.key==="Enter"&&!U.shiftKey){U.preventDefault();let f=R_.current?.value??(j?w_:N_);if(j){if(f.trim())N?.(f.trim(),Z)}else K2(f)}},p0=(U)=>{let f=Array.from(U||[]).filter((n)=>n&&n.type&&n.type.startsWith("image/"));if(!f.length)return;T_((n)=>[...n,...f])},a0=(U)=>{p0(U.target.files),U.target.value=""},f0=(U)=>{if(j)return;U.preventDefault(),U.stopPropagation(),P.current+=1,h_(!0)},t0=(U)=>{if(j)return;if(U.preventDefault(),U.stopPropagation(),P.current=Math.max(0,P.current-1),P.current===0)h_(!1)},S2=(U)=>{if(j)return;if(U.preventDefault(),U.stopPropagation(),U.dataTransfer)U.dataTransfer.dropEffect="copy";h_(!0)},C2=(U)=>{if(j)return;U.preventDefault(),U.stopPropagation(),P.current=0,h_(!1),p0(U.dataTransfer?.files||[])},e0=(U)=>{if(j)return;let f=U.clipboardData?.items;if(!f||!f.length)return;let n=[];for(let Y_ of f){if(Y_.kind!=="file")continue;let P_=Y_.getAsFile?.();if(P_)n.push(P_)}if(n.length>0)U.preventDefault(),p0(n)},q2=(U)=>{T_((f)=>f.filter((n,Y_)=>Y_!==U))},n2=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((U)=>{let{latitude:f,longitude:n,accuracy:Y_}=U.coords,P_=`${f.toFixed(5)}, ${n.toFixed(5)}`,a_=Number.isFinite(Y_)?` ±${Math.round(Y_)}m`:"",M_=`https://maps.google.com/?q=${f},${n}`,Z0=`Location: ${P_}${a_} ${M_}`;A2(Z0)},(U)=>{let f=U?.message||"Unable to retrieve location.";alert(`Location error: ${f}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!C_)return;Y0(!0),x2(F_).then((U)=>{let f=Array.isArray(U?.models)?U.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];D0(f),F0(U)}).catch((U)=>{console.warn("Failed to load model list:",U),D0([])}).finally(()=>{Y0(!1)})},[C_,x]),m(()=>{if(j)_0(!1),b_(!1),X_([]),i_(!1),B_([])},[j]),m(()=>{if(!C_)return;let U=(f)=>{let n=n_.current,Y_=w0.current,P_=f.target;if(n&&n.contains(P_))return;if(Y_&&Y_.contains(P_))return;_0(!1)};return document.addEventListener("pointerdown",U),()=>document.removeEventListener("pointerdown",U)},[C_]),m(()=>{let U=()=>{let Y_=Q_.current?.clientWidth||0;l_((P_)=>P_===Y_?P_:Y_)};U();let f=Q_.current,n=null;if(f&&typeof ResizeObserver<"u")n=new ResizeObserver(()=>U()),n.observe(f);if(typeof window<"u")window.addEventListener("resize",U);return()=>{if(n?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",U)}},[j,x,$0.length,H?.percent]);let b0=(U)=>{let f=U.target.value;b2(U.target),s_(f)};return m(()=>{requestAnimationFrame(()=>b2())},[N_,w_,j]),m(()=>{if(j)return;u2(N_)},[L_,F_,N_,j]),Q`
        <div class="compose-box">
            ${!j&&U_.length>0&&Q`
                <div class="compose-queue-stack">
                    ${U_.map((U)=>{let f=typeof U?.content==="string"?U.content:"";if(!f.trim())return null;return Q`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${f}>
                                    ${f}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>z2(U)}
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                        <polyline points="14 12 18 8 22 12" />
                                    </svg>
                                    <span>Steer</span>
                                </button>
                                <button
                                    class="compose-queue-stack-close-btn"
                                    type="button"
                                    title="Cancel queued message"
                                    onClick=${()=>r?.(U)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${k_?" drag-active":""}`}
                onDragEnter=${f0}
                onDragOver=${S2}
                onDragLeave=${t0}
                onDrop=${C2}
            >
                <div class="compose-input-main">
                    ${(X.length>0||D_.length>0||W.length>0)&&Q`
                        <div class="compose-file-refs">
                            ${W.map((U)=>{return Q`
                                    <${U2}
                                        key=${"msg-"+U}
                                        prefix="compose"
                                        label=${"msg:"+U}
                                        title=${"Message reference: "+U}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>y?.(U)}
                                    />
                                `})}
                            ${X.map((U)=>{let f=U.split("/").pop()||U;return Q`
                                    <${U2}
                                        prefix="compose"
                                        label=${f}
                                        title=${U}
                                        onClick=${()=>i?.(U)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>O?.(U)}
                                    />
                                `})}
                            ${D_.map((U,f)=>{let n=U?.name||`image-${f+1}`;return Q`
                                    <${U2}
                                        key=${n+f}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove image"
                                        onRemove=${()=>q2(f)}
                                    />
                                `})}
                        </div>
                    `}
                    ${!j&&typeof j_==="function"&&Q`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>j_?.()}
                            title="Open this chat in a new chat-only window"
                            aria-label="Open this chat in a new chat-only window"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 5h5v5" />
                                <path d="M10 14 19 5" />
                                <path d="M19 14v5h-5" />
                                <path d="M5 10V5h5" opacity="0" />
                                <path d="M5 19h5" />
                                <path d="M5 19v-5" />
                            </svg>
                        </button>
                    `}
                    <textarea
                        ref=${R_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?w_:N_}
                        onInput=${b0}
                        onKeyDown=${M2}
                        onPaste=${e0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${z0&&u_.length>0&&Q`
                        <div class="slash-autocomplete" ref=${g_}>
                            ${u_.map((U,f)=>Q`
                                <div
                                    key=${U.chat_jid||U.agent_name}
                                    class=${`slash-item${f===S_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),W2(U)}}
                                    onMouseEnter=${()=>f_(f)}
                                >
                                    <span class="slash-name">@${U.agent_name}</span>
                                    <span class="slash-desc">${U.display_name||U.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${y_&&p.length>0&&Q`
                        <div class="slash-autocomplete" ref=${P0}>
                            ${p.map((U,f)=>Q`
                                <div
                                    key=${U.name}
                                    class=${`slash-item${f===V_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),y2(U)}}
                                    onMouseEnter=${()=>W_(f)}
                                >
                                    <span class="slash-name">${U.name}</span>
                                    <span class="slash-desc">${U.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${C_&&!j&&Q`
                        <div class="compose-model-popup" ref=${n_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${H0&&Q`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!H0&&B0.length===0&&Q`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!H0&&B0.map((U)=>Q`
                                    <button
                                        key=${U}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${x===U?" active":""}`}
                                        onClick=${()=>{z$(U)}}
                                        disabled=${e_}
                                    >
                                        ${U}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{N2()}}
                                    disabled=${e_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${Q_}>
                    ${!j&&x&&Q`
                    <div class="compose-meta-row">
                        ${!j&&x&&Q`
                            <div class="compose-model-meta">
                                <button
                                    ref=${w0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${k2}
                                    aria-label="Open model picker"
                                    onClick=${Q0}
                                    disabled=${e_}
                                >
                                    ${e_?"Switching…":j0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!e_&&Z2&&Q`
                                        <span class="compose-model-usage-hint" title=${k2}>
                                            ${Z2}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${O0&&Q`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${$0.map((U)=>Q`
                                <button
                                    key=${U.chat_jid||U.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${U.is_active?" active":""}`}
                                    onClick=${()=>W2(U)}
                                    title=${`${U.display_name||U.chat_jid||"Active agent"} — insert @${U.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${U.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&H&&H.percent!=null&&Q`
                        <${d6} usage=${H} />
                    `}
                    ${j&&Q`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(U)=>K?.(U.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?L:z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?Q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:Q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${s0&&!j&&Q`
                        <button
                            class="icon-btn location-btn"
                            onClick=${n2}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${i2&&!j&&Q`
                        <button
                            class=${`icon-btn notification-btn${w2?" active":""}`}
                            onClick=${g}
                            title=${g0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&Q`
                        ${l&&Z_&&Q`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${Z_}
                                title=${`Attach open file: ${l}`}
                                type="button"
                                disabled=${X.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${a0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{K2()}}
                            disabled=${!X0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var H4="piclaw_theme",k3="piclaw_tint",P$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},r6={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B4={default:{label:"Default",mode:"auto",light:P$,dark:r6},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},s6=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],M$={theme:"default",tint:null},F4="light",E3=!1;function y4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function p2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function a6(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),L=parseInt(N[3],10);if(![K,z,L].every((O)=>Number.isFinite(O)))return null;let X=`#${[K,z,L].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:L,hex:X}}function J4(_){return p2(_)||a6(_)}function _$(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function w3(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function D4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function b3(_){return B4[_]||B4.default}function t6(_){return _.mode==="auto"?D4():_.mode}function e6(_,$){let j=b3(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||P$}function _5(_,$,j){let Z=J4($);if(!Z)return _;let N=p2(_.bgPrimary),K=p2(_.bgSecondary),z=p2(_.bgHover),L=p2(_.borderColor);if(!N||!K||!z||!L)return _;let O=p2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:_$(N,Z,0.08),bgSecondary:_$(K,Z,0.12),bgHover:_$(z,Z,0.16),borderColor:_$(L,Z,0.08),accent:Z.hex,accentHover:O?_$(Z,O,0.18):Z.hex}}function $5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=J4(Z),K=N?w3(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?w3(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",L=N?w3(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":L,"--danger-color":_.danger||P$.danger,"--success-color":_.success||P$.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([O,q])=>{if(q)j.style.setProperty(O,q)})}function j5(){if(typeof document>"u")return;let _=document.documentElement;s6.forEach(($)=>_.style.removeProperty($))}function b$(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function Z5(_,$){if(typeof document>"u")return;let j=b$("theme-color");if(j&&_)j.setAttribute("content",_);let Z=b$("msapplication-TileColor");if(Z&&_)Z.setAttribute("content",_);let N=b$("msapplication-navbutton-color");if(N&&_)N.setAttribute("content",_);let K=b$("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function N5(){if(typeof window>"u")return;let _={...M$,mode:F4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function A3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=y4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=b3(j),K=t6(N),z=e6(j,K);M$={theme:j,tint:Z},F4=K;let L=document.documentElement;L.dataset.theme=K,L.dataset.colorTheme=j,L.dataset.tint=Z?String(Z):"",L.style.colorScheme=K;let X=z;if(j==="default"&&Z)X=_5(z,Z,K);if(j==="default"&&!Z)j5();else $5(X,K);if(Z5(X.bgPrimary,K),N5(),$.persist!==!1)if(o_(H4,j),Z)o_(k3,Z);else o_(k3,"")}function A$(){if(b3(M$.theme).mode!=="auto")return;A3(M$,{persist:!1})}function E4(){if(typeof window>"u")return()=>{};let _=y4(o0(H4)||"default"),$=o0(k3),j=$?$.trim():null;if(A3({theme:_,tint:j},{persist:!1}),window.matchMedia&&!E3){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",A$);else if(Z.addListener)Z.addListener(A$);return E3=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",A$);else if(Z.removeListener)Z.removeListener(A$);E3=!1}}return()=>{}}function w4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;A3({theme:j||"default",tint:Z},{persist:!0})}function k4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return D4()}var S$=/#(\w+)/g,K5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),z5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),Y5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),G5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},O5=new Set(["http:","https:","mailto:",""]);function b4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function I2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!O5.has(Z.protocol))return null;return Z.href}catch{return null}}function A4(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let L=z.tagName.toLowerCase();if(!z5.has(L)){let O=z.parentNode;if(!O)continue;while(z.firstChild)O.insertBefore(z.firstChild,z);O.removeChild(z);continue}let X=G5[L]||new Set;for(let O of Array.from(z.attributes)){let q=O.name.toLowerCase(),W=O.value;if(q.startsWith("on")){z.removeAttribute(O.name);continue}if(q.startsWith("data-")||q.startsWith("aria-"))continue;if(X.has(q)||Y5.has(q)){if(q==="href"){let y=I2(W);if(!y)z.removeAttribute(O.name);else if(z.setAttribute(O.name,y),L==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(q==="src"){let y=L==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,k=I2(y,{allowDataImage:L==="img"});if(!k)z.removeAttribute(O.name);else z.setAttribute(O.name,k)}continue}z.removeAttribute(O.name)}}return j.body.innerHTML}function P4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function C$(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=P4(j);if(N===j)break;j=N}return j}function L5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let L of j){if(!K&&L.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&L.trim().match(/^```\s*$/)){let X=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${X}@@`),K=!1,z=[];continue}if(K)z.push(L);else N.push(L)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function X5(_){if(!_)return _;return C$(_,5)}function V5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function W5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function q5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=X5(K);return`<div class="mermaid-container" data-mermaid="${V5(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function M4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function S4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,X=(K.endsWith("/")?K.slice(0,-1).trim():K).split(/\s+/)[0]?.toLowerCase();if(!X||!K5.has(X))return $;if(X==="br")return N?"":"<br>";if(N)return`</${X}>`;return`<${X}>`})}function C4(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function f4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function Q5(_){if(!window.katex)return _;let $=(z)=>P4(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let L=[],X=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let q=L.length;return L.push(O),`@@CODE_BLOCK_${q}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let q=L.length;return L.push(O),`@@CODE_INLINE_${q}@@`}),{html:X,blocks:L}},Z=(z,L)=>{if(!L.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,O)=>{let q=Number(O);return L[q]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,L,X)=>{try{let O=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${L}${O}`}catch(O){return`<span class="math-error" title="${b4(O.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,L,X)=>{if(/\s$/.test(X))return z;try{let O=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${L}${O}`}catch(O){return`${L}<span class="math-error" title="${b4(O.message)}">$${X}$</span>`}}),Z(K,N.blocks)}function U5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(S$.lastIndex=0,!S$.test(z))continue;S$.lastIndex=0;let L=K.parentElement;if(L&&(L.closest("a")||L.closest("code")||L.closest("pre")))continue;let X=z.split(S$);if(X.length<=1)continue;let O=$.createDocumentFragment();X.forEach((q,W)=>{if(W%2===1){let y=$.createElement("a");y.setAttribute("href","#"),y.className="hashtag",y.setAttribute("data-hashtag",q),y.textContent=`#${q}`,O.appendChild(y)}else O.appendChild($.createTextNode(q))}),K.parentNode?.replaceChild(O,K)}return $.body.innerHTML}function B5(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function m0(_,$,j={}){if(!_)return"";let Z=B5(_),{text:N,blocks:K}=L5(Z),z=C$(N,2),X=M4(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=S4(X),q=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return q=C4(q),q=f4(q),q=Q5(q),q=U5(q),q=q5(q,K),q=A4(q,j),q}function f$(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=C$($,2),N=M4(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=S4(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=C4(z),z=f4(z),z=A4(z),z}async function B2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=k4()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let L=z.dataset.mermaid,X=W5(L||""),O=C$(X,2),q=await $(O,{...N,transparent:!0});z.innerHTML=q,z.removeAttribute("data-mermaid")}catch(L){console.error("Mermaid render error:",L);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${L.message}`,z.innerHTML="",z.appendChild(X),z.removeAttribute("data-mermaid")}}function x4(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function I4(_){return String(_||"").trim()||"web:default"}function T4(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function u4(_){if(!_)return!1;return _.status!=="running"}function m4(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function v4({session:_,onClose:$,onInject:j,onRetry:Z}){let N=J(null),K=J(null),z=_?.thinking?f$(_.thinking):"",L=_?.answer?m0(_.answer,null,{sanitize:!1}):"";if(m(()=>{if(N.current&&z)B2(N.current).catch(()=>{})},[z]),m(()=>{if(K.current&&L)B2(K.current).catch(()=>{})},[L]),!_)return null;let X=_.status==="running",O=Boolean(String(_.answer||"").trim()),q=Boolean(String(_.thinking||"").trim()),W=T4(_),y=u4(_),k=!X&&O,x=X?"Thinking…":_.status==="error"?"Error":"Done";return Q`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">BTW</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${x}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&Q`<div class="btw-block btw-question"><strong>Question:</strong> ${_.question}</div>`}
            ${_.error&&Q`<div class="btw-block btw-error">${_.error}</div>`}
            ${q&&Q`
                <details class="btw-block btw-thinking" open=${X?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${W&&Q`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:L}}
                    ></div>
                </div>
            `}

            ${y&&Q`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&Q`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!k}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var R4="PiClaw";function P3(_,$){let j=_||"PiClaw",Z=j.charAt(0).toUpperCase(),N=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=Z.charCodeAt(0)%N.length,z=N[K],L=j.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",q=(X?X:null)||(L==="PiClaw".toLowerCase()||L==="pi"?"/static/icon-192.png":null);return{letter:Z,color:z,image:q}}function g4(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function c4(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function p4(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",L=K?.dataset?.tint||"",X=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(X&&(L||z&&z!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function H5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function x$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function F5(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function h4(_,$=Date.now()){let j=H5(_);if(j===null)return null;return F5(Math.max(0,$-j))}function i4({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:L,onPanelToggle:X}){let W=(p)=>{if(!p)return{text:"",totalLines:0,fullText:""};if(typeof p==="string"){let y_=p,b_=y_?y_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y_,totalLines:b_,fullText:y_}}let X_=p.text||"",V_=p.fullText||p.full_text||X_,W_=Number.isFinite(p.totalLines)?p.totalLines:V_?V_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:X_,totalLines:W_,fullText:V_}},y=160,k=(p)=>{if(!p)return 1;return Math.max(1,Math.ceil(p.length/160))},x=(p,X_,V_)=>{let W_=(p||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!W_)return{text:"",omitted:0,totalLines:Number.isFinite(V_)?V_:0,visibleLines:0};let y_=W_.split(`
`),b_=y_.length>X_?y_.slice(0,X_).join(`
`):W_,u_=Number.isFinite(V_)?V_:y_.reduce((f_,z0)=>f_+k(z0),0),B_=b_?b_.split(`
`).reduce((f_,z0)=>f_+k(z0),0):0,S_=Math.max(u_-B_,0);return{text:b_,omitted:S_,totalLines:u_,visibleLines:B_}},I=W(j),v=W(Z),C=W($),H=Boolean(I.text)||I.totalLines>0,b=Boolean(v.text)||v.totalLines>0,S=Boolean(C.fullText?.trim()||C.text?.trim());if(!_&&!S&&!H&&!b&&!N&&!K)return null;let[g,a]=T(new Set),[t,l]=T(()=>Date.now()),Z_=(p)=>a((X_)=>{let V_=new Set(X_),W_=!V_.has(p);if(W_)V_.add(p);else V_.delete(p);if(typeof X==="function")X(p,W_);return V_});m(()=>{a(new Set)},[z]);let i=x$(_);m(()=>{if(!i)return;l(Date.now());let p=setInterval(()=>l(Date.now()),1000);return()=>clearInterval(p)},[i,_?.started_at,_?.startedAt]);let U_=_?.turn_id||z,q_=p4(U_),r=L?"turn-dot turn-dot-queued":"turn-dot",__=(p)=>p,K_=Boolean(_?.last_activity||_?.lastActivity),j_=(p)=>p==="warning"?"#f59e0b":p==="error"?"var(--danger-color)":p==="success"?"var(--success-color)":q_,G_=K?.kind||"info",L_=j_(G_),F_=j_(_?.kind||(i?"warning":"info")),N_="",J_=_?.title,w_=_?.status;if(_?.type==="plan")N_=J_?`Planning: ${J_}`:"Planning...";else if(_?.type==="tool_call")N_=J_?`Running: ${J_}`:"Running tool...";else if(_?.type==="tool_status")N_=J_?`${J_}: ${w_||"Working..."}`:w_||"Working...";else if(_?.type==="error")N_=J_||"Agent error";else N_=J_||w_||"Working...";if(K_)N_="Last activity just now";let r_=({panelTitle:p,text:X_,fullText:V_,totalLines:W_,maxLines:y_,titleClass:b_,panelKey:u_})=>{let B_=g.has(u_),S_=V_||X_||"",f_=typeof y_==="number",z0=B_&&f_,i_=f_?x(S_,y_,W_):{text:S_||"",omitted:0,totalLines:Number.isFinite(W_)?W_:0};if(!S_&&!(Number.isFinite(i_.totalLines)&&i_.totalLines>0))return null;let e_=`agent-thinking-body${f_?" agent-thinking-body-collapsible":""}`,U0=f_?`--agent-thinking-collapsed-lines: ${y_};`:"";return Q`
            <div
                class="agent-thinking"
                data-expanded=${B_?"true":"false"}
                data-collapsible=${f_?"true":"false"}
                style=${q_?`--turn-color: ${q_};`:""}
            >
                <div class="agent-thinking-title ${b_||""}">
                    ${q_&&Q`<span class=${r} aria-hidden="true"></span>`}
                    ${p}
                    ${z0&&Q`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${p} panel`}
                            onClick=${()=>Z_(u_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${e_}
                    style=${U0}
                    dangerouslySetInnerHTML=${{__html:f$(S_)}}
                />
                ${!B_&&i_.omitted>0&&Q`
                    <button class="agent-thinking-truncation" onClick=${()=>Z_(u_)}>
                        ▸ ${i_.omitted} more lines
                    </button>
                `}
                ${B_&&i_.omitted>0&&Q`
                    <button class="agent-thinking-truncation" onClick=${()=>Z_(u_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},D_=N?.tool_call?.title,T_=D_?`Awaiting approval: ${D_}`:"Awaiting approval",k_=i?h4(_,t):null,h_=(p,X_,V_=null)=>Q`
        <div
            class="agent-thinking agent-thinking-intent"
            aria-live="polite"
            style=${X_?`--turn-color: ${X_};`:""}
            title=${p?.detail||""}
        >
            <div class="agent-thinking-title intent">
                ${X_&&Q`<span class=${r} aria-hidden="true"></span>`}
                <span class="agent-thinking-title-text">${p.title}</span>
                ${V_&&Q`<span class="agent-status-elapsed">${V_}</span>`}
            </div>
            ${p.detail&&Q`<div class="agent-thinking-body">${p.detail}</div>`}
        </div>
    `;return Q`
        <div class="agent-status-panel">
            ${K&&h_(K,L_)}
            ${_?.type==="intent"&&h_(_,F_,k_)}
            ${N&&Q`
                <div class="agent-status agent-status-request" aria-live="polite" style=${q_?`--turn-color: ${q_};`:""}>
                    <span class=${r} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${T_}</span>
                </div>
            `}
            ${H&&r_({panelTitle:__("Planning"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,panelKey:"plan"})}
            ${b&&r_({panelTitle:__("Thoughts"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${S&&r_({panelTitle:__("Draft"),text:C.text,fullText:C.fullText,totalLines:C.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&Q`
                <div class=${`agent-status${K_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${q_?`--turn-color: ${q_};`:""}>
                    ${q_&&Q`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?Q`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!K_&&Q`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${N_}</span>
                </div>
            `}
        </div>
    `}function l4({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",L=Z?.kind||"other",X=Z?.rawInput||{},O=X.command||X.commands&&X.commands[0]||null,q=X.diff||null,W=X.fileName||X.path||null,y=Z?.description||X.description||X.explanation||null,x=(Array.isArray(Z?.locations)?Z.locations:[]).map((b)=>b?.path).filter((b)=>Boolean(b)),I=Array.from(new Set([W,...x].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let v=async(b)=>{try{await U3(j,b,K||null),$()}catch(S){console.error("Failed to respond to agent request:",S)}},C=async()=>{try{await t1(z,`Auto-approved: ${z}`),await U3(j,"approved",K||null),$()}catch(b){console.error("Failed to add to whitelist:",b)}},H=N&&N.length>0;return Q`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${z}</div>
                </div>
                ${(y||O||q||I.length>0)&&Q`
                    <div class="agent-request-body">
                        ${y&&Q`
                            <div class="agent-request-description">${y}</div>
                        `}
                        ${I.length>0&&Q`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${I.map((b,S)=>Q`<li key=${S}>${b}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${O&&Q`
                            <pre class="agent-request-command">${O}</pre>
                        `}
                        ${q&&Q`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${H?N.map((b)=>Q`
                            <button 
                                key=${b.optionId||b.id||String(b)}
                                class="agent-request-btn ${b.kind==="allow_once"||b.kind==="allow_always"?"primary":""}"
                                onClick=${()=>v(b.optionId||b.id||b)}
                            >
                                ${b.name||b.label||b.optionId||b.id||String(b)}
                            </button>
                        `):Q`
                        <button class="agent-request-btn primary" onClick=${()=>v("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>v("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${C}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function n4({status:_}){if(_==="connected")return null;return Q`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function o4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let X=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${O}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),L=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${L}`}function $$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function d0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function T2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var y5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),J5=new Set(["text/markdown"]);function j$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(y5.has($)||$.startsWith("text/"))return"text";return"unsupported"}function d4(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return J5.has($)}function r4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function D5(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function E5(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function s4(_){return D5(_)||E5(_)}function I$(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function w5(_,$){let j=Math.max(I$(_),I$($)),Z=Math.min(I$(_),I$($));return(j+0.05)/(Z+0.05)}function k5(_,$,j="#ffffff"){let Z=s4(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let L=s4(z);if(!L)continue;let X=w5(Z,L);if(X>K)N=z,K=X}return N}function M3(){let _=getComputedStyle(document.documentElement),$=(x,I)=>{for(let v of x){let C=_.getPropertyValue(v).trim();if(C)return C}return I},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),L=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),O=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),q=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),y=$(["--font-family"],"system-ui, sans-serif"),k=k5(L,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:L,good:X,warning:O,attention:q,border:W,fontFamily:y,buttonTextColor:k}}function a4(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:L,border:X,fontFamily:O}=M3();return{fontFamily:O,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:L,subtle:L}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:L,subtle:L}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var b5=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),t4=!1,T$=null,e4=!1;function S3(_){_.querySelector(".adaptive-card-notice")?.remove()}function A5(_,$,j="error"){S3(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function P5(_,$=(j)=>m0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function M5(_=($)=>m0($,null)){return($,j)=>{try{let Z=P5($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function S5(_){if(e4||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=M5(),e4=!0}async function C5(){if(t4)return;if(T$)return T$;return T$=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{t4=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),T$}function f5(){return globalThis.AdaptiveCards}function x5(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function I5(_){return b5.has(_)}function f3(_){if(!Array.isArray(_))return[];return _.filter(x5)}function T5(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:Z,data:K,url:N,raw:_}}function C3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>C3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${C3(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function u5(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return C3($);return typeof $==="string"?$:String($)}function m5(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((L)=>Z(L));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=u5(z.type,j[z.id],z);for(let[L,X]of Object.entries(z))if(Array.isArray(X)||X&&typeof X==="object")z[L]=Z(X);return z};return Z(_)}function v5(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function R5(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function g5(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=R5(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function _8(_,$,j){if(!I5($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await C5()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=f5();S5(Z);let N=new Z.AdaptiveCard,K=M3();N.hostConfig=new Z.HostConfig(a4());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,L=$.state==="active"?$.payload:m5($.payload,z);N.parse(L),N.onExecuteAction=(q)=>{let W=T5(q);if(j?.onAction)S3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((y)=>{console.error("[adaptive-card] Action failed:",y);let k=y instanceof Error?y.message:String(y||"Action failed.");A5(_,k||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let X=N.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let O=g5($);if(O){_.classList.add("adaptive-card-finished");let q=document.createElement("div");q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=O.label,q.appendChild(W),O.detail){let y=document.createElement("span");y.className="adaptive-card-status-detail",y.textContent=O.detail,q.appendChild(y)}_.appendChild(q)}if(S3(_),_.appendChild(X),O)v5(X);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function h2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>h2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${h2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function c5(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function x3(_){if(!Array.isArray(_))return[];return _.filter(c5)}function $8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=h2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:h2(K)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:K})=>`${N}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function j8(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:h2(K)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:K})=>`${N}: ${K}`).join(", "):h2(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function p5(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?d0($):null},{label:"Added",value:_?.created_at?T2(_.created_at):null}].filter((Z)=>Z.value)}function Z8({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=p_(()=>j$($?.content_type),[$?.content_type]),K=r4(N),z=p_(()=>d4($?.content_type),[$?.content_type]),[L,X]=T(N==="text"||N==="pdf"),[O,q]=T(""),[W,y]=T(null),[k,x]=T(null),I=J(null),v=p_(()=>p5($),[$]),C=p_(()=>{if(!z||!O)return"";return m0(O)},[z,O]);return m(()=>{let H=(b)=>{if(b.key==="Escape")j()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[j]),m(()=>{if(!I.current||!C)return;B2(I.current);return},[C]),m(()=>{let H=!1,b=null;async function S(){if(N==="text"){X(!0),x(null);try{let g=await j4(_);if(!H)q(g)}catch{if(!H)x("Failed to load text preview.")}finally{if(!H)X(!1)}return}if(N==="pdf"){X(!0),x(null);try{let g=await Z4(_);if(b=URL.createObjectURL(g),!H)y(b)}catch{if(!H)x("Failed to load PDF preview.")}finally{if(!H)X(!1)}return}X(!1)}return S(),()=>{if(H=!0,b)URL.revokeObjectURL(b)}},[_,N]),Q`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(H)=>{H.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${X2(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(H)=>H.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${L&&Q`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!L&&k&&Q`<div class="attachment-preview-state">${k}</div>`}
                    ${!L&&!k&&N==="image"&&Q`
                        <img class="attachment-preview-image" src=${X2(_)} alt=${Z} />
                    `}
                    ${!L&&!k&&N==="pdf"&&W&&Q`
                        <iframe class="attachment-preview-frame" src=${W} title=${Z}></iframe>
                    `}
                    ${!L&&!k&&N==="text"&&z&&Q`
                        <div
                            ref=${I}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:C}}
                        />
                    `}
                    ${!L&&!k&&N==="text"&&!z&&Q`
                        <pre class="attachment-preview-text">${O}</pre>
                    `}
                    ${!L&&!k&&N==="unsupported"&&Q`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${v.map((H)=>Q`
                        <div class="attachment-preview-meta-item" key=${H.label}>
                            <span class="attachment-preview-meta-label">${H.label}</span>
                            <span class="attachment-preview-meta-value">${H.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function N8({src:_,onClose:$}){return m(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),Q`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function h5({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(m(()=>{e2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?d0(K):"",X=j$(j.content_type)==="unsupported"?"Details":"Preview";return Q`
        <div class="file-attachment" onClick=${(O)=>O.stopPropagation()}>
            <a href=${X2(_)} download=${N} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${N}</span>
                    <span class="file-meta-row">
                        ${z&&Q`<span class="file-size">${z}</span>`}
                        ${j.content_type&&Q`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            <button
                class="file-attachment-preview"
                type="button"
                onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${X}
            </button>
        </div>
    `}function i5({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);m(()=>{if(!Number.isFinite(j))return;e2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?X2(j):null,X=j$(Z?.content_type)==="unsupported"?"Details":"Preview";return Q`
        <span class="attachment-pill" title=${K}>
            ${z?Q`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(O)=>O.stopPropagation()}>
                        <${U2}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:Q`
                    <${U2}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&Q`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${X}
                    onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function u$({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?T2(Z):null;return Q`
        <div class="content-annotations">
            ${$&&$.length>0&&Q`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&Q`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&Q`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function l5({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?d0(_.size):"",N=_.mime_type||"",K=o5(N),z=I2(_.uri);return Q`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(L)=>L.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&Q`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&Q`<span>${N}</span>`}
                    ${Z&&Q`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function n5({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return Q`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&Q`
                ${N&&Q`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&Q`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&Q`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(L)=>{L.preventDefault(),L.stopPropagation();let X=new Blob([Uint8Array.from(atob(_.data),(W)=>W.charCodeAt(0))],{type:z||"application/octet-stream"}),O=URL.createObjectURL(X),q=document.createElement("a");q.href=O,q.download=Z.split("/").pop()||"resource",q.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function o5(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function d5({preview:_}){let $=I2(_.url),j=I2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return Q`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&Q`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function r5(_,$){return typeof _==="string"?_:""}var s5=1800,a5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,t5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,e5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function _9(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function $9(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let L=z||"idle";if(K.dataset.copyState=L,L==="success")K.innerHTML=t5,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(L==="error")K.innerHTML=e5,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=a5,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let L=document.createElement("button");L.type="button",L.className="post-code-copy-btn",N(L,"idle"),z.appendChild(L);let X=async(O)=>{O.preventDefault(),O.stopPropagation();let W=K.querySelector("code")?.textContent||"",y=await _9(W);N(L,y?"success":"error");let k=j.get(L);if(k)clearTimeout(k);let x=setTimeout(()=>{N(L,"idle"),j.delete(L)},s5);j.set(L,x)};L.addEventListener("click",X),Z.push(()=>{L.removeEventListener("click",X);let O=j.get(L);if(O)clearTimeout(O);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function j9(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let O=0;O<j.length;O+=1)if(j[O].trim()==="Files:"&&j[O+1]&&/^\s*-\s+/.test(j[O+1])){Z=O;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let O=j[K];if(/^\s*-\s+/.test(O))N.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),L=j.slice(K),X=[...z,...L].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:N}}function Z9(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let O=0;O<j.length;O+=1)if(j[O].trim()==="Referenced messages:"&&j[O+1]&&/^\s*-\s+/.test(j[O+1])){Z=O;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let O=j[K];if(/^\s*-\s+/.test(O)){let W=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W)N.push(W[1])}else if(!O.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),L=j.slice(K),X=[...z,...L].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:N}}function N9(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let O=0;O<j.length;O+=1)if(j[O].trim()==="Images:"&&j[O+1]&&/^\s*-\s+/.test(j[O+1])){Z=O;break}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let O=j[K];if(/^\s*-\s+/.test(O)){let q=O.replace(/^\s*-\s+/,"").trim(),W=q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let y=W[1],k=(W[2]||"").trim()||y;N.push({id:y,label:k,raw:q})}else N.push({id:null,label:q,raw:q})}else if(!O.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),L=j.slice(K),X=[...z,...L].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:N}}function K9(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function z9(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(K9).sort((q,W)=>W.length-q.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),L=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),X=[],O;while(O=L.nextNode())X.push(O);for(let q of X){let W=q.nodeValue;if(!W||!N.test(W)){N.lastIndex=0;continue}N.lastIndex=0;let y=q.parentElement;if(y&&y.closest("code, pre, script, style"))continue;let k=W.split(N).filter((I)=>I!=="");if(k.length===0)continue;let x=z.createDocumentFragment();for(let I of k)if(K.test(I)){let v=z.createElement("mark");v.className="search-highlight-term",v.textContent=I,x.appendChild(v)}else x.appendChild(z.createTextNode(I));q.parentNode.replaceChild(x,q)}return z.body.innerHTML}function K8({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:L,userAvatarUrl:X,userAvatarBackground:O,onDelete:q,isThreadReply:W,isThreadPrev:y,isThreadNext:k,isRemoving:x,highlightQuery:I,onFileRef:v}){let[C,H]=T(null),b=J(null),S=_.data,g=S.type==="agent_response",a=L||"You",t=g?K||R4:a,l=g?P3(K,z):P3(a,X),Z_=typeof O==="string"?O.trim().toLowerCase():"",i=!g&&l.image&&(Z_==="clear"||Z_==="transparent"),U_=g&&Boolean(l.image),q_=`background-color: ${i||U_?"transparent":l.color}`,r=S.content_meta,__=Boolean(r?.truncated),K_=Boolean(r?.preview),j_=__&&!K_,G_=__?{originalLength:Number.isFinite(r?.original_length)?r.original_length:S.content?S.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,L_=S.content_blocks||[],F_=S.media_ids||[],N_=r5(S.content,S.link_previews),{content:J_,fileRefs:w_}=j9(N_),{content:r_,messageRefs:D_}=Z9(J_),{content:T_,attachments:k_}=N9(r_);N_=T_;let h_=f3(L_),p=x3(L_),X_=h_.length===1&&typeof h_[0]?.fallback_text==="string"?h_[0].fallback_text.trim():"",V_=p.length===1?$8(p[0]).trim():"",W_=Boolean(X_)&&N_?.trim()===X_||Boolean(V_)&&N_?.trim()===V_,y_=Boolean(N_)&&!j_&&!W_,b_=typeof I==="string"?I.trim():"",u_=p_(()=>{if(!N_||W_)return"";let P=m0(N_,j);return b_?z9(P,b_):P},[N_,W_,b_]),B_=(P,e)=>{P.stopPropagation(),H(X2(e))},[S_,f_]=T(null),z0=(P)=>{f_(P)},i_=(P)=>{P.stopPropagation(),q?.(_)},e_=(P,e)=>{let A_=new Set;if(!P||e.length===0)return{content:P,usedIds:A_};return{content:P.replace(/attachment:([^\s)"']+)/g,(k0,r0,q0,G0)=>{let X0=r0.replace(/^\/+/,""),M0=e.find((R0)=>R0.name&&R0.name.toLowerCase()===X0.toLowerCase()&&!A_.has(R0.id))||e.find((R0)=>!A_.has(R0.id));if(!M0)return k0;if(A_.add(M0.id),G0.slice(Math.max(0,q0-2),q0)==="](")return`/media/${M0.id}`;return M0.name||"attachment"}),usedIds:A_}},U0=[],C_=[],_0=[],B0=[],D0=[],H0=[],Y0=0;if(L_.length>0)L_.forEach((P)=>{if(P?.type==="text"&&P.annotations)H0.push(P.annotations);if(P?.type==="resource_link")B0.push(P);else if(P?.type==="resource")D0.push(P);else if(P?.type==="file"){let e=F_[Y0++];if(e)C_.push(e),_0.push({id:e,name:P?.name||P?.filename||P?.title})}else if(P?.type==="image"||!P?.type){let e=F_[Y0++];if(e){let A_=typeof P?.mime_type==="string"?P.mime_type:void 0;U0.push({id:e,annotations:P?.annotations,mimeType:A_}),_0.push({id:e,name:P?.name||P?.filename||P?.title})}}});else if(F_.length>0)F_.forEach((P)=>{U0.push({id:P,annotations:null}),_0.push({id:P,name:null})});if(k_.length>0)k_.forEach((P)=>{if(!P?.id)return;let e=_0.find((A_)=>String(A_.id)===String(P.id));if(e&&!e.name)e.name=P.label});let{content:E0,usedIds:l_}=e_(N_,_0);N_=E0;let R_=U0.filter(({id:P})=>!l_.has(P)),P0=C_.filter((P)=>!l_.has(P)),g_=k_.length>0?k_.map((P,e)=>({id:P.id||`attachment-${e+1}`,label:P.label||`attachment-${e+1}`})):_0.map((P,e)=>({id:P.id,label:P.name||`attachment-${e+1}`})),n_=p_(()=>f3(L_),[L_]),w0=p_(()=>x3(L_),[L_]);m(()=>{if(!b.current)return;return B2(b.current),$9(b.current)},[u_]);let Q_=J(null);return m(()=>{if(!Q_.current||n_.length===0)return;let P=Q_.current;P.innerHTML="";for(let e of n_){let A_=document.createElement("div");P.appendChild(A_),_8(A_,e,{onAction:async(m_)=>{if(m_.type==="Action.OpenUrl"){let k0=I2(m_.url||"");if(!k0)throw Error("Invalid URL");window.open(k0,"_blank","noopener,noreferrer");return}if(m_.type==="Action.Submit"){await a1({post_id:_.id,thread_id:S.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:m_.type,title:m_.title||"",data:m_.data}});return}console.warn("[post] unsupported adaptive card action:",m_.type,m_)}}).catch((m_)=>{console.error("[post] adaptive card render error:",m_),A_.textContent=e.fallback_text||"Card failed to render."})}},[n_,S.thread_id,_.id]),Q`
        <div id=${`post-${_.id}`} class="post ${g?"agent-post":""} ${W?"thread-reply":""} ${y?"thread-prev":""} ${k?"thread-next":""} ${x?"removing":""}" onClick=${$}>
            <div class="post-avatar ${g?"agent-avatar":""} ${l.image?"has-image":""}" style=${q_}>
                ${l.image?Q`<img src=${l.image} alt=${t} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${i_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(P)=>{if(P.preventDefault(),P.stopPropagation(),Z)Z(_.id)}}>${o4(_.timestamp)}</a>
                </div>
                ${j_&&G_&&Q`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${$$(G_.originalLength)} chars
                            ${G_.maxLength?Q` • Display limit: ${$$(G_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&G_&&Q`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${$$(G_.maxLength)} of ${$$(G_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(w_.length>0||D_.length>0||g_.length>0)&&Q`
                    <div class="post-file-refs">
                        ${D_.map((P)=>{let e=(A_)=>{if(A_.preventDefault(),A_.stopPropagation(),N)N(P,_.chat_jid||null);else{let m_=document.getElementById("post-"+P);if(m_)m_.scrollIntoView({behavior:"smooth",block:"center"}),m_.classList.add("post-highlight"),setTimeout(()=>m_.classList.remove("post-highlight"),2000)}};return Q`
                                <a href=${`#msg-${P}`} class="post-msg-pill-link" onClick=${e}>
                                    <${U2}
                                        prefix="post"
                                        label=${"msg:"+P}
                                        title=${"Message "+P}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${w_.map((P)=>{let e=P.split("/").pop()||P;return Q`
                                <${U2}
                                    prefix="post"
                                    label=${e}
                                    title=${P}
                                    onClick=${()=>v?.(P)}
                                />
                            `})}
                        ${g_.map((P)=>Q`
                            <${i5}
                                key=${P.id}
                                attachment=${P}
                                onPreview=${z0}
                            />
                        `)}
                    </div>
                `}
                ${y_&&Q`
                    <div 
                        ref=${b}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:u_}}
                        onClick=${(P)=>{if(P.target.classList.contains("hashtag")){P.preventDefault(),P.stopPropagation();let e=P.target.dataset.hashtag;if(e)j?.(e)}else if(P.target.tagName==="IMG")P.preventDefault(),P.stopPropagation(),H(P.target.src)}}
                    />
                `}
                ${n_.length>0&&Q`
                    <div ref=${Q_} class="post-adaptive-cards" />
                `}
                ${w0.length>0&&Q`
                    <div class="post-adaptive-card-submissions">
                        ${w0.map((P,e)=>{let A_=j8(P);return Q`
                                <div key=${`${P.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${A_.title}</span>
                                    </div>
                                    ${A_.summary&&Q`
                                        <div class="adaptive-card-submission-summary">${A_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${T2(A_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${H0.length>0&&Q`
                    ${H0.map((P,e)=>Q`
                        <${u$} key=${e} annotations=${P} />
                    `)}
                `}
                ${R_.length>0&&Q`
                    <div class="media-preview">
                        ${R_.map(({id:P,mimeType:e})=>{let m_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?X2(P):$4(P);return Q`
                                <img 
                                    key=${P} 
                                    src=${m_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(k0)=>B_(k0,P)}
                                />
                            `})}
                    </div>
                `}
                ${R_.length>0&&Q`
                    ${R_.map(({annotations:P},e)=>Q`
                        ${P&&Q`<${u$} key=${e} annotations=${P} />`}
                    `)}
                `}
                ${P0.length>0&&Q`
                    <div class="file-attachments">
                        ${P0.map((P)=>Q`
                            <${h5} key=${P} mediaId=${P} onPreview=${z0} />
                        `)}
                    </div>
                `}
                ${B0.length>0&&Q`
                    <div class="resource-links">
                        ${B0.map((P,e)=>Q`
                            <div key=${e}>
                                <${l5} block=${P} />
                                <${u$} annotations=${P.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${D0.length>0&&Q`
                    <div class="resource-embeds">
                        ${D0.map((P,e)=>Q`
                            <div key=${e}>
                                <${n5} block=${P} />
                                <${u$} annotations=${P.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${S.link_previews?.length>0&&Q`
                    <div class="link-previews">
                        ${S.link_previews.map((P,e)=>Q`
                            <${d5} key=${e} preview=${P} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${C&&Q`<${N8} src=${C} onClose=${()=>H(null)} />`}
        ${S_&&Q`
            <${Z8}
                mediaId=${S_.mediaId}
                info=${S_.info}
                onClose=${()=>f_(null)}
            />
        `}
    `}function z8({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:L,emptyMessage:X,timelineRef:O,agents:q,user:W,onDeletePost:y,reverse:k=!0,removingPostIds:x,searchQuery:I}){let[v,C]=T(!1),H=J(null),b=typeof IntersectionObserver<"u",S=M(async()=>{if(!j||!$||v)return;C(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{C(!1)}},[$,v,j]),g=M((r)=>{let{scrollTop:__,scrollHeight:K_,clientHeight:j_}=r.target,G_=k?K_-j_-__:__,L_=Math.max(300,j_);if(G_<L_)S()},[k,S]);m(()=>{if(!b)return;let r=H.current,__=O?.current;if(!r||!__)return;let K_=300,j_=new IntersectionObserver((G_)=>{for(let L_ of G_){if(!L_.isIntersecting)continue;S()}},{root:__,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return j_.observe(r),()=>j_.disconnect()},[b,$,j,O,S]);let a=J(S);if(a.current=S,m(()=>{if(b)return;if(!O?.current)return;let{scrollTop:r,scrollHeight:__,clientHeight:K_}=O.current,j_=k?__-K_-r:r,G_=Math.max(300,K_);if(j_<G_)a.current?.()},[b,_,$,k,O]),m(()=>{if(!O?.current)return;if(!$||v)return;let{scrollTop:r,scrollHeight:__,clientHeight:K_}=O.current,j_=k?__-K_-r:r,G_=Math.max(300,K_);if(__<=K_+1||j_<G_)a.current?.()},[_,$,v,k,O]),!_)return Q`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return Q`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${X||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((r,__)=>r.id-__.id),l=(r)=>{let __=r?.data?.thread_id;if(__===null||__===void 0||__==="")return null;let K_=Number(__);return Number.isFinite(K_)?K_:null},Z_=new Map;for(let r=0;r<t.length;r+=1){let __=t[r],K_=Number(__?.id),j_=l(__);if(j_!==null){let G_=Z_.get(j_)||{anchorIndex:-1,replyIndexes:[]};G_.replyIndexes.push(r),Z_.set(j_,G_)}else if(Number.isFinite(K_)){let G_=Z_.get(K_)||{anchorIndex:-1,replyIndexes:[]};G_.anchorIndex=r,Z_.set(K_,G_)}}let i=new Map;for(let[r,__]of Z_.entries()){let K_=new Set;if(__.anchorIndex>=0)K_.add(__.anchorIndex);for(let j_ of __.replyIndexes)K_.add(j_);i.set(r,Array.from(K_).sort((j_,G_)=>j_-G_))}let U_=t.map((r,__)=>{let K_=l(r);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let j_=i.get(K_);if(!j_||j_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G_=j_.indexOf(__);if(G_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G_>0,hasThreadNext:G_<j_.length-1}}),q_=Q`<div class="timeline-sentinel" ref=${H}></div>`;return Q`
        <div class="timeline ${k?"reverse":"normal"}" ref=${O} onScroll=${g}>
            <div class="timeline-content">
                ${k?q_:null}
                ${t.map((r,__)=>{let K_=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),j_=x?.has?.(r.id),G_=U_[__]||{};return Q`
                    <${K8}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${K_}
                        isThreadPrev=${G_.hasThreadPrev}
                        isThreadNext=${G_.hasThreadNext}
                        isRemoving=${j_}
                        highlightQuery=${I}
                        agentName=${g4(r.data?.agent_id,q||{})}
                        agentAvatarUrl=${c4(r.data?.agent_id,q||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Z?.(r)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${L}
                        onDelete=${y}
                    />
                `})}
                ${k?null:q_}
            </div>
        </div>
    `}class Y8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var L0=new Y8;var m$=null,I3=null;function G8(){if(I3)return Promise.resolve(I3);if(!m$)m$=import("/static/dist/editor.bundle.js").then((_)=>{return I3=_,_}).catch((_)=>{throw m$=null,_});return m$}class O8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await G8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var T3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new O8(_,$)}};function u3(){G8().catch(()=>{})}var Y9={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},G9={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},v$=null,m3=null;function O9(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function L9(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!O9(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function X9(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!v$)v$=L9(()=>Promise.resolve($.init?.())).catch((j)=>{throw v$=null,j});return await v$,$}async function V9(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!m3)m3=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await m3}async function W9(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function q9(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Q9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function H2(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function U9(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function L8(){let _=Q9(),$=_?G9:Y9,j=H2("--bg-primary",_?"#000000":"#ffffff"),Z=H2("--text-primary",_?"#e7e9ea":"#0f1419"),N=H2("--text-secondary",_?"#71767b":"#536471"),K=H2("--accent-color","#1d9bf0"),z=H2("--danger-color",_?"#ff7b72":"#cf222e"),L=H2("--success-color",_?"#7ee787":"#1a7f37"),X=H2("--bg-hover",_?"#1d1f23":"#e8ebed"),O=H2("--border-color",_?"#2f3336":"#eff3f4"),q=H2("--accent-soft-strong",U9(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:q,selectionForeground:Z,black:X,red:z,green:L,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:O}}class X8{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.resize()})}async bootstrapGhostty(){try{let _=await X9();if(await V9(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:L8()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=L8(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>this.scheduleResize());j.observe(this.container),j.observe(this.bodyEl),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await W9();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(q9($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var v3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new X8(_,$)}};function E2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function B9(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",L=String($||"").split("/").slice(0,-1).join("/"),O=N.startsWith("/")?N:`${L?`${L}/`:""}${N}`,q=[];for(let y of O.split("/")){if(!y||y===".")continue;if(y===".."){if(q.length>0)q.pop();continue}q.push(y)}let W=q.join("/");return`${F3(W)}${K}${z}`}function Z$(_){return _?.preview||null}function H9(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function F9(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function y9(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${E2($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${E2(d0($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${E2(T2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${E2(F9($))}</span>`),Z.push(`<span><strong>extension:</strong> ${E2(H9(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${E2(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function J9(_){let $=Z$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=y9(_,$);if($.kind==="image"){let Z=$.url||($.path?F3($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${E2(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=m0($.text||"",null,{rewriteImageSrc:(N)=>B9(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${E2($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class R3{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=J9(this.context)}getContent(){let _=Z$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=Z$(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var g3={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=Z$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new R3(_,$)}},c3={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return Z$(_)||_?.path?1:!1},mount(_,$){return new R3(_,$)}};class V8{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var I_=new V8;var R$="workspaceExplorerScale",D9=["compact","default","comfortable"],E9=new Set(D9),w9={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function W8(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return E9.has(j)?j:$}function p3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function k9(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function b9(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function h3(_={}){let $=k9(_),j=_.stored?W8(_.stored,$):$;return b9(j,_)}function q8(_){return w9[W8(_)]}var A9=60000,H8=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function F8(_,$,j,Z=0,N=[]){if(!j&&H8(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)F8(K,$,j,Z+1,N);return N}function Q8(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&H8(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function o3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((L)=>[L?.path,L])):new Map,K=!j||j.length!==Z.length,z=Z.map((L)=>{let X=o3(N.get(L.path),L);if(X!==N.get(L.path))K=!0;return X});return K?{...$,children:z}:_}function l3(_,$,j){if(!_)return _;if(_.path===$)return o3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=l3(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var y8=4,i3=14,P9=8,M9=16;function J8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=J8(Z);return _.__bytes=j,j}function D8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=y8)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let L of N){let X=Math.max(0,Number(L?.__bytes??L?.size??0));if(X<=0)continue;if(L.type==="dir")K.push({kind:"dir",node:L,size:X});else K.push({kind:"file",name:L.name,path:L.path,size:X})}K.sort((L,X)=>X.size-L.size);let z=K;if(K.length>i3){let L=K.slice(0,i3-1),X=K.slice(i3-1),O=X.reduce((q,W)=>q+W.size,0);L.push({kind:"other",name:`+${X.length} more`,path:`${Z.path}/[other]`,size:O}),z=L}return Z.children=z.map((L)=>{if(L.kind==="dir")return D8(L.node,$+1);return{name:L.name,path:L.path,size:L.size,children:[]}}),Z}function U8(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function E8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function g$(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function d3(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,L=K-N>z?N+z:K,X=g$(_,$,Z,N),O=g$(_,$,Z,L),q=g$(_,$,j,L),W=g$(_,$,j,N),y=L-N>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${y} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${j} ${j} 0 ${y} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var w8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function k8(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(L,X,O,q)=>{let W=Array.isArray(L?.children)?L.children:[];if(!W.length)return;let y=Math.max(0,Number(L.size)||0);if(y<=0)return;let k=O-X,x=X;W.forEach((I,v)=>{let C=Math.max(0,Number(I.size)||0);if(C<=0)return;let H=C/y,b=x,S=v===W.length-1?O:x+k*H;if(x=S,S-b<0.003)return;let g=w8[q];if(g){let a=E8(b,q,j);if(Z.push({key:I.path,path:I.path,label:I.name,size:C,color:a,depth:q,startAngle:b,endAngle:S,innerRadius:g[0],outerRadius:g[1],d:d3(120,120,g[0],g[1],b,S)}),q===1)N.push({key:I.path,name:I.name,size:C,pct:K>0?C/K*100:0,color:a})}if(q<y8)z(I,b,S,q+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function n3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=n3(Z,$);if(N)return N}return null}function b8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=w8[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,L=E8(K,1,Z),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:j,color:L,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:d3(120,120,N[0],N[1],K,z)}],legend:[{key:O,name:_,size:j,pct:100,color:L}]}}function B8(_,$=!1,j=!1){if(!_)return null;let Z=J8(_),N=D8(_,0),K=N.size||Z,{segments:z,legend:L}=k8(N,K,j);if(!z.length&&K>0){let X=b8("[files]",N.path,K,j);z=X.segments,L=X.legend}return{root:N,totalSize:K,segments:z,legend:L,truncated:$,isDarkTheme:j}}function S9({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[K,z]=T(()=>[_?.root?.path||"."]),[L,X]=T(!1);m(()=>{let i=_?.root?.path||".";N(i),z([i]),j(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!Z)return;X(!0);let i=setTimeout(()=>X(!1),180);return()=>clearTimeout(i)},[Z]);let O=p_(()=>{return n3(_.root,Z)||_.root},[_?.root,Z]),q=O?.size||_.totalSize||0,{segments:W,legend:y}=p_(()=>{let i=k8(O,q,_.isDarkTheme);if(i.segments.length>0)return i;if(q<=0)return i;let U_=O?.children?.length?"Total":"[files]";return b8(U_,O?.path||_?.root?.path||".",q,_.isDarkTheme)},[O,q,_.isDarkTheme,_?.root?.path]),[k,x]=T(W),I=J(new Map),v=J(0);m(()=>{let i=I.current,U_=new Map(W.map((K_)=>[K_.key,K_])),q_=performance.now(),r=220,__=(K_)=>{let j_=Math.min(1,(K_-q_)/220),G_=j_*(2-j_),L_=W.map((F_)=>{let J_=i.get(F_.key)||{startAngle:F_.startAngle,endAngle:F_.startAngle,innerRadius:F_.innerRadius,outerRadius:F_.innerRadius},w_=(h_,p)=>h_+(p-h_)*G_,r_=w_(J_.startAngle,F_.startAngle),D_=w_(J_.endAngle,F_.endAngle),T_=w_(J_.innerRadius,F_.innerRadius),k_=w_(J_.outerRadius,F_.outerRadius);return{...F_,d:d3(120,120,T_,k_,r_,D_)}});if(x(L_),j_<1)v.current=requestAnimationFrame(__)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame(__),I.current=U_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[W]);let C=k.length?k:W,H=q>0?d0(q):"0 B",b=O?.name||"",g=(b&&b!=="."?b:"Total")||"Total",a=H,t=K.length>1,l=(i)=>{if(!i?.path)return;let U_=n3(_.root,i.path);if(!U_||!Array.isArray(U_.children)||U_.children.length===0)return;z((q_)=>[...q_,U_.path]),N(U_.path),j(null)},Z_=()=>{if(!t)return;z((i)=>{let U_=i.slice(0,-1);return N(U_[U_.length-1]||_?.root?.path||"."),U_}),j(null)};return Q`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${L?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${C.length}
                data-base-size=${q}>
                ${C.map((i)=>Q`
                    <path
                        key=${i.key}
                        d=${i.d}
                        fill=${i.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===i.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(i)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(i)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>l(i)}
                    >
                        <title>${i.label} — ${d0(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
                    onClick=${Z_}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${g}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${a}</text>
                </g>
            </svg>
            ${y.length>0&&Q`
                <div class="workspace-folder-starburst-legend">
                    ${y.slice(0,8).map((i)=>Q`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${d0(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&Q`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function C9({mediaId:_}){let[$,j]=T(null);if(m(()=>{if(!_)return;e2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?d0($.metadata.size):"";return Q`
        <a href=${X2(_)} download=${Z} class="file-attachment"
            onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&Q`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function A8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z}){let[N,K]=T(null),[z,L]=T(new Set(["."])),[X,O]=T(null),[q,W]=T(null),[y,k]=T(""),[x,I]=T(null),[v,C]=T(null),[H,b]=T(!0),[S,g]=T(!1),[a,t]=T(null),[l,Z_]=T(()=>g2("workspaceShowHidden",!1)),[i,U_]=T(!1),[q_,r]=T(null),[__,K_]=T(null),[j_,G_]=T(null),[L_,F_]=T(!1),[N_,J_]=T(null),[w_,r_]=T(()=>U8()),[D_,T_]=T(()=>h3({stored:o0(R$),...p3()})),k_=J(z),h_=J(""),p=J(null),X_=J(0),V_=J(new Set),W_=J(null),y_=J(new Map),b_=J(_),u_=J(Z),B_=J(null),S_=J(null),f_=J(null),z0=J(null),i_=J(null),e_=J(null),U0=J("."),C_=J(null),_0=J({path:null,dragging:!1,startX:0,startY:0}),B0=J({path:null,dragging:!1,startX:0,startY:0}),D0=J({path:null,timer:0}),H0=J(!1),Y0=J(0),E0=J(new Map),l_=J(null),R_=J(null),P0=J(null),g_=J(null),n_=J(l),w0=J($),Q_=J(j??$),P=J(0),e=J(j_),A_=J(i),m_=J(q_),k0=J(null),r0=J({x:0,y:0}),q0=J(0),G0=J(null),X0=J(X),s0=J(q),M0=J(null),v0=J(null),R0=J(x);b_.current=_,u_.current=Z,m(()=>{k_.current=z},[z]),m(()=>{n_.current=l},[l]),m(()=>{w0.current=$},[$]),m(()=>{Q_.current=j??$},[j,$]),m(()=>{e.current=j_},[j_]),m(()=>{if(typeof window>"u")return;let V=()=>{T_(h3({stored:o0(R$),...p3()}))};V();let B=()=>V(),w=()=>V(),E=(R)=>{if(!R||R.key===null||R.key===R$)V()};window.addEventListener("resize",B),window.addEventListener("focus",w),window.addEventListener("storage",E);let u=window.matchMedia?.("(pointer: coarse)"),d=window.matchMedia?.("(hover: none)"),s=(R,z_)=>{if(!R)return;if(R.addEventListener)R.addEventListener("change",z_);else if(R.addListener)R.addListener(z_)},o=(R,z_)=>{if(!R)return;if(R.removeEventListener)R.removeEventListener("change",z_);else if(R.removeListener)R.removeListener(z_)};return s(u,B),s(d,B),()=>{window.removeEventListener("resize",B),window.removeEventListener("focus",w),window.removeEventListener("storage",E),o(u,B),o(d,B)}},[]),m(()=>{let V=(B)=>{let w=B?.detail?.path;if(!w)return;let E=w.split("/"),u=[];for(let d=1;d<E.length;d++)u.push(E.slice(0,d).join("/"));if(u.length)L((d)=>{let s=new Set(d);s.add(".");for(let o of u)s.add(o);return s});O(w),requestAnimationFrame(()=>{let d=document.querySelector(`[data-path="${CSS.escape(w)}"]`);if(d)d.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",V),()=>window.removeEventListener("workspace-reveal-path",V)},[]),m(()=>{A_.current=i},[i]),m(()=>{m_.current=q_},[q_]),m(()=>{X0.current=X},[X]),m(()=>{s0.current=q},[q]),m(()=>{R0.current=x},[x]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let V=()=>r_(U8());V();let B=window.matchMedia?.("(prefers-color-scheme: dark)"),w=()=>V();if(B?.addEventListener)B.addEventListener("change",w);else if(B?.addListener)B.addListener(w);let E=typeof MutationObserver<"u"?new MutationObserver(()=>V()):null;if(E?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)E?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(B?.removeEventListener)B.removeEventListener("change",w);else if(B?.removeListener)B.removeListener(w);E?.disconnect()}},[]),m(()=>{if(!q)return;let V=i_.current;if(!V)return;let B=requestAnimationFrame(()=>{try{V.focus(),V.select()}catch{}});return()=>cancelAnimationFrame(B)},[q]);let i2=async(V)=>{g(!0),I(null),C(null);try{let B=await N4(V,20000);I(B)}catch(B){I({error:B.message||"Failed to load preview"})}finally{g(!1)}};B_.current=i2;let w2=async()=>{if(!w0.current)return;try{let V=await E$("",1,n_.current),B=Q8(V.root,k_.current,n_.current);if(B===h_.current){b(!1);return}if(h_.current=B,p.current=V.root,!X_.current)X_.current=requestAnimationFrame(()=>{X_.current=0,K((w)=>o3(w,p.current)),b(!1)})}catch(V){t(V.message||"Failed to load workspace"),b(!1)}},g0=async(V)=>{if(!V)return;if(V_.current.has(V))return;V_.current.add(V);try{let B=await E$(V,1,n_.current);K((w)=>l3(w,V,B.root))}catch(B){t(B.message||"Failed to load workspace")}finally{V_.current.delete(V)}};S_.current=g0;let $0=M(()=>{let V=X;if(!V)return".";let B=y_.current?.get(V);if(B&&B.type==="dir")return B.path;if(V==="."||!V.includes("/"))return".";let w=V.split("/");return w.pop(),w.join("/")||"."},[X]),j2=M((V)=>{let B=V?.closest?.(".workspace-row");if(!B)return null;let w=B.dataset.path,E=B.dataset.type;if(!w)return null;if(E==="dir")return w;if(w.includes("/")){let u=w.split("/");return u.pop(),u.join("/")||"."}return"."},[]),O0=M((V)=>{return j2(V?.target||null)},[j2]),j0=M((V)=>{e.current=V,G_(V)},[]),x_=M(()=>{let V=D0.current;if(V?.timer)clearTimeout(V.timer);D0.current={path:null,timer:0}},[]),I0=M((V)=>{if(!V||V==="."){x_();return}let B=y_.current?.get(V);if(!B||B.type!=="dir"){x_();return}if(k_.current?.has(V)){x_();return}if(D0.current?.path===V)return;x_();let w=setTimeout(()=>{D0.current={path:null,timer:0},S_.current?.(V),L((E)=>{let u=new Set(E);return u.add(V),u})},600);D0.current={path:V,timer:w}},[x_]),c0=M((V,B)=>{if(r0.current={x:V,y:B},q0.current)return;q0.current=requestAnimationFrame(()=>{q0.current=0;let w=k0.current;if(!w)return;let E=r0.current;w.style.transform=`translate(${E.x+12}px, ${E.y+12}px)`})},[]),Z2=M((V)=>{if(!V)return;let w=(y_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!w)return;K_({path:V,label:w})},[]),F2=M(()=>{if(K_(null),q0.current)cancelAnimationFrame(q0.current),q0.current=0;if(k0.current)k0.current.style.transform="translate(-9999px, -9999px)"},[]),k2=M((V)=>{if(!V)return".";let B=y_.current?.get(V);if(B&&B.type==="dir")return B.path;if(V==="."||!V.includes("/"))return".";let w=V.split("/");return w.pop(),w.join("/")||"."},[]),F0=M(()=>{W(null),k("")},[]),b2=M((V)=>{if(!V)return;let w=(y_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!w||V===".")return;W(V),k(w)},[]),l2=M(async()=>{let V=s0.current;if(!V)return;let B=(y||"").trim();if(!B){F0();return}let w=y_.current?.get(V),E=(w?.name||V.split("/").pop()||V).trim();if(B===E){F0();return}try{let d=(await Y4(V,B))?.path||V,s=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(F0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:V,newPath:d,type:w?.type||"file"}})),w?.type==="dir")L((o)=>{let R=new Set;for(let z_ of o)if(z_===V)R.add(d);else if(z_.startsWith(`${V}/`))R.add(`${d}${z_.slice(V.length)}`);else R.add(z_);return R});if(O(d),w?.type==="dir")I(null),g(!1),C(null);else B_.current?.(d);S_.current?.(s)}catch(u){t(u?.message||"Failed to rename file")}},[F0,y]),y2=M(async(V)=>{let E=V||".";for(let u=0;u<50;u+=1){let s=`untitled${u===0?"":`-${u}`}.md`;try{let R=(await z4(E,s,""))?.path||(E==="."?s:`${E}/${s}`);if(E&&E!==".")L((z_)=>new Set([...z_,E]));O(R),t(null),S_.current?.(E),B_.current?.(R);return}catch(o){if(o?.status===409||o?.code==="file_exists")continue;t(o?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),u2=M((V)=>{if(V?.stopPropagation?.(),L_)return;let B=k2(X0.current);y2(B)},[L_,k2,y2]);m(()=>{if(typeof window>"u")return;let V=(B)=>{let w=B?.detail?.updates||[];if(!Array.isArray(w)||w.length===0)return;K((o)=>{let R=o;for(let z_ of w){if(!z_?.root)continue;if(!R||z_.path==="."||!z_.path)R=z_.root;else R=l3(R,z_.path,z_.root)}if(R)h_.current=Q8(R,k_.current,n_.current);return b(!1),R});let E=X0.current;if(Boolean(E)&&w.some((o)=>{let R=o?.path||"";if(!R||R===".")return!0;return E===R||E.startsWith(`${R}/`)||R.startsWith(`${E}/`)}))E0.current.clear();if(!E||!R0.current)return;let d=y_.current?.get(E);if(d&&d.type==="dir")return;if(w.some((o)=>{let R=o?.path||"";if(!R||R===".")return!0;return E===R||E.startsWith(`${R}/`)}))B_.current?.(E)};return window.addEventListener("workspace-update",V),()=>window.removeEventListener("workspace-update",V)},[]),W_.current=w2;let W2=J(()=>{if(typeof window>"u")return;let V=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),B=Q_.current??w0.current,w=document.visibilityState!=="hidden"&&(B||V.matches&&w0.current);w$(w,n_.current).catch(()=>{})}).current,s_=J(0),A2=J(()=>{if(s_.current)clearTimeout(s_.current);s_.current=setTimeout(()=>{s_.current=0,W2()},250)}).current;m(()=>{if(w0.current)W_.current?.();A2()},[$,j]),m(()=>{W_.current(),W2();let V=setInterval(()=>W_.current(),A9),B=c2("previewHeight",null),w=Number.isFinite(B)?Math.min(Math.max(B,80),600):280;if(Y0.current=w,f_.current)f_.current.style.setProperty("--preview-height",`${w}px`);let E=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),u=()=>A2();if(E.addEventListener)E.addEventListener("change",u);else if(E.addListener)E.addListener(u);return document.addEventListener("visibilitychange",u),()=>{if(clearInterval(V),X_.current)cancelAnimationFrame(X_.current),X_.current=0;if(E.removeEventListener)E.removeEventListener("change",u);else if(E.removeListener)E.removeListener(u);if(document.removeEventListener("visibilitychange",u),s_.current)clearTimeout(s_.current),s_.current=0;if(C_.current)clearTimeout(C_.current),C_.current=null;w$(!1,n_.current).catch(()=>{})}},[]);let S0=p_(()=>F8(N,z,l),[N,z,l]),C0=p_(()=>new Map(S0.map((V)=>[V.node.path,V.node])),[S0]),N2=p_(()=>q8(D_),[D_]);y_.current=C0;let Q0=(X?y_.current.get(X):null)?.type==="dir";m(()=>{if(!X||!Q0){J_(null),l_.current=null,R_.current=null;return}let V=X,B=`${l?"hidden":"visible"}:${X}`,w=E0.current,E=w.get(B);if(E?.root){w.delete(B),w.set(B,E);let s=B8(E.root,Boolean(E.truncated),w_);if(s)l_.current=s,R_.current=X,J_({loading:!1,error:null,payload:s});return}let u=l_.current,d=R_.current;J_({loading:!0,error:null,payload:d===X?u:null}),E$(X,P9,l).then((s)=>{if(X0.current!==V)return;let o={root:s?.root,truncated:Boolean(s?.truncated)};w.delete(B),w.set(B,o);while(w.size>M9){let z_=w.keys().next().value;if(!z_)break;w.delete(z_)}let R=B8(o.root,o.truncated,w_);l_.current=R,R_.current=X,J_({loading:!1,error:null,payload:R})}).catch((s)=>{if(X0.current!==V)return;J_({loading:!1,error:s?.message||"Failed to load folder size chart",payload:d===X?u:null})})},[X,Q0,l,w_]);let P2=Boolean(x&&x.kind==="text"&&!Q0&&(!x.size||x.size<=262144)),K2=P2?"Open in editor":x?.size>262144?"File too large to edit":"File is not editable";m(()=>{let V=P0.current;if(g_.current)g_.current.dispose(),g_.current=null;if(!V)return;if(V.innerHTML="",!X||Q0||!x||x.error)return;let B={path:X,content:typeof x.text==="string"?x.text:void 0,mtime:x.mtime,size:x.size,preview:x,mode:"view"},w=L0.resolve(B)||L0.get("workspace-preview-default");if(!w)return;let E=w.mount(V,B);return g_.current=E,()=>{if(g_.current===E)E.dispose(),g_.current=null;V.innerHTML=""}},[X,Q0,x]);let z2=(V)=>{let B=V?.target;if(B instanceof Element)return B;return B?.parentElement||null},M2=(V)=>{return Boolean(V?.closest?.(".workspace-node-icon, .workspace-label-text"))},p0=J((V)=>{if(v0.current)clearTimeout(v0.current),v0.current=null;let w=z2(V)?.closest?.("[data-path]");if(!w)return;let E=w.dataset.path;if(w.dataset.type==="dir"||!E)return;if(s0.current===E)F0();u_.current?.(E)}).current,a0=J((V)=>{if(H0.current){H0.current=!1;return}let B=z2(V),w=B?.closest?.("[data-path]");if(z0.current?.focus?.(),!w)return;let E=w.dataset.path,u=w.dataset.type,d=Boolean(B?.closest?.(".workspace-caret")),s=Boolean(B?.closest?.("button"))||Boolean(B?.closest?.("a"))||Boolean(B?.closest?.("input")),o=X0.current===E,R=s0.current;if(R){if(R===E)return;F0()}let z_=u==="file"&&M0.current===E&&!d&&!s;if(o&&!d&&!s&&E!=="."&&!z_){if(v0.current)clearTimeout(v0.current);v0.current=setTimeout(()=>{v0.current=null,b2(E)},350);return}if(u==="dir"){if(M0.current=null,O(E),I(null),C(null),g(!1),!k_.current.has(E))S_.current?.(E);if(o&&!d)return;L((V0)=>{let _2=new Set(V0);if(_2.has(E))_2.delete(E);else _2.add(E);return _2})}else{M0.current=null,O(E);let J0=y_.current.get(E);if(J0)b_.current?.(J0.path,J0);B_.current?.(E)}}).current,f0=J(()=>{h_.current="",W_.current(),Array.from(k_.current||[]).filter((B)=>B&&B!==".").forEach((B)=>S_.current?.(B))}).current,t0=J(()=>{M0.current=null,O(null),I(null),C(null),g(!1)}).current,S2=J(()=>{Z_((V)=>{let B=!V;if(typeof window<"u")o_("workspaceShowHidden",String(B));return n_.current=B,w$(!0,B).catch(()=>{}),h_.current="",W_.current?.(),Array.from(k_.current||[]).filter((E)=>E&&E!==".").forEach((E)=>S_.current?.(E)),B})}).current,C2=J((V)=>{if(z2(V)?.closest?.("[data-path]"))return;t0()}).current,e0=M(async(V)=>{if(!V)return;let B=V.split("/").pop()||V;if(!window.confirm(`Delete "${B}"? This cannot be undone.`))return;try{await O4(V);let E=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(X0.current===V)t0();S_.current?.(E),t(null)}catch(E){I((u)=>({...u||{},error:E.message||"Failed to delete file"}))}},[t0]),q2=M((V)=>{let B=z0.current;if(!B||!V||typeof CSS>"u"||typeof CSS.escape!=="function")return;B.querySelector(`[data-path="${CSS.escape(V)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),n2=M((V)=>{let B=S0;if(!B||B.length===0)return;let w=X?B.findIndex((E)=>E.node.path===X):-1;if(V.key==="ArrowDown"){V.preventDefault();let E=Math.min(w+1,B.length-1),u=B[E];if(!u)return;if(O(u.node.path),u.node.type!=="dir")b_.current?.(u.node.path,u.node),B_.current?.(u.node.path);else I(null),g(!1),C(null);q2(u.node.path);return}if(V.key==="ArrowUp"){V.preventDefault();let E=w<=0?0:w-1,u=B[E];if(!u)return;if(O(u.node.path),u.node.type!=="dir")b_.current?.(u.node.path,u.node),B_.current?.(u.node.path);else I(null),g(!1),C(null);q2(u.node.path);return}if(V.key==="ArrowRight"&&w>=0){let E=B[w];if(E?.node?.type==="dir"&&!z.has(E.node.path))V.preventDefault(),S_.current?.(E.node.path),L((u)=>new Set([...u,E.node.path]));return}if(V.key==="ArrowLeft"&&w>=0){let E=B[w];if(E?.node?.type==="dir"&&z.has(E.node.path))V.preventDefault(),L((u)=>{let d=new Set(u);return d.delete(E.node.path),d});return}if(V.key==="Enter"&&w>=0){V.preventDefault();let E=B[w];if(!E)return;let u=E.node.path;if(E.node.type==="dir"){if(!k_.current.has(u))S_.current?.(u);L((s)=>{let o=new Set(s);if(o.has(u))o.delete(u);else o.add(u);return o}),I(null),C(null),g(!1)}else b_.current?.(u,E.node),B_.current?.(u);return}if((V.key==="Delete"||V.key==="Backspace")&&w>=0){let E=B[w];if(!E||E.node.type==="dir")return;V.preventDefault(),e0(E.node.path);return}if(V.key==="Escape")V.preventDefault(),t0()},[t0,e0,z,S0,q2,X]),b0=M((V)=>{let B=z2(V),w=B?.closest?.(".workspace-row");if(!w)return;let E=w.dataset.type,u=w.dataset.path;if(!u||u===".")return;if(s0.current===u)return;let d=V?.touches?.[0];if(!d)return;if(_0.current={path:M2(B)?u:null,dragging:!1,startX:d.clientX,startY:d.clientY},E!=="file")return;if(C_.current)clearTimeout(C_.current);C_.current=setTimeout(()=>{if(C_.current=null,_0.current?.dragging)return;e0(u)},600)},[e0]),U=M(()=>{if(C_.current)clearTimeout(C_.current),C_.current=null;let V=_0.current;if(V?.dragging&&V.path){let B=e.current||$0(),w=G0.current;if(typeof w==="function")w(V.path,B)}_0.current={path:null,dragging:!1,startX:0,startY:0},P.current=0,U_(!1),r(null),j0(null),x_(),F2()},[$0,F2,j0,x_]),f=M((V)=>{let B=_0.current,w=V?.touches?.[0];if(!w||!B?.path){if(C_.current)clearTimeout(C_.current),C_.current=null;return}let E=Math.abs(w.clientX-B.startX),u=Math.abs(w.clientY-B.startY),d=E>8||u>8;if(d&&C_.current)clearTimeout(C_.current),C_.current=null;if(!B.dragging&&d)B.dragging=!0,U_(!0),r("move"),Z2(B.path);if(B.dragging){V.preventDefault(),c0(w.clientX,w.clientY);let s=document.elementFromPoint(w.clientX,w.clientY),o=j2(s)||$0();if(e.current!==o)j0(o);I0(o)}},[j2,$0,Z2,c0,j0,I0]),n=J((V)=>{V.preventDefault();let B=f_.current;if(!B)return;let w=V.clientY,E=Y0.current||280,u=V.currentTarget;u.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let d=w,s=(R)=>{d=R.clientY;let z_=B.clientHeight-80,J0=Math.min(Math.max(E-(R.clientY-w),80),z_);B.style.setProperty("--preview-height",`${J0}px`),Y0.current=J0},o=()=>{let R=B.clientHeight-80,z_=Math.min(Math.max(E-(d-w),80),R);Y0.current=z_,u.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("previewHeight",String(Math.round(z_))),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)}).current,Y_=J((V)=>{V.preventDefault();let B=f_.current;if(!B)return;let w=V.touches[0];if(!w)return;let E=w.clientY,u=Y0.current||280,d=V.currentTarget;d.classList.add("dragging"),document.body.style.userSelect="none";let s=(R)=>{let z_=R.touches[0];if(!z_)return;R.preventDefault();let J0=B.clientHeight-80,V0=Math.min(Math.max(u-(z_.clientY-E),80),J0);B.style.setProperty("--preview-height",`${V0}px`),Y0.current=V0},o=()=>{d.classList.remove("dragging"),document.body.style.userSelect="",o_("previewHeight",String(Math.round(Y0.current||u))),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",o),document.removeEventListener("touchcancel",o)};document.addEventListener("touchmove",s,{passive:!1}),document.addEventListener("touchend",o),document.addEventListener("touchcancel",o)}).current,P_=async()=>{if(!X)return;try{let V=await K4(X);if(V.media_id)C(V.media_id)}catch(V){I((B)=>({...B||{},error:V.message||"Failed to attach"}))}},a_=async()=>{if(!X||Q0)return;await e0(X)},M_=(V)=>{return Array.from(V?.dataTransfer?.types||[]).includes("Files")},Z0=M((V)=>{if(!M_(V))return;if(V.preventDefault(),P.current+=1,!A_.current)U_(!0);r("upload");let B=O0(V)||$0();j0(B),I0(B)},[$0,O0,j0,I0]),h0=M((V)=>{if(!M_(V))return;if(V.preventDefault(),V.dataTransfer)V.dataTransfer.dropEffect="copy";if(!A_.current)U_(!0);if(m_.current!=="upload")r("upload");let B=O0(V)||$0();if(e.current!==B)j0(B);I0(B)},[$0,O0,j0,I0]),J2=M((V)=>{if(!M_(V))return;if(V.preventDefault(),P.current=Math.max(0,P.current-1),P.current===0)U_(!1),r(null),j0(null),x_()},[j0,x_]),T0=M(async(V,B=".")=>{let w=Array.from(V||[]);if(w.length===0)return;let E=B&&B!==""?B:".",u=E!=="."?E:"workspace root";F_(!0);try{let d=null;for(let s of w)try{d=await H3(s,E)}catch(o){let R=o?.status,z_=o?.code;if(R===409||z_==="file_exists"){let J0=s?.name||"file";if(!window.confirm(`"${J0}" already exists in ${u}. Overwrite?`))continue;d=await H3(s,E,{overwrite:!0})}else throw o}if(d?.path)M0.current=d.path,O(d.path),B_.current?.(d.path);S_.current?.(E)}catch(d){t(d.message||"Failed to upload file")}finally{F_(!1)}},[]),Y2=M(async(V,B)=>{if(!V)return;let w=y_.current?.get(V);if(!w)return;let E=B&&B!==""?B:".",u=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(E===u)return;try{let s=(await G4(V,E))?.path||V;if(w.type==="dir")L((o)=>{let R=new Set;for(let z_ of o)if(z_===V)R.add(s);else if(z_.startsWith(`${V}/`))R.add(`${s}${z_.slice(V.length)}`);else R.add(z_);return R});if(O(s),w.type==="dir")I(null),g(!1),C(null);else B_.current?.(s);S_.current?.(u),S_.current?.(E)}catch(d){t(d?.message||"Failed to move entry")}},[]);G0.current=Y2;let G2=M(async(V)=>{if(!M_(V))return;V.preventDefault(),P.current=0,U_(!1),r(null),G_(null),x_();let B=Array.from(V?.dataTransfer?.files||[]);if(B.length===0)return;let w=e.current||O0(V)||$0();await T0(B,w)},[$0,O0,T0]),i0=M((V)=>{if(V?.stopPropagation?.(),L_)return;let B=V?.currentTarget?.dataset?.uploadTarget||".";U0.current=B,e_.current?.click()},[L_]),O2=M(()=>{if(L_)return;let V=X0.current,B=V?y_.current?.get(V):null;U0.current=B?.type==="dir"?B.path:".",e_.current?.click()},[L_]),y0=M((V)=>{if(!V||V.button!==0)return;let B=V.currentTarget;if(!B||!B.dataset)return;let w=B.dataset.path;if(!w||w===".")return;if(s0.current===w)return;let E=z2(V);if(E?.closest?.("button, a, input, .workspace-caret"))return;if(!M2(E))return;V.preventDefault(),B0.current={path:w,dragging:!1,startX:V.clientX,startY:V.clientY};let u=(s)=>{let o=B0.current;if(!o?.path)return;let R=Math.abs(s.clientX-o.startX),z_=Math.abs(s.clientY-o.startY),J0=R>4||z_>4;if(!o.dragging&&J0)o.dragging=!0,H0.current=!0,U_(!0),r("move"),Z2(o.path),c0(s.clientX,s.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(o.dragging){s.preventDefault(),c0(s.clientX,s.clientY);let V0=document.elementFromPoint(s.clientX,s.clientY),_2=j2(V0)||$0();if(e.current!==_2)j0(_2);I0(_2)}},d=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d);let s=B0.current;if(s?.dragging&&s.path){let o=e.current||$0(),R=G0.current;if(typeof R==="function")R(s.path,o)}B0.current={path:null,dragging:!1,startX:0,startY:0},P.current=0,U_(!1),r(null),j0(null),x_(),F2(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{H0.current=!1},0)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},[j2,$0,Z2,c0,F2,j0,I0,x_]),f2=M(async(V)=>{let B=Array.from(V?.target?.files||[]);if(B.length===0)return;let w=U0.current||".";if(await T0(B,w),U0.current=".",V?.target)V.target.value=""},[T0]);return Q`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${D_}
            ref=${f_}
            onDragEnter=${Z0}
            onDragOver=${h0}
            onDragLeave=${J2}
            onDrop=${G2}
        >
            <input type="file" multiple style="display:none" ref=${e_} onChange=${f2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${u2} title="New file" disabled=${L_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${f0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${l?" active":""}`}
                        onClick=${S2}
                        title=${l?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!l&&Q`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${C2}>
                ${L_&&Q`<div class="workspace-drop-hint">Uploading…</div>`}
                ${H&&Q`<div class="workspace-loading">Loading…</div>`}
                ${a&&Q`<div class="workspace-error">${a}</div>`}
                ${N&&Q`
                    <div
                        class="workspace-tree-list"
                        ref=${z0}
                        tabIndex="0"
                        onClick=${a0}
                        onDblClick=${p0}
                        onKeyDown=${n2}
                        onTouchStart=${b0}
                        onTouchEnd=${U}
                        onTouchMove=${f}
                        onTouchCancel=${U}
                    >
                        ${S0.map(({node:V,depth:B})=>{let w=V.type==="dir",E=V.path===X,u=V.path===q,d=w&&z.has(V.path),s=j_&&V.path===j_,o=Array.isArray(V.children)&&V.children.length>0?V.children.length:Number(V.child_count)||0;return Q`
                                <div
                                    key=${V.path}
                                    class=${`workspace-row${E?" selected":""}${s?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+B*N2.indentPx}px`}}
                                    data-path=${V.path}
                                    data-type=${V.type}
                                    onMouseDown=${y0}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${w?d?Q`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:Q`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${w?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${w?Q`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:Q`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${u?Q`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${i_}
                                                value=${y}
                                                onInput=${(R)=>k(R?.target?.value||"")}
                                                onKeyDown=${(R)=>{if(R.key==="Enter")R.preventDefault(),l2();else if(R.key==="Escape")R.preventDefault(),F0()}}
                                                onBlur=${F0}
                                                onClick=${(R)=>R.stopPropagation()}
                                            />
                                        `:Q`<span class="workspace-label"><span class="workspace-label-text">${V.name}</span></span>`}
                                    ${w&&!d&&o>0&&Q`
                                        <span class="workspace-count">${o}</span>
                                    `}
                                    ${w&&Q`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${V.path}
                                            title="Upload files to this folder"
                                            onClick=${i0}
                                            disabled=${L_}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${X&&Q`
                <div class="workspace-preview-splitter-h" onMouseDown=${n} onTouchStart=${Y_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${X}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${u2} title="New file" disabled=${L_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!Q0&&Q`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>P2&&u_.current?.(X,x)}
                                    title=${K2}
                                    disabled=${!P2}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${a_}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${Q0?Q`
                                    <button class="workspace-download" onClick=${O2}
                                        title="Upload files to this folder" disabled=${L_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${L4(X,l)}
                                        title="Download folder as zip" onClick=${(V)=>V.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:Q`<button class="workspace-download" onClick=${P_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${S&&Q`<div class="workspace-loading">Loading preview…</div>`}
                    ${x?.error&&Q`<div class="workspace-error">${x.error}</div>`}
                    ${Q0&&Q`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${N_?.loading&&Q`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${N_?.error&&Q`<div class="workspace-error">${N_.error}</div>`}
                        ${N_?.payload&&N_.payload.segments?.length>0&&Q`
                            <${S9} payload=${N_.payload} />
                        `}
                        ${N_?.payload&&(!N_.payload.segments||N_.payload.segments.length===0)&&Q`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${x&&!x.error&&!Q0&&Q`
                        <div class="workspace-preview-body" ref=${P0}></div>
                    `}
                    ${v&&Q`
                        <div class="workspace-download-card">
                            <${C9} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${__&&Q`
                <div class="workspace-drag-ghost" ref=${k0}>${__.label}</div>
            `}
        </aside>
    `}function P8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:L,previewTabs:X,onToggleDock:O,dockVisible:q}){let[W,y]=T(null),k=J(null);m(()=>{if(!W)return;let H=(b)=>{if(b.type==="keydown"&&b.key!=="Escape")return;y(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[W]),m(()=>{let H=(b)=>{if(b.ctrlKey&&b.key==="Tab"){if(b.preventDefault(),!_.length)return;let S=_.findIndex((g)=>g.id===$);if(b.shiftKey){let g=_[(S-1+_.length)%_.length];j?.(g.id)}else{let g=_[(S+1)%_.length];j?.(g.id)}return}if((b.ctrlKey||b.metaKey)&&b.key==="w"){let S=document.querySelector(".editor-pane");if(S&&S.contains(document.activeElement)){if(b.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let x=M((H,b)=>{if(H.button===1){H.preventDefault(),Z?.(b);return}if(H.button===0)j?.(b)},[j,Z]),I=M((H,b)=>{H.preventDefault(),y({id:b,x:H.clientX,y:H.clientY})},[]),v=M((H)=>{H.preventDefault(),H.stopPropagation()},[]),C=M((H,b)=>{H.preventDefault(),H.stopPropagation(),Z?.(b)},[Z]);if(m(()=>{if(!$||!k.current)return;let H=k.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return Q`
        <div class="tab-strip" ref=${k} role="tablist">
            ${_.map((H)=>Q`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(b)=>x(b,H.id)}
                    onContextMenu=${(b)=>I(b,H.id)}
                >
                    ${H.pinned&&Q`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${H.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${v}
                        onClick=${(b)=>C(b,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?Q`<span class="tab-dirty-dot" aria-hidden="true"></span>`:Q`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${O&&Q`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${q?" active":""}`}
                    onClick=${O}
                    title=${`${q?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${q?"Hide":"Show"} terminal`}
                    aria-pressed=${q?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${W&&Q`
            <div class="tab-context-menu" style=${{left:W.x+"px",top:W.y+"px"}}>
                <button onClick=${()=>{Z?.(W.id),y(null)}}>Close</button>
                <button onClick=${()=>{N?.(W.id),y(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),y(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(W.id),y(null)}}>
                    ${_.find((H)=>H.id===W.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${L&&/\.(md|mdx|markdown)$/i.test(W.id)&&Q`
                    <hr />
                    <button onClick=${()=>{L(W.id),y(null)}}>
                        ${X?.has(W.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var f9=400,r3=60,M8=220,s3="mdPreviewHeight";function x9(){try{let _=localStorage.getItem(s3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=r3?$:M8}catch{return M8}}function S8({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[K,z]=T(x9),L=J(null),X=J(null),O=J(""),q=J(_);return q.current=_,m(()=>{let k=()=>{let I=q.current?.()||"";if(I===O.current)return;O.current=I;try{let v=m0(I,null,{sanitize:!1});N(v)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};k();let x=setInterval(k,f9);return()=>clearInterval(x)},[]),m(()=>{if(L.current&&Z)B2(L.current).catch(()=>{})},[Z]),Q`
        <div
            class="md-preview-splitter"
            onMouseDown=${(k)=>{k.preventDefault();let x=k.clientY,I=X.current?.offsetHeight||K,v=X.current?.parentElement,C=v?v.offsetHeight*0.7:500,H=k.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let b=(g)=>{let a=Math.min(Math.max(I-(g.clientY-x),r3),C);z(a)},S=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(s3,String(Math.round(X.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",S)}}
            onTouchStart=${(k)=>{k.preventDefault();let x=k.touches[0];if(!x)return;let I=x.clientY,v=X.current?.offsetHeight||K,C=X.current?.parentElement,H=C?C.offsetHeight*0.7:500,b=k.currentTarget;b.classList.add("dragging"),document.body.style.userSelect="none";let S=(a)=>{let t=a.touches[0];if(!t)return;a.preventDefault();let l=Math.min(Math.max(v-(t.clientY-I),r3),H);z(l)},g=()=>{b.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(s3,String(Math.round(X.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",S),document.removeEventListener("touchend",g),document.removeEventListener("touchcancel",g)};document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("touchend",g),document.addEventListener("touchcancel",g)}}
        ></div>
        <div class="md-preview-panel" ref=${X} style=${{height:K+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${L}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function C8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=J(_);K.current=_;let z=J($);z.current=$;let L=J(j);L.current=j;let X=J(Z);X.current=Z,m(()=>{L.current();let O=new y3((W,y)=>K.current(W,y),(W)=>z.current(W),{chatJid:N});O.connect();let q=()=>{O.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",q),document.addEventListener("visibilitychange",q),()=>{window.removeEventListener("focus",q),document.removeEventListener("visibilitychange",q),O.disconnect()}},[N])}function f8(){let[_,$]=T(!1),[j,Z]=T("default"),N=J(!1);m(()=>{let X=g2("notificationsEnabled",!1);if(N.current=X,$(X),typeof Notification<"u")Z(Notification.permission)},[]),m(()=>{N.current=_},[_]);let K=M(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),z=M(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await K();if(Z(O||"default"),O!=="granted"){N.current=!1,$(!1),o_("notificationsEnabled","false");return}}let X=!N.current;N.current=X,$(X),o_("notificationsEnabled",String(X))},[K]),L=M((X,O)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let q=new Notification(X,{body:O});return q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:L}}var N$=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function x8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[K,z]=T(!1),L=J(!1),X=J(null),O=J(!1),q=J(null),W=J(null),y=J(0);m(()=>{L.current=K},[K]),m(()=>{W.current=Z},[Z]),m(()=>{y.current+=1,W.current=null,q.current=null,O.current=!1,L.current=!1,N(null),z(!1)},[j]);let k=M(async(v=null)=>{let C=y.current;try{if(v){let H=await i1(v,50,0,j);if(C!==y.current)return;N(H.posts),z(!1)}else{let H=await J$(10,null,j);if(C!==y.current)return;N(H.posts),z(H.has_more)}}catch(H){if(C!==y.current)return;console.error("Failed to load posts:",H)}},[j]),x=M(async()=>{let v=y.current;try{let C=await J$(10,null,j);if(v!==y.current)return;N((H)=>{if(!H||H.length===0)return C.posts;return N$([...C.posts,...H])}),z((H)=>H||C.has_more)}catch(C){if(v!==y.current)return;console.error("Failed to refresh timeline:",C)}},[j]),I=M(async(v={})=>{let C=y.current,H=W.current;if(!H||H.length===0)return;if(O.current)return;let{preserveScroll:b=!0,preserveMode:S="top",allowRepeat:g=!1}=v,a=(Z_)=>{if(!b){Z_();return}if(S==="top")$(Z_);else _(Z_)},l=H.slice().sort((Z_,i)=>Z_.id-i.id)[0]?.id;if(!Number.isFinite(l))return;if(!g&&q.current===l)return;O.current=!0,q.current=l;try{let Z_=await J$(10,l,j);if(C!==y.current)return;if(Z_.posts.length>0)a(()=>{N((i)=>N$([...Z_.posts,...i||[]])),z(Z_.has_more)});else z(!1)}catch(Z_){if(C!==y.current)return;console.error("Failed to load more posts:",Z_)}finally{if(C===y.current)O.current=!1}},[j,_,$]);return m(()=>{X.current=I},[I]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:L,loadPosts:k,refreshTimeline:x,loadMore:I,loadMoreRef:X,loadingMoreRef:O,lastBeforeIdRef:q}}function I8(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,K]=T(""),[z,L]=T({text:"",totalLines:0}),[X,O]=T(null),[q,W]=T(null),[y,k]=T(null),x=J(null),I=J(0),v=J(!1),C=J(""),H=J(""),b=J(null),S=J(null),g=J(null),a=J(null),t=J(!1),l=J(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:L,pendingRequest:X,setPendingRequest:O,currentTurnId:q,setCurrentTurnId:W,steerQueuedTurnId:y,setSteerQueuedTurnId:k,lastAgentEventRef:x,lastSilenceNoticeRef:I,isAgentRunningRef:v,draftBufferRef:C,thoughtBufferRef:H,pendingRequestRef:b,stalledPostIdRef:S,currentTurnIdRef:g,steerQueuedTurnIdRef:a,thoughtExpandedRef:t,draftExpandedRef:l}}function T8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.clientX,k=$.current||280,x=q.currentTarget;x.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=y,v=(H)=>{I=H.clientX;let b=Math.min(Math.max(k+(H.clientX-y),160),600);W.style.setProperty("--sidebar-width",`${b}px`),$.current=b},C=()=>{let H=Math.min(Math.max(k+(I-y),160),600);$.current=H,x.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",o_("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",C)}).current,K=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.touches[0];if(!y)return;let k=y.clientX,x=$.current||280,I=q.currentTarget;I.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(H)=>{let b=H.touches[0];if(!b)return;H.preventDefault();let S=Math.min(Math.max(x+(b.clientX-k),160),600);W.style.setProperty("--sidebar-width",`${S}px`),$.current=S},C=()=>{I.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",o_("sidebarWidth",String(Math.round($.current||x))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",C),document.removeEventListener("touchcancel",C)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",C),document.addEventListener("touchcancel",C)}).current,z=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.clientX,k=j.current||$.current||280,x=q.currentTarget;x.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=y,v=(H)=>{I=H.clientX;let b=Math.min(Math.max(k+(H.clientX-y),200),800);W.style.setProperty("--editor-width",`${b}px`),j.current=b},C=()=>{let H=Math.min(Math.max(k+(I-y),200),800);j.current=H,x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",C)}).current,L=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.touches[0];if(!y)return;let k=y.clientX,x=j.current||$.current||280,I=q.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let v=(H)=>{let b=H.touches[0];if(!b)return;H.preventDefault();let S=Math.min(Math.max(x+(b.clientX-k),200),800);W.style.setProperty("--editor-width",`${S}px`),j.current=S},C=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",o_("editorWidth",String(Math.round(j.current||x))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",C),document.removeEventListener("touchcancel",C)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",C),document.addEventListener("touchcancel",C)}).current,X=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.clientY,k=Z?.current||200,x=q.currentTarget;x.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=y,v=(H)=>{I=H.clientY;let b=Math.min(Math.max(k-(H.clientY-y),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${b}px`),Z)Z.current=b;window.dispatchEvent(new CustomEvent("dock-resize"))},C=()=>{let H=Math.min(Math.max(k-(I-y),100),window.innerHeight*0.5);if(Z)Z.current=H;x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",C)}).current,O=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.touches[0];if(!y)return;let k=y.clientY,x=Z?.current||200,I=q.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let v=(H)=>{let b=H.touches[0];if(!b)return;H.preventDefault();let S=Math.min(Math.max(x-(b.clientY-k),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${S}px`),Z)Z.current=S;window.dispatchEvent(new CustomEvent("dock-resize"))},C=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",o_("dockHeight",String(Math.round(Z?.current||x))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",C),document.removeEventListener("touchcancel",C)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",C),document.addEventListener("touchcancel",C)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:L,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:O}}function u8({onTabClosed:_}={}){let $=J(_);$.current=_;let[j,Z]=T(()=>I_.getTabs()),[N,K]=T(()=>I_.getActiveId()),[z,L]=T(()=>I_.getTabs().length>0);m(()=>{return I_.onChange((S,g)=>{Z(S),K(g),L(S.length>0)})},[]);let[X,O]=T(()=>new Set),q=M((S)=>{O((g)=>{let a=new Set(g);if(a.has(S))a.delete(S);else a.add(S);return a})},[]),W=M((S)=>{O((g)=>{if(!g.has(S))return g;let a=new Set(g);return a.delete(S),a})},[]),y=M((S)=>{if(!S)return;let g={path:S,mode:"edit"};try{if(!L0.resolve(g)){if(!L0.get("editor")){console.warn(`[openEditor] No pane handler for: ${S}`);return}}}catch(a){console.warn(`[openEditor] paneRegistry.resolve() error for "${S}":`,a)}I_.open(S)},[]),k=M(()=>{let S=I_.getActiveId();if(S){let g=I_.get(S);if(g?.dirty){if(!window.confirm(`"${g.label}" has unsaved changes. Close anyway?`))return}I_.close(S),W(S),$.current?.(S)}},[W]),x=M((S)=>{let g=I_.get(S);if(g?.dirty){if(!window.confirm(`"${g.label}" has unsaved changes. Close anyway?`))return}I_.close(S),W(S),$.current?.(S)},[W]),I=M((S)=>{I_.activate(S)},[]),v=M((S)=>{let g=I_.getTabs().filter((l)=>l.id!==S&&!l.pinned),a=g.filter((l)=>l.dirty).length;if(a>0){if(!window.confirm(`${a} unsaved tab${a>1?"s":""} will be closed. Continue?`))return}let t=g.map((l)=>l.id);I_.closeOthers(S),t.forEach((l)=>{W(l),$.current?.(l)})},[W]),C=M(()=>{let S=I_.getTabs().filter((t)=>!t.pinned),g=S.filter((t)=>t.dirty).length;if(g>0){if(!window.confirm(`${g} unsaved tab${g>1?"s":""} will be closed. Continue?`))return}let a=S.map((t)=>t.id);I_.closeAll(),a.forEach((t)=>{W(t),$.current?.(t)})},[W]),H=M((S)=>{I_.togglePin(S)},[]),b=M(()=>{let S=I_.getActiveId();if(S)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:S}}))},[]);return m(()=>{let S=(g)=>{let{oldPath:a,newPath:t,type:l}=g.detail||{};if(!a||!t)return;if(l==="dir"){for(let Z_ of I_.getTabs())if(Z_.path===a||Z_.path.startsWith(`${a}/`)){let i=`${t}${Z_.path.slice(a.length)}`;I_.rename(Z_.id,i)}}else I_.rename(a,t)};return window.addEventListener("workspace-file-renamed",S),()=>window.removeEventListener("workspace-file-renamed",S)},[]),m(()=>{let S=(g)=>{if(I_.hasUnsaved())g.preventDefault(),g.returnValue=""};return window.addEventListener("beforeunload",S),()=>window.removeEventListener("beforeunload",S)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:X,openEditor:y,closeEditor:k,handleTabClose:x,handleTabActivate:I,handleTabCloseOthers:v,handleTabCloseAll:C,handleTabTogglePin:H,handleTabTogglePreview:q,revealInExplorer:b}}function a3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var t3=a3("warning",30000),m8=a3("finalize",120000),e3=a3("refresh",30000),v8=30000;function R8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function g8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function c8(_=30000){let[,$]=T(0);m(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function _1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function p8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function c$(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function I9(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function h8(_,$={}){if(c$($))return null;if(I9($))return{target:"_blank",features:void 0,mode:"tab"};return{target:T9(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function i8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function l8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function n8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function o8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function K$(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function d8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function T9(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function $1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function V2(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var Z1="piclaw_btw_session";function u9(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function m9(){let _=o0(Z1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var r8=l1,s8=o1,v9=d1,a8=e1,t8=_4,e8=r1,j1=typeof V3==="function"?V3:V2("getAgentContext",null),R9=typeof x2==="function"?x2:V2("getAgentModels",{current:null,models:[]}),g9=typeof D$==="function"?D$:V2("getActiveChatAgents",{chats:[]}),_6=typeof G3==="function"?G3:V2("getChatBranches",{chats:[]}),c9=typeof L3==="function"?L3:V2("renameChatBranch",null),p9=typeof X3==="function"?X3:V2("pruneChatBranch",null),h9=typeof W3==="function"?W3:V2("getAgentQueueState",{count:0}),i9=typeof Q3==="function"?Q3:V2("steerAgentQueueItem",{removed:!1,queued:"steer"}),l9=typeof q3==="function"?q3:V2("removeAgentQueueItem",{removed:!1}),n9=typeof B3==="function"?B3:V2("streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});L0.register(T3);L0.register(c3);L0.register(g3);u3();L0.register(v3);function o9({locationParams:_}){let $=p_(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),j=p_(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=p_(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),N=p_(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():$},[$,_]),[K,z]=T("disconnected"),[L,X]=T(()=>c$()),[O,q]=T(null),[W,y]=T(null),[k,x]=T(!1),[I,v]=T("current"),[C,H]=T([]),[b,S]=T([]),[g,a]=T(null),{agentStatus:t,setAgentStatus:l,agentDraft:Z_,setAgentDraft:i,agentPlan:U_,setAgentPlan:q_,agentThought:r,setAgentThought:__,pendingRequest:K_,setPendingRequest:j_,currentTurnId:G_,setCurrentTurnId:L_,steerQueuedTurnId:F_,setSteerQueuedTurnId:N_,lastAgentEventRef:J_,lastSilenceNoticeRef:w_,isAgentRunningRef:r_,draftBufferRef:D_,thoughtBufferRef:T_,pendingRequestRef:k_,stalledPostIdRef:h_,currentTurnIdRef:p,steerQueuedTurnIdRef:X_,thoughtExpandedRef:V_,draftExpandedRef:W_}=I8(),[y_,b_]=T({}),[u_,B_]=T(null),[S_,f_]=T(null),[z0,i_]=T(!1),[e_,U0]=T(null),[C_,_0]=T([]),[B0,D0]=T([]),[H0,Y0]=T(null),[E0,l_]=T([]),[R_,P0]=T(!1),[g_,n_]=T(()=>m9()),w0=p_(()=>C_.find((G)=>G?.chat_jid===$)||null,[C_,$]),Q_=p_(()=>B0.find((G)=>G?.chat_jid===$)||w0||null,[w0,B0,$]),P=Q_?.root_chat_jid||w0?.root_chat_jid||$,e=u9(I),[A_,m_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),k0=E0.length,r0=J(new Set),q0=J([]),G0=J(new Set),X0=J({inFlight:!1,lastAttemptAt:0,turnId:null});r0.current=new Set(E0.map((G)=>G.row_id)),q0.current=E0;let{notificationsEnabled:s0,notificationPermission:M0,toggleNotifications:v0,notify:R0}=f8(),[i2,w2]=T(()=>new Set),[g0,$0]=T(()=>g2("workspaceOpen",!0)),j2=J(null),{editorOpen:O0,tabStripTabs:j0,tabStripActiveId:x_,previewTabs:I0,openEditor:c0,closeEditor:Z2,handleTabClose:F2,handleTabActivate:k2,handleTabCloseOthers:F0,handleTabCloseAll:b2,handleTabTogglePin:l2,handleTabTogglePreview:y2,revealInExplorer:u2}=u8({onTabClosed:(G)=>j2.current?.(G)}),W2=J(null),s_=J(null),A2=J(null),S0=J(null),C0=L0.getDockPanes().length>0,[N2,z$]=T(!1),Q0=M(()=>z$((G)=>!G),[]),P2=!j&&(O0||C0&&N2);m(()=>{let G=W2.current;if(!G)return;if(s_.current)s_.current.dispose(),s_.current=null;let Y=x_;if(!Y)return;let F={path:Y,mode:"edit"},A=L0.resolve(F)||L0.get("editor");if(!A){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let D=A.mount(G,F);s_.current=D,D.onDirtyChange?.(($_)=>{I_.setDirty(Y,$_)}),D.onSaveRequest?.(()=>{}),D.onClose?.(()=>{Z2()});let h=I_.getViewState(Y);if(h&&typeof D.restoreViewState==="function")requestAnimationFrame(()=>D.restoreViewState(h));if(typeof D.onViewStateChange==="function")D.onViewStateChange(($_)=>{I_.saveViewState(Y,$_)});return requestAnimationFrame(()=>D.focus()),()=>{if(s_.current===D)D.dispose(),s_.current=null}},[x_,Z2]),m(()=>{let G=A2.current;if(S0.current)S0.current.dispose(),S0.current=null;if(!G||!C0||!N2)return;let Y=L0.getDockPanes()[0];if(!Y){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=Y.mount(G,{mode:"view"});return S0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(S0.current===F)F.dispose(),S0.current=null}},[C0,N2]);let[K2,z2]=T({name:"You",avatar_url:null,avatar_background:null}),M2=J(!1),p0=J(!1),a0=J(null),f0=J($),t0=J(new Map),S2=J($),C2=J(0),e0=J(0),q2=J({}),n2=J({name:null,avatar_url:null}),b0=J({currentHashtag:null,searchQuery:null}),U=J(null),f=J(null),n=J(0),Y_=J(0),P_=J(0),a_=J(null),M_=J(null),Z0=J(null),h0=J(null),J2=J(0),T0=J({title:null,avatarBase:null}),Y2=J(null),G2=M(()=>{if(Y2.current)clearTimeout(Y2.current),Y2.current=null;a(null)},[]);c8(30000),m(()=>{return E4()},[]),m(()=>{if(typeof window>"u")return;let G=()=>{X(c$())};G();let A=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].map((D)=>{try{return window.matchMedia(D)}catch{return null}}).filter(Boolean).map((D)=>{if(typeof D.addEventListener==="function")return D.addEventListener("change",G),()=>D.removeEventListener("change",G);if(typeof D.addListener==="function")return D.addListener(G),()=>D.removeListener(G);return()=>{}});return window.addEventListener("focus",G),window.addEventListener("pageshow",G),()=>{for(let D of A)D();window.removeEventListener("focus",G),window.removeEventListener("pageshow",G)}},[]),m(()=>{o_("workspaceOpen",String(g0))},[g0]),m(()=>{return()=>{G2()}},[G2]),m(()=>{if(!g_){o_(Z1,"");return}o_(Z1,JSON.stringify({question:g_.question||"",answer:g_.answer||"",thinking:g_.thinking||"",error:g_.error||null,status:g_.status||"success"}))},[g_]),m(()=>{q2.current=y_||{}},[y_]),m(()=>{f0.current=$},[$]),m(()=>{n2.current=K2||{name:"You",avatar_url:null,avatar_background:null}},[K2]);let i0=M((G,Y,F=null)=>{if(typeof document>"u")return;let A=(G||"").trim()||"PiClaw";if(T0.current.title!==A){document.title=A;let c=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(c&&c.getAttribute("content")!==A)c.setAttribute("content",A);T0.current.title=A}let D=document.getElementById("dynamic-favicon");if(!D)return;let h=D.getAttribute("data-default")||D.getAttribute("href")||"/favicon.ico",$_=Y||h,H_=Y?`${$_}|${F||""}`:$_;if(T0.current.avatarBase!==H_){let c=Y?`${$_}${$_.includes("?")?"&":"?"}v=${F||Date.now()}`:$_;D.setAttribute("href",c),T0.current.avatarBase=H_}},[]),O2=M((G)=>{if(!G)return;H((Y)=>Y.includes(G)?Y:[...Y,G])},[]),y0=M((G)=>{H((Y)=>Y.filter((F)=>F!==G))},[]);j2.current=y0;let f2=M(()=>{H([])},[]),V=M((G,Y=null,F="info",A=3000)=>{G2(),a({title:G,detail:Y||null,kind:F||"info"}),Y2.current=setTimeout(()=>{a((D)=>D?.title===G?null:D)},A)},[G2]),B=M((G)=>{let Y=p8(G,{editorOpen:O0,resolvePane:(F)=>L0.resolve(F)});if(Y.kind==="open"){c0(Y.path);return}if(Y.kind==="toast")V(Y.title,Y.detail,Y.level)},[O0,c0,V]),w=M(()=>{let G=x_;if(G)O2(G)},[x_,O2]),E=M((G)=>{if(!G)return;S((Y)=>Y.includes(G)?Y:[...Y,G])},[]),u=M(async(G,Y=null)=>{let F=(D)=>{D.scrollIntoView({behavior:"smooth",block:"center"}),D.classList.add("post-highlight"),setTimeout(()=>D.classList.remove("post-highlight"),2000)},A=document.getElementById("post-"+G);if(A){F(A);return}try{let D=typeof Y==="string"&&Y.trim()?Y.trim():$,$_=(await n1(G,D))?.thread?.[0];if(!$_)return;W0((H_)=>{if(!H_)return[$_];if(H_.some((c)=>c.id===$_.id))return H_;return[...H_,$_]}),requestAnimationFrame(()=>{setTimeout(()=>{let H_=document.getElementById("post-"+G);if(H_)F(H_)},50)})}catch(D){console.error("[scrollToMessage] Failed to fetch message",G,D)}},[$]),d=M((G)=>{S((Y)=>Y.filter((F)=>F!==G))},[]),s=M(()=>{S([])},[]),o=M((G={})=>{let Y=Date.now();if(J_.current=Y,G.running)r_.current=!0,P0((F)=>F?F:!0);if(G.clearSilence)w_.current=0},[P0]),R=M(()=>{if(h0.current)clearTimeout(h0.current),h0.current=null;J2.current=0},[]);m(()=>()=>{R()},[R]);let z_=M(()=>{R(),l((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:Y,lastActivity:F,...A}=G;return A})},[R]),J0=M((G)=>{if(!G)return;R();let Y=Date.now();J2.current=Y,l({type:G.type||"active",last_activity:!0}),h0.current=setTimeout(()=>{if(J2.current!==Y)return;l((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},v8)},[R]),V0=M(()=>{r_.current=!1,P0(!1),J_.current=null,w_.current=0,D_.current="",T_.current="",k_.current=null,M_.current=null,p.current=null,X_.current=null,a0.current=null,X0.current={inFlight:!1,lastAttemptAt:0,turnId:null},R(),L_(null),N_(null),V_.current=!1,W_.current=!1},[R,L_,N_,P0]),_2=M(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),Y$=M(()=>({agentStatus:t,agentDraft:Z_?{...Z_}:{text:"",totalLines:0},agentPlan:U_||"",agentThought:r?{...r}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:G_,steerQueuedTurnId:F_,isAgentTurnActive:Boolean(R_),followupQueueItems:Array.isArray(E0)?E0.map((G)=>({...G})):[],activeModel:u_,activeThinkingLevel:S_,supportsThinking:Boolean(z0),activeModelUsage:e_,contextUsage:H0,isAgentRunning:Boolean(r_.current),wasAgentActive:Boolean(p0.current),draftBuffer:D_.current||"",thoughtBuffer:T_.current||"",lastAgentEvent:J_.current||null,lastSilenceNotice:w_.current||0,lastAgentResponse:M_.current||null,currentTurnIdRef:p.current||null,steerQueuedTurnIdRef:X_.current||null,thoughtExpanded:Boolean(V_.current),draftExpanded:Boolean(W_.current),agentStatusRef:a0.current||null,silentRecovery:{...X0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[u_,e_,S_,Z_,U_,t,r,H0,G_,E0,R_,K_,F_,z0]),N1=M((G)=>{let Y=G||_2();R(),r_.current=Boolean(Y.isAgentRunning),p0.current=Boolean(Y.wasAgentActive),P0(Boolean(Y.isAgentTurnActive)),J_.current=Y.lastAgentEvent||null,w_.current=Number(Y.lastSilenceNotice||0),D_.current=Y.draftBuffer||"",T_.current=Y.thoughtBuffer||"",k_.current=Y.pendingRequest||null,M_.current=Y.lastAgentResponse||null,p.current=Y.currentTurnIdRef||null,X_.current=Y.steerQueuedTurnIdRef||null,a0.current=Y.agentStatusRef||null,X0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},V_.current=Boolean(Y.thoughtExpanded),W_.current=Boolean(Y.draftExpanded),l(Y.agentStatus||null),i(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),q_(Y.agentPlan||""),__(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),j_(Y.pendingRequest||null),L_(Y.currentTurnId||null),N_(Y.steerQueuedTurnId||null),l_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((F)=>({...F})):[]),B_(Y.activeModel||null),f_(Y.activeThinkingLevel||null),i_(Boolean(Y.supportsThinking)),U0(Y.activeModelUsage??null),Y0(Y.contextUsage??null)},[R,_2,L_,l_,P0,N_]),L2=M((G)=>{if(!G)return;if(p.current===G)return;p.current=G,X0.current={inFlight:!1,lastAttemptAt:0,turnId:G},L_(G),X_.current=null,N_(null),D_.current="",T_.current="",i({text:"",totalLines:0}),q_(""),__({text:"",totalLines:0}),j_(null),k_.current=null,M_.current=null,V_.current=!1,W_.current=!1},[L_,N_]),K1=M((G)=>{if(typeof document<"u"){let c=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&c)return}let Y=M_.current;if(!Y||!Y.post)return;if(G&&Y.turnId&&Y.turnId!==G)return;let F=Y.post;if(F.id&&a_.current===F.id)return;let A=String(F?.data?.content||"").trim();if(!A)return;a_.current=F.id||a_.current,M_.current=null;let D=A.replace(/\s+/g," ").slice(0,200),h=q2.current||{},H_=(F?.data?.agent_id?h[F.data.agent_id]:null)?.name||"Pi";R0(H_,D)},[R0]),$6=M(async(G,Y)=>{if(G!=="thought"&&G!=="draft")return;let F=p.current;if(G==="thought"){if(V_.current=Y,F)try{await t8(F,"thought",Y)}catch(A){console.warn("Failed to update thought visibility:",A)}if(!Y)return;try{let A=F?await a8(F,"thought"):null;if(A?.text)T_.current=A.text;__((D)=>({...D||{text:"",totalLines:0},fullText:T_.current||D?.fullText||"",totalLines:Number.isFinite(A?.total_lines)?A.total_lines:D?.totalLines||0}))}catch(A){console.warn("Failed to fetch full thought:",A)}return}if(W_.current=Y,F)try{await t8(F,"draft",Y)}catch(A){console.warn("Failed to update draft visibility:",A)}if(!Y)return;try{let A=F?await a8(F,"draft"):null;if(A?.text)D_.current=A.text;i((D)=>({...D||{text:"",totalLines:0},fullText:D_.current||D?.fullText||"",totalLines:Number.isFinite(A?.total_lines)?A.total_lines:D?.totalLines||0}))}catch(A){console.warn("Failed to fetch full draft:",A)}},[]),p$=J(null),h$=M(()=>{let G=U.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);p$.current=h$;let j6=M((G)=>{let Y=U.current;if(!Y||typeof G!=="function"){G?.();return}let{currentHashtag:F,searchQuery:A}=b0.current||{},D=!(A&&!F),h=D?Y.scrollHeight-Y.scrollTop:Y.scrollTop;G(),requestAnimationFrame(()=>{let $_=U.current;if(!$_)return;if(D){let H_=Math.max($_.scrollHeight-h,0);$_.scrollTop=H_}else{let H_=Math.max($_.scrollHeight-$_.clientHeight,0),c=Math.min(h,H_);$_.scrollTop=c}})},[]),o2=M((G)=>{let Y=U.current;if(!Y||typeof G!=="function"){G?.();return}let F=Y.scrollTop;G(),requestAnimationFrame(()=>{let A=U.current;if(!A)return;let D=Math.max(A.scrollHeight-A.clientHeight,0);A.scrollTop=Math.min(F,D)})},[]),Z6="Queued as a follow-up (one-at-a-time).",N6="⁣",z1=M((G)=>{if(!G||!Array.isArray(G))return G;let Y=r0.current,F=new Set(Y),A=G.filter((D)=>{if(F.has(D?.id))return!1;if(D?.data?.is_bot_message){let h=D?.data?.content;if(h===Z6||h===N6)return!1}return!0});return A.length===G.length?G:A},[]),{posts:Y1,setPosts:W0,hasMore:K6,setHasMore:G$,hasMoreRef:G1,loadPosts:$2,refreshTimeline:A0,loadMore:z6,loadMoreRef:i$}=x8({preserveTimelineScroll:j6,preserveTimelineScrollTop:o2,chatJid:$}),m2=p_(()=>z1(Y1),[Y1,E0,z1]),O$=M(()=>{let G=h_.current;if(!G)return;W0((Y)=>Y?Y.filter((F)=>F.id!==G):Y),h_.current=null},[W0]),{handleSplitterMouseDown:Y6,handleSplitterTouchStart:G6,handleEditorSplitterMouseDown:O6,handleEditorSplitterTouchStart:L6,handleDockSplitterMouseDown:X6,handleDockSplitterTouchStart:V6}=T8({appShellRef:f,sidebarWidthRef:n,editorWidthRef:Y_,dockHeightRef:P_}),O1=M(()=>{if(!r_.current)return;r_.current=!1,w_.current=0,J_.current=null,p.current=null,L_(null),V_.current=!1,W_.current=!1;let G=(D_.current||"").trim();if(D_.current="",T_.current="",i({text:"",totalLines:0}),q_(""),__({text:"",totalLines:0}),j_(null),k_.current=null,M_.current=null,!G){l({type:"error",title:"Response stalled - No content received"});return}let F=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,A=Date.now(),D=new Date().toISOString(),h={id:A,timestamp:D,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};h_.current=A,W0(($_)=>$_?N$([...$_,h]):[h]),p$.current?.(),l(null)},[L_]);m(()=>{b0.current={currentHashtag:O,searchQuery:W}},[O,W]);let v_=M(()=>{let G=$;h9(G).then((Y)=>{if(f0.current!==G)return;let F=G0.current,A=Array.isArray(Y?.items)?Y.items.map((D)=>({...D})).filter((D)=>!F.has(D.row_id)):[];if(A.length){l_((D)=>{if(D.length===A.length&&D.every((h,$_)=>h.row_id===A[$_].row_id))return D;return A});return}F.clear(),l_((D)=>D.length===0?D:[])}).catch(()=>{if(f0.current!==G)return;l_((Y)=>Y.length===0?Y:[])})},[$,l_]),l0=M(async()=>{let G=$;try{let Y=await j1(G);if(f0.current!==G)return;if(Y)Y0(Y)}catch(Y){if(f0.current!==G)return;console.warn("Failed to fetch agent context:",Y)}},[$]),n0=M(async()=>{let G=$;try{let Y=await e8(G);if(f0.current!==G)return null;if(!Y||Y.status!=="active"||!Y.data){if(p0.current){let{currentHashtag:D,searchQuery:h}=b0.current||{};if(!D&&!h)A0()}return p0.current=!1,V0(),a0.current=null,l(null),i({text:"",totalLines:0}),q_(""),__({text:"",totalLines:0}),j_(null),k_.current=null,Y??null}p0.current=!0;let F=Y.data;a0.current=F;let A=F.turn_id||F.turnId;if(A)L2(A);if(o({running:!0,clearSilence:!0}),z_(),l(F),Y.thought&&Y.thought.text)__((D)=>{if(D&&D.text&&D.text.length>=Y.thought.text.length)return D;return T_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)i((D)=>{if(D&&D.text&&D.text.length>=Y.draft.text.length)return D;return D_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[V0,z_,o,A0,L2]),l$=M(async()=>{if(!r_.current)return null;if(k_.current)return null;let G=p.current||null,Y=X0.current,F=Date.now();if(Y.inFlight)return null;if(Y.turnId===G&&F-Y.lastAttemptAt<e3)return null;Y.inFlight=!0,Y.lastAttemptAt=F,Y.turnId=G;try{let{currentHashtag:A,searchQuery:D}=b0.current||{};if(!A&&!D)await A0();return await v_(),await n0()}finally{Y.inFlight=!1}},[n0,v_,A0]);m(()=>{let G=Math.min(1000,Math.max(100,Math.floor(t3/2))),Y=setInterval(()=>{if(!r_.current)return;if(k_.current)return;let F=J_.current;if(!F)return;let A=Date.now(),D=A-F,h=x$(a0.current);if(D>=m8){if(!h)l({type:"waiting",title:"Re-syncing after a quiet period…"});l$();return}if(D>=t3){if(A-w_.current>=e3){if(!h){let $_=Math.floor(D/1000);l({type:"waiting",title:`Waiting for model… No events for ${$_}s`})}w_.current=A,l$()}}},G);return()=>clearInterval(Y)},[l$]);let W6=M((G)=>{if(z(G),G!=="connected"){l(null),i({text:"",totalLines:0}),q_(""),__({text:"",totalLines:0}),j_(null),k_.current=null,V0();return}if(!M2.current){M2.current=!0,n0(),l0();return}let{currentHashtag:Y,searchQuery:F}=b0.current;if(!Y&&!F)A0();n0(),l0()},[V0,A0,n0,l0]),q6=M(async(G)=>{q(G),W0(null),await $2(G)},[$2]),Q6=M(async()=>{q(null),y(null),W0(null),await $2()},[$2]),U6=M(async(G,Y=I)=>{if(!G||!G.trim())return;let F=Y==="root"||Y==="all"?Y:"current";v(F),y(G.trim()),q(null),W0(null);try{let A=await r8(G.trim(),50,0,$,F,P);W0(A.results),G$(!1)}catch(A){console.error("Failed to search:",A),W0([])}},[$,P,I]),B6=M(()=>{x(!0),y(null),q(null),v("current"),W0([])},[]),H6=M(()=>{x(!1),y(null),$2()},[$2]),r9=M(()=>{},[]),F6=M(async(G)=>{if(!G)return;let Y=G.id,F=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():$,A=m2?.filter((h)=>h?.data?.thread_id===Y&&h?.id!==Y).length||0;if(A>0){if(!window.confirm(`Delete this message and its ${A} replies?`))return}let D=(h)=>{if(!h.length)return;w2((H_)=>{let c=new Set(H_);return h.forEach((O_)=>c.add(O_)),c}),setTimeout(()=>{if(o2(()=>{W0((H_)=>H_?H_.filter((c)=>!h.includes(c.id)):H_)}),w2((H_)=>{let c=new Set(H_);return h.forEach((O_)=>c.delete(O_)),c}),G1.current)i$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let h=await s8(Y,A>0,F);if(h?.ids?.length)D(h.ids)}catch(h){let $_=h?.message||"";if(A===0&&$_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let c=await s8(Y,!0,F);if(c?.ids?.length)D(c.ids);return}console.error("Failed to delete post:",h),alert(`Failed to delete message: ${$_}`)}},[$,m2,o2]),L1=M(async()=>{try{let G=await v9();b_(R8(G));let Y=G?.user||{};z2((A)=>{let D=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",h=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,$_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(A.name===D&&A.avatar_url===h&&A.avatar_background===$_)return A;return{name:D,avatar_url:h,avatar_background:$_}});let F=(G?.agents||[]).find((A)=>A.id==="default");i0(F?.name,F?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=$,Y=await j1(G);if(f0.current!==G)return;if(Y)Y0(Y)}catch{}},[i0,$]);m(()=>{L1();let G=c2("sidebarWidth",null),Y=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(n.current=Y,f.current)f.current.style.setProperty("--sidebar-width",`${Y}px`)},[L1]);let n$=R_||t!==null,X1=M((G)=>{if(!G||typeof G!=="object")return;let Y=G.agent_id;if(!Y)return;let{agent_name:F,agent_avatar:A}=G;if(!F&&A===void 0)return;let D=q2.current?.[Y]||{id:Y},h=D.name||null,$_=D.avatar_url??D.avatarUrl??D.avatar??null,H_=!1,c=!1;if(F&&F!==D.name)h=F,c=!0;if(A!==void 0){let O_=typeof A==="string"?A.trim():null,t_=typeof $_==="string"?$_.trim():null,E_=O_||null;if(E_!==(t_||null))$_=E_,H_=!0}if(!c&&!H_)return;if(b_((O_)=>{let E_={...O_[Y]||{id:Y}};if(c)E_.name=h;if(H_)E_.avatar_url=$_;return{...O_,[Y]:E_}}),Y==="default")i0(h,$_,H_?Date.now():null)},[i0]),V1=M((G)=>{if(!G||typeof G!=="object")return;let Y=G.user_name??G.userName,F=G.user_avatar??G.userAvatar,A=G.user_avatar_background??G.userAvatarBackground;if(Y===void 0&&F===void 0&&A===void 0)return;z2((D)=>{let h=typeof Y==="string"&&Y.trim()?Y.trim():D.name||"You",$_=F===void 0?D.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,H_=A===void 0?D.avatar_background:typeof A==="string"&&A.trim()?A.trim():null;if(D.name===h&&D.avatar_url===$_&&D.avatar_background===H_)return D;return{name:h,avatar_url:$_,avatar_background:H_}})},[]),o$=M((G)=>{if(!G||typeof G!=="object")return;let Y=G.model??G.current;if(Y!==void 0)B_(Y);if(G.thinking_level!==void 0)f_(G.thinking_level??null);if(G.supports_thinking!==void 0)i_(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)U0(G.provider_usage??null)},[]),d2=M(()=>{let G=$;R9(G).then((Y)=>{if(f0.current!==G)return;if(Y)o$(Y)}).catch(()=>{})},[o$,$]),u0=M(()=>{g9().then((G)=>{let Y=Array.isArray(G?.chats)?G.chats.filter((F)=>F&&typeof F.agent_name==="string"&&F.agent_name.trim()):[];_0(Y)}).catch(()=>{})},[]),x0=M(()=>{_6(P).then((G)=>{let Y=Array.isArray(G?.chats)?G.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];D0(Y)}).catch(()=>{})},[P]),y6=M((G)=>{let Y=G?.row_id;if(Y==null)return;G0.current.add(Y),l_((F)=>F.filter((A)=>A?.row_id!==Y)),i9(Y).then(()=>{v_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),V("Failed to steer message","The queued message could not be sent as steering.","warning"),G0.current.delete(Y),v_()})},[v_,l_,V]),J6=M((G)=>{let Y=G?.row_id;if(Y==null)return;G0.current.add(Y),l_((F)=>F.filter((A)=>A?.row_id!==Y)),l9(Y).then(()=>{v_()}).catch((F)=>{console.warn("[queue] Failed to remove queued item:",F),V("Failed to remove message","The queued message could not be removed.","warning"),G0.current.delete(Y),v_()})},[v_,l_,V]),d$=M((G)=>{if(!G||typeof G!=="object")return;if(u0(),x0(),G?.queued==="followup"||G?.queued==="steer"){v_();return}let Y=G?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))v_()},[u0,x0,v_]),r$=M(()=>{if(Z0.current)Z0.current.abort(),Z0.current=null;n_(null)},[]),L$=M(async(G)=>{let Y=String(G||"").trim();if(!Y)return V("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Z0.current)Z0.current.abort();let F=new AbortController;Z0.current=F,n_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let A=await n9(Y,{signal:F.signal,chatJid:I4($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(D,h)=>{if(D==="side_prompt_start")n_(($_)=>$_?{...$_,status:"running"}:$_)},onThinkingDelta:(D)=>{n_((h)=>h?{...h,thinking:`${h.thinking||""}${D||""}`}:h)},onTextDelta:(D)=>{n_((h)=>h?{...h,answer:`${h.answer||""}${D||""}`}:h)}});if(Z0.current!==F)return!0;n_((D)=>D?{...D,answer:A?.result||D.answer||"",thinking:A?.thinking||D.thinking||"",model:A?.model||null,status:"success",error:null}:D)}catch(A){if(F.signal.aborted)return!0;n_((D)=>D?{...D,status:"error",error:A?.payload?.error||A?.message||"BTW request failed."}:D)}finally{if(Z0.current===F)Z0.current=null}return!0},[$,V]),D6=M(async({content:G})=>{let Y=x4(G);if(!Y)return!1;if(Y.type==="help")return V("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return r$(),V("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await L$(Y.question),!0;return!1},[r$,L$,V]),E6=M(()=>{if(g_?.question)L$(g_.question)},[g_,L$]),w6=M(async()=>{let G=m4(g_);if(!G)return;try{let Y=await t2("default",G,null,[],n$?"queue":null,$);d$(Y),V(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){V("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[g_,d$,n$,V]),r2=M(()=>{d2(),u0(),x0(),v_(),l0()},[d2,u0,x0,v_,l0]);m(()=>{r2();let G=setInterval(()=>{d2(),u0(),x0(),v_()},60000);return()=>clearInterval(G)},[r2,d2,u0,x0,v_]),m(()=>{x0()},[x0]),m(()=>{let G=!1;if(W0(null),O)return $2(O),()=>{G=!0};if(W)return r8(W,50,0,$,I,P).then((Y)=>{if(G)return;W0(Y.results),G$(!1)}).catch((Y)=>{if(G)return;console.error("Failed to search:",Y),W0([]),G$(!1)}),()=>{G=!0};return $2(),()=>{G=!0}},[$,O,W,I,P,$2,G$,W0]),m(()=>{let G=S2.current||$;t0.current.set(G,Y$())},[$,Y$]),m(()=>{let G=S2.current||$;if(G===$)return;t0.current.set(G,Y$()),S2.current=$,G0.current.clear(),N1(t0.current.get($)||null),v_(),n0(),l0()},[$,n0,l0,v_,N1,Y$]);let k6=M(()=>{let{currentHashtag:G,searchQuery:Y}=b0.current||{};if(!G&&!Y)A0();r2()},[r2,A0]),s$=M((G,Y)=>{let F=Y?.turn_id,A=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,h=A?A===$:G==="connected"||G==="workspace_update";if(h)X1(Y),V1(Y);if(G==="ui_theme"){w4(Y);return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))z_()}if(G==="connected"){l(null),i({text:"",totalLines:0}),q_(""),__({text:"",totalLines:0}),j_(null),k_.current=null,V0();let c=$;e8(c).then((E_)=>{if(f0.current!==c)return;if(!E_||E_.status!=="active"||!E_.data)return;let v2=E_.data,W1=v2.turn_id||v2.turnId;if(W1)L2(W1);if(o({clearSilence:!0}),J0(v2),E_.thought&&E_.thought.text)T_.current=E_.thought.text,__({text:E_.thought.text,totalLines:E_.thought.totalLines||0});if(E_.draft&&E_.draft.text)D_.current=E_.draft.text,i({text:E_.draft.text,totalLines:E_.draft.totalLines||0})}).catch((E_)=>{console.warn("Failed to fetch agent status:",E_)});let{currentHashtag:O_,searchQuery:t_}=b0.current||{};if(!O_&&!t_)A0();r2();return}if(G==="agent_status"){if(!h){if(Y?.type==="done"||Y?.type==="error")u0(),x0();return}if(Y.type==="done"||Y.type==="error"){if(F&&p.current&&F!==p.current)return;if(Y.type==="done"){K1(F||p.current);let{currentHashtag:c,searchQuery:O_}=b0.current||{};if(!c&&!O_)A0();if(Y.context_usage)Y0(Y.context_usage)}if(p0.current=!1,V0(),G0.current.clear(),u0(),v_(),i({text:"",totalLines:0}),q_(""),__({text:"",totalLines:0}),j_(null),Y.type==="error")l({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(F)L2(F);if(o({running:!0,clearSilence:!0}),Y.type==="thinking")D_.current="",T_.current="",i({text:"",totalLines:0}),q_(""),__({text:"",totalLines:0});a0.current=Y,l((c)=>{if(c&&c.type===Y.type&&c.title===Y.title)return c;return Y})}return}if(G==="agent_steer_queued"){if(!h)return;if(F&&p.current&&F!==p.current)return;let c=F||p.current;if(!c)return;X_.current=c,N_(c);return}if(G==="agent_followup_queued"){if(!h)return;let c=Y?.row_id,O_=Y?.content;if(c!=null&&typeof O_==="string"&&O_.trim())l_((t_)=>{if(t_.some((E_)=>E_?.row_id===c))return t_;return[...t_,{row_id:c,content:O_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});v_();return}if(G==="agent_followup_consumed"){if(!h)return;let c=Y?.row_id;if(c!=null)l_((O_)=>O_.filter((t_)=>t_.row_id!==c));v_(),A0();return}if(G==="agent_followup_removed"){if(!h)return;let c=Y?.row_id;if(c!=null)G0.current.add(c),l_((O_)=>O_.filter((t_)=>t_.row_id!==c));v_();return}if(G==="agent_draft_delta"){if(!h)return;if(F&&p.current&&F!==p.current)return;if(F&&!p.current)L2(F);if(o({running:!0,clearSilence:!0}),Y?.reset)D_.current="";if(Y?.delta)D_.current+=Y.delta;let c=Date.now();if(!C2.current||c-C2.current>=100){C2.current=c;let O_=D_.current,t_=_1(O_);if(W_.current)i((E_)=>({text:E_?.text||"",totalLines:t_,fullText:O_}));else i({text:O_,totalLines:t_})}return}if(G==="agent_draft"){if(!h)return;if(F&&p.current&&F!==p.current)return;if(F&&!p.current)L2(F);o({running:!0,clearSilence:!0});let c=Y.text||"",O_=Y.mode||(Y.kind==="plan"?"replace":"append"),t_=Number.isFinite(Y.total_lines)?Y.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(O_==="replace")q_(c);else q_((E_)=>(E_||"")+c);else if(!W_.current)D_.current=c,i({text:c,totalLines:t_});return}if(G==="agent_thought_delta"){if(!h)return;if(F&&p.current&&F!==p.current)return;if(F&&!p.current)L2(F);if(o({running:!0,clearSilence:!0}),Y?.reset)T_.current="";if(typeof Y?.delta==="string")T_.current+=Y.delta;let c=Date.now();if(V_.current&&(!e0.current||c-e0.current>=100)){e0.current=c;let O_=T_.current;__((t_)=>({text:t_?.text||"",totalLines:_1(O_),fullText:O_}))}return}if(G==="agent_thought"){if(!h)return;if(F&&p.current&&F!==p.current)return;if(F&&!p.current)L2(F);o({running:!0,clearSilence:!0});let c=Y.text||"",O_=Number.isFinite(Y.total_lines)?Y.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!V_.current)T_.current=c,__({text:c,totalLines:O_});return}if(G==="agent_request"){if(!h)return;if(console.log("Agent request:",Y),F&&p.current&&F!==p.current)return;if(F)L2(F);o({running:!0,clearSilence:!0}),j_(Y),k_.current=Y;return}if(G==="agent_request_timeout"){if(!h)return;if(console.log("Agent request timeout:",Y),F&&p.current&&F!==p.current)return;j_(null),k_.current=null,V0(),l({type:"error",title:"Permission request timed out"});return}if(G==="model_changed"){if(!h)return;if(Y?.model!==void 0)B_(Y.model);if(Y?.thinking_level!==void 0)f_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)i_(Boolean(Y.supports_thinking));let c=$;j1(c).then((O_)=>{if(f0.current!==c)return;if(O_)Y0(O_)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}let{currentHashtag:$_,searchQuery:H_}=b0.current;if(G==="agent_response"){if(!h)return;O$(),M_.current={post:Y,turnId:p.current}}if(!$_&&!H_&&h&&(G==="new_post"||G==="new_reply"||G==="agent_response"))W0((c)=>{if(!c)return[Y];if(c.some((O_)=>O_.id===Y.id))return c;return[...c,Y]}),p$.current?.();if(G==="interaction_updated"){if(!h)return;W0((c)=>{if(!c)return c;if(!c.some((O_)=>O_.id===Y.id))return c;return c.map((O_)=>O_.id===Y.id?Y:O_)})}if(G==="interaction_deleted"){if(!h)return;let c=Y?.ids||[];if(c.length){o2(()=>{W0((E_)=>E_?E_.filter((v2)=>!c.includes(v2.id)):E_)});let{currentHashtag:O_,searchQuery:t_}=b0.current;if(G1.current&&!O_&&!t_)i$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[V0,z_,$,i$,o,K1,o2,u0,x0,A0,O$,L2,J0,X1,V1,d2,v_,l_]);m(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=s$,G.reset=()=>{O$(),V0(),l(null),i({text:"",totalLines:0}),q_(""),__({text:"",totalLines:0}),j_(null)},G.finalize=()=>O1(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[V0,O1,s$,O$]),C8({handleSseEvent:s$,handleConnectionStatusChange:W6,loadPosts:$2,onWake:k6,chatJid:$}),m(()=>{if(!m2||m2.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let Y=G.slice(5);u(Y),history.replaceState(null,"",location.pathname+location.search)},[m2,u]);let a$=t!==null;m(()=>{if(K!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:F,searchQuery:A}=b0.current||{},D=!F&&!A;if(a$){if(D)A0();v_(),n0(),l0()}else{if(D)A0();n0(),l0()}},a$?15000:60000);return()=>clearInterval(Y)},[K,a$,n0,l0,v_,A0]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let G=()=>{if(document.visibilityState&&document.visibilityState!=="visible")return;n0(),l0(),v_()};return window.addEventListener("focus",G),window.addEventListener("pageshow",G),document.addEventListener("visibilitychange",G),()=>{window.removeEventListener("focus",G),window.removeEventListener("pageshow",G),document.removeEventListener("visibilitychange",G)}},[n0,l0,v_]);let b6=M(()=>{$0((G)=>!G)},[]),A6=M((G)=>{if(typeof window>"u")return;let Y=String(G||"").trim();if(!Y||Y===$)return;let F=K$(window.location.href,Y,{chatOnly:j});window.location.assign(F)},[j,$]),P6=M(async()=>{if(typeof window>"u"||!Q_?.chat_jid)return;let G=Q_.agent_name||"",Y=Q_.display_name||"",F=window.prompt("Branch display name",Y);if(F===null)return;let A=window.prompt("Agent handle (without @)",G);if(A===null)return;try{let D=await c9(Q_.chat_jid,{displayName:F,agentName:A});await Promise.allSettled([u0(),x0()]);let h=D?.branch?.agent_name||String(A||"").trim()||G;V("Branch renamed",`This chat is now @${h}.`,"info",3500)}catch(D){let h=D instanceof Error?D.message:String(D||"Could not rename branch.");V("Could not rename branch",h||"Could not rename branch.","warning",5000)}},[Q_,u0,x0,V]),M6=M(async()=>{if(typeof window>"u"||!Q_?.chat_jid)return;if(Q_.chat_jid===(Q_.root_chat_jid||Q_.chat_jid)){V("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=Q_.display_name||`@${Q_.agent_name||Q_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await p9(Q_.chat_jid),await Promise.allSettled([u0(),x0()]);let A=Q_.root_chat_jid||"web:default";V("Branch pruned",`${Y} has been archived.`,"info",3000);let D=K$(window.location.href,A,{chatOnly:j});window.location.assign(D)}catch(A){let D=A instanceof Error?A.message:String(A||"Could not prune branch.");V("Could not prune branch",D||"Could not prune branch.","warning",5000)}},[j,Q_,u0,x0,V]);m(()=>{if(!Z||typeof window>"u")return;let G=!1;return(async()=>{try{m_({status:"running",message:"Preparing a new chat branch…"});let Y=await O3(N);if(G)return;let F=Y?.branch,A=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");let D=K$(window.location.href,A,{chatOnly:!0});window.location.replace(D)}catch(Y){if(G)return;m_({status:"error",message:$1(Y)})}})(),()=>{G=!0}},[Z,N]);let S6=M(async()=>{if(typeof window>"u"||L)return;let G=h8($);if(!G){V("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let F=d8(window.location.href,$,{chatOnly:!0});if(!window.open(F,G.target))V("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=i8(G);if(!Y){V("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}l8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let A=(await O3($))?.branch,D=typeof A?.chat_jid==="string"&&A.chat_jid.trim()?A.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");try{let $_=await D$();_0(Array.isArray($_?.chats)?$_.chats:[])}catch{}try{let $_=await _6(P);D0(Array.isArray($_?.chats)?$_.chats:[])}catch{}let h=K$(window.location.href,D,{chatOnly:!0});n8(Y,h)}catch(F){o8(Y),V("Could not open branch window",$1(F),"error",5000)}},[$,P,L,V]);m(()=>{if(!O0)return;if(typeof window>"u")return;let G=f.current;if(!G)return;if(!Y_.current){let Y=c2("editorWidth",null),F=n.current||280;Y_.current=Number.isFinite(Y)?Y:F}if(G.style.setProperty("--editor-width",`${Y_.current}px`),!P_.current){let Y=c2("dockHeight",null);P_.current=Number.isFinite(Y)?Y:200}G.style.setProperty("--dock-height",`${P_.current}px`)},[O0]),m(()=>{if(!C0||j)return;let G=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),Q0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[Q0,C0,j]);let C6=Boolean(F_&&F_===(t?.turn_id||G_));if(Z)return Q`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${A_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${A_.message}</p>
                    </div>
                </div>
            </div>
        `;return Q`
        <div class=${`app-shell${g0?"":" workspace-collapsed"}${O0?" editor-open":""}${j?" chat-only":""}`} ref=${f}>
            ${!j&&Q`
                <${A8}
                    onFileSelect=${O2}
                    visible=${g0}
                    active=${g0||O0}
                    onOpenEditor=${c0}
                />
                <button
                    class=${`workspace-toggle-tab${g0?" open":" closed"}`}
                    onClick=${b6}
                    title=${g0?"Hide workspace":"Show workspace"}
                    aria-label=${g0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${Y6} onTouchStart=${G6}></div>
            `}
            ${P2&&Q`
                <div class="editor-pane-container">
                    ${O0&&Q`
                        <${P8}
                            tabs=${j0}
                            activeId=${x_}
                            onActivate=${k2}
                            onClose=${F2}
                            onCloseOthers=${F0}
                            onCloseAll=${b2}
                            onTogglePin=${l2}
                            onTogglePreview=${y2}
                            previewTabs=${I0}
                            onToggleDock=${C0?Q0:void 0}
                            dockVisible=${C0&&N2}
                        />
                    `}
                    ${O0&&Q`<div class="editor-pane-host" ref=${W2}></div>`}
                    ${O0&&x_&&I0.has(x_)&&Q`
                        <${S8}
                            getContent=${()=>s_.current?.getContent?.()}
                            path=${x_}
                            onClose=${()=>y2(x_)}
                        />
                    `}
                    ${C0&&N2&&Q`<div class="dock-splitter" onMouseDown=${X6} onTouchStart=${V6}></div>`}
                    ${C0&&Q`<div class=${`dock-panel${N2?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${Q0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${A2}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${O6} onTouchStart=${L6}></div>
            `}
            <div class="container">
                ${W&&g8()&&Q`<div class="search-results-spacer"></div>`}
                ${j&&Q`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${Q_?.display_name||Q_?.agent_name?`@${Q_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${Q_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${B0.length>1&&Q`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(G)=>A6(G.currentTarget.value)}
                                    >
                                        ${B0.map((G)=>Q`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${`@${G.agent_name}${G.display_name?` — ${G.display_name}`:""}${G.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${Q_?.chat_jid&&Q`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${P6}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${Q_?.chat_jid&&Q_.chat_jid!==(Q_.root_chat_jid||Q_.chat_jid)&&Q`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${M6}
                                    title="Prune this branch agent"
                                    aria-label="Prune this branch agent"
                                >
                                    Prune
                                </button>
                            `}
                            <span class="chat-window-header-badge">Chat only</span>
                        </div>
                    </div>
                `}
                ${(O||W)&&Q`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${Q6}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${W} · ${e}`}</span>
                    </div>
                `}
                <${z8}
                    posts=${m2}
                    hasMore=${K6}
                    onLoadMore=${z6}
                    timelineRef=${U}
                    onHashtagClick=${q6}
                    onMessageRef=${E}
                    onScrollToMessage=${u}
                    onFileRef=${B}
                    onPostClick=${void 0}
                    onDeletePost=${F6}
                    emptyMessage=${O?`No posts with #${O}`:W?`No results for "${W}"`:void 0}
                    agents=${y_}
                    user=${K2}
                    reverse=${!(W&&!O)}
                    removingPostIds=${i2}
                    searchQuery=${W}
                />
                <${i4}
                    status=${t}
                    draft=${Z_}
                    plan=${U_}
                    thought=${r}
                    pendingRequest=${K_}
                    intent=${g}
                    turnId=${G_}
                    steerQueued=${C6}
                    onPanelToggle=${$6}
                />
                <${v4}
                    session=${g_}
                    onClose=${r$}
                    onRetry=${E6}
                    onInject=${w6}
                />
                <${U4}
                    onPost=${()=>{$2(),h$()}}
                    onFocus=${h$}
                    searchMode=${k}
                    searchScope=${I}
                    onSearch=${U6}
                    onSearchScopeChange=${v}
                    onEnterSearch=${B6}
                    onExitSearch=${H6}
                    fileRefs=${C}
                    onRemoveFileRef=${y0}
                    onClearFileRefs=${f2}
                    messageRefs=${b}
                    onRemoveMessageRef=${d}
                    onClearMessageRefs=${s}
                    activeEditorPath=${j?null:x_}
                    onAttachEditorFile=${j?void 0:w}
                    onOpenFilePill=${B}
                    followupQueueCount=${k0}
                    followupQueueItems=${E0}
                    onInjectQueuedFollowup=${y6}
                    onRemoveQueuedFollowup=${J6}
                    onSubmitIntercept=${D6}
                    onMessageResponse=${d$}
                    onPopOutChat=${L?void 0:S6}
                    isAgentActive=${n$}
                    activeChatAgents=${C_}
                    currentChatJid=${$}
                    activeModel=${u_}
                    modelUsage=${e_}
                    thinkingLevel=${S_}
                    supportsThinking=${z0}
                    contextUsage=${H0}
                    notificationsEnabled=${s0}
                    notificationPermission=${M0}
                    onToggleNotifications=${v0}
                    onModelChange=${B_}
                    onModelStateChange=${o$}
                />
                <${n4} status=${K} />
                <${l4}
                    request=${K_}
                    onRespond=${()=>{j_(null),k_.current=null}}
                />
            </div>
        </div>
    `}function d9(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return Q`<${o9} locationParams=${_} />`}v1(Q`<${d9} />`,document.getElementById("app"));

//# debugId=3405C051B51860F464756E2164756E21
//# sourceMappingURL=app.bundle.js.map
