var i4=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,J)=>(typeof require<"u"?require:$)[J]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var w2,K_,n1,N2,d1,T1,l4,k2={},r1=[],o4=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function g0(_,$){for(var J in $)_[J]=$[J];return _}function s1(_){var $=_.parentNode;$&&$.removeChild(_)}function a1(_,$,J){var Z,X,Y,G={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?X=$[Y]:G[Y]=$[Y];if(arguments.length>2&&(G.children=arguments.length>3?w2.call(arguments,2):J),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)G[Y]===void 0&&(G[Y]=_.defaultProps[Y]);return D2(_,G,Z,X,null)}function D2(_,$,J,Z,X){var Y={type:_,props:$,key:J,ref:Z,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++n1:X};return K_.vnode!=null&&K_.vnode(Y),Y}function M2(_){return _.children}function C2(_,$){this.props=_,this.context=$}function $2(_,$){if($==null)return _.__?$2(_.__,_.__.__k.indexOf(_)+1):null;for(var J;$<_.__k.length;$++)if((J=_.__k[$])!=null&&J.__e!=null)return J.__e;return typeof _.type=="function"?$2(_):null}function t1(_){var $,J;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((J=_.__k[$])!=null&&J.__e!=null){_.__e=_.__c.base=J.__e;break}return t1(_)}}function f1(_){(!_.__d&&(_.__d=!0)&&N2.push(_)&&!A2.__r++||T1!==K_.debounceRendering)&&((T1=K_.debounceRendering)||d1)(A2)}function A2(){for(var _;A2.__r=N2.length;)_=N2.sort(function($,J){return $.__v.__b-J.__v.__b}),N2=[],_.some(function($){var J,Z,X,Y,G,j;$.__d&&(G=(Y=(J=$).__v).__e,(j=J.__P)&&(Z=[],(X=g0({},Y)).__v=Y.__v+1,X1(j,Y,X,J.__n,j.ownerSVGElement!==void 0,Y.__h!=null?[G]:null,Z,G==null?$2(Y):G,Y.__h),J3(Z,Y),Y.__e!=G&&t1(Y)))})}function e1(_,$,J,Z,X,Y,G,j,K,W){var Q,z,D,L,E,w,b,U=Z&&Z.__k||r1,A=U.length;for(J.__k=[],Q=0;Q<$.length;Q++)if((L=J.__k[Q]=(L=$[Q])==null||typeof L=="boolean"?null:typeof L=="string"||typeof L=="number"||typeof L=="bigint"?D2(null,L,null,null,L):Array.isArray(L)?D2(M2,{children:L},null,null,null):L.__b>0?D2(L.type,L.props,L.key,null,L.__v):L)!=null){if(L.__=J,L.__b=J.__b+1,(D=U[Q])===null||D&&L.key==D.key&&L.type===D.type)U[Q]=void 0;else for(z=0;z<A;z++){if((D=U[z])&&L.key==D.key&&L.type===D.type){U[z]=void 0;break}D=null}X1(_,L,D=D||k2,X,Y,G,j,K,W),E=L.__e,(z=L.ref)&&D.ref!=z&&(b||(b=[]),D.ref&&b.push(D.ref,null,L),b.push(z,L.__c||E,L)),E!=null?(w==null&&(w=E),typeof L.type=="function"&&L.__k!=null&&L.__k===D.__k?L.__d=K=_3(L,K,_):K=$3(_,L,D,U,E,K),W||J.type!=="option"?typeof J.type=="function"&&(J.__d=K):_.value=""):K&&D.__e==K&&K.parentNode!=_&&(K=$2(D))}for(J.__e=w,Q=A;Q--;)U[Q]!=null&&(typeof J.type=="function"&&U[Q].__e!=null&&U[Q].__e==J.__d&&(J.__d=$2(Z,Q+1)),Y3(U[Q],U[Q]));if(b)for(Q=0;Q<b.length;Q++)Z3(b[Q],b[++Q],b[++Q])}function _3(_,$,J){var Z,X;for(Z=0;Z<_.__k.length;Z++)(X=_.__k[Z])&&(X.__=_,$=typeof X.type=="function"?_3(X,$,J):$3(J,X,X,_.__k,X.__e,$));return $}function $3(_,$,J,Z,X,Y){var G,j,K;if($.__d!==void 0)G=$.__d,$.__d=void 0;else if(J==null||X!=Y||X.parentNode==null)_:if(Y==null||Y.parentNode!==_)_.appendChild(X),G=null;else{for(j=Y,K=0;(j=j.nextSibling)&&K<Z.length;K+=2)if(j==X)break _;_.insertBefore(X,Y),G=Y}return G!==void 0?G:X.nextSibling}function v1(_,$,J){$[0]==="-"?_.setProperty($,J):_[$]=J==null?"":typeof J!="number"||o4.test($)?J:J+"px"}function E2(_,$,J,Z,X){var Y;_:if($==="style")if(typeof J=="string")_.style.cssText=J;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)J&&$ in J||v1(_.style,$,"");if(J)for($ in J)Z&&J[$]===Z[$]||v1(_.style,$,J[$])}else if($[0]==="o"&&$[1]==="n")Y=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=J,J?Z||_.addEventListener($,Y?u1:R1,Y):_.removeEventListener($,Y?u1:R1,Y);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=J==null?"":J;break _}catch(G){}typeof J=="function"||(J!=null&&(J!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,J):_.removeAttribute($))}}function R1(_){this.l[_.type+!1](K_.event?K_.event(_):_)}function u1(_){this.l[_.type+!0](K_.event?K_.event(_):_)}function X1(_,$,J,Z,X,Y,G,j,K){var W,Q,z,D,L,E,w,b,U,A,f,F=$.type;if($.constructor!==void 0)return null;J.__h!=null&&(K=J.__h,j=$.__e=J.__e,$.__h=null,Y=[j]),(W=K_.__b)&&W($);try{_:if(typeof F=="function"){if(b=$.props,U=(W=F.contextType)&&Z[W.__c],A=W?U?U.props.value:W.__:Z,J.__c?w=(Q=$.__c=J.__c).__=Q.__E:(("prototype"in F)&&F.prototype.render?$.__c=Q=new F(b,A):($.__c=Q=new C2(b,A),Q.constructor=F,Q.render=d4),U&&U.sub(Q),Q.props=b,Q.state||(Q.state={}),Q.context=A,Q.__n=Z,z=Q.__d=!0,Q.__h=[]),Q.__s==null&&(Q.__s=Q.state),F.getDerivedStateFromProps!=null&&(Q.__s==Q.state&&(Q.__s=g0({},Q.__s)),g0(Q.__s,F.getDerivedStateFromProps(b,Q.__s))),D=Q.props,L=Q.state,z)F.getDerivedStateFromProps==null&&Q.componentWillMount!=null&&Q.componentWillMount(),Q.componentDidMount!=null&&Q.__h.push(Q.componentDidMount);else{if(F.getDerivedStateFromProps==null&&b!==D&&Q.componentWillReceiveProps!=null&&Q.componentWillReceiveProps(b,A),!Q.__e&&Q.shouldComponentUpdate!=null&&Q.shouldComponentUpdate(b,Q.__s,A)===!1||$.__v===J.__v){Q.props=b,Q.state=Q.__s,$.__v!==J.__v&&(Q.__d=!1),Q.__v=$,$.__e=J.__e,$.__k=J.__k,$.__k.forEach(function(T){T&&(T.__=$)}),Q.__h.length&&G.push(Q);break _}Q.componentWillUpdate!=null&&Q.componentWillUpdate(b,Q.__s,A),Q.componentDidUpdate!=null&&Q.__h.push(function(){Q.componentDidUpdate(D,L,E)})}Q.context=A,Q.props=b,Q.state=Q.__s,(W=K_.__r)&&W($),Q.__d=!1,Q.__v=$,Q.__P=_,W=Q.render(Q.props,Q.state,Q.context),Q.state=Q.__s,Q.getChildContext!=null&&(Z=g0(g0({},Z),Q.getChildContext())),z||Q.getSnapshotBeforeUpdate==null||(E=Q.getSnapshotBeforeUpdate(D,L)),f=W!=null&&W.type===M2&&W.key==null?W.props.children:W,e1(_,Array.isArray(f)?f:[f],$,J,Z,X,Y,G,j,K),Q.base=$.__e,$.__h=null,Q.__h.length&&G.push(Q),w&&(Q.__E=Q.__=null),Q.__e=!1}else Y==null&&$.__v===J.__v?($.__k=J.__k,$.__e=J.__e):$.__e=n4(J.__e,$,J,Z,X,Y,G,K);(W=K_.diffed)&&W($)}catch(T){$.__v=null,(K||Y!=null)&&($.__e=j,$.__h=!!K,Y[Y.indexOf(j)]=null),K_.__e(T,$,J)}}function J3(_,$){K_.__c&&K_.__c($,_),_.some(function(J){try{_=J.__h,J.__h=[],_.some(function(Z){Z.call(J)})}catch(Z){K_.__e(Z,J.__v)}})}function n4(_,$,J,Z,X,Y,G,j){var K,W,Q,z=J.props,D=$.props,L=$.type,E=0;if(L==="svg"&&(X=!0),Y!=null){for(;E<Y.length;E++)if((K=Y[E])&&(K===_||(L?K.localName==L:K.nodeType==3))){_=K,Y[E]=null;break}}if(_==null){if(L===null)return document.createTextNode(D);_=X?document.createElementNS("http://www.w3.org/2000/svg",L):document.createElement(L,D.is&&D),Y=null,j=!1}if(L===null)z===D||j&&_.data===D||(_.data=D);else{if(Y=Y&&w2.call(_.childNodes),W=(z=J.props||k2).dangerouslySetInnerHTML,Q=D.dangerouslySetInnerHTML,!j){if(Y!=null)for(z={},E=0;E<_.attributes.length;E++)z[_.attributes[E].name]=_.attributes[E].value;(Q||W)&&(Q&&(W&&Q.__html==W.__html||Q.__html===_.innerHTML)||(_.innerHTML=Q&&Q.__html||""))}if(function(w,b,U,A,f){var F;for(F in U)F==="children"||F==="key"||F in b||E2(w,F,null,U[F],A);for(F in b)f&&typeof b[F]!="function"||F==="children"||F==="key"||F==="value"||F==="checked"||U[F]===b[F]||E2(w,F,b[F],U[F],A)}(_,D,z,X,j),Q)$.__k=[];else if(E=$.props.children,e1(_,Array.isArray(E)?E:[E],$,J,Z,X&&L!=="foreignObject",Y,G,Y?Y[0]:J.__k&&$2(J,0),j),Y!=null)for(E=Y.length;E--;)Y[E]!=null&&s1(Y[E]);j||(("value"in D)&&(E=D.value)!==void 0&&(E!==_.value||L==="progress"&&!E)&&E2(_,"value",E,z.value,!1),("checked"in D)&&(E=D.checked)!==void 0&&E!==_.checked&&E2(_,"checked",E,z.checked,!1))}return _}function Z3(_,$,J){try{typeof _=="function"?_($):_.current=$}catch(Z){K_.__e(Z,J)}}function Y3(_,$,J){var Z,X;if(K_.unmount&&K_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!==_.__e||Z3(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){K_.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(X=0;X<Z.length;X++)Z[X]&&Y3(Z[X],$,typeof _.type!="function");J||_.__e==null||s1(_.__e),_.__e=_.__d=void 0}function d4(_,$,J){return this.constructor(_,J)}function X3(_,$,J){var Z,X,Y;K_.__&&K_.__(_,$),X=(Z=typeof J=="function")?null:J&&J.__k||$.__k,Y=[],X1($,_=(!Z&&J||$).__k=a1(M2,null,[_]),X||k2,k2,$.ownerSVGElement!==void 0,!Z&&J?[J]:X?null:$.firstChild?w2.call($.childNodes):null,Y,!Z&&J?J:X?X.__e:$.firstChild,Z),J3(Y,_)}w2=r1.slice,K_={__e:function(_,$){for(var J,Z,X;$=$.__;)if((J=$.__c)&&!J.__)try{if((Z=J.constructor)&&Z.getDerivedStateFromError!=null&&(J.setState(Z.getDerivedStateFromError(_)),X=J.__d),J.componentDidCatch!=null&&(J.componentDidCatch(_),X=J.__d),X)return J.__E=J}catch(Y){_=Y}throw _}},n1=0,C2.prototype.setState=function(_,$){var J;J=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=g0({},this.state),typeof _=="function"&&(_=_(g0({},J),this.props)),_&&g0(J,_),_!=null&&this.__v&&($&&this.__h.push($),f1(this))},C2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),f1(this))},C2.prototype.render=M2,N2=[],d1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,A2.__r=0,l4=0;var P2,U0,m1,q2=0,Z1=[],g1=K_.__b,c1=K_.__r,p1=K_.diffed,h1=K_.__c,i1=K_.unmount;function Q1(_,$){K_.__h&&K_.__h(U0,_,q2||$),q2=0;var J=U0.__H||(U0.__H={__:[],__h:[]});return _>=J.__.length&&J.__.push({}),J.__[_]}function R(_){return q2=1,r4(j3,_)}function r4(_,$,J){var Z=Q1(P2++,2);return Z.t=_,Z.__c||(Z.__=[J?J($):j3(void 0,$),function(X){var Y=Z.t(Z.__[0],X);Z.__[0]!==Y&&(Z.__=[Y,Z.__[1]],Z.__c.setState({}))}],Z.__c=U0),Z.__}function c(_,$){var J=Q1(P2++,3);!K_.__s&&Q3(J.__H,$)&&(J.__=_,J.__H=$,U0.__H.__h.push(J))}function k(_){return q2=5,v0(function(){return{current:_}},[])}function v0(_,$){var J=Q1(P2++,7);return Q3(J.__H,$)&&(J.__=_(),J.__H=$,J.__h=_),J.__}function I(_,$){return q2=8,v0(function(){return _},$)}function s4(){Z1.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(y2),_.__H.__h.forEach(Y1),_.__H.__h=[]}catch($){_.__H.__h=[],K_.__e($,_.__v)}}),Z1=[]}K_.__b=function(_){U0=null,g1&&g1(_)},K_.__r=function(_){c1&&c1(_),P2=0;var $=(U0=_.__c).__H;$&&($.__h.forEach(y2),$.__h.forEach(Y1),$.__h=[])},K_.diffed=function(_){p1&&p1(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(Z1.push($)!==1&&m1===K_.requestAnimationFrame||((m1=K_.requestAnimationFrame)||function(J){var Z,X=function(){clearTimeout(Y),l1&&cancelAnimationFrame(Z),setTimeout(J)},Y=setTimeout(X,100);l1&&(Z=requestAnimationFrame(X))})(s4)),U0=void 0},K_.__c=function(_,$){$.some(function(J){try{J.__h.forEach(y2),J.__h=J.__h.filter(function(Z){return!Z.__||Y1(Z)})}catch(Z){$.some(function(X){X.__h&&(X.__h=[])}),$=[],K_.__e(Z,J.__v)}}),h1&&h1(_,$)},K_.unmount=function(_){i1&&i1(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(y2)}catch(J){K_.__e(J,$.__v)}};var l1=typeof requestAnimationFrame=="function";function y2(_){var $=U0;typeof _.__c=="function"&&_.__c(),U0=$}function Y1(_){var $=U0;_.__c=_.__(),U0=$}function Q3(_,$){return!_||_.length!==$.length||$.some(function(J,Z){return J!==_[Z]})}function j3(_,$){return typeof $=="function"?$(_):$}var K3=function(_,$,J,Z){var X;$[0]=0;for(var Y=1;Y<$.length;Y++){var G=$[Y++],j=$[Y]?($[0]|=G?1:2,J[$[Y++]]):$[++Y];G===3?Z[0]=j:G===4?Z[1]=Object.assign(Z[1]||{},j):G===5?(Z[1]=Z[1]||{})[$[++Y]]=j:G===6?Z[1][$[++Y]]+=j+"":G?(X=_.apply(j,K3(_,j,J,["",null])),Z.push(X),j[0]?$[0]|=2:($[Y-2]=0,$[Y]=X)):Z.push(j)}return Z},o1=new Map,q=function(_){var $=o1.get(this);return $||($=new Map,o1.set(this,$)),($=K3(this,$.get(_)||($.set(_,$=function(J){for(var Z,X,Y=1,G="",j="",K=[0],W=function(D){Y===1&&(D||(G=G.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,D,G):Y===3&&(D||G)?(K.push(3,D,G),Y=2):Y===2&&G==="..."&&D?K.push(4,D,0):Y===2&&G&&!D?K.push(5,0,!0,G):Y>=5&&((G||!D&&Y===5)&&(K.push(Y,0,G,X),Y=6),D&&(K.push(Y,D,0,X),Y=6)),G=""},Q=0;Q<J.length;Q++){Q&&(Y===1&&W(),W(Q));for(var z=0;z<J[Q].length;z++)Z=J[Q][z],Y===1?Z==="<"?(W(),K=[K],Y=3):G+=Z:Y===4?G==="--"&&Z===">"?(Y=1,G=""):G=Z+G[0]:j?Z===j?j="":G+=Z:Z==='"'||Z==="'"?j=Z:Z===">"?(W(),Y=1):Y&&(Z==="="?(Y=5,X=G,G=""):Z==="/"&&(Y<5||J[Q][z+1]===">")?(W(),Y===3&&(K=K[0]),Y=K,(K=K[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(W(),Y=2):G+=Z),Y===3&&G==="!--"&&(Y=4,K=K[0])}return W(),K}(_)),$),arguments,[])).length>1?$:$[0]}.bind(a1);async function d_(_,$={}){let J=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!J.ok){let Z=await J.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${J.status}`)}return J.json()}async function I2(_=10,$=null){let J=`/timeline?limit=${_}`;if($)J+=`&before=${$}`;return d_(J)}async function G3(_,$=50,J=0){return d_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${J}`)}async function V3(_,$=50,J=0){return d_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${J}`)}async function W3(_){return d_(`/thread/${_}`)}async function O3(_,$=!1){let J=`/post/${_}?cascade=${$?"true":"false"}`;return d_(J,{method:"DELETE"})}async function j1(_,$,J=null,Z=[]){return d_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:J,media_ids:Z})})}async function N3(){return d_("/agents")}async function q3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/status${$}`)}async function K1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/context${$}`)}async function l0(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return d_(`/agent/models${$}`)}async function B3(_){let $=new FormData;$.append("file",_);let J=await fetch("/media/upload",{method:"POST",body:$});if(!J.ok){let Z=await J.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${J.status}`)}return J.json()}async function G1(_,$){let J=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!J.ok){let Z=await J.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${J.status}`)}return J.json()}async function z3(_,$){let J=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!J.ok){let Z=await J.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${J.status}`)}return J.json()}async function H3(_,$="thought"){let J=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return d_(J)}async function U3(_,$,J){return d_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(J)})})}function J2(_){return`/media/${_}`}function F3(_){return`/media/${_}/thumbnail`}async function b2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function S2(_="",$=2,J=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${J?"1":"0"}`;return d_(Z)}async function L3(_,$=20000,J=null){let Z=J?`&mode=${encodeURIComponent(J)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return d_(X)}async function E3(_){return d_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function V1(_,$="",J={}){let Z=new FormData;Z.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(J.overwrite)X.set("overwrite","1");let Y=X.toString(),G=Y?`/workspace/upload?${Y}`:"/workspace/upload",j=await fetch(""+G,{method:"POST",body:Z});if(!j.ok){let K=await j.json().catch(()=>({error:"Upload failed"})),W=Error(K.error||`HTTP ${j.status}`);throw W.status=j.status,W.code=K.code,W}return j.json()}async function D3(_,$,J=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:J})});if(!Z.ok){let X=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(X.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=X.code,Y}return Z.json()}async function C3(_,$){let J=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!J.ok){let Z=await J.json().catch(()=>({error:"Rename failed"})),X=Error(Z.error||`HTTP ${J.status}`);throw X.status=J.status,X.code=Z.code,X}return J.json()}async function y3(_,$){let J=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!J.ok){let Z=await J.json().catch(()=>({error:"Move failed"})),X=Error(Z.error||`HTTP ${J.status}`);throw X.status=J.status,X.code=Z.code,X}return J.json()}async function k3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return d_($,{method:"DELETE"})}async function x2(_,$=!1){return d_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function W1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function A3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class O1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,J=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,J+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-J,0),X=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function o0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function T_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function Z2(_,$=!1){let J=o0(_);if(J===null)return $;return J==="true"}function Y2(_,$=null){let J=o0(_);if(J===null)return $;let Z=parseInt(J,10);return Number.isFinite(Z)?Z:$}function c0({prefix:_="file",label:$,title:J,onRemove:Z,onClick:X,removeTitle:Y="Remove",icon:G="file"}){let j=`${_}-file-pill`,K=`${_}-file-name`,W=`${_}-file-remove`,Q=G==="message"?q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return q`
    <span class=${j} title=${J||$} onClick=${X}>
      ${Q}
      <span class=${K}>${$}</span>
      ${Z&&q`
        <button
          class=${W}
          onClick=${(z)=>{z.preventDefault(),z.stopPropagation(),Z()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var t4=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function e4({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),J=_.tokens,Z=_.contextWindow,X=J!=null?`Context: ${w3(J)} / ${w3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Y=7,G=2*Math.PI*7,j=$/100*G,K=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return q`
        <span class="compose-context-pie icon-btn" title=${X}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${K}
                    stroke-width="2.5"
                    stroke-dasharray=${`${j} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function w3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function M3({onPost:_,onFocus:$,searchMode:J,onSearch:Z,onEnterSearch:X,onExitSearch:Y,fileRefs:G=[],onRemoveFileRef:j,onClearFileRefs:K,messageRefs:W=[],onRemoveMessageRef:Q,onClearMessageRefs:z,activeModel:D=null,modelUsage:L=null,thinkingLevel:E=null,supportsThinking:w=!1,contextUsage:b=null,notificationsEnabled:U=!1,notificationPermission:A="default",onToggleNotifications:f,onModelChange:F,onModelStateChange:T,activeEditorPath:s=null,onAttachEditorFile:d,onOpenFilePill:Z_}){let[Q_,e]=R(""),[Y_,a]=R(""),[h,__]=R(!1),[o,t]=R([]),[z_,q_]=R(!1),[g,V_]=R([]),[G_,W_]=R(0),[y_,O_]=R(!1),[H_,w_]=R(!1),[F_,D_]=R(!1),[u_,C_]=R([]),[p_,X0]=R(!1),U_=k(null),M_=k(null),_0=k(null),O0=k(null),Q0=k(0),N0=200,q0=(H)=>{let v=new Set,l=[];for(let X_ of H||[]){if(typeof X_!=="string")continue;let L_=X_.trim();if(!L_||v.has(L_))continue;v.add(L_),l.push(L_)}return l},I_=()=>{let H=o0("piclaw_compose_history");if(!H)return[];try{let v=JSON.parse(H);if(!Array.isArray(v))return[];return q0(v)}catch{return[]}},m_=(H)=>{T_("piclaw_compose_history",JSON.stringify(H))},a_=k(I_()),h_=k(-1),f_=k(""),P=!h&&(Q_.trim()||o.length>0||G.length>0||W.length>0),r=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),b_=typeof window<"u"&&typeof Notification<"u",c_=typeof window<"u"?Boolean(window.isSecureContext):!1,F0=b_&&c_&&A!=="denied",C0=A==="granted"&&U,j0=C0?"Disable notifications":"Enable notifications",i_=D||"",y0=w&&E?` (${E})`:"",B0=y0.trim()?`${E}`:"",I0=typeof L?.hint_short==="string"?L.hint_short.trim():"",$0=[B0||null,I0||null].filter(Boolean).join(" • "),s_=[i_?`Current model: ${i_}${y0}`:null,L?.plan?`Plan: ${L.plan}`:null,I0||null,L?.primary?.reset_description||null,L?.secondary?.reset_description||null].filter(Boolean),k0=H_?"Switching model…":s_.join(" • ")||`Current model: ${i_}${y0} (tap to open model picker)`,l_=(H)=>{if(!H||typeof H!=="object")return;let v=H.model??H.current;if(typeof T==="function")T({model:v??null,thinking_level:H.thinking_level??null,supports_thinking:H.supports_thinking,provider_usage:H.provider_usage??null});if(v&&typeof F==="function")F(v)},K0=(H)=>{let v=H||U_.current;if(!v)return;v.style.height="auto",v.style.height=`${v.scrollHeight}px`,v.style.overflowY="hidden"},J0=(H)=>{if(!H.startsWith("/")||H.includes(`
`)){O_(!1),V_([]);return}let v=H.toLowerCase().split(" ")[0];if(v.length<1){O_(!1),V_([]);return}let l=t4.filter((X_)=>X_.name.startsWith(v)||X_.name.replace(/-/g,"").startsWith(v.replace(/-/g,"")));if(l.length>0&&!(l.length===1&&l[0].name===v))V_(l),W_(0),O_(!0);else O_(!1),V_([])},b0=(H)=>{let v=Q_,l=v.indexOf(" "),X_=l>=0?v.slice(l):"",L_=H.name+X_;e(L_),O_(!1),V_([]),requestAnimationFrame(()=>{let k_=U_.current;if(!k_)return;let B_=L_.length;k_.selectionStart=B_,k_.selectionEnd=B_,k_.focus()})},S0=(H)=>{if(J)a(H);else e(H),J0(H);requestAnimationFrame(()=>K0())},z0=(H)=>{let v=J?Y_:Q_,l=v&&!v.endsWith(`
`)?`
`:"",X_=`${v}${l}${H}`.trimStart();S0(X_)},L0=(H)=>{let v=H?.command?.model_label;if(v)return v;let l=H?.command?.message;if(typeof l==="string"){let X_=l.match(/•\s+([^\n]+?)\s+\(current\)/);if(X_?.[1])return X_[1].trim()}return null},x_=async(H)=>{if(J||h||H_)return;w_(!0);try{let v=await j1("default",H,null,[]),l=L0(v);l_({model:l??D??null,thinking_level:v?.command?.thinking_level,supports_thinking:v?.command?.supports_thinking});try{let X_=await l0();if(X_)l_(X_)}catch{}return _?.(),!0}catch(v){return console.error("Failed to switch model:",v),alert("Failed to switch model: "+v.message),!1}finally{w_(!1)}},H0=async()=>{await x_("/cycle-model")},G0=async(H)=>{if(!H||H_)return;if(await x_(`/model ${H}`))D_(!1)},v_=(H)=>{H.preventDefault(),H.stopPropagation(),D_((v)=>!v)},R_=async(H)=>{let v=typeof H==="string"?H:H&&typeof H?.target?.value==="string"?H.target.value:Q_,l=typeof v==="string"?v:"";if(!l.trim()&&o.length===0&&G.length===0&&W.length===0)return;__(!0);try{let X_=[];for(let A_ of o){let P_=await B3(A_);X_.push(P_.id)}let L_=l.trim(),k_=G.length?`Files:
${G.map((A_)=>`- ${A_}`).join(`
`)}`:"",B_=W.length?`Referenced messages:
${W.map((A_)=>`- message:${A_}`).join(`
`)}`:"",g_=X_.length?`Images:
${X_.map((A_,P_)=>{let K2=o[P_]?.name||`image-${P_+1}`;return`- attachment:${A_} (${K2})`}).join(`
`)}`:"",V0=[L_,k_,B_,g_].filter(Boolean).join(`

`),T0=await j1("default",V0,null,X_);if(T0?.command){l_({model:T0.command.model_label??D??null,thinking_level:T0.command.thinking_level,supports_thinking:T0.command.supports_thinking});try{let A_=await l0();if(A_)l_(A_)}catch{}}if(L_){let A_=a_.current,P_=q0(A_.filter((D0)=>D0!==L_));if(P_.push(L_),P_.length>200)P_.splice(0,P_.length-200);a_.current=P_,m_(P_),h_.current=-1,f_.current=""}e(""),t([]),K?.(),z?.(),_?.()}catch(X_){console.error("Failed to post:",X_),alert("Failed to post: "+X_.message)}finally{__(!1)}},o_=(H)=>{if(H.isComposing)return;if(J&&H.key==="Escape"){H.preventDefault(),a(""),Y?.();return}if(y_&&g.length>0){let v=U_.current?.value??(J?Y_:Q_);if(!String(v||"").startsWith("/"))O_(!1),V_([]);else{if(H.key==="ArrowDown"){H.preventDefault(),W_((l)=>(l+1)%g.length);return}if(H.key==="ArrowUp"){H.preventDefault(),W_((l)=>(l-1+g.length)%g.length);return}if(H.key==="Tab"){H.preventDefault(),b0(g[G_]);return}if(H.key==="Enter"&&!H.shiftKey){if(!(U_.current?.value??(J?Y_:Q_)).includes(" ")){H.preventDefault();let L_=g[G_];O_(!1),V_([]),R_(L_.name);return}}if(H.key==="Escape"){H.preventDefault(),O_(!1),V_([]);return}}}if(!J&&(H.key==="ArrowUp"||H.key==="ArrowDown")&&!H.metaKey&&!H.ctrlKey&&!H.altKey&&!H.shiftKey){let v=U_.current;if(!v)return;let l=v.value||"",X_=v.selectionStart===0&&v.selectionEnd===0,L_=v.selectionStart===l.length&&v.selectionEnd===l.length;if(H.key==="ArrowUp"&&X_||H.key==="ArrowDown"&&L_){let k_=a_.current;if(!k_.length)return;H.preventDefault();let B_=h_.current;if(H.key==="ArrowUp"){if(B_===-1)f_.current=l,B_=k_.length-1;else if(B_>0)B_-=1;h_.current=B_,S0(k_[B_]||"")}else{if(B_===-1)return;if(B_<k_.length-1)B_+=1,h_.current=B_,S0(k_[B_]||"");else h_.current=-1,S0(f_.current||""),f_.current=""}requestAnimationFrame(()=>{let g_=U_.current;if(!g_)return;let V0=g_.value.length;g_.selectionStart=V0,g_.selectionEnd=V0});return}}if(H.key==="Enter"&&!H.shiftKey){H.preventDefault();let v=U_.current?.value??(J?Y_:Q_);if(J){if(v.trim())Z?.(v.trim())}else R_(v)}},Z0=(H)=>{let v=Array.from(H||[]).filter((l)=>l&&l.type&&l.type.startsWith("image/"));if(!v.length)return;t((l)=>[...l,...v])},A0=(H)=>{Z0(H.target.files),H.target.value=""},E0=(H)=>{if(J)return;H.preventDefault(),H.stopPropagation(),Q0.current+=1,q_(!0)},x0=(H)=>{if(J)return;if(H.preventDefault(),H.stopPropagation(),Q0.current=Math.max(0,Q0.current-1),Q0.current===0)q_(!1)},t_=(H)=>{if(J)return;if(H.preventDefault(),H.stopPropagation(),H.dataTransfer)H.dataTransfer.dropEffect="copy";q_(!0)},u0=(H)=>{if(J)return;H.preventDefault(),H.stopPropagation(),Q0.current=0,q_(!1),Z0(H.dataTransfer?.files||[])},p0=(H)=>{if(J)return;let v=H.clipboardData?.items;if(!v||!v.length)return;let l=[];for(let X_ of v){if(X_.kind!=="file")continue;let L_=X_.getAsFile?.();if(L_)l.push(L_)}if(l.length>0)H.preventDefault(),Z0(l)},h0=(H)=>{t((v)=>v.filter((l,X_)=>X_!==H))},n0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((H)=>{let{latitude:v,longitude:l,accuracy:X_}=H.coords,L_=`${v.toFixed(5)}, ${l.toFixed(5)}`,k_=Number.isFinite(X_)?` ±${Math.round(X_)}m`:"",B_=`https://maps.google.com/?q=${v},${l}`,g_=`Location: ${L_}${k_} ${B_}`;z0(g_)},(H)=>{let v=H?.message||"Unable to retrieve location.";alert(`Location error: ${v}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};c(()=>{if(!F_)return;X0(!0),l0().then((H)=>{let v=Array.isArray(H?.models)?H.models.filter((l)=>typeof l==="string"&&l.trim().length>0):[];C_(v),l_(H)}).catch((H)=>{console.warn("Failed to load model list:",H),C_([])}).finally(()=>{X0(!1)})},[F_,D]),c(()=>{if(J)D_(!1)},[J]),c(()=>{if(!F_)return;let H=(v)=>{let l=_0.current,X_=O0.current,L_=v.target;if(l&&l.contains(L_))return;if(X_&&X_.contains(L_))return;D_(!1)};return document.addEventListener("pointerdown",H),()=>document.removeEventListener("pointerdown",H)},[F_]);let w0=(H)=>{let v=H.target.value;K0(H.target),S0(v)};return c(()=>{requestAnimationFrame(()=>K0())},[Q_,Y_,J]),q`
        <div class="compose-box">
            <div
                class=${`compose-input-wrapper${z_?" drag-active":""}`}
                onDragEnter=${E0}
                onDragOver=${t_}
                onDragLeave=${x0}
                onDrop=${u0}
            >
                <div class="compose-input-main">
                    ${(G.length>0||o.length>0||W.length>0)&&q`
                        <div class="compose-file-refs">
                            ${W.map((H)=>{return q`
                                    <${c0}
                                        key=${"msg-"+H}
                                        prefix="compose"
                                        label=${"msg:"+H}
                                        title=${"Message reference: "+H}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>Q?.(H)}
                                    />
                                `})}
                            ${G.map((H)=>{let v=H.split("/").pop()||H;return q`
                                    <${c0}
                                        prefix="compose"
                                        label=${v}
                                        title=${H}
                                        onClick=${()=>Z_?.(H)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>j?.(H)}
                                    />
                                `})}
                            ${o.map((H,v)=>{let l=H?.name||`image-${v+1}`;return q`
                                    <${c0}
                                        key=${l+v}
                                        prefix="compose"
                                        label=${l}
                                        title=${l}
                                        removeTitle="Remove image"
                                        onRemove=${()=>h0(v)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${U_}
                        placeholder=${J?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${J?Y_:Q_}
                        onInput=${w0}
                        onKeyDown=${o_}
                        onPaste=${p0}
                        onFocus=${$}
                        onClick=${$}
                        disabled=${h}
                        rows="1"
                    />
                    ${y_&&g.length>0&&q`
                        <div class="slash-autocomplete" ref=${M_}>
                            ${g.map((H,v)=>q`
                                <div
                                    key=${H.name}
                                    class=${`slash-item${v===G_?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),b0(H)}}
                                    onMouseEnter=${()=>W_(v)}
                                >
                                    <span class="slash-name">${H.name}</span>
                                    <span class="slash-desc">${H.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${F_&&!J&&q`
                        <div class="compose-model-popup" ref=${_0}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${p_&&q`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!p_&&u_.length===0&&q`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!p_&&u_.map((H)=>q`
                                    <button
                                        key=${H}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${D===H?" active":""}`}
                                        onClick=${()=>{G0(H)}}
                                        disabled=${H_}
                                    >
                                        ${H}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{H0()}}
                                    disabled=${H_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!J&&D&&q`
                        <div class="compose-meta-row">
                            <div class="compose-model-meta">
                                <button
                                    ref=${O0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${k0}
                                    aria-label="Open model picker"
                                    onClick=${v_}
                                    disabled=${h||H_}
                                >
                                    ${H_?"Switching…":i_}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!H_&&$0&&q`
                                        <span class="compose-model-usage-hint" title=${k0}>
                                            ${$0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        </div>
                    `}
                    <div class="compose-actions ${J?"search-mode":""}">
                    ${!J&&b&&b.percent!=null&&q`
                        <${e4} usage=${b} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${J?Y:X}
                        title=${J?"Close search":"Search"}
                    >
                        ${J?q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${r&&!J&&q`
                        <button
                            class="icon-btn location-btn"
                            onClick=${n0}
                            title="Share location"
                            type="button"
                            disabled=${h}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${F0&&!J&&q`
                        <button
                            class=${`icon-btn notification-btn${C0?" active":""}`}
                            onClick=${f}
                            title=${j0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!J&&q`
                        ${s&&d&&q`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${d}
                                title=${`Attach open file: ${s}`}
                                type="button"
                                disabled=${h||G.includes(s)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${A0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{R_()}}
                            disabled=${!P}
                            title="Send (Ctrl+Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var I3="piclaw_theme",B1="piclaw_tint",v2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},_8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},P3={default:{label:"Default",mode:"auto",light:v2,dark:_8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},$8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],R2={theme:"default",tint:null},b3="light",N1=!1;function S3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function X2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let J=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(J)&&!/^[0-9a-fA-F]{6}$/.test(J))return null;let Z=J.length===3?J.split("").map((Y)=>Y+Y).join(""):J,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${Z.toLowerCase()}`}}function J8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let J=document.createElement("div");if(J.style.color="",J.style.color=$,!J.style.color)return null;let Z=J.style.color;try{if(document.body)J.style.display="none",document.body.appendChild(J),Z=getComputedStyle(J).color||J.style.color,document.body.removeChild(J)}catch{}let X=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Y=parseInt(X[1],10),G=parseInt(X[2],10),j=parseInt(X[3],10);if(![Y,G,j].every((W)=>Number.isFinite(W)))return null;let K=`#${[Y,G,j].map((W)=>W.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:G,b:j,hex:K}}function x3(_){return X2(_)||J8(_)}function B2(_,$,J){let Z=Math.round(_.r+($.r-_.r)*J),X=Math.round(_.g+($.g-_.g)*J),Y=Math.round(_.b+($.b-_.b)*J);return`rgb(${Z} ${X} ${Y})`}function q1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function T3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function z1(_){return P3[_]||P3.default}function Z8(_){return _.mode==="auto"?T3():_.mode}function Y8(_,$){let J=z1(_);if($==="dark"&&J.dark)return J.dark;if($==="light"&&J.light)return J.light;return J.dark||J.light||v2}function X8(_,$,J){let Z=x3($);if(!Z)return _;let X=X2(_.bgPrimary),Y=X2(_.bgSecondary),G=X2(_.bgHover),j=X2(_.borderColor);if(!X||!Y||!G||!j)return _;let W=X2(J==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:B2(X,Z,0.08),bgSecondary:B2(Y,Z,0.12),bgHover:B2(G,Z,0.16),borderColor:B2(j,Z,0.08),accent:Z.hex,accentHover:W?B2(Z,W,0.18):Z.hex}}function Q8(_,$){if(typeof document>"u")return;let J=document.documentElement,Z=_.accent,X=x3(Z),Y=X?q1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,G=X?q1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",j=X?q1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":G,"--accent-soft-strong":j,"--danger-color":_.danger||v2.danger,"--success-color":_.success||v2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(K).forEach(([W,Q])=>{if(Q)J.style.setProperty(W,Q)})}function j8(){if(typeof document>"u")return;let _=document.documentElement;$8.forEach(($)=>_.style.removeProperty($))}function T2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function K8(_,$){if(typeof document>"u")return;let J=T2("theme-color");if(J&&_)J.setAttribute("content",_);let Z=T2("msapplication-TileColor");if(Z&&_)Z.setAttribute("content",_);let X=T2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Y=T2("apple-mobile-web-app-status-bar-style");if(Y)Y.setAttribute("content",$==="dark"?"black-translucent":"default")}function G8(){if(typeof window>"u")return;let _={...R2,mode:b3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function H1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let J=S3(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,X=z1(J),Y=Z8(X),G=Y8(J,Y);R2={theme:J,tint:Z},b3=Y;let j=document.documentElement;j.dataset.theme=Y,j.dataset.colorTheme=J,j.dataset.tint=Z?String(Z):"",j.style.colorScheme=Y;let K=G;if(J==="default"&&Z)K=X8(G,Z,Y);if(J==="default"&&!Z)j8();else Q8(K,Y);if(K8(K.bgPrimary,Y),G8(),$.persist!==!1)if(T_(I3,J),Z)T_(B1,Z);else T_(B1,"")}function f2(){if(z1(R2.theme).mode!=="auto")return;H1(R2,{persist:!1})}function f3(){if(typeof window>"u")return()=>{};let _=S3(o0(I3)||"default"),$=o0(B1),J=$?$.trim():null;if(H1({theme:_,tint:J},{persist:!1}),window.matchMedia&&!N1){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",f2);else if(Z.addListener)Z.addListener(f2);return N1=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",f2);else if(Z.removeListener)Z.removeListener(f2);N1=!1}}return()=>{}}function v3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let J=_.theme??_.name??_.colorTheme,Z=_.tint??null;H1({theme:J||"default",tint:Z},{persist:!0})}function R3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return T3()}var u2=/#(\w+)/g,V8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),W8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),O8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),N8={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},q8=new Set(["http:","https:","mailto:",""]);function u3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function Q2(_,$={}){if(!_)return null;let J=String(_).trim();if(!J)return null;if(J.startsWith("#")||J.startsWith("/"))return J;if(J.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(J))return J;return null}if(J.startsWith("blob:"))return J;try{let Z=new URL(J,typeof window<"u"?window.location.origin:"http://localhost");if(!q8.has(Z.protocol))return null;return Z.href}catch{return null}}function m3(_,$={}){if(!_)return"";let J=new DOMParser().parseFromString(_,"text/html"),Z=[],X=J.createTreeWalker(J.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=X.nextNode())Z.push(Y);for(let G of Z){let j=G.tagName.toLowerCase();if(!W8.has(j)){let W=G.parentNode;if(!W)continue;while(G.firstChild)W.insertBefore(G.firstChild,G);W.removeChild(G);continue}let K=N8[j]||new Set;for(let W of Array.from(G.attributes)){let Q=W.name.toLowerCase(),z=W.value;if(Q.startsWith("on")){G.removeAttribute(W.name);continue}if(Q.startsWith("data-")||Q.startsWith("aria-"))continue;if(K.has(Q)||O8.has(Q)){if(Q==="href"){let D=Q2(z);if(!D)G.removeAttribute(W.name);else if(G.setAttribute(W.name,D),j==="a"&&!G.getAttribute("rel"))G.setAttribute("rel","noopener noreferrer")}else if(Q==="src"){let D=j==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(z):z,L=Q2(D,{allowDataImage:j==="img"});if(!L)G.removeAttribute(W.name);else G.setAttribute(W.name,L)}continue}G.removeAttribute(W.name)}}return J.body.innerHTML}function g3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function m2(_,$=2){if(!_)return _;let J=_;for(let Z=0;Z<$;Z+=1){let X=g3(J);if(X===J)break;J=X}return J}function B8(_){if(!_)return{text:"",blocks:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],X=[],Y=!1,G=[];for(let j of J){if(!Y&&j.trim().match(/^```mermaid\s*$/i)){Y=!0,G=[];continue}if(Y&&j.trim().match(/^```\s*$/)){let K=Z.length;Z.push(G.join(`
`)),X.push(`@@MERMAID_BLOCK_${K}@@`),Y=!1,G=[];continue}if(Y)G.push(j);else X.push(j)}if(Y)X.push("```mermaid"),X.push(...G);return{text:X.join(`
`),blocks:Z}}function z8(_){if(!_)return _;return m2(_,5)}function H8(_){let $=new TextEncoder().encode(String(_||"")),J="";for(let Z of $)J+=String.fromCharCode(Z);return btoa(J)}function U8(_){let $=atob(String(_||"")),J=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)J[Z]=$.charCodeAt(Z);return new TextDecoder().decode(J)}function F8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(J,Z)=>{let X=Number(Z),Y=$[X]??"",G=z8(Y);return`<div class="mermaid-container" data-mermaid="${H8(G)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function c3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,J)=>{if(J.includes(`
`))return`
\`\`\`
${J}
\`\`\`
`;return`\`${J}\``})}function p3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,J)=>{let Z=J.trim(),X=Z.startsWith("/"),Y=X?Z.slice(1).trim():Z,K=(Y.endsWith("/")?Y.slice(0,-1).trim():Y).split(/\s+/)[0]?.toLowerCase();if(!K||!V8.has(K))return $;if(K==="br")return X?"":"<br>";if(X)return`</${K}>`;return`<${K}>`})}function h3(_){if(!_)return _;let $=(J)=>J.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(J,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(J,Z)=>`<code>${$(Z)}</code>`)}function i3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),J=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=J.nextNode()){if(!X.nodeValue)continue;let Y=Z(X.nodeValue);if(Y!==X.nodeValue)X.nodeValue=Y}return $.body.innerHTML}function L8(_){if(!window.katex)return _;let $=(G)=>g3(G).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),J=(G)=>{let j=[],K=G.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(W)=>{let Q=j.length;return j.push(W),`@@CODE_BLOCK_${Q}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(W)=>{let Q=j.length;return j.push(W),`@@CODE_INLINE_${Q}@@`}),{html:K,blocks:j}},Z=(G,j)=>{if(!j.length)return G;return G.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,W)=>{let Q=Number(W);return j[Q]??""})},X=J(_),Y=X.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(G,j,K)=>{try{let W=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${j}${W}`}catch(W){return`<span class="math-error" title="${u3(W.message)}">${G}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(G,j,K)=>{if(/\s$/.test(K))return G;try{let W=katex.renderToString($(K),{displayMode:!1,throwOnError:!1});return`${j}${W}`}catch(W){return`${j}<span class="math-error" title="${u3(W.message)}">$${K}$</span>`}}),Z(Y,X.blocks)}function E8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),J=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],X;while(X=J.nextNode())Z.push(X);for(let Y of Z){let G=Y.nodeValue;if(!G)continue;if(u2.lastIndex=0,!u2.test(G))continue;u2.lastIndex=0;let j=Y.parentElement;if(j&&(j.closest("a")||j.closest("code")||j.closest("pre")))continue;let K=G.split(u2);if(K.length<=1)continue;let W=$.createDocumentFragment();K.forEach((Q,z)=>{if(z%2===1){let D=$.createElement("a");D.setAttribute("href","#"),D.className="hashtag",D.setAttribute("data-hashtag",Q),D.textContent=`#${Q}`,W.appendChild(D)}else W.appendChild($.createTextNode(Q))}),Y.parentNode?.replaceChild(W,Y)}return $.body.innerHTML}function D8(_){if(!_)return _;let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],X=!1;for(let Y of J){if(!X&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,Z.push("$$");continue}if(X&&Y.trim().match(/^```\s*$/)){X=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function j2(_,$,J={}){if(!_)return"";let Z=D8(_),{text:X,blocks:Y}=B8(Z),G=m2(X,2),K=c3(G).replace(/</g,"&lt;").replace(/>/g,"&gt;"),W=p3(K),Q=window.marked?marked.parse(W,{headerIds:!1,mangle:!1}):W.replace(/\n/g,"<br>");return Q=h3(Q),Q=i3(Q),Q=L8(Q),Q=E8(Q),Q=F8(Q,Y),Q=m3(Q,J),Q}function l3(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),J=m2($,2),X=c3(J).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=p3(X),G=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return G=h3(G),G=i3(G),G=m3(G),G}async function g2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:J}=window.beautifulMermaid,X=R3()==="dark"?J["tokyo-night"]:J["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let G of Y)try{let j=G.dataset.mermaid,K=U8(j||""),W=m2(K,2),Q=await $(W,{...X,transparent:!0});G.innerHTML=Q,G.removeAttribute("data-mermaid")}catch(j){console.error("Mermaid render error:",j);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${j.message}`,G.innerHTML="",G.appendChild(K),G.removeAttribute("data-mermaid")}}var o3="PiClaw";function U1(_,$){let J=_||"PiClaw",Z=J.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,G=X[Y],j=J.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",Q=(K?K:null)||(j==="PiClaw".toLowerCase()||j==="pi"?"/static/icon-192.png":null);return{letter:Z,color:G,image:Q}}function n3(_,$){if(!_)return"PiClaw";let J=$[_]?.name||_;return J?J.charAt(0).toUpperCase()+J.slice(1):"PiClaw"}function d3(_,$){if(!_)return null;let J=$[_]||{};return J.avatar_url||J.avatarUrl||J.avatar||null}function r3(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,G=Y?.dataset?.colorTheme||"",j=Y?.dataset?.tint||"",K=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(K&&(j||G&&G!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],J=String(_),Z=0;for(let Y=0;Y<J.length;Y+=1)Z=(Z*31+J.charCodeAt(Y))%2147483647;let X=Math.abs(Z)%$.length;return $[X]}function s3({status:_,draft:$,plan:J,thought:Z,pendingRequest:X,intent:Y,turnId:G,steerQueued:j,onPanelToggle:K}){let z=(g)=>{if(!g)return{text:"",totalLines:0,fullText:""};if(typeof g==="string"){let y_=g,O_=y_?y_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y_,totalLines:O_,fullText:y_}}let V_=g.text||"",G_=g.fullText||g.full_text||V_,W_=Number.isFinite(g.totalLines)?g.totalLines:G_?G_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:V_,totalLines:W_,fullText:G_}},D=160,L=(g)=>{if(!g)return 1;return Math.max(1,Math.ceil(g.length/160))},E=(g,V_,G_)=>{let W_=(g||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!W_)return{text:"",omitted:0,totalLines:Number.isFinite(G_)?G_:0,visibleLines:0};let y_=W_.split(`
`),O_=y_.length>V_?y_.slice(0,V_).join(`
`):W_,H_=Number.isFinite(G_)?G_:y_.reduce((D_,u_)=>D_+L(u_),0),w_=O_?O_.split(`
`).reduce((D_,u_)=>D_+L(u_),0):0,F_=Math.max(H_-w_,0);return{text:O_,omitted:F_,totalLines:H_,visibleLines:w_}},w=z(J),b=z(Z),U=z($),A=Boolean(w.text)||w.totalLines>0,f=Boolean(b.text)||b.totalLines>0,F=Boolean(U.fullText?.trim()||U.text?.trim());if(!_&&!F&&!A&&!f&&!X&&!Y)return null;let[T,s]=R(new Set),d=(g)=>s((V_)=>{let G_=new Set(V_),W_=!G_.has(g);if(W_)G_.add(g);else G_.delete(g);if(typeof K==="function")K(g,W_);return G_});c(()=>{s(new Set)},[G]);let Z_=_?.turn_id||G,Q_=r3(Z_),e=j?"turn-dot turn-dot-queued":"turn-dot",Y_=(g)=>g,a=Boolean(_?.last_activity||_?.lastActivity),h="",__=_?.title,o=_?.status;if(_?.type==="plan")h=__?`Planning: ${__}`:"Planning...";else if(_?.type==="tool_call")h=__?`Running: ${__}`:"Running tool...";else if(_?.type==="tool_status")h=__?`${__}: ${o||"Working..."}`:o||"Working...";else if(_?.type==="error")h=__||"Agent error";else h=__||o||"Working...";if(a)h="Last activity just now";let t=({panelTitle:g,text:V_,fullText:G_,totalLines:W_,maxLines:y_,titleClass:O_,panelKey:H_})=>{let w_=T.has(H_),F_=G_||V_||"",D_=typeof y_==="number",u_=w_&&D_,C_=D_?E(F_,y_,W_):{text:F_||"",omitted:0,totalLines:Number.isFinite(W_)?W_:0};if(!F_&&!(Number.isFinite(C_.totalLines)&&C_.totalLines>0))return null;let p_=`agent-thinking-body${D_?" agent-thinking-body-collapsible":""}`,X0=D_?`--agent-thinking-collapsed-lines: ${y_};`:"";return q`
            <div
                class="agent-thinking"
                data-expanded=${w_?"true":"false"}
                data-collapsible=${D_?"true":"false"}
                style=${Q_?`--turn-color: ${Q_};`:""}
            >
                <div class="agent-thinking-title ${O_||""}">
                    ${Q_&&q`<span class=${e} aria-hidden="true"></span>`}
                    ${g}
                    ${u_&&q`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${g} panel`}
                            onClick=${()=>d(H_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${p_}
                    style=${X0}
                    dangerouslySetInnerHTML=${{__html:l3(F_)}}
                />
                ${!w_&&C_.omitted>0&&q`
                    <button class="agent-thinking-truncation" onClick=${()=>d(H_)}>
                        ▸ ${C_.omitted} more lines
                    </button>
                `}
                ${w_&&C_.omitted>0&&q`
                    <button class="agent-thinking-truncation" onClick=${()=>d(H_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},z_=X?.tool_call?.title,q_=z_?`Awaiting approval: ${z_}`:"Awaiting approval";return q`
        <div class="agent-status-panel">
            ${Y&&q`
                <div
                    class="agent-status agent-status-intent"
                    aria-live="polite"
                    style=${Q_?`--turn-color: ${Q_};`:""}
                    title=${Y?.detail||""}
                >
                    <span class="agent-status-text">
                        ${Y.title}
                    </span>
                    ${Y.detail&&q`<span class="agent-status-intent-detail">${Y.detail}</span>`}
                </div>
            `}
            ${X&&q`
                <div class="agent-status agent-status-request" aria-live="polite" style=${Q_?`--turn-color: ${Q_};`:""}>
                    <span class=${e} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${q_}</span>
                </div>
            `}
            ${A&&t({panelTitle:Y_("Planning"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,panelKey:"plan"})}
            ${f&&t({panelTitle:Y_("Thoughts"),text:b.text,fullText:b.fullText,totalLines:b.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${F&&t({panelTitle:Y_("Draft"),text:U.text,fullText:U.fullText,totalLines:U.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&q`
                <div class=${`agent-status${a?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${Q_?`--turn-color: ${Q_};`:""}>
                    ${Q_&&q`<span class=${e} aria-hidden="true"></span>`}
                    ${_?.type==="error"?q`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!a&&q`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${h}</span>
                </div>
            `}
        </div>
    `}function a3({request:_,onRespond:$}){if(!_)return null;let{request_id:J,tool_call:Z,options:X}=_,Y=Z?.title||"Agent Request",G=Z?.kind||"other",j=Z?.rawInput||{},K=j.command||j.commands&&j.commands[0]||null,W=j.diff||null,Q=j.fileName||j.path||null,z=Z?.description||j.description||j.explanation||null,L=(Array.isArray(Z?.locations)?Z.locations:[]).map((A)=>A?.path).filter((A)=>Boolean(A)),E=Array.from(new Set([Q,...L].filter(Boolean)));console.log("AgentRequestModal:",{request_id:J,tool_call:Z,options:X});let w=async(A)=>{try{await G1(J,A),$()}catch(f){console.error("Failed to respond to agent request:",f)}},b=async()=>{try{await z3(Y,`Auto-approved: ${Y}`),await G1(J,"approved"),$()}catch(A){console.error("Failed to add to whitelist:",A)}},U=X&&X.length>0;return q`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(z||K||W||E.length>0)&&q`
                    <div class="agent-request-body">
                        ${z&&q`
                            <div class="agent-request-description">${z}</div>
                        `}
                        ${E.length>0&&q`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${E.map((A,f)=>q`<li key=${f}>${A}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${K&&q`
                            <pre class="agent-request-command">${K}</pre>
                        `}
                        ${W&&q`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${W}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${U?X.map((A)=>q`
                            <button 
                                key=${A.optionId||A.id||String(A)}
                                class="agent-request-btn ${A.kind==="allow_once"||A.kind==="allow_always"?"primary":""}"
                                onClick=${()=>w(A.optionId||A.id||A)}
                            >
                                ${A.name||A.label||A.optionId||A.id||String(A)}
                            </button>
                        `):q`
                        <button class="agent-request-btn primary" onClick=${()=>w("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>w("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${b}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function t3({status:_}){if(_==="connected")return null;return q`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function e3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,X=Z/1000,Y=86400000;if(Z<Y){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(Z<5*Y){let K=$.toLocaleDateString(void 0,{weekday:"short"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${W}`}let G=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),j=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${G} ${j}`}function z2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function R0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function c2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function _4({src:_,onClose:$}){return c(()=>{let J=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[$]),q`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function C8({mediaId:_}){let[$,J]=R(null);if(c(()=>{b2(_).then(J).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",X=$.metadata?.size,Y=X?R0(X):"";return q`
        <a href=${J2(_)} download=${Z} class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${Y&&q`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function p2({annotations:_}){if(!_)return null;let{audience:$,priority:J,lastModified:Z}=_,X=Z?c2(Z):null;return q`
        <div class="content-annotations">
            ${$&&$.length>0&&q`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof J==="number"&&q`
                <span class="content-annotation">Priority: ${J}</span>
            `}
            ${X&&q`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function y8({block:_}){let $=_.title||_.name||_.uri,J=_.description,Z=_.size?R0(_.size):"",X=_.mime_type||"",Y=A8(X),G=Q2(_.uri);return q`
        <a
            href=${G||"#"}
            class="resource-link"
            target=${G?"_blank":void 0}
            rel=${G?"noopener noreferrer":void 0}
            onClick=${(j)=>j.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${J&&q`<div class="resource-link-description">${J}</div>`}
                <div class="resource-link-meta">
                    ${X&&q`<span>${X}</span>`}
                    ${Z&&q`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function k8({block:_}){let[$,J]=R(!1),Z=_.uri||"Embedded resource",X=_.text||"",Y=Boolean(_.data),G=_.mime_type||"";return q`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(j)=>{j.preventDefault(),j.stopPropagation(),J(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&q`
                ${X&&q`<pre class="resource-embed-content">${X}</pre>`}
                ${Y&&q`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${G&&q`<span class="resource-embed-blob-meta">${G}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(j)=>{j.preventDefault(),j.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(z)=>z.charCodeAt(0))],{type:G||"application/octet-stream"}),W=URL.createObjectURL(K),Q=document.createElement("a");Q.href=W,Q.download=Z.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(W)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function A8(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function w8({preview:_}){let $=Q2(_.url),J=Q2(_.image,{allowDataImage:!0}),Z=J?`background-image: url('${J}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return q`
        <a
            href=${$||"#"}
            class="link-preview ${J?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${X||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&q`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function M8(_,$){return typeof _==="string"?_:""}var P8=1800,I8=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,b8=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,S8=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function x8(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let J=document.createElement("textarea");J.value=$,J.setAttribute("readonly",""),J.style.position="fixed",J.style.opacity="0",J.style.pointerEvents="none",document.body.appendChild(J),J.select(),J.setSelectionRange(0,J.value.length);let Z=document.execCommand("copy");return document.body.removeChild(J),Z}catch{return!1}}function T8(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((j)=>j.querySelector("code"));if($.length===0)return()=>{};let J=new Map,Z=[],X=(j)=>{$.forEach((K)=>{K.classList.toggle("code-copy-touch-active",K===j)})},Y=(j,K)=>{let W=K||"idle";if(j.dataset.copyState=W,W==="success")j.innerHTML=b8,j.setAttribute("aria-label","Copied"),j.setAttribute("title","Copied"),j.classList.add("is-success"),j.classList.remove("is-error");else if(W==="error")j.innerHTML=S8,j.setAttribute("aria-label","Copy failed"),j.setAttribute("title","Copy failed"),j.classList.add("is-error"),j.classList.remove("is-success");else j.innerHTML=I8,j.setAttribute("aria-label","Copy code"),j.setAttribute("title","Copy code"),j.classList.remove("is-success","is-error")};$.forEach((j)=>{j.classList.add("post-code-block");let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Y(K,"idle"),j.appendChild(K);let W=async(z)=>{z.preventDefault(),z.stopPropagation();let L=j.querySelector("code")?.textContent||"",E=await x8(L);Y(K,E?"success":"error");let w=J.get(K);if(w)clearTimeout(w);let b=setTimeout(()=>{Y(K,"idle"),J.delete(K)},P8);J.set(K,b)},Q=(z)=>{if(z.pointerType==="touch")X(j)};K.addEventListener("click",W),j.addEventListener("pointerdown",Q),Z.push(()=>{K.removeEventListener("click",W),j.removeEventListener("pointerdown",Q);let z=J.get(K);if(z)clearTimeout(z);K.remove(),j.classList.remove("post-code-block","code-copy-touch-active")})});let G=(j)=>{if(j.pointerType!=="touch")return;let K=j.target?.closest?.(".post-code-block");X(K||null)};return document.addEventListener("pointerdown",G),Z.push(()=>document.removeEventListener("pointerdown",G)),()=>{Z.forEach((j)=>j())}}function f8(_){if(!_)return{content:_,fileRefs:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Files:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Z=W;break}if(Z===-1)return{content:_,fileRefs:[]};let X=[],Y=Z+1;for(;Y<J.length;Y+=1){let W=J[Y];if(/^\s*-\s+/.test(W))X.push(W.replace(/^\s*-\s+/,"").trim());else if(!W.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let G=J.slice(0,Z),j=J.slice(Y),K=[...G,...j].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:X}}function v8(_){if(!_)return{content:_,messageRefs:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Referenced messages:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Z=W;break}if(Z===-1)return{content:_,messageRefs:[]};let X=[],Y=Z+1;for(;Y<J.length;Y+=1){let W=J[Y];if(/^\s*-\s+/.test(W)){let z=W.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(z)X.push(z[1])}else if(!W.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let G=J.slice(0,Z),j=J.slice(Y),K=[...G,...j].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:X}}function R8(_){if(!_)return{content:_,attachments:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Images:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Z=W;break}if(Z===-1)return{content:_,attachments:[]};let X=[],Y=Z+1;for(;Y<J.length;Y+=1){let W=J[Y];if(/^\s*-\s+/.test(W)){let Q=W.replace(/^\s*-\s+/,"").trim(),z=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(z){let D=z[1],L=(z[2]||"").trim()||D;X.push({id:D,label:L,raw:Q})}else X.push({id:null,label:Q,raw:Q})}else if(!W.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let G=J.slice(0,Z),j=J.slice(Y),K=[...G,...j].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:X}}function u8(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m8(_,$){if(!_||!$)return _;let J=String($).trim().split(/\s+/).filter(Boolean);if(J.length===0)return _;let Z=J.map(u8).sort((Q,z)=>z.length-Q.length),X=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),G=new DOMParser().parseFromString(_,"text/html"),j=G.createTreeWalker(G.body,NodeFilter.SHOW_TEXT),K=[],W;while(W=j.nextNode())K.push(W);for(let Q of K){let z=Q.nodeValue;if(!z||!X.test(z)){X.lastIndex=0;continue}X.lastIndex=0;let D=Q.parentElement;if(D&&D.closest("code, pre, script, style"))continue;let L=z.split(X).filter((w)=>w!=="");if(L.length===0)continue;let E=G.createDocumentFragment();for(let w of L)if(Y.test(w)){let b=G.createElement("mark");b.className="search-highlight-term",b.textContent=w,E.appendChild(b)}else E.appendChild(G.createTextNode(w));Q.parentNode.replaceChild(E,Q)}return G.body.innerHTML}function $4({post:_,onClick:$,onHashtagClick:J,onMessageRef:Z,onScrollToMessage:X,agentName:Y,agentAvatarUrl:G,userName:j,userAvatarUrl:K,userAvatarBackground:W,onDelete:Q,isThreadReply:z,isThreadPrev:D,isThreadNext:L,isRemoving:E,highlightQuery:w,onFileRef:b}){let[U,A]=R(null),f=k(null),F=_.data,T=F.type==="agent_response",s=j||"You",d=T?Y||o3:s,Z_=T?U1(Y,G):U1(s,K),Q_=typeof W==="string"?W.trim().toLowerCase():"",e=!T&&Z_.image&&(Q_==="clear"||Q_==="transparent"),Y_=T&&Boolean(Z_.image),a=`background-color: ${e||Y_?"transparent":Z_.color}`,h=F.content_meta,__=Boolean(h?.truncated),o=Boolean(h?.preview),t=__&&!o,z_=__?{originalLength:Number.isFinite(h?.original_length)?h.original_length:F.content?F.content.length:0,maxLength:Number.isFinite(h?.max_length)?h.max_length:0}:null,q_=M8(F.content,F.link_previews),{content:g,fileRefs:V_}=f8(q_),{content:G_,messageRefs:W_}=v8(g),{content:y_,attachments:O_}=R8(G_);q_=y_;let H_=Boolean(q_)&&!t,w_=typeof w==="string"?w.trim():"",F_=v0(()=>{if(!q_)return"";let P=j2(q_,J);return w_?m8(P,w_):P},[q_,w_]),D_=(P,r)=>{P.stopPropagation(),A(J2(r))},u_=(P)=>{P.stopPropagation(),Q?.(_)},C_=(P,r)=>{let b_=new Set;if(!P||r.length===0)return{content:P,usedIds:b_};return{content:P.replace(/attachment:([^\s)"']+)/g,(r_,F0,C0,j0)=>{let i_=F0.replace(/^\/+/,""),B0=r.find(($0)=>$0.name&&$0.name.toLowerCase()===i_.toLowerCase()&&!b_.has($0.id))||r.find(($0)=>!b_.has($0.id));if(!B0)return r_;if(b_.add(B0.id),j0.slice(Math.max(0,C0-2),C0)==="](")return`/media/${B0.id}`;return B0.name||"attachment"}),usedIds:b_}},p_=[],X0=[],U_=[],M_=[],_0=[],O0=[],Q0=F.content_blocks||[],N0=F.media_ids||[],q0=0;if(Q0.length>0)Q0.forEach((P)=>{if(P?.type==="text"&&P.annotations)O0.push(P.annotations);if(P?.type==="resource_link")M_.push(P);else if(P?.type==="resource")_0.push(P);else if(P?.type==="file"){let r=N0[q0++];if(r)X0.push(r),U_.push({id:r,name:P?.name||P?.filename||P?.title})}else if(P?.type==="image"||!P?.type){let r=N0[q0++];if(r){let b_=typeof P?.mime_type==="string"?P.mime_type:void 0;p_.push({id:r,annotations:P?.annotations,mimeType:b_}),U_.push({id:r,name:P?.name||P?.filename||P?.title})}}});else if(N0.length>0)N0.forEach((P)=>{p_.push({id:P,annotations:null}),U_.push({id:P,name:null})});if(O_.length>0)O_.forEach((P)=>{if(!P?.id)return;let r=U_.find((b_)=>String(b_.id)===String(P.id));if(r&&!r.name)r.name=P.label});let{content:I_,usedIds:m_}=C_(q_,U_);q_=I_;let a_=p_.filter(({id:P})=>!m_.has(P)),h_=X0.filter((P)=>!m_.has(P)),f_=O_.length>0?O_.map((P,r)=>({id:P.id||`attachment-${r+1}`,label:P.label||`attachment-${r+1}`})):U_.map((P,r)=>({id:P.id,label:P.name||`attachment-${r+1}`}));return c(()=>{if(!f.current)return;return g2(f.current),T8(f.current)},[F_]),q`
        <div id=${`post-${_.id}`} class="post ${T?"agent-post":""} ${z?"thread-reply":""} ${D?"thread-prev":""} ${L?"thread-next":""} ${E?"removing":""}" onClick=${$}>
            <div class="post-avatar ${T?"agent-avatar":""} ${Z_.image?"has-image":""}" style=${a}>
                ${Z_.image?q`<img src=${Z_.image} alt=${d} />`:Z_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${u_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${d}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(P)=>{if(P.preventDefault(),P.stopPropagation(),Z)Z(_.id)}}>${e3(_.timestamp)}</a>
                </div>
                ${t&&z_&&q`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${z2(z_.originalLength)} chars
                            ${z_.maxLength?q` • Display limit: ${z2(z_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${o&&z_&&q`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${z2(z_.maxLength)} of ${z2(z_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(V_.length>0||W_.length>0||f_.length>0)&&q`
                    <div class="post-file-refs">
                        ${W_.map((P)=>{let r=(b_)=>{if(b_.preventDefault(),b_.stopPropagation(),X)X(P);else{let c_=document.getElementById("post-"+P);if(c_)c_.scrollIntoView({behavior:"smooth",block:"center"}),c_.classList.add("post-highlight"),setTimeout(()=>c_.classList.remove("post-highlight"),2000)}};return q`
                                <a href=${`#msg-${P}`} class="post-msg-pill-link" onClick=${r}>
                                    <${c0}
                                        prefix="post"
                                        label=${"msg:"+P}
                                        title=${"Message "+P}
                                        icon="message"
                                        onClick=${r}
                                    />
                                </a>
                            `})}
                        ${V_.map((P)=>{let r=P.split("/").pop()||P;return q`
                                <${c0}
                                    prefix="post"
                                    label=${r}
                                    title=${P}
                                    onClick=${()=>b?.(P)}
                                />
                            `})}
                        ${f_.map((P)=>q`
                            <${c0}
                                prefix="post"
                                label=${P.label}
                                title=${P.label}
                            />
                        `)}
                    </div>
                `}
                ${H_&&q`
                    <div 
                        ref=${f}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:F_}}
                        onClick=${(P)=>{if(P.target.classList.contains("hashtag")){P.preventDefault(),P.stopPropagation();let r=P.target.dataset.hashtag;if(r)J?.(r)}else if(P.target.tagName==="IMG")P.preventDefault(),P.stopPropagation(),A(P.target.src)}}
                    />
                `}
                ${O0.length>0&&q`
                    ${O0.map((P,r)=>q`
                        <${p2} key=${r} annotations=${P} />
                    `)}
                `}
                ${a_.length>0&&q`
                    <div class="media-preview">
                        ${a_.map(({id:P,mimeType:r})=>{let c_=typeof r==="string"&&r.toLowerCase().startsWith("image/svg")?J2(P):F3(P);return q`
                                <img 
                                    key=${P} 
                                    src=${c_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(r_)=>D_(r_,P)}
                                />
                            `})}
                    </div>
                `}
                ${a_.length>0&&q`
                    ${a_.map(({annotations:P},r)=>q`
                        ${P&&q`<${p2} key=${r} annotations=${P} />`}
                    `)}
                `}
                ${h_.length>0&&q`
                    <div class="file-attachments">
                        ${h_.map((P)=>q`
                            <${C8} key=${P} mediaId=${P} />
                        `)}
                    </div>
                `}
                ${M_.length>0&&q`
                    <div class="resource-links">
                        ${M_.map((P,r)=>q`
                            <div key=${r}>
                                <${y8} block=${P} />
                                <${p2} annotations=${P.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${_0.length>0&&q`
                    <div class="resource-embeds">
                        ${_0.map((P,r)=>q`
                            <div key=${r}>
                                <${k8} block=${P} />
                                <${p2} annotations=${P.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${F.link_previews?.length>0&&q`
                    <div class="link-previews">
                        ${F.link_previews.map((P,r)=>q`
                            <${w8} key=${r} preview=${P} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${U&&q`<${_4} src=${U} onClose=${()=>A(null)} />`}
    `}function J4({posts:_,hasMore:$,onLoadMore:J,onPostClick:Z,onHashtagClick:X,onMessageRef:Y,onScrollToMessage:G,onFileRef:j,emptyMessage:K,timelineRef:W,agents:Q,user:z,onDeletePost:D,reverse:L=!0,removingPostIds:E,searchQuery:w}){let[b,U]=R(!1),A=k(null),f=typeof IntersectionObserver<"u",F=I(async()=>{if(!J||!$||b)return;U(!0);try{await J({preserveScroll:!0,preserveMode:"top"})}finally{U(!1)}},[$,b,J]),T=I((a)=>{let{scrollTop:h,scrollHeight:__,clientHeight:o}=a.target,t=L?__-o-h:h,z_=Math.max(300,o);if(t<z_)F()},[L,F]);if(c(()=>{if(!f)return;let a=A.current,h=W?.current;if(!a||!h)return;let __=300,o=new IntersectionObserver((t)=>{for(let z_ of t){if(!z_.isIntersecting)continue;F()}},{root:h,rootMargin:`${__}px 0px ${__}px 0px`,threshold:0});return o.observe(a),()=>o.disconnect()},[f,$,J,W,F]),c(()=>{if(f)return;if(!W?.current)return;let{scrollTop:a,scrollHeight:h,clientHeight:__}=W.current,o=L?h-__-a:a,t=Math.max(300,__);if(o<t)F()},[f,_,$,L,W,F]),c(()=>{if(!W?.current)return;if(!$||b)return;let{scrollTop:a,scrollHeight:h,clientHeight:__}=W.current,o=L?h-__-a:a,t=Math.max(300,__);if(h<=__+1||o<t)F()},[_,$,b,L,W,F]),!_)return q`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return q`
            <div class="timeline" ref=${W}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${K||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let s=_.slice().sort((a,h)=>a.id-h.id),d=(a)=>{let h=a?.data?.thread_id;if(h===null||h===void 0||h==="")return null;let __=Number(h);return Number.isFinite(__)?__:null},Z_=new Map;for(let a=0;a<s.length;a+=1){let h=s[a],__=Number(h?.id),o=d(h);if(o!==null){let t=Z_.get(o)||{anchorIndex:-1,replyIndexes:[]};t.replyIndexes.push(a),Z_.set(o,t)}else if(Number.isFinite(__)){let t=Z_.get(__)||{anchorIndex:-1,replyIndexes:[]};t.anchorIndex=a,Z_.set(__,t)}}let Q_=new Map;for(let[a,h]of Z_.entries()){let __=new Set;if(h.anchorIndex>=0)__.add(h.anchorIndex);for(let o of h.replyIndexes)__.add(o);Q_.set(a,Array.from(__).sort((o,t)=>o-t))}let e=s.map((a,h)=>{let __=d(a);if(__===null)return{hasThreadPrev:!1,hasThreadNext:!1};let o=Q_.get(__);if(!o||o.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let t=o.indexOf(h);if(t<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:t>0,hasThreadNext:t<o.length-1}}),Y_=q`<div class="timeline-sentinel" ref=${A}></div>`;return q`
        <div class="timeline ${L?"reverse":"normal"}" ref=${W} onScroll=${T}>
            <div class="timeline-content">
                ${L?Y_:null}
                ${s.map((a,h)=>{let __=Boolean(a.data?.thread_id&&a.data.thread_id!==a.id),o=E?.has?.(a.id),t=e[h]||{};return q`
                    <${$4}
                        key=${a.id}
                        post=${a}
                        isThreadReply=${__}
                        isThreadPrev=${t.hasThreadPrev}
                        isThreadNext=${t.hasThreadNext}
                        isRemoving=${o}
                        highlightQuery=${w}
                        agentName=${n3(a.data?.agent_id,Q||{})}
                        agentAvatarUrl=${d3(a.data?.agent_id,Q||{})}
                        userName=${z?.name||z?.user_name}
                        userAvatarUrl=${z?.avatar_url||z?.avatarUrl||z?.avatar}
                        userAvatarBackground=${z?.avatar_background||z?.avatarBackground}
                        onClick=${()=>Z?.(a)}
                        onHashtagClick=${X}
                        onMessageRef=${Y}
                        onScrollToMessage=${G}
                        onFileRef=${j}
                        onDelete=${D}
                    />
                `})}
                ${L?null:Y_}
            </div>
        </div>
    `}var g8=16,c8=60000,Q4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function p8(_,$){let J=String(_||"").trim();if(!J)return J;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(J)||J.startsWith("#")||J.startsWith("data:")||J.startsWith("blob:"))return J;let Z=J.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=Z?.[1]||J,Y=Z?.[2]||"",G=Z?.[3]||"",j=String($||"").split("/").slice(0,-1).join("/"),W=X.startsWith("/")?X:`${j?`${j}/`:""}${X}`,Q=[];for(let D of W.split("/")){if(!D||D===".")continue;if(D===".."){if(Q.length>0)Q.pop();continue}Q.push(D)}let z=Q.join("/");return`${W1(z)}${Y}${G}`}function j4(_,$,J,Z=0,X=[]){if(!J&&Q4(_))return X;if(!_)return X;if(X.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)j4(Y,$,J,Z+1,X);return X}function Z4(_,$,J){if(!_)return"";let Z=[],X=(Y)=>{if(!J&&Q4(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let G of Y.children)X(G)};return X(_),Z.join("|")}function D1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let J=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let X=J?new Map(J.map((j)=>[j?.path,j])):new Map,Y=!J||J.length!==Z.length,G=Z.map((j)=>{let K=D1(X.get(j.path),j);if(K!==X.get(j.path))Y=!0;return K});return Y?{...$,children:G}:_}function L1(_,$,J){if(!_)return _;if(_.path===$)return D1(_,J);if(!Array.isArray(_.children))return _;let Z=!1,X=_.children.map((Y)=>{let G=L1(Y,$,J);if(G!==Y)Z=!0;return G});return Z?{..._,children:X}:_}var K4=4,F1=14,h8=8,i8=16;function G4(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],J=0;for(let Z of $)J+=G4(Z);return _.__bytes=J,J}function V4(_,$=0){let J=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:J,children:[]};if(!_||_.type!=="dir"||$>=K4)return Z;let X=Array.isArray(_.children)?_.children:[],Y=[];for(let j of X){let K=Math.max(0,Number(j?.__bytes??j?.size??0));if(K<=0)continue;if(j.type==="dir")Y.push({kind:"dir",node:j,size:K});else Y.push({kind:"file",name:j.name,path:j.path,size:K})}Y.sort((j,K)=>K.size-j.size);let G=Y;if(Y.length>F1){let j=Y.slice(0,F1-1),K=Y.slice(F1-1),W=K.reduce((Q,z)=>Q+z.size,0);j.push({kind:"other",name:`+${K.length} more`,path:`${Z.path}/[other]`,size:W}),G=j}return Z.children=G.map((j)=>{if(j.kind==="dir")return V4(j.node,$+1);return{name:j.name,path:j.path,size:j.size,children:[]}}),Z}function Y4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,J=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(J==="dark")return!0;if(J==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function W4(_,$,J){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,X=J?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=J?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${X}% ${Y}%)`}function h2(_,$,J,Z){return{x:_+J*Math.cos(Z),y:$+J*Math.sin(Z)}}function C1(_,$,J,Z,X,Y){let G=Math.PI*2-0.0001,j=Y-X>G?X+G:Y,K=h2(_,$,Z,X),W=h2(_,$,Z,j),Q=h2(_,$,J,j),z=h2(_,$,J,X),D=j-X>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${D} 1 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${J} ${J} 0 ${D} 0 ${z.x.toFixed(3)} ${z.y.toFixed(3)}`,"Z"].join(" ")}var O4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function N4(_,$,J){let Z=[],X=[],Y=Math.max(0,Number($)||0),G=(j,K,W,Q)=>{let z=Array.isArray(j?.children)?j.children:[];if(!z.length)return;let D=Math.max(0,Number(j.size)||0);if(D<=0)return;let L=W-K,E=K;z.forEach((w,b)=>{let U=Math.max(0,Number(w.size)||0);if(U<=0)return;let A=U/D,f=E,F=b===z.length-1?W:E+L*A;if(E=F,F-f<0.003)return;let T=O4[Q];if(T){let s=W4(f,Q,J);if(Z.push({key:w.path,path:w.path,label:w.name,size:U,color:s,depth:Q,startAngle:f,endAngle:F,innerRadius:T[0],outerRadius:T[1],d:C1(120,120,T[0],T[1],f,F)}),Q===1)X.push({key:w.path,name:w.name,size:U,pct:Y>0?U/Y*100:0,color:s})}if(Q<K4)G(w,f,F,Q+1)})};return G(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:X}}function E1(_,$){if(!_||!$)return null;if(_.path===$)return _;let J=Array.isArray(_.children)?_.children:[];for(let Z of J){let X=E1(Z,$);if(X)return X}return null}function q4(_,$,J,Z){if(!J||J<=0)return{segments:[],legend:[]};let X=O4[1];if(!X)return{segments:[],legend:[]};let Y=-Math.PI/2,G=Math.PI*3/2,j=W4(Y,1,Z),W=`${$||"."}/[files]`;return{segments:[{key:W,path:W,label:_,size:J,color:j,depth:1,startAngle:Y,endAngle:G,innerRadius:X[0],outerRadius:X[1],d:C1(120,120,X[0],X[1],Y,G)}],legend:[{key:W,name:_,size:J,pct:100,color:j}]}}function X4(_,$=!1,J=!1){if(!_)return null;let Z=G4(_),X=V4(_,0),Y=X.size||Z,{segments:G,legend:j}=N4(X,Y,J);if(!G.length&&Y>0){let K=q4("[files]",X.path,Y,J);G=K.segments,j=K.legend}return{root:X,totalSize:Y,segments:G,legend:j,truncated:$,isDarkTheme:J}}function l8({payload:_}){if(!_)return null;let[$,J]=R(null),[Z,X]=R(_?.root?.path||"."),[Y,G]=R(()=>[_?.root?.path||"."]),[j,K]=R(!1);c(()=>{let e=_?.root?.path||".";X(e),G([e]),J(null)},[_?.root?.path,_?.totalSize]),c(()=>{if(!Z)return;K(!0);let e=setTimeout(()=>K(!1),180);return()=>clearTimeout(e)},[Z]);let W=v0(()=>{return E1(_.root,Z)||_.root},[_?.root,Z]),Q=W?.size||_.totalSize||0,{segments:z,legend:D}=v0(()=>{let e=N4(W,Q,_.isDarkTheme);if(e.segments.length>0)return e;if(Q<=0)return e;let Y_=W?.children?.length?"Total":"[files]";return q4(Y_,W?.path||_?.root?.path||".",Q,_.isDarkTheme)},[W,Q,_.isDarkTheme,_?.root?.path]),[L,E]=R(z),w=k(new Map),b=k(0);c(()=>{let e=w.current,Y_=new Map(z.map((o)=>[o.key,o])),a=performance.now(),h=220,__=(o)=>{let t=Math.min(1,(o-a)/220),z_=t*(2-t),q_=z.map((g)=>{let G_=e.get(g.key)||{startAngle:g.startAngle,endAngle:g.startAngle,innerRadius:g.innerRadius,outerRadius:g.innerRadius},W_=(F_,D_)=>F_+(D_-F_)*z_,y_=W_(G_.startAngle,g.startAngle),O_=W_(G_.endAngle,g.endAngle),H_=W_(G_.innerRadius,g.innerRadius),w_=W_(G_.outerRadius,g.outerRadius);return{...g,d:C1(120,120,H_,w_,y_,O_)}});if(E(q_),t<1)b.current=requestAnimationFrame(__)};if(b.current)cancelAnimationFrame(b.current);return b.current=requestAnimationFrame(__),w.current=Y_,()=>{if(b.current)cancelAnimationFrame(b.current)}},[z]);let U=L.length?L:z,A=Q>0?R0(Q):"0 B",f=W?.name||"",T=(f&&f!=="."?f:"Total")||"Total",s=A,d=Y.length>1,Z_=(e)=>{if(!e?.path)return;let Y_=E1(_.root,e.path);if(!Y_||!Array.isArray(Y_.children)||Y_.children.length===0)return;G((a)=>[...a,Y_.path]),X(Y_.path),J(null)},Q_=()=>{if(!d)return;G((e)=>{let Y_=e.slice(0,-1);return X(Y_[Y_.length-1]||_?.root?.path||"."),Y_}),J(null)};return q`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${j?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${W?.path||_?.root?.path||"."}`}
                data-segments=${U.length}
                data-base-size=${Q}>
                ${U.map((e)=>q`
                    <path
                        key=${e.key}
                        d=${e.d}
                        fill=${e.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===e.key?" is-hovered":""}`}
                        onMouseEnter=${()=>J(e)}
                        onMouseLeave=${()=>J(null)}
                        onTouchStart=${()=>J(e)}
                        onTouchEnd=${()=>J(null)}
                        onClick=${()=>Z_(e)}
                    >
                        <title>${e.label} — ${R0(e.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${d?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${T}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${s}</text>
                </g>
            </svg>
            ${D.length>0&&q`
                <div class="workspace-folder-starburst-legend">
                    ${D.slice(0,8).map((e)=>q`
                        <div key=${e.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${e.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${e.name}>${e.name}</span>
                            <span class="workspace-folder-starburst-size">${R0(e.size)}</span>
                            <span class="workspace-folder-starburst-pct">${e.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&q`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function o8({mediaId:_}){let[$,J]=R(null);if(c(()=>{if(!_)return;b2(_).then(J).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",X=$.metadata?.size?R0($.metadata.size):"";return q`
        <a href=${J2(_)} download=${Z} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${X&&q`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function B4({onFileSelect:_,visible:$=!0,active:J=void 0,onOpenEditor:Z}){let[X,Y]=R(null),[G,j]=R(new Set(["."])),[K,W]=R(null),[Q,z]=R(null),[D,L]=R(""),[E,w]=R(null),[b,U]=R(null),[A,f]=R(!0),[F,T]=R(!1),[s,d]=R(null),[Z_,Q_]=R(()=>Z2("workspaceShowHidden",!1)),[e,Y_]=R(!1),[a,h]=R(null),[__,o]=R(null),[t,z_]=R(null),[q_,g]=R(!1),[V_,G_]=R(null),[W_,y_]=R(()=>Y4()),O_=k(G),H_=k(""),w_=k(null),F_=k(0),D_=k(new Set),u_=k(null),C_=k(new Map),p_=k(_),X0=k(Z),U_=k(null),M_=k(null),_0=k(null),O0=k(null),Q0=k(null),N0=k(null),q0=k("."),I_=k(null),m_=k({path:null,dragging:!1,startX:0,startY:0}),a_=k({path:null,dragging:!1,startX:0,startY:0}),h_=k({path:null,timer:0}),f_=k(!1),P=k(0),r=k(new Map),b_=k(null),c_=k(null),r_=k(Z_),F0=k($),C0=k(J??$),j0=k(0),i_=k(t),y0=k(e),B0=k(a),I0=k(null),$0=k({x:0,y:0}),s_=k(0),k0=k(null),l_=k(K),K0=k(Q),J0=k(null),b0=k(E);p_.current=_,X0.current=Z,c(()=>{O_.current=G},[G]),c(()=>{r_.current=Z_},[Z_]),c(()=>{F0.current=$},[$]),c(()=>{C0.current=J??$},[J,$]),c(()=>{i_.current=t},[t]),c(()=>{let V=(B)=>{let y=B?.detail?.path;if(!y)return;let C=y.split("/"),u=[];for(let p=1;p<C.length;p++)u.push(C.slice(0,p).join("/"));if(u.length)j((p)=>{let $_=new Set(p);$_.add(".");for(let J_ of u)$_.add(J_);return $_});W(y),requestAnimationFrame(()=>{let p=document.querySelector(`[data-path="${CSS.escape(y)}"]`);if(p)p.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",V),()=>window.removeEventListener("workspace-reveal-path",V)},[]),c(()=>{y0.current=e},[e]),c(()=>{B0.current=a},[a]),c(()=>{l_.current=K},[K]),c(()=>{K0.current=Q},[Q]),c(()=>{b0.current=E},[E]),c(()=>{if(typeof window>"u"||typeof document>"u")return;let V=()=>y_(Y4());V();let B=window.matchMedia?.("(prefers-color-scheme: dark)"),y=()=>V();if(B?.addEventListener)B.addEventListener("change",y);else if(B?.addListener)B.addListener(y);let C=typeof MutationObserver<"u"?new MutationObserver(()=>V()):null;if(C?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)C?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(B?.removeEventListener)B.removeEventListener("change",y);else if(B?.removeListener)B.removeListener(y);C?.disconnect()}},[]),c(()=>{if(!Q)return;let V=Q0.current;if(!V)return;let B=requestAnimationFrame(()=>{try{V.focus(),V.select()}catch{}});return()=>cancelAnimationFrame(B)},[Q]);let S0=async(V)=>{T(!0),w(null),U(null);try{let B=await L3(V,20000);w(B)}catch(B){w({error:B.message||"Failed to load preview"})}finally{T(!1)}};U_.current=S0;let z0=async()=>{if(!F0.current)return;try{let V=await S2("",1,r_.current),B=Z4(V.root,O_.current,r_.current);if(B===H_.current){f(!1);return}if(H_.current=B,w_.current=V.root,!F_.current)F_.current=requestAnimationFrame(()=>{F_.current=0,Y((y)=>D1(y,w_.current)),f(!1)})}catch(V){d(V.message||"Failed to load workspace"),f(!1)}},L0=async(V)=>{if(!V)return;if(D_.current.has(V))return;D_.current.add(V);try{let B=await S2(V,1,r_.current);Y((y)=>L1(y,V,B.root))}catch(B){d(B.message||"Failed to load workspace")}finally{D_.current.delete(V)}};M_.current=L0;let x_=I(()=>{let V=K;if(!V)return".";let B=C_.current?.get(V);if(B&&B.type==="dir")return B.path;if(V==="."||!V.includes("/"))return".";let y=V.split("/");return y.pop(),y.join("/")||"."},[K]),H0=I((V)=>{let B=V?.closest?.(".workspace-row");if(!B)return null;let y=B.dataset.path,C=B.dataset.type;if(!y)return null;if(C==="dir")return y;if(y.includes("/")){let u=y.split("/");return u.pop(),u.join("/")||"."}return"."},[]),G0=I((V)=>{return H0(V?.target||null)},[H0]),v_=I((V)=>{i_.current=V,z_(V)},[]),R_=I(()=>{let V=h_.current;if(V?.timer)clearTimeout(V.timer);h_.current={path:null,timer:0}},[]),o_=I((V)=>{if(!V||V==="."){R_();return}let B=C_.current?.get(V);if(!B||B.type!=="dir"){R_();return}if(O_.current?.has(V)){R_();return}if(h_.current?.path===V)return;R_();let y=setTimeout(()=>{h_.current={path:null,timer:0},M_.current?.(V),j((C)=>{let u=new Set(C);return u.add(V),u})},600);h_.current={path:V,timer:y}},[R_]),Z0=I((V,B)=>{if($0.current={x:V,y:B},s_.current)return;s_.current=requestAnimationFrame(()=>{s_.current=0;let y=I0.current;if(!y)return;let C=$0.current;y.style.transform=`translate(${C.x+12}px, ${C.y+12}px)`})},[]),A0=I((V)=>{if(!V)return;let y=(C_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!y)return;o({path:V,label:y})},[]),E0=I(()=>{if(o(null),s_.current)cancelAnimationFrame(s_.current),s_.current=0;if(I0.current)I0.current.style.transform="translate(-9999px, -9999px)"},[]),x0=I((V)=>{if(!V)return".";let B=C_.current?.get(V);if(B&&B.type==="dir")return B.path;if(V==="."||!V.includes("/"))return".";let y=V.split("/");return y.pop(),y.join("/")||"."},[]),t_=I(()=>{z(null),L("")},[]),u0=I((V)=>{if(!V)return;let y=(C_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!y||V===".")return;z(V),L(y)},[]),p0=I(async()=>{let V=K0.current;if(!V)return;let B=(D||"").trim();if(!B){t_();return}let y=C_.current?.get(V),C=(y?.name||V.split("/").pop()||V).trim();if(B===C){t_();return}try{let p=(await C3(V,B))?.path||V,$_=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(t_(),d(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:V,newPath:p,type:y?.type||"file"}})),y?.type==="dir")j((J_)=>{let n=new Set;for(let j_ of J_)if(j_===V)n.add(p);else if(j_.startsWith(`${V}/`))n.add(`${p}${j_.slice(V.length)}`);else n.add(j_);return n});if(W(p),y?.type==="dir")w(null),T(!1),U(null);else U_.current?.(p);M_.current?.($_)}catch(u){d(u?.message||"Failed to rename file")}},[t_,D]),h0=I(async(V)=>{let C=V||".";for(let u=0;u<50;u+=1){let $_=`untitled${u===0?"":`-${u}`}.md`;try{let n=(await D3(C,$_,""))?.path||(C==="."?$_:`${C}/${$_}`);if(C&&C!==".")j((j_)=>new Set([...j_,C]));W(n),d(null),M_.current?.(C),U_.current?.(n);return}catch(J_){if(J_?.status===409||J_?.code==="file_exists")continue;d(J_?.message||"Failed to create file");return}}d("Failed to create file (untitled name already in use).")},[]),n0=I((V)=>{if(V?.stopPropagation?.(),q_)return;let B=x0(l_.current);h0(B)},[q_,x0,h0]);c(()=>{if(typeof window>"u")return;let V=(B)=>{let y=B?.detail?.updates||[];if(!Array.isArray(y)||y.length===0)return;Y((J_)=>{let n=J_;for(let j_ of y){if(!j_?.root)continue;if(!n||j_.path==="."||!j_.path)n=j_.root;else n=L1(n,j_.path,j_.root)}if(n)H_.current=Z4(n,O_.current,r_.current);return f(!1),n});let C=l_.current;if(Boolean(C)&&y.some((J_)=>{let n=J_?.path||"";if(!n||n===".")return!0;return C===n||C.startsWith(`${n}/`)||n.startsWith(`${C}/`)}))r.current.clear();if(!C||!b0.current)return;let p=C_.current?.get(C);if(p&&p.type==="dir")return;if(y.some((J_)=>{let n=J_?.path||"";if(!n||n===".")return!0;return C===n||C.startsWith(`${n}/`)}))U_.current?.(C)};return window.addEventListener("workspace-update",V),()=>window.removeEventListener("workspace-update",V)},[]),u_.current=z0;let w0=k(()=>{if(typeof window>"u")return;let V=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),B=C0.current??F0.current,y=document.visibilityState!=="hidden"&&(B||V.matches&&F0.current);x2(y,r_.current).catch(()=>{})}).current,H=k(0),v=k(()=>{if(H.current)clearTimeout(H.current);H.current=setTimeout(()=>{H.current=0,w0()},250)}).current;c(()=>{if(F0.current)u_.current?.();v()},[$,J]),c(()=>{u_.current(),w0();let V=setInterval(()=>u_.current(),c8),B=Y2("previewHeight",null),y=Number.isFinite(B)?Math.min(Math.max(B,80),600):280;if(P.current=y,_0.current)_0.current.style.setProperty("--preview-height",`${y}px`);let C=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),u=()=>v();if(C.addEventListener)C.addEventListener("change",u);else if(C.addListener)C.addListener(u);return document.addEventListener("visibilitychange",u),()=>{if(clearInterval(V),F_.current)cancelAnimationFrame(F_.current),F_.current=0;if(C.removeEventListener)C.removeEventListener("change",u);else if(C.removeListener)C.removeListener(u);if(document.removeEventListener("visibilitychange",u),H.current)clearTimeout(H.current),H.current=0;if(I_.current)clearTimeout(I_.current),I_.current=null;x2(!1,r_.current).catch(()=>{})}},[]);let l=v0(()=>j4(X,G,Z_),[X,G,Z_]),X_=v0(()=>new Map(l.map((V)=>[V.node.path,V.node])),[l]);C_.current=X_;let k_=(K?C_.current.get(K):null)?.type==="dir";c(()=>{if(!K||!k_){G_(null),b_.current=null,c_.current=null;return}let V=K,B=`${Z_?"hidden":"visible"}:${K}`,y=r.current,C=y.get(B);if(C?.root){y.delete(B),y.set(B,C);let $_=X4(C.root,Boolean(C.truncated),W_);if($_)b_.current=$_,c_.current=K,G_({loading:!1,error:null,payload:$_});return}let u=b_.current,p=c_.current;G_({loading:!0,error:null,payload:p===K?u:null}),S2(K,h8,Z_).then(($_)=>{if(l_.current!==V)return;let J_={root:$_?.root,truncated:Boolean($_?.truncated)};y.delete(B),y.set(B,J_);while(y.size>i8){let j_=y.keys().next().value;if(!j_)break;y.delete(j_)}let n=X4(J_.root,J_.truncated,W_);b_.current=n,c_.current=K,G_({loading:!1,error:null,payload:n})}).catch(($_)=>{if(l_.current!==V)return;G_({loading:!1,error:$_?.message||"Failed to load folder size chart",payload:p===K?u:null})})},[K,k_,Z_,W_]);let B_=Boolean(E&&E.kind==="text"&&!k_&&(!E.size||E.size<=262144)),g_=B_?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",V0=(V)=>{let B=V?.target;if(B instanceof Element)return B;return B?.parentElement||null},T0=k((V)=>{if(J0.current)clearTimeout(J0.current),J0.current=null;let y=V0(V)?.closest?.("[data-path]");if(!y)return;let C=y.dataset.path;if(y.dataset.type==="dir"||!C)return;if(K0.current===C)t_();X0.current?.(C)}).current,A_=k((V)=>{if(f_.current){f_.current=!1;return}let B=V0(V),y=B?.closest?.("[data-path]");if(O0.current?.focus?.(),!y)return;let C=y.dataset.path,u=y.dataset.type,p=Boolean(B?.closest?.(".workspace-caret")),$_=Boolean(B?.closest?.("button"))||Boolean(B?.closest?.("a"))||Boolean(B?.closest?.("input")),J_=l_.current===C,n=K0.current;if(n){if(n===C)return;t_()}if(J_&&!p&&!$_&&C!=="."){if(J0.current)clearTimeout(J0.current);J0.current=setTimeout(()=>{J0.current=null,u0(C)},350);return}if(u==="dir"){if(W(C),w(null),U(null),T(!1),!O_.current.has(C))M_.current?.(C);if(J_&&!p)return;j((W0)=>{let e_=new Set(W0);if(e_.has(C))e_.delete(C);else e_.add(C);return e_})}else{W(C);let j_=C_.current.get(C);if(j_)p_.current?.(j_.path,j_);U_.current?.(C)}}).current,P_=k(()=>{H_.current="",u_.current(),Array.from(O_.current||[]).filter((B)=>B&&B!==".").forEach((B)=>M_.current?.(B))}).current,D0=k(()=>{W(null),w(null),U(null),T(!1)}).current,K2=k(()=>{Q_((V)=>{let B=!V;if(typeof window<"u")T_("workspaceShowHidden",String(B));return r_.current=B,x2(!0,B).catch(()=>{}),H_.current="",u_.current?.(),Array.from(O_.current||[]).filter((C)=>C&&C!==".").forEach((C)=>M_.current?.(C)),B})}).current,G2=k((V)=>{if(V0(V)?.closest?.("[data-path]"))return;D0()}).current,f0=I(async(V)=>{if(!V)return;let B=V.split("/").pop()||V;if(!window.confirm(`Delete "${B}"? This cannot be undone.`))return;try{await k3(V);let C=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(l_.current===V)D0();M_.current?.(C),d(null)}catch(C){w((u)=>({...u||{},error:C.message||"Failed to delete file"}))}},[D0]),V2=I((V)=>{let B=O0.current;if(!B||!V||typeof CSS>"u"||typeof CSS.escape!=="function")return;B.querySelector(`[data-path="${CSS.escape(V)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),i0=I((V)=>{let B=l;if(!B||B.length===0)return;let y=K?B.findIndex((C)=>C.node.path===K):-1;if(V.key==="ArrowDown"){V.preventDefault();let C=Math.min(y+1,B.length-1),u=B[C];if(!u)return;if(W(u.node.path),u.node.type!=="dir")p_.current?.(u.node.path,u.node),U_.current?.(u.node.path);else w(null),T(!1),U(null);V2(u.node.path);return}if(V.key==="ArrowUp"){V.preventDefault();let C=y<=0?0:y-1,u=B[C];if(!u)return;if(W(u.node.path),u.node.type!=="dir")p_.current?.(u.node.path,u.node),U_.current?.(u.node.path);else w(null),T(!1),U(null);V2(u.node.path);return}if(V.key==="ArrowRight"&&y>=0){let C=B[y];if(C?.node?.type==="dir"&&!G.has(C.node.path))V.preventDefault(),M_.current?.(C.node.path),j((u)=>new Set([...u,C.node.path]));return}if(V.key==="ArrowLeft"&&y>=0){let C=B[y];if(C?.node?.type==="dir"&&G.has(C.node.path))V.preventDefault(),j((u)=>{let p=new Set(u);return p.delete(C.node.path),p});return}if(V.key==="Enter"&&y>=0){V.preventDefault();let C=B[y];if(!C)return;let u=C.node.path;if(C.node.type==="dir"){if(!O_.current.has(u))M_.current?.(u);j(($_)=>{let J_=new Set($_);if(J_.has(u))J_.delete(u);else J_.add(u);return J_}),w(null),U(null),T(!1)}else p_.current?.(u,C.node),U_.current?.(u);return}if((V.key==="Delete"||V.key==="Backspace")&&y>=0){let C=B[y];if(!C||C.node.type==="dir")return;V.preventDefault(),f0(C.node.path);return}if(V.key==="Escape")V.preventDefault(),D0()},[D0,f0,G,l,V2,K]),m0=I((V)=>{let B=V?.target?.closest?.(".workspace-row");if(!B)return;let y=B.dataset.type,C=B.dataset.path;if(!C||C===".")return;if(K0.current===C)return;let u=V?.touches?.[0];if(!u)return;if(m_.current={path:C,dragging:!1,startX:u.clientX,startY:u.clientY},y!=="file")return;if(I_.current)clearTimeout(I_.current);I_.current=setTimeout(()=>{if(I_.current=null,m_.current?.dragging)return;f0(C)},600)},[f0]),n_=I(()=>{if(I_.current)clearTimeout(I_.current),I_.current=null;let V=m_.current;if(V?.dragging&&V.path){let B=i_.current||x_(),y=k0.current;if(typeof y==="function")y(V.path,B)}m_.current={path:null,dragging:!1,startX:0,startY:0},j0.current=0,Y_(!1),h(null),v_(null),R_(),E0()},[x_,E0,v_,R_]),o2=I((V)=>{let B=m_.current,y=V?.touches?.[0];if(!y||!B?.path){if(I_.current)clearTimeout(I_.current),I_.current=null;return}let C=Math.abs(y.clientX-B.startX),u=Math.abs(y.clientY-B.startY),p=C>8||u>8;if(p&&I_.current)clearTimeout(I_.current),I_.current=null;if(!B.dragging&&p)B.dragging=!0,Y_(!0),h("move"),A0(B.path);if(B.dragging){V.preventDefault(),Z0(y.clientX,y.clientY);let $_=document.elementFromPoint(y.clientX,y.clientY),J_=H0($_)||x_();if(i_.current!==J_)v_(J_);o_(J_)}},[H0,x_,A0,Z0,v_,o_]),n2=k((V)=>{V.preventDefault();let B=_0.current;if(!B)return;let y=V.clientY,C=P.current||280,u=V.currentTarget;u.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let p=y,$_=(n)=>{p=n.clientY;let j_=B.clientHeight-80,W0=Math.min(Math.max(C-(n.clientY-y),80),j_);B.style.setProperty("--preview-height",`${W0}px`),P.current=W0},J_=()=>{let n=B.clientHeight-80,j_=Math.min(Math.max(C-(p-y),80),n);P.current=j_,u.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",T_("previewHeight",String(Math.round(j_))),document.removeEventListener("mousemove",$_),document.removeEventListener("mouseup",J_)};document.addEventListener("mousemove",$_),document.addEventListener("mouseup",J_)}).current,U2=k((V)=>{V.preventDefault();let B=_0.current;if(!B)return;let y=V.touches[0];if(!y)return;let C=y.clientY,u=P.current||280,p=V.currentTarget;p.classList.add("dragging"),document.body.style.userSelect="none";let $_=(n)=>{let j_=n.touches[0];if(!j_)return;n.preventDefault();let W0=B.clientHeight-80,e_=Math.min(Math.max(u-(j_.clientY-C),80),W0);B.style.setProperty("--preview-height",`${e_}px`),P.current=e_},J_=()=>{p.classList.remove("dragging"),document.body.style.userSelect="",T_("previewHeight",String(Math.round(P.current||u))),document.removeEventListener("touchmove",$_),document.removeEventListener("touchend",J_),document.removeEventListener("touchcancel",J_)};document.addEventListener("touchmove",$_,{passive:!1}),document.addEventListener("touchend",J_),document.addEventListener("touchcancel",J_)}).current,M0=async()=>{if(!K)return;try{let V=await E3(K);if(V.media_id)U(V.media_id)}catch(V){w((B)=>({...B||{},error:V.message||"Failed to attach"}))}},P0=async()=>{if(!K||k_)return;await f0(K)},d0=(V)=>{return Array.from(V?.dataTransfer?.types||[]).includes("Files")},F2=I((V)=>{if(!d0(V))return;if(V.preventDefault(),j0.current+=1,!y0.current)Y_(!0);h("upload");let B=G0(V)||x_();v_(B),o_(B)},[x_,G0,v_,o_]),r0=I((V)=>{if(!d0(V))return;if(V.preventDefault(),V.dataTransfer)V.dataTransfer.dropEffect="copy";if(!y0.current)Y_(!0);if(B0.current!=="upload")h("upload");let B=G0(V)||x_();if(i_.current!==B)v_(B);o_(B)},[x_,G0,v_,o_]),d2=I((V)=>{if(!d0(V))return;if(V.preventDefault(),j0.current=Math.max(0,j0.current-1),j0.current===0)Y_(!1),h(null),v_(null),R_()},[v_,R_]),s0=I(async(V,B=".")=>{let y=Array.from(V||[]);if(y.length===0)return;let C=B&&B!==""?B:".",u=C!=="."?C:"workspace root";g(!0);try{let p=null;for(let $_ of y)try{p=await V1($_,C)}catch(J_){let n=J_?.status,j_=J_?.code;if(n===409||j_==="file_exists"){let W0=$_?.name||"file";if(!window.confirm(`"${W0}" already exists in ${u}. Overwrite?`))continue;p=await V1($_,C,{overwrite:!0})}else throw J_}if(p?.path)W(p.path),U_.current?.(p.path);M_.current?.(C)}catch(p){d(p.message||"Failed to upload file")}finally{g(!1)}},[]),r2=I(async(V,B)=>{if(!V)return;let y=C_.current?.get(V);if(!y)return;let C=B&&B!==""?B:".",u=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(C===u)return;try{let $_=(await y3(V,C))?.path||V;if(y.type==="dir")j((J_)=>{let n=new Set;for(let j_ of J_)if(j_===V)n.add($_);else if(j_.startsWith(`${V}/`))n.add(`${$_}${j_.slice(V.length)}`);else n.add(j_);return n});if(W($_),y.type==="dir")w(null),T(!1),U(null);else U_.current?.($_);M_.current?.(u),M_.current?.(C)}catch(p){d(p?.message||"Failed to move entry")}},[]);k0.current=r2;let s2=I(async(V)=>{if(!d0(V))return;V.preventDefault(),j0.current=0,Y_(!1),h(null),z_(null),R_();let B=Array.from(V?.dataTransfer?.files||[]);if(B.length===0)return;let y=i_.current||G0(V)||x_();await s0(B,y)},[x_,G0,s0]),a2=I((V)=>{if(V?.stopPropagation?.(),q_)return;let B=V?.currentTarget?.dataset?.uploadTarget||".";q0.current=B,N0.current?.click()},[q_]),t2=I(()=>{if(q_)return;let V=l_.current,B=V?C_.current?.get(V):null;q0.current=B?.type==="dir"?B.path:".",N0.current?.click()},[q_]),a0=I((V)=>{if(!V||V.button!==0)return;let B=V.currentTarget;if(!B||!B.dataset)return;let y=B.dataset.path;if(!y||y===".")return;if(K0.current===y)return;if(V.target?.closest?.("button, a, input, .workspace-caret"))return;V.preventDefault(),a_.current={path:y,dragging:!1,startX:V.clientX,startY:V.clientY};let C=(p)=>{let $_=a_.current;if(!$_?.path)return;let J_=Math.abs(p.clientX-$_.startX),n=Math.abs(p.clientY-$_.startY),j_=J_>4||n>4;if(!$_.dragging&&j_)$_.dragging=!0,f_.current=!0,Y_(!0),h("move"),A0($_.path),Z0(p.clientX,p.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if($_.dragging){p.preventDefault(),Z0(p.clientX,p.clientY);let W0=document.elementFromPoint(p.clientX,p.clientY),e_=H0(W0)||x_();if(i_.current!==e_)v_(e_);o_(e_)}},u=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",u);let p=a_.current;if(p?.dragging&&p.path){let $_=i_.current||x_(),J_=k0.current;if(typeof J_==="function")J_(p.path,$_)}a_.current={path:null,dragging:!1,startX:0,startY:0},j0.current=0,Y_(!1),h(null),v_(null),R_(),E0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{f_.current=!1},0)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",u)},[H0,x_,A0,Z0,E0,v_,o_,R_]),W2=I(async(V)=>{let B=Array.from(V?.target?.files||[]);if(B.length===0)return;let y=q0.current||".";if(await s0(B,y),q0.current=".",V?.target)V.target.value=""},[s0]);return q`
        <aside
            class=${`workspace-sidebar${e?" workspace-drop-active":""}`}
            ref=${_0}
            onDragEnter=${F2}
            onDragOver=${r0}
            onDragLeave=${d2}
            onDrop=${s2}
        >
            <input type="file" multiple style="display:none" ref=${N0} onChange=${W2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${n0} title="New file" disabled=${q_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${P_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${Z_?" active":""}`}
                        onClick=${K2}
                        title=${Z_?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!Z_&&q`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${G2}>
                ${q_&&q`<div class="workspace-drop-hint">Uploading…</div>`}
                ${A&&q`<div class="workspace-loading">Loading…</div>`}
                ${s&&q`<div class="workspace-error">${s}</div>`}
                ${X&&q`
                    <div
                        class="workspace-tree-list"
                        ref=${O0}
                        tabIndex="0"
                        onClick=${A_}
                        onDblClick=${T0}
                        onKeyDown=${i0}
                        onTouchStart=${m0}
                        onTouchEnd=${n_}
                        onTouchMove=${o2}
                        onTouchCancel=${n_}
                    >
                        ${l.map(({node:V,depth:B})=>{let y=V.type==="dir",C=V.path===K,u=V.path===Q,p=y&&G.has(V.path),$_=t&&V.path===t,J_=Array.isArray(V.children)&&V.children.length>0?V.children.length:Number(V.child_count)||0;return q`
                                <div
                                    key=${V.path}
                                    class=${`workspace-row${C?" selected":""}${$_?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+B*g8}px`}}
                                    data-path=${V.path}
                                    data-type=${V.type}
                                    onMouseDown=${a0}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${y?p?q`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:q`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${y?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${y?q`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:q`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${u?q`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${Q0}
                                                value=${D}
                                                onInput=${(n)=>L(n?.target?.value||"")}
                                                onKeyDown=${(n)=>{if(n.key==="Enter")n.preventDefault(),p0();else if(n.key==="Escape")n.preventDefault(),t_()}}
                                                onBlur=${t_}
                                                onClick=${(n)=>n.stopPropagation()}
                                            />
                                        `:q`<span class="workspace-label">${V.name}</span>`}
                                    ${y&&!p&&J_>0&&q`
                                        <span class="workspace-count">${J_}</span>
                                    `}
                                    ${y&&q`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${V.path}
                                            title="Upload files to this folder"
                                            onClick=${a2}
                                            disabled=${q_}
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
            ${K&&q`
                <div class="workspace-preview-splitter-h" onMouseDown=${n2} onTouchStart=${U2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${K}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${n0} title="New file" disabled=${q_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!k_&&q`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>B_&&X0.current?.(K,E)}
                                    title=${g_}
                                    disabled=${!B_}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${P0}
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
                            ${k_?q`
                                    <button class="workspace-download" onClick=${t2}
                                        title="Upload files to this folder" disabled=${q_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${A3(K,Z_)}
                                        title="Download folder as zip" onClick=${(V)=>V.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:q`<button class="workspace-download" onClick=${M0} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${F&&q`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&q`<div class="workspace-error">${E.error}</div>`}
                    ${k_&&q`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${V_?.loading&&q`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${V_?.error&&q`<div class="workspace-error">${V_.error}</div>`}
                        ${V_?.payload&&V_.payload.segments?.length>0&&q`
                            <${l8} payload=${V_.payload} />
                        `}
                        ${V_?.payload&&(!V_.payload.segments||V_.payload.segments.length===0)&&q`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!k_&&q`
                        <div class="workspace-preview-meta">
                            ${E.size?q`<span>${R0(E.size)}</span>`:""}
                            ${E.mtime?q`<span>${c2(E.mtime)}</span>`:""}
                            ${E.truncated?q`<span>truncated</span>`:""}
                        </div>
                        ${E.kind==="image"&&q`
                            <div class="workspace-preview-image">
                                <img src=${E.url||W1(E.path)} alt="preview" />
                            </div>
                        `}
                        ${E.kind==="text"&&q`
                            ${E.content_type==="text/markdown"?q`<div class="workspace-preview-text"
                                    dangerouslySetInnerHTML=${{__html:j2(E.text||"",null,{rewriteImageSrc:(V)=>p8(V,E.path||K)})}} />`:q`<pre class="workspace-preview-text"><code>${E.text||""}</code></pre>`}
                        `}
                        ${E.kind==="binary"&&q`
                            <div class="workspace-preview-text">Binary file — download to view.</div>
                        `}
                    `}
                    ${b&&q`
                        <div class="workspace-download-card">
                            <${o8} mediaId=${b} />
                        </div>
                    `}
                </div>
            `}
            ${__&&q`
                <div class="workspace-drag-ghost" ref=${I0}>${__.label}</div>
            `}
        </aside>
    `}function z4({tabs:_,activeId:$,onActivate:J,onClose:Z,onCloseOthers:X,onCloseAll:Y,onTogglePin:G,onTogglePreview:j,previewTabs:K,onToggleDock:W,dockVisible:Q}){let[z,D]=R(null),L=k(null);c(()=>{if(!z)return;let U=(A)=>{if(A.type==="keydown"&&A.key!=="Escape")return;D(null)};return document.addEventListener("click",U),document.addEventListener("keydown",U),()=>{document.removeEventListener("click",U),document.removeEventListener("keydown",U)}},[z]),c(()=>{let U=(A)=>{if(A.ctrlKey&&A.key==="Tab"){if(A.preventDefault(),!_.length)return;let f=_.findIndex((F)=>F.id===$);if(A.shiftKey){let F=_[(f-1+_.length)%_.length];J?.(F.id)}else{let F=_[(f+1)%_.length];J?.(F.id)}return}if((A.ctrlKey||A.metaKey)&&A.key==="w"){let f=document.querySelector(".editor-pane");if(f&&f.contains(document.activeElement)){if(A.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$,J,Z]);let E=I((U,A)=>{if(U.button===1){U.preventDefault(),Z?.(A);return}if(U.button===0)J?.(A)},[J,Z]),w=I((U,A)=>{U.preventDefault(),D({id:A,x:U.clientX,y:U.clientY})},[]),b=I((U,A)=>{U.stopPropagation(),Z?.(A)},[Z]);if(c(()=>{if(!$||!L.current)return;let U=L.current.querySelector(".tab-item.active");if(U)U.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return q`
        <div class="tab-strip" ref=${L} role="tablist">
            ${_.map((U)=>q`
                <div
                    key=${U.id}
                    class=${`tab-item${U.id===$?" active":""}${U.dirty?" dirty":""}${U.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${U.id===$}
                    title=${U.path}
                    onMouseDown=${(A)=>E(A,U.id)}
                    onContextMenu=${(A)=>w(A,U.id)}
                >
                    ${U.pinned&&q`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${U.label}</span>
                    <span
                        class="tab-close"
                        onClick=${(A)=>b(A,U.id)}
                        title=${U.dirty?"Unsaved changes":"Close"}
                        aria-label=${U.dirty?"Unsaved changes":`Close ${U.label}`}
                    >
                        ${U.dirty?q`<span class="tab-dirty-dot" aria-hidden="true"></span>`:q`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </span>
                </div>
            `)}
            ${W&&q`
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
        ${z&&q`
            <div class="tab-context-menu" style=${{left:z.x+"px",top:z.y+"px"}}>
                <button onClick=${()=>{Z?.(z.id),D(null)}}>Close</button>
                <button onClick=${()=>{X?.(z.id),D(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),D(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{G?.(z.id),D(null)}}>
                    ${_.find((U)=>U.id===z.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${j&&/\.(md|mdx|markdown)$/i.test(z.id)&&q`
                    <hr />
                    <button onClick=${()=>{j(z.id),D(null)}}>
                        ${K?.has(z.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var n8=400,y1=60,H4=220,k1="mdPreviewHeight";function d8(){try{let _=localStorage.getItem(k1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=y1?$:H4}catch{return H4}}function U4({getContent:_,path:$,onClose:J}){let[Z,X]=R(""),[Y,G]=R(d8),j=k(null),K=k(null),W=k(""),Q=k(_);return Q.current=_,c(()=>{let L=()=>{let w=Q.current?.()||"";if(w===W.current)return;W.current=w;try{let b=j2(w,null,{sanitize:!1});X(b)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let E=setInterval(L,n8);return()=>clearInterval(E)},[]),c(()=>{if(j.current&&Z)g2(j.current).catch(()=>{})},[Z]),q`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let E=L.clientY,w=K.current?.offsetHeight||Y,b=K.current?.parentElement,U=b?b.offsetHeight*0.7:500,A=L.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let f=(T)=>{let s=Math.min(Math.max(w-(T.clientY-E),y1),U);G(s)},F=()=>{A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(k1,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",F)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",F)}}
            onTouchStart=${(L)=>{L.preventDefault();let E=L.touches[0];if(!E)return;let w=E.clientY,b=K.current?.offsetHeight||Y,U=K.current?.parentElement,A=U?U.offsetHeight*0.7:500,f=L.currentTarget;f.classList.add("dragging"),document.body.style.userSelect="none";let F=(s)=>{let d=s.touches[0];if(!d)return;s.preventDefault();let Z_=Math.min(Math.max(b-(d.clientY-w),y1),A);G(Z_)},T=()=>{f.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(k1,String(Math.round(K.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",F),document.removeEventListener("touchend",T),document.removeEventListener("touchcancel",T)};document.addEventListener("touchmove",F,{passive:!1}),document.addEventListener("touchend",T),document.addEventListener("touchcancel",T)}}
        ></div>
        <div class="md-preview-panel" ref=${K} style=${{height:Y+"px"}}>
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
                ref=${j}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}class F4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,J=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let X=Z.canHandle(_);if(X===!1||X===0)continue;let Y=X===!0?0:typeof X==="number"?X:0;if(Y>J)J=Y,$=Z}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var Y0=new F4;var i2=null,A1=null;function L4(){if(A1)return Promise.resolve(A1);if(!i2)i2=import("/static/dist/editor.bundle.js").then((_)=>{return A1=_,_}).catch((_)=>{throw i2=null,_});return i2}class E4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await L4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){if(this.queuedViewStateCb=_,this.real&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(_)}restoreViewState(_){if(this.queuedViewState=_,this.real&&typeof this.real.restoreViewState==="function")this.real.restoreViewState(_)}getPath(){if(this.real&&typeof this.real.getPath==="function")return this.real.getPath();return this.context.path||""}setPath(_){if(this.real&&typeof this.real.setPath==="function")this.real.setPath(_)}}var w1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;return 1},mount(_,$){return new E4(_,$)}};function M1(){L4().catch(()=>{})}class D4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let J=document.createElement("div");J.className="terminal-pane-header";let Z=document.createElement("span");Z.className="terminal-pane-title",Z.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",J.append(Z,X);let Y=document.createElement("div");Y.className="terminal-pane-body",Y.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(J,Y),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var P1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new D4(_,$)}};class C4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let J of this.listeners)try{J(_,$)}catch{}}open(_,$){let J=this.tabs.get(_);if(!J)J={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,J);return this.activate(_),J}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((J)=>J!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,J]of this.tabs)if($!==_&&!J.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((J)=>J!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let J=this.tabs.get(_);if(!J||J.dirty===$)return;J.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let J=this.tabs.get(_);if(J)J.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,J){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=J||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),J=_[($+1)%_.length];this.activate(J.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),J=_[($-1+_.length)%_.length];this.activate(J.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var E_=new C4;function y4({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:J}){c(()=>{J();let Z=new O1(_,$);Z.connect();let X=()=>{Z.reconnectIfNeeded()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),Z.disconnect()}},[$,_,J])}function k4(){let[_,$]=R(!1),[J,Z]=R("default"),X=k(!1);c(()=>{let K=Z2("notificationsEnabled",!1);if(X.current=K,$(K),typeof Notification<"u")Z(Notification.permission)},[]),c(()=>{X.current=_},[_]);let Y=I(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let K=Notification.requestPermission();if(K&&typeof K.then==="function")return K;return Promise.resolve(K)}catch{return Promise.resolve("default")}},[]),G=I(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let W=await Y();if(Z(W||"default"),W!=="granted"){X.current=!1,$(!1),T_("notificationsEnabled","false");return}}let K=!X.current;X.current=K,$(K),T_("notificationsEnabled",String(K))},[Y]),j=I((K,W)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let Q=new Notification(K,{body:W});return Q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:J,toggleNotifications:G,notify:j}}var H2=(_)=>{let $=new Set;return(_||[]).filter((J)=>{if(!J||$.has(J.id))return!1;return $.add(J.id),!0})};function A4({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[J,Z]=R(null),[X,Y]=R(!1),G=k(!1),j=k(null),K=k(!1),W=k(null);c(()=>{G.current=X},[X]);let Q=I(async(L=null)=>{try{if(L){let E=await G3(L);Z(E.posts),Y(!1)}else{let E=await I2(10);Z(E.posts),Y(E.has_more)}}catch(E){console.error("Failed to load posts:",E)}},[]),z=I(async()=>{try{let L=await I2(10);Z((E)=>{if(!E||E.length===0)return L.posts;return H2([...L.posts,...E])}),Y((E)=>E||L.has_more)}catch(L){console.error("Failed to refresh timeline:",L)}},[]),D=I(async(L={})=>{if(!J||J.length===0)return;if(K.current)return;let{preserveScroll:E=!0,preserveMode:w="top",allowRepeat:b=!1}=L,U=(F)=>{if(!E){F();return}if(w==="top")$(F);else _(F)},f=J.slice().sort((F,T)=>F.id-T.id)[0]?.id;if(!Number.isFinite(f))return;if(!b&&W.current===f)return;K.current=!0,W.current=f;try{let F=await I2(10,f);if(F.posts.length>0)U(()=>{Z((T)=>H2([...F.posts,...T||[]])),Y(F.has_more)});else Y(!1)}catch(F){console.error("Failed to load more posts:",F)}finally{K.current=!1}},[J,_,$]);return c(()=>{j.current=D},[D]),{posts:J,setPosts:Z,hasMore:X,setHasMore:Y,hasMoreRef:G,loadPosts:Q,refreshTimeline:z,loadMore:D,loadMoreRef:j,loadingMoreRef:K,lastBeforeIdRef:W}}function w4(){let[_,$]=R(null),[J,Z]=R({text:"",totalLines:0}),[X,Y]=R(""),[G,j]=R({text:"",totalLines:0}),[K,W]=R(null),[Q,z]=R(null),[D,L]=R(null),E=k(null),w=k(0),b=k(!1),U=k(""),A=k(""),f=k(null),F=k(null),T=k(null),s=k(null),d=k(!1),Z_=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:J,setAgentDraft:Z,agentPlan:X,setAgentPlan:Y,agentThought:G,setAgentThought:j,pendingRequest:K,setPendingRequest:W,currentTurnId:Q,setCurrentTurnId:z,steerQueuedTurnId:D,setSteerQueuedTurnId:L,lastAgentEventRef:E,lastSilenceNoticeRef:w,isAgentRunningRef:b,draftBufferRef:U,thoughtBufferRef:A,pendingRequestRef:f,stalledPostIdRef:F,currentTurnIdRef:T,steerQueuedTurnIdRef:s,thoughtExpandedRef:d,draftExpandedRef:Z_}}function M4({appShellRef:_,sidebarWidthRef:$,editorWidthRef:J,dockHeightRef:Z}){let X=k((Q)=>{Q.preventDefault();let z=_.current;if(!z)return;let D=Q.clientX,L=$.current||280,E=Q.currentTarget;E.classList.add("dragging"),z.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let w=D,b=(A)=>{w=A.clientX;let f=Math.min(Math.max(L+(A.clientX-D),160),600);z.style.setProperty("--sidebar-width",`${f}px`),$.current=f},U=()=>{let A=Math.min(Math.max(L+(w-D),160),600);$.current=A,E.classList.remove("dragging"),z.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",T_("sidebarWidth",String(Math.round(A))),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",U)}).current,Y=k((Q)=>{Q.preventDefault();let z=_.current;if(!z)return;let D=Q.touches[0];if(!D)return;let L=D.clientX,E=$.current||280,w=Q.currentTarget;w.classList.add("dragging"),z.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let b=(A)=>{let f=A.touches[0];if(!f)return;A.preventDefault();let F=Math.min(Math.max(E+(f.clientX-L),160),600);z.style.setProperty("--sidebar-width",`${F}px`),$.current=F},U=()=>{w.classList.remove("dragging"),z.classList.remove("sidebar-resizing"),document.body.style.userSelect="",T_("sidebarWidth",String(Math.round($.current||E))),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,G=k((Q)=>{Q.preventDefault();let z=_.current;if(!z)return;let D=Q.clientX,L=J.current||$.current||280,E=Q.currentTarget;E.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let w=D,b=(A)=>{w=A.clientX;let f=Math.min(Math.max(L+(A.clientX-D),200),800);z.style.setProperty("--editor-width",`${f}px`),J.current=f},U=()=>{let A=Math.min(Math.max(L+(w-D),200),800);J.current=A,E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",T_("editorWidth",String(Math.round(A))),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",U)}).current,j=k((Q)=>{Q.preventDefault();let z=_.current;if(!z)return;let D=Q.touches[0];if(!D)return;let L=D.clientX,E=J.current||$.current||280,w=Q.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let b=(A)=>{let f=A.touches[0];if(!f)return;A.preventDefault();let F=Math.min(Math.max(E+(f.clientX-L),200),800);z.style.setProperty("--editor-width",`${F}px`),J.current=F},U=()=>{w.classList.remove("dragging"),document.body.style.userSelect="",T_("editorWidth",String(Math.round(J.current||E))),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,K=k((Q)=>{Q.preventDefault();let z=_.current;if(!z)return;let D=Q.clientY,L=Z?.current||200,E=Q.currentTarget;E.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let w=D,b=(A)=>{w=A.clientY;let f=Math.min(Math.max(L-(A.clientY-D),100),window.innerHeight*0.5);if(z.style.setProperty("--dock-height",`${f}px`),Z)Z.current=f},U=()=>{let A=Math.min(Math.max(L-(w-D),100),window.innerHeight*0.5);if(Z)Z.current=A;E.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",T_("dockHeight",String(Math.round(A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",U)}).current,W=k((Q)=>{Q.preventDefault();let z=_.current;if(!z)return;let D=Q.touches[0];if(!D)return;let L=D.clientY,E=Z?.current||200,w=Q.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let b=(A)=>{let f=A.touches[0];if(!f)return;A.preventDefault();let F=Math.min(Math.max(E-(f.clientY-L),100),window.innerHeight*0.5);if(z.style.setProperty("--dock-height",`${F}px`),Z)Z.current=F},U=()=>{w.classList.remove("dragging"),document.body.style.userSelect="",T_("dockHeight",String(Math.round(Z?.current||E))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:G,handleEditorSplitterTouchStart:j,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:W}}function P4({onTabClosed:_}={}){let $=k(_);$.current=_;let[J,Z]=R(()=>E_.getTabs()),[X,Y]=R(()=>E_.getActiveId()),[G,j]=R(()=>E_.getTabs().length>0);c(()=>{return E_.onChange((F,T)=>{Z(F),Y(T),j(F.length>0)})},[]);let[K,W]=R(()=>new Set),Q=I((F)=>{W((T)=>{let s=new Set(T);if(s.has(F))s.delete(F);else s.add(F);return s})},[]),z=I((F)=>{W((T)=>{if(!T.has(F))return T;let s=new Set(T);return s.delete(F),s})},[]),D=I((F)=>{if(!F)return;let T={path:F,mode:"edit"};try{if(!Y0.resolve(T)){if(!Y0.get("editor")){console.warn(`[openEditor] No pane handler for: ${F}`);return}}}catch(s){console.warn(`[openEditor] paneRegistry.resolve() error for "${F}":`,s)}E_.open(F)},[]),L=I(()=>{let F=E_.getActiveId();if(F){let T=E_.get(F);if(T?.dirty){if(!window.confirm(`"${T.label}" has unsaved changes. Close anyway?`))return}E_.close(F),z(F),$.current?.(F)}},[z]),E=I((F)=>{let T=E_.get(F);if(T?.dirty){if(!window.confirm(`"${T.label}" has unsaved changes. Close anyway?`))return}E_.close(F),z(F),$.current?.(F)},[z]),w=I((F)=>{E_.activate(F)},[]),b=I((F)=>{let T=E_.getTabs().filter((Z_)=>Z_.id!==F&&!Z_.pinned),s=T.filter((Z_)=>Z_.dirty).length;if(s>0){if(!window.confirm(`${s} unsaved tab${s>1?"s":""} will be closed. Continue?`))return}let d=T.map((Z_)=>Z_.id);E_.closeOthers(F),d.forEach((Z_)=>{z(Z_),$.current?.(Z_)})},[z]),U=I(()=>{let F=E_.getTabs().filter((d)=>!d.pinned),T=F.filter((d)=>d.dirty).length;if(T>0){if(!window.confirm(`${T} unsaved tab${T>1?"s":""} will be closed. Continue?`))return}let s=F.map((d)=>d.id);E_.closeAll(),s.forEach((d)=>{z(d),$.current?.(d)})},[z]),A=I((F)=>{E_.togglePin(F)},[]),f=I(()=>{let F=E_.getActiveId();if(F)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:F}}))},[]);return c(()=>{let F=(T)=>{let{oldPath:s,newPath:d,type:Z_}=T.detail||{};if(!s||!d)return;if(Z_==="dir"){for(let Q_ of E_.getTabs())if(Q_.path===s||Q_.path.startsWith(`${s}/`)){let e=`${d}${Q_.path.slice(s.length)}`;E_.rename(Q_.id,e)}}else E_.rename(s,d)};return window.addEventListener("workspace-file-renamed",F),()=>window.removeEventListener("workspace-file-renamed",F)},[]),c(()=>{let F=(T)=>{if(E_.hasUnsaved())T.preventDefault(),T.returnValue=""};return window.addEventListener("beforeunload",F),()=>window.removeEventListener("beforeunload",F)},[]),{editorOpen:G,tabStripTabs:J,tabStripActiveId:X,previewTabs:K,openEditor:D,closeEditor:L,handleTabClose:E,handleTabActivate:w,handleTabCloseOthers:b,handleTabCloseAll:U,handleTabTogglePin:A,handleTabTogglePreview:Q,revealInExplorer:f}}function I1(_,$){try{if(typeof window>"u")return $;let J=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=J[_]??window[Z],Y=Number(X);return Number.isFinite(Y)?Y:$}catch{return $}}var b1=I1("warning",30000),I4=I1("finalize",120000),b4=I1("refresh",30000),S4=30000;function x4(_){let $={};return(_?.agents||[]).forEach((J)=>{$[J.id]=J}),$}function T4(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function f4(_=30000){let[,$]=R(0);c(()=>{let J=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(J)},[_])}function l2(_,$=160){let J=String(_||"").replace(/\r\n/g,`
`);if(!J)return 0;return J.split(`
`).reduce((Z,X)=>Z+Math.max(1,Math.ceil(X.length/$)),0)}function g4(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var r8=V3,v4=O3,s8=N3,R4=H3,u4=U3,m4=q3,S1=typeof K1==="function"?K1:g4("getAgentContext",null),a8=typeof l0==="function"?l0:g4("getAgentModels",{current:null,models:[]});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});Y0.register(w1);M1();var t8=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(t8)Y0.register(P1);function e8(){let[_,$]=R("disconnected"),[J,Z]=R(null),[X,Y]=R(null),[G,j]=R(!1),[K,W]=R([]),[Q,z]=R([]),[D,L]=R(null),{agentStatus:E,setAgentStatus:w,agentDraft:b,setAgentDraft:U,agentPlan:A,setAgentPlan:f,agentThought:F,setAgentThought:T,pendingRequest:s,setPendingRequest:d,currentTurnId:Z_,setCurrentTurnId:Q_,steerQueuedTurnId:e,setSteerQueuedTurnId:Y_,lastAgentEventRef:a,lastSilenceNoticeRef:h,isAgentRunningRef:__,draftBufferRef:o,thoughtBufferRef:t,pendingRequestRef:z_,stalledPostIdRef:q_,currentTurnIdRef:g,steerQueuedTurnIdRef:V_,thoughtExpandedRef:G_,draftExpandedRef:W_}=w4(),[y_,O_]=R({}),[H_,w_]=R(null),[F_,D_]=R(null),[u_,C_]=R(!1),[p_,X0]=R(null),[U_,M_]=R(null),{notificationsEnabled:_0,notificationPermission:O0,toggleNotifications:Q0,notify:N0}=k4(),[q0,I_]=R(()=>new Set),[m_,a_]=R(()=>Z2("workspaceOpen",!0)),h_=k(null),{editorOpen:f_,tabStripTabs:P,tabStripActiveId:r,previewTabs:b_,openEditor:c_,closeEditor:r_,handleTabClose:F0,handleTabActivate:C0,handleTabCloseOthers:j0,handleTabCloseAll:i_,handleTabTogglePin:y0,handleTabTogglePreview:B0,revealInExplorer:I0}=P4({onTabClosed:(O)=>h_.current?.(O)}),$0=k(null),s_=k(null);c(()=>{let O=$0.current;if(!O)return;if(s_.current)s_.current.dispose(),s_.current=null;let N=r;if(!N)return;let M={path:N,mode:"edit"},x=Y0.resolve(M)||Y0.get("editor");if(!x){O.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let m=x.mount(O,M);s_.current=m,m.onDirtyChange?.((i)=>{E_.setDirty(N,i)}),m.onSaveRequest?.(()=>{}),m.onClose?.(()=>{r_()});let S=E_.getViewState(N);if(S&&typeof m.restoreViewState==="function")requestAnimationFrame(()=>m.restoreViewState(S));if(typeof m.onViewStateChange==="function")m.onViewStateChange((i)=>{E_.saveViewState(N,i)});return requestAnimationFrame(()=>m.focus()),()=>{if(s_.current===m)m.dispose(),s_.current=null}},[r,r_]);let[k0,l_]=R({name:"You",avatar_url:null,avatar_background:null}),K0=k(!1),J0=k(!1),b0=k({}),S0=k({name:null,avatar_url:null}),z0=k({currentHashtag:null,searchQuery:null}),L0=k(null),x_=k(null),H0=k(0),G0=k(0),v_=k(0),R_=k(null),o_=k(null),Z0=k(null),A0=k(0),E0=k({title:null,avatarBase:null}),x0=k(null),t_=I(()=>{if(x0.current)clearTimeout(x0.current),x0.current=null;L(null)},[]);f4(30000),c(()=>{return f3()},[]),c(()=>{T_("workspaceOpen",String(m_))},[m_]),c(()=>{return()=>{t_()}},[t_]),c(()=>{b0.current=y_||{}},[y_]),c(()=>{S0.current=k0||{name:"You",avatar_url:null,avatar_background:null}},[k0]);let u0=I((O,N,M=null)=>{if(typeof document>"u")return;let x=(O||"").trim()||"PiClaw";if(E0.current.title!==x){document.title=x;let S_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(S_&&S_.getAttribute("content")!==x)S_.setAttribute("content",x);E0.current.title=x}let m=document.getElementById("dynamic-favicon");if(!m)return;let S=m.getAttribute("data-default")||m.getAttribute("href")||"/favicon.ico",i=N||S,N_=N?`${i}|${M||""}`:i;if(E0.current.avatarBase!==N_){let S_=N?`${i}${i.includes("?")?"&":"?"}v=${M||Date.now()}`:i;m.setAttribute("href",S_),E0.current.avatarBase=N_}},[]),p0=I((O)=>{if(!O)return;W((N)=>N.includes(O)?N:[...N,O])},[]),h0=I((O)=>{W((N)=>N.filter((M)=>M!==O))},[]);h_.current=h0;let n0=I(()=>{W([])},[]),w0=I((O,N=null,M=3000)=>{t_(),L({title:O,detail:N||null}),x0.current=setTimeout(()=>{L((x)=>x?.title===O?null:x)},M)},[t_]),H=I((O)=>{if(typeof O!=="string")return;let N=O.trim();if(!N){w0("No file selected","Use a valid file path from a file pill.");return}if(!f_){w0("Editor pane is not open","Open the editor pane to open files from pills.");return}if(/^[a-z][a-z0-9+.-]*:/i.test(N)){w0("Cannot open external path from file pill","Use an in-workspace file path.");return}let x={path:N,mode:"edit"};if(!Y0.resolve(x)){w0("No editor available",`No editor can open: ${N}`);return}c_(N)},[f_,c_,w0]),v=I(()=>{let O=r;if(O)p0(O)},[r,p0]),l=I((O)=>{if(!O)return;z((N)=>N.includes(O)?N:[...N,O])},[]),X_=I(async(O)=>{let N=(x)=>{x.scrollIntoView({behavior:"smooth",block:"center"}),x.classList.add("post-highlight"),setTimeout(()=>x.classList.remove("post-highlight"),2000)},M=document.getElementById("post-"+O);if(M){N(M);return}try{let m=(await W3(O))?.thread?.[0];if(!m)return;n_((S)=>{if(!S)return[m];if(S.some((i)=>i.id===m.id))return S;return[...S,m]}),requestAnimationFrame(()=>{setTimeout(()=>{let S=document.getElementById("post-"+O);if(S)N(S)},50)})}catch(x){console.error("[scrollToMessage] Failed to fetch message",O,x)}},[]),L_=I((O)=>{z((N)=>N.filter((M)=>M!==O))},[]),k_=I(()=>{z([])},[]),B_=I((O={})=>{let N=Date.now();if(a.current=N,O.running)__.current=!0;if(O.clearSilence)h.current=0},[]),g_=I(()=>{if(Z0.current)clearTimeout(Z0.current),Z0.current=null;A0.current=0},[]);c(()=>()=>{g_()},[g_]);let V0=I(()=>{g_(),w((O)=>{if(!O)return O;if(!(O.last_activity||O.lastActivity))return O;let{last_activity:N,lastActivity:M,...x}=O;return x})},[g_]),T0=I((O)=>{if(!O)return;g_();let N=Date.now();A0.current=N,w({type:O.type||"active",last_activity:!0}),Z0.current=setTimeout(()=>{if(A0.current!==N)return;w((M)=>{if(!M||!(M.last_activity||M.lastActivity))return M;return null})},S4)},[g_]),A_=I(()=>{__.current=!1,a.current=null,h.current=0,o.current="",t.current="",z_.current=null,o_.current=null,g.current=null,V_.current=null,g_(),Q_(null),Y_(null),G_.current=!1,W_.current=!1},[g_,Q_,Y_]),P_=I((O)=>{if(!O)return;if(g.current===O)return;g.current=O,Q_(O),V_.current=null,Y_(null),o.current="",t.current="",U({text:"",totalLines:0}),f(""),T({text:"",totalLines:0}),d(null),z_.current=null,o_.current=null,G_.current=!1,W_.current=!1},[Q_,Y_]),D0=I((O)=>{if(typeof document<"u"){let S_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&S_)return}let N=o_.current;if(!N||!N.post)return;if(O&&N.turnId&&N.turnId!==O)return;let M=N.post;if(M.id&&R_.current===M.id)return;let x=String(M?.data?.content||"").trim();if(!x)return;R_.current=M.id||R_.current,o_.current=null;let m=x.replace(/\s+/g," ").slice(0,200),S=b0.current||{},N_=(M?.data?.agent_id?S[M.data.agent_id]:null)?.name||"Pi";N0(N_,m)},[N0]),K2=I(async(O,N)=>{if(O!=="thought"&&O!=="draft")return;let M=g.current;if(O==="thought"){if(G_.current=N,M)try{await u4(M,"thought",N)}catch(x){console.warn("Failed to update thought visibility:",x)}if(!N)return;try{let x=M?await R4(M,"thought"):null;if(x?.text)t.current=x.text;T((m)=>({...m||{text:"",totalLines:0},fullText:t.current||m?.fullText||"",totalLines:Number.isFinite(x?.total_lines)?x.total_lines:m?.totalLines||0}))}catch(x){console.warn("Failed to fetch full thought:",x)}return}if(W_.current=N,M)try{await u4(M,"draft",N)}catch(x){console.warn("Failed to update draft visibility:",x)}if(!N)return;try{let x=M?await R4(M,"draft"):null;if(x?.text)o.current=x.text;U((m)=>({...m||{text:"",totalLines:0},fullText:o.current||m?.fullText||"",totalLines:Number.isFinite(x?.total_lines)?x.total_lines:m?.totalLines||0}))}catch(x){console.warn("Failed to fetch full draft:",x)}},[]),G2=k(null),f0=I(()=>{if(L0.current)L0.current.scrollTop=0},[]);G2.current=f0;let V2=I((O)=>{let N=L0.current;if(!N||typeof O!=="function"){O?.();return}let{currentHashtag:M,searchQuery:x}=z0.current||{},m=!(x&&!M),S=m?N.scrollHeight-N.scrollTop:N.scrollTop;O(),requestAnimationFrame(()=>{let i=L0.current;if(!i)return;if(m){let N_=Math.max(i.scrollHeight-S,0);i.scrollTop=N_}else{let N_=Math.max(i.scrollHeight-i.clientHeight,0),S_=Math.min(S,N_);i.scrollTop=S_}})},[]),i0=I((O)=>{let N=L0.current;if(!N||typeof O!=="function"){O?.();return}let M=N.scrollTop;O(),requestAnimationFrame(()=>{let x=L0.current;if(!x)return;let m=Math.max(x.scrollHeight-x.clientHeight,0);x.scrollTop=Math.min(M,m)})},[]),{posts:m0,setPosts:n_,hasMore:o2,setHasMore:n2,hasMoreRef:U2,loadPosts:M0,refreshTimeline:P0,loadMore:d0,loadMoreRef:F2}=A4({preserveTimelineScroll:V2,preserveTimelineScrollTop:i0}),r0=I(()=>{let O=q_.current;if(!O)return;n_((N)=>N?N.filter((M)=>M.id!==O):N),q_.current=null},[n_]),{handleSplitterMouseDown:d2,handleSplitterTouchStart:s0,handleEditorSplitterMouseDown:r2,handleEditorSplitterTouchStart:s2,handleDockSplitterMouseDown:a2,handleDockSplitterTouchStart:t2}=M4({appShellRef:x_,sidebarWidthRef:H0,editorWidthRef:G0,dockHeightRef:v_}),a0=I(()=>{if(!__.current)return;__.current=!1,h.current=0,a.current=null,g.current=null,Q_(null),G_.current=!1,W_.current=!1;let O=(o.current||"").trim();if(o.current="",t.current="",U({text:"",totalLines:0}),f(""),T({text:"",totalLines:0}),d(null),z_.current=null,o_.current=null,!O){w({type:"error",title:"Response stalled — No content received"});return}let M=`${O}${`

⚠️ Response may be incomplete — the model stopped responding`}`,x=Date.now(),m=new Date().toISOString(),S={id:x,timestamp:m,data:{type:"agent_response",content:M,agent_id:"default",is_local_stall:!0}};q_.current=x,n_((i)=>i?H2([...i,S]):[S]),G2.current?.(),w(null)},[Q_]);c(()=>{z0.current={currentHashtag:J,searchQuery:X}},[J,X]),c(()=>{let O=Math.min(1000,Math.max(100,Math.floor(b1/2))),N=setInterval(()=>{if(!__.current)return;if(z_.current)return;let M=a.current;if(!M)return;let x=Date.now(),m=x-M;if(m>=I4){a0();return}if(m>=b1){if(x-h.current>=b4){let S=Math.floor(m/1000);w({type:"waiting",title:`Waiting for model… No events for ${S}s`}),h.current=x}}},O);return()=>clearInterval(N)},[a0]);let W2=I(async()=>{try{let O=await S1();if(O)M_(O)}catch(O){console.warn("Failed to fetch agent context:",O)}},[]),V=I(async()=>{try{let O=await m4("web:default");if(!O||O.status!=="active"||!O.data){if(J0.current){let{currentHashtag:x,searchQuery:m}=z0.current||{};if(!x&&!m)P0()}J0.current=!1,A_(),w(null),U({text:"",totalLines:0}),f(""),T({text:"",totalLines:0}),d(null),z_.current=null;return}J0.current=!0;let N=O.data,M=N.turn_id||N.turnId;if(M)P_(M);if(B_({running:!0,clearSilence:!0}),V0(),w(N),O.thought&&O.thought.text)T((x)=>{if(x&&x.text&&x.text.length>=O.thought.text.length)return x;return t.current=O.thought.text,{text:O.thought.text,totalLines:O.thought.totalLines||0}});if(O.draft&&O.draft.text)U((x)=>{if(x&&x.text&&x.text.length>=O.draft.text.length)return x;return o.current=O.draft.text,{text:O.draft.text,totalLines:O.draft.totalLines||0}})}catch(O){console.warn("Failed to fetch agent status:",O)}},[A_,V0,B_,P0,P_]),B=I((O)=>{if($(O),O!=="connected"){w(null),U({text:"",totalLines:0}),f(""),T({text:"",totalLines:0}),d(null),z_.current=null,A_();return}if(!K0.current){K0.current=!0,V();return}let{currentHashtag:N,searchQuery:M}=z0.current;if(!N&&!M)P0();V()},[A_,P0,V]),y=I(async(O)=>{Z(O),n_(null),await M0(O)},[M0]),C=I(async()=>{Z(null),Y(null),n_(null),await M0()},[M0]),u=I(async(O)=>{if(!O||!O.trim())return;Y(O.trim()),Z(null),n_(null);try{let N=await r8(O.trim());n_(N.results),n2(!1)}catch(N){console.error("Failed to search:",N),n_([])}},[]),p=I(()=>{j(!0),Y(null),Z(null),n_([])},[]),$_=I(()=>{j(!1),Y(null),M0()},[M0]),J_=I(()=>{},[]),n=I(async(O)=>{if(!O)return;let N=O.id,M=m0?.filter((m)=>m?.data?.thread_id===N&&m?.id!==N).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let x=(m)=>{if(!m.length)return;I_((i)=>{let N_=new Set(i);return m.forEach((S_)=>N_.add(S_)),N_}),setTimeout(()=>{if(i0(()=>{n_((i)=>i?i.filter((N_)=>!m.includes(N_.id)):i)}),I_((i)=>{let N_=new Set(i);return m.forEach((S_)=>N_.delete(S_)),N_}),U2.current)F2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let m=await v4(N,M>0);if(m?.ids?.length)x(m.ids)}catch(m){let S=m?.message||"";if(M===0&&S.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let N_=await v4(N,!0);if(N_?.ids?.length)x(N_.ids);return}console.error("Failed to delete post:",m),alert(`Failed to delete message: ${S}`)}},[m0,i0]),j_=I(async()=>{try{let O=await s8();O_(x4(O));let N=O?.user||{};l_((x)=>{let m=typeof N.name==="string"&&N.name.trim()?N.name.trim():"You",S=typeof N.avatar_url==="string"?N.avatar_url.trim():null,i=typeof N.avatar_background==="string"&&N.avatar_background.trim()?N.avatar_background.trim():null;if(x.name===m&&x.avatar_url===S&&x.avatar_background===i)return x;return{name:m,avatar_url:S,avatar_background:i}});let M=(O?.agents||[]).find((x)=>x.id==="default");if(M?.model)w_(M.model);u0(M?.name,M?.avatar_url)}catch(O){console.warn("Failed to load agents:",O)}try{let O=await S1();if(O)M_(O)}catch{}},[u0]);c(()=>{j_();let O=Y2("sidebarWidth",null),N=Number.isFinite(O)?Math.min(Math.max(O,160),600):280;if(H0.current=N,x_.current)x_.current.style.setProperty("--sidebar-width",`${N}px`)},[j_]);let W0=I((O)=>{if(!O||typeof O!=="object")return;let N=O.agent_id;if(!N)return;let{agent_name:M,agent_avatar:x}=O;if(!M&&x===void 0)return;let m=b0.current?.[N]||{id:N},S=m.name||null,i=m.avatar_url??m.avatarUrl??m.avatar??null,N_=!1,S_=!1;if(M&&M!==m.name)S=M,S_=!0;if(x!==void 0){let e0=typeof x==="string"?x.trim():null,x1=typeof i==="string"?i.trim():null,_2=e0||null;if(_2!==(x1||null))i=_2,N_=!0}if(!S_&&!N_)return;if(O_((e0)=>{let _2={...e0[N]||{id:N}};if(S_)_2.name=S;if(N_)_2.avatar_url=i;return{...e0,[N]:_2}}),N==="default")u0(S,i,N_?Date.now():null)},[u0]),e_=I((O)=>{if(!O||typeof O!=="object")return;let N=O.user_name??O.userName,M=O.user_avatar??O.userAvatar,x=O.user_avatar_background??O.userAvatarBackground;if(N===void 0&&M===void 0&&x===void 0)return;l_((m)=>{let S=typeof N==="string"&&N.trim()?N.trim():m.name||"You",i=M===void 0?m.avatar_url:typeof M==="string"&&M.trim()?M.trim():null,N_=x===void 0?m.avatar_background:typeof x==="string"&&x.trim()?x.trim():null;if(m.name===S&&m.avatar_url===i&&m.avatar_background===N_)return m;return{name:S,avatar_url:i,avatar_background:N_}})},[]),e2=I((O)=>{if(!O||typeof O!=="object")return;let N=O.model??O.current;if(N!==void 0)w_(N);if(O.thinking_level!==void 0)D_(O.thinking_level??null);if(O.supports_thinking!==void 0)C_(Boolean(O.supports_thinking));if(O.provider_usage!==void 0)X0(O.provider_usage??null)},[]),O2=I(()=>{a8().then((O)=>{if(O)e2(O)}).catch(()=>{})},[e2]);c(()=>{O2();let O=setInterval(()=>{O2()},60000);return()=>clearInterval(O)},[O2]);let _1=I((O,N)=>{let M=N?.turn_id;if(W0(N),e_(N),O==="ui_theme"){v3(N);return}if(O?.startsWith("agent_"))V0();if(O==="connected"){w(null),U({text:"",totalLines:0}),f(""),T({text:"",totalLines:0}),d(null),z_.current=null,A_(),m4("web:default").then((S)=>{if(!S||S.status!=="active"||!S.data)return;let i=S.data,N_=i.turn_id||i.turnId;if(N_)P_(N_);if(B_({clearSilence:!0}),T0(i),S.thought&&S.thought.text)t.current=S.thought.text,T({text:S.thought.text,totalLines:S.thought.totalLines||0});if(S.draft&&S.draft.text)o.current=S.draft.text,U({text:S.draft.text,totalLines:S.draft.totalLines||0})}).catch((S)=>{console.warn("Failed to fetch agent status:",S)}),O2();return}if(O==="agent_status"){if(N.type==="done"||N.type==="error"){if(M&&g.current&&M!==g.current)return;if(N.type==="done"){D0(M||g.current);let{currentHashtag:S,searchQuery:i}=z0.current||{};if(!S&&!i)P0();if(N.context_usage)M_(N.context_usage)}if(J0.current=!1,A_(),U({text:"",totalLines:0}),f(""),T({text:"",totalLines:0}),d(null),N.type==="error")w({type:"error",title:N.title||"Agent error"}),setTimeout(()=>w(null),8000);else w(null)}else{if(M)P_(M);if(B_({running:!0,clearSilence:!0}),N.type==="thinking")o.current="",t.current="",U({text:"",totalLines:0}),f(""),T({text:"",totalLines:0});w(N)}return}if(O==="agent_steer_queued"){if(M&&g.current&&M!==g.current)return;let S=M||g.current;if(!S)return;V_.current=S,Y_(S);return}if(O==="agent_draft_delta"){if(M&&g.current&&M!==g.current)return;if(M&&!g.current)P_(M);if(B_({running:!0,clearSilence:!0}),N?.reset)o.current="";if(N?.delta)o.current+=N.delta;if(W_.current){let S=o.current;U((i)=>({text:i?.text||"",totalLines:l2(S),fullText:S}))}else{let S=o.current,i=l2(S);U({text:S,totalLines:i})}return}if(O==="agent_draft"){if(M&&g.current&&M!==g.current)return;if(M&&!g.current)P_(M);B_({running:!0,clearSilence:!0});let S=N.text||"",i=N.mode||(N.kind==="plan"?"replace":"append"),N_=Number.isFinite(N.total_lines)?N.total_lines:S?S.replace(/\r\n/g,`
`).split(`
`).length:0;if(N.kind==="plan")if(i==="replace")f(S);else f((S_)=>(S_||"")+S);else if(!W_.current)o.current=S,U({text:S,totalLines:N_});return}if(O==="agent_thought_delta"){if(M&&g.current&&M!==g.current)return;if(M&&!g.current)P_(M);if(B_({running:!0,clearSilence:!0}),N?.reset)t.current="";if(typeof N?.delta==="string")t.current+=N.delta;if(G_.current){let S=t.current;T((i)=>({text:i?.text||"",totalLines:l2(S),fullText:S}))}return}if(O==="agent_thought"){if(M&&g.current&&M!==g.current)return;if(M&&!g.current)P_(M);B_({running:!0,clearSilence:!0});let S=N.text||"",i=Number.isFinite(N.total_lines)?N.total_lines:S?S.replace(/\r\n/g,`
`).split(`
`).length:0;if(!G_.current)t.current=S,T({text:S,totalLines:i});return}if(O==="agent_request"){if(console.log("Agent request:",N),M&&g.current&&M!==g.current)return;if(M)P_(M);B_({running:!0,clearSilence:!0}),d(N),z_.current=N;return}if(O==="agent_request_timeout"){if(console.log("Agent request timeout:",N),M&&g.current&&M!==g.current)return;d(null),z_.current=null,A_(),w({type:"error",title:"Permission request timed out"});return}if(O==="model_changed"){if(N?.model!==void 0)w_(N.model);if(N?.thinking_level!==void 0)D_(N.thinking_level??null);if(N?.supports_thinking!==void 0)C_(Boolean(N.supports_thinking));S1().then((S)=>{if(S)M_(S)}).catch(()=>{});return}if(O==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:N}));return}let{currentHashtag:x,searchQuery:m}=z0.current;if(O==="agent_response")r0(),o_.current={post:N,turnId:g.current};if(!x&&!m&&(O==="new_post"||O==="agent_response"))n_((S)=>{if(!S)return[N];if(S.some((i)=>i.id===N.id))return S;return[...S,N]}),G2.current?.();if(O==="interaction_updated")n_((S)=>S?S.map((i)=>i.id===N.id?N:i):S);if(O==="interaction_deleted"){let S=N?.ids||[];if(S.length){i0(()=>{n_((S_)=>S_?S_.filter((e0)=>!S.includes(e0.id)):S_)});let{currentHashtag:i,searchQuery:N_}=z0.current;if(U2.current&&!i&&!N_)F2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[A_,V0,B_,D0,i0,P0,r0,P_,T0,W0,e_,O2]);c(()=>{if(typeof window>"u")return;let O=window.__PICLAW_TEST_API||{};return O.emit=_1,O.reset=()=>{r0(),A_(),w(null),U({text:"",totalLines:0}),f(""),T({text:"",totalLines:0}),d(null)},O.finalize=()=>a0(),window.__PICLAW_TEST_API=O,()=>{if(window.__PICLAW_TEST_API===O)window.__PICLAW_TEST_API=void 0}},[A_,a0,_1,r0]),y4({handleSseEvent:_1,handleConnectionStatusChange:B,loadPosts:M0}),c(()=>{if(!m0||m0.length===0)return;let O=location.hash;if(!O||!O.startsWith("#msg-"))return;let N=O.slice(5);X_(N),history.replaceState(null,"",location.pathname+location.search)},[m0,X_]);let $1=E!==null;c(()=>{if(_!=="connected")return;let N=setInterval(()=>{if($1)V(),W2();else{let{currentHashtag:M,searchQuery:x}=z0.current||{};if(!M&&!x)P0();V(),W2()}},$1?15000:60000);return()=>clearInterval(N)},[_,$1,V,W2,P0]);let c4=I(()=>{a_((O)=>!O)},[]);c(()=>{if(!f_)return;if(typeof window>"u")return;let O=x_.current;if(!O)return;if(!G0.current){let N=Y2("editorWidth",null),M=H0.current||280;G0.current=Number.isFinite(N)?N:M}if(O.style.setProperty("--editor-width",`${G0.current}px`),!v_.current){let N=Y2("dockHeight",null);v_.current=Number.isFinite(N)?N:200}O.style.setProperty("--dock-height",`${v_.current}px`)},[f_]);let t0=Y0.getDockPanes().length>0,[J1,p4]=R(!1),L2=I(()=>p4((O)=>!O),[]);c(()=>{if(!t0)return;let O=(N)=>{if(N.ctrlKey&&N.key==="`")N.preventDefault(),L2()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[L2,t0]);let h4=Boolean(e&&e===(E?.turn_id||Z_));return q`
        <div class=${`app-shell${m_?"":" workspace-collapsed"}${f_?" editor-open":""}`} ref=${x_}>
            <${B4}
                onFileSelect=${p0}
                visible=${m_}
                active=${m_||f_}
                onOpenEditor=${c_}
            />
            <button
                class=${`workspace-toggle-tab${m_?" open":" closed"}`}
                onClick=${c4}
                title=${m_?"Hide workspace":"Show workspace"}
                aria-label=${m_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${d2} onTouchStart=${s0}></div>
            ${f_&&q`
                <div class="editor-pane-container">
                    <${z4}
                        tabs=${P}
                        activeId=${r}
                        onActivate=${C0}
                        onClose=${F0}
                        onCloseOthers=${j0}
                        onCloseAll=${i_}
                        onTogglePin=${y0}
                        onTogglePreview=${B0}
                        previewTabs=${b_}
                        onToggleDock=${t0?L2:void 0}
                        dockVisible=${t0&&J1}
                    />
                    <div class="editor-pane-host" ref=${$0}></div>
                    ${r&&b_.has(r)&&q`
                        <${U4}
                            getContent=${()=>s_.current?.getContent?.()}
                            path=${r}
                            onClose=${()=>B0(r)}
                        />
                    `}
                    ${t0&&J1&&q`<div class="dock-splitter" onMouseDown=${a2} onTouchStart=${t2}></div>`}
                    ${t0&&q`<div class=${`dock-panel${J1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${L2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
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
                <div class="editor-splitter" onMouseDown=${r2} onTouchStart=${s2}></div>
            `}
            <div class="container">
                ${X&&T4()&&q`<div class="search-results-spacer"></div>`}
                ${(J||X)&&q`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${C}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${J?`#${J}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${J4}
                    posts=${m0}
                    hasMore=${o2}
                    onLoadMore=${d0}
                    timelineRef=${L0}
                    onHashtagClick=${y}
                    onMessageRef=${l}
                    onScrollToMessage=${X_}
                    onFileRef=${H}
                    onPostClick=${void 0}
                    onDeletePost=${n}
                    emptyMessage=${J?`No posts with #${J}`:X?`No results for "${X}"`:void 0}
                    agents=${y_}
                    user=${k0}
                    reverse=${!(X&&!J)}
                    removingPostIds=${q0}
                    searchQuery=${X}
                />
                <${s3}
                    status=${E}
                    draft=${b}
                    plan=${A}
                    thought=${F}
                    pendingRequest=${s}
                    intent=${D}
                    turnId=${Z_}
                    steerQueued=${h4}
                    onPanelToggle=${K2}
                />
                <${M3}
                    onPost=${()=>{M0(),f0()}}
                    onFocus=${f0}
                    searchMode=${G}
                    onSearch=${u}
                    onEnterSearch=${p}
                    onExitSearch=${$_}
                    fileRefs=${K}
                    onRemoveFileRef=${h0}
                    onClearFileRefs=${n0}
                    messageRefs=${Q}
                    onRemoveMessageRef=${L_}
                    onClearMessageRefs=${k_}
                    activeEditorPath=${r}
                    onAttachEditorFile=${v}
                    onOpenFilePill=${H}
                    activeModel=${H_}
                    modelUsage=${p_}
                    thinkingLevel=${F_}
                    supportsThinking=${u_}
                    contextUsage=${U_}
                    notificationsEnabled=${_0}
                    notificationPermission=${O0}
                    onToggleNotifications=${Q0}
                    onModelChange=${w_}
                    onModelStateChange=${e2}
                />
                <${t3} status=${_} />
                <${a3}
                    request=${s}
                    onRespond=${()=>{d(null),z_.current=null}}
                />
            </div>
        </div>
    `}X3(q`<${e8} />`,document.getElementById("app"));

//# debugId=A80224B08AA4306264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
