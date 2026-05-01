var MB=Object.defineProperty;var TB=(_)=>_;function wB(_,$){this[_]=TB.bind(null,$)}var Y1=(_,$)=>{for(var j in $)MB(_,j,{get:$[j],enumerable:!0,configurable:!0,set:wB.bind($,j)})};var W_=(_,$)=>()=>(_&&($=_(_=0)),$);var ij={};Y1(ij,{useState:()=>C,useRef:()=>u,useReducer:()=>nj,useMemo:()=>X0,useLayoutEffect:()=>m4,useImperativeHandle:()=>gB,useErrorBoundary:()=>vB,useEffect:()=>g,useDebugValue:()=>bB,useContext:()=>uB,useCallback:()=>P,render:()=>q$,html:()=>N,h:()=>t8,createContext:()=>SB,Component:()=>P5});function Y$(_,$){for(var j in $)_[j]=$[j];return _}function a8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function t8(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?l6.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return u6(_,Y,G,Z,null)}function u6(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++fj:Z,__i:-1,__u:0};return Z==null&&y_.vnode!=null&&y_.vnode(X),X}function p6(_){return _.children}function P5(_,$){this.props=_,this.context=$}function u4(_,$){if($==null)return _.__?u4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?u4(_):null}function IB(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=Y$({},$);X.__v=$.__v+1,y_.vnode&&y_.vnode(X),e8(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?u4($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,cj(G,X,Z),$.__e=$.__=null,X.__e!=j&&bj(X)}}function bj(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),bj(_)}function d8(_){(!_.__d&&(_.__d=!0)&&C$.push(_)&&!c6.__r++||zj!=y_.debounceRendering)&&((zj=y_.debounceRendering)||Rj)(c6)}function c6(){try{for(var _,$=1;C$.length;)C$.length>$&&C$.sort(Sj),_=C$.shift(),$=C$.length,IB(_)}finally{C$.length=c6.__r=0}}function vj(_,$,j,G,Z,X,Y,q,L,K,Q){var V,F,B,U,D,E,H,k=G&&G.__k||m6,A=$.length;for(L=CB(j,$,k,L,A),V=0;V<A;V++)(B=j.__k[V])!=null&&(F=B.__i!=-1&&k[B.__i]||v6,B.__i=V,E=e8(_,B,F,Z,X,Y,q,L,K,Q),U=B.__e,B.ref&&F.ref!=B.ref&&(F.ref&&_3(F.ref,null,B),Q.push(B.ref,B.__c||U,B)),D==null&&U!=null&&(D=U),(H=!!(4&B.__u))||F.__k===B.__k?(L=mj(B,L,_,H),H&&F.__e&&(F.__e=null)):typeof B.type=="function"&&E!==void 0?L=E:U&&(L=U.nextSibling),B.__u&=-7);return j.__e=D,L}function CB(_,$,j,G,Z){var X,Y,q,L,K,Q=j.length,V=Q,F=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=u6(null,Y,null,null,null):h6(Y)?Y=_.__k[X]=u6(p6,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=u6(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,L=X+F,Y.__=_,Y.__b=_.__b+1,q=null,(K=Y.__i=PB(Y,j,L,V))!=-1&&(V--,(q=j[K])&&(q.__u|=2)),q==null||q.__v==null?(K==-1&&(Z>Q?F--:Z<Q&&F++),typeof Y.type!="function"&&(Y.__u|=4)):K!=L&&(K==L-1?F--:K==L+1?F++:(K>L?F--:F++,Y.__u|=4))):_.__k[X]=null;if(V)for(X=0;X<Q;X++)(q=j[X])!=null&&(2&q.__u)==0&&(q.__e==G&&(G=u4(q)),hj(q,q));return G}function mj(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=mj(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=u4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function PB(_,$,j,G){var Z,X,Y,q=_.key,L=_.type,K=$[j],Q=K!=null&&(2&K.__u)==0;if(K===null&&q==null||Q&&q==K.key&&L==K.type)return j;if(G>(Q?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((K=$[Y=Z>=0?Z--:X++])!=null&&(2&K.__u)==0&&q==K.key&&L==K.type)return Y}return-1}function Jj(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||xB.test($)?j:j+"px"}function S6(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||Jj(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||Jj(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(gj,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[C5]=G[C5]:(j[C5]=s8,_.addEventListener($,X?r8:n8,X)):_.removeEventListener($,X?r8:n8,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function Aj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[g6]==null)$[g6]=s8++;else if($[g6]<j[C5])return;return j(y_.event?y_.event($):$)}}}function e8(_,$,j,G,Z,X,Y,q,L,K){var Q,V,F,B,U,D,E,H,k,A,O,y,x,z,J,M=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),X=[q=$.__e=j.__e]),(Q=y_.__b)&&Q($);_:if(typeof M=="function")try{if(H=$.props,k=M.prototype&&M.prototype.render,A=(Q=M.contextType)&&G[Q.__c],O=Q?A?A.props.value:Q.__:G,j.__c?E=(V=$.__c=j.__c).__=V.__E:(k?$.__c=V=new M(H,O):($.__c=V=new P5(H,O),V.constructor=M,V.render=RB),A&&A.sub(V),V.state||(V.state={}),V.__n=G,F=V.__d=!0,V.__h=[],V._sb=[]),k&&V.__s==null&&(V.__s=V.state),k&&M.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=Y$({},V.__s)),Y$(V.__s,M.getDerivedStateFromProps(H,V.__s))),B=V.props,U=V.state,V.__v=$,F)k&&M.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),k&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(k&&M.getDerivedStateFromProps==null&&H!==B&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(H,O),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(H,V.__s,O)===!1){$.__v!=j.__v&&(V.props=H,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(W){W&&(W.__=$)}),m6.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(H,V.__s,O),k&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(B,U,D)})}if(V.context=O,V.props=H,V.__P=_,V.__e=!1,y=y_.__r,x=0,k)V.state=V.__s,V.__d=!1,y&&y($),Q=V.render(V.props,V.state,V.context),m6.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,y&&y($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++x<25);V.state=V.__s,V.getChildContext!=null&&(G=Y$(Y$({},G),V.getChildContext())),k&&!F&&V.getSnapshotBeforeUpdate!=null&&(D=V.getSnapshotBeforeUpdate(B,U)),z=Q!=null&&Q.type===p6&&Q.key==null?lj(Q.props.children):Q,q=vj(_,h6(z)?z:[z],$,j,G,Z,X,Y,q,L,K),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),E&&(V.__E=V.__=null)}catch(W){if($.__v=null,L||X!=null)if(W.then){for($.__u|=L?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;X[X.indexOf(q)]=null,$.__e=q}else{for(J=X.length;J--;)a8(X[J]);i8($)}else $.__e=j.__e,$.__k=j.__k,W.then||i8($);y_.__e(W,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=fB(j.__e,$,j,G,Z,X,Y,L,K);return(Q=y_.diffed)&&Q($),128&$.__u?void 0:q}function i8(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(i8))}function cj(_,$,j){for(var G=0;G<j.length;G++)_3(j[G],j[++G],j[++G]);y_.__c&&y_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){y_.__e(X,Z.__v)}})}function lj(_){return typeof _!="object"||_==null||_.__b>0?_:h6(_)?_.map(lj):Y$({},_)}function fB(_,$,j,G,Z,X,Y,q,L){var K,Q,V,F,B,U,D,E=j.props||v6,H=$.props,k=$.type;if(k=="svg"?Z="http://www.w3.org/2000/svg":k=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(K=0;K<X.length;K++)if((B=X[K])&&"setAttribute"in B==!!k&&(k?B.localName==k:B.nodeType==3)){_=B,X[K]=null;break}}if(_==null){if(k==null)return document.createTextNode(H);_=document.createElementNS(Z,k,H.is&&H),q&&(y_.__m&&y_.__m($,X),q=!1),X=null}if(k==null)E===H||q&&_.data==H||(_.data=H);else{if(X=X&&l6.call(_.childNodes),!q&&X!=null)for(E={},K=0;K<_.attributes.length;K++)E[(B=_.attributes[K]).name]=B.value;for(K in E)B=E[K],K=="dangerouslySetInnerHTML"?V=B:K=="children"||(K in H)||K=="value"&&("defaultValue"in H)||K=="checked"&&("defaultChecked"in H)||S6(_,K,null,B,Z);for(K in H)B=H[K],K=="children"?F=B:K=="dangerouslySetInnerHTML"?Q=B:K=="value"?U=B:K=="checked"?D=B:q&&typeof B!="function"||E[K]===B||S6(_,K,B,E[K],Z);if(Q)q||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),vj($.type=="template"?_.content:_,h6(F)?F:[F],$,j,G,k=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&u4(j,0),q,L),X!=null)for(K=X.length;K--;)a8(X[K]);q||(K="value",k=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[K]||k=="progress"&&!U||k=="option"&&U!=E[K])&&S6(_,K,U,E[K],Z),K="checked",D!=null&&D!=_[K]&&S6(_,K,D,E[K],Z))}return _}function _3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){y_.__e(Z,j)}}function hj(_,$,j){var G,Z;if(y_.unmount&&y_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||_3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){y_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&hj(G[Z],$,j||typeof _.type!="function");j||a8(_.__e),_.__c=_.__=_.__e=void 0}function RB(_,$,j){return this.constructor(_,j)}function q$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),y_.__&&y_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],e8($,_=(!G&&j||$).__k=t8(p6,null,[_]),Z||v6,v6,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?l6.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),cj(X,_,Y)}function SB(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,d8(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+uj++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function v4(_,$){S_.__h&&S_.__h(w_,_,b4||$),b4=0;var j=w_.__H||(w_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return b4=1,nj(rj,_)}function nj(_,$,j){var G=v4(P$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):rj(void 0,$),function(q){var L=G.__N?G.__N[0]:G.__[0],K=G.t(L,q);L!==K&&(G.__N=[K,G.__[1]],G.__c.setState({}))}],G.__c=w_,!w_.__f)){var Z=function(q,L,K){if(!G.__c.__H)return!0;var Q=G.__c.__H.__.filter(function(F){return F.__c});if(Q.every(function(F){return!F.__N}))return!X||X.call(this,q,L,K);var V=G.__c.props!==q;return Q.some(function(F){if(F.__N){var B=F.__[0];F.__=F.__N,F.__N=void 0,B!==F.__[0]&&(V=!0)}}),X&&X.call(this,q,L,K)||V};w_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=w_;w_.componentWillUpdate=function(q,L,K){if(this.__e){var Q=X;X=void 0,Z(q,L,K),X=Q}Y&&Y.call(this,q,L,K)},w_.shouldComponentUpdate=Z}return G.__N||G.__}function g(_,$){var j=v4(P$++,3);!S_.__s&&$3(j.__H,$)&&(j.__=_,j.u=$,w_.__H.__h.push(j))}function m4(_,$){var j=v4(P$++,4);!S_.__s&&$3(j.__H,$)&&(j.__=_,j.u=$,w_.__h.push(j))}function u(_){return b4=5,X0(function(){return{current:_}},[])}function gB(_,$,j){b4=6,m4(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function X0(_,$){var j=v4(P$++,7);return $3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return b4=8,X0(function(){return _},$)}function uB(_){var $=w_.context[_.__c],j=v4(P$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(w_)),$.props.value):_.__}function bB(_,$){S_.useDebugValue&&S_.useDebugValue($?$(_):_)}function vB(_){var $=v4(P$++,10),j=C();return $.__=_,w_.componentDidCatch||(w_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function mB(){for(var _;_=pj.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(b6),$.__h.some(o8),$.__h=[]}catch(j){$.__h=[],S_.__e(j,_.__v)}}}function cB(_){var $,j=function(){clearTimeout(G),Cj&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);Cj&&($=requestAnimationFrame(j))}function b6(_){var $=w_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),w_=$}function o8(_){var $=w_;_.__c=_.__(),w_=$}function $3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function rj(_,$){return typeof $=="function"?$(_):$}function lB(_){var $=Pj.get(this);return $||($=new Map,Pj.set(this,$)),($=dj(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",q="",L=[0],K=function(F){X===1&&(F||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,F,Y):X===3&&(F||Y)?(L.push(3,F,Y),X=2):X===2&&Y==="..."&&F?L.push(4,F,0):X===2&&Y&&!F?L.push(5,0,!0,Y):X>=5&&((Y||!F&&X===5)&&(L.push(X,0,Y,Z),X=6),F&&(L.push(X,F,0,Z),X=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(X===1&&K(),K(Q));for(var V=0;V<j[Q].length;V++)G=j[Q][V],X===1?G==="<"?(K(),L=[L],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:q?G===q?q="":Y+=G:G==='"'||G==="'"?q=G:G===">"?(K(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[Q][V+1]===">")?(K(),X===3&&(L=L[0]),X=L,(L=L[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(K(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,L=L[0])}return K(),L}(_)),$),arguments,[])).length>1?$:$[0]}var l6,y_,fj,yB,C$,zj,Rj,Sj,h8,g6,C5,gj,s8,n8,r8,uj,v6,m6,xB,h6,P$,w_,p8,kj,b4=0,pj,S_,Mj,Tj,wj,yj,xj,Ij,Cj,dj=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],q=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=q:Y===4?G[1]=Object.assign(G[1]||{},q):Y===5?(G[1]=G[1]||{})[$[++X]]=q:Y===6?G[1][$[++X]]+=q+"":Y?(Z=_.apply(q,dj(_,q,j,["",null])),G.push(Z),q[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(q)}return G},Pj,N;var x0=W_(()=>{v6={},m6=[],xB=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h6=Array.isArray;l6=m6.slice,y_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(q){_=q}throw _}},fj=0,yB=function(_){return _!=null&&_.constructor===void 0},P5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Y$({},this.state),typeof _=="function"&&(_=_(Y$({},j),this.props)),_&&Y$(j,_),_!=null&&this.__v&&($&&this._sb.push($),d8(this))},P5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),d8(this))},P5.prototype.render=p6,C$=[],Rj=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Sj=function(_,$){return _.__v.__b-$.__v.__b},c6.__r=0,h8=Math.random().toString(8),g6="__d"+h8,C5="__a"+h8,gj=/(PointerCapture)$|Capture$/i,s8=0,n8=Aj(!1),r8=Aj(!0),uj=0;pj=[],S_=y_,Mj=S_.__b,Tj=S_.__r,wj=S_.diffed,yj=S_.__c,xj=S_.unmount,Ij=S_.__;S_.__b=function(_){w_=null,Mj&&Mj(_)},S_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),Ij&&Ij(_,$)},S_.__r=function(_){Tj&&Tj(_),P$=0;var $=(w_=_.__c).__H;$&&(p8===w_?($.__h=[],w_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(b6),$.__h.some(o8),$.__h=[],P$=0)),p8=w_},S_.diffed=function(_){wj&&wj(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(pj.push($)!==1&&kj===S_.requestAnimationFrame||((kj=S_.requestAnimationFrame)||cB)(mB)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),p8=w_=null},S_.__c=function(_,$){$.some(function(j){try{j.__h.some(b6),j.__h=j.__h.filter(function(G){return!G.__||o8(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],S_.__e(G,j.__v)}}),yj&&yj(_,$)},S_.unmount=function(_){xj&&xj(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{b6(G)}catch(Z){$=Z}}),j.__H=void 0,$&&S_.__e($,j.__v))};Cj=typeof requestAnimationFrame=="function";Pj=new Map;N=lB.bind(t8)});function E1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Q_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function V$(_,$=!1){let j=E1(_);if(j===null)return $;return j==="true"}function V4(_,$=null){let j=E1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function Z2(_){let $=E1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function v3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function NZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function eU(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function _H(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=eU(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),q=parseInt(Z[3],10);if(![X,Y,q].every((K)=>Number.isFinite(K)))return null;let L=`#${[X,Y,q].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:q,hex:L}}function Q4(_){return NZ(_)||_H(_)}function m3(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function X2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function $H(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function jH(_){return $H(_)>0.4?"#000000":"#ffffff"}function UZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function c3(_){return QZ[_]||QZ.default}function GH(_){return _.mode==="auto"?UZ():_.mode}function HZ(_,$){let j=c3(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||F$}function Q$(_,$,j){let G=Q4(_);if(!G)return _;return m3(G,$,j)}function EZ(_,$,j){let G=Q4($);if(!G)return _;let X=NZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:Q$(_.bgPrimary,G,0.08),bgSecondary:Q$(_.bgSecondary,G,0.12),bgHover:Q$(_.bgHover,G,0.16),textPrimary:Q$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:Q$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:Q$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?m3(G,X,0.18):G.hex,warning:Q$(_.warning||F$.warning,G,0.14),danger:Q$(_.danger,G,0.16),success:Q$(_.success,G,0.16)}}function ZH(_,$){let j=Q4(_?.warning);if(j)return j.hex;let G=Q4($==="dark"?L2.warning:F$.warning)||Q4(F$.warning),Z=Q4(_?.accent);if(G&&Z)return m3(G,Z,$==="dark"?0.18:0.14);return $==="dark"?L2.warning:F$.warning}function XH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=Q4(G),X=Z?X2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?X2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=Z?X2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=Z?jH(Z):$==="dark"?"#000000":"#ffffff",K=Z?X2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",Q=ZH(_,$),V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":K,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":L,"--warning-color":Q,"--danger-color":_.danger||F$.danger,"--success-color":_.success||F$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([F,B])=>{if(B)j.style.setProperty(F,B)})}function YH(){if(typeof document>"u")return;let _=document.documentElement;tU.forEach(($)=>_.style.removeProperty($))}function a4(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function FZ(_){let $=v3(F4?.theme||"default"),j=F4?.tint?String(F4.tint).trim():null,G=HZ($,_);if($==="default"&&j)G=EZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?L2.bgPrimary:F$.bgPrimary}function qH(_,$){if(typeof document>"u")return;let j=a4("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=a4("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",FZ("light"));let Z=a4("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",FZ("dark"));let X=a4("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=a4("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=a4("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function LH(){if(typeof window>"u")return;let _={...F4,mode:BZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function KH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function l3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=v3(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=c3(j),X=GH(Z),Y=HZ(j,X);F4={theme:j,tint:G},BZ=X;let q=document.documentElement;q.dataset.theme=X,q.dataset.colorTheme=j,q.dataset.tint=G?String(G):"",q.style.colorScheme=X;let L=Y;if(j==="default"&&G)L=EZ(Y,G,X);if(j==="default"&&!G)YH();else XH(L,X);if(qH(L.bgPrimary,X),LH(),$.persist!==!1)if(Q_(b3,j),G)Q_(q2,G);else Q_(q2,"")}function Y2(){if(c3(F4.theme).mode!=="auto")return;l3(F4,{persist:!1})}function DZ(){if(typeof window>"u")return()=>{};let _=v3(E1(b3)||"default"),$=(()=>{let j=E1(q2);return j?j.trim():null})();if(l3({theme:_,tint:$},{persist:!1}),window.matchMedia&&!u3){let j=window.matchMedia("(prefers-color-scheme: dark)");if(j.addEventListener)j.addEventListener("change",Y2);else if(j.addListener)j.addListener(Y2);return u3=!0,()=>{if(j.removeEventListener)j.removeEventListener("change",Y2);else if(j.removeListener)j.removeListener(Y2);u3=!1}}return()=>{}}function t4(_){if(!_||typeof _!=="object")return;let $=KH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)l3({theme:G||"default",tint:Z},{persist:!1});Q_(b3,G||"default"),Q_(q2,Z||"")}function WZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return UZ()}var b3="piclaw_theme",q2="piclaw_tint",F$,L2,QZ,tU,F4,BZ="light",u3=!1;var m5=W_(()=>{F$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},L2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},QZ={default:{label:"Default",mode:"auto",light:F$,dark:L2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},tU=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],F4={theme:"default",tint:null}});function yZ(_=typeof window<"u"?window:null){return _||null}function V2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function n5(_,$){return`${_}:${$}`}function xZ(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function IZ(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function N4(_){if(!_||typeof _!=="object")return null;return{..._}}function E4(_){if(!_)return null;return U4.find(($)=>$.id===_)||null}function p3(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function CZ(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=E4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function wZ(_,$,j){let G=H4.get(n5(_,$));if(G&&E4(G)?.status==="active")p5(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=xZ(_),X={id:Z,type:_,chatJid:$,startedAt:V2(),detail:N4(j),phases:[],status:"active"};return U4.push(X),IZ(U4,100),H4.set(n5(_,$),Z),p3(Z,"start"),Z}function p5(_,$,j,G,Z){let X=E4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:V2(),detail:N4(G)}),p3(X.id,j);if(X.status=$,X.completedAt=V2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=n5(X.type,X.chatJid);if(H4.get(Y)===X.id)H4.delete(Y);CZ(X.id)}function IH(_=yZ()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=Q2;return Q2}function e4(_=yZ()){return IH(_)}function PZ(_,$,j){return e4().ensureTrace(_,$,j)}function F2(_,$){return e4().getActiveTraceId(_,$)}function _1(_,$,j){e4().markTrace(_,$,j)}function B2(_,$,j="settled",G){let Z=E4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return p5(_,"completed",j,G),!0}function fZ(_,$,j="failed",G){e4().failTrace(_,$,j,G)}function RZ(_,$="cancelled",j){e4().cancelTrace(_,$,j)}function n3(_){return e4().recordRequest(_)}var U4,h5,H4,Q2;var r5=W_(()=>{U4=[],h5=[],H4=new Map;Q2={startTrace(_,$,j){return wZ(_,$,j)},ensureTrace(_,$,j){let G=H4.get(n5(_,$));if(G&&E4(G)?.status==="active")return G;return wZ(_,$,j)},getActiveTraceId(_,$){let j=H4.get(n5(_,$));return j&&E4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=E4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:V2(),detail:N4(j)}),p3(G.id,$)},completeTrace(_,$="settled",j){p5(_,"completed",$,j)},failTrace(_,$,j="failed",G){p5(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){p5(_,"cancelled",$,j)},recordRequest(_){let $=xZ("req");return h5.push({..._,id:$,detail:N4(_.detail)}),IZ(h5,300),$},getTraces(){return U4.map((_)=>({..._,detail:N4(_.detail),phases:_.phases.map(($)=>({...$,detail:N4($.detail)}))}))},getRequests(){return h5.map((_)=>({..._,detail:N4(_.detail)}))},clear(){U4.forEach((_)=>CZ(_.id)),U4.splice(0,U4.length),h5.splice(0,h5.length),H4.clear()},printSummary(){let _={traces:Q2.getTraces(),requests:Q2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});var t5={};Y1(t5,{uploadWorkspaceFile:()=>H2,uploadMedia:()=>$7,updateWorkspaceFile:()=>KE,submitAdaptiveCardAction:()=>j7,streamSidePrompt:()=>XE,stopAutoresearch:()=>tH,steerAgentQueueItem:()=>jE,setWorkspaceVisibility:()=>s5,setAgentThoughtVisibility:()=>qE,sendPeerAgentMessage:()=>dH,sendAgentMessage:()=>D1,searchPosts:()=>PH,saveWorkspaceSettings:()=>s3,saveWebPushSubscription:()=>e3,saveQuickActionsSettings:()=>o3,saveEnvironmentOverride:()=>N2,restoreChatBranch:()=>rH,respondToAgentRequest:()=>_5,reorderAgentQueueItem:()=>GE,renameWorkspaceFile:()=>F7,renameChatJid:()=>nH,renameChatBranch:()=>cH,removeAgentQueueItem:()=>$E,reindexWorkspace:()=>L7,purgeChatBranch:()=>pH,pruneChatBranch:()=>hH,moveWorkspaceEntry:()=>B7,mergeChatBranchIntoParent:()=>lH,getWorkspaceTree:()=>o5,getWorkspaceRawUrl:()=>a5,getWorkspaceIndexStatus:()=>q7,getWorkspaceFileStat:()=>V7,getWorkspaceFileDownloadUrl:()=>E2,getWorkspaceFile:()=>K7,getWorkspaceDownloadUrl:()=>D2,getWorkspaceBranch:()=>Y7,getWebPushPublicKey:()=>t3,getTimeline:()=>g$,getThumbnailUrl:()=>Z7,getThread:()=>fH,getSystemMetrics:()=>i3,getQuickActionsSettings:()=>i5,getPostsByHashtag:()=>d3,getMediaUrl:()=>f1,getMediaText:()=>LE,getMediaInfo:()=>U2,getMediaBlob:()=>X7,getEnvironmentSettings:()=>a3,getChatBranches:()=>bH,getAutoresearchStatus:()=>aH,getAgents:()=>iH,getAgentThought:()=>YE,getAgentStatus:()=>oH,getAgentQueueState:()=>_E,getAgentModels:()=>D4,getAgentContext:()=>sH,getAgentCommands:()=>d5,getActiveChatAgents:()=>uH,forkChatBranch:()=>vH,dismissAutoresearch:()=>eH,deleteWorkspaceFile:()=>N7,deleteWebPushSubscription:()=>_7,deletePost:()=>gH,createWorkspaceFile:()=>Q7,createRootChatSession:()=>mH,createReply:()=>SH,createPost:()=>RH,completeInstanceOobe:()=>ZE,attachWorkspaceFile:()=>VE,addToWhitelist:()=>G7,SSEClient:()=>W2});async function r0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(m_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw n3({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(n3({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function SZ(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function CH(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;Z+=G.decode(Y,{stream:!0});let L=Z.split(`

`);Z=L.pop()||"";for(let K of L){let Q=SZ(K);if(Q)$(Q.event,Q.data)}}Z+=G.decode();let X=SZ(Z);if(X)$(X.event,X.data)}async function g$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return r0(G)}async function d3(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return r0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function PH(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let q=G?`&chat_jid=${encodeURIComponent(G)}`:"",L=Z?`&scope=${encodeURIComponent(Z)}`:"",K=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",Q=Y?.images?"&images=1":"",V=Y?.attachments?"&attachments=1":"";return r0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${L}${K}${Q}${V}`)}async function fH(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return r0(`/thread/${_}${j}`)}async function i3(){return r0("/agent/system-metrics")}async function RH(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return r0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function SH(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return r0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function gH(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return r0(Z,{method:"DELETE"})}async function D1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",q={content:$,thread_id:j,media_ids:G};if(Z==="auto"||Z==="queue"||Z==="steer")q.mode=Z;return r0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(q)})}async function d5(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return r0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function i5(){return r0("/agent/settings/quick-actions")}async function o3(_){return r0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function s3(_){return r0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function a3(){return r0("/agent/settings/environment")}async function N2(_){return r0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function uH(){return r0("/agent/active-chats")}async function bH(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return r0(`/agent/branches${G}`)}async function vH(_,$={}){return r0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function mH(_){return r0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function cH(_,$={}){return r0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function lH(_){return r0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function hH(_){return r0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function pH(_){return r0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function nH(_,$){return r0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function rH(_,$={}){return r0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function dH(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return r0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function t3(){return r0("/agent/push/vapid-public-key")}async function e3(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return r0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function _7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return r0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function iH(){return r0("/agent/roster")}async function oH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/status${$}`)}async function sH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/context${$}`)}async function aH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/autoresearch/status${$}`)}async function tH(_=null,$={}){return r0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function eH(_=null){return r0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function _E(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/queue-state${$}`)}async function $E(_,$=null){let j=await fetch(m_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function jE(_,$=null){let j=await fetch(m_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function GE(_,$,j=null){let G=await fetch(m_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function D4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/models${$}`)}async function ZE(_="provider-ready"){return r0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function $7(_){let $=new FormData;$.append("file",_);let j=await fetch(m_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function _5(_,$,j=null){let G=await fetch(m_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function j7(_){let $=await fetch(m_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function XE(_,$={}){let j=await fetch(m_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await CH(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function G7(_,$){let j=await fetch(m_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function YE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return r0(j)}async function qE(_,$,j){return r0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function f1(_){return`${m_}/media/${_}`}function Z7(_){return`${m_}/media/${_}/thumbnail`}async function U2(_){let $=await fetch(`${m_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function LE(_){let $=await fetch(`${m_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function X7(_){let $=await fetch(`${m_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function o5(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return r0(G)}async function Y7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return r0($)}async function q7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return r0($)}async function L7(_="all"){return r0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function K7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return r0(Z)}async function V7(_){return r0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function KE(_,$){return r0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function VE(_){return r0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function FE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function BE(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function NE(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",m_+$);for(let[q,L]of Object.entries(j||{}))if(L!==void 0&&L!==null)Y.setRequestHeader(q,String(L));Y.upload.onprogress=(q)=>{if(typeof G==="function")G({loaded:q.lengthComputable?q.loaded:0,total:q.lengthComputable?q.total:_.size,lengthComputable:q.lengthComputable})},Y.onload=()=>{try{let q=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(q);else{let L=Error(q.error||`HTTP ${Y.status}`);L.status=Y.status,L.code=q.code,X(L)}}catch{let q=Error(`HTTP ${Y.status}`);q.status=Y.status,X(q)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function UE(_,$="",j={}){let G=BE(),Z=FE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(r3,Number(j.chunkSize)||QE)),Y=Math.max(0,Number(_?.size)||0),q=Math.max(1,Math.ceil(Y/X)),L=0,K=null;for(let Q=0;Q<q;Q+=1){let V=Q*X,F=Math.min(Y,V+X),B=_.slice(V,F),U=B.size;if(K=await NE(B,Z,{"X-Upload-Id":G,"X-Chunk-Index":Q,"X-Chunk-Total":q,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(D)=>{if(typeof j.onProgress!=="function")return;let E=Math.min(Y,L+(D?.loaded||0)),H=Y||1;j.onProgress({loaded:E,total:H,percent:Math.round(E/H*100),chunkIndex:Q,chunkTotal:q})}),L+=U,typeof j.onProgress==="function"){let D=Y||1,E=Y?L:D;j.onProgress({loaded:E,total:D,percent:Math.round(E/D*100),chunkIndex:Q+1,chunkTotal:q})}}return K}async function H2(_,$="",j={}){if(_?.size>r3){let G=(_.size/1048576).toFixed(0),Z=(r3/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await UE(_,$,j)}async function Q7(_,$,j=""){let G=await fetch(m_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function F7(_,$){let j=await fetch(m_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function B7(_,$){let j=await fetch(m_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function N7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return r0($,{method:"DELETE"})}async function s5(_,$=!1){return r0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function a5(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${m_}/workspace/raw?${j.toString()}`}function E2(_){return a5(_,{download:!0})}function D2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${m_}/workspace/download?${j}`}class W2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(m_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var m_="",r3=1073741824,QE=8388608;var g_=W_(()=>{r5()});function j5(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function p1(_={}){if(typeof window>"u")return;let $=j5(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function y7(){if(typeof window>"u")return null;return j5(window.__piclawSettingsRequestedSection)}function A2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=y7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function v$({children:_,className:$=""}){let[j,G]=C(null);return g(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{q$(null,Z)}finally{Z.remove()}}},[]),g(()=>{if(!j)return;j.className=$||"";return},[$,j]),m4(()=>{if(!j)return;q$(_,j);return},[_,j]),null}var k2=W_(()=>{x0()});function m$(_){let $=O4.findIndex((j)=>j.id===_.id);if($>=0)O4[$]=_;else O4.push(_);O4.sort((j,G)=>(j.order??500)-(G.order??500))}function JX(_){let $=O4.findIndex((j)=>j.id===_);if($>=0)O4.splice($,1)}function AX(){return[...O4]}function x7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var O4;var G5=W_(()=>{O4=[]});function bE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(z4,{detail:{enabled:Boolean(_)}}))}function vE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(M2,{detail:{collapsed:Boolean(_)}}))}function X6(_=!1){return V$(kX,_)}function I7(_=!1){return V$(MX,_)}function T2(_,$={}){let j=$.persist!==!1,G=Boolean(_);if(j)Q_(kX,G?"true":"false");return bE(G),G}function mE(){let _=!X6(!1);return T2(_)}function cE(_,$={}){let j=$.persist!==!1,G=Boolean(_);if(j)Q_(MX,G?"true":"false");return vE(G),G}function TX(){let _=!I7(!1);return cE(_)}function wX(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if($==="toggle"){mE();return}if($==="set"||typeof _?.enabled==="boolean")T2(Boolean(_?.enabled))}var kX="piclaw_system_meters_enabled",MX="piclaw_system_meters_collapsed",z4="piclaw-meters-change",M2="piclaw-meters-collapsed-change";var w2=()=>{};function yX(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function xX(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function H$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=yX(_,$);return xX(Z,{min:j,max:G})}function lE(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=H$(_,{fallback:G,min:Z,max:X}),q=Math.abs(yX(j,1))||1,L=Number($)<0?-1:1;return xX(Y+L*q,{min:Z,max:X})}function u_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:q,onChange:L}){let K=Number.isFinite(Number(Z))?Number(Z):H$(_,{fallback:0,min:$,max:j}),[Q,V]=C(String(_??K)),F=u(!1);g(()=>{if(!F.current)V(String(_??K))},[_,K]);let B=P((D)=>{F.current=!1;let E=H$(D,{fallback:K,min:$,max:j});V(String(E)),L?.(E)},[K,$,j,L]),U=P((D)=>{F.current=!1;let E=lE(_,{direction:D,step:G,fallback:K,min:$,max:j});V(String(E)),L?.(E)},[K,j,$,L,G,_]);return N`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${q||"value"}`}
                title=${`Decrease ${q||"value"}`}
                disabled=${Y}
                onClick=${()=>U(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${Q}
                disabled=${Y}
                style=${`width:${X}`}
                onInput=${(D)=>{F.current=!0,V(D.target.value)}}
                onBlur=${(D)=>B(D.target.value)}
                onKeyDown=${(D)=>{if(D.key==="Enter")D.preventDefault(),B(D.target.value),D.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${q||"value"}`}
                title=${`Increase ${q||"value"}`}
                disabled=${Y}
                onClick=${()=>U(1)}
            >+</button>
        </span>
    `}var J4=W_(()=>{x0()});function IX(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function CX({value:_,onChange:$}){let j=u(null),[G,Z]=C(IX(_));g(()=>{Z(IX(_))},[_]);let X=P((Y)=>{let q=Y.target.files?.[0];if(!q)return;let L=new FileReader;L.onload=()=>{let K=L.result;Z(K),$?.(K)},L.readAsDataURL(q)},[$]);return N`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?N`<img src=${G} alt="avatar" />`:N`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function PX(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}function C7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[q,L]=C(""),[K,Q]=C(""),[V,F]=C(32),[B,U]=C(256),[D,E]=C(()=>X6(!1)),[H,k]=C(!1),A=u(""),O=u(null),y=u(!0);g(()=>{return y.current=!0,()=>{y.current=!1}},[]);let x=P((W)=>{let T=PX(W);Z(T.userName),Y(T.userAvatar),L(T.assistantName),Q(T.assistantAvatar),F(T.composeUploadLimitMb),U(T.workspaceUploadLimitMb),A.current=JSON.stringify(T)},[]);g(()=>{x(_||{})},[_,x]),g(()=>{let W=(T)=>{E(Boolean(T?.detail?.enabled))};return window.addEventListener(z4,W),()=>window.removeEventListener(z4,W)},[]);let z=X0(()=>JSON.stringify(PX({userName:G,userAvatar:X,assistantName:q,assistantAvatar:K,composeUploadLimitMb:V,workspaceUploadLimitMb:B})),[G,X,q,K,V,B]);g(()=>{if(z===A.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!y.current)return;let W=document.activeElement;if(W&&W.closest?.(".settings-number-stepper"))return;try{let T=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:z}),I=await T.json().catch(()=>({}));if(!y.current)return;if(!T.ok||!I?.ok||!I?.settings)return;A.current=z,j?.(I.settings),k(!0),setTimeout(()=>{if(y.current)k(!1)},4000)}catch(T){console.warn("[settings/general] Failed to persist general settings snapshot.",T)}},800),()=>{if(O.current)clearTimeout(O.current)}},[z,j]);let J=_?.instanceTotp||{configured:!1,issuer:q||"Piclaw",label:G?`${q||"Piclaw"}:${G}`:q||"Piclaw",secret:"",otpauth:"",qrSvg:""},M=typeof window<"u"&&window.isSecureContext;return N`
        <div class="settings-section">
            ${H&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${CX} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(W)=>Z(W.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${CX} value=${K} onChange=${Q} />
                <input type="text" value=${q} onInput=${(W)=>L(W.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${M?N`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:N`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0; color: var(--error-color, #e55)">
                            ⚠ Not available — requires a secure context (HTTPS or localhost).
                            Access via SSH tunnel or reverse proxy with TLS to enable.
                        </span>
                    </div>
                </div>
            `}

            <h3 style="margin-top:20px">Display</h3>
            <div class="settings-row">
                <label>System meters</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${D}
                        onChange=${()=>{let W=T2(!D);E(W)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${u_}
                    label="compose upload limit"
                    value=${V}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${u_}
                    label="workspace upload limit"
                    value=${B}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${U}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>TOTP setup QR</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${J.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${J.configured?N`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:J.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${J.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${J.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${J.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var fX=W_(()=>{x0();w2();J4()});var SX={};Y1(SX,{SessionsSection:()=>hE});function RX(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function hE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[q,L]=C(4000),[K,Q]=C(3),[V,F]=C(64),[B,U]=C("none"),[D,E]=C(!1),H=u(""),k=u(null),A=u(!0);g(()=>{return A.current=!0,()=>{A.current=!1}},[]);let O=P((x)=>{let z=RX(x);Z(z.sessionAutoRotate),Y(z.sessionMaxSizeMb),L(z.sessionMaxLines),Q(z.sessionMaxCompactions),F(z.toolUseBudget),U(z.sessionIsolation),H.current=JSON.stringify(z)},[]);g(()=>{O(_||{})},[_,O]);let y=X0(()=>JSON.stringify(RX({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:q,sessionMaxCompactions:K,toolUseBudget:V,sessionIsolation:B})),[G,X,q,K,V,B]);return g(()=>{if(y===H.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!A.current)return;let x=document.activeElement;if(x&&x.closest?.(".settings-number-stepper"))return;try{let z=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),J=await z.json().catch(()=>({}));if(!A.current)return;if(!z.ok||!J?.ok||!J?.settings)return;H.current=y,j?.(J.settings),E(!0),setTimeout(()=>{if(A.current)E(!1)},4000)}catch(z){console.warn("[settings/sessions] Failed to persist session settings.",z)}},800),()=>{if(k.current)clearTimeout(k.current)}},[y,j]),N`
        <div class="settings-section">
            ${D&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${G} onChange=${(x)=>Z(x.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${u_}
                    label="max session size"
                    value=${X}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${Y}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${u_}
                    label="tool use budget"
                    value=${V}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${B} onChange=${(x)=>U(x.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var gX=W_(()=>{x0();J4()});var uX={};Y1(uX,{CompactionSection:()=>nE});function pE(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??50,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function P7(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function nE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[q,L]=C(360),[K,Q]=C(50),[V,F]=C(0.5),[B,U]=C(!1),[D,E]=C(120),[H,k]=C([]),[A,O]=C([]),[y,x]=C(!1),z=u(""),J=u(null),M=u(!0);g(()=>{return M.current=!0,()=>{M.current=!1}},[]);let W=P((f)=>{let S=pE(f);Z(S.compactionTimeoutSec),Y(S.compactionBackoffBaseMin),L(S.compactionBackoffMaxMin),Q(S.compactionThresholdPercent),F(S.compactionBackoffDecayFactor),U(S.progressWatchdogEnabled),E(S.progressWatchdogTimeoutSec),k(S.compactionBackoffs),O(S.progressWatchdogPhases),z.current=JSON.stringify({compactionTimeoutSec:S.compactionTimeoutSec,compactionBackoffBaseMin:S.compactionBackoffBaseMin,compactionBackoffMaxMin:S.compactionBackoffMaxMin,compactionThresholdPercent:S.compactionThresholdPercent,compactionBackoffDecayFactor:S.compactionBackoffDecayFactor,progressWatchdogEnabled:S.progressWatchdogEnabled,progressWatchdogTimeoutSec:S.progressWatchdogTimeoutSec})},[]);g(()=>{W(_||{})},[_,W]);let T=X0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:q,compactionThresholdPercent:K,compactionBackoffDecayFactor:V,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:D}),[G,X,q,K,V,B,D]);g(()=>{if(T===z.current)return;if(J.current)clearTimeout(J.current);return J.current=setTimeout(async()=>{if(!M.current)return;let f=document.activeElement;if(f&&f.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let S=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:T}),v=await S.json().catch(()=>({}));if(!M.current)return;if(!S.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to save compaction settings.","error");return}z.current=T,j?.(v.settings),W({..._||{},...v.settings||{}}),$?.("Compaction settings saved.","success"),x(!0),setTimeout(()=>{if(M.current)x(!1),$?.(null)},4000)}catch(S){if(console.warn("[settings/compaction] Failed to persist compaction settings.",S),M.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(J.current)clearTimeout(J.current)}},[T,j,$,W,_]);let I=P(async(f)=>{try{$?.(`Clearing compaction suppression for ${f}…`,"info");let S=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:f})}),v=await S.json().catch(()=>({}));if(!S.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to clear compaction suppression.","error");return}j?.(v.settings),W({..._||{},...v.settings||{}}),$?.(`Cleared compaction suppression for ${f}.`,"success")}catch(S){console.warn("[settings/compaction] Failed to clear compaction suppression.",S),$?.("Failed to clear compaction suppression.","error")}},[W,j,$,_]);return N`
        <div class="settings-section">
            ${y&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${u_}
                    label="compaction threshold"
                    value=${K}
                    min=${10}
                    max=${95}
                    fallback=${50}
                    width="80px"
                    onChange=${Q}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${u_}
                    label="compaction timeout"
                    value=${G}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${Z}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${u_}
                    label="compaction backoff base"
                    value=${X}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${Y}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${u_}
                    label="compaction backoff max"
                    value=${q}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${L}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${u_}
                    label="backoff decay factor"
                    value=${Math.round(V*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(f)=>F(f/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${B} onChange=${(f)=>U(Boolean(f.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${u_}
                    label="watchdog timeout"
                    value=${D}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!B}
                    onChange=${E}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${H.length===0?N`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:N`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Failures</th>
                                <th>Suppressed until</th>
                                <th>Last error</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${H.map((f)=>N`
                                <tr>
                                    <td><code>${f.chatJid}</code></td>
                                    <td>${f.failureCount}</td>
                                    <td>${P7(f.backoffUntil)}</td>
                                    <td title=${f.lastErrorMessage||""}>${f.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>I(f.chatJid)}>
                                            Clear
                                        </button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}

            <h3 style="margin-top:20px">Live watchdog phases</h3>
            ${A.length===0?N`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:N`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Phase</th>
                                <th>Started</th>
                                <th>Last heartbeat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${A.map((f)=>N`
                                <tr>
                                    <td><code>${f.chatJid}</code></td>
                                    <td>${f.phase}</td>
                                    <td>${P7(f.startedAt)}</td>
                                    <td>${P7(f.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var bX=W_(()=>{x0();J4()});function mX(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=iE[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(oE.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function Z5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),q=dE[Y];if(q){G[q]=!0;continue}if(G.key)return null;let L=mX(X);if(!L||L==="escape")return null;G.key=L}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function cX(_){return String(_||"").split(/[\n,]/).map(($)=>Z5($)).filter(($)=>Boolean($))}function l$(_){return _.join(", ")}function R7(){let _=Z2(vX);if(!_||typeof _!=="object")return{};let $={};for(let j of c$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>Z5(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function f7(_){if(Q_(vX,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function lX(_){return rE.get(_)}function Y6(_){let $=R7()[_];if(Array.isArray($))return $;return[...lX(_).defaultBindings]}function hX(_,$){let j=R7(),G=lX(_).defaultBindings,Z=[...new Set($.map((X)=>Z5(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;f7(j)}function S7(_){if(!_){f7({});return}let $=R7();delete $[_],f7($)}function y2(){let _={};for(let $ of c$)_[$.id]=Y6($.id);return _}function sE(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return mX($)||$.toLowerCase()}function aE(_){let $=Z5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function tE(_,$){let j=aE($);if(!j)return!1;if(sE(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function E$(_,$){return Y6($).some((j)=>tE(_,j))}var vX="piclaw_keyboard_shortcuts_v1",c$,rE,dE,iE,oE;var x2=W_(()=>{c$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],rE=new Map(c$.map((_)=>[_.id,_])),dE={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},iE={esc:"escape",return:"enter",spacebar:"space"},oE=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var pX={};Y1(pX,{KeyboardSection:()=>_D});function eE(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function _D({filter:_="",setStatus:$}){let[j,G]=C(()=>{let L=y2();return Object.fromEntries(Object.entries(L).map(([K,Q])=>[K,l$(Q)]))});g(()=>{let L=()=>{let K=y2();G(Object.fromEntries(Object.entries(K).map(([Q,V])=>[Q,l$(V)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",L),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",L)},[]);let Z=X0(()=>c$.filter((L)=>{let K=String(j[L.id]||"");return eE(_,L,K)}),[j,_]),X=(L)=>{let K=String(j[L]||"").trim(),V=(K?K.split(/[\n,]/).map((B)=>B.trim()).filter(Boolean):[]).filter((B)=>!Z5(B));if(V.length>0){$?.(`Invalid shortcut: ${V[0]}. Escape is reserved and cannot be rebound.`,"error");return}let F=cX(K);hX(L,F),G((B)=>({...B,[L]:l$(Y6(L))})),$?.("Keyboard shortcuts saved.","success")},Y=(L)=>{S7(L),G((K)=>({...K,[L]:l$(Y6(L))})),$?.("Keyboard shortcut reset to default.","success")};return N`
        <div class="settings-section">
            <h3>Keyboard</h3>
            <p class="settings-hint">
                Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.
                <code>Escape</code> is reserved for dismiss/abort and cannot be rebound.
            </p>
            <p class="settings-hint">
                <code>/help</code> and typing <code>"</code> outside the compose box open this pane.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:18px; justify-content:flex-end;">
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{S7();let L=y2();G(Object.fromEntries(Object.entries(L).map(([K,Q])=>[K,l$(Q)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((L)=>N`
                    <div class="settings-shortcut-card" key=${L.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${L.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${L.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${l$(L.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[L.id]||""}
                                placeholder=${l$(L.defaultBindings)}
                                onInput=${(K)=>G((Q)=>({...Q,[L.id]:K.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(L.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Y(L.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Z.length===0&&N`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var nX=W_(()=>{x0();x2()});function rX(_,$=g7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function dX(_,$=u7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function X5(){return{refreshIntervalSec:rX(V4(C2,g7),g7),folderPreviewDepth:dX(V4(P2,u7),u7)}}function iX(_={}){let $=X5(),j={refreshIntervalSec:rX(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:dX(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(Q_(C2,String(j.refreshIntervalSec)),Q_(P2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(I2,{detail:{settings:j}}));return j}var I2="piclaw:workspace-client-settings-updated",C2="workspaceRefreshIntervalSec",P2="workspaceFolderPreviewDepth",g7=60,u7=3;var b7=()=>{};var sX={};Y1(sX,{WorkspaceSection:()=>$D});function oX(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function $D({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[q,L]=C(4),[K,Q]=C(5000),[V,F]=C(60),[B,U]=C(3),[D,E]=C(!1),[H,k]=C(!1),A=u(""),O=u(null),y=u(null),x=u(null),z=u(!0);g(()=>{return z.current=!0,()=>{if(z.current=!1,O.current)clearTimeout(O.current);if(y.current)clearTimeout(y.current);if(x.current)clearTimeout(x.current)}},[]);let J=P((T)=>{let I=oX(T),f=X5();Z(I.webTerminalEnabled),Y(I.vncAllowDirect),L(I.treeMaxDepth),Q(I.treeMaxEntries),F(f.refreshIntervalSec),U(f.folderPreviewDepth),A.current=JSON.stringify(I)},[]);g(()=>{J(_||{})},[_,J]);let M=X0(()=>JSON.stringify(oX({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:q,treeMaxEntries:K}})),[G,X,q,K]);g(()=>{if(M===A.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!z.current)return;let T=document.activeElement;if(T&&T.closest?.(".settings-number-stepper"))return;try{let I=await s3(JSON.parse(M));if(!z.current||!I?.ok||!I?.settings)return;if(A.current=M,j?.({workspaceSettings:I.settings}),$?.(null),E(!0),y.current)clearTimeout(y.current);y.current=setTimeout(()=>{if(z.current)E(!1)},4000)}catch(I){$?.(String(I?.message||I),"error")}},800),()=>{if(O.current)clearTimeout(O.current)}},[M,j,$]);let W=P((T)=>{let I=iX(T);if(F(I.refreshIntervalSec),U(I.folderPreviewDepth),k(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(z.current)k(!1)},3000)},[]);return N`
        <div class="settings-section">
            ${D&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${H&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${G} onChange=${(T)=>Z(T.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(T)=>Y(T.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${u_}
                    label="workspace tree max depth"
                    value=${q}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${L}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${u_}
                    label="workspace tree max entries"
                    value=${K}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${Q}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${u_}
                    label="workspace refresh interval"
                    value=${V}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(T)=>W({refreshIntervalSec:T})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${u_}
                    label="folder preview scan depth"
                    value=${B}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(T)=>W({folderPreviewDepth:T})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var aX=W_(()=>{x0();g_();b7();J4()});var tX={};Y1(tX,{EnvironmentSection:()=>jD});function v7(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function jD({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>v7(_||{})),[Y,q]=C({}),[L,K]=C(""),[Q,V]=C(""),[F,B]=C(null);g(()=>{X(v7(_||{})),q({})},[_]);let U=P((O)=>{let y=v7({environmentSettings:O?.settings||O});return X(y),G?.({environmentSettings:y}),q({}),y},[G]),D=P(async()=>{try{let O=await a3();if(O?.ok)U(O.settings);j?.("Environment refreshed.","info")}catch(O){j?.(String(O?.message||O),"error")}},[U,j]),E=P(async(O,y)=>{let x=String(O||"").trim();if(!x)return;B(x);try{let z=await N2({action:"set",name:x,value:String(y??"")});if(z?.ok)U(z.settings);if(j?.(`Saved environment override for ${x}.`,"info"),x===L.trim())K(""),V("")}catch(z){j?.(String(z?.message||z),"error")}finally{B(null)}},[U,L,j]),H=P(async(O)=>{let y=String(O||"").trim();if(!y)return;B(y);try{let x=await N2({action:"clear",name:y});if(x?.ok)U(x.settings);j?.(`Cleared environment override for ${y}.`,"info")}catch(x){j?.(String(x?.message||x),"error")}finally{B(null)}},[U,j]),k=X0(()=>{let O=String($||"").trim().toLowerCase(),y=Array.isArray(Z.variables)?Z.variables:[];if(!O)return y;return y.filter((x)=>{return`${x?.name||""} ${x?.value||""} ${x?.source||""}`.toLowerCase().includes(O)})},[Z.variables,$]),A=P((O,y)=>{q((x)=>({...x||{},[O]:y}))},[]);return N`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${D}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${L}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(O)=>K(O.target.value)}
                    />
                    <input
                        type="text"
                        value=${Q}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(O)=>V(O.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!L.trim()||F===L.trim()}
                        onClick=${()=>E(L,Q)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${k.map((O)=>{let y=String(O?.name||""),x=Object.prototype.hasOwnProperty.call(Y,y)?Y[y]:O.value,z=x!==O.value,J=F===y;return N`
                        <div class="settings-tool-row" key=${y} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${y}>${y}</span>
                            <input
                                type="text"
                                value=${x}
                                spellcheck="false"
                                onInput=${(M)=>A(y,M.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${O.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${O.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${J||!z} onClick=${()=>E(y,x)}>Save</button>
                                <button type="button" disabled=${J||!O.overridden} onClick=${()=>H(y)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${k.length===0&&N`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var eX=W_(()=>{x0();g_()});var _Y={};Y1(_Y,{ProvidersSection:()=>ZD});function GD(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function ZD({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,q]=C({}),L=P((E,H)=>{q((k)=>({...k,[E]:H}))},[]),K=P(async(E)=>{let H=(Y.apiKey||"").trim();if(!H){$?.("API key cannot be empty.","error");return}G(E),$?.(`Configuring ${E}…`,"info");try{let k=JSON.stringify({provider:E,method:"api_key",api_key:H}),A=await D1("default",`/login __step2 ${k}`,null,[]);if(A?.command?.status==="error"){$?.(A.command.message,"error");return}$?.(A?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),Q=P(async(E,H)=>{G(E),$?.(`Configuring ${E}…`,"info");try{let k={provider:E,method:"custom"};for(let y of H.customFields||[])k[y.key]=(Y[y.key]||"").trim();let A=JSON.stringify(k),O=await D1("default",`/login __step2 ${A}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),V=P(async(E)=>{G(E),$?.(`Starting OAuth for ${E}…`,"info");try{let H=JSON.stringify({provider:E}),A=(await D1("default",`/login __step1 ${H}`,null,[]))?.command?.message||"";if(A.includes("http")){let O=A.match(/(https?:\/\/[^\s)]+)/);if(O)window.open(O[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(A,"success")}else $?.(A||`OAuth flow started for ${E}. Check the chat.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[$]),F=P(async(E)=>{if(j)return;G(E),$?.(`Logging out ${E}…`,"info");try{await D1("default",`/logout ${E}`,null,[]),$?.(`Logged out ${E}. Restart may be needed.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[j,$]),B=_||[],U=(E)=>Z===E,D=(E)=>{X((H)=>H===E?null:E),q({})};return N`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${B.map((E)=>N`
                    <div class=${`settings-provider-card${E.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!E.configured&&D(E.id)}>
                            <strong>${E.name}</strong>
                            <span class="settings-provider-id">${E.id}</span>
                            ${E.configured&&N`<span class="settings-tag settings-tag-skill">${GD(E.authType)}</span>`}
                            <div class="settings-provider-card-meta">
                                ${E.hasOAuth&&N`<span class="settings-tag">OAuth</span>`}
                                ${E.hasApiKey&&N`<span class="settings-tag">API Key</span>`}
                                ${E.isCustom&&N`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${E.configured?N`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),F(E.id)}}
                                    >${j===E.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),D(E.id)}}
                                    >Reconfigure</button>
                                `:N`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),D(E.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(E.id)&&N`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${E.hasOAuth&&N`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===E.id}
                                            onClick=${()=>V(E.id)}>
                                            ${j===E.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${E.hasApiKey&&N`
                                    <div class="settings-provider-method">
                                        <div class="settings-row settings-provider-inline-row" style="margin-bottom:6px">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(H)=>L("apiKey",H.target.value)}
                                                placeholder=${E.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===E.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>K(E.id)}>
                                                ${j===E.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${E.isCustom&&N`
                                    <div class="settings-provider-method">
                                        ${(E.customFields||[]).map((H)=>N`
                                            <div class="settings-row settings-provider-inline-row" style="margin-bottom:6px">
                                                <label>${H.label}${H.required?" *":""}</label>
                                                <input type="text" value=${Y[H.key]||""}
                                                    onInput=${(k)=>L(H.key,k.target.value)}
                                                    placeholder=${H.placeholder||""} />
                                            </div>
                                        `)}
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===E.id}
                                            onClick=${()=>Q(E.id,E)}>
                                            ${j===E.id?"Configuring…":"Save configuration"}
                                        </button>
                                    </div>
                                `}
                            </div>
                        `}
                    </div>
                `)}
            </div>
        </div>
    `}var $Y=W_(()=>{x0();g_()});var jY={};Y1(jY,{ModelsSection:()=>KD});function qD(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function LD({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=qD(j)?XD:YD,q=G&&G.length>1?G:["off","minimal","low","medium","high"],L=Math.max(0,q.indexOf(_??"off"));if(!$)return N`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return N`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[q[L]]||q[L]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${q.length-1} step="1" value=${L} disabled=${X}
                    onInput=${(K)=>Z(q[parseInt(K.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${q.map((K,Q)=>N`<span class=${Q===L?"active":""} onClick=${()=>!X&&Z(K)}>${Y[K]||K}</span>`)}
                </div>
            </div>
        </div>
    `}function KD({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[q,L]=C(!1),[K,Q]=C(["off"]),[V,F]=C(!1),B=P(async()=>{let x=await D4();if(j(x),x.thinking_level)Y(x.thinking_level);if(L(Boolean(x.supports_thinking)),Array.isArray(x.available_thinking_levels)&&x.available_thinking_levels.length>0)Q(x.available_thinking_levels);return x},[]);g(()=>{B().catch(()=>j({models:[],model_options:[]}))},[]);let U=P(async(x)=>{if(G)return;Z(!0);try{await D1("default",`/model ${x}`,null,[]),await B()}catch(z){console.error("Failed to switch model:",z)}finally{Z(!1)}},[G,B]),D=P(async(x)=>{if(V)return;F(!0),Y(x);try{let z=await D1("default",`/thinking ${x}`,null,[]);if(z?.command?.thinking_level)Y(z.command.thinking_level);L(z?.command?.supports_thinking!==!1),await B()}catch(z){console.error("Failed to set thinking:",z),await B().catch((J)=>{})}finally{F(!1)}},[V,B]);if(!$)return N`<div class="settings-loading">Loading models\u2026</div>`;let E=$.model_options||[],H=$.current,A=E.find((x)=>x.label===H)?.provider||"",O=_.toLowerCase(),y=O?E.filter((x)=>x.label.toLowerCase().includes(O)||(x.provider||"").toLowerCase().includes(O)):E;return N`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${y.map((x)=>N`
                            <tr class=${x.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${x.label===H} disabled=${G} onChange=${()=>U(x.label)} /></td>
                                <td>${x.name||x.label}</td><td>${x.provider}</td>
                                <td>${x.context_window?(x.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${x.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${y.length===0&&N`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${LD}
                    thinkingLevel=${X}
                    supportsThinking=${q}
                    provider=${A}
                    availableLevels=${K}
                    onSetLevel=${D}
                    disabled=${V||G} />
            </div>
        </div>
    `}var XD,YD;var GY=W_(()=>{x0();g_();XD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},YD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var XY={};Y1(XY,{ThemeSection:()=>VD});function ZY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function VD({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[q,L]=C(""),[K,Q]=C(!1),V=u(""),F=u(null),B=u(!0);g(()=>{return B.current=!0,()=>{B.current=!1}},[]);let U=P((A)=>{let O=ZY(A);Y(O.uiTheme),L(O.uiTint),V.current=JSON.stringify(O)},[]);g(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let D=P((A,O)=>{t4({theme:A,tint:O||null}),Y(A||"default"),L(O||"")},[]),E=X0(()=>JSON.stringify(ZY({uiTheme:X,uiTint:q})),[X,q]);g(()=>{if(E===V.current)return;if(F.current)clearTimeout(F.current);return F.current=setTimeout(async()=>{if(!B.current)return;Q(!0);try{let A=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:E}),O=await A.json().catch(()=>({}));if(!B.current)return;if(!A.ok||!O?.ok||!O?.settings){G?.(O?.error||"Failed to save appearance settings.","error");return}V.current=E,Z?.(O.settings),G?.("Appearance synced across clients.","success")}catch(A){if(!B.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",A),G?.("Failed to save appearance settings.","error")}finally{if(B.current)Q(!1)}},250),()=>{if(F.current)clearTimeout(F.current)}},[E,Z,G]);let H=$||[],k=_||[];return N`
        <div class="settings-section">
            ${K&&N`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>D("default",q)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${q||"#1d9bf0"}
                        onInput=${(A)=>{let O=A.target.value;if(L(O),X==="default")t4({theme:"default",tint:O})}} />
                    ${q&&N`
                        <button class="settings-tint-clear" onClick=${()=>D("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${q||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${H.map((A)=>N`<th class="settings-swatch-header">${A.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${k.filter((A)=>A.name!=="default").map((A)=>N`
                        <tr class=${A.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>D(A.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${A.name===X} onChange=${()=>D(A.name,"")} /></td>
                            <td><strong>${A.label}</strong></td>
                            <td>${A.mode}</td>
                            ${H.map((O)=>{let y=A.colors?.[O];return N`<td class="settings-swatch-cell">
                                    ${y?N`<span class="settings-color-swatch" style=${"background:"+y} title=${y}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var YY=W_(()=>{x0();m5()});function qY(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function Y5(_){return typeof _==="string"&&_.trim().length>0}function m7(_,...$){let j=qY(_);if(!j)return!0;let G=$.map((Z)=>qY(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function LY(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function p$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:LY($.workspaceCommands),slashCommands:LY($.slashCommands)}}function KY(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function QD(_){let $=Array.isArray(_?.commands)?_.commands:[],j=p$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>KY(j.workspaceCommands,Z.id)).filter((Z)=>m7(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function FD(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=Y5(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>m7(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=Y5(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=Y5(Z?.session_name)?Z.session_name.trim():"",q=String(Z?.chat_jid||"").trim();return{key:`agent:${q}`,kind:"agent",title:`@${X}`,subtitle:Y||q,searchText:`@${X} ${Y} ${q}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:q}})}function BD(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=p$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=Y5(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),KY(j.slashCommands,Y)}).filter((X)=>m7(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),q=Y5(X?.description)?X.description.trim():"slash command",L=Y5(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:q,searchText:`${Y} ${q} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:L||"Slash",actionHint:"Insert",commandName:Y}})}function VY(_){return[...FD({agents:_?.agents,query:_?.query}),...QD({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...BD({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var h$;var c7=W_(()=>{h$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var BY={};Y1(BY,{QuickActionsSection:()=>ND});function QY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function FY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function ND({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>h$.map((x)=>x.id)),[X,Y]=C([]),[q,L]=C([]),[K,Q]=C(!0),[V,F]=C(!1),B=P(async()=>{Q(!0);try{let[x,z]=await Promise.all([i5(),d5("web:default").catch(()=>({commands:[]}))]),J=p$(x?.settings),M=Array.isArray(z?.commands)?z.commands:[];L(M),Z(Array.isArray(J.workspaceCommands)?J.workspaceCommands:h$.map((W)=>W.id)),Y(Array.isArray(J.slashCommands)?J.slashCommands:M.map((W)=>String(W?.name||"").trim()).filter(Boolean))}catch(x){$?.(String(x?.message||x),"error")}finally{Q(!1)}},[$]);g(()=>{B()},[B]);let U=X0(()=>FY(G),[G]),D=X0(()=>FY(X),[X]),E=X0(()=>h$.filter((x)=>QY(_,x.label,x.description,...x.keywords||[])),[_]),H=X0(()=>q.filter((x)=>QY(_,x?.name,x?.description,x?.source)),[q,_]),k=P((x)=>{Z((z)=>{let J=new Set((Array.isArray(z)?z:[]).map((M)=>String(M||"").trim()).filter(Boolean));if(J.has(x))J.delete(x);else J.add(x);return h$.map((M)=>M.id).filter((M)=>J.has(M))})},[]),A=P((x)=>{Y((z)=>{let J=new Set((Array.isArray(z)?z:[]).map((M)=>String(M||"").trim()).filter(Boolean));if(J.has(x))J.delete(x);else J.add(x);return q.map((M)=>String(M?.name||"").trim()).filter((M)=>M&&J.has(M))})},[q]),O=P(()=>{Z(h$.map((x)=>x.id)),Y(q.map((x)=>String(x?.name||"").trim()).filter(Boolean))},[q]),y=P(async()=>{if(V)return;F(!0),$?.("Saving quick actions…","info");try{let x=await o3({workspaceCommands:G,slashCommands:X}),z=p$(x?.settings);j?.({quickActions:z}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:z}})),$?.("Quick Actions saved.","success")}catch(x){$?.(String(x?.message||x),"error")}finally{F(!1)}},[j,V,$,X,G]);if(K)return N`<div class="settings-loading">Loading…</div>`;return N`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${O} disabled=${V}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${y} disabled=${V}>
                    ${V?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${E.map((x)=>{let z=U?U.has(x.id.toLowerCase()):!0;return N`
                        <label class="settings-checkbox-row" key=${x.id}>
                            <input type="checkbox" checked=${z} onChange=${()=>k(x.id)} />
                            <div>
                                <div>${x.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x.description}</div>
                            </div>
                        </label>
                    `})}
                ${E.length===0&&N`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${H.map((x)=>{let z=String(x?.name||"").trim(),J=D?D.has(z.toLowerCase()):!0;return N`
                        <label class="settings-checkbox-row" key=${z}>
                            <input type="checkbox" checked=${J} onChange=${()=>A(z)} />
                            <div>
                                <div><code>${z}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&N`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var NY=W_(()=>{x0();g_();c7()});var UY={};Y1(UY,{KeychainSection:()=>ED});function UD(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function ED({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[q,L]=C(!1),[K,Q]=C(""),[V,F]=C(""),[B,U]=C(""),[D,E]=C(""),[H,k]=C(""),[A,O]=C("secret"),[y,x]=C(!1),[z,J]=C({}),[M,W]=C(null),[T,I]=C(null),[f,S]=C(null),v=u(null),c=u(null),h=u(null),$0=P(async()=>{Z(!0),Y(null);try{let j0=await(await fetch("/agent/keychain")).json();if(j0?.ok)j(j0.entries||[]);else Y(j0?.error||"Failed to load keychain.")}catch(i){Y("Failed to load keychain.")}finally{Z(!1)}},[]);g(()=>{$0()},[$0]);let b=P(async()=>{let i=K.trim(),j0=V;if(!i||!j0)return;x(!0);try{let f0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,secret:j0,type:A,username:B.trim()||void 0,userNote:D,agentNote:H})})).json();if(f0?.ok)Q(""),F(""),U(""),E(""),k(""),O("secret"),L(!1),await $0();else Y(f0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{x(!1)}},[K,V,B,D,H,A,$0]),e=P(async(i)=>{try{let O0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i})})).json();if(O0?.ok)I(null),S((f0)=>f0?.name===i?null:f0),await $0();else Y(O0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[$0]),s=P(async(i)=>{let j0=i?.name;if(!j0)return;let O0=z[j0]||{},f0=Object.prototype.hasOwnProperty.call(O0,"userNote")?O0.userNote:i.userNote||"",m0=Object.prototype.hasOwnProperty.call(O0,"agentNote")?O0.agentNote:i.agentNote||"";W(j0);try{let G_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j0,userNote:f0,agentNote:m0})})).json();if(G_?.ok)J((h0)=>{let c0={...h0||{}};return delete c0[j0],c0}),await $0();else Y(G_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{W(null)}},[z,$0]),q0=P((i,j0,O0)=>{J((f0)=>({...f0||{},[i]:{...(f0||{})[i]||{},[j0]:O0}}))},[]),Z0=P(async(i,j0,O0)=>{try{let m0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,master_password:j0||void 0,totp_code:O0||void 0})})).json();if(m0?.ok)S({name:i,phase:"revealed",secret:m0.secret,username:m0.username,masterPassword:j0});else if(m0?.needs_master_password)S((l0)=>({name:i,phase:"password",masterPassword:"",error:l0?.name===i&&l0?.masterPassword?m0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(m0?.needs_totp)S((l0)=>({name:i,phase:"totp",masterPassword:j0,totpCode:"",error:l0?.name===i&&l0?.phase==="totp"&&l0?.totpCode?m0.error:null})),requestAnimationFrame(()=>h.current?.focus());else S({name:i,phase:"error",error:m0?.error||"Failed to reveal."})}catch{S({name:i,phase:"error",error:"Failed to reveal."})}},[]),D0=P((i)=>{if(f?.name===i&&f?.phase==="revealed"){S(null);return}Z0(i,null,null)},[f,Z0]),Q0=P((i)=>{let j0=f?.masterPassword||"";if(!j0)return;Z0(i,j0,null)},[f,Z0]),L0=P((i)=>{let j0=f?.totpCode||"";if(j0.length<6)return;Z0(i,f?.masterPassword,j0)},[f,Z0]),N0=P(async(i)=>{try{await navigator.clipboard.writeText(i)}catch{let j0=document.createElement("textarea");j0.value=i,j0.style.position="fixed",j0.style.opacity="0",document.body.appendChild(j0),j0.select(),document.execCommand("copy"),document.body.removeChild(j0)}},[]);g(()=>{if(q)requestAnimationFrame(()=>v.current?.focus())},[q]);let H0=_.toLowerCase(),y0=X0(()=>{if(!H0)return $;return $.filter((i)=>i.name.toLowerCase().includes(H0)||(i.type||"").toLowerCase().includes(H0)||(i.envVar||"").toLowerCase().includes(H0)||(i.userNote||"").toLowerCase().includes(H0)||(i.agentNote||"").toLowerCase().includes(H0))},[$,H0]);if(G)return N`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return N`
        <div class="settings-section">
            ${X&&N`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${y0.length} entr${y0.length===1?"y":"ies"}${H0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>L(!q)}>
                    ${q?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${q&&N`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${v} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${K} onInput=${(i)=>Q(i.target.value)}
                            class="settings-keychain-input" />
                        <select value=${A} onChange=${(i)=>O(i.target.value)}
                            class="settings-keychain-select">
                            ${HD.map((i)=>N`<option value=${i}>${i}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${V} onInput=${(i)=>F(i.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${B} onInput=${(i)=>U(i.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${b}
                            disabled=${y||!K.trim()||!V}>
                            ${y?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${D} onInput=${(i)=>E(i.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${H} onInput=${(i)=>k(i.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                    </div>
                </div>
            `}

            <div class="settings-keychain-table-wrap">
                <table class="settings-table settings-keychain-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Env var</th>
                            <th>Updated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${y0.length===0&&N`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${H0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${y0.map((i)=>{let j0=f?.name===i.name?f:null,O0=j0?.phase==="revealed",f0=j0?.phase==="password",m0=j0?.phase==="totp",l0=j0?.phase==="error",G_=z[i.name]||{},h0=Object.prototype.hasOwnProperty.call(G_,"userNote")?G_.userNote:i.userNote||"",c0=Object.prototype.hasOwnProperty.call(G_,"agentNote")?G_.agentNote:i.agentNote||"",M0=h0!==(i.userNote||"")||c0!==(i.agentNote||""),p0=M===i.name;return N`
                            <tr class="settings-keychain-row" key=${i.name}>
                                <td class="settings-keychain-name">${i.name}</td>
                                <td><span class="settings-keychain-type-badge">${i.type}</span></td>
                                <td class="settings-keychain-env">${i.envVar?N`<code>$${i.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${UD(i.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${O0?" active":""}`}
                                        onClick=${()=>D0(i.name)}
                                        title=${O0?"Hide secret":"Reveal secret"}>
                                        ${O0?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${T===i.name?N`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>e(i.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>I(null)}>No</button>
                                            </span>
                                        `:N`<button class="settings-keychain-delete-btn" onClick=${()=>I(i.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${i.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${h0}
                                                onInput=${(b0)=>q0(i.name,"userNote",b0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${c0}
                                                onInput=${(b0)=>q0(i.name,"agentNote",b0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!M0||p0} onClick=${()=>s(i)}>
                                            ${p0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${f0&&N`
                                <tr class="settings-keychain-prompt-row" key=${i.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${j0?.masterPassword||""}
                                                onInput=${(b0)=>S((d0)=>({...d0,masterPassword:b0.target.value}))}
                                                onKeyDown=${(b0)=>{if(b0.key==="Enter")Q0(i.name);if(b0.key==="Escape")S(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>Q0(i.name)}
                                                disabled=${!j0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>S(null)}>Cancel</button>
                                            ${j0?.error&&N`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${m0&&N`
                                <tr class="settings-keychain-prompt-row" key=${i.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${h} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${j0?.totpCode||""}
                                                onInput=${(b0)=>S((d0)=>({...d0,totpCode:b0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(b0)=>{if(b0.key==="Enter")L0(i.name);if(b0.key==="Escape")S(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>L0(i.name)}
                                                disabled=${(j0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>S(null)}>Cancel</button>
                                            ${j0?.error&&N`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${O0&&N`
                                <tr class="settings-keychain-reveal-row" key=${i.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${j0.username&&N`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${j0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>N0(j0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${j0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>N0(j0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${l0&&N`
                                <tr class="settings-keychain-reveal-row" key=${i.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${j0.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var HD;var HY=W_(()=>{x0();HD=["secret","token","password","basic"]});var EY={};Y1(EY,{ToolsSection:()=>JD});function JD({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let F={};for(let B of Z)F[B.name]=!0;return F}),q=P((F)=>{Y((B)=>({...B,[F]:!B[F]}))},[]),L=j?.searchMatchMode||"or",K=P(async()=>{let F=L==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:F})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[L,G]),Q=$.toLowerCase(),V=X0(()=>{if(!Q)return Z;return Z.map((F)=>{let B=F.tools.filter((U)=>U.name.toLowerCase().includes(Q)||F.name.toLowerCase().includes(Q)||(U.summary||"").toLowerCase().includes(Q));return B.length>0?{...F,tools:B}:null}).filter(Boolean)},[Z,Q]);if(Z.length===0)return N`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return N`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${L==="and"} onChange=${K} />
                        <span class="settings-hint" style="margin:0">
                            ${L==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${V.map((F)=>{let B=X[F.name]!==!1;return N`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>q(F.name)} />
                            <span class="settings-toolset-icon">${DD[F.name]||zD}</span>
                            <strong>${F.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${F.description}</span>
                    </div>
                    ${B&&N`<div class="settings-tool-list">${F.tools.map((U)=>N`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${OD[U.kind]||"?"}</span>
                            ${U.summary&&N`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${WD[U.name]||F.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${V.length===0&&N`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var DD,WD,OD,zD;var DY=W_(()=>{x0();DD={core:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},WD={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",list_internal_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},OD={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},zD=N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var WY={};Y1(WY,{AddonsSection:()=>AD});function AD({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,q]=C(null),[L,K]=C(!1),[Q,V]=C({runtime:"",windowsNative:!1}),[F,B]=C([]),[U,D]=C([]);function E(){let M=new URLSearchParams;try{let T=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),I=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((S)=>S.trim()).filter(Boolean),f=localStorage.getItem("piclaw_addons_repo_url");if(T)M.append("catalog_url",T);for(let S of I)M.append("catalog_url",S);if(f)M.set("repo_url",f)}catch(T){}let W=M.toString();return W?`?${W}`:""}let H=P(async()=>{try{let[M,W]=await Promise.all([fetch(`/agent/addons${E()}`),fetch("/agent/settings-data")]),T=await M.json();if(T.error)throw Error(T.error);G(T.addons||[]),B(T.sources||[]),D(T.failed_sources||[]);let I=await W.json().catch(()=>({})),f=typeof I?.runtimePlatform==="string"?I.runtimePlatform:"";V({runtime:f,windowsNative:f==="win32"})}catch(M){G(null),_?.(String(M.message||M),"error")}finally{X(!1)}},[_]);g(()=>{H()},[]);let k=P(async(M)=>{if(Y)return;q({slug:M,action:"install"}),_?.(`Installing ${M}…`,"info");try{let T=await(await fetch(`/agent/addons/install${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:M})})).json();if(T.error){_?.(T.error,"error");return}K(!0);let I=[T.message,T.warning].filter(Boolean).join(" ");_?.(I||"Add-on installed.","success"),await H()}catch(W){_?.(String(W.message||W),"error")}finally{q(null)}},[Y,H,_]),A=P(async(M)=>{if(Y)return;q({slug:M,action:"remove"}),_?.(`Removing ${M}…`,"info");try{let T=await(await fetch(`/agent/addons/uninstall${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:M})})).json();if(T.error){_?.(T.error,"error");return}K(!0);let I=[T.message,T.warning].filter(Boolean).join(" ");_?.(I||"Add-on removed.","success"),await H()}catch(W){_?.(String(W.message||W),"error")}finally{q(null)}},[Y,H,_]),O=P(async()=>{if(Y)return;q({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let W=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(W.error){_?.(W.error,"error"),q(null);return}_?.(W.message||"Restarting piclaw…","success"),K(!1),(async(I=30,f=2000)=>{for(let S=0;S<I;S++){await new Promise((v)=>setTimeout(v,f));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await H(),q(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(v){}}q(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(M){_?.(String(M.message||M),"error"),q(null)}},[Y,_,H]);if(Z)return N`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return N`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let y=$.toLowerCase(),x=y?j.filter((M)=>M.slug.toLowerCase().includes(y)||(M.description||"").toLowerCase().includes(y)||(M.tags||[]).some((W)=>W.toLowerCase().includes(y))):j,z=Y?.slug||null,J=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return N`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${F.length<=1?N`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:N`${F.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${U.length>0&&N`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${U.length} catalog source${U.length>1?"s":""}:
                            ${U.map((M)=>N` <code style="font-size:0.82em;word-break:break-all">${M}</code>`)}
                        </div>
                    `}
                    ${F.length>1&&N`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${F.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${F.map((M)=>N`<li style="word-break:break-all"><code>${M}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${Q.windowsNative&&N`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${Y&&N`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${J}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${J}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${x.map((M)=>{let W=(M.skills||[]).length>0,T=M.type==="extension",I=W&&T?"extension + skill":W?"skill":"extension",f=W&&!T?"settings-tag-skill":"",S=typeof M.homepage==="string"&&M.homepage.trim()?M.homepage.trim():"";return N`
                    <div class=${`settings-addon-card${M.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${S?N`<a class="settings-addon-name-link" href=${S} target="_blank" rel="noopener noreferrer">${M.slug}</a>`:N`<strong>${M.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${f}`}>${I}</span>
                            <span class="settings-addon-version">${M.installed?M.installedVersion||"?":M.version||""}</span>
                            ${M.installKind&&N`<span class="settings-tag">${M.installKind}</span>`}
                            ${M.hasUpdate&&N`<span class="settings-tag settings-tag-skill">\u2191 ${M.version}</span>`}
                            <div class="settings-addon-actions">
                                ${M.installed?N`
                                    ${M.hasUpdate&&N`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>k(M.slug)}>${z===M.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>A(M.slug)}>${z===M.slug?"…":"Remove"}</button>
                                `:N`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>k(M.slug)}>${z===M.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${M.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(M.tags||[]).map((v)=>N`<span class="settings-tag">${v}</span>`)}${(M.skills||[]).map((v)=>N`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${v}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${x.length===0&&N`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${L&&N`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${O}>Restart Now</button>
                </div>
            `}
        </div>
    `}var OY=W_(()=>{x0()});var ID={};function l7(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function f2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function kD(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function MD(_,$){try{localStorage.setItem(_,$)}catch(j){}}function TD(_,$,j,G){try{return H$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return H$($,{fallback:$,min:j,max:G})}}function wD(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function yD(){let[_,$]=C(()=>l7("piclaw_vim_mode",!1)),[j,G]=C(()=>l7("piclaw_show_whitespace",!0)),[Z,X]=C(()=>l7("piclaw_md_live_preview",!0)),[Y,q]=C(()=>TD("piclaw_editor_font_size",13,10,24)),[L,K]=C(()=>kD("piclaw_editor_font_family","")),Q=P((V,F,B)=>{let U=!F;B(U),f2(V,U)},[]);return N`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let V=!_;$(V),f2("piclaw_vim_mode",V)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let V=!j;G(V),f2("piclaw_show_whitespace",V)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let V=!Z;X(V),f2("piclaw_md_live_preview",V)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${u_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(V)=>{q(V),wD("piclaw_editor_font_size",V)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${L}
                    onInput=${(V)=>{let F=V.target.value;K(F),MD("piclaw_editor_font_family",F)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var xD;var zY=W_(()=>{x0();G5();J4();xD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;m$({id:"editor",label:"Editor",icon:xD,component:yD,order:150})});var SD={};function JY(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function AY(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function CD(_,$,j,G){try{return H$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return H$($,{fallback:$,min:j,max:G})}}function PD(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function fD(){let[_,$]=C(()=>JY("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>CD("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>JY("piclaw_mindmap_animate",!0));return N`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),AY("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${u_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),PD("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),AY("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var RD;var kY=W_(()=>{x0();G5();J4();RD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;m$({id:"mindmap",label:"Mind Map",icon:RD,component:fD,order:170})});var bD={};function h7(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function p7(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function n7(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function r7(_,$){try{localStorage.setItem(_,$)}catch(j){}}function gD(){let[_,$]=C(()=>h7("piclaw_dev_mode",!1)),[j,G]=C(()=>n7("piclaw_addons_catalog_url","")),[Z,X]=C(()=>n7("piclaw_addons_catalog_urls","")),[Y,q]=C(()=>n7("piclaw_addons_repo_url","")),[L,K]=C(()=>h7("piclaw_debug_sse",!1)),[Q,V]=C(()=>h7("piclaw_debug_tool_calls",!1)),F=P(()=>{let B=!_;$(B),p7("piclaw_dev_mode",B)},[_]);return N`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${F} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&N`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(B)=>{let U=B.target.value;G(U),r7("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(B)=>{let U=B.target.value;X(U),r7("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(B)=>{let U=B.target.value;q(U),r7("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${L}
                        onChange=${()=>{let B=!L;K(B),p7("piclaw_debug_sse",B)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${Q}
                        onChange=${()=>{let B=!Q;V(B),p7("piclaw_debug_tool_calls",B)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var uD;var MY=W_(()=>{x0();G5();uD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;m$({id:"developer",label:"Developer",icon:uD,component:gD,order:900})});var IY={};Y1(IY,{openSettingsDialog:()=>GW,SettingsDialogContent:()=>xY,SettingsDialog:()=>jW});function L6(_){q6.push({ts:performance.now(),label:_})}function vD(){if(!q6.length)return;let _=q6[0].ts,$=q6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}q6.length=0}function lD(_){let $=g2.get(_);if($)return Promise.resolve($);let j=R2.get(_);if(j)return j;let G=mD[_]().then((Z)=>{return g2.set(_,Z),R2.delete(_),Z}).catch((Z)=>{throw R2.delete(_),Z});return R2.set(_,G),G}function S2(_="Loading…"){return N`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function xY({onClose:_}){L6("SettingsDialogContent-render-start");let[$,j]=C(()=>y7()||"general"),[G,Z]=C(TY),[X,Y]=C(null),[q,L]=C(""),[,K]=C(0),[Q,V]=C(()=>Object.fromEntries(g2.entries())),[F,B]=C(null),[U,D]=C({compact:!1,narrow:!1}),E=u(null),H=u(null);g(()=>{L6("SettingsDialogContent-mounted"),vD()},[]),g(()=>{let W=(T)=>{if(T.key==="Escape")_()};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[_]),g(()=>{let W=(T)=>{let I=typeof T?.detail?.section==="string"?T.detail.section.trim():"";if(I)j(I),L("")};return window.addEventListener("piclaw:open-settings",W),()=>window.removeEventListener("piclaw:open-settings",W)},[]),g(()=>{let W=()=>K((T)=>T+1);return window.addEventListener("piclaw:settings-panes-changed",W),()=>window.removeEventListener("piclaw:settings-panes-changed",W)},[]),g(()=>{fetch("/agent/settings-data").then((W)=>W.json()).then((W)=>{TY=W,Z(W)}).catch(()=>Z({}))},[]),g(()=>{let W=H.current;if(!W)return;let T=()=>{let I=W.clientWidth||0;D((f)=>{let S={compact:I>0&&I<=860,narrow:I>0&&I<=720};return f.compact===S.compact&&f.narrow===S.narrow?f:S})};if(T(),typeof ResizeObserver==="function"){let I=new ResizeObserver(()=>T());return I.observe(W),()=>I.disconnect()}return window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);let k=AX(),A=[...yY,...k.map((W)=>({id:W.id,label:W.label,icon:W.icon,searchable:W.searchable||!1,placeholder:W.searchPlaceholder,order:W.order??500,isExtension:!0,component:W.component}))].sort((W,T)=>(W.order??500)-(T.order??500)),O=A.find((W)=>W.id===$)||yY.find((W)=>W.id===$);g(()=>{if(O?.searchable)requestAnimationFrame(()=>E.current?.focus())},[$]),g(()=>{if(O?.isExtension){B(null);return}let W=!1;if(Q[$]){B(null);return}return B($),lD($).then((T)=>{if(W)return;V((I)=>I?.[$]?I:{...I||{},[$]:T})}).catch((T)=>{if(W)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,T)}).finally(()=>{if(!W)B((T)=>T===$?null:T)}),()=>{W=!0}},[$,O?.isExtension,Q]);let y=P((W,T="info")=>{Y(W?{text:W,type:T}:null)},[]),x=P((W)=>{j(W),L("");let T=cD[W];if(T&&!wY.has(W))wY.add(W),T().then(()=>K((I)=>I+1)).catch((I)=>{})},[]),z=P((W)=>{Z((T)=>({...T||{},...W||{}}))},[]),J=()=>{if(O?.isExtension){if(!O.component)return S2("Loading pane…");let T=O.component;return N`<${T} filter=${q} />`}let W=Q[$];if(!W||F===$)return S2(`Loading ${O?.label||"settings"}…`);switch($){case"general":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${z} />`;case"sessions":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${z} />`;case"compaction":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${z} />`;case"keyboard":return N`<${W} filter=${q} setStatus=${y} />`;case"workspace":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${z} />`;case"environment":return N`<${W} settingsData=${G} filter=${q} setStatus=${y} mergeSettingsData=${z} />`;case"providers":return N`<${W} providers=${G?.providers} setStatus=${y} />`;case"models":return N`<${W} filter=${q} />`;case"theme":return N`<${W} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${y} mergeSettingsData=${z} />`;case"quick-actions":return N`<${W} filter=${q} setStatus=${y} mergeSettingsData=${z} />`;case"keychain":return N`<${W} filter=${q} />`;case"tools":return N`<${W} toolsets=${G?.toolsets} filter=${q} settingsData=${G} mergeSettingsData=${z} />`;case"addons":return N`<${W} setStatus=${y} filter=${q} />`;default:return S2("Loading settings…")}},M=!O;return L6("SettingsDialogContent-render-end"),N`
        <div class="settings-dialog-backdrop" onClick=${(W)=>{if(W.target===W.currentTarget)_()}}>
            <div ref=${H} class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${O?.searchable&&N`
                        <input ref=${E} type="text" class="settings-header-filter"
                            placeholder=${O.placeholder||"Filter…"}
                            value=${q} onInput=${(W)=>L(W.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${A.map((W,T)=>{let I=T>0&&!A[T-1].isExtension,f=W.isExtension&&I;return N`
                                ${f&&N`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${W.id===$?"active":""}`} onClick=${()=>x(W.id)}>
                                    <span class="settings-nav-icon">${W.icon}</span>
                                    <span class="settings-nav-label">${W.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${M?S2("Loading settings…"):J()}
                    </main>
                </div>
                ${X&&N`
                    <div class=${`settings-status-bar settings-status-bar-${X.type}`}>
                        ${X.type==="info"&&N`<span class="settings-spinner"></span>`}
                        <span>${X.text}</span>
                        ${X.type!=="info"&&N`<button class="settings-status-dismiss" onClick=${()=>Y(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function jW(){let[_,$]=C(!1);if(g(()=>{let j=(Z)=>{let X=j5(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=A2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return N`<${v$} className="settings-portal"><${xY} onClose=${()=>$(!1)} /><//>`}function GW(_={}){p1(_)}var q6,TY=null,g2,R2,mD,cD,wY,hD,pD,nD,rD,dD,iD,oD,sD,aD,tD,eD,_W,$W,yY;var CY=W_(()=>{x0();k2();G5();fX();q6=[];L6("module-eval-start");L6("imports-done");g2=new Map,R2=new Map;g2.set("general",C7);mD={general:()=>Promise.resolve(C7),sessions:()=>Promise.resolve().then(() => (gX(),SX)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => (bX(),uX)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (nX(),pX)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (aX(),sX)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (eX(),tX)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => ($Y(),_Y)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (GY(),jY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (YY(),XY)).then((_)=>_.ThemeSection),"quick-actions":()=>Promise.resolve().then(() => (NY(),BY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (HY(),UY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (DY(),EY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (OY(),WY)).then((_)=>_.AddonsSection)},cD={"editor-settings":()=>Promise.resolve().then(() => (zY(),ID)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (kY(),SD)).then(()=>{}),developer:()=>Promise.resolve().then(() => (MY(),bD)).then(()=>{})},wY=new Set;hD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,pD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,nD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,rD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,dD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,iD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,oD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,sD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,aD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,tD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,eD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,_W=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,$W=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,yY=[{id:"general",label:"General",icon:hD,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:pD,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:nD,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:iD,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:rD,searchable:!1,order:15},{id:"environment",label:"Environment",icon:dD,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:oD,searchable:!1,order:20},{id:"models",label:"Models",icon:sD,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:aD,searchable:!1,order:40},{id:"quick-actions",label:"Quick Actions",icon:eD,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:_W,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:tD,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:$W,searchable:!0,placeholder:"Filter add-ons…",order:90}]});x0();class oj{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var Y_=new oj;var n6=null,j3=null;function hB(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function sj(){if(j3)return Promise.resolve(j3);if(!n6)n6=import(hB()).then((_)=>{return j3=_,_}).catch((_)=>{throw n6=null,_});return n6}class aj{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await sj();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var G3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new aj(_,$)}};function Z3(){sj().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function tj(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function r6(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var ej="piclaw:editor-popout:",pB=300000;function _G(_){try{return _?.localStorage??null}catch{return null}}function nB(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function $G(_){return typeof _==="string"?_.trim():""}function jG(_){return(typeof _==="string"?_.trim():"")||null}function GG(_){return typeof _==="string"?_:void 0}function ZG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function XG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function c4(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function rB(_,$=globalThis,j=Date.now()){let G=_G($),Z=$G(_?.path);if(!G||!Z)return null;let X={path:Z,content:GG(_?.content),mtime:ZG(_?.mtime),paneOverrideId:jG(_?.paneOverrideId),viewState:XG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let q=nB(j);try{return G.setItem(`${ej}${q}`,JSON.stringify(X)),q}catch{return null}}function X3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=_G($);if(!G||!Z)return null;let X=`${ej}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;r6(Z,X);try{let q=JSON.parse(Y),L=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(L+pB<j)return null;let K=$G(q?.path);if(!K)return null;return{path:K,content:GG(q?.content),mtime:ZG(q?.mtime),paneOverrideId:jG(q?.paneOverrideId),viewState:XG(q?.viewState),capturedAt:L}}catch{return null}}function d6(_,$=globalThis,j=Date.now()){let G=rB(_,$,j);return G?{editor_popout:G}:null}function J1(_){try{return _(),!0}catch($){return!1}}function YG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:q,resizeObserver:L}=_;J1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),J1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),J1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),J1(()=>{q?.disconnect?.()}),J1(()=>{L?.disconnect?.()})}function qG(_){_.syncHostLayout(),J1(()=>{_.terminal?.renderer?.remeasureFont?.()}),J1(()=>{_.fitAddon?.fit?.()}),J1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function LG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)J1(()=>{j($)});return J1(()=>{G?.close?.()}),J1(()=>{Z?.dispose?.()}),J1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function b1(_){try{return _(),!0}catch($){return!1}}function KG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:q}=_;if(b1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let L=j?.querySelector?.(".terminal-live-host");if(L&&typeof L==="object"&&"style"in L)L.style.backgroundColor=Z.background,L.style.color=Z.foreground;let K=j?.querySelector?.("canvas");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=Z.background,K.style.color=Z.foreground}),b1(()=>{if(G?.options)G.options.theme=Z}),X)b1(()=>{G?.reset?.()});b1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),b1(()=>{G?.loadFonts?.()}),b1(()=>{G?.renderer?.remeasureFont?.()}),b1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),b1(()=>{q?.()}),b1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),b1(()=>{G?.refresh?.()})}var dB="/static/js/vendor/ghostty-web.js",iB="/static/js/vendor/ghostty-vt.wasm",h4="piclaw://terminal",oB='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',sB='400 13px "FiraCode Nerd Font Mono"',aB='700 13px "FiraCode Nerd Font Mono"',UG="x-piclaw-terminal-client",VG="piclaw_terminal_client",tB={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},eB={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},i6=null,Y3=null;function _N(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function $N(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(iB,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!_N(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function jN(){let $=await import(new URL(dB,window.location.origin).href);if(!i6)i6=$N(()=>Promise.resolve($.init?.())).catch((j)=>{throw i6=null,j});return await i6,$}async function GN(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!Y3)Y3=Promise.allSettled([document.fonts.load(sB),document.fonts.load(aB),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await Y3}function QG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function q3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(VG)||"").trim():"";if(j)return j;let G=QG(_);return $?.setItem?.(VG,G),G}catch($){return QG(_)}}async function ZN(_=q3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[UG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function XN(_=q3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[UG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function YN(_,$=null,j=q3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function qN(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function X4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function l4(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function FG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function f5(_,$){let j=FG(_),G=FG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function HG(_){let $=l4(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return f5($,j)>=f5($,G)?"#ffffff":"#000000"}function o6(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function BG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function t_(_,$,j=4.5){let G=l4(_),Z=l4($);if(!G||!Z)return $;if(f5(G,Z)>=j)return o6(Z);let X=l4(HG(_));if(!X)return o6(Z);let Y=X,q=1,L=0,K=1;for(let F=0;F<14;F+=1){let B=(L+K)/2,U=BG(Z,X,B);if(f5(G,U)>=j)Y=U,q=B,K=B;else L=B}let Q=o6(Y),V=l4(Q);while(V&&f5(G,V)<j&&q<1)q=Math.min(1,q+0.01),Q=o6(BG(Z,X,q)),V=l4(Q);return Q}function LN(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function NG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=qN(_,$),G=j?eB:tB,Z=X4("--bg-primary",j?"#000000":"#ffffff",$),X=X4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=t_(Z,X||HG(Z),7),q=X4("--accent-color","#1d9bf0",$),L=X4("--danger-color",j?"#ff7b72":"#cf222e",$),K=X4("--success-color",j?"#7ee787":"#1a7f37",$),Q=X4("--bg-hover",j?"#1d1f23":"#e8ebed",$),V=X4("--accent-soft-strong",LN(q,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:t_(Z,q,3),cursorAccent:Z,selectionBackground:V,selectionForeground:Y,black:t_(Z,Q,3),red:t_(Z,L,4.5),green:t_(Z,K,4.5),yellow:t_(Z,G.yellow,4.5),blue:t_(Z,q,4.5),magenta:t_(Z,G.magenta,4.5),cyan:t_(Z,G.cyan,4.5),white:Y,brightBlack:t_(Z,G.brightBlack,3),brightRed:t_(Z,G.brightRed,4.5),brightGreen:t_(Z,G.brightGreen,4.5),brightYellow:t_(Z,G.brightYellow,4.5),brightBlue:t_(Z,G.brightBlue,4.5),brightMagenta:t_(Z,G.brightMagenta,4.5),brightCyan:t_(Z,G.brightCyan,4.5),brightWhite:Y}}class L3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=c4("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await jN();if(await GN(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:oB,fontSize:13,theme:NG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);await j.open($),$.__terminal=j,this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=NG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;KG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=XN().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await ZN();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(YN($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){YG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){qG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=LG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var K3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new L3(_,$)}},V3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===h4?1e4:!1},mount(_,$){return new L3(_,$)}};function I1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function s6(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function EG(_,$={}){if(I1($))return null;if(s6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:KN(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function Q3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function F3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let q=_.document.createElement("p");if(q.setAttribute("style","margin: 0; line-height: 1.5;"),q.textContent=G,X.appendChild(Y),X.appendChild(q),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function B3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function N3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function A1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function U3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function DG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,q]of Object.entries(X)){let L=String(Y||"").trim();if(!L)continue;if(q===null||q===void 0||q==="")G.searchParams.delete(L);else G.searchParams.set(L,String(q))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function KN(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function VN(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function WG(_,$={}){if(I1($))return null;if(s6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:VN(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function Y4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function QN(_){try{return JSON.parse(_)}catch{return null}}function FN(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function BN(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function OG(_){try{return _?.close?.(),!0}catch($){return!1}}class H3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;OG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=BN($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||QN;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,OG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=FN($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var R5=()=>{throw Error("Operation requires compiling with --exportRuntime")},NN=typeof BigUint64Array<"u",S5=Symbol();var UN=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function zG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return UN.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function JG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return zG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,q,L){let K=$.memory||G.memory;throw Error(`abort: ${j(K,X)} at ${j(K,Y)}:${q}:${L}`)},G.trace=G.trace||function(X,Y,...q){let L=$.memory||G.memory;console.log(`trace: ${j(L,X)}${Y?" ":""}${q.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function AG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||R5,Y=j.__pin||R5,q=j.__unpin||R5,L=j.__collect||R5,K=j.__rtti_base,Q=K?(W)=>W[K>>>2]:R5;_.__new=X,_.__pin=Y,_.__unpin=q,_.__collect=L;function V(W){let T=new Uint32Array(G.buffer);if((W>>>=0)>=Q(T))throw Error(`invalid id: ${W}`);return T[(K+4>>>2)+W]}function F(W){let T=V(W);if(!(T&7))throw Error(`not an array: ${W}, flags=${T}`);return T}function B(W){return 31-Math.clz32(W>>>6&31)}function U(W){if(W==null)return 0;let T=W.length,I=X(T<<1,2),f=new Uint16Array(G.buffer);for(let S=0,v=I>>>1;S<T;++S)f[v+S]=W.charCodeAt(S);return I}_.__newString=U;function D(W){if(W==null)return 0;let T=new Uint8Array(W),I=X(T.length,1);return new Uint8Array(G.buffer).set(T,I),I}_.__newArrayBuffer=D;function E(W){if(!W)return null;let T=G.buffer;if(new Uint32Array(T)[W+-8>>>2]!==2)throw Error(`not a string: ${W}`);return zG(T,W)}_.__getString=E;function H(W,T,I){let f=G.buffer;if(I)switch(W){case 2:return new Float32Array(f);case 3:return new Float64Array(f)}else switch(W){case 0:return new(T?Int8Array:Uint8Array)(f);case 1:return new(T?Int16Array:Uint16Array)(f);case 2:return new(T?Int32Array:Uint32Array)(f);case 3:return new(T?BigInt64Array:BigUint64Array)(f)}throw Error(`unsupported align: ${W}`)}function k(W,T=0){let I=T,f=F(W),S=B(f),v=typeof I!=="number",c=v?I.length:I,h=X(c<<S,f&4?W:1),$0;if(f&4)$0=h;else{Y(h);let b=X(f&2?16:12,W);q(h);let e=new Uint32Array(G.buffer);if(e[b+0>>>2]=h,e[b+4>>>2]=h,e[b+8>>>2]=c<<S,f&2)e[b+12>>>2]=c;$0=b}if(v){let b=H(S,f&2048,f&4096),e=h>>>S;if(f&16384)for(let s=0;s<c;++s)b[e+s]=I[s];else b.set(I,e)}return $0}_.__newArray=k;function A(W){let T=new Uint32Array(G.buffer),I=T[W+-8>>>2],f=F(I),S=B(f),v=f&4?W:T[W+4>>>2],c=f&2?T[W+12>>>2]:T[v+-4>>>2]>>>S;return H(S,f&2048,f&4096).subarray(v>>>=S,v+c)}_.__getArrayView=A;function O(W){let T=A(W),I=T.length,f=Array(I);for(let S=0;S<I;S++)f[S]=T[S];return f}_.__getArray=O;function y(W){let T=G.buffer,I=new Uint32Array(T)[W+-4>>>2];return T.slice(W,W+I)}_.__getArrayBuffer=y;function x(W){if(!Z)throw Error("Operation requires compiling with --exportTable");let T=new Uint32Array(G.buffer)[W>>>2];return Z.get(T)}_.__getFunction=x;function z(W,T,I){return new W(J(W,T,I))}function J(W,T,I){let f=G.buffer,S=new Uint32Array(f);return new W(f,S[I+4>>>2],S[I+8>>>2]>>>T)}function M(W,T,I){_[`__get${T}`]=z.bind(null,W,I),_[`__get${T}View`]=J.bind(null,W,I)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((W)=>{M(W,W.name,31-Math.clz32(W.BYTES_PER_ELEMENT))}),NN)[BigUint64Array,BigInt64Array].forEach((W)=>{M(W,W.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,EN(j,_)}function kG(_){return typeof Response<"u"&&_ instanceof Response}function HN(_){return _ instanceof WebAssembly.Module}async function E3(_,$={}){if(kG(_=await _))return a6(_,$);let j=HN(_)?_:await WebAssembly.compile(_),G=JG($),Z=await WebAssembly.instantiate(j,$),X=AG(G,Z);return{module:j,instance:Z,exports:X}}async function a6(_,$={}){if(!WebAssembly.instantiateStreaming)return E3(kG(_=await _)?_.arrayBuffer():_,$);let j=JG($),G=await WebAssembly.instantiateStreaming(_,$),Z=AG(j,G.instance);return{...G,exports:Z}}function EN(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let K=X.shift();if(!Object.hasOwn(Y,K))Y[K]={};Y=Y[K]}let q=X[0],L=q.indexOf("#");if(L>=0){let K=q.substring(0,L),Q=Y[K];if(typeof Q>"u"||!Q.prototype){let V=function(...F){return V.wrap(V.prototype.constructor(0,...F))};if(V.prototype={valueOf(){return this[S5]}},V.wrap=function(F){return Object.create(V.prototype,{[S5]:{value:F,writable:!1}})},Q)Object.getOwnPropertyNames(Q).forEach((F)=>Object.defineProperty(V,F,Object.getOwnPropertyDescriptor(Q,F)));Y[K]=V}if(q=q.substring(L+1),Y=Y[K].prototype,/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4))){let V=_[G.replace("set:","get:")],F=_[G.replace("get:","set:")];Object.defineProperty(Y,q,{get(){return V(this[S5])},set(B){F(this[S5],B)},enumerable:!0})}}else if(q==="constructor")(Y[q]=function(...V){return j(V.length),Z(...V)}).original=Z;else(Y[q]=function(...V){return j(V.length),Z(this[S5],...V)}).original=Z}else if(/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4)))Object.defineProperty(Y,q,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[q]=(...K)=>{return j(K.length),Z(...K)}).original=Z;else Y[q]=Z}return $}function D3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var WN="/static/js/vendor/remote-display-decoder.wasm",t6=null;function MG(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function TG(){if(t6)return t6;return t6=(async()=>{try{let G=function(Z,X,Y,q,L,K,Q){let V=MG(X),F=j.__pin(j.__newArrayBuffer(V));try{return j[Z](F,Y,q,L,K,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift)}finally{j.__unpin(F),D3(j)}},_=await fetch(WN,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof a6==="function"?await a6(_,{}):await E3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,q,L,K){return G("processRawRect",Z,X,Y,q,L,K)},processCopyRect(Z,X,Y,q,L,K){return j.processCopyRect(Z,X,Y,q,L,K)},processRreRect(Z,X,Y,q,L,K){return G("processRreRect",Z,X,Y,q,L,K)},processHextileRect(Z,X,Y,q,L,K){return G("processHextileRect",Z,X,Y,q,L,K)},processZrleTileData(Z,X,Y,q,L,K){return G("processZrleTileData",Z,X,Y,q,L,K)},decodeRawRectToRgba(Z,X,Y,q){let L=MG(Z),K=j.__pin(j.__newArrayBuffer(L));try{let Q=j.__pin(j.decodeRawRectToRgba(K,X,Y,q.bitsPerPixel,q.bigEndian?1:0,q.trueColor?1:0,q.redMax,q.greenMax,q.blueMax,q.redShift,q.greenShift,q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(Q))}finally{j.__unpin(Q)}}finally{j.__unpin(K),D3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),t6}function p4(_,$,j){return Math.max($,Math.min(j,_))}function e6(_,$,j){let G=new Uint8Array(6),Z=p4(Math.floor(Number($||0)),0,65535),X=p4(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=p4(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function f$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function O3(_){let $=f$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return f$(0);let G=Number(_?.buttons||0);if(G&1)return f$(0);if(G&4)return f$(1);if(G&2)return f$(2);return 0}function q4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if(($==="pointerleave"||$==="pointerout")&&$!=="pointerdown")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function wG(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function v1(_){return String(_||"").toLowerCase()==="touch"}function ON(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function z3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return ON(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function yG(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!z3(_)}function xG(_){return String(_||"").toLowerCase()!=="mouse"}function J3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Number(j?.width||0)),L=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/q,Q=(Number($||0)-Number(j?.top||0))/L;return{x:p4(Math.floor(K*X),0,Math.max(0,X-1)),y:p4(Math.floor(Q*Y),0,Math.max(0,Y-1))}}function IG(_,$,j,G=0){let Z=Number(_)<0?8:16,X=p4(Number(G||0)|Z,0,255);return[e6(X,$,j),e6(Number(G||0),$,j)]}function CG(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function PG(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function L4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function fG(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),q=Math.max(1,Math.floor(Number(G||0))),L=Math.min(Z/Y,X/q);if(!Number.isFinite(L)||L<=0)return 1;return Math.max(0.01,L)}var W3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)W3[`F${_}`]=65470+(_-1);function A3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(W3,X))return W3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var p_=Uint8Array,H1=Uint16Array,P3=Int32Array,_2=new p_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$2=new p_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),y3=new p_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),uG=function(_,$){var j=new H1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new P3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},bG=uG(_2,2),vG=bG.b,x3=bG.r;vG[28]=258,x3[258]=28;var mG=uG($2,0),zN=mG.b,RG=mG.r,I3=new H1(32768);for(F_=0;F_<32768;++F_)m1=(F_&43690)>>1|(F_&21845)<<1,m1=(m1&52428)>>2|(m1&13107)<<2,m1=(m1&61680)>>4|(m1&3855)<<4,I3[F_]=((m1&65280)>>8|(m1&255)<<8)>>1;var m1,F_,c1=function(_,$,j){var G=_.length,Z=0,X=new H1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new H1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var q;if(j){q=new H1(1<<$);var L=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var K=Z<<4|_[Z],Q=$-_[Z],V=Y[_[Z]-1]++<<Q;for(var F=V|(1<<Q)-1;V<=F;++V)q[I3[V]>>L]=K}}else{q=new H1(G);for(Z=0;Z<G;++Z)if(_[Z])q[Z]=I3[Y[_[Z]-1]++]>>15-_[Z]}return q},R$=new p_(288);for(F_=0;F_<144;++F_)R$[F_]=8;var F_;for(F_=144;F_<256;++F_)R$[F_]=9;var F_;for(F_=256;F_<280;++F_)R$[F_]=7;var F_;for(F_=280;F_<288;++F_)R$[F_]=8;var F_,v5=new p_(32);for(F_=0;F_<32;++F_)v5[F_]=5;var F_,JN=c1(R$,9,0),AN=c1(R$,9,1),kN=c1(v5,5,0),MN=c1(v5,5,1),k3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},C1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},M3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},f3=function(_){return(_+7)/8|0},b5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new p_(_.subarray($,j))};var TN=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Q1=function(_,$,j){var G=Error($||TN[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,Q1);if(!j)throw G;return G},wN=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new p_(0);var Y=!j,q=Y||$.i!=2,L=$.i;if(Y)j=new p_(Z*3);var K=function(j0){var O0=j.length;if(j0>O0){var f0=new p_(Math.max(O0*2,j0));f0.set(j),j=f0}},Q=$.f||0,V=$.p||0,F=$.b||0,B=$.l,U=$.d,D=$.m,E=$.n,H=Z*8;do{if(!B){Q=C1(_,V,1);var k=C1(_,V+1,3);if(V+=3,!k){var A=f3(V)+4,O=_[A-4]|_[A-3]<<8,y=A+O;if(y>Z){if(L)Q1(0);break}if(q)K(F+O);j.set(_.subarray(A,y),F),$.b=F+=O,$.p=V=y*8,$.f=Q;continue}else if(k==1)B=AN,U=MN,D=9,E=5;else if(k==2){var x=C1(_,V,31)+257,z=C1(_,V+10,15)+4,J=x+C1(_,V+5,31)+1;V+=14;var M=new p_(J),W=new p_(19);for(var T=0;T<z;++T)W[y3[T]]=C1(_,V+T*3,7);V+=z*3;var I=k3(W),f=(1<<I)-1,S=c1(W,I,1);for(var T=0;T<J;){var v=S[C1(_,V,f)];V+=v&15;var A=v>>4;if(A<16)M[T++]=A;else{var c=0,h=0;if(A==16)h=3+C1(_,V,3),V+=2,c=M[T-1];else if(A==17)h=3+C1(_,V,7),V+=3;else if(A==18)h=11+C1(_,V,127),V+=7;while(h--)M[T++]=c}}var $0=M.subarray(0,x),b=M.subarray(x);D=k3($0),E=k3(b),B=c1($0,D,1),U=c1(b,E,1)}else Q1(1);if(V>H){if(L)Q1(0);break}}if(q)K(F+131072);var e=(1<<D)-1,s=(1<<E)-1,q0=V;for(;;q0=V){var c=B[M3(_,V)&e],Z0=c>>4;if(V+=c&15,V>H){if(L)Q1(0);break}if(!c)Q1(2);if(Z0<256)j[F++]=Z0;else if(Z0==256){q0=V,B=null;break}else{var D0=Z0-254;if(Z0>264){var T=Z0-257,Q0=_2[T];D0=C1(_,V,(1<<Q0)-1)+vG[T],V+=Q0}var L0=U[M3(_,V)&s],N0=L0>>4;if(!L0)Q1(3);V+=L0&15;var b=zN[N0];if(N0>3){var Q0=$2[N0];b+=M3(_,V)&(1<<Q0)-1,V+=Q0}if(V>H){if(L)Q1(0);break}if(q)K(F+131072);var H0=F+D0;if(F<b){var y0=X-b,i=Math.min(b,H0);if(y0+F<0)Q1(3);for(;F<i;++F)j[F]=G[y0+F]}for(;F<H0;++F)j[F]=j[F-b]}}if($.l=B,$.p=q0,$.b=F,$.f=Q,B)Q=1,$.m=D,$.d=U,$.n=E}while(!Q);return F!=j.length&&Y?b5(j,0,F):j.subarray(0,F)},L$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},g5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},T3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:lG,l:0};if(Z==1){var Y=new p_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(y,x){return y.f-x.f}),j.push({s:-1,f:25001});var q=j[0],L=j[1],K=0,Q=1,V=2;j[0]={s:-1,f:q.f+L.f,l:q,r:L};while(Q!=Z-1)q=j[j[K].f<j[V].f?K++:V++],L=j[K!=Q&&j[K].f<j[V].f?K++:V++],j[Q++]={s:-1,f:q.f+L.f,l:q,r:L};var F=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>F)F=X[G].s;var B=new H1(F+1),U=C3(j[Q-1],B,0);if(U>$){var G=0,D=0,E=U-$,H=1<<E;X.sort(function(x,z){return B[z.s]-B[x.s]||x.f-z.f});for(;G<Z;++G){var k=X[G].s;if(B[k]>$)D+=H-(1<<U-B[k]),B[k]=$;else break}D>>=E;while(D>0){var A=X[G].s;if(B[A]<$)D-=1<<$-B[A]++-1;else++G}for(;G>=0&&D;--G){var O=X[G].s;if(B[O]==$)--B[O],++D}U=$}return{t:new p_(B),l:U}},C3=function(_,$,j){return _.s==-1?Math.max(C3(_.l,$,j+1),C3(_.r,$,j+1)):$[_.s]=j},SG=function(_){var $=_.length;while($&&!_[--$]);var j=new H1(++$),G=0,Z=_[0],X=1,Y=function(L){j[G++]=L};for(var q=1;q<=$;++q)if(_[q]==Z&&q!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[q]}return{c:j.subarray(0,G),n:$}},u5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},cG=function(_,$,j){var G=j.length,Z=f3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},gG=function(_,$,j,G,Z,X,Y,q,L,K,Q){L$($,Q++,j),++Z[256];var V=T3(Z,15),F=V.t,B=V.l,U=T3(X,15),D=U.t,E=U.l,H=SG(F),k=H.c,A=H.n,O=SG(D),y=O.c,x=O.n,z=new H1(19);for(var J=0;J<k.length;++J)++z[k[J]&31];for(var J=0;J<y.length;++J)++z[y[J]&31];var M=T3(z,7),W=M.t,T=M.l,I=19;for(;I>4&&!W[y3[I-1]];--I);var f=K+5<<3,S=u5(Z,R$)+u5(X,v5)+Y,v=u5(Z,F)+u5(X,D)+Y+14+3*I+u5(z,W)+2*z[16]+3*z[17]+7*z[18];if(L>=0&&f<=S&&f<=v)return cG($,Q,_.subarray(L,L+K));var c,h,$0,b;if(L$($,Q,1+(v<S)),Q+=2,v<S){c=c1(F,B,0),h=F,$0=c1(D,E,0),b=D;var e=c1(W,T,0);L$($,Q,A-257),L$($,Q+5,x-1),L$($,Q+10,I-4),Q+=14;for(var J=0;J<I;++J)L$($,Q+3*J,W[y3[J]]);Q+=3*I;var s=[k,y];for(var q0=0;q0<2;++q0){var Z0=s[q0];for(var J=0;J<Z0.length;++J){var D0=Z0[J]&31;if(L$($,Q,e[D0]),Q+=W[D0],D0>15)L$($,Q,Z0[J]>>5&127),Q+=Z0[J]>>12}}}else c=JN,h=R$,$0=kN,b=v5;for(var J=0;J<q;++J){var Q0=G[J];if(Q0>255){var D0=Q0>>18&31;if(g5($,Q,c[D0+257]),Q+=h[D0+257],D0>7)L$($,Q,Q0>>23&31),Q+=_2[D0];var L0=Q0&31;if(g5($,Q,$0[L0]),Q+=b[L0],L0>3)g5($,Q,Q0>>5&8191),Q+=$2[L0]}else g5($,Q,c[Q0]),Q+=h[Q0]}return g5($,Q,c[256]),Q+h[256]},yN=new P3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),lG=new p_(0),xN=function(_,$,j,G,Z,X){var Y=X.z||_.length,q=new p_(G+Y+5*(1+Math.ceil(Y/7000))+Z),L=q.subarray(G,q.length-Z),K=X.l,Q=(X.r||0)&7;if($){if(Q)L[0]=X.r>>3;var V=yN[$-1],F=V>>13,B=V&8191,U=(1<<j)-1,D=X.p||new H1(32768),E=X.h||new H1(U+1),H=Math.ceil(j/3),k=2*H,A=function(m0){return(_[m0]^_[m0+1]<<H^_[m0+2]<<k)&U},O=new P3(25000),y=new H1(288),x=new H1(32),z=0,J=0,M=X.i||0,W=0,T=X.w||0,I=0;for(;M+2<Y;++M){var f=A(M),S=M&32767,v=E[f];if(D[S]=v,E[f]=S,T<=M){var c=Y-M;if((z>7000||W>24576)&&(c>423||!K)){Q=gG(_,L,0,O,y,x,J,W,I,M-I,Q),W=z=J=0,I=M;for(var h=0;h<286;++h)y[h]=0;for(var h=0;h<30;++h)x[h]=0}var $0=2,b=0,e=B,s=S-v&32767;if(c>2&&f==A(M-s)){var q0=Math.min(F,c)-1,Z0=Math.min(32767,M),D0=Math.min(258,c);while(s<=Z0&&--e&&S!=v){if(_[M+$0]==_[M+$0-s]){var Q0=0;for(;Q0<D0&&_[M+Q0]==_[M+Q0-s];++Q0);if(Q0>$0){if($0=Q0,b=s,Q0>q0)break;var L0=Math.min(s,Q0-2),N0=0;for(var h=0;h<L0;++h){var H0=M-s+h&32767,y0=D[H0],i=H0-y0&32767;if(i>N0)N0=i,v=H0}}}S=v,v=D[S],s+=S-v&32767}}if(b){O[W++]=268435456|x3[$0]<<18|RG[b];var j0=x3[$0]&31,O0=RG[b]&31;J+=_2[j0]+$2[O0],++y[257+j0],++x[O0],T=M+$0,++z}else O[W++]=_[M],++y[_[M]]}}for(M=Math.max(M,T);M<Y;++M)O[W++]=_[M],++y[_[M]];if(Q=gG(_,L,K,O,y,x,J,W,I,M-I,Q),!K)X.r=Q&7|L[Q/8|0]<<3,Q-=7,X.h=E,X.p=D,X.i=M,X.w=T}else{for(var M=X.w||0;M<Y+K;M+=65535){var f0=M+65535;if(f0>=Y)L[Q/8|0]=K,f0=Y;Q=cG(L,Q+1,_.subarray(M,f0))}X.i=Y}return b5(q,0,G+f3(Q)+Z)};var hG=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var q=Math.min(Y+2655,X);for(;Y<q;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},IN=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new p_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return xN(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var pG=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var CN=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=hG();Z.p($.dictionary),pG(_,2,Z.d())}},PN=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)Q1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)Q1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var w3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new p_(32768),this.p=new p_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)Q1(5);if(this.d)Q1(4);if(!this.p.length)this.p=$;else if($.length){var j=new p_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=wN(this.p,this.s,this.o);this.ondata(b5(G,j,this.s.b),this.d),this.o=b5(G,this.s.b-32768),this.s.b=this.o.length,this.p=b5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function nG(_,$){if(!$)$={};var j=hG();j.p(_);var G=IN(_,$,$.dictionary?6:2,4);return CN(G,$),pG(G,G.length-4,j.d()),G}var rG=function(){function _($,j){w3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(w3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(PN(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)Q1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}w3.prototype.c.call(this,j)},_}();var fN=typeof TextDecoder<"u"&&new TextDecoder,RN=0;try{fN.decode(lG,{stream:!0}),RN=1}catch(_){}var SN=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],gN=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],uN=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],bN=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],vN=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],mN=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],cN=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],lN=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],oG=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;oG[_]=$}function sG(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function aG(_){let $=0n,j=sG(_);for(let G of j)$=$<<8n|BigInt(G);return $}function hN(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function n4(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function dG(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function pN(_){let $=n4(aG(_),vN,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of cN){j=dG(j,X),G=dG(G,X);let Y=j<<28n|G;Z.push(n4(Y,mN,56))}return Z}function nN(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(lN[j][X][Y])}return $}function rN(_,$){let j=n4(_,uN,32)^BigInt($),G=nN(j);return n4(G,bN,32)}function iG(_,$){let j=pN($),G=n4(aG(_),SN,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let q of j){let L=X,K=(Z^rN(X,q))&0xffffffffn;Z=L,X=K}let Y=X<<32n|Z;return hN(n4(Y,gN,64),8)}function dN(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=oG[Z]}return j}function tG(_,$){let j=sG($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=dN(_),Z=new Uint8Array(16);return Z.set(iG(j.slice(0,8),G),0),Z.set(iG(j.slice(8,16),G),8),Z}var P1="vnc";function iN(_){return Number(_)}function oN(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=iN(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function i4(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function sN(_,$){let j=i4(_),G=i4($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function aN(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=i4(Z);j.set(X,G),G+=X.byteLength}return j}function tN(){return(_)=>{let $=i4(_);try{let j=[],G=new rG((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return aN(j)}catch(j){try{let G=nG($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function eN(_){return new TextEncoder().encode(String(_||""))}function r4(_){return new TextDecoder().decode(i4(_))}function _U(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function $U(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function eG(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function jU(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function GU(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function _Z(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function d4(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function jZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function ZU(_,$,j,G){let Z=G||o4,X=i4(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),q=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<q)throw Error(`Incomplete raw rectangle payload: expected ${q} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let L=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,Q=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let F=jZ(X,K,Y,Z.bigEndian),B=d4(F>>>Z.redShift&Z.redMax,Z.redMax),U=d4(F>>>Z.greenShift&Z.greenMax,Z.greenMax),D=d4(F>>>Z.blueShift&Z.blueMax,Z.blueMax);L[Q]=B,L[Q+1]=U,L[Q+2]=D,L[Q+3]=255,K+=Y,Q+=4}return L}function K$(_,$,j){let G=j||o4,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=jZ(_,$,Z,G.bigEndian);return{rgba:[d4(X>>>G.redShift&G.redMax,G.redMax),d4(X>>>G.greenShift&G.greenMax,G.greenMax),d4(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function S$(_,$,j,G,Z,X,Y){if(!Y)return;for(let q=0;q<X;q+=1)for(let L=0;L<Z;L+=1){let K=((G+q)*$+(j+L))*4;_[K]=Y[0],_[K+1]=Y[1],_[K+2]=Y[2],_[K+3]=Y[3]}}function GZ(_,$,j,G,Z,X,Y){for(let q=0;q<X;q+=1){let L=q*Z*4,K=((G+q)*$+j)*4;_.set(Y.subarray(L,L+Z*4),K)}}function $Z(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function XU(_,$,j,G,Z,X,Y){let q=Z||o4,L=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let Q=_.slice($+4,$+4+K),V;try{V=Y(Q)}catch{return{consumed:4+K,skipped:!0}}let F=0,B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let D=Math.min(64,G-U);for(let E=0;E<j;E+=64){let H=Math.min(64,j-E);if(V.byteLength<F+1)return null;let k=V[F++],A=k&127,O=(k&128)!==0;if(!O&&A===0){let y=H*D*L;if(V.byteLength<F+y)return null;let x=X(V.slice(F,F+y),H,D,q);F+=y,GZ(B,j,E,U,H,D,x);continue}if(!O&&A===1){let y=K$(V,F,q);if(!y)return null;F+=y.bytesPerPixel,S$(B,j,E,U,H,D,y.rgba);continue}if(!O&&A>1&&A<=16){let y=[];for(let M=0;M<A;M+=1){let W=K$(V,F,q);if(!W)return null;F+=W.bytesPerPixel,y.push(W.rgba)}let x=A<=2?1:A<=4?2:4,z=Math.ceil(H*x/8),J=z*D;if(V.byteLength<F+J)return null;for(let M=0;M<D;M+=1){let W=F+M*z;for(let T=0;T<H;T+=1){let I=T*x,f=W+(I>>3),S=8-x-(I&7),v=V[f]>>S&(1<<x)-1;S$(B,j,E+T,U+M,1,1,y[v])}}F+=J;continue}if(O&&A===0){let y=0,x=0;while(x<D){let z=K$(V,F,q);if(!z)return null;F+=z.bytesPerPixel;let J=$Z(V,F);if(!J)return null;F+=J.consumed;for(let M=0;M<J.runLength;M+=1)if(S$(B,j,E+y,U+x,1,1,z.rgba),y+=1,y>=H){if(y=0,x+=1,x>=D)break}}continue}if(O&&A>0){let y=[];for(let J=0;J<A;J+=1){let M=K$(V,F,q);if(!M)return null;F+=M.bytesPerPixel,y.push(M.rgba)}let x=0,z=0;while(z<D){if(V.byteLength<F+1)return null;let J=V[F++],M=J,W=1;if(J&128){M=J&127;let I=$Z(V,F);if(!I)return null;F+=I.consumed,W=I.runLength}let T=y[M];if(!T)return null;for(let I=0;I<W;I+=1)if(S$(B,j,E+x,U+z,1,1,T),x+=1,x>=H){if(x=0,z+=1,z>=D)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:B,decompressed:V}}function YU(_,$,j,G,Z){let X=Z||o4,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let L=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+Y+L*(Y+8);if(_.byteLength<$+K)return null;let Q=$+4,V=K$(_,Q,X);if(!V)return null;Q+=V.bytesPerPixel;let F=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);S$(F,j,0,0,j,G,V.rgba);for(let B=0;B<L;B+=1){let U=K$(_,Q,X);if(!U)return null;if(Q+=U.bytesPerPixel,_.byteLength<Q+8)return null;let D=new DataView(_.buffer,_.byteOffset+Q,8),E=D.getUint16(0,!1),H=D.getUint16(2,!1),k=D.getUint16(4,!1),A=D.getUint16(6,!1);Q+=8,S$(F,j,E,H,k,A,U.rgba)}return{consumed:Q-$,rgba:F}}function qU(_,$,j,G,Z,X){let Y=Z||o4,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),K=$,Q=[0,0,0,255],V=[255,255,255,255];for(let F=0;F<G;F+=16){let B=Math.min(16,G-F);for(let U=0;U<j;U+=16){let D=Math.min(16,j-U);if(_.byteLength<K+1)return null;let E=_[K++];if(E&1){let H=D*B*q;if(_.byteLength<K+H)return null;let k=X(_.slice(K,K+H),D,B,Y);K+=H,GZ(L,j,U,F,D,B,k);continue}if(E&2){let H=K$(_,K,Y);if(!H)return null;Q=H.rgba,K+=H.bytesPerPixel}if(S$(L,j,U,F,D,B,Q),E&4){let H=K$(_,K,Y);if(!H)return null;V=H.rgba,K+=H.bytesPerPixel}if(E&8){if(_.byteLength<K+1)return null;let H=_[K++];for(let k=0;k<H;k+=1){let A=V;if(E&16){let W=K$(_,K,Y);if(!W)return null;A=W.rgba,K+=W.bytesPerPixel}if(_.byteLength<K+2)return null;let O=_[K++],y=_[K++],x=O>>4,z=O&15,J=(y>>4)+1,M=(y&15)+1;S$(L,j,U+x,F+z,J,M,A)}}}}return{consumed:K-$,rgba:L}}var o4={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class j2{protocol=P1;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:ZU,this.pipeline=_.pipeline||null,this.encodings=oN(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...o4},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:tN()}receive(_){if(_)this.buffer=sN(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=r4(Z),Y=_U(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=$U(Y),j.push(eN(this.clientVersionText)),$.push({type:"protocol-version",protocol:P1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let L=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+L)break;this.consume(1);let K=r4(this.consume(4+L).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:P1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:P1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+q)break;let L=r4(this.consume(4+q).slice(4));throw Error(L||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:P1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:P1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(tG(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let q=r4(this.consume(4+Y).slice(4));throw Error(q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:P1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),q=eG(Z,4),L=Z.getUint32(20,!1);if(this.buffer.byteLength<24+L)break;let K=this.consume(24),Q=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=Q.getUint16(0,!1),this.framebufferHeight=Q.getUint16(2,!1),this.serverPixelFormat=eG(Q,4),this.serverName=r4(this.consume(L)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(jU(this.clientPixelFormat)),j.push(GU(this.encodings)),j.push(_Z(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:P1,width:X,height:Y,name:this.serverName,pixelFormat:q}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),q=4,L=[],K=!1,Q=!!this.pipeline;for(let F=0;F<Y;F+=1){if(this.buffer.byteLength<q+12){K=!0;break}let B=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,12),U=B.getUint16(0,!1),D=B.getUint16(2,!1),E=B.getUint16(4,!1),H=B.getUint16(6,!1),k=B.getInt32(8,!1);if(q+=12,k===0){let A=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),O=E*H*A;if(this.buffer.byteLength<q+O){K=!0;break}let y=this.buffer.slice(q,q+O);if(q+=O,Q)this.pipeline.processRawRect(y,U,D,E,H,this.clientPixelFormat),L.push({kind:"pipeline",x:U,y:D,width:E,height:H});else L.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:this.decodeRawRect(y,E,H,this.clientPixelFormat)});continue}if(k===2){let A=YU(this.buffer,q,E,H,this.clientPixelFormat);if(!A){K=!0;break}if(Q){let O=this.buffer.slice(q,q+A.consumed);this.pipeline.processRreRect(O,U,D,E,H,this.clientPixelFormat),L.push({kind:"pipeline",x:U,y:D,width:E,height:H})}else L.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:A.rgba});q+=A.consumed;continue}if(k===1){if(this.buffer.byteLength<q+4){K=!0;break}let A=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,4),O=A.getUint16(0,!1),y=A.getUint16(2,!1);if(q+=4,Q)this.pipeline.processCopyRect(U,D,E,H,O,y),L.push({kind:"pipeline",x:U,y:D,width:E,height:H});else L.push({kind:"copy",x:U,y:D,width:E,height:H,srcX:O,srcY:y});continue}if(k===16){let A=XU(this.buffer,q,E,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!A){K=!0;break}if(q+=A.consumed,A.skipped)continue;if(Q&&A.decompressed)this.pipeline.processZrleTileData(A.decompressed,U,D,E,H,this.clientPixelFormat),L.push({kind:"pipeline",x:U,y:D,width:E,height:H});else L.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:A.rgba});continue}if(k===5){let A=qU(this.buffer,q,E,H,this.clientPixelFormat,this.decodeRawRect);if(!A){K=!0;break}if(Q){let O=this.buffer.slice(q,q+A.consumed);this.pipeline.processHextileRect(O,U,D,E,H,this.clientPixelFormat),L.push({kind:"pipeline",x:U,y:D,width:E,height:H})}else L.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:A.rgba});q+=A.consumed;continue}if(k===-223){if(this.framebufferWidth=E,this.framebufferHeight=H,Q)this.pipeline.initFramebuffer(E,H);L.push({kind:"resize",x:U,y:D,width:E,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(q);let V={type:"framebuffer-update",protocol:P1,width:this.framebufferWidth,height:this.framebufferHeight,rects:L};if(Q)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(_Z(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:P1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let q=r4(this.consume(Y));$.push({type:"clipboard",protocol:P1,text:q}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var h1="piclaw://vnc";function YZ(_){let $=String(_||"").trim();return $?`${h1}/${encodeURIComponent($)}`:h1}var R3="piclaw:vnc-popout:",LU=60000;function qZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function KU(_=globalThis){let $=tj(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function LZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(R3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{r6(_,G)}}function VU(_,$=globalThis,j=Date.now()){let G=L4(_);if(G===null)return null;let Z=qZ($);if(!Z)return null;LZ(Z,j);let X=KU($);try{return Z.setItem(`${R3}${X}`,JSON.stringify({password:G,expiresAt:j+LU})),X}catch{return null}}function QU(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=qZ($);if(!Z)return null;LZ(Z,j);let X=`${R3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let q=JSON.parse(Y),L=Number(q?.expiresAt||0);if(!Number.isFinite(L)||L<=j)return null;return L4(q?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function FU(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:YZ(G)},X=VU($,j);if(X)Z.vnc_secret=X;return Z}function BU(_){let $=String(_||"");if($===h1)return null;if(!$.startsWith(`${h1}/`))return null;let j=$.slice(`${h1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function l1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function NU(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function UU(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function HU(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function EU(_){return String(_||"").trim()||"localhost"}function DU(_,$){let j=EU(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function WU(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function ZZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function XZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function OU(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class KZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=BU($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=ZZ("vnc_handoff");let j=ZZ("vnc_secret"),G=QU(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=WU({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:16px 16px 18px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:12px;box-shadow:none;">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host value="localhost" placeholder="localhost" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;min-height:40px;font-weight:500;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((X)=>`
                            <div style="text-align:left;padding:14px;border:1px solid var(--border-color);border-radius:10px;background:transparent;color:inherit;display:flex;flex-direction:column;gap:10px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${l1(X.label||X.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${l1(X.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${X.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${l1(X.id)}" data-target-label="${l1(X.label||X.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:24px 20px;border:1px dashed var(--border-color);border-radius:10px;background:transparent;font-size:13px;color:var(--text-secondary);line-height:1.5;display:grid;gap:6px;">
                            <div style="font-weight:600;color:var(--text-primary);">${l1(G.title)}</div>
                            <div>${l1(G.body)}</div>
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=DU(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=L4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),q=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=UU();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:6px;">
                    <div data-vnc-session-chrome style="padding:6px 8px;border:1px solid var(--border-color);border-radius:8px;background:transparent;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                        <div data-display-info style="min-width:0;flex:1 1 240px;font-size:12px;color:var(--text-secondary);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <input type="password" data-vnc-password placeholder="Password" autocomplete="current-password" style="width:150px;max-width:100%;padding:6px 8px;border:1px solid var(--border-color);border-radius:6px;background:transparent;color:inherit;" />
                        <button type="button" data-vnc-reconnect="1" style="padding:6px 10px;border:1px solid var(--border-color);border-radius:6px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:8px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:4px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:2px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.5;">
                            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${l1(j)}</div>
                            <div style="font-size:12px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `:`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                    <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:10px;">
                        <div style="display:grid;gap:4px;min-width:0;">
                            <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${l1($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                            <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                            <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                            <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                                <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                                <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                            <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Target</button>
                        </div>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:10px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:8px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:4px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                            <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${l1(j)}</div>
                            <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=L4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=L4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=fG($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return J3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(e6(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,q=new Map,L=new Set,K=!1,Q=(z)=>this.getFramebufferPointFromEvent(z)||X.get(z?.pointerId)||{x:0,y:0},V=(z)=>{if(!z||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let J=this.canvas.getBoundingClientRect?.();if(!J||!J.width||!J.height)return null;return J3(z.clientX,z.clientY,J,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},F=(z)=>{let J=Y.get(z);if(J)G.clearTimeout(J),Y.delete(z)},B=(z)=>{let J=q.get(z);if(J?.holdTimer)G.clearTimeout(J.holdTimer);q.delete(z)},U=()=>{for(let z of q.keys())B(z)},D=()=>{if(!L.size)K=!1},E=(z,J=80)=>{let M=String(z?.pointerType||"").toLowerCase();if(!xG(M))return;let W=Number(z?.pointerId);if(!Number.isFinite(W))return;F(W);let T=G.setTimeout(()=>{if(Y.delete(W),!Z.has(W)&&!this.pointerButtonMask)return;k({pointerId:W,pointerType:M,type:"pointercancel",clientX:z?.clientX,clientY:z?.clientY},{resetAll:!0})},J);Y.set(W,T)},H=(z=null)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;for(let M of Y.keys())F(M);U(),L.clear(),K=!1;let J=z||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,J.x,J.y)},k=(z,J={})=>{if(J.resetAll){let f=Number(z?.pointerId);F(f),H(Q(z));try{this.canvas?.releasePointerCapture?.(f)}catch{}return}let M=Q(z),W=Number(z?.pointerId);F(W),B(W),L.delete(W),D();let T=Z.has(W),I=Z.get(W)??O3(z);if(!T&&!I&&!this.pointerButtonMask)return;if(Z.delete(W),X.delete(W),I)this.pointerButtonMask&=~I;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);try{this.canvas?.releasePointerCapture?.(W)}catch{}},A=(z)=>{if(K)return;let J=q.get(z);if(!J||J.dragActivated)return;J.dragActivated=!0,J.holdTimer=null;let M=f$(0);if(!M)return;Z.set(z,(Z.get(z)??0)|M),this.pointerButtonMask|=M,E({pointerId:z,pointerType:"touch",clientX:J.lastClientX,clientY:J.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,J.lastPoint.x,J.lastPoint.y)},O=(z,J,M={})=>{let W=q.get(z);if(!W)return!1;let T=J||W.lastPoint||{x:0,y:0},I=Number.isFinite(M.clientX)?Number(M.clientX):W.lastClientX,f=Number.isFinite(M.clientY)?Number(M.clientY):W.lastClientY;if(L.delete(z),M.cancelled||K){if(B(z),D(),Z.has(z)||this.pointerButtonMask)H(T);return!0}if(W.dragActivated||Z.has(z))return k({pointerId:z,pointerType:"touch",type:"pointerup",clientX:I,clientY:f}),D(),!0;let S=Date.now()-W.startedAt,v=yG({startX:W.startClientX,startY:W.startClientY,clientX:I,clientY:f,elapsedMs:S});if(F(z),B(z),X.delete(z),D(),v){let c=f$(0);this.sendPointerEvent(c,T.x,T.y),this.sendPointerEvent(0,T.x,T.y)}else this.sendPointerEvent(this.pointerButtonMask,T.x,T.y);return!0};this.canvas.addEventListener("contextmenu",(z)=>{z.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(z)=>{let J=this.getFramebufferPointFromEvent(z);if(!J)return;let M=String(z?.pointerType||"").toLowerCase(),W=v1(M);if(X.set(z.pointerId,J),W){let T=q.get(z.pointerId);if(T){if(T.lastClientX=Number(z?.clientX||0),T.lastClientY=Number(z?.clientY||0),T.lastPoint=J,!T.dragActivated&&z3({startX:T.startClientX,startY:T.startClientY,clientX:T.lastClientX,clientY:T.lastClientY}))B(z.pointerId),q.set(z.pointerId,{...T,holdTimer:null,dragActivated:!1});if(!T.dragActivated){this.sendPointerEvent(this.pointerButtonMask,J.x,J.y);return}}if(K)return}if(Z.has(z.pointerId)&&q4(z)){k(z,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(z.pointerId)&&q4(z)){H(J);return}if(Z.has(z.pointerId))E(z);this.sendPointerEvent(this.pointerButtonMask,J.x,J.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(z)=>{let J=this.getFramebufferPointFromEvent(z);if(!J)return;let M=String(z?.pointerType||"").toLowerCase(),W=v1(M);if(z.preventDefault(),this.canvas?.focus?.(),X.set(z.pointerId,J),W){if(L.add(z.pointerId),L.size>1){let f=[...L];K=!0,H(J);for(let S of f)L.add(S);K=!0;return}B(z.pointerId);let I={startClientX:Number(z?.clientX||0),startClientY:Number(z?.clientY||0),lastClientX:Number(z?.clientX||0),lastClientY:Number(z?.clientY||0),startedAt:Date.now(),lastPoint:J,holdTimer:null,dragActivated:!1};I.holdTimer=G.setTimeout(()=>{A(z.pointerId)},260),q.set(z.pointerId,I),this.sendPointerEvent(this.pointerButtonMask,J.x,J.y);return}if(M==="mouse")try{this.canvas?.setPointerCapture?.(z.pointerId)}catch{}let T=O3(z);if(!T)return;Z.set(z.pointerId,(Z.get(z.pointerId)??0)|T),this.pointerButtonMask|=T,E(z),this.sendPointerEvent(this.pointerButtonMask,J.x,J.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(z)=>{if(z.preventDefault(),v1(z?.pointerType)){let J=Q(z);if(O(z.pointerId,J,{clientX:z?.clientX,clientY:z?.clientY}))return}k(z)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(z)=>{if(z.preventDefault(),v1(z?.pointerType)){let J=Q(z);if(O(z.pointerId,J,{clientX:z?.clientX,clientY:z?.clientY,cancelled:!0}))return}k(z,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(z)=>{if(q.has(z.pointerId)&&v1(z?.pointerType)){O(z.pointerId,Q(z),{clientX:z?.clientX,clientY:z?.clientY,cancelled:!0});return}if(!Z.has(z.pointerId))return;if(!q4(z))return;k(z,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(z)=>{if(q.has(z.pointerId)&&v1(z?.pointerType)){O(z.pointerId,Q(z),{clientX:z?.clientX,clientY:z?.clientY,cancelled:!0});return}if(!Z.has(z.pointerId))return;if(!q4(z))return;k(z,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(z)=>{k(z,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(z)=>{if(!Z.size&&!this.pointerButtonMask||!q4(z))return;if(!Z.has(z.pointerId)&&!this.pointerButtonMask)return;k(z,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(z)=>{if(!Z.has(z.pointerId)&&!this.pointerButtonMask&&!q.has(z.pointerId))return;if(z.preventDefault?.(),v1(z?.pointerType)){let J=Q(z);if(O(z.pointerId,J,{clientX:z?.clientX,clientY:z?.clientY}))return}k(z,{resetAll:!Z.has(z.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(z)=>{if(!Z.has(z.pointerId)&&!this.pointerButtonMask&&!q.has(z.pointerId))return;if(z.preventDefault?.(),v1(z?.pointerType)){let J=Q(z);if(O(z.pointerId,J,{clientX:z?.clientX,clientY:z?.clientY,cancelled:!0}))return}k(z,{resetAll:!0})},{signal:$,passive:!1});let y=(z)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;if(!wG(z))return;let J=z?.changedTouches?.[0]||z?.touches?.[0]||null,M=V(J)||X.values().next().value||q.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&q.size===1){let[W]=q.entries().next().value||[];if(Number.isFinite(W)){O(W,M,{clientX:J?.clientX,clientY:J?.clientY,cancelled:z?.type==="touchcancel"});return}}H(M)},x=(z,J={})=>{if(!Z.size&&!this.pointerButtonMask&&!q.has(z?.pointerId))return;if(!q4(z))return;if(z?.preventDefault?.(),v1(z?.pointerType)){let M=Q(z);if(O(z.pointerId,M,{clientX:z?.clientX,clientY:z?.clientY,cancelled:J.resetAll===!0}))return}k(z,{resetAll:J.resetAll===!0||!Z.has(z?.pointerId)})};this.canvas.addEventListener("touchend",y,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",y,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",y,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",y,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",y,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",y,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(z)=>{x(z)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(z)=>{x(z,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;H()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;H()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")H()},{signal:$}),this.canvas.addEventListener("wheel",(z)=>{let J=this.getFramebufferPointFromEvent(z);if(!J)return;z.preventDefault();for(let M of IG(z.deltaY,J.x,J.y,this.pointerButtonMask))this.socketBoundary?.send?.(M)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(CG(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=A3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(PG(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??A3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new j2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await TG(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(q,L,K,Q)=>G.decodeRawRectToRgba(q,L,K,Q);let X=L4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new j2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new H3({url:HU(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(q)=>{this.applyMetrics(q)},onMessage:(q)=>{this.handleSocketMessage(q)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(XZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),XZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await NU(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${l1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!OU(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return FU(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var S3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===h1||$.startsWith(`${h1}/`)?9000:!1},mount(_,$){return new KZ(_,$)}};import{classHighlighter as zU,highlightTree as JU,StreamLanguage as s4,cssLanguage as AU,cppLanguage as kU,goLanguage as MU,htmlLanguage as TU,javascriptLanguage as wU,jsxLanguage as yU,tsxLanguage as xU,typescriptLanguage as IU,jsonLanguage as CU,markdownLanguage as PU,pythonLanguage as fU,rustLanguage as RU,StandardSQL as SU,xmlLanguage as gU,yamlLanguage as uU,dockerFile as bU,powerShell as vU,ruby as mU,shell as cU,swift as lU,toml as hU}from"#editor-vendor/codemirror";function K4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var pU={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},nU=s4.define(cU).parser,rU=s4.define(vU).parser,dU=s4.define(bU).parser,iU=s4.define(mU).parser,oU=s4.define(lU).parser,sU=s4.define(hU).parser;function VZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return pU[$]||String(_||"").trim()}function aU(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return wU.parser;case"ts":case"typescript":return IU.parser;case"jsx":return yU.parser;case"tsx":return xU.parser;case"py":case"python":return fU.parser;case"json":return CU.parser;case"css":return AU.parser;case"html":return TU.parser;case"xml":return gU.parser;case"yaml":case"yml":return uU.parser;case"md":case"markdown":return PU.parser;case"sql":return SU.language.parser;case"go":return MU.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return kU.parser;case"sh":case"bash":case"shell":case"zsh":return nU;case"ps1":case"powershell":return rU;case"dockerfile":return dU;case"rb":case"ruby":return iU;case"rs":case"rust":return RU.parser;case"swift":return oU;case"toml":return sU;default:return null}}function G2(_,$){let j=aU($);if(!j)return K4(_);let G=[];try{let Y=j.parse(_);JU(Y,zU,(q,L,K)=>{if(!K||q>=L)return;G.push({from:q,to:L,cls:K})})}catch{return K4(_)}if(!G.length)return K4(_);G.sort((Y,q)=>Y.from-q.from||Y.to-q.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=K4(_.slice(Z,Y.from));X+=`<span class="${K4(Y.cls)}">${K4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=K4(_.slice(Z));return X}m5();var K2=/#(\w+)/g,VH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),QH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),FH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),OZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},BH=new Set(["http:","https:","mailto:",""]);function NH(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(OZ[j]||new Set).has(G)||FH.has(G)}function h3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function B4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!BH.has(G.protocol))return null;return G.href}catch{return null}}function zZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let q=Y.tagName.toLowerCase();if(!QH.has(q)){let K=Y.parentNode;if(!K)continue;while(Y.firstChild)K.insertBefore(Y.firstChild,Y);K.removeChild(Y);continue}let L=OZ[q]||new Set;for(let K of Array.from(Y.attributes)){let Q=K.name.toLowerCase(),V=K.value;if(Q.startsWith("on")){Y.removeAttribute(K.name);continue}if(NH(q,Q)){if(Q==="href"){let F=B4(V);if(!F)Y.removeAttribute(K.name);else if(Y.setAttribute(K.name,F),q==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(F))Y.setAttribute("target","_blank")}}else if(Q==="src"){let F=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,B=B4(F,{allowDataImage:q==="img"});if(!B)Y.removeAttribute(K.name);else Y.setAttribute(K.name,B)}continue}Y.removeAttribute(K.name)}}return j.body.innerHTML}function JZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function c5(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=JZ(j);if(Z===j)break;j=Z}return j}function UH(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function HH(_){let{text:$,frontmatter:j}=UH(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function EH(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let q of j){if(!X&&q.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&q.trim().match(/^```\s*$/)){let L=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${L}@@`),X=!1,Y=[];continue}if(X)Y.push(q);else Z.push(q)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function DH(_){if(!_)return _;return c5(_,5)}function WH(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function OH(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function zH(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=DH(X);return`<div class="mermaid-container" data-mermaid="${WH(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function AZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function JH(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=c5(Z,2),q=X||"plaintext",L=G2(Y,X);return`<pre><code class="hljs language-${h3(q)}">${L}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var AH={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function kH(_,$){let j=AH[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${h3(q)}"`)}return G.join("")}function kZ(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,q=X.endsWith("/")?X.slice(0,-1).trim():X,[L=""]=q.split(/\s+/,1),K=L.toLowerCase();if(!K||!VH.has(K))return $;if(K==="br")return Z?"":"<br>";if(Z)return`</${K}>`;let Q=q.slice(L.length).trim(),V=kH(K,Q);return`<${K}${V}>`})}function MZ(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function TZ(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function MH(_){if(!window.katex)return _;let $=(Y)=>JZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],L=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let Q=q.length;return q.push(K),`@@CODE_BLOCK_${Q}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let Q=q.length;return q.push(K),`@@CODE_INLINE_${Q}@@`}),{html:L,blocks:q}},G=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,K)=>{let Q=Number(K);return q[Q]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,L)=>{try{let K=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${q}${K}`}catch(K){return`<span class="math-error" title="${h3(K.message)}">${Y}</span>`}}),G(X,Z.blocks)}function TH(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(K2.lastIndex=0,!K2.test(Y))continue;K2.lastIndex=0;let q=X.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let L=Y.split(K2);if(L.length<=1)continue;let K=$.createDocumentFragment();L.forEach((Q,V)=>{if(V%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",Q),F.textContent=`#${Q}`,K.appendChild(F)}else K.appendChild($.createTextNode(Q))}),X.parentNode?.replaceChild(K,X)}return $.body.innerHTML}function wH(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function yH(_){let $=HH(_||""),j=wH($),{text:G,blocks:Z}=EH(j),X=c5(G,2),q=AZ(X).replace(/</g,"&lt;");return{safeHtml:kZ(q),mermaidBlocks:Z}}function e_(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=yH(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=MZ(X),X=TZ(X),X=JH(X),X=MH(X),X=TH(X),X=zH(X,Z),X=zZ(X,j),X}function l5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=c5($,2),Z=AZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=kZ(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=MZ(Y),Y=TZ(Y),Y=zZ(Y),Y}function xH(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((L)=>{let[K,Q]=L.split(",").map(Number);return{x:K,y:Q}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let L=1;L<Y.length-1;L++){let K=Y[L-1],Q=Y[L],V=Y[L+1],F=Q.x-K.x,B=Q.y-K.y,U=V.x-Q.x,D=V.y-Q.y,E=Math.sqrt(F*F+B*B),H=Math.sqrt(U*U+D*D),k=Math.min($,E/2,H/2);if(k<0.5){q.push(`L ${Q.x},${Q.y}`);continue}let A=Q.x-F/E*k,O=Q.y-B/E*k,y=Q.x+U/H*k,x=Q.y+D/H*k,J=F*D-B*U>0?1:0;q.push(`L ${A},${O}`),q.push(`A ${k},${k} 0 0 ${J} ${y},${x}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${q.join(" ")}"${X}/>`})}async function B$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=WZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let q=Y.dataset.mermaid,L=OH(q||""),K=c5(L,2),Q=await $(K,{...Z,transparent:!0});Q=xH(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(L),Y.removeAttribute("data-mermaid")}}g_();function gZ(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date-$,Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let L=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${K}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function e5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function o_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function W4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function u$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function HE(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),K=Z.startsWith("/")?Z:`${q?`${q}/`:""}${Z}`,Q=[];for(let F of K.split("/")){if(!F||F===".")continue;if(F===".."){if(Q.length>0)Q.pop();continue}Q.push(F)}let V=Q.join("/");return`${a5(V)}${X}${Y}`}function _6(_){return _?.preview||null}function EE(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function DE(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function WE(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${u$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${u$(o_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${u$(W4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${u$(DE($))}</span>`),G.push(`<span><strong>extension:</strong> ${u$(EE(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${u$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function OE(_){let $=_6(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=WE(_,$);if($.kind==="image"){let G=$.url||($.path?a5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${u$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=e_($.text||"",null,{rewriteImageSrc:(Z)=>HE(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${u$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class U7{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=OE(this.context)}getContent(){let _=_6(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=_6(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var H7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=_6(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new U7(_,$)}},E7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return _6(_)||_?.path?1:!1},mount(_,$){return new U7(_,$)}};var zE=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),JE={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},AE={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function bZ(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function uZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class vZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=bZ(j),X=AE[Z]||"\uD83D\uDCC4",Y=JE[Z]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${uZ(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${uZ(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let L=q.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class mZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var D7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=bZ(_?.path);if(!$||!zE.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new vZ(_,$);return new mZ(_,$)}};var kE=/\.(csv|tsv)$/i;function cZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class lZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${cZ(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${cZ(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class hZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var W7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!kE.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new lZ(_,$);return new hZ(_,$)}};var ME=/\.pdf$/i;function TE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class pZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${TE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class nZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var O7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ME.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new pZ(_,$);return new nZ(_,$)}};var wE=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function z7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class rZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${z7(Z)}" alt="${z7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${z7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class dZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var J7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!wE.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new rZ(_,$);return new dZ(_,$)}};var yE=/\.(html|htm)$/i;function iZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class oZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${iZ(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${iZ(j)}</div>
                <div style="display:flex;gap:8px;flex-shrink:0;">
                    <button id="html-edit-btn" style="padding:5px 14px;background:var(--surface-color,rgba(148,163,184,.12));color:var(--text-primary,#e2e8f0);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;">
                        Edit Source
                    </button>
                    <button id="html-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Preview in Tab
                    </button>
                </div>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class sZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!yE.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new oZ(_,$);return new sZ(_,$)}};var xE=/\.(mp4|m4v|mov|webm|ogv)$/i;function IE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class aZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${IE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class tZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!xE.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new aZ(_,$);return new tZ(_,$)}};g_();function CE(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function eZ(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:q,pollMs:L=3000,ownerDocument:K=document}=_,Q=null,V=null,F=!1,B=!1,U=!1;async function D(){if(B||U||F)return;let O=j();if(!O)return;try{let y=await V7($);if(B||U||!y?.mtime)return;if(y.mtime!==O)F=!0,H(),k()}catch(y){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",y)}}function E(){if(H(),B)return;Q=setInterval(D,L)}function H(){if(Q)clearInterval(Q),Q=null}function k(){if(V||B)return;let O=K.createElement("div");O.className="editor-conflict-bar",O.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,O.addEventListener("click",(y)=>{let x=y.target.closest("[data-action]");if(!x)return;let z=x.getAttribute("data-action");if(z==="reload")A(),X();else if(z==="save-copy"){let J=CE($);Y(J)}else if(z==="overwrite")A(),q();else if(z==="dismiss")A()}),V=O,G.insertBefore(O,Z)}function A(){if(V)V.remove(),V=null;F=!1,E()}return{start(){E()},stop(){H()},onSaved(O){F=!1,U=!1,E()},dispose(){if(B=!0,H(),V)V.remove(),V=null}}}var PE=/\.mindmap\.ya?ml$/i,O2=String(Date.now());function fE(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function _X(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function M7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function RE(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function SE(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="mindmap-undo" title="Undo (Ctrl+Z)" disabled>Undo</button>
        <button type="button" id="mindmap-redo" title="Redo (Ctrl+Shift+Z)" disabled>Redo</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let G=document.createElement("div");G.id="context-menu",G.className="context-menu hidden",G.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(G)}class $X{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${fE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class jX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(_X())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,RE("/static/css/mindmap.css?v="+O2),await Promise.all([M7("/static/js/vendor/d3-mindmap.min.js?v="+O2),M7("/static/js/vendor/js-yaml.min.js?v="+O2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),SE(this.mindmapEl);let j=_X(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await M7("/static/js/vendor/mindmap-editor.js?v="+O2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=eZ({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var T7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!PE.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new $X(_,$);return new jX(_,$)}};class GX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var a0=new GX;var $5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};x0();function ZX(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,q]=C({text:"",totalLines:0}),[L,K]=C(null),[Q,V]=C(null),[F,B]=C(null),U=u(null),D=u(0),E=u(!1),H=u(""),k=u(""),A=u(!1),O=u(0),y=u(null),x=u(null),z=u(null),J=u(null),M=u(!1),W=u(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:q,pendingRequest:L,setPendingRequest:K,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:F,setSteerQueuedTurnId:B,lastAgentEventRef:U,lastSilenceNoticeRef:D,isAgentRunningRef:E,draftBufferRef:H,thoughtBufferRef:k,previewResyncPendingRef:A,previewResyncGenerationRef:O,pendingRequestRef:y,stalledPostIdRef:x,currentTurnIdRef:z,steerQueuedTurnIdRef:J,thoughtExpandedRef:M,draftExpandedRef:W}}x0();var gE=0.1,KX=4,VX=4,XX=160,YX=1600,qX=200,LX=1600;function N$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function QX(_=N$()){return _>0?Math.floor(_*gE):0}function $6(_,$=N$(),j=0){let G=QX($)+KX+(j>0?VX+Math.max(0,j):0),Z=$>0?Math.floor($-G):YX;return Math.min(Math.max(Number(_)||0,XX),Math.max(XX,Math.min(YX,Z)))}function j6(_,$=N$(),j=0){let G=QX($)+VX+(j>0?KX+Math.max(0,j):0),Z=$>0?Math.floor($-G):LX;return Math.min(Math.max(Number(_)||0,qX),Math.max(qX,Math.min(LX,Z)))}function FX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientX,B=$.current||280,U=Q.currentTarget;U.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=F,E=(k)=>{D=k.clientX;let A=$6(B+(k.clientX-F),N$(),j?.current||0);V.style.setProperty("--sidebar-width",`${A}px`),$.current=A},H=()=>{let k=$6(B+(D-F),N$(),j?.current||0);$.current=k,U.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Q_("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,X=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let B=F.clientX,U=$.current||280,D=Q.currentTarget;D.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(k)=>{let A=k.touches[0];if(!A)return;k.preventDefault();let O=$6(U+(A.clientX-B),N$(),j?.current||0);V.style.setProperty("--sidebar-width",`${O}px`),$.current=O},H=()=>{D.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Q_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,Y=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientX,B=j.current||$.current||280,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=F,E=(k)=>{D=k.clientX;let A=j6(B+(k.clientX-F),N$(),$?.current||0);V.style.setProperty("--editor-width",`${A}px`),j.current=A},H=()=>{let k=j6(B+(D-F),N$(),$?.current||0);j.current=k,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q_("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,q=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let B=F.clientX,U=j.current||$.current||280,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let E=(k)=>{let A=k.touches[0];if(!A)return;k.preventDefault();let O=j6(U+(A.clientX-B),N$(),$?.current||0);V.style.setProperty("--editor-width",`${O}px`),j.current=O},H=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",Q_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,L=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientY,B=G?.current||200,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=F,E=(k)=>{D=k.clientY;let A=Math.min(Math.max(B-(k.clientY-F),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${A}px`),G)G.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let k=Math.min(Math.max(B-(D-F),100),window.innerHeight*0.5);if(G)G.current=k;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q_("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,K=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let B=F.clientY,U=G?.current||200,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let E=(k)=>{let A=k.touches[0];if(!A)return;k.preventDefault();let O=Math.min(Math.max(U-(A.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",Q_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:K}}x0();function w7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var BX=w7("warning",30000),NX=w7("finalize",120000),UX=w7("refresh",30000),HX=30000;function EX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function G6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function DX(_=30000){let[,$]=C(0);g(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function WX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function z2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function uE(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function b$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function U$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function J2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return U$(_)?"Compacting context":"Working..."}function OX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function Z6(_,$=Date.now()){let j=z2(_);if(j===null)return null;return OX(Math.max(0,$-j))}function zX(_,$=Date.now()){let j=uE(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${OX(G)}`}x0();function PY(_={}){p1(_)}function fY(){let[_,$]=C(!1);if(g(()=>{let Z=(Y)=>{let q=j5(Y?.detail?.section);if(q)try{window.__piclawSettingsRequestedSection=q}catch(L){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=A2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(g(()=>{Promise.resolve().then(() => (CY(),IY)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return N`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;return N`
        <div class="settings-dialog-backdrop" onClick=${(Z)=>{if(Z.target===Z.currentTarget)$(!1)}}>
            <${j} onClose=${()=>$(!1)} />
        </div>
    `}x0();function ZW(_,$){return new URL(String(_||""),$).toString()}function RY(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=P((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},q=ZW(Z,window.location.href);if(Y)window.history.replaceState(null,"",q);else window.history.pushState(null,"",q);$(window.location.href)},[]);return{locationParams:X0(()=>new URL(_).searchParams,[_]),navigate:j}}x0();x0();function SY(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function d7(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var XW=400,i7=60,YW=220,o7="mdPreviewHeight";function qW(){return SY(localStorage,o7,i7,YW)}function u2({getContent:_,path:$,onClose:j}){let[G,Z]=C(""),[X,Y]=C(qW),q=u(null),L=u(null),K=u(""),Q=u(_);return Q.current=_,g(()=>{let B=()=>{let D=Q.current?.()||"";if(D===K.current)return;K.current=D;try{let E=e_(D,null);Z(E)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};B();let U=setInterval(B,XW);return()=>clearInterval(U)},[]),g(()=>{if(q.current&&G)B$(q.current).catch((B)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",B,{path:$})})},[G]),N`
        <div
            class="md-preview-splitter"
            onMouseDown=${(B)=>{B.preventDefault();let U=B.clientY,D=L.current?.offsetHeight||X,E=L.current?.parentElement,H=E?E.offsetHeight*0.7:500,k=B.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=(y)=>{let x=Math.min(Math.max(D-(y.clientY-U),i7),H);Y(x)},O=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",d7(localStorage,o7,L.current?.offsetHeight||X),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",O)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",O)}}
            onTouchStart=${(B)=>{B.preventDefault();let U=B.touches[0];if(!U)return;let D=U.clientY,E=L.current?.offsetHeight||X,H=L.current?.parentElement,k=H?H.offsetHeight*0.7:500,A=B.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let O=(x)=>{let z=x.touches[0];if(!z)return;x.preventDefault();let J=Math.min(Math.max(E-(z.clientY-D),i7),k);Y(J)},y=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",d7(localStorage,o7,L.current?.offsetHeight||X),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",y)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",y),document.addEventListener("touchcancel",y)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:X+"px"}}>
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
                ref=${q}
                dangerouslySetInnerHTML=${{__html:G}}
            />
        </div>
    `}function gY(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function LW(_){return _==="error"?"Could not open branch window":"Opening branch…"}function uY(_){return N`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${LW(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function bY(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:q,handleTabActivate:L,previewTabs:K,diffTabs:Q,handleTabTogglePreview:V,handleTabToggleDiff:F,editorContainerRef:B,getPaneContent:U,panePopoutPath:D}=_,E=j&&!G&&Z,H=X?`Pane window controls for ${X}`:"Pane window controls";return N`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${E&&N`
          <div class="pane-popout-hover-zone" aria-hidden="true"></div>
          <div class="pane-popout-controls" role="toolbar" aria-label=${H}>
            <details class="pane-popout-controls-menu">
              <summary
                class="pane-popout-controls-trigger pane-popout-controls-icon-button"
                aria-label=${H}
                title=${H}
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 4.75h10" />
                  <path d="M5 8h8" />
                  <path d="M7 11.25h6" />
                </svg>
              </summary>
              <div class="pane-popout-controls-panel">
                ${Y.length>1&&N`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${Y.map((k)=>N`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${k.id===q?" active":""}`}
                          onClick=${(A)=>{L(k.id),A.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${k.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${q&&Q.has(q)&&N`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{F(q),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${q&&K.has(q)&&N`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{V(q),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?N`<div class="editor-pane-host" ref=${B}></div>`:N`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${D||"No pane path provided."}</p>
            </div>
          `}
        ${j&&q&&K.has(q)&&N`
          <${u2}
            getContent=${U}
            path=${q}
            onClose=${()=>V(q)}
          />
        `}
      </div>
    </div>
  `}x0();x0();function b2(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function KW(_,$){let j=b2(_),G=b2($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function K6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function s7(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function VW(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function QW(_,$,j=0,G=(Z)=>Z){let Z=b2($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=VW(X.length,j),q=X.map((L)=>b2(G(L)));for(let L of Y)if(q[L].startsWith(Z))return L;for(let L of Y)if(q[L].includes(Z))return L;return-1}function a7(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(KW(X,$))return j}return QW(Z,$,0,G)}g_();function v2(_){return String(_||"").trim().toLowerCase()}function t7(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return v2($[1]||"")}function FW(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=v2(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function vY(_,$,j={}){let G=t7($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return FW(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return v2(X?.agent_name).startsWith(G)})}function e7(_){let $=v2(_);return $?`@${$} `:""}function mY(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function cY(_,$,j={}){if(!_||_.isComposing)return!1;if(!mY(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function _9(_,$={}){if(!mY($))return!1;return String(_||"")==="@"}function $9(_){let $=j9(_);return $?`@${$}`:""}function j9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function m2(_,$=""){let j=String(_||""),G=j9(j),Z=j9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function BW(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function c2(_,$={}){let j=$9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=BW(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function lY(_,$,j){let G=$9(_),Z=$9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function l2({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function h2({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function p2(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";if(_?.type==="intent")return"dot";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function hY(_,$={}){return p2(_,$)==="dot"}x0();var pY=350;function NW(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function UW(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let q=NW(j);return{show:!0,statusClass:j,label:q,title:`Connection: ${q}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):pY,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!0,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function G9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):pY,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return g(()=>{if(_==="disconnected"){let q=Date.now();Z((L)=>L??q),Y(q);return}Z(null),Y(Date.now())},[_]),g(()=>{if(_!=="disconnected"||G===null)return;let q=j-(Date.now()-G);if(q<=0)return;let L=setTimeout(()=>{Y(Date.now())},q);return()=>clearTimeout(L)},[_,G,j]),X0(()=>UW(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}x0();function k1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let q=`${_}-file-pill`,L=`${_}-file-name`,K=`${_}-file-remove`,Q=Y==="message"?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return N`
    <span class=${q} title=${j||$} onClick=${Z}>
      ${Q}
      <span class=${L}>${$}</span>
      ${G&&N`
        <button
          class=${K}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),G()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function Z9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function HW(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function EW(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function X9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=I1(_),Z=HW(_),X=EW(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function nY(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let q=/[\s\n]$/.test(G)?"":" ";return`${G}${q}${Y}`}function rY(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let q=String(Y[0].transcript||"").trim();if(!q)continue;if(Y.isFinal)j=`${j} ${q}`.trim();else G=`${G} ${q}`.trim()}return{finalText:j,interimText:G}}function Y9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var DW=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],dY="piclaw_compose_history";function WW(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function OW(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return dY;return`${dY}:${encodeURIComponent($)}`}function zW(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),q=Boolean(X?.archived_at);if(Y!==q)return Y?1:-1;let L=String(Z?.agent_name||"").trim(),K=String(X?.agent_name||"").trim(),Q=L.localeCompare(K,void 0,{sensitivity:"base"});if(Q!==0)return Q;let V=String(Z?.chat_jid||"").trim(),F=String(X?.chat_jid||"").trim();return V.localeCompare(F,void 0,{sensitivity:"base"})}),G}function JW(_){return Boolean(_?.is_active&&!_?.archived_at)}function AW(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function iY(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function kW(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function MW(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function TW(_){return _==="abort"||_==="compacting"}function wW(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!0}}function yW({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,q="Compact context",L=X!=null?`Context: ${V6(X)} / ${V6(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,K=typeof j==="string"?j.trim():"",Q=typeof G==="string"?G.trim():"",V=K?`${L} — ${Q||"Smart compaction"} · ${K}`:`${L} — ${"Compact context"}`,F=9,B=2*Math.PI*9,U=Z/100*B,D=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return N`
        <button
            class=${`compose-context-pie icon-btn${K?" is-compacting":""}`}
            type="button"
            title=${V}
            aria-label=${K?`Smart compaction ${K}`:"Compact context"}
            onClick=${(E)=>{E.preventDefault(),E.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${D}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${B}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${K&&N`<span class="compose-context-pie-timer">${K}</span>`}
        </button>
    `}function V6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function xW(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function oY(_,$){let j=Number(_?.contextWindow??_?.context_window),G=xW($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${V6(G)} tokens, but this model only fits ${V6(j)}. Compact first.`,tokens:G,contextWindow:j}}function q9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${V6($)} ctx`}function IW(_,$){let j=typeof _==="string"?_.trim():"",G=q9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function CW(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function tY(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let V=X.trim();if(!V)continue;let F=V.indexOf("/"),B=F>0?V.slice(0,F).trim():"",U=F>0?V.slice(F+1).trim():V;Z.push({label:V,provider:B,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",q=typeof X.id==="string"?X.id.trim():"",L=CW(X.label,Y,q);if(!L)continue;let K=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,Q=Number(X.context_window??X.contextWindow);Z.push({label:L,provider:Y,id:q,name:K,contextWindow:Number.isFinite(Q)&&Q>0?Q:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function PW(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,q9(_.contextWindow)].filter(Boolean).join(" ")}function fW(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=tY($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function n2(_){return(typeof _==="string"?_.trim():"")||null}function sY(_){return n2(_)?.toLowerCase()??null}function aY(_,$){let j=sY(_),G=sY($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function RW(_,$){let j=$&&typeof $==="object"?$:{},G=n2(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=n2(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&aY(G,Z))return null;let X=n2(_??j.current??j.model);if(X&&Z&&!aY(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function SW(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let q=j[Z].trim();if(!q){Z+=1;continue}if(q==="Messages:"||q.startsWith("Channel:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(q)){X=!0,Z+=1;let L=[];while(Z<j.length){let K=j[Z],Q=K.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(Q))break;if(Q.startsWith("Channel:")||Q==="Messages:")break;L.push(K.startsWith("  ")?K.slice(2):K),Z+=1}if(L.length>0)G.push(L.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function gW(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function uW(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=gW(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function bW(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Z.push(Q[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function vW(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Attachments:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(V)Z.push({id:V[1],label:(V[2]||"").trim()||`attachment:${V[1]}`,raw:Q})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function eY(_){let $=SW(_||""),j=uW($||""),G=bW(j.content||""),Z=vW(G.content||"");return{text:Z.content||"",fileRefs:j.fileRefs,messageRefs:G.messageRefs,attachmentRefs:Z.attachmentRefs}}function mW(_){let $=eY(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function cW(_){let{queuedItem:$,buildDraft:j=mW,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:q,onSetMessageRefs:L,setContent:K,textareaRef:Q,resizeTextarea:V=()=>{},scheduleTimeout:F=(H,k=0)=>setTimeout(H,k),scheduleRaf:B=(H)=>requestAnimationFrame(H),logger:U=console}=_||{};if(!$)return!1;let D=j($?.content||""),E=D.content;return U?.info?.("[compose-box] Returning queued item to editor",{text:E?.slice(0,80),fileRefs:D.fileRefs?.length,messageRefs:D.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),q?.(D.fileRefs),L?.(D.messageRefs),K?.(E),B(()=>{let H=Q?.current;if(!H)return;H.value=E,V();let k=E.length;H.selectionStart=k,H.selectionEnd=k,H.focus()}),F(()=>{try{G?.($)}catch(H){U?.warn?.("[compose-box] Failed to remove returned queued follow-up.",H)}},0),!0}function L9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return N`
        <div class="compose-queue-stack">
            ${_.map((Y,q)=>{let L=typeof Y?.content==="string"?Y.content:"",K=eY(L);if(!K.text.trim()&&K.fileRefs.length===0&&K.messageRefs.length===0&&K.attachmentRefs.length===0)return null;let Q=q>0,V=q<_.length-1,F=!0;return N`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${L}>
                            ${K.text.trim()&&N`<div class="compose-queue-stack-text">${K.text}</div>`}
                            ${(K.messageRefs.length>0||K.fileRefs.length>0||K.attachmentRefs.length>0)&&N`
                                <div class="compose-queue-stack-refs">
                                    ${K.messageRefs.map((B)=>N`
                                        <${k1}
                                            key=${"queue-msg-"+B}
                                            prefix="compose"
                                            label=${"msg:"+B}
                                            title=${"Message reference: "+B}
                                            icon="message"
                                        />
                                    `)}
                                    ${K.fileRefs.map((B)=>{let U=B.split("/").pop()||B;return N`
                                            <${k1}
                                                key=${"queue-file-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${K.attachmentRefs.map((B)=>N`
                                        <${k1}
                                            key=${"queue-attachment-"+B.id}
                                            prefix="compose"
                                            label=${B.label}
                                            title=${B.raw}
                                        />
                                    `)}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            ${_.length>1&&N`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    type="button"
                                    title="Move up"
                                    aria-label="Move up in queue"
                                    disabled=${!Q}
                                    onClick=${()=>Q&&G?.(q,q-1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>
                                <button
                                    class="compose-queue-stack-move-btn"
                                    type="button"
                                    title="Move down"
                                    aria-label="Move down in queue"
                                    disabled=${!V}
                                    onClick=${()=>V&&G?.(q,q+1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            `}
                            ${F&&N`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(B)=>{B.stopPropagation(),Z?.(Y)}}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                            `}
                            <button
                                class="compose-queue-stack-steer-btn"
                                type="button"
                                title="Inject queued follow-up as steer"
                                aria-label="Inject queued follow-up as steer"
                                onClick=${()=>$?.(Y)}
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
                                aria-label="Cancel queued message"
                                onClick=${()=>j?.(Y)}
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                `})}
        </div>
    `}function _q({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:q,fileRefs:L=[],onRemoveFileRef:K,onClearFileRefs:Q,messageRefs:V=[],onRemoveMessageRef:F,onClearMessageRefs:B,activeModel:U=null,agentModelsPayload:D=null,modelUsage:E=null,thinkingLevel:H=null,supportsThinking:k=!1,contextUsage:A=null,onContextCompact:O,notificationsEnabled:y=!1,notificationPermission:x="default",onToggleNotifications:z,onModelChange:J,onModelStateChange:M,activeEditorPath:W=null,onAttachEditorFile:T,onOpenFilePill:I,followupQueueItems:f=[],onInjectQueuedFollowup:S,onRemoveQueuedFollowup:v,onMoveQueuedFollowup:c,onSubmitIntercept:h,onMessageResponse:$0,isAgentActive:b=!1,activeChatAgents:e=[],currentChatJid:s="web:default",connectionStatus:q0="connected",onSetFileRefs:Z0,onSetMessageRefs:D0,onSubmitError:Q0,onSwitchChat:L0,onRenameSession:N0,isRenameSessionInProgress:H0=!1,onCreateSession:y0,onCreateRootSession:i,onDeleteSession:j0,onPurgeArchivedSession:O0,onRestoreSession:f0,showQueueStack:m0=!0,statusNotice:l0=null,extensionWorkingState:G_=null,prefillRequest:h0=null}){let[c0,M0]=C(""),[p0,b0]=C(""),[d0,H_]=C(!1),[E_,K_]=C(!1),[S0,A0]=C("or"),[n0,q_]=C([]),[O_,F0]=C(!1),[T0,C0]=C([]),[U_,A_]=C(0),[V_,X_]=C(!1),D_=u(null),[M_,_0]=C([]),[z0,k0]=C(0),[g0,v0]=C(!1),[a,o]=C(!1),[r,Y0]=C(!1),[G0,E0]=C(!1),[I0,t0]=C([]),[J0,R0]=C(0),[Z_,L_]=C(0),[$_,B_]=C(!1),[k_,e0]=C(!1),[t,W0]=C(0),[s0,i0]=C(null),[P_,z_]=C(null),[x_,i1]=C(()=>X9()),[J_,d_]=C({kind:"idle",title:"",detail:""}),[O1,b_]=C(()=>Date.now()),[n_,q1]=C(0),__=u(null),v_=u(null),i_=u(null),L1=u(null),M1=u(null),o1=u(null),W$=u(null),F1=u(null),s_=u({value:"",updatedAt:0}),r_=u(null),a$=u(""),j1=u(""),B1=u(""),K1=u(""),s1=u(!1),N1=u(0),O$=u(!1),k6=200,z$=OW(s),I_=(w)=>{let m=new Set,n=[];for(let V0 of w||[]){if(typeof V0!=="string")continue;let P0=V0.trim();if(!P0||m.has(P0))continue;m.add(P0),n.push(P0)}return n},T1=(w=z$)=>{let m=E1(w);if(!m)return[];try{let n=JSON.parse(m);if(!Array.isArray(n))return[];return I_(n)}catch{return[]}},O5=(w,m=z$)=>{Q_(m,JSON.stringify(w))},R1=u(T1(z$)),S1=u(-1),a1=u(""),x4=u("");g(()=>{R1.current=T1(z$),S1.current=-1,a1.current=""},[z$]),g(()=>{if(!j)return;fetch("/agent/settings-data").then((w)=>w.json()).then((w)=>{if(w?.searchMatchMode)A0(w.searchMatchMode)}).catch(()=>{})},[j]),g(()=>{let w=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(s||"web:default")}`).then((n)=>n.ok?n.json():null).then((n)=>{if(w||!n?.commands)return;D_.current=n.commands.map((V0)=>({name:V0.name,description:V0.description||""}))}).catch((n)=>{console.debug("[compose] failed to fetch dynamic commands",n)}),()=>{w=!0}},[s]),g(()=>{let w=WW(h0,x4.current,j);if(!w.shouldApply)return;x4.current=w.nextToken,i0(null),M0(w.text),B0(w.text),w0(w.text),requestAnimationFrame(()=>{d();let m=__.current;if(!m)return;try{m.focus({preventScroll:!0})}catch{m.focus()}let n=w.text.length;m.setSelectionRange?.(n,n)})},[h0,j]),g(()=>{i1(X9())},[]);let J$=c0.trim()||n0.length>0||L.length>0||V.length>0,z5=J_.kind!=="idle",J5=J_.kind==="requesting_permission"||J_.kind==="listening",I4=!j&&Boolean(x_?.showButton),t$=J_.kind==="requesting_permission"||J_.kind==="listening",G1=t$?"Stop voice input":x_?.title||"Voice input",f_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),A5=typeof window<"u"&&typeof Notification<"u",t1=typeof window<"u"?Boolean(window.isSecureContext):!1,k5=A5&&t1&&x!=="denied",C4=x==="granted"&&y,z1=U$(l0),A$=J2(l0),w1=typeof l0?.detail==="string"&&l0.detail.trim()?l0.detail.trim():"",k$=z1?Z6(l0,O1):null,e1=wW(G_,n_),Z1=G_?.indicator&&typeof G_.indicator==="object"?G_.indicator:null,e$=C4?"Disable notifications":"Enable notifications",M5=n0.length>0||L.length>0||V.length>0,_$=G9(q0),P4=_$.label,X1=_$.title,M$=kW(b,J$,z1),$$=MW(b,z1),T5=(Array.isArray(e)?e:[]).filter((w)=>!w?.archived_at),R_=(()=>{for(let w of Array.isArray(e)?e:[]){let m=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(m&&m===s)return w}return null})(),f4=Boolean(R_&&R_.chat_jid===(R_.root_chat_jid||R_.chat_jid)),R8=Boolean(f4&&(R_?.chat_jid||s)==="web:default"),y1=(()=>{let w=typeof R_?.parent_branch_id==="string"?R_.parent_branch_id.trim():"",m=typeof R_?.branch_id==="string"?R_.branch_id.trim():"";if(!R_||!w||!m||R_.archived_at)return null;if((Array.isArray(e)?e:[]).filter((P0)=>{let N_=typeof P0?.parent_branch_id==="string"?P0.parent_branch_id.trim():"";return N_&&N_===m}).length>0)return null;return(Array.isArray(e)?e:[]).find((P0)=>{let N_=typeof P0?.branch_id==="string"?P0.branch_id.trim():"";return N_&&N_===w&&!P0?.archived_at})||null})(),R4=X0(()=>zW(e,s),[e,s]),j$=R4.length>0,T$=j$&&typeof L0==="function",w$=j$&&typeof f0==="function",S4=Boolean(H0||O$.current),x1=!j&&typeof N0==="function"&&!S4,G$=!j&&typeof y0==="function",_4=!j&&typeof i==="function",$4=!j&&!b&&!k_&&Boolean(y1?.chat_jid),Z$=!j&&typeof j0==="function"&&!R8,T6=!j&&typeof O0==="function",X$=!j&&(T$||w$||x1||G$||_4||$4||Z$||T6),w6=fW(U,D),w5=w6.showPicker,y5=w6.label,x5=k&&H?` (${H})`:"",S8=x5.trim()?`${H}`:"",y6=RW(U,D),x6=typeof E?.hint_short==="string"?E.hint_short.trim():"",I6=[S8||null,y6?.label||null,x6||null].filter(Boolean).join(" • "),g8=[U?`Current model: ${y5}${x5}`:null,y6?.title||null,E?.plan?`Plan: ${E.plan}`:null,x6||null,E?.primary?.reset_description||null,E?.secondary?.reset_description||null].filter(Boolean),R=a?"Switching model…":g8.join(" • ")||(w5?"Select a model (tap to open model picker)":`Current model: ${y5}${x5} (tap to open model picker)`),l=!j&&(w5||A&&A.percent!=null),p=(w)=>{if(!w||typeof w!=="object")return;let m=w.model??w.current;if(typeof M==="function")M({...w,model:m??null,thinking_level:w.thinking_level??null,thinking_level_label:w.thinking_level_label??null,supports_thinking:w.supports_thinking,provider_usage:w.provider_usage??null});if(m&&typeof J==="function")J(m)},d=(w)=>{let m=w||__.current;if(!m)return;m.style.height="auto",m.style.height=`${m.scrollHeight}px`,m.style.overflowY="hidden"},B0=(w)=>{if(!w.startsWith("/")||w.includes(`
`)){X_(!1),C0([]);return}let m=w.toLowerCase().split(" ")[0];if(m.length<1){X_(!1),C0([]);return}let V0=(D_.current||DW).filter((P0)=>P0.name.startsWith(m)||P0.name.replace(/-/g,"").startsWith(m.replace(/-/g,"")));if(V0.length>0&&!(V0.length===1&&V0[0].name===m))v0(!1),_0([]),C0(V0),A_(0),X_(!0);else X_(!1),C0([])},K0=(w)=>{let m=c0,n=m.indexOf(" "),V0=n>=0?m.slice(n):"",P0=w.name+V0;M0(P0),X_(!1),C0([]),requestAnimationFrame(()=>{let N_=__.current;if(!N_)return;let h_=P0.length;N_.selectionStart=h_,N_.selectionEnd=h_,N_.focus()})},w0=(w)=>{if(_9(w,{searchMode:j,showSessionSwitcherButton:X$})){v0(!1),_0([]);return}if(t7(w)==null){v0(!1),_0([]);return}let m=vY(T5,w,{currentChatJid:s});if(m.length>0&&!(m.length===1&&e7(m[0].agent_name).trim().toLowerCase()===String(w||"").trim().toLowerCase()))X_(!1),C0([]),_0(m),k0(0),v0(!0);else v0(!1),_0([])},u0=(w)=>{let m=e7(w?.agent_name);if(!m)return;M0(m),v0(!1),_0([]),requestAnimationFrame(()=>{let n=__.current;if(!n)return;let V0=m.length;n.selectionStart=V0,n.selectionEnd=V0,n.focus()})},U0=()=>{if(j||!T$&&!w$&&!x1&&!G$&&!Z$)return!1;return s_.current={value:"",updatedAt:0},Y0(!1),X_(!1),C0([]),v0(!1),_0([]),E0(!0),!0},o0=(w)=>{if(w?.preventDefault?.(),w?.stopPropagation?.(),j||!T$&&!w$&&!x1&&!G$&&!Z$)return;if(G0){s_.current={value:"",updatedAt:0},E0(!1);return}U0()},l_=(w)=>{let m=typeof w==="string"?w.trim():"";if(E0(!1),!m||m===s){requestAnimationFrame(()=>__.current?.focus());return}L0?.(m)},a_=async(w)=>{let m=typeof w==="string"?w.trim():"";if(E0(!1),!m||typeof f0!=="function"){requestAnimationFrame(()=>__.current?.focus());return}try{await f0(m)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>__.current?.focus())}},T_=X0(()=>{let w=[];for(let m of R4){let n=Boolean(m?.archived_at),V0=typeof m?.agent_name==="string"?m.agent_name.trim():"",P0=typeof m?.chat_jid==="string"?m.chat_jid.trim():"";if(!V0||!P0)continue;w.push({type:"session",key:`session:${P0}`,label:`@${V0} — ${P0}${m?.is_active?" active":""}${n?" archived":""}`,chat:m,disabled:n?!w$:!T$})}if(G$)w.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(_4)w.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(y1?.chat_jid)w.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!$4});if(x1)w.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:S4});if(Z$)w.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return w},[R4,w$,T$,G$,_4,y1,$4,x1,Z$,S4]),u8=async(w)=>{if(w?.preventDefault)w.preventDefault();if(w?.stopPropagation)w.stopPropagation();if(typeof N0!=="function"||H0||O$.current)return;O$.current=!0,E0(!1);try{await N0()}catch(m){console.warn("Failed to rename session:",m)}finally{O$.current=!1}requestAnimationFrame(()=>__.current?.focus())},Uj=async()=>{if(typeof y0!=="function")return;E0(!1);try{await y0()}catch(w){console.warn("Failed to create session:",w)}requestAnimationFrame(()=>__.current?.focus())},Hj=async()=>{if(typeof i!=="function")return;E0(!1);let w=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",m=String(w||"").trim();if(!m){requestAnimationFrame(()=>__.current?.focus());return}try{await i(m)}catch(n){console.warn("Failed to create root session:",n)}requestAnimationFrame(()=>__.current?.focus())},Ej=async()=>{let w=typeof y1?.chat_jid==="string"?y1.chat_jid.trim():"";if(!w||k_||b)return;E0(!1),i0(null),z_(null),e0(!0);try{let m=await D1("default","/rollup",null,[],null,s);$0?.(m),_?.(m);let n=m?.command;if(n?.status==="error"){let P0=n?.message||"Failed to merge current session with parent.";i0(P0),Q0?.(P0);return}let V0=typeof n?.rolled_up_to==="string"&&n.rolled_up_to.trim()?n.rolled_up_to.trim():w;L0?.(V0)}catch(m){let n=m?.message||"Failed to merge current session with parent.";i0(n),Q0?.(n),console.warn("Failed to merge session with parent:",m)}finally{e0(!1)}requestAnimationFrame(()=>__.current?.focus())},Dj=async()=>{if(typeof j0!=="function")return;E0(!1);try{await j0(s)}catch(w){console.warn("Failed to delete session:",w)}requestAnimationFrame(()=>__.current?.focus())},y$=(w)=>{if(j)b0(w);else M0(w),B0(w),w0(w);requestAnimationFrame(()=>d())},eF=(w)=>{let m=j?p0:c0,n=m&&!m.endsWith(`
`)?`
`:"",V0=`${m}${n}${w}`.trimStart();y$(V0)},b8=P(()=>{requestAnimationFrame(()=>{let w=__.current;if(!w)return;try{w.focus({preventScroll:!0})}catch{w.focus()}})},[]),g1=P(()=>{d_({kind:"idle",title:"",detail:""})},[]),v8=P((w=j1.current,m=B1.current)=>{if(j)return;y$(nY(a$.current,w,m))},[j]),x$=P(()=>{s1.current=!0;let w=r_.current;if(!w){g1();return}try{w.stop()}catch{r_.current=null,g1()}},[g1]),_B=P(()=>{if(i0(null),z_(null),r_.current){x$();return}if(!x_?.showButton)return;if(x_.mode==="fallback"){b8(),d_({kind:"guidance",title:x_.title||"Use keyboard dictation",detail:x_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!x_?.canStart||!x_?.recognitionCtor){d_({kind:"error",title:x_?.title||"Voice input unavailable",detail:x_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let w=new x_.recognitionCtor;if(r_.current=w,a$.current=String(c0||""),j1.current="",B1.current="",K1.current="",s1.current=!1,w.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",w.interimResults=!0,w.continuous=!1,"maxAlternatives"in w)w.maxAlternatives=1;w.onstart=()=>{d_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},w.onresult=(m)=>{let{finalText:n,interimText:V0}=rY(m?.results,m?.resultIndex||0);if(n)j1.current=`${j1.current} ${n}`.trim();B1.current=V0,v8(),d_({kind:"listening",title:"Listening…",detail:V0?`Heard: ${V0}`:"Speak now. Tap the mic again to stop."})},w.onerror=(m)=>{let n=String(m?.error||"").trim();if(K1.current=n,r_.current=null,B1.current="",n==="aborted"){g1();return}d_({kind:"error",title:"Voice input failed",detail:Y9(n,x_)})},w.onend=()=>{let m=K1.current,n=s1.current,V0=Boolean(j1.current.trim()||B1.current.trim());if(r_.current=null,s1.current=!1,K1.current="",B1.current.trim())j1.current=`${j1.current} ${B1.current}`.trim(),B1.current="";if(V0)v8(j1.current,"");if(m&&m!=="aborted")return;if(!V0&&!n){d_({kind:"error",title:"No speech detected",detail:Y9("no-speech",x_)});return}g1()},d_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),b8(),w.start()}catch(w){r_.current=null,d_({kind:"error",title:"Voice input failed",detail:w?.message||"Could not start native browser speech recognition."})}},[v8,g1,c0,b8,x_,x$]),$B=(w)=>{let m=w?.command?.model_label;if(m)return m;let n=w?.command?.message;if(typeof n==="string"){let V0=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(V0?.[1])return V0[1].trim()}return null},Wj=async(w)=>{if(j||a)return;i0(null),z_(null),o(!0);try{let m=await D1("default",w,null,[],null,s),n=$B(m);return p({model:n??U??null,thinking_level:m?.command?.thinking_level,thinking_level_label:m?.command?.thinking_level_label,supports_thinking:m?.command?.supports_thinking}),await Z9(D4,s,p),z_(iY(w,m)),_?.(m),!0}catch(m){return console.error("Failed to switch model:",m),alert("Failed to switch model: "+m.message),!1}finally{o(!1)}},jB=async()=>{await Wj("/cycle-model")},m8=async(w)=>{let m=typeof w==="string"?w:typeof w?.label==="string"?w.label:"";if(!m||a)return;let n=oY(w,A);if(n.blocked){i0(null),z_(n.note);return}if(await Wj(`/model ${m}`))Y0(!1)},GB=(w)=>{if(!w||w.disabled)return;if(w.type==="session"){let m=w.chat;if(m?.archived_at)a_(m.chat_jid);else l_(m.chat_jid);return}if(w.type==="action"){if(w.action==="new"){Uj();return}if(w.action==="new-root"){Hj();return}if(w.action==="rollup"){Ej();return}if(w.action==="rename"){u8();return}if(w.action==="delete")Dj()}},ZB=(w)=>{w.preventDefault(),w.stopPropagation(),s_.current={value:"",updatedAt:0},E0(!1),Y0((m)=>!m)},XB=async()=>{if(j)return;O?.(),await g4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},YB=(w)=>{if(w==="queue"||w==="steer"||w==="auto")return w;return b?"queue":void 0},g4=async(w,m,n={})=>{let V0=typeof w==="string"?w:c0;if(/^\/settings\s*$/i.test(V0.trim())){M0(""),requestAnimationFrame(()=>d()),p1();return}if(/^\/help\s*$/i.test(V0.trim())){M0(""),requestAnimationFrame(()=>d()),p1({section:"keyboard"});return}let{includeMedia:P0=!0,includeFileRefs:N_=!0,includeMessageRefs:h_=!0,clearAfterSubmit:c_=!0,recordHistory:u1=!0}=n||{},U1=typeof w==="string"?w:w&&typeof w?.target?.value==="string"?w.target.value:c0,Oj=typeof U1==="string"?U1:"";if(!Oj.trim()&&(P0?n0.length===0:!0)&&(N_?L.length===0:!0)&&(h_?V.length===0:!0))return;if(r_.current)x$();g1(),X_(!1),C0([]),v0(!1),_0([]),E0(!1),i0(null),z_(null);let C6=P0?[...n0]:[],P6=N_?[...L]:[],f6=h_?[...V]:[],j4=Oj.trim();if(u1&&j4){let G4=R1.current,V1=I_(G4.filter((l8)=>l8!==j4));if(V1.push(j4),V1.length>200)V1.splice(0,V1.length-200);R1.current=V1,O5(V1),S1.current=-1,a1.current=""}let OB=()=>{if(P0)q_([...C6]);if(N_)Z0?.(P6);if(h_)D0?.(f6);M0(j4),requestAnimationFrame(()=>d())};if(c_)M0(""),q_([]),Q?.(),B?.();(async()=>{try{let G4=await h?.({content:j4,submitMode:m,fileRefs:P6,messageRefs:f6,mediaFiles:C6});if(G4){_?.(G4);return}let V1=[];for(let Z4 of C6){let R6=await $7(Z4);V1.push(R6.id)}let l8=P6.length?`Files:
${P6.map((Z4)=>`- ${Z4}`).join(`
`)}`:"",zB=f6.length?`Referenced messages:
${f6.map((Z4)=>`- message:${Z4}`).join(`
`)}`:"",JB=V1.length?`Attachments:
${V1.map((Z4,R6)=>{let kB=C6[R6]?.name||`attachment-${R6+1}`;return`- attachment:${Z4} (${kB})`}).join(`
`)}`:"",AB=[j4,l8,zB,JB].filter(Boolean).join(`

`),I$=await D1("default",AB,null,V1,YB(m),s);if($0?.(I$),I$?.command)p({model:I$.command.model_label??U??null,thinking_level:I$.command.thinking_level,thinking_level_label:I$.command.thinking_level_label,supports_thinking:I$.command.supports_thinking}),await Z9(D4,s,p);z_(iY(j4,I$)),_?.(I$)}catch(G4){if(c_)OB();let V1=G4?.message||"Failed to send message.";i0(V1),Q0?.(V1),console.error("Failed to post:",G4)}})()},qB=(w)=>{S?.(w)},LB=P((w)=>{cW({queuedItem:w,onRemoveQueuedFollowup:v,setSubmitError:i0,setSubmitNotice:z_,setMediaFiles:q_,onSetFileRefs:Z0,onSetMessageRefs:D0,setContent:M0,textareaRef:__,resizeTextarea:d})},[v,Z0,D0,d]),I5=P((w)=>{if(j||!r&&!G0||w?.isComposing)return!1;let m=()=>{w.preventDefault?.(),w.stopPropagation?.()},n=()=>{s_.current={value:"",updatedAt:0}};if(w.key==="Escape"){if(m(),n(),r)Y0(!1);if(G0)E0(!1);return!0}if(r){if(w.key==="ArrowDown"){if(m(),n(),I0.length>0)R0((V0)=>(V0+1)%I0.length);return!0}if(w.key==="ArrowUp"){if(m(),n(),I0.length>0)R0((V0)=>(V0-1+I0.length)%I0.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&I0.length>0)return m(),n(),m8(I0[Math.max(0,Math.min(J0,I0.length-1))]),!0;if(K6(w)&&I0.length>0){m();let V0=s7(s_.current,w.key);s_.current=V0;let P0=a7(I0,V0.value,J0,(N_)=>PW(N_));if(P0>=0)R0(P0);return!0}}if(G0){if(w.key==="ArrowDown"){if(m(),n(),T_.length>0)L_((V0)=>(V0+1)%T_.length);return!0}if(w.key==="ArrowUp"){if(m(),n(),T_.length>0)L_((V0)=>(V0-1+T_.length)%T_.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&T_.length>0)return m(),n(),GB(T_[Math.max(0,Math.min(Z_,T_.length-1))]),!0;if(K6(w)&&T_.length>0){m();let V0=s7(s_.current,w.key);s_.current=V0;let P0=a7(T_,V0.value,Z_,(N_)=>N_.label);if(P0>=0)L_(P0);return!0}}return!1},[j,r,G0,I0,J0,T_,Z_,m8]),KB=(w)=>{if(w.isComposing)return;if(j&&w.key==="Escape"){w.preventDefault(),b0(""),q?.();return}if(I5(w))return;let m=__.current?.value??(j?p0:c0);if(cY(w,m,{searchMode:j,showSessionSwitcherButton:X$})){w.preventDefault(),U0();return}if(g0&&M_.length>0){let n=__.current?.value??(j?p0:c0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))v0(!1),_0([]);else{if(w.key==="ArrowDown"){w.preventDefault(),k0((V0)=>(V0+1)%M_.length);return}if(w.key==="ArrowUp"){w.preventDefault(),k0((V0)=>(V0-1+M_.length)%M_.length);return}if(w.key==="Tab"||w.key==="Enter"){w.preventDefault(),u0(M_[z0]);return}if(w.key==="Escape"){w.preventDefault(),v0(!1),_0([]);return}}}if(V_&&T0.length>0){let n=__.current?.value??(j?p0:c0);if(!String(n||"").startsWith("/"))X_(!1),C0([]);else{if(w.key==="ArrowDown"){w.preventDefault(),A_((V0)=>(V0+1)%T0.length);return}if(w.key==="ArrowUp"){w.preventDefault(),A_((V0)=>(V0-1+T0.length)%T0.length);return}if(w.key==="Tab"){w.preventDefault(),K0(T0[U_]);return}if(w.key==="Enter"&&!w.shiftKey){if(!m.includes(" ")){w.preventDefault();let P0=T0[U_];X_(!1),C0([]),g4(P0.name);return}}if(w.key==="Escape"){w.preventDefault(),X_(!1),C0([]);return}}}if(!j&&(w.key==="ArrowUp"||w.key==="ArrowDown")&&!w.metaKey&&!w.ctrlKey&&!w.altKey&&!w.shiftKey){let n=__.current;if(!n)return;let V0=n.value||"",P0=n.selectionStart===0&&n.selectionEnd===0,N_=n.selectionStart===V0.length&&n.selectionEnd===V0.length;if(w.key==="ArrowUp"&&P0||w.key==="ArrowDown"&&N_){let h_=R1.current;if(!h_.length)return;w.preventDefault();let c_=S1.current;if(w.key==="ArrowUp"){if(c_===-1)a1.current=V0,c_=h_.length-1;else if(c_>0)c_-=1;S1.current=c_,y$(h_[c_]||"")}else{if(c_===-1)return;if(c_<h_.length-1)c_+=1,S1.current=c_,y$(h_[c_]||"");else S1.current=-1,y$(a1.current||""),a1.current=""}requestAnimationFrame(()=>{let u1=__.current;if(!u1)return;let U1=u1.value.length;u1.selectionStart=U1,u1.selectionEnd=U1});return}}if(w.key==="Enter"&&!w.shiftKey&&(w.ctrlKey||w.metaKey)){if(w.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:d0,attachments:E_})}else g4(m,"steer");return}if(w.key==="Enter"&&!w.shiftKey){if(w.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:d0,attachments:E_})}else g4(m);return}if(w.key==="Escape"){if(r||G0||V_||g0)return;w.preventDefault(),__.current?.blur()}},c8=(w)=>{let m=Array.from(w||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!m.length)return;q_((n)=>[...n,...m]),i0(null)},VB=(w)=>{c8(w.target.files),w.target.value=""},QB=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),N1.current+=1,F0(!0)},FB=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),N1.current=Math.max(0,N1.current-1),N1.current===0)F0(!1)},BB=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),w.dataTransfer)w.dataTransfer.dropEffect="copy";F0(!0)},NB=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),N1.current=0,F0(!1),c8(w.dataTransfer?.files||[])},UB=(w)=>{if(j)return;let m=w.clipboardData?.items;if(!m||!m.length)return;let n=[];for(let V0 of m){if(V0.kind!=="file")continue;let P0=V0.getAsFile?.();if(P0)n.push(P0)}if(n.length>0)w.preventDefault(),c8(n)},HB=(w)=>{q_((m)=>m.filter((n,V0)=>V0!==w))},EB=()=>{i0(null),q_([]),Q?.(),B?.()},DB=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((w)=>{let{latitude:m,longitude:n,accuracy:V0}=w.coords,P0=`${m.toFixed(5)}, ${n.toFixed(5)}`,N_=Number.isFinite(V0)?` ±${Math.round(V0)}m`:"",h_=`https://maps.google.com/?q=${m},${n}`,c_=`Location: ${P0}${N_} ${h_}`;eF(c_)},(w)=>{let m=w?.message||"Unable to retrieve location.";alert(`Location error: ${m}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!r)return;s_.current={value:"",updatedAt:0},B_(!0),D4(s).then((w)=>{t0(tY(w)),p(w)}).catch((w)=>{console.warn("Failed to load model list:",w),t0([])}).finally(()=>{B_(!1)})},[r,U]),g(()=>{if(j)Y0(!1),E0(!1),X_(!1),C0([]),v0(!1),_0([])},[j]),g(()=>{if(G0&&!X$)E0(!1)},[G0,X$]),g(()=>{if(!r)return;let w=I0.findIndex((m)=>m?.label===U);R0(w>=0?w:0)},[r,I0,U]),g(()=>{if(!G0)return;L_(AW(T_,s)),s_.current={value:"",updatedAt:0}},[G0,s,T_]),g(()=>{if(!r)return;let w=(m)=>{let n=L1.current,V0=M1.current,P0=m.target;if(n&&n.contains(P0))return;if(V0&&V0.contains(P0))return;Y0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[r]),g(()=>{if(!G0)return;let w=(m)=>{let n=o1.current,V0=W$.current,P0=m.target;if(n&&n.contains(P0))return;if(V0&&V0.contains(P0))return;E0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[G0]),g(()=>{if(j||!r&&!G0)return;let w=(m)=>{I5(m)};return document.addEventListener("keydown",w,!0),()=>document.removeEventListener("keydown",w,!0)},[j,r,G0,I5]),g(()=>{if(!r)return;let w=L1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[r,J0,I0]),g(()=>{if(!G0)return;let w=o1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[G0,Z_,T_.length]),g(()=>{if(!g0||!i_.current)return;i_.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[g0,z0,M_.length]),g(()=>{if(!V_||!v_.current)return;v_.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[V_,U_,T0.length]),g(()=>{let w=(n)=>{if(!n||typeof n!=="object")return!1;if(n.isContentEditable)return!0;if(typeof n.closest!=="function")return!1;return Boolean(n.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},m=(n)=>{if(n.ctrlKey||n.metaKey||n.altKey)return;let V0=__.current;if(!V0)return;let P0=document.activeElement===V0;if(n.key==="Escape"&&!P0&&!w(n.target)){n.preventDefault(),V0.focus();return}if(n.key==="/"&&!P0&&!w(n.target))n.preventDefault(),y$("/"),requestAnimationFrame(()=>{V0.focus(),V0.selectionStart=1,V0.selectionEnd=1,B0("/")})};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),g(()=>{let w=()=>{let N_=F1.current?.clientWidth||0;W0((h_)=>h_===N_?h_:N_)};w();let m=F1.current,n=0,V0=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,w()})},P0=null;if(m&&typeof ResizeObserver<"u")P0=new ResizeObserver(()=>V0()),P0.observe(m);if(typeof window<"u")window.addEventListener("resize",V0);return()=>{if(n)cancelAnimationFrame(n);if(P0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",V0)}},[j,U,R_?.agent_name,X$,A?.percent]);let WB=(w)=>{let m=w.target.value;if(r_.current&&w?.isTrusted)x$();if(i0(null),z_(null),J_.kind==="guidance"||J_.kind==="error")g1();if(G0)E0(!1);if(d(w.target),_9(m,{searchMode:j,showSessionSwitcherButton:X$})){y$(""),requestAnimationFrame(()=>{let n=__.current;if(!n)return;n.value="",n.selectionStart=0,n.selectionEnd=0,n.focus()}),U0();return}y$(m)};return g(()=>{requestAnimationFrame(()=>d())},[c0,p0,j]),g(()=>{if(!j)return;if(r_.current)x$();return},[j,x$]),g(()=>{if(r_.current)x$();g1()},[s,g1,x$]),g(()=>{return()=>{if(!r_.current)return;try{r_.current.stop()}catch(w){console.debug("[compose] failed to stop speech recognition during cleanup",w)}r_.current=null}},[]),g(()=>{if(!z1)return;b_(Date.now());let w=setInterval(()=>b_(Date.now()),1000);return()=>clearInterval(w)},[z1,l0?.started_at,l0?.startedAt]),g(()=>{if(q1(0),Z1?.mode!=="custom"||!Array.isArray(Z1.frames)||Z1.frames.length<=1)return;let w=typeof Z1.intervalMs==="number"&&Number.isFinite(Z1.intervalMs)&&Z1.intervalMs>0?Z1.intervalMs:120,m=setInterval(()=>{q1((n)=>(n+1)%Z1.frames.length)},w);return()=>clearInterval(m)},[Z1]),g(()=>{if(j)return;w0(c0)},[T5,s,c0,j]),N`
        <div class="compose-box">
            ${z5&&N`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${J_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${h2({pulsing:J5})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${J_.title}</span>
                    </div>
                    ${J_.detail&&N`<div class="compose-inline-status-detail">${J_.detail}</div>`}
                </div>
            `}
            ${m0&&!j&&N`
                <${L9}
                    items=${f}
                    onInjectQueuedFollowup=${qB}
                    onRemoveQueuedFollowup=${v}
                    onMoveQueuedFollowup=${c}
                    onReturnQueuedFollowup=${LB}
                    onOpenFilePill=${I}
                />
            `}
            ${e1.visible&&N`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${e1.indicatorText?N`<span class="compose-inline-status-glyph" aria-hidden="true">${e1.indicatorText}</span>`:e1.animateDot?N`<span class=${h2({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${e1.title}</span>
                    </div>
                </div>
            `}
            ${l0&&!z1&&N`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${w1||""}
                >
                    <div class="compose-inline-status-row">
                        <span class=${h2({pulsing:!1})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${A$}</span>
                        ${k$&&N`<span class="compose-inline-status-elapsed">${k$}</span>`}
                    </div>
                    ${w1&&N`<div class="compose-inline-status-detail">${w1}</div>`}
                </div>
            `}
            ${P_&&N`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:e_(P_)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${O_?" drag-active":""}`}
                onDragEnter=${QB}
                onDragOver=${BB}
                onDragLeave=${FB}
                onDrop=${NB}
            >
                <div class="compose-input-main">
                    ${M5&&N`
                        <div class="compose-file-refs">
                            ${V.map((w)=>{return N`
                                    <${k1}
                                        key=${"msg-"+w}
                                        prefix="compose"
                                        label=${"msg:"+w}
                                        title=${"Message reference: "+w}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(w)}
                                    />
                                `})}
                            ${L.map((w)=>{let m=w.split("/").pop()||w;return N`
                                    <${k1}
                                        prefix="compose"
                                        label=${m}
                                        title=${w}
                                        onClick=${()=>I?.(w)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(w)}
                                    />
                                `})}
                            ${n0.map((w,m)=>{let n=w?.name||`attachment-${m+1}`;return N`
                                    <${k1}
                                        key=${n+m}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>HB(m)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${EB}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${__}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?p0:c0}
                        onInput=${WB}
                        onKeyDown=${KB}
                        onPaste=${UB}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${g0&&M_.length>0&&N`
                        <div class="slash-autocomplete" ref=${i_}>
                            ${M_.map((w,m)=>N`
                                <div
                                    key=${w.chat_jid||w.agent_name}
                                    class=${`slash-item${m===z0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),u0(w)}}
                                    onMouseEnter=${()=>k0(m)}
                                >
                                    <span class="slash-name">@${w.agent_name}</span>
                                    <span class="slash-desc">${w.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${V_&&T0.length>0&&N`
                        <div class="slash-autocomplete" ref=${v_}>
                            ${T0.map((w,m)=>N`
                                <div
                                    key=${w.name}
                                    class=${`slash-item${m===U_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),K0(w)}}
                                    onMouseEnter=${()=>A_(m)}
                                >
                                    <span class="slash-name">${w.name}</span>
                                    <span class="slash-desc">${w.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${r&&!j&&N`
                        <div class="compose-model-popup" ref=${L1} tabIndex="-1" onKeyDown=${I5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${$_&&N`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!$_&&I0.length===0&&N`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!$_&&I0.map((w,m)=>{let n=typeof w?.label==="string"?w.label:"",V0=q9(w?.contextWindow),P0=w?.name||null,N_=oY(w,A);return N`
                                        <button
                                            key=${n}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${J0===m?" active":""}${U===n?" current-model":""}${N_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{m8(w)}}
                                            disabled=${a||N_.blocked}
                                            title=${[n,P0,V0,N_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${IW(n,w?.contextWindow)}${P0?N` <span class="compose-model-popup-model-subtitle">${P0}</span>`:""}</span>
                                                ${N_.blocked&&N`<span class="compose-model-popup-model-note">${N_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{jB()}}
                                    disabled=${a}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${G0&&!j&&N`
                        <div class="compose-model-popup" ref=${o1} tabIndex="-1" onKeyDown=${I5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!j$&&N`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${j$&&R4.map((w,m)=>{let n=Boolean(w.archived_at),V0=w.chat_jid===(w.root_chat_jid||w.chat_jid),P0=!V0&&!w.is_active&&!n&&typeof j0==="function",N_=n&&T6,h_=c2(w,{currentChatJid:s});return N`
                                        <div key=${w.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${Z_===m?" active":""}`}
                                                onClick=${()=>{if(n){a_(w.chat_jid);return}l_(w.chat_jid)}}
                                                disabled=${n?!w$:!T$}
                                                title=${n?`Restore archived ${`@${w.agent_name}`}`:`Switch to ${`@${w.agent_name}`}`}
                                            >
                                                <span style=${JW(w)?"font-weight:700":""}>${h_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${w.agent_name} in new window`}
                                                aria-label=${`Open @${w.agent_name} in new window`}
                                                onClick=${(c_)=>{c_.stopPropagation(),E0(!1);let u1=new URL(window.location.href);u1.searchParams.set("chat_jid",w.chat_jid),u1.searchParams.set("chat_only","1");let U1=document.createElement("a");U1.href=u1.toString(),U1.target="_blank",U1.rel="noopener",U1.style.display="none",document.body.appendChild(U1),U1.click(),U1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(P0||N_)&&N`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${N_?V0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${N_?V0?`Permanently delete archived session @${w.agent_name}`:`Permanently delete archived branch @${w.agent_name}`:`Delete @${w.agent_name}`}
                                                    onClick=${(c_)=>{if(c_.stopPropagation(),E0(!1),N_){O0?.(w.chat_jid);return}j0(w.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(G$||_4||x1||Z$)&&N`
                                <div class="compose-model-popup-actions">
                                    ${G$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${T_.findIndex((w)=>w.key==="action:new")===Z_?" active":""}`}
                                            onClick=${()=>{Uj()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${_4&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${T_.findIndex((w)=>w.key==="action:new-root")===Z_?" active":""}`}
                                            onClick=${()=>{Hj()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${y1?.chat_jid&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${T_.findIndex((w)=>w.key==="action:rollup")===Z_?" active":""}`}
                                            onClick=${()=>{Ej()}}
                                            title=${$4?`Merge this branch into ${y1.agent_name?`@${y1.agent_name}`:y1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!$4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${x1&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${T_.findIndex((w)=>w.key==="action:rename")===Z_?" active":""}`}
                                            onClick=${(w)=>{u8(w)}}
                                            title="Rename the current session"
                                            disabled=${S4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Z$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${T_.findIndex((w)=>w.key==="action:delete")===Z_?" active":""}`}
                                            onClick=${()=>{Dj()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${F1}>
                    ${l&&N`
                    <div class="compose-meta-row">
                        ${w5&&N`
                            <div class="compose-model-meta">
                                <button
                                    ref=${M1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${R}
                                    aria-label="Open model picker"
                                    onClick=${ZB}
                                    disabled=${a}
                                >
                                    ${a?"Switching…":y5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!a&&I6&&N`
                                        <span class="compose-model-usage-hint" title=${R}>
                                            ${I6}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&A&&A.percent!=null&&N`
                            <${yW}
                                usage=${A}
                                onCompact=${XB}
                                compactionLabel=${z1?k$||"0:00":""}
                                compactionTitle=${z1?A$||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${X$&&N`
                        <div
                            ref=${W$}
                            class="compose-session-trigger-group"
                        >
                            ${R_?.agent_name&&N`
                                <button
                                    type="button"
                                    class=${`compose-session-trigger compose-session-trigger-pill${G0?" active":""}`}
                                    onClick=${o0}
                                    title=${R_?.chat_jid||s}
                                    aria-label=${`Manage sessions for @${R_.agent_name}`}
                                    aria-expanded=${G0?"true":"false"}
                                >
                                    <span class="compose-current-agent-label active">@${R_.agent_name}</span>
                                </button>
                            `}
                            <button
                                type="button"
                                class=${`compose-session-trigger compose-session-trigger-icon-btn${G0?" active":""}`}
                                onClick=${o0}
                                title=${R_?.chat_jid||s}
                                aria-label=${R_?.agent_name?`Manage sessions for @${R_.agent_name}`:"Manage Sessions/Agents"}
                                aria-expanded=${G0?"true":"false"}
                            >
                                <span class="compose-session-trigger-icon" aria-hidden="true">
                                    <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" focusable="false">
                                        <circle cx="12" cy="12" r="4.25" />
                                        <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    `}
                    ${j&&N`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${G}
                                onChange=${(w)=>X?.(w.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${d0} onChange=${()=>H_((w)=>!w)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${E_} onChange=${()=>K_((w)=>!w)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${S0==="and"?"active":""}`}
                            onClick=${()=>{let w=S0==="or"?"and":"or";A0(w),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:w})}).catch((m)=>{})}}
                            title=${S0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${S0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?q:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?N`
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
                    ${f_&&!j&&N`
                        <button
                            class="icon-btn location-btn"
                            onClick=${DB}
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
                    ${I4&&N`
                        <button
                            class=${`icon-btn voice-input-btn${t$?" active":""}${x_.mode==="fallback"?" fallback":""}`}
                            onClick=${_B}
                            title=${G1}
                            aria-label=${G1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${k5&&!j&&N`
                        <button
                            class=${`icon-btn notification-btn${C4?" active":""}`}
                            onClick=${z}
                            title=${e$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&N`
                        ${W&&T&&N`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${T}
                                title=${`Attach open file: ${W}`}
                                type="button"
                                disabled=${L.includes(W)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${VB} />
                        </label>
                    `}
                    ${(q0!=="connected"||!j)&&N`
                        <div class="compose-send-stack">
                            ${q0!=="connected"&&N`
                                <span class="compose-connection-status connection-status ${_$.statusClass}" title=${X1}>
                                    ${P4}
                                </span>
                            `}
                            ${!j&&N`
                                <button 
                                    class=${M$.className}
                                    type="button"
                                    onClick=${()=>{g4()}}
                                    disabled=${M$.disabled}
                                    title=${M$.title}
                                    aria-label=${M$.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${$$&&N`
                                    <button 
                                        class=${$$.className}
                                        type="button"
                                        onClick=${()=>{if(TW($$.mode))g4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${$$.disabled}
                                        title=${$$.title}
                                        aria-label=${$$.ariaLabel}
                                    >
                                        ${$$.mode==="compacting"?N`
                                                <span class="compose-submit-spinner" aria-hidden="true">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                        <circle class="compose-submit-spinner-ring" cx="12" cy="12" r="10.5" stroke-width="2.25" stroke-linecap="round"></circle>
                                                        <rect class="compose-submit-spinner-stop" x="6" y="6" width="12" height="12" rx="0" fill="currentColor"></rect>
                                                    </svg>
                                                </span>
                                            `:N`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2.5"/></svg>`}
                                    </button>
                                `}
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}x0();function $q({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return N`
    <section class=${`oobe-panel oobe-panel-${_}`} aria-label="Getting started">
      <div class="oobe-panel-copy">
        <div class="oobe-panel-eyebrow">Getting started</div>
        <h2 class="oobe-panel-title">${Z}</h2>
        <p class="oobe-panel-body">${X}</p>
      </div>
      <div class="oobe-panel-actions">
        <button type="button" class="oobe-panel-btn oobe-panel-btn-primary" onClick=${()=>$?.()}>
          Open Settings
        </button>
        <button type="button" class="oobe-panel-btn" onClick=${()=>j?.()}>
          ${G?"Dismiss":"Done"}
        </button>
      </div>
    </section>
  `}x0();function jq(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function Gq(_){return String(_||"").trim()||"web:default"}function Zq(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function Xq(_){if(!_)return!1;return _.status!=="running"}function Yq(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function qq({session:_,onClose:$,onInject:j,onRetry:G}){let Z=u(null),X=u(null),Y=_?.thinking?l5(_.thinking):"",q=_?.answer?e_(_.answer,null):"";if(g(()=>{if(Z.current&&Y)B$(Z.current).catch((D)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",D)})},[Y]),g(()=>{if(X.current&&q)B$(X.current).catch((D)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",D)})},[q]),!_)return null;let L=_.status==="running",K=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=Zq(_),F=Xq(_),B=!L&&K,U=L?"Thinking…":_.status==="error"?"Error":"Done";return N`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${U}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&N`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&N`<div class="btw-block btw-error">${_.error}</div>`}
            ${Q&&N`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${V&&N`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </div>
            `}

            ${F&&N`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&N`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!B}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}x0();function K9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function V9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function lW(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function hW(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function n$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function j_(_){return typeof _==="string"&&_.trim()?_.trim():null}function Kq(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var Vq="__PICLAW_WIDGET_HOST__:";function Lq(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Q9(_,$){if(!_||_.type!=="generated_widget")return null;let j=lW(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Kq(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function Qq(_){if(!_||typeof _!=="object")return null;let $=hW(_),j=j_(_?.widget_id)||j_(_?.widgetId)||j_(_?.tool_call_id)||j_(_?.toolCallId),G=j_(_?.tool_call_id)||j_(_?.toolCallId),Z=j_(_?.turn_id)||j_(_?.turnId),X=j_(_?.title)||j_(_?.name)||"Generated widget",Y=j_(_?.subtitle)||"",q=j_(_?.description)||Y,L=j_(_?.status),K=L==="loading"||L==="streaming"||L==="final"||L==="error"?L:"streaming";return{title:X,subtitle:Y,description:q,originPostId:n$(_?.origin_post_id)??n$(_?.originPostId),originChatJid:j_(_?.origin_chat_jid)||j_(_?.originChatJid)||j_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Kq(_?.capabilities,!0),source:"live",status:K,turnId:Z,toolCallId:G,width:n$(_?.width),height:n$(_?.height),error:j_(_?.error)}}function Fq(_){return Q9(_,null)!==null}function W1(_){let $=j_(_?.toolCallId)||j_(_?.tool_call_id);if($)return $;let j=j_(_?.widgetId)||j_(_?.widget_id);if(j)return j;let G=n$(_?.originPostId)??n$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function Bq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function Nq(_){return Bq(_)?"allow-downloads allow-scripts allow-same-origin":"allow-downloads"}function r2(_){return{title:j_(_?.title)||"Generated widget",widgetId:j_(_?.widgetId)||j_(_?.widget_id),toolCallId:j_(_?.toolCallId)||j_(_?.tool_call_id),turnId:j_(_?.turnId)||j_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:j_(_?.status)||"final"}}function d2(_){return{...r2(_),subtitle:j_(_?.subtitle)||"",description:j_(_?.description)||"",error:j_(_?.error)||null,width:n$(_?.width),height:n$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function i2(_){return`${Vq}${JSON.stringify(d2(_))}`}function Uq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=j_(_.text)||j_(_.content)||j_(_.message)||j_(_.prompt)||j_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=j_(j.text)||j_(j.content)||j_(j.message)||j_(j.prompt)||j_(j.value);if(G)return G}return null}function Hq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Eq(_){let $=j_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return j_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function pW(_){let $=r2(_);return`<script>
(function () {
  const meta = ${Lq($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {
      /* expected: parent bridge may be unavailable while the iframe is unloading. */
    }
  }

  const windowNamePrefix = ${Lq(Vq)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {
      /* expected: host window.name payload can be absent or mid-update while polling. */
    }
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function Dq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let q=Bq(_),L=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=q?pW(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${L}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${X.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${Q}
</head>
<body>${K}</body>
</html>`}x0();function nW(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let q=$.get(Y.id);if(!q)continue;let L=Y.parentId?$.get(Y.parentId):null;if(L)L.children.push(q);else j.push(q)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let q=Y.children[0];if(q.role!=="toolResult")continue;Y.resultDetail=q.detail||null,Y.resultLength=q.contentLength||0,Y.resultId=q.id,Y.merged=!0,Y.children=q.children;for(let L of Y.children)L.parentId=Y.id;G.add(q.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),q=Y.children.length>1;for(let L=Y.children.length-1;L>=0;L--)Y.children[L].depth=q?Y.depth+1:Y.depth,X.push(Y.children[L])}return Z}function rW(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function Wq(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function q5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function dW(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function iW(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function Oq(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function oW(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(q)=>typeof q==="string"&&Z.some((L)=>L?.id===q);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((q)=>q?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function sW(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=Oq(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function zq({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,q]=C(()=>({loading:!j,error:null,data:j})),[L,K]=C(()=>j?.leafId||null),[Q,V]=C(""),F=u(null),B=u(null),U=u(j?.leafId||null),D=u(null),E=u(""),H=async()=>{q((J)=>({...J,loading:!0,error:null}));try{let J=G?`?chat_jid=${encodeURIComponent(G)}`:"",M=await fetch(`/agent/session-tree${J}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),W=await M.json().catch(()=>({}));if(!M.ok)throw Error(W?.error||`HTTP ${M.status}`);q({loading:!1,error:null,data:W})}catch(J){q((M)=>({loading:!1,error:J?.message||"Failed to load tree.",data:M?.data||j||null}))}};D.current=H,g(()=>{H()},[G]);let k=X0(()=>{let J=Y.data;if(!J||!Array.isArray(J.nodes)||J.nodes.length===0)return[];return rW(J.flat?nW(J.nodes):J.nodes)},[Y.data]);g(()=>{let J=oW(k,L,U.current,Y.data?.leafId||null);if(J!==L)K(J);if(U.current&&Y.data?.leafId===U.current)U.current=null},[k,L,Y.data?.leafId]);let A=X0(()=>{let J=(Q||"").trim().toLowerCase();if(!J)return k;return k.filter((M)=>{return[M.preview,M.toolInput,M.toolInputFull,M.detail,M.toolName,M.role,M.id,M.resultDetail,M.type,M.label].some((T)=>typeof T==="string"&&T.toLowerCase().includes(J))})},[k,Q]),O=X0(()=>A.find((J)=>J.id===L)||null,[A,L]),y=X0(()=>sW(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);g(()=>{if(B.current)B.current.scrollIntoView({block:"center",behavior:"auto"})},[L,Y.data?.leafId,A.length]),g(()=>{let J=Oq(X?.preview);if(J?.targetId)U.current=J.targetId;let M=y?.refreshDelays||[];if(!M.length)return;let W=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(E.current===W)return;E.current=W;let T=M.map((I)=>setTimeout(()=>D.current?.(),I));return()=>T.forEach((I)=>clearTimeout(I))},[G,X?.type,X?.submittedAt,X?.preview,y?.refreshDelays]);let x=(J=!1)=>{let M=O?.id,W=iW(M,J);if(!W)return;U.current=W.navigateTargetId,$?.({kind:"widget.submit",payload:W},_)},z=y?.tone||"info";return N`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>H()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${F}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${Q}
                        onInput=${(J)=>V(J.currentTarget.value)}
                        onKeyDown=${(J)=>{if(J.key==="Escape")V(""),J.currentTarget.blur()}}
                    />
                    ${Q&&N`<span class="session-tree-meta">${A.length} match${A.length!==1?"es":""}</span>`}
                    ${Y.error&&N`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${y?.text&&N`<span class=${`session-tree-host-update ${z}`}>${y.text}</span>`}
                    ${Y.data?.capped&&N`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&N`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&A.length===0&&!Q&&N`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&A.length===0&&!Q&&N`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&A.length===0&&Q&&N`<div class="session-tree-empty">No entries match \u201c${Q}\u201d</div>`}
                    ${A.map((J)=>{let M=L===J.id,W=`st-row${J.active?" active":""}${M?" selected":""}`,T=(J.children||[]).length>1,I=dW(J);return N`
                            <button key=${J.id} ref=${J.active||M?B:null}
                                class=${W} type="button" role="treeitem" aria-selected=${M}
                                onClick=${()=>K(J.id)}>
                                <span class="st-indent" style=${`width:${(J.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${J.active?" active":T?" branch":""}`}></span>
                                <span class=${`st-tag ${I.tagClass}`}>${I.tag}</span>
                                <span class="st-text">${I.text}</span>
                                ${J.merged&&J.resultLength>0&&N`<span class="st-size">${Wq(J.resultLength)}</span>`}
                                ${!J.merged&&J.contentLength>3000&&N`<span class="st-size">${Wq(J.contentLength)}</span>`}
                                ${J.hasThinking&&N`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${J.label&&N`<span class="st-label">${J.label}</span>`}
                                ${J.active&&N`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${O?N`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${O.id}${O.resultId?` → ${O.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${O.role||O.type||"entry"}${O.toolName?` → ${O.toolName}`:""}${O.merged?" (merged)":""}</div>
                        </div>
                        ${O.toolInputFull&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${O.toolInputFull}</pre>
                            </div>
                        `}
                        ${O.resultDetail&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${O.resultLength?` (${q5(O.resultLength)})`:""}</div>
                                <pre class="st-side-code">${O.resultDetail}</pre>
                            </div>
                        `}
                        ${O.detail&&!O.toolInput&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.role==="toolResult"?"Output":"Content"}${O.contentLength?` (${q5(O.contentLength)})`:""}</div>
                                <pre class="st-side-code">${O.detail}</pre>
                            </div>
                        `}
                        ${O.rawDetail&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${O.rawContentLength?` (${q5(O.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${O.rawDetail}</pre>
                            </div>
                        `}
                        ${O.timestamp&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(O.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(O.contentLength>0||O.hasThinking)&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${O.contentLength>0&&N`<span class="st-pill">${q5(O.contentLength)} content</span>`}
                                    ${O.hasThinking&&N`<span class="st-pill thinking">${q5(O.thinkingLength)} thinking</span>`}
                                    ${O.merged&&O.resultLength>0&&N`<span class="st-pill">${q5(O.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>x(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>x(!0)}>Navigate + summarize</button>
                        </div>
                    `:N`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function Jq({widget:_,onClose:$,onWidgetEvent:j}){let G=u(null),Z=u(!1),X=X0(()=>Dq(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let H=(k)=>{if(k.key==="Escape")$?.()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$]),g(()=>{Z.current=!1},[X]),g(()=>{if(!_)return;let H=G.current;if(!H)return;let k=(z)=>{let J=i2(_),M=z==="widget.init"?r2(_):d2(_);K9(H,J),V9(H,{__piclawGeneratedWidgetHost:!0,type:z,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M})},A=()=>{k("widget.init"),k("widget.update")},O=()=>{Z.current=!0,A()};H.addEventListener("load",O);let x=[0,40,120,300,800].map((z)=>setTimeout(A,z));return()=>{H.removeEventListener("load",O),x.forEach((z)=>clearTimeout(z))}},[X,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let H=G.current;if(!H?.contentWindow)return;let k=i2(_),A=d2(_);K9(H,k),V9(H,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:A});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let H=(k)=>{let A=k?.data;if(!A||A.__piclawGeneratedWidget!==!0)return;let O=G.current,y=W1(_),x=W1({widgetId:A.widgetId,toolCallId:A.toolCallId});if(x&&y&&x!==y)return;if(!x&&O?.contentWindow&&k.source!==O.contentWindow)return;j?.(A,_)};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[_,j]),!_)return null;let q=(_?.artifact||{}).kind||_?.kind||"html",L=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",Q=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",F=Q==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",B=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",U=!X,D=Eq(_),E=Nq(_);return N`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${L}
                onClick=${(H)=>H.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${F} • ${q.toUpperCase()}</div>
                        <div class="floating-widget-title">${L}</div>
                        ${(K||B)&&N`
                            <div class="floating-widget-subtitle">${K||B}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${()=>$?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${q==="session_tree"?N`<${zq} widget=${_} onWidgetEvent=${j} />`:U?N`<div class="floating-widget-empty">${D}</div>`:N`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${L}
                                    name=${i2(_)}
                                    sandbox=${E}
                                    referrerpolicy="no-referrer"
                                    srcdoc=${X}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}x0();k2();g_();G5();var aW=new Set,Aq=new Set,F9=new Set,A4=new Map,kq=!1,o2=null;function tW(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function eW(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function Mq(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return Y_.register(_),aW.add(_.id),!0}function _O(_){return Mq(_)}function $O(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return m$(_),Aq.add(_.id),x7(),()=>{JX(_.id),Aq.delete(_.id),x7()}}function jO(_){if(typeof _!=="function")return()=>{};return F9.add(_),()=>{F9.delete(_)}}function Tq(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...F9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function GO(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return A4.set(_.id,_),()=>{if(A4.get(_.id)===_)A4.delete(_.id)}}function s2(_,$){for(let j of Array.from(A4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function wq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return A4.get($)?.label||null}function yq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return A4.get($)?.note||null}function xq(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=A4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function ZO(_=typeof window<"u"?window:null){return{registerPane:_O,registerWorkspacePane:Mq,registerSettingsPane:$O,registerStandaloneTabUrlResolver:jO,registerAttachmentPreview:GO,getCurrentChatJid:()=>tW(_)}}function B9(_=typeof window<"u"?window:null){let $=ZO(_);if(!_||kq)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},kq=!0,$}async function Iq(_=typeof window<"u"?window:null){if(!_)return;if(o2)return o2;return o2=(async()=>{B9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=eW(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(q){console.warn("[addon-web] Failed to load installed addon web entry:",Y,q)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),o2}var XO=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),YO=new Set(["text/markdown"]),qO=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),LO=new Set(["application/eml","message/rfc822"]);function r$(_){return typeof _==="string"?_.trim().toLowerCase():""}function KO(_){let $=r$(_);return!!$&&$.endsWith(".eml")}function VO(_){let $=r$(_);return!!$&&$.endsWith(".pdf")}function QO(_){let $=r$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var FO=new Set(["application/zip","application/x-zip-compressed"]);function BO(_){let $=r$(_);return!!$&&$.endsWith(".zip")}function NO(_){let $=r$(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function UO(_){let $=r$(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")}function Q6(_,$){let j=s2(_,$);if(j?.id)return j.id;let G=r$(_);if(VO($)||G==="application/pdf")return"pdf";if(QO($)||qO.has(G))return"office";if(KO($)||LO.has(G))return"eml";if(BO($)||FO.has(G))return"archive";if(NO($)||G==="text/html")return"html";if(UO($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(XO.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function Cq(_){let $=r$(_);return YO.has($)}function a2(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"archive":return"ZIP archive preview";default:return wq(_)||"Preview unavailable"}}var HO=new TextDecoder("utf-8",{fatal:!1});function L5(_,$){return _[$]|_[$+1]<<8}function k4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function Pq(_,$,j){return HO.decode(_.subarray($,$+j))}function EO(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(k4(_,j)===101010256)return j;return-1}function DO(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(k4(_,G)===117853008)return!0;return!1}function WO(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function OO(_){return String(_||"").replace(/\\/g,"/").trim()}function fq(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function Rq(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=EO($);if(j<0)throw Error("ZIP archive directory could not be found.");if(DO($,j))throw Error("ZIP64 archives are not previewable yet.");let G=L5($,j+10),Z=k4($,j+12),X=k4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],q=X,L=X+Z;while(q<L){if(q+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(k4($,q)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let V=L5($,q+8),F=L5($,q+10),B=k4($,q+20),U=k4($,q+24),D=L5($,q+28),E=L5($,q+30),H=L5($,q+32),k=q+46,A=k+D+E,O=A+H;if(O>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let y=(V&2048)===2048,x=OO(Pq($,k,D)),z=Pq($,A,H),J=x.endsWith("/");if(x)Y.push({path:x,isDirectory:J,compressedSize:B,uncompressedSize:U,compressionMethod:F,comment:y?z:z});q=O}Y.sort((V,F)=>{if(V.isDirectory!==F.isDirectory)return V.isDirectory?-1:1;return V.path.localeCompare(F.path)});let K=Y.filter((V)=>!V.isDirectory),Q=WO(Y);return{entries:Y,summary:{fileCount:K.length,directoryCount:Q.size,totalEntries:Y.length,compressedBytes:K.reduce((V,F)=>V+F.compressedSize,0),uncompressedBytes:K.reduce((V,F)=>V+F.uncompressedSize,0)}}}function Sq(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var zO="allow-scripts";function JO(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function AO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function kO(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function MO(_,$=null,j=null){let G=_?.metadata?.size,Z=_?.content_type||"application/octet-stream",X=j?.summary||null;return[{label:"Type",value:Z},{label:"Syntax",value:$},{label:"Entries",value:X?String(X.totalEntries):null},{label:"Files",value:X?String(X.fileCount):null},{label:"Folders",value:X?String(X.directoryCount):null},{label:"Compressed",value:X?o_(X.compressedBytes):null},{label:"Uncompressed",value:X?o_(X.uncompressedBytes):null},{label:"Savings",value:Sq(X)},{label:"Size",value:typeof G==="number"?o_(G):null},{label:"Added",value:_?.created_at?W4(_.created_at):null}].filter((Y)=>Y.value)}function TO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function wO(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=f1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function gq({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=X0(()=>s2($?.content_type,G),[$?.content_type,G]),X=X0(()=>Q6($?.content_type,G),[$?.content_type,G]),Y=Z?.label||a2(X),q=X0(()=>Cq($?.content_type),[$?.content_type]),[L,K]=C(X==="text"||X==="html"||X==="archive"),[Q,V]=C(""),[F,B]=C(null),[U,D]=C(null),E=u(null),H=X0(()=>TO($,G),[$,G]),k=X0(()=>H?VZ(H):null,[H]),A=X0(()=>MO($,!q?k:null,F),[$,q,k,F]),O=X0(()=>Z?xq(Z.id,_,G):wO(_,G,X),[Z,_,G,X]),y=X0(()=>yq(Z?.id||X),[Z?.id,X]),x=X0(()=>{if(!q||!Q)return"";return e_(Q)},[q,Q]),z=X0(()=>{if(q||!Q||!H)return"";return G2(Q,H)},[q,Q,H]);return g(()=>{let J=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!E.current||!x)return;B$(E.current);return},[x]),g(()=>{let J=!1;async function M(){if(X!=="text"&&X!=="html"&&X!=="archive"){K(!1),D(null),V(""),B(null);return}K(!0),D(null),V(""),B(null);try{let W=await X7(_),T=new Uint8Array(await W.arrayBuffer());if(X==="text"||X==="html"){if(X==="text"&&AO($,G)&&!JO(T))throw Error("Attachment does not appear to contain text content.");let f=kO(T);if(!J)V(f);return}let I=Rq(T);if(!J)B(I)}catch(W){if(!J){let T=W instanceof Error?W.message:String(W||"Unknown error");D(X==="archive"?`Failed to load ZIP preview. ${T}`:`Failed to load text preview. ${T}`)}}finally{if(!J)K(!1)}}return M(),()=>{J=!0}},[_,X]),N`
        <${v$} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${O&&N`
                                <a
                                    href=${O}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(J)=>J.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${f1(_)}
                                download=${G}
                                class="attachment-preview-download"
                                onClick=${(J)=>J.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${L&&N`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!L&&U&&N`<div class="attachment-preview-state">${U}</div>`}
                        ${!L&&!U&&X==="image"&&N`
                            <img class="attachment-preview-image" src=${f1(_)} alt=${G} />
                        `}
                        ${!L&&!U&&X==="video"&&N`
                            <video class="attachment-preview-video" src=${f1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!L&&!U&&X==="html"&&N`
                            <iframe class="attachment-preview-frame" srcdoc=${Q||""} sandbox=${zO} title=${G}></iframe>
                        `}
                        ${!L&&!U&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&O&&N`
                            <iframe class="attachment-preview-frame" src=${O} title=${G}></iframe>
                        `}
                        ${!L&&!U&&y&&N`
                            <div class="attachment-preview-readonly-note">${y}</div>
                        `}
                        ${!L&&!U&&X==="archive"&&F&&N`
                            <div class="attachment-preview-archive">
                                <div class="attachment-preview-archive-summary">
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Files</span>
                                        <strong class="attachment-preview-archive-card-value">${F.summary.fileCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Folders</span>
                                        <strong class="attachment-preview-archive-card-value">${F.summary.directoryCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Compressed</span>
                                        <strong class="attachment-preview-archive-card-value">${o_(F.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${o_(F.summary.uncompressedBytes)}</strong>
                                    </div>
                                </div>
                                <div class="attachment-preview-archive-table-wrap">
                                    <table class="attachment-preview-archive-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Method</th>
                                                <th>Compressed</th>
                                                <th>Size</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${F.entries.map((J)=>N`
                                                <tr key=${J.path}>
                                                    <td class="attachment-preview-archive-name">${J.path}</td>
                                                    <td>${J.isDirectory?"Folder":"File"}</td>
                                                    <td>${J.isDirectory?"—":fq(J.compressionMethod)}</td>
                                                    <td>${J.isDirectory?"—":o_(J.compressedSize)}</td>
                                                    <td>${J.isDirectory?"—":o_(J.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!L&&!U&&X==="text"&&q&&N`
                            <div
                                ref=${E}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:x}}
                            />
                        `}
                        ${!L&&!U&&X==="text"&&!q&&z&&N`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:z}} /></pre>
                        `}
                        ${!L&&!U&&X==="text"&&!q&&!z&&N`
                            <pre class="attachment-preview-text">${Q}</pre>
                        `}
                        ${!L&&!U&&X==="unsupported"&&N`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${A.map((J)=>N`
                            <div class="attachment-preview-meta-item" key=${J.label}>
                                <span class="attachment-preview-meta-label">${J.label}</span>
                                <span class="attachment-preview-meta-value">${J.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${v$}>
    `}x0();g_();x2();c7();function yO(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function xO(_){if(!_||typeof _!=="object")return!0;if(yO(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function IO(_){if(!K6(_))return!1;if(!xO(_?.target))return!1;return!c$.some((j)=>E$(_,j.id))}function uq(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function CO(_){let $=[],j=new Map(h$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function bq(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function PO(_){if(_?.imageUrl)return N`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return N`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function t2(_,$){return N`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function fO(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function vq({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:q,onOpenVncTab:L,onToggleTerminalDock:K,onPrefillCompose:Q}){let[V,F]=C(!1),[B,U]=C(""),[D,E]=C(0),[H,k]=C([]),[A,O]=C({workspaceCommands:null,slashCommands:null}),y=u(null),x=u(null),z=P(async()=>{try{let T=await i5();O(p$(T?.settings))}catch{O({workspaceCommands:null,slashCommands:null})}},[]);g(()=>{z()},[z]),g(()=>{let T=!1;return d5($).then((I)=>{if(T)return;k(Array.isArray(I?.commands)?I.commands:[])}).catch(()=>{if(T)return;k([])}),()=>{T=!0}},[$]);let J=X0(()=>CO({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:q,onOpenVncTab:L,onToggleTerminalDock:K}),[G,q,L,K,Z,j]),M=X0(()=>VY({agents:_,workspaceCommands:J,slashCommands:H,settings:A,query:B}),[_,B,A,H,J]);if(g(()=>{if(M.length===0){E(-1);return}if(!B.trim()){E(0);return}let T=B.toLowerCase().replace(/^[@/]+/,"").trim();if(!T){E(0);return}let I=0,f=0;for(let S=0;S<M.length;S++){let v=M[S],c=(v.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===T){I=S;break}let h=0;if(c.startsWith(T))h=3;else if(c.includes(T))h=2;else if((v.subtitle||"").toLowerCase().includes(T))h=1;if(h>f)f=h,I=S}E(I)},[M,B]),g(()=>{if(!V)return;requestAnimationFrame(()=>x.current?.focus?.())},[V]),g(()=>{let T=(f)=>{if(!V){if(!IO(f))return;f.preventDefault(),U(String(f.key||"")),E(0),F(!0);return}if(f.key==="Escape"){f.preventDefault(),F(!1),U("");return}if(f.key==="ArrowDown"){f.preventDefault(),E((S)=>M.length>0?(S+1+M.length)%M.length:0);return}if(f.key==="ArrowUp"){f.preventDefault(),E((S)=>M.length>0?(S-1+M.length)%M.length:0);return}if(f.key==="Enter"&&M[D]){f.preventDefault();let S=M[D],v=f.altKey;if(S){if(S.kind==="agent"&&S.chatJid)if(v)fO(S.chatJid);else X?.(S.chatJid);else if(S.kind==="workspace"&&S.commandId){if(S.commandId==="toggle-workspace"||S.commandId==="open-explorer")Y?.();if(S.commandId==="toggle-chat-only")uq(G);if(S.commandId==="open-terminal-tab")q?.();if(S.commandId==="open-vnc-tab")L?.();if(S.commandId==="toggle-terminal-dock")K?.();if(S.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(S.kind==="slash"&&S.commandName)Q?.(S.commandName)}F(!1),U("")}},I=(f)=>{if(!V)return;if(y.current?.contains(f.target))return;F(!1),U("")};return window.addEventListener("keydown",T,!0),document.addEventListener("pointerdown",I,!0),()=>{window.removeEventListener("keydown",T,!0),document.removeEventListener("pointerdown",I,!0)}},[G,D,M,q,L,Q,X,K,Y,V]),g(()=>{let T=(I)=>{let f=p$(I?.detail?.settings);if(I?.detail?.settings){O(f);return}z()};return window.addEventListener("focus",T),window.addEventListener("piclaw:quick-actions-settings-updated",T),()=>{window.removeEventListener("focus",T),window.removeEventListener("piclaw:quick-actions-settings-updated",T)}},[z]),!V)return null;let W=null;return N`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${y}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${x}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${B}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(T)=>{U(T.currentTarget?.value||""),E(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${t2("Move","↑↓")}
                                ${t2("Select","↵")}
                                ${t2("Pop out","Alt+↵")}
                                ${t2("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${M.length===0&&N`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${M.map((T,I)=>{let f=T.kind!==W;return W=T.kind,N`
                                ${f&&N`<div class="timeline-quick-actions-section">${bq(T.kind)}</div>`}
                                <button
                                    key=${T.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${T.kind}${I===D?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(T.kind==="agent"&&T.chatJid)X?.(T.chatJid);if(T.kind==="workspace"&&T.commandId==="toggle-workspace")Y?.();if(T.kind==="workspace"&&T.commandId==="open-explorer")Y?.();if(T.kind==="workspace"&&T.commandId==="toggle-chat-only")uq(G);if(T.kind==="workspace"&&T.commandId==="open-terminal-tab")q?.();if(T.kind==="workspace"&&T.commandId==="open-vnc-tab")L?.();if(T.kind==="workspace"&&T.commandId==="toggle-terminal-dock")K?.();if(T.kind==="workspace"&&T.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(T.kind==="slash"&&T.commandName)Q?.(T.commandName);F(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${PO(T)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${T.title}</span>
                                            ${T.actionHint?N`<span class="timeline-quick-actions-item-action-hint">${T.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${T.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${T.categoryLabel||bq(T.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}x0();function mq({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[q,L]=C(!1),[K,Q]=C({top:8,left:8}),V=u(null),F=u(null),B=u(null);g(()=>{if(typeof document>"u")return;let H=document.createElement("div");return H.className="timeline-menu-portal in-chat",document.body.appendChild(H),B.current=H,()=>{H.remove(),B.current=null}},[]),g(()=>{let H=()=>{if(_){let O=document.querySelector(".workspace-sidebar");if(O){let y=O.getBoundingClientRect();Q({top:y.top+8,left:y.left+8})}}else Q({top:8,left:8})};H();let k=new ResizeObserver(H),A=document.querySelector(".workspace-sidebar");if(A)k.observe(A);return window.addEventListener("resize",H),()=>{k.disconnect(),window.removeEventListener("resize",H)}},[_]),g(()=>{if(B.current)B.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),g(()=>{if(!B.current)return;let H=B.current.style;H.top=`${K.top}px`,H.left=`${K.left}px`,H.right="auto"},[K]),g(()=>{if(!q)return;let H=(k)=>{if(V.current?.contains(k.target))return;if(F.current?.contains(k.target))return;L(!1)};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[q]),g(()=>{if(!q)return;let H=(k)=>{if(k.key==="Escape")L(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[q]),g(()=>{L(!1)},[_]);let U=P((H)=>{L(!1),H?.()},[]),D=P(()=>{let H=new URL(window.location.href);if(j)H.searchParams.delete("chat_only");else H.searchParams.set("chat_only","1");window.location.href=H.toString()},[j]),E=N`
        <button ref=${F} class=${`timeline-menu-btn${q?" active":""}`}
            onClick=${()=>L((H)=>!H)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${q?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${q&&N`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${V} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&N`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(D)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Z||X)&&N`<div class="workspace-menu-separator"></div>`}
                ${G&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(G)}>Open terminal in tab</button>`}
                ${Z&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(Z)}>Open VNC in tab</button>`}
                ${X&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(X)}>${Y?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return m4(()=>{if(B.current)q$(E,B.current)}),null}x0();g_();var cq="PiClaw";function N9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,q=X[Y],L=G.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",Q=K?K:null,V=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:Z,color:q,image:Q||(V?"/static/icon-192.png":null)}}function lq(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function hq(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function pq(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",q=X?.dataset?.tint||"",L=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(L&&(q||Y&&Y!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function U9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function RO(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function nq(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return RO($[1].trim())||null}function rq(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=U9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=U9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=U9(j.command),Y=nq(X);if(Y)return Y;if(Array.isArray(j.commands))for(let q of j.commands){let L=nq(q);if(L)return L}return null}var SO=N`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,gO=N`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,uO=N`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,bO=1e4;function vO(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function mO(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function cO(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function lO(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function dq(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return b$(_)!==null}function iq(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&z2(_)!==null}function hO(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=bO}function pO(_,$=Date.now()){if(!dq(_))return null;let j=b$(_);if(j===null||!hO(j,$))return null;let G=oq(new Date(j).toISOString(),$);return G?`${G} ago`:null}function nO(_,$=Date.now()){if(!iq(_))return null;if(z2(_)===null)return null;return Z6(_,$)}function rO(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=_?.title,Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function oq(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function H9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:q=new Set,onExtensionPanelAction:L,turnId:K,steerQueued:Q,onPanelToggle:V,showCorePanels:F=!0,showExtensionPanels:B=!0}){let E=(_0)=>{if(!_0)return{text:"",totalLines:0,fullText:""};if(typeof _0==="string"){let v0=_0,a=v0?v0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:v0,totalLines:a,fullText:v0}}let z0=_0.text||"",k0=_0.fullText||_0.full_text||z0,g0=Number.isFinite(_0.totalLines)?_0.totalLines:k0?k0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:z0,totalLines:g0,fullText:k0}},H=160,k=(_0)=>String(_0||"").replace(/<\/?internal>/gi,""),A=(_0)=>{if(!_0)return 1;return Math.max(1,Math.ceil(_0.length/160))},O=(_0,z0,k0)=>{let g0=(_0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!g0)return{text:"",omitted:0,totalLines:Number.isFinite(k0)?k0:0,visibleLines:0};let v0=g0.split(`
`),a=v0.length>z0?v0.slice(0,z0).join(`
`):g0,o=Number.isFinite(k0)?k0:v0.reduce((G0,E0)=>G0+A(E0),0),r=a?a.split(`
`).reduce((G0,E0)=>G0+A(E0),0):0,Y0=Math.max(o-r,0);return{text:a,omitted:Y0,totalLines:o,visibleLines:r}},y=E(j),x=E(G),z=E($),J=Boolean(y.text)||y.totalLines>0,M=Boolean(x.text)||x.totalLines>0,W=Boolean(z.fullText?.trim()||z.text?.trim()),T=Boolean(_||W||J||M||Z||X),I=Array.isArray(Y)&&Y.length>0,[f,S]=C(new Set),[v,c]=C(null),[h,$0]=C(()=>Date.now()),b=(_0)=>S((z0)=>{let k0=new Set(z0),g0=!k0.has(_0);if(g0)k0.add(_0);else k0.delete(_0);if(typeof V==="function")V(_0,g0);return k0});g(()=>{S(new Set),c(null)},[K]),g(()=>{if(!(Array.isArray(Y)&&Y.some((k0)=>k0?.started_at||k0?.last_activity_at)))return;let z0=setInterval(()=>$0(Date.now()),1000);return()=>clearInterval(z0)},[Y]);let e=X0(()=>mO(f),[f]);g(()=>{if(!e||typeof document>"u")return;let _0=(z0)=>{if(z0?.defaultPrevented)return;if(z0?.key!=="Escape")return;if(z0?.altKey||z0?.ctrlKey||z0?.metaKey||z0?.shiftKey)return;let k0=z0?.target;if(k0 instanceof Element){if(k0.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(k0.isContentEditable)return}if(S((g0)=>{if(!(g0 instanceof Set)||!g0.has(e))return g0;let v0=new Set(g0);return v0.delete(e),v0}),typeof V==="function")V(e,!1);z0.preventDefault?.(),z0.stopPropagation?.()};return document.addEventListener("keydown",_0),()=>document.removeEventListener("keydown",_0)},[e,V]);let s=U$(_),q0=Boolean(_?.last_activity||_?.lastActivity),Z0=X0(()=>dq(_),[_]),D0=X0(()=>iq(_),[_]),Q0=X0(()=>rq(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[L0,N0]=C(null);g(()=>{if(!Boolean(D0||_?.retry_at||_?.retryAt||Z0))return;$0(Date.now());let z0=setInterval(()=>$0(Date.now()),1000);return()=>clearInterval(z0)},[Z0,D0,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),g(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!Q0){N0(null);return}let z0=!0;return Y7(Q0).then((k0)=>{if(!z0)return;if(k0?.branch)N0({branch:k0.branch,repoPath:k0.repo_path||null,path:Q0});else N0(null)}).catch(()=>{if(z0)N0(null)}),()=>{z0=!1}},[_?.type,Q0]);let H0=_?.turn_id||K,y0=pq(H0),i=l2({steerQueued:Q}),j0=(_0)=>_0,O0=hY(_,{isLastActivity:q0}),f0=p2(_,{isLastActivity:q0}),m0=p2(null,{pendingRequest:!0}),l0=(_0)=>_0==="warning"?"#f59e0b":_0==="error"?"var(--danger-color)":_0==="success"?"var(--success-color)":y0,G_=X?.kind||"info",h0=l0(G_),c0=l0(_?.kind||(s?"warning":"info")),M0=rO(_,{isLastActivity:q0}),p0=pO(_,h),b0=L0?.repoPath||"",d0=L0?.branch||"",H_=L0?lO(b0,d0):"",E_=vO(_?.status_hints||_?.statusHints),K_=X0(()=>cO(E_),[E_]),S0=X0(()=>K_.filter((_0)=>_0?.key==="ssh"),[K_]),A0=X0(()=>K_.filter((_0)=>_0?.key!=="ssh"),[K_]);if((!F||!T)&&(!B||!I))return null;let n0=({panelTitle:_0,text:z0,fullText:k0,totalLines:g0,maxLines:v0,titleClass:a,panelKey:o})=>{let r=f.has(o),Y0=k0||z0||"",G0=o==="thought"||o==="draft"?k(Y0):Y0,E0=typeof v0==="number",I0=r&&E0,t0=E0?O(G0,v0,g0):{text:G0||"",omitted:0,totalLines:Number.isFinite(g0)?g0:0};if(!G0&&!(Number.isFinite(t0.totalLines)&&t0.totalLines>0))return null;let J0=`agent-thinking-body${E0?" agent-thinking-body-collapsible":""}`,R0=E0?`--agent-thinking-collapsed-lines: ${v0};`:"";return N`
            <div
                class="agent-thinking"
                data-expanded=${r?"true":"false"}
                data-collapsible=${E0?"true":"false"}
                style=${y0?`--turn-color: ${y0};`:""}
            >
                <div class="agent-thinking-title ${a||""}">
                    ${y0&&N`<span class=${i} aria-hidden="true"></span>`}
                    ${_0}
                    ${I0&&N`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${_0} panel`}
                            onClick=${()=>b(o)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${J0}
                    style=${R0}
                    dangerouslySetInnerHTML=${{__html:l5(G0)}}
                />
                ${!r&&t0.omitted>0&&N`
                    <button class="agent-thinking-truncation" onClick=${()=>b(o)}>
                        ▸ ${t0.omitted} more lines
                    </button>
                `}
                ${r&&t0.omitted>0&&N`
                    <button class="agent-thinking-truncation" onClick=${()=>b(o)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},q_=Z?.tool_call?.title,O_=q_?`Awaiting approval: ${q_}`:"Awaiting approval",F0=nO(_,h),T0=(_0,z0,k0=null)=>{let g0=J2(_0),v0=zX(_0,h),a=[k0,v0].filter(Boolean).join(" · "),o=l2({steerQueued:Q,pulsing:U$(_0)||Boolean(v0)});return N`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${z0?`--turn-color: ${z0};`:""}
                title=${_0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${z0&&N`<span class=${o} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${g0}</span>
                    ${a&&N`<span class="agent-status-elapsed">${a}</span>`}
                </div>
                ${_0.detail&&N`<div class="agent-thinking-body">${_0.detail}</div>`}
            </div>
        `},C0=(_0,z0,k0,g0,v0,a,o,r=8,Y0=8)=>{let G0=Math.max(v0-g0,0.000000001),E0=Math.max(z0-r*2,1),I0=Math.max(k0-Y0*2,1),t0=Math.max(o-a,1),J0=o===a?z0/2:r+(_0.run-a)/t0*E0,R0=Y0+(I0-(_0.value-g0)/G0*I0);return{x:J0,y:R0}},U_=(_0,z0,k0,g0,v0,a,o,r=8,Y0=8)=>{if(!Array.isArray(_0)||_0.length===0)return"";return _0.map((G0,E0)=>{let{x:I0,y:t0}=C0(G0,z0,k0,g0,v0,a,o,r,Y0);return`${E0===0?"M":"L"} ${I0.toFixed(2)} ${t0.toFixed(2)}`}).join(" ")},A_=(_0,z0="")=>{if(!Number.isFinite(_0))return"—";return`${Math.abs(_0)>=100?_0.toFixed(0):_0.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${z0}`},V_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],X_=(_0,z0)=>{let k0=V_;if(!Array.isArray(k0)||k0.length===0)return"var(--accent-color)";if(k0.length===1||!Number.isFinite(z0)||z0<=1)return k0[0];let v0=Math.max(0,Math.min(Number.isFinite(_0)?_0:0,z0-1))/Math.max(1,z0-1)*(k0.length-1),a=Math.floor(v0),o=Math.min(k0.length-1,a+1),r=v0-a,Y0=k0[a],G0=k0[o];if(!G0||a===o||r<=0.001)return Y0;if(r>=0.999)return G0;let E0=Math.round((1-r)*1000)/10,I0=Math.round(r*1000)/10;return`color-mix(in oklab, ${Y0} ${E0}%, ${G0} ${I0}%)`},D_=(_0,z0="autoresearch")=>{let k0=Array.isArray(_0)?_0.map((J0)=>({...J0,points:Array.isArray(J0?.points)?J0.points.filter((R0)=>Number.isFinite(R0?.value)&&Number.isFinite(R0?.run)):[]})).filter((J0)=>J0.points.length>0):[],g0=k0.map((J0,R0)=>({...J0,color:X_(R0,k0.length)}));if(g0.length===0)return null;let v0=320,a=120,o=g0.flatMap((J0)=>J0.points),r=o.map((J0)=>J0.value),Y0=o.map((J0)=>J0.run),G0=Math.min(...r),E0=Math.max(...r),I0=Math.min(...Y0),t0=Math.max(...Y0);return N`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${g0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${v0} ${a}`} preserveAspectRatio="none" aria-hidden="true">
                        ${g0.map((J0)=>{let R0=J0?.key||J0?.label||"series",Z_=v?.panelKey===z0&&v?.seriesKey===R0;return N`
                                <g key=${R0}>
                                    <path
                                        class=${`agent-series-chart-line${Z_?" is-hovered":""}`}
                                        d=${U_(J0.points,v0,a,G0,E0,I0,t0)}
                                        style=${`--agent-series-color: ${J0.color};`}
                                        onMouseEnter=${()=>c({panelKey:z0,seriesKey:R0})}
                                        onMouseLeave=${()=>c((L_)=>L_?.panelKey===z0&&L_?.seriesKey===R0?null:L_)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${g0.flatMap((J0)=>{let R0=typeof J0?.unit==="string"?J0.unit:"",Z_=J0?.key||J0?.label||"series";return J0.points.map((L_,$_)=>{let B_=C0(L_,v0,a,G0,E0,I0,t0);return N`
                                    <button
                                        key=${`${Z_}-point-${$_}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${J0.color}; left:${B_.x/v0*100}%; top:${B_.y/a*100}%;`}
                                        onMouseEnter=${()=>c({panelKey:z0,seriesKey:Z_,run:L_.run,value:L_.value,unit:R0})}
                                        onMouseLeave=${()=>c((k_)=>k_?.panelKey===z0?null:k_)}
                                        onFocus=${()=>c({panelKey:z0,seriesKey:Z_,run:L_.run,value:L_.value,unit:R0})}
                                        onBlur=${()=>c((k_)=>k_?.panelKey===z0?null:k_)}
                                        aria-label=${`${J0?.label||"Series"} ${A_(L_.value,R0)} at run ${L_.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${g0.map((J0)=>{let R0=J0.points[J0.points.length-1]?.value,Z_=typeof J0?.unit==="string"?J0.unit:"",L_=J0?.key||J0?.label||"series",$_=v?.panelKey===z0&&v?.seriesKey===L_?v:null,B_=$_&&Number.isFinite($_.value)?$_.value:R0,k_=$_&&typeof $_.unit==="string"?$_.unit:Z_,e0=$_&&Number.isFinite($_.run)?$_.run:null;return N`
                            <div key=${`${L_}-legend`} class=${`agent-series-legend-item${$_?" is-hovered":""}`} style=${`--agent-series-color: ${J0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${J0.color};`}></span>
                                <span class="agent-series-legend-label">${J0?.label||"Series"}</span>
                                ${e0!==null&&N`<span class="agent-series-legend-run">run ${e0}</span>`}
                                <span class="agent-series-legend-value">${A_(B_,k_)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},M_=(_0)=>{if(!_0)return null;let z0=typeof _0?.key==="string"?_0.key:`panel-${Math.random()}`,k0=f.has(z0),g0=_0?.title||"Extension status",v0=_0?.collapsed_text||"",a=String(_0?.state||"").replace(/[-_]+/g," ").replace(/^./,(B_)=>B_.toUpperCase()),o=l0(_0?.state==="completed"?"success":_0?.state==="failed"?"error":_0?.state==="stopped"?"warning":"info"),r=l2({steerQueued:Q,pulsing:_0?.state==="running"}),Y0=typeof _0?.detail_markdown==="string"?_0.detail_markdown.trim():"",G0=typeof _0?.last_run_text==="string"?_0.last_run_text.trim():"",E0=typeof _0?.tmux_command==="string"?_0.tmux_command.trim():"",I0=Array.isArray(_0?.series)?_0.series:[],t0=Array.isArray(_0?.actions)?_0.actions:[],J0=_0?.started_at?Z6(_0,h):null,R0=v0,Z_=Boolean(Y0||E0||J0),L_=Boolean(Y0||I0.length>0||E0),$_=[g0,R0].filter(Boolean).join(" — ");return N`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${k0?"true":"false"}
                style=${o?`--turn-color: ${o};`:""}
                title=${!k0?$_||g0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>L_?b(z0):null}
                    >
                        ${o&&N`<span class=${r} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${g0}</span>
                        ${R0&&N`<span class="agent-thinking-title-meta">${R0}</span>`}
                        ${J0&&N`<span class="agent-status-elapsed">${J0}</span>`}
                    </button>
                    ${(t0.length>0||L_)&&N`
                        <div class="agent-thinking-tools-inline">
                            ${t0.length>0&&N`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${t0.map((B_)=>{let k_=`${z0}:${B_?.key||""}`,e0=q?.has?.(k_);return N`
                                            <button
                                                key=${k_}
                                                class=${`agent-thinking-action-btn${B_?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>L?.(_0,B_)}
                                                disabled=${Boolean(e0)}
                                            >
                                                ${e0?"Working…":B_?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${L_&&N`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${k0?"Collapse":"Expand"} ${g0}`}
                                    title=${k0?"Collapse details":"Expand details"}
                                    onClick=${()=>b(z0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        ${k0?N`<polyline points="4 6 8 10 12 6"></polyline>`:N`<polyline points="4 10 8 6 12 10"></polyline>`}
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${k0&&N`
                    <div class=${`agent-thinking-autoresearch-layout${Z_?"":" chart-only"}`}>
                        ${Z_&&N`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${J0&&N`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${J0}</span>
                                        ${_0?.last_activity_at&&_0?.state==="running"&&N`<span title="Since last activity">⟳ ${oq(_0.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${Y0&&N`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:l5(Y0)}}
                                    />
                                `}
                                ${E0&&N`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${E0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>L?.(_0,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${SO}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${I0.length>0?N`
                                <div class="agent-series-chart-stack">
                                    ${D_(I0,z0)}
                                    ${G0&&N`<div class="agent-series-chart-note">${G0}</div>`}
                                </div>
                            `:N`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return N`
        <div class="agent-status-panel">
            ${F&&X&&T0(X,h0)}
            ${B&&Array.isArray(Y)&&Y.map((_0)=>M_(_0))}
            ${F&&_?.type==="intent"&&T0(_,c0,F0)}
            ${F&&Z&&N`
                <div class="agent-status agent-status-request" aria-live="polite" style=${y0?`--turn-color: ${y0};`:""}>
                    ${m0==="dot"&&N`<span class=${i} aria-hidden="true"></span>`}
                    ${m0==="spinner"&&N`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${O_}</span>
                </div>
            `}
            ${F&&J&&n0({panelTitle:j0("Planning"),text:y.text,fullText:y.fullText,totalLines:y.totalLines,panelKey:"plan"})}
            ${F&&W&&n0({panelTitle:j0("Draft"),text:z.text,fullText:z.fullText,totalLines:z.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${F&&M&&n0({panelTitle:j0("Thoughts"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${F&&_&&_?.type!=="intent"&&N`
                <div class=${`agent-status${q0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${H_||E_.length>0||p0?" agent-status-multiline":""}`} aria-live="polite" style=${y0?`--turn-color: ${y0};`:""}>
                    ${y0&&O0&&N`<span class=${i} aria-hidden="true"></span>`}
                    ${_?.type==="error"?N`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:f0==="spinner"&&N`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${M0}</span>
                        ${(H_||K_.length>0||p0)&&N`
                            <span class="agent-status-meta-row">
                                ${S0.map((_0)=>N`
                                    <span key=${_0.key} class="agent-status-hint-row" title=${_0.title||_0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:_0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${_0.label}</span>
                                    </span>
                                `)}
                                ${H_&&N`
                                    <span class="agent-status-git-row" title=${Q0||H_}>
                                        <span class="agent-status-git-icon">${gO}</span>
                                        <span class="agent-status-git-label">
                                            ${b0&&N`<span class="agent-status-git-part">${b0}</span>`}
                                            ${b0&&d0&&N`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${d0&&N`<span class="agent-status-git-part">${d0}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${A0.map((_0)=>N`
                                    <span key=${_0.key} class="agent-status-hint-row" title=${_0.title||_0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:_0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${_0.label}</span>
                                    </span>
                                `)}
                                ${p0&&N`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${q0?"Recent activity":"Last event"} ${p0}`}>
                                        <span class="agent-status-hint-icon">${uO}</span>
                                        <span class="agent-status-hint-label">${p0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function sq({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",q=G?.kind||"other",L=G?.rawInput||{},K=L.command||L.commands&&L.commands[0]||null,Q=L.diff||null,V=L.fileName||L.path||null,F=G?.description||L.description||L.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((A)=>A?.path).filter((A)=>Boolean(A)),D=Array.from(new Set([V,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let E=async(A)=>{try{await _5(j,A,X||null),$()}catch(O){console.error("Failed to respond to agent request:",O)}},H=async()=>{try{await G7(Y,`Auto-approved: ${Y}`),await _5(j,"approved",X||null),$()}catch(A){console.error("Failed to add to whitelist:",A)}},k=Z&&Z.length>0;return N`
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
                ${(F||K||Q||D.length>0)&&N`
                    <div class="agent-request-body">
                        ${F&&N`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${D.length>0&&N`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${D.map((A,O)=>N`<li key=${O}>${A}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${K&&N`
                            <pre class="agent-request-command">${K}</pre>
                        `}
                        ${Q&&N`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${k?Z.map((A)=>N`
                            <button 
                                key=${A.optionId||A.id||String(A)}
                                class="agent-request-btn ${A.kind==="allow_once"||A.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(A.optionId||A.id||A)}
                            >
                                ${A.name||A.label||A.optionId||A.id||String(A)}
                            </button>
                        `):N`
                        <button class="agent-request-btn primary" onClick=${()=>E("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>E("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${H}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}x0();x0();g_();function F6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>F6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${F6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function aq(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:F6(j)})).filter(($)=>$.value)}function dO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function E9(_){if(!Array.isArray(_))return[];return _.filter(dO)}function e2(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=F6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=aq(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function tq(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=aq(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):F6(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function C_(_){return typeof _==="string"?_.trim():""}function eq(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function iO(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let q=C_(X.type);if(q==="text"){let L=C_(X.text)||C_(X.content);if(L)j.push(L);return}if(q==="resource_link"){let L=C_(X.uri),K=C_(X.title)||C_(X.name)||L;if(L&&K)j.push(K===L?L:`[${K}](${L})`);return}if(q==="resource"){let L=C_(X.title)||C_(X.name)||C_(X.uri)||"Embedded resource",K=C_(X.text);if(K)j.push(`### ${L}

\`\`\`
${K}
\`\`\``);else j.push(`### ${L}`);return}if(q==="generated_widget"){let L=C_(X.title)||C_(X.name)||"Generated widget",K=C_(X.description)||C_(X.subtitle);j.push(eq([`### ${L}`,K]));return}if(q==="adaptive_card"&&C_(X.fallback_text)){j.push(C_(X.fallback_text));return}if(q==="adaptive_card_submission"){let L=e2(X);if(C_(L))j.push(C_(L));return}if(q==="file"){let L=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${L}`);return}if(q==="image"||!q){let L=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${L}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return eq(j)}function _8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return iO(G,Z)}function _L(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function $L(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function jL(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(_L(j,"aria-disabled","true"),_L(j,"tabindex","-1"),"disabled"in j)$L(j,"disabled");if("readOnly"in j)$L(j,"readOnly")}}function oO(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function sO(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function GL(_){return oO(_)||sO(_)}function $8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function aO(_,$){let j=Math.max($8(_),$8($)),G=Math.min($8(_),$8($));return(j+0.05)/(G+0.05)}function tO(_,$,j="#ffffff"){let G=GL(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let q=GL(Y);if(!q)continue;let L=aO(G,q);if(L>X)Z=Y,X=L}return Z}function D9(){let _=getComputedStyle(document.documentElement),$=(U,D)=>{for(let E of U){let H=_.getPropertyValue(E).trim();if(H)return H}return D},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),B=tO(q,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:q,good:L,warning:K,attention:Q,border:V,fontFamily:F,buttonTextColor:B}}function ZL(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:q,border:L,fontFamily:K}=D9();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var eO=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),XL=!1,j8=null,YL=!1;function W9(_){_.querySelector(".adaptive-card-notice")?.remove()}function _z(_,$,j="error"){W9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function $z(_,$=(j)=>e_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function jz(_=($)=>e_($,null)){return($,j)=>{try{let G=$z($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function Gz(_){if(YL||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=jz(),YL=!0}async function Zz(){if(XL)return;if(j8)return j8;return j8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{XL=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),j8}function Xz(){return globalThis.AdaptiveCards}function Yz(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function qz(_){return eO.has(_)}function z9(_){if(!Array.isArray(_))return[];return _.filter(Yz)}function Lz(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function O9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>O9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${O9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function Kz(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return O9($);return typeof $==="string"?$:String($)}function Vz(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((q)=>G(q));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=Kz(Y.type,j[Y.id],Y);for(let[q,L]of Object.entries(Y))if(Array.isArray(L)||L&&typeof L==="object")Y[q]=G(L);return Y};return G(_)}function Qz(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Fz(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=Qz(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function qL(_,$,j){if(!qz($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Zz()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=Xz();Gz(G);let Z=new G.AdaptiveCard,X=D9();Z.hostConfig=new G.HostConfig(ZL());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:Vz($.payload,Y);Z.parse(q),Z.onExecuteAction=(Q)=>{let V=Lz(Q);if(j?.onAction)W9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let B=F instanceof Error?F.message:String(F||"Action failed.");_z(_,B||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let L=Z.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let K=Fz($);if(K){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=K.label,Q.appendChild(V),K.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=K.detail,Q.appendChild(F)}_.appendChild(Q)}if(W9(_),_.appendChild(L),K)jL(L);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}x0();k2();function LL({src:_,onClose:$}){return g(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),N`
        <${v$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${v$}>
    `}var G8=0,J9=null,B6={activePostId:null,speaking:!1},A9=new Set;function M9(_={}){return _.window??(typeof window<"u"?window:null)}function KL(_={}){return M9(_)?.speechSynthesis||null}function k9(){let _={...B6};for(let $ of A9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function T9(){return{...B6}}function VL(_){if(typeof _!=="function")return()=>{};return A9.add(_),_(T9()),()=>A9.delete(_)}function QL(_={}){let $=M9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function FL(_){let $=_8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function BL(_={}){let $=KL(_);if(G8+=1,J9=null,B6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}k9()}function NL(_,$,j={}){let G=M9(j),Z=KL(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=G8+1;G8=Y;try{Z.cancel()}catch{}let q=new G.SpeechSynthesisUtterance(X);J9=q,B6={activePostId:_,speaking:!0},k9();let L=()=>{if(Y!==G8)return;J9=null,B6={activePostId:null,speaking:!1},k9()};q.onend=L,q.onerror=L;try{return Z.speak(q),!0}catch(K){return console.warn("[post-speech] speak failed:",K),L(),!1}}async function HL(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function w9(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(q)=>{let L=q?.clipboardData;if(!L||typeof L.setData!=="function")return;if(L.setData("text/plain",j),G)L.setData("text/html",G);if(typeof q.preventDefault==="function")q.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let q=_.execCommand("copy");return Boolean(X||q)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function UL(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function EL(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let L=Z.getRangeAt(0);if(L&&typeof L.intersectsNode==="function")X=Boolean(L.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let L=UL(Z.anchorNode),K=UL(Z.focusNode);X=Boolean(L&&G.contains(L)||K&&G.contains(K))}if(!X)return!1;let q=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!q)return!1;return j.setData("text/plain",q),_?.preventDefault?.(),!0}function DL(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function WL(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function OL(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function Bz({mediaId:_,onPreview:$}){let[j,G]=C(null);if(g(()=>{U2(_).then(G).catch((K)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,K)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?o_(X):"",L=Q6(j.content_type,j.filename)!=="unsupported";return N`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <a href=${f1(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${Y&&N`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&N`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            ${L&&N`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function Nz(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function Uz(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function Hz(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function Ez(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function Dz(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function zL(_){let $=Ez(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():Dz(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function Wz(_,$){let j=zL($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var Oz={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function zz(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=Oz[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function Jz(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function Az({marker:_}){let[$,j]=C(!1),G=P((V)=>{V.stopPropagation(),j((F)=>!F)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",q=_?.draft_recovered,L=String(_?.severity||"warning"),K=Y||Z||String(_?.label||_?.kind||"issue"),Q=Boolean(X||Z&&Y);return N`
        <div class=${`post-outcome-pill post-outcome-pill-${L}`}>
            <div class="post-outcome-pill-header" onClick=${Q?G:void 0}>
                ${Q&&N`
                    <span class=${`post-outcome-pill-toggle${$?" expanded":""}`} aria-hidden="true">▶</span>
                `}
                <span class="post-outcome-pill-label">${K}</span>
                ${q&&N`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&Q&&N`
                <div class="post-outcome-pill-detail">
                    ${Z&&N`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&N`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function kz({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);g(()=>{if(!Number.isFinite(j))return;U2(j).then(Z).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,Q)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?f1(j):null,q=Q6(G?.content_type,G?.filename||_?.label),L=a2(q),K=q!=="unsupported";return N`
        <span class="attachment-pill" title=${X}>
            ${Y?N`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(Q)=>Q.stopPropagation()}>
                        <${k1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:N`
                    <${k1}
                        prefix="post"
                        label=${_.label}
                        title=${X}
                    />
                `}
            ${Number.isFinite(j)&&G&&K&&N`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Z8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?W4(G):null;return N`
        <div class="content-annotations">
            ${$&&$.length>0&&N`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&N`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&N`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function Mz({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?o_(_.size):"",Z=_.mime_type||"",X=yz(Z),Y=B4(_.uri);return N`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${X}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&N`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&N`<span>${Z}</span>`}
                    ${G&&N`<span>${G}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function Tz({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return N`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${G}
            </button>
            ${$&&N`
                ${Z&&N`<pre class="resource-embed-content">${Z}</pre>`}
                ${X&&N`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&N`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Y||"application/octet-stream"}),K=URL.createObjectURL(L),Q=document.createElement("a");Q.href=K,Q.download=G.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(K)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function wz({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=Q9(_,$),Z=Fq(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",q=G?.description||_.description||_.subtitle||"",L=_.open_label||"Open widget",K=u(!1),Q=(V)=>{if(V)V.preventDefault(),V.stopPropagation();if(!G)return;j?.(G)};return g(()=>{if(!_?.auto_open||!G||!Z||K.current)return;let V=$?.timestamp?new Date($.timestamp).getTime():0;if(V&&Date.now()-V>1e4)return;let F=`widget_opened_${_.widget_id||$?.id||""}`;if(DL(sessionStorage,F))return;K.current=!0,WL(sessionStorage,F,"1"),j?.(G)},[_?.auto_open,G,Z]),N`
        <div class="generated-widget-launch" onClick=${(V)=>V.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${X?` • ${String(X).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${q&&N`<div class="generated-widget-launch-description">${q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${Q}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${L}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function yz(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function xz(_){let $=B4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function Iz({preview:_}){let $=B4(_.url),j=xz(_.image),G=OL(_.site_name,$);return N`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Z)=>Z.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${G||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&N`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function Cz(_,$){return typeof _==="string"?_:""}var JL=1800,Pz=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,fz=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,Rz=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,Sz=`
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #1a1a1a;
  }
  h1 { font-size: 1.6em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h2 { font-size: 1.35em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h3 { font-size: 1.15em; font-weight: 700; margin: 0.5em 0 0.3em; }
  h4, h5, h6 { font-size: 1em; font-weight: 700; margin: 0.5em 0 0.3em; }
  p { margin: 0.5em 0; }
  pre {
    background: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 12px 16px;
    overflow-x: auto;
    margin: 0.5em 0;
  }
  code {
    font-family: "Fira Code", "Cascadia Code", Consolas, "Courier New", monospace;
    font-size: 0.9em;
  }
  pre code { background: none; padding: 0; border: none; }
  :not(pre) > code { background: #f0f2f5; padding: 2px 5px; border-radius: 3px; }
  blockquote { border-left: 3px solid #d0d7de; margin: 0.5em 0; padding-left: 12px; color: #57606a; }
  table { border-collapse: collapse; margin: 0.5em 0; }
  th, td { border: 1px solid #d0d7de; padding: 6px 12px; text-align: left; }
  th { background: #f6f8fa; font-weight: 600; }
  ul, ol { margin: 0.4em 0; padding-left: 1.8em; }
  li { margin: 0.15em 0; }
  a { color: #0969da; text-decoration: none; }
  hr { border: none; border-top: 1px solid #d0d7de; margin: 1em 0; }
  img { max-width: 100%; }
</style>`;async function AL(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(w9(document,{text:$}))return!0;if(await HL(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function gz(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=e_($,null),G=`<html><head>${Sz}</head><body>${j}</body></html>`;if(w9(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return AL($)}function uz(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let q=window.getSelection?.();if(!q||q.isCollapsed)return;for(let L of $)if(EL(Y,{root:L,selection:q}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,q)=>{let L=q||"idle";if(Y.dataset.copyState=L,L==="success")Y.innerHTML=fz,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(L==="error")Y.innerHTML=Rz,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=Pz,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let L=document.createElement("button");L.type="button",L.className="post-code-copy-btn",X(L,"idle"),q.appendChild(L);let K=async(Q)=>{Q.preventDefault(),Q.stopPropagation();let F=Y.querySelector("code")?.textContent||"",B=await AL(F);X(L,B?"success":"error");let U=j.get(L);if(U)clearTimeout(U);let D=setTimeout(()=>{X(L,"idle"),j.delete(L)},JL);j.set(L,D)};L.addEventListener("click",K),G.push(()=>{L.removeEventListener("click",K);let Q=j.get(L);if(Q)clearTimeout(Q);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{G.forEach((Y)=>Y())}}function bz(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function vz(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=bz(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:Z}}function mz(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let V=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:Z}}function cz(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1){let Q=j[K].trim();if((Q==="Images:"||Q==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let F=V[1],B=(V[2]||"").trim()||F;Z.push({id:F,label:B,raw:Q})}else Z.push({id:null,label:Q,raw:Q})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),q=j.slice(X),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:Z}}function lz(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function hz(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(lz).sort((Q,V)=>V.length-Q.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),L=[],K;while(K=q.nextNode())L.push(K);for(let Q of L){let V=Q.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let F=Q.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let B=V.split(Z).filter((D)=>D!=="");if(B.length===0)continue;let U=Y.createDocumentFragment();for(let D of B)if(X.test(D)){let E=Y.createElement("mark");E.className="search-highlight-term",E.textContent=D,U.appendChild(E)}else U.appendChild(Y.createTextNode(D));Q.parentNode.replaceChild(U,Q)}return Y.body.innerHTML}function kL({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:q,userAvatarUrl:L,userAvatarBackground:K,onDelete:Q,isThreadReply:V,isThreadPrev:F,isThreadNext:B,isRemoving:U,highlightQuery:D,onFileRef:E,onOpenWidget:H,onOpenAttachmentPreview:k}){let[A,O]=C(null),[y,x]=C("idle"),[z,J]=C(()=>T9()),M=u(null),W=u(null),T=_.data,I=T.type==="agent_response",f=q||"You",S=I?X||cq:f,v=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(I&&D&&v&&v!==S),h=I?N9(X,Y,!0):N9(f,L),$0=typeof K==="string"?K.trim().toLowerCase():"",b=!I&&h.image&&($0==="clear"||$0==="transparent"),e=I&&Boolean(h.image),s=`background-color: ${b||e?"transparent":h.color}`,q0=T.content_meta,Z0=Boolean(q0?.truncated),D0=Boolean(q0?.preview),Q0=Z0&&!D0,L0=Z0?{originalLength:Number.isFinite(q0?.original_length)?q0.original_length:T.content?T.content.length:0,maxLength:Number.isFinite(q0?.max_length)?q0.max_length:0}:null,N0=T.content_blocks||[],H0=T.media_ids||[],y0=zL(N0),i=Boolean(y0?.sourceAgentName),j0=Cz(T.content,T.link_previews);j0=Wz(j0,N0);let{content:O0,fileRefs:f0}=vz(j0),{content:m0,messageRefs:l0}=mz(O0),G_=(t)=>{t?.preventDefault?.(),t?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},h0=(t)=>{if(t.key==="Enter"||t.key===" ")G_(t)},{content:c0,attachments:M0}=cz(m0);j0=c0;let p0=z9(N0),b0=E9(N0),H_=Nz(N0)[0]||null,K_=Uz(N0)[0]||null,A0=Hz(N0)[0]||null,n0=p0.length===1&&typeof p0[0]?.fallback_text==="string"?p0[0].fallback_text.trim():"",q_=b0.length===1?e2(b0[0]).trim():"",O_=Boolean(n0)&&j0?.trim()===n0||Boolean(q_)&&j0?.trim()===q_,F0=Boolean(j0)&&!Q0&&!O_,T0=typeof D==="string"?D.trim():"",C0=X0(()=>{if(!j0||O_)return"";let t=e_(j0,j);return T0?hz(t,T0):t},[j0,O_,T0]),U_=X0(()=>_8(_),[_]),A_=X0(()=>QL(),[]),V_=X0(()=>FL(_),[_]),X_=Boolean(z.speaking&&z.activePostId===_.id),D_=(t,W0)=>{t.stopPropagation(),O(f1(W0))},M_=(t)=>{k?.(t)},_0=(t)=>{t.stopPropagation(),Q?.(_)},z0=async(t)=>{t.stopPropagation();let W0=await gz(U_);if(x(W0?"success":"error"),W.current)clearTimeout(W.current);W.current=setTimeout(()=>{W.current=null,x("idle")},JL)},k0=(t)=>{if(t.stopPropagation(),X_){BL();return}NL(_.id,V_)},g0=(t,W0)=>{let s0=new Set;if(!t||W0.length===0)return{content:t,usedIds:s0};return{content:t.replace(/attachment:([^\s)"']+)/g,(P_,z_,x_,i1)=>{let J_=z_.replace(/^\/+/,""),O1=W0.find((n_)=>n_.name&&n_.name.toLowerCase()===J_.toLowerCase()&&!s0.has(n_.id))||W0.find((n_)=>!s0.has(n_.id));if(!O1)return P_;if(s0.add(O1.id),i1.slice(Math.max(0,x_-2),x_)==="](")return`/media/${O1.id}`;return O1.name||"attachment"}),usedIds:s0}},v0=[],a=[],o=[],r=[],Y0=[],G0=[],E0=[],I0=0;if(N0.length>0)N0.forEach((t)=>{if(t?.type==="text"&&t.annotations)E0.push(t.annotations);if(t?.type==="generated_widget")G0.push(t);else if(t?.type==="resource_link")r.push(t);else if(t?.type==="resource")Y0.push(t);else if(t?.type==="file"){let W0=H0[I0++];if(W0)a.push(W0),o.push({id:W0,name:t?.name||t?.filename||t?.title})}else if(t?.type==="image"||!t?.type){let W0=H0[I0++];if(W0){let s0=typeof t?.mime_type==="string"?t.mime_type:void 0;v0.push({id:W0,annotations:t?.annotations,mimeType:s0}),o.push({id:W0,name:t?.name||t?.filename||t?.title})}}});else if(H0.length>0){let t=M0.length>0;H0.forEach((W0,s0)=>{let i0=M0[s0]||null;if(o.push({id:W0,name:i0?.label||null}),t)a.push(W0);else v0.push({id:W0,annotations:null})})}if(M0.length>0)M0.forEach((t)=>{if(!t?.id)return;let W0=o.find((s0)=>String(s0.id)===String(t.id));if(W0&&!W0.name)W0.name=t.label});let{content:t0,usedIds:J0}=g0(j0,o);j0=t0;let R0=v0.filter(({id:t})=>!J0.has(t)),Z_=a.filter((t)=>!J0.has(t)),L_=M0.length>0?M0.map((t,W0)=>({id:t.id||`attachment-${W0+1}`,label:t.label||`attachment-${W0+1}`})):o.map((t,W0)=>({id:t.id,label:t.name||`attachment-${W0+1}`})),$_=X0(()=>z9(N0),[N0]),B_=X0(()=>E9(N0),[N0]),k_=X0(()=>{return $_.map((t)=>`${t.card_id}:${t.state}`).join("|")},[$_]);g(()=>{if(!M.current)return;return B$(M.current),uz(M.current)},[C0]),g(()=>{return VL((t)=>{J(t)})},[]),g(()=>()=>{if(W.current)clearTimeout(W.current)},[]);let e0=u(null);return g(()=>{if(!e0.current||$_.length===0)return;let t=e0.current;t.innerHTML="";for(let W0 of $_){let s0=document.createElement("div");t.appendChild(s0),qL(s0,W0,{onAction:async(i0)=>{if(i0.type==="Action.OpenUrl"){let P_=B4(i0.url||"");if(!P_)throw Error("Invalid URL");window.open(P_,"_blank","noopener,noreferrer");return}if(i0.type==="Action.Submit"){await j7({post_id:_.id,thread_id:T.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:W0.card_id,action:{type:i0.type,title:i0.title||"",data:i0.data}});return}console.warn("[post] unsupported adaptive card action:",i0.type,i0)}}).catch((i0)=>{console.error("[post] adaptive card render error:",i0),s0.textContent=W0.fallback_text||"Card failed to render."})}},[k_,_.id]),N`
        <div id=${`post-${_.id}`} class="post ${I?"agent-post":""} ${V?"thread-reply":""} ${F?"thread-prev":""} ${B?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${I?"agent-avatar":""} ${h.image?"has-image":""}" style=${s}>
                ${h.image?N`<img src=${h.image} alt=${S} />`:h.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${I&&A_&&V_&&N`
                        <button
                            class=${`post-action-btn post-speak-btn${X_?" is-active":""}`}
                            type="button"
                            title=${X_?"Stop reading aloud":"Read aloud"}
                            aria-label=${X_?"Stop reading aloud":"Read aloud"}
                            onClick=${k0}
                        >
                            ${X_?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${y==="success"?" is-success":y==="error"?" is-error":""}`}
                        type="button"
                        title=${y==="success"?"Copied":y==="error"?"Copy failed":"Copy message"}
                        aria-label=${y==="success"?"Copied":y==="error"?"Copy failed":"Copy message"}
                        onClick=${z0}
                        disabled=${!U_}
                    >
                        ${y==="success"?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:y==="error"?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${_0}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${S}</span>
                    ${i&&N`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${y0?.sourceChatJid||""}`.trim()}
                        >
                            @${y0?.sourceAgentName}
                        </span>
                    `}
                    ${c&&N`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${v} and reference this message`}
                            onClick=${G_}
                            onKeyDown=${h0}
                        >
                            @${v}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${G_}>${gZ(_.timestamp)}</a>
                    ${H_&&N`
                        <span
                            class="post-recovery-chip"
                            title=${zz(H_)}
                        >
                            recovered
                        </span>
                    `}
                    ${K_&&N`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${Jz(K_)}
                        >
                            timeout
                        </span>
                    `}
                    ${A0&&N`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(A0.severity||"warning")}${A0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(A0.label||A0.kind||"issue")}
                        >
                            ${String(A0.label||A0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${A0&&N`
                    <${Az} marker=${A0} />
                `}
                ${Q0&&L0&&N`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${e5(L0.originalLength)} chars
                            ${L0.maxLength?N` • Display limit: ${e5(L0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${D0&&L0&&N`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${e5(L0.maxLength)} of ${e5(L0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(f0.length>0||l0.length>0||L_.length>0)&&N`
                    <div class="post-file-refs">
                        ${l0.map((t)=>{let W0=(s0)=>{if(s0.preventDefault(),s0.stopPropagation(),Z)Z(t,_.chat_jid||null);else{let i0=document.getElementById("post-"+t);if(i0)i0.scrollIntoView({behavior:"smooth",block:"center"}),i0.classList.add("post-highlight"),setTimeout(()=>i0.classList.remove("post-highlight"),2000)}};return N`
                                <a href=${`#msg-${t}`} class="post-msg-pill-link" onClick=${W0}>
                                    <${k1}
                                        prefix="post"
                                        label=${"msg:"+t}
                                        title=${"Message "+t}
                                        icon="message"
                                        onClick=${W0}
                                    />
                                </a>
                            `})}
                        ${f0.map((t)=>{let W0=t.split("/").pop()||t;return N`
                                <${k1}
                                    prefix="post"
                                    label=${W0}
                                    title=${t}
                                    onClick=${()=>E?.(t)}
                                />
                            `})}
                        ${L_.map((t)=>N`
                            <${kz}
                                key=${t.id}
                                attachment=${t}
                                onPreview=${M_}
                            />
                        `)}
                    </div>
                `}
                ${F0&&N`
                    <div 
                        ref=${M}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:C0}}
                        onClick=${(t)=>{if(t.target.classList.contains("hashtag")){t.preventDefault(),t.stopPropagation();let W0=t.target.dataset.hashtag;if(W0)j?.(W0)}else if(t.target.tagName==="IMG")t.preventDefault(),t.stopPropagation(),O(t.target.src)}}
                    />
                `}
                ${$_.length>0&&N`
                    <div ref=${e0} class="post-adaptive-cards" />
                `}
                ${B_.length>0&&N`
                    <div class="post-adaptive-card-submissions">
                        ${B_.map((t,W0)=>{let s0=tq(t),i0=`${t.card_id}-${W0}`;return N`
                                <div key=${i0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${s0.title}</span>
                                        </div>
                                    </div>
                                    ${s0.fields.length>0&&N`
                                        <div class="adaptive-card-submission-fields">
                                            ${s0.fields.map((P_)=>N`
                                                <span class="adaptive-card-submission-field" title=${`${P_.key}: ${P_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${P_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${P_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${W4(s0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${G0.length>0&&N`
                    <div class="generated-widget-launches">
                        ${G0.map((t,W0)=>N`
                            <${wz}
                                key=${t.widget_id||t.id||`${_.id}-widget-${W0}`}
                                block=${t}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${E0.length>0&&N`
                    ${E0.map((t,W0)=>N`
                        <${Z8} key=${W0} annotations=${t} />
                    `)}
                `}
                ${R0.length>0&&N`
                    <div class="media-preview">
                        ${R0.map(({id:t,mimeType:W0})=>{let i0=typeof W0==="string"&&W0.toLowerCase().startsWith("image/svg")?f1(t):Z7(t);return N`
                                <img 
                                    key=${t} 
                                    src=${i0} 
                                    alt="Media" 
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(P_)=>D_(P_,t)}
                                />
                            `})}
                    </div>
                `}
                ${R0.length>0&&N`
                    ${R0.map(({annotations:t},W0)=>N`
                        ${t&&N`<${Z8} key=${W0} annotations=${t} />`}
                    `)}
                `}
                ${Z_.length>0&&N`
                    <div class="file-attachments">
                        ${Z_.map((t)=>N`
                            <${Bz} key=${t} mediaId=${t} onPreview=${M_} />
                        `)}
                    </div>
                `}
                ${r.length>0&&N`
                    <div class="resource-links">
                        ${r.map((t,W0)=>N`
                            <div key=${W0}>
                                <${Mz} block=${t} />
                                <${Z8} annotations=${t.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&N`
                    <div class="resource-embeds">
                        ${Y0.map((t,W0)=>N`
                            <div key=${W0}>
                                <${Tz} block=${t} />
                                <${Z8} annotations=${t.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${T.link_previews?.length>0&&N`
                    <div class="link-previews">
                        ${T.link_previews.map((t,W0)=>N`
                            <${Iz} key=${W0} preview=${t} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&N`<${LL} src=${A} onClose=${()=>O(null)} />`}

    `}function ML({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:q,onOpenWidget:L,onOpenAttachmentPreview:K,emptyMessage:Q,timelineRef:V,agents:F,user:B,onDeletePost:U,reverse:D=!0,removingPostIds:E,searchQuery:H}){let[k,A]=C(!1),O=u(null),y=typeof IntersectionObserver<"u",x=P(async()=>{if(!j||!$||k)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,k,j]),z=P((v)=>{let{scrollTop:c,scrollHeight:h,clientHeight:$0}=v.target,b=D?h-$0-c:c,e=Math.max(300,$0);if(b<e)x()},[D,x]);g(()=>{if(!y)return;let v=O.current,c=V?.current;if(!v||!c)return;let h=300,$0=new IntersectionObserver((b)=>{for(let e of b){if(!e.isIntersecting)continue;x()}},{root:c,rootMargin:`${h}px 0px ${h}px 0px`,threshold:0});return $0.observe(v),()=>$0.disconnect()},[y,$,j,V,x]);let J=u(x);if(J.current=x,g(()=>{if(y)return;if(!V?.current)return;let{scrollTop:v,scrollHeight:c,clientHeight:h}=V.current,$0=D?c-h-v:v,b=Math.max(300,h);if($0<b)J.current?.()},[y,_,$,D,V]),g(()=>{if(!V?.current)return;if(!$||k)return;let{scrollTop:v,scrollHeight:c,clientHeight:h}=V.current,$0=D?c-h-v:v,b=Math.max(300,h);if(c<=h+1||$0<b)J.current?.()},[_,$,k,D,V]),!_)return N`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return N`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let M=_.slice().sort((v,c)=>v.id-c.id),W=(v)=>{let c=v?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let h=Number(c);return Number.isFinite(h)?h:null},T=new Map;for(let v=0;v<M.length;v+=1){let c=M[v],h=Number(c?.id),$0=W(c);if($0!==null){let b=T.get($0)||{anchorIndex:-1,replyIndexes:[]};b.replyIndexes.push(v),T.set($0,b)}else if(Number.isFinite(h)){let b=T.get(h)||{anchorIndex:-1,replyIndexes:[]};b.anchorIndex=v,T.set(h,b)}}let I=new Map;for(let[v,c]of T.entries()){let h=new Set;if(c.anchorIndex>=0)h.add(c.anchorIndex);for(let $0 of c.replyIndexes)h.add($0);I.set(v,Array.from(h).sort(($0,b)=>$0-b))}let f=M.map((v,c)=>{let h=W(v);if(h===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $0=I.get(h);if(!$0||$0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let b=$0.indexOf(c);if(b<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:b>0,hasThreadNext:b<$0.length-1}}),S=N`<div class="timeline-sentinel" ref=${O}></div>`;return N`
        <div class="timeline ${D?"reverse":"normal"}" ref=${V} onScroll=${z}>
            <div class="timeline-content">
                ${D?S:null}
                ${M.map((v,c)=>{let h=Boolean(v.data?.thread_id&&v.data.thread_id!==v.id),$0=E?.has?.(v.id),b=f[c]||{};return N`
                    <${kL}
                        key=${v.id}
                        post=${v}
                        isThreadReply=${h}
                        isThreadPrev=${b.hasThreadPrev}
                        isThreadNext=${b.hasThreadNext}
                        isRemoving=${$0}
                        highlightQuery=${H}
                        agentName=${lq(v.data?.agent_id,F||{})}
                        agentAvatarUrl=${hq(v.data?.agent_id,F||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>G?.(v)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${q}
                        onOpenWidget=${L}
                        onDelete=${U}
                        onOpenAttachmentPreview=${K}
                    />
                `})}
                ${D?null:S}
            </div>
        </div>
    `}x0();g_();function TL(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var X8="workspaceExplorerScale",pz=["compact","default","comfortable"],nz=new Set(pz),rz={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function wL(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return nz.has(j)?j:$}function y9(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function dz(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function iz(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function x9(_={}){let $=dz(_),j=_.stored?wL(_.stored,$):$;return iz(j,_)}function yL(_){return rz[wL(_)]}b7();function oz(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function I9(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function xL(_,$,j={}){let G=j.resolvePane;if(I9(_,G))return!0;return oz($)}var RL=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function sz(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return I9($,(j)=>Y_.resolve(j))}function SL(_,$,j,G=0,Z=[]){if(!j&&RL(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)SL(X,$,j,G+1,Z);return Z}function IL(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&RL(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function R9(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((q)=>[q?.path,q])):new Map,X=!j||j.length!==G.length,Y=G.map((q)=>{let L=R9(Z.get(q.path),q);if(L!==Z.get(q.path))X=!0;return L});return X?{...$,children:Y}:_}function P9(_,$,j){if(!_)return _;if(_.path===$)return R9(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=P9(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var gL=4,C9=14,az=16;function uL(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=uL(G);return _.__bytes=j,j}function bL(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=gL)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let q of Z){let L=Math.max(0,Number(q?.__bytes??q?.size??0));if(L<=0)continue;if(q.type==="dir")X.push({kind:"dir",node:q,size:L});else X.push({kind:"file",name:q.name,path:q.path,size:L})}X.sort((q,L)=>L.size-q.size);let Y=X;if(X.length>C9){let q=X.slice(0,C9-1),L=X.slice(C9-1),K=L.reduce((Q,V)=>Q+V.size,0);q.push({kind:"other",name:`+${L.length} more`,path:`${G.path}/[other]`,size:K}),Y=q}return G.children=Y.map((q)=>{if(q.kind==="dir")return bL(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),G}function CL(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function vL(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function Y8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function S9(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,q=X-Z>Y?Z+Y:X,L=Y8(_,$,G,Z),K=Y8(_,$,G,q),Q=Y8(_,$,j,q),V=Y8(_,$,j,Z),F=q-Z>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${G} ${G} 0 ${F} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var mL={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function cL(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(q,L,K,Q)=>{let V=Array.isArray(q?.children)?q.children:[];if(!V.length)return;let F=Math.max(0,Number(q.size)||0);if(F<=0)return;let B=K-L,U=L;V.forEach((D,E)=>{let H=Math.max(0,Number(D.size)||0);if(H<=0)return;let k=H/F,A=U,O=E===V.length-1?K:U+B*k;if(U=O,O-A<0.003)return;let y=mL[Q];if(y){let x=vL(A,Q,j);if(G.push({key:D.path,path:D.path,label:D.name,size:H,color:x,depth:Q,startAngle:A,endAngle:O,innerRadius:y[0],outerRadius:y[1],d:S9(120,120,y[0],y[1],A,O)}),Q===1)Z.push({key:D.path,name:D.name,size:H,pct:X>0?H/X*100:0,color:x})}if(Q<gL)Y(D,A,O,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function f9(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=f9(G,$);if(Z)return Z}return null}function lL(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=mL[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,q=vL(X,1,G),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:q,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:S9(120,120,Z[0],Z[1],X,Y)}],legend:[{key:K,name:_,size:j,pct:100,color:q}]}}function PL(_,$=!1,j=!1){if(!_)return null;let G=uL(_),Z=bL(_,0),X=Z.size||G,{segments:Y,legend:q}=cL(Z,X,j);if(!Y.length&&X>0){let L=lL("[files]",Z.path,X,j);Y=L.segments,q=L.legend}return{root:Z,totalSize:X,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function tz({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[q,L]=C(!1);g(()=>{let W=_?.root?.path||".";Z(W),Y([W]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!G)return;L(!0);let W=setTimeout(()=>L(!1),180);return()=>clearTimeout(W)},[G]);let K=X0(()=>{return f9(_.root,G)||_.root},[_?.root,G]),Q=K?.size||_.totalSize||0,{segments:V,legend:F}=X0(()=>{let W=cL(K,Q,_.isDarkTheme);if(W.segments.length>0)return W;if(Q<=0)return W;let T=K?.children?.length?"Total":"[files]";return lL(T,K?.path||_?.root?.path||".",Q,_.isDarkTheme)},[K,Q,_.isDarkTheme,_?.root?.path]),[B,U]=C(V),D=u(new Map),E=u(0);g(()=>{let W=D.current,T=new Map(V.map((v)=>[v.key,v])),I=performance.now(),f=220,S=(v)=>{let c=Math.min(1,(v-I)/220),h=c*(2-c),$0=V.map((b)=>{let s=W.get(b.key)||{startAngle:b.startAngle,endAngle:b.startAngle,innerRadius:b.innerRadius,outerRadius:b.innerRadius},q0=(N0,H0)=>N0+(H0-N0)*h,Z0=q0(s.startAngle,b.startAngle),D0=q0(s.endAngle,b.endAngle),Q0=q0(s.innerRadius,b.innerRadius),L0=q0(s.outerRadius,b.outerRadius);return{...b,d:S9(120,120,Q0,L0,Z0,D0)}});if(U($0),c<1)E.current=requestAnimationFrame(S)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(S),D.current=T,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let H=B.length?B:V,k=Q>0?o_(Q):"0 B",A=K?.name||"",y=(A&&A!=="."?A:"Total")||"Total",x=k,z=X.length>1,J=(W)=>{if(!W?.path)return;let T=f9(_.root,W.path);if(!T||!Array.isArray(T.children)||T.children.length===0)return;Y((I)=>[...I,T.path]),Z(T.path),j(null)},M=()=>{if(!z)return;Y((W)=>{let T=W.slice(0,-1);return Z(T[T.length-1]||_?.root?.path||"."),T}),j(null)};return N`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${K?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${Q}>
                ${H.map((W)=>N`
                    <path
                        key=${W.key}
                        d=${W.d}
                        fill=${W.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===W.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(W)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(W)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>J(W)}
                    >
                        <title>${W.label} — ${o_(W.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${z?" is-drill":""}`}
                    onClick=${M}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${y}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${x}</text>
                </g>
            </svg>
            ${F.length>0&&N`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((W)=>N`
                        <div key=${W.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${W.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${W.name}>${W.name}</span>
                            <span class="workspace-folder-starburst-size">${o_(W.size)}</span>
                            <span class="workspace-folder-starburst-pct">${W.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&N`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function fL(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function hL(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function ez(_){if(!_)return"Workspace index status";let $=[hL(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function _J(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function $J(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function jJ(_,$=null){let j=_J(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:$J(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function pL({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:G,onOpenTerminalTab:Z,onOpenVncTab:X,onToggleTerminal:Y,terminalVisible:q=!1}){let[L,K]=C(null),[Q,V]=C(new Set(["."])),[F,B]=C(null),[U,D]=C(null),[E,H]=C(""),[k,A]=C(null),[,O]=C(null),[y,x]=C(!0),[z,J]=C(!1),[M,W]=C(null),[T,I]=C(()=>V$("workspaceShowHidden",!1)),[f,S]=C(!1),[v,c]=C(null),[h,$0]=C(null),[b,e]=C(null),[s,q0]=C(!1),[Z0,D0]=C(null),[Q0,L0]=C(null),[N0,H0]=C(null),[y0,i]=C(!1),[j0,O0]=C(()=>X5()),[f0,m0]=C(()=>CL()),[l0,G_]=C(()=>x9({stored:E1(X8),...y9()})),[h0,c0]=C(!1),M0=Math.max(15000,(Number(j0?.refreshIntervalSec)||60)*1000),p0=Math.max(0,Number(j0?.folderPreviewDepth)||0),b0=u(Q),d0=u(""),H_=u(null),E_=u(0),K_=u(new Set),S0=u(null),A0=u(null),n0=u(new Map),q_=u(_),O_=u(G),F0=u(null),T0=u(null),C0=u(null),U_=u(null),A_=u(null),V_=u(null),X_=u("."),D_=u(0),M_=u({path:null,dragging:!1,startX:0,startY:0}),_0=u({path:null,dragging:!1,startX:0,startY:0}),z0=u({path:null,timer:0}),k0=u(!1),g0=u(0),v0=u(new Map),a=u(null),o=u(null),r=u(null),Y0=u(null),G0=u(null),E0=u(null),I0=u(T),t0=u($),J0=u(j??$),R0=u(0),Z_=u(b),L_=u(f),$_=u(v),B_=u(null),k_=u({x:0,y:0}),e0=u(0),t=u(null),W0=u(F),s0=u(U),i0=u(null),P_=u(k);q_.current=_,O_.current=G,g(()=>{b0.current=Q},[Q]),g(()=>{I0.current=T},[T]),g(()=>{t0.current=$},[$]),g(()=>{J0.current=j??$},[j,$]),g(()=>{Z_.current=b},[b]);let z_=P(()=>{if(!D_.current)return;clearTimeout(D_.current),D_.current=0},[]);g(()=>()=>z_(),[z_]),g(()=>{if(typeof window>"u")return;let R=()=>{G_(x9({stored:E1(X8),...y9()}))};R();let l=()=>R(),p=()=>R(),d=(U0)=>{if(!U0||U0.key===null||U0.key===X8)R()};window.addEventListener("resize",l),window.addEventListener("focus",p),window.addEventListener("storage",d);let B0=window.matchMedia?.("(pointer: coarse)"),K0=window.matchMedia?.("(hover: none)"),w0=(U0,o0)=>{if(!U0)return;if(U0.addEventListener)U0.addEventListener("change",o0);else if(U0.addListener)U0.addListener(o0)},u0=(U0,o0)=>{if(!U0)return;if(U0.removeEventListener)U0.removeEventListener("change",o0);else if(U0.removeListener)U0.removeListener(o0)};return w0(B0,l),w0(K0,l),()=>{window.removeEventListener("resize",l),window.removeEventListener("focus",p),window.removeEventListener("storage",d),u0(B0,l),u0(K0,l)}},[]),g(()=>{if(typeof window>"u")return;let R=()=>{O0(X5())},l=(B0)=>{if(!B0||B0.key===null||B0.key===C2||B0.key===P2)R()},p=()=>R(),d=(B0)=>{let K0=B0?.detail?.settings;if(K0&&typeof K0==="object"){O0({refreshIntervalSec:Number(K0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(K0.folderPreviewDepth)||0)});return}R()};return window.addEventListener("focus",p),window.addEventListener("storage",l),window.addEventListener(I2,d),()=>{window.removeEventListener("focus",p),window.removeEventListener("storage",l),window.removeEventListener(I2,d)}},[]),g(()=>{let R=(l)=>{let p=l?.detail?.path;if(!p)return;let d=p.split("/"),B0=[];for(let K0=1;K0<d.length;K0++)B0.push(d.slice(0,K0).join("/"));if(B0.length)V((K0)=>{let w0=new Set(K0);w0.add(".");for(let u0 of B0)w0.add(u0);return w0});B(p),requestAnimationFrame(()=>{let K0=document.querySelector(`[data-path="${CSS.escape(p)}"]`);if(K0)K0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",R),()=>window.removeEventListener("workspace-reveal-path",R)},[]),g(()=>{L_.current=f},[f]),g(()=>{$_.current=v},[v]),g(()=>{W0.current=F},[F]),g(()=>{s0.current=U},[U]),g(()=>{P_.current=k},[k]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let R=()=>m0(CL());R();let l=window.matchMedia?.("(prefers-color-scheme: dark)"),p=()=>R();if(l?.addEventListener)l.addEventListener("change",p);else if(l?.addListener)l.addListener(p);let d=typeof MutationObserver<"u"?new MutationObserver(()=>R()):null;if(d?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)d?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(l?.removeEventListener)l.removeEventListener("change",p);else if(l?.removeListener)l.removeListener(p);d?.disconnect()}},[]),g(()=>{if(!U)return;let R=A_.current;if(!R)return;let l=requestAnimationFrame(()=>{TL(R)});return()=>cancelAnimationFrame(l)},[U]),g(()=>{if(!h0)return;let R=(p)=>{let d=p?.target;if(!(d instanceof Element))return;if(G0.current?.contains(d))return;if(E0.current?.contains(d))return;c0(!1)},l=(p)=>{if(p?.key==="Escape")c0(!1),E0.current?.focus?.()};return document.addEventListener("mousedown",R),document.addEventListener("touchstart",R,{passive:!0}),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",R),document.removeEventListener("touchstart",R),document.removeEventListener("keydown",l)}},[h0]);let x_=async(R,l={})=>{let p=Boolean(l?.autoOpen),d=String(R||"").trim();J(!0),A(null),O(null);try{let B0=await K7(d,20000);if(p&&d&&xL(d,B0,{resolvePane:(K0)=>Y_.resolve(K0)}))return O_.current?.(d,B0),B0;return A(B0),B0}catch(B0){let K0={error:B0.message||"Failed to load preview"};return A(K0),K0}finally{J(!1)}};F0.current=x_;let i1=P(async()=>{try{let R=await q7("all");return H0(R),R}catch(R){return console.warn("[workspace-explorer] Failed to load workspace index status:",R),null}},[]);A0.current=i1;let J_=P(()=>{A0.current?.()},[]),d_=async()=>{if(!t0.current)return;try{let R=await o5("",1,I0.current),l=IL(R.root,b0.current,I0.current);if(l===d0.current){x(!1);return}if(d0.current=l,H_.current=R.root,!E_.current)E_.current=requestAnimationFrame(()=>{E_.current=0,K((p)=>R9(p,H_.current)),x(!1)})}catch(R){W(R.message||"Failed to load workspace"),x(!1)}},O1=async(R)=>{if(!R)return;if(K_.current.has(R))return;K_.current.add(R);try{let l=await o5(R,1,I0.current);K((p)=>P9(p,R,l.root))}catch(l){W(l.message||"Failed to load workspace")}finally{K_.current.delete(R)}};T0.current=O1;let b_=P(()=>{let R=F;if(!R)return".";let l=n0.current?.get(R);if(l&&l.type==="dir")return l.path;if(R==="."||!R.includes("/"))return".";let p=R.split("/");return p.pop(),p.join("/")||"."},[F]),n_=P((R)=>{let l=R?.closest?.(".workspace-row");if(!l)return null;let p=l.dataset.path,d=l.dataset.type;if(!p)return null;if(d==="dir")return p;if(p.includes("/")){let B0=p.split("/");return B0.pop(),B0.join("/")||"."}return"."},[]),q1=P((R)=>{return n_(R?.target||null)},[n_]),__=P((R)=>{Z_.current=R,e(R)},[]),v_=P(()=>{let R=z0.current;if(R?.timer)clearTimeout(R.timer);z0.current={path:null,timer:0}},[]),i_=P((R)=>{if(!R||R==="."){v_();return}let l=n0.current?.get(R);if(!l||l.type!=="dir"){v_();return}if(b0.current?.has(R)){v_();return}if(z0.current?.path===R)return;v_();let p=setTimeout(()=>{z0.current={path:null,timer:0},T0.current?.(R),V((d)=>{let B0=new Set(d);return B0.add(R),B0})},600);z0.current={path:R,timer:p}},[v_]),L1=P((R,l)=>{if(k_.current={x:R,y:l},e0.current)return;e0.current=requestAnimationFrame(()=>{e0.current=0;let p=B_.current;if(!p)return;let d=k_.current;p.style.transform=`translate(${d.x+12}px, ${d.y+12}px)`})},[]),M1=P((R)=>{if(!R)return;let p=(n0.current?.get(R)?.name||R.split("/").pop()||R).trim();if(!p)return;$0({path:R,label:p})},[]),o1=P(()=>{if($0(null),e0.current)cancelAnimationFrame(e0.current),e0.current=0;if(B_.current)B_.current.style.transform="translate(-9999px, -9999px)"},[]),W$=P((R)=>{if(!R)return".";let l=n0.current?.get(R);if(l&&l.type==="dir")return l.path;if(R==="."||!R.includes("/"))return".";let p=R.split("/");return p.pop(),p.join("/")||"."},[]),F1=P(()=>{D(null),H("")},[]),s_=P((R)=>{if(!R)return;let p=(n0.current?.get(R)?.name||R.split("/").pop()||R).trim();if(!p||R===".")return;D(R),H(p)},[]),r_=P(async()=>{let R=s0.current;if(!R)return;let l=(E||"").trim();if(!l){F1();return}let p=n0.current?.get(R),d=(p?.name||R.split("/").pop()||R).trim();if(l===d){F1();return}try{let K0=(await F7(R,l))?.path||R,w0=R.includes("/")?R.split("/").slice(0,-1).join("/")||".":".";if(F1(),W(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:R,newPath:K0,type:p?.type||"file"}})),p?.type==="dir")V((u0)=>{let U0=new Set;for(let o0 of u0)if(o0===R)U0.add(K0);else if(o0.startsWith(`${R}/`))U0.add(`${K0}${o0.slice(R.length)}`);else U0.add(o0);return U0});if(B(K0),p?.type==="dir")A(null),J(!1),O(null);else F0.current?.(K0);T0.current?.(w0),J_()}catch(B0){W(B0?.message||"Failed to rename file")}},[F1,E,J_]),a$=P(async(R)=>{let d=R||".";for(let B0=0;B0<50;B0+=1){let w0=`untitled${B0===0?"":`-${B0}`}.md`;try{let U0=(await Q7(d,w0,""))?.path||(d==="."?w0:`${d}/${w0}`);if(d&&d!==".")V((o0)=>new Set([...o0,d]));B(U0),W(null),T0.current?.(d),F0.current?.(U0),J_();return}catch(u0){if(u0?.status===409||u0?.code==="file_exists")continue;W(u0?.message||"Failed to create file");return}}W("Failed to create file (untitled name already in use).")},[]),j1=P((R)=>{if(R?.stopPropagation?.(),s)return;let l=W$(W0.current);a$(l)},[s,W$,a$]);g(()=>{if(typeof window>"u")return;let R=(l)=>{let p=l?.detail?.updates||[];if(!Array.isArray(p)||p.length===0)return;K((u0)=>{let U0=u0;for(let o0 of p){if(!o0?.root)continue;if(!U0||o0.path==="."||!o0.path)U0=o0.root;else U0=P9(U0,o0.path,o0.root)}if(U0)d0.current=IL(U0,b0.current,I0.current);return x(!1),U0});let d=W0.current;if(Boolean(d)&&p.some((u0)=>{let U0=u0?.path||"";if(!U0||U0===".")return!0;return d===U0||d.startsWith(`${U0}/`)||U0.startsWith(`${d}/`)}))v0.current.clear();if(J_(),!d||!P_.current)return;let K0=n0.current?.get(d);if(K0&&K0.type==="dir")return;if(p.some((u0)=>{let U0=u0?.path||"";if(!U0||U0===".")return!0;return d===U0||d.startsWith(`${U0}/`)}))F0.current?.(d)};return window.addEventListener("workspace-update",R),()=>window.removeEventListener("workspace-update",R)},[]),S0.current=d_;let B1=u(()=>{if(typeof window>"u")return;let R=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),l=J0.current??t0.current,p=document.visibilityState!=="hidden"&&(l||R.matches&&t0.current);s5(p,I0.current).catch((d)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",d,{visible:p,showHidden:I0.current})})}).current,K1=u(0),s1=u(()=>{if(K1.current)clearTimeout(K1.current);K1.current=setTimeout(()=>{K1.current=0,B1()},250)}).current;g(()=>{if(t0.current)S0.current?.(),A0.current?.();s1()},[$,j]),g(()=>{S0.current(),A0.current?.();let R=setInterval(()=>{S0.current(),A0.current?.()},M0);return()=>clearInterval(R)},[M0]),g(()=>{B1();let R=V4("previewHeight",null),l=Number.isFinite(R)?Math.min(Math.max(R,80),600):280;if(g0.current=l,C0.current)C0.current.style.setProperty("--preview-height",`${l}px`);let p=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),d=()=>s1();if(p.addEventListener)p.addEventListener("change",d);else if(p.addListener)p.addListener(d);return document.addEventListener("visibilitychange",d),()=>{if(E_.current)cancelAnimationFrame(E_.current),E_.current=0;if(p.removeEventListener)p.removeEventListener("change",d);else if(p.removeListener)p.removeListener(d);if(document.removeEventListener("visibilitychange",d),K1.current)clearTimeout(K1.current),K1.current=0;s5(!1,I0.current).catch((B0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",B0,{showHidden:I0.current})})}},[]);let N1=X0(()=>SL(L,Q,T),[L,Q,T]),O$=X0(()=>new Map(N1.map((R)=>[R.node.path,R.node])),[N1]),k6=X0(()=>yL(l0),[l0]);n0.current=O$;let I_=(F?n0.current.get(F):null)?.type==="dir";g(()=>{if(!F||!I_){L0(null),a.current=null,o.current=null;return}if(p0<=0){L0({loading:!1,error:null,payload:null,disabled:!0}),a.current=null,o.current=null;return}let R=F,l=`${T?"hidden":"visible"}:${p0}:${F}`,p=v0.current,d=p.get(l);if(d?.root){p.delete(l),p.set(l,d);let w0=PL(d.root,Boolean(d.truncated),f0);if(w0)a.current=w0,o.current=F,L0({loading:!1,error:null,payload:w0,disabled:!1});return}let B0=a.current,K0=o.current;L0({loading:!0,error:null,payload:K0===F?B0:null,disabled:!1}),o5(F,p0,T).then((w0)=>{if(W0.current!==R)return;let u0={root:w0?.root,truncated:Boolean(w0?.truncated)};p.delete(l),p.set(l,u0);while(p.size>az){let o0=p.keys().next().value;if(!o0)break;p.delete(o0)}let U0=PL(u0.root,u0.truncated,f0);a.current=U0,o.current=F,L0({loading:!1,error:null,payload:U0,disabled:!1})}).catch((w0)=>{if(W0.current!==R)return;L0({loading:!1,error:w0?.message||"Failed to load folder size chart",payload:K0===F?B0:null,disabled:!1})})},[F,I_,T,f0,p0]);let T1=Boolean(k&&k.kind==="text"&&!I_&&(!k.size||k.size<=262144)),O5=T1?"Open in editor":k?.size>262144?"File too large to edit":"File is not editable",R1=Boolean(F&&!I_&&sz(F)),S1=Boolean(F&&F!=="."),a1=Boolean(F&&!I_),x4=Boolean(F&&!I_),J$=F&&I_?D2(F,T):null,z5=hL(N0),J5=ez(N0),I4=N0?.state||"never_indexed",t$=I4!=="ready",G1=P(()=>c0(!1),[]),f_=P(async(R)=>{G1();try{await R?.()}catch(l){console.warn("[workspace-explorer] Header menu action failed:",l)}},[G1]),A5=P(async(R)=>{R?.stopPropagation?.(),i(!0),H0((l)=>({scope:"all",last_indexed_at:l?.last_indexed_at||null,last_error:null,indexed_file_count:l?.indexed_file_count||0,roots:l?.roots||[],updated_at:l?.updated_at||null,state:"indexing"}));try{let l=await L7("all");H0(l),W(null),d0.current="",S0.current?.()}catch(l){let p=l?.message||"Failed to reindex workspace";H0((d)=>({scope:"all",last_indexed_at:d?.last_indexed_at||null,last_error:p,indexed_file_count:d?.indexed_file_count||0,roots:d?.roots||[],updated_at:d?.updated_at||null,state:"failed"})),W(p)}finally{i(!1)}},[]);g(()=>{let R=r.current;if(Y0.current)Y0.current.dispose(),Y0.current=null;if(!R)return;if(R.innerHTML="",!F||I_||!k||k.error)return;let l={path:F,content:typeof k.text==="string"?k.text:void 0,mtime:k.mtime,size:k.size,preview:k,mode:"view"},p=Y_.resolve(l)||Y_.get("workspace-preview-default");if(!p)return;let d=p.mount(R,l);return Y0.current=d,()=>{if(Y0.current===d)d.dispose(),Y0.current=null;R.innerHTML=""}},[F,I_,k]);let t1=(R)=>{let l=R?.target;if(l instanceof Element)return l;return l?.parentElement||null},M6=(R)=>{return Boolean(R?.closest?.(".workspace-node-icon, .workspace-label-text"))},k5=(R)=>{if(!R)return!1;if(R.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(R.isContentEditable)},C4=u((R)=>{let l=t1(R),p=l?.closest?.("[data-path]");if(!p)return;let d=p.dataset.path;if(!d||d===".")return;let B0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),K0=Boolean(l?.closest?.(".workspace-caret"));if(B0||K0)return;if(s0.current===d)return;s_(d)}).current,z1=u((R)=>{if(k0.current){k0.current=!1;return}let l=t1(R),p=l?.closest?.("[data-path]");if(U_.current?.focus?.(),!p)return;let d=p.dataset.path,B0=p.dataset.type,K0=Boolean(l?.closest?.(".workspace-caret")),w0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),u0=W0.current===d,U0=s0.current;if(U0){if(U0===d)return;F1()}if(B0==="dir"){if(i0.current=null,B(d),A(null),O(null),J(!1),!b0.current.has(d))T0.current?.(d);if(u0&&!K0)return;V((l_)=>{let a_=new Set(l_);if(a_.has(d))a_.delete(d);else a_.add(d);return a_})}else{i0.current=null,B(d);let o0=n0.current.get(d);if(o0)q_.current?.(o0.path,o0);if(!w0&&!K0)F0.current?.(d)}}).current,A$=u(()=>{d0.current="",S0.current(),A0.current?.(),Array.from(b0.current||[]).filter((l)=>l&&l!==".").forEach((l)=>T0.current?.(l))}).current,w1=u(()=>{i0.current=null,B(null),A(null),O(null),J(!1)}).current,k$=u(()=>{I((R)=>{let l=!R;if(typeof window<"u")Q_("workspaceShowHidden",String(l));return I0.current=l,s5(!0,l).catch((d)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",d,{showHidden:l})}),d0.current="",S0.current?.(),Array.from(b0.current||[]).filter((d)=>d&&d!==".").forEach((d)=>T0.current?.(d)),l})}).current,e1=u((R)=>{if(t1(R)?.closest?.("[data-path]"))return;w1()}).current,Z1=P(async(R)=>{if(!R)return;let l=R.split("/").pop()||R;if(!window.confirm(`Delete "${l}"? This cannot be undone.`))return;try{await N7(R);let d=R.includes("/")?R.split("/").slice(0,-1).join("/")||".":".";if(W0.current===R)w1();T0.current?.(d),W(null),J_()}catch(d){A((B0)=>({...B0||{},error:d.message||"Failed to delete file"}))}},[w1]),e$=P((R)=>{let l=U_.current;if(!l||!R||typeof CSS>"u"||typeof CSS.escape!=="function")return;l.querySelector(`[data-path="${CSS.escape(R)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),M5=P((R)=>{let l=t1(R);if(s0.current||k5(l))return;let p=N1;if(!p||p.length===0)return;let d=F?p.findIndex((B0)=>B0.node.path===F):-1;if(R.key==="ArrowDown"){R.preventDefault();let B0=Math.min(d+1,p.length-1),K0=p[B0];if(!K0)return;if(B(K0.node.path),K0.node.type!=="dir")q_.current?.(K0.node.path,K0.node),F0.current?.(K0.node.path);else A(null),J(!1),O(null);e$(K0.node.path);return}if(R.key==="ArrowUp"){R.preventDefault();let B0=d<=0?0:d-1,K0=p[B0];if(!K0)return;if(B(K0.node.path),K0.node.type!=="dir")q_.current?.(K0.node.path,K0.node),F0.current?.(K0.node.path);else A(null),J(!1),O(null);e$(K0.node.path);return}if(R.key==="ArrowRight"&&d>=0){let B0=p[d];if(B0?.node?.type==="dir"&&!Q.has(B0.node.path))R.preventDefault(),T0.current?.(B0.node.path),V((K0)=>new Set([...K0,B0.node.path]));return}if(R.key==="ArrowLeft"&&d>=0){let B0=p[d];if(B0?.node?.type==="dir"&&Q.has(B0.node.path))R.preventDefault(),V((K0)=>{let w0=new Set(K0);return w0.delete(B0.node.path),w0});return}if(R.key==="Enter"&&d>=0){R.preventDefault();let B0=p[d];if(!B0)return;let K0=B0.node.path;if(B0.node.type==="dir"){if(!b0.current.has(K0))T0.current?.(K0);V((u0)=>{let U0=new Set(u0);if(U0.has(K0))U0.delete(K0);else U0.add(K0);return U0}),A(null),O(null),J(!1)}else q_.current?.(K0,B0.node),F0.current?.(K0);return}if((R.key==="Delete"||R.key==="Backspace")&&d>=0){let B0=p[d];if(!B0||B0.node.type==="dir")return;R.preventDefault(),Z1(B0.node.path);return}if(R.key==="Escape")R.preventDefault(),w1()},[w1,Z1,Q,N1,e$,F]),_$=P((R)=>{let l=jJ(R,s0.current);if(!l)return;M_.current={path:l.dragPath,dragging:!1,startX:l.startX,startY:l.startY}},[]),P4=P(()=>{let R=M_.current;if(R?.dragging&&R.path){let l=Z_.current||b_(),p=t.current;if(typeof p==="function")p(R.path,l)}M_.current={path:null,dragging:!1,startX:0,startY:0},R0.current=0,S(!1),c(null),__(null),v_(),o1()},[b_,o1,__,v_]),X1=P((R)=>{let l=M_.current,p=R?.touches?.[0];if(!p||!l?.path)return;let d=Math.abs(p.clientX-l.startX),B0=Math.abs(p.clientY-l.startY),K0=d>8||B0>8;if(!l.dragging&&K0)l.dragging=!0,S(!0),c("move"),M1(l.path);if(l.dragging){R.preventDefault(),L1(p.clientX,p.clientY);let w0=document.elementFromPoint(p.clientX,p.clientY),u0=n_(w0)||b_();if(Z_.current!==u0)__(u0);i_(u0)}},[n_,b_,M1,L1,__,i_]),M$=u((R)=>{R.preventDefault();let l=C0.current;if(!l)return;let p=R.clientY,d=g0.current||280,B0=R.currentTarget;B0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let K0=p,w0=(U0)=>{K0=U0.clientY;let o0=l.clientHeight-80,l_=Math.min(Math.max(d-(U0.clientY-p),80),o0);l.style.setProperty("--preview-height",`${l_}px`),g0.current=l_},u0=()=>{let U0=l.clientHeight-80,o0=Math.min(Math.max(d-(K0-p),80),U0);g0.current=o0,B0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q_("previewHeight",String(Math.round(o0))),document.removeEventListener("mousemove",w0),document.removeEventListener("mouseup",u0)};document.addEventListener("mousemove",w0),document.addEventListener("mouseup",u0)}).current,$$=u((R)=>{R.preventDefault();let l=C0.current;if(!l)return;let p=R.touches[0];if(!p)return;let d=p.clientY,B0=g0.current||280,K0=R.currentTarget;K0.classList.add("dragging"),document.body.style.userSelect="none";let w0=(U0)=>{let o0=U0.touches[0];if(!o0)return;U0.preventDefault();let l_=l.clientHeight-80,a_=Math.min(Math.max(B0-(o0.clientY-d),80),l_);l.style.setProperty("--preview-height",`${a_}px`),g0.current=a_},u0=()=>{K0.classList.remove("dragging"),document.body.style.userSelect="",Q_("previewHeight",String(Math.round(g0.current||B0))),document.removeEventListener("touchmove",w0),document.removeEventListener("touchend",u0),document.removeEventListener("touchcancel",u0)};document.addEventListener("touchmove",w0,{passive:!1}),document.addEventListener("touchend",u0),document.addEventListener("touchcancel",u0)}).current,T5=P((R=F)=>{if(!R)return;fL(E2(R))},[F]),R_=async()=>{if(!F||I_)return;await Z1(F)},f4=(R)=>{return Array.from(R?.dataTransfer?.types||[]).includes("Files")},R8=P((R)=>{if(!f4(R))return;if(R.preventDefault(),R0.current+=1,!L_.current)S(!0);c("upload");let l=q1(R)||b_();__(l),i_(l)},[b_,q1,__,i_]),y1=P((R)=>{if(!f4(R))return;if(R.preventDefault(),R.dataTransfer)R.dataTransfer.dropEffect="copy";if(!L_.current)S(!0);if($_.current!=="upload")c("upload");let l=q1(R)||b_();if(Z_.current!==l)__(l);i_(l)},[b_,q1,__,i_]),R4=P((R)=>{if(!f4(R))return;if(R.preventDefault(),R0.current=Math.max(0,R0.current-1),R0.current===0)S(!1),c(null),__(null),v_()},[__,v_]),j$=P(async(R,l=".")=>{let p=Array.from(R||[]);if(p.length===0)return;let d=l&&l!==""?l:".",B0=d!=="."?d:"workspace root";z_(),q0(!0),D0({current:0,total:p.length,name:"",percent:0,done:!1,error:null});try{let K0=null;for(let w0=0;w0<p.length;w0++){let u0=p[w0],U0=u0?.name||`file ${w0+1}`;D0((l_)=>({...l_,current:w0+1,name:U0,percent:0}));let o0=(l_)=>D0((a_)=>({...a_,percent:l_.percent}));try{K0=await H2(u0,d,{onProgress:o0})}catch(l_){let a_=l_?.status,T_=l_?.code;if(a_===409||T_==="file_exists"){if(!window.confirm(`"${U0}" already exists in ${B0}. Overwrite?`))continue;K0=await H2(u0,d,{overwrite:!0,onProgress:o0})}else throw l_}}if(K0?.path)i0.current=K0.path,B(K0.path),F0.current?.(K0.path);T0.current?.(d),J_(),D0((w0)=>({...w0,done:!0})),z_(),D_.current=window.setTimeout(()=>{D_.current=0,D0(null)},1500)}catch(K0){W(K0.message||"Failed to upload file"),D0((w0)=>w0?{...w0,error:K0.message||"Upload failed"}:null),z_(),D_.current=window.setTimeout(()=>{D_.current=0,D0(null)},4000)}finally{q0(!1)}},[z_]),T$=P(async(R,l)=>{if(!R)return;let p=n0.current?.get(R);if(!p)return;let d=l&&l!==""?l:".",B0=R.includes("/")?R.split("/").slice(0,-1).join("/")||".":".";if(d===B0)return;try{let w0=(await B7(R,d))?.path||R;if(p.type==="dir")V((u0)=>{let U0=new Set;for(let o0 of u0)if(o0===R)U0.add(w0);else if(o0.startsWith(`${R}/`))U0.add(`${w0}${o0.slice(R.length)}`);else U0.add(o0);return U0});if(B(w0),p.type==="dir")A(null),J(!1),O(null);else F0.current?.(w0);T0.current?.(B0),T0.current?.(d),J_()}catch(K0){W(K0?.message||"Failed to move entry")}},[]);t.current=T$;let w$=P(async(R)=>{if(!f4(R))return;R.preventDefault(),R0.current=0,S(!1),c(null),e(null),v_();let l=Array.from(R?.dataTransfer?.files||[]);if(l.length===0)return;let p=Z_.current||q1(R)||b_();await j$(l,p)},[b_,q1,j$]),S4=P((R)=>{if(R?.stopPropagation?.(),s)return;let l=R?.currentTarget?.dataset?.uploadTarget||".";X_.current=l,V_.current?.click()},[s]),x1=P(()=>{if(s)return;let R=W0.current,l=R?n0.current?.get(R):null;X_.current=l?.type==="dir"?l.path:".",V_.current?.click()},[s]),G$=P(()=>{f_(()=>j1(null))},[f_,j1]),_4=P(()=>{f_(()=>x1())},[f_,x1]),$4=P(()=>{f_(()=>A$())},[f_,A$]),Z$=P(()=>{f_(()=>k$())},[f_,k$]),T6=P(()=>{if(!F||!R1)return;f_(()=>O_.current?.(F,k))},[f_,F,R1,k]),X$=P(()=>{if(!F||!T1)return;f_(()=>O_.current?.(F,k))},[f_,F,T1,k]),w6=P(()=>{if(!F||F===".")return;f_(()=>s_(F))},[f_,F,s_]),w5=P(()=>{if(!F||I_)return;f_(()=>R_())},[f_,F,I_,R_]),y5=P(()=>{if(!F||I_)return;f_(()=>T5())},[f_,F,I_,T5]),x5=P(()=>{if(!J$)return;G1(),fL(J$)},[G1,J$]),S8=P(()=>{G1(),Z?.()},[G1,Z]),y6=P(()=>{G1(),X?.()},[G1,X]),x6=P(()=>{G1(),Y?.()},[G1,Y]),I6=P((R)=>{if(!R||R.button!==0)return;let l=R.currentTarget;if(!l||!l.dataset)return;let p=l.dataset.path;if(!p||p===".")return;if(s0.current===p)return;let d=t1(R);if(d?.closest?.("button, a, input, .workspace-caret"))return;if(!M6(d))return;R.preventDefault(),_0.current={path:p,dragging:!1,startX:R.clientX,startY:R.clientY};let B0=(w0)=>{let u0=_0.current;if(!u0?.path)return;let U0=Math.abs(w0.clientX-u0.startX),o0=Math.abs(w0.clientY-u0.startY),l_=U0>4||o0>4;if(!u0.dragging&&l_)u0.dragging=!0,k0.current=!0,S(!0),c("move"),M1(u0.path),L1(w0.clientX,w0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(u0.dragging){w0.preventDefault(),L1(w0.clientX,w0.clientY);let a_=document.elementFromPoint(w0.clientX,w0.clientY),T_=n_(a_)||b_();if(Z_.current!==T_)__(T_);i_(T_)}},K0=()=>{document.removeEventListener("mousemove",B0),document.removeEventListener("mouseup",K0);let w0=_0.current;if(w0?.dragging&&w0.path){let u0=Z_.current||b_(),U0=t.current;if(typeof U0==="function")U0(w0.path,u0)}_0.current={path:null,dragging:!1,startX:0,startY:0},R0.current=0,S(!1),c(null),__(null),v_(),o1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",B0),document.addEventListener("mouseup",K0)},[n_,b_,M1,L1,o1,__,i_,v_]),g8=P(async(R)=>{let l=Array.from(R?.target?.files||[]);if(l.length===0)return;let p=X_.current||".";if(await j$(l,p),X_.current=".",R?.target)R.target.value=""},[j$]);return N`
        <aside
            class=${`workspace-sidebar${f?" workspace-drop-active":""}`}
            data-workspace-scale=${l0}
            ref=${C0}
            onDragEnter=${R8}
            onDragOver=${y1}
            onDragLeave=${R4}
            onDrop=${w$}
        >
            <input type="file" multiple style="display:none" ref=${V_} onChange=${g8} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${E0}
                            class=${`workspace-menu-button${h0?" active":""}`}
                            onClick=${(R)=>{R.stopPropagation(),c0((l)=>!l)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${h0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${h0&&N`
                            <div class="workspace-menu-dropdown" ref=${G0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${G$} disabled=${s}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${_4} disabled=${s}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${$4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>f_(()=>A5())} disabled=${y0}>
                                    ${y0?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${T?" active":""}`} role="menuitem" onClick=${Z$}>
                                    ${T?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(Z||X||Y)&&N`<div class="workspace-menu-separator"></div>`}
                                ${Z&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S8}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${X&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${y6}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Y&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x6}>
                                        ${q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${F&&N`<div class="workspace-menu-separator"></div>`}
                                ${R1&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T6}>Open in tab</button>
                                `}
                                ${F&&!I_&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X$} disabled=${!T1}>Open in editor</button>
                                `}
                                ${S1&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${w6}>Rename selected</button>
                                `}
                                ${x4&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${y5}>Download selected file</button>
                                `}
                                ${J$&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x5}>Download selected folder (zip)</button>
                                `}
                                ${a1&&N`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${w5}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{c0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${j1} title="New file" disabled=${s}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${A$} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${t$&&N`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${I4}`} title=${J5}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${z5}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${e1}>
                ${Z0&&N`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${Z0.error?N`<span class="workspace-upload-strip-error">${Z0.error}</span>`:Z0.done?N`<span>Done</span>`:N`<span>${Z0.total>1?`Uploading ${Z0.current}/${Z0.total}: ${Z0.name}`:`Uploading ${Z0.name}`}${Z0.percent>0?` (${Z0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!Z0.done&&!Z0.error&&N`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${Z0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${y&&N`<div class="workspace-loading">Loading…</div>`}
                ${M&&N`<div class="workspace-error">${M}</div>`}
                ${L&&N`
                    <div
                        class="workspace-tree-list"
                        ref=${U_}
                        tabIndex="0"
                        onClick=${z1}
                        onDblClick=${C4}
                        onKeyDown=${M5}
                        onTouchStart=${_$}
                        onTouchEnd=${P4}
                        onTouchMove=${X1}
                        onTouchCancel=${P4}
                    >
                        ${N1.map(({node:R,depth:l})=>{let p=R.type==="dir",d=R.path===F,B0=R.path===U,K0=p&&Q.has(R.path),w0=b&&R.path===b,u0=Array.isArray(R.children)&&R.children.length>0?R.children.length:Number(R.child_count)||0;return N`
                                <div
                                    key=${R.path}
                                    class=${`workspace-row${d?" selected":""}${w0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+l*k6.indentPx}px`}}
                                    data-path=${R.path}
                                    data-type=${R.type}
                                    onMouseDown=${I6}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${p?K0?N`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:N`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${p?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${p?N`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:N`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${B0?N`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${A_}
                                                value=${E}
                                                onInput=${(U0)=>H(U0?.target?.value||"")}
                                                onKeyDown=${(U0)=>{if(U0.stopPropagation(),U0.key==="Enter")U0.preventDefault(),r_();else if(U0.key==="Escape")U0.preventDefault(),F1()}}
                                                onBlur=${F1}
                                                onClick=${(U0)=>U0.stopPropagation()}
                                            />
                                        `:N`<span class="workspace-label"><span class="workspace-label-text">${R.name}</span></span>`}
                                    ${p&&!K0&&u0>0&&N`
                                        <span class="workspace-count">${u0}</span>
                                    `}
                                    ${p&&N`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${R.path}
                                            title="Upload files to this folder"
                                            onClick=${S4}
                                            disabled=${s}
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
            ${F&&N`
                <div class="workspace-preview-splitter-h" onMouseDown=${M$} onTouchStart=${$$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${F}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${j1} title="New file" disabled=${s}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!I_&&N`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>T1&&O_.current?.(F,k)}
                                    title=${O5}
                                    disabled=${!T1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${R_}
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
                            ${I_?N`
                                    <button class="workspace-download" onClick=${x1}
                                        title="Upload files to this folder" disabled=${s}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${D2(F,T)} download
                                        title="Download folder as zip" onClick=${(R)=>R.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:N`<a class="workspace-download" href=${E2(F)} download
                                        title="Download" onClick=${(R)=>R.stopPropagation()}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </a>`}
                        </div>
                    </div>
                    ${z&&N`<div class="workspace-loading">Loading preview…</div>`}
                    ${k?.error&&N`<div class="workspace-error">${k.error}</div>`}
                    ${I_&&N`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${Q0?.disabled&&N`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${Q0?.loading&&N`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${Q0?.error&&N`<div class="workspace-error">${Q0.error}</div>`}
                        ${Q0?.payload&&Q0.payload.segments?.length>0&&N`
                            <${tz} payload=${Q0.payload} />
                        `}
                        ${Q0?.payload&&(!Q0.payload.segments||Q0.payload.segments.length===0)&&N`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${k&&!k.error&&!I_&&N`
                        <div class="workspace-preview-body" ref=${r}></div>
                    `}
                </div>
            `}
            ${h&&N`
                <div class="workspace-drag-ghost" ref=${B_}>${h.label}</div>
            `}
        </aside>
    `}x0();var GJ=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function q8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function nL(_,$,j){let G=q8(_,$,j);return G!=null&&GJ.has(G)}function rL(_,$,j){return q8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function dL(_,$,j){return q8(_,$,j)==="editor"}var ZJ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,XJ=/\.(csv|tsv)$/i,YJ=/\.pdf$/i,qJ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function LJ(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=Tq(j,{hasPopOutTab:$});if(G)return G;if(ZJ.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(XJ.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(YJ.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(qJ.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function iL({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:q,onToggleDiff:L,onEditSource:K,previewTabs:Q,diffTabs:V,paneOverrides:F,detachedTabs:B,onReattachTab:U,onToggleDock:D,dockVisible:E,onToggleZen:H,zenMode:k,onPopOutTab:A}){let[O,y]=C(null),x=u(null);g(()=>{if(!O)return;let b=(e)=>{if(e.type==="keydown"&&e.key!=="Escape")return;y(null)};return document.addEventListener("click",b),document.addEventListener("keydown",b),()=>{document.removeEventListener("click",b),document.removeEventListener("keydown",b)}},[O]),g(()=>{let b=(e)=>{if(e.ctrlKey&&e.key==="Tab"){if(e.preventDefault(),!_.length)return;let s=_.findIndex((q0)=>q0.id===$);if(e.shiftKey){let q0=_[(s-1+_.length)%_.length];j?.(q0.id)}else{let q0=_[(s+1)%_.length];j?.(q0.id)}return}if((e.ctrlKey||e.metaKey)&&e.key==="w"){let s=document.querySelector(".editor-pane");if(s&&s.contains(document.activeElement)){if(e.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[_,$,j,G]);let z=P((b,e)=>{if(b.button===0){j?.(e);return}if(b.button===1)b.preventDefault(),G?.(e)},[j,G]),J=P((b,e)=>{if(b.defaultPrevented)return;if(b.button===0)j?.(e)},[j]),M=P((b,e)=>{b.preventDefault(),y({id:e,x:b.clientX,y:b.clientY})},[]),W=P((b)=>{b.stopPropagation()},[]),T=P((b,e)=>{b.preventDefault(),b.stopPropagation(),G?.(e)},[G]);g(()=>{if(!$||!x.current)return;let b=x.current.querySelector(".tab-item.active");if(b)b.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let I=P((b)=>{if(!(F instanceof Map))return null;return F.get(b)||null},[F]),f=X0(()=>_.find((b)=>b.id===O?.id)||null,[O?.id,_]),S=X0(()=>{let b=O?.id;if(!b)return!1;return nL(b,I(b),(e)=>Y_.resolve(e))},[O?.id,I]),v=X0(()=>{let b=O?.id;if(!b)return"Edit Source";return rL(b,I(b),(e)=>Y_.resolve(e))},[O?.id,I]),c=X0(()=>{let b=O?.id;if(!b||!(B instanceof Map))return!1;return B.has(b)},[O?.id,B]),h=X0(()=>{let b=O?.id;if(!b||!(V instanceof Set))return!1;return V.has(b)},[O?.id,V]),$0=X0(()=>{let b=O?.id;if(!b)return!1;let e=_.find((q0)=>q0.id===b)||null;if(!e)return!1;return dL(b,I(b),(q0)=>Y_.resolve(q0))&&Boolean(e.dirty||h)},[O?.id,h,I,_]);if(!_.length)return null;return N`
        <div class="tab-strip" ref=${x} role="tablist">
            ${_.map((b)=>N`
                <div
                    key=${b.id}
                    class=${`tab-item${b.id===$?" active":""}${b.dirty?" dirty":""}${b.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${b.id===$}
                    title=${b.path}
                    onMouseDown=${(e)=>z(e,b.id)}
                    onClick=${(e)=>J(e,b.id)}
                    onContextMenu=${(e)=>M(e,b.id)}
                >
                    ${b.pinned&&N`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${b.label}</span>
                    ${B instanceof Map&&B.has(b.id)&&N`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${W}
                        onMouseDown=${W}
                        onClick=${(e)=>T(e,b.id)}
                        title=${b.dirty?"Unsaved changes":"Close"}
                        aria-label=${b.dirty?"Unsaved changes":`Close ${b.label}`}
                    >
                        ${b.dirty?N`<span class="tab-dirty-dot" aria-hidden="true"></span>`:N`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${D&&N`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${E?" active":""}`}
                    onClick=${D}
                    title=${`${E?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${E?"Hide":"Show"} terminal`}
                    aria-pressed=${E?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${H&&N`
                <button
                    class=${`tab-strip-zen-toggle${k?" active":""}`}
                    onClick=${H}
                    title=${`${k?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${k?"Exit":"Enter"} zen mode`}
                    aria-pressed=${k?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${k?N`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:N`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&N`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{G?.(O.id),y(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),y(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),y(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(O.id),y(null)}}>
                    ${f?.pinned?"Unpin":"Pin"}
                </button>
                ${S&&K&&N`
                    <button onClick=${()=>{K(O.id),y(null)}}>${v}</button>
                `}
                ${c&&U&&N`
                    <button onClick=${()=>{U(O.id),y(null)}}>Reattach</button>
                `}
                ${A&&!c&&N`
                    <button onClick=${()=>{let b=_.find((e)=>e.id===O.id);A(O.id,b?.label),y(null)}}>Open in Window</button>
                `}
                ${$0&&L&&N`
                    <hr />
                    <button onClick=${()=>{j?.(O.id),L(O.id),y(null)}}>${h?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${q&&/\.(md|mdx|markdown)$/i.test(O.id)&&N`
                    <hr />
                    <button onClick=${()=>{q(O.id),y(null)}}>
                        ${Q?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let b=LJ(O.id,{hasPopOutTab:typeof A==="function"});if(!b)return null;return N`
                        <hr />
                        <button onClick=${()=>{window.open(b,"_blank","noopener"),y(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}x0();g_();w2();function K8(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function g9(_,$=30){return K8(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function L8(_,$=56,j=16,G={}){let Z=K8(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let q=(j/2).toFixed(2);return`M 0 ${q} L ${$} ${q}`}if(Z.length===1){let q=(Z[0]-X)/(Y-X),L=(j-q*j).toFixed(2);return`M 0 ${L} L ${$} ${L}`}return Z.map((q,L)=>{let K=L/(Z.length-1||1)*$,Q=(q-X)/(Y-X),V=j-Q*j;return`${L===0?"M":"L"} ${K.toFixed(2)} ${V.toFixed(2)}`}).join(" ")}function K5(_){return`${Math.round(Number(_)||0)}%`}function KJ(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function VJ(_){let $=[`CPU ${K5(_?.cpu_percent)}`,`RAM ${K5(_?.ram_percent)}`];if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${K5(_?.swap_percent)}`);return $.join(" • ")}function oL(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function QJ(_){return oL(_)>0&&K8(_?.process_rss_series_bytes).length>0}function FJ(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function sL({mode:_="overlay"}){let[$,j]=C(()=>X6(!1)),[G,Z]=C(()=>I7(!1)),[X,Y]=C(()=>FJ()),[q,L]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[K,Q]=C(!1);g(()=>{let z=(M)=>{j(Boolean(M?.detail?.enabled))},J=(M)=>{Z(Boolean(M?.detail?.collapsed))};return window.addEventListener(z4,z),window.addEventListener(M2,J),()=>{window.removeEventListener(z4,z),window.removeEventListener(M2,J)}},[]),g(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let z=window.matchMedia("(max-width: 900px)"),J=()=>Y(Boolean(z.matches));if(J(),typeof z.addEventListener==="function")return z.addEventListener("change",J),()=>z.removeEventListener("change",J);return z.addListener(J),()=>z.removeListener(J)},[]);let F=_==="overlay";g(()=>{if(!$||!F)return;let z=!1,J=0,M=async()=>{Q((W)=>W||q.cpu_series.length>0?W:!0);try{let W=await i3();if(z)return;L({cpu_percent:Number(W?.cpu_percent)||0,ram_percent:Number(W?.ram_percent)||0,swap_percent:Number.isFinite(Number(W?.swap_percent))?Number(W?.swap_percent):null,cpu_series:g9(W?.cpu_series),ram_series:g9(W?.ram_series),swap_series:g9(W?.swap_series),process_rss_series_bytes:K8(W?.process_rss_series_bytes),process_memory:{rss_bytes:Number(W?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(W?.process_memory?.vm_rss_bytes))?Number(W?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(W?.swap_total_bytes)||0,swap_used_bytes:Number(W?.swap_used_bytes)||0,sample_interval_ms:Number(W?.sample_interval_ms)||2000,platform:String(W?.platform||"")})}catch{if(z)return}finally{if(!z)Q(!1)}};return M(),J=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;M()},Math.max(1000,Number(q.sample_interval_ms)||2000)),()=>{if(z=!0,J)window.clearInterval(J)}},[$,F]);let B=X0(()=>L8(q.cpu_series,56,16,{min:0,max:100}),[q.cpu_series]),U=X0(()=>L8(q.ram_series,56,16,{min:0,max:100}),[q.ram_series]),D=X0(()=>L8(q.swap_series,56,16,{min:0,max:100}),[q.swap_series]),E=X0(()=>L8(q.process_rss_series_bytes),[q.process_rss_series_bytes]),H=Number.isFinite(Number(q.swap_percent))&&q.swap_total_bytes>0,k=oL(q),A=QJ(q),O=X0(()=>VJ(q),[q]);if(!$||!F)return null;let y=G?"Show system meters":K?"Updating system meters… Click to collapse.":"System meters — click to collapse.",x=(z)=>{z?.stopPropagation?.(),TX()};return N`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${y}
                aria-label=${y}
                aria-expanded=${G?"false":"true"}
                onClick=${x}
            >
                ${G?N`<span class="system-meters-collapse-tab" aria-hidden="true">◂</span>`:X?N`<span class="system-meters-compact-summary">${O}</span>`:N`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${B}></path>
                                </svg>
                                <span class="system-meters-value">${K5(q.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${K5(q.ram_percent)}</span>
                            </div>
                            ${A&&N`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${KJ(k)}</span>
                                </div>
                            `}
                            ${H&&N`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${K5(q.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function BJ(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function NJ(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function UJ(_){let{id:$,scrollToBottom:j,getElementById:G=(K)=>document.getElementById(K),scheduleRaf:Z=(K)=>requestAnimationFrame(K),scheduleTimeout:X=(K,Q)=>{setTimeout(K,Q)},maxAttempts:Y=12}=_,q=(K)=>{K.scrollIntoView({behavior:"smooth",block:"center"}),K.classList.add("post-highlight"),X(()=>K.classList.remove("post-highlight"),2000)},L=(K)=>{let Q=G(`post-${$}`);if(Q){q(Q);return}if(K<=0){j?.();return}Z(()=>{X(()=>L(K-1),40)})};L(Y)}function HJ(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(L)=>UJ({id:L,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let q=NJ($);if(q){Z(q);return}G()}function aL(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:q,handleRenameCurrentBranch:L,renameBranchNameDraft:K,renameBranchNameInputRef:Q,setRenameBranchNameDraft:V,renameBranchDraftState:F,isRenamingBranch:B,addFileRef:U,openEditor:D,openTerminalTab:E,openVncTab:H,hasDockPanes:k,toggleDock:A,dockVisible:O,handleSplitterMouseDown:y,handleSplitterTouchStart:x,showEditorPaneContainer:z,tabStripTabs:J,tabStripActiveId:M,handleTabActivate:W,handleTabClose:T,handleTabCloseOthers:I,handleTabCloseAll:f,handleTabTogglePin:S,handleTabTogglePreview:v,handleTabToggleDiff:c,handleTabEditSource:h,handleReattachPane:$0,previewTabs:b,diffTabs:e,tabPaneOverrides:s,toggleZenMode:q0,handlePopOutPane:Z0,isWebAppMode:D0,editorContainerRef:Q0,editorInstanceRef:L0,detachedTabs:N0,activeDetachedTab:H0,detachedDockPane:y0,handleDockSplitterMouseDown:i,handleDockSplitterTouchStart:j0,TERMINAL_TAB_PATH:O0,dockContainerRef:f0,handleEditorSplitterMouseDown:m0,handleEditorSplitterTouchStart:l0,searchQuery:G_,isIOSDevice:h0,currentBranchRecord:c0,currentChatJid:M0,currentChatBranches:p0,handleBranchPickerChange:b0,formatBranchPickerLabel:d0,openRenameCurrentBranchForm:H_,handlePruneCurrentBranch:E_,handlePurgeArchivedBranch:K_,currentHashtag:S0,handleBackToTimeline:A0,activeSearchScopeLabel:n0,oobePanelState:q_,composePrefillRequest:O_,requestComposePrefill:F0,handleOobeSetupProvider:T0,handleOobeShowModelPicker:C0,handleOobeOpenWorkspace:U_,handleDismissProviderMissingOobe:A_,handleCompleteProviderReadyOobe:V_,posts:X_,isMainTimelineView:D_,hasMore:M_,loadMore:_0,timelineRef:z0,handleHashtagClick:k0,addMessageRef:g0,scrollToMessage:v0,openFileFromPill:a,openTimelineFileFromPill:o,handleDeletePost:r,handleOpenFloatingWidget:Y0,agents:G0,userProfile:E0,removingPostIds:I0,agentStatus:t0,isCompactionStatus:J0,agentDraft:R0,agentPlan:Z_,agentThought:L_,pendingRequest:$_,intentToast:B_,currentTurnId:k_,steerQueued:e0,handlePanelToggle:t,btwSession:W0,closeBtwPanel:s0,handleBtwRetry:i0,handleBtwInject:P_,floatingWidget:z_,handleCloseFloatingWidget:x_,handleFloatingWidgetEvent:i1,attachmentPreview:J_,setAttachmentPreview:d_,extensionStatusPanels:O1,pendingExtensionPanelActions:b_,handleExtensionPanelAction:n_,searchOpen:q1,followupQueueItems:__,handleInjectQueuedFollowup:v_,handleRemoveQueuedFollowup:i_,handleMoveQueuedFollowup:L1,viewStateRef:M1,loadPosts:o1,scrollToBottom:W$,searchScope:F1,handleSearch:s_,handleSearchScopeChange:r_,setSearchScope:a$,enterSearchMode:j1,exitSearchMode:B1,fileRefs:K1,removeFileRef:s1,clearFileRefs:N1,setFileRefsFromCompose:O$,messageRefs:k6,removeMessageRef:z$,clearMessageRefs:I_,setMessageRefsFromCompose:T1,handleCreateSessionFromCompose:O5,handleCreateRootSessionFromCompose:R1,handleRestoreBranch:S1,attachActiveEditorFile:a1,followupQueueCount:x4,handleBtwIntercept:J$,handleMessageResponse:z5,handleComposeSubmitError:J5,isComposeBoxAgentActive:I4,activeChatAgents:t$,connectionStatus:G1,activeModel:f_,agentModelsPayload:A5,activeModelUsage:t1,activeThinkingLevel:M6,supportsThinking:k5,contextUsage:C4,extensionWorkingState:z1,notificationsEnabled:A$,notificationPermission:w1,handleToggleNotifications:k$,setActiveModel:e1,applyModelState:Z1,setPendingRequest:e$,pendingRequestRef:M5,toggleWorkspace:_$}=_,P4=()=>{if(h0())return;W$()};return N`
    <div class=${BJ({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${sL} mode="overlay" />
      ${Y&&N`
        <div class="rename-branch-overlay" onPointerDown=${(X1)=>{if(X1.target===X1.currentTarget)q()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(X1)=>{X1.preventDefault(),L(K)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${Q}
              value=${K}
              onInput=${(X1)=>{let M$=X1.currentTarget?.value??"";V(String(M$))}}
              onKeyDown=${(X1)=>{if(X1.key==="Escape")X1.preventDefault(),q()}}
              autocomplete="off"
              placeholder="Session handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${F.kind||"info"}`}>
              ${F.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${B||!F.canSubmit}>
                ${B?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${q}
                disabled=${B}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&N`
        <${pL}
          onFileSelect=${U}
          visible=${j}
          active=${j||G}
          onOpenEditor=${D}
          onOpenTerminalTab=${E}
          onOpenVncTab=${H}
          onToggleTerminal=${k?A:void 0}
          terminalVisible=${Boolean(k&&O)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${_$}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${y} onTouchStart=${x}></div>
      `}
      ${z&&N`
        <div class="editor-pane-container">
          ${X&&N`<div class="zen-hover-zone"></div>`}
          ${G&&N`
            <${iL}
              tabs=${J}
              activeId=${M}
              onActivate=${W}
              onClose=${T}
              onCloseOthers=${I}
              onCloseAll=${f}
              onTogglePin=${S}
              onTogglePreview=${v}
              onToggleDiff=${c}
              onEditSource=${h}
              previewTabs=${b}
              diffTabs=${e}
              paneOverrides=${s}
              detachedTabs=${N0}
              onReattachTab=${$0}
              onToggleDock=${k?A:void 0}
              dockVisible=${k&&O}
              onToggleZen=${q0}
              zenMode=${X}
              onPopOutTab=${D0?void 0:Z0}
            />
          `}
          ${G&&H0&&N`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${H0.label||H0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>$0(H0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!H0&&N`<div class="editor-pane-host" ref=${Q0}></div>`}
          ${G&&!H0&&M&&b.has(M)&&N`
            <${u2}
              getContent=${()=>L0.current?.getContent?.()}
              path=${M}
              onClose=${()=>v(M)}
            />
          `}
          ${k&&O&&N`<div class="dock-splitter" onMouseDown=${i} onTouchStart=${j0}></div>`}
          ${k&&N`<div class=${`dock-panel${O?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!D0&&!y0&&N`
                  <button class="dock-panel-action" onClick=${()=>Z0(O0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${y0&&N`
                  <button class="dock-panel-action" onClick=${()=>$0(O0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${A} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${y0?N`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>$0(O0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:N`<div class="dock-panel-body" ref=${f0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${m0} onTouchStart=${l0}></div>
      `}
      <${mq}
        workspaceOpen=${j}
        toggleWorkspace=${_$}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${E}
        onOpenVncTab=${H}
        onToggleTerminal=${k?A:void 0}
        terminalVisible=${Boolean(k&&O)}
      />
      <${vq}
        activeChatAgents=${t$}
        currentChatJid=${M0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(k&&O)}
        onSwitchChat=${b0}
        onToggleWorkspace=${_$}
        onOpenTerminalTab=${E}
        onOpenVncTab=${H}
        onToggleTerminalDock=${k?A:void 0}
        onPrefillCompose=${F0}
      />
      <div class="container">
        ${G_&&h0()&&N`<div class="search-results-spacer"></div>`}
        ${(S0||G_)&&N`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${A0}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${S0?`#${S0}`:`Search: ${G_} · ${n0}`}</span>
          </div>
        `}
        ${q_?.kind&&q_.kind!=="hidden"&&N`
          <${$q}
            kind=${q_.kind}
            onSetupProvider=${T0}
            onShowModelPicker=${C0}
            onOpenWorkspace=${U_}
            onDismiss=${q_.kind==="provider-missing"?A_:V_}
          />
        `}
        <${ML}
          posts=${X_}
          hasMore=${D_?M_:!1}
          onLoadMore=${D_?_0:void 0}
          timelineRef=${z0}
          onHashtagClick=${k0}
          onMessageRef=${g0}
          onScrollToMessage=${v0}
          onFileRef=${o||a}
          onPostClick=${void 0}
          onDeletePost=${r}
          onOpenWidget=${Y0}
          onOpenAttachmentPreview=${d_}
          emptyMessage=${S0?`No posts with #${S0}`:G_?`No results for "${G_}"`:void 0}
          agents=${G0}
          user=${E0}
          reverse=${D_}
          removingPostIds=${I0}
          searchQuery=${G_}
        />
        <${H9}
          status=${J0(t0)?null:t0}
          draft=${R0}
          plan=${Z_}
          thought=${L_}
          pendingRequest=${$_}
          intent=${B_}
          turnId=${k_}
          steerQueued=${e0}
          onPanelToggle=${t}
          showExtensionPanels=${!1}
        />
        <${qq}
          session=${W0}
          onClose=${s0}
          onRetry=${i0}
          onInject=${P_}
        />
        <${Jq}
          widget=${z_}
          onClose=${x_}
          onWidgetEvent=${i1}
        />
        ${J_&&N`
          <${gq}
            mediaId=${J_.mediaId}
            info=${J_.info}
            onClose=${()=>d_(null)}
          />
        `}
        <${fY} />
        <${H9}
          extensionPanels=${Array.from(O1.values())}
          pendingPanelActions=${b_}
          onExtensionPanelAction=${n_}
          turnId=${k_}
          steerQueued=${e0}
          onPanelToggle=${t}
          showCorePanels=${!1}
        />
        <${L9}
          items=${q1?[]:__}
          onInjectQueuedFollowup=${v_}
          onRemoveQueuedFollowup=${i_}
          onMoveQueuedFollowup=${L1}
          onOpenFilePill=${a}
        />
        <${_q}
          onPost=${(X1)=>{HJ({response:X1,viewStateRef:M1,scrollToBottom:W$})}}
          onFocus=${P4}
          searchMode=${q1}
          searchScope=${F1}
          onSearch=${s_}
          onSearchScopeChange=${r_||a$}
          onEnterSearch=${j1}
          onExitSearch=${B1}
          fileRefs=${K1}
          onRemoveFileRef=${s1}
          onClearFileRefs=${N1}
          onSetFileRefs=${O$}
          messageRefs=${k6}
          onRemoveMessageRef=${z$}
          onClearMessageRefs=${I_}
          onSetMessageRefs=${T1}
          onSwitchChat=${b0}
          onRenameSession=${L}
          isRenameSessionInProgress=${B}
          onCreateSession=${O5}
          onCreateRootSession=${R1}
          onDeleteSession=${E_}
          onPurgeArchivedSession=${K_}
          onRestoreSession=${S1}
          activeEditorPath=${Z?null:M}
          onAttachEditorFile=${Z?void 0:a1}
          onOpenFilePill=${a}
          followupQueueCount=${x4}
          followupQueueItems=${__}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${v_}
          onRemoveQueuedFollowup=${i_}
          onMoveQueuedFollowup=${L1}
          onSubmitIntercept=${J$}
          onMessageResponse=${z5}
          onSubmitError=${J5}
          isAgentActive=${I4}
          activeChatAgents=${t$}
          currentChatJid=${M0}
          connectionStatus=${G1}
          activeModel=${f_}
          agentModelsPayload=${A5}
          modelUsage=${t1}
          thinkingLevel=${M6}
          supportsThinking=${k5}
          contextUsage=${C4}
          notificationsEnabled=${A$}
          notificationPermission=${w1}
          onToggleNotifications=${k$}
          onModelChange=${e1}
          onModelStateChange=${Z1}
          statusNotice=${J0(t0)?t0:null}
          extensionWorkingState=${z1}
          prefillRequest=${O_}
        />
        <${sq}
          request=${$_}
          onRespond=${()=>{e$(null),M5.current=null}}
        />
      </div>
    </div>
  `}function tL(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,q=gY({branchLoaderMode:$,panePopoutMode:j}),L=Y?.renderBranchLoaderMode||uY,K=Y?.renderPanePopoutMode||bY,Q=Y?.renderMainShell||aL;if(q==="branch-loader")return L(G);if(q==="pane-popout")return K(Z);return Q(X)}var Q8="piclaw_btw_session",_K=900,eL="__piclawRenameBranchFormLock__";function EJ(){try{return import.meta.url}catch{return null}}function u9(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function DJ(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function V8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function $K(_={}){let $=_.importMetaUrl===void 0?EJ():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=DJ($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let L=new URL(Y,G).searchParams.get("v");return L&&L.trim()?L.trim():null}catch{return null}}function jK(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[eL];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[eL]=G,G}function GK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function ZK(_={}){let $=typeof _.readItem==="function"?_.readItem:E1,j=_.storageKey||Q8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",q=typeof Z.thinking==="string"?Z.thinking:"",L=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,K=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:q,error:K==="error"?L||"BTW stream interrupted. You can retry.":L,model:null,status:K}}catch{return null}}function XK(_,$={}){let j=$.defaultChatJid||"web:default",G=V8(_,"chat_jid",j),Z=u9(_?.get?.("chat_only")||_?.get?.("chat-only")),X=u9(_?.get?.("pane_popout")),Y=V8(_,"pane_path"),q=V8(_,"pane_label"),L=u9(_?.get?.("branch_loader")),K=V8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:L,branchLoaderSourceChatJid:K}}function YK(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function qK(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function b9(_,$,j){return _||$?.label||j||"Pane"}function LK(_,$,j){return`${b9(_,$,j)} · PiClaw`}function KK(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function VK(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function QK(_,$,j,G){return _===$&&!j||G}function FK(_,$,j,G,Z){return _||!$&&(j||G&&Z)}g_();function WJ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function $1(_,$,j){let G=_?.[$];return typeof G==="function"?G:WJ($,j)}var BK=!1,NK=!1,UK=!1;function OJ(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function zJ(_=typeof window<"u"?window:null){if(!_||NK)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),NK=!0}function JJ(){Y_.register(G3),Y_.register(E7),Y_.register(H7),Y_.register(D7),Y_.register(W7),Y_.register(O7),Y_.register(J7),Y_.register(A7),Y_.register(k7),Y_.register(T7),Y_.register(S3),Z3(),Y_.register(K3),Y_.register(V3)}function AJ(_=typeof window<"u"?window:null){if(!_||UK)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;UK=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function HK(){if(BK)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(OJ($),zJ(_),B9(_),_)try{let j=await Promise.resolve().then(() => (x0(),ij));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}JJ(),await Iq(_),AJ(_),BK=!0}function kJ(_=t5){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:$1(_,"getAgentContext",null),getAutoresearchStatus:$1(_,"getAutoresearchStatus",null),stopAutoresearch:$1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:$1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:$1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:$1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:$1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:$1(_,"getChatBranches",{chats:[]}),renameChatBranch:$1(_,"renameChatBranch",null),pruneChatBranch:$1(_,"pruneChatBranch",null),restoreChatBranch:$1(_,"restoreChatBranch",null),getAgentQueueState:$1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:$1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:$1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:$1(_,"streamSidePrompt",null)}}var EK=kJ(t5);function DK(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:q,shellState:L,agentState:K,composeState:Q,modelState:V}=_,F={appShellRef:L.appShellRef,editorOpen:L.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:L.tabStripTabs,tabStripActiveId:L.tabStripActiveId,handleTabActivate:L.handleTabActivate,previewTabs:L.previewTabs,diffTabs:L.diffTabs,handleTabTogglePreview:L.handleTabTogglePreview,handleTabToggleDiff:L.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:L.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},B={appShellRef:L.appShellRef,workspaceOpen:L.workspaceOpen,editorOpen:L.editorOpen,chatOnlyMode:L.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:L.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:L.renameBranchNameDraft,renameBranchNameInputRef:L.renameBranchNameInputRef,setRenameBranchNameDraft:L.setRenameBranchNameDraft,renameBranchDraftState:L.renameBranchDraftState,isRenamingBranch:L.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:L.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:L.TERMINAL_TAB_PATH,isIOSDevice:L.isIOSDevice,currentBranchRecord:L.currentBranchRecord,currentChatJid:L.currentChatJid,currentChatBranches:L.currentChatBranches,formatBranchPickerLabel:L.formatBranchPickerLabel,activeSearchScopeLabel:L.activeSearchScopeLabel,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,oobePanelState:L.oobePanelState,composePrefillRequest:L.composePrefillRequest,requestComposePrefill:L.requestComposePrefill,handleOobeSetupProvider:L.handleOobeSetupProvider,handleOobeShowModelPicker:L.handleOobeShowModelPicker,handleOobeOpenWorkspace:L.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:L.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:L.handleCompleteProviderReadyOobe,posts:L.posts,hasMore:L.hasMore,loadMore:L.loadMore,timelineRef:L.timelineRef,agents:L.agents,userProfile:L.userProfile,removingPostIds:L.removingPostIds,extensionStatusPanels:L.extensionStatusPanels,pendingExtensionPanelActions:L.pendingExtensionPanelActions,searchOpen:L.searchOpen,followupQueueItems:L.followupQueueItems,viewStateRef:L.viewStateRef,loadPosts:L.loadPosts,scrollToBottom:L.scrollToBottom,searchScope:L.searchScope,tabStripTabs:L.tabStripTabs,tabStripActiveId:L.tabStripActiveId,handleTabActivate:L.handleTabActivate,previewTabs:L.previewTabs,diffTabs:L.diffTabs,handleTabTogglePreview:L.handleTabTogglePreview,handleTabToggleDiff:L.handleTabToggleDiff,panePopoutPath:L.panePopoutPath,tabPaneOverrides:L.tabPaneOverrides,handleTabClose:L.handleTabClose,handleTabCloseOthers:L.handleTabCloseOthers,handleTabCloseAll:L.handleTabCloseAll,handleTabTogglePin:L.handleTabTogglePin,handleTabEditSource:L.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:L.openEditor,openTerminalTab:L.openTerminalTab,openVncTab:L.openVncTab,fileRefs:Q.fileRefs,messageRefs:Q.messageRefs,followupQueueCount:Q.followupQueueCount,attachmentPreview:Q.attachmentPreview,setAttachmentPreview:Q.setAttachmentPreview,extensionWorkingState:Q.extensionWorkingState,activeChatAgents:V.activeChatAgents,connectionStatus:V.connectionStatus,activeModel:V.activeModel,activeModelUsage:V.activeModelUsage,activeThinkingLevel:V.activeThinkingLevel,supportsThinking:V.supportsThinking,contextUsage:V.contextUsage,notificationsEnabled:V.notificationsEnabled,notificationPermission:V.notificationPermission,handleToggleNotifications:V.handleToggleNotifications,setActiveModel:V.setActiveModel,applyModelState:V.applyModelState,setPendingRequest:K.setPendingRequest,pendingRequestRef:K.pendingRequestRef,...G,...Z,...X,...Y,...q,...K,...Q,...V};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:F,mainShellOptions:B}}function MJ(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function WK(_){let $=MJ({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return DK({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}x0();var zK="(min-width: 1024px) and (orientation: landscape)";function v9(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function OK(_,$){let j=v9(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function TJ(_,$,j){let G=v9(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function N6(_=typeof window<"u"?window:null){let $=v9(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function JK(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function AK(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||N6($),Y=JK(X),q=OK($,Y);if(typeof q==="boolean")return q;if(G&&X==="desktop"){let L=OK($,"workspaceOpen");if(typeof L==="boolean")return L}return Z}function kK(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||N6(j);TJ(j,JK(Z),Boolean(_))}m5();var wJ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function MK(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(I1({window:j,navigator:G}))};Z();let Y=wJ.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",Z),()=>q.removeEventListener("change",Z);if(typeof q.addListener==="function")return q.addListener(Z),()=>q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let q of Y)q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function F8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function TK(_={}){return I1(_)&&s6(_)}function yJ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let G=Number($?.innerHeight||0);if(Number.isFinite(G)&&G>0)return Math.round(G);return null}function xJ(_={},$={}){if(!TK(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=yJ({window:j});if(Z&&Z>0)G.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(X){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",X)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(X){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",X)}}return Z}function wK(_={}){if(!TK(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},Y=()=>{G=0,xJ({window:$,document:j})},q=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},L=()=>{q();for(let V of[80,220,420]){let F=$.setTimeout?.(()=>{Z.delete(F),q()},V);if(F!=null)Z.add(F)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},Q=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",L,!0),Q?.addEventListener?.("resize",L),Q?.addEventListener?.("scroll",L),()=>{X(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",L,!0),Q?.removeEventListener?.("resize",L),Q?.removeEventListener?.("scroll",L)}}var m9="resume-layout-settling",IJ=220,V5=new WeakMap;function CJ(_){if(!_){Q_(Q8,"");return}Q_(Q8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function PJ(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function fJ(_,$={}){if(!_)return()=>{};let{durationMs:j=IJ,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=V5.get(_);if(X)Z(X);_.classList.add(m9);let Y=G(()=>{if(V5.get(_)===Y)_.classList.remove(m9),V5.delete(_)},j);return V5.set(_,Y),()=>{let q=V5.get(_);if(q)Z(q),V5.delete(_);_.classList.remove(m9)}}function RJ(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function yK(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:q,agents:L,agentsRef:K,currentChatJid:Q,activeChatJidRef:V,userProfile:F,userProfileRef:B,brandingRef:U,panePopoutMode:D=!1}=_;DX(30000),g(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),g(()=>DZ(),[]),g(()=>MK(Z),[Z]),g(()=>{let k=()=>{},A=F8(()=>{k(),k=fJ(G.current)});return()=>{A(),k()}},[G]);let E=u(N6());return g(()=>{kK(X,{bucket:E.current})},[X]),g(()=>{if(typeof window>"u"||!window.matchMedia)return;let k=window.matchMedia(zK),A=()=>{let O=N6(window);if(E.current===O)return;let y=E.current;if(E.current=O,y==="desktop"&&O==="narrow")Y(!1)};if(k.addEventListener)k.addEventListener("change",A);else if(k.addListener)k.addListener(A);return()=>{if(k.removeEventListener)k.removeEventListener("change",A);else if(k.removeListener)k.removeListener(A)}},[Y]),g(()=>wK(),[]),g(()=>{CJ(q)},[q]),g(()=>{K.current=L||{}},[L,K]),g(()=>{V.current=Q},[V,Q]),g(()=>{B.current=F||{name:"You",avatar_url:null,avatar_background:null}},[F,B]),{applyBranding:P((k,A,O=null)=>{if(typeof document>"u")return;let y=(k||"").trim()||"PiClaw";if(U.current.title!==y){if(PJ({panePopoutMode:D,search:typeof window<"u"?window.location.search:""})){document.title=y;let z=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(z&&z.getAttribute("content")!==y)z.setAttribute("content",y)}U.current.title=y}let x=A?`${A}|${O||""}`:"";if(U.current.avatarBase!==x){U.current.avatarBase=x;let z=O||Date.now();RJ(document,z)}},[U])}}x0();function xK(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function c9(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function l9(_,$){let j=Array.isArray(_)?_:[],G=c9($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function h9(_,$){let j=Array.isArray(_)?_:[],G=c9($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function p9(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=c9(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function IK(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function CK(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function n9(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:q,setCurrentHashtag:L,setPosts:K,setHasMore:Q}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let F=j==="root"||j==="all"?j:"current";Y(F),q(V),L(null),K(null);try{let B=await X(V,50,0,G,F,Z,_.filters);K(Array.isArray(B?.results)?B.results:[]),Q(!1)}catch(B){console.error("Failed to search:",B),K([])}}async function PK(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:q,hasMoreRef:L,loadMoreRef:K,confirm:Q=(H)=>window.confirm(H),showAlert:V=(H)=>alert(H),scheduleTimeout:F=(H,k)=>{setTimeout(H,k)}}=_;if(!$)return;let B=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,D=j?.filter((H)=>H?.data?.thread_id===B&&H?.id!==B).length||0;if(D>0){if(!Q(`Delete this message and its ${D} replies?`))return}let E=(H)=>{if(!H.length)return;q((k)=>{let A=new Set(k);return H.forEach((O)=>A.add(O)),A}),F(()=>{if(X(()=>{Y((k)=>k?k.filter((A)=>!H.includes(A.id)):k)}),q((k)=>{let A=new Set(k);return H.forEach((O)=>A.delete(O)),A}),L.current)K.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let H=await Z(B,D>0,U);if(H?.ids?.length)E(H.ids)}catch(H){let k=H instanceof Error?H.message:String(H||"");if(D===0&&k.includes("Replies exist")){if(!Q("Delete this message and its replies?"))return;let O=await Z(B,!0,U);if(O?.ids?.length)E(O.ids);return}console.error("Failed to delete post:",H),V(`Failed to delete message: ${k}`)}}async function fK(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(V)=>document.getElementById(V),scheduleRaf:q=(V)=>requestAnimationFrame(V),scheduleTimeout:L=(V,F)=>{setTimeout(V,F)}}=_,K=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),L(()=>V.classList.remove("post-highlight"),2000)},Q=Y(`post-${$}`);if(Q){K(Q);return}try{let V=typeof j==="string"&&j.trim()?j.trim():G,B=(await Z($,V))?.thread?.[0];if(!B)return;X((U)=>{if(!U)return[B];if(U.some((D)=>D.id===B.id))return U;return[...U,B]}),q(()=>{L(()=>{let U=Y(`post-${$}`);if(U)K(U)},50)})}catch(V){console.error("[scrollToMessage] Failed to fetch message",$,V)}}function SJ(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function gJ(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:q,setSearchQuery:L,setSearchOpen:K,setMessageRefs:Q,navigate:V,chatOnlyMode:F,baseHref:B=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let D=typeof j==="string"&&j.trim()?j.trim():G,E=D!==G,H=Boolean(Y||X||Z);if(!E&&!H)return Q((k)=>l9(k,U)),!0;if(Q([U]),q?.(null),L?.(null),K?.(!1),E&&typeof V==="function"){let k=A1(B,D,{chatOnly:F});V(k)}return!0}function RK(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:q,setMessageRefs:L,currentChatJid:K,currentHashtag:Q,searchQuery:V,searchOpen:F,setCurrentHashtag:B,setSearchQuery:U,setSearchOpen:D,navigate:E,chatOnlyMode:H,baseHref:k,getThread:A,setPosts:O}=_,y=P(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);g(()=>{return()=>{y()}},[y]);let x=P((s)=>{q((q0)=>l9(q0,s))},[q]),z=P((s)=>{q((q0)=>h9(q0,s))},[q]),J=P(()=>{q([])},[q]),M=P((s)=>{q(p9(s))},[q]),W=P((s,q0=null,Z0="info",D0=3000)=>{y(),$({title:s,detail:q0||null,kind:Z0||"info"}),j.current=setTimeout(()=>{$((Q0)=>Q0?.title===s?null:Q0)},D0)},[y,j,$]),T=P((s,{autoOpenEditor:q0=!1}={})=>{let Z0=xK(s,{editorOpen:G,autoOpenEditor:q0,resolvePane:X});if(Z0.kind==="open"){Z(Z0.path);return}if(Z0.kind==="toast")W(Z0.title,Z0.detail,Z0.level)},[G,Z,X,W]),I=P((s)=>{T(s,{autoOpenEditor:!1})},[T]),f=P((s)=>{T(s,{autoOpenEditor:!0})},[T]),S=P(()=>{let s=Y;if(s)x(s)},[x,Y]),v=P((s,q0=null)=>{gJ({id:s,targetChatJid:q0,currentChatJid:K,currentHashtag:Q,searchQuery:V,searchOpen:F,setCurrentHashtag:B,setSearchQuery:U,setSearchOpen:D,setMessageRefs:L,navigate:E,chatOnlyMode:H,baseHref:k})},[k,H,K,Q,E,F,V,B,L,D,U]),c=P(async(s,q0=null)=>{await fK({id:s,targetChatJid:q0,currentChatJid:K,getThread:A,setPosts:O})},[K,A,O]),h=P((s)=>{L((q0)=>h9(q0,s))},[L]),$0=P(()=>{L([])},[L]),b=P((s)=>{L(p9(s))},[L]),e=P((s)=>{W("Compose failed",SJ(s),"error",5000)},[W]);return{clearIntentToast:y,addFileRef:x,removeFileRef:z,clearFileRefs:J,setFileRefsFromCompose:M,showIntentToast:W,openFileFromPill:I,openTimelineFileFromPill:f,attachActiveEditorFile:S,addMessageRef:v,scrollToMessage:c,removeMessageRef:h,clearMessageRefs:$0,setMessageRefsFromCompose:b,handleComposeSubmitError:e}}x0();async function SK(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:q,thoughtBufferRef:L,draftBufferRef:K,setAgentThought:Q,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let F=G.current;if($==="thought"){if(Z.current=j,F)try{await Y(F,"thought",j)}catch(B){console.warn("Failed to update thought visibility:",B)}if(!j)return;try{let B=F?await q(F,"thought"):null;if(B?.text)L.current=B.text;Q((U)=>({...U||{text:"",totalLines:0},fullText:L.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full thought:",B)}return}if(X.current=j,F)try{await Y(F,"draft",j)}catch(B){console.warn("Failed to update draft visibility:",B)}if(!j)return;try{let B=F?await q(F,"draft"):null;if(B?.text)K.current=B.text;V((U)=>({...U||{text:"",totalLines:0},fullText:K.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full draft:",B)}}function uJ(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function bJ(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function gK(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:q,setAgentStatus:L,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,currentTurnIdRef:B,steerQueuedTurnIdRef:U,agentStatusRef:D,silentRecoveryRef:E,thoughtExpandedRef:H,draftExpandedRef:k,setCurrentTurnId:A,setSteerQueuedTurnId:O,currentTurnIdRefForPanel:y,setAgentThoughtVisibility:x,getAgentThought:z,setAgentThought:J,setAgentDraft:M}=_,W=P((c={})=>{let h=Number(c.atMs),$0=Number.isFinite(h)&&h>0?h:Date.now();if(Z.current=$0,c.running)Y.current=!0,q((b)=>b?b:!0);if(c.clearSilence)X.current=0},[Y,Z,X,q]),T=P(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);g(()=>()=>{T()},[T]);let I=P(()=>{T(),L((c)=>uJ(c))},[T,L]),f=P((c)=>{if(!c)return;T();let h=Date.now();G.current=h,L(bJ(c)),j.current=setTimeout(()=>{if(G.current!==h)return;L(($0)=>{if(!$0||!($0.last_activity||$0.lastActivity))return $0;return null})},$)},[T,j,G,$,L]),S=P(()=>{Y.current=!1,q(!1),Z.current=null,X.current=0,K.current="",Q.current="",V.current=null,F.current=null,B.current=null,U.current=null,D.current=null,E.current={inFlight:!1,lastAttemptAt:0,turnId:null},T(),A(null),O(null),H.current=!1,k.current=!1},[D,T,B,K,k,Y,Z,F,X,V,A,q,O,E,U,Q,H]),v=P(async(c,h)=>{await SK({panelKey:c,expanded:h,currentTurnIdRef:y,thoughtExpandedRef:H,draftExpandedRef:k,setAgentThoughtVisibility:x,getAgentThought:z,thoughtBufferRef:Q,draftBufferRef:K,setAgentThought:J,setAgentDraft:M})},[y,K,k,z,M,J,x,Q,H]);return{noteAgentActivity:W,clearLastActivityTimer:T,clearLastActivityFlag:I,showLastActivity:f,clearAgentRunState:S,handlePanelToggle:v}}x0();function B8(_){return _?{..._}:{text:"",totalLines:0}}function uK(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function vJ(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function mJ(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function bK(_){return{agentStatus:_.agentStatus,agentDraft:B8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:B8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:uK(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:vJ(_.silentRecovery)}}function vK(_){let $=_.snapshot||mJ(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(B8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(B8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(uK($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function r9(_){return String(_||"").trim()||"web:default"}function mK({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function cJ(_){return mK(_)}function lJ(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function cK(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:q,agentPlan:L,agentThought:K,pendingRequest:Q,pendingRequestRef:V,followupQueueItems:F,activeModel:B,activeThinkingLevel:U,supportsThinking:D,activeModelUsage:E,contextUsage:H,isAgentRunningRef:k,wasAgentActiveRef:A,draftBufferRef:O,thoughtBufferRef:y,lastAgentEventRef:x,lastSilenceNoticeRef:z,lastAgentResponseRef:J,currentTurnIdRef:M,thoughtExpandedRef:W,draftExpandedRef:T,agentStatusRef:I,silentRecoveryRef:f,clearLastActivityTimer:S,setIsAgentTurnActive:v,setAgentStatus:c,setAgentDraft:h,setAgentPlan:$0,setAgentThought:b,setPendingRequest:e,setCurrentTurnId:s,setFollowupQueueItems:q0,setActiveModel:Z0,setActiveThinkingLevel:D0,setSupportsThinking:Q0,setActiveModelUsage:L0,setContextUsage:N0,lastNotifiedIdRef:H0,agentsRef:y0,notify:i,shouldNotifyLocallyForChat:j0}=_,O0=P((h0)=>{if(!cJ({remainingQueueCount:h0,steerQueuedTurnId:Z.current,currentTurnId:M.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,M,X,Z]),f0=P(()=>bK({agentStatus:Y,agentDraft:q,agentPlan:L,agentThought:K,pendingRequest:Q,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:F,activeModel:B,activeThinkingLevel:U,supportsThinking:D,activeModelUsage:E,contextUsage:H,isAgentRunning:k.current,wasAgentActive:A.current,draftBuffer:O.current,thoughtBuffer:y.current,lastAgentEvent:x.current,lastSilenceNotice:z.current,lastAgentResponse:J.current,currentTurnIdRef:M.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:W.current,draftExpanded:T.current,agentStatusRef:I.current,silentRecovery:f.current}),[B,E,U,q,L,Y,K,H,G,F,$,Q,j,D,k,A,O,y,x,z,J,M,Z,W,T,I,f]),m0=P((h0)=>{vK({snapshot:h0,clearLastActivityTimer:S,refs:{isAgentRunningRef:k,wasAgentActiveRef:A,lastAgentEventRef:x,lastSilenceNoticeRef:z,draftBufferRef:O,thoughtBufferRef:y,pendingRequestRef:V,lastAgentResponseRef:J,currentTurnIdRef:M,steerQueuedTurnIdRef:Z,agentStatusRef:I,silentRecoveryRef:f,thoughtExpandedRef:W,draftExpandedRef:T},setters:{setIsAgentTurnActive:v,setAgentStatus:c,setAgentDraft:h,setAgentPlan:$0,setAgentThought:b,setPendingRequest:e,setCurrentTurnId:s,setSteerQueuedTurnId:X,setFollowupQueueItems:q0,setActiveModel:Z0,setActiveThinkingLevel:D0,setSupportsThinking:Q0,setActiveModelUsage:L0,setContextUsage:N0}})},[I,S,M,O,T,k,x,J,z,V,Z0,L0,D0,h,$0,c,b,N0,s,q0,v,e,X,Q0,f,Z,y,W,A]),l0=P((h0)=>{if(!h0)return;if(M.current===h0)return;M.current=h0,f.current={inFlight:!1,lastAttemptAt:0,turnId:h0},s(h0),Z.current=null,X(null),O.current="",y.current="",h({text:"",totalLines:0}),$0(""),b({text:"",totalLines:0}),e(null),V.current=null,J.current=null,W.current=!1,T.current=!1},[M,O,T,J,V,h,$0,b,s,e,X,f,Z,y,W]),G_=P((h0)=>{let c0=J.current;if(!c0||!c0.post)return;if(h0&&c0.turnId&&c0.turnId!==h0)return;let M0=c0.post,p0=typeof M0?.chat_jid==="string"&&M0.chat_jid.trim()?M0.chat_jid.trim():"";if(!p0||!j0(p0))return;if(M0.id&&H0.current===M0.id)return;let b0=lJ(M0);if(!b0)return;H0.current=M0.id||H0.current,J.current=null;let d0=y0.current||{},E_=(M0?.data?.agent_id?d0[M0.data.agent_id]:null)?.name||"Pi";i(E_,b0,{sourceLabel:"Local"})},[y0,J,H0,i,j0]);return{clearQueuedSteerStateIfStale:O0,snapshotCurrentChatPaneState:f0,restoreChatPaneState:m0,setActiveTurn:l0,notifyForFinalResponse:G_}}x0();function N8(_){return _?.turn_id||_?.turnId||null}function Q5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function d9(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function i9(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function U8(_,$){return{text:_,totalLines:i9(_,$)}}function o9(_,$){return{text:$?.text||"",totalLines:WX(_),fullText:_}}function lK(_,$,j){return j==="replace"?$:`${_||""}${$}`}function hK(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function pK(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function n1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function nK(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function s9(_,$){return _&&$}function rK(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function dK(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function iK(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function oK(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:q,agentStatusRef:L,pendingRequestRef:K,thoughtBufferRef:Q,draftBufferRef:V,setAgentStatus:F,setAgentDraft:B,setAgentPlan:U,setAgentThought:D,setPendingRequest:E,setActiveTurn:H,noteAgentActivity:k,clearLastActivityFlag:A}=_,O=$;try{let y=await j(O);if(G.current!==O)return null;if(!y||y.status!=="active"||!y.data){if(Z.current&&n1(X.current))Y();return Z.current=!1,q(),L.current=null,F(null),B({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),E(null),K.current=null,y??null}Z.current=!0;let x=y.data;L.current=x;let z=N8(x);if(z)H(z);k({running:!0,clearSilence:!0,atMs:b$(x)??Date.now()}),A(),F(x);let J=Q5(y.thought);if(J)D((W)=>{if(d9(W,J.text))return W;return Q.current=J.text,J});let M=Q5(y.draft);if(M)B((W)=>{if(d9(W,M.text))return W;return V.current=M.text,M});return y}catch(y){return console.warn("Failed to fetch agent status:",y),null}}async function sK(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:q,refreshQueueState:L,refreshAgentStatus:K,now:Q=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=G.current||null,F=Z.current,B=Q();if(F.inFlight)return null;if(F.turnId===V&&B-F.lastAttemptAt<X)return null;F.inFlight=!0,F.lastAttemptAt=B,F.turnId=V;try{if(n1(Y.current))await q();return await L(),await K()}finally{F.inFlight=!1}}function hJ(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function aK(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:q,silenceRefreshMs:L,isCompactionStatus:K,setAgentStatus:Q,reconcileSilentTurn:V,now:F=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let B=G.current;if(!B)return;let U=F(),D=U-B,E=X.current,H=K(E),k=hJ(E);if(D>=q){if(!H&&!k)Q({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(D>=Y&&U-Z.current>=L){if(!H&&!k){let A=Math.floor(D/1000);Q({type:"waiting",title:`Waiting for model… No events for ${A}s`})}Z.current=U,V()}}function pJ(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function tK(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:q,thoughtBufferRef:L,pendingRequestRef:K,lastAgentResponseRef:Q,agentStatusRef:V,stalledPostIdRef:F,scrollToBottomRef:B,setCurrentTurnId:U,setAgentDraft:D,setAgentPlan:E,setAgentThought:H,setPendingRequest:k,setAgentStatus:A,setPosts:O,dedupePosts:y,now:x=()=>Date.now(),nowIso:z=()=>new Date().toISOString()}=_;if(!$.current)return;let J=pJ(V.current);$.current=!1,j.current=0,G.current=null,V.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let M=(q.current||"").trim();if(q.current="",L.current="",E(""),H({text:"",totalLines:0}),k(null),K.current=null,Q.current=null,!M){D({text:"",totalLines:0}),A({type:"error",title:"Response stalled - No content received"});return}D({text:M,totalLines:i9(M,null),fullText:M});let W=M,T=x(),I=z(),f={id:T,timestamp:I,data:{type:"agent_response",content:W,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:J?.summary||"",tool_title:J?.title||"",tool_name:J?.toolName||"",tool_status:J?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};F.current=T,O((S)=>S?y([...S,f]):[f]),B.current?.(),A(null)}function nJ(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function rJ(_){tK(_)}function eK(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;g(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function _V(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:L,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,agentStatusRef:B,scrollToBottomRef:U,setCurrentTurnId:D,setAgentDraft:E,setAgentPlan:H,setAgentThought:k,setPendingRequest:A,setAgentStatus:O,dedupePosts:y}=_,x=P(()=>{nJ({stalledPostIdRef:$,setPosts:j})},[j,$]),z=P(()=>{rJ({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:L,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,agentStatusRef:B,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:D,setAgentDraft:E,setAgentPlan:H,setAgentThought:k,setPendingRequest:A,setAgentStatus:O,setPosts:j,dedupePosts:y})},[Y,y,K,L,G,X,F,B,Z,V,U,E,H,O,k,D,A,j,$,Q,q]);return{removeStalledPost:x,finalizeStalledResponse:z}}function dJ(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function iJ(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function $V(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:q}=_,{applyBranding:L}=yK($),K=RK(j);dJ({removeFileRefRef:q,composeReferenceActions:K});let Q=gK(G),V=cK({...Z,clearLastActivityTimer:Q.clearLastActivityTimer}),F=_V(X);return eK(Y),iJ({applyBranding:L,composeReferenceActions:K,agentActivity:Q,chatPaneRuntime:V,recoveryCallbacks:F})}x0();x0();g_();var H8=new Map,a9=new Map;function jV(){return Date.now()}function U6(_){return String(_||"").trim()}function GV(_,$=600000){return Boolean(_&&jV()-_.cachedAt<=$)}function oJ(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function ZV(_,$){return H8.delete(_),H8.set(_,$),oJ(H8),$}function E8(_,$){let j=U6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:jV()};return ZV(j,G)}function t9(_,$={}){let j=U6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=H8.get(j)||null;if(!GV(Z,G))return null;return ZV(j,Z)}function XV(_,$,j=5){if(!Array.isArray(_))return[];let G=U6($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let q of _){let L=U6(q?.chat_jid);if(!L||L===G||X.has(L))continue;if(X.add(L),Y.push(L),Y.length>=Z)break}return Y}async function YV(_){let $=Array.from(new Set((_.chatJids||[]).map((q)=>U6(q)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((q)=>!GV(t9(q,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let q=Z[X++],L=a9.get(q);if(L){await L;continue}let K=(async()=>{try{let Q=await _.fetchTimeline(q);E8(q,Q)}catch(Q){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",Q,{chatJid:q})}finally{a9.delete(q)}})();a9.set(q,K),await K}});await Promise.all(Y)}function qV(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let q=Y?.id;if(typeof q==="number"&&Number.isFinite(q)&&q<Z)Z=q}if(!Number.isFinite(Z))return $5([...G,...j]);let X=j.filter((Y)=>{let q=Y?.id;return typeof q==="number"&&Number.isFinite(q)&&q<Z});return $5([...G,...X])}function LV({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[q,L]=C(!1),K=u(!1),Q=u(null),V=u(!1),F=u(null),B=u(null),U=u(0),D=u(0);g(()=>{K.current=q},[q]),g(()=>{B.current=X},[X]);let E=!G&&!Z,H=u(E);g(()=>{H.current=E},[E]),g(()=>{U.current+=1,Y(null),B.current=null,F.current=null,V.current=!1,K.current=!1,L(!1),D.current=0},[j]);let k=P((J,M)=>{if(!E)return;E8(j,{posts:Array.isArray(J)?J:[],has_more:Boolean(M)})},[j,E]),A=P((J,M)=>{B.current=Array.isArray(J)?J:[],K.current=Boolean(M),Y(B.current),L(K.current),k(B.current,K.current)},[k]),O=P(async(J=null)=>{let M=U.current;try{if(J){let f=await d3(J,50,0,j);if(M!==U.current)return;Y(f.posts),L(!1);return}let W=(f)=>{if(M!==U.current)return;let S=Array.isArray(f?.posts)?f.posts:[],v=Boolean(f?.has_more);A(S,v)},T=t9(j);if(T){A(T.posts,T.has_more);let f=D.current;g$(10,null,j).then((S)=>{if(M!==U.current||D.current!==f)return;if(!H.current)return;let v=Array.isArray(S?.posts)?S.posts:[],c=Boolean(S?.has_more);A(qV(B.current,v),c)}).catch((S)=>{if(M!==U.current)return;console.error("Failed to refresh cached timeline:",S)});return}let I=await g$(10,null,j);W(I)}catch(W){if(M!==U.current)return;throw console.error("Failed to load posts:",W),W}},[j,A]),y=P(async()=>{let J=U.current;try{let M=await g$(10,null,j);if(J!==U.current)return;A(qV(B.current,M?.posts),Boolean(M?.has_more))}catch(M){if(J!==U.current)return;console.error("Failed to refresh timeline:",M)}},[j,A]),x=P(async(J={})=>{let M=U.current,W=B.current;if(!W||W.length===0)return;if(V.current)return;let{preserveScroll:T=!0,preserveMode:I="top",allowRepeat:f=!1}=J,S=(h)=>{if(!T){h();return}if(I==="top")$(h);else _(h)},c=W.slice().sort((h,$0)=>h.id-$0.id)[0]?.id;if(!Number.isFinite(c))return;if(!f&&F.current===c)return;V.current=!0,F.current=c;try{let h=await g$(10,c,j);if(M!==U.current)return;if(D.current+=1,h.posts.length>0)S(()=>{let $0=$5([...h.posts,...B.current||[]]);A($0,h.has_more)});else A(B.current||[],!1)}catch(h){if(M!==U.current)return;console.error("Failed to load more posts:",h)}finally{if(M===U.current)V.current=!1}},[j,_,$,A]);g(()=>{Q.current=x},[x]);let z=P((J)=>{Y((M)=>{let W=typeof J==="function"?J(M):J;if(B.current=W,Array.isArray(W)){if(D.current+=1,E)E8(j,{posts:W,has_more:K.current})}return W})},[j,E]);return{posts:X,setPosts:z,hasMore:q,setHasMore:L,hasMoreRef:K,loadPosts:O,refreshTimeline:y,loadMore:x,loadMoreRef:Q,loadingMoreRef:V,lastBeforeIdRef:F}}x0();function sJ(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function KV(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!sJ(Z));return G.length===_.length?_:G}function VV(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function QV(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function d$(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function FV(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function BV(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function aJ(_,$=150){return Math.abs(_)<=$}function NV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=P(()=>{let L=$.current;if(!L)return;if(aJ(L.scrollTop))L.scrollTop=0},[$]),X=P((L)=>{let K=$.current;if(!K||typeof L!=="function"){L?.();return}let{currentHashtag:Q,searchQuery:V,searchOpen:F}=j.current||{},B=!((V||F)&&!Q),U=B?K.scrollHeight-K.scrollTop:K.scrollTop;L(),requestAnimationFrame(()=>{let D=$.current;if(!D)return;if(B){let E=Math.max(D.scrollHeight-U,0);D.scrollTop=E}else{let E=Math.max(D.scrollHeight-D.clientHeight,0),H=Math.min(U,E);D.scrollTop=H}})},[$,j]),Y=P((L)=>{let K=$.current;if(!K||typeof L!=="function"){L?.();return}let Q=K.scrollTop;L(),requestAnimationFrame(()=>{let V=$.current;if(!V)return;let F=Math.max(V.scrollHeight-V.clientHeight,0);V.scrollTop=Math.min(Q,F)})},[$]),q=P((L)=>{return KV(L,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:q}}function tJ(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function eJ(_){_.scrollToBottomRef.current=_.scrollToBottom}function UV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:q}=_,L=u(null),{scrollToBottom:K,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,filterQueuedPosts:F}=NV({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});eJ({scrollToBottomRef:L,scrollToBottom:K});let{posts:B,setPosts:U,hasMore:D,setHasMore:E,hasMoreRef:H,loadPosts:k,refreshTimeline:A,loadMore:O,loadMoreRef:y}=LV({preserveTimelineScroll:Q,preserveTimelineScrollTop:V,chatJid:Z,currentHashtag:X,searchQuery:Y}),x=X0(()=>tJ({rawPosts:B,followupQueueItems:q,filterQueuedPosts:F}),[F,q,B]);return{scrollToBottomRef:L,scrollToBottom:K,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,rawPosts:B,setPosts:U,hasMore:D,setHasMore:E,hasMoreRef:H,loadPosts:k,refreshTimeline:A,loadMore:O,loadMoreRef:y,posts:x}}x0();function _A(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function HV(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:q,loadPosts:L,searchPosts:K,setCurrentHashtag:Q,setSearchQuery:V,setSearchOpen:F,setSearchScope:B,setPosts:U,setHasMore:D,preserveTimelineScrollTop:E,setRemovingPostIds:H,deletePost:k,hasMoreRef:A,loadMoreRef:O}=_,y=P(async(f)=>{await IK({hashtag:f,setCurrentHashtag:Q,setPosts:U,loadPosts:L})},[L,Q,U]),x=P(async()=>{await CK({setCurrentHashtag:Q,setSearchQuery:V,setPosts:U,loadPosts:L})},[L,Q,U,V]),z=P(async(f,S=Z,v)=>{await n9({query:f,scope:S,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:B,setSearchQuery:V,setCurrentHashtag:Q,setPosts:U,setHasMore:D,filters:v})},[X,Y,K,Z,Q,D,U,V,B]),J=P((f)=>{if(B(f),j&&j.trim())n9({query:j,scope:f,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:B,setSearchQuery:V,setCurrentHashtag:Q,setPosts:U,setHasMore:D})},[X,Y,K,j,Q,D,U,V,B]),M=P(()=>{F(!0),V(null),Q(null),B("current"),U([])},[Q,U,F,V,B]),W=P(()=>{F(!1),V(null),L()},[L,F,V]),T=X0(()=>_A({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),I=P(async(f)=>{await PK({post:f,posts:q,currentChatJid:X,deletePost:k,preserveTimelineScrollTop:E,setPosts:U,setRemovingPostIds:H,hasMoreRef:A,loadMoreRef:O})},[X,k,A,O,q,E,U,H]);return{handleHashtagClick:y,handleBackToTimeline:x,handleSearch:z,handleSearchScopeChange:J,enterSearchMode:M,exitSearchMode:W,isMainTimelineView:T,handleDeletePost:I}}x0();function e9(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function EV(_,$){let j=new Map(_),G=e9($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function DV(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=e9($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function WV(_){if(_?.options?.remove)return!0;return e9(_)?.state!=="running"}function _j(_,$){return`${_}:${$}`}function OV(_,$,j){let G=_j($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function zV(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function D8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function JV(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var AV="piclaw:ctx:";function i$(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function F5(_,$){let j=i$(_),G=i$($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function B5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{Q_(AV+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function kV(_){if(!_)return null;return Z2(AV+_)}async function MV(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}=_,L=++j.current,K=$;try{let Q=await X(K);if(L!==j.current)return;if(G.current!==K)return;let V=Z.current,F=Array.isArray(Q?.items)?Q.items:[],B=VV(F,V);if(B.length){Y((U)=>QV(U,B)?U:B);return}if(F.length>0)return;V.clear(),q(0),Y((U)=>U.length===0?U:[])}catch{if(L!==j.current)return;if(G.current!==K)return;Y((Q)=>Q.length===0?Q:[])}}async function TV(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=i$(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((q)=>F5(q,Y)?q:Y),B5(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function wV(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let q=await G(Y);if(j.current!==Y)return;Z((L)=>EV(L,q)),X((L)=>D8(L,"autoresearch"))}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",q)}}function yV(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function xV(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(n1($.current))j();G()}r5();var W8=new Map,O8=new Map,$A=250,IV=1500,CV=300000;function N5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function jA(_,$){return`${_}:${$}`}function GA(_){for(let[$,j]of O8.entries())if(_-j>CV)O8.delete($)}function ZA(_){for(let[$,j]of W8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>CV)W8.delete($)}}function PV(_=N5()){GA(_),ZA(_)}function fV(_){let{chatJid:$,nowMs:j=N5()}=_;if(!$)return;O8.set($,j),PV(j)}function H6(_,$=IV,j=N5()){if(!_)return!1;let G=O8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function D$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=$A,activationWindowMs:X=IV,nowMs:Y=N5()}=_;PV(Y);let q=jA($,j),L=W8.get(q)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(W8.set(q,L),L.inFlight)return await L.inFlight;if(Boolean(F2("thread-switch",j)||H6(j,X,Y))&&Number.isFinite(L.lastCompletedAt)&&Y-L.lastCompletedAt<=Z)return L.lastValue;let Q=Promise.resolve().then(G).then((V)=>{return L.lastCompletedAt=N5(),L.lastValue=V??null,L.inFlight=null,V}).catch((V)=>{throw L.lastCompletedAt=N5(),L.inFlight=null,V});return L.inFlight=Q,await Q}function RV(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:q,showIntentToast:L}=_,K=typeof $==="string"&&$.trim()?$.trim():null;if(!K||!j||K===j)return!1;if(G.current===K)return!0;G.current=K;let Q=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!Q&&!Y.current&&!q.current&&!Z.current);return L("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function $j(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function SV(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:q,setPendingRequest:L,pendingRequestRef:K,clearAgentRunState:Q,hasConnectedOnceRef:V,viewStateRef:F,refreshTimeline:B,refreshAgentStatus:U,refreshQueueState:D,refreshContextUsage:E}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),L(null),K.current=null,Q();return}if(!V.current){if(V.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),L(null),K.current=null,Q(),H6($))return;if($j(F.current))B();U(),D(),E();return}if($j(F.current))B();U(),D(),E()}function gV(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_,L=$j($.current);if(j){if(L)G();Z(),X(),Y(),q();return}if(L)G();X(),Y(),q()}function XA(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function uV(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q,getAgentContext:L,setContextUsage:K,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,getAgentStatus:B,wasAgentActiveRef:U,viewStateRef:D,refreshTimeline:E,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:A,thoughtBufferRef:O,draftBufferRef:y,setAgentStatus:x,setAgentDraft:z,setAgentPlan:J,setAgentThought:M,setPendingRequest:W,setActiveTurn:T,noteAgentActivity:I,clearLastActivityFlag:f,isAgentRunningRef:S,currentTurnIdRef:v,silentRecoveryRef:c,silenceRefreshMs:h,lastAgentEventRef:$0,lastSilenceNoticeRef:b,silenceWarningMs:e,silenceFinalizeMs:s,isCompactionStatus:q0,serverVersionContext:Z0,setConnectionStatus:D0,setPendingRequestForConnection:Q0,hasConnectedOnceRef:L0}=_,N0=P(()=>{return D$({kind:"queue-state",chatJid:$,run:async()=>{return await MV({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}),null}})},[j,q,$,Z,X,G,Y]),H0=P(async()=>{await D$({kind:"context-usage",chatJid:$,run:async()=>{return await TV({currentChatJid:$,activeChatJidRef:j,getAgentContext:L,setContextUsage:K}),null}})},[j,$,L,K]),y0=P(async()=>{await D$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await wV({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F}),null}})},[j,$,Q,V,F]),i=P(async()=>{return await D$({kind:"agent-status",chatJid:$,run:async()=>{return await oK({currentChatJid:$,getAgentStatus:B,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:D,refreshTimeline:E,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:A,thoughtBufferRef:O,draftBufferRef:y,setAgentStatus:x,setAgentDraft:z,setAgentPlan:J,setAgentThought:M,setPendingRequest:W,setActiveTurn:T,noteAgentActivity:I,clearLastActivityFlag:f})}})},[j,k,H,f,$,y,B,I,A,E,T,z,J,x,M,W,O,D,U]),j0=P(async()=>{return await sK({isAgentRunningRef:S,pendingRequestRef:A,currentTurnIdRef:v,silentRecoveryRef:c,silenceRefreshMs:h,viewStateRef:D,refreshTimeline:E,refreshQueueState:N0,refreshAgentStatus:i})},[v,S,A,i,N0,E,h,c,D]);g(()=>{let m0=XA(e),l0=setInterval(()=>{aK({isAgentRunningRef:S,pendingRequestRef:A,lastAgentEventRef:$0,lastSilenceNoticeRef:b,agentStatusRef:k,silenceWarningMs:e,silenceFinalizeMs:s,silenceRefreshMs:h,isCompactionStatus:q0,setAgentStatus:x,reconcileSilentTurn:j0})},m0);return()=>clearInterval(l0)},[k,S,q0,$0,b,A,j0,x,s,h,e]);let O0=P((m0)=>{return RV({serverVersion:m0,...Z0})},[Z0]),f0=P((m0)=>{SV({currentChatJid:$,status:m0,setConnectionStatus:D0,setAgentStatus:x,setAgentDraft:z,setAgentPlan:J,setAgentThought:M,setPendingRequest:Q0,pendingRequestRef:A,clearAgentRunState:H,hasConnectedOnceRef:L0,viewStateRef:D,refreshTimeline:E,refreshAgentStatus:i,refreshQueueState:N0,refreshContextUsage:H0})},[H,$,L0,A,i,H0,N0,E,z,J,x,M,D0,Q0,D]);return{refreshQueueState:N0,refreshContextUsage:H0,refreshAutoresearchStatus:y0,refreshAgentStatus:i,handleUiVersionDrift:O0,handleConnectionStatusChange:f0}}x0();function E6(_){return typeof _==="string"}function D6(_){return typeof _==="string"&&_.trim().length>0}function z8(_){if(!D6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function jj(_){if(!Array.isArray(_))return[];return _.filter(($)=>D6($?.chat_jid)&&D6($?.agent_name))}function bV(_){if(!Array.isArray(_))return[];return _.filter(($)=>E6($?.chat_jid)&&E6($?.agent_name))}function vV(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(E6(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!E6(Y?.chat_jid))return Y;let q=G.get(Y.chat_jid);return q?{...Y,...q,is_active:q.is_active??Y.is_active}:Y}),X=E6(j)?j:"";return Z.sort((Y,q)=>{if(Y.chat_jid===X&&q.chat_jid!==X)return-1;if(q.chat_jid===X&&Y.chat_jid!==X)return 1;let L=Boolean(Y.archived_at),K=Boolean(q.archived_at);if(L!==K)return L?1:-1;if(Boolean(Y.is_active)!==Boolean(q.is_active))return Y.is_active?-1:1;let Q=z8(Y.updated_at)||z8(Y.created_at),V=z8(q.updated_at)||z8(q.created_at);if(Q!==V)return V-Q;let F=D6(Y.agent_name)?Y.agent_name.trim():"",B=D6(q.agent_name)?q.agent_name.trim():"",U=F.localeCompare(B,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(q.chat_jid))}),Z}var YA={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function mV(_){if(!_||typeof _!=="object")return YA;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function cV(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function lV(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},q=Y.name||null,L=Y.avatar_url??Y.avatarUrl??Y.avatar??null,K=!1,Q=!1;if(Z&&Z!==Y.name)q=Z,K=!0;if(X!==void 0){let V=typeof X==="string"?X.trim():null,F=typeof L==="string"?L.trim():null,B=V||null;if(B!==(F||null))L=B,Q=!0}if(!K&&!Q)return null;return{agentId:G,nameChanged:K,avatarChanged:Q,resolvedName:q,resolvedAvatar:L}}function hV(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function pV(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,q=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===q)return _;return{name:X,avatar_url:Y,avatar_background:q}}async function rV(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(EX(X));let Y=X?.user||{};G((L)=>hV(L,Y));let q=cV(X?.agents);Z(q.name,q.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function dV(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=lV($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let L={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)L.name=X.resolvedName;if(X.avatarChanged)L.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:L}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function iV(_){let{payload:$,setUserProfile:j}=_;j((G)=>pV(G,$))}function nV(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function oV(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:q}=_;if($&&typeof $==="object")Y?.((K)=>nV(K,$)?K:$),q?.(!0);let L=mV($);if(L.hasModel)j((K)=>Object.is(K,L.model)?K:L.model);if(L.hasThinkingLevel){let K=L.thinkingLevelLabel??L.thinkingLevel;G((Q)=>Object.is(Q,K)?Q:K)}if(L.hasSupportsThinking)Z((K)=>K===L.supportsThinking?K:L.supportsThinking);if(L.hasProviderUsage)X((K)=>nV(K,L.providerUsage)?K:L.providerUsage)}async function sV(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[q,L]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let K=jj(q?.chats),Q=jj(L?.chats),V=vV(K,Q,Y);return X(V),V}catch{if(Z.current!==Y)return[];return X([]),[]}}async function aV(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(bV(Z?.chats))}catch{G([])}}function tV(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),BV($))Y()}function eV(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,q=$("sidebarWidth",null),L=Number.isFinite(q)?Math.min(Math.max(Number(q),Z),X):Y;if(j.current=L,G)G.style.setProperty("--sidebar-width",`${L}px`);return L}async function _Q(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:q,setPosts:L,setHasMore:K,scrollToBottom:Q,isCancelled:V,scheduleRaf:F=(O)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(O);return}setTimeout(O,0)},scheduleTimeout:B=(O,y)=>{setTimeout(O,y)},onTimelineLoadStart:U,onTimelineDataReady:D,onTimelineFirstPaint:E,onTimelineError:H}=_,k=(O)=>{if(V())return;F(()=>{if(V())return;F(()=>{if(V())return;E?.(O)})})},A=()=>{if(V())return;F(()=>{if(V())return;B(()=>{if(V())return;Q()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),V())return;D?.({mode:"hashtag",hashtag:$}),k({mode:"hashtag"})}catch(O){if(V())return;throw H?.(O,{mode:"hashtag",hashtag:$}),O}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let O=await q(j,50,0,Z,G,X);if(V())return;L(Array.isArray(O?.results)?O.results:[]),K(!1),D?.({mode:"search",resultCount:Array.isArray(O?.results)?O.results.length:0}),k({mode:"search"})}catch(O){if(V())return;H?.(O,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",O),L([]),K(!1)}return}U?.({mode:"timeline"});try{if(await Y(),V())return;D?.({mode:"timeline"}),k({mode:"timeline"}),A()}catch(O){if(V())return;H?.(O,{mode:"timeline"}),console.error("Failed to load timeline:",O)}}r5();g_();function qA(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:q=60000,scheduleInterval:L=(V,F)=>setInterval(V,F),clearScheduledInterval:K=(V)=>clearInterval(V)}=_;if(Y)$();let Q=L(()=>{j(),G(),Z(),X()},q);return()=>{K(Q)}}function LA(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:q=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:q}),G(),Z(),X(),Y()}function KA(_){let $=XV(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;YV({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>g$(10,null,j))})}function $Q(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:q,currentChatJid:L,currentRootChatJid:K,getAgentModels:Q,getAgentContext:V,getActiveChatAgents:F,getChatBranches:B,activeChatJidRef:U,setActiveChatAgents:D,setCurrentChatBranches:E,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:A,setActiveModelUsage:O,setAgentModelsPayload:y,setHasLoadedAgentModels:x,agentsRef:z,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:W,setContextUsage:T,setExtensionWorkingState:I}=_,f=P(async()=>{await rV({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);g(()=>{f(),eV({readStoredNumber:X,sidebarWidthRef:Y,shellElement:q.current,maxWidth:$6(Number.POSITIVE_INFINITY)})},[q,f,X,Y]);let S=P((Z0)=>{oV({payload:Z0,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:A,setActiveModelUsage:O,setAgentModelsPayload:y,setHasLoadedAgentModels:x})},[H,O,k,y,x,A]),v=P(()=>F2("thread-switch",L),[L]),c=P(()=>{return D$({kind:"model-state",chatJid:L,run:async()=>{let Z0=v();if(Z0)_1(Z0,"runtime-hydration-start",{phase:"model-state"});let D0=L;try{let[L0,N0]=await Promise.all([(async()=>{let y0=Z0||v();if(y0)_1(y0,"model-request-start",{chatJid:D0});let i=await Q(D0);if(y0)_1(y0,"model-request-ready",{chatJid:D0,hasCurrent:Boolean(i?.current),modelCount:Array.isArray(i?.models)?i.models.length:0});return i})(),V(D0).catch(()=>null)]);if(U.current&&U.current!==D0)return null;S(L0);let H0=i$(N0);if(H0&&H0.percent!=null)T((y0)=>F5(y0,H0)?y0:H0),B5(D0,H0)}catch{if(U.current&&U.current!==D0)return null;S(null)}let Q0=Z0||v();if(Q0)_1(Q0,"runtime-hydration-ready",{chatJid:L}),B2(Q0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:L});return null}})},[U,S,L,V,Q,v,T]);g(()=>{fV({chatJid:L}),H(null),k(null),A(!1),O(null),x(!1),y(null),I({message:null,indicator:null,visible:!0});let Z0=kV(L);if(Z0)T(Z0);else T(null);c()},[L,c,H,O,k,y,T,I,x,A]);let h=P((Z0)=>{dV({payload:Z0,agentsRef:z,setAgents:j,applyBranding:Z})},[z,Z,j]),$0=P((Z0)=>{iV({payload:Z0,setUserProfile:G})},[G]),b=P((Z0)=>{let D0=Boolean(Z0?.prewarmRecent),Q0=Number.isFinite(Z0?.prewarmLimit)?Number(Z0?.prewarmLimit):5;return D$({kind:"active-chat-agents",chatJid:L,run:async()=>{let L0=v(),N0=await sV({currentChatJid:L,getActiveChatAgents:async()=>{if(L0)_1(L0,"active-chat-list-request-start",{chatJid:L});let H0=await F(L);if(L0)_1(L0,"active-chat-list-request-ready",{rowCount:Array.isArray(H0?.chats)?H0.chats.length:0});return H0},getChatBranches:async(H0,y0)=>{if(L0)_1(L0,"branch-list-request-start",{rootChatJid:H0});let i=await B(H0,y0);if(L0)_1(L0,"branch-list-request-ready",{rootChatJid:H0,rowCount:Array.isArray(i?.chats)?i.chats.length:0});return i},activeChatJidRef:U,setActiveChatAgents:D});if(D0)KA({chats:N0,currentChatJid:L,prewarmLimit:Q0});return null}})},[U,L,F,B,v,D]),e=P(()=>{return D$({kind:"current-chat-branches",chatJid:L,run:async()=>{let Z0=v();return await aV({currentRootChatJid:K,getChatBranches:async(D0,Q0)=>{if(Z0)_1(Z0,"root-branch-request-start",{rootChatJid:D0});let L0=await B(D0,Q0);if(Z0)_1(Z0,"root-branch-request-ready",{rootChatJid:D0,rowCount:Array.isArray(L0?.chats)?L0.chats.length:0});return L0},setCurrentChatBranches:E}),null}})},[L,K,B,v,E]),s=P(()=>{yV({refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:W})},[b,W,M,e,c,J]),q0=P(()=>{LA({refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:W,prewarmLimit:5})},[b,W,M,e,c,J]);return g(()=>qA({refreshModelAndQueueState:s,refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshQueueState:J,runImmediately:!1}),[b,e,s,c,J]),g(()=>{let Z0=setInterval(()=>{c()},5000);return()=>clearInterval(Z0)},[c]),{updateAgentProfile:h,updateUserProfile:$0,applyModelState:S,refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshModelAndQueueState:s,refreshPostPaintThreadState:q0}}x0();function VA(_,$){let j=W1(_);return Boolean(_&&j===$)}function U5(_,$,j){if(!VA(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function jQ(_,$){return{..._,openedAt:$}}function GQ(_){let $=W1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function ZQ(_,$,j){let G=Qq({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=W1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=W1(_),Y=Boolean(Z&&X&&Z===X),q={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:q,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function XQ(_,$){if(!_||_?.source!=="live")return _||null;let j=W1($),G=W1(_);if(j&&G&&j!==G)return _;return null}function YQ(_,$,j){return U5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function Gj(_,$,j){if(j.errorMessage)return U5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return U5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function qQ(_,$,j){return U5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function LQ(_,$,j){return U5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function KQ(_,$,j){return U5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}r5();function QA(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function VQ(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function QQ(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:q,setPosts:L,setHasMore:K,scrollToBottom:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,setExtensionWorkingState:B,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:D,snapshotCurrentChatPaneState:E,restoreChatPaneState:H,dismissedQueueRowIdsRef:k,refreshAgentStatus:A,viewStateRef:O,refreshTimeline:y,refreshModelAndQueueState:x,refreshPostPaintThreadState:z,setFloatingWidget:J,dismissedLiveWidgetKeysRef:M}=_;g(()=>{QA({setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,setExtensionWorkingState:B})},[$,V,F,B]),g(()=>{let I=!1,f=PZ("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return _1(f,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),_Q({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:q,setPosts:L,setHasMore:K,scrollToBottom:Q,isCancelled:()=>I,onTimelineLoadStart:(S)=>{_1(f,"timeline-load-start",S||null)},onTimelineDataReady:(S)=>{_1(f,"timeline-data-ready",S||null)},onTimelineFirstPaint:(S)=>{_1(f,"timeline-first-paint",S||null),B2(f,["runtime-hydration-ready","timeline-first-paint"],"settled",S||null),VQ({refreshAgentStatus:A,refreshPostPaintThreadState:z})},onTimelineError:(S,v)=>{fZ(f,S,"timeline-load-failed",v||null),VQ({refreshAgentStatus:A,refreshPostPaintThreadState:z})}}),()=>{I=!0,RZ(f,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,Q,q,K,L,A,z]),g(()=>{let I=U.current||$;D.current.set(I,E())},[D,$,U,E]),g(()=>{let I=U.current||$;if(I===$)return;D.current.set(I,E()),U.current=$,k.current.clear(),H(D.current.get($)||null)},[D,$,k,U,H,E]);let W=P(()=>{xV({viewStateRef:O,refreshTimeline:y,refreshModelAndQueueState:x})},[x,y,O]),T=P((I,f="streaming")=>{let S=new Date().toISOString();J((v)=>ZQ(v,I,{fallbackStatus:f,currentChatJid:$,dismissedSessionKeys:M.current,updatedAt:S}))},[$,M,J]);return{refreshCurrentView:W,applyLiveGeneratedWidgetUpdate:T}}x0();x0();g_();function FA({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!G6(),q=Z.visibilityState&&Z.visibilityState!=="visible",L=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return q=!0,!0;return!1},K=()=>{if(L())return;if(q)q=!1,X(),$?.()},Q=()=>{if(L())return;if(q){K();return}if(Y)_.reconnectIfNeeded()},V=()=>{K()},F=()=>{K()};return G.addEventListener("focus",Q),G.addEventListener("pageshow",V),Z.addEventListener("visibilitychange",F),()=>{G.removeEventListener("focus",Q),G.removeEventListener("pageshow",V),Z.removeEventListener("visibilitychange",F)}}function FQ({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=u(_);X.current=_;let Y=u($);Y.current=$;let q=u(j);q.current=j;let L=u(G);L.current=G,g(()=>{let K=new W2((V,F)=>X.current(V,F),(V)=>Y.current(V),{chatJid:Z});K.connect();let Q=FA({sse:K,onWake:()=>L.current?.()});return()=>{Q(),K.disconnect()}},[Z])}m5();w2();function M4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function H5(_,$){return Boolean(_)&&!Boolean($)}function BQ(_,$){return _||$||null}function NQ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function E5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=d$(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function Zj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function BA(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function UQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:BA($,j),panelKey:typeof $?.key==="string"?$.key:""}}function NA(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function HQ(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=NA($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function EQ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var UA=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function DQ(_){return UA.has(String(_||"").trim())}function HA(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function J8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(HA(_),{detail:G})),!0}function WQ(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function OQ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function zQ(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:q,pendingRequestRef:L,draftBufferRef:K,thoughtBufferRef:Q,previewResyncPendingRef:V,previewResyncGenerationRef:F,steerQueuedTurnIdRef:B,thoughtExpandedRef:U,draftExpandedRef:D,draftThrottleRef:E,thoughtThrottleRef:H,viewStateRef:k,followupQueueItemsRef:A,dismissedQueueRowIdsRef:O,scrollToBottomRef:y,hasMoreRef:x,loadMoreRef:z,lastAgentResponseRef:J,wasAgentActiveRef:M,setActiveTurn:W,applyLiveGeneratedWidgetUpdate:T,setFloatingWidget:I,clearLastActivityFlag:f,handleUiVersionDrift:S,setAgentStatus:v,setAgentDraft:c,setAgentPlan:h,setAgentThought:$0,setPendingRequest:b,clearAgentRunState:e,getAgentStatus:s,noteAgentActivity:q0,showLastActivity:Z0,refreshTimeline:D0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:L0,refreshCurrentChatBranches:N0,notifyForFinalResponse:H0,setContextUsage:y0,refreshContextUsage:i,refreshQueueState:j0,setFollowupQueueItems:O0,clearQueuedSteerStateIfStale:f0,setSteerQueuedTurnId:m0,applyModelState:l0,getAgentContext:G_,setExtensionStatusPanels:h0,setPendingExtensionPanelActions:c0,setExtensionWorkingState:M0,refreshActiveEditorFromWorkspace:p0,showIntentToast:b0,removeStalledPost:d0,setPosts:H_,preserveTimelineScrollTop:E_,openEditor:K_}=j,{turnId:S0,isCurrentChatEvent:A0}=WQ(_,$,G);if(A0)Z($),X($);if(_==="ui_theme"){t4($);return}if(_==="ui_meters"){wX($);return}if(_==="ui_open_tab"){let F0=typeof $?.path==="string"?$.path.trim():"",T0=typeof $?.label==="string"?$.label.trim():void 0;if(F0==="piclaw://settings"){let C0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:C0?{section:C0}:void 0}));return}if(F0&&typeof K_==="function")K_(F0,T0?{label:T0}:void 0);return}let n0=NQ(_);if(n0.kind==="update"){if(!A0)return;if(n0.shouldAdoptTurn&&H5(S0,Y.current))W(S0);T($,n0.fallbackStatus||"streaming");return}if(n0.kind==="close"){if(!A0)return;I((F0)=>XQ(F0,$));return}if(_?.startsWith("agent_")&&!OQ(_))f();if(_==="connected"){if(S($?.app_asset_version))return;if($?.ui_theme){let C0=$.ui_theme.theme||"default",U_=$.ui_theme.tint||null;t4({theme:C0,tint:U_})}let F0=F.current+1;if(F.current=F0,V.current=!0,K.current="",Q.current="",v(null),c({text:"",totalLines:0}),h(""),$0({text:"",totalLines:0}),M0({message:null,indicator:null,visible:!0}),b(null),L.current=null,e(),H6(G)){if(F.current===F0)V.current=!1;return}let T0=G;if(s(T0).then((C0)=>{if(q.current!==T0)return;if(!C0||C0.status!=="active"||!C0.data)return;let U_=C0.data,A_=N8(U_);if(A_)W(A_);v(U_),q0({clearSilence:!0,atMs:b$(U_)??Date.now()}),Z0(U_);let V_=Q5(C0.thought);if(V_)Q.current=V_.text,$0(V_);let X_=Q5(C0.draft);if(X_)K.current=X_.text,c(X_)}).catch((C0)=>{console.warn("Failed to fetch agent status:",C0)}).finally(()=>{if(F.current===F0)V.current=!1}),n1(k.current))D0();Q0();return}if(_==="agent_status"){if(!A0){if($?.type==="done"||$?.type==="error")L0(),N0();return}if($.type==="done"||$.type==="error"){if(M4(S0,Y.current))return;if($.type==="done"){if(H0(S0||Y.current),n1(k.current))D0();let F0=i$($.context_usage);if(F0&&F0.percent!=null)y0((T0)=>F5(T0,F0)?T0:F0),B5(G,F0)}if(i(),M.current=!1,e(),O.current.clear(),L0(),Q0(),c({text:"",totalLines:0}),h(""),$0({text:"",totalLines:0}),M0({message:null,indicator:null,visible:!0}),b(null),$.type==="error")v({type:"error",title:$.title||"Agent error"}),setTimeout(()=>v(null),8000);else v(null)}else{if(S0)W(S0);if(q0({running:!0,clearSilence:!0,atMs:b$($)??Date.now()}),$.type==="thinking")K.current="",Q.current="",c({text:"",totalLines:0}),h(""),$0({text:"",totalLines:0});v($)}return}if(_==="agent_steer_queued"){if(!A0)return;if(M4(S0,Y.current))return;let F0=BQ(S0,Y.current);if(!F0)return;B.current=F0,m0(F0);return}if(_==="agent_followup_queued"){if(!A0)return;O0((F0)=>FV(F0,$)),j0();return}if(_==="agent_followup_consumed"){if(!A0)return;let F0=E5(A.current,$);if(F0)f0(F0.remainingQueueCount),O0((T0)=>d$(T0,F0.rowId).items);if(j0(),n1(k.current))D0();return}if(_==="agent_followup_removed"){if(!A0)return;let F0=E5(A.current,$);if(F0)O.current.add(F0.rowId),f0(F0.remainingQueueCount),O0((T0)=>d$(T0,F0.rowId).items);j0();return}if(_==="agent_draft_delta"){if(!A0)return;if(V.current)return;if(M4(S0,Y.current))return;if(H5(S0,Y.current))W(S0);q0({running:!0,clearSilence:!0}),K.current=hK(K.current,$);let F0=Date.now();if(!E.current||F0-E.current>=100){E.current=F0;let T0=K.current;if(D.current)c((C0)=>o9(T0,C0));else c(U8(T0,null))}return}if(_==="agent_draft"){if(!A0)return;if(V.current)return;if(M4(S0,Y.current))return;if(H5(S0,Y.current))W(S0);q0({running:!0,clearSilence:!0});let F0=$.text||"",T0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")h((C0)=>lK(C0,F0,T0));else if(!D.current)K.current=F0,c(U8(F0,$.total_lines));return}if(_==="agent_thought_delta"){if(!A0)return;if(V.current)return;if(M4(S0,Y.current))return;if(H5(S0,Y.current))W(S0);q0({running:!0,clearSilence:!0}),Q.current=pK(Q.current,$);let F0=Date.now();if(U.current&&(!H.current||F0-H.current>=100)){H.current=F0;let T0=Q.current;$0((C0)=>o9(T0,C0))}return}if(_==="agent_thought"){if(!A0)return;if(V.current)return;if(M4(S0,Y.current))return;if(H5(S0,Y.current))W(S0);q0({running:!0,clearSilence:!0});let F0=$.text||"";if(!U.current)Q.current=F0,$0(U8(F0,$.total_lines));return}if(_==="model_changed"){if(!A0)return;l0($);let F0=G;G_(F0).then((T0)=>{if(q.current!==F0)return;let C0=i$(T0);if(C0&&C0.percent!=null)y0((U_)=>F5(U_,C0)?U_:C0),B5(F0,C0)}).catch(()=>{if(q.current!==F0)return});return}let q_=UQ(_,$,G);if(q_.isStatusPanelWidgetEvent){if(q_.eventChatJid!==G)return;if(!q_.panelKey)return;if(h0((F0)=>DV(F0,$)),WV($))c0((F0)=>D8(F0,q_.panelKey));J8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));p0($?.updates);return}if(DQ(_)){if(_==="extension_ui_title"){L0(),N0(),J8(_,$);return}if(!A0)return;M0((T0)=>{return HQ(T0,_,$)??T0}),J8(_,$);let F0=EQ(_,$);if(F0)b0(F0.title,F0.detail,F0.kind,F0.durationMs);return}let O_=n1(k.current);if(_==="agent_response"){if(!A0)return;M0({message:null,indicator:null,visible:!0}),d0(),J.current={post:$,turnId:Y.current}}if(nK(_,A0,O_))H_((F0)=>rK(F0,$)),y.current?.();if(_==="interaction_updated"){if(!s9(A0,O_))return;H_((F0)=>dK(F0,$))}if(_==="interaction_deleted"){if(!s9(A0,O_))return;let F0=$?.ids||[];if(F0.length){if(E_(()=>{H_((T0)=>iK(T0,F0))}),x.current)z.current?.({preserveScroll:!0,preserveMode:"top"})}}}function EA(_){return _?15000:60000}function JQ(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:q,updateUserProfile:L,currentTurnIdRef:K,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:F,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:D,steerQueuedTurnIdRef:E,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:A,thoughtThrottleRef:O,viewStateRef:y,followupQueueItemsRef:x,dismissedQueueRowIdsRef:z,scrollToBottomRef:J,hasMoreRef:M,loadMoreRef:W,lastAgentResponseRef:T,wasAgentActiveRef:I,setActiveTurn:f,applyLiveGeneratedWidgetUpdate:S,setFloatingWidget:v,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:$0,setAgentDraft:b,setAgentPlan:e,setAgentThought:s,setPendingRequest:q0,clearAgentRunState:Z0,getAgentStatus:D0,noteAgentActivity:Q0,showLastActivity:L0,refreshTimeline:N0,refreshModelAndQueueState:H0,refreshActiveChatAgents:y0,refreshCurrentChatBranches:i,notifyForFinalResponse:j0,setContextUsage:O0,refreshContextUsage:f0,refreshQueueState:m0,setFollowupQueueItems:l0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:h0,applyModelState:c0,getAgentContext:M0,setExtensionStatusPanels:p0,setPendingExtensionPanelActions:b0,setExtensionWorkingState:d0,refreshActiveEditorFromWorkspace:H_,showIntentToast:E_,removeStalledPost:K_,setPosts:S0,preserveTimelineScrollTop:A0,openEditor:n0,finalizeStalledResponse:q_,connectionStatus:O_,agentStatus:F0,refreshAgentStatus:T0,refreshAutoresearchStatus:C0}=_,U_=P((V_,X_)=>{zQ(V_,X_,{currentChatJid:$,updateAgentProfile:q,updateUserProfile:L,currentTurnIdRef:K,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:F,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:D,steerQueuedTurnIdRef:E,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:A,thoughtThrottleRef:O,viewStateRef:y,followupQueueItemsRef:x,dismissedQueueRowIdsRef:z,scrollToBottomRef:J,hasMoreRef:M,loadMoreRef:W,lastAgentResponseRef:T,wasAgentActiveRef:I,setActiveTurn:f,applyLiveGeneratedWidgetUpdate:S,setFloatingWidget:v,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:$0,setAgentDraft:b,setAgentPlan:e,setAgentThought:s,setPendingRequest:q0,clearAgentRunState:Z0,getAgentStatus:D0,noteAgentActivity:Q0,showLastActivity:L0,refreshTimeline:N0,refreshModelAndQueueState:H0,refreshActiveChatAgents:y0,refreshCurrentChatBranches:i,notifyForFinalResponse:j0,setContextUsage:O0,refreshContextUsage:f0,refreshQueueState:m0,setFollowupQueueItems:l0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:h0,applyModelState:c0,getAgentContext:M0,setExtensionStatusPanels:p0,setPendingExtensionPanelActions:b0,setExtensionWorkingState:d0,refreshActiveEditorFromWorkspace:H_,showIntentToast:E_,removeStalledPost:K_,setPosts:S0,preserveTimelineScrollTop:A0,openEditor:n0})},[Q,S,c0,Z0,c,G_,$,K,z,F,k,A,x,M0,D0,h,M,T,W,Q0,j0,V,A0,D,U,y0,H_,f0,i,H0,m0,N0,K_,J,f,b,e,$0,s,O0,p0,d0,v,l0,b0,q0,S0,h0,E_,L0,E,B,H,O,q,L,y,I,n0]);g(()=>{if(typeof window>"u")return;let V_=window.__PICLAW_TEST_API||{};return V_.emit=U_,V_.reset=()=>{K_(),Z0(),$0(null),b({text:"",totalLines:0}),e(""),s({text:"",totalLines:0}),d0({message:null,indicator:null,visible:!0}),q0(null)},V_.finalize=()=>q_(),window.__PICLAW_TEST_API=V_,()=>{if(window.__PICLAW_TEST_API===V_)window.__PICLAW_TEST_API=void 0}},[Z0,q_,U_,K_,b,e,$0,s,d0,q0]),FQ({handleSseEvent:U_,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),g(()=>{if(!j||j.length===0)return;let V_=location.hash;if(!V_||!V_.startsWith("#msg-"))return;let X_=V_.slice(5);G(X_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let A_=F0!==null;g(()=>{if(O_!=="connected")return;let V_=EA(A_),X_=setInterval(()=>{gV({viewStateRef:y,isAgentActive:A_,refreshTimeline:N0,refreshQueueState:m0,refreshAgentStatus:T0,refreshContextUsage:f0,refreshAutoresearchStatus:C0})},V_);return()=>clearInterval(X_)},[O_,A_,T0,C0,f0,m0,N0,y]),g(()=>{return F8(()=>{T0(),f0(),m0(),C0()})},[T0,C0,f0,m0])}function DA(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function WA(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function OA(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function zA(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function AQ(_){let $=uV(DA(_)),j=$Q(WA({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=QQ(OA({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return JQ(zA({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}x0();var kQ="piclaw:pane-host-transfer:",JA=300000;function MQ(_){try{return _?.localStorage??null}catch{return null}}function TQ(_){return typeof _==="string"?_.trim():""}function wQ(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function AA(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function kA(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function MA(_,$=globalThis,j=Date.now()){let G=MQ($),Z=TQ(_?.path),X=wQ(_?.payload);if(!G||!Z||!X)return null;let Y=AA(j);try{return G.setItem(`${kQ}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function Xj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=MQ($);if(!G||!Z)return null;let X=`${kQ}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;kA(Z,X);try{let q=JSON.parse(Y),L=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(L+JA<j)return null;let K=TQ(q?.path),Q=wQ(q?.payload);if(!K||!Q)return null;return{path:K,payload:Q,capturedAt:L}}catch{return null}}function A8(_,$=globalThis,j=Date.now()){let G=MA(_,$,j);return G?{pane_transfer:G}:null}function yQ(_=globalThis,$=Date.now()){let j=c4("pane_transfer",_);return Xj(j,_,$)}function T4(_){return typeof _==="string"?_.trim():""}function TA(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function Yj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(TA($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function wA(_){try{return _?.(),!0}catch($){return!1}}function D5(_,$=typeof window<"u"?window:null){let j=Yj($),G=T4(_?.panePath),Z=T4(_?.paneInstanceId),X=T4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function xQ(_,$=typeof window<"u"?window:null){let j=Yj($),G=T4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function IQ(_,$,j,G){let Z=Yj(_),X=T4($?.panePath),Y=T4($?.paneInstanceId),q=T4($?.paneWindowId);if(!Z||!X||!Y||!q)return null;let L=Z.get(q)||null;if(!L)return null;if(L.panePath!==X||L.paneInstanceId!==Y)return null;if(typeof L.instance?.moveHost!=="function")return null;if(!await L.instance.moveHost(j,G))return null;return Z.delete(q),wA(L.releaseSourceHost),L.instance}x2();function W6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function CQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)G?.(V,F)},q=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)Z?.(V,F)},L=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)X?.(V,F)},K=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return K.forEach((Q)=>j.addEventListener(Q,Y)),j.addEventListener("html-viewer:edit-source",q),j.addEventListener("pane:popout",L),()=>{K.forEach((Q)=>j.removeEventListener(Q,Y)),j.removeEventListener("html-viewer:edit-source",q),j.removeEventListener("pane:popout",L)}}function PQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(W6(Z?.target))return;if(!E$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function fQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(q)=>{if(W6(q?.target))return;if(E$(q,"toggleZenMode")){q.preventDefault?.(),G?.();return}if(q?.key==="Escape"&&X())q.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function RQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(W6(Z?.target))return;if(E$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(E$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function SQ(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(W6(G?.target))return;if(!E$(G,"openSettings"))return;G.preventDefault(),p1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function gQ(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(W6(G?.target))return;if(!E$(G,"openHelp"))return;G.preventDefault(),p1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function uQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q,now:L=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let K=X?.()||null;if(!K)return!1;if(G||L<Number(Z||0)||K.inFlight||L<Number(K.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),q?.(!0),!0}function bQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function vQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:q,setIsRenamingBranch:L,renameChatBranch:K,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,navigate:F,baseHref:B,chatOnlyMode:U,showIntentToast:D,closeRenameForm:E,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let k=H(),A=q?.()||null;if(!A)return!1;if(X.current||k<Number(Y.current||0)||A.inFlight||k<Number(A.cooldownUntil||0))return!1;X.current=!0,A.inFlight=!0,L?.(!0);try{let O=j.agent_name||"",y=m2(G,O);if(!y.canSubmit)return D?.("Could not rename session",y.message||"Enter a valid session handle.","warning",4000),!1;let x=y.normalized||O,z=await K(j.chat_jid,{agentName:x});await Promise.allSettled([Q?.(),V?.()]);let J=z?.branch?.agent_name||x||O;return D?.("Session renamed",`@${J}`,"info",3500),E?.(),!0}catch(O){let y=O instanceof Error?O.message:String(O||"Could not rename session."),x=/already in use/i.test(y||"")?`${y} Switch to or restore that existing session from the session manager.`:y;return D?.("Could not rename session",x||"Could not rename session.","warning",5000),!1}finally{X.current=!1,L?.(!1);let O=H()+_K;Y.current=O;let y=q?.()||null;if(y)y.inFlight=!1,y.cooldownUntil=O}}async function mQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:q,refreshActiveChatAgents:L,refreshCurrentChatBranches:K,showIntentToast:Q,baseHref:V,chatOnlyMode:F,navigate:B,confirm:U=(J)=>window.confirm(J)}=_;if(!$)return!1;let D=typeof j==="string"&&j.trim()?j.trim():"",E=typeof G==="string"&&G.trim()?G.trim():"",H=D||Z?.chat_jid||E;if(!H)return Q?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let k=(Z?.chat_jid===H?Z:null)||X.find((J)=>J?.chat_jid===H)||Y.find((J)=>J?.chat_jid===H)||null,A=k?.chat_jid===(k?.root_chat_jid||k?.chat_jid),O=Boolean(A&&H==="web:default"),y=Boolean(A&&X.some((J)=>{let M=typeof J?.chat_jid==="string"?J.chat_jid.trim():"",W=typeof J?.root_chat_jid==="string"?J.root_chat_jid.trim():M;return M&&M!==H&&W===H&&!J?.archived_at}));if(O)return Q?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(y)return Q?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let x=`@${k?.agent_name||H}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!U(A?`Archive ${x}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${x}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await q(H),await Promise.allSettled([L?.(),K?.()]);let J=A?"web:default":k?.root_chat_jid||"web:default";Q?.(A?"Session archived":"Branch pruned",`${x} has been archived.`,"info",3000);let M=A1(V,J,{chatOnly:F});return B?.(M),!0}catch(J){let M=J instanceof Error?J.message:String(J||"Could not prune branch.");return Q?.("Could not prune branch",M||"Could not prune branch.","warning",5000),!1}}async function cQ(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:q=(D)=>window.confirm(D)}=_,L=typeof $==="string"?$.trim():"";if(!L||typeof j!=="function")return!1;let K=G.find((D)=>D?.chat_jid===L)||null;if(!Boolean(K?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let V=Boolean(K?.chat_jid&&K.chat_jid===(K.root_chat_jid||K.chat_jid)),F=`@${K?.agent_name||L}`;if(!q(`Permanently delete ${F}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${V?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(L),await Promise.allSettled([Z?.(),X?.()]),Y?.(V?"Archived session deleted":"Archived branch deleted",`${F} was permanently deleted.`,"info",4000),!0}catch(D){let E=D instanceof Error?D.message:String(D||`Could not permanently delete archived ${V?"session":"branch"}.`);return Y?.("Could not delete branch",E||`Could not permanently delete archived ${V?"session":"branch"}.`,"warning",5000),!1}}async function lQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:q,chatOnlyMode:L,navigate:K}=_,Q=typeof $==="string"?$.trim():"";if(!Q||typeof j!=="function")return!1;try{let V=G.find((H)=>H?.chat_jid===Q)||null,F=await j(Q);await Promise.allSettled([Z?.(),X?.()]);let B=F?.branch,U=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():Q,D=lY(V?.agent_name,B?.agent_name,U);Y?.("Branch restored",D,"info",4200);let E=A1(q,U,{chatOnly:L});return K?.(E),!0}catch(V){let F=V instanceof Error?V.message:String(V||"Could not restore branch.");return Y?.("Could not restore branch",F||"Could not restore branch.","warning",5000),!1}}async function hQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let q=await j($);if(Y())return!1;let L=q?.branch,K=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");let Q=A1(X,K,{chatOnly:!0});return Z?.(Q,{replace:!0}),!0}catch(q){if(Y())return!1;return G?.({status:"error",message:Y4(q)}),!1}}function nQ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let q=typeof j==="string"?j.trim():"";if(!q||q===G)return!1;let L=A1(X,q,{chatOnly:Z});return Y?.(L),!0}function yA(_){return typeof _==="string"?_.trim():""}function xA(_){return new Promise(($)=>setTimeout($,_))}async function pQ(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function rQ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:q,resolveTab:L,buildEditorPopoutTransfer:K}=_,Q=$===X&&Boolean(L?.($));if($===X&&!Q){let D=Z.current;if(await pQ(D,$),typeof D?.preparePopoutTransfer!=="function")return null;return await D.preparePopoutTransfer()}let V=()=>yA(q?.()??j),F=V(),B=G.current;if(F!==$)Y?.($);let U=F===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let D=0;D<12;D+=1){if(D>0)await xA(16);else await Promise.resolve();let E=V(),H=G.current,k=E===$,A=H!==B;if(!k||typeof H?.preparePopoutTransfer!=="function")continue;if(F===$||A||D>0){U=H;break}}if(await pQ(U,$),typeof U?.preparePopoutTransfer==="function"){let D=await U.preparePopoutTransfer();if(D)return D}return K?.($)??null}function dQ(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,q=Z($);if(q&&!q.dirty){X($);return}if($===j&&G)Y(!1)}function iQ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:q}=_;if(!j||!$||!G)return;if(!Z.current){let L=q("editorWidth",null),K=Y.current||280,Q=Number.isFinite(L)?Number(L):K;Z.current=j6(Q,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let L=q("dockHeight",null);X.current=Number.isFinite(L)?Number(L):200}G.style.setProperty("--dock-height",`${X.current}px`)}async function oQ(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function sQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:L}=_;if(typeof q==="function")try{let K=U3(L,$,{chatOnly:j});return q(K),!0}catch(K){return Y?.("Could not create branch",Y4(K),"warning",5000),!1}try{let Q=(await G($))?.branch,V=typeof Q?.chat_jid==="string"&&Q.chat_jid.trim()?Q.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let F=Q?.agent_name?`@${Q.agent_name}`:V;Y?.("New branch created",`Switched to ${F}.`,"info",2500);let B=A1(L,V,{chatOnly:j});return q?.(B),!0}catch(K){return Y?.("Could not create branch",Y4(K),"warning",5000),!1}}async function aQ(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:L}=_,K=String($||"").trim();if(!K)return!1;try{let V=(await G(K))?.branch,F=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!F)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let B=V?.agent_name?`@${V.agent_name}`:F;Y?.("Root session created",`Switched to ${B}.`,"info",2500);let U=A1(L,F,{chatOnly:j});return q?.(U),!0}catch(Q){return Y?.("Could not create root session",Y4(Q),"warning",5000),!1}}async function tQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:q,onPaneWindowOpened:L,currentChatJid:K,baseHref:Q}=_;if(!$||j)return!1;let V=typeof G==="string"&&G.trim()?G.trim():"";if(!V)return!1;let F=WG(V);if(!F)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=Q3(F);if(!B)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;F3(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(V),D=Boolean(U&&Object.keys(U).length>0),E=DG(Q,V,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:U});if(B3(B,E),L?.(V,B,U||null),D&&!L)q?.(V);return!0}catch(U){N3(B);let D=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",D,"warning",5000),!1}}async function eQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:q,setActiveChatAgents:L,setCurrentChatBranches:K,showIntentToast:Q,baseHref:V}=_;if(!$||j)return!1;let F=EG(G);if(!F)return Q?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(F.mode==="tab"){let U=U3(V,G,{chatOnly:!0});if(!window.open(U,F.target))return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let B=Q3(F);if(!B)return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;F3(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let D=(await X(G))?.branch,E=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let H=await oQ(()=>Y?.());if(H)L?.(Array.isArray(H?.chats)?H.chats:[]);let k=await oQ(()=>q?.(Z));if(k)K?.(Array.isArray(k?.chats)?k.chats:[]);let A=A1(V,E,{chatOnly:!0});return B3(B,A),!0}catch(U){return N3(B),Q?.("Could not open branch window",Y4(U),"error",5000),!1}}function IA(_){_(($)=>!$)}function CA(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return nQ({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function PA(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:q=typeof window<"u"}=_;return uQ({hasWindow:q,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function fA(_){bQ(_)}async function RA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await vQ({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function SA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await mQ({hasWindow:$,baseHref:j,...G})}async function gA(_){await cQ(_)}async function uA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await lQ({baseHref:j,...G})}function bA(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:q=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:L=hQ}=_;if(!$||!Y)return;let K=!1;return L({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:q,isCancelled:()=>K}),()=>{K=!0}}async function vA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await sQ({baseHref:j,...G})}async function mA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await aQ({baseHref:j,...G})}async function cA(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:q,editorInstanceRef:L,dockInstanceRef:K,terminalTabPath:Q,tabPaneOverrides:V,buildPaneDetachTransfer:F,registerDetachedPaneWindow:B,dockVisible:U,resolveTab:D,closeTab:E,setDockVisible:H,hasWindow:k=typeof window<"u",baseHref:A=k?window.location.href:"http://localhost/"}=_,O=F?.(j)||null;return await tQ({hasWindow:k,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:A,resolveSourceTransfer:async(y)=>{let x=await rQ({panePath:y,activateTab:Y,getActiveTabId:()=>a0.getActiveId(),tabStripActiveId:q,editorInstanceRef:L,dockInstanceRef:K,terminalTabPath:Q,resolveTab:D,buildEditorPopoutTransfer:(W)=>{if(!W||W===Q)return null;let T=L.current,I=typeof T?.getContent==="function"?T.getContent():void 0,f=typeof T?.isDirty==="function"?T.isDirty():!1,S=V instanceof Map?V.get(W)||null:null,v=a0.getViewState(W)||null;return d6({path:W,content:f?I:void 0,paneOverrideId:S,viewState:v})}}),z=y===Q&&!D(y)?K.current:L.current,J=typeof z?.exportHostTransferState==="function"?z.exportHostTransferState():null,M=J?A8({path:y,payload:J}):null;if(O?.paneInstanceId&&O?.paneWindowId&&z&&y!==Q&&J?.kind!=="terminal")D5({panePath:y,paneInstanceId:O.paneInstanceId,paneWindowId:O.paneWindowId,instance:z,releaseSourceHost:()=>{if(y===Q){if(K.current===z)K.current=null;if(L.current===z)L.current=null;return}if(L.current===z)L.current=null}});return{...x||{},...M||{},...O?.params||{}}},onPaneWindowOpened:B?(y,x,z)=>{B(y,G,x,z)}:void 0,closeSourcePaneIfTransferred:B?void 0:(y)=>{dQ({panePath:y,terminalTabPath:Q,dockVisible:U,resolveTab:D,closeTab:E,setDockVisible:H})}})}function lA(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=CQ}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function hA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await eQ({hasWindow:$,baseHref:j,...G})}function pA(_){let{hasWindow:$=typeof window<"u",...j}=_;iQ({hasWindow:$,...j})}function _F(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:L,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:Q,setIsRenamingBranch:V,renameChatBranch:F,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,currentChatBranches:E,activeChatAgents:H,pruneChatBranch:k,purgeChatBranch:A,restoreChatBranch:O,branchLoaderMode:y,branchLoaderSourceChatJid:x,forkChatBranch:z,createRootChatSession:J,setBranchLoaderState:M,currentRootChatJid:W,isWebAppMode:T,getActiveChatAgents:I,getChatBranches:f,setActiveChatAgents:S,setCurrentChatBranches:v,openEditor:c,activateTab:h,tabStripActiveId:$0,editorInstanceRef:b,dockInstanceRef:e,terminalTabPath:s,tabPaneOverrides:q0,buildPaneDetachTransfer:Z0,registerDetachedPaneWindow:D0,dockVisible:Q0,resolveTab:L0,closeTab:N0,setDockVisible:H0,editorOpen:y0,shellElement:i,editorWidthRef:j0,dockHeightRef:O0,sidebarWidthRef:f0,readStoredNumber:m0}=_,l0=P(()=>{IA($)},[$]),G_=P((A0)=>{CA({nextChatJid:A0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),h0=P(()=>{PA({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:q.current,getFormLock:L,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:Q})},[X,L,Y,q,Q,K]),c0=P(()=>{fA({setIsRenameBranchFormOpen:Q,setRenameBranchNameDraft:K})},[Q,K]),M0=P(async(A0)=>{await RA({currentBranchRecord:X,nextName:A0,openRenameForm:h0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:L,setIsRenamingBranch:V,renameChatBranch:F,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:D,closeRenameForm:c0})},[c0,X,G,L,Z,h0,B,U,Y,q,F,V,D]),p0=P(async(A0=null)=>{await SA({targetChatJid:A0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:E,activeChatAgents:H,pruneChatBranch:k,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,chatOnlyMode:G,navigate:Z})},[H,G,X,E,j,Z,k,B,U,D]),b0=P(async(A0)=>{await gA({targetChatJid:A0,purgeChatBranch:A,currentChatBranches:E,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D})},[E,A,B,U,D]),d0=P(async(A0)=>{await uA({targetChatJid:A0,restoreChatBranch:O,currentChatBranches:E,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,chatOnlyMode:G,navigate:Z})},[G,E,Z,B,U,O,D]);g(()=>bA({branchLoaderMode:y,branchLoaderSourceChatJid:x,forkChatBranch:z,setBranchLoaderState:M,navigate:Z}),[y,x,z,Z,M]);let H_=P(async()=>{await vA({currentChatJid:j,chatOnlyMode:G,forkChatBranch:z,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,navigate:Z})},[G,j,z,Z,B,U,D]),E_=P(async(A0)=>{await mA({rootName:A0,chatOnlyMode:G,createRootChatSession:J,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,navigate:Z})},[G,J,Z,B,U,D]),K_=P(async(A0,n0)=>{return await cA({isWebAppMode:T,path:A0,label:n0,showIntentToast:D,currentChatJid:j,activateTab:h,tabStripActiveId:$0,editorInstanceRef:b,dockInstanceRef:e,terminalTabPath:s,tabPaneOverrides:q0,buildPaneDetachTransfer:Z0,registerDetachedPaneWindow:D0,dockVisible:Q0,resolveTab:L0,closeTab:N0,setDockVisible:H0})},[h,Z0,N0,j,e,Q0,b,T,D0,L0,H0,D,q0,$0,s]);g(()=>lA({openEditor:c,popOutPane:(A0,n0)=>{K_(A0,n0)}}),[K_,c]);let S0=P(async()=>{await hA({isWebAppMode:T,currentChatJid:j,currentRootChatJid:W,forkChatBranch:z,getActiveChatAgents:I,getChatBranches:f,setActiveChatAgents:S,setCurrentChatBranches:v,showIntentToast:D})},[j,W,z,I,f,T,S,v,D]);return g(()=>{pA({editorOpen:y0,shellElement:i,editorWidthRef:j0,dockHeightRef:O0,sidebarWidthRef:f0,readStoredNumber:m0})},[O0,y0,j0,m0,i,f0]),{toggleWorkspace:l0,handleBranchPickerChange:G_,openRenameCurrentBranchForm:h0,closeRenameCurrentBranchForm:c0,handleRenameCurrentBranch:M0,handlePruneCurrentBranch:p0,handlePurgeArchivedBranch:b0,handleRestoreBranch:d0,handleCreateSessionFromCompose:H_,handleCreateRootSessionFromCompose:E_,handlePopOutPane:K_,handlePopOutChat:S0}}x0();function o$(_){return _.status==="fulfilled"?_.value:null}function k8(_){return Math.max(0,Math.min(100,_))}function $F(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((E)=>E?.data?.is_bot_message).length,Z=$.filter((E)=>!E?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,q=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,L=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,K=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,Q=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,F=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,B=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),D=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:q},agent:{status:U,phase:D,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:F,supportsThinking:Boolean(B)},context:{tokens:K,contextWindow:Q,percent:L},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:k8(Math.round(L))},{key:"queue",label:"Queue",value:k8(X*18)},{key:"activeChats",label:"Active chats",value:k8(Y*12)},{key:"posts",label:"Timeline load",value:k8($.length*5)}]}}function jF(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function GF(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function ZF(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function XF(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function YF(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function qF(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function LF(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:q,getActiveChatAgents:L,getChatBranches:K,getTimeline:Q,rawPosts:V,activeChatAgents:F,currentChatBranches:B,contextUsage:U,followupQueueItems:D,activeModel:E,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:A}=_,[O,y,x,z,J,M,W]=await Promise.allSettled([Z(j),X(j),Y(j),q(j),L(),K(G),Q(20,null,j)]);return $F({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:o$(O),contextPayload:o$(y),queuePayload:o$(x),modelsPayload:o$(z),activeChatsPayload:o$(J),branchesPayload:o$(M),timelinePayload:o$(W),rawPosts:V,activeChatAgents:F,currentChatBranches:B,contextUsage:U,followupQueueItems:D,activeModel:E,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:A})}function KF(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,steerAgentQueueItem:L}=_,K=E5(j.current,$);if(!K)return;let{rowId:Q}=K;G.current.add(Q),Y((V)=>d$(V,Q).items),L(Q,r9(Z)).then(()=>{X()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let F=Zj("steer");q(F.title,F.detail,"warning"),G.current.delete(Q),X()})}function VF(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,clearQueuedSteerStateIfStale:L,removeAgentQueueItem:K}=_,Q=E5(j.current,$);if(!Q)return;let{rowId:V}=Q;G.current.add(V),L?.(Q.remainingQueueCount),Y((F)=>d$(F,V).items),K(V,r9(Z)).then(()=>{X()}).catch((F)=>{console.warn("[queue] Failed to remove queued item:",F);let B=Zj("remove");q(B.title,B.detail,"warning"),G.current.delete(V),X()})}function QF(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=W1($);if(Z)j.current.delete(Z);G(jQ($,new Date().toISOString()))}function FF(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=GQ(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function BF(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:q,showIntentToast:L,sendAgentMessage:K,buildFloatingWidgetDashboardSnapshot:Q}=_,V=typeof $?.kind==="string"?$.kind:"",F=W1(j);if(!V||!F)return;if(V==="widget.close"){Y();return}if(V==="widget.submit"){let B=Uq($?.payload),U=Hq($?.payload),D=new Date().toISOString();if(X((E)=>YQ(E,F,{kind:V,payload:$?.payload||null,submittedAt:D,submissionText:B})),!B){if(L("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let E=await K("default",B,null,[],Z?"queue":null,G);q(E),X((k)=>Gj(k,F,{submittedAt:D,submissionText:B,queued:E?.queued||null}));let H=jF(E?.queued);if(L(H.title,H.detail,H.kind,H.durationMs),U)Y()}catch(E){X((k)=>Gj(k,F,{submittedAt:D,submissionText:B,errorMessage:E?.message||"Could not send the widget message."}));let H=GF(E?.message);L(H.title,H.detail,H.kind,H.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let B=new Date().toISOString(),U=ZF($?.payload||null,j?.runtimeState?.refreshCount);if(X((D)=>qQ(D,F,{kind:V,payload:$?.payload||null,eventAt:B,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),V==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let D=await Q($?.payload||null);X((H)=>LQ(H,F,{dashboard:D,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let E=XF();L(E.title,E.detail,E.kind,E.durationMs)}catch(D){X((H)=>KQ(H,F,{errorMessage:D?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let E=YF(D?.message);L(E.title,E.detail,E.kind,E.durationMs)}})();else{let D=qF();L(D.title,D.detail,D.kind,D.durationMs)}}}function nA(_,$=KF){$(_)}function rA(_,$=VF){$(_)}function dA(_,$,j=tV){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function NF(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:L,removeAgentQueueItem:K,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:F,refreshAutoresearchStatus:B}=_,U=P((k)=>{nA({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:L,removeAgentQueueItem:K})},[$,G,j,Z,K,X,Y,L]),D=P((k)=>{rA({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:L,removeAgentQueueItem:K})},[q,$,G,j,Z,K,X,Y,L]),E=P(async(k,A)=>{X((O)=>{if(!Array.isArray(O)||k<0||A<0||k>=O.length||A>=O.length||k===A)return O;let y=[...O],[x]=y.splice(k,1);return y.splice(A,0,x),y});try{let{reorderAgentQueueItem:O}=await Promise.resolve().then(() => (g_(),t5));await O(k,A,$)}catch(O){console.warn("Failed to persist queue reorder:",O),Z()}},[$,Z,X]),H=P((k)=>{dA(k,{refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:F,refreshAutoresearchStatus:B,refreshQueueState:Z})},[Q,B,F,V,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:D,handleMoveQueuedFollowup:E,handleMessageResponse:H}}x0();function UF(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function HF(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:q}=_,L=String($||"").trim();if(!L)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let K=new AbortController;Y.current=K,q({question:L,answer:"",thinking:"",error:null,model:null,status:"running"});try{let Q=await G(L,{signal:K.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")q((F)=>F?{...F,status:"running"}:F)},onThinkingDelta:(V)=>{q((F)=>F?{...F,thinking:`${F.thinking||""}${V||""}`}:F)},onTextDelta:(V)=>{q((F)=>F?{...F,answer:`${F.answer||""}${V||""}`}:F)}});if(Y.current!==K)return!0;q((V)=>V?{...V,answer:Q?.result||V.answer||"",thinking:Q?.thinking||V.thinking||"",model:Q?.model||null,status:"success",error:null}:V)}catch(Q){if(K.signal.aborted)return!0;q((V)=>V?{...V,status:"error",error:Q?.payload?.error||Q?.message||"BTW request failed."}:V)}finally{if(Y.current===K)Y.current=null}return!0}async function EF(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function DF(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:q}=_,L=j($);if(!L)return!1;try{let K=await X("default",L,null,[],G?"queue":null,Z);return Y(K),q(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(K){return q("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function iA(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function oA(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function WF(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:q,dismissAutoresearch:L,streamSidePrompt:K,btwAbortRef:Q,btwSession:V,setBtwSession:F,sendAgentMessage:B,handleMessageResponse:U,dismissedLiveWidgetKeysRef:D,setFloatingWidget:E,getAgentStatus:H,getAgentContext:k,getAgentQueueState:A,getAgentModels:O,getActiveChatAgents:y,getChatBranches:x,getTimeline:z,rawPosts:J,activeChatAgents:M,currentChatBranches:W,contextUsage:T,followupQueueItemsRef:I,activeModel:f,activeThinkingLevel:S,supportsThinking:v,isAgentTurnActive:c}=_,h=P(async(N0,H0)=>{let y0=typeof N0?.key==="string"?N0.key:"",i=typeof H0?.key==="string"?H0.key:"",j0=_j(y0,i);if(!y0||!i)return;X((O0)=>OV(O0,y0,i));try{let O0=await JV({panel:N0,action:H0,currentChatJid:$,stopAutoresearch:q,dismissAutoresearch:L,writeClipboard:async(f0)=>{if(!await iA(f0))throw Error("Clipboard access is unavailable.")}});if(O0.refreshAutoresearchStatus)Y();if(O0.toast)Z(O0.toast.title,O0.toast.detail,O0.toast.kind,O0.toast.durationMs)}catch(O0){Z("Panel action failed",O0?.message||"Could not complete that action.","warning")}finally{X((O0)=>zV(O0,j0))}},[$,L,Y,X,Z,q]),$0=P(()=>{UF({btwAbortRef:Q,setBtwSession:F})},[Q,F]),b=P(async(N0)=>{return await HF({question:N0,currentChatJid:$,streamSidePrompt:K,resolveBtwChatJid:Gq,showIntentToast:Z,btwAbortRef:Q,setBtwSession:F})},[Q,$,F,Z,K]),e=P(async({content:N0})=>{return await EF({content:N0,parseBtwCommand:jq,closeBtwPanel:$0,runBtwPrompt:b,showIntentToast:Z})},[$0,b,Z]),s=P(()=>{if(V?.question)b(V.question)},[V,b]),q0=P(async()=>{await DF({btwSession:V,buildBtwInjectionText:Yq,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:B,handleMessageResponse:U,showIntentToast:Z})},[V,$,U,G,B,Z]),Z0=P(async(N0=null)=>{return LF({requestPayload:N0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:H,getAgentContext:k,getAgentQueueState:A,getAgentModels:O,getActiveChatAgents:y,getChatBranches:x,getTimeline:z,rawPosts:J,activeChatAgents:M,currentChatBranches:W,contextUsage:T,followupQueueItems:I.current,activeModel:f,activeThinkingLevel:S,supportsThinking:v,isAgentTurnActive:c})},[M,f,S,T,W,$,j,I,y,k,O,A,H,x,z,c,J,v]),D0=P((N0)=>{QF({widget:N0,dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[D,E]),Q0=P(()=>{FF({dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[D,E]),L0=P((N0,H0)=>{BF({event:N0,widget:H0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:E,handleCloseFloatingWidget:Q0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:B,buildFloatingWidgetDashboardSnapshot:Z0})},[Z0,$,Q0,U,G,B,E,Z]);return g(()=>{oA({dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[$,D,E]),{handleExtensionPanelAction:h,closeBtwPanel:$0,handleBtwIntercept:e,handleBtwRetry:s,handleBtwInject:q0,handleOpenFloatingWidget:D0,handleCloseFloatingWidget:Q0,handleFloatingWidgetEvent:L0}}x0();function sA(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function aA(_){return!_}function OF(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:q,nextChat:L}=_;g(()=>{if(!sA({hasDockPanes:$,chatOnlyMode:j}))return;return PQ(G)},[j,$,G]),g(()=>{if(!aA(j))return;return fQ({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),g(()=>{if(typeof q!=="function"&&typeof L!=="function")return;return RQ({previousChat:q,nextChat:L})},[L,q]),g(()=>gQ(),[]),g(()=>SQ(),[])}function tA(_){return Boolean(_&&typeof _.closest==="function")}function zF(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function eA(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function _k(){return{lastTriggeredAt:0,accumX:0}}function qj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var $k=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),jk=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function JF(_){if(!_||!tA(_))return!1;let $=_.closest($k);if(!$)return!0;return Boolean($.closest(jk))}function kF(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function Lj(_){let $=kF(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function AF(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function Gk(_){let $=kF(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:AF(_.candidates,G)},next:{chatJid:Z,name:AF(_.candidates,Z)}}}function Zk(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function Xk(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function Yk(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let q=$<0,L=q?G.next:G.prev,K=_.querySelector(".chat-swipe-chevron");if(K)K.textContent=q?"›":"‹",K.style.order=q?"2":"0";let Q=_.querySelector(".chat-swipe-name");if(Q)Q.textContent=L?.name??""}function O6(_){_.style.display="none",_.style.opacity="0"}function MF(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,q=$.current;if(!q)return()=>{};let L=X(),K=typeof Y==="function"?Y():!1;if(!L&&!K)return()=>{};let Q=eA(),V=_k(),F=null,B={prev:null,next:null},U=!1;function D(){B=Gk({candidates:j,currentChatJid:G})}D();function E(){if(!F)F=Xk(q);return F}function H(J){let M=J==="next"?B.next:B.prev;if(M)Z(M.chatJid)}function k(J){U=String(J.pointerType||"").toLowerCase()==="pen"}function A(J){if(qj(Q),D(),!L)return;if(J.touches.length!==1)return;if(U)return;if(zF())return;if(!JF(J.target))return;let M=J.touches[0];Q.active=!0,Q.startX=M.clientX,Q.startY=M.clientY,Q.lastX=M.clientX,Q.lastY=M.clientY,Q.startedAt=Date.now()}function O(J){if(!Q.active||Q.cancelled)return;if(zF()){Q.cancelled=!0,O6(E());return}let M=J.touches[0];if(!M)return;Q.lastX=M.clientX,Q.lastY=M.clientY;let W=Q.lastX-Q.startX,T=Q.lastY-Q.startY;if(!Q.horizontalLocked){if(Math.abs(T)>16&&Math.abs(T)>=Math.abs(W)){Q.cancelled=!0,O6(E());return}if(Math.abs(W)>12&&Math.abs(W)>Math.abs(T)*1.15)Q.horizontalLocked=!0}if(Q.horizontalLocked){if(J.cancelable)J.preventDefault();Yk(E(),W,q.clientWidth,B)}}function y(){if(!Q.active)return;let J=Q.lastX-Q.startX,M=Q.lastY-Q.startY,W=!Q.cancelled&&Zk({dx:J,dy:M});if(O6(E()),qj(Q),W)H(J<0?"next":"prev")}function x(){O6(E()),qj(Q)}function z(J){if(L)return;if(!K)return;if(!JF(J.target))return;let{deltaX:M,deltaY:W}=J;if(!Number.isFinite(M)||Math.abs(M)<72)return;if(Math.abs(M)<=Math.abs(W)*1.35)return;if(J.cancelable)J.preventDefault();let T=Date.now();if(T-V.lastTriggeredAt<450)return;V.lastTriggeredAt=T,H(M>0?"next":"prev")}return q.addEventListener("pointerdown",k,{passive:!0}),q.addEventListener("touchstart",A,{passive:!0}),q.addEventListener("touchmove",O,{passive:!1}),q.addEventListener("touchend",y,{passive:!0}),q.addEventListener("touchcancel",x,{passive:!0}),q.addEventListener("wheel",z,{passive:!1}),()=>{if(q.removeEventListener("pointerdown",k),q.removeEventListener("touchstart",A),q.removeEventListener("touchmove",O),q.removeEventListener("touchend",y),q.removeEventListener("touchcancel",x),q.removeEventListener("wheel",z),F)O6(F),F.remove(),F=null}}function qk(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function Lk(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function Kk(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function Vk(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=Lj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=Lj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function TF(_){let $=NF(qk(_)),j=WF(Lk({..._,handleMessageResponse:$.handleMessageResponse})),G=_F(Kk(_));return OF(Vk({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function Qk(_,$){return Boolean(_||$!==null)}function Fk(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function Bk(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:q,refs:L,setters:K,services:Q,helpers:V}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:L.activeChatJidRef,queueRefreshGenRef:L.queueRefreshGenRef,dismissedQueueRowIdsRef:L.dismissedQueueRowIdsRef,getAgentQueueState:Q.getAgentQueueState,setFollowupQueueItems:K.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:Q.getAgentContext,setContextUsage:K.setContextUsage,getAutoresearchStatus:Q.getAutoresearchStatus,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,getAgentStatus:Q.getAgentStatus,wasAgentActiveRef:L.wasAgentActiveRef,viewStateRef:L.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:L.agentStatusRef,pendingRequestRef:L.pendingRequestRef,thoughtBufferRef:L.thoughtBufferRef,draftBufferRef:L.draftBufferRef,previewResyncPendingRef:L.previewResyncPendingRef,previewResyncGenerationRef:L.previewResyncGenerationRef,setAgentStatus:K.setAgentStatus,setAgentDraft:K.setAgentDraft,setAgentPlan:K.setAgentPlan,setAgentThought:K.setAgentThought,setPendingRequest:K.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:L.isAgentRunningRef,currentTurnIdRef:L.currentTurnIdRef,silentRecoveryRef:L.silentRecoveryRef,silenceRefreshMs:Q.silenceRefreshMs,lastAgentEventRef:L.lastAgentEventRef,lastSilenceNoticeRef:L.lastSilenceNoticeRef,silenceWarningMs:Q.silenceWarningMs,silenceFinalizeMs:Q.silenceFinalizeMs,isCompactionStatus:Q.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:Q.currentAppAssetVersion,staleUiVersionRef:L.staleUiVersionRef,staleUiReloadScheduledRef:L.staleUiReloadScheduledRef,tabStoreHasUnsaved:Q.tabStoreHasUnsaved,isAgentRunningRef:L.isAgentRunningRef,pendingRequestRef:L.pendingRequestRef,showIntentToast:$},setConnectionStatus:K.setConnectionStatus,hasConnectedOnceRef:L.hasConnectedOnceRef,getAgents:Q.getAgents,setAgents:K.setAgents,setUserProfile:K.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:V.readStoredNumber,sidebarWidthRef:L.sidebarWidthRef,appShellRef:L.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,agentsRef:L.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:Q.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:L.paneStateOwnerChatJidRef,chatPaneStateByChatRef:L.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:K.setFloatingWidget,dismissedLiveWidgetKeysRef:L.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:L.draftThrottleRef,thoughtThrottleRef:L.thoughtThrottleRef,followupQueueItemsRef:L.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:L.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:K.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:q.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{K.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:Q.agentStatus,thoughtExpandedRef:L.thoughtExpandedRef,draftExpandedRef:L.draftExpandedRef,steerQueuedTurnIdRef:L.steerQueuedTurnIdRef}}function wF(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:q,setters:L,services:K,helpers:Q}=_,V=X.composeReferenceActions.showIntentToast,F=HV({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:K.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:L.setRemovingPostIds,deletePost:K.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),B=AQ(Bk(_,V)),U=Qk(K.isAgentTurnActive,K.agentStatus),D=TF({currentChatJid:$.currentChatJid,followupQueueItemsRef:q.followupQueueItemsRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,setFollowupQueueItems:L.setFollowupQueueItems,showIntentToast:V,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:K.steerAgentQueueItem,removeAgentQueueItem:K.removeAgentQueueItem,refreshQueueState:B.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:B.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:B.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:B.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:B.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:L.setPendingExtensionPanelActions,stopAutoresearch:K.stopAutoresearch,dismissAutoresearch:K.dismissAutoresearch,streamSidePrompt:K.streamSidePrompt,btwAbortRef:q.btwAbortRef,btwSession:G.btwSession,setBtwSession:L.setBtwSession,sendAgentMessage:K.sendAgentMessage,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,setFloatingWidget:L.setFloatingWidget,getAgentStatus:K.getAgentStatus,getAgentContext:K.getAgentContext,getAgentQueueState:K.getAgentQueueState,getAgentModels:K.getAgentModels,getActiveChatAgents:K.getActiveChatAgents,getChatBranches:K.getChatBranches,getTimeline:K.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:K.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,getFormLock:Q.getFormLock,setRenameBranchNameDraft:L.setRenameBranchNameDraft,setIsRenameBranchFormOpen:L.setIsRenameBranchFormOpen,setIsRenamingBranch:L.setIsRenamingBranch,renameChatBranch:K.renameChatBranch,pruneChatBranch:K.pruneChatBranch,purgeChatBranch:K.purgeChatBranch,restoreChatBranch:K.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:K.forkChatBranch,createRootChatSession:K.createRootChatSession,setBranchLoaderState:L.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:L.setActiveChatAgents,setCurrentChatBranches:L.setCurrentChatBranches,openEditor:K.openEditor,tabStripActiveId:K.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:K.terminalTabPath,tabPaneOverrides:K.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:K.resolveTab,closeTab:K.closeTab,setDockVisible:Y.setDockVisible,editorOpen:K.editorOpen,shellElement:q.appShellRef.current,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef,sidebarWidthRef:q.sidebarWidthRef,readStoredNumber:Q.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return Fk({agentStatusLifecycleBundle:B,actionBundle:D,timelineViewActions:F,isComposeBoxAgentActive:U})}x0();g_();x0();function yF(_){try{return _?.focus?.(),!0}catch($){return!1}}function z6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function Kj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function xF(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function IF(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function s$(_=typeof window<"u"?window:null){let $=_?.localStorage,j=z6($,"piclaw.notifications.deviceId");if(j)return j;let G=IF("device");return Kj($,"piclaw.notifications.deviceId",G),z6($,"piclaw.notifications.deviceId")||G}function J6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=z6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=IF("client");if(Kj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=z6($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function CF(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function Vj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():s$($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():J6($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),q=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),K=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:K,hasFocus:q,updatedAtMs:Y}}function PF(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return Kj(j,CF(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function fF(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return xF(j,CF(G,Z)),!0}function Nk(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():s$($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,q=[],L=[];for(let K=0;K<j.length;K+=1){let Q=j.key(K);if(!Q||!Q.startsWith(Y))continue;let V=z6(j,Q);if(!V){L.push(Q);continue}try{let F=JSON.parse(V),B=Number(F?.updatedAtMs);if(!Number.isFinite(B)||Z-B>X){L.push(Q);continue}let U=typeof F?.chatJid==="string"?F.chatJid.trim():"",D=typeof F?.clientId==="string"?F.clientId.trim():"";if(!U||!D){L.push(Q);continue}q.push({deviceId:G,clientId:D,chatJid:U,visibilityState:F?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(F?.hasFocus),updatedAtMs:B})}catch{L.push(Q)}}return L.forEach((K)=>xF(j,K)),q.sort((K,Q)=>K.clientId.localeCompare(Q.clientId))}function RF(_={}){let $=Vj(_),j=$.chatJid;if(!j)return!1;let G=Nk({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,q)=>Y.clientId.localeCompare(q.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function Uk(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function Hk(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=Uk(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function Ek(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function M8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function gF(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function Dk(_){let $=await gF(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await t3(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ek(Z)})}async function SF(_,$){if(!M8(_))return!1;let j=await Dk(_);return await e3(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function Wk(_,$){if(!M8(_))return!1;let G=await(await gF(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await _7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function Ok(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function zk(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function uF(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=u(!1),q=u(null),L=u(null);g(()=>{let B=V$("notificationsEnabled",!1);if(Y.current=B,G(B),typeof window<"u")q.current=s$(window),L.current=J6(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&B){Y.current=!1,G(!1),Q_("notificationsEnabled","false");return}if(U==="granted"&&B&&typeof window<"u"&&M8(window))SF(window,q.current||s$(window)).catch((D)=>{console.warn("Failed to refresh stored web push subscription:",D)})},[]),g(()=>{Y.current=j},[j]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let B=q.current||s$(window),U=L.current||J6(window);q.current=B,L.current=U;let D=(A=!0,O="fetch")=>{let y=Vj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:B,clientId:U});if(A)PF(y,window);else fF({deviceId:B,clientId:U},window);let x={device_id:B,client_id:U,chat_jid:$,visibility_state:y.visibilityState,has_focus:y.hasFocus,active:A};if(!A&&O==="beacon"&&zk(x,window))return;Ok(x,{runtimeWindow:window,keepalive:!A||O==="keepalive"})},E=()=>D(!0),H=()=>D(!1,"beacon");D(!0);let k=setInterval(()=>D(!0),15000);return document.addEventListener("visibilitychange",E),window.addEventListener("focus",E),window.addEventListener("blur",E),window.addEventListener("pageshow",E),window.addEventListener("pagehide",H),window.addEventListener("beforeunload",H),()=>{clearInterval(k),document.removeEventListener("visibilitychange",E),window.removeEventListener("focus",E),window.removeEventListener("blur",E),window.removeEventListener("pageshow",E),window.removeEventListener("pagehide",H),window.removeEventListener("beforeunload",H),D(!1,"beacon")}},[$]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch(B){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",B),Promise.resolve("default")}},[]),Q=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let D=await K();if(X(D||"default"),D!=="granted"){Y.current=!1,G(!1),Q_("notificationsEnabled","false");return}}let B=!Y.current;Y.current=B,G(B),Q_("notificationsEnabled",String(B));let U=q.current||s$(window);if(q.current=U,M8(window))try{if(B)await SF(window,U);else await Wk(window,U)}catch(D){if(console.warn("Failed to sync web push notifications:",D),B)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[K]),V=P((B,U,D={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let E=new Notification(Hk(B,D?.sourceLabel||"",window),{body:U});return E.onclick=()=>{yF(window)},!0}catch(E){return console.debug("[use-notifications] Local notification creation failed.",E,{title:typeof B==="string"?B:null}),!1}},[]),F=P((B)=>{if(typeof window>"u"||typeof document>"u")return!1;return RF({chatJid:typeof B==="string"&&B.trim()?B.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:q.current||s$(window),clientId:L.current||J6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:Q,notify:V,shouldNotifyLocallyForChat:F}}function Jk(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function Ak(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function kk(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function bF(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(()=>I1()),[q,L]=C(null),[K,Q]=C(null),[V,F]=C(!1),[B,U]=C("current"),[D,E]=C([]),[H,k]=C([]),[A,O]=C(null),[y,x]=C({}),[z,J]=C(null),[M,W]=C(null),[T,I]=C(!1),[f,S]=C(null),[v,c]=C(null),[h,$0]=C(!1),[b,e]=C([]),[s,q0]=C([]),[Z0,D0]=C(null),[Q0,L0]=C(()=>new Map),[N0,H0]=C(()=>new Set),[y0,i]=C(()=>({message:null,indicator:null,visible:!0})),[j0,O0]=C([]),[f0,m0]=C(!1),[l0,G_]=C(()=>ZK()),[h0,c0]=C(null),[M0,p0]=C(null),b0=u(new Set),d0=X0(()=>Jk({activeChatAgents:b,currentChatBranches:s,currentChatJid:$}),[b,s,$]),H_=X0(()=>kk($,d0),[d0,$]),E_=GK(B),[K_,S0]=C(()=>Ak(j)),A0=j0.length,n0=u(new Set),q_=u([]),O_=u(new Set),F0=u(0),T0=u({inFlight:!1,lastAttemptAt:0,turnId:null});n0.current=new Set(j0.map((M1)=>M1.row_id)),q_.current=j0;let{notificationsEnabled:C0,notificationPermission:U_,toggleNotifications:A_,notify:V_,shouldNotifyLocallyForChat:X_}=uF({chatJid:$}),[D_,M_]=C(()=>new Set),[_0,z0]=C(()=>AK({allowLegacyFallback:!0,defaultValue:!1})),[k0,g0]=C({name:"You",avatar_url:null,avatar_background:null}),v0=u(null),a=u(!1),o=u(!1),r=u(!1),Y0=u(null),G0=u($),E0=u(new Map),I0=u($),t0=u(0),J0=u(0),R0=u({}),Z_=u({name:null,avatar_url:null}),L_=u({currentHashtag:null,searchQuery:null,searchOpen:!1}),$_=u(null),B_=u(null),k_=u(0),e0=u(0),t=u(0),W0=u(null),s0=u(null),i0=u(null),P_=u(null),z_=u(0),x_=u({title:null,avatarBase:null}),i1=u(null),J_=u(!1),[d_,O1]=C(!1),b_=u(0),[n_,q1]=C(!1),[__,v_]=C(""),i_=X0(()=>m2(__,d0?.agent_name||""),[d0?.agent_name,__]),L1=u(null);return{connectionStatus:G,setConnectionStatus:Z,isWebAppMode:X,setIsWebAppMode:Y,currentHashtag:q,setCurrentHashtag:L,searchQuery:K,setSearchQuery:Q,searchOpen:V,setSearchOpen:F,searchScope:B,setSearchScope:U,fileRefs:D,setFileRefs:E,messageRefs:H,setMessageRefs:k,intentToast:A,setIntentToast:O,agents:y,setAgents:x,activeModel:z,setActiveModel:J,activeThinkingLevel:M,setActiveThinkingLevel:W,supportsThinking:T,setSupportsThinking:I,activeModelUsage:f,setActiveModelUsage:S,agentModelsPayload:v,setAgentModelsPayload:c,hasLoadedAgentModels:h,setHasLoadedAgentModels:$0,activeChatAgents:b,setActiveChatAgents:e,currentChatBranches:s,setCurrentChatBranches:q0,contextUsage:Z0,setContextUsage:D0,extensionStatusPanels:Q0,setExtensionStatusPanels:L0,pendingExtensionPanelActions:N0,setPendingExtensionPanelActions:H0,extensionWorkingState:y0,setExtensionWorkingState:i,followupQueueItems:j0,setFollowupQueueItems:O0,isAgentTurnActive:f0,setIsAgentTurnActive:m0,btwSession:l0,setBtwSession:G_,floatingWidget:h0,setFloatingWidget:c0,attachmentPreview:M0,setAttachmentPreview:p0,dismissedLiveWidgetKeysRef:b0,currentBranchRecord:d0,currentRootChatJid:H_,activeSearchScopeLabel:E_,branchLoaderState:K_,setBranchLoaderState:S0,followupQueueCount:A0,followupQueueRowIdsRef:n0,followupQueueItemsRef:q_,dismissedQueueRowIdsRef:O_,queueRefreshGenRef:F0,silentRecoveryRef:T0,notificationsEnabled:C0,notificationPermission:U_,handleToggleNotifications:A_,notify:V_,shouldNotifyLocallyForChat:X_,removingPostIds:D_,setRemovingPostIds:M_,workspaceOpen:_0,setWorkspaceOpen:z0,userProfile:k0,setUserProfile:g0,staleUiVersionRef:v0,staleUiReloadScheduledRef:a,hasConnectedOnceRef:o,wasAgentActiveRef:r,agentStatusRef:Y0,activeChatJidRef:G0,chatPaneStateByChatRef:E0,paneStateOwnerChatJidRef:I0,draftThrottleRef:t0,thoughtThrottleRef:J0,agentsRef:R0,userProfileRef:Z_,viewStateRef:L_,timelineRef:$_,appShellRef:B_,sidebarWidthRef:k_,editorWidthRef:e0,dockHeightRef:t,lastNotifiedIdRef:W0,lastAgentResponseRef:s0,btwAbortRef:i0,lastActivityTimerRef:P_,lastActivityTokenRef:z_,brandingRef:x_,intentToastTimerRef:i1,renameBranchInFlightRef:J_,isRenamingBranch:d_,setIsRenamingBranch:O1,renameBranchLockUntilRef:b_,isRenameBranchFormOpen:n_,setIsRenameBranchFormOpen:q1,renameBranchNameDraft:__,setRenameBranchNameDraft:v_,renameBranchDraftState:i_,renameBranchNameInputRef:L1}}x0();x0();function Mk(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,q]of _.entries()){let L=Y;if(G==="dir"){if(Y===$)L=j,Z=!0;else if(Y.startsWith(`${$}/`))L=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)L=j,Z=!0;X.set(L,q)}return Z?X:_}function vF(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let q=Y;if(G==="dir"){if(Y===$)q=j,Z=!0;else if(Y.startsWith(`${$}/`))q=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)q=j,Z=!0;X.add(q)}return Z?X:_}function mF({onTabClosed:_}={}){let $=u(_);$.current=_;let[j,G]=C(()=>a0.getTabs()),[Z,X]=C(()=>a0.getActiveId()),[Y,q]=C(()=>a0.getTabs().length>0);g(()=>{return a0.onChange((I,f)=>{G(I),X(f),q(I.length>0)})},[]);let[L,K]=C(()=>new Set),[Q,V]=C(()=>new Set),[F,B]=C(()=>new Map),U=P((I)=>{K((f)=>{let S=new Set(f);if(S.has(I))S.delete(I);else S.add(I);return S})},[]),D=P((I)=>{K((f)=>{if(!f.has(I))return f;let S=new Set(f);return S.delete(I),S})},[]),E=P((I)=>{V((f)=>{if(!f.has(I))return f;let S=new Set(f);return S.delete(I),S})},[]),H=P((I)=>{B((f)=>{if(!f.has(I))return f;let S=new Map(f);return S.delete(I),S})},[]),k=P((I,f={})=>{if(!I)return;let S=typeof f?.paneOverrideId==="string"&&f.paneOverrideId.trim()?f.paneOverrideId.trim():null,v={path:I,mode:"edit"};try{if(!(S?Y_.get(S):Y_.resolve(v))){if(!Y_.get("editor")){console.warn(`[openEditor] No pane handler for: ${I}`);return}}}catch(b){console.warn(`[openEditor] paneRegistry.resolve() error for "${I}":`,b)}let c=typeof f?.label==="string"&&f.label.trim()?f.label.trim():void 0,h=f?.viewState&&typeof f.viewState==="object"?f.viewState:null,$0=f?.diffMode==="saved"?"saved":null;if(a0.open(I,c),h)a0.saveViewState(I,h);if(S)B((b)=>{if(b.get(I)===S)return b;let e=new Map(b);return e.set(I,S),e});if($0==="saved")V((b)=>{if(b.has(I))return b;let e=new Set(b);return e.add(I),e})},[]),A=P(()=>{let I=a0.getActiveId();if(I){let f=a0.get(I);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}a0.close(I),D(I),E(I),H(I),$.current?.(I)}},[E,H,D]),O=P((I)=>{let f=a0.get(I);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}a0.close(I),D(I),E(I),H(I),$.current?.(I)},[E,H,D]),y=P((I)=>{a0.activate(I)},[]),x=P((I)=>{let f=a0.getTabs().filter((c)=>c.id!==I&&!c.pinned),S=f.filter((c)=>c.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let v=f.map((c)=>c.id);a0.closeOthers(I),v.forEach((c)=>{D(c),E(c),H(c),$.current?.(c)})},[E,H,D]),z=P(()=>{let I=a0.getTabs().filter((v)=>!v.pinned),f=I.filter((v)=>v.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let S=I.map((v)=>v.id);a0.closeAll(),S.forEach((v)=>{D(v),E(v),H(v),$.current?.(v)})},[E,H,D]),J=P((I)=>{a0.togglePin(I)},[]),M=P((I)=>{if(!I)return;V((f)=>{let S=new Set(f);if(S.has(I))S.delete(I);else S.add(I);return S}),a0.activate(I)},[]),W=P((I)=>{if(!I)return;B((f)=>{if(f.get(I)==="editor")return f;let S=new Map(f);return S.set(I,"editor"),S}),a0.activate(I)},[]),T=P(()=>{let I=a0.getActiveId();if(I)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:I}}))},[]);return g(()=>{let I=(f)=>{let{oldPath:S,newPath:v,type:c}=f.detail||{};if(!S||!v)return;if(c==="dir"){for(let h of a0.getTabs())if(h.path===S||h.path.startsWith(`${S}/`)){let $0=`${v}${h.path.slice(S.length)}`;a0.rename(h.id,$0)}}else a0.rename(S,v);K((h)=>vF(h,S,v,c)),V((h)=>vF(h,S,v,c)),B((h)=>Mk(h,S,v,c))};return window.addEventListener("workspace-file-renamed",I),()=>window.removeEventListener("workspace-file-renamed",I)},[]),g(()=>{let I=(f)=>{if(a0.hasUnsaved())f.preventDefault(),f.returnValue=""};return window.addEventListener("beforeunload",I),()=>window.removeEventListener("beforeunload",I)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:L,diffTabs:Q,tabPaneOverrides:F,openEditor:k,closeEditor:A,handleTabClose:O,handleTabActivate:y,handleTabCloseOthers:x,handleTabCloseAll:z,handleTabTogglePin:J,handleTabTogglePreview:U,handleTabToggleDiff:M,handleTabEditSource:W,revealInExplorer:T}}x0();function r1(_){return typeof _==="string"&&_.trim()?_.trim():null}function Tk(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function w4(_="pane"){let $=Tk();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function cF(_){let $=r1(_?.paneInstanceId),j=r1(_?.paneWindowId);if(!$||!j)return{};let G=r1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function lF(_={}){let $=new URLSearchParams(_.search||"");return{panePath:r1($.get("pane_path"))||r1(_.panePath),paneLabel:r1($.get("pane_label"))||r1(_.paneLabel),paneInstanceId:r1($.get("pane_instance_id")),paneWindowId:r1($.get("pane_window_id")),paneSourceWindowId:r1($.get("pane_source_window_id"))}}function y4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function d1(_){return typeof _==="string"&&_.trim()?_.trim():null}function hF(_){let $=d1(_?.panePath),j=d1(_?.paneInstanceId),G=d1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=d1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:d1(_?.label),sourceWindowId:d1(_?.sourceWindowId)}}function Qj(_,$){if(!_||!$)return!1;return d1($.panePath)===_.panePath&&d1($.paneInstanceId)===_.paneInstanceId&&d1($.paneWindowId)===_.ownerWindowId}function Fj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:d1($)||new Date().toISOString(),label:_.label||null}}function T8(_){try{return _?.close?.(),!0}catch($){return!1}}function Bj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function wk(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function pF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var yk=400;function xk(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function Ik(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return xk(j).some((Z)=>Z==="."||Z===_)})}async function nF(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function Ck(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function x8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function rF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function w8(_){if(!rF(_))return!1;return x8(_?.runtimeNavigator)}function y8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return x8(_?.runtimeNavigator)}function W5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function Pk(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",q=_?.allowLiveTransfer!==!1,L=_?.instance||null,K=typeof L?.exportHostTransferState==="function"?L.exportHostTransferState():null,Q=$===Y,V=K&&!Q?A8({path:$,payload:K},j,G):null,F=null;if($!==Y){let B=K&&typeof K==="object"?typeof K.mtime==="string"?K.mtime:K.mtime===null?null:void 0:void 0,U=typeof L?.isDirty==="function"?L.isDirty():!1,D=typeof L?.getContent==="function"?L.getContent():void 0;F=d6({path:$,content:U?D:void 0,mtime:B,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...F?.editor_popout?{editorPopoutToken:F.editor_popout}:{},...V?.pane_transfer?{paneTransferToken:V.pane_transfer}:{},...Q&&K?{paneTransferPayload:K}:{},...q?{}:{allowLiveTransfer:!1}}}function fk(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",q=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,L=X?X3(X,j,G):null,K=q?{panePath:$,path:$,payload:q,capturedAt:G}:Y?Xj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:L?.path===$?L:null,hostTransfer:K?.path===$?K:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function dF(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:q,previewTabs:L,diffTabs:K,tabPaneOverrides:Q,terminalTabPath:V,vncTabPrefix:F,openEditor:B,closeEditor:U,getWorkspaceFile:D}=_,E=u(null),H=u(null),k=u(null),A=u(null),O=u((()=>{if(!$)return null;let a=c4("editor_popout");return X3(a)})()),y=u((()=>{if(!$)return null;return yQ()})()),x=u(lF({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),z=u(x.current.paneWindowId||w4("pane-window")),J=u(new Map),M=u(new Map),W=u(new Map),T=u(new Map),I=u(!1),f=u(new Map),S=u(w4("pane-instance")),v=u(new Map),c=u(new Map),h=u(new Set),[$0,b]=C(()=>new Map),e=u($0);e.current=$0;let[s,q0]=C(()=>new Map),Z0=u(s);Z0.current=s;let[D0,Q0]=C(null),L0=u(D0);L0.current=D0;let[N0,H0]=C(null),y0=u(N0);y0.current=N0;let i=Y_.getDockPanes().length>0,[j0,O0]=C(!1),f0=P(()=>O0((a)=>!a),[]),m0=P(()=>{B(V,{label:"Terminal"})},[B,V]),l0=P(()=>{B(F,{label:"VNC"})},[B,F]),G_=P((a)=>{let o=typeof a==="string"?a.trim():"";if(!o)return w4("pane-instance");if(o===V&&!a0.get(o)){if(!S.current)S.current=w4("pane-instance");return S.current}let Y0=f.current.get(o);if(Y0)return Y0;let G0=w4("pane-instance");return f.current.set(o,G0),G0},[V]),h0=X0(()=>!$&&q?s.get(q)||null:null,[s,$,q]),c0=!$?N0:null,M0=P((a)=>{if(!a)return;xQ(a),c.current.delete(a),h.current.delete(a),Q0((o)=>o?.panePath===a?null:o),b((o)=>{if(!o.has(a))return o;let r=new Map(o);return r.delete(a),r})},[]),p0=P((a)=>{if(!a)return;v.current.delete(a),c.current.delete(a),h.current.delete(a),M0(a),H0((o)=>o?.panePath===a?null:o),q0((o)=>{if(!o.has(a))return o;let r=new Map(o);return r.delete(a),r})},[M0]),b0=P((a,o={})=>{let r=typeof a==="string"?a.trim():"";if(!r)return!1;if(y8({panePath:r,terminalTabPath:V}))return!1;let Y0=v.current.get(r),G0=Boolean(Z0.current.get(r)),E0=Boolean(y0.current?.panePath===r);if(p0(r),r===V&&E0&&!G0)O0(!0);else if(r===V&&G0)B(r,{label:"Terminal"});else if(a0.get(r))a0.activate(r);else B(r);if(o.closeDetachedWindow!==!1&&Y0&&typeof Y0.close==="function")T8(Y0);return!0},[p0,B,O0,V]),d0=P(()=>{if($)return;if(!Ck())return;let a=Date.now();for(let[o,r]of c.current.entries()){if(r>a)continue;c.current.delete(o),b0(o,{closeDetachedWindow:!1})}},[$,b0]),H_=P((a,o={})=>{let r=typeof a==="string"?a.trim():"";if(!r)return!1;let Y0={panePath:r,terminalTabPath:V,allowLiveTransfer:o.allowLiveTransfer,reason:o.reason};if(w8(Y0))return v.current.delete(r),c.current.delete(r),h.current.add(r),!0;if(!rF(Y0))return b0(r,{closeDetachedWindow:!1});return c.current.set(r,Date.now()+yk),d0(),!0},[d0,b0,V]),E_=P((a)=>{let o=typeof a==="string"?a.trim():"";if(!o)return null;let r=G_(o),Y0=w4("pane-window");return{paneInstanceId:r,paneWindowId:Y0,params:cF({paneInstanceId:r,paneWindowId:Y0,paneSourceWindowId:z.current})}},[G_]),K_=P((a,o,r,Y0)=>{let G0=typeof a==="string"?a.trim():"";if(!G0||!Y0)return;let E0=hF({panePath:G0,paneInstanceId:Y0.pane_instance_id,ownerWindowId:Y0.pane_window_id,sourceWindowId:Y0.pane_source_window_id,label:o});if(!E0)return;if(v.current.set(G0,r||null),G0===V&&!a0.get(G0)){Q0(E0);return}b((t0)=>{let J0=new Map(t0);return J0.set(G0,E0),J0})},[V]),S0=P((a,o)=>{let r=typeof a?.panePath==="string"?a.panePath.trim():"";if(!r)return!1;let Y0=v.current.get(r);if(Y0&&o&&Y0!==o)return!1;let G0=e.current.get(r)||null;if(Qj(G0,a)){let R0=H.current,Z_=W5({panePath:r,terminalTabPath:V});if(Z_&&R0&&typeof R0.moveHost==="function")D5({panePath:r,paneInstanceId:G0.paneInstanceId,paneWindowId:G0.ownerWindowId,instance:R0,releaseSourceHost:()=>{if(H.current===R0)H.current=null}});if(Z_&&H.current)H.current=null;let L_=Fj(G0);if(!L_)return!1;return b(($_)=>{if(!$_.has(r))return $_;let B_=new Map($_);return B_.delete(r),B_}),q0(($_)=>{let B_=new Map($_);return B_.set(r,L_),B_}),pF({panePath:r,terminalTabPath:V,closeTab:($_)=>a0.close($_),sourceHost:"tab"}),!0}if(r!==V)return!1;let E0=L0.current,I0=A.current,t0=W5({panePath:r,terminalTabPath:V});if(t0&&E0&&I0&&typeof I0.moveHost==="function")D5({panePath:r,paneInstanceId:E0.paneInstanceId,paneWindowId:E0.ownerWindowId,instance:I0,releaseSourceHost:()=>{if(A.current===I0)A.current=null}});if(t0&&A.current)A.current=null;if(!Qj(E0,a))return!1;let J0=Fj(E0);if(!J0)return!1;return Q0(null),H0(J0),pF({panePath:r,terminalTabPath:V,setDockVisible:O0,sourceHost:"dock"}),!0},[O0,V]),A0=P((a=!1,o=!0)=>{if(!$)return!1;let r=x.current;if(!y4(r))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(I.current){if(a)T8(window);return!0}let Y0=r.panePath||j,G0=Y0===V?A.current||H.current:H.current,E0=o&&W5({panePath:Y0,terminalTabPath:V}),I0=Pk({panePath:Y0,paneInstanceId:r.paneInstanceId,paneOverrideId:Y0===V?null:typeof Q?.get==="function"?Q.get(Y0)||null:null,terminalTabPath:V,viewState:Y0===V?null:a0.getViewState(Y0)||null,allowLiveTransfer:E0,instance:G0});if(!I0)return!1;if(E0&&I0.paneTransferToken&&typeof G0?.moveHost==="function"){if(A.current===G0)A.current=null;if(H.current===G0)H.current=null}if(!Bj(window.opener,I0,window.location.origin))return!1;if(I.current=!0,a)T8(window);return!0},[$,j,Q,V]),n0=P(()=>A0(!0,!0),[A0]);g(()=>{if(!$||typeof window>"u")return;let a=()=>{let o=x.current,r=y4(o)?o.panePath||j||"":"";if(w8({panePath:r,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"}))return;A0(!1,!1)};return window.addEventListener("pagehide",a),window.addEventListener("beforeunload",a),()=>{window.removeEventListener("pagehide",a),window.removeEventListener("beforeunload",a)}},[$,A0]);let q_=X0(()=>YK(Y,q),[q,Y]),O_=X0(()=>qK(Q,q),[Q,q]),F0=X0(()=>b9(G,q_,j),[q_,G,j]),T0=X0(()=>q&&K.has(q)?"saved":null,[K,q]),C0=u(T0);g(()=>{C0.current=T0},[T0]);let U_=X0(()=>KK(Y,L,K,q),[K,L,q,Y]),A_=X0(()=>VK(j,F),[j,F]),V_=X0(()=>QK(j,V,U_,A_),[A_,U_,j,V]),X_=FK($,Z,X,i,j0),[D_,M_]=C(!1),_0=u(!1),z0=P(()=>{if(!X||Z)return;if(_0.current=j0,j0)O0(!1);M_(!0)},[Z,j0,X]),k0=P(()=>{if(!D_)return;if(M_(!1),_0.current)O0(!0),_0.current=!1},[D_]),g0=P(()=>{if(D_){k0();return}z0()},[z0,k0,D_]);g(()=>{if(D_&&!X)k0()},[X,k0,D_]),g(()=>{let a=new Set(Y.map((Y0)=>Y0.id)),o=new Set(e.current.keys()),r=new Set(Z0.current.keys());for(let Y0 of Array.from(f.current.keys()))if(!wk({panePath:Y0,openTabIds:a,pendingDetachedTabPaths:o,detachedTabPaths:r,terminalTabPath:V,hasPendingDetachedDockPane:Boolean(L0.current),hasDetachedDockPane:Boolean(y0.current)}))f.current.delete(Y0)},[Y,V]),g(()=>{if($||typeof window>"u")return;let a=(o)=>{if(o.origin!==window.location.origin)return;let r=o.data;if(!r||typeof r!=="object")return;if(r.type==="piclaw-pane-detach-claim"){S0({panePath:r.panePath,paneInstanceId:r.paneInstanceId,paneWindowId:r.paneWindowId},o.source);return}if(r.type!=="piclaw-pane-reattach-request")return;let Y0=fk({payload:r}),G0=Y0?.panePath||"";if(!G0)return;if(Y0?.editorTransfer)J.current.set(G0,Y0.editorTransfer);if(Y0?.hostTransfer)if(M.current.set(G0,Y0.hostTransfer),Y0.allowLiveTransfer&&o.source)W.current.set(G0,o.source);else W.current.delete(G0);let E0=Z0.current.get(G0)||null,I0=G0===V?y0.current:null,t0=W5({panePath:G0,terminalTabPath:V}),J0=E0||I0;if(!J0)return;if(Y0?.paneInstanceId&&Y0.paneInstanceId!==J0.paneInstanceId)return;if(y8({panePath:G0,terminalTabPath:V})){W.current.delete(G0),T.current.delete(G0),M.current.delete(G0),J.current.delete(G0);return}if(Y0?.hostTransfer&&Y0.allowLiveTransfer&&t0)T.current.set(G0,{panePath:G0,paneInstanceId:J0.paneInstanceId,paneWindowId:J0.ownerWindowId});else T.current.delete(G0);if(w8({panePath:G0,terminalTabPath:V,allowLiveTransfer:Y0?.allowLiveTransfer,reason:"message"})){W.current.delete(G0),v.current.delete(G0),c.current.delete(G0),h.current.add(G0);return}H_(G0,{allowLiveTransfer:Y0?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",a),()=>window.removeEventListener("message",a)},[S0,$,H_,V]),g(()=>{if($||typeof window>"u"||typeof document>"u")return;let a=()=>d0();window.addEventListener("focus",a),window.addEventListener("pageshow",a),document.addEventListener("visibilitychange",a);let o=setInterval(()=>{d0();for(let[r,Y0]of v.current.entries()){if(!Y0||!Y0.closed)continue;if(r===V?Boolean(L0.current):e.current.has(r)){v.current.delete(r),M0(r);continue}if(y8({panePath:r,terminalTabPath:V})){p0(r);continue}if(w8({panePath:r,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"})){v.current.delete(r),c.current.delete(r),h.current.add(r);continue}if(h.current.has(r)){v.current.delete(r);continue}H_(r,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",a),window.removeEventListener("pageshow",a),document.removeEventListener("visibilitychange",a),clearInterval(o)}},[p0,M0,d0,$,H_,V]),g(()=>{if(!$||!j)return;if(a0.getActiveId()===j)return;let o=O.current?.path===j?O.current:null,r=y.current?.path===j?y.current:null;B(j,{...G?{label:G}:{},...o?.paneOverrideId?{paneOverrideId:o.paneOverrideId}:{},...o?.viewState?{viewState:o.viewState}:{},...r?.payload?.diffMode?{diffMode:r.payload.diffMode}:{}})},[B,G,$,j]),g(()=>{if(!$)return;let a=x.current;if(!y4(a))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;Bj(window.opener,{type:"piclaw-pane-detach-claim",panePath:a.panePath,paneInstanceId:a.paneInstanceId,paneWindowId:a.paneWindowId},window.location.origin)},[$]),g(()=>{let a=E.current;if(!a)return;if(H.current)H.current.dispose(),H.current=null;let o=q;if(!o)return;if(!$&&h0?.panePath===o){a.innerHTML="";return}let r=O.current?.path===o?O.current:null,Y0=J.current.get(o)||null,G0=r||Y0,E0=y.current?.path===o?y.current:null,I0=M.current.get(o)||null,t0=E0||I0,J0=O_||G0?.paneOverrideId||null,R0=t0?.payload?{...t0.payload}:null;if(C0.current)R0={...R0||{},diffMode:C0.current};else if(R0&&"diffMode"in R0)delete R0.diffMode;let Z_={path:o,mode:"edit",...G0?.content!==void 0?{content:G0.content}:{},...G0?.mtime!==void 0?{mtime:G0.mtime}:{},...R0?{transferState:R0}:{}},L_=(J0?Y_.get(J0):null)||Y_.resolve(Z_)||Y_.get("editor");if(!L_){a.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let $_=null,B_=!1,k_=(e0)=>{$_=e0,H.current=e0,e0.onDirtyChange?.((s0)=>{a0.setDirty(o,s0)}),e0.onSaveRequest?.(()=>{}),e0.onClose?.(()=>{U()});let t=a0.getViewState(o);if(t&&typeof e0.restoreViewState==="function")requestAnimationFrame(()=>e0.restoreViewState(t));if(typeof e0.onViewStateChange==="function")e0.onViewStateChange((s0)=>{a0.saveViewState(o,s0)});let W0=x.current;if($&&y4(W0)&&typeof e0?.moveHost==="function"&&W5({panePath:o,terminalTabPath:V}))D5({panePath:o,paneInstanceId:W0.paneInstanceId||"",paneWindowId:W0.paneWindowId||"",instance:e0,releaseSourceHost:()=>{if(A.current===e0)A.current=null;if(H.current===e0)H.current=null}});nF(e0,{path:o,hostMode:$?"popout":"main",transferState:R0}).catch((s0)=>{console.warn("[pane-attach] afterAttachToHost failed:",s0)}),requestAnimationFrame(()=>e0.focus?.())};return(async()=>{let e0=x.current,t=$&&y4(e0)&&e0.panePath===o?{panePath:o,paneInstanceId:e0.paneInstanceId||"",paneWindowId:e0.paneWindowId||""}:null,W0=T.current.get(o)||null,s0=W5({panePath:o,terminalTabPath:V})?t||W0:null,i0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:W.current.get(o)||null,P_=$?"popout":"main";if(t0&&s0&&i0)try{let z_=await IQ(i0,s0,a,{path:o,hostMode:P_,transferState:R0});if(!B_&&z_){if(k_(z_),r)O.current=null;if(Y0)J.current.delete(o);if(E0)y.current=null;if(I0)M.current.delete(o);W.current.delete(o),T.current.delete(o);return}}catch(z_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",z_)}if(B_)return;if(k_(L_.mount(a,Z_)),r)O.current=null;if(Y0)J.current.delete(o);if(E0)y.current=null;if(I0)M.current.delete(o);W.current.delete(o),T.current.delete(o)})(),()=>{if(B_=!0,H.current===$_)$_.dispose(),H.current=null}},[h0,O_,U,$,q]),g(()=>{let a=q,o=H.current;if(!a||typeof o?.setDiffMode!=="function")return;o.setDiffMode(T0)},[T0,q]);let v0=P(async(a)=>{let o=typeof q==="string"?q.trim():"",r=H.current;if(!o||!r?.setContent)return;if(typeof r.isDirty==="function"&&r.isDirty())return;if(!Ik(o,a))return;try{let Y0=await D(o,1e6,"edit"),G0=typeof Y0?.text==="string"?Y0.text:"",E0=typeof Y0?.mtime==="string"&&Y0.mtime.trim()?Y0.mtime.trim():new Date().toISOString();r.setContent(G0,E0)}catch(Y0){console.warn("[workspace_update] Failed to refresh active pane:",Y0)}},[D,q]);return g(()=>{let a=k.current;if(A.current)A.current.dispose(),A.current=null;if(!a||!i||!j0)return;if(!$&&c0?.panePath===V){a.innerHTML="";return}let o=Y_.getDockPanes()[0];if(!o){a.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let r=y.current?.path===V?y.current:null,Y0=M.current.get(V)||null,G0=r||Y0,E0=o.mount(a,{mode:"view",...G0?.payload?{transferState:G0.payload}:{}});if(A.current=E0,nF(E0,{path:V,hostMode:$?"popout":"main",transferState:G0?.payload||null}).catch((I0)=>{console.warn("[pane-attach] afterAttachToHost failed:",I0)}),r)y.current=null;if(Y0)M.current.delete(V);return requestAnimationFrame(()=>E0.focus?.()),()=>{if(A.current===E0)E0.dispose(),A.current=null}},[c0,j0,i,$,V]),{editorContainerRef:E,editorInstanceRef:H,dockContainerRef:k,dockInstanceRef:A,hasDockPanes:i,dockVisible:j0,setDockVisible:O0,toggleDock:f0,openTerminalTab:m0,openVncTab:l0,panePopoutTitle:F0,panePopoutHasMenuActions:U_,hidePanePopoutControls:V_,showEditorPaneContainer:X_,zenMode:D_,exitZenMode:k0,toggleZenMode:g0,refreshActiveEditorFromWorkspace:v0,detachedTabs:s,activeDetachedTab:h0,detachedDockPane:c0,buildPaneDetachTransfer:E_,registerDetachedPaneWindow:K_,reattachPane:b0,requestPanePopoutReattach:n0,canReattachPanePopout:$&&y4(x.current)&&!y8({panePath:j||"",terminalTabPath:V})}}function Rk(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function iF(_){let $=u(null),j=mF({onTabClosed:(Z)=>$.current?.(Z)}),G=dF({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Rk({removeFileRefRef:$,editorState:j,paneRuntime:G})}g_();var C8=1280,P8=820;function I8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function A6(_){return typeof _==="string"&&_.trim()?_.trim():null}function Sk(_){let $=A6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function gk(_){if(_.isMobile)return!1;let $=I8(_.windowWidth),j=I8(_.windowHeight);if($===null||j===null)return!1;if($<C8||j<P8)return!1;let G=I8(_.screenWidth),Z=I8(_.screenHeight);if(G!==null&&G<C8)return!1;if(Z!==null&&Z<P8)return!1;return!0}function uk(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function bk(_){if(!_||_.kind!=="custom")return null;let $=A6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=A6(j.path);if(!Sk(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:A6(_.chat_jid),path:G,label:A6(j.label),target:Z}}async function vk(_,$,j){await _5(_,$,j||void 0)}async function oF(_,$){let j=bk(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||vk,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:C8,height:P8};if(j.target==="popout"){if(!gk({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:uk(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${C8}×${P8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let L=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:L,opened:L,reason:L?void 0:"popout_failed",detail:L?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var Nj="piclaw:oobe:provider-missing:dismissed";function mk(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function ck(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function sF(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=mk(G),Y=X>0,q=ck(G),L=Y||q;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};if(L)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q}}var lk=$K();await HK();var{searchPosts:hk,deletePost:pk,getAgents:nk,getAgentThought:aF,setAgentThoughtVisibility:tF,getAgentStatus:rk,getAgentContext:dk,getAutoresearchStatus:ik,stopAutoresearch:ok,dismissAutoresearch:sk,getAgentModels:ak,getActiveChatAgents:tk,getChatBranches:ek,renameChatBranch:_M,pruneChatBranch:$M,purgeChatBranch:jM,restoreChatBranch:GM,getAgentQueueState:ZM,steerAgentQueueItem:XM,removeAgentQueueItem:YM,streamSidePrompt:qM,getWorkspaceFile:LM,getThread:KM,getTimeline:VM,sendAgentMessage:QM,forkChatBranch:FM,createRootChatSession:BM}=EK;function NM({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:q,branchLoaderSourceChatJid:L}=X0(()=>XK(_),[_]);g(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let K=bF({currentChatJid:j,branchLoaderMode:q}),[Q,V]=C(()=>V$(Nj,!1)),[F,B]=C(null),U=P((M0)=>{let p0=typeof M0==="string"?M0:"";if(!p0.trim())return;B({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:p0})},[]),{agentStatus:D,setAgentStatus:E,agentDraft:H,setAgentDraft:k,agentPlan:A,setAgentPlan:O,agentThought:y,setAgentThought:x,pendingRequest:z,setPendingRequest:J,currentTurnId:M,setCurrentTurnId:W,steerQueuedTurnId:T,setSteerQueuedTurnId:I,lastAgentEventRef:f,lastSilenceNoticeRef:S,isAgentRunningRef:v,draftBufferRef:c,thoughtBufferRef:h,previewResyncPendingRef:$0,previewResyncGenerationRef:b,pendingRequestRef:e,stalledPostIdRef:s,currentTurnIdRef:q0,steerQueuedTurnIdRef:Z0,thoughtExpandedRef:D0,draftExpandedRef:Q0}=ZX(),L0=iF({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:h4,vncTabPrefix:h1,getWorkspaceFile:LM}),N0=UV({timelineRef:K.timelineRef,viewStateRef:K.viewStateRef,followupQueueRowIdsRef:K.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,followupQueueItems:K.followupQueueItems,onIdentity:P((M0)=>{if(!M0)return;let{assistant_name:p0,assistant_avatar_url:b0}=M0;if(p0||b0)K.setAgents((S0)=>{let A0=S0.default||{id:"default"},n0=p0&&!A0.name,q_=b0&&!A0.avatar_url;if(!n0&&!q_)return S0;return{...S0,["default"]:{...A0,...n0?{name:p0}:{},...q_?{avatar_url:b0}:{}}}});let{user_name:d0,user_avatar_url:H_,user_avatar_background:E_}=M0;if(d0||H_||E_)K.setUserProfile((K_)=>{let S0=d0&&!K_.name,A0=H_&&!K_.avatar_url,n0=E_&&!K_.avatar_background;if(!S0&&!A0&&!n0)return K_;return{...K_,...S0?{name:d0}:{},...A0?{avatar_url:H_}:{},...n0?{avatar_background:E_}:{}}})},[K.setAgents,K.setUserProfile])}),H0=$V({environment:{isRenameBranchFormOpen:K.isRenameBranchFormOpen,renameBranchNameInputRef:K.renameBranchNameInputRef,appShellRef:K.appShellRef,setIsWebAppMode:K.setIsWebAppMode,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,btwSession:K.btwSession,agents:K.agents,agentsRef:K.agentsRef,currentChatJid:j,activeChatJidRef:K.activeChatJidRef,userProfile:K.userProfile,userProfileRef:K.userProfileRef,brandingRef:K.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:K.setIntentToast,intentToastTimerRef:K.intentToastTimerRef,editorOpen:L0.editorState.editorOpen,openEditor:L0.editorState.openEditor,resolvePane:(M0)=>Y_.resolve(M0),tabStripActiveId:L0.editorState.tabStripActiveId,setFileRefs:K.setFileRefs,setMessageRefs:K.setMessageRefs,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen,setCurrentHashtag:K.setCurrentHashtag,setSearchQuery:K.setSearchQuery,setSearchOpen:K.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:KM,setPosts:N0.setPosts},agentActivity:{lastActivityTtlMs:HX,lastActivityTimerRef:K.lastActivityTimerRef,lastActivityTokenRef:K.lastActivityTokenRef,lastAgentEventRef:f,lastSilenceNoticeRef:S,isAgentRunningRef:v,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:E,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:e,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:q0,steerQueuedTurnIdRef:Z0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,thoughtExpandedRef:D0,draftExpandedRef:Q0,setCurrentTurnId:W,setSteerQueuedTurnId:I,currentTurnIdRefForPanel:q0,setAgentThoughtVisibility:tF,getAgentThought:aF,setAgentThought:x,setAgentDraft:k},chatPaneRuntime:{isAgentTurnActive:K.isAgentTurnActive,steerQueuedTurnId:T,currentTurnId:M,steerQueuedTurnIdRef:Z0,setSteerQueuedTurnId:I,agentStatus:D,agentDraft:H,agentPlan:A,agentThought:y,pendingRequest:z,pendingRequestRef:e,followupQueueItems:K.followupQueueItems,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,contextUsage:K.contextUsage,isAgentRunningRef:v,wasAgentActiveRef:K.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:h,lastAgentEventRef:f,lastSilenceNoticeRef:S,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:q0,thoughtExpandedRef:D0,draftExpandedRef:Q0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:E,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:J,setCurrentTurnId:W,setFollowupQueueItems:K.setFollowupQueueItems,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setContextUsage:K.setContextUsage,lastNotifiedIdRef:K.lastNotifiedIdRef,agentsRef:K.agentsRef,notify:K.notify,shouldNotifyLocallyForChat:K.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:v,lastSilenceNoticeRef:S,lastAgentEventRef:f,currentTurnIdRef:q0,thoughtExpandedRef:D0,draftExpandedRef:Q0,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:e,lastAgentResponseRef:K.lastAgentResponseRef,agentStatusRef:K.agentStatusRef,stalledPostIdRef:s,scrollToBottomRef:N0.scrollToBottomRef,setCurrentTurnId:W,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:J,setAgentStatus:E,setPosts:N0.setPosts,dedupePosts:$5},viewState:{viewStateRef:K.viewStateRef,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen},removeFileRefRef:L0.removeFileRefRef}),y0=FX({appShellRef:K.appShellRef,sidebarWidthRef:K.sidebarWidthRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef}),{chatRefreshLifecycle:i,timelineViewActions:j0,isComposeBoxAgentActive:O0,followupActions:f0,sidepanelActions:m0,branchPaneActions:l0}=wF({routeState:{currentChatJid:j,currentRootChatJid:K.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:q,branchLoaderSourceChatJid:L,isWebAppMode:K.isWebAppMode},searchState:{currentHashtag:K.currentHashtag,setCurrentHashtag:K.setCurrentHashtag,searchQuery:K.searchQuery,setSearchQuery:K.setSearchQuery,searchOpen:K.searchOpen,setSearchOpen:K.setSearchOpen,searchScope:K.searchScope,setSearchScope:K.setSearchScope},shellState:{activeChatAgents:K.activeChatAgents,currentChatBranches:K.currentChatBranches,currentBranchRecord:K.currentBranchRecord,contextUsage:K.contextUsage,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,connectionStatus:K.connectionStatus,notificationsEnabled:K.notificationsEnabled,notificationPermission:K.notificationPermission,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,userProfile:K.userProfile,agents:K.agents,removingPostIds:K.removingPostIds,btwSession:K.btwSession},timeline:N0,interaction:H0,paneRuntime:L0.paneRuntime,refs:{activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,agentStatusRef:K.agentStatusRef,pendingRequestRef:e,thoughtBufferRef:h,draftBufferRef:c,previewResyncPendingRef:$0,previewResyncGenerationRef:b,isAgentRunningRef:v,currentTurnIdRef:q0,silentRecoveryRef:K.silentRecoveryRef,lastAgentEventRef:f,lastSilenceNoticeRef:S,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,hasConnectedOnceRef:K.hasConnectedOnceRef,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,agentsRef:K.agentsRef,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,lastAgentResponseRef:K.lastAgentResponseRef,thoughtExpandedRef:D0,draftExpandedRef:Q0,steerQueuedTurnIdRef:Z0,btwAbortRef:K.btwAbortRef,renameBranchInFlightRef:K.renameBranchInFlightRef,renameBranchLockUntilRef:K.renameBranchLockUntilRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef},setters:{setFollowupQueueItems:K.setFollowupQueueItems,setContextUsage:K.setContextUsage,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,setAgentStatus:E,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:J,setConnectionStatus:K.setConnectionStatus,setAgents:K.setAgents,setUserProfile:K.setUserProfile,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,setHasMore:N0.setHasMore,setFloatingWidget:K.setFloatingWidget,setSteerQueuedTurnId:I,setRemovingPostIds:K.setRemovingPostIds,setBtwSession:K.setBtwSession,setWorkspaceOpen:K.setWorkspaceOpen,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch},services:{searchPosts:hk,deletePost:pk,getAgentQueueState:ZM,getAgentContext:dk,getAutoresearchStatus:ik,getAgentStatus:rk,getAgents:nk,getAgentModels:ak,getActiveChatAgents:tk,getChatBranches:ek,getTimeline:VM,stopAutoresearch:ok,dismissAutoresearch:sk,streamSidePrompt:qM,sendAgentMessage:QM,renameChatBranch:_M,pruneChatBranch:$M,purgeChatBranch:jM,restoreChatBranch:GM,forkChatBranch:FM,createRootChatSession:BM,steerAgentQueueItem:XM,removeAgentQueueItem:YM,getAgentThought:aF,setAgentThoughtVisibility:tF,silenceRefreshMs:UX,silenceWarningMs:BX,silenceFinalizeMs:NX,isCompactionStatus:U$,currentAppAssetVersion:lk,tabStoreHasUnsaved:()=>a0.hasUnsaved(),agentStatus:D,isAgentTurnActive:K.isAgentTurnActive,openEditor:L0.editorState.openEditor,activateTab:L0.editorState.handleTabActivate,tabStripActiveId:L0.editorState.tabStripActiveId,terminalTabPath:h4,resolveTab:(M0)=>a0.get(M0),closeTab:L0.editorState.handleTabClose,editorOpen:L0.editorState.editorOpen},helpers:{getFormLock:jK,readStoredNumber:V4}});g(()=>{return MF({timelineRef:K.timelineRef,activeChatAgents:K.activeChatAgents,currentChatJid:j,onSwitch:(M0)=>l0.handleBranchPickerChange(M0),isIOSDevice:G6,isLikelySafari:x8})},[K.timelineRef,K.activeChatAgents,j,l0.handleBranchPickerChange]);let G_=X0(()=>sF({panePopoutMode:Z,modelsLoaded:K.hasLoadedAgentModels,modelPayload:K.agentModelsPayload,providerMissingDismissed:Q}),[Z,K.hasLoadedAgentModels,K.agentModelsPayload,Q]),h0=P(()=>{PY()},[]),c0=P(()=>{V(!0),Q_(Nj,"true")},[]);return g(()=>{if(!Z||typeof document>"u")return;document.title=LK(Y,L0.paneRuntime.activePaneTab,X)},[L0.paneRuntime.activePaneTab,Y,Z,X]),g(()=>{if(typeof window>"u")return;let M0=(p0)=>{oF(p0,{currentChatJid:j,openEditor:L0.editorState.openEditor,popOutPane:l0.handlePopOutPane,showIntentToast:H0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",M0),()=>{window.removeEventListener("piclaw-extension-ui:request",M0)}},[l0.handlePopOutPane,j,H0.composeReferenceActions.showIntentToast,L0.editorState.openEditor]),tL(WK({routeState:{branchLoaderMode:q,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:L0.paneRuntime,splitters:y0,orchestration:{branchPaneActions:l0,timelineViewActions:j0,sidepanelActions:m0,followupActions:f0,chatRefreshLifecycle:i,isComposeBoxAgentActive:O0},interaction:H0,timeline:N0,surface:{...K,oobePanelState:G_,composePrefillRequest:F,requestComposePrefill:U,handleOobeSetupProvider:h0,handleOobeShowModelPicker:h0,handleOobeOpenWorkspace:h0,handleDismissProviderMissingOobe:c0},editorState:L0.editorState,agentState:{agentStatus:D,agentDraft:H,agentPlan:A,agentThought:y,pendingRequest:z,currentTurnId:M,steerQueuedTurnId:T,setPendingRequest:J,pendingRequestRef:e,isCompactionStatus:U$},helpers:{formatBranchPickerLabel:c2,isIOSDevice:G6,terminalTabPath:h4}}))}function UM(){let{locationParams:_,navigate:$}=RY();return N`<${NM} locationParams=${_} navigate=${$} />`}var f8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(f8){if(q$(null,f8),f8.replaceChildren(),q$(N`<${UM} />`,f8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=880FC7DC857B50CC64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
