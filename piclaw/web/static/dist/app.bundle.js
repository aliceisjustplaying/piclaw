var I4=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,J)=>(typeof require<"u"?require:$)[J]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var U2,X_,R1,$2,u1,y1,b4,B2={},m1=[],S4=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x0(_,$){for(var J in $)_[J]=$[J];return _}function g1(_){var $=_.parentNode;$&&$.removeChild(_)}function c1(_,$,J){var Y,X,Z,K={};for(Z in $)Z=="key"?Y=$[Z]:Z=="ref"?X=$[Z]:K[Z]=$[Z];if(arguments.length>2&&(K.children=arguments.length>3?U2.call(arguments,2):J),typeof _=="function"&&_.defaultProps!=null)for(Z in _.defaultProps)K[Z]===void 0&&(K[Z]=_.defaultProps[Z]);return O2(_,K,Y,X,null)}function O2(_,$,J,Y,X){var Z={type:_,props:$,key:J,ref:Y,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++R1:X};return X_.vnode!=null&&X_.vnode(Z),Z}function H2(_){return _.children}function N2(_,$){this.props=_,this.context=$}function n0(_,$){if($==null)return _.__?n0(_.__,_.__.__k.indexOf(_)+1):null;for(var J;$<_.__k.length;$++)if((J=_.__k[$])!=null&&J.__e!=null)return J.__e;return typeof _.type=="function"?n0(_):null}function p1(_){var $,J;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((J=_.__k[$])!=null&&J.__e!=null){_.__e=_.__c.base=J.__e;break}return p1(_)}}function k1(_){(!_.__d&&(_.__d=!0)&&$2.push(_)&&!z2.__r++||y1!==X_.debounceRendering)&&((y1=X_.debounceRendering)||u1)(z2)}function z2(){for(var _;z2.__r=$2.length;)_=$2.sort(function($,J){return $.__v.__b-J.__v.__b}),$2=[],_.some(function($){var J,Y,X,Z,K,G;$.__d&&(K=(Z=(J=$).__v).__e,(G=J.__P)&&(Y=[],(X=x0({},Z)).__v=Z.__v+1,s2(G,Z,X,J.__n,G.ownerSVGElement!==void 0,Z.__h!=null?[K]:null,Y,K==null?n0(Z):K,Z.__h),o1(Y,Z),Z.__e!=K&&p1(Z)))})}function h1(_,$,J,Y,X,Z,K,G,V,W){var Q,L,H,E,F,I,S,U=Y&&Y.__k||m1,y=U.length;for(J.__k=[],Q=0;Q<$.length;Q++)if((E=J.__k[Q]=(E=$[Q])==null||typeof E=="boolean"?null:typeof E=="string"||typeof E=="number"||typeof E=="bigint"?O2(null,E,null,null,E):Array.isArray(E)?O2(H2,{children:E},null,null,null):E.__b>0?O2(E.type,E.props,E.key,null,E.__v):E)!=null){if(E.__=J,E.__b=J.__b+1,(H=U[Q])===null||H&&E.key==H.key&&E.type===H.type)U[Q]=void 0;else for(L=0;L<y;L++){if((H=U[L])&&E.key==H.key&&E.type===H.type){U[L]=void 0;break}H=null}s2(_,E,H=H||B2,X,Z,K,G,V,W),F=E.__e,(L=E.ref)&&H.ref!=L&&(S||(S=[]),H.ref&&S.push(H.ref,null,E),S.push(L,E.__c||F,E)),F!=null?(I==null&&(I=F),typeof E.type=="function"&&E.__k!=null&&E.__k===H.__k?E.__d=V=i1(E,V,_):V=l1(_,E,H,U,F,V),W||J.type!=="option"?typeof J.type=="function"&&(J.__d=V):_.value=""):V&&H.__e==V&&V.parentNode!=_&&(V=n0(H))}for(J.__e=I,Q=y;Q--;)U[Q]!=null&&(typeof J.type=="function"&&U[Q].__e!=null&&U[Q].__e==J.__d&&(J.__d=n0(Y,Q+1)),d1(U[Q],U[Q]));if(S)for(Q=0;Q<S.length;Q++)n1(S[Q],S[++Q],S[++Q])}function i1(_,$,J){var Y,X;for(Y=0;Y<_.__k.length;Y++)(X=_.__k[Y])&&(X.__=_,$=typeof X.type=="function"?i1(X,$,J):l1(J,X,X,_.__k,X.__e,$));return $}function l1(_,$,J,Y,X,Z){var K,G,V;if($.__d!==void 0)K=$.__d,$.__d=void 0;else if(J==null||X!=Z||X.parentNode==null)_:if(Z==null||Z.parentNode!==_)_.appendChild(X),K=null;else{for(G=Z,V=0;(G=G.nextSibling)&&V<Y.length;V+=2)if(G==X)break _;_.insertBefore(X,Z),K=Z}return K!==void 0?K:X.nextSibling}function A1(_,$,J){$[0]==="-"?_.setProperty($,J):_[$]=J==null?"":typeof J!="number"||S4.test($)?J:J+"px"}function W2(_,$,J,Y,X){var Z;_:if($==="style")if(typeof J=="string")_.style.cssText=J;else{if(typeof Y=="string"&&(_.style.cssText=Y=""),Y)for($ in Y)J&&$ in J||A1(_.style,$,"");if(J)for($ in J)Y&&J[$]===Y[$]||A1(_.style,$,J[$])}else if($[0]==="o"&&$[1]==="n")Z=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Z]=J,J?Y||_.addEventListener($,Z?w1:M1,Z):_.removeEventListener($,Z?w1:M1,Z);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=J==null?"":J;break _}catch(K){}typeof J=="function"||(J!=null&&(J!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,J):_.removeAttribute($))}}function M1(_){this.l[_.type+!1](X_.event?X_.event(_):_)}function w1(_){this.l[_.type+!0](X_.event?X_.event(_):_)}function s2(_,$,J,Y,X,Z,K,G,V){var W,Q,L,H,E,F,I,S,U,y,D,M=$.type;if($.constructor!==void 0)return null;J.__h!=null&&(V=J.__h,G=$.__e=J.__e,$.__h=null,Z=[G]),(W=X_.__b)&&W($);try{_:if(typeof M=="function"){if(S=$.props,U=(W=M.contextType)&&Y[W.__c],y=W?U?U.props.value:W.__:Y,J.__c?I=(Q=$.__c=J.__c).__=Q.__E:(("prototype"in M)&&M.prototype.render?$.__c=Q=new M(S,y):($.__c=Q=new N2(S,y),Q.constructor=M,Q.render=T4),U&&U.sub(Q),Q.props=S,Q.state||(Q.state={}),Q.context=y,Q.__n=Y,L=Q.__d=!0,Q.__h=[]),Q.__s==null&&(Q.__s=Q.state),M.getDerivedStateFromProps!=null&&(Q.__s==Q.state&&(Q.__s=x0({},Q.__s)),x0(Q.__s,M.getDerivedStateFromProps(S,Q.__s))),H=Q.props,E=Q.state,L)M.getDerivedStateFromProps==null&&Q.componentWillMount!=null&&Q.componentWillMount(),Q.componentDidMount!=null&&Q.__h.push(Q.componentDidMount);else{if(M.getDerivedStateFromProps==null&&S!==H&&Q.componentWillReceiveProps!=null&&Q.componentWillReceiveProps(S,y),!Q.__e&&Q.shouldComponentUpdate!=null&&Q.shouldComponentUpdate(S,Q.__s,y)===!1||$.__v===J.__v){Q.props=S,Q.state=Q.__s,$.__v!==J.__v&&(Q.__d=!1),Q.__v=$,$.__e=J.__e,$.__k=J.__k,$.__k.forEach(function(u){u&&(u.__=$)}),Q.__h.length&&K.push(Q);break _}Q.componentWillUpdate!=null&&Q.componentWillUpdate(S,Q.__s,y),Q.componentDidUpdate!=null&&Q.__h.push(function(){Q.componentDidUpdate(H,E,F)})}Q.context=y,Q.props=S,Q.state=Q.__s,(W=X_.__r)&&W($),Q.__d=!1,Q.__v=$,Q.__P=_,W=Q.render(Q.props,Q.state,Q.context),Q.state=Q.__s,Q.getChildContext!=null&&(Y=x0(x0({},Y),Q.getChildContext())),L||Q.getSnapshotBeforeUpdate==null||(F=Q.getSnapshotBeforeUpdate(H,E)),D=W!=null&&W.type===H2&&W.key==null?W.props.children:W,h1(_,Array.isArray(D)?D:[D],$,J,Y,X,Z,K,G,V),Q.base=$.__e,$.__h=null,Q.__h.length&&K.push(Q),I&&(Q.__E=Q.__=null),Q.__e=!1}else Z==null&&$.__v===J.__v?($.__k=J.__k,$.__e=J.__e):$.__e=x4(J.__e,$,J,Y,X,Z,K,V);(W=X_.diffed)&&W($)}catch(u){$.__v=null,(V||Z!=null)&&($.__e=G,$.__h=!!V,Z[Z.indexOf(G)]=null),X_.__e(u,$,J)}}function o1(_,$){X_.__c&&X_.__c($,_),_.some(function(J){try{_=J.__h,J.__h=[],_.some(function(Y){Y.call(J)})}catch(Y){X_.__e(Y,J.__v)}})}function x4(_,$,J,Y,X,Z,K,G){var V,W,Q,L=J.props,H=$.props,E=$.type,F=0;if(E==="svg"&&(X=!0),Z!=null){for(;F<Z.length;F++)if((V=Z[F])&&(V===_||(E?V.localName==E:V.nodeType==3))){_=V,Z[F]=null;break}}if(_==null){if(E===null)return document.createTextNode(H);_=X?document.createElementNS("http://www.w3.org/2000/svg",E):document.createElement(E,H.is&&H),Z=null,G=!1}if(E===null)L===H||G&&_.data===H||(_.data=H);else{if(Z=Z&&U2.call(_.childNodes),W=(L=J.props||B2).dangerouslySetInnerHTML,Q=H.dangerouslySetInnerHTML,!G){if(Z!=null)for(L={},F=0;F<_.attributes.length;F++)L[_.attributes[F].name]=_.attributes[F].value;(Q||W)&&(Q&&(W&&Q.__html==W.__html||Q.__html===_.innerHTML)||(_.innerHTML=Q&&Q.__html||""))}if(function(I,S,U,y,D){var M;for(M in U)M==="children"||M==="key"||M in S||W2(I,M,null,U[M],y);for(M in S)D&&typeof S[M]!="function"||M==="children"||M==="key"||M==="value"||M==="checked"||U[M]===S[M]||W2(I,M,S[M],U[M],y)}(_,H,L,X,G),Q)$.__k=[];else if(F=$.props.children,h1(_,Array.isArray(F)?F:[F],$,J,Y,X&&E!=="foreignObject",Z,K,Z?Z[0]:J.__k&&n0(J,0),G),Z!=null)for(F=Z.length;F--;)Z[F]!=null&&g1(Z[F]);G||(("value"in H)&&(F=H.value)!==void 0&&(F!==_.value||E==="progress"&&!F)&&W2(_,"value",F,L.value,!1),("checked"in H)&&(F=H.checked)!==void 0&&F!==_.checked&&W2(_,"checked",F,L.checked,!1))}return _}function n1(_,$,J){try{typeof _=="function"?_($):_.current=$}catch(Y){X_.__e(Y,J)}}function d1(_,$,J){var Y,X;if(X_.unmount&&X_.unmount(_),(Y=_.ref)&&(Y.current&&Y.current!==_.__e||n1(Y,null,$)),(Y=_.__c)!=null){if(Y.componentWillUnmount)try{Y.componentWillUnmount()}catch(Z){X_.__e(Z,$)}Y.base=Y.__P=null}if(Y=_.__k)for(X=0;X<Y.length;X++)Y[X]&&d1(Y[X],$,typeof _.type!="function");J||_.__e==null||g1(_.__e),_.__e=_.__d=void 0}function T4(_,$,J){return this.constructor(_,J)}function r1(_,$,J){var Y,X,Z;X_.__&&X_.__(_,$),X=(Y=typeof J=="function")?null:J&&J.__k||$.__k,Z=[],s2($,_=(!Y&&J||$).__k=c1(H2,null,[_]),X||B2,B2,$.ownerSVGElement!==void 0,!Y&&J?[J]:X?null:$.firstChild?U2.call($.childNodes):null,Z,!Y&&J?J:X?X.__e:$.firstChild,Y),o1(Z,_)}U2=m1.slice,X_={__e:function(_,$){for(var J,Y,X;$=$.__;)if((J=$.__c)&&!J.__)try{if((Y=J.constructor)&&Y.getDerivedStateFromError!=null&&(J.setState(Y.getDerivedStateFromError(_)),X=J.__d),J.componentDidCatch!=null&&(J.componentDidCatch(_),X=J.__d),X)return J.__E=J}catch(Z){_=Z}throw _}},R1=0,N2.prototype.setState=function(_,$){var J;J=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x0({},this.state),typeof _=="function"&&(_=_(x0({},J),this.props)),_&&x0(J,_),_!=null&&this.__v&&($&&this.__h.push($),k1(this))},N2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),k1(this))},N2.prototype.render=H2,$2=[],u1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z2.__r=0,b4=0;var F2,j0,P1,J2=0,d2=[],I1=X_.__b,b1=X_.__r,S1=X_.diffed,x1=X_.__c,T1=X_.unmount;function a2(_,$){X_.__h&&X_.__h(j0,_,J2||$),J2=0;var J=j0.__H||(j0.__H={__:[],__h:[]});return _>=J.__.length&&J.__.push({}),J.__[_]}function f(_){return J2=1,f4(a1,_)}function f4(_,$,J){var Y=a2(F2++,2);return Y.t=_,Y.__c||(Y.__=[J?J($):a1(void 0,$),function(X){var Z=Y.t(Y.__[0],X);Y.__[0]!==Z&&(Y.__=[Z,Y.__[1]],Y.__c.setState({}))}],Y.__c=j0),Y.__}function m(_,$){var J=a2(F2++,3);!X_.__s&&s1(J.__H,$)&&(J.__=_,J.__H=$,j0.__H.__h.push(J))}function A(_){return J2=5,k0(function(){return{current:_}},[])}function k0(_,$){var J=a2(F2++,7);return s1(J.__H,$)&&(J.__=_(),J.__H=$,J.__h=_),J.__}function b(_,$){return J2=8,k0(function(){return _},$)}function v4(){d2.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(q2),_.__H.__h.forEach(r2),_.__H.__h=[]}catch($){_.__H.__h=[],X_.__e($,_.__v)}}),d2=[]}X_.__b=function(_){j0=null,I1&&I1(_)},X_.__r=function(_){b1&&b1(_),F2=0;var $=(j0=_.__c).__H;$&&($.__h.forEach(q2),$.__h.forEach(r2),$.__h=[])},X_.diffed=function(_){S1&&S1(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(d2.push($)!==1&&P1===X_.requestAnimationFrame||((P1=X_.requestAnimationFrame)||function(J){var Y,X=function(){clearTimeout(Z),f1&&cancelAnimationFrame(Y),setTimeout(J)},Z=setTimeout(X,100);f1&&(Y=requestAnimationFrame(X))})(v4)),j0=void 0},X_.__c=function(_,$){$.some(function(J){try{J.__h.forEach(q2),J.__h=J.__h.filter(function(Y){return!Y.__||r2(Y)})}catch(Y){$.some(function(X){X.__h&&(X.__h=[])}),$=[],X_.__e(Y,J.__v)}}),x1&&x1(_,$)},X_.unmount=function(_){T1&&T1(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(q2)}catch(J){X_.__e(J,$.__v)}};var f1=typeof requestAnimationFrame=="function";function q2(_){var $=j0;typeof _.__c=="function"&&_.__c(),j0=$}function r2(_){var $=j0;_.__c=_.__(),j0=$}function s1(_,$){return!_||_.length!==$.length||$.some(function(J,Y){return J!==_[Y]})}function a1(_,$){return typeof $=="function"?$(_):$}var t1=function(_,$,J,Y){var X;$[0]=0;for(var Z=1;Z<$.length;Z++){var K=$[Z++],G=$[Z]?($[0]|=K?1:2,J[$[Z++]]):$[++Z];K===3?Y[0]=G:K===4?Y[1]=Object.assign(Y[1]||{},G):K===5?(Y[1]=Y[1]||{})[$[++Z]]=G:K===6?Y[1][$[++Z]]+=G+"":K?(X=_.apply(G,t1(_,G,J,["",null])),Y.push(X),G[0]?$[0]|=2:($[Z-2]=0,$[Z]=X)):Y.push(G)}return Y},v1=new Map,N=function(_){var $=v1.get(this);return $||($=new Map,v1.set(this,$)),($=t1(this,$.get(_)||($.set(_,$=function(J){for(var Y,X,Z=1,K="",G="",V=[0],W=function(H){Z===1&&(H||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,H,K):Z===3&&(H||K)?(V.push(3,H,K),Z=2):Z===2&&K==="..."&&H?V.push(4,H,0):Z===2&&K&&!H?V.push(5,0,!0,K):Z>=5&&((K||!H&&Z===5)&&(V.push(Z,0,K,X),Z=6),H&&(V.push(Z,H,0,X),Z=6)),K=""},Q=0;Q<J.length;Q++){Q&&(Z===1&&W(),W(Q));for(var L=0;L<J[Q].length;L++)Y=J[Q][L],Z===1?Y==="<"?(W(),V=[V],Z=3):K+=Y:Z===4?K==="--"&&Y===">"?(Z=1,K=""):K=Y+K[0]:G?Y===G?G="":K+=Y:Y==='"'||Y==="'"?G=Y:Y===">"?(W(),Z=1):Z&&(Y==="="?(Z=5,X=K,K=""):Y==="/"&&(Z<5||J[Q][L+1]===">")?(W(),Z===3&&(V=V[0]),Z=V,(V=V[0]).push(2,0,Z),Z=0):Y===" "||Y==="\t"||Y===`
`||Y==="\r"?(W(),Z=2):K+=Y),Z===3&&K==="!--"&&(Z=4,V=V[0])}return W(),V}(_)),$),arguments,[])).length>1?$:$[0]}.bind(c1);async function i_(_,$={}){let J=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!J.ok){let Y=await J.json().catch(()=>({error:"Unknown error"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function L2(_=10,$=null){let J=`/timeline?limit=${_}`;if($)J+=`&before=${$}`;return i_(J)}async function e1(_,$=50,J=0){return i_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${J}`)}async function _3(_,$=50,J=0){return i_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${J}`)}async function $3(_,$=!1){let J=`/post/${_}?cascade=${$?"true":"false"}`;return i_(J,{method:"DELETE"})}async function t2(_,$,J=null,Y=[]){return i_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:J,media_ids:Y})})}async function J3(){return i_("/agents")}async function Y3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/status${$}`)}async function e2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/context${$}`)}async function Y2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/models${$}`)}async function Z3(_){let $=new FormData;$.append("file",_);let J=await fetch("/media/upload",{method:"POST",body:$});if(!J.ok){let Y=await J.json().catch(()=>({error:"Upload failed"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function _1(_,$){let J=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function X3(_,$){let J=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function Q3(_,$="thought"){let J=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i_(J)}async function K3(_,$,J){return i_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(J)})})}function Z2(_){return`/media/${_}`}function j3(_){return`/media/${_}/thumbnail`}async function E2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function D2(_="",$=2,J=!1){let Y=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${J?"1":"0"}`;return i_(Y)}async function G3(_,$=20000,J=null){let Y=J?`&mode=${encodeURIComponent(J)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Y}`;return i_(X)}async function V3(_){return i_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function $1(_,$="",J={}){let Y=new FormData;Y.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(J.overwrite)X.set("overwrite","1");let Z=X.toString(),K=Z?`/workspace/upload?${Z}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:Y});if(!G.ok){let V=await G.json().catch(()=>({error:"Upload failed"})),W=Error(V.error||`HTTP ${G.status}`);throw W.status=G.status,W.code=V.code,W}return G.json()}async function W3(_,$,J=""){let Y=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:J})});if(!Y.ok){let X=await Y.json().catch(()=>({error:"Create failed"})),Z=Error(X.error||`HTTP ${Y.status}`);throw Z.status=Y.status,Z.code=X.code,Z}return Y.json()}async function O3(_,$){let J=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Rename failed"})),X=Error(Y.error||`HTTP ${J.status}`);throw X.status=J.status,X.code=Y.code,X}return J.json()}async function N3(_,$){let J=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Move failed"})),X=Error(Y.error||`HTTP ${J.status}`);throw X.status=J.status,X.code=Y.code,X}return J.json()}async function q3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i_($,{method:"DELETE"})}async function C2(_,$=!1){return i_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function J1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function B3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class Y1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,J=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,J+$),this.reconnectAttempts=0;let Y=Math.max(this.cooldownUntil-J,0),X=Math.max(this.reconnectDelay,Y);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function g0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function S_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function d0(_,$=!1){let J=g0(_);if(J===null)return $;return J==="true"}function r0(_,$=null){let J=g0(_);if(J===null)return $;let Y=parseInt(J,10);return Number.isFinite(Y)?Y:$}function T0({prefix:_="file",label:$,title:J,onRemove:Y,removeTitle:X="Remove",icon:Z="file"}){let K=`${_}-file-pill`,G=`${_}-file-name`,V=`${_}-file-remove`,W=Z==="message"?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return N`
    <span class=${K} title=${J||$}>
      ${W}
      <span class=${G}>${$}</span>
      ${Y&&N`
        <button
          class=${V}
          onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),Y()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var u4=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function m4({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),J=_.tokens,Y=_.contextWindow,X=J!=null?`Context: ${z3(J)} / ${z3(Y)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Z=7,K=2*Math.PI*7,G=$/100*K,V=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return N`
        <span class="compose-context-pie icon-btn" title=${X}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function z3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function U3({onPost:_,onFocus:$,searchMode:J,onSearch:Y,onEnterSearch:X,onExitSearch:Z,fileRefs:K=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:W=[],onRemoveMessageRef:Q,onClearMessageRefs:L,activeModel:H=null,thinkingLevel:E=null,supportsThinking:F=!1,contextUsage:I=null,notificationsEnabled:S=!1,notificationPermission:U="default",onToggleNotifications:y,onModelChange:D,onModelStateChange:M,activeEditorPath:u=null,onAttachEditorFile:i}){let[p,a]=f(""),[Q_,l]=f(""),[$_,z_]=f(!1),[e,j_]=f([]),[H_,y_]=f(!1),[J_,t]=f([]),[G_,Z_]=f(0),[O_,K_]=f(!1),[M_,B_]=f(!1),[E_,x_]=f(!1),[N_,v_]=f([]),[D_,F_]=f(!1),P_=A(null),N0=A(null),g_=A(null),k_=A(null),h_=A(0),D0=200,c_=(z)=>{let x=new Set,n=[];for(let __ of z||[]){if(typeof __!=="string")continue;let V_=__.trim();if(!V_||x.has(V_))continue;x.add(V_),n.push(V_)}return n},Z0=()=>{let z=g0("piclaw_compose_history");if(!z)return[];try{let x=JSON.parse(z);if(!Array.isArray(x))return[];return c_(x)}catch{return[]}},l_=(z)=>{S_("piclaw_compose_history",JSON.stringify(z))},C_=A(Z0()),w=A(-1),s=A(""),p_=!$_&&(p.trim()||e.length>0||K.length>0||W.length>0),q0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),$0=typeof window<"u"&&typeof Notification<"u",M0=typeof window<"u"?Boolean(window.isSecureContext):!1,z0=$0&&M0&&U!=="denied",o_=U==="granted"&&S,V0=o_?"Disable notifications":"Enable notifications",U0=F&&E?` (${E})`:"",a_=H?`${H}${U0}`:"",L_=(z)=>{if(!z||typeof z!=="object")return;let x=z.model??z.current;if(typeof M==="function")M({model:x??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking});if(x&&typeof D==="function")D(x)},W0=(z)=>{let x=z||P_.current;if(!x)return;x.style.height="auto",x.style.height=`${x.scrollHeight}px`,x.style.overflowY="hidden"},f0=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){K_(!1),t([]);return}let x=z.toLowerCase().split(" ")[0];if(x.length<1){K_(!1),t([]);return}let n=u4.filter((__)=>__.name.startsWith(x)||__.name.replace(/-/g,"").startsWith(x.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===x))t(n),Z_(0),K_(!0);else K_(!1),t([])},H0=(z)=>{let x=p,n=x.indexOf(" "),__=n>=0?x.slice(n):"",V_=z.name+__;a(V_),K_(!1),t([]),requestAnimationFrame(()=>{let I_=P_.current;if(!I_)return;let q_=V_.length;I_.selectionStart=q_,I_.selectionEnd=q_,I_.focus()})},J0=(z)=>{if(J)l(z);else a(z),f0(z);requestAnimationFrame(()=>W0())},X0=(z)=>{let x=J?Q_:p,n=x&&!x.endsWith(`
`)?`
`:"",__=`${x}${n}${z}`.trimStart();J0(__)},v0=(z)=>{let x=z?.command?.model_label;if(x)return x;let n=z?.command?.message;if(typeof n==="string"){let __=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(__?.[1])return __[1].trim()}return null},R_=async(z)=>{if(J||$_||M_)return;B_(!0);try{let x=await t2("default",z,null,[]),n=v0(x);return L_({model:n??H??null,thinking_level:x?.command?.thinking_level,supports_thinking:x?.command?.supports_thinking}),_?.(),!0}catch(x){return console.error("Failed to switch model:",x),alert("Failed to switch model: "+x.message),!1}finally{B_(!1)}},n_=async()=>{await R_("/cycle-model")},F0=async(z)=>{if(!z||M_)return;if(await R_(`/model ${z}`))x_(!1)},R0=(z)=>{z.preventDefault(),z.stopPropagation(),x_((x)=>!x)},L0=async(z)=>{let x=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:p,n=typeof x==="string"?x:"";if(!n.trim()&&e.length===0&&K.length===0&&W.length===0)return;z_(!0);try{let __=[];for(let Q0 of e){let A_=await Z3(Q0);__.push(A_.id)}let V_=n.trim(),I_=K.length?`Files:
${K.map((Q0)=>`- ${Q0}`).join(`
`)}`:"",q_=W.length?`Referenced messages:
${W.map((Q0)=>`- message:${Q0}`).join(`
`)}`:"",b_=__.length?`Images:
${__.map((Q0,A_)=>{let e0=e[A_]?.name||`image-${A_+1}`;return`- attachment:${Q0} (${e0})`}).join(`
`)}`:"",f_=[V_,I_,q_,b_].filter(Boolean).join(`

`),y0=await t2("default",f_,null,__);if(y0?.command)L_({model:y0.command.model_label??H??null,thinking_level:y0.command.thinking_level,supports_thinking:y0.command.supports_thinking});if(V_){let Q0=C_.current,A_=c_(Q0.filter((E0)=>E0!==V_));if(A_.push(V_),A_.length>200)A_.splice(0,A_.length-200);C_.current=A_,l_(A_),w.current=-1,s.current=""}a(""),j_([]),V?.(),L?.(),_?.()}catch(__){console.error("Failed to post:",__),alert("Failed to post: "+__.message)}finally{z_(!1)}},w0=(z)=>{if(z.isComposing)return;if(J&&z.key==="Escape"){z.preventDefault(),l(""),Z?.();return}if(O_&&J_.length>0){let x=P_.current?.value??(J?Q_:p);if(!String(x||"").startsWith("/"))K_(!1),t([]);else{if(z.key==="ArrowDown"){z.preventDefault(),Z_((n)=>(n+1)%J_.length);return}if(z.key==="ArrowUp"){z.preventDefault(),Z_((n)=>(n-1+J_.length)%J_.length);return}if(z.key==="Tab"){z.preventDefault(),H0(J_[G_]);return}if(z.key==="Enter"&&!z.shiftKey){if(!(P_.current?.value??(J?Q_:p)).includes(" ")){z.preventDefault();let V_=J_[G_];K_(!1),t([]),L0(V_.name);return}}if(z.key==="Escape"){z.preventDefault(),K_(!1),t([]);return}}}if(!J&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let x=P_.current;if(!x)return;let n=x.value||"",__=x.selectionStart===0&&x.selectionEnd===0,V_=x.selectionStart===n.length&&x.selectionEnd===n.length;if(z.key==="ArrowUp"&&__||z.key==="ArrowDown"&&V_){let I_=C_.current;if(!I_.length)return;z.preventDefault();let q_=w.current;if(z.key==="ArrowUp"){if(q_===-1)s.current=n,q_=I_.length-1;else if(q_>0)q_-=1;w.current=q_,J0(I_[q_]||"")}else{if(q_===-1)return;if(q_<I_.length-1)q_+=1,w.current=q_,J0(I_[q_]||"");else w.current=-1,J0(s.current||""),s.current=""}requestAnimationFrame(()=>{let b_=P_.current;if(!b_)return;let f_=b_.value.length;b_.selectionStart=f_,b_.selectionEnd=f_});return}}if(z.key==="Enter"&&!z.shiftKey){z.preventDefault();let x=P_.current?.value??(J?Q_:p);if(J){if(x.trim())Y?.(x.trim())}else L0(x)}},T_=(z)=>{let x=Array.from(z||[]).filter((n)=>n&&n.type&&n.type.startsWith("image/"));if(!x.length)return;j_((n)=>[...n,...x])},d_=(z)=>{T_(z.target.files),z.target.value=""},Y0=(z)=>{if(J)return;z.preventDefault(),z.stopPropagation(),h_.current+=1,y_(!0)},u_=(z)=>{if(J)return;if(z.preventDefault(),z.stopPropagation(),h_.current=Math.max(0,h_.current-1),h_.current===0)y_(!1)},m_=(z)=>{if(J)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";y_(!0)},r_=(z)=>{if(J)return;z.preventDefault(),z.stopPropagation(),h_.current=0,y_(!1),T_(z.dataTransfer?.files||[])},O0=(z)=>{if(J)return;let x=z.clipboardData?.items;if(!x||!x.length)return;let n=[];for(let __ of x){if(__.kind!=="file")continue;let V_=__.getAsFile?.();if(V_)n.push(V_)}if(n.length>0)z.preventDefault(),T_(n)},C0=(z)=>{j_((x)=>x.filter((n,__)=>__!==z))},P0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:x,longitude:n,accuracy:__}=z.coords,V_=`${x.toFixed(5)}, ${n.toFixed(5)}`,I_=Number.isFinite(__)?` ±${Math.round(__)}m`:"",q_=`https://maps.google.com/?q=${x},${n}`,b_=`Location: ${V_}${I_} ${q_}`;X0(b_)},(z)=>{let x=z?.message||"Unable to retrieve location.";alert(`Location error: ${x}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!E_)return;F_(!0),Y2().then((z)=>{let x=Array.isArray(z?.models)?z.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];v_(x),L_(z)}).catch((z)=>{console.warn("Failed to load model list:",z),v_([])}).finally(()=>{F_(!1)})},[E_,H]),m(()=>{if(J)x_(!1)},[J]),m(()=>{if(!E_)return;let z=(x)=>{let n=g_.current,__=k_.current,V_=x.target;if(n&&n.contains(V_))return;if(__&&__.contains(V_))return;x_(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[E_]);let c0=(z)=>{let x=z.target.value;W0(z.target),J0(x)};return m(()=>{requestAnimationFrame(()=>W0())},[p,Q_,J]),N`
        <div class="compose-box">
            <div
                class=${`compose-input-wrapper${H_?" drag-active":""}`}
                onDragEnter=${Y0}
                onDragOver=${m_}
                onDragLeave=${u_}
                onDrop=${r_}
            >
                <div class="compose-input-main">
                    ${!J&&(K.length>0||e.length>0||W.length>0)&&N`
                        <div class="compose-file-refs">
                            ${W.map((z)=>{return N`
                                    <${T0}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>Q?.(z)}
                                    />
                                `})}
                            ${K.map((z)=>{let x=z.split("/").pop()||z;return N`
                                    <${T0}
                                        prefix="compose"
                                        label=${x}
                                        title=${z}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(z)}
                                    />
                                `})}
                            ${e.map((z,x)=>{let n=z?.name||`image-${x+1}`;return N`
                                    <${T0}
                                        key=${n+x}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove image"
                                        onRemove=${()=>C0(x)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${P_}
                        placeholder=${J?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${J?Q_:p}
                        onInput=${c0}
                        onKeyDown=${w0}
                        onPaste=${O0}
                        onFocus=${$}
                        onClick=${$}
                        disabled=${$_}
                        rows="1"
                    />
                    ${O_&&J_.length>0&&N`
                        <div class="slash-autocomplete" ref=${N0}>
                            ${J_.map((z,x)=>N`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${x===G_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),H0(z)}}
                                    onMouseEnter=${()=>Z_(x)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${E_&&!J&&N`
                        <div class="compose-model-popup" ref=${g_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${D_&&N`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!D_&&N_.length===0&&N`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!D_&&N_.map((z)=>N`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${H===z?" active":""}`}
                                        onClick=${()=>{F0(z)}}
                                        disabled=${M_}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{n_()}}
                                    disabled=${M_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!J&&H&&N`
                        <div class="compose-meta-row">
                            <button
                                ref=${k_}
                                type="button"
                                class="compose-model-hint compose-model-hint-btn"
                                title=${M_?"Switching model…":`Current model: ${a_} (tap to open model picker)`}
                                aria-label="Open model picker"
                                onClick=${R0}
                                disabled=${$_||M_}
                            >
                                ${M_?"Switching…":a_}
                            </button>
                        </div>
                    `}
                    <div class="compose-actions ${J?"search-mode":""}">
                    ${!J&&I&&I.percent!=null&&N`
                        <${m4} usage=${I} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${J?Z:X}
                        title=${J?"Close search":"Search"}
                    >
                        ${J?N`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:N`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${q0&&!J&&N`
                        <button
                            class="icon-btn location-btn"
                            onClick=${P0}
                            title="Share location"
                            type="button"
                            disabled=${$_}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${z0&&!J&&N`
                        <button
                            class=${`icon-btn notification-btn${o_?" active":""}`}
                            onClick=${y}
                            title=${V0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!J&&N`
                        ${u&&i&&N`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${i}
                                title=${`Attach open file: ${u}`}
                                type="button"
                                disabled=${$_||K.includes(u)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${d_} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{L0()}}
                            disabled=${!p_}
                            title="Send (Ctrl+Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var F3="piclaw_theme",Q1="piclaw_tint",A2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},g4={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},H3={default:{label:"Default",mode:"auto",light:A2,dark:g4},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},c4=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],M2={theme:"default",tint:null},L3="light",Z1=!1;function E3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function s0(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let J=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(J)&&!/^[0-9a-fA-F]{6}$/.test(J))return null;let Y=J.length===3?J.split("").map((Z)=>Z+Z).join(""):J,X=parseInt(Y,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${Y.toLowerCase()}`}}function p4(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let J=document.createElement("div");if(J.style.color="",J.style.color=$,!J.style.color)return null;let Y=J.style.color;try{if(document.body)J.style.display="none",document.body.appendChild(J),Y=getComputedStyle(J).color||J.style.color,document.body.removeChild(J)}catch{}let X=Y.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Z=parseInt(X[1],10),K=parseInt(X[2],10),G=parseInt(X[3],10);if(![Z,K,G].every((W)=>Number.isFinite(W)))return null;let V=`#${[Z,K,G].map((W)=>W.toString(16).padStart(2,"0")).join("")}`;return{r:Z,g:K,b:G,hex:V}}function D3(_){return s0(_)||p4(_)}function X2(_,$,J){let Y=Math.round(_.r+($.r-_.r)*J),X=Math.round(_.g+($.g-_.g)*J),Z=Math.round(_.b+($.b-_.b)*J);return`rgb(${Y} ${X} ${Z})`}function X1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function C3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function K1(_){return H3[_]||H3.default}function h4(_){return _.mode==="auto"?C3():_.mode}function i4(_,$){let J=K1(_);if($==="dark"&&J.dark)return J.dark;if($==="light"&&J.light)return J.light;return J.dark||J.light||A2}function l4(_,$,J){let Y=D3($);if(!Y)return _;let X=s0(_.bgPrimary),Z=s0(_.bgSecondary),K=s0(_.bgHover),G=s0(_.borderColor);if(!X||!Z||!K||!G)return _;let W=s0(J==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:X2(X,Y,0.08),bgSecondary:X2(Z,Y,0.12),bgHover:X2(K,Y,0.16),borderColor:X2(G,Y,0.08),accent:Y.hex,accentHover:W?X2(Y,W,0.18):Y.hex}}function o4(_,$){if(typeof document>"u")return;let J=document.documentElement,Y=_.accent,X=D3(Y),Z=X?X1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=X?X1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=X?X1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Y,"--accent-hover":_.accentHover||Y,"--accent-soft":K,"--accent-soft-strong":G,"--danger-color":_.danger||A2.danger,"--success-color":_.success||A2.success,"--search-highlight-color":Z||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([W,Q])=>{if(Q)J.style.setProperty(W,Q)})}function n4(){if(typeof document>"u")return;let _=document.documentElement;c4.forEach(($)=>_.style.removeProperty($))}function y2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function d4(_,$){if(typeof document>"u")return;let J=y2("theme-color");if(J&&_)J.setAttribute("content",_);let Y=y2("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let X=y2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Z=y2("apple-mobile-web-app-status-bar-style");if(Z)Z.setAttribute("content",$==="dark"?"black-translucent":"default")}function r4(){if(typeof window>"u")return;let _={...M2,mode:L3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function j1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let J=E3(_?.theme||"default"),Y=_?.tint?String(_.tint).trim():null,X=K1(J),Z=h4(X),K=i4(J,Z);M2={theme:J,tint:Y},L3=Z;let G=document.documentElement;G.dataset.theme=Z,G.dataset.colorTheme=J,G.dataset.tint=Y?String(Y):"",G.style.colorScheme=Z;let V=K;if(J==="default"&&Y)V=l4(K,Y,Z);if(J==="default"&&!Y)n4();else o4(V,Z);if(d4(V.bgPrimary,Z),r4(),$.persist!==!1)if(S_(F3,J),Y)S_(Q1,Y);else S_(Q1,"")}function k2(){if(K1(M2.theme).mode!=="auto")return;j1(M2,{persist:!1})}function y3(){if(typeof window>"u")return()=>{};let _=E3(g0(F3)||"default"),$=g0(Q1),J=$?$.trim():null;if(j1({theme:_,tint:J},{persist:!1}),window.matchMedia&&!Z1){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",k2);else if(Y.addListener)Y.addListener(k2);return Z1=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",k2);else if(Y.removeListener)Y.removeListener(k2);Z1=!1}}return()=>{}}function k3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let J=_.theme??_.name??_.colorTheme,Y=_.tint??null;j1({theme:J||"default",tint:Y},{persist:!0})}function A3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return C3()}var w2=/#(\w+)/g,s4=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),a4=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),t4=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),e4={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},_8=new Set(["http:","https:","mailto:",""]);function M3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function a0(_,$={}){if(!_)return null;let J=String(_).trim();if(!J)return null;if(J.startsWith("#")||J.startsWith("/"))return J;if(J.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(J))return J;return null}if(J.startsWith("blob:"))return J;try{let Y=new URL(J,typeof window<"u"?window.location.origin:"http://localhost");if(!_8.has(Y.protocol))return null;return Y.href}catch{return null}}function w3(_,$={}){if(!_)return"";let J=new DOMParser().parseFromString(_,"text/html"),Y=[],X=J.createTreeWalker(J.body,NodeFilter.SHOW_ELEMENT),Z;while(Z=X.nextNode())Y.push(Z);for(let K of Y){let G=K.tagName.toLowerCase();if(!a4.has(G)){let W=K.parentNode;if(!W)continue;while(K.firstChild)W.insertBefore(K.firstChild,K);W.removeChild(K);continue}let V=e4[G]||new Set;for(let W of Array.from(K.attributes)){let Q=W.name.toLowerCase(),L=W.value;if(Q.startsWith("on")){K.removeAttribute(W.name);continue}if(Q.startsWith("data-")||Q.startsWith("aria-"))continue;if(V.has(Q)||t4.has(Q)){if(Q==="href"){let H=a0(L);if(!H)K.removeAttribute(W.name);else if(K.setAttribute(W.name,H),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(Q==="src"){let H=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(L):L,E=a0(H,{allowDataImage:G==="img"});if(!E)K.removeAttribute(W.name);else K.setAttribute(W.name,E)}continue}K.removeAttribute(W.name)}}return J.body.innerHTML}function P3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function P2(_,$=2){if(!_)return _;let J=_;for(let Y=0;Y<$;Y+=1){let X=P3(J);if(X===J)break;J=X}return J}function $8(_){if(!_)return{text:"",blocks:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=[],X=[],Z=!1,K=[];for(let G of J){if(!Z&&G.trim().match(/^```mermaid\s*$/i)){Z=!0,K=[];continue}if(Z&&G.trim().match(/^```\s*$/)){let V=Y.length;Y.push(K.join(`
`)),X.push(`@@MERMAID_BLOCK_${V}@@`),Z=!1,K=[];continue}if(Z)K.push(G);else X.push(G)}if(Z)X.push("```mermaid"),X.push(...K);return{text:X.join(`
`),blocks:Y}}function J8(_){if(!_)return _;return P2(_,5)}function Y8(_){let $=new TextEncoder().encode(String(_||"")),J="";for(let Y of $)J+=String.fromCharCode(Y);return btoa(J)}function Z8(_){let $=atob(String(_||"")),J=new Uint8Array($.length);for(let Y=0;Y<$.length;Y+=1)J[Y]=$.charCodeAt(Y);return new TextDecoder().decode(J)}function X8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(J,Y)=>{let X=Number(Y),Z=$[X]??"",K=J8(Z);return`<div class="mermaid-container" data-mermaid="${Y8(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function I3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,J)=>{if(J.includes(`
`))return`
\`\`\`
${J}
\`\`\`
`;return`\`${J}\``})}function b3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,J)=>{let Y=J.trim(),X=Y.startsWith("/"),Z=X?Y.slice(1).trim():Y,V=(Z.endsWith("/")?Z.slice(0,-1).trim():Z).split(/\s+/)[0]?.toLowerCase();if(!V||!s4.has(V))return $;if(V==="br")return X?"":"<br>";if(X)return`</${V}>`;return`<${V}>`})}function S3(_){if(!_)return _;let $=(J)=>J.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(J,Y)=>`<pre><code>${$(Y)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(J,Y)=>`<code>${$(Y)}</code>`)}function x3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),J=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Y=(Z)=>Z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=J.nextNode()){if(!X.nodeValue)continue;let Z=Y(X.nodeValue);if(Z!==X.nodeValue)X.nodeValue=Z}return $.body.innerHTML}function Q8(_){if(!window.katex)return _;let $=(K)=>P3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),J=(K)=>{let G=[],V=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(W)=>{let Q=G.length;return G.push(W),`@@CODE_BLOCK_${Q}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(W)=>{let Q=G.length;return G.push(W),`@@CODE_INLINE_${Q}@@`}),{html:V,blocks:G}},Y=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,W)=>{let Q=Number(W);return G[Q]??""})},X=J(_),Z=X.html;return Z=Z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,V)=>{try{let W=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${G}${W}`}catch(W){return`<span class="math-error" title="${M3(W.message)}">${K}</span>`}}),Z=Z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,V)=>{if(/\s$/.test(V))return K;try{let W=katex.renderToString($(V),{displayMode:!1,throwOnError:!1});return`${G}${W}`}catch(W){return`${G}<span class="math-error" title="${M3(W.message)}">$${V}$</span>`}}),Y(Z,X.blocks)}function K8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),J=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Y=[],X;while(X=J.nextNode())Y.push(X);for(let Z of Y){let K=Z.nodeValue;if(!K)continue;if(w2.lastIndex=0,!w2.test(K))continue;w2.lastIndex=0;let G=Z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let V=K.split(w2);if(V.length<=1)continue;let W=$.createDocumentFragment();V.forEach((Q,L)=>{if(L%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",Q),H.textContent=`#${Q}`,W.appendChild(H)}else W.appendChild($.createTextNode(Q))}),Z.parentNode?.replaceChild(W,Z)}return $.body.innerHTML}function j8(_){if(!_)return _;let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=[],X=!1;for(let Z of J){if(!X&&Z.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,Y.push("$$");continue}if(X&&Z.trim().match(/^```\s*$/)){X=!1,Y.push("$$");continue}Y.push(Z)}return Y.join(`
`)}function t0(_,$,J={}){if(!_)return"";let Y=j8(_),{text:X,blocks:Z}=$8(Y),K=P2(X,2),V=I3(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),W=b3(V),Q=window.marked?marked.parse(W,{headerIds:!1,mangle:!1}):W.replace(/\n/g,"<br>");return Q=S3(Q),Q=x3(Q),Q=Q8(Q),Q=K8(Q),Q=X8(Q,Z),Q=w3(Q,J),Q}function T3(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),J=P2($,2),X=I3(J).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Z=b3(X),K=window.marked?marked.parse(Z):Z.replace(/\n/g,"<br>");return K=S3(K),K=x3(K),K=w3(K),K}async function I2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:J}=window.beautifulMermaid,X=A3()==="dark"?J["tokyo-night"]:J["github-light"],Z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of Z)try{let G=K.dataset.mermaid,V=Z8(G||""),W=P2(V,2),Q=await $(W,{...X,transparent:!0});K.innerHTML=Q,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(V),K.removeAttribute("data-mermaid")}}var f3="PiClaw";function G1(_,$){let J=_||"PiClaw",Y=J.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Z=Y.charCodeAt(0)%X.length,K=X[Z],G=J.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",Q=(V?V:null)||(G==="PiClaw".toLowerCase()||G==="pi"?"/static/icon-192.png":null);return{letter:Y,color:K,image:Q}}function v3(_,$){if(!_)return"PiClaw";let J=$[_]?.name||_;return J?J.charAt(0).toUpperCase()+J.slice(1):"PiClaw"}function R3(_,$){if(!_)return null;let J=$[_]||{};return J.avatar_url||J.avatarUrl||J.avatar||null}function u3(_){if(!_)return null;if(typeof document<"u"){let Z=document.documentElement,K=Z?.dataset?.colorTheme||"",G=Z?.dataset?.tint||"",V=getComputedStyle(Z).getPropertyValue("--accent-color")?.trim();if(V&&(G||K&&K!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],J=String(_),Y=0;for(let Z=0;Z<J.length;Z+=1)Y=(Y*31+J.charCodeAt(Z))%2147483647;let X=Math.abs(Y)%$.length;return $[X]}function m3({status:_,draft:$,plan:J,thought:Y,pendingRequest:X,turnId:Z,steerQueued:K,onPanelToggle:G}){let Q=(t)=>{if(!t)return{text:"",totalLines:0,fullText:""};if(typeof t==="string"){let K_=t,M_=K_?K_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:K_,totalLines:M_,fullText:K_}}let G_=t.text||"",Z_=t.fullText||t.full_text||G_,O_=Number.isFinite(t.totalLines)?t.totalLines:Z_?Z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:G_,totalLines:O_,fullText:Z_}},L=160,H=(t)=>{if(!t)return 1;return Math.max(1,Math.ceil(t.length/160))},E=(t,G_,Z_)=>{let O_=(t||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!O_)return{text:"",omitted:0,totalLines:Number.isFinite(Z_)?Z_:0,visibleLines:0};let K_=O_.split(`
`),M_=K_.length>G_?K_.slice(0,G_).join(`
`):O_,B_=Number.isFinite(Z_)?Z_:K_.reduce((N_,v_)=>N_+H(v_),0),E_=M_?M_.split(`
`).reduce((N_,v_)=>N_+H(v_),0):0,x_=Math.max(B_-E_,0);return{text:M_,omitted:x_,totalLines:B_,visibleLines:E_}},F=Q(J),I=Q(Y),S=Q($),U=Boolean(F.text)||F.totalLines>0,y=Boolean(I.text)||I.totalLines>0,D=Boolean(S.fullText?.trim()||S.text?.trim());if(!_&&!D&&!U&&!y&&!X)return null;let[M,u]=f(new Set),i=(t)=>u((G_)=>{let Z_=new Set(G_),O_=!Z_.has(t);if(O_)Z_.add(t);else Z_.delete(t);if(typeof G==="function")G(t,O_);return Z_});m(()=>{u(new Set)},[Z]);let p=_?.turn_id||Z,a=u3(p),Q_=K?"turn-dot turn-dot-queued":"turn-dot",l=(t)=>t,$_=Boolean(_?.last_activity||_?.lastActivity),z_="",e=_?.title,j_=_?.status;if(_?.type==="plan")z_=e?`Planning: ${e}`:"Planning...";else if(_?.type==="tool_call")z_=e?`Running: ${e}`:"Running tool...";else if(_?.type==="tool_status")z_=e?`${e}: ${j_||"Working..."}`:j_||"Working...";else if(_?.type==="error")z_=e||"Agent error";else z_=e||j_||"Working...";if($_)z_="Last activity just now";let H_=({panelTitle:t,text:G_,fullText:Z_,totalLines:O_,maxLines:K_,titleClass:M_,panelKey:B_})=>{let E_=M.has(B_),x_=Z_||G_||"",N_=typeof K_==="number",v_=E_&&N_,D_=N_?E(x_,K_,O_):{text:x_||"",omitted:0,totalLines:Number.isFinite(O_)?O_:0};if(!x_&&!(Number.isFinite(D_.totalLines)&&D_.totalLines>0))return null;let F_=`agent-thinking-body${N_?" agent-thinking-body-collapsible":""}`,P_=N_?`--agent-thinking-collapsed-lines: ${K_};`:"";return N`
            <div
                class="agent-thinking"
                data-expanded=${E_?"true":"false"}
                data-collapsible=${N_?"true":"false"}
                style=${a?`--turn-color: ${a};`:""}
            >
                <div class="agent-thinking-title ${M_||""}">
                    ${a&&N`<span class=${Q_} aria-hidden="true"></span>`}
                    ${t}
                    ${v_&&N`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${t} panel`}
                            onClick=${()=>i(B_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${F_}
                    style=${P_}
                    dangerouslySetInnerHTML=${{__html:T3(x_)}}
                />
                ${!E_&&D_.omitted>0&&N`
                    <button class="agent-thinking-truncation" onClick=${()=>i(B_)}>
                        ▸ ${D_.omitted} more lines
                    </button>
                `}
                ${E_&&D_.omitted>0&&N`
                    <button class="agent-thinking-truncation" onClick=${()=>i(B_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},y_=X?.tool_call?.title,J_=y_?`Awaiting approval: ${y_}`:"Awaiting approval";return N`
        <div class="agent-status-panel">
            ${X&&N`
                <div class="agent-status agent-status-request" aria-live="polite" style=${a?`--turn-color: ${a};`:""}>
                    <span class=${Q_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${J_}</span>
                </div>
            `}
            ${U&&H_({panelTitle:l("Planning"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,panelKey:"plan"})}
            ${y&&H_({panelTitle:l("Thoughts"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${D&&H_({panelTitle:l("Draft"),text:S.text,fullText:S.fullText,totalLines:S.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&N`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${a?`--turn-color: ${a};`:""}>
                    ${a&&N`<span class=${Q_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?N`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&N`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${z_}</span>
                </div>
            `}
        </div>
    `}function g3({request:_,onRespond:$}){if(!_)return null;let{request_id:J,tool_call:Y,options:X}=_,Z=Y?.title||"Agent Request",K=Y?.kind||"other",G=Y?.rawInput||{},V=G.command||G.commands&&G.commands[0]||null,W=G.diff||null,Q=G.fileName||G.path||null,L=Y?.description||G.description||G.explanation||null,E=(Array.isArray(Y?.locations)?Y.locations:[]).map((y)=>y?.path).filter((y)=>Boolean(y)),F=Array.from(new Set([Q,...E].filter(Boolean)));console.log("AgentRequestModal:",{request_id:J,tool_call:Y,options:X});let I=async(y)=>{try{await _1(J,y),$()}catch(D){console.error("Failed to respond to agent request:",D)}},S=async()=>{try{await X3(Z,`Auto-approved: ${Z}`),await _1(J,"approved"),$()}catch(y){console.error("Failed to add to whitelist:",y)}},U=X&&X.length>0;return N`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Z}</div>
                </div>
                ${(L||V||W||F.length>0)&&N`
                    <div class="agent-request-body">
                        ${L&&N`
                            <div class="agent-request-description">${L}</div>
                        `}
                        ${F.length>0&&N`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${F.map((y,D)=>N`<li key=${D}>${y}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&N`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${W&&N`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${W}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${U?X.map((y)=>N`
                            <button 
                                key=${y.optionId||y.id||String(y)}
                                class="agent-request-btn ${y.kind==="allow_once"||y.kind==="allow_always"?"primary":""}"
                                onClick=${()=>I(y.optionId||y.id||y)}
                            >
                                ${y.name||y.label||y.optionId||y.id||String(y)}
                            </button>
                        `):N`
                        <button class="agent-request-btn primary" onClick=${()=>I("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>I("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${S}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function c3({status:_}){if(_==="connected")return null;return N`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function p3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Y=new Date-$,X=Y/1000,Z=86400000;if(Y<Z){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(Y<5*Z){let V=$.toLocaleDateString(void 0,{weekday:"short"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${W}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function Q2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function A0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function b2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function h3({src:_,onClose:$}){return m(()=>{let J=(Y)=>{if(Y.key==="Escape")$()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[$]),N`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function G8({mediaId:_}){let[$,J]=f(null);if(m(()=>{E2(_).then(J).catch(()=>{})},[_]),!$)return null;let Y=$.filename||"file",X=$.metadata?.size,Z=X?A0(X):"";return N`
        <a href=${Z2(_)} download=${Y} class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Y}</span>
                ${Z&&N`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function S2({annotations:_}){if(!_)return null;let{audience:$,priority:J,lastModified:Y}=_,X=Y?b2(Y):null;return N`
        <div class="content-annotations">
            ${$&&$.length>0&&N`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof J==="number"&&N`
                <span class="content-annotation">Priority: ${J}</span>
            `}
            ${X&&N`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function V8({block:_}){let $=_.title||_.name||_.uri,J=_.description,Y=_.size?A0(_.size):"",X=_.mime_type||"",Z=O8(X),K=a0(_.uri);return N`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${J&&N`<div class="resource-link-description">${J}</div>`}
                <div class="resource-link-meta">
                    ${X&&N`<span>${X}</span>`}
                    ${Y&&N`<span>${Y}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function W8({block:_}){let[$,J]=f(!1),Y=_.uri||"Embedded resource",X=_.text||"",Z=Boolean(_.data),K=_.mime_type||"";return N`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),J(!$)}}>
                ${$?"▼":"▶"} ${Y}
            </button>
            ${$&&N`
                ${X&&N`<pre class="resource-embed-content">${X}</pre>`}
                ${Z&&N`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&N`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(L)=>L.charCodeAt(0))],{type:K||"application/octet-stream"}),W=URL.createObjectURL(V),Q=document.createElement("a");Q.href=W,Q.download=Y.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(W)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function O8(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function N8({preview:_}){let $=a0(_.url),J=a0(_.image,{allowDataImage:!0}),Y=J?`background-image: url('${J}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return N`
        <a
            href=${$||"#"}
            class="link-preview ${J?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Z)=>Z.stopPropagation()}
            style=${Y}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${X||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&N`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function q8(_,$){return typeof _==="string"?_:""}function B8(_){if(!_)return{content:_,fileRefs:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Files:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,fileRefs:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W))X.push(W.replace(/^\s*-\s+/,"").trim());else if(!W.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let K=J.slice(0,Y),G=J.slice(Z),V=[...K,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:X}}function z8(_){if(!_)return{content:_,messageRefs:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Referenced messages:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,messageRefs:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W)){let L=W.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(L)X.push(L[1])}else if(!W.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let K=J.slice(0,Y),G=J.slice(Z),V=[...K,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:X}}function U8(_){if(!_)return{content:_,attachments:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Images:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,attachments:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W)){let Q=W.replace(/^\s*-\s+/,"").trim(),L=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(L){let H=L[1],E=(L[2]||"").trim()||H;X.push({id:H,label:E,raw:Q})}else X.push({id:null,label:Q,raw:Q})}else if(!W.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let K=J.slice(0,Y),G=J.slice(Z),V=[...K,...G].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:X}}function H8(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function F8(_,$){if(!_||!$)return _;let J=String($).trim().split(/\s+/).filter(Boolean);if(J.length===0)return _;let Y=J.map(H8).sort((Q,L)=>L.length-Q.length),X=new RegExp(`(${Y.join("|")})`,"gi"),Z=new RegExp(`^(${Y.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),V=[],W;while(W=G.nextNode())V.push(W);for(let Q of V){let L=Q.nodeValue;if(!L||!X.test(L)){X.lastIndex=0;continue}X.lastIndex=0;let H=Q.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let E=L.split(X).filter((I)=>I!=="");if(E.length===0)continue;let F=K.createDocumentFragment();for(let I of E)if(Z.test(I)){let S=K.createElement("mark");S.className="search-highlight-term",S.textContent=I,F.appendChild(S)}else F.appendChild(K.createTextNode(I));Q.parentNode.replaceChild(F,Q)}return K.body.innerHTML}function i3({post:_,onClick:$,onHashtagClick:J,onMessageRef:Y,agentName:X,agentAvatarUrl:Z,userName:K,userAvatarUrl:G,userAvatarBackground:V,onDelete:W,isThreadReply:Q,isRemoving:L,highlightQuery:H}){let[E,F]=f(null),I=A(null),S=_.data,U=S.type==="agent_response",y=K||"You",D=U?X||f3:y,M=U?G1(X,Z):G1(y,G),u=typeof V==="string"?V.trim().toLowerCase():"",i=!U&&M.image&&(u==="clear"||u==="transparent"),p=U&&Boolean(M.image),a=`background-color: ${i||p?"transparent":M.color}`,Q_=S.content_meta,l=Boolean(Q_?.truncated),$_=Boolean(Q_?.preview),z_=l&&!$_,e=l?{originalLength:Number.isFinite(Q_?.original_length)?Q_.original_length:S.content?S.content.length:0,maxLength:Number.isFinite(Q_?.max_length)?Q_.max_length:0}:null,j_=q8(S.content,S.link_previews),{content:H_,fileRefs:y_}=B8(j_),{content:J_,messageRefs:t}=z8(H_),{content:G_,attachments:Z_}=U8(J_);j_=G_;let O_=Boolean(j_)&&!z_,K_=typeof H==="string"?H.trim():"",M_=k0(()=>{if(!j_)return"";let w=t0(j_,J);return K_?F8(w,K_):w},[j_,K_]),B_=(w,s)=>{w.stopPropagation(),F(Z2(s))},E_=(w)=>{w.stopPropagation(),W?.(_)},x_=(w,s)=>{let p_=new Set;if(!w||s.length===0)return{content:w,usedIds:p_};return{content:w.replace(/attachment:([^\s)"']+)/g,($0,M0,B0,z0)=>{let o_=M0.replace(/^\/+/,""),U0=s.find((L_)=>L_.name&&L_.name.toLowerCase()===o_.toLowerCase()&&!p_.has(L_.id))||s.find((L_)=>!p_.has(L_.id));if(!U0)return $0;if(p_.add(U0.id),z0.slice(Math.max(0,B0-2),B0)==="](")return`/media/${U0.id}`;return U0.name||"attachment"}),usedIds:p_}},N_=[],v_=[],D_=[],F_=[],P_=[],N0=[],g_=S.content_blocks||[],k_=S.media_ids||[],h_=0;if(g_.length>0)g_.forEach((w)=>{if(w?.type==="text"&&w.annotations)N0.push(w.annotations);if(w?.type==="resource_link")F_.push(w);else if(w?.type==="resource")P_.push(w);else if(w?.type==="file"){let s=k_[h_++];if(s)v_.push(s),D_.push({id:s,name:w?.name||w?.filename||w?.title})}else if(w?.type==="image"||!w?.type){let s=k_[h_++];if(s)N_.push({id:s,annotations:w?.annotations}),D_.push({id:s,name:w?.name||w?.filename||w?.title})}});else if(k_.length>0)k_.forEach((w)=>{N_.push({id:w,annotations:null}),D_.push({id:w,name:null})});if(Z_.length>0)Z_.forEach((w)=>{if(!w?.id)return;let s=D_.find((p_)=>String(p_.id)===String(w.id));if(s&&!s.name)s.name=w.label});let{content:D0,usedIds:c_}=x_(j_,D_);j_=D0;let Z0=N_.filter(({id:w})=>!c_.has(w)),l_=v_.filter((w)=>!c_.has(w)),C_=Z_.length>0?Z_.map((w,s)=>({id:w.id||`attachment-${s+1}`,label:w.label||`attachment-${s+1}`})):D_.map((w,s)=>({id:w.id,label:w.name||`attachment-${s+1}`}));return m(()=>{if(I.current)I2(I.current)},[j_]),N`
        <div id=${`post-${_.id}`} class="post ${U?"agent-post":""} ${Q?"thread-reply":""} ${L?"removing":""}" onClick=${$}>
            <div class="post-avatar ${U?"agent-avatar":""} ${M.image?"has-image":""}" style=${a}>
                ${M.image?N`<img src=${M.image} alt=${D} />`:M.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${E_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${D}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(w)=>{if(w.preventDefault(),w.stopPropagation(),Y)Y(_.id)}}>${p3(_.timestamp)}</a>
                </div>
                ${z_&&e&&N`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${Q2(e.originalLength)} chars
                            ${e.maxLength?N` • Display limit: ${Q2(e.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${$_&&e&&N`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${Q2(e.maxLength)} of ${Q2(e.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(y_.length>0||t.length>0||C_.length>0)&&N`
                    <div class="post-file-refs">
                        ${t.map((w)=>{return N`
                                <a href=${`#msg-${w}`} class="post-msg-pill-link" onClick=${(s)=>{s.stopPropagation()}}>
                                    <${T0}
                                        prefix="post"
                                        label=${"msg:"+w}
                                        title=${"Message "+w}
                                        icon="message"
                                    />
                                </a>
                            `})}
                        ${y_.map((w)=>{let s=w.split("/").pop()||w;return N`
                                <${T0}
                                    prefix="post"
                                    label=${s}
                                    title=${w}
                                />
                            `})}
                        ${C_.map((w)=>N`
                            <${T0}
                                prefix="post"
                                label=${w.label}
                                title=${w.label}
                            />
                        `)}
                    </div>
                `}
                ${O_&&N`
                    <div 
                        ref=${I}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:M_}}
                        onClick=${(w)=>{if(w.target.classList.contains("hashtag")){w.preventDefault(),w.stopPropagation();let s=w.target.dataset.hashtag;if(s)J?.(s)}else if(w.target.tagName==="IMG")w.preventDefault(),w.stopPropagation(),F(w.target.src)}}
                    />
                `}
                ${N0.length>0&&N`
                    ${N0.map((w,s)=>N`
                        <${S2} key=${s} annotations=${w} />
                    `)}
                `}
                ${Z0.length>0&&N`
                    <div class="media-preview">
                        ${Z0.map(({id:w})=>N`
                            <img 
                                key=${w} 
                                src=${j3(w)} 
                                alt="Media" 
                                loading="lazy"
                                onClick=${(s)=>B_(s,w)}
                            />
                        `)}
                    </div>
                `}
                ${Z0.length>0&&N`
                    ${Z0.map(({annotations:w},s)=>N`
                        ${w&&N`<${S2} key=${s} annotations=${w} />`}
                    `)}
                `}
                ${l_.length>0&&N`
                    <div class="file-attachments">
                        ${l_.map((w)=>N`
                            <${G8} key=${w} mediaId=${w} />
                        `)}
                    </div>
                `}
                ${F_.length>0&&N`
                    <div class="resource-links">
                        ${F_.map((w,s)=>N`
                            <div key=${s}>
                                <${V8} block=${w} />
                                <${S2} annotations=${w.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${P_.length>0&&N`
                    <div class="resource-embeds">
                        ${P_.map((w,s)=>N`
                            <div key=${s}>
                                <${W8} block=${w} />
                                <${S2} annotations=${w.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${S.link_previews?.length>0&&N`
                    <div class="link-previews">
                        ${S.link_previews.map((w,s)=>N`
                            <${N8} key=${s} preview=${w} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&N`<${h3} src=${E} onClose=${()=>F(null)} />`}
    `}function l3({posts:_,hasMore:$,onLoadMore:J,onPostClick:Y,onHashtagClick:X,onMessageRef:Z,emptyMessage:K,timelineRef:G,agents:V,user:W,onDeletePost:Q,reverse:L=!0,removingPostIds:H,searchQuery:E}){let[F,I]=f(!1),S=A(null),U=typeof IntersectionObserver<"u",y=b(async()=>{if(!J||!$||F)return;I(!0);try{await J({preserveScroll:!0,preserveMode:"top"})}finally{I(!1)}},[$,F,J]),D=b((i)=>{let{scrollTop:p,scrollHeight:a,clientHeight:Q_}=i.target,l=L?a-Q_-p:p,$_=Math.max(300,Q_);if(l<$_)y()},[L,y]);if(m(()=>{if(!U)return;let i=S.current,p=G?.current;if(!i||!p)return;let a=300,Q_=new IntersectionObserver((l)=>{for(let $_ of l){if(!$_.isIntersecting)continue;y()}},{root:p,rootMargin:`${a}px 0px ${a}px 0px`,threshold:0});return Q_.observe(i),()=>Q_.disconnect()},[U,$,J,G,y]),m(()=>{if(U)return;if(!G?.current)return;let{scrollTop:i,scrollHeight:p,clientHeight:a}=G.current,Q_=L?p-a-i:i,l=Math.max(300,a);if(Q_<l)y()},[U,_,$,L,G,y]),m(()=>{if(!G?.current)return;if(!$||F)return;let{scrollTop:i,scrollHeight:p,clientHeight:a}=G.current,Q_=L?p-a-i:i,l=Math.max(300,a);if(p<=a+1||Q_<l)y()},[_,$,F,L,G,y]),!_)return N`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return N`
            <div class="timeline" ref=${G}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${K||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let M=_.slice().sort((i,p)=>i.id-p.id),u=N`<div class="timeline-sentinel" ref=${S}></div>`;return N`
        <div class="timeline ${L?"reverse":"normal"}" ref=${G} onScroll=${D}>
            <div class="timeline-content">
                ${L?u:null}
                ${M.map((i)=>{let p=Boolean(i.data?.thread_id&&i.data.thread_id!==i.id),a=H?.has?.(i.id);return N`
                    <${i3}
                        key=${i.id}
                        post=${i}
                        isThreadReply=${p}
                        isRemoving=${a}
                        highlightQuery=${E}
                        agentName=${v3(i.data?.agent_id,V||{})}
                        agentAvatarUrl=${R3(i.data?.agent_id,V||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Y?.(i)}
                        onHashtagClick=${X}
                        onMessageRef=${Z}
                        onDelete=${Q}
                    />
                `})}
                ${L?null:u}
            </div>
        </div>
    `}var L8=16,E8=60000,r3=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function D8(_,$){let J=String(_||"").trim();if(!J)return J;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(J)||J.startsWith("#")||J.startsWith("data:")||J.startsWith("blob:"))return J;let Y=J.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=Y?.[1]||J,Z=Y?.[2]||"",K=Y?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),W=X.startsWith("/")?X:`${G?`${G}/`:""}${X}`,Q=[];for(let H of W.split("/")){if(!H||H===".")continue;if(H===".."){if(Q.length>0)Q.pop();continue}Q.push(H)}let L=Q.join("/");return`${J1(L)}${Z}${K}`}function s3(_,$,J,Y=0,X=[]){if(!J&&r3(_))return X;if(!_)return X;if(X.push({node:_,depth:Y}),_.type==="dir"&&_.children&&$.has(_.path))for(let Z of _.children)s3(Z,$,J,Y+1,X);return X}function o3(_,$,J){if(!_)return"";let Y=[],X=(Z)=>{if(!J&&r3(Z))return;if(Y.push(Z.type==="dir"?`d:${Z.path}`:`f:${Z.path}`),Z.children&&$?.has(Z.path))for(let K of Z.children)X(K)};return X(_),Y.join("|")}function N1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let J=Array.isArray(_.children)?_.children:null,Y=Array.isArray($.children)?$.children:null;if(!Y)return _;let X=J?new Map(J.map((G)=>[G?.path,G])):new Map,Z=!J||J.length!==Y.length,K=Y.map((G)=>{let V=N1(X.get(G.path),G);if(V!==X.get(G.path))Z=!0;return V});return Z?{...$,children:K}:_}function W1(_,$,J){if(!_)return _;if(_.path===$)return N1(_,J);if(!Array.isArray(_.children))return _;let Y=!1,X=_.children.map((Z)=>{let K=W1(Z,$,J);if(K!==Z)Y=!0;return K});return Y?{..._,children:X}:_}var a3=4,V1=14,C8=8,y8=16;function t3(_){if(!_)return 0;if(_.type==="file"){let Y=Math.max(0,Number(_.size)||0);return _.__bytes=Y,Y}let $=Array.isArray(_.children)?_.children:[],J=0;for(let Y of $)J+=t3(Y);return _.__bytes=J,J}function e3(_,$=0){let J=Math.max(0,Number(_?.__bytes??_?.size??0)),Y={name:_?.name||_?.path||".",path:_?.path||".",size:J,children:[]};if(!_||_.type!=="dir"||$>=a3)return Y;let X=Array.isArray(_.children)?_.children:[],Z=[];for(let G of X){let V=Math.max(0,Number(G?.__bytes??G?.size??0));if(V<=0)continue;if(G.type==="dir")Z.push({kind:"dir",node:G,size:V});else Z.push({kind:"file",name:G.name,path:G.path,size:V})}Z.sort((G,V)=>V.size-G.size);let K=Z;if(Z.length>V1){let G=Z.slice(0,V1-1),V=Z.slice(V1-1),W=V.reduce((Q,L)=>Q+L.size,0);G.push({kind:"other",name:`+${V.length} more`,path:`${Y.path}/[other]`,size:W}),K=G}return Y.children=K.map((G)=>{if(G.kind==="dir")return e3(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Y}function n3(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,J=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(J==="dark")return!0;if(J==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function _4(_,$,J){let Y=((_+Math.PI/2)*180/Math.PI+360)%360,X=J?Math.max(30,70-$*10):Math.max(34,66-$*8),Z=J?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Y.toFixed(1)} ${X}% ${Z}%)`}function x2(_,$,J,Y){return{x:_+J*Math.cos(Y),y:$+J*Math.sin(Y)}}function q1(_,$,J,Y,X,Z){let K=Math.PI*2-0.0001,G=Z-X>K?X+K:Z,V=x2(_,$,Y,X),W=x2(_,$,Y,G),Q=x2(_,$,J,G),L=x2(_,$,J,X),H=G-X>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${Y} ${Y} 0 ${H} 1 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${J} ${J} 0 ${H} 0 ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,"Z"].join(" ")}var $4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function J4(_,$,J){let Y=[],X=[],Z=Math.max(0,Number($)||0),K=(G,V,W,Q)=>{let L=Array.isArray(G?.children)?G.children:[];if(!L.length)return;let H=Math.max(0,Number(G.size)||0);if(H<=0)return;let E=W-V,F=V;L.forEach((I,S)=>{let U=Math.max(0,Number(I.size)||0);if(U<=0)return;let y=U/H,D=F,M=S===L.length-1?W:F+E*y;if(F=M,M-D<0.003)return;let u=$4[Q];if(u){let i=_4(D,Q,J);if(Y.push({key:I.path,path:I.path,label:I.name,size:U,color:i,depth:Q,startAngle:D,endAngle:M,innerRadius:u[0],outerRadius:u[1],d:q1(120,120,u[0],u[1],D,M)}),Q===1)X.push({key:I.path,name:I.name,size:U,pct:Z>0?U/Z*100:0,color:i})}if(Q<a3)K(I,D,M,Q+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Y,legend:X}}function O1(_,$){if(!_||!$)return null;if(_.path===$)return _;let J=Array.isArray(_.children)?_.children:[];for(let Y of J){let X=O1(Y,$);if(X)return X}return null}function Y4(_,$,J,Y){if(!J||J<=0)return{segments:[],legend:[]};let X=$4[1];if(!X)return{segments:[],legend:[]};let Z=-Math.PI/2,K=Math.PI*3/2,G=_4(Z,1,Y),W=`${$||"."}/[files]`;return{segments:[{key:W,path:W,label:_,size:J,color:G,depth:1,startAngle:Z,endAngle:K,innerRadius:X[0],outerRadius:X[1],d:q1(120,120,X[0],X[1],Z,K)}],legend:[{key:W,name:_,size:J,pct:100,color:G}]}}function d3(_,$=!1,J=!1){if(!_)return null;let Y=t3(_),X=e3(_,0),Z=X.size||Y,{segments:K,legend:G}=J4(X,Z,J);if(!K.length&&Z>0){let V=Y4("[files]",X.path,Z,J);K=V.segments,G=V.legend}return{root:X,totalSize:Z,segments:K,legend:G,truncated:$,isDarkTheme:J}}function k8({payload:_}){if(!_)return null;let[$,J]=f(null),[Y,X]=f(_?.root?.path||"."),[Z,K]=f(()=>[_?.root?.path||"."]),[G,V]=f(!1);m(()=>{let l=_?.root?.path||".";X(l),K([l]),J(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!Y)return;V(!0);let l=setTimeout(()=>V(!1),180);return()=>clearTimeout(l)},[Y]);let W=k0(()=>{return O1(_.root,Y)||_.root},[_?.root,Y]),Q=W?.size||_.totalSize||0,{segments:L,legend:H}=k0(()=>{let l=J4(W,Q,_.isDarkTheme);if(l.segments.length>0)return l;if(Q<=0)return l;let $_=W?.children?.length?"Total":"[files]";return Y4($_,W?.path||_?.root?.path||".",Q,_.isDarkTheme)},[W,Q,_.isDarkTheme,_?.root?.path]),[E,F]=f(L),I=A(new Map),S=A(0);m(()=>{let l=I.current,$_=new Map(L.map((H_)=>[H_.key,H_])),z_=performance.now(),e=220,j_=(H_)=>{let y_=Math.min(1,(H_-z_)/220),J_=y_*(2-y_),t=L.map((G_)=>{let O_=l.get(G_.key)||{startAngle:G_.startAngle,endAngle:G_.startAngle,innerRadius:G_.innerRadius,outerRadius:G_.innerRadius},K_=(N_,v_)=>N_+(v_-N_)*J_,M_=K_(O_.startAngle,G_.startAngle),B_=K_(O_.endAngle,G_.endAngle),E_=K_(O_.innerRadius,G_.innerRadius),x_=K_(O_.outerRadius,G_.outerRadius);return{...G_,d:q1(120,120,E_,x_,M_,B_)}});if(F(t),y_<1)S.current=requestAnimationFrame(j_)};if(S.current)cancelAnimationFrame(S.current);return S.current=requestAnimationFrame(j_),I.current=$_,()=>{if(S.current)cancelAnimationFrame(S.current)}},[L]);let U=E.length?E:L,y=Q>0?A0(Q):"0 B",D=W?.name||"",u=(D&&D!=="."?D:"Total")||"Total",i=y,p=Z.length>1,a=(l)=>{if(!l?.path)return;let $_=O1(_.root,l.path);if(!$_||!Array.isArray($_.children)||$_.children.length===0)return;K((z_)=>[...z_,$_.path]),X($_.path),J(null)},Q_=()=>{if(!p)return;K((l)=>{let $_=l.slice(0,-1);return X($_[$_.length-1]||_?.root?.path||"."),$_}),J(null)};return N`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${W?.path||_?.root?.path||"."}`}
                data-segments=${U.length}
                data-base-size=${Q}>
                ${U.map((l)=>N`
                    <path
                        key=${l.key}
                        d=${l.d}
                        fill=${l.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===l.key?" is-hovered":""}`}
                        onMouseEnter=${()=>J(l)}
                        onMouseLeave=${()=>J(null)}
                        onTouchStart=${()=>J(l)}
                        onTouchEnd=${()=>J(null)}
                        onClick=${()=>a(l)}
                    >
                        <title>${l.label} — ${A0(l.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${p?" is-drill":""}`}
                    onClick=${Q_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${u}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${i}</text>
                </g>
            </svg>
            ${H.length>0&&N`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((l)=>N`
                        <div key=${l.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${l.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${l.name}>${l.name}</span>
                            <span class="workspace-folder-starburst-size">${A0(l.size)}</span>
                            <span class="workspace-folder-starburst-pct">${l.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&N`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function A8({mediaId:_}){let[$,J]=f(null);if(m(()=>{if(!_)return;E2(_).then(J).catch(()=>{})},[_]),!$)return null;let Y=$.filename||"file",X=$.metadata?.size?A0($.metadata.size):"";return N`
        <a href=${Z2(_)} download=${Y} class="file-attachment"
            onClick=${(Z)=>Z.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Y}</span>
                ${X&&N`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function Z4({onFileSelect:_,visible:$=!0,active:J=void 0,onOpenEditor:Y}){let[X,Z]=f(null),[K,G]=f(new Set(["."])),[V,W]=f(null),[Q,L]=f(null),[H,E]=f(""),[F,I]=f(null),[S,U]=f(null),[y,D]=f(!0),[M,u]=f(!1),[i,p]=f(null),[a,Q_]=f(()=>d0("workspaceShowHidden",!1)),[l,$_]=f(!1),[z_,e]=f(null),[j_,H_]=f(null),[y_,J_]=f(null),[t,G_]=f(!1),[Z_,O_]=f(null),[K_,M_]=f(()=>n3()),B_=A(K),E_=A(""),x_=A(null),N_=A(0),v_=A(new Set),D_=A(null),F_=A(new Map),P_=A(_),N0=A(Y),g_=A(null),k_=A(null),h_=A(null),D0=A(null),c_=A(null),Z0=A(null),l_=A("."),C_=A(null),w=A({path:null,dragging:!1,startX:0,startY:0}),s=A({path:null,dragging:!1,startX:0,startY:0}),p_=A({path:null,timer:0}),q0=A(!1),$0=A(0),M0=A(new Map),B0=A(null),z0=A(null),o_=A(a),V0=A($),U0=A(J??$),a_=A(0),L_=A(y_),W0=A(l),f0=A(z_),H0=A(null),J0=A({x:0,y:0}),X0=A(0),v0=A(null),R_=A(V),n_=A(Q),F0=A(F);P_.current=_,N0.current=Y,m(()=>{B_.current=K},[K]),m(()=>{o_.current=a},[a]),m(()=>{V0.current=$},[$]),m(()=>{U0.current=J??$},[J,$]),m(()=>{L_.current=y_},[y_]),m(()=>{let j=(B)=>{let k=B?.detail?.path;if(!k)return;let C=k.split("/"),v=[];for(let c=1;c<C.length;c++)v.push(C.slice(0,c).join("/"));if(v.length)G((c)=>{let d=new Set(c);d.add(".");for(let r of v)d.add(r);return d});W(k),requestAnimationFrame(()=>{let c=document.querySelector(`[data-path="${CSS.escape(k)}"]`);if(c)c.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",j),()=>window.removeEventListener("workspace-reveal-path",j)},[]),m(()=>{W0.current=l},[l]),m(()=>{f0.current=z_},[z_]),m(()=>{R_.current=V},[V]),m(()=>{n_.current=Q},[Q]),m(()=>{F0.current=F},[F]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let j=()=>M_(n3());j();let B=window.matchMedia?.("(prefers-color-scheme: dark)"),k=()=>j();if(B?.addEventListener)B.addEventListener("change",k);else if(B?.addListener)B.addListener(k);let C=typeof MutationObserver<"u"?new MutationObserver(()=>j()):null;if(C?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)C?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(B?.removeEventListener)B.removeEventListener("change",k);else if(B?.removeListener)B.removeListener(k);C?.disconnect()}},[]),m(()=>{if(!Q)return;let j=c_.current;if(!j)return;let B=requestAnimationFrame(()=>{try{j.focus(),j.select()}catch{}});return()=>cancelAnimationFrame(B)},[Q]);let R0=async(j)=>{u(!0),I(null),U(null);try{let B=await G3(j,20000);I(B)}catch(B){I({error:B.message||"Failed to load preview"})}finally{u(!1)}};g_.current=R0;let L0=async()=>{if(!V0.current)return;try{let j=await D2("",1,o_.current),B=o3(j.root,B_.current,o_.current);if(B===E_.current){D(!1);return}if(E_.current=B,x_.current=j.root,!N_.current)N_.current=requestAnimationFrame(()=>{N_.current=0,Z((k)=>N1(k,x_.current)),D(!1)})}catch(j){p(j.message||"Failed to load workspace"),D(!1)}},w0=async(j)=>{if(!j)return;if(v_.current.has(j))return;v_.current.add(j);try{let B=await D2(j,1,o_.current);Z((k)=>W1(k,j,B.root))}catch(B){p(B.message||"Failed to load workspace")}finally{v_.current.delete(j)}};k_.current=w0;let T_=b(()=>{let j=V;if(!j)return".";let B=F_.current?.get(j);if(B&&B.type==="dir")return B.path;if(j==="."||!j.includes("/"))return".";let k=j.split("/");return k.pop(),k.join("/")||"."},[V]),d_=b((j)=>{let B=j?.closest?.(".workspace-row");if(!B)return null;let k=B.dataset.path,C=B.dataset.type;if(!k)return null;if(C==="dir")return k;if(k.includes("/")){let v=k.split("/");return v.pop(),v.join("/")||"."}return"."},[]),Y0=b((j)=>{return d_(j?.target||null)},[d_]),u_=b((j)=>{L_.current=j,J_(j)},[]),m_=b(()=>{let j=p_.current;if(j?.timer)clearTimeout(j.timer);p_.current={path:null,timer:0}},[]),r_=b((j)=>{if(!j||j==="."){m_();return}let B=F_.current?.get(j);if(!B||B.type!=="dir"){m_();return}if(B_.current?.has(j)){m_();return}if(p_.current?.path===j)return;m_();let k=setTimeout(()=>{p_.current={path:null,timer:0},k_.current?.(j),G((C)=>{let v=new Set(C);return v.add(j),v})},600);p_.current={path:j,timer:k}},[m_]),O0=b((j,B)=>{if(J0.current={x:j,y:B},X0.current)return;X0.current=requestAnimationFrame(()=>{X0.current=0;let k=H0.current;if(!k)return;let C=J0.current;k.style.transform=`translate(${C.x+12}px, ${C.y+12}px)`})},[]),C0=b((j)=>{if(!j)return;let k=(F_.current?.get(j)?.name||j.split("/").pop()||j).trim();if(!k)return;H_({path:j,label:k})},[]),P0=b(()=>{if(H_(null),X0.current)cancelAnimationFrame(X0.current),X0.current=0;if(H0.current)H0.current.style.transform="translate(-9999px, -9999px)"},[]),c0=b((j)=>{if(!j)return".";let B=F_.current?.get(j);if(B&&B.type==="dir")return B.path;if(j==="."||!j.includes("/"))return".";let k=j.split("/");return k.pop(),k.join("/")||"."},[]),z=b(()=>{L(null),E("")},[]),x=b((j)=>{if(!j)return;let k=(F_.current?.get(j)?.name||j.split("/").pop()||j).trim();if(!k||j===".")return;L(j),E(k)},[]),n=b(async()=>{let j=n_.current;if(!j)return;let B=(H||"").trim();if(!B){z();return}let k=F_.current?.get(j),C=(k?.name||j.split("/").pop()||j).trim();if(B===C){z();return}try{let c=(await O3(j,B))?.path||j,d=j.includes("/")?j.split("/").slice(0,-1).join("/")||".":".";if(z(),p(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:j,newPath:c,type:k?.type||"file"}})),k?.type==="dir")G((r)=>{let o=new Set;for(let Y_ of r)if(Y_===j)o.add(c);else if(Y_.startsWith(`${j}/`))o.add(`${c}${Y_.slice(j.length)}`);else o.add(Y_);return o});if(W(c),k?.type==="dir")I(null),u(!1),U(null);else g_.current?.(c);k_.current?.(d)}catch(v){p(v?.message||"Failed to rename file")}},[z,H]),__=b(async(j)=>{let C=j||".";for(let v=0;v<50;v+=1){let d=`untitled${v===0?"":`-${v}`}.md`;try{let o=(await W3(C,d,""))?.path||(C==="."?d:`${C}/${d}`);if(C&&C!==".")G((Y_)=>new Set([...Y_,C]));W(o),p(null),k_.current?.(C),g_.current?.(o);return}catch(r){if(r?.status===409||r?.code==="file_exists")continue;p(r?.message||"Failed to create file");return}}p("Failed to create file (untitled name already in use).")},[]),V_=b((j)=>{if(j?.stopPropagation?.(),t)return;let B=c0(R_.current);__(B)},[t,c0,__]);m(()=>{if(typeof window>"u")return;let j=(B)=>{let k=B?.detail?.updates||[];if(!Array.isArray(k)||k.length===0)return;Z((r)=>{let o=r;for(let Y_ of k){if(!Y_?.root)continue;if(!o||Y_.path==="."||!Y_.path)o=Y_.root;else o=W1(o,Y_.path,Y_.root)}if(o)E_.current=o3(o,B_.current,o_.current);return D(!1),o});let C=R_.current;if(Boolean(C)&&k.some((r)=>{let o=r?.path||"";if(!o||o===".")return!0;return C===o||C.startsWith(`${o}/`)||o.startsWith(`${C}/`)}))M0.current.clear();if(!C||!F0.current)return;let c=F_.current?.get(C);if(c&&c.type==="dir")return;if(k.some((r)=>{let o=r?.path||"";if(!o||o===".")return!0;return C===o||C.startsWith(`${o}/`)}))g_.current?.(C)};return window.addEventListener("workspace-update",j),()=>window.removeEventListener("workspace-update",j)},[]),D_.current=L0;let I_=A(()=>{if(typeof window>"u")return;let j=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),B=U0.current??V0.current,k=document.visibilityState!=="hidden"&&(B||j.matches&&V0.current);C2(k,o_.current).catch(()=>{})}).current,q_=A(0),b_=A(()=>{if(q_.current)clearTimeout(q_.current);q_.current=setTimeout(()=>{q_.current=0,I_()},250)}).current;m(()=>{if(V0.current)D_.current?.();b_()},[$,J]),m(()=>{D_.current(),I_();let j=setInterval(()=>D_.current(),E8),B=r0("previewHeight",null),k=Number.isFinite(B)?Math.min(Math.max(B,80),600):280;if($0.current=k,h_.current)h_.current.style.setProperty("--preview-height",`${k}px`);let C=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),v=()=>b_();if(C.addEventListener)C.addEventListener("change",v);else if(C.addListener)C.addListener(v);return document.addEventListener("visibilitychange",v),()=>{if(clearInterval(j),N_.current)cancelAnimationFrame(N_.current),N_.current=0;if(C.removeEventListener)C.removeEventListener("change",v);else if(C.removeListener)C.removeListener(v);if(document.removeEventListener("visibilitychange",v),q_.current)clearTimeout(q_.current),q_.current=0;if(C_.current)clearTimeout(C_.current),C_.current=null;C2(!1,o_.current).catch(()=>{})}},[]);let f_=k0(()=>s3(X,K,a),[X,K,a]),y0=k0(()=>new Map(f_.map((j)=>[j.node.path,j.node])),[f_]);F_.current=y0;let A_=(V?F_.current.get(V):null)?.type==="dir";m(()=>{if(!V||!A_){O_(null),B0.current=null,z0.current=null;return}let j=V,B=`${a?"hidden":"visible"}:${V}`,k=M0.current,C=k.get(B);if(C?.root){k.delete(B),k.set(B,C);let d=d3(C.root,Boolean(C.truncated),K_);if(d)B0.current=d,z0.current=V,O_({loading:!1,error:null,payload:d});return}let v=B0.current,c=z0.current;O_({loading:!0,error:null,payload:c===V?v:null}),D2(V,C8,a).then((d)=>{if(R_.current!==j)return;let r={root:d?.root,truncated:Boolean(d?.truncated)};k.delete(B),k.set(B,r);while(k.size>y8){let Y_=k.keys().next().value;if(!Y_)break;k.delete(Y_)}let o=d3(r.root,r.truncated,K_);B0.current=o,z0.current=V,O_({loading:!1,error:null,payload:o})}).catch((d)=>{if(R_.current!==j)return;O_({loading:!1,error:d?.message||"Failed to load folder size chart",payload:c===V?v:null})})},[V,A_,a,K_]);let E0=Boolean(F&&F.kind==="text"&&!A_&&(!F.size||F.size<=262144)),e0=E0?"Open in editor":F?.size>262144?"File too large to edit":"File is not editable",I0=(j)=>{let B=j?.target;if(B instanceof Element)return B;return B?.parentElement||null},b0=A((j)=>{if(q0.current){q0.current=!1;return}let B=I0(j),k=B?.closest?.("[data-path]");if(D0.current?.focus?.(),!k)return;let C=k.dataset.path,v=k.dataset.type,c=Boolean(B?.closest?.(".workspace-caret")),d=Boolean(B?.closest?.("button"))||Boolean(B?.closest?.("a"))||Boolean(B?.closest?.("input")),r=R_.current===C,o=n_.current;if(o){if(o===C)return;z()}if(r&&!c&&!d&&C!=="."){x(C);return}if(v==="dir"){if(W(C),I(null),U(null),u(!1),!B_.current.has(C))k_.current?.(C);if(r&&!c)return;G((e_)=>{let _0=new Set(e_);if(_0.has(C))_0.delete(C);else _0.add(C);return _0})}else{W(C);let Y_=F_.current.get(C);if(Y_)P_.current?.(Y_.path,Y_);g_.current?.(C)}}).current,s_=A(()=>{E_.current="",D_.current(),Array.from(B_.current||[]).filter((B)=>B&&B!==".").forEach((B)=>k_.current?.(B))}).current,u0=A(()=>{W(null),I(null),U(null),u(!1)}).current,v2=A(()=>{Q_((j)=>{let B=!j;if(typeof window<"u")S_("workspaceShowHidden",String(B));return o_.current=B,C2(!0,B).catch(()=>{}),E_.current="",D_.current?.(),Array.from(B_.current||[]).filter((C)=>C&&C!==".").forEach((C)=>k_.current?.(C)),B})}).current,j2=A((j)=>{if(I0(j)?.closest?.("[data-path]"))return;u0()}).current,t_=b(async(j)=>{if(!j)return;let B=j.split("/").pop()||j;if(!window.confirm(`Delete "${B}"? This cannot be undone.`))return;try{await q3(j);let C=j.includes("/")?j.split("/").slice(0,-1).join("/")||".":".";if(R_.current===j)u0();k_.current?.(C),p(null)}catch(C){I((v)=>({...v||{},error:C.message||"Failed to delete file"}))}},[u0]),K0=b((j)=>{let B=D0.current;if(!B||!j||typeof CSS>"u"||typeof CSS.escape!=="function")return;B.querySelector(`[data-path="${CSS.escape(j)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),R2=b((j)=>{let B=f_;if(!B||B.length===0)return;let k=V?B.findIndex((C)=>C.node.path===V):-1;if(j.key==="ArrowDown"){j.preventDefault();let C=Math.min(k+1,B.length-1),v=B[C];if(!v)return;if(W(v.node.path),v.node.type!=="dir")P_.current?.(v.node.path,v.node),g_.current?.(v.node.path);else I(null),u(!1),U(null);K0(v.node.path);return}if(j.key==="ArrowUp"){j.preventDefault();let C=k<=0?0:k-1,v=B[C];if(!v)return;if(W(v.node.path),v.node.type!=="dir")P_.current?.(v.node.path,v.node),g_.current?.(v.node.path);else I(null),u(!1),U(null);K0(v.node.path);return}if(j.key==="ArrowRight"&&k>=0){let C=B[k];if(C?.node?.type==="dir"&&!K.has(C.node.path))j.preventDefault(),k_.current?.(C.node.path),G((v)=>new Set([...v,C.node.path]));return}if(j.key==="ArrowLeft"&&k>=0){let C=B[k];if(C?.node?.type==="dir"&&K.has(C.node.path))j.preventDefault(),G((v)=>{let c=new Set(v);return c.delete(C.node.path),c});return}if(j.key==="Enter"&&k>=0){j.preventDefault();let C=B[k];if(!C)return;let v=C.node.path;if(C.node.type==="dir"){if(!B_.current.has(v))k_.current?.(v);G((d)=>{let r=new Set(d);if(r.has(v))r.delete(v);else r.add(v);return r}),I(null),U(null),u(!1)}else P_.current?.(v,C.node),g_.current?.(v);return}if((j.key==="Delete"||j.key==="Backspace")&&k>=0){let C=B[k];if(!C||C.node.type==="dir")return;j.preventDefault(),t_(C.node.path);return}if(j.key==="Escape")j.preventDefault(),u0()},[u0,t_,K,f_,K0,V]),G2=b((j)=>{let B=j?.target?.closest?.(".workspace-row");if(!B)return;let k=B.dataset.type,C=B.dataset.path;if(!C||C===".")return;if(n_.current===C)return;let v=j?.touches?.[0];if(!v)return;if(w.current={path:C,dragging:!1,startX:v.clientX,startY:v.clientY},k!=="file")return;if(C_.current)clearTimeout(C_.current);C_.current=setTimeout(()=>{if(C_.current=null,w.current?.dragging)return;t_(C)},600)},[t_]),m0=b(()=>{if(C_.current)clearTimeout(C_.current),C_.current=null;let j=w.current;if(j?.dragging&&j.path){let B=L_.current||T_(),k=v0.current;if(typeof k==="function")k(j.path,B)}w.current={path:null,dragging:!1,startX:0,startY:0},a_.current=0,$_(!1),e(null),u_(null),m_(),P0()},[T_,P0,u_,m_]),u2=b((j)=>{let B=w.current,k=j?.touches?.[0];if(!k||!B?.path){if(C_.current)clearTimeout(C_.current),C_.current=null;return}let C=Math.abs(k.clientX-B.startX),v=Math.abs(k.clientY-B.startY),c=C>8||v>8;if(c&&C_.current)clearTimeout(C_.current),C_.current=null;if(!B.dragging&&c)B.dragging=!0,$_(!0),e("move"),C0(B.path);if(B.dragging){j.preventDefault(),O0(k.clientX,k.clientY);let d=document.elementFromPoint(k.clientX,k.clientY),r=d_(d)||T_();if(L_.current!==r)u_(r);r_(r)}},[d_,T_,C0,O0,u_,r_]),m2=A((j)=>{j.preventDefault();let B=h_.current;if(!B)return;let k=j.clientY,C=$0.current||280,v=j.currentTarget;v.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let c=k,d=(o)=>{c=o.clientY;let Y_=B.clientHeight-80,e_=Math.min(Math.max(C-(o.clientY-k),80),Y_);B.style.setProperty("--preview-height",`${e_}px`),$0.current=e_},r=()=>{let o=B.clientHeight-80,Y_=Math.min(Math.max(C-(c-k),80),o);$0.current=Y_,v.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",S_("previewHeight",String(Math.round(Y_))),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",r)}).current,g2=A((j)=>{j.preventDefault();let B=h_.current;if(!B)return;let k=j.touches[0];if(!k)return;let C=k.clientY,v=$0.current||280,c=j.currentTarget;c.classList.add("dragging"),document.body.style.userSelect="none";let d=(o)=>{let Y_=o.touches[0];if(!Y_)return;o.preventDefault();let e_=B.clientHeight-80,_0=Math.min(Math.max(v-(Y_.clientY-C),80),e_);B.style.setProperty("--preview-height",`${_0}px`),$0.current=_0},r=()=>{c.classList.remove("dragging"),document.body.style.userSelect="",S_("previewHeight",String(Math.round($0.current||v))),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",r),document.removeEventListener("touchcancel",r)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",r),document.addEventListener("touchcancel",r)}).current,c2=async()=>{if(!V)return;try{let j=await V3(V);if(j.media_id)U(j.media_id)}catch(j){I((B)=>({...B||{},error:j.message||"Failed to attach"}))}},p2=async()=>{if(!V||A_)return;await t_(V)},p0=(j)=>{return Array.from(j?.dataTransfer?.types||[]).includes("Files")},h0=b((j)=>{if(!p0(j))return;if(j.preventDefault(),a_.current+=1,!W0.current)$_(!0);e("upload");let B=Y0(j)||T_();u_(B),r_(B)},[T_,Y0,u_,r_]),_2=b((j)=>{if(!p0(j))return;if(j.preventDefault(),j.dataTransfer)j.dataTransfer.dropEffect="copy";if(!W0.current)$_(!0);if(f0.current!=="upload")e("upload");let B=Y0(j)||T_();if(L_.current!==B)u_(B);r_(B)},[T_,Y0,u_,r_]),S0=b((j)=>{if(!p0(j))return;if(j.preventDefault(),a_.current=Math.max(0,a_.current-1),a_.current===0)$_(!1),e(null),u_(null),m_()},[u_,m_]),i0=b(async(j,B=".")=>{let k=Array.from(j||[]);if(k.length===0)return;let C=B&&B!==""?B:".",v=C!=="."?C:"workspace root";G_(!0);try{let c=null;for(let d of k)try{c=await $1(d,C)}catch(r){let o=r?.status,Y_=r?.code;if(o===409||Y_==="file_exists"){let e_=d?.name||"file";if(!window.confirm(`"${e_}" already exists in ${v}. Overwrite?`))continue;c=await $1(d,C,{overwrite:!0})}else throw r}if(c?.path)W(c.path),g_.current?.(c.path);k_.current?.(C)}catch(c){p(c.message||"Failed to upload file")}finally{G_(!1)}},[]),h2=b(async(j,B)=>{if(!j)return;let k=F_.current?.get(j);if(!k)return;let C=B&&B!==""?B:".",v=j.includes("/")?j.split("/").slice(0,-1).join("/")||".":".";if(C===v)return;try{let d=(await N3(j,C))?.path||j;if(k.type==="dir")G((r)=>{let o=new Set;for(let Y_ of r)if(Y_===j)o.add(d);else if(Y_.startsWith(`${j}/`))o.add(`${d}${Y_.slice(j.length)}`);else o.add(Y_);return o});if(W(d),k.type==="dir")I(null),u(!1),U(null);else g_.current?.(d);k_.current?.(v),k_.current?.(C)}catch(c){p(c?.message||"Failed to move entry")}},[]);v0.current=h2;let i2=b(async(j)=>{if(!p0(j))return;j.preventDefault(),a_.current=0,$_(!1),e(null),J_(null),m_();let B=Array.from(j?.dataTransfer?.files||[]);if(B.length===0)return;let k=L_.current||Y0(j)||T_();await i0(B,k)},[T_,Y0,i0]),l2=b((j)=>{if(j?.stopPropagation?.(),t)return;let B=j?.currentTarget?.dataset?.uploadTarget||".";l_.current=B,Z0.current?.click()},[t]),o2=b(()=>{if(t)return;let j=R_.current,B=j?F_.current?.get(j):null;l_.current=B?.type==="dir"?B.path:".",Z0.current?.click()},[t]),n2=b((j)=>{if(!j||j.button!==0)return;let B=j.currentTarget;if(!B||!B.dataset)return;let k=B.dataset.path;if(!k||k===".")return;if(n_.current===k)return;if(j.target?.closest?.("button, a, input, .workspace-caret"))return;j.preventDefault(),s.current={path:k,dragging:!1,startX:j.clientX,startY:j.clientY};let C=(c)=>{let d=s.current;if(!d?.path)return;let r=Math.abs(c.clientX-d.startX),o=Math.abs(c.clientY-d.startY),Y_=r>4||o>4;if(!d.dragging&&Y_)d.dragging=!0,q0.current=!0,$_(!0),e("move"),C0(d.path),O0(c.clientX,c.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(d.dragging){c.preventDefault(),O0(c.clientX,c.clientY);let e_=document.elementFromPoint(c.clientX,c.clientY),_0=d_(e_)||T_();if(L_.current!==_0)u_(_0);r_(_0)}},v=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",v);let c=s.current;if(c?.dragging&&c.path){let d=L_.current||T_(),r=v0.current;if(typeof r==="function")r(c.path,d)}s.current={path:null,dragging:!1,startX:0,startY:0},a_.current=0,$_(!1),e(null),u_(null),m_(),P0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{q0.current=!1},0)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",v)},[d_,T_,C0,O0,P0,u_,r_,m_]),D1=b(async(j)=>{let B=Array.from(j?.target?.files||[]);if(B.length===0)return;let k=l_.current||".";if(await i0(B,k),l_.current=".",j?.target)j.target.value=""},[i0]);return N`
        <aside
            class=${`workspace-sidebar${l?" workspace-drop-active":""}`}
            ref=${h_}
            onDragEnter=${h0}
            onDragOver=${_2}
            onDragLeave=${S0}
            onDrop=${i2}
        >
            <input type="file" multiple style="display:none" ref=${Z0} onChange=${D1} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${V_} title="New file" disabled=${t}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${s_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${a?" active":""}`}
                        onClick=${v2}
                        title=${a?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!a&&N`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${j2}>
                ${t&&N`<div class="workspace-drop-hint">Uploading…</div>`}
                ${y&&N`<div class="workspace-loading">Loading…</div>`}
                ${i&&N`<div class="workspace-error">${i}</div>`}
                ${X&&N`
                    <div
                        class="workspace-tree-list"
                        ref=${D0}
                        tabIndex="0"
                        onClick=${b0}
                        onKeyDown=${R2}
                        onTouchStart=${G2}
                        onTouchEnd=${m0}
                        onTouchMove=${u2}
                        onTouchCancel=${m0}
                    >
                        ${f_.map(({node:j,depth:B})=>{let k=j.type==="dir",C=j.path===V,v=j.path===Q,c=k&&K.has(j.path),d=y_&&j.path===y_,r=Array.isArray(j.children)&&j.children.length>0?j.children.length:Number(j.child_count)||0;return N`
                                <div
                                    key=${j.path}
                                    class=${`workspace-row${C?" selected":""}${d?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+B*L8}px`}}
                                    data-path=${j.path}
                                    data-type=${j.type}
                                    onMouseDown=${n2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${k?c?N`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:N`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${k?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${k?N`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:N`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${v?N`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${c_}
                                                value=${H}
                                                onInput=${(o)=>E(o?.target?.value||"")}
                                                onKeyDown=${(o)=>{if(o.key==="Enter")o.preventDefault(),n();else if(o.key==="Escape")o.preventDefault(),z()}}
                                                onBlur=${z}
                                                onClick=${(o)=>o.stopPropagation()}
                                            />
                                        `:N`<span class="workspace-label">${j.name}</span>`}
                                    ${k&&!c&&r>0&&N`
                                        <span class="workspace-count">${r}</span>
                                    `}
                                    ${k&&N`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${j.path}
                                            title="Upload files to this folder"
                                            onClick=${l2}
                                            disabled=${t}
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
            ${V&&N`
                <div class="workspace-preview-splitter-h" onMouseDown=${m2} onTouchStart=${g2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${V_} title="New file" disabled=${t}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!A_&&N`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>E0&&N0.current?.(V,F)}
                                    title=${e0}
                                    disabled=${!E0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${p2}
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
                            ${A_?N`
                                    <button class="workspace-download" onClick=${o2}
                                        title="Upload files to this folder" disabled=${t}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${B3(V,a)}
                                        title="Download folder as zip" onClick=${(j)=>j.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:N`<button class="workspace-download" onClick=${c2} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${M&&N`<div class="workspace-loading">Loading preview…</div>`}
                    ${F?.error&&N`<div class="workspace-error">${F.error}</div>`}
                    ${A_&&N`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${Z_?.loading&&N`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${Z_?.error&&N`<div class="workspace-error">${Z_.error}</div>`}
                        ${Z_?.payload&&Z_.payload.segments?.length>0&&N`
                            <${k8} payload=${Z_.payload} />
                        `}
                        ${Z_?.payload&&(!Z_.payload.segments||Z_.payload.segments.length===0)&&N`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${F&&!F.error&&!A_&&N`
                        <div class="workspace-preview-meta">
                            ${F.size?N`<span>${A0(F.size)}</span>`:""}
                            ${F.mtime?N`<span>${b2(F.mtime)}</span>`:""}
                            ${F.truncated?N`<span>truncated</span>`:""}
                        </div>
                        ${F.kind==="image"&&N`
                            <div class="workspace-preview-image">
                                <img src=${F.url||J1(F.path)} alt="preview" />
                            </div>
                        `}
                        ${F.kind==="text"&&N`
                            ${F.content_type==="text/markdown"?N`<div class="workspace-preview-text"
                                    dangerouslySetInnerHTML=${{__html:t0(F.text||"",null,{rewriteImageSrc:(j)=>D8(j,F.path||V)})}} />`:N`<pre class="workspace-preview-text"><code>${F.text||""}</code></pre>`}
                        `}
                        ${F.kind==="binary"&&N`
                            <div class="workspace-preview-text">Binary file — download to view.</div>
                        `}
                    `}
                    ${S&&N`
                        <div class="workspace-download-card">
                            <${A8} mediaId=${S} />
                        </div>
                    `}
                </div>
            `}
            ${j_&&N`
                <div class="workspace-drag-ghost" ref=${H0}>${j_.label}</div>
            `}
        </aside>
    `}function X4({tabs:_,activeId:$,onActivate:J,onClose:Y,onCloseOthers:X,onCloseAll:Z,onTogglePin:K,onTogglePreview:G,previewTabs:V,onToggleDock:W,dockVisible:Q}){let[L,H]=f(null),E=A(null);m(()=>{if(!L)return;let U=(y)=>{if(y.type==="keydown"&&y.key!=="Escape")return;H(null)};return document.addEventListener("click",U),document.addEventListener("keydown",U),()=>{document.removeEventListener("click",U),document.removeEventListener("keydown",U)}},[L]),m(()=>{let U=(y)=>{if(y.ctrlKey&&y.key==="Tab"){if(y.preventDefault(),!_.length)return;let D=_.findIndex((M)=>M.id===$);if(y.shiftKey){let M=_[(D-1+_.length)%_.length];J?.(M.id)}else{let M=_[(D+1)%_.length];J?.(M.id)}return}if((y.ctrlKey||y.metaKey)&&y.key==="w"){let D=document.querySelector(".editor-pane");if(D&&D.contains(document.activeElement)){if(y.preventDefault(),$)Y?.($)}}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$,J,Y]);let F=b((U,y)=>{if(U.button===1){U.preventDefault(),Y?.(y);return}if(U.button===0)J?.(y)},[J,Y]),I=b((U,y)=>{U.preventDefault(),H({id:y,x:U.clientX,y:U.clientY})},[]),S=b((U,y)=>{U.stopPropagation(),Y?.(y)},[Y]);if(m(()=>{if(!$||!E.current)return;let U=E.current.querySelector(".tab-item.active");if(U)U.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return N`
        <div class="tab-strip" ref=${E} role="tablist">
            ${_.map((U)=>N`
                <div
                    key=${U.id}
                    class=${`tab-item${U.id===$?" active":""}${U.dirty?" dirty":""}${U.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${U.id===$}
                    title=${U.path}
                    onMouseDown=${(y)=>F(y,U.id)}
                    onContextMenu=${(y)=>I(y,U.id)}
                >
                    ${U.pinned&&N`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${U.label}</span>
                    <span
                        class="tab-close"
                        onClick=${(y)=>S(y,U.id)}
                        title=${U.dirty?"Unsaved changes":"Close"}
                        aria-label=${U.dirty?"Unsaved changes":`Close ${U.label}`}
                    >
                        ${U.dirty?N`<span class="tab-dirty-dot" aria-hidden="true"></span>`:N`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </span>
                </div>
            `)}
            ${W&&N`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${Q?" active":""}`}
                    onClick=${W}
                    title=${`${Q?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${Q?"Hide":"Show"} terminal`}
                    aria-pressed=${Q?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 12 4 10 8 6 12 10 12 12"/>
                        <line x1="2" y1="14" x2="14" y2="14"/>
                    </svg>
                </button>
            `}
        </div>
        ${L&&N`
            <div class="tab-context-menu" style=${{left:L.x+"px",top:L.y+"px"}}>
                <button onClick=${()=>{Y?.(L.id),H(null)}}>Close</button>
                <button onClick=${()=>{X?.(L.id),H(null)}}>Close Others</button>
                <button onClick=${()=>{Z?.(),H(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(L.id),H(null)}}>
                    ${_.find((U)=>U.id===L.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(L.id)&&N`
                    <hr />
                    <button onClick=${()=>{G(L.id),H(null)}}>
                        ${V?.has(L.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var M8=300;function Q4({getContent:_,path:$,onClose:J}){let[Y,X]=f(""),Z=A(null),K=A(null),G=A(""),V=b(()=>{let W=_?.()||"";if(W===G.current&&Y)return;G.current=W;try{let Q=t0(W,null,{sanitize:!1});X(Q)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}},[_]);return m(()=>{V();let W=setInterval(V,M8);return()=>clearInterval(W)},[V]),m(()=>{if(Z.current&&Y)I2(Z.current).catch(()=>{})},[Y]),N`
        <div class="md-preview-panel">
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${J} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${Z}
                dangerouslySetInnerHTML=${{__html:Y}}
            />
        </div>
    `}class K4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,J=-1/0;for(let Y of this.extensions.values()){if(Y.placement!=="tabs")continue;if(!Y.canHandle)continue;try{let X=Y.canHandle(_);if(X===!1||X===0)continue;let Z=X===!0?0:typeof X==="number"?X:0;if(Z>J)J=Z,$=Y}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${Y.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var G0=new K4;var T2=null,B1=null;function j4(){if(B1)return Promise.resolve(B1);if(!T2)T2=import("/static/dist/editor.bundle.js").then((_)=>{return B1=_,_}).catch((_)=>{throw T2=null,_});return T2}class G4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await j4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){if(this.queuedViewStateCb=_,this.real&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(_)}restoreViewState(_){if(this.queuedViewState=_,this.real&&typeof this.real.restoreViewState==="function")this.real.restoreViewState(_)}getPath(){if(this.real&&typeof this.real.getPath==="function")return this.real.getPath();return this.context.path||""}setPath(_){if(this.real&&typeof this.real.setPath==="function")this.real.setPath(_)}}var z1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;return 1},mount(_,$){return new G4(_,$)}};function U1(){j4().catch(()=>{})}class V4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let J=document.createElement("div");J.className="terminal-pane-header";let Y=document.createElement("span");Y.className="terminal-pane-title",Y.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",J.append(Y,X);let Z=document.createElement("div");Z.className="terminal-pane-body",Z.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(J,Z),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var H1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new V4(_,$)}};class W4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let J of this.listeners)try{J(_,$)}catch{}}open(_,$){let J=this.tabs.get(_);if(!J)J={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,J);return this.activate(_),J}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((J)=>J!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,J]of this.tabs)if($!==_&&!J.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Y)=>Y!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((J)=>J!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let J=this.tabs.get(_);if(!J||J.dirty===$)return;J.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let J=this.tabs.get(_);if(J)J.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,J){let Y=this.tabs.get(_);if(!Y)return;if(this.tabs.delete(_),Y.id=$,Y.path=$,Y.label=J||$.split("/").pop()||$,this.tabs.set($,Y),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Y)=>Y.id===this.activeId),J=_[($+1)%_.length];this.activate(J.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Y)=>Y.id===this.activeId),J=_[($-1+_.length)%_.length];this.activate(J.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var U_=new W4;function O4({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:J}){m(()=>{J();let Y=new Y1(_,$);Y.connect();let X=()=>{Y.reconnectIfNeeded()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),Y.disconnect()}},[$,_,J])}function N4(){let[_,$]=f(!1),[J,Y]=f("default"),X=A(!1);m(()=>{let V=d0("notificationsEnabled",!1);if(X.current=V,$(V),typeof Notification<"u")Y(Notification.permission)},[]),m(()=>{X.current=_},[_]);let Z=b(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let V=Notification.requestPermission();if(V&&typeof V.then==="function")return V;return Promise.resolve(V)}catch{return Promise.resolve("default")}},[]),K=b(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Y("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let W=await Z();if(Y(W||"default"),W!=="granted"){X.current=!1,$(!1),S_("notificationsEnabled","false");return}}let V=!X.current;X.current=V,$(V),S_("notificationsEnabled",String(V))},[Z]),G=b((V,W)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let Q=new Notification(V,{body:W});return Q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:J,toggleNotifications:K,notify:G}}var K2=(_)=>{let $=new Set;return(_||[]).filter((J)=>{if(!J||$.has(J.id))return!1;return $.add(J.id),!0})};function q4({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[J,Y]=f(null),[X,Z]=f(!1),K=A(!1),G=A(null),V=A(!1),W=A(null);m(()=>{K.current=X},[X]);let Q=b(async(E=null)=>{try{if(E){let F=await e1(E);Y(F.posts),Z(!1)}else{let F=await L2(10);Y(F.posts),Z(F.has_more)}}catch(F){console.error("Failed to load posts:",F)}},[]),L=b(async()=>{try{let E=await L2(10);Y((F)=>{if(!F||F.length===0)return E.posts;return K2([...E.posts,...F])}),Z((F)=>F||E.has_more)}catch(E){console.error("Failed to refresh timeline:",E)}},[]),H=b(async(E={})=>{if(!J||J.length===0)return;if(V.current)return;let{preserveScroll:F=!0,preserveMode:I="top",allowRepeat:S=!1}=E,U=(M)=>{if(!F){M();return}if(I==="top")$(M);else _(M)},D=J.slice().sort((M,u)=>M.id-u.id)[0]?.id;if(!Number.isFinite(D))return;if(!S&&W.current===D)return;V.current=!0,W.current=D;try{let M=await L2(10,D);if(M.posts.length>0)U(()=>{Y((u)=>K2([...M.posts,...u||[]])),Z(M.has_more)});else Z(!1)}catch(M){console.error("Failed to load more posts:",M)}finally{V.current=!1}},[J,_,$]);return m(()=>{G.current=H},[H]),{posts:J,setPosts:Y,hasMore:X,setHasMore:Z,hasMoreRef:K,loadPosts:Q,refreshTimeline:L,loadMore:H,loadMoreRef:G,loadingMoreRef:V,lastBeforeIdRef:W}}function B4(){let[_,$]=f(null),[J,Y]=f({text:"",totalLines:0}),[X,Z]=f(""),[K,G]=f({text:"",totalLines:0}),[V,W]=f(null),[Q,L]=f(null),[H,E]=f(null),F=A(null),I=A(0),S=A(!1),U=A(""),y=A(""),D=A(null),M=A(null),u=A(null),i=A(null),p=A(!1),a=A(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:J,setAgentDraft:Y,agentPlan:X,setAgentPlan:Z,agentThought:K,setAgentThought:G,pendingRequest:V,setPendingRequest:W,currentTurnId:Q,setCurrentTurnId:L,steerQueuedTurnId:H,setSteerQueuedTurnId:E,lastAgentEventRef:F,lastSilenceNoticeRef:I,isAgentRunningRef:S,draftBufferRef:U,thoughtBufferRef:y,pendingRequestRef:D,stalledPostIdRef:M,currentTurnIdRef:u,steerQueuedTurnIdRef:i,thoughtExpandedRef:p,draftExpandedRef:a}}function z4({appShellRef:_,sidebarWidthRef:$,editorWidthRef:J,dockHeightRef:Y}){let X=A((Q)=>{Q.preventDefault();let L=_.current;if(!L)return;let H=Q.clientX,E=$.current||280,F=Q.currentTarget;F.classList.add("dragging"),L.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=H,S=(y)=>{I=y.clientX;let D=Math.min(Math.max(E+(y.clientX-H),160),600);L.style.setProperty("--sidebar-width",`${D}px`),$.current=D},U=()=>{let y=Math.min(Math.max(E+(I-H),160),600);$.current=y,F.classList.remove("dragging"),L.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",S_("sidebarWidth",String(Math.round(y))),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",U)}).current,Z=A((Q)=>{Q.preventDefault();let L=_.current;if(!L)return;let H=Q.touches[0];if(!H)return;let E=H.clientX,F=$.current||280,I=Q.currentTarget;I.classList.add("dragging"),L.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let S=(y)=>{let D=y.touches[0];if(!D)return;y.preventDefault();let M=Math.min(Math.max(F+(D.clientX-E),160),600);L.style.setProperty("--sidebar-width",`${M}px`),$.current=M},U=()=>{I.classList.remove("dragging"),L.classList.remove("sidebar-resizing"),document.body.style.userSelect="",S_("sidebarWidth",String(Math.round($.current||F))),document.removeEventListener("touchmove",S),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,K=A((Q)=>{Q.preventDefault();let L=_.current;if(!L)return;let H=Q.clientX,E=J.current||$.current||280,F=Q.currentTarget;F.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=H,S=(y)=>{I=y.clientX;let D=Math.min(Math.max(E+(y.clientX-H),200),800);L.style.setProperty("--editor-width",`${D}px`),J.current=D},U=()=>{let y=Math.min(Math.max(E+(I-H),200),800);J.current=y,F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",S_("editorWidth",String(Math.round(y))),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",U)}).current,G=A((Q)=>{Q.preventDefault();let L=_.current;if(!L)return;let H=Q.touches[0];if(!H)return;let E=H.clientX,F=J.current||$.current||280,I=Q.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let S=(y)=>{let D=y.touches[0];if(!D)return;y.preventDefault();let M=Math.min(Math.max(F+(D.clientX-E),200),800);L.style.setProperty("--editor-width",`${M}px`),J.current=M},U=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",S_("editorWidth",String(Math.round(J.current||F))),document.removeEventListener("touchmove",S),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,V=A((Q)=>{Q.preventDefault();let L=_.current;if(!L)return;let H=Q.clientY,E=Y?.current||200,F=Q.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=H,S=(y)=>{I=y.clientY;let D=Math.min(Math.max(E-(y.clientY-H),100),window.innerHeight*0.5);if(L.style.setProperty("--dock-height",`${D}px`),Y)Y.current=D},U=()=>{let y=Math.min(Math.max(E-(I-H),100),window.innerHeight*0.5);if(Y)Y.current=y;F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",S_("dockHeight",String(Math.round(y))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",S),document.addEventListener("mouseup",U)}).current,W=A((Q)=>{Q.preventDefault();let L=_.current;if(!L)return;let H=Q.touches[0];if(!H)return;let E=H.clientY,F=Y?.current||200,I=Q.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let S=(y)=>{let D=y.touches[0];if(!D)return;y.preventDefault();let M=Math.min(Math.max(F-(D.clientY-E),100),window.innerHeight*0.5);if(L.style.setProperty("--dock-height",`${M}px`),Y)Y.current=M},U=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",S_("dockHeight",String(Math.round(Y?.current||F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",S),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:W}}function U4({onTabClosed:_}={}){let[$,J]=f(()=>U_.getTabs()),[Y,X]=f(()=>U_.getActiveId()),[Z,K]=f(()=>U_.getTabs().length>0);m(()=>{return U_.onChange((D,M)=>{J(D),X(M),K(D.length>0)})},[]);let G=b((D)=>{if(!D)return;let M={path:D,mode:"edit"};try{if(!G0.resolve(M)){if(!G0.get("editor")){console.warn(`[openEditor] No pane handler for: ${D}`);return}}}catch(u){console.warn(`[openEditor] paneRegistry.resolve() error for "${D}":`,u)}U_.open(D)},[]),V=b(()=>{let D=U_.getActiveId();if(D){let M=U_.get(D);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}U_.close(D),y(D),_?.(D)}},[_]),W=b((D)=>{let M=U_.get(D);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}U_.close(D),y(D),_?.(D)},[_,y]),Q=b((D)=>{U_.activate(D)},[]),L=b((D)=>{let M=U_.getTabs().filter((p)=>p.id!==D&&!p.pinned),u=M.filter((p)=>p.dirty).length;if(u>0){if(!window.confirm(`${u} unsaved tab${u>1?"s":""} will be closed. Continue?`))return}let i=M.map((p)=>p.id);U_.closeOthers(D),i.forEach((p)=>{y(p),_?.(p)})},[_,y]),H=b(()=>{let D=U_.getTabs().filter((i)=>!i.pinned),M=D.filter((i)=>i.dirty).length;if(M>0){if(!window.confirm(`${M} unsaved tab${M>1?"s":""} will be closed. Continue?`))return}let u=D.map((i)=>i.id);U_.closeAll(),u.forEach((i)=>{y(i),_?.(i)})},[_,y]),E=b((D)=>{U_.togglePin(D)},[]),F=b(()=>{let D=U_.getActiveId();if(D)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:D}}))},[]),[I,S]=f(()=>new Set),U=b((D)=>{S((M)=>{let u=new Set(M);if(u.has(D))u.delete(D);else u.add(D);return u})},[]),y=b((D)=>{S((M)=>{if(!M.has(D))return M;let u=new Set(M);return u.delete(D),u})},[]);return m(()=>{let D=(M)=>{let{oldPath:u,newPath:i,type:p}=M.detail||{};if(!u||!i)return;if(p==="dir"){for(let a of U_.getTabs())if(a.path===u||a.path.startsWith(`${u}/`)){let Q_=`${i}${a.path.slice(u.length)}`;U_.rename(a.id,Q_)}}else U_.rename(u,i)};return window.addEventListener("workspace-file-renamed",D),()=>window.removeEventListener("workspace-file-renamed",D)},[]),m(()=>{let D=(M)=>{if(U_.hasUnsaved())M.preventDefault(),M.returnValue=""};return window.addEventListener("beforeunload",D),()=>window.removeEventListener("beforeunload",D)},[]),{editorOpen:Z,tabStripTabs:$,tabStripActiveId:Y,previewTabs:I,openEditor:G,closeEditor:V,handleTabClose:W,handleTabActivate:Q,handleTabCloseOthers:L,handleTabCloseAll:H,handleTabTogglePin:E,handleTabTogglePreview:U,revealInExplorer:F}}function F1(_,$){try{if(typeof window>"u")return $;let J=window.__PICLAW_SILENCE||{},Y=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=J[_]??window[Y],Z=Number(X);return Number.isFinite(Z)?Z:$}catch{return $}}var L1=F1("warning",30000),H4=F1("finalize",120000),F4=F1("refresh",30000),L4=30000;function E4(_){let $={};return(_?.agents||[]).forEach((J)=>{$[J.id]=J}),$}function D4(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function C4(_=30000){let[,$]=f(0);m(()=>{let J=setInterval(()=>$((Y)=>Y+1),_);return()=>clearInterval(J)},[_])}function f2(_,$=160){let J=String(_||"").replace(/\r\n/g,`
`);if(!J)return 0;return J.split(`
`).reduce((Y,X)=>Y+Math.max(1,Math.ceil(X.length/$)),0)}function w4(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var w8=_3,y4=$3,P8=J3,k4=Q3,A4=K3,M4=Y3,E1=typeof e2==="function"?e2:w4("getAgentContext",null),I8=typeof Y2==="function"?Y2:w4("getAgentModels",{current:null,models:[]});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});G0.register(z1);U1();var b8=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(b8)G0.register(H1);function S8(){let[_,$]=f("disconnected"),[J,Y]=f(null),[X,Z]=f(null),[K,G]=f(!1),[V,W]=f([]),[Q,L]=f([]),{agentStatus:H,setAgentStatus:E,agentDraft:F,setAgentDraft:I,agentPlan:S,setAgentPlan:U,agentThought:y,setAgentThought:D,pendingRequest:M,setPendingRequest:u,currentTurnId:i,setCurrentTurnId:p,steerQueuedTurnId:a,setSteerQueuedTurnId:Q_,lastAgentEventRef:l,lastSilenceNoticeRef:$_,isAgentRunningRef:z_,draftBufferRef:e,thoughtBufferRef:j_,pendingRequestRef:H_,stalledPostIdRef:y_,currentTurnIdRef:J_,steerQueuedTurnIdRef:t,thoughtExpandedRef:G_,draftExpandedRef:Z_}=B4(),[O_,K_]=f({}),[M_,B_]=f(null),[E_,x_]=f(null),[N_,v_]=f(!1),[D_,F_]=f(null),{notificationsEnabled:P_,notificationPermission:N0,toggleNotifications:g_,notify:k_}=N4(),[h_,D0]=f(()=>new Set),[c_,Z0]=f(()=>d0("workspaceOpen",!0)),{editorOpen:l_,tabStripTabs:C_,tabStripActiveId:w,previewTabs:s,openEditor:p_,closeEditor:q0,handleTabClose:$0,handleTabActivate:M0,handleTabCloseOthers:B0,handleTabCloseAll:z0,handleTabTogglePin:o_,handleTabTogglePreview:V0,revealInExplorer:U0}=U4({onTabClosed:C0}),a_=A(null),L_=A(null);m(()=>{let O=a_.current;if(!O)return;if(L_.current)L_.current.dispose(),L_.current=null;let q=w;if(!q)return;let P={path:q,mode:"edit"},R=G0.resolve(P)||G0.get("editor");if(!R){O.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let g=R.mount(O,P);L_.current=g,g.onDirtyChange?.((h)=>{U_.setDirty(q,h)}),g.onSaveRequest?.(()=>{}),g.onClose?.(()=>{q0()});let T=U_.getViewState(q);if(T&&typeof g.restoreViewState==="function")requestAnimationFrame(()=>g.restoreViewState(T));if(typeof g.onViewStateChange==="function")g.onViewStateChange((h)=>{U_.saveViewState(q,h)});return requestAnimationFrame(()=>g.focus()),()=>{if(L_.current===g)g.dispose(),L_.current=null}},[w,q0]);let[W0,f0]=f({name:"You",avatar_url:null,avatar_background:null}),H0=A(!1),J0=A(!1),X0=A({}),v0=A({name:null,avatar_url:null}),R_=A({currentHashtag:null,searchQuery:null}),n_=A(null),F0=A(null),R0=A(0),L0=A(0),w0=A(0),T_=A(null),d_=A(null),Y0=A(null),u_=A(0),m_=A({title:null,avatarBase:null});C4(30000),m(()=>{return y3()},[]),m(()=>{S_("workspaceOpen",String(c_))},[c_]),m(()=>{X0.current=O_||{}},[O_]),m(()=>{v0.current=W0||{name:"You",avatar_url:null,avatar_background:null}},[W0]);let r_=b((O,q,P=null)=>{if(typeof document>"u")return;let R=(O||"").trim()||"PiClaw";if(m_.current.title!==R){document.title=R;let w_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(w_&&w_.getAttribute("content")!==R)w_.setAttribute("content",R);m_.current.title=R}let g=document.getElementById("dynamic-favicon");if(!g)return;let T=g.getAttribute("data-default")||g.getAttribute("href")||"/favicon.ico",h=q||T,W_=q?`${h}|${P||""}`:h;if(m_.current.avatarBase!==W_){let w_=q?`${h}${h.includes("?")?"&":"?"}v=${P||Date.now()}`:h;g.setAttribute("href",w_),m_.current.avatarBase=W_}},[]),O0=b((O)=>{if(!O)return;W((q)=>q.includes(O)?q:[...q,O])},[]),C0=b((O)=>{W((q)=>q.filter((P)=>P!==O))},[]),P0=b(()=>{W([])},[]),c0=b(()=>{let O=w;if(O)O0(O)},[w,O0]),z=b((O)=>{if(!O)return;L((q)=>q.includes(O)?q:[...q,O])},[]),x=b((O)=>{L((q)=>q.filter((P)=>P!==O))},[]),n=b(()=>{L([])},[]),__=b((O={})=>{let q=Date.now();if(l.current=q,O.running)z_.current=!0;if(O.clearSilence)$_.current=0},[]),V_=b(()=>{if(Y0.current)clearTimeout(Y0.current),Y0.current=null;u_.current=0},[]);m(()=>()=>{V_()},[V_]);let I_=b(()=>{V_(),E((O)=>{if(!O)return O;if(!(O.last_activity||O.lastActivity))return O;let{last_activity:q,lastActivity:P,...R}=O;return R})},[V_]),q_=b((O)=>{if(!O)return;V_();let q=Date.now();u_.current=q,E({type:O.type||"active",last_activity:!0}),Y0.current=setTimeout(()=>{if(u_.current!==q)return;E((P)=>{if(!P||!(P.last_activity||P.lastActivity))return P;return null})},L4)},[V_]),b_=b(()=>{z_.current=!1,l.current=null,$_.current=0,e.current="",j_.current="",H_.current=null,d_.current=null,J_.current=null,t.current=null,V_(),p(null),Q_(null),G_.current=!1,Z_.current=!1},[V_,p,Q_]),f_=b((O)=>{if(!O)return;if(J_.current===O)return;J_.current=O,p(O),t.current=null,Q_(null),e.current="",j_.current="",I({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),u(null),H_.current=null,d_.current=null,G_.current=!1,Z_.current=!1},[p,Q_]),y0=b((O)=>{if(typeof document<"u"){let w_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&w_)return}let q=d_.current;if(!q||!q.post)return;if(O&&q.turnId&&q.turnId!==O)return;let P=q.post;if(P.id&&T_.current===P.id)return;let R=String(P?.data?.content||"").trim();if(!R)return;T_.current=P.id||T_.current,d_.current=null;let g=R.replace(/\s+/g," ").slice(0,200),T=X0.current||{},W_=(P?.data?.agent_id?T[P.data.agent_id]:null)?.name||"Pi";k_(W_,g)},[k_]),Q0=b(async(O,q)=>{if(O!=="thought"&&O!=="draft")return;let P=J_.current;if(O==="thought"){if(G_.current=q,P)try{await A4(P,"thought",q)}catch(R){console.warn("Failed to update thought visibility:",R)}if(!q)return;try{let R=P?await k4(P,"thought"):null;if(R?.text)j_.current=R.text;D((g)=>({...g||{text:"",totalLines:0},fullText:j_.current||g?.fullText||"",totalLines:Number.isFinite(R?.total_lines)?R.total_lines:g?.totalLines||0}))}catch(R){console.warn("Failed to fetch full thought:",R)}return}if(Z_.current=q,P)try{await A4(P,"draft",q)}catch(R){console.warn("Failed to update draft visibility:",R)}if(!q)return;try{let R=P?await k4(P,"draft"):null;if(R?.text)e.current=R.text;I((g)=>({...g||{text:"",totalLines:0},fullText:e.current||g?.fullText||"",totalLines:Number.isFinite(R?.total_lines)?R.total_lines:g?.totalLines||0}))}catch(R){console.warn("Failed to fetch full draft:",R)}},[]),A_=A(null),E0=b(()=>{if(n_.current)n_.current.scrollTop=0},[]);A_.current=E0;let e0=b((O)=>{let q=n_.current;if(!q||typeof O!=="function"){O?.();return}let{currentHashtag:P,searchQuery:R}=R_.current||{},g=!(R&&!P),T=g?q.scrollHeight-q.scrollTop:q.scrollTop;O(),requestAnimationFrame(()=>{let h=n_.current;if(!h)return;if(g){let W_=Math.max(h.scrollHeight-T,0);h.scrollTop=W_}else{let W_=Math.max(h.scrollHeight-h.clientHeight,0),w_=Math.min(T,W_);h.scrollTop=w_}})},[]),I0=b((O)=>{let q=n_.current;if(!q||typeof O!=="function"){O?.();return}let P=q.scrollTop;O(),requestAnimationFrame(()=>{let R=n_.current;if(!R)return;let g=Math.max(R.scrollHeight-R.clientHeight,0);R.scrollTop=Math.min(P,g)})},[]),{posts:b0,setPosts:s_,hasMore:u0,setHasMore:v2,hasMoreRef:j2,loadPosts:t_,refreshTimeline:K0,loadMore:R2,loadMoreRef:G2}=q4({preserveTimelineScroll:e0,preserveTimelineScrollTop:I0}),m0=b(()=>{let O=y_.current;if(!O)return;s_((q)=>q?q.filter((P)=>P.id!==O):q),y_.current=null},[s_]),{handleSplitterMouseDown:u2,handleSplitterTouchStart:m2,handleEditorSplitterMouseDown:g2,handleEditorSplitterTouchStart:c2,handleDockSplitterMouseDown:p2,handleDockSplitterTouchStart:p0}=z4({appShellRef:F0,sidebarWidthRef:R0,editorWidthRef:L0,dockHeightRef:w0}),h0=b(()=>{if(!z_.current)return;z_.current=!1,$_.current=0,l.current=null,J_.current=null,p(null),G_.current=!1,Z_.current=!1;let O=(e.current||"").trim();if(e.current="",j_.current="",I({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),u(null),H_.current=null,d_.current=null,!O){E({type:"error",title:"Response stalled — No content received"});return}let P=`${O}${`

⚠️ Response may be incomplete — the model stopped responding`}`,R=Date.now(),g=new Date().toISOString(),T={id:R,timestamp:g,data:{type:"agent_response",content:P,agent_id:"default",is_local_stall:!0}};y_.current=R,s_((h)=>h?K2([...h,T]):[T]),A_.current?.(),E(null)},[p]);m(()=>{R_.current={currentHashtag:J,searchQuery:X}},[J,X]),m(()=>{let O=Math.min(1000,Math.max(100,Math.floor(L1/2))),q=setInterval(()=>{if(!z_.current)return;if(H_.current)return;let P=l.current;if(!P)return;let R=Date.now(),g=R-P;if(g>=H4){h0();return}if(g>=L1){if(R-$_.current>=F4){let T=Math.floor(g/1000);E({type:"waiting",title:`Waiting for model… No events for ${T}s`}),$_.current=R}}},O);return()=>clearInterval(q)},[h0]);let _2=b(async()=>{try{let O=await E1();if(O)F_(O)}catch(O){console.warn("Failed to fetch agent context:",O)}},[]),S0=b(async()=>{try{let O=await M4("web:default");if(!O||O.status!=="active"||!O.data){if(J0.current){let{currentHashtag:R,searchQuery:g}=R_.current||{};if(!R&&!g)K0()}J0.current=!1,b_(),E(null),I({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),u(null),H_.current=null;return}J0.current=!0;let q=O.data,P=q.turn_id||q.turnId;if(P)f_(P);if(__({running:!0,clearSilence:!0}),I_(),E(q),O.thought&&O.thought.text)D((R)=>{if(R&&R.text&&R.text.length>=O.thought.text.length)return R;return j_.current=O.thought.text,{text:O.thought.text,totalLines:O.thought.totalLines||0}});if(O.draft&&O.draft.text)I((R)=>{if(R&&R.text&&R.text.length>=O.draft.text.length)return R;return e.current=O.draft.text,{text:O.draft.text,totalLines:O.draft.totalLines||0}})}catch(O){console.warn("Failed to fetch agent status:",O)}},[b_,I_,__,K0,f_]),i0=b((O)=>{if($(O),O!=="connected"){E(null),I({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),u(null),H_.current=null,b_();return}if(!H0.current){H0.current=!0,S0();return}let{currentHashtag:q,searchQuery:P}=R_.current;if(!q&&!P)K0();S0()},[b_,K0,S0]),h2=b(async(O)=>{Y(O),s_(null),await t_(O)},[t_]),i2=b(async()=>{Y(null),Z(null),s_(null),await t_()},[t_]),l2=b(async(O)=>{if(!O||!O.trim())return;Z(O.trim()),Y(null),s_(null);try{let q=await w8(O.trim());s_(q.results),v2(!1)}catch(q){console.error("Failed to search:",q),s_([])}},[]),o2=b(()=>{G(!0),Z(null),Y(null),s_([])},[]),n2=b(()=>{G(!1),Z(null),t_()},[t_]),D1=b(()=>{},[]),j=b(async(O)=>{if(!O)return;let q=O.id,P=b0?.filter((g)=>g?.data?.thread_id===q&&g?.id!==q).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let R=(g)=>{if(!g.length)return;D0((h)=>{let W_=new Set(h);return g.forEach((w_)=>W_.add(w_)),W_}),setTimeout(()=>{if(I0(()=>{s_((h)=>h?h.filter((W_)=>!g.includes(W_.id)):h)}),D0((h)=>{let W_=new Set(h);return g.forEach((w_)=>W_.delete(w_)),W_}),j2.current)G2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await y4(q,P>0);if(g?.ids?.length)R(g.ids)}catch(g){let T=g?.message||"";if(P===0&&T.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let W_=await y4(q,!0);if(W_?.ids?.length)R(W_.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${T}`)}},[b0,I0]),B=b(async()=>{try{let O=await P8();K_(E4(O));let q=O?.user||{};f0((R)=>{let g=typeof q.name==="string"&&q.name.trim()?q.name.trim():"You",T=typeof q.avatar_url==="string"?q.avatar_url.trim():null,h=typeof q.avatar_background==="string"&&q.avatar_background.trim()?q.avatar_background.trim():null;if(R.name===g&&R.avatar_url===T&&R.avatar_background===h)return R;return{name:g,avatar_url:T,avatar_background:h}});let P=(O?.agents||[]).find((R)=>R.id==="default");if(P?.model)B_(P.model);r_(P?.name,P?.avatar_url)}catch(O){console.warn("Failed to load agents:",O)}try{let O=await E1();if(O)F_(O)}catch{}},[r_]);m(()=>{B();let O=r0("sidebarWidth",null),q=Number.isFinite(O)?Math.min(Math.max(O,160),600):280;if(R0.current=q,F0.current)F0.current.style.setProperty("--sidebar-width",`${q}px`)},[B]);let k=b((O)=>{if(!O||typeof O!=="object")return;let q=O.agent_id;if(!q)return;let{agent_name:P,agent_avatar:R}=O;if(!P&&R===void 0)return;let g=X0.current?.[q]||{id:q},T=g.name||null,h=g.avatar_url??g.avatarUrl??g.avatar??null,W_=!1,w_=!1;if(P&&P!==g.name)T=P,w_=!0;if(R!==void 0){let l0=typeof R==="string"?R.trim():null,C1=typeof h==="string"?h.trim():null,o0=l0||null;if(o0!==(C1||null))h=o0,W_=!0}if(!w_&&!W_)return;if(K_((l0)=>{let o0={...l0[q]||{id:q}};if(w_)o0.name=T;if(W_)o0.avatar_url=h;return{...l0,[q]:o0}}),q==="default")r_(T,h,W_?Date.now():null)},[r_]),C=b((O)=>{if(!O||typeof O!=="object")return;let q=O.user_name??O.userName,P=O.user_avatar??O.userAvatar,R=O.user_avatar_background??O.userAvatarBackground;if(q===void 0&&P===void 0&&R===void 0)return;f0((g)=>{let T=typeof q==="string"&&q.trim()?q.trim():g.name||"You",h=P===void 0?g.avatar_url:typeof P==="string"&&P.trim()?P.trim():null,W_=R===void 0?g.avatar_background:typeof R==="string"&&R.trim()?R.trim():null;if(g.name===T&&g.avatar_url===h&&g.avatar_background===W_)return g;return{name:T,avatar_url:h,avatar_background:W_}})},[]),v=b((O)=>{if(!O||typeof O!=="object")return;let q=O.model??O.current;if(q!==void 0)B_(q);if(O.thinking_level!==void 0)x_(O.thinking_level??null);if(O.supports_thinking!==void 0)v_(Boolean(O.supports_thinking))},[]),c=b(()=>{I8().then((O)=>{if(O)v(O)}).catch(()=>{})},[v]),d=b((O,q)=>{let P=q?.turn_id;if(k(q),C(q),O==="ui_theme"){k3(q);return}if(O?.startsWith("agent_"))I_();if(O==="connected"){E(null),I({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),u(null),H_.current=null,b_(),M4("web:default").then((T)=>{if(!T||T.status!=="active"||!T.data)return;let h=T.data,W_=h.turn_id||h.turnId;if(W_)f_(W_);if(__({clearSilence:!0}),q_(h),T.thought&&T.thought.text)j_.current=T.thought.text,D({text:T.thought.text,totalLines:T.thought.totalLines||0});if(T.draft&&T.draft.text)e.current=T.draft.text,I({text:T.draft.text,totalLines:T.draft.totalLines||0})}).catch((T)=>{console.warn("Failed to fetch agent status:",T)}),c();return}if(O==="agent_status"){if(q.type==="done"||q.type==="error"){if(P&&J_.current&&P!==J_.current)return;if(q.type==="done"){y0(P||J_.current);let{currentHashtag:T,searchQuery:h}=R_.current||{};if(!T&&!h)K0();if(q.context_usage)F_(q.context_usage)}if(J0.current=!1,b_(),I({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),u(null),q.type==="error")E({type:"error",title:q.title||"Agent error"}),setTimeout(()=>E(null),8000);else E(null)}else{if(P)f_(P);if(__({running:!0,clearSilence:!0}),q.type==="thinking")e.current="",j_.current="",I({text:"",totalLines:0}),U(""),D({text:"",totalLines:0});E(q)}return}if(O==="agent_steer_queued"){if(P&&J_.current&&P!==J_.current)return;let T=P||J_.current;if(!T)return;t.current=T,Q_(T);return}if(O==="agent_draft_delta"){if(P&&J_.current&&P!==J_.current)return;if(P&&!J_.current)f_(P);if(__({running:!0,clearSilence:!0}),q?.reset)e.current="";if(q?.delta)e.current+=q.delta;if(Z_.current){let T=e.current;I((h)=>({text:h?.text||"",totalLines:f2(T),fullText:T}))}else{let T=e.current,h=f2(T);I({text:T,totalLines:h})}return}if(O==="agent_draft"){if(P&&J_.current&&P!==J_.current)return;if(P&&!J_.current)f_(P);__({running:!0,clearSilence:!0});let T=q.text||"",h=q.mode||(q.kind==="plan"?"replace":"append"),W_=Number.isFinite(q.total_lines)?q.total_lines:T?T.replace(/\r\n/g,`
`).split(`
`).length:0;if(q.kind==="plan")if(h==="replace")U(T);else U((w_)=>(w_||"")+T);else if(!Z_.current)e.current=T,I({text:T,totalLines:W_});return}if(O==="agent_thought_delta"){if(P&&J_.current&&P!==J_.current)return;if(P&&!J_.current)f_(P);if(__({running:!0,clearSilence:!0}),q?.reset)j_.current="";if(typeof q?.delta==="string")j_.current+=q.delta;if(G_.current){let T=j_.current;D((h)=>({text:h?.text||"",totalLines:f2(T),fullText:T}))}return}if(O==="agent_thought"){if(P&&J_.current&&P!==J_.current)return;if(P&&!J_.current)f_(P);__({running:!0,clearSilence:!0});let T=q.text||"",h=Number.isFinite(q.total_lines)?q.total_lines:T?T.replace(/\r\n/g,`
`).split(`
`).length:0;if(!G_.current)j_.current=T,D({text:T,totalLines:h});return}if(O==="agent_request"){if(console.log("Agent request:",q),P&&J_.current&&P!==J_.current)return;if(P)f_(P);__({running:!0,clearSilence:!0}),u(q),H_.current=q;return}if(O==="agent_request_timeout"){if(console.log("Agent request timeout:",q),P&&J_.current&&P!==J_.current)return;u(null),H_.current=null,b_(),E({type:"error",title:"Permission request timed out"});return}if(O==="model_changed"){if(q?.model!==void 0)B_(q.model);if(q?.thinking_level!==void 0)x_(q.thinking_level??null);if(q?.supports_thinking!==void 0)v_(Boolean(q.supports_thinking));E1().then((T)=>{if(T)F_(T)}).catch(()=>{});return}if(O==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:q}));return}let{currentHashtag:R,searchQuery:g}=R_.current;if(O==="agent_response")m0(),d_.current={post:q,turnId:J_.current};if(!R&&!g&&(O==="new_post"||O==="agent_response"))s_((T)=>{if(!T)return[q];if(T.some((h)=>h.id===q.id))return T;return[...T,q]}),A_.current?.();if(O==="interaction_updated")s_((T)=>T?T.map((h)=>h.id===q.id?q:h):T);if(O==="interaction_deleted"){let T=q?.ids||[];if(T.length){I0(()=>{s_((w_)=>w_?w_.filter((l0)=>!T.includes(l0.id)):w_)});let{currentHashtag:h,searchQuery:W_}=R_.current;if(j2.current&&!h&&!W_)G2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[b_,I_,__,y0,I0,K0,m0,f_,q_,k,C,c]);m(()=>{if(typeof window>"u")return;let O=window.__PICLAW_TEST_API||{};return O.emit=d,O.reset=()=>{m0(),b_(),E(null),I({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),u(null)},O.finalize=()=>h0(),window.__PICLAW_TEST_API=O,()=>{if(window.__PICLAW_TEST_API===O)window.__PICLAW_TEST_API=void 0}},[b_,h0,d,m0]),O4({handleSseEvent:d,handleConnectionStatusChange:i0,loadPosts:t_}),m(()=>{if(!b0||b0.length===0)return;let O=location.hash;if(!O||!O.startsWith("#msg-"))return;let q=document.getElementById(O.slice(1).replace("msg-","post-"));if(q)q.scrollIntoView({behavior:"smooth",block:"center"}),q.classList.add("post-highlight"),setTimeout(()=>q.classList.remove("post-highlight"),2000),history.replaceState(null,"",location.pathname+location.search)},[b0]);let r=H!==null;m(()=>{if(_!=="connected")return;let q=setInterval(()=>{if(r)S0(),_2();else{let{currentHashtag:P,searchQuery:R}=R_.current||{};if(!P&&!R)K0();S0(),_2()}},r?15000:60000);return()=>clearInterval(q)},[_,r,S0,_2,K0]);let o=b(()=>{Z0((O)=>!O)},[]);m(()=>{if(!l_)return;if(typeof window>"u")return;let O=F0.current;if(!O)return;if(!L0.current){let q=r0("editorWidth",null),P=R0.current||280;L0.current=Number.isFinite(q)?q:P}if(O.style.setProperty("--editor-width",`${L0.current}px`),!w0.current){let q=r0("dockHeight",null);w0.current=Number.isFinite(q)?q:200}O.style.setProperty("--dock-height",`${w0.current}px`)},[l_]);let Y_=G0.getDockPanes().length>0,[e_,_0]=f(!1),V2=b(()=>_0((O)=>!O),[]);m(()=>{if(!Y_)return;let O=(q)=>{if(q.ctrlKey&&q.key==="`")q.preventDefault(),V2()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[V2,Y_]);let P4=Boolean(a&&a===(H?.turn_id||i));return N`
        <div class=${`app-shell${c_?"":" workspace-collapsed"}${l_?" editor-open":""}`} ref=${F0}>
            <${Z4}
                onFileSelect=${O0}
                visible=${c_}
                active=${c_||l_}
                onOpenEditor=${p_}
            />
            <button
                class=${`workspace-toggle-tab${c_?" open":" closed"}`}
                onClick=${o}
                title=${c_?"Hide workspace":"Show workspace"}
                aria-label=${c_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${u2} onTouchStart=${m2}></div>
            ${l_&&N`
                <div class="editor-pane-container">
                    <${X4}
                        tabs=${C_}
                        activeId=${w}
                        onActivate=${M0}
                        onClose=${$0}
                        onCloseOthers=${B0}
                        onCloseAll=${z0}
                        onTogglePin=${o_}
                        onTogglePreview=${V0}
                        previewTabs=${s}
                        onToggleDock=${Y_?V2:void 0}
                        dockVisible=${Y_&&e_}
                    />
                    <div class="editor-pane-host" ref=${a_}></div>
                    ${w&&s.has(w)&&N`
                        <${Q4}
                            getContent=${()=>L_.current?.getContent?.()}
                            path=${w}
                            onClose=${()=>V0(w)}
                        />
                    `}
                    ${Y_&&e_&&N`<div class="dock-splitter" onMouseDown=${p2} onTouchStart=${p0}></div>`}
                    ${Y_&&N`<div class=${`dock-panel${e_?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${V2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="12" x2="12" y2="4"/>
                                    <polyline points="4 4 12 4 12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body">
                            <div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>
                        </div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${g2} onTouchStart=${c2}></div>
            `}
            <div class="container">
                ${X&&D4()&&N`<div class="search-results-spacer"></div>`}
                ${(J||X)&&N`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${i2}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${J?`#${J}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${l3} 
                    posts=${b0}
                    hasMore=${u0}
                    onLoadMore=${R2}
                    timelineRef=${n_}
                    onHashtagClick=${h2}
                    onMessageRef=${z}
                    onPostClick=${void 0}
                    onDeletePost=${j}
                    emptyMessage=${J?`No posts with #${J}`:X?`No results for "${X}"`:void 0}
                    agents=${O_}
                    user=${W0}
                    reverse=${!(X&&!J)}
                    removingPostIds=${h_}
                    searchQuery=${X}
                />
                <${m3}
                    status=${H}
                    draft=${F}
                    plan=${S}
                    thought=${y}
                    pendingRequest=${M}
                    turnId=${i}
                    steerQueued=${P4}
                    onPanelToggle=${Q0}
                />
                <${U3} 
                    onPost=${()=>{t_(),E0()}}
                    onFocus=${E0}
                    searchMode=${K}
                    onSearch=${l2}
                    onEnterSearch=${o2}
                    onExitSearch=${n2}
                    fileRefs=${V}
                    onRemoveFileRef=${C0}
                    onClearFileRefs=${P0}
                    messageRefs=${Q}
                    onRemoveMessageRef=${x}
                    onClearMessageRefs=${n}
                    activeEditorPath=${w}
                    onAttachEditorFile=${c0}
                    activeModel=${M_}
                    thinkingLevel=${E_}
                    supportsThinking=${N_}
                    contextUsage=${D_}
                    notificationsEnabled=${P_}
                    notificationPermission=${N0}
                    onToggleNotifications=${g_}
                    onModelChange=${B_}
                    onModelStateChange=${v}
                />
                <${c3} status=${_} />
                <${g3}
                    request=${M}
                    onRespond=${()=>{u(null),H_.current=null}}
                />
            </div>
        </div>
    `}r1(N`<${S8} />`,document.getElementById("app"));

//# debugId=BE8B5466B01C9CFD64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
