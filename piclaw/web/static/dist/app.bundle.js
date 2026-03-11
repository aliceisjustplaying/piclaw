var v4=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,J)=>(typeof require<"u"?require:$)[J]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var F2,X_,c1,Y2,p1,M1,R4,U2={},h1=[],u4=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function R0(_,$){for(var J in $)_[J]=$[J];return _}function i1(_){var $=_.parentNode;$&&$.removeChild(_)}function l1(_,$,J){var Y,X,Z,j={};for(Z in $)Z=="key"?Y=$[Z]:Z=="ref"?X=$[Z]:j[Z]=$[Z];if(arguments.length>2&&(j.children=arguments.length>3?F2.call(arguments,2):J),typeof _=="function"&&_.defaultProps!=null)for(Z in _.defaultProps)j[Z]===void 0&&(j[Z]=_.defaultProps[Z]);return N2(_,j,Y,X,null)}function N2(_,$,J,Y,X){var Z={type:_,props:$,key:J,ref:Y,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++c1:X};return X_.vnode!=null&&X_.vnode(Z),Z}function L2(_){return _.children}function B2(_,$){this.props=_,this.context=$}function d0(_,$){if($==null)return _.__?d0(_.__,_.__.__k.indexOf(_)+1):null;for(var J;$<_.__k.length;$++)if((J=_.__k[$])!=null&&J.__e!=null)return J.__e;return typeof _.type=="function"?d0(_):null}function o1(_){var $,J;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((J=_.__k[$])!=null&&J.__e!=null){_.__e=_.__c.base=J.__e;break}return o1(_)}}function P1(_){(!_.__d&&(_.__d=!0)&&Y2.push(_)&&!H2.__r++||M1!==X_.debounceRendering)&&((M1=X_.debounceRendering)||p1)(H2)}function H2(){for(var _;H2.__r=Y2.length;)_=Y2.sort(function($,J){return $.__v.__b-J.__v.__b}),Y2=[],_.some(function($){var J,Y,X,Z,j,V;$.__d&&(j=(Z=(J=$).__v).__e,(V=J.__P)&&(Y=[],(X=R0({},Z)).__v=Z.__v+1,t2(V,Z,X,J.__n,V.ownerSVGElement!==void 0,Z.__h!=null?[j]:null,Y,j==null?d0(Z):j,Z.__h),s1(Y,Z),Z.__e!=j&&o1(Z)))})}function n1(_,$,J,Y,X,Z,j,V,G,W){var Q,E,U,F,L,w,x,z=Y&&Y.__k||h1,k=z.length;for(J.__k=[],Q=0;Q<$.length;Q++)if((F=J.__k[Q]=(F=$[Q])==null||typeof F=="boolean"?null:typeof F=="string"||typeof F=="number"||typeof F=="bigint"?N2(null,F,null,null,F):Array.isArray(F)?N2(L2,{children:F},null,null,null):F.__b>0?N2(F.type,F.props,F.key,null,F.__v):F)!=null){if(F.__=J,F.__b=J.__b+1,(U=z[Q])===null||U&&F.key==U.key&&F.type===U.type)z[Q]=void 0;else for(E=0;E<k;E++){if((U=z[E])&&F.key==U.key&&F.type===U.type){z[E]=void 0;break}U=null}t2(_,F,U=U||U2,X,Z,j,V,G,W),L=F.__e,(E=F.ref)&&U.ref!=E&&(x||(x=[]),U.ref&&x.push(U.ref,null,F),x.push(E,F.__c||L,F)),L!=null?(w==null&&(w=L),typeof F.type=="function"&&F.__k!=null&&F.__k===U.__k?F.__d=G=d1(F,G,_):G=r1(_,F,U,z,L,G),W||J.type!=="option"?typeof J.type=="function"&&(J.__d=G):_.value=""):G&&U.__e==G&&G.parentNode!=_&&(G=d0(U))}for(J.__e=w,Q=k;Q--;)z[Q]!=null&&(typeof J.type=="function"&&z[Q].__e!=null&&z[Q].__e==J.__d&&(J.__d=d0(Y,Q+1)),t1(z[Q],z[Q]));if(x)for(Q=0;Q<x.length;Q++)a1(x[Q],x[++Q],x[++Q])}function d1(_,$,J){var Y,X;for(Y=0;Y<_.__k.length;Y++)(X=_.__k[Y])&&(X.__=_,$=typeof X.type=="function"?d1(X,$,J):r1(J,X,X,_.__k,X.__e,$));return $}function r1(_,$,J,Y,X,Z){var j,V,G;if($.__d!==void 0)j=$.__d,$.__d=void 0;else if(J==null||X!=Z||X.parentNode==null)_:if(Z==null||Z.parentNode!==_)_.appendChild(X),j=null;else{for(V=Z,G=0;(V=V.nextSibling)&&G<Y.length;G+=2)if(V==X)break _;_.insertBefore(X,Z),j=Z}return j!==void 0?j:X.nextSibling}function b1(_,$,J){$[0]==="-"?_.setProperty($,J):_[$]=J==null?"":typeof J!="number"||u4.test($)?J:J+"px"}function q2(_,$,J,Y,X){var Z;_:if($==="style")if(typeof J=="string")_.style.cssText=J;else{if(typeof Y=="string"&&(_.style.cssText=Y=""),Y)for($ in Y)J&&$ in J||b1(_.style,$,"");if(J)for($ in J)Y&&J[$]===Y[$]||b1(_.style,$,J[$])}else if($[0]==="o"&&$[1]==="n")Z=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Z]=J,J?Y||_.addEventListener($,Z?S1:I1,Z):_.removeEventListener($,Z?S1:I1,Z);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=J==null?"":J;break _}catch(j){}typeof J=="function"||(J!=null&&(J!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,J):_.removeAttribute($))}}function I1(_){this.l[_.type+!1](X_.event?X_.event(_):_)}function S1(_){this.l[_.type+!0](X_.event?X_.event(_):_)}function t2(_,$,J,Y,X,Z,j,V,G){var W,Q,E,U,F,L,w,x,z,k,I,D=$.type;if($.constructor!==void 0)return null;J.__h!=null&&(G=J.__h,V=$.__e=J.__e,$.__h=null,Z=[V]),(W=X_.__b)&&W($);try{_:if(typeof D=="function"){if(x=$.props,z=(W=D.contextType)&&Y[W.__c],k=W?z?z.props.value:W.__:Y,J.__c?w=(Q=$.__c=J.__c).__=Q.__E:(("prototype"in D)&&D.prototype.render?$.__c=Q=new D(x,k):($.__c=Q=new B2(x,k),Q.constructor=D,Q.render=g4),z&&z.sub(Q),Q.props=x,Q.state||(Q.state={}),Q.context=k,Q.__n=Y,E=Q.__d=!0,Q.__h=[]),Q.__s==null&&(Q.__s=Q.state),D.getDerivedStateFromProps!=null&&(Q.__s==Q.state&&(Q.__s=R0({},Q.__s)),R0(Q.__s,D.getDerivedStateFromProps(x,Q.__s))),U=Q.props,F=Q.state,E)D.getDerivedStateFromProps==null&&Q.componentWillMount!=null&&Q.componentWillMount(),Q.componentDidMount!=null&&Q.__h.push(Q.componentDidMount);else{if(D.getDerivedStateFromProps==null&&x!==U&&Q.componentWillReceiveProps!=null&&Q.componentWillReceiveProps(x,k),!Q.__e&&Q.shouldComponentUpdate!=null&&Q.shouldComponentUpdate(x,Q.__s,k)===!1||$.__v===J.__v){Q.props=x,Q.state=Q.__s,$.__v!==J.__v&&(Q.__d=!1),Q.__v=$,$.__e=J.__e,$.__k=J.__k,$.__k.forEach(function(f){f&&(f.__=$)}),Q.__h.length&&j.push(Q);break _}Q.componentWillUpdate!=null&&Q.componentWillUpdate(x,Q.__s,k),Q.componentDidUpdate!=null&&Q.__h.push(function(){Q.componentDidUpdate(U,F,L)})}Q.context=k,Q.props=x,Q.state=Q.__s,(W=X_.__r)&&W($),Q.__d=!1,Q.__v=$,Q.__P=_,W=Q.render(Q.props,Q.state,Q.context),Q.state=Q.__s,Q.getChildContext!=null&&(Y=R0(R0({},Y),Q.getChildContext())),E||Q.getSnapshotBeforeUpdate==null||(L=Q.getSnapshotBeforeUpdate(U,F)),I=W!=null&&W.type===L2&&W.key==null?W.props.children:W,n1(_,Array.isArray(I)?I:[I],$,J,Y,X,Z,j,V,G),Q.base=$.__e,$.__h=null,Q.__h.length&&j.push(Q),w&&(Q.__E=Q.__=null),Q.__e=!1}else Z==null&&$.__v===J.__v?($.__k=J.__k,$.__e=J.__e):$.__e=m4(J.__e,$,J,Y,X,Z,j,G);(W=X_.diffed)&&W($)}catch(f){$.__v=null,(G||Z!=null)&&($.__e=V,$.__h=!!G,Z[Z.indexOf(V)]=null),X_.__e(f,$,J)}}function s1(_,$){X_.__c&&X_.__c($,_),_.some(function(J){try{_=J.__h,J.__h=[],_.some(function(Y){Y.call(J)})}catch(Y){X_.__e(Y,J.__v)}})}function m4(_,$,J,Y,X,Z,j,V){var G,W,Q,E=J.props,U=$.props,F=$.type,L=0;if(F==="svg"&&(X=!0),Z!=null){for(;L<Z.length;L++)if((G=Z[L])&&(G===_||(F?G.localName==F:G.nodeType==3))){_=G,Z[L]=null;break}}if(_==null){if(F===null)return document.createTextNode(U);_=X?document.createElementNS("http://www.w3.org/2000/svg",F):document.createElement(F,U.is&&U),Z=null,V=!1}if(F===null)E===U||V&&_.data===U||(_.data=U);else{if(Z=Z&&F2.call(_.childNodes),W=(E=J.props||U2).dangerouslySetInnerHTML,Q=U.dangerouslySetInnerHTML,!V){if(Z!=null)for(E={},L=0;L<_.attributes.length;L++)E[_.attributes[L].name]=_.attributes[L].value;(Q||W)&&(Q&&(W&&Q.__html==W.__html||Q.__html===_.innerHTML)||(_.innerHTML=Q&&Q.__html||""))}if(function(w,x,z,k,I){var D;for(D in z)D==="children"||D==="key"||D in x||q2(w,D,null,z[D],k);for(D in x)I&&typeof x[D]!="function"||D==="children"||D==="key"||D==="value"||D==="checked"||z[D]===x[D]||q2(w,D,x[D],z[D],k)}(_,U,E,X,V),Q)$.__k=[];else if(L=$.props.children,n1(_,Array.isArray(L)?L:[L],$,J,Y,X&&F!=="foreignObject",Z,j,Z?Z[0]:J.__k&&d0(J,0),V),Z!=null)for(L=Z.length;L--;)Z[L]!=null&&i1(Z[L]);V||(("value"in U)&&(L=U.value)!==void 0&&(L!==_.value||F==="progress"&&!L)&&q2(_,"value",L,E.value,!1),("checked"in U)&&(L=U.checked)!==void 0&&L!==_.checked&&q2(_,"checked",L,E.checked,!1))}return _}function a1(_,$,J){try{typeof _=="function"?_($):_.current=$}catch(Y){X_.__e(Y,J)}}function t1(_,$,J){var Y,X;if(X_.unmount&&X_.unmount(_),(Y=_.ref)&&(Y.current&&Y.current!==_.__e||a1(Y,null,$)),(Y=_.__c)!=null){if(Y.componentWillUnmount)try{Y.componentWillUnmount()}catch(Z){X_.__e(Z,$)}Y.base=Y.__P=null}if(Y=_.__k)for(X=0;X<Y.length;X++)Y[X]&&t1(Y[X],$,typeof _.type!="function");J||_.__e==null||i1(_.__e),_.__e=_.__d=void 0}function g4(_,$,J){return this.constructor(_,J)}function e1(_,$,J){var Y,X,Z;X_.__&&X_.__(_,$),X=(Y=typeof J=="function")?null:J&&J.__k||$.__k,Z=[],t2($,_=(!Y&&J||$).__k=l1(L2,null,[_]),X||U2,U2,$.ownerSVGElement!==void 0,!Y&&J?[J]:X?null:$.firstChild?F2.call($.childNodes):null,Z,!Y&&J?J:X?X.__e:$.firstChild,Y),s1(Z,_)}F2=h1.slice,X_={__e:function(_,$){for(var J,Y,X;$=$.__;)if((J=$.__c)&&!J.__)try{if((Y=J.constructor)&&Y.getDerivedStateFromError!=null&&(J.setState(Y.getDerivedStateFromError(_)),X=J.__d),J.componentDidCatch!=null&&(J.componentDidCatch(_),X=J.__d),X)return J.__E=J}catch(Z){_=Z}throw _}},c1=0,B2.prototype.setState=function(_,$){var J;J=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=R0({},this.state),typeof _=="function"&&(_=_(R0({},J),this.props)),_&&R0(J,_),_!=null&&this.__v&&($&&this.__h.push($),P1(this))},B2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),P1(this))},B2.prototype.render=L2,Y2=[],p1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H2.__r=0,R4=0;var E2,V0,x1,Z2=0,s2=[],T1=X_.__b,f1=X_.__r,v1=X_.diffed,R1=X_.__c,u1=X_.unmount;function e2(_,$){X_.__h&&X_.__h(V0,_,Z2||$),Z2=0;var J=V0.__H||(V0.__H={__:[],__h:[]});return _>=J.__.length&&J.__.push({}),J.__[_]}function R(_){return Z2=1,c4($3,_)}function c4(_,$,J){var Y=e2(E2++,2);return Y.t=_,Y.__c||(Y.__=[J?J($):$3(void 0,$),function(X){var Z=Y.t(Y.__[0],X);Y.__[0]!==Z&&(Y.__=[Z,Y.__[1]],Y.__c.setState({}))}],Y.__c=V0),Y.__}function c(_,$){var J=e2(E2++,3);!X_.__s&&_3(J.__H,$)&&(J.__=_,J.__H=$,V0.__H.__h.push(J))}function A(_){return Z2=5,M0(function(){return{current:_}},[])}function M0(_,$){var J=e2(E2++,7);return _3(J.__H,$)&&(J.__=_(),J.__H=$,J.__h=_),J.__}function b(_,$){return Z2=8,M0(function(){return _},$)}function p4(){s2.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(z2),_.__H.__h.forEach(a2),_.__H.__h=[]}catch($){_.__H.__h=[],X_.__e($,_.__v)}}),s2=[]}X_.__b=function(_){V0=null,T1&&T1(_)},X_.__r=function(_){f1&&f1(_),E2=0;var $=(V0=_.__c).__H;$&&($.__h.forEach(z2),$.__h.forEach(a2),$.__h=[])},X_.diffed=function(_){v1&&v1(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(s2.push($)!==1&&x1===X_.requestAnimationFrame||((x1=X_.requestAnimationFrame)||function(J){var Y,X=function(){clearTimeout(Z),m1&&cancelAnimationFrame(Y),setTimeout(J)},Z=setTimeout(X,100);m1&&(Y=requestAnimationFrame(X))})(p4)),V0=void 0},X_.__c=function(_,$){$.some(function(J){try{J.__h.forEach(z2),J.__h=J.__h.filter(function(Y){return!Y.__||a2(Y)})}catch(Y){$.some(function(X){X.__h&&(X.__h=[])}),$=[],X_.__e(Y,J.__v)}}),R1&&R1(_,$)},X_.unmount=function(_){u1&&u1(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(z2)}catch(J){X_.__e(J,$.__v)}};var m1=typeof requestAnimationFrame=="function";function z2(_){var $=V0;typeof _.__c=="function"&&_.__c(),V0=$}function a2(_){var $=V0;_.__c=_.__(),V0=$}function _3(_,$){return!_||_.length!==$.length||$.some(function(J,Y){return J!==_[Y]})}function $3(_,$){return typeof $=="function"?$(_):$}var J3=function(_,$,J,Y){var X;$[0]=0;for(var Z=1;Z<$.length;Z++){var j=$[Z++],V=$[Z]?($[0]|=j?1:2,J[$[Z++]]):$[++Z];j===3?Y[0]=V:j===4?Y[1]=Object.assign(Y[1]||{},V):j===5?(Y[1]=Y[1]||{})[$[++Z]]=V:j===6?Y[1][$[++Z]]+=V+"":j?(X=_.apply(V,J3(_,V,J,["",null])),Y.push(X),V[0]?$[0]|=2:($[Z-2]=0,$[Z]=X)):Y.push(V)}return Y},g1=new Map,q=function(_){var $=g1.get(this);return $||($=new Map,g1.set(this,$)),($=J3(this,$.get(_)||($.set(_,$=function(J){for(var Y,X,Z=1,j="",V="",G=[0],W=function(U){Z===1&&(U||(j=j.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?G.push(0,U,j):Z===3&&(U||j)?(G.push(3,U,j),Z=2):Z===2&&j==="..."&&U?G.push(4,U,0):Z===2&&j&&!U?G.push(5,0,!0,j):Z>=5&&((j||!U&&Z===5)&&(G.push(Z,0,j,X),Z=6),U&&(G.push(Z,U,0,X),Z=6)),j=""},Q=0;Q<J.length;Q++){Q&&(Z===1&&W(),W(Q));for(var E=0;E<J[Q].length;E++)Y=J[Q][E],Z===1?Y==="<"?(W(),G=[G],Z=3):j+=Y:Z===4?j==="--"&&Y===">"?(Z=1,j=""):j=Y+j[0]:V?Y===V?V="":j+=Y:Y==='"'||Y==="'"?V=Y:Y===">"?(W(),Z=1):Z&&(Y==="="?(Z=5,X=j,j=""):Y==="/"&&(Z<5||J[Q][E+1]===">")?(W(),Z===3&&(G=G[0]),Z=G,(G=G[0]).push(2,0,Z),Z=0):Y===" "||Y==="\t"||Y===`
`||Y==="\r"?(W(),Z=2):j+=Y),Z===3&&j==="!--"&&(Z=4,G=G[0])}return W(),G}(_)),$),arguments,[])).length>1?$:$[0]}.bind(l1);async function l_(_,$={}){let J=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!J.ok){let Y=await J.json().catch(()=>({error:"Unknown error"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function D2(_=10,$=null){let J=`/timeline?limit=${_}`;if($)J+=`&before=${$}`;return l_(J)}async function Y3(_,$=50,J=0){return l_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${J}`)}async function Z3(_,$=50,J=0){return l_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${J}`)}async function X3(_){return l_(`/thread/${_}`)}async function Q3(_,$=!1){let J=`/post/${_}?cascade=${$?"true":"false"}`;return l_(J,{method:"DELETE"})}async function _1(_,$,J=null,Y=[]){return l_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:J,media_ids:Y})})}async function j3(){return l_("/agents")}async function K3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/status${$}`)}async function $1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/context${$}`)}async function X2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return l_(`/agent/models${$}`)}async function G3(_){let $=new FormData;$.append("file",_);let J=await fetch("/media/upload",{method:"POST",body:$});if(!J.ok){let Y=await J.json().catch(()=>({error:"Upload failed"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function J1(_,$){let J=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function V3(_,$){let J=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Y.error||`HTTP ${J.status}`)}return J.json()}async function W3(_,$="thought"){let J=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return l_(J)}async function O3(_,$,J){return l_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(J)})})}function Q2(_){return`/media/${_}`}function q3(_){return`/media/${_}/thumbnail`}async function C2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function y2(_="",$=2,J=!1){let Y=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${J?"1":"0"}`;return l_(Y)}async function N3(_,$=20000,J=null){let Y=J?`&mode=${encodeURIComponent(J)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Y}`;return l_(X)}async function B3(_){return l_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function Y1(_,$="",J={}){let Y=new FormData;Y.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(J.overwrite)X.set("overwrite","1");let Z=X.toString(),j=Z?`/workspace/upload?${Z}`:"/workspace/upload",V=await fetch(""+j,{method:"POST",body:Y});if(!V.ok){let G=await V.json().catch(()=>({error:"Upload failed"})),W=Error(G.error||`HTTP ${V.status}`);throw W.status=V.status,W.code=G.code,W}return V.json()}async function z3(_,$,J=""){let Y=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:J})});if(!Y.ok){let X=await Y.json().catch(()=>({error:"Create failed"})),Z=Error(X.error||`HTTP ${Y.status}`);throw Z.status=Y.status,Z.code=X.code,Z}return Y.json()}async function U3(_,$){let J=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Rename failed"})),X=Error(Y.error||`HTTP ${J.status}`);throw X.status=J.status,X.code=Y.code,X}return J.json()}async function H3(_,$){let J=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!J.ok){let Y=await J.json().catch(()=>({error:"Move failed"})),X=Error(Y.error||`HTTP ${J.status}`);throw X.status=J.status,X.code=Y.code,X}return J.json()}async function F3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return l_($,{method:"DELETE"})}async function k2(_,$=!1){return l_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function Z1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function L3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class X1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,J=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,J+$),this.reconnectAttempts=0;let Y=Math.max(this.cooldownUntil-J,0),X=Math.max(this.reconnectDelay,Y);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function p0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function P_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function r0(_,$=!1){let J=p0(_);if(J===null)return $;return J==="true"}function s0(_,$=null){let J=p0(_);if(J===null)return $;let Y=parseInt(J,10);return Number.isFinite(Y)?Y:$}function u0({prefix:_="file",label:$,title:J,onRemove:Y,onClick:X,removeTitle:Z="Remove",icon:j="file"}){let V=`${_}-file-pill`,G=`${_}-file-name`,W=`${_}-file-remove`,Q=j==="message"?q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return q`
    <span class=${V} title=${J||$} onClick=${X}>
      ${Q}
      <span class=${G}>${$}</span>
      ${Y&&q`
        <button
          class=${W}
          onClick=${(E)=>{E.preventDefault(),E.stopPropagation(),Y()}}
          title=${Z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var i4=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function l4({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),J=_.tokens,Y=_.contextWindow,X=J!=null?`Context: ${E3(J)} / ${E3(Y)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Z=7,j=2*Math.PI*7,V=$/100*j,G=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return q`
        <span class="compose-context-pie icon-btn" title=${X}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${G}
                    stroke-width="2.5"
                    stroke-dasharray=${`${V} ${j}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function E3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function D3({onPost:_,onFocus:$,searchMode:J,onSearch:Y,onEnterSearch:X,onExitSearch:Z,fileRefs:j=[],onRemoveFileRef:V,onClearFileRefs:G,messageRefs:W=[],onRemoveMessageRef:Q,onClearMessageRefs:E,activeModel:U=null,thinkingLevel:F=null,supportsThinking:L=!1,contextUsage:w=null,notificationsEnabled:x=!1,notificationPermission:z="default",onToggleNotifications:k,onModelChange:I,onModelStateChange:D,activeEditorPath:f=null,onAttachEditorFile:s}){let[m,l]=R(""),[Y_,p]=R(""),[e,q_]=R(!1),[J_,V_]=R([]),[W_,y_]=R(!1),[__,t]=R([]),[j_,Z_]=R(0),[K_,G_]=R(!1),[D_,H_]=R(!1),[C_,b_]=R(!1),[L_,I_]=R([]),[S_,B_]=R(!1),A_=A(null),O0=A(null),v_=A(null),w_=A(null),c_=A(0),U0=200,o_=(H)=>{let S=new Set,o=[];for(let Q_ of H||[]){if(typeof Q_!=="string")continue;let U_=Q_.trim();if(!U_||S.has(U_))continue;S.add(U_),o.push(U_)}return o},H0=()=>{let H=p0("piclaw_compose_history");if(!H)return[];try{let S=JSON.parse(H);if(!Array.isArray(S))return[];return o_(S)}catch{return[]}},$0=(H)=>{P_("piclaw_compose_history",JSON.stringify(H))},z_=A(H0()),n_=A(-1),M=A(""),a=!e&&(m.trim()||J_.length>0||j.length>0||W.length>0),R_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),p_=typeof window<"u"&&typeof Notification<"u",b0=typeof window<"u"?Boolean(window.isSecureContext):!1,q0=p_&&b0&&z!=="denied",a_=z==="granted"&&x,N0=a_?"Disable notifications":"Enable notifications",I0=L&&F?` (${F})`:"",d_=U?`${U}${I0}`:"",r_=(H)=>{if(!H||typeof H!=="object")return;let S=H.model??H.current;if(typeof D==="function")D({model:S??null,thinking_level:H.thinking_level??null,supports_thinking:H.supports_thinking});if(S&&typeof I==="function")I(S)},x_=(H)=>{let S=H||A_.current;if(!S)return;S.style.height="auto",S.style.height=`${S.scrollHeight}px`,S.style.overflowY="hidden"},S0=(H)=>{if(!H.startsWith("/")||H.includes(`
`)){G_(!1),t([]);return}let S=H.toLowerCase().split(" ")[0];if(S.length<1){G_(!1),t([]);return}let o=i4.filter((Q_)=>Q_.name.startsWith(S)||Q_.name.replace(/-/g,"").startsWith(S.replace(/-/g,"")));if(o.length>0&&!(o.length===1&&o[0].name===S))t(o),Z_(0),G_(!0);else G_(!1),t([])},F0=(H)=>{let S=m,o=S.indexOf(" "),Q_=o>=0?S.slice(o):"",U_=H.name+Q_;l(U_),G_(!1),t([]),requestAnimationFrame(()=>{let F_=A_.current;if(!F_)return;let N_=U_.length;F_.selectionStart=N_,F_.selectionEnd=N_,F_.focus()})},B0=(H)=>{if(J)p(H);else l(H),S0(H);requestAnimationFrame(()=>x_())},X0=(H)=>{let S=J?Y_:m,o=S&&!S.endsWith(`
`)?`
`:"",Q_=`${S}${o}${H}`.trimStart();B0(Q_)},y0=(H)=>{let S=H?.command?.model_label;if(S)return S;let o=H?.command?.message;if(typeof o==="string"){let Q_=o.match(/•\s+([^\n]+?)\s+\(current\)/);if(Q_?.[1])return Q_[1].trim()}return null},Q0=async(H)=>{if(J||e||D_)return;H_(!0);try{let S=await _1("default",H,null,[]),o=y0(S);return r_({model:o??U??null,thinking_level:S?.command?.thinking_level,supports_thinking:S?.command?.supports_thinking}),_?.(),!0}catch(S){return console.error("Failed to switch model:",S),alert("Failed to switch model: "+S.message),!1}finally{H_(!1)}},h_=async()=>{await Q0("/cycle-model")},i_=async(H)=>{if(!H||D_)return;if(await Q0(`/model ${H}`))b_(!1)},L0=(H)=>{H.preventDefault(),H.stopPropagation(),b_((S)=>!S)},k0=async(H)=>{let S=typeof H==="string"?H:H&&typeof H?.target?.value==="string"?H.target.value:m,o=typeof S==="string"?S:"";if(!o.trim()&&J_.length===0&&j.length===0&&W.length===0)return;q_(!0);try{let Q_=[];for(let M_ of J_){let _0=await G3(M_);Q_.push(_0.id)}let U_=o.trim(),F_=j.length?`Files:
${j.map((M_)=>`- ${M_}`).join(`
`)}`:"",N_=W.length?`Referenced messages:
${W.map((M_)=>`- message:${M_}`).join(`
`)}`:"",T_=Q_.length?`Images:
${Q_.map((M_,_0)=>{let w0=J_[_0]?.name||`image-${_0+1}`;return`- attachment:${M_} (${w0})`}).join(`
`)}`:"",D0=[U_,F_,N_,T_].filter(Boolean).join(`

`),f_=await _1("default",D0,null,Q_);if(f_?.command)r_({model:f_.command.model_label??U??null,thinking_level:f_.command.thinking_level,supports_thinking:f_.command.supports_thinking});if(U_){let M_=z_.current,_0=o_(M_.filter((K0)=>K0!==U_));if(_0.push(U_),_0.length>200)_0.splice(0,_0.length-200);z_.current=_0,$0(_0),n_.current=-1,M.current=""}l(""),V_([]),G?.(),E?.(),_?.()}catch(Q_){console.error("Failed to post:",Q_),alert("Failed to post: "+Q_.message)}finally{q_(!1)}},x0=(H)=>{if(H.isComposing)return;if(J&&H.key==="Escape"){H.preventDefault(),p(""),Z?.();return}if(K_&&__.length>0){let S=A_.current?.value??(J?Y_:m);if(!String(S||"").startsWith("/"))G_(!1),t([]);else{if(H.key==="ArrowDown"){H.preventDefault(),Z_((o)=>(o+1)%__.length);return}if(H.key==="ArrowUp"){H.preventDefault(),Z_((o)=>(o-1+__.length)%__.length);return}if(H.key==="Tab"){H.preventDefault(),F0(__[j_]);return}if(H.key==="Enter"&&!H.shiftKey){if(!(A_.current?.value??(J?Y_:m)).includes(" ")){H.preventDefault();let U_=__[j_];G_(!1),t([]),k0(U_.name);return}}if(H.key==="Escape"){H.preventDefault(),G_(!1),t([]);return}}}if(!J&&(H.key==="ArrowUp"||H.key==="ArrowDown")&&!H.metaKey&&!H.ctrlKey&&!H.altKey&&!H.shiftKey){let S=A_.current;if(!S)return;let o=S.value||"",Q_=S.selectionStart===0&&S.selectionEnd===0,U_=S.selectionStart===o.length&&S.selectionEnd===o.length;if(H.key==="ArrowUp"&&Q_||H.key==="ArrowDown"&&U_){let F_=z_.current;if(!F_.length)return;H.preventDefault();let N_=n_.current;if(H.key==="ArrowUp"){if(N_===-1)M.current=o,N_=F_.length-1;else if(N_>0)N_-=1;n_.current=N_,B0(F_[N_]||"")}else{if(N_===-1)return;if(N_<F_.length-1)N_+=1,n_.current=N_,B0(F_[N_]||"");else n_.current=-1,B0(M.current||""),M.current=""}requestAnimationFrame(()=>{let T_=A_.current;if(!T_)return;let D0=T_.value.length;T_.selectionStart=D0,T_.selectionEnd=D0});return}}if(H.key==="Enter"&&!H.shiftKey){H.preventDefault();let S=A_.current?.value??(J?Y_:m);if(J){if(S.trim())Y?.(S.trim())}else k0(S)}},E0=(H)=>{let S=Array.from(H||[]).filter((o)=>o&&o.type&&o.type.startsWith("image/"));if(!S.length)return;V_((o)=>[...o,...S])},u_=(H)=>{E0(H.target.files),H.target.value=""},t_=(H)=>{if(J)return;H.preventDefault(),H.stopPropagation(),c_.current+=1,y_(!0)},j0=(H)=>{if(J)return;if(H.preventDefault(),H.stopPropagation(),c_.current=Math.max(0,c_.current-1),c_.current===0)y_(!1)},m_=(H)=>{if(J)return;if(H.preventDefault(),H.stopPropagation(),H.dataTransfer)H.dataTransfer.dropEffect="copy";y_(!0)},g_=(H)=>{if(J)return;H.preventDefault(),H.stopPropagation(),c_.current=0,y_(!1),E0(H.dataTransfer?.files||[])},e_=(H)=>{if(J)return;let S=H.clipboardData?.items;if(!S||!S.length)return;let o=[];for(let Q_ of S){if(Q_.kind!=="file")continue;let U_=Q_.getAsFile?.();if(U_)o.push(U_)}if(o.length>0)H.preventDefault(),E0(o)},z0=(H)=>{V_((S)=>S.filter((o,Q_)=>Q_!==H))},A0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((H)=>{let{latitude:S,longitude:o,accuracy:Q_}=H.coords,U_=`${S.toFixed(5)}, ${o.toFixed(5)}`,F_=Number.isFinite(Q_)?` ±${Math.round(Q_)}m`:"",N_=`https://maps.google.com/?q=${S},${o}`,T_=`Location: ${U_}${F_} ${N_}`;X0(T_)},(H)=>{let S=H?.message||"Unable to retrieve location.";alert(`Location error: ${S}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};c(()=>{if(!C_)return;B_(!0),X2().then((H)=>{let S=Array.isArray(H?.models)?H.models.filter((o)=>typeof o==="string"&&o.trim().length>0):[];I_(S),r_(H)}).catch((H)=>{console.warn("Failed to load model list:",H),I_([])}).finally(()=>{B_(!1)})},[C_,U]),c(()=>{if(J)b_(!1)},[J]),c(()=>{if(!C_)return;let H=(S)=>{let o=v_.current,Q_=w_.current,U_=S.target;if(o&&o.contains(U_))return;if(Q_&&Q_.contains(U_))return;b_(!1)};return document.addEventListener("pointerdown",H),()=>document.removeEventListener("pointerdown",H)},[C_]);let T0=(H)=>{let S=H.target.value;x_(H.target),B0(S)};return c(()=>{requestAnimationFrame(()=>x_())},[m,Y_,J]),q`
        <div class="compose-box">
            <div
                class=${`compose-input-wrapper${W_?" drag-active":""}`}
                onDragEnter=${t_}
                onDragOver=${m_}
                onDragLeave=${j0}
                onDrop=${g_}
            >
                <div class="compose-input-main">
                    ${(j.length>0||J_.length>0||W.length>0)&&q`
                        <div class="compose-file-refs">
                            ${W.map((H)=>{return q`
                                    <${u0}
                                        key=${"msg-"+H}
                                        prefix="compose"
                                        label=${"msg:"+H}
                                        title=${"Message reference: "+H}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>Q?.(H)}
                                    />
                                `})}
                            ${j.map((H)=>{let S=H.split("/").pop()||H;return q`
                                    <${u0}
                                        prefix="compose"
                                        label=${S}
                                        title=${H}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(H)}
                                    />
                                `})}
                            ${J_.map((H,S)=>{let o=H?.name||`image-${S+1}`;return q`
                                    <${u0}
                                        key=${o+S}
                                        prefix="compose"
                                        label=${o}
                                        title=${o}
                                        removeTitle="Remove image"
                                        onRemove=${()=>z0(S)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${A_}
                        placeholder=${J?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${J?Y_:m}
                        onInput=${T0}
                        onKeyDown=${x0}
                        onPaste=${e_}
                        onFocus=${$}
                        onClick=${$}
                        disabled=${e}
                        rows="1"
                    />
                    ${K_&&__.length>0&&q`
                        <div class="slash-autocomplete" ref=${O0}>
                            ${__.map((H,S)=>q`
                                <div
                                    key=${H.name}
                                    class=${`slash-item${S===j_?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),F0(H)}}
                                    onMouseEnter=${()=>Z_(S)}
                                >
                                    <span class="slash-name">${H.name}</span>
                                    <span class="slash-desc">${H.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${C_&&!J&&q`
                        <div class="compose-model-popup" ref=${v_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${S_&&q`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!S_&&L_.length===0&&q`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!S_&&L_.map((H)=>q`
                                    <button
                                        key=${H}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${U===H?" active":""}`}
                                        onClick=${()=>{i_(H)}}
                                        disabled=${D_}
                                    >
                                        ${H}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{h_()}}
                                    disabled=${D_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!J&&U&&q`
                        <div class="compose-meta-row">
                            <button
                                ref=${w_}
                                type="button"
                                class="compose-model-hint compose-model-hint-btn"
                                title=${D_?"Switching model…":`Current model: ${d_} (tap to open model picker)`}
                                aria-label="Open model picker"
                                onClick=${L0}
                                disabled=${e||D_}
                            >
                                ${D_?"Switching…":d_}
                            </button>
                        </div>
                    `}
                    <div class="compose-actions ${J?"search-mode":""}">
                    ${!J&&w&&w.percent!=null&&q`
                        <${l4} usage=${w} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${J?Z:X}
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
                    ${R_&&!J&&q`
                        <button
                            class="icon-btn location-btn"
                            onClick=${A0}
                            title="Share location"
                            type="button"
                            disabled=${e}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${q0&&!J&&q`
                        <button
                            class=${`icon-btn notification-btn${a_?" active":""}`}
                            onClick=${k}
                            title=${N0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!J&&q`
                        ${f&&s&&q`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${s}
                                title=${`Attach open file: ${f}`}
                                type="button"
                                disabled=${e||j.includes(f)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${u_} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{k0()}}
                            disabled=${!a}
                            title="Send (Ctrl+Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var y3="piclaw_theme",K1="piclaw_tint",M2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},o4={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},C3={default:{label:"Default",mode:"auto",light:M2,dark:o4},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},n4=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],P2={theme:"default",tint:null},k3="light",Q1=!1;function A3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function a0(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let J=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(J)&&!/^[0-9a-fA-F]{6}$/.test(J))return null;let Y=J.length===3?J.split("").map((Z)=>Z+Z).join(""):J,X=parseInt(Y,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${Y.toLowerCase()}`}}function d4(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let J=document.createElement("div");if(J.style.color="",J.style.color=$,!J.style.color)return null;let Y=J.style.color;try{if(document.body)J.style.display="none",document.body.appendChild(J),Y=getComputedStyle(J).color||J.style.color,document.body.removeChild(J)}catch{}let X=Y.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Z=parseInt(X[1],10),j=parseInt(X[2],10),V=parseInt(X[3],10);if(![Z,j,V].every((W)=>Number.isFinite(W)))return null;let G=`#${[Z,j,V].map((W)=>W.toString(16).padStart(2,"0")).join("")}`;return{r:Z,g:j,b:V,hex:G}}function w3(_){return a0(_)||d4(_)}function j2(_,$,J){let Y=Math.round(_.r+($.r-_.r)*J),X=Math.round(_.g+($.g-_.g)*J),Z=Math.round(_.b+($.b-_.b)*J);return`rgb(${Y} ${X} ${Z})`}function j1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function M3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function G1(_){return C3[_]||C3.default}function r4(_){return _.mode==="auto"?M3():_.mode}function s4(_,$){let J=G1(_);if($==="dark"&&J.dark)return J.dark;if($==="light"&&J.light)return J.light;return J.dark||J.light||M2}function a4(_,$,J){let Y=w3($);if(!Y)return _;let X=a0(_.bgPrimary),Z=a0(_.bgSecondary),j=a0(_.bgHover),V=a0(_.borderColor);if(!X||!Z||!j||!V)return _;let W=a0(J==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:j2(X,Y,0.08),bgSecondary:j2(Z,Y,0.12),bgHover:j2(j,Y,0.16),borderColor:j2(V,Y,0.08),accent:Y.hex,accentHover:W?j2(Y,W,0.18):Y.hex}}function t4(_,$){if(typeof document>"u")return;let J=document.documentElement,Y=_.accent,X=w3(Y),Z=X?j1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,j=X?j1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",V=X?j1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Y,"--accent-hover":_.accentHover||Y,"--accent-soft":j,"--accent-soft-strong":V,"--danger-color":_.danger||M2.danger,"--success-color":_.success||M2.success,"--search-highlight-color":Z||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([W,Q])=>{if(Q)J.style.setProperty(W,Q)})}function e4(){if(typeof document>"u")return;let _=document.documentElement;n4.forEach(($)=>_.style.removeProperty($))}function A2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function _8(_,$){if(typeof document>"u")return;let J=A2("theme-color");if(J&&_)J.setAttribute("content",_);let Y=A2("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let X=A2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Z=A2("apple-mobile-web-app-status-bar-style");if(Z)Z.setAttribute("content",$==="dark"?"black-translucent":"default")}function $8(){if(typeof window>"u")return;let _={...P2,mode:k3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function V1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let J=A3(_?.theme||"default"),Y=_?.tint?String(_.tint).trim():null,X=G1(J),Z=r4(X),j=s4(J,Z);P2={theme:J,tint:Y},k3=Z;let V=document.documentElement;V.dataset.theme=Z,V.dataset.colorTheme=J,V.dataset.tint=Y?String(Y):"",V.style.colorScheme=Z;let G=j;if(J==="default"&&Y)G=a4(j,Y,Z);if(J==="default"&&!Y)e4();else t4(G,Z);if(_8(G.bgPrimary,Z),$8(),$.persist!==!1)if(P_(y3,J),Y)P_(K1,Y);else P_(K1,"")}function w2(){if(G1(P2.theme).mode!=="auto")return;V1(P2,{persist:!1})}function P3(){if(typeof window>"u")return()=>{};let _=A3(p0(y3)||"default"),$=p0(K1),J=$?$.trim():null;if(V1({theme:_,tint:J},{persist:!1}),window.matchMedia&&!Q1){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",w2);else if(Y.addListener)Y.addListener(w2);return Q1=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",w2);else if(Y.removeListener)Y.removeListener(w2);Q1=!1}}return()=>{}}function b3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let J=_.theme??_.name??_.colorTheme,Y=_.tint??null;V1({theme:J||"default",tint:Y},{persist:!0})}function I3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return M3()}var b2=/#(\w+)/g,J8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),Y8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),Z8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),X8={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},Q8=new Set(["http:","https:","mailto:",""]);function S3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function t0(_,$={}){if(!_)return null;let J=String(_).trim();if(!J)return null;if(J.startsWith("#")||J.startsWith("/"))return J;if(J.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(J))return J;return null}if(J.startsWith("blob:"))return J;try{let Y=new URL(J,typeof window<"u"?window.location.origin:"http://localhost");if(!Q8.has(Y.protocol))return null;return Y.href}catch{return null}}function x3(_,$={}){if(!_)return"";let J=new DOMParser().parseFromString(_,"text/html"),Y=[],X=J.createTreeWalker(J.body,NodeFilter.SHOW_ELEMENT),Z;while(Z=X.nextNode())Y.push(Z);for(let j of Y){let V=j.tagName.toLowerCase();if(!Y8.has(V)){let W=j.parentNode;if(!W)continue;while(j.firstChild)W.insertBefore(j.firstChild,j);W.removeChild(j);continue}let G=X8[V]||new Set;for(let W of Array.from(j.attributes)){let Q=W.name.toLowerCase(),E=W.value;if(Q.startsWith("on")){j.removeAttribute(W.name);continue}if(Q.startsWith("data-")||Q.startsWith("aria-"))continue;if(G.has(Q)||Z8.has(Q)){if(Q==="href"){let U=t0(E);if(!U)j.removeAttribute(W.name);else if(j.setAttribute(W.name,U),V==="a"&&!j.getAttribute("rel"))j.setAttribute("rel","noopener noreferrer")}else if(Q==="src"){let U=V==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(E):E,F=t0(U,{allowDataImage:V==="img"});if(!F)j.removeAttribute(W.name);else j.setAttribute(W.name,F)}continue}j.removeAttribute(W.name)}}return J.body.innerHTML}function T3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function I2(_,$=2){if(!_)return _;let J=_;for(let Y=0;Y<$;Y+=1){let X=T3(J);if(X===J)break;J=X}return J}function j8(_){if(!_)return{text:"",blocks:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=[],X=[],Z=!1,j=[];for(let V of J){if(!Z&&V.trim().match(/^```mermaid\s*$/i)){Z=!0,j=[];continue}if(Z&&V.trim().match(/^```\s*$/)){let G=Y.length;Y.push(j.join(`
`)),X.push(`@@MERMAID_BLOCK_${G}@@`),Z=!1,j=[];continue}if(Z)j.push(V);else X.push(V)}if(Z)X.push("```mermaid"),X.push(...j);return{text:X.join(`
`),blocks:Y}}function K8(_){if(!_)return _;return I2(_,5)}function G8(_){let $=new TextEncoder().encode(String(_||"")),J="";for(let Y of $)J+=String.fromCharCode(Y);return btoa(J)}function V8(_){let $=atob(String(_||"")),J=new Uint8Array($.length);for(let Y=0;Y<$.length;Y+=1)J[Y]=$.charCodeAt(Y);return new TextDecoder().decode(J)}function W8(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(J,Y)=>{let X=Number(Y),Z=$[X]??"",j=K8(Z);return`<div class="mermaid-container" data-mermaid="${G8(j)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function f3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,J)=>{if(J.includes(`
`))return`
\`\`\`
${J}
\`\`\`
`;return`\`${J}\``})}function v3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,J)=>{let Y=J.trim(),X=Y.startsWith("/"),Z=X?Y.slice(1).trim():Y,G=(Z.endsWith("/")?Z.slice(0,-1).trim():Z).split(/\s+/)[0]?.toLowerCase();if(!G||!J8.has(G))return $;if(G==="br")return X?"":"<br>";if(X)return`</${G}>`;return`<${G}>`})}function R3(_){if(!_)return _;let $=(J)=>J.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(J,Y)=>`<pre><code>${$(Y)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(J,Y)=>`<code>${$(Y)}</code>`)}function u3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),J=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Y=(Z)=>Z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=J.nextNode()){if(!X.nodeValue)continue;let Z=Y(X.nodeValue);if(Z!==X.nodeValue)X.nodeValue=Z}return $.body.innerHTML}function O8(_){if(!window.katex)return _;let $=(j)=>T3(j).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),J=(j)=>{let V=[],G=j.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(W)=>{let Q=V.length;return V.push(W),`@@CODE_BLOCK_${Q}@@`});return G=G.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(W)=>{let Q=V.length;return V.push(W),`@@CODE_INLINE_${Q}@@`}),{html:G,blocks:V}},Y=(j,V)=>{if(!V.length)return j;return j.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(G,W)=>{let Q=Number(W);return V[Q]??""})},X=J(_),Z=X.html;return Z=Z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(j,V,G)=>{try{let W=katex.renderToString($(G.trim()),{displayMode:!0,throwOnError:!1});return`${V}${W}`}catch(W){return`<span class="math-error" title="${S3(W.message)}">${j}</span>`}}),Z=Z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(j,V,G)=>{if(/\s$/.test(G))return j;try{let W=katex.renderToString($(G),{displayMode:!1,throwOnError:!1});return`${V}${W}`}catch(W){return`${V}<span class="math-error" title="${S3(W.message)}">$${G}$</span>`}}),Y(Z,X.blocks)}function q8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),J=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Y=[],X;while(X=J.nextNode())Y.push(X);for(let Z of Y){let j=Z.nodeValue;if(!j)continue;if(b2.lastIndex=0,!b2.test(j))continue;b2.lastIndex=0;let V=Z.parentElement;if(V&&(V.closest("a")||V.closest("code")||V.closest("pre")))continue;let G=j.split(b2);if(G.length<=1)continue;let W=$.createDocumentFragment();G.forEach((Q,E)=>{if(E%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",Q),U.textContent=`#${Q}`,W.appendChild(U)}else W.appendChild($.createTextNode(Q))}),Z.parentNode?.replaceChild(W,Z)}return $.body.innerHTML}function N8(_){if(!_)return _;let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=[],X=!1;for(let Z of J){if(!X&&Z.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,Y.push("$$");continue}if(X&&Z.trim().match(/^```\s*$/)){X=!1,Y.push("$$");continue}Y.push(Z)}return Y.join(`
`)}function e0(_,$,J={}){if(!_)return"";let Y=N8(_),{text:X,blocks:Z}=j8(Y),j=I2(X,2),G=f3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),W=v3(G),Q=window.marked?marked.parse(W,{headerIds:!1,mangle:!1}):W.replace(/\n/g,"<br>");return Q=R3(Q),Q=u3(Q),Q=O8(Q),Q=q8(Q),Q=W8(Q,Z),Q=x3(Q,J),Q}function m3(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),J=I2($,2),X=f3(J).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Z=v3(X),j=window.marked?marked.parse(Z):Z.replace(/\n/g,"<br>");return j=R3(j),j=u3(j),j=x3(j),j}async function S2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:J}=window.beautifulMermaid,X=I3()==="dark"?J["tokyo-night"]:J["github-light"],Z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let j of Z)try{let V=j.dataset.mermaid,G=V8(V||""),W=I2(G,2),Q=await $(W,{...X,transparent:!0});j.innerHTML=Q,j.removeAttribute("data-mermaid")}catch(V){console.error("Mermaid render error:",V);let G=document.createElement("pre");G.className="mermaid-error",G.textContent=`Diagram error: ${V.message}`,j.innerHTML="",j.appendChild(G),j.removeAttribute("data-mermaid")}}var g3="PiClaw";function W1(_,$){let J=_||"PiClaw",Y=J.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Z=Y.charCodeAt(0)%X.length,j=X[Z],V=J.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",Q=(G?G:null)||(V==="PiClaw".toLowerCase()||V==="pi"?"/static/icon-192.png":null);return{letter:Y,color:j,image:Q}}function c3(_,$){if(!_)return"PiClaw";let J=$[_]?.name||_;return J?J.charAt(0).toUpperCase()+J.slice(1):"PiClaw"}function p3(_,$){if(!_)return null;let J=$[_]||{};return J.avatar_url||J.avatarUrl||J.avatar||null}function h3(_){if(!_)return null;if(typeof document<"u"){let Z=document.documentElement,j=Z?.dataset?.colorTheme||"",V=Z?.dataset?.tint||"",G=getComputedStyle(Z).getPropertyValue("--accent-color")?.trim();if(G&&(V||j&&j!=="default"))return G}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],J=String(_),Y=0;for(let Z=0;Z<J.length;Z+=1)Y=(Y*31+J.charCodeAt(Z))%2147483647;let X=Math.abs(Y)%$.length;return $[X]}function i3({status:_,draft:$,plan:J,thought:Y,pendingRequest:X,turnId:Z,steerQueued:j,onPanelToggle:V}){let Q=(t)=>{if(!t)return{text:"",totalLines:0,fullText:""};if(typeof t==="string"){let G_=t,D_=G_?G_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:G_,totalLines:D_,fullText:G_}}let j_=t.text||"",Z_=t.fullText||t.full_text||j_,K_=Number.isFinite(t.totalLines)?t.totalLines:Z_?Z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:j_,totalLines:K_,fullText:Z_}},E=160,U=(t)=>{if(!t)return 1;return Math.max(1,Math.ceil(t.length/160))},F=(t,j_,Z_)=>{let K_=(t||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!K_)return{text:"",omitted:0,totalLines:Number.isFinite(Z_)?Z_:0,visibleLines:0};let G_=K_.split(`
`),D_=G_.length>j_?G_.slice(0,j_).join(`
`):K_,H_=Number.isFinite(Z_)?Z_:G_.reduce((L_,I_)=>L_+U(I_),0),C_=D_?D_.split(`
`).reduce((L_,I_)=>L_+U(I_),0):0,b_=Math.max(H_-C_,0);return{text:D_,omitted:b_,totalLines:H_,visibleLines:C_}},L=Q(J),w=Q(Y),x=Q($),z=Boolean(L.text)||L.totalLines>0,k=Boolean(w.text)||w.totalLines>0,I=Boolean(x.fullText?.trim()||x.text?.trim());if(!_&&!I&&!z&&!k&&!X)return null;let[D,f]=R(new Set),s=(t)=>f((j_)=>{let Z_=new Set(j_),K_=!Z_.has(t);if(K_)Z_.add(t);else Z_.delete(t);if(typeof V==="function")V(t,K_);return Z_});c(()=>{f(new Set)},[Z]);let m=_?.turn_id||Z,l=h3(m),Y_=j?"turn-dot turn-dot-queued":"turn-dot",p=(t)=>t,e=Boolean(_?.last_activity||_?.lastActivity),q_="",J_=_?.title,V_=_?.status;if(_?.type==="plan")q_=J_?`Planning: ${J_}`:"Planning...";else if(_?.type==="tool_call")q_=J_?`Running: ${J_}`:"Running tool...";else if(_?.type==="tool_status")q_=J_?`${J_}: ${V_||"Working..."}`:V_||"Working...";else if(_?.type==="error")q_=J_||"Agent error";else q_=J_||V_||"Working...";if(e)q_="Last activity just now";let W_=({panelTitle:t,text:j_,fullText:Z_,totalLines:K_,maxLines:G_,titleClass:D_,panelKey:H_})=>{let C_=D.has(H_),b_=Z_||j_||"",L_=typeof G_==="number",I_=C_&&L_,S_=L_?F(b_,G_,K_):{text:b_||"",omitted:0,totalLines:Number.isFinite(K_)?K_:0};if(!b_&&!(Number.isFinite(S_.totalLines)&&S_.totalLines>0))return null;let B_=`agent-thinking-body${L_?" agent-thinking-body-collapsible":""}`,A_=L_?`--agent-thinking-collapsed-lines: ${G_};`:"";return q`
            <div
                class="agent-thinking"
                data-expanded=${C_?"true":"false"}
                data-collapsible=${L_?"true":"false"}
                style=${l?`--turn-color: ${l};`:""}
            >
                <div class="agent-thinking-title ${D_||""}">
                    ${l&&q`<span class=${Y_} aria-hidden="true"></span>`}
                    ${t}
                    ${I_&&q`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${t} panel`}
                            onClick=${()=>s(H_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${B_}
                    style=${A_}
                    dangerouslySetInnerHTML=${{__html:m3(b_)}}
                />
                ${!C_&&S_.omitted>0&&q`
                    <button class="agent-thinking-truncation" onClick=${()=>s(H_)}>
                        ▸ ${S_.omitted} more lines
                    </button>
                `}
                ${C_&&S_.omitted>0&&q`
                    <button class="agent-thinking-truncation" onClick=${()=>s(H_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},y_=X?.tool_call?.title,__=y_?`Awaiting approval: ${y_}`:"Awaiting approval";return q`
        <div class="agent-status-panel">
            ${X&&q`
                <div class="agent-status agent-status-request" aria-live="polite" style=${l?`--turn-color: ${l};`:""}>
                    <span class=${Y_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${__}</span>
                </div>
            `}
            ${z&&W_({panelTitle:p("Planning"),text:L.text,fullText:L.fullText,totalLines:L.totalLines,panelKey:"plan"})}
            ${k&&W_({panelTitle:p("Thoughts"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${I&&W_({panelTitle:p("Draft"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&q`
                <div class=${`agent-status${e?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${l?`--turn-color: ${l};`:""}>
                    ${l&&q`<span class=${Y_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?q`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!e&&q`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${q_}</span>
                </div>
            `}
        </div>
    `}function l3({request:_,onRespond:$}){if(!_)return null;let{request_id:J,tool_call:Y,options:X}=_,Z=Y?.title||"Agent Request",j=Y?.kind||"other",V=Y?.rawInput||{},G=V.command||V.commands&&V.commands[0]||null,W=V.diff||null,Q=V.fileName||V.path||null,E=Y?.description||V.description||V.explanation||null,F=(Array.isArray(Y?.locations)?Y.locations:[]).map((k)=>k?.path).filter((k)=>Boolean(k)),L=Array.from(new Set([Q,...F].filter(Boolean)));console.log("AgentRequestModal:",{request_id:J,tool_call:Y,options:X});let w=async(k)=>{try{await J1(J,k),$()}catch(I){console.error("Failed to respond to agent request:",I)}},x=async()=>{try{await V3(Z,`Auto-approved: ${Z}`),await J1(J,"approved"),$()}catch(k){console.error("Failed to add to whitelist:",k)}},z=X&&X.length>0;return q`
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
                ${(E||G||W||L.length>0)&&q`
                    <div class="agent-request-body">
                        ${E&&q`
                            <div class="agent-request-description">${E}</div>
                        `}
                        ${L.length>0&&q`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${L.map((k,I)=>q`<li key=${I}>${k}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&q`
                            <pre class="agent-request-command">${G}</pre>
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
                    ${z?X.map((k)=>q`
                            <button 
                                key=${k.optionId||k.id||String(k)}
                                class="agent-request-btn ${k.kind==="allow_once"||k.kind==="allow_always"?"primary":""}"
                                onClick=${()=>w(k.optionId||k.id||k)}
                            >
                                ${k.name||k.label||k.optionId||k.id||String(k)}
                            </button>
                        `):q`
                        <button class="agent-request-btn primary" onClick=${()=>w("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>w("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${x}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function o3({status:_}){if(_==="connected")return null;return q`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function n3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Y=new Date-$,X=Y/1000,Z=86400000;if(Y<Z){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(Y<5*Z){let G=$.toLocaleDateString(void 0,{weekday:"short"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${G} ${W}`}let j=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${j} ${V}`}function K2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function P0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function x2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function d3({src:_,onClose:$}){return c(()=>{let J=(Y)=>{if(Y.key==="Escape")$()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[$]),q`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function B8({mediaId:_}){let[$,J]=R(null);if(c(()=>{C2(_).then(J).catch(()=>{})},[_]),!$)return null;let Y=$.filename||"file",X=$.metadata?.size,Z=X?P0(X):"";return q`
        <a href=${Q2(_)} download=${Y} class="file-attachment" onClick=${(j)=>j.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Y}</span>
                ${Z&&q`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function T2({annotations:_}){if(!_)return null;let{audience:$,priority:J,lastModified:Y}=_,X=Y?x2(Y):null;return q`
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
    `}function z8({block:_}){let $=_.title||_.name||_.uri,J=_.description,Y=_.size?P0(_.size):"",X=_.mime_type||"",Z=H8(X),j=t0(_.uri);return q`
        <a
            href=${j||"#"}
            class="resource-link"
            target=${j?"_blank":void 0}
            rel=${j?"noopener noreferrer":void 0}
            onClick=${(V)=>V.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${J&&q`<div class="resource-link-description">${J}</div>`}
                <div class="resource-link-meta">
                    ${X&&q`<span>${X}</span>`}
                    ${Y&&q`<span>${Y}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function U8({block:_}){let[$,J]=R(!1),Y=_.uri||"Embedded resource",X=_.text||"",Z=Boolean(_.data),j=_.mime_type||"";return q`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),J(!$)}}>
                ${$?"▼":"▶"} ${Y}
            </button>
            ${$&&q`
                ${X&&q`<pre class="resource-embed-content">${X}</pre>`}
                ${Z&&q`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${j&&q`<span class="resource-embed-blob-meta">${j}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(V)=>{V.preventDefault(),V.stopPropagation();let G=new Blob([Uint8Array.from(atob(_.data),(E)=>E.charCodeAt(0))],{type:j||"application/octet-stream"}),W=URL.createObjectURL(G),Q=document.createElement("a");Q.href=W,Q.download=Y.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(W)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function H8(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function F8({preview:_}){let $=t0(_.url),J=t0(_.image,{allowDataImage:!0}),Y=J?`background-image: url('${J}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return q`
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
                ${_.description&&q`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function L8(_,$){return typeof _==="string"?_:""}function E8(_){if(!_)return{content:_,fileRefs:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Files:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,fileRefs:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W))X.push(W.replace(/^\s*-\s+/,"").trim());else if(!W.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let j=J.slice(0,Y),V=J.slice(Z),G=[...j,...V].join(`
`);return G=G.replace(/\n{3,}/g,`

`).trim(),{content:G,fileRefs:X}}function D8(_){if(!_)return{content:_,messageRefs:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Referenced messages:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,messageRefs:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W)){let E=W.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(E)X.push(E[1])}else if(!W.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let j=J.slice(0,Y),V=J.slice(Z),G=[...j,...V].join(`
`);return G=G.replace(/\n{3,}/g,`

`).trim(),{content:G,messageRefs:X}}function C8(_){if(!_)return{content:_,attachments:[]};let J=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Y=-1;for(let W=0;W<J.length;W+=1)if(J[W].trim()==="Images:"&&J[W+1]&&/^\s*-\s+/.test(J[W+1])){Y=W;break}if(Y===-1)return{content:_,attachments:[]};let X=[],Z=Y+1;for(;Z<J.length;Z+=1){let W=J[Z];if(/^\s*-\s+/.test(W)){let Q=W.replace(/^\s*-\s+/,"").trim(),E=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(E){let U=E[1],F=(E[2]||"").trim()||U;X.push({id:U,label:F,raw:Q})}else X.push({id:null,label:Q,raw:Q})}else if(!W.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let j=J.slice(0,Y),V=J.slice(Z),G=[...j,...V].join(`
`);return G=G.replace(/\n{3,}/g,`

`).trim(),{content:G,attachments:X}}function y8(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function k8(_,$){if(!_||!$)return _;let J=String($).trim().split(/\s+/).filter(Boolean);if(J.length===0)return _;let Y=J.map(y8).sort((Q,E)=>E.length-Q.length),X=new RegExp(`(${Y.join("|")})`,"gi"),Z=new RegExp(`^(${Y.join("|")})$`,"i"),j=new DOMParser().parseFromString(_,"text/html"),V=j.createTreeWalker(j.body,NodeFilter.SHOW_TEXT),G=[],W;while(W=V.nextNode())G.push(W);for(let Q of G){let E=Q.nodeValue;if(!E||!X.test(E)){X.lastIndex=0;continue}X.lastIndex=0;let U=Q.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let F=E.split(X).filter((w)=>w!=="");if(F.length===0)continue;let L=j.createDocumentFragment();for(let w of F)if(Z.test(w)){let x=j.createElement("mark");x.className="search-highlight-term",x.textContent=w,L.appendChild(x)}else L.appendChild(j.createTextNode(w));Q.parentNode.replaceChild(L,Q)}return j.body.innerHTML}function r3({post:_,onClick:$,onHashtagClick:J,onMessageRef:Y,onScrollToMessage:X,agentName:Z,agentAvatarUrl:j,userName:V,userAvatarUrl:G,userAvatarBackground:W,onDelete:Q,isThreadReply:E,isRemoving:U,highlightQuery:F}){let[L,w]=R(null),x=A(null),z=_.data,k=z.type==="agent_response",I=V||"You",D=k?Z||g3:I,f=k?W1(Z,j):W1(I,G),s=typeof W==="string"?W.trim().toLowerCase():"",m=!k&&f.image&&(s==="clear"||s==="transparent"),l=k&&Boolean(f.image),Y_=`background-color: ${m||l?"transparent":f.color}`,p=z.content_meta,e=Boolean(p?.truncated),q_=Boolean(p?.preview),J_=e&&!q_,V_=e?{originalLength:Number.isFinite(p?.original_length)?p.original_length:z.content?z.content.length:0,maxLength:Number.isFinite(p?.max_length)?p.max_length:0}:null,W_=L8(z.content,z.link_previews),{content:y_,fileRefs:__}=E8(W_),{content:t,messageRefs:j_}=D8(y_),{content:Z_,attachments:K_}=C8(t);W_=Z_;let G_=Boolean(W_)&&!J_,D_=typeof F==="string"?F.trim():"",H_=M0(()=>{if(!W_)return"";let M=e0(W_,J);return D_?k8(M,D_):M},[W_,D_]),C_=(M,a)=>{M.stopPropagation(),w(Q2(a))},b_=(M)=>{M.stopPropagation(),Q?.(_)},L_=(M,a)=>{let R_=new Set;if(!M||a.length===0)return{content:M,usedIds:R_};return{content:M.replace(/attachment:([^\s)"']+)/g,(b0,C0,q0,a_)=>{let N0=C0.replace(/^\/+/,""),d_=a.find((x_)=>x_.name&&x_.name.toLowerCase()===N0.toLowerCase()&&!R_.has(x_.id))||a.find((x_)=>!R_.has(x_.id));if(!d_)return b0;if(R_.add(d_.id),a_.slice(Math.max(0,q0-2),q0)==="](")return`/media/${d_.id}`;return d_.name||"attachment"}),usedIds:R_}},I_=[],S_=[],B_=[],A_=[],O0=[],v_=[],w_=z.content_blocks||[],c_=z.media_ids||[],U0=0;if(w_.length>0)w_.forEach((M)=>{if(M?.type==="text"&&M.annotations)v_.push(M.annotations);if(M?.type==="resource_link")A_.push(M);else if(M?.type==="resource")O0.push(M);else if(M?.type==="file"){let a=c_[U0++];if(a)S_.push(a),B_.push({id:a,name:M?.name||M?.filename||M?.title})}else if(M?.type==="image"||!M?.type){let a=c_[U0++];if(a)I_.push({id:a,annotations:M?.annotations}),B_.push({id:a,name:M?.name||M?.filename||M?.title})}});else if(c_.length>0)c_.forEach((M)=>{I_.push({id:M,annotations:null}),B_.push({id:M,name:null})});if(K_.length>0)K_.forEach((M)=>{if(!M?.id)return;let a=B_.find((R_)=>String(R_.id)===String(M.id));if(a&&!a.name)a.name=M.label});let{content:o_,usedIds:H0}=L_(W_,B_);W_=o_;let $0=I_.filter(({id:M})=>!H0.has(M)),z_=S_.filter((M)=>!H0.has(M)),n_=K_.length>0?K_.map((M,a)=>({id:M.id||`attachment-${a+1}`,label:M.label||`attachment-${a+1}`})):B_.map((M,a)=>({id:M.id,label:M.name||`attachment-${a+1}`}));return c(()=>{if(x.current)S2(x.current)},[W_]),q`
        <div id=${`post-${_.id}`} class="post ${k?"agent-post":""} ${E?"thread-reply":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${k?"agent-avatar":""} ${f.image?"has-image":""}" style=${Y_}>
                ${f.image?q`<img src=${f.image} alt=${D} />`:f.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${b_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${D}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(M)=>{if(M.preventDefault(),M.stopPropagation(),Y)Y(_.id)}}>${n3(_.timestamp)}</a>
                </div>
                ${J_&&V_&&q`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${K2(V_.originalLength)} chars
                            ${V_.maxLength?q` • Display limit: ${K2(V_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${q_&&V_&&q`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${K2(V_.maxLength)} of ${K2(V_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(__.length>0||j_.length>0||n_.length>0)&&q`
                    <div class="post-file-refs">
                        ${j_.map((M)=>{let a=(R_)=>{if(R_.preventDefault(),R_.stopPropagation(),X)X(M);else{let p_=document.getElementById("post-"+M);if(p_)p_.scrollIntoView({behavior:"smooth",block:"center"}),p_.classList.add("post-highlight"),setTimeout(()=>p_.classList.remove("post-highlight"),2000)}};return q`
                                <a href=${`#msg-${M}`} class="post-msg-pill-link" onClick=${a}>
                                    <${u0}
                                        prefix="post"
                                        label=${"msg:"+M}
                                        title=${"Message "+M}
                                        icon="message"
                                        onClick=${a}
                                    />
                                </a>
                            `})}
                        ${__.map((M)=>{let a=M.split("/").pop()||M;return q`
                                <${u0}
                                    prefix="post"
                                    label=${a}
                                    title=${M}
                                />
                            `})}
                        ${n_.map((M)=>q`
                            <${u0}
                                prefix="post"
                                label=${M.label}
                                title=${M.label}
                            />
                        `)}
                    </div>
                `}
                ${G_&&q`
                    <div 
                        ref=${x}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:H_}}
                        onClick=${(M)=>{if(M.target.classList.contains("hashtag")){M.preventDefault(),M.stopPropagation();let a=M.target.dataset.hashtag;if(a)J?.(a)}else if(M.target.tagName==="IMG")M.preventDefault(),M.stopPropagation(),w(M.target.src)}}
                    />
                `}
                ${v_.length>0&&q`
                    ${v_.map((M,a)=>q`
                        <${T2} key=${a} annotations=${M} />
                    `)}
                `}
                ${$0.length>0&&q`
                    <div class="media-preview">
                        ${$0.map(({id:M})=>q`
                            <img 
                                key=${M} 
                                src=${q3(M)} 
                                alt="Media" 
                                loading="lazy"
                                onClick=${(a)=>C_(a,M)}
                            />
                        `)}
                    </div>
                `}
                ${$0.length>0&&q`
                    ${$0.map(({annotations:M},a)=>q`
                        ${M&&q`<${T2} key=${a} annotations=${M} />`}
                    `)}
                `}
                ${z_.length>0&&q`
                    <div class="file-attachments">
                        ${z_.map((M)=>q`
                            <${B8} key=${M} mediaId=${M} />
                        `)}
                    </div>
                `}
                ${A_.length>0&&q`
                    <div class="resource-links">
                        ${A_.map((M,a)=>q`
                            <div key=${a}>
                                <${z8} block=${M} />
                                <${T2} annotations=${M.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${O0.length>0&&q`
                    <div class="resource-embeds">
                        ${O0.map((M,a)=>q`
                            <div key=${a}>
                                <${U8} block=${M} />
                                <${T2} annotations=${M.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${z.link_previews?.length>0&&q`
                    <div class="link-previews">
                        ${z.link_previews.map((M,a)=>q`
                            <${F8} key=${a} preview=${M} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${L&&q`<${d3} src=${L} onClose=${()=>w(null)} />`}
    `}function s3({posts:_,hasMore:$,onLoadMore:J,onPostClick:Y,onHashtagClick:X,onMessageRef:Z,onScrollToMessage:j,emptyMessage:V,timelineRef:G,agents:W,user:Q,onDeletePost:E,reverse:U=!0,removingPostIds:F,searchQuery:L}){let[w,x]=R(!1),z=A(null),k=typeof IntersectionObserver<"u",I=b(async()=>{if(!J||!$||w)return;x(!0);try{await J({preserveScroll:!0,preserveMode:"top"})}finally{x(!1)}},[$,w,J]),D=b((m)=>{let{scrollTop:l,scrollHeight:Y_,clientHeight:p}=m.target,e=U?Y_-p-l:l,q_=Math.max(300,p);if(e<q_)I()},[U,I]);if(c(()=>{if(!k)return;let m=z.current,l=G?.current;if(!m||!l)return;let Y_=300,p=new IntersectionObserver((e)=>{for(let q_ of e){if(!q_.isIntersecting)continue;I()}},{root:l,rootMargin:`${Y_}px 0px ${Y_}px 0px`,threshold:0});return p.observe(m),()=>p.disconnect()},[k,$,J,G,I]),c(()=>{if(k)return;if(!G?.current)return;let{scrollTop:m,scrollHeight:l,clientHeight:Y_}=G.current,p=U?l-Y_-m:m,e=Math.max(300,Y_);if(p<e)I()},[k,_,$,U,G,I]),c(()=>{if(!G?.current)return;if(!$||w)return;let{scrollTop:m,scrollHeight:l,clientHeight:Y_}=G.current,p=U?l-Y_-m:m,e=Math.max(300,Y_);if(l<=Y_+1||p<e)I()},[_,$,w,U,G,I]),!_)return q`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return q`
            <div class="timeline" ref=${G}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${V||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let f=_.slice().sort((m,l)=>m.id-l.id),s=q`<div class="timeline-sentinel" ref=${z}></div>`;return q`
        <div class="timeline ${U?"reverse":"normal"}" ref=${G} onScroll=${D}>
            <div class="timeline-content">
                ${U?s:null}
                ${f.map((m)=>{let l=Boolean(m.data?.thread_id&&m.data.thread_id!==m.id),Y_=F?.has?.(m.id);return q`
                    <${r3}
                        key=${m.id}
                        post=${m}
                        isThreadReply=${l}
                        isRemoving=${Y_}
                        highlightQuery=${L}
                        agentName=${c3(m.data?.agent_id,W||{})}
                        agentAvatarUrl=${p3(m.data?.agent_id,W||{})}
                        userName=${Q?.name||Q?.user_name}
                        userAvatarUrl=${Q?.avatar_url||Q?.avatarUrl||Q?.avatar}
                        userAvatarBackground=${Q?.avatar_background||Q?.avatarBackground}
                        onClick=${()=>Y?.(m)}
                        onHashtagClick=${X}
                        onMessageRef=${Z}
                        onScrollToMessage=${j}
                        onDelete=${E}
                    />
                `})}
                ${U?null:s}
            </div>
        </div>
    `}var A8=16,w8=60000,_4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function M8(_,$){let J=String(_||"").trim();if(!J)return J;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(J)||J.startsWith("#")||J.startsWith("data:")||J.startsWith("blob:"))return J;let Y=J.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=Y?.[1]||J,Z=Y?.[2]||"",j=Y?.[3]||"",V=String($||"").split("/").slice(0,-1).join("/"),W=X.startsWith("/")?X:`${V?`${V}/`:""}${X}`,Q=[];for(let U of W.split("/")){if(!U||U===".")continue;if(U===".."){if(Q.length>0)Q.pop();continue}Q.push(U)}let E=Q.join("/");return`${Z1(E)}${Z}${j}`}function $4(_,$,J,Y=0,X=[]){if(!J&&_4(_))return X;if(!_)return X;if(X.push({node:_,depth:Y}),_.type==="dir"&&_.children&&$.has(_.path))for(let Z of _.children)$4(Z,$,J,Y+1,X);return X}function a3(_,$,J){if(!_)return"";let Y=[],X=(Z)=>{if(!J&&_4(Z))return;if(Y.push(Z.type==="dir"?`d:${Z.path}`:`f:${Z.path}`),Z.children&&$?.has(Z.path))for(let j of Z.children)X(j)};return X(_),Y.join("|")}function B1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let J=Array.isArray(_.children)?_.children:null,Y=Array.isArray($.children)?$.children:null;if(!Y)return _;let X=J?new Map(J.map((V)=>[V?.path,V])):new Map,Z=!J||J.length!==Y.length,j=Y.map((V)=>{let G=B1(X.get(V.path),V);if(G!==X.get(V.path))Z=!0;return G});return Z?{...$,children:j}:_}function q1(_,$,J){if(!_)return _;if(_.path===$)return B1(_,J);if(!Array.isArray(_.children))return _;let Y=!1,X=_.children.map((Z)=>{let j=q1(Z,$,J);if(j!==Z)Y=!0;return j});return Y?{..._,children:X}:_}var J4=4,O1=14,P8=8,b8=16;function Y4(_){if(!_)return 0;if(_.type==="file"){let Y=Math.max(0,Number(_.size)||0);return _.__bytes=Y,Y}let $=Array.isArray(_.children)?_.children:[],J=0;for(let Y of $)J+=Y4(Y);return _.__bytes=J,J}function Z4(_,$=0){let J=Math.max(0,Number(_?.__bytes??_?.size??0)),Y={name:_?.name||_?.path||".",path:_?.path||".",size:J,children:[]};if(!_||_.type!=="dir"||$>=J4)return Y;let X=Array.isArray(_.children)?_.children:[],Z=[];for(let V of X){let G=Math.max(0,Number(V?.__bytes??V?.size??0));if(G<=0)continue;if(V.type==="dir")Z.push({kind:"dir",node:V,size:G});else Z.push({kind:"file",name:V.name,path:V.path,size:G})}Z.sort((V,G)=>G.size-V.size);let j=Z;if(Z.length>O1){let V=Z.slice(0,O1-1),G=Z.slice(O1-1),W=G.reduce((Q,E)=>Q+E.size,0);V.push({kind:"other",name:`+${G.length} more`,path:`${Y.path}/[other]`,size:W}),j=V}return Y.children=j.map((V)=>{if(V.kind==="dir")return Z4(V.node,$+1);return{name:V.name,path:V.path,size:V.size,children:[]}}),Y}function t3(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,J=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(J==="dark")return!0;if(J==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function X4(_,$,J){let Y=((_+Math.PI/2)*180/Math.PI+360)%360,X=J?Math.max(30,70-$*10):Math.max(34,66-$*8),Z=J?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Y.toFixed(1)} ${X}% ${Z}%)`}function f2(_,$,J,Y){return{x:_+J*Math.cos(Y),y:$+J*Math.sin(Y)}}function z1(_,$,J,Y,X,Z){let j=Math.PI*2-0.0001,V=Z-X>j?X+j:Z,G=f2(_,$,Y,X),W=f2(_,$,Y,V),Q=f2(_,$,J,V),E=f2(_,$,J,X),U=V-X>Math.PI?1:0;return[`M ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`A ${Y} ${Y} 0 ${U} 1 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${J} ${J} 0 ${U} 0 ${E.x.toFixed(3)} ${E.y.toFixed(3)}`,"Z"].join(" ")}var Q4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function j4(_,$,J){let Y=[],X=[],Z=Math.max(0,Number($)||0),j=(V,G,W,Q)=>{let E=Array.isArray(V?.children)?V.children:[];if(!E.length)return;let U=Math.max(0,Number(V.size)||0);if(U<=0)return;let F=W-G,L=G;E.forEach((w,x)=>{let z=Math.max(0,Number(w.size)||0);if(z<=0)return;let k=z/U,I=L,D=x===E.length-1?W:L+F*k;if(L=D,D-I<0.003)return;let f=Q4[Q];if(f){let s=X4(I,Q,J);if(Y.push({key:w.path,path:w.path,label:w.name,size:z,color:s,depth:Q,startAngle:I,endAngle:D,innerRadius:f[0],outerRadius:f[1],d:z1(120,120,f[0],f[1],I,D)}),Q===1)X.push({key:w.path,name:w.name,size:z,pct:Z>0?z/Z*100:0,color:s})}if(Q<J4)j(w,I,D,Q+1)})};return j(_,-Math.PI/2,Math.PI*3/2,1),{segments:Y,legend:X}}function N1(_,$){if(!_||!$)return null;if(_.path===$)return _;let J=Array.isArray(_.children)?_.children:[];for(let Y of J){let X=N1(Y,$);if(X)return X}return null}function K4(_,$,J,Y){if(!J||J<=0)return{segments:[],legend:[]};let X=Q4[1];if(!X)return{segments:[],legend:[]};let Z=-Math.PI/2,j=Math.PI*3/2,V=X4(Z,1,Y),W=`${$||"."}/[files]`;return{segments:[{key:W,path:W,label:_,size:J,color:V,depth:1,startAngle:Z,endAngle:j,innerRadius:X[0],outerRadius:X[1],d:z1(120,120,X[0],X[1],Z,j)}],legend:[{key:W,name:_,size:J,pct:100,color:V}]}}function e3(_,$=!1,J=!1){if(!_)return null;let Y=Y4(_),X=Z4(_,0),Z=X.size||Y,{segments:j,legend:V}=j4(X,Z,J);if(!j.length&&Z>0){let G=K4("[files]",X.path,Z,J);j=G.segments,V=G.legend}return{root:X,totalSize:Z,segments:j,legend:V,truncated:$,isDarkTheme:J}}function I8({payload:_}){if(!_)return null;let[$,J]=R(null),[Y,X]=R(_?.root?.path||"."),[Z,j]=R(()=>[_?.root?.path||"."]),[V,G]=R(!1);c(()=>{let p=_?.root?.path||".";X(p),j([p]),J(null)},[_?.root?.path,_?.totalSize]),c(()=>{if(!Y)return;G(!0);let p=setTimeout(()=>G(!1),180);return()=>clearTimeout(p)},[Y]);let W=M0(()=>{return N1(_.root,Y)||_.root},[_?.root,Y]),Q=W?.size||_.totalSize||0,{segments:E,legend:U}=M0(()=>{let p=j4(W,Q,_.isDarkTheme);if(p.segments.length>0)return p;if(Q<=0)return p;let e=W?.children?.length?"Total":"[files]";return K4(e,W?.path||_?.root?.path||".",Q,_.isDarkTheme)},[W,Q,_.isDarkTheme,_?.root?.path]),[F,L]=R(E),w=A(new Map),x=A(0);c(()=>{let p=w.current,e=new Map(E.map((W_)=>[W_.key,W_])),q_=performance.now(),J_=220,V_=(W_)=>{let y_=Math.min(1,(W_-q_)/220),__=y_*(2-y_),t=E.map((j_)=>{let K_=p.get(j_.key)||{startAngle:j_.startAngle,endAngle:j_.startAngle,innerRadius:j_.innerRadius,outerRadius:j_.innerRadius},G_=(L_,I_)=>L_+(I_-L_)*__,D_=G_(K_.startAngle,j_.startAngle),H_=G_(K_.endAngle,j_.endAngle),C_=G_(K_.innerRadius,j_.innerRadius),b_=G_(K_.outerRadius,j_.outerRadius);return{...j_,d:z1(120,120,C_,b_,D_,H_)}});if(L(t),y_<1)x.current=requestAnimationFrame(V_)};if(x.current)cancelAnimationFrame(x.current);return x.current=requestAnimationFrame(V_),w.current=e,()=>{if(x.current)cancelAnimationFrame(x.current)}},[E]);let z=F.length?F:E,k=Q>0?P0(Q):"0 B",I=W?.name||"",f=(I&&I!=="."?I:"Total")||"Total",s=k,m=Z.length>1,l=(p)=>{if(!p?.path)return;let e=N1(_.root,p.path);if(!e||!Array.isArray(e.children)||e.children.length===0)return;j((q_)=>[...q_,e.path]),X(e.path),J(null)},Y_=()=>{if(!m)return;j((p)=>{let e=p.slice(0,-1);return X(e[e.length-1]||_?.root?.path||"."),e}),J(null)};return q`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${V?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${W?.path||_?.root?.path||"."}`}
                data-segments=${z.length}
                data-base-size=${Q}>
                ${z.map((p)=>q`
                    <path
                        key=${p.key}
                        d=${p.d}
                        fill=${p.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===p.key?" is-hovered":""}`}
                        onMouseEnter=${()=>J(p)}
                        onMouseLeave=${()=>J(null)}
                        onTouchStart=${()=>J(p)}
                        onTouchEnd=${()=>J(null)}
                        onClick=${()=>l(p)}
                    >
                        <title>${p.label} — ${P0(p.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${m?" is-drill":""}`}
                    onClick=${Y_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${f}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${s}</text>
                </g>
            </svg>
            ${U.length>0&&q`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((p)=>q`
                        <div key=${p.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${p.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${p.name}>${p.name}</span>
                            <span class="workspace-folder-starburst-size">${P0(p.size)}</span>
                            <span class="workspace-folder-starburst-pct">${p.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&q`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function S8({mediaId:_}){let[$,J]=R(null);if(c(()=>{if(!_)return;C2(_).then(J).catch(()=>{})},[_]),!$)return null;let Y=$.filename||"file",X=$.metadata?.size?P0($.metadata.size):"";return q`
        <a href=${Q2(_)} download=${Y} class="file-attachment"
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
                ${X&&q`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function G4({onFileSelect:_,visible:$=!0,active:J=void 0,onOpenEditor:Y}){let[X,Z]=R(null),[j,V]=R(new Set(["."])),[G,W]=R(null),[Q,E]=R(null),[U,F]=R(""),[L,w]=R(null),[x,z]=R(null),[k,I]=R(!0),[D,f]=R(!1),[s,m]=R(null),[l,Y_]=R(()=>r0("workspaceShowHidden",!1)),[p,e]=R(!1),[q_,J_]=R(null),[V_,W_]=R(null),[y_,__]=R(null),[t,j_]=R(!1),[Z_,K_]=R(null),[G_,D_]=R(()=>t3()),H_=A(j),C_=A(""),b_=A(null),L_=A(0),I_=A(new Set),S_=A(null),B_=A(new Map),A_=A(_),O0=A(Y),v_=A(null),w_=A(null),c_=A(null),U0=A(null),o_=A(null),H0=A(null),$0=A("."),z_=A(null),n_=A({path:null,dragging:!1,startX:0,startY:0}),M=A({path:null,dragging:!1,startX:0,startY:0}),a=A({path:null,timer:0}),R_=A(!1),p_=A(0),b0=A(new Map),C0=A(null),q0=A(null),a_=A(l),N0=A($),I0=A(J??$),d_=A(0),r_=A(y_),x_=A(p),S0=A(q_),F0=A(null),B0=A({x:0,y:0}),X0=A(0),y0=A(null),Q0=A(G),h_=A(Q),i_=A(null),L0=A(L);A_.current=_,O0.current=Y,c(()=>{H_.current=j},[j]),c(()=>{a_.current=l},[l]),c(()=>{N0.current=$},[$]),c(()=>{I0.current=J??$},[J,$]),c(()=>{r_.current=y_},[y_]),c(()=>{let K=(B)=>{let y=B?.detail?.path;if(!y)return;let C=y.split("/"),u=[];for(let h=1;h<C.length;h++)u.push(C.slice(0,h).join("/"));if(u.length)V((h)=>{let d=new Set(h);d.add(".");for(let r of u)d.add(r);return d});W(y),requestAnimationFrame(()=>{let h=document.querySelector(`[data-path="${CSS.escape(y)}"]`);if(h)h.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",K),()=>window.removeEventListener("workspace-reveal-path",K)},[]),c(()=>{x_.current=p},[p]),c(()=>{S0.current=q_},[q_]),c(()=>{Q0.current=G},[G]),c(()=>{h_.current=Q},[Q]),c(()=>{L0.current=L},[L]),c(()=>{if(typeof window>"u"||typeof document>"u")return;let K=()=>D_(t3());K();let B=window.matchMedia?.("(prefers-color-scheme: dark)"),y=()=>K();if(B?.addEventListener)B.addEventListener("change",y);else if(B?.addListener)B.addListener(y);let C=typeof MutationObserver<"u"?new MutationObserver(()=>K()):null;if(C?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)C?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(B?.removeEventListener)B.removeEventListener("change",y);else if(B?.removeListener)B.removeListener(y);C?.disconnect()}},[]),c(()=>{if(!Q)return;let K=o_.current;if(!K)return;let B=requestAnimationFrame(()=>{try{K.focus(),K.select()}catch{}});return()=>cancelAnimationFrame(B)},[Q]);let k0=async(K)=>{f(!0),w(null),z(null);try{let B=await N3(K,20000);w(B)}catch(B){w({error:B.message||"Failed to load preview"})}finally{f(!1)}};v_.current=k0;let x0=async()=>{if(!N0.current)return;try{let K=await y2("",1,a_.current),B=a3(K.root,H_.current,a_.current);if(B===C_.current){I(!1);return}if(C_.current=B,b_.current=K.root,!L_.current)L_.current=requestAnimationFrame(()=>{L_.current=0,Z((y)=>B1(y,b_.current)),I(!1)})}catch(K){m(K.message||"Failed to load workspace"),I(!1)}},E0=async(K)=>{if(!K)return;if(I_.current.has(K))return;I_.current.add(K);try{let B=await y2(K,1,a_.current);Z((y)=>q1(y,K,B.root))}catch(B){m(B.message||"Failed to load workspace")}finally{I_.current.delete(K)}};w_.current=E0;let u_=b(()=>{let K=G;if(!K)return".";let B=B_.current?.get(K);if(B&&B.type==="dir")return B.path;if(K==="."||!K.includes("/"))return".";let y=K.split("/");return y.pop(),y.join("/")||"."},[G]),t_=b((K)=>{let B=K?.closest?.(".workspace-row");if(!B)return null;let y=B.dataset.path,C=B.dataset.type;if(!y)return null;if(C==="dir")return y;if(y.includes("/")){let u=y.split("/");return u.pop(),u.join("/")||"."}return"."},[]),j0=b((K)=>{return t_(K?.target||null)},[t_]),m_=b((K)=>{r_.current=K,__(K)},[]),g_=b(()=>{let K=a.current;if(K?.timer)clearTimeout(K.timer);a.current={path:null,timer:0}},[]),e_=b((K)=>{if(!K||K==="."){g_();return}let B=B_.current?.get(K);if(!B||B.type!=="dir"){g_();return}if(H_.current?.has(K)){g_();return}if(a.current?.path===K)return;g_();let y=setTimeout(()=>{a.current={path:null,timer:0},w_.current?.(K),V((C)=>{let u=new Set(C);return u.add(K),u})},600);a.current={path:K,timer:y}},[g_]),z0=b((K,B)=>{if(B0.current={x:K,y:B},X0.current)return;X0.current=requestAnimationFrame(()=>{X0.current=0;let y=F0.current;if(!y)return;let C=B0.current;y.style.transform=`translate(${C.x+12}px, ${C.y+12}px)`})},[]),A0=b((K)=>{if(!K)return;let y=(B_.current?.get(K)?.name||K.split("/").pop()||K).trim();if(!y)return;W_({path:K,label:y})},[]),T0=b(()=>{if(W_(null),X0.current)cancelAnimationFrame(X0.current),X0.current=0;if(F0.current)F0.current.style.transform="translate(-9999px, -9999px)"},[]),H=b((K)=>{if(!K)return".";let B=B_.current?.get(K);if(B&&B.type==="dir")return B.path;if(K==="."||!K.includes("/"))return".";let y=K.split("/");return y.pop(),y.join("/")||"."},[]),S=b(()=>{E(null),F("")},[]),o=b((K)=>{if(!K)return;let y=(B_.current?.get(K)?.name||K.split("/").pop()||K).trim();if(!y||K===".")return;E(K),F(y)},[]),Q_=b(async()=>{let K=h_.current;if(!K)return;let B=(U||"").trim();if(!B){S();return}let y=B_.current?.get(K),C=(y?.name||K.split("/").pop()||K).trim();if(B===C){S();return}try{let h=(await U3(K,B))?.path||K,d=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(S(),m(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:K,newPath:h,type:y?.type||"file"}})),y?.type==="dir")V((r)=>{let n=new Set;for(let $_ of r)if($_===K)n.add(h);else if($_.startsWith(`${K}/`))n.add(`${h}${$_.slice(K.length)}`);else n.add($_);return n});if(W(h),y?.type==="dir")w(null),f(!1),z(null);else v_.current?.(h);w_.current?.(d)}catch(u){m(u?.message||"Failed to rename file")}},[S,U]),U_=b(async(K)=>{let C=K||".";for(let u=0;u<50;u+=1){let d=`untitled${u===0?"":`-${u}`}.md`;try{let n=(await z3(C,d,""))?.path||(C==="."?d:`${C}/${d}`);if(C&&C!==".")V(($_)=>new Set([...$_,C]));W(n),m(null),w_.current?.(C),v_.current?.(n);return}catch(r){if(r?.status===409||r?.code==="file_exists")continue;m(r?.message||"Failed to create file");return}}m("Failed to create file (untitled name already in use).")},[]),F_=b((K)=>{if(K?.stopPropagation?.(),t)return;let B=H(Q0.current);U_(B)},[t,H,U_]);c(()=>{if(typeof window>"u")return;let K=(B)=>{let y=B?.detail?.updates||[];if(!Array.isArray(y)||y.length===0)return;Z((r)=>{let n=r;for(let $_ of y){if(!$_?.root)continue;if(!n||$_.path==="."||!$_.path)n=$_.root;else n=q1(n,$_.path,$_.root)}if(n)C_.current=a3(n,H_.current,a_.current);return I(!1),n});let C=Q0.current;if(Boolean(C)&&y.some((r)=>{let n=r?.path||"";if(!n||n===".")return!0;return C===n||C.startsWith(`${n}/`)||n.startsWith(`${C}/`)}))b0.current.clear();if(!C||!L0.current)return;let h=B_.current?.get(C);if(h&&h.type==="dir")return;if(y.some((r)=>{let n=r?.path||"";if(!n||n===".")return!0;return C===n||C.startsWith(`${n}/`)}))v_.current?.(C)};return window.addEventListener("workspace-update",K),()=>window.removeEventListener("workspace-update",K)},[]),S_.current=x0;let N_=A(()=>{if(typeof window>"u")return;let K=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),B=I0.current??N0.current,y=document.visibilityState!=="hidden"&&(B||K.matches&&N0.current);k2(y,a_.current).catch(()=>{})}).current,T_=A(0),D0=A(()=>{if(T_.current)clearTimeout(T_.current);T_.current=setTimeout(()=>{T_.current=0,N_()},250)}).current;c(()=>{if(N0.current)S_.current?.();D0()},[$,J]),c(()=>{S_.current(),N_();let K=setInterval(()=>S_.current(),w8),B=s0("previewHeight",null),y=Number.isFinite(B)?Math.min(Math.max(B,80),600):280;if(p_.current=y,c_.current)c_.current.style.setProperty("--preview-height",`${y}px`);let C=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),u=()=>D0();if(C.addEventListener)C.addEventListener("change",u);else if(C.addListener)C.addListener(u);return document.addEventListener("visibilitychange",u),()=>{if(clearInterval(K),L_.current)cancelAnimationFrame(L_.current),L_.current=0;if(C.removeEventListener)C.removeEventListener("change",u);else if(C.removeListener)C.removeListener(u);if(document.removeEventListener("visibilitychange",u),T_.current)clearTimeout(T_.current),T_.current=0;if(z_.current)clearTimeout(z_.current),z_.current=null;k2(!1,a_.current).catch(()=>{})}},[]);let f_=M0(()=>$4(X,j,l),[X,j,l]),M_=M0(()=>new Map(f_.map((K)=>[K.node.path,K.node])),[f_]);B_.current=M_;let K0=(G?B_.current.get(G):null)?.type==="dir";c(()=>{if(!G||!K0){K_(null),C0.current=null,q0.current=null;return}let K=G,B=`${l?"hidden":"visible"}:${G}`,y=b0.current,C=y.get(B);if(C?.root){y.delete(B),y.set(B,C);let d=e3(C.root,Boolean(C.truncated),G_);if(d)C0.current=d,q0.current=G,K_({loading:!1,error:null,payload:d});return}let u=C0.current,h=q0.current;K_({loading:!0,error:null,payload:h===G?u:null}),y2(G,P8,l).then((d)=>{if(Q0.current!==K)return;let r={root:d?.root,truncated:Boolean(d?.truncated)};y.delete(B),y.set(B,r);while(y.size>b8){let $_=y.keys().next().value;if(!$_)break;y.delete($_)}let n=e3(r.root,r.truncated,G_);C0.current=n,q0.current=G,K_({loading:!1,error:null,payload:n})}).catch((d)=>{if(Q0.current!==K)return;K_({loading:!1,error:d?.message||"Failed to load folder size chart",payload:h===G?u:null})})},[G,K0,l,G_]);let w0=Boolean(L&&L.kind==="text"&&!K0&&(!L.size||L.size<=262144)),_2=w0?"Open in editor":L?.size>262144?"File too large to edit":"File is not editable",$2=(K)=>{let B=K?.target;if(B instanceof Element)return B;return B?.parentElement||null},m0=A((K)=>{if(i_.current)clearTimeout(i_.current),i_.current=null;let y=$2(K)?.closest?.("[data-path]");if(!y)return;let C=y.dataset.path;if(y.dataset.type==="dir"||!C)return;if(h_.current===C)S();O0.current?.(C)}).current,f0=A((K)=>{if(R_.current){R_.current=!1;return}let B=$2(K),y=B?.closest?.("[data-path]");if(U0.current?.focus?.(),!y)return;let C=y.dataset.path,u=y.dataset.type,h=Boolean(B?.closest?.(".workspace-caret")),d=Boolean(B?.closest?.("button"))||Boolean(B?.closest?.("a"))||Boolean(B?.closest?.("input")),r=Q0.current===C,n=h_.current;if(n){if(n===C)return;S()}if(r&&!h&&!d&&C!=="."){if(i_.current)clearTimeout(i_.current);i_.current=setTimeout(()=>{i_.current=null,o(C)},350);return}if(u==="dir"){if(W(C),w(null),z(null),f(!1),!H_.current.has(C))w_.current?.(C);if(r&&!h)return;V((Y0)=>{let Z0=new Set(Y0);if(Z0.has(C))Z0.delete(C);else Z0.add(C);return Z0})}else{W(C);let $_=B_.current.get(C);if($_)A_.current?.($_.path,$_);v_.current?.(C)}}).current,s_=A(()=>{C_.current="",S_.current(),Array.from(H_.current||[]).filter((B)=>B&&B!==".").forEach((B)=>w_.current?.(B))}).current,g0=A(()=>{W(null),w(null),z(null),f(!1)}).current,u2=A(()=>{Y_((K)=>{let B=!K;if(typeof window<"u")P_("workspaceShowHidden",String(B));return a_.current=B,k2(!0,B).catch(()=>{}),C_.current="",S_.current?.(),Array.from(H_.current||[]).filter((C)=>C&&C!==".").forEach((C)=>w_.current?.(C)),B})}).current,V2=A((K)=>{if($2(K)?.closest?.("[data-path]"))return;g0()}).current,J0=b(async(K)=>{if(!K)return;let B=K.split("/").pop()||K;if(!window.confirm(`Delete "${B}"? This cannot be undone.`))return;try{await F3(K);let C=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(Q0.current===K)g0();w_.current?.(C),m(null)}catch(C){w((u)=>({...u||{},error:C.message||"Failed to delete file"}))}},[g0]),G0=b((K)=>{let B=U0.current;if(!B||!K||typeof CSS>"u"||typeof CSS.escape!=="function")return;B.querySelector(`[data-path="${CSS.escape(K)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),m2=b((K)=>{let B=f_;if(!B||B.length===0)return;let y=G?B.findIndex((C)=>C.node.path===G):-1;if(K.key==="ArrowDown"){K.preventDefault();let C=Math.min(y+1,B.length-1),u=B[C];if(!u)return;if(W(u.node.path),u.node.type!=="dir")A_.current?.(u.node.path,u.node),v_.current?.(u.node.path);else w(null),f(!1),z(null);G0(u.node.path);return}if(K.key==="ArrowUp"){K.preventDefault();let C=y<=0?0:y-1,u=B[C];if(!u)return;if(W(u.node.path),u.node.type!=="dir")A_.current?.(u.node.path,u.node),v_.current?.(u.node.path);else w(null),f(!1),z(null);G0(u.node.path);return}if(K.key==="ArrowRight"&&y>=0){let C=B[y];if(C?.node?.type==="dir"&&!j.has(C.node.path))K.preventDefault(),w_.current?.(C.node.path),V((u)=>new Set([...u,C.node.path]));return}if(K.key==="ArrowLeft"&&y>=0){let C=B[y];if(C?.node?.type==="dir"&&j.has(C.node.path))K.preventDefault(),V((u)=>{let h=new Set(u);return h.delete(C.node.path),h});return}if(K.key==="Enter"&&y>=0){K.preventDefault();let C=B[y];if(!C)return;let u=C.node.path;if(C.node.type==="dir"){if(!H_.current.has(u))w_.current?.(u);V((d)=>{let r=new Set(d);if(r.has(u))r.delete(u);else r.add(u);return r}),w(null),z(null),f(!1)}else A_.current?.(u,C.node),v_.current?.(u);return}if((K.key==="Delete"||K.key==="Backspace")&&y>=0){let C=B[y];if(!C||C.node.type==="dir")return;K.preventDefault(),J0(C.node.path);return}if(K.key==="Escape")K.preventDefault(),g0()},[g0,J0,j,f_,G0,G]),W2=b((K)=>{let B=K?.target?.closest?.(".workspace-row");if(!B)return;let y=B.dataset.type,C=B.dataset.path;if(!C||C===".")return;if(h_.current===C)return;let u=K?.touches?.[0];if(!u)return;if(n_.current={path:C,dragging:!1,startX:u.clientX,startY:u.clientY},y!=="file")return;if(z_.current)clearTimeout(z_.current);z_.current=setTimeout(()=>{if(z_.current=null,n_.current?.dragging)return;J0(C)},600)},[J0]),c0=b(()=>{if(z_.current)clearTimeout(z_.current),z_.current=null;let K=n_.current;if(K?.dragging&&K.path){let B=r_.current||u_(),y=y0.current;if(typeof y==="function")y(K.path,B)}n_.current={path:null,dragging:!1,startX:0,startY:0},d_.current=0,e(!1),J_(null),m_(null),g_(),T0()},[u_,T0,m_,g_]),g2=b((K)=>{let B=n_.current,y=K?.touches?.[0];if(!y||!B?.path){if(z_.current)clearTimeout(z_.current),z_.current=null;return}let C=Math.abs(y.clientX-B.startX),u=Math.abs(y.clientY-B.startY),h=C>8||u>8;if(h&&z_.current)clearTimeout(z_.current),z_.current=null;if(!B.dragging&&h)B.dragging=!0,e(!0),J_("move"),A0(B.path);if(B.dragging){K.preventDefault(),z0(y.clientX,y.clientY);let d=document.elementFromPoint(y.clientX,y.clientY),r=t_(d)||u_();if(r_.current!==r)m_(r);e_(r)}},[t_,u_,A0,z0,m_,e_]),c2=A((K)=>{K.preventDefault();let B=c_.current;if(!B)return;let y=K.clientY,C=p_.current||280,u=K.currentTarget;u.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let h=y,d=(n)=>{h=n.clientY;let $_=B.clientHeight-80,Y0=Math.min(Math.max(C-(n.clientY-y),80),$_);B.style.setProperty("--preview-height",`${Y0}px`),p_.current=Y0},r=()=>{let n=B.clientHeight-80,$_=Math.min(Math.max(C-(h-y),80),n);p_.current=$_,u.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",P_("previewHeight",String(Math.round($_))),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",r)}).current,p2=A((K)=>{K.preventDefault();let B=c_.current;if(!B)return;let y=K.touches[0];if(!y)return;let C=y.clientY,u=p_.current||280,h=K.currentTarget;h.classList.add("dragging"),document.body.style.userSelect="none";let d=(n)=>{let $_=n.touches[0];if(!$_)return;n.preventDefault();let Y0=B.clientHeight-80,Z0=Math.min(Math.max(u-($_.clientY-C),80),Y0);B.style.setProperty("--preview-height",`${Z0}px`),p_.current=Z0},r=()=>{h.classList.remove("dragging"),document.body.style.userSelect="",P_("previewHeight",String(Math.round(p_.current||u))),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",r),document.removeEventListener("touchcancel",r)};document.addEventListener("touchmove",d,{passive:!1}),document.addEventListener("touchend",r),document.addEventListener("touchcancel",r)}).current,h2=async()=>{if(!G)return;try{let K=await B3(G);if(K.media_id)z(K.media_id)}catch(K){w((B)=>({...B||{},error:K.message||"Failed to attach"}))}},i2=async()=>{if(!G||K0)return;await J0(G)},h0=(K)=>{return Array.from(K?.dataTransfer?.types||[]).includes("Files")},i0=b((K)=>{if(!h0(K))return;if(K.preventDefault(),d_.current+=1,!x_.current)e(!0);J_("upload");let B=j0(K)||u_();m_(B),e_(B)},[u_,j0,m_,e_]),J2=b((K)=>{if(!h0(K))return;if(K.preventDefault(),K.dataTransfer)K.dataTransfer.dropEffect="copy";if(!x_.current)e(!0);if(S0.current!=="upload")J_("upload");let B=j0(K)||u_();if(r_.current!==B)m_(B);e_(B)},[u_,j0,m_,e_]),v0=b((K)=>{if(!h0(K))return;if(K.preventDefault(),d_.current=Math.max(0,d_.current-1),d_.current===0)e(!1),J_(null),m_(null),g_()},[m_,g_]),l0=b(async(K,B=".")=>{let y=Array.from(K||[]);if(y.length===0)return;let C=B&&B!==""?B:".",u=C!=="."?C:"workspace root";j_(!0);try{let h=null;for(let d of y)try{h=await Y1(d,C)}catch(r){let n=r?.status,$_=r?.code;if(n===409||$_==="file_exists"){let Y0=d?.name||"file";if(!window.confirm(`"${Y0}" already exists in ${u}. Overwrite?`))continue;h=await Y1(d,C,{overwrite:!0})}else throw r}if(h?.path)W(h.path),v_.current?.(h.path);w_.current?.(C)}catch(h){m(h.message||"Failed to upload file")}finally{j_(!1)}},[]),l2=b(async(K,B)=>{if(!K)return;let y=B_.current?.get(K);if(!y)return;let C=B&&B!==""?B:".",u=K.includes("/")?K.split("/").slice(0,-1).join("/")||".":".";if(C===u)return;try{let d=(await H3(K,C))?.path||K;if(y.type==="dir")V((r)=>{let n=new Set;for(let $_ of r)if($_===K)n.add(d);else if($_.startsWith(`${K}/`))n.add(`${d}${$_.slice(K.length)}`);else n.add($_);return n});if(W(d),y.type==="dir")w(null),f(!1),z(null);else v_.current?.(d);w_.current?.(u),w_.current?.(C)}catch(h){m(h?.message||"Failed to move entry")}},[]);y0.current=l2;let o2=b(async(K)=>{if(!h0(K))return;K.preventDefault(),d_.current=0,e(!1),J_(null),__(null),g_();let B=Array.from(K?.dataTransfer?.files||[]);if(B.length===0)return;let y=r_.current||j0(K)||u_();await l0(B,y)},[u_,j0,l0]),n2=b((K)=>{if(K?.stopPropagation?.(),t)return;let B=K?.currentTarget?.dataset?.uploadTarget||".";$0.current=B,H0.current?.click()},[t]),d2=b(()=>{if(t)return;let K=Q0.current,B=K?B_.current?.get(K):null;$0.current=B?.type==="dir"?B.path:".",H0.current?.click()},[t]),r2=b((K)=>{if(!K||K.button!==0)return;let B=K.currentTarget;if(!B||!B.dataset)return;let y=B.dataset.path;if(!y||y===".")return;if(h_.current===y)return;if(K.target?.closest?.("button, a, input, .workspace-caret"))return;K.preventDefault(),M.current={path:y,dragging:!1,startX:K.clientX,startY:K.clientY};let C=(h)=>{let d=M.current;if(!d?.path)return;let r=Math.abs(h.clientX-d.startX),n=Math.abs(h.clientY-d.startY),$_=r>4||n>4;if(!d.dragging&&$_)d.dragging=!0,R_.current=!0,e(!0),J_("move"),A0(d.path),z0(h.clientX,h.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(d.dragging){h.preventDefault(),z0(h.clientX,h.clientY);let Y0=document.elementFromPoint(h.clientX,h.clientY),Z0=t_(Y0)||u_();if(r_.current!==Z0)m_(Z0);e_(Z0)}},u=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",u);let h=M.current;if(h?.dragging&&h.path){let d=r_.current||u_(),r=y0.current;if(typeof r==="function")r(h.path,d)}M.current={path:null,dragging:!1,startX:0,startY:0},d_.current=0,e(!1),J_(null),m_(null),g_(),T0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{R_.current=!1},0)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",u)},[t_,u_,A0,z0,T0,m_,e_,g_]),A1=b(async(K)=>{let B=Array.from(K?.target?.files||[]);if(B.length===0)return;let y=$0.current||".";if(await l0(B,y),$0.current=".",K?.target)K.target.value=""},[l0]);return q`
        <aside
            class=${`workspace-sidebar${p?" workspace-drop-active":""}`}
            ref=${c_}
            onDragEnter=${i0}
            onDragOver=${J2}
            onDragLeave=${v0}
            onDrop=${o2}
        >
            <input type="file" multiple style="display:none" ref=${H0} onChange=${A1} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${F_} title="New file" disabled=${t}>
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
                        class=${`workspace-toggle-hidden${l?" active":""}`}
                        onClick=${u2}
                        title=${l?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!l&&q`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${V2}>
                ${t&&q`<div class="workspace-drop-hint">Uploading…</div>`}
                ${k&&q`<div class="workspace-loading">Loading…</div>`}
                ${s&&q`<div class="workspace-error">${s}</div>`}
                ${X&&q`
                    <div
                        class="workspace-tree-list"
                        ref=${U0}
                        tabIndex="0"
                        onClick=${f0}
                        onDblClick=${m0}
                        onKeyDown=${m2}
                        onTouchStart=${W2}
                        onTouchEnd=${c0}
                        onTouchMove=${g2}
                        onTouchCancel=${c0}
                    >
                        ${f_.map(({node:K,depth:B})=>{let y=K.type==="dir",C=K.path===G,u=K.path===Q,h=y&&j.has(K.path),d=y_&&K.path===y_,r=Array.isArray(K.children)&&K.children.length>0?K.children.length:Number(K.child_count)||0;return q`
                                <div
                                    key=${K.path}
                                    class=${`workspace-row${C?" selected":""}${d?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+B*A8}px`}}
                                    data-path=${K.path}
                                    data-type=${K.type}
                                    onMouseDown=${r2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${y?h?q`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:q`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
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
                                                ref=${o_}
                                                value=${U}
                                                onInput=${(n)=>F(n?.target?.value||"")}
                                                onKeyDown=${(n)=>{if(n.key==="Enter")n.preventDefault(),Q_();else if(n.key==="Escape")n.preventDefault(),S()}}
                                                onBlur=${S}
                                                onClick=${(n)=>n.stopPropagation()}
                                            />
                                        `:q`<span class="workspace-label">${K.name}</span>`}
                                    ${y&&!h&&r>0&&q`
                                        <span class="workspace-count">${r}</span>
                                    `}
                                    ${y&&q`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${K.path}
                                            title="Upload files to this folder"
                                            onClick=${n2}
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
            ${G&&q`
                <div class="workspace-preview-splitter-h" onMouseDown=${c2} onTouchStart=${p2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${G}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${F_} title="New file" disabled=${t}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!K0&&q`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>w0&&O0.current?.(G,L)}
                                    title=${_2}
                                    disabled=${!w0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${i2}
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
                            ${K0?q`
                                    <button class="workspace-download" onClick=${d2}
                                        title="Upload files to this folder" disabled=${t}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${L3(G,l)}
                                        title="Download folder as zip" onClick=${(K)=>K.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:q`<button class="workspace-download" onClick=${h2} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${D&&q`<div class="workspace-loading">Loading preview…</div>`}
                    ${L?.error&&q`<div class="workspace-error">${L.error}</div>`}
                    ${K0&&q`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${Z_?.loading&&q`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${Z_?.error&&q`<div class="workspace-error">${Z_.error}</div>`}
                        ${Z_?.payload&&Z_.payload.segments?.length>0&&q`
                            <${I8} payload=${Z_.payload} />
                        `}
                        ${Z_?.payload&&(!Z_.payload.segments||Z_.payload.segments.length===0)&&q`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${L&&!L.error&&!K0&&q`
                        <div class="workspace-preview-meta">
                            ${L.size?q`<span>${P0(L.size)}</span>`:""}
                            ${L.mtime?q`<span>${x2(L.mtime)}</span>`:""}
                            ${L.truncated?q`<span>truncated</span>`:""}
                        </div>
                        ${L.kind==="image"&&q`
                            <div class="workspace-preview-image">
                                <img src=${L.url||Z1(L.path)} alt="preview" />
                            </div>
                        `}
                        ${L.kind==="text"&&q`
                            ${L.content_type==="text/markdown"?q`<div class="workspace-preview-text"
                                    dangerouslySetInnerHTML=${{__html:e0(L.text||"",null,{rewriteImageSrc:(K)=>M8(K,L.path||G)})}} />`:q`<pre class="workspace-preview-text"><code>${L.text||""}</code></pre>`}
                        `}
                        ${L.kind==="binary"&&q`
                            <div class="workspace-preview-text">Binary file — download to view.</div>
                        `}
                    `}
                    ${x&&q`
                        <div class="workspace-download-card">
                            <${S8} mediaId=${x} />
                        </div>
                    `}
                </div>
            `}
            ${V_&&q`
                <div class="workspace-drag-ghost" ref=${F0}>${V_.label}</div>
            `}
        </aside>
    `}function V4({tabs:_,activeId:$,onActivate:J,onClose:Y,onCloseOthers:X,onCloseAll:Z,onTogglePin:j,onTogglePreview:V,previewTabs:G,onToggleDock:W,dockVisible:Q}){let[E,U]=R(null),F=A(null);c(()=>{if(!E)return;let z=(k)=>{if(k.type==="keydown"&&k.key!=="Escape")return;U(null)};return document.addEventListener("click",z),document.addEventListener("keydown",z),()=>{document.removeEventListener("click",z),document.removeEventListener("keydown",z)}},[E]),c(()=>{let z=(k)=>{if(k.ctrlKey&&k.key==="Tab"){if(k.preventDefault(),!_.length)return;let I=_.findIndex((D)=>D.id===$);if(k.shiftKey){let D=_[(I-1+_.length)%_.length];J?.(D.id)}else{let D=_[(I+1)%_.length];J?.(D.id)}return}if((k.ctrlKey||k.metaKey)&&k.key==="w"){let I=document.querySelector(".editor-pane");if(I&&I.contains(document.activeElement)){if(k.preventDefault(),$)Y?.($)}}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[_,$,J,Y]);let L=b((z,k)=>{if(z.button===1){z.preventDefault(),Y?.(k);return}if(z.button===0)J?.(k)},[J,Y]),w=b((z,k)=>{z.preventDefault(),U({id:k,x:z.clientX,y:z.clientY})},[]),x=b((z,k)=>{z.stopPropagation(),Y?.(k)},[Y]);if(c(()=>{if(!$||!F.current)return;let z=F.current.querySelector(".tab-item.active");if(z)z.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return q`
        <div class="tab-strip" ref=${F} role="tablist">
            ${_.map((z)=>q`
                <div
                    key=${z.id}
                    class=${`tab-item${z.id===$?" active":""}${z.dirty?" dirty":""}${z.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${z.id===$}
                    title=${z.path}
                    onMouseDown=${(k)=>L(k,z.id)}
                    onContextMenu=${(k)=>w(k,z.id)}
                >
                    ${z.pinned&&q`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${z.label}</span>
                    <span
                        class="tab-close"
                        onClick=${(k)=>x(k,z.id)}
                        title=${z.dirty?"Unsaved changes":"Close"}
                        aria-label=${z.dirty?"Unsaved changes":`Close ${z.label}`}
                    >
                        ${z.dirty?q`<span class="tab-dirty-dot" aria-hidden="true"></span>`:q`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
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
        ${E&&q`
            <div class="tab-context-menu" style=${{left:E.x+"px",top:E.y+"px"}}>
                <button onClick=${()=>{Y?.(E.id),U(null)}}>Close</button>
                <button onClick=${()=>{X?.(E.id),U(null)}}>Close Others</button>
                <button onClick=${()=>{Z?.(),U(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{j?.(E.id),U(null)}}>
                    ${_.find((z)=>z.id===E.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${V&&/\.(md|mdx|markdown)$/i.test(E.id)&&q`
                    <hr />
                    <button onClick=${()=>{V(E.id),U(null)}}>
                        ${G?.has(E.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var x8=400,U1=60,W4=220,H1="mdPreviewHeight";function T8(){try{let _=localStorage.getItem(H1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=U1?$:W4}catch{return W4}}function O4({getContent:_,path:$,onClose:J}){let[Y,X]=R(""),[Z,j]=R(T8),V=A(null),G=A(null),W=A(""),Q=A(_);return Q.current=_,c(()=>{let F=()=>{let w=Q.current?.()||"";if(w===W.current)return;W.current=w;try{let x=e0(w,null,{sanitize:!1});X(x)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};F();let L=setInterval(F,x8);return()=>clearInterval(L)},[]),c(()=>{if(V.current&&Y)S2(V.current).catch(()=>{})},[Y]),q`
        <div
            class="md-preview-splitter"
            onMouseDown=${(F)=>{F.preventDefault();let L=F.clientY,w=G.current?.offsetHeight||Z,x=G.current?.parentElement,z=x?x.offsetHeight*0.7:500,k=F.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=(f)=>{let s=Math.min(Math.max(w-(f.clientY-L),U1),z);j(s)},D=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(H1,String(Math.round(G.current?.offsetHeight||Z)))}catch{}document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",D)}}
            onTouchStart=${(F)=>{F.preventDefault();let L=F.touches[0];if(!L)return;let w=L.clientY,x=G.current?.offsetHeight||Z,z=G.current?.parentElement,k=z?z.offsetHeight*0.7:500,I=F.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let D=(s)=>{let m=s.touches[0];if(!m)return;s.preventDefault();let l=Math.min(Math.max(x-(m.clientY-w),U1),k);j(l)},f=()=>{I.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(H1,String(Math.round(G.current?.offsetHeight||Z)))}catch{}document.removeEventListener("touchmove",D),document.removeEventListener("touchend",f),document.removeEventListener("touchcancel",f)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",f),document.addEventListener("touchcancel",f)}}
        ></div>
        <div class="md-preview-panel" ref=${G} style=${{height:Z+"px"}}>
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
                ref=${V}
                dangerouslySetInnerHTML=${{__html:Y}}
            />
        </div>
    `}class q4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,J=-1/0;for(let Y of this.extensions.values()){if(Y.placement!=="tabs")continue;if(!Y.canHandle)continue;try{let X=Y.canHandle(_);if(X===!1||X===0)continue;let Z=X===!0?0:typeof X==="number"?X:0;if(Z>J)J=Z,$=Y}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${Y.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var W0=new q4;var v2=null,F1=null;function N4(){if(F1)return Promise.resolve(F1);if(!v2)v2=import("/static/dist/editor.bundle.js").then((_)=>{return F1=_,_}).catch((_)=>{throw v2=null,_});return v2}class B4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await N4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){if(this.queuedViewStateCb=_,this.real&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(_)}restoreViewState(_){if(this.queuedViewState=_,this.real&&typeof this.real.restoreViewState==="function")this.real.restoreViewState(_)}getPath(){if(this.real&&typeof this.real.getPath==="function")return this.real.getPath();return this.context.path||""}setPath(_){if(this.real&&typeof this.real.setPath==="function")this.real.setPath(_)}}var L1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;return 1},mount(_,$){return new B4(_,$)}};function E1(){N4().catch(()=>{})}class z4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let J=document.createElement("div");J.className="terminal-pane-header";let Y=document.createElement("span");Y.className="terminal-pane-title",Y.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",J.append(Y,X);let Z=document.createElement("div");Z.className="terminal-pane-body",Z.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(J,Z),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var D1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new z4(_,$)}};class U4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let J of this.listeners)try{J(_,$)}catch{}}open(_,$){let J=this.tabs.get(_);if(!J)J={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,J);return this.activate(_),J}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((J)=>J!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,J]of this.tabs)if($!==_&&!J.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Y)=>Y!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((J)=>J!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let J=this.tabs.get(_);if(!J||J.dirty===$)return;J.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let J=this.tabs.get(_);if(J)J.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,J){let Y=this.tabs.get(_);if(!Y)return;if(this.tabs.delete(_),Y.id=$,Y.path=$,Y.label=J||$.split("/").pop()||$,this.tabs.set($,Y),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Y)=>Y.id===this.activeId),J=_[($+1)%_.length];this.activate(J.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Y)=>Y.id===this.activeId),J=_[($-1+_.length)%_.length];this.activate(J.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var E_=new U4;function H4({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:J}){c(()=>{J();let Y=new X1(_,$);Y.connect();let X=()=>{Y.reconnectIfNeeded()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),Y.disconnect()}},[$,_,J])}function F4(){let[_,$]=R(!1),[J,Y]=R("default"),X=A(!1);c(()=>{let G=r0("notificationsEnabled",!1);if(X.current=G,$(G),typeof Notification<"u")Y(Notification.permission)},[]),c(()=>{X.current=_},[_]);let Z=b(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let G=Notification.requestPermission();if(G&&typeof G.then==="function")return G;return Promise.resolve(G)}catch{return Promise.resolve("default")}},[]),j=b(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Y("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let W=await Z();if(Y(W||"default"),W!=="granted"){X.current=!1,$(!1),P_("notificationsEnabled","false");return}}let G=!X.current;X.current=G,$(G),P_("notificationsEnabled",String(G))},[Z]),V=b((G,W)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let Q=new Notification(G,{body:W});return Q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:J,toggleNotifications:j,notify:V}}var G2=(_)=>{let $=new Set;return(_||[]).filter((J)=>{if(!J||$.has(J.id))return!1;return $.add(J.id),!0})};function L4({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[J,Y]=R(null),[X,Z]=R(!1),j=A(!1),V=A(null),G=A(!1),W=A(null);c(()=>{j.current=X},[X]);let Q=b(async(F=null)=>{try{if(F){let L=await Y3(F);Y(L.posts),Z(!1)}else{let L=await D2(10);Y(L.posts),Z(L.has_more)}}catch(L){console.error("Failed to load posts:",L)}},[]),E=b(async()=>{try{let F=await D2(10);Y((L)=>{if(!L||L.length===0)return F.posts;return G2([...F.posts,...L])}),Z((L)=>L||F.has_more)}catch(F){console.error("Failed to refresh timeline:",F)}},[]),U=b(async(F={})=>{if(!J||J.length===0)return;if(G.current)return;let{preserveScroll:L=!0,preserveMode:w="top",allowRepeat:x=!1}=F,z=(D)=>{if(!L){D();return}if(w==="top")$(D);else _(D)},I=J.slice().sort((D,f)=>D.id-f.id)[0]?.id;if(!Number.isFinite(I))return;if(!x&&W.current===I)return;G.current=!0,W.current=I;try{let D=await D2(10,I);if(D.posts.length>0)z(()=>{Y((f)=>G2([...D.posts,...f||[]])),Z(D.has_more)});else Z(!1)}catch(D){console.error("Failed to load more posts:",D)}finally{G.current=!1}},[J,_,$]);return c(()=>{V.current=U},[U]),{posts:J,setPosts:Y,hasMore:X,setHasMore:Z,hasMoreRef:j,loadPosts:Q,refreshTimeline:E,loadMore:U,loadMoreRef:V,loadingMoreRef:G,lastBeforeIdRef:W}}function E4(){let[_,$]=R(null),[J,Y]=R({text:"",totalLines:0}),[X,Z]=R(""),[j,V]=R({text:"",totalLines:0}),[G,W]=R(null),[Q,E]=R(null),[U,F]=R(null),L=A(null),w=A(0),x=A(!1),z=A(""),k=A(""),I=A(null),D=A(null),f=A(null),s=A(null),m=A(!1),l=A(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:J,setAgentDraft:Y,agentPlan:X,setAgentPlan:Z,agentThought:j,setAgentThought:V,pendingRequest:G,setPendingRequest:W,currentTurnId:Q,setCurrentTurnId:E,steerQueuedTurnId:U,setSteerQueuedTurnId:F,lastAgentEventRef:L,lastSilenceNoticeRef:w,isAgentRunningRef:x,draftBufferRef:z,thoughtBufferRef:k,pendingRequestRef:I,stalledPostIdRef:D,currentTurnIdRef:f,steerQueuedTurnIdRef:s,thoughtExpandedRef:m,draftExpandedRef:l}}function D4({appShellRef:_,sidebarWidthRef:$,editorWidthRef:J,dockHeightRef:Y}){let X=A((Q)=>{Q.preventDefault();let E=_.current;if(!E)return;let U=Q.clientX,F=$.current||280,L=Q.currentTarget;L.classList.add("dragging"),E.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let w=U,x=(k)=>{w=k.clientX;let I=Math.min(Math.max(F+(k.clientX-U),160),600);E.style.setProperty("--sidebar-width",`${I}px`),$.current=I},z=()=>{let k=Math.min(Math.max(F+(w-U),160),600);$.current=k,L.classList.remove("dragging"),E.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",P_("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",z)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",z)}).current,Z=A((Q)=>{Q.preventDefault();let E=_.current;if(!E)return;let U=Q.touches[0];if(!U)return;let F=U.clientX,L=$.current||280,w=Q.currentTarget;w.classList.add("dragging"),E.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let x=(k)=>{let I=k.touches[0];if(!I)return;k.preventDefault();let D=Math.min(Math.max(L+(I.clientX-F),160),600);E.style.setProperty("--sidebar-width",`${D}px`),$.current=D},z=()=>{w.classList.remove("dragging"),E.classList.remove("sidebar-resizing"),document.body.style.userSelect="",P_("sidebarWidth",String(Math.round($.current||L))),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",z),document.removeEventListener("touchcancel",z)};document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",z),document.addEventListener("touchcancel",z)}).current,j=A((Q)=>{Q.preventDefault();let E=_.current;if(!E)return;let U=Q.clientX,F=J.current||$.current||280,L=Q.currentTarget;L.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let w=U,x=(k)=>{w=k.clientX;let I=Math.min(Math.max(F+(k.clientX-U),200),800);E.style.setProperty("--editor-width",`${I}px`),J.current=I},z=()=>{let k=Math.min(Math.max(F+(w-U),200),800);J.current=k,L.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",P_("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",z)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",z)}).current,V=A((Q)=>{Q.preventDefault();let E=_.current;if(!E)return;let U=Q.touches[0];if(!U)return;let F=U.clientX,L=J.current||$.current||280,w=Q.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let x=(k)=>{let I=k.touches[0];if(!I)return;k.preventDefault();let D=Math.min(Math.max(L+(I.clientX-F),200),800);E.style.setProperty("--editor-width",`${D}px`),J.current=D},z=()=>{w.classList.remove("dragging"),document.body.style.userSelect="",P_("editorWidth",String(Math.round(J.current||L))),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",z),document.removeEventListener("touchcancel",z)};document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",z),document.addEventListener("touchcancel",z)}).current,G=A((Q)=>{Q.preventDefault();let E=_.current;if(!E)return;let U=Q.clientY,F=Y?.current||200,L=Q.currentTarget;L.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let w=U,x=(k)=>{w=k.clientY;let I=Math.min(Math.max(F-(k.clientY-U),100),window.innerHeight*0.5);if(E.style.setProperty("--dock-height",`${I}px`),Y)Y.current=I},z=()=>{let k=Math.min(Math.max(F-(w-U),100),window.innerHeight*0.5);if(Y)Y.current=k;L.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",P_("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",z)};document.addEventListener("mousemove",x),document.addEventListener("mouseup",z)}).current,W=A((Q)=>{Q.preventDefault();let E=_.current;if(!E)return;let U=Q.touches[0];if(!U)return;let F=U.clientY,L=Y?.current||200,w=Q.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let x=(k)=>{let I=k.touches[0];if(!I)return;k.preventDefault();let D=Math.min(Math.max(L-(I.clientY-F),100),window.innerHeight*0.5);if(E.style.setProperty("--dock-height",`${D}px`),Y)Y.current=D},z=()=>{w.classList.remove("dragging"),document.body.style.userSelect="",P_("dockHeight",String(Math.round(Y?.current||L))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",z),document.removeEventListener("touchcancel",z)};document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",z),document.addEventListener("touchcancel",z)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Z,handleEditorSplitterMouseDown:j,handleEditorSplitterTouchStart:V,handleDockSplitterMouseDown:G,handleDockSplitterTouchStart:W}}function C4({onTabClosed:_}={}){let $=A(_);$.current=_;let[J,Y]=R(()=>E_.getTabs()),[X,Z]=R(()=>E_.getActiveId()),[j,V]=R(()=>E_.getTabs().length>0);c(()=>{return E_.onChange((D,f)=>{Y(D),Z(f),V(D.length>0)})},[]);let[G,W]=R(()=>new Set),Q=b((D)=>{W((f)=>{let s=new Set(f);if(s.has(D))s.delete(D);else s.add(D);return s})},[]),E=b((D)=>{W((f)=>{if(!f.has(D))return f;let s=new Set(f);return s.delete(D),s})},[]),U=b((D)=>{if(!D)return;let f={path:D,mode:"edit"};try{if(!W0.resolve(f)){if(!W0.get("editor")){console.warn(`[openEditor] No pane handler for: ${D}`);return}}}catch(s){console.warn(`[openEditor] paneRegistry.resolve() error for "${D}":`,s)}E_.open(D)},[]),F=b(()=>{let D=E_.getActiveId();if(D){let f=E_.get(D);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}E_.close(D),E(D),$.current?.(D)}},[E]),L=b((D)=>{let f=E_.get(D);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}E_.close(D),E(D),$.current?.(D)},[E]),w=b((D)=>{E_.activate(D)},[]),x=b((D)=>{let f=E_.getTabs().filter((l)=>l.id!==D&&!l.pinned),s=f.filter((l)=>l.dirty).length;if(s>0){if(!window.confirm(`${s} unsaved tab${s>1?"s":""} will be closed. Continue?`))return}let m=f.map((l)=>l.id);E_.closeOthers(D),m.forEach((l)=>{E(l),$.current?.(l)})},[E]),z=b(()=>{let D=E_.getTabs().filter((m)=>!m.pinned),f=D.filter((m)=>m.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let s=D.map((m)=>m.id);E_.closeAll(),s.forEach((m)=>{E(m),$.current?.(m)})},[E]),k=b((D)=>{E_.togglePin(D)},[]),I=b(()=>{let D=E_.getActiveId();if(D)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:D}}))},[]);return c(()=>{let D=(f)=>{let{oldPath:s,newPath:m,type:l}=f.detail||{};if(!s||!m)return;if(l==="dir"){for(let Y_ of E_.getTabs())if(Y_.path===s||Y_.path.startsWith(`${s}/`)){let p=`${m}${Y_.path.slice(s.length)}`;E_.rename(Y_.id,p)}}else E_.rename(s,m)};return window.addEventListener("workspace-file-renamed",D),()=>window.removeEventListener("workspace-file-renamed",D)},[]),c(()=>{let D=(f)=>{if(E_.hasUnsaved())f.preventDefault(),f.returnValue=""};return window.addEventListener("beforeunload",D),()=>window.removeEventListener("beforeunload",D)},[]),{editorOpen:j,tabStripTabs:J,tabStripActiveId:X,previewTabs:G,openEditor:U,closeEditor:F,handleTabClose:L,handleTabActivate:w,handleTabCloseOthers:x,handleTabCloseAll:z,handleTabTogglePin:k,handleTabTogglePreview:Q,revealInExplorer:I}}function C1(_,$){try{if(typeof window>"u")return $;let J=window.__PICLAW_SILENCE||{},Y=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=J[_]??window[Y],Z=Number(X);return Number.isFinite(Z)?Z:$}catch{return $}}var y1=C1("warning",30000),y4=C1("finalize",120000),k4=C1("refresh",30000),A4=30000;function w4(_){let $={};return(_?.agents||[]).forEach((J)=>{$[J.id]=J}),$}function M4(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function P4(_=30000){let[,$]=R(0);c(()=>{let J=setInterval(()=>$((Y)=>Y+1),_);return()=>clearInterval(J)},[_])}function R2(_,$=160){let J=String(_||"").replace(/\r\n/g,`
`);if(!J)return 0;return J.split(`
`).reduce((Y,X)=>Y+Math.max(1,Math.ceil(X.length/$)),0)}function T4(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var f8=Z3,b4=Q3,v8=j3,I4=W3,S4=O3,x4=K3,k1=typeof $1==="function"?$1:T4("getAgentContext",null),R8=typeof X2==="function"?X2:T4("getAgentModels",{current:null,models:[]});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});W0.register(L1);E1();var u8=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(u8)W0.register(D1);function m8(){let[_,$]=R("disconnected"),[J,Y]=R(null),[X,Z]=R(null),[j,V]=R(!1),[G,W]=R([]),[Q,E]=R([]),{agentStatus:U,setAgentStatus:F,agentDraft:L,setAgentDraft:w,agentPlan:x,setAgentPlan:z,agentThought:k,setAgentThought:I,pendingRequest:D,setPendingRequest:f,currentTurnId:s,setCurrentTurnId:m,steerQueuedTurnId:l,setSteerQueuedTurnId:Y_,lastAgentEventRef:p,lastSilenceNoticeRef:e,isAgentRunningRef:q_,draftBufferRef:J_,thoughtBufferRef:V_,pendingRequestRef:W_,stalledPostIdRef:y_,currentTurnIdRef:__,steerQueuedTurnIdRef:t,thoughtExpandedRef:j_,draftExpandedRef:Z_}=E4(),[K_,G_]=R({}),[D_,H_]=R(null),[C_,b_]=R(null),[L_,I_]=R(!1),[S_,B_]=R(null),{notificationsEnabled:A_,notificationPermission:O0,toggleNotifications:v_,notify:w_}=F4(),[c_,U0]=R(()=>new Set),[o_,H0]=R(()=>r0("workspaceOpen",!0)),$0=A(null),{editorOpen:z_,tabStripTabs:n_,tabStripActiveId:M,previewTabs:a,openEditor:R_,closeEditor:p_,handleTabClose:b0,handleTabActivate:C0,handleTabCloseOthers:q0,handleTabCloseAll:a_,handleTabTogglePin:N0,handleTabTogglePreview:I0,revealInExplorer:d_}=C4({onTabClosed:(O)=>$0.current?.(O)}),r_=A(null),x_=A(null);c(()=>{let O=r_.current;if(!O)return;if(x_.current)x_.current.dispose(),x_.current=null;let N=M;if(!N)return;let P={path:N,mode:"edit"},v=W0.resolve(P)||W0.get("editor");if(!v){O.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let g=v.mount(O,P);x_.current=g,g.onDirtyChange?.((i)=>{E_.setDirty(N,i)}),g.onSaveRequest?.(()=>{}),g.onClose?.(()=>{p_()});let T=E_.getViewState(N);if(T&&typeof g.restoreViewState==="function")requestAnimationFrame(()=>g.restoreViewState(T));if(typeof g.onViewStateChange==="function")g.onViewStateChange((i)=>{E_.saveViewState(N,i)});return requestAnimationFrame(()=>g.focus()),()=>{if(x_.current===g)g.dispose(),x_.current=null}},[M,p_]);let[S0,F0]=R({name:"You",avatar_url:null,avatar_background:null}),B0=A(!1),X0=A(!1),y0=A({}),Q0=A({name:null,avatar_url:null}),h_=A({currentHashtag:null,searchQuery:null}),i_=A(null),L0=A(null),k0=A(0),x0=A(0),E0=A(0),u_=A(null),t_=A(null),j0=A(null),m_=A(0),g_=A({title:null,avatarBase:null});P4(30000),c(()=>{return P3()},[]),c(()=>{P_("workspaceOpen",String(o_))},[o_]),c(()=>{y0.current=K_||{}},[K_]),c(()=>{Q0.current=S0||{name:"You",avatar_url:null,avatar_background:null}},[S0]);let e_=b((O,N,P=null)=>{if(typeof document>"u")return;let v=(O||"").trim()||"PiClaw";if(g_.current.title!==v){document.title=v;let k_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(k_&&k_.getAttribute("content")!==v)k_.setAttribute("content",v);g_.current.title=v}let g=document.getElementById("dynamic-favicon");if(!g)return;let T=g.getAttribute("data-default")||g.getAttribute("href")||"/favicon.ico",i=N||T,O_=N?`${i}|${P||""}`:i;if(g_.current.avatarBase!==O_){let k_=N?`${i}${i.includes("?")?"&":"?"}v=${P||Date.now()}`:i;g.setAttribute("href",k_),g_.current.avatarBase=O_}},[]),z0=b((O)=>{if(!O)return;W((N)=>N.includes(O)?N:[...N,O])},[]),A0=b((O)=>{W((N)=>N.filter((P)=>P!==O))},[]);$0.current=A0;let T0=b(()=>{W([])},[]),H=b(()=>{let O=M;if(O)z0(O)},[M,z0]),S=b((O)=>{if(!O)return;E((N)=>N.includes(O)?N:[...N,O])},[]),o=b(async(O)=>{let N=(v)=>{v.scrollIntoView({behavior:"smooth",block:"center"}),v.classList.add("post-highlight"),setTimeout(()=>v.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+O);if(P){N(P);return}try{let g=(await X3(O))?.thread?.[0];if(!g)return;s_((T)=>{if(!T)return[g];if(T.some((i)=>i.id===g.id))return T;return[...T,g]}),requestAnimationFrame(()=>{setTimeout(()=>{let T=document.getElementById("post-"+O);if(T)N(T)},50)})}catch(v){console.error("[scrollToMessage] Failed to fetch message",O,v)}},[]),Q_=b((O)=>{E((N)=>N.filter((P)=>P!==O))},[]),U_=b(()=>{E([])},[]),F_=b((O={})=>{let N=Date.now();if(p.current=N,O.running)q_.current=!0;if(O.clearSilence)e.current=0},[]),N_=b(()=>{if(j0.current)clearTimeout(j0.current),j0.current=null;m_.current=0},[]);c(()=>()=>{N_()},[N_]);let T_=b(()=>{N_(),F((O)=>{if(!O)return O;if(!(O.last_activity||O.lastActivity))return O;let{last_activity:N,lastActivity:P,...v}=O;return v})},[N_]),D0=b((O)=>{if(!O)return;N_();let N=Date.now();m_.current=N,F({type:O.type||"active",last_activity:!0}),j0.current=setTimeout(()=>{if(m_.current!==N)return;F((P)=>{if(!P||!(P.last_activity||P.lastActivity))return P;return null})},A4)},[N_]),f_=b(()=>{q_.current=!1,p.current=null,e.current=0,J_.current="",V_.current="",W_.current=null,t_.current=null,__.current=null,t.current=null,N_(),m(null),Y_(null),j_.current=!1,Z_.current=!1},[N_,m,Y_]),M_=b((O)=>{if(!O)return;if(__.current===O)return;__.current=O,m(O),t.current=null,Y_(null),J_.current="",V_.current="",w({text:"",totalLines:0}),z(""),I({text:"",totalLines:0}),f(null),W_.current=null,t_.current=null,j_.current=!1,Z_.current=!1},[m,Y_]),_0=b((O)=>{if(typeof document<"u"){let k_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&k_)return}let N=t_.current;if(!N||!N.post)return;if(O&&N.turnId&&N.turnId!==O)return;let P=N.post;if(P.id&&u_.current===P.id)return;let v=String(P?.data?.content||"").trim();if(!v)return;u_.current=P.id||u_.current,t_.current=null;let g=v.replace(/\s+/g," ").slice(0,200),T=y0.current||{},O_=(P?.data?.agent_id?T[P.data.agent_id]:null)?.name||"Pi";w_(O_,g)},[w_]),K0=b(async(O,N)=>{if(O!=="thought"&&O!=="draft")return;let P=__.current;if(O==="thought"){if(j_.current=N,P)try{await S4(P,"thought",N)}catch(v){console.warn("Failed to update thought visibility:",v)}if(!N)return;try{let v=P?await I4(P,"thought"):null;if(v?.text)V_.current=v.text;I((g)=>({...g||{text:"",totalLines:0},fullText:V_.current||g?.fullText||"",totalLines:Number.isFinite(v?.total_lines)?v.total_lines:g?.totalLines||0}))}catch(v){console.warn("Failed to fetch full thought:",v)}return}if(Z_.current=N,P)try{await S4(P,"draft",N)}catch(v){console.warn("Failed to update draft visibility:",v)}if(!N)return;try{let v=P?await I4(P,"draft"):null;if(v?.text)J_.current=v.text;w((g)=>({...g||{text:"",totalLines:0},fullText:J_.current||g?.fullText||"",totalLines:Number.isFinite(v?.total_lines)?v.total_lines:g?.totalLines||0}))}catch(v){console.warn("Failed to fetch full draft:",v)}},[]),w0=A(null),_2=b(()=>{if(i_.current)i_.current.scrollTop=0},[]);w0.current=_2;let $2=b((O)=>{let N=i_.current;if(!N||typeof O!=="function"){O?.();return}let{currentHashtag:P,searchQuery:v}=h_.current||{},g=!(v&&!P),T=g?N.scrollHeight-N.scrollTop:N.scrollTop;O(),requestAnimationFrame(()=>{let i=i_.current;if(!i)return;if(g){let O_=Math.max(i.scrollHeight-T,0);i.scrollTop=O_}else{let O_=Math.max(i.scrollHeight-i.clientHeight,0),k_=Math.min(T,O_);i.scrollTop=k_}})},[]),m0=b((O)=>{let N=i_.current;if(!N||typeof O!=="function"){O?.();return}let P=N.scrollTop;O(),requestAnimationFrame(()=>{let v=i_.current;if(!v)return;let g=Math.max(v.scrollHeight-v.clientHeight,0);v.scrollTop=Math.min(P,g)})},[]),{posts:f0,setPosts:s_,hasMore:g0,setHasMore:u2,hasMoreRef:V2,loadPosts:J0,refreshTimeline:G0,loadMore:m2,loadMoreRef:W2}=L4({preserveTimelineScroll:$2,preserveTimelineScrollTop:m0}),c0=b(()=>{let O=y_.current;if(!O)return;s_((N)=>N?N.filter((P)=>P.id!==O):N),y_.current=null},[s_]),{handleSplitterMouseDown:g2,handleSplitterTouchStart:c2,handleEditorSplitterMouseDown:p2,handleEditorSplitterTouchStart:h2,handleDockSplitterMouseDown:i2,handleDockSplitterTouchStart:h0}=D4({appShellRef:L0,sidebarWidthRef:k0,editorWidthRef:x0,dockHeightRef:E0}),i0=b(()=>{if(!q_.current)return;q_.current=!1,e.current=0,p.current=null,__.current=null,m(null),j_.current=!1,Z_.current=!1;let O=(J_.current||"").trim();if(J_.current="",V_.current="",w({text:"",totalLines:0}),z(""),I({text:"",totalLines:0}),f(null),W_.current=null,t_.current=null,!O){F({type:"error",title:"Response stalled — No content received"});return}let P=`${O}${`

⚠️ Response may be incomplete — the model stopped responding`}`,v=Date.now(),g=new Date().toISOString(),T={id:v,timestamp:g,data:{type:"agent_response",content:P,agent_id:"default",is_local_stall:!0}};y_.current=v,s_((i)=>i?G2([...i,T]):[T]),w0.current?.(),F(null)},[m]);c(()=>{h_.current={currentHashtag:J,searchQuery:X}},[J,X]),c(()=>{let O=Math.min(1000,Math.max(100,Math.floor(y1/2))),N=setInterval(()=>{if(!q_.current)return;if(W_.current)return;let P=p.current;if(!P)return;let v=Date.now(),g=v-P;if(g>=y4){i0();return}if(g>=y1){if(v-e.current>=k4){let T=Math.floor(g/1000);F({type:"waiting",title:`Waiting for model… No events for ${T}s`}),e.current=v}}},O);return()=>clearInterval(N)},[i0]);let J2=b(async()=>{try{let O=await k1();if(O)B_(O)}catch(O){console.warn("Failed to fetch agent context:",O)}},[]),v0=b(async()=>{try{let O=await x4("web:default");if(!O||O.status!=="active"||!O.data){if(X0.current){let{currentHashtag:v,searchQuery:g}=h_.current||{};if(!v&&!g)G0()}X0.current=!1,f_(),F(null),w({text:"",totalLines:0}),z(""),I({text:"",totalLines:0}),f(null),W_.current=null;return}X0.current=!0;let N=O.data,P=N.turn_id||N.turnId;if(P)M_(P);if(F_({running:!0,clearSilence:!0}),T_(),F(N),O.thought&&O.thought.text)I((v)=>{if(v&&v.text&&v.text.length>=O.thought.text.length)return v;return V_.current=O.thought.text,{text:O.thought.text,totalLines:O.thought.totalLines||0}});if(O.draft&&O.draft.text)w((v)=>{if(v&&v.text&&v.text.length>=O.draft.text.length)return v;return J_.current=O.draft.text,{text:O.draft.text,totalLines:O.draft.totalLines||0}})}catch(O){console.warn("Failed to fetch agent status:",O)}},[f_,T_,F_,G0,M_]),l0=b((O)=>{if($(O),O!=="connected"){F(null),w({text:"",totalLines:0}),z(""),I({text:"",totalLines:0}),f(null),W_.current=null,f_();return}if(!B0.current){B0.current=!0,v0();return}let{currentHashtag:N,searchQuery:P}=h_.current;if(!N&&!P)G0();v0()},[f_,G0,v0]),l2=b(async(O)=>{Y(O),s_(null),await J0(O)},[J0]),o2=b(async()=>{Y(null),Z(null),s_(null),await J0()},[J0]),n2=b(async(O)=>{if(!O||!O.trim())return;Z(O.trim()),Y(null),s_(null);try{let N=await f8(O.trim());s_(N.results),u2(!1)}catch(N){console.error("Failed to search:",N),s_([])}},[]),d2=b(()=>{V(!0),Z(null),Y(null),s_([])},[]),r2=b(()=>{V(!1),Z(null),J0()},[J0]),A1=b(()=>{},[]),K=b(async(O)=>{if(!O)return;let N=O.id,P=f0?.filter((g)=>g?.data?.thread_id===N&&g?.id!==N).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let v=(g)=>{if(!g.length)return;U0((i)=>{let O_=new Set(i);return g.forEach((k_)=>O_.add(k_)),O_}),setTimeout(()=>{if(m0(()=>{s_((i)=>i?i.filter((O_)=>!g.includes(O_.id)):i)}),U0((i)=>{let O_=new Set(i);return g.forEach((k_)=>O_.delete(k_)),O_}),V2.current)W2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await b4(N,P>0);if(g?.ids?.length)v(g.ids)}catch(g){let T=g?.message||"";if(P===0&&T.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let O_=await b4(N,!0);if(O_?.ids?.length)v(O_.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${T}`)}},[f0,m0]),B=b(async()=>{try{let O=await v8();G_(w4(O));let N=O?.user||{};F0((v)=>{let g=typeof N.name==="string"&&N.name.trim()?N.name.trim():"You",T=typeof N.avatar_url==="string"?N.avatar_url.trim():null,i=typeof N.avatar_background==="string"&&N.avatar_background.trim()?N.avatar_background.trim():null;if(v.name===g&&v.avatar_url===T&&v.avatar_background===i)return v;return{name:g,avatar_url:T,avatar_background:i}});let P=(O?.agents||[]).find((v)=>v.id==="default");if(P?.model)H_(P.model);e_(P?.name,P?.avatar_url)}catch(O){console.warn("Failed to load agents:",O)}try{let O=await k1();if(O)B_(O)}catch{}},[e_]);c(()=>{B();let O=s0("sidebarWidth",null),N=Number.isFinite(O)?Math.min(Math.max(O,160),600):280;if(k0.current=N,L0.current)L0.current.style.setProperty("--sidebar-width",`${N}px`)},[B]);let y=b((O)=>{if(!O||typeof O!=="object")return;let N=O.agent_id;if(!N)return;let{agent_name:P,agent_avatar:v}=O;if(!P&&v===void 0)return;let g=y0.current?.[N]||{id:N},T=g.name||null,i=g.avatar_url??g.avatarUrl??g.avatar??null,O_=!1,k_=!1;if(P&&P!==g.name)T=P,k_=!0;if(v!==void 0){let o0=typeof v==="string"?v.trim():null,w1=typeof i==="string"?i.trim():null,n0=o0||null;if(n0!==(w1||null))i=n0,O_=!0}if(!k_&&!O_)return;if(G_((o0)=>{let n0={...o0[N]||{id:N}};if(k_)n0.name=T;if(O_)n0.avatar_url=i;return{...o0,[N]:n0}}),N==="default")e_(T,i,O_?Date.now():null)},[e_]),C=b((O)=>{if(!O||typeof O!=="object")return;let N=O.user_name??O.userName,P=O.user_avatar??O.userAvatar,v=O.user_avatar_background??O.userAvatarBackground;if(N===void 0&&P===void 0&&v===void 0)return;F0((g)=>{let T=typeof N==="string"&&N.trim()?N.trim():g.name||"You",i=P===void 0?g.avatar_url:typeof P==="string"&&P.trim()?P.trim():null,O_=v===void 0?g.avatar_background:typeof v==="string"&&v.trim()?v.trim():null;if(g.name===T&&g.avatar_url===i&&g.avatar_background===O_)return g;return{name:T,avatar_url:i,avatar_background:O_}})},[]),u=b((O)=>{if(!O||typeof O!=="object")return;let N=O.model??O.current;if(N!==void 0)H_(N);if(O.thinking_level!==void 0)b_(O.thinking_level??null);if(O.supports_thinking!==void 0)I_(Boolean(O.supports_thinking))},[]),h=b(()=>{R8().then((O)=>{if(O)u(O)}).catch(()=>{})},[u]),d=b((O,N)=>{let P=N?.turn_id;if(y(N),C(N),O==="ui_theme"){b3(N);return}if(O?.startsWith("agent_"))T_();if(O==="connected"){F(null),w({text:"",totalLines:0}),z(""),I({text:"",totalLines:0}),f(null),W_.current=null,f_(),x4("web:default").then((T)=>{if(!T||T.status!=="active"||!T.data)return;let i=T.data,O_=i.turn_id||i.turnId;if(O_)M_(O_);if(F_({clearSilence:!0}),D0(i),T.thought&&T.thought.text)V_.current=T.thought.text,I({text:T.thought.text,totalLines:T.thought.totalLines||0});if(T.draft&&T.draft.text)J_.current=T.draft.text,w({text:T.draft.text,totalLines:T.draft.totalLines||0})}).catch((T)=>{console.warn("Failed to fetch agent status:",T)}),h();return}if(O==="agent_status"){if(N.type==="done"||N.type==="error"){if(P&&__.current&&P!==__.current)return;if(N.type==="done"){_0(P||__.current);let{currentHashtag:T,searchQuery:i}=h_.current||{};if(!T&&!i)G0();if(N.context_usage)B_(N.context_usage)}if(X0.current=!1,f_(),w({text:"",totalLines:0}),z(""),I({text:"",totalLines:0}),f(null),N.type==="error")F({type:"error",title:N.title||"Agent error"}),setTimeout(()=>F(null),8000);else F(null)}else{if(P)M_(P);if(F_({running:!0,clearSilence:!0}),N.type==="thinking")J_.current="",V_.current="",w({text:"",totalLines:0}),z(""),I({text:"",totalLines:0});F(N)}return}if(O==="agent_steer_queued"){if(P&&__.current&&P!==__.current)return;let T=P||__.current;if(!T)return;t.current=T,Y_(T);return}if(O==="agent_draft_delta"){if(P&&__.current&&P!==__.current)return;if(P&&!__.current)M_(P);if(F_({running:!0,clearSilence:!0}),N?.reset)J_.current="";if(N?.delta)J_.current+=N.delta;if(Z_.current){let T=J_.current;w((i)=>({text:i?.text||"",totalLines:R2(T),fullText:T}))}else{let T=J_.current,i=R2(T);w({text:T,totalLines:i})}return}if(O==="agent_draft"){if(P&&__.current&&P!==__.current)return;if(P&&!__.current)M_(P);F_({running:!0,clearSilence:!0});let T=N.text||"",i=N.mode||(N.kind==="plan"?"replace":"append"),O_=Number.isFinite(N.total_lines)?N.total_lines:T?T.replace(/\r\n/g,`
`).split(`
`).length:0;if(N.kind==="plan")if(i==="replace")z(T);else z((k_)=>(k_||"")+T);else if(!Z_.current)J_.current=T,w({text:T,totalLines:O_});return}if(O==="agent_thought_delta"){if(P&&__.current&&P!==__.current)return;if(P&&!__.current)M_(P);if(F_({running:!0,clearSilence:!0}),N?.reset)V_.current="";if(typeof N?.delta==="string")V_.current+=N.delta;if(j_.current){let T=V_.current;I((i)=>({text:i?.text||"",totalLines:R2(T),fullText:T}))}return}if(O==="agent_thought"){if(P&&__.current&&P!==__.current)return;if(P&&!__.current)M_(P);F_({running:!0,clearSilence:!0});let T=N.text||"",i=Number.isFinite(N.total_lines)?N.total_lines:T?T.replace(/\r\n/g,`
`).split(`
`).length:0;if(!j_.current)V_.current=T,I({text:T,totalLines:i});return}if(O==="agent_request"){if(console.log("Agent request:",N),P&&__.current&&P!==__.current)return;if(P)M_(P);F_({running:!0,clearSilence:!0}),f(N),W_.current=N;return}if(O==="agent_request_timeout"){if(console.log("Agent request timeout:",N),P&&__.current&&P!==__.current)return;f(null),W_.current=null,f_(),F({type:"error",title:"Permission request timed out"});return}if(O==="model_changed"){if(N?.model!==void 0)H_(N.model);if(N?.thinking_level!==void 0)b_(N.thinking_level??null);if(N?.supports_thinking!==void 0)I_(Boolean(N.supports_thinking));k1().then((T)=>{if(T)B_(T)}).catch(()=>{});return}if(O==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:N}));return}let{currentHashtag:v,searchQuery:g}=h_.current;if(O==="agent_response")c0(),t_.current={post:N,turnId:__.current};if(!v&&!g&&(O==="new_post"||O==="agent_response"))s_((T)=>{if(!T)return[N];if(T.some((i)=>i.id===N.id))return T;return[...T,N]}),w0.current?.();if(O==="interaction_updated")s_((T)=>T?T.map((i)=>i.id===N.id?N:i):T);if(O==="interaction_deleted"){let T=N?.ids||[];if(T.length){m0(()=>{s_((k_)=>k_?k_.filter((o0)=>!T.includes(o0.id)):k_)});let{currentHashtag:i,searchQuery:O_}=h_.current;if(V2.current&&!i&&!O_)W2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[f_,T_,F_,_0,m0,G0,c0,M_,D0,y,C,h]);c(()=>{if(typeof window>"u")return;let O=window.__PICLAW_TEST_API||{};return O.emit=d,O.reset=()=>{c0(),f_(),F(null),w({text:"",totalLines:0}),z(""),I({text:"",totalLines:0}),f(null)},O.finalize=()=>i0(),window.__PICLAW_TEST_API=O,()=>{if(window.__PICLAW_TEST_API===O)window.__PICLAW_TEST_API=void 0}},[f_,i0,d,c0]),H4({handleSseEvent:d,handleConnectionStatusChange:l0,loadPosts:J0}),c(()=>{if(!f0||f0.length===0)return;let O=location.hash;if(!O||!O.startsWith("#msg-"))return;let N=O.slice(5);o(N),history.replaceState(null,"",location.pathname+location.search)},[f0,o]);let r=U!==null;c(()=>{if(_!=="connected")return;let N=setInterval(()=>{if(r)v0(),J2();else{let{currentHashtag:P,searchQuery:v}=h_.current||{};if(!P&&!v)G0();v0(),J2()}},r?15000:60000);return()=>clearInterval(N)},[_,r,v0,J2,G0]);let n=b(()=>{H0((O)=>!O)},[]);c(()=>{if(!z_)return;if(typeof window>"u")return;let O=L0.current;if(!O)return;if(!x0.current){let N=s0("editorWidth",null),P=k0.current||280;x0.current=Number.isFinite(N)?N:P}if(O.style.setProperty("--editor-width",`${x0.current}px`),!E0.current){let N=s0("dockHeight",null);E0.current=Number.isFinite(N)?N:200}O.style.setProperty("--dock-height",`${E0.current}px`)},[z_]);let $_=W0.getDockPanes().length>0,[Y0,Z0]=R(!1),O2=b(()=>Z0((O)=>!O),[]);c(()=>{if(!$_)return;let O=(N)=>{if(N.ctrlKey&&N.key==="`")N.preventDefault(),O2()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[O2,$_]);let f4=Boolean(l&&l===(U?.turn_id||s));return q`
        <div class=${`app-shell${o_?"":" workspace-collapsed"}${z_?" editor-open":""}`} ref=${L0}>
            <${G4}
                onFileSelect=${z0}
                visible=${o_}
                active=${o_||z_}
                onOpenEditor=${R_}
            />
            <button
                class=${`workspace-toggle-tab${o_?" open":" closed"}`}
                onClick=${n}
                title=${o_?"Hide workspace":"Show workspace"}
                aria-label=${o_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${g2} onTouchStart=${c2}></div>
            ${z_&&q`
                <div class="editor-pane-container">
                    <${V4}
                        tabs=${n_}
                        activeId=${M}
                        onActivate=${C0}
                        onClose=${b0}
                        onCloseOthers=${q0}
                        onCloseAll=${a_}
                        onTogglePin=${N0}
                        onTogglePreview=${I0}
                        previewTabs=${a}
                        onToggleDock=${$_?O2:void 0}
                        dockVisible=${$_&&Y0}
                    />
                    <div class="editor-pane-host" ref=${r_}></div>
                    ${M&&a.has(M)&&q`
                        <${O4}
                            getContent=${()=>x_.current?.getContent?.()}
                            path=${M}
                            onClose=${()=>I0(M)}
                        />
                    `}
                    ${$_&&Y0&&q`<div class="dock-splitter" onMouseDown=${i2} onTouchStart=${h0}></div>`}
                    ${$_&&q`<div class=${`dock-panel${Y0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${O2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
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
                <div class="editor-splitter" onMouseDown=${p2} onTouchStart=${h2}></div>
            `}
            <div class="container">
                ${X&&M4()&&q`<div class="search-results-spacer"></div>`}
                ${(J||X)&&q`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${o2}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${J?`#${J}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${s3} 
                    posts=${f0}
                    hasMore=${g0}
                    onLoadMore=${m2}
                    timelineRef=${i_}
                    onHashtagClick=${l2}
                    onMessageRef=${S}
                    onScrollToMessage=${o}
                    onPostClick=${void 0}
                    onDeletePost=${K}
                    emptyMessage=${J?`No posts with #${J}`:X?`No results for "${X}"`:void 0}
                    agents=${K_}
                    user=${S0}
                    reverse=${!(X&&!J)}
                    removingPostIds=${c_}
                    searchQuery=${X}
                />
                <${i3}
                    status=${U}
                    draft=${L}
                    plan=${x}
                    thought=${k}
                    pendingRequest=${D}
                    turnId=${s}
                    steerQueued=${f4}
                    onPanelToggle=${K0}
                />
                <${D3} 
                    onPost=${()=>{J0(),_2()}}
                    onFocus=${_2}
                    searchMode=${j}
                    onSearch=${n2}
                    onEnterSearch=${d2}
                    onExitSearch=${r2}
                    fileRefs=${G}
                    onRemoveFileRef=${A0}
                    onClearFileRefs=${T0}
                    messageRefs=${Q}
                    onRemoveMessageRef=${Q_}
                    onClearMessageRefs=${U_}
                    activeEditorPath=${M}
                    onAttachEditorFile=${H}
                    activeModel=${D_}
                    thinkingLevel=${C_}
                    supportsThinking=${L_}
                    contextUsage=${S_}
                    notificationsEnabled=${A_}
                    notificationPermission=${O0}
                    onToggleNotifications=${v_}
                    onModelChange=${H_}
                    onModelStateChange=${u}
                />
                <${o3} status=${_} />
                <${l3}
                    request=${D}
                    onRespond=${()=>{f(null),W_.current=null}}
                />
            </div>
        </div>
    `}e1(q`<${m8} />`,document.getElementById("app"));

//# debugId=143032AED6522B9E64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
