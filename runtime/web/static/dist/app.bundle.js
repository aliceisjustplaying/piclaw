var FN=Object.defineProperty;var NN=(_)=>_;function BN(_,$){this[_]=NN.bind(null,$)}var X1=(_,$)=>{for(var j in $)FN(_,j,{get:$[j],enumerable:!0,configurable:!0,set:BN.bind($,j)})};var J_=(_,$)=>()=>(_&&($=_(_=0)),$);var vj={};X1(vj,{useState:()=>C,useRef:()=>u,useReducer:()=>gj,useMemo:()=>q0,useLayoutEffect:()=>R4,useImperativeHandle:()=>AN,useErrorBoundary:()=>yN,useEffect:()=>g,useDebugValue:()=>MN,useContext:()=>kN,useCallback:()=>P,render:()=>G$,html:()=>B,h:()=>d8,createContext:()=>JN,Component:()=>T5});function j$(_,$){for(var j in $)_[j]=$[j];return _}function r8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function d8(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?m6.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return S6(_,Y,G,Z,null)}function S6(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++kj:Z,__i:-1,__u:0};return Z==null&&w_.vnode!=null&&w_.vnode(X),X}function l6(_){return _.children}function T5(_,$){this.props=_,this.context=$}function I4(_,$){if($==null)return _.__?I4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?I4(_):null}function EN(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=j$({},$);X.__v=$.__v+1,w_.vnode&&w_.vnode(X),o8(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?I4($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,Pj(G,X,Z),$.__e=$.__=null,X.__e!=j&&xj(X)}}function xj(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),xj(_)}function l8(_){(!_.__d&&(_.__d=!0)&&A$.push(_)&&!v6.__r++||Fj!=w_.debounceRendering)&&((Fj=w_.debounceRendering)||Mj)(v6)}function v6(){try{for(var _,$=1;A$.length;)A$.length>$&&A$.sort(yj),_=A$.shift(),$=A$.length,EN(_)}finally{A$.length=v6.__r=0}}function Ij(_,$,j,G,Z,X,Y,q,K,L,Q){var V,F,N,U,z,E,H,k=G&&G.__k||b6,A=$.length;for(K=DN(j,$,k,K,A),V=0;V<A;V++)(N=j.__k[V])!=null&&(F=N.__i!=-1&&k[N.__i]||u6,N.__i=V,E=o8(_,N,F,Z,X,Y,q,K,L,Q),U=N.__e,N.ref&&F.ref!=N.ref&&(F.ref&&i8(F.ref,null,N),Q.push(N.ref,N.__c||U,N)),z==null&&U!=null&&(z=U),(H=!!(4&N.__u))||F.__k===N.__k?(K=Cj(N,K,_,H),H&&F.__e&&(F.__e=null)):typeof N.type=="function"&&E!==void 0?K=E:U&&(K=U.nextSibling),N.__u&=-7);return j.__e=z,K}function DN(_,$,j,G,Z){var X,Y,q,K,L,Q=j.length,V=Q,F=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=S6(null,Y,null,null,null):c6(Y)?Y=_.__k[X]=S6(l6,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=S6(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,K=X+F,Y.__=_,Y.__b=_.__b+1,q=null,(L=Y.__i=zN(Y,j,K,V))!=-1&&(V--,(q=j[L])&&(q.__u|=2)),q==null||q.__v==null?(L==-1&&(Z>Q?F--:Z<Q&&F++),typeof Y.type!="function"&&(Y.__u|=4)):L!=K&&(L==K-1?F--:L==K+1?F++:(L>K?F--:F++,Y.__u|=4))):_.__k[X]=null;if(V)for(X=0;X<Q;X++)(q=j[X])!=null&&(2&q.__u)==0&&(q.__e==G&&(G=I4(q)),fj(q,q));return G}function Cj(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=Cj(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=I4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function zN(_,$,j,G){var Z,X,Y,q=_.key,K=_.type,L=$[j],Q=L!=null&&(2&L.__u)==0;if(L===null&&q==null||Q&&q==L.key&&K==L.type)return j;if(G>(Q?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((L=$[Y=Z>=0?Z--:X++])!=null&&(2&L.__u)==0&&q==L.key&&K==L.type)return Y}return-1}function Nj(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||HN.test($)?j:j+"px"}function R6(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||Nj(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||Nj(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(wj,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[w5]=G[w5]:(j[w5]=n8,_.addEventListener($,X?c8:m8,X)):_.removeEventListener($,X?c8:m8,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function Bj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[f6]==null)$[f6]=n8++;else if($[f6]<j[w5])return;return j(w_.event?w_.event($):$)}}}function o8(_,$,j,G,Z,X,Y,q,K,L){var Q,V,F,N,U,z,E,H,k,A,O,w,x,W,J,M=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),X=[q=$.__e=j.__e]),(Q=w_.__b)&&Q($);_:if(typeof M=="function")try{if(H=$.props,k=M.prototype&&M.prototype.render,A=(Q=M.contextType)&&G[Q.__c],O=Q?A?A.props.value:Q.__:G,j.__c?E=(V=$.__c=j.__c).__=V.__E:(k?$.__c=V=new M(H,O):($.__c=V=new T5(H,O),V.constructor=M,V.render=WN),A&&A.sub(V),V.state||(V.state={}),V.__n=G,F=V.__d=!0,V.__h=[],V._sb=[]),k&&V.__s==null&&(V.__s=V.state),k&&M.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=j$({},V.__s)),j$(V.__s,M.getDerivedStateFromProps(H,V.__s))),N=V.props,U=V.state,V.__v=$,F)k&&M.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),k&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(k&&M.getDerivedStateFromProps==null&&H!==N&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(H,O),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(H,V.__s,O)===!1){$.__v!=j.__v&&(V.props=H,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(D){D&&(D.__=$)}),b6.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(H,V.__s,O),k&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(N,U,z)})}if(V.context=O,V.props=H,V.__P=_,V.__e=!1,w=w_.__r,x=0,k)V.state=V.__s,V.__d=!1,w&&w($),Q=V.render(V.props,V.state,V.context),b6.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,w&&w($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++x<25);V.state=V.__s,V.getChildContext!=null&&(G=j$(j$({},G),V.getChildContext())),k&&!F&&V.getSnapshotBeforeUpdate!=null&&(z=V.getSnapshotBeforeUpdate(N,U)),W=Q!=null&&Q.type===l6&&Q.key==null?Rj(Q.props.children):Q,q=Ij(_,c6(W)?W:[W],$,j,G,Z,X,Y,q,K,L),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),E&&(V.__E=V.__=null)}catch(D){if($.__v=null,K||X!=null)if(D.then){for($.__u|=K?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;X[X.indexOf(q)]=null,$.__e=q}else{for(J=X.length;J--;)r8(X[J]);h8($)}else $.__e=j.__e,$.__k=j.__k,D.then||h8($);w_.__e(D,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=ON(j.__e,$,j,G,Z,X,Y,K,L);return(Q=w_.diffed)&&Q($),128&$.__u?void 0:q}function h8(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(h8))}function Pj(_,$,j){for(var G=0;G<j.length;G++)i8(j[G],j[++G],j[++G]);w_.__c&&w_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){w_.__e(X,Z.__v)}})}function Rj(_){return typeof _!="object"||_==null||_.__b>0?_:c6(_)?_.map(Rj):j$({},_)}function ON(_,$,j,G,Z,X,Y,q,K){var L,Q,V,F,N,U,z,E=j.props||u6,H=$.props,k=$.type;if(k=="svg"?Z="http://www.w3.org/2000/svg":k=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(L=0;L<X.length;L++)if((N=X[L])&&"setAttribute"in N==!!k&&(k?N.localName==k:N.nodeType==3)){_=N,X[L]=null;break}}if(_==null){if(k==null)return document.createTextNode(H);_=document.createElementNS(Z,k,H.is&&H),q&&(w_.__m&&w_.__m($,X),q=!1),X=null}if(k==null)E===H||q&&_.data==H||(_.data=H);else{if(X=X&&m6.call(_.childNodes),!q&&X!=null)for(E={},L=0;L<_.attributes.length;L++)E[(N=_.attributes[L]).name]=N.value;for(L in E)N=E[L],L=="dangerouslySetInnerHTML"?V=N:L=="children"||(L in H)||L=="value"&&("defaultValue"in H)||L=="checked"&&("defaultChecked"in H)||R6(_,L,null,N,Z);for(L in H)N=H[L],L=="children"?F=N:L=="dangerouslySetInnerHTML"?Q=N:L=="value"?U=N:L=="checked"?z=N:q&&typeof N!="function"||E[L]===N||R6(_,L,N,E[L],Z);if(Q)q||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),Ij($.type=="template"?_.content:_,c6(F)?F:[F],$,j,G,k=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&I4(j,0),q,K),X!=null)for(L=X.length;L--;)r8(X[L]);q||(L="value",k=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[L]||k=="progress"&&!U||k=="option"&&U!=E[L])&&R6(_,L,U,E[L],Z),L="checked",z!=null&&z!=_[L]&&R6(_,L,z,E[L],Z))}return _}function i8(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){w_.__e(Z,j)}}function fj(_,$,j){var G,Z;if(w_.unmount&&w_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||i8(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){w_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&fj(G[Z],$,j||typeof _.type!="function");j||r8(_.__e),_.__c=_.__=_.__e=void 0}function WN(_,$,j){return this.constructor(_,j)}function G$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),w_.__&&w_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],o8($,_=(!G&&j||$).__k=d8(l6,null,[_]),Z||u6,u6,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?m6.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),Pj(X,_,Y)}function JN(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,l8(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+Tj++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function P4(_,$){I_.__h&&I_.__h(y_,_,C4||$),C4=0;var j=y_.__H||(y_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return C4=1,gj(uj,_)}function gj(_,$,j){var G=P4(k$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):uj(void 0,$),function(q){var K=G.__N?G.__N[0]:G.__[0],L=G.t(K,q);K!==L&&(G.__N=[L,G.__[1]],G.__c.setState({}))}],G.__c=y_,!y_.__f)){var Z=function(q,K,L){if(!G.__c.__H)return!0;var Q=G.__c.__H.__.filter(function(F){return F.__c});if(Q.every(function(F){return!F.__N}))return!X||X.call(this,q,K,L);var V=G.__c.props!==q;return Q.some(function(F){if(F.__N){var N=F.__[0];F.__=F.__N,F.__N=void 0,N!==F.__[0]&&(V=!0)}}),X&&X.call(this,q,K,L)||V};y_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=y_;y_.componentWillUpdate=function(q,K,L){if(this.__e){var Q=X;X=void 0,Z(q,K,L),X=Q}Y&&Y.call(this,q,K,L)},y_.shouldComponentUpdate=Z}return G.__N||G.__}function g(_,$){var j=P4(k$++,3);!I_.__s&&s8(j.__H,$)&&(j.__=_,j.u=$,y_.__H.__h.push(j))}function R4(_,$){var j=P4(k$++,4);!I_.__s&&s8(j.__H,$)&&(j.__=_,j.u=$,y_.__h.push(j))}function u(_){return C4=5,q0(function(){return{current:_}},[])}function AN(_,$,j){C4=6,R4(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function q0(_,$){var j=P4(k$++,7);return s8(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return C4=8,q0(function(){return _},$)}function kN(_){var $=y_.context[_.__c],j=P4(k$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(y_)),$.props.value):_.__}function MN(_,$){I_.useDebugValue&&I_.useDebugValue($?$(_):_)}function yN(_){var $=P4(k$++,10),j=C();return $.__=_,y_.componentDidCatch||(y_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function wN(){for(var _;_=Sj.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(g6),$.__h.some(p8),$.__h=[]}catch(j){$.__h=[],I_.__e(j,_.__v)}}}function TN(_){var $,j=function(){clearTimeout(G),Jj&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);Jj&&($=requestAnimationFrame(j))}function g6(_){var $=y_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),y_=$}function p8(_){var $=y_;_.__c=_.__(),y_=$}function s8(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function uj(_,$){return typeof $=="function"?$(_):$}function xN(_){var $=Aj.get(this);return $||($=new Map,Aj.set(this,$)),($=bj(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",q="",K=[0],L=function(F){X===1&&(F||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,F,Y):X===3&&(F||Y)?(K.push(3,F,Y),X=2):X===2&&Y==="..."&&F?K.push(4,F,0):X===2&&Y&&!F?K.push(5,0,!0,Y):X>=5&&((Y||!F&&X===5)&&(K.push(X,0,Y,Z),X=6),F&&(K.push(X,F,0,Z),X=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(X===1&&L(),L(Q));for(var V=0;V<j[Q].length;V++)G=j[Q][V],X===1?G==="<"?(L(),K=[K],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:q?G===q?q="":Y+=G:G==='"'||G==="'"?q=G:G===">"?(L(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[Q][V+1]===">")?(L(),X===3&&(K=K[0]),X=K,(K=K[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(L(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,K=K[0])}return L(),K}(_)),$),arguments,[])).length>1?$:$[0]}var m6,w_,kj,UN,A$,Fj,Mj,yj,b8,f6,w5,wj,n8,m8,c8,Tj,u6,b6,HN,c6,k$,y_,v8,Uj,C4=0,Sj,I_,Hj,Ej,Dj,zj,Oj,Wj,Jj,bj=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],q=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=q:Y===4?G[1]=Object.assign(G[1]||{},q):Y===5?(G[1]=G[1]||{})[$[++X]]=q:Y===6?G[1][$[++X]]+=q+"":Y?(Z=_.apply(q,bj(_,q,j,["",null])),G.push(Z),q[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(q)}return G},Aj,B;var w0=J_(()=>{u6={},b6=[],HN=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,c6=Array.isArray;m6=b6.slice,w_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(q){_=q}throw _}},kj=0,UN=function(_){return _!=null&&_.constructor===void 0},T5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j$({},this.state),typeof _=="function"&&(_=_(j$({},j),this.props)),_&&j$(j,_),_!=null&&this.__v&&($&&this._sb.push($),l8(this))},T5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),l8(this))},T5.prototype.render=l6,A$=[],Mj=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,yj=function(_,$){return _.__v.__b-$.__v.__b},v6.__r=0,b8=Math.random().toString(8),f6="__d"+b8,w5="__a"+b8,wj=/(PointerCapture)$|Capture$/i,n8=0,m8=Bj(!1),c8=Bj(!0),Tj=0;Sj=[],I_=w_,Hj=I_.__b,Ej=I_.__r,Dj=I_.diffed,zj=I_.__c,Oj=I_.unmount,Wj=I_.__;I_.__b=function(_){y_=null,Hj&&Hj(_)},I_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),Wj&&Wj(_,$)},I_.__r=function(_){Ej&&Ej(_),k$=0;var $=(y_=_.__c).__H;$&&(v8===y_?($.__h=[],y_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(g6),$.__h.some(p8),$.__h=[],k$=0)),v8=y_},I_.diffed=function(_){Dj&&Dj(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(Sj.push($)!==1&&Uj===I_.requestAnimationFrame||((Uj=I_.requestAnimationFrame)||TN)(wN)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),v8=y_=null},I_.__c=function(_,$){$.some(function(j){try{j.__h.some(g6),j.__h=j.__h.filter(function(G){return!G.__||p8(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],I_.__e(G,j.__v)}}),zj&&zj(_,$)},I_.unmount=function(_){Oj&&Oj(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{g6(G)}catch(Z){$=Z}}),j.__H=void 0,$&&I_.__e($,j.__v))};Jj=typeof requestAnimationFrame=="function";Aj=new Map;B=xN.bind(d8)});function H1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function L_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function Y$(_,$=!1){let j=H1(_);if(j===null)return $;return j==="true"}function j4(_,$=null){let j=H1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function j2(_){let $=H1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function f3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function XZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function mU(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function cU(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=mU(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),q=parseInt(Z[3],10);if(![X,Y,q].every((L)=>Number.isFinite(L)))return null;let K=`#${[X,Y,q].map((L)=>L.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:q,hex:K}}function G4(_){return XZ(_)||cU(_)}function S3(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function G2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function lU(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function hU(_){return lU(_)>0.4?"#000000":"#ffffff"}function YZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function g3(_){return jZ[_]||jZ.default}function pU(_){return _.mode==="auto"?YZ():_.mode}function qZ(_,$){let j=g3(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||K$}function q$(_,$,j){let G=G4(_);if(!G)return _;return S3(G,$,j)}function KZ(_,$,j){let G=G4($);if(!G)return _;let X=XZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:q$(_.bgPrimary,G,0.08),bgSecondary:q$(_.bgSecondary,G,0.12),bgHover:q$(_.bgHover,G,0.16),textPrimary:q$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:q$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:q$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?S3(G,X,0.18):G.hex,warning:q$(_.warning||K$.warning,G,0.14),danger:q$(_.danger,G,0.16),success:q$(_.success,G,0.16)}}function nU(_,$){let j=G4(_?.warning);if(j)return j.hex;let G=G4($==="dark"?Y2.warning:K$.warning)||G4(K$.warning),Z=G4(_?.accent);if(G&&Z)return S3(G,Z,$==="dark"?0.18:0.14);return $==="dark"?Y2.warning:K$.warning}function rU(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=G4(G),X=Z?G2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?G2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=Z?G2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Z?hU(Z):$==="dark"?"#000000":"#ffffff",L=Z?G2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",Q=nU(_,$),V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":L,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":K,"--warning-color":Q,"--danger-color":_.danger||K$.danger,"--success-color":_.success||K$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([F,N])=>{if(N)j.style.setProperty(F,N)})}function dU(){if(typeof document>"u")return;let _=document.documentElement;vU.forEach(($)=>_.style.removeProperty($))}function n4(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function GZ(_){let $=f3(Z4?.theme||"default"),j=Z4?.tint?String(Z4.tint).trim():null,G=qZ($,_);if($==="default"&&j)G=KZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?Y2.bgPrimary:K$.bgPrimary}function oU(_,$){if(typeof document>"u")return;let j=n4("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=n4("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",GZ("light"));let Z=n4("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",GZ("dark"));let X=n4("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=n4("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=n4("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function iU(){if(typeof window>"u")return;let _={...Z4,mode:ZZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function sU(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function u3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=f3(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=g3(j),X=pU(Z),Y=qZ(j,X);Z4={theme:j,tint:G},ZZ=X;let q=document.documentElement;q.dataset.theme=X,q.dataset.colorTheme=j,q.dataset.tint=G?String(G):"",q.style.colorScheme=X;let K=Y;if(j==="default"&&G)K=KZ(Y,G,X);if(j==="default"&&!G)dU();else rU(K,X);if(oU(K.bgPrimary,X),iU(),$.persist!==!1)if(L_(R3,j),G)L_(X2,G);else L_(X2,"")}function Z2(){if(g3(Z4.theme).mode!=="auto")return;u3(Z4,{persist:!1})}function LZ(){if(typeof window>"u")return()=>{};let _=f3(H1(R3)||"default"),$=(()=>{let j=H1(X2);return j?j.trim():null})();if(u3({theme:_,tint:$},{persist:!1}),window.matchMedia&&!P3){let j=window.matchMedia("(prefers-color-scheme: dark)");if(j.addEventListener)j.addEventListener("change",Z2);else if(j.addListener)j.addListener(Z2);return P3=!0,()=>{if(j.removeEventListener)j.removeEventListener("change",Z2);else if(j.removeListener)j.removeListener(Z2);P3=!1}}return()=>{}}function r4(_){if(!_||typeof _!=="object")return;let $=sU(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)u3({theme:G||"default",tint:Z},{persist:!1});L_(R3,G||"default"),L_(X2,Z||"")}function VZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return YZ()}var R3="piclaw_theme",X2="piclaw_tint",K$,Y2,jZ,vU,Z4,ZZ="light",P3=!1;var g5=J_(()=>{K$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Y2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},jZ={default:{label:"Default",mode:"auto",light:K$,dark:Y2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},vU=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],Z4={theme:"default",tint:null}});function zZ(_=typeof window<"u"?window:null){return _||null}function K2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function c5(_,$){return`${_}:${$}`}function OZ(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function WZ(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function Y4(_){if(!_||typeof _!=="object")return null;return{..._}}function L4(_){if(!_)return null;return q4.find(($)=>$.id===_)||null}function v3(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function JZ(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=L4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function DZ(_,$,j){let G=K4.get(c5(_,$));if(G&&L4(G)?.status==="active")m5(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=OZ(_),X={id:Z,type:_,chatJid:$,startedAt:K2(),detail:Y4(j),phases:[],status:"active"};return q4.push(X),WZ(q4,100),K4.set(c5(_,$),Z),v3(Z,"start"),Z}function m5(_,$,j,G,Z){let X=L4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:K2(),detail:Y4(G)}),v3(X.id,j);if(X.status=$,X.completedAt=K2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=c5(X.type,X.chatJid);if(K4.get(Y)===X.id)K4.delete(Y);JZ(X.id)}function EH(_=zZ()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=L2;return L2}function d4(_=zZ()){return EH(_)}function AZ(_,$,j){return d4().ensureTrace(_,$,j)}function V2(_,$){return d4().getActiveTraceId(_,$)}function _1(_,$,j){d4().markTrace(_,$,j)}function Q2(_,$,j="settled",G){let Z=L4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return m5(_,"completed",j,G),!0}function kZ(_,$,j="failed",G){d4().failTrace(_,$,j,G)}function MZ(_,$="cancelled",j){d4().cancelTrace(_,$,j)}function m3(_){return d4().recordRequest(_)}var q4,v5,K4,L2;var l5=J_(()=>{q4=[],v5=[],K4=new Map;L2={startTrace(_,$,j){return DZ(_,$,j)},ensureTrace(_,$,j){let G=K4.get(c5(_,$));if(G&&L4(G)?.status==="active")return G;return DZ(_,$,j)},getActiveTraceId(_,$){let j=K4.get(c5(_,$));return j&&L4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=L4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:K2(),detail:Y4(j)}),v3(G.id,$)},completeTrace(_,$="settled",j){m5(_,"completed",$,j)},failTrace(_,$,j="failed",G){m5(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){m5(_,"cancelled",$,j)},recordRequest(_){let $=OZ("req");return v5.push({..._,id:$,detail:Y4(_.detail)}),WZ(v5,300),$},getTraces(){return q4.map((_)=>({..._,detail:Y4(_.detail),phases:_.phases.map(($)=>({...$,detail:Y4($.detail)}))}))},getRequests(){return v5.map((_)=>({..._,detail:Y4(_.detail)}))},clear(){q4.forEach((_)=>JZ(_.id)),q4.splice(0,q4.length),v5.splice(0,v5.length),K4.clear()},printSummary(){let _={traces:L2.getTraces(),requests:L2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});var o5={};X1(o5,{uploadWorkspaceFile:()=>B2,uploadMedia:()=>s3,updateWorkspaceFile:()=>oH,submitAdaptiveCardAction:()=>a3,streamSidePrompt:()=>pH,stopAutoresearch:()=>uH,steerAgentQueueItem:()=>cH,setWorkspaceVisibility:()=>r5,setAgentThoughtVisibility:()=>rH,sendPeerAgentMessage:()=>PH,sendAgentMessage:()=>M1,searchPosts:()=>zH,saveWorkspaceSettings:()=>n3,saveWebPushSubscription:()=>o3,saveQuickActionsSettings:()=>p3,saveEnvironmentOverride:()=>F2,restoreChatBranch:()=>CH,respondToAgentRequest:()=>o4,reorderAgentQueueItem:()=>lH,renameWorkspaceFile:()=>q7,renameChatJid:()=>IH,renameChatBranch:()=>wH,removeAgentQueueItem:()=>mH,reindexWorkspace:()=>G7,purgeChatBranch:()=>xH,pruneChatBranch:()=>TH,moveWorkspaceEntry:()=>K7,getWorkspaceTree:()=>n5,getWorkspaceRawUrl:()=>d5,getWorkspaceIndexStatus:()=>j7,getWorkspaceFileStat:()=>X7,getWorkspaceFileDownloadUrl:()=>U2,getWorkspaceFile:()=>Z7,getWorkspaceDownloadUrl:()=>H2,getWorkspaceBranch:()=>$7,getWebPushPublicKey:()=>d3,getTimeline:()=>T$,getThumbnailUrl:()=>e3,getThread:()=>OH,getSystemMetrics:()=>h3,getQuickActionsSettings:()=>p5,getPostsByHashtag:()=>l3,getMediaUrl:()=>f1,getMediaText:()=>dH,getMediaInfo:()=>N2,getMediaBlob:()=>_7,getEnvironmentSettings:()=>r3,getChatBranches:()=>MH,getAutoresearchStatus:()=>gH,getAgents:()=>RH,getAgentThought:()=>nH,getAgentStatus:()=>fH,getAgentQueueState:()=>vH,getAgentModels:()=>V4,getAgentContext:()=>SH,getAgentCommands:()=>h5,getActiveChatAgents:()=>kH,forkChatBranch:()=>yH,dismissAutoresearch:()=>bH,deleteWorkspaceFile:()=>L7,deleteWebPushSubscription:()=>i3,deletePost:()=>AH,createWorkspaceFile:()=>Y7,createReply:()=>JH,createPost:()=>WH,completeInstanceOobe:()=>hH,attachWorkspaceFile:()=>iH,addToWhitelist:()=>t3,SSEClient:()=>E2});async function o0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(g_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw m3({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(m3({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function yZ(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function DH(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;Z+=G.decode(Y,{stream:!0});let K=Z.split(`

`);Z=K.pop()||"";for(let L of K){let Q=yZ(L);if(Q)$(Q.event,Q.data)}}Z+=G.decode();let X=yZ(Z);if(X)$(X.event,X.data)}async function T$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return o0(G)}async function l3(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return o0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function zH(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let q=G?`&chat_jid=${encodeURIComponent(G)}`:"",K=Z?`&scope=${encodeURIComponent(Z)}`:"",L=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",Q=Y?.images?"&images=1":"",V=Y?.attachments?"&attachments=1":"";return o0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${L}${Q}${V}`)}async function OH(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return o0(`/thread/${_}${j}`)}async function h3(){return o0("/agent/system-metrics")}async function WH(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return o0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function JH(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return o0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function AH(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return o0(Z,{method:"DELETE"})}async function M1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",q={content:$,thread_id:j,media_ids:G};if(Z==="auto"||Z==="queue"||Z==="steer")q.mode=Z;return o0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(q)})}async function h5(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return o0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function p5(){return o0("/agent/settings/quick-actions")}async function p3(_){return o0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function n3(_){return o0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function r3(){return o0("/agent/settings/environment")}async function F2(_){return o0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function kH(){return o0("/agent/active-chats")}async function MH(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return o0(`/agent/branches${G}`)}async function yH(_,$={}){return o0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function wH(_,$={}){return o0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function TH(_){return o0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function xH(_){return o0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function IH(_,$){return o0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function CH(_,$={}){return o0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function PH(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return o0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function d3(){return o0("/agent/push/vapid-public-key")}async function o3(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return o0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function i3(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return o0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function RH(){return o0("/agent/roster")}async function fH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o0(`/agent/status${$}`)}async function SH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o0(`/agent/context${$}`)}async function gH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o0(`/agent/autoresearch/status${$}`)}async function uH(_=null,$={}){return o0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function bH(_=null){return o0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function vH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o0(`/agent/queue-state${$}`)}async function mH(_,$=null){let j=await fetch(g_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function cH(_,$=null){let j=await fetch(g_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function lH(_,$,j=null){let G=await fetch(g_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function V4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o0(`/agent/models${$}`)}async function hH(_="provider-ready"){return o0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function s3(_){let $=new FormData;$.append("file",_);let j=await fetch(g_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function o4(_,$,j=null){let G=await fetch(g_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function a3(_){let $=await fetch(g_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function pH(_,$={}){let j=await fetch(g_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await DH(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function t3(_,$){let j=await fetch(g_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function nH(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return o0(j)}async function rH(_,$,j){return o0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function f1(_){return`${g_}/media/${_}`}function e3(_){return`${g_}/media/${_}/thumbnail`}async function N2(_){let $=await fetch(`${g_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function dH(_){let $=await fetch(`${g_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function _7(_){let $=await fetch(`${g_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function n5(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return o0(G)}async function $7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return o0($)}async function j7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return o0($)}async function G7(_="all"){return o0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function Z7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return o0(Z)}async function X7(_){return o0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function oH(_,$){return o0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function iH(_){return o0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function aH(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function tH(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function eH(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",g_+$);for(let[q,K]of Object.entries(j||{}))if(K!==void 0&&K!==null)Y.setRequestHeader(q,String(K));Y.upload.onprogress=(q)=>{if(typeof G==="function")G({loaded:q.lengthComputable?q.loaded:0,total:q.lengthComputable?q.total:_.size,lengthComputable:q.lengthComputable})},Y.onload=()=>{try{let q=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(q);else{let K=Error(q.error||`HTTP ${Y.status}`);K.status=Y.status,K.code=q.code,X(K)}}catch{let q=Error(`HTTP ${Y.status}`);q.status=Y.status,X(q)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function _E(_,$="",j={}){let G=tH(),Z=aH("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(c3,Number(j.chunkSize)||sH)),Y=Math.max(0,Number(_?.size)||0),q=Math.max(1,Math.ceil(Y/X)),K=0,L=null;for(let Q=0;Q<q;Q+=1){let V=Q*X,F=Math.min(Y,V+X),N=_.slice(V,F),U=N.size;if(L=await eH(N,Z,{"X-Upload-Id":G,"X-Chunk-Index":Q,"X-Chunk-Total":q,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(z)=>{if(typeof j.onProgress!=="function")return;let E=Math.min(Y,K+(z?.loaded||0)),H=Y||1;j.onProgress({loaded:E,total:H,percent:Math.round(E/H*100),chunkIndex:Q,chunkTotal:q})}),K+=U,typeof j.onProgress==="function"){let z=Y||1,E=Y?K:z;j.onProgress({loaded:E,total:z,percent:Math.round(E/z*100),chunkIndex:Q+1,chunkTotal:q})}}return L}async function B2(_,$="",j={}){if(_?.size>c3){let G=(_.size/1048576).toFixed(0),Z=(c3/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await _E(_,$,j)}async function Y7(_,$,j=""){let G=await fetch(g_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function q7(_,$){let j=await fetch(g_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function K7(_,$){let j=await fetch(g_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function L7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return o0($,{method:"DELETE"})}async function r5(_,$=!1){return o0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function d5(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${g_}/workspace/raw?${j.toString()}`}function U2(_){return d5(_,{download:!0})}function H2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${g_}/workspace/download?${j}`}class E2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(g_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var g_="",c3=1073741824,sH=8388608;var f_=J_(()=>{l5()});function s4(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function p1(_={}){if(typeof window>"u")return;let $=s4(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function A7(){if(typeof window>"u")return null;return s4(window.__piclawSettingsRequestedSection)}function W2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=A7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function C$({children:_,className:$=""}){let[j,G]=C(null);return g(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{G$(null,Z)}finally{Z.remove()}}},[]),g(()=>{if(!j)return;j.className=$||"";return},[$,j]),R4(()=>{if(!j)return;G$(_,j);return},[_,j]),null}var J2=J_(()=>{w0()});function P$(_){let $=F4.findIndex((j)=>j.id===_.id);if($>=0)F4[$]=_;else F4.push(_);F4.sort((j,G)=>(j.order??500)-(G.order??500))}function NX(_){let $=F4.findIndex((j)=>j.id===_);if($>=0)F4.splice($,1)}function BX(){return[...F4]}function k7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var F4;var a4=J_(()=>{F4=[]});function AE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(N4,{detail:{enabled:Boolean(_)}}))}function kE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(A2,{detail:{collapsed:Boolean(_)}}))}function $6(_=!1){return Y$(UX,_)}function M7(_=!1){return Y$(HX,_)}function k2(_,$={}){let j=$.persist!==!1,G=Boolean(_);if(j)L_(UX,G?"true":"false");return AE(G),G}function ME(){let _=!$6(!1);return k2(_)}function yE(_,$={}){let j=$.persist!==!1,G=Boolean(_);if(j)L_(HX,G?"true":"false");return kE(G),G}function EX(){let _=!M7(!1);return yE(_)}function DX(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if($==="toggle"){ME();return}if($==="set"||typeof _?.enabled==="boolean")k2(Boolean(_?.enabled))}var UX="piclaw_system_meters_enabled",HX="piclaw_system_meters_collapsed",N4="piclaw-meters-change",A2="piclaw-meters-collapsed-change";var M2=()=>{};function zX(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function OX(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function F$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=zX(_,$);return OX(Z,{min:j,max:G})}function wE(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=F$(_,{fallback:G,min:Z,max:X}),q=Math.abs(zX(j,1))||1,K=Number($)<0?-1:1;return OX(Y+K*q,{min:Z,max:X})}function S_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:q,onChange:K}){let L=Number.isFinite(Number(Z))?Number(Z):F$(_,{fallback:0,min:$,max:j}),[Q,V]=C(String(_??L)),F=u(!1);g(()=>{if(!F.current)V(String(_??L))},[_,L]);let N=P((z)=>{F.current=!1;let E=F$(z,{fallback:L,min:$,max:j});V(String(E)),K?.(E)},[L,$,j,K]),U=P((z)=>{F.current=!1;let E=wE(_,{direction:z,step:G,fallback:L,min:$,max:j});V(String(E)),K?.(E)},[L,j,$,K,G,_]);return B`
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
                onInput=${(z)=>{F.current=!0,V(z.target.value)}}
                onBlur=${(z)=>N(z.target.value)}
                onKeyDown=${(z)=>{if(z.key==="Enter")z.preventDefault(),N(z.target.value),z.target.blur()}}
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
    `}var B4=J_(()=>{w0()});function WX(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function JX({value:_,onChange:$}){let j=u(null),[G,Z]=C(WX(_));g(()=>{Z(WX(_))},[_]);let X=P((Y)=>{let q=Y.target.files?.[0];if(!q)return;let K=new FileReader;K.onload=()=>{let L=K.result;Z(L),$?.(L)},K.readAsDataURL(q)},[$]);return B`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?B`<img src=${G} alt="avatar" />`:B`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function AX(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}function y7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[q,K]=C(""),[L,Q]=C(""),[V,F]=C(32),[N,U]=C(256),[z,E]=C(()=>$6(!1)),[H,k]=C(!1),A=u(""),O=u(null),w=u(!0);g(()=>{return w.current=!0,()=>{w.current=!1}},[]);let x=P((D)=>{let y=AX(D);Z(y.userName),Y(y.userAvatar),K(y.assistantName),Q(y.assistantAvatar),F(y.composeUploadLimitMb),U(y.workspaceUploadLimitMb),A.current=JSON.stringify(y)},[]);g(()=>{x(_||{})},[_,x]),g(()=>{let D=(y)=>{E(Boolean(y?.detail?.enabled))};return window.addEventListener(N4,D),()=>window.removeEventListener(N4,D)},[]);let W=q0(()=>JSON.stringify(AX({userName:G,userAvatar:X,assistantName:q,assistantAvatar:L,composeUploadLimitMb:V,workspaceUploadLimitMb:N})),[G,X,q,L,V,N]);g(()=>{if(W===A.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!w.current)return;let D=document.activeElement;if(D&&D.closest?.(".settings-number-stepper"))return;try{let y=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:W}),I=await y.json().catch(()=>({}));if(!w.current)return;if(!y.ok||!I?.ok||!I?.settings)return;A.current=W,j?.(I.settings),k(!0),setTimeout(()=>{if(w.current)k(!1)},4000)}catch(y){console.warn("[settings/general] Failed to persist general settings snapshot.",y)}},800),()=>{if(O.current)clearTimeout(O.current)}},[W,j]);let J=_?.instanceTotp||{configured:!1,issuer:q||"Piclaw",label:G?`${q||"Piclaw"}:${G}`:q||"Piclaw",secret:"",otpauth:"",qrSvg:""},M=typeof window<"u"&&window.isSecureContext;return B`
        <div class="settings-section">
            ${H&&B`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${JX} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(D)=>Z(D.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${JX} value=${L} onChange=${Q} />
                <input type="text" value=${q} onInput=${(D)=>K(D.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${M?B`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:B`
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
                    <input type="checkbox" checked=${z}
                        onChange=${()=>{let D=k2(!z);E(D)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${S_}
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
                <${S_}
                    label="workspace upload limit"
                    value=${N}
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
                ${J.configured?B`
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
    `}var kX=J_(()=>{w0();M2();B4()});var yX={};X1(yX,{SessionsSection:()=>TE});function MX(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function TE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[q,K]=C(4000),[L,Q]=C(3),[V,F]=C(64),[N,U]=C("none"),[z,E]=C(!1),H=u(""),k=u(null),A=u(!0);g(()=>{return A.current=!0,()=>{A.current=!1}},[]);let O=P((x)=>{let W=MX(x);Z(W.sessionAutoRotate),Y(W.sessionMaxSizeMb),K(W.sessionMaxLines),Q(W.sessionMaxCompactions),F(W.toolUseBudget),U(W.sessionIsolation),H.current=JSON.stringify(W)},[]);g(()=>{O(_||{})},[_,O]);let w=q0(()=>JSON.stringify(MX({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:q,sessionMaxCompactions:L,toolUseBudget:V,sessionIsolation:N})),[G,X,q,L,V,N]);return g(()=>{if(w===H.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!A.current)return;let x=document.activeElement;if(x&&x.closest?.(".settings-number-stepper"))return;try{let W=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:w}),J=await W.json().catch(()=>({}));if(!A.current)return;if(!W.ok||!J?.ok||!J?.settings)return;H.current=w,j?.(J.settings),E(!0),setTimeout(()=>{if(A.current)E(!1)},4000)}catch(W){console.warn("[settings/sessions] Failed to persist session settings.",W)}},800),()=>{if(k.current)clearTimeout(k.current)}},[w,j]),B`
        <div class="settings-section">
            ${z&&B`
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
                <${S_}
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
                <${S_}
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
                <select value=${N} onChange=${(x)=>U(x.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var wX=J_(()=>{w0();B4()});var TX={};X1(TX,{CompactionSection:()=>IE});function xE(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??50,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function w7(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function IE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[q,K]=C(360),[L,Q]=C(50),[V,F]=C(0.5),[N,U]=C(!1),[z,E]=C(120),[H,k]=C([]),[A,O]=C([]),[w,x]=C(!1),W=u(""),J=u(null),M=u(!0);g(()=>{return M.current=!0,()=>{M.current=!1}},[]);let D=P((R)=>{let S=xE(R);Z(S.compactionTimeoutSec),Y(S.compactionBackoffBaseMin),K(S.compactionBackoffMaxMin),Q(S.compactionThresholdPercent),F(S.compactionBackoffDecayFactor),U(S.progressWatchdogEnabled),E(S.progressWatchdogTimeoutSec),k(S.compactionBackoffs),O(S.progressWatchdogPhases),W.current=JSON.stringify({compactionTimeoutSec:S.compactionTimeoutSec,compactionBackoffBaseMin:S.compactionBackoffBaseMin,compactionBackoffMaxMin:S.compactionBackoffMaxMin,compactionThresholdPercent:S.compactionThresholdPercent,compactionBackoffDecayFactor:S.compactionBackoffDecayFactor,progressWatchdogEnabled:S.progressWatchdogEnabled,progressWatchdogTimeoutSec:S.progressWatchdogTimeoutSec})},[]);g(()=>{D(_||{})},[_,D]);let y=q0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:q,compactionThresholdPercent:L,compactionBackoffDecayFactor:V,progressWatchdogEnabled:N,progressWatchdogTimeoutSec:z}),[G,X,q,L,V,N,z]);g(()=>{if(y===W.current)return;if(J.current)clearTimeout(J.current);return J.current=setTimeout(async()=>{if(!M.current)return;let R=document.activeElement;if(R&&R.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let S=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),v=await S.json().catch(()=>({}));if(!M.current)return;if(!S.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to save compaction settings.","error");return}W.current=y,j?.(v.settings),D({..._||{},...v.settings||{}}),$?.("Compaction settings saved.","success"),x(!0),setTimeout(()=>{if(M.current)x(!1),$?.(null)},4000)}catch(S){if(console.warn("[settings/compaction] Failed to persist compaction settings.",S),M.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(J.current)clearTimeout(J.current)}},[y,j,$,D,_]);let I=P(async(R)=>{try{$?.(`Clearing compaction suppression for ${R}…`,"info");let S=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:R})}),v=await S.json().catch(()=>({}));if(!S.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to clear compaction suppression.","error");return}j?.(v.settings),D({..._||{},...v.settings||{}}),$?.(`Cleared compaction suppression for ${R}.`,"success")}catch(S){console.warn("[settings/compaction] Failed to clear compaction suppression.",S),$?.("Failed to clear compaction suppression.","error")}},[D,j,$,_]);return B`
        <div class="settings-section">
            ${w&&B`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${S_}
                    label="compaction threshold"
                    value=${L}
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
                <${S_}
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
                <${S_}
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
                <${S_}
                    label="compaction backoff max"
                    value=${q}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${S_}
                    label="backoff decay factor"
                    value=${Math.round(V*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(R)=>F(R/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${N} onChange=${(R)=>U(Boolean(R.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${S_}
                    label="watchdog timeout"
                    value=${z}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!N}
                    onChange=${E}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${H.length===0?B`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:B`
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
                            ${H.map((R)=>B`
                                <tr>
                                    <td><code>${R.chatJid}</code></td>
                                    <td>${R.failureCount}</td>
                                    <td>${w7(R.backoffUntil)}</td>
                                    <td title=${R.lastErrorMessage||""}>${R.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>I(R.chatJid)}>
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
            ${A.length===0?B`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:B`
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
                            ${A.map((R)=>B`
                                <tr>
                                    <td><code>${R.chatJid}</code></td>
                                    <td>${R.phase}</td>
                                    <td>${w7(R.startedAt)}</td>
                                    <td>${w7(R.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var xX=J_(()=>{w0();B4()});function CX(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=RE[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(fE.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function t4(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),q=PE[Y];if(q){G[q]=!0;continue}if(G.key)return null;let K=CX(X);if(!K||K==="escape")return null;G.key=K}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function PX(_){return String(_||"").split(/[\n,]/).map(($)=>t4($)).filter(($)=>Boolean($))}function f$(_){return _.join(", ")}function x7(){let _=j2(IX);if(!_||typeof _!=="object")return{};let $={};for(let j of R$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>t4(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function T7(_){if(L_(IX,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function RX(_){return CE.get(_)}function j6(_){let $=x7()[_];if(Array.isArray($))return $;return[...RX(_).defaultBindings]}function fX(_,$){let j=x7(),G=RX(_).defaultBindings,Z=[...new Set($.map((X)=>t4(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;T7(j)}function I7(_){if(!_){T7({});return}let $=x7();delete $[_],T7($)}function y2(){let _={};for(let $ of R$)_[$.id]=j6($.id);return _}function SE(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return CX($)||$.toLowerCase()}function gE(_){let $=t4(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function uE(_,$){let j=gE($);if(!j)return!1;if(SE(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function N$(_,$){return j6($).some((j)=>uE(_,j))}var IX="piclaw_keyboard_shortcuts_v1",R$,CE,PE,RE,fE;var w2=J_(()=>{R$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],CE=new Map(R$.map((_)=>[_.id,_])),PE={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},RE={esc:"escape",return:"enter",spacebar:"space"},fE=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var SX={};X1(SX,{KeyboardSection:()=>vE});function bE(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function vE({filter:_="",setStatus:$}){let[j,G]=C(()=>{let K=y2();return Object.fromEntries(Object.entries(K).map(([L,Q])=>[L,f$(Q)]))});g(()=>{let K=()=>{let L=y2();G(Object.fromEntries(Object.entries(L).map(([Q,V])=>[Q,f$(V)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",K),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",K)},[]);let Z=q0(()=>R$.filter((K)=>{let L=String(j[K.id]||"");return bE(_,K,L)}),[j,_]),X=(K)=>{let L=String(j[K]||"").trim(),V=(L?L.split(/[\n,]/).map((N)=>N.trim()).filter(Boolean):[]).filter((N)=>!t4(N));if(V.length>0){$?.(`Invalid shortcut: ${V[0]}. Escape is reserved and cannot be rebound.`,"error");return}let F=PX(L);fX(K,F),G((N)=>({...N,[K]:f$(j6(K))})),$?.("Keyboard shortcuts saved.","success")},Y=(K)=>{I7(K),G((L)=>({...L,[K]:f$(j6(K))})),$?.("Keyboard shortcut reset to default.","success")};return B`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{I7();let K=y2();G(Object.fromEntries(Object.entries(K).map(([L,Q])=>[L,f$(Q)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((K)=>B`
                    <div class="settings-shortcut-card" key=${K.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${K.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${K.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${f$(K.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[K.id]||""}
                                placeholder=${f$(K.defaultBindings)}
                                onInput=${(L)=>G((Q)=>({...Q,[K.id]:L.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(K.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Y(K.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Z.length===0&&B`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var gX=J_(()=>{w0();w2()});function uX(_,$=C7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function bX(_,$=P7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function e4(){return{refreshIntervalSec:uX(j4(x2,C7),C7),folderPreviewDepth:bX(j4(I2,P7),P7)}}function vX(_={}){let $=e4(),j={refreshIntervalSec:uX(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:bX(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(L_(x2,String(j.refreshIntervalSec)),L_(I2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(T2,{detail:{settings:j}}));return j}var T2="piclaw:workspace-client-settings-updated",x2="workspaceRefreshIntervalSec",I2="workspaceFolderPreviewDepth",C7=60,P7=3;var R7=()=>{};var cX={};X1(cX,{WorkspaceSection:()=>mE});function mX(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function mE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[q,K]=C(4),[L,Q]=C(5000),[V,F]=C(60),[N,U]=C(3),[z,E]=C(!1),[H,k]=C(!1),A=u(""),O=u(null),w=u(null),x=u(null),W=u(!0);g(()=>{return W.current=!0,()=>{if(W.current=!1,O.current)clearTimeout(O.current);if(w.current)clearTimeout(w.current);if(x.current)clearTimeout(x.current)}},[]);let J=P((y)=>{let I=mX(y),R=e4();Z(I.webTerminalEnabled),Y(I.vncAllowDirect),K(I.treeMaxDepth),Q(I.treeMaxEntries),F(R.refreshIntervalSec),U(R.folderPreviewDepth),A.current=JSON.stringify(I)},[]);g(()=>{J(_||{})},[_,J]);let M=q0(()=>JSON.stringify(mX({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:q,treeMaxEntries:L}})),[G,X,q,L]);g(()=>{if(M===A.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!W.current)return;let y=document.activeElement;if(y&&y.closest?.(".settings-number-stepper"))return;try{let I=await n3(JSON.parse(M));if(!W.current||!I?.ok||!I?.settings)return;if(A.current=M,j?.({workspaceSettings:I.settings}),$?.(null),E(!0),w.current)clearTimeout(w.current);w.current=setTimeout(()=>{if(W.current)E(!1)},4000)}catch(I){$?.(String(I?.message||I),"error")}},800),()=>{if(O.current)clearTimeout(O.current)}},[M,j,$]);let D=P((y)=>{let I=vX(y);if(F(I.refreshIntervalSec),U(I.folderPreviewDepth),k(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(W.current)k(!1)},3000)},[]);return B`
        <div class="settings-section">
            ${z&&B`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${H&&B`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${G} onChange=${(y)=>Z(y.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(y)=>Y(y.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${S_}
                    label="workspace tree max depth"
                    value=${q}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${S_}
                    label="workspace tree max entries"
                    value=${L}
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
                <${S_}
                    label="workspace refresh interval"
                    value=${V}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(y)=>D({refreshIntervalSec:y})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${S_}
                    label="folder preview scan depth"
                    value=${N}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(y)=>D({folderPreviewDepth:y})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var lX=J_(()=>{w0();f_();R7();B4()});var hX={};X1(hX,{EnvironmentSection:()=>cE});function f7(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function cE({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>f7(_||{})),[Y,q]=C({}),[K,L]=C(""),[Q,V]=C(""),[F,N]=C(null);g(()=>{X(f7(_||{})),q({})},[_]);let U=P((O)=>{let w=f7({environmentSettings:O?.settings||O});return X(w),G?.({environmentSettings:w}),q({}),w},[G]),z=P(async()=>{try{let O=await r3();if(O?.ok)U(O.settings);j?.("Environment refreshed.","info")}catch(O){j?.(String(O?.message||O),"error")}},[U,j]),E=P(async(O,w)=>{let x=String(O||"").trim();if(!x)return;N(x);try{let W=await F2({action:"set",name:x,value:String(w??"")});if(W?.ok)U(W.settings);if(j?.(`Saved environment override for ${x}.`,"info"),x===K.trim())L(""),V("")}catch(W){j?.(String(W?.message||W),"error")}finally{N(null)}},[U,K,j]),H=P(async(O)=>{let w=String(O||"").trim();if(!w)return;N(w);try{let x=await F2({action:"clear",name:w});if(x?.ok)U(x.settings);j?.(`Cleared environment override for ${w}.`,"info")}catch(x){j?.(String(x?.message||x),"error")}finally{N(null)}},[U,j]),k=q0(()=>{let O=String($||"").trim().toLowerCase(),w=Array.isArray(Z.variables)?Z.variables:[];if(!O)return w;return w.filter((x)=>{return`${x?.name||""} ${x?.value||""} ${x?.source||""}`.toLowerCase().includes(O)})},[Z.variables,$]),A=P((O,w)=>{q((x)=>({...x||{},[O]:w}))},[]);return B`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${z}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${K}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(O)=>L(O.target.value)}
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
                        disabled=${!K.trim()||F===K.trim()}
                        onClick=${()=>E(K,Q)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${k.map((O)=>{let w=String(O?.name||""),x=Object.prototype.hasOwnProperty.call(Y,w)?Y[w]:O.value,W=x!==O.value,J=F===w;return B`
                        <div class="settings-tool-row" key=${w} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${w}>${w}</span>
                            <input
                                type="text"
                                value=${x}
                                spellcheck="false"
                                onInput=${(M)=>A(w,M.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${O.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${O.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${J||!W} onClick=${()=>E(w,x)}>Save</button>
                                <button type="button" disabled=${J||!O.overridden} onClick=${()=>H(w)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${k.length===0&&B`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var pX=J_(()=>{w0();f_()});var nX={};X1(nX,{ProvidersSection:()=>hE});function lE(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function hE({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,q]=C({}),K=P((E,H)=>{q((k)=>({...k,[E]:H}))},[]),L=P(async(E)=>{let H=(Y.apiKey||"").trim();if(!H){$?.("API key cannot be empty.","error");return}G(E),$?.(`Configuring ${E}…`,"info");try{let k=JSON.stringify({provider:E,method:"api_key",api_key:H}),A=await M1("default",`/login __step2 ${k}`,null,[]);if(A?.command?.status==="error"){$?.(A.command.message,"error");return}$?.(A?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),Q=P(async(E,H)=>{G(E),$?.(`Configuring ${E}…`,"info");try{let k={provider:E,method:"custom"};for(let w of H.customFields||[])k[w.key]=(Y[w.key]||"").trim();let A=JSON.stringify(k),O=await M1("default",`/login __step2 ${A}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),V=P(async(E)=>{G(E),$?.(`Starting OAuth for ${E}…`,"info");try{let H=JSON.stringify({provider:E}),A=(await M1("default",`/login __step1 ${H}`,null,[]))?.command?.message||"";if(A.includes("http")){let O=A.match(/(https?:\/\/[^\s)]+)/);if(O)window.open(O[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(A,"success")}else $?.(A||`OAuth flow started for ${E}. Check the chat.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[$]),F=P(async(E)=>{if(j)return;G(E),$?.(`Logging out ${E}…`,"info");try{await M1("default",`/logout ${E}`,null,[]),$?.(`Logged out ${E}. Restart may be needed.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[j,$]),N=_||[],U=(E)=>Z===E,z=(E)=>{X((H)=>H===E?null:E),q({})};return B`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${N.map((E)=>B`
                    <div class=${`settings-provider-card${E.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!E.configured&&z(E.id)}>
                            <strong>${E.name}</strong>
                            <span class="settings-provider-id">${E.id}</span>
                            ${E.configured&&B`<span class="settings-tag settings-tag-skill">${lE(E.authType)}</span>`}
                            <div class="settings-provider-card-meta">
                                ${E.hasOAuth&&B`<span class="settings-tag">OAuth</span>`}
                                ${E.hasApiKey&&B`<span class="settings-tag">API Key</span>`}
                                ${E.isCustom&&B`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${E.configured?B`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),F(E.id)}}
                                    >${j===E.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),z(E.id)}}
                                    >Reconfigure</button>
                                `:B`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),z(E.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(E.id)&&B`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${E.hasOAuth&&B`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===E.id}
                                            onClick=${()=>V(E.id)}>
                                            ${j===E.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${E.hasApiKey&&B`
                                    <div class="settings-provider-method">
                                        <div class="settings-row settings-provider-inline-row" style="margin-bottom:6px">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(H)=>K("apiKey",H.target.value)}
                                                placeholder=${E.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===E.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>L(E.id)}>
                                                ${j===E.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${E.isCustom&&B`
                                    <div class="settings-provider-method">
                                        ${(E.customFields||[]).map((H)=>B`
                                            <div class="settings-row settings-provider-inline-row" style="margin-bottom:6px">
                                                <label>${H.label}${H.required?" *":""}</label>
                                                <input type="text" value=${Y[H.key]||""}
                                                    onInput=${(k)=>K(H.key,k.target.value)}
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
    `}var rX=J_(()=>{w0();f_()});var dX={};X1(dX,{ModelsSection:()=>oE});function rE(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function dE({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=rE(j)?pE:nE,q=G&&G.length>1?G:["off","minimal","low","medium","high"],K=Math.max(0,q.indexOf(_??"off"));if(!$)return B`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return B`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[q[K]]||q[K]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${q.length-1} step="1" value=${K} disabled=${X}
                    onInput=${(L)=>Z(q[parseInt(L.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${q.map((L,Q)=>B`<span class=${Q===K?"active":""} onClick=${()=>!X&&Z(L)}>${Y[L]||L}</span>`)}
                </div>
            </div>
        </div>
    `}function oE({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[q,K]=C(!1),[L,Q]=C(["off"]),[V,F]=C(!1),N=P(async()=>{let x=await V4();if(j(x),x.thinking_level)Y(x.thinking_level);if(K(Boolean(x.supports_thinking)),Array.isArray(x.available_thinking_levels)&&x.available_thinking_levels.length>0)Q(x.available_thinking_levels);return x},[]);g(()=>{N().catch(()=>j({models:[],model_options:[]}))},[]);let U=P(async(x)=>{if(G)return;Z(!0);try{await M1("default",`/model ${x}`,null,[]),await N()}catch(W){console.error("Failed to switch model:",W)}finally{Z(!1)}},[G,N]),z=P(async(x)=>{if(V)return;F(!0),Y(x);try{let W=await M1("default",`/thinking ${x}`,null,[]);if(W?.command?.thinking_level)Y(W.command.thinking_level);K(W?.command?.supports_thinking!==!1),await N()}catch(W){console.error("Failed to set thinking:",W),await N().catch((J)=>{})}finally{F(!1)}},[V,N]);if(!$)return B`<div class="settings-loading">Loading models\u2026</div>`;let E=$.model_options||[],H=$.current,A=E.find((x)=>x.label===H)?.provider||"",O=_.toLowerCase(),w=O?E.filter((x)=>x.label.toLowerCase().includes(O)||(x.provider||"").toLowerCase().includes(O)):E;return B`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${w.map((x)=>B`
                            <tr class=${x.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${x.label===H} disabled=${G} onChange=${()=>U(x.label)} /></td>
                                <td>${x.name||x.label}</td><td>${x.provider}</td>
                                <td>${x.context_window?(x.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${x.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${w.length===0&&B`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${dE}
                    thinkingLevel=${X}
                    supportsThinking=${q}
                    provider=${A}
                    availableLevels=${L}
                    onSetLevel=${z}
                    disabled=${V||G} />
            </div>
        </div>
    `}var pE,nE;var oX=J_(()=>{w0();f_();pE={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},nE={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var sX={};X1(sX,{ThemeSection:()=>iE});function iX(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function iE({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[q,K]=C(""),[L,Q]=C(!1),V=u(""),F=u(null),N=u(!0);g(()=>{return N.current=!0,()=>{N.current=!1}},[]);let U=P((A)=>{let O=iX(A);Y(O.uiTheme),K(O.uiTint),V.current=JSON.stringify(O)},[]);g(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let z=P((A,O)=>{r4({theme:A,tint:O||null}),Y(A||"default"),K(O||"")},[]),E=q0(()=>JSON.stringify(iX({uiTheme:X,uiTint:q})),[X,q]);g(()=>{if(E===V.current)return;if(F.current)clearTimeout(F.current);return F.current=setTimeout(async()=>{if(!N.current)return;Q(!0);try{let A=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:E}),O=await A.json().catch(()=>({}));if(!N.current)return;if(!A.ok||!O?.ok||!O?.settings){G?.(O?.error||"Failed to save appearance settings.","error");return}V.current=E,Z?.(O.settings),G?.("Appearance synced across clients.","success")}catch(A){if(!N.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",A),G?.("Failed to save appearance settings.","error")}finally{if(N.current)Q(!1)}},250),()=>{if(F.current)clearTimeout(F.current)}},[E,Z,G]);let H=$||[],k=_||[];return B`
        <div class="settings-section">
            ${L&&B`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>z("default",q)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${q||"#1d9bf0"}
                        onInput=${(A)=>{let O=A.target.value;if(K(O),X==="default")r4({theme:"default",tint:O})}} />
                    ${q&&B`
                        <button class="settings-tint-clear" onClick=${()=>z("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${q||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${H.map((A)=>B`<th class="settings-swatch-header">${A.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${k.filter((A)=>A.name!=="default").map((A)=>B`
                        <tr class=${A.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>z(A.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${A.name===X} onChange=${()=>z(A.name,"")} /></td>
                            <td><strong>${A.label}</strong></td>
                            <td>${A.mode}</td>
                            ${H.map((O)=>{let w=A.colors?.[O];return B`<td class="settings-swatch-cell">
                                    ${w?B`<span class="settings-color-swatch" style=${"background:"+w} title=${w}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var aX=J_(()=>{w0();g5()});function tX(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function _5(_){return typeof _==="string"&&_.trim().length>0}function S7(_,...$){let j=tX(_);if(!j)return!0;let G=$.map((Z)=>tX(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function eX(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function g$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:eX($.workspaceCommands),slashCommands:eX($.slashCommands)}}function _Y(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function sE(_){let $=Array.isArray(_?.commands)?_.commands:[],j=g$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>_Y(j.workspaceCommands,Z.id)).filter((Z)=>S7(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function aE(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=_5(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>S7(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=_5(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=_5(Z?.session_name)?Z.session_name.trim():"",q=String(Z?.chat_jid||"").trim();return{key:`agent:${q}`,kind:"agent",title:`@${X}`,subtitle:Y||q,searchText:`@${X} ${Y} ${q}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:q}})}function tE(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=g$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=_5(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),_Y(j.slashCommands,Y)}).filter((X)=>S7(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),q=_5(X?.description)?X.description.trim():"slash command",K=_5(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:q,searchText:`${Y} ${q} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:K||"Slash",actionHint:"Insert",commandName:Y}})}function $Y(_){return[...aE({agents:_?.agents,query:_?.query}),...sE({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...tE({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var S$;var g7=J_(()=>{S$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var ZY={};X1(ZY,{QuickActionsSection:()=>eE});function jY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function GY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function eE({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>S$.map((x)=>x.id)),[X,Y]=C([]),[q,K]=C([]),[L,Q]=C(!0),[V,F]=C(!1),N=P(async()=>{Q(!0);try{let[x,W]=await Promise.all([p5(),h5("web:default").catch(()=>({commands:[]}))]),J=g$(x?.settings),M=Array.isArray(W?.commands)?W.commands:[];K(M),Z(Array.isArray(J.workspaceCommands)?J.workspaceCommands:S$.map((D)=>D.id)),Y(Array.isArray(J.slashCommands)?J.slashCommands:M.map((D)=>String(D?.name||"").trim()).filter(Boolean))}catch(x){$?.(String(x?.message||x),"error")}finally{Q(!1)}},[$]);g(()=>{N()},[N]);let U=q0(()=>GY(G),[G]),z=q0(()=>GY(X),[X]),E=q0(()=>S$.filter((x)=>jY(_,x.label,x.description,...x.keywords||[])),[_]),H=q0(()=>q.filter((x)=>jY(_,x?.name,x?.description,x?.source)),[q,_]),k=P((x)=>{Z((W)=>{let J=new Set((Array.isArray(W)?W:[]).map((M)=>String(M||"").trim()).filter(Boolean));if(J.has(x))J.delete(x);else J.add(x);return S$.map((M)=>M.id).filter((M)=>J.has(M))})},[]),A=P((x)=>{Y((W)=>{let J=new Set((Array.isArray(W)?W:[]).map((M)=>String(M||"").trim()).filter(Boolean));if(J.has(x))J.delete(x);else J.add(x);return q.map((M)=>String(M?.name||"").trim()).filter((M)=>M&&J.has(M))})},[q]),O=P(()=>{Z(S$.map((x)=>x.id)),Y(q.map((x)=>String(x?.name||"").trim()).filter(Boolean))},[q]),w=P(async()=>{if(V)return;F(!0),$?.("Saving quick actions…","info");try{let x=await p3({workspaceCommands:G,slashCommands:X}),W=g$(x?.settings);j?.({quickActions:W}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:W}})),$?.("Quick Actions saved.","success")}catch(x){$?.(String(x?.message||x),"error")}finally{F(!1)}},[j,V,$,X,G]);if(L)return B`<div class="settings-loading">Loading…</div>`;return B`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${O} disabled=${V}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${w} disabled=${V}>
                    ${V?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${E.map((x)=>{let W=U?U.has(x.id.toLowerCase()):!0;return B`
                        <label class="settings-checkbox-row" key=${x.id}>
                            <input type="checkbox" checked=${W} onChange=${()=>k(x.id)} />
                            <div>
                                <div>${x.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x.description}</div>
                            </div>
                        </label>
                    `})}
                ${E.length===0&&B`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${H.map((x)=>{let W=String(x?.name||"").trim(),J=z?z.has(W.toLowerCase()):!0;return B`
                        <label class="settings-checkbox-row" key=${W}>
                            <input type="checkbox" checked=${J} onChange=${()=>A(W)} />
                            <div>
                                <div><code>${W}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&B`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var XY=J_(()=>{w0();f_();g7()});var YY={};X1(YY,{KeychainSection:()=>jD});function _D(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function jD({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[q,K]=C(!1),[L,Q]=C(""),[V,F]=C(""),[N,U]=C(""),[z,E]=C(""),[H,k]=C(""),[A,O]=C("secret"),[w,x]=C(!1),[W,J]=C({}),[M,D]=C(null),[y,I]=C(null),[R,S]=C(null),v=u(null),c=u(null),h=u(null),_0=P(async()=>{Z(!0),Y(null);try{let G0=await(await fetch("/agent/keychain")).json();if(G0?.ok)j(G0.entries||[]);else Y(G0?.error||"Failed to load keychain.")}catch(r){Y("Failed to load keychain.")}finally{Z(!1)}},[]);g(()=>{_0()},[_0]);let b=P(async()=>{let r=L.trim(),G0=V;if(!r||!G0)return;x(!0);try{let u0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,secret:G0,type:A,username:N.trim()||void 0,userNote:z,agentNote:H})})).json();if(u0?.ok)Q(""),F(""),U(""),E(""),k(""),O("secret"),K(!1),await _0();else Y(u0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{x(!1)}},[L,V,N,z,H,A,_0]),t=P(async(r)=>{try{let O0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r})})).json();if(O0?.ok)I(null),S((u0)=>u0?.name===r?null:u0),await _0();else Y(O0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[_0]),s=P(async(r)=>{let G0=r?.name;if(!G0)return;let O0=W[G0]||{},u0=Object.prototype.hasOwnProperty.call(O0,"userNote")?O0.userNote:r.userNote||"",R0=Object.prototype.hasOwnProperty.call(O0,"agentNote")?O0.agentNote:r.agentNote||"";D(G0);try{let j_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:G0,userNote:u0,agentNote:R0})})).json();if(j_?.ok)J((I0)=>{let i0={...I0||{}};return delete i0[G0],i0}),await _0();else Y(j_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{D(null)}},[W,_0]),K0=P((r,G0,O0)=>{J((u0)=>({...u0||{},[r]:{...(u0||{})[r]||{},[G0]:O0}}))},[]),Z0=P(async(r,G0,O0)=>{try{let R0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,master_password:G0||void 0,totp_code:O0||void 0})})).json();if(R0?.ok)S({name:r,phase:"revealed",secret:R0.secret,username:R0.username,masterPassword:G0});else if(R0?.needs_master_password)S((r0)=>({name:r,phase:"password",masterPassword:"",error:r0?.name===r&&r0?.masterPassword?R0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(R0?.needs_totp)S((r0)=>({name:r,phase:"totp",masterPassword:G0,totpCode:"",error:r0?.name===r&&r0?.phase==="totp"&&r0?.totpCode?R0.error:null})),requestAnimationFrame(()=>h.current?.focus());else S({name:r,phase:"error",error:R0?.error||"Failed to reveal."})}catch{S({name:r,phase:"error",error:"Failed to reveal."})}},[]),E0=P((r)=>{if(R?.name===r&&R?.phase==="revealed"){S(null);return}Z0(r,null,null)},[R,Z0]),B0=P((r)=>{let G0=R?.masterPassword||"";if(!G0)return;Z0(r,G0,null)},[R,Z0]),V0=P((r)=>{let G0=R?.totpCode||"";if(G0.length<6)return;Z0(r,R?.masterPassword,G0)},[R,Z0]),Q0=P(async(r)=>{try{await navigator.clipboard.writeText(r)}catch{let G0=document.createElement("textarea");G0.value=r,G0.style.position="fixed",G0.style.opacity="0",document.body.appendChild(G0),G0.select(),document.execCommand("copy"),document.body.removeChild(G0)}},[]);g(()=>{if(q)requestAnimationFrame(()=>v.current?.focus())},[q]);let U0=_.toLowerCase(),M0=q0(()=>{if(!U0)return $;return $.filter((r)=>r.name.toLowerCase().includes(U0)||(r.type||"").toLowerCase().includes(U0)||(r.envVar||"").toLowerCase().includes(U0)||(r.userNote||"").toLowerCase().includes(U0)||(r.agentNote||"").toLowerCase().includes(U0))},[$,U0]);if(G)return B`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return B`
        <div class="settings-section">
            ${X&&B`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${M0.length} entr${M0.length===1?"y":"ies"}${U0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>K(!q)}>
                    ${q?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${q&&B`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${v} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${L} onInput=${(r)=>Q(r.target.value)}
                            class="settings-keychain-input" />
                        <select value=${A} onChange=${(r)=>O(r.target.value)}
                            class="settings-keychain-select">
                            ${$D.map((r)=>B`<option value=${r}>${r}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${V} onInput=${(r)=>F(r.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${N} onInput=${(r)=>U(r.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${b}
                            disabled=${w||!L.trim()||!V}>
                            ${w?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${z} onInput=${(r)=>E(r.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${H} onInput=${(r)=>k(r.target.value)}
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
                        ${M0.length===0&&B`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${U0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${M0.map((r)=>{let G0=R?.name===r.name?R:null,O0=G0?.phase==="revealed",u0=G0?.phase==="password",R0=G0?.phase==="totp",r0=G0?.phase==="error",j_=W[r.name]||{},I0=Object.prototype.hasOwnProperty.call(j_,"userNote")?j_.userNote:r.userNote||"",i0=Object.prototype.hasOwnProperty.call(j_,"agentNote")?j_.agentNote:r.agentNote||"",T0=I0!==(r.userNote||"")||i0!==(r.agentNote||""),s0=M===r.name;return B`
                            <tr class="settings-keychain-row" key=${r.name}>
                                <td class="settings-keychain-name">${r.name}</td>
                                <td><span class="settings-keychain-type-badge">${r.type}</span></td>
                                <td class="settings-keychain-env">${r.envVar?B`<code>$${r.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${_D(r.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${O0?" active":""}`}
                                        onClick=${()=>E0(r.name)}
                                        title=${O0?"Hide secret":"Reveal secret"}>
                                        ${O0?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${y===r.name?B`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>t(r.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>I(null)}>No</button>
                                            </span>
                                        `:B`<button class="settings-keychain-delete-btn" onClick=${()=>I(r.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${r.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${I0}
                                                onInput=${(f0)=>K0(r.name,"userNote",f0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${i0}
                                                onInput=${(f0)=>K0(r.name,"agentNote",f0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!T0||s0} onClick=${()=>s(r)}>
                                            ${s0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${u0&&B`
                                <tr class="settings-keychain-prompt-row" key=${r.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${G0?.masterPassword||""}
                                                onInput=${(f0)=>S((t0)=>({...t0,masterPassword:f0.target.value}))}
                                                onKeyDown=${(f0)=>{if(f0.key==="Enter")B0(r.name);if(f0.key==="Escape")S(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>B0(r.name)}
                                                disabled=${!G0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>S(null)}>Cancel</button>
                                            ${G0?.error&&B`<span class="settings-keychain-prompt-error">${G0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${R0&&B`
                                <tr class="settings-keychain-prompt-row" key=${r.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${h} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${G0?.totpCode||""}
                                                onInput=${(f0)=>S((t0)=>({...t0,totpCode:f0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(f0)=>{if(f0.key==="Enter")V0(r.name);if(f0.key==="Escape")S(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>V0(r.name)}
                                                disabled=${(G0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>S(null)}>Cancel</button>
                                            ${G0?.error&&B`<span class="settings-keychain-prompt-error">${G0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${O0&&B`
                                <tr class="settings-keychain-reveal-row" key=${r.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${G0.username&&B`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${G0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>Q0(G0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${G0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>Q0(G0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${r0&&B`
                                <tr class="settings-keychain-reveal-row" key=${r.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${G0.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var $D;var qY=J_(()=>{w0();$D=["secret","token","password","basic"]});var KY={};X1(KY,{ToolsSection:()=>qD});function qD({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let F={};for(let N of Z)F[N.name]=!0;return F}),q=P((F)=>{Y((N)=>({...N,[F]:!N[F]}))},[]),K=j?.searchMatchMode||"or",L=P(async()=>{let F=K==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:F})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(N){console.warn("[settings/tools] Failed to save search match mode.",N)}},[K,G]),Q=$.toLowerCase(),V=q0(()=>{if(!Q)return Z;return Z.map((F)=>{let N=F.tools.filter((U)=>U.name.toLowerCase().includes(Q)||F.name.toLowerCase().includes(Q)||(U.summary||"").toLowerCase().includes(Q));return N.length>0?{...F,tools:N}:null}).filter(Boolean)},[Z,Q]);if(Z.length===0)return B`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return B`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${K==="and"} onChange=${L} />
                        <span class="settings-hint" style="margin:0">
                            ${K==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${V.map((F)=>{let N=X[F.name]!==!1;return B`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${N} onChange=${()=>q(F.name)} />
                            <span class="settings-toolset-icon">${GD[F.name]||YD}</span>
                            <strong>${F.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${F.description}</span>
                    </div>
                    ${N&&B`<div class="settings-tool-list">${F.tools.map((U)=>B`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${XD[U.kind]||"?"}</span>
                            ${U.summary&&B`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${ZD[U.name]||F.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${V.length===0&&B`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var GD,ZD,XD,YD;var LY=J_(()=>{w0();GD={core:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},ZD={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",list_internal_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},XD={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},YD=B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var VY={};X1(VY,{AddonsSection:()=>KD});function KD({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,q]=C(null),[K,L]=C(!1),[Q,V]=C({runtime:"",windowsNative:!1}),[F,N]=C([]),[U,z]=C([]);function E(){let M=new URLSearchParams;try{let y=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),I=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((S)=>S.trim()).filter(Boolean),R=localStorage.getItem("piclaw_addons_repo_url");if(y)M.append("catalog_url",y);for(let S of I)M.append("catalog_url",S);if(R)M.set("repo_url",R)}catch(y){}let D=M.toString();return D?`?${D}`:""}let H=P(async()=>{try{let[M,D]=await Promise.all([fetch(`/agent/addons${E()}`),fetch("/agent/settings-data")]),y=await M.json();if(y.error)throw Error(y.error);G(y.addons||[]),N(y.sources||[]),z(y.failed_sources||[]);let I=await D.json().catch(()=>({})),R=typeof I?.runtimePlatform==="string"?I.runtimePlatform:"";V({runtime:R,windowsNative:R==="win32"})}catch(M){G(null),_?.(String(M.message||M),"error")}finally{X(!1)}},[_]);g(()=>{H()},[]);let k=P(async(M)=>{if(Y)return;q({slug:M,action:"install"}),_?.(`Installing ${M}…`,"info");try{let y=await(await fetch(`/agent/addons/install${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:M})})).json();if(y.error){_?.(y.error,"error");return}L(!0);let I=[y.message,y.warning].filter(Boolean).join(" ");_?.(I||"Add-on installed.","success"),await H()}catch(D){_?.(String(D.message||D),"error")}finally{q(null)}},[Y,H,_]),A=P(async(M)=>{if(Y)return;q({slug:M,action:"remove"}),_?.(`Removing ${M}…`,"info");try{let y=await(await fetch(`/agent/addons/uninstall${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:M})})).json();if(y.error){_?.(y.error,"error");return}L(!0);let I=[y.message,y.warning].filter(Boolean).join(" ");_?.(I||"Add-on removed.","success"),await H()}catch(D){_?.(String(D.message||D),"error")}finally{q(null)}},[Y,H,_]),O=P(async()=>{if(Y)return;q({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let D=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(D.error){_?.(D.error,"error"),q(null);return}_?.(D.message||"Restarting piclaw…","success"),L(!1),(async(I=30,R=2000)=>{for(let S=0;S<I;S++){await new Promise((v)=>setTimeout(v,R));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await H(),q(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(v){}}q(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(M){_?.(String(M.message||M),"error"),q(null)}},[Y,_,H]);if(Z)return B`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return B`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let w=$.toLowerCase(),x=w?j.filter((M)=>M.slug.toLowerCase().includes(w)||(M.description||"").toLowerCase().includes(w)||(M.tags||[]).some((D)=>D.toLowerCase().includes(w))):j,W=Y?.slug||null,J=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return B`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${F.length<=1?B`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:B`${F.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${U.length>0&&B`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${U.length} catalog source${U.length>1?"s":""}:
                            ${U.map((M)=>B` <code style="font-size:0.82em;word-break:break-all">${M}</code>`)}
                        </div>
                    `}
                    ${F.length>1&&B`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${F.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${F.map((M)=>B`<li style="word-break:break-all"><code>${M}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${Q.windowsNative&&B`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${Y&&B`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${J}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${J}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${x.map((M)=>{let D=(M.skills||[]).length>0,y=M.type==="extension",I=D&&y?"extension + skill":D?"skill":"extension",R=D&&!y?"settings-tag-skill":"",S=typeof M.homepage==="string"&&M.homepage.trim()?M.homepage.trim():"";return B`
                    <div class=${`settings-addon-card${M.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${S?B`<a class="settings-addon-name-link" href=${S} target="_blank" rel="noopener noreferrer">${M.slug}</a>`:B`<strong>${M.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${R}`}>${I}</span>
                            <span class="settings-addon-version">${M.installed?M.installedVersion||"?":M.version||""}</span>
                            ${M.installKind&&B`<span class="settings-tag">${M.installKind}</span>`}
                            ${M.hasUpdate&&B`<span class="settings-tag settings-tag-skill">\u2191 ${M.version}</span>`}
                            <div class="settings-addon-actions">
                                ${M.installed?B`
                                    ${M.hasUpdate&&B`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>k(M.slug)}>${W===M.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>A(M.slug)}>${W===M.slug?"…":"Remove"}</button>
                                `:B`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>k(M.slug)}>${W===M.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${M.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(M.tags||[]).map((v)=>B`<span class="settings-tag">${v}</span>`)}${(M.skills||[]).map((v)=>B`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${v}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${x.length===0&&B`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${K&&B`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${O}>Restart Now</button>
                </div>
            `}
        </div>
    `}var QY=J_(()=>{w0()});var UD={};function u7(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function C2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function LD(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function VD(_,$){try{localStorage.setItem(_,$)}catch(j){}}function QD(_,$,j,G){try{return F$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return F$($,{fallback:$,min:j,max:G})}}function FD(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function ND(){let[_,$]=C(()=>u7("piclaw_vim_mode",!1)),[j,G]=C(()=>u7("piclaw_show_whitespace",!0)),[Z,X]=C(()=>u7("piclaw_md_live_preview",!0)),[Y,q]=C(()=>QD("piclaw_editor_font_size",13,10,24)),[K,L]=C(()=>LD("piclaw_editor_font_family","")),Q=P((V,F,N)=>{let U=!F;N(U),C2(V,U)},[]);return B`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let V=!_;$(V),C2("piclaw_vim_mode",V)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let V=!j;G(V),C2("piclaw_show_whitespace",V)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let V=!Z;X(V),C2("piclaw_md_live_preview",V)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${S_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(V)=>{q(V),FD("piclaw_editor_font_size",V)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${K}
                    onInput=${(V)=>{let F=V.target.value;L(F),VD("piclaw_editor_font_family",F)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var BD;var FY=J_(()=>{w0();a4();B4();BD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;P$({id:"editor",label:"Editor",icon:BD,component:ND,order:150})});var OD={};function NY(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function BY(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function HD(_,$,j,G){try{return F$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return F$($,{fallback:$,min:j,max:G})}}function ED(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function DD(){let[_,$]=C(()=>NY("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>HD("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>NY("piclaw_mindmap_animate",!0));return B`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),BY("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${S_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),ED("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),BY("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var zD;var UY=J_(()=>{w0();a4();B4();zD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;P$({id:"mindmap",label:"Mind Map",icon:zD,component:DD,order:170})});var AD={};function b7(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function v7(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function m7(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function c7(_,$){try{localStorage.setItem(_,$)}catch(j){}}function WD(){let[_,$]=C(()=>b7("piclaw_dev_mode",!1)),[j,G]=C(()=>m7("piclaw_addons_catalog_url","")),[Z,X]=C(()=>m7("piclaw_addons_catalog_urls","")),[Y,q]=C(()=>m7("piclaw_addons_repo_url","")),[K,L]=C(()=>b7("piclaw_debug_sse",!1)),[Q,V]=C(()=>b7("piclaw_debug_tool_calls",!1)),F=P(()=>{let N=!_;$(N),v7("piclaw_dev_mode",N)},[_]);return B`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${F} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&B`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(N)=>{let U=N.target.value;G(U),c7("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(N)=>{let U=N.target.value;X(U),c7("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(N)=>{let U=N.target.value;q(U),c7("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${K}
                        onChange=${()=>{let N=!K;L(N),v7("piclaw_debug_sse",N)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${Q}
                        onChange=${()=>{let N=!Q;V(N),v7("piclaw_debug_tool_calls",N)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var JD;var HY=J_(()=>{w0();a4();JD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;P$({id:"developer",label:"Developer",icon:JD,component:WD,order:900})});var WY={};X1(WY,{openSettingsDialog:()=>lD,SettingsDialogContent:()=>OY,SettingsDialog:()=>cD});function Z6(_){G6.push({ts:performance.now(),label:_})}function kD(){if(!G6.length)return;let _=G6[0].ts,$=G6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}G6.length=0}function wD(_){let $=f2.get(_);if($)return Promise.resolve($);let j=P2.get(_);if(j)return j;let G=MD[_]().then((Z)=>{return f2.set(_,Z),P2.delete(_),Z}).catch((Z)=>{throw P2.delete(_),Z});return P2.set(_,G),G}function R2(_="Loading…"){return B`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function OY({onClose:_}){Z6("SettingsDialogContent-render-start");let[$,j]=C(()=>A7()||"general"),[G,Z]=C(EY),[X,Y]=C(null),[q,K]=C(""),[,L]=C(0),[Q,V]=C(()=>Object.fromEntries(f2.entries())),[F,N]=C(null),[U,z]=C({compact:!1,narrow:!1}),E=u(null),H=u(null);g(()=>{Z6("SettingsDialogContent-mounted"),kD()},[]),g(()=>{let D=(y)=>{if(y.key==="Escape")_()};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[_]),g(()=>{let D=(y)=>{let I=typeof y?.detail?.section==="string"?y.detail.section.trim():"";if(I)j(I),K("")};return window.addEventListener("piclaw:open-settings",D),()=>window.removeEventListener("piclaw:open-settings",D)},[]),g(()=>{let D=()=>L((y)=>y+1);return window.addEventListener("piclaw:settings-panes-changed",D),()=>window.removeEventListener("piclaw:settings-panes-changed",D)},[]),g(()=>{fetch("/agent/settings-data").then((D)=>D.json()).then((D)=>{EY=D,Z(D)}).catch(()=>Z({}))},[]),g(()=>{let D=H.current;if(!D)return;let y=()=>{let I=D.clientWidth||0;z((R)=>{let S={compact:I>0&&I<=860,narrow:I>0&&I<=720};return R.compact===S.compact&&R.narrow===S.narrow?R:S})};if(y(),typeof ResizeObserver==="function"){let I=new ResizeObserver(()=>y());return I.observe(D),()=>I.disconnect()}return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);let k=BX(),A=[...zY,...k.map((D)=>({id:D.id,label:D.label,icon:D.icon,searchable:D.searchable||!1,placeholder:D.searchPlaceholder,order:D.order??500,isExtension:!0,component:D.component}))].sort((D,y)=>(D.order??500)-(y.order??500)),O=A.find((D)=>D.id===$)||zY.find((D)=>D.id===$);g(()=>{if(O?.searchable)requestAnimationFrame(()=>E.current?.focus())},[$]),g(()=>{if(O?.isExtension){N(null);return}let D=!1;if(Q[$]){N(null);return}return N($),wD($).then((y)=>{if(D)return;V((I)=>I?.[$]?I:{...I||{},[$]:y})}).catch((y)=>{if(D)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,y)}).finally(()=>{if(!D)N((y)=>y===$?null:y)}),()=>{D=!0}},[$,O?.isExtension,Q]);let w=P((D,y="info")=>{Y(D?{text:D,type:y}:null)},[]),x=P((D)=>{j(D),K("");let y=yD[D];if(y&&!DY.has(D))DY.add(D),y().then(()=>L((I)=>I+1)).catch((I)=>{})},[]),W=P((D)=>{Z((y)=>({...y||{},...D||{}}))},[]),J=()=>{if(O?.isExtension){if(!O.component)return R2("Loading pane…");let y=O.component;return B`<${y} filter=${q} />`}let D=Q[$];if(!D||F===$)return R2(`Loading ${O?.label||"settings"}…`);switch($){case"general":return B`<${D} settingsData=${G} setStatus=${w} mergeSettingsData=${W} />`;case"sessions":return B`<${D} settingsData=${G} setStatus=${w} mergeSettingsData=${W} />`;case"compaction":return B`<${D} settingsData=${G} setStatus=${w} mergeSettingsData=${W} />`;case"keyboard":return B`<${D} filter=${q} setStatus=${w} />`;case"workspace":return B`<${D} settingsData=${G} setStatus=${w} mergeSettingsData=${W} />`;case"environment":return B`<${D} settingsData=${G} filter=${q} setStatus=${w} mergeSettingsData=${W} />`;case"providers":return B`<${D} providers=${G?.providers} setStatus=${w} />`;case"models":return B`<${D} filter=${q} />`;case"theme":return B`<${D} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${w} mergeSettingsData=${W} />`;case"quick-actions":return B`<${D} filter=${q} setStatus=${w} mergeSettingsData=${W} />`;case"keychain":return B`<${D} filter=${q} />`;case"tools":return B`<${D} toolsets=${G?.toolsets} filter=${q} settingsData=${G} mergeSettingsData=${W} />`;case"addons":return B`<${D} setStatus=${w} filter=${q} />`;default:return R2("Loading settings…")}},M=!O;return Z6("SettingsDialogContent-render-end"),B`
        <div class="settings-dialog-backdrop" onClick=${(D)=>{if(D.target===D.currentTarget)_()}}>
            <div ref=${H} class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${O?.searchable&&B`
                        <input ref=${E} type="text" class="settings-header-filter"
                            placeholder=${O.placeholder||"Filter…"}
                            value=${q} onInput=${(D)=>K(D.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${A.map((D,y)=>{let I=y>0&&!A[y-1].isExtension,R=D.isExtension&&I;return B`
                                ${R&&B`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${D.id===$?"active":""}`} onClick=${()=>x(D.id)}>
                                    <span class="settings-nav-icon">${D.icon}</span>
                                    <span class="settings-nav-label">${D.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${M?R2("Loading settings…"):J()}
                    </main>
                </div>
                ${X&&B`
                    <div class=${`settings-status-bar settings-status-bar-${X.type}`}>
                        ${X.type==="info"&&B`<span class="settings-spinner"></span>`}
                        <span>${X.text}</span>
                        ${X.type!=="info"&&B`<button class="settings-status-dismiss" onClick=${()=>Y(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function cD(){let[_,$]=C(!1);if(g(()=>{let j=(Z)=>{let X=s4(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=W2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return B`<${C$} className="settings-portal"><${OY} onClose=${()=>$(!1)} /><//>`}function lD(_={}){p1(_)}var G6,EY=null,f2,P2,MD,yD,DY,TD,xD,ID,CD,PD,RD,fD,SD,gD,uD,bD,vD,mD,zY;var JY=J_(()=>{w0();J2();a4();kX();G6=[];Z6("module-eval-start");Z6("imports-done");f2=new Map,P2=new Map;f2.set("general",y7);MD={general:()=>Promise.resolve(y7),sessions:()=>Promise.resolve().then(() => (wX(),yX)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => (xX(),TX)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (gX(),SX)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (lX(),cX)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (pX(),hX)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (rX(),nX)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (oX(),dX)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (aX(),sX)).then((_)=>_.ThemeSection),"quick-actions":()=>Promise.resolve().then(() => (XY(),ZY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (qY(),YY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (LY(),KY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (QY(),VY)).then((_)=>_.AddonsSection)},yD={"editor-settings":()=>Promise.resolve().then(() => (FY(),UD)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (UY(),OD)).then(()=>{}),developer:()=>Promise.resolve().then(() => (HY(),AD)).then(()=>{})},DY=new Set;TD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,xD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,ID=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,CD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,PD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,RD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,fD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,SD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,gD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,uD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,bD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,vD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,mD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,zY=[{id:"general",label:"General",icon:TD,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:xD,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:ID,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:RD,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:CD,searchable:!1,order:15},{id:"environment",label:"Environment",icon:PD,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:fD,searchable:!1,order:20},{id:"models",label:"Models",icon:SD,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:gD,searchable:!1,order:40},{id:"quick-actions",label:"Quick Actions",icon:bD,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:vD,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:uD,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:mD,searchable:!0,placeholder:"Filter add-ons…",order:90}]});w0();class mj{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var X_=new mj;var h6=null,a8=null;function IN(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function cj(){if(a8)return Promise.resolve(a8);if(!h6)h6=import(IN()).then((_)=>{return a8=_,_}).catch((_)=>{throw h6=null,_});return h6}class lj{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await cj();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var t8={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new lj(_,$)}};function e8(){cj().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function hj(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function p6(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var pj="piclaw:editor-popout:",CN=300000;function nj(_){try{return _?.localStorage??null}catch{return null}}function PN(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function rj(_){return typeof _==="string"?_.trim():""}function dj(_){return(typeof _==="string"?_.trim():"")||null}function oj(_){return typeof _==="string"?_:void 0}function ij(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function sj(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function f4(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function RN(_,$=globalThis,j=Date.now()){let G=nj($),Z=rj(_?.path);if(!G||!Z)return null;let X={path:Z,content:oj(_?.content),mtime:ij(_?.mtime),paneOverrideId:dj(_?.paneOverrideId),viewState:sj(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let q=PN(j);try{return G.setItem(`${pj}${q}`,JSON.stringify(X)),q}catch{return null}}function _3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=nj($);if(!G||!Z)return null;let X=`${pj}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;p6(Z,X);try{let q=JSON.parse(Y),K=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(K+CN<j)return null;let L=rj(q?.path);if(!L)return null;return{path:L,content:oj(q?.content),mtime:ij(q?.mtime),paneOverrideId:dj(q?.paneOverrideId),viewState:sj(q?.viewState),capturedAt:K}}catch{return null}}function n6(_,$=globalThis,j=Date.now()){let G=RN(_,$,j);return G?{editor_popout:G}:null}function A1(_){try{return _(),!0}catch($){return!1}}function aj(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:q,resizeObserver:K}=_;A1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),A1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),A1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),A1(()=>{q?.disconnect?.()}),A1(()=>{K?.disconnect?.()})}function tj(_){_.syncHostLayout(),A1(()=>{_.terminal?.renderer?.remeasureFont?.()}),A1(()=>{_.fitAddon?.fit?.()}),A1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function ej(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)A1(()=>{j($)});return A1(()=>{G?.close?.()}),A1(()=>{Z?.dispose?.()}),A1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function b1(_){try{return _(),!0}catch($){return!1}}function _G(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:q}=_;if(b1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let K=j?.querySelector?.(".terminal-live-host");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=Z.background,K.style.color=Z.foreground;let L=j?.querySelector?.("canvas");if(L&&typeof L==="object"&&"style"in L)L.style.backgroundColor=Z.background,L.style.color=Z.foreground}),b1(()=>{if(G?.options)G.options.theme=Z}),X)b1(()=>{G?.reset?.()});b1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),b1(()=>{G?.loadFonts?.()}),b1(()=>{G?.renderer?.remeasureFont?.()}),b1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),b1(()=>{q?.()}),b1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),b1(()=>{G?.refresh?.()})}var fN="/static/js/vendor/ghostty-web.js",SN="/static/js/vendor/ghostty-vt.wasm",g4="piclaw://terminal",gN='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',uN='400 13px "FiraCode Nerd Font Mono"',bN='700 13px "FiraCode Nerd Font Mono"',YG="x-piclaw-terminal-client",$G="piclaw_terminal_client",vN={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},mN={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},r6=null,$3=null;function cN(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function lN(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(SN,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!cN(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function hN(){let $=await import(new URL(fN,window.location.origin).href);if(!r6)r6=lN(()=>Promise.resolve($.init?.())).catch((j)=>{throw r6=null,j});return await r6,$}async function pN(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!$3)$3=Promise.allSettled([document.fonts.load(uN),document.fonts.load(bN),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await $3}function jG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function j3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem($G)||"").trim():"";if(j)return j;let G=jG(_);return $?.setItem?.($G,G),G}catch($){return jG(_)}}async function nN(_=j3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[YG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function rN(_=j3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[YG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function dN(_,$=null,j=j3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function oN(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function t$(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function S4(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function GG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function x5(_,$){let j=GG(_),G=GG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function qG(_){let $=S4(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return x5($,j)>=x5($,G)?"#ffffff":"#000000"}function d6(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function ZG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function t_(_,$,j=4.5){let G=S4(_),Z=S4($);if(!G||!Z)return $;if(x5(G,Z)>=j)return d6(Z);let X=S4(qG(_));if(!X)return d6(Z);let Y=X,q=1,K=0,L=1;for(let F=0;F<14;F+=1){let N=(K+L)/2,U=ZG(Z,X,N);if(x5(G,U)>=j)Y=U,q=N,L=N;else K=N}let Q=d6(Y),V=S4(Q);while(V&&x5(G,V)<j&&q<1)q=Math.min(1,q+0.01),Q=d6(ZG(Z,X,q)),V=S4(Q);return Q}function iN(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function XG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=oN(_,$),G=j?mN:vN,Z=t$("--bg-primary",j?"#000000":"#ffffff",$),X=t$("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=t_(Z,X||qG(Z),7),q=t$("--accent-color","#1d9bf0",$),K=t$("--danger-color",j?"#ff7b72":"#cf222e",$),L=t$("--success-color",j?"#7ee787":"#1a7f37",$),Q=t$("--bg-hover",j?"#1d1f23":"#e8ebed",$),V=t$("--accent-soft-strong",iN(q,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:t_(Z,q,3),cursorAccent:Z,selectionBackground:V,selectionForeground:Y,black:t_(Z,Q,3),red:t_(Z,K,4.5),green:t_(Z,L,4.5),yellow:t_(Z,G.yellow,4.5),blue:t_(Z,q,4.5),magenta:t_(Z,G.magenta,4.5),cyan:t_(Z,G.cyan,4.5),white:Y,brightBlack:t_(Z,G.brightBlack,3),brightRed:t_(Z,G.brightRed,4.5),brightGreen:t_(Z,G.brightGreen,4.5),brightYellow:t_(Z,G.brightYellow,4.5),brightBlue:t_(Z,G.brightBlue,4.5),brightMagenta:t_(Z,G.brightMagenta,4.5),brightCyan:t_(Z,G.brightCyan,4.5),brightWhite:Y}}class G3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=f4("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await hN();if(await pN(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:gN,fontSize:13,theme:XG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);await j.open($),$.__terminal=j,this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=XG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;_G({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=rN().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await nN();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(dN($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){aj({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){tj({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=ej({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var Z3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new G3(_,$)}},X3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===g4?1e4:!1},mount(_,$){return new G3(_,$)}};function C1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function o6(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function KG(_,$={}){if(C1($))return null;if(o6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:sN(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function Y3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function q3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let q=_.document.createElement("p");if(q.setAttribute("style","margin: 0; line-height: 1.5;"),q.textContent=G,X.appendChild(Y),X.appendChild(q),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function K3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function L3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function k1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function V3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function LG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,q]of Object.entries(X)){let K=String(Y||"").trim();if(!K)continue;if(q===null||q===void 0||q==="")G.searchParams.delete(K);else G.searchParams.set(K,String(q))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function sN(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function aN(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function VG(_,$={}){if(C1($))return null;if(o6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:aN(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function u4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function tN(_){try{return JSON.parse(_)}catch{return null}}function eN(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function _B(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function QG(_){try{return _?.close?.(),!0}catch($){return!1}}class Q3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;QG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=_B($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||tN;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,QG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=eN($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var I5=()=>{throw Error("Operation requires compiling with --exportRuntime")},$B=typeof BigUint64Array<"u",C5=Symbol();var jB=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function FG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return jB.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function NG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return FG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,q,K){let L=$.memory||G.memory;throw Error(`abort: ${j(L,X)} at ${j(L,Y)}:${q}:${K}`)},G.trace=G.trace||function(X,Y,...q){let K=$.memory||G.memory;console.log(`trace: ${j(K,X)}${Y?" ":""}${q.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function BG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||I5,Y=j.__pin||I5,q=j.__unpin||I5,K=j.__collect||I5,L=j.__rtti_base,Q=L?(D)=>D[L>>>2]:I5;_.__new=X,_.__pin=Y,_.__unpin=q,_.__collect=K;function V(D){let y=new Uint32Array(G.buffer);if((D>>>=0)>=Q(y))throw Error(`invalid id: ${D}`);return y[(L+4>>>2)+D]}function F(D){let y=V(D);if(!(y&7))throw Error(`not an array: ${D}, flags=${y}`);return y}function N(D){return 31-Math.clz32(D>>>6&31)}function U(D){if(D==null)return 0;let y=D.length,I=X(y<<1,2),R=new Uint16Array(G.buffer);for(let S=0,v=I>>>1;S<y;++S)R[v+S]=D.charCodeAt(S);return I}_.__newString=U;function z(D){if(D==null)return 0;let y=new Uint8Array(D),I=X(y.length,1);return new Uint8Array(G.buffer).set(y,I),I}_.__newArrayBuffer=z;function E(D){if(!D)return null;let y=G.buffer;if(new Uint32Array(y)[D+-8>>>2]!==2)throw Error(`not a string: ${D}`);return FG(y,D)}_.__getString=E;function H(D,y,I){let R=G.buffer;if(I)switch(D){case 2:return new Float32Array(R);case 3:return new Float64Array(R)}else switch(D){case 0:return new(y?Int8Array:Uint8Array)(R);case 1:return new(y?Int16Array:Uint16Array)(R);case 2:return new(y?Int32Array:Uint32Array)(R);case 3:return new(y?BigInt64Array:BigUint64Array)(R)}throw Error(`unsupported align: ${D}`)}function k(D,y=0){let I=y,R=F(D),S=N(R),v=typeof I!=="number",c=v?I.length:I,h=X(c<<S,R&4?D:1),_0;if(R&4)_0=h;else{Y(h);let b=X(R&2?16:12,D);q(h);let t=new Uint32Array(G.buffer);if(t[b+0>>>2]=h,t[b+4>>>2]=h,t[b+8>>>2]=c<<S,R&2)t[b+12>>>2]=c;_0=b}if(v){let b=H(S,R&2048,R&4096),t=h>>>S;if(R&16384)for(let s=0;s<c;++s)b[t+s]=I[s];else b.set(I,t)}return _0}_.__newArray=k;function A(D){let y=new Uint32Array(G.buffer),I=y[D+-8>>>2],R=F(I),S=N(R),v=R&4?D:y[D+4>>>2],c=R&2?y[D+12>>>2]:y[v+-4>>>2]>>>S;return H(S,R&2048,R&4096).subarray(v>>>=S,v+c)}_.__getArrayView=A;function O(D){let y=A(D),I=y.length,R=Array(I);for(let S=0;S<I;S++)R[S]=y[S];return R}_.__getArray=O;function w(D){let y=G.buffer,I=new Uint32Array(y)[D+-4>>>2];return y.slice(D,D+I)}_.__getArrayBuffer=w;function x(D){if(!Z)throw Error("Operation requires compiling with --exportTable");let y=new Uint32Array(G.buffer)[D>>>2];return Z.get(y)}_.__getFunction=x;function W(D,y,I){return new D(J(D,y,I))}function J(D,y,I){let R=G.buffer,S=new Uint32Array(R);return new D(R,S[I+4>>>2],S[I+8>>>2]>>>y)}function M(D,y,I){_[`__get${y}`]=W.bind(null,D,I),_[`__get${y}View`]=J.bind(null,D,I)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((D)=>{M(D,D.name,31-Math.clz32(D.BYTES_PER_ELEMENT))}),$B)[BigUint64Array,BigInt64Array].forEach((D)=>{M(D,D.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,ZB(j,_)}function UG(_){return typeof Response<"u"&&_ instanceof Response}function GB(_){return _ instanceof WebAssembly.Module}async function F3(_,$={}){if(UG(_=await _))return i6(_,$);let j=GB(_)?_:await WebAssembly.compile(_),G=NG($),Z=await WebAssembly.instantiate(j,$),X=BG(G,Z);return{module:j,instance:Z,exports:X}}async function i6(_,$={}){if(!WebAssembly.instantiateStreaming)return F3(UG(_=await _)?_.arrayBuffer():_,$);let j=NG($),G=await WebAssembly.instantiateStreaming(_,$),Z=BG(j,G.instance);return{...G,exports:Z}}function ZB(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let L=X.shift();if(!Object.hasOwn(Y,L))Y[L]={};Y=Y[L]}let q=X[0],K=q.indexOf("#");if(K>=0){let L=q.substring(0,K),Q=Y[L];if(typeof Q>"u"||!Q.prototype){let V=function(...F){return V.wrap(V.prototype.constructor(0,...F))};if(V.prototype={valueOf(){return this[C5]}},V.wrap=function(F){return Object.create(V.prototype,{[C5]:{value:F,writable:!1}})},Q)Object.getOwnPropertyNames(Q).forEach((F)=>Object.defineProperty(V,F,Object.getOwnPropertyDescriptor(Q,F)));Y[L]=V}if(q=q.substring(K+1),Y=Y[L].prototype,/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4))){let V=_[G.replace("set:","get:")],F=_[G.replace("get:","set:")];Object.defineProperty(Y,q,{get(){return V(this[C5])},set(N){F(this[C5],N)},enumerable:!0})}}else if(q==="constructor")(Y[q]=function(...V){return j(V.length),Z(...V)}).original=Z;else(Y[q]=function(...V){return j(V.length),Z(this[C5],...V)}).original=Z}else if(/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4)))Object.defineProperty(Y,q,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[q]=(...L)=>{return j(L.length),Z(...L)}).original=Z;else Y[q]=Z}return $}function N3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var YB="/static/js/vendor/remote-display-decoder.wasm",s6=null;function HG(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function EG(){if(s6)return s6;return s6=(async()=>{try{let G=function(Z,X,Y,q,K,L,Q){let V=HG(X),F=j.__pin(j.__newArrayBuffer(V));try{return j[Z](F,Y,q,K,L,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift)}finally{j.__unpin(F),N3(j)}},_=await fetch(YB,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof i6==="function"?await i6(_,{}):await F3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,q,K,L){return G("processRawRect",Z,X,Y,q,K,L)},processCopyRect(Z,X,Y,q,K,L){return j.processCopyRect(Z,X,Y,q,K,L)},processRreRect(Z,X,Y,q,K,L){return G("processRreRect",Z,X,Y,q,K,L)},processHextileRect(Z,X,Y,q,K,L){return G("processHextileRect",Z,X,Y,q,K,L)},processZrleTileData(Z,X,Y,q,K,L){return G("processZrleTileData",Z,X,Y,q,K,L)},decodeRawRectToRgba(Z,X,Y,q){let K=HG(Z),L=j.__pin(j.__newArrayBuffer(K));try{let Q=j.__pin(j.decodeRawRectToRgba(L,X,Y,q.bitsPerPixel,q.bigEndian?1:0,q.trueColor?1:0,q.redMax,q.greenMax,q.blueMax,q.redShift,q.greenShift,q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(Q))}finally{j.__unpin(Q)}}finally{j.__unpin(L),N3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),s6}function b4(_,$,j){return Math.max($,Math.min(j,_))}function a6(_,$,j){let G=new Uint8Array(6),Z=b4(Math.floor(Number($||0)),0,65535),X=b4(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=b4(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function M$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function U3(_){let $=M$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return M$(0);let G=Number(_?.buttons||0);if(G&1)return M$(0);if(G&4)return M$(1);if(G&2)return M$(2);return 0}function e$(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if(($==="pointerleave"||$==="pointerout")&&$!=="pointerdown")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function DG(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function v1(_){return String(_||"").toLowerCase()==="touch"}function qB(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function H3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return qB(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function zG(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!H3(_)}function OG(_){return String(_||"").toLowerCase()!=="mouse"}function E3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),L=(Number(_||0)-Number(j?.left||0))/q,Q=(Number($||0)-Number(j?.top||0))/K;return{x:b4(Math.floor(L*X),0,Math.max(0,X-1)),y:b4(Math.floor(Q*Y),0,Math.max(0,Y-1))}}function WG(_,$,j,G=0){let Z=Number(_)<0?8:16,X=b4(Number(G||0)|Z,0,255);return[a6(X,$,j),a6(Number(G||0),$,j)]}function JG(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function AG(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function _4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function kG(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),q=Math.max(1,Math.floor(Number(G||0))),K=Math.min(Z/Y,X/q);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var B3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)B3[`F${_}`]=65470+(_-1);function D3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(B3,X))return B3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var l_=Uint8Array,U1=Uint16Array,w3=Int32Array,t6=new l_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),e6=new l_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),A3=new l_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),TG=function(_,$){var j=new U1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new w3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},xG=TG(t6,2),IG=xG.b,k3=xG.r;IG[28]=258,k3[258]=28;var CG=TG(e6,0),KB=CG.b,MG=CG.r,M3=new U1(32768);for(Q_=0;Q_<32768;++Q_)m1=(Q_&43690)>>1|(Q_&21845)<<1,m1=(m1&52428)>>2|(m1&13107)<<2,m1=(m1&61680)>>4|(m1&3855)<<4,M3[Q_]=((m1&65280)>>8|(m1&255)<<8)>>1;var m1,Q_,c1=function(_,$,j){var G=_.length,Z=0,X=new U1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new U1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var q;if(j){q=new U1(1<<$);var K=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var L=Z<<4|_[Z],Q=$-_[Z],V=Y[_[Z]-1]++<<Q;for(var F=V|(1<<Q)-1;V<=F;++V)q[M3[V]>>K]=L}}else{q=new U1(G);for(Z=0;Z<G;++Z)if(_[Z])q[Z]=M3[Y[_[Z]-1]++]>>15-_[Z]}return q},y$=new l_(288);for(Q_=0;Q_<144;++Q_)y$[Q_]=8;var Q_;for(Q_=144;Q_<256;++Q_)y$[Q_]=9;var Q_;for(Q_=256;Q_<280;++Q_)y$[Q_]=7;var Q_;for(Q_=280;Q_<288;++Q_)y$[Q_]=8;var Q_,S5=new l_(32);for(Q_=0;Q_<32;++Q_)S5[Q_]=5;var Q_,LB=c1(y$,9,0),VB=c1(y$,9,1),QB=c1(S5,5,0),FB=c1(S5,5,1),z3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},P1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},O3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},T3=function(_){return(_+7)/8|0},f5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new l_(_.subarray($,j))};var NB=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],V1=function(_,$,j){var G=Error($||NB[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,V1);if(!j)throw G;return G},BB=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new l_(0);var Y=!j,q=Y||$.i!=2,K=$.i;if(Y)j=new l_(Z*3);var L=function(G0){var O0=j.length;if(G0>O0){var u0=new l_(Math.max(O0*2,G0));u0.set(j),j=u0}},Q=$.f||0,V=$.p||0,F=$.b||0,N=$.l,U=$.d,z=$.m,E=$.n,H=Z*8;do{if(!N){Q=P1(_,V,1);var k=P1(_,V+1,3);if(V+=3,!k){var A=T3(V)+4,O=_[A-4]|_[A-3]<<8,w=A+O;if(w>Z){if(K)V1(0);break}if(q)L(F+O);j.set(_.subarray(A,w),F),$.b=F+=O,$.p=V=w*8,$.f=Q;continue}else if(k==1)N=VB,U=FB,z=9,E=5;else if(k==2){var x=P1(_,V,31)+257,W=P1(_,V+10,15)+4,J=x+P1(_,V+5,31)+1;V+=14;var M=new l_(J),D=new l_(19);for(var y=0;y<W;++y)D[A3[y]]=P1(_,V+y*3,7);V+=W*3;var I=z3(D),R=(1<<I)-1,S=c1(D,I,1);for(var y=0;y<J;){var v=S[P1(_,V,R)];V+=v&15;var A=v>>4;if(A<16)M[y++]=A;else{var c=0,h=0;if(A==16)h=3+P1(_,V,3),V+=2,c=M[y-1];else if(A==17)h=3+P1(_,V,7),V+=3;else if(A==18)h=11+P1(_,V,127),V+=7;while(h--)M[y++]=c}}var _0=M.subarray(0,x),b=M.subarray(x);z=z3(_0),E=z3(b),N=c1(_0,z,1),U=c1(b,E,1)}else V1(1);if(V>H){if(K)V1(0);break}}if(q)L(F+131072);var t=(1<<z)-1,s=(1<<E)-1,K0=V;for(;;K0=V){var c=N[O3(_,V)&t],Z0=c>>4;if(V+=c&15,V>H){if(K)V1(0);break}if(!c)V1(2);if(Z0<256)j[F++]=Z0;else if(Z0==256){K0=V,N=null;break}else{var E0=Z0-254;if(Z0>264){var y=Z0-257,B0=t6[y];E0=P1(_,V,(1<<B0)-1)+IG[y],V+=B0}var V0=U[O3(_,V)&s],Q0=V0>>4;if(!V0)V1(3);V+=V0&15;var b=KB[Q0];if(Q0>3){var B0=e6[Q0];b+=O3(_,V)&(1<<B0)-1,V+=B0}if(V>H){if(K)V1(0);break}if(q)L(F+131072);var U0=F+E0;if(F<b){var M0=X-b,r=Math.min(b,U0);if(M0+F<0)V1(3);for(;F<r;++F)j[F]=G[M0+F]}for(;F<U0;++F)j[F]=j[F-b]}}if($.l=N,$.p=K0,$.b=F,$.f=Q,N)Q=1,$.m=z,$.d=U,$.n=E}while(!Q);return F!=j.length&&Y?f5(j,0,F):j.subarray(0,F)},Z$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},P5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},W3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:RG,l:0};if(Z==1){var Y=new l_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(w,x){return w.f-x.f}),j.push({s:-1,f:25001});var q=j[0],K=j[1],L=0,Q=1,V=2;j[0]={s:-1,f:q.f+K.f,l:q,r:K};while(Q!=Z-1)q=j[j[L].f<j[V].f?L++:V++],K=j[L!=Q&&j[L].f<j[V].f?L++:V++],j[Q++]={s:-1,f:q.f+K.f,l:q,r:K};var F=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>F)F=X[G].s;var N=new U1(F+1),U=y3(j[Q-1],N,0);if(U>$){var G=0,z=0,E=U-$,H=1<<E;X.sort(function(x,W){return N[W.s]-N[x.s]||x.f-W.f});for(;G<Z;++G){var k=X[G].s;if(N[k]>$)z+=H-(1<<U-N[k]),N[k]=$;else break}z>>=E;while(z>0){var A=X[G].s;if(N[A]<$)z-=1<<$-N[A]++-1;else++G}for(;G>=0&&z;--G){var O=X[G].s;if(N[O]==$)--N[O],++z}U=$}return{t:new l_(N),l:U}},y3=function(_,$,j){return _.s==-1?Math.max(y3(_.l,$,j+1),y3(_.r,$,j+1)):$[_.s]=j},yG=function(_){var $=_.length;while($&&!_[--$]);var j=new U1(++$),G=0,Z=_[0],X=1,Y=function(K){j[G++]=K};for(var q=1;q<=$;++q)if(_[q]==Z&&q!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[q]}return{c:j.subarray(0,G),n:$}},R5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},PG=function(_,$,j){var G=j.length,Z=T3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},wG=function(_,$,j,G,Z,X,Y,q,K,L,Q){Z$($,Q++,j),++Z[256];var V=W3(Z,15),F=V.t,N=V.l,U=W3(X,15),z=U.t,E=U.l,H=yG(F),k=H.c,A=H.n,O=yG(z),w=O.c,x=O.n,W=new U1(19);for(var J=0;J<k.length;++J)++W[k[J]&31];for(var J=0;J<w.length;++J)++W[w[J]&31];var M=W3(W,7),D=M.t,y=M.l,I=19;for(;I>4&&!D[A3[I-1]];--I);var R=L+5<<3,S=R5(Z,y$)+R5(X,S5)+Y,v=R5(Z,F)+R5(X,z)+Y+14+3*I+R5(W,D)+2*W[16]+3*W[17]+7*W[18];if(K>=0&&R<=S&&R<=v)return PG($,Q,_.subarray(K,K+L));var c,h,_0,b;if(Z$($,Q,1+(v<S)),Q+=2,v<S){c=c1(F,N,0),h=F,_0=c1(z,E,0),b=z;var t=c1(D,y,0);Z$($,Q,A-257),Z$($,Q+5,x-1),Z$($,Q+10,I-4),Q+=14;for(var J=0;J<I;++J)Z$($,Q+3*J,D[A3[J]]);Q+=3*I;var s=[k,w];for(var K0=0;K0<2;++K0){var Z0=s[K0];for(var J=0;J<Z0.length;++J){var E0=Z0[J]&31;if(Z$($,Q,t[E0]),Q+=D[E0],E0>15)Z$($,Q,Z0[J]>>5&127),Q+=Z0[J]>>12}}}else c=LB,h=y$,_0=QB,b=S5;for(var J=0;J<q;++J){var B0=G[J];if(B0>255){var E0=B0>>18&31;if(P5($,Q,c[E0+257]),Q+=h[E0+257],E0>7)Z$($,Q,B0>>23&31),Q+=t6[E0];var V0=B0&31;if(P5($,Q,_0[V0]),Q+=b[V0],V0>3)P5($,Q,B0>>5&8191),Q+=e6[V0]}else P5($,Q,c[B0]),Q+=h[B0]}return P5($,Q,c[256]),Q+h[256]},UB=new w3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),RG=new l_(0),HB=function(_,$,j,G,Z,X){var Y=X.z||_.length,q=new l_(G+Y+5*(1+Math.ceil(Y/7000))+Z),K=q.subarray(G,q.length-Z),L=X.l,Q=(X.r||0)&7;if($){if(Q)K[0]=X.r>>3;var V=UB[$-1],F=V>>13,N=V&8191,U=(1<<j)-1,z=X.p||new U1(32768),E=X.h||new U1(U+1),H=Math.ceil(j/3),k=2*H,A=function(R0){return(_[R0]^_[R0+1]<<H^_[R0+2]<<k)&U},O=new w3(25000),w=new U1(288),x=new U1(32),W=0,J=0,M=X.i||0,D=0,y=X.w||0,I=0;for(;M+2<Y;++M){var R=A(M),S=M&32767,v=E[R];if(z[S]=v,E[R]=S,y<=M){var c=Y-M;if((W>7000||D>24576)&&(c>423||!L)){Q=wG(_,K,0,O,w,x,J,D,I,M-I,Q),D=W=J=0,I=M;for(var h=0;h<286;++h)w[h]=0;for(var h=0;h<30;++h)x[h]=0}var _0=2,b=0,t=N,s=S-v&32767;if(c>2&&R==A(M-s)){var K0=Math.min(F,c)-1,Z0=Math.min(32767,M),E0=Math.min(258,c);while(s<=Z0&&--t&&S!=v){if(_[M+_0]==_[M+_0-s]){var B0=0;for(;B0<E0&&_[M+B0]==_[M+B0-s];++B0);if(B0>_0){if(_0=B0,b=s,B0>K0)break;var V0=Math.min(s,B0-2),Q0=0;for(var h=0;h<V0;++h){var U0=M-s+h&32767,M0=z[U0],r=U0-M0&32767;if(r>Q0)Q0=r,v=U0}}}S=v,v=z[S],s+=S-v&32767}}if(b){O[D++]=268435456|k3[_0]<<18|MG[b];var G0=k3[_0]&31,O0=MG[b]&31;J+=t6[G0]+e6[O0],++w[257+G0],++x[O0],y=M+_0,++W}else O[D++]=_[M],++w[_[M]]}}for(M=Math.max(M,y);M<Y;++M)O[D++]=_[M],++w[_[M]];if(Q=wG(_,K,L,O,w,x,J,D,I,M-I,Q),!L)X.r=Q&7|K[Q/8|0]<<3,Q-=7,X.h=E,X.p=z,X.i=M,X.w=y}else{for(var M=X.w||0;M<Y+L;M+=65535){var u0=M+65535;if(u0>=Y)K[Q/8|0]=L,u0=Y;Q=PG(K,Q+1,_.subarray(M,u0))}X.i=Y}return f5(q,0,G+T3(Q)+Z)};var fG=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var q=Math.min(Y+2655,X);for(;Y<q;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},EB=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new l_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return HB(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var SG=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var DB=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=fG();Z.p($.dictionary),SG(_,2,Z.d())}},zB=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)V1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)V1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var J3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new l_(32768),this.p=new l_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)V1(5);if(this.d)V1(4);if(!this.p.length)this.p=$;else if($.length){var j=new l_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=BB(this.p,this.s,this.o);this.ondata(f5(G,j,this.s.b),this.d),this.o=f5(G,this.s.b-32768),this.s.b=this.o.length,this.p=f5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function gG(_,$){if(!$)$={};var j=fG();j.p(_);var G=EB(_,$,$.dictionary?6:2,4);return DB(G,$),SG(G,G.length-4,j.d()),G}var uG=function(){function _($,j){J3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(J3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(zB(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)V1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}J3.prototype.c.call(this,j)},_}();var OB=typeof TextDecoder<"u"&&new TextDecoder,WB=0;try{OB.decode(RG,{stream:!0}),WB=1}catch(_){}var JB=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],AB=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],kB=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],MB=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],yB=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],wB=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],TB=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],xB=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],mG=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;mG[_]=$}function cG(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function lG(_){let $=0n,j=cG(_);for(let G of j)$=$<<8n|BigInt(G);return $}function IB(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function v4(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function bG(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function CB(_){let $=v4(lG(_),yB,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of TB){j=bG(j,X),G=bG(G,X);let Y=j<<28n|G;Z.push(v4(Y,wB,56))}return Z}function PB(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(xB[j][X][Y])}return $}function RB(_,$){let j=v4(_,kB,32)^BigInt($),G=PB(j);return v4(G,MB,32)}function vG(_,$){let j=CB($),G=v4(lG(_),JB,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let q of j){let K=X,L=(Z^RB(X,q))&0xffffffffn;Z=K,X=L}let Y=X<<32n|Z;return IB(v4(Y,AB,64),8)}function fB(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=mG[Z]}return j}function hG(_,$){let j=cG($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=fB(_),Z=new Uint8Array(16);return Z.set(vG(j.slice(0,8),G),0),Z.set(vG(j.slice(8,16),G),8),Z}var R1="vnc";function SB(_){return Number(_)}function gB(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=SB(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function l4(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function uB(_,$){let j=l4(_),G=l4($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function bB(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=l4(Z);j.set(X,G),G+=X.byteLength}return j}function vB(){return(_)=>{let $=l4(_);try{let j=[],G=new uG((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return bB(j)}catch(j){try{let G=gG($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function mB(_){return new TextEncoder().encode(String(_||""))}function m4(_){return new TextDecoder().decode(l4(_))}function cB(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function lB(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function pG(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function hB(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function pB(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function nG(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function c4(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function dG(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function nB(_,$,j,G){let Z=G||h4,X=l4(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),q=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<q)throw Error(`Incomplete raw rectangle payload: expected ${q} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),L=0,Q=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let F=dG(X,L,Y,Z.bigEndian),N=c4(F>>>Z.redShift&Z.redMax,Z.redMax),U=c4(F>>>Z.greenShift&Z.greenMax,Z.greenMax),z=c4(F>>>Z.blueShift&Z.blueMax,Z.blueMax);K[Q]=N,K[Q+1]=U,K[Q+2]=z,K[Q+3]=255,L+=Y,Q+=4}return K}function X$(_,$,j){let G=j||h4,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=dG(_,$,Z,G.bigEndian);return{rgba:[c4(X>>>G.redShift&G.redMax,G.redMax),c4(X>>>G.greenShift&G.greenMax,G.greenMax),c4(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function w$(_,$,j,G,Z,X,Y){if(!Y)return;for(let q=0;q<X;q+=1)for(let K=0;K<Z;K+=1){let L=((G+q)*$+(j+K))*4;_[L]=Y[0],_[L+1]=Y[1],_[L+2]=Y[2],_[L+3]=Y[3]}}function oG(_,$,j,G,Z,X,Y){for(let q=0;q<X;q+=1){let K=q*Z*4,L=((G+q)*$+j)*4;_.set(Y.subarray(K,K+Z*4),L)}}function rG(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function rB(_,$,j,G,Z,X,Y){let q=Z||h4,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let L=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+L)return null;let Q=_.slice($+4,$+4+L),V;try{V=Y(Q)}catch{return{consumed:4+L,skipped:!0}}let F=0,N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let z=Math.min(64,G-U);for(let E=0;E<j;E+=64){let H=Math.min(64,j-E);if(V.byteLength<F+1)return null;let k=V[F++],A=k&127,O=(k&128)!==0;if(!O&&A===0){let w=H*z*K;if(V.byteLength<F+w)return null;let x=X(V.slice(F,F+w),H,z,q);F+=w,oG(N,j,E,U,H,z,x);continue}if(!O&&A===1){let w=X$(V,F,q);if(!w)return null;F+=w.bytesPerPixel,w$(N,j,E,U,H,z,w.rgba);continue}if(!O&&A>1&&A<=16){let w=[];for(let M=0;M<A;M+=1){let D=X$(V,F,q);if(!D)return null;F+=D.bytesPerPixel,w.push(D.rgba)}let x=A<=2?1:A<=4?2:4,W=Math.ceil(H*x/8),J=W*z;if(V.byteLength<F+J)return null;for(let M=0;M<z;M+=1){let D=F+M*W;for(let y=0;y<H;y+=1){let I=y*x,R=D+(I>>3),S=8-x-(I&7),v=V[R]>>S&(1<<x)-1;w$(N,j,E+y,U+M,1,1,w[v])}}F+=J;continue}if(O&&A===0){let w=0,x=0;while(x<z){let W=X$(V,F,q);if(!W)return null;F+=W.bytesPerPixel;let J=rG(V,F);if(!J)return null;F+=J.consumed;for(let M=0;M<J.runLength;M+=1)if(w$(N,j,E+w,U+x,1,1,W.rgba),w+=1,w>=H){if(w=0,x+=1,x>=z)break}}continue}if(O&&A>0){let w=[];for(let J=0;J<A;J+=1){let M=X$(V,F,q);if(!M)return null;F+=M.bytesPerPixel,w.push(M.rgba)}let x=0,W=0;while(W<z){if(V.byteLength<F+1)return null;let J=V[F++],M=J,D=1;if(J&128){M=J&127;let I=rG(V,F);if(!I)return null;F+=I.consumed,D=I.runLength}let y=w[M];if(!y)return null;for(let I=0;I<D;I+=1)if(w$(N,j,E+x,U+W,1,1,y),x+=1,x>=H){if(x=0,W+=1,W>=z)break}}continue}return{consumed:4+L,skipped:!0}}}return{consumed:4+L,rgba:N,decompressed:V}}function dB(_,$,j,G,Z){let X=Z||h4,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),L=4+Y+K*(Y+8);if(_.byteLength<$+L)return null;let Q=$+4,V=X$(_,Q,X);if(!V)return null;Q+=V.bytesPerPixel;let F=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);w$(F,j,0,0,j,G,V.rgba);for(let N=0;N<K;N+=1){let U=X$(_,Q,X);if(!U)return null;if(Q+=U.bytesPerPixel,_.byteLength<Q+8)return null;let z=new DataView(_.buffer,_.byteOffset+Q,8),E=z.getUint16(0,!1),H=z.getUint16(2,!1),k=z.getUint16(4,!1),A=z.getUint16(6,!1);Q+=8,w$(F,j,E,H,k,A,U.rgba)}return{consumed:Q-$,rgba:F}}function oB(_,$,j,G,Z,X){let Y=Z||h4,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),L=$,Q=[0,0,0,255],V=[255,255,255,255];for(let F=0;F<G;F+=16){let N=Math.min(16,G-F);for(let U=0;U<j;U+=16){let z=Math.min(16,j-U);if(_.byteLength<L+1)return null;let E=_[L++];if(E&1){let H=z*N*q;if(_.byteLength<L+H)return null;let k=X(_.slice(L,L+H),z,N,Y);L+=H,oG(K,j,U,F,z,N,k);continue}if(E&2){let H=X$(_,L,Y);if(!H)return null;Q=H.rgba,L+=H.bytesPerPixel}if(w$(K,j,U,F,z,N,Q),E&4){let H=X$(_,L,Y);if(!H)return null;V=H.rgba,L+=H.bytesPerPixel}if(E&8){if(_.byteLength<L+1)return null;let H=_[L++];for(let k=0;k<H;k+=1){let A=V;if(E&16){let D=X$(_,L,Y);if(!D)return null;A=D.rgba,L+=D.bytesPerPixel}if(_.byteLength<L+2)return null;let O=_[L++],w=_[L++],x=O>>4,W=O&15,J=(w>>4)+1,M=(w&15)+1;w$(K,j,U+x,F+W,J,M,A)}}}}return{consumed:L-$,rgba:K}}var h4={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class _2{protocol=R1;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:nB,this.pipeline=_.pipeline||null,this.encodings=gB(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...h4},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:vB()}receive(_){if(_)this.buffer=uB(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=m4(Z),Y=cB(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=lB(Y),j.push(mB(this.clientVersionText)),$.push({type:"protocol-version",protocol:R1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let L=m4(this.consume(4+K).slice(4));throw Error(L||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:R1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:R1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+q)break;let K=m4(this.consume(4+q).slice(4));throw Error(K||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:R1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:R1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(hG(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let q=m4(this.consume(4+Y).slice(4));throw Error(q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:R1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),q=pG(Z,4),K=Z.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let L=this.consume(24),Q=new DataView(L.buffer,L.byteOffset,L.byteLength);if(this.framebufferWidth=Q.getUint16(0,!1),this.framebufferHeight=Q.getUint16(2,!1),this.serverPixelFormat=pG(Q,4),this.serverName=m4(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(hB(this.clientPixelFormat)),j.push(pB(this.encodings)),j.push(nG(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:R1,width:X,height:Y,name:this.serverName,pixelFormat:q}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),q=4,K=[],L=!1,Q=!!this.pipeline;for(let F=0;F<Y;F+=1){if(this.buffer.byteLength<q+12){L=!0;break}let N=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,12),U=N.getUint16(0,!1),z=N.getUint16(2,!1),E=N.getUint16(4,!1),H=N.getUint16(6,!1),k=N.getInt32(8,!1);if(q+=12,k===0){let A=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),O=E*H*A;if(this.buffer.byteLength<q+O){L=!0;break}let w=this.buffer.slice(q,q+O);if(q+=O,Q)this.pipeline.processRawRect(w,U,z,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:z,width:E,height:H});else K.push({kind:"rgba",x:U,y:z,width:E,height:H,rgba:this.decodeRawRect(w,E,H,this.clientPixelFormat)});continue}if(k===2){let A=dB(this.buffer,q,E,H,this.clientPixelFormat);if(!A){L=!0;break}if(Q){let O=this.buffer.slice(q,q+A.consumed);this.pipeline.processRreRect(O,U,z,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:z,width:E,height:H})}else K.push({kind:"rgba",x:U,y:z,width:E,height:H,rgba:A.rgba});q+=A.consumed;continue}if(k===1){if(this.buffer.byteLength<q+4){L=!0;break}let A=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,4),O=A.getUint16(0,!1),w=A.getUint16(2,!1);if(q+=4,Q)this.pipeline.processCopyRect(U,z,E,H,O,w),K.push({kind:"pipeline",x:U,y:z,width:E,height:H});else K.push({kind:"copy",x:U,y:z,width:E,height:H,srcX:O,srcY:w});continue}if(k===16){let A=rB(this.buffer,q,E,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!A){L=!0;break}if(q+=A.consumed,A.skipped)continue;if(Q&&A.decompressed)this.pipeline.processZrleTileData(A.decompressed,U,z,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:z,width:E,height:H});else K.push({kind:"rgba",x:U,y:z,width:E,height:H,rgba:A.rgba});continue}if(k===5){let A=oB(this.buffer,q,E,H,this.clientPixelFormat,this.decodeRawRect);if(!A){L=!0;break}if(Q){let O=this.buffer.slice(q,q+A.consumed);this.pipeline.processHextileRect(O,U,z,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:z,width:E,height:H})}else K.push({kind:"rgba",x:U,y:z,width:E,height:H,rgba:A.rgba});q+=A.consumed;continue}if(k===-223){if(this.framebufferWidth=E,this.framebufferHeight=H,Q)this.pipeline.initFramebuffer(E,H);K.push({kind:"resize",x:U,y:z,width:E,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(L)break;this.consume(q);let V={type:"framebuffer-update",protocol:R1,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(Q)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(nG(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:R1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let q=m4(this.consume(Y));$.push({type:"clipboard",protocol:R1,text:q}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var h1="piclaw://vnc";function aG(_){let $=String(_||"").trim();return $?`${h1}/${encodeURIComponent($)}`:h1}var x3="piclaw:vnc-popout:",iB=60000;function tG(_=globalThis){try{return _?.localStorage??null}catch{return null}}function sB(_=globalThis){let $=hj(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function eG(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(x3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{p6(_,G)}}function aB(_,$=globalThis,j=Date.now()){let G=_4(_);if(G===null)return null;let Z=tG($);if(!Z)return null;eG(Z,j);let X=sB($);try{return Z.setItem(`${x3}${X}`,JSON.stringify({password:G,expiresAt:j+iB})),X}catch{return null}}function tB(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=tG($);if(!Z)return null;eG(Z,j);let X=`${x3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let q=JSON.parse(Y),K=Number(q?.expiresAt||0);if(!Number.isFinite(K)||K<=j)return null;return _4(q?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function eB(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:aG(G)},X=aB($,j);if(X)Z.vnc_secret=X;return Z}function _U(_){let $=String(_||"");if($===h1)return null;if(!$.startsWith(`${h1}/`))return null;let j=$.slice(`${h1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function l1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function $U(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function jU(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function GU(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function ZU(_){return String(_||"").trim()||"localhost"}function XU(_,$){let j=ZU(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function YU(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function iG(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function sG(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function qU(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class _Z{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=_U($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=iG("vnc_handoff");let j=iG("vnc_secret"),G=tB(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=YU({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=XU(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=_4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),q=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=jU();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
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
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=_4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=_4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=kG($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return E3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(a6(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,q=new Map,K=new Set,L=!1,Q=(W)=>this.getFramebufferPointFromEvent(W)||X.get(W?.pointerId)||{x:0,y:0},V=(W)=>{if(!W||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let J=this.canvas.getBoundingClientRect?.();if(!J||!J.width||!J.height)return null;return E3(W.clientX,W.clientY,J,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},F=(W)=>{let J=Y.get(W);if(J)G.clearTimeout(J),Y.delete(W)},N=(W)=>{let J=q.get(W);if(J?.holdTimer)G.clearTimeout(J.holdTimer);q.delete(W)},U=()=>{for(let W of q.keys())N(W)},z=()=>{if(!K.size)L=!1},E=(W,J=80)=>{let M=String(W?.pointerType||"").toLowerCase();if(!OG(M))return;let D=Number(W?.pointerId);if(!Number.isFinite(D))return;F(D);let y=G.setTimeout(()=>{if(Y.delete(D),!Z.has(D)&&!this.pointerButtonMask)return;k({pointerId:D,pointerType:M,type:"pointercancel",clientX:W?.clientX,clientY:W?.clientY},{resetAll:!0})},J);Y.set(D,y)},H=(W=null)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;for(let M of Y.keys())F(M);U(),K.clear(),L=!1;let J=W||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,J.x,J.y)},k=(W,J={})=>{if(J.resetAll){let R=Number(W?.pointerId);F(R),H(Q(W));try{this.canvas?.releasePointerCapture?.(R)}catch{}return}let M=Q(W),D=Number(W?.pointerId);F(D),N(D),K.delete(D),z();let y=Z.has(D),I=Z.get(D)??U3(W);if(!y&&!I&&!this.pointerButtonMask)return;if(Z.delete(D),X.delete(D),I)this.pointerButtonMask&=~I;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);try{this.canvas?.releasePointerCapture?.(D)}catch{}},A=(W)=>{if(L)return;let J=q.get(W);if(!J||J.dragActivated)return;J.dragActivated=!0,J.holdTimer=null;let M=M$(0);if(!M)return;Z.set(W,(Z.get(W)??0)|M),this.pointerButtonMask|=M,E({pointerId:W,pointerType:"touch",clientX:J.lastClientX,clientY:J.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,J.lastPoint.x,J.lastPoint.y)},O=(W,J,M={})=>{let D=q.get(W);if(!D)return!1;let y=J||D.lastPoint||{x:0,y:0},I=Number.isFinite(M.clientX)?Number(M.clientX):D.lastClientX,R=Number.isFinite(M.clientY)?Number(M.clientY):D.lastClientY;if(K.delete(W),M.cancelled||L){if(N(W),z(),Z.has(W)||this.pointerButtonMask)H(y);return!0}if(D.dragActivated||Z.has(W))return k({pointerId:W,pointerType:"touch",type:"pointerup",clientX:I,clientY:R}),z(),!0;let S=Date.now()-D.startedAt,v=zG({startX:D.startClientX,startY:D.startClientY,clientX:I,clientY:R,elapsedMs:S});if(F(W),N(W),X.delete(W),z(),v){let c=M$(0);this.sendPointerEvent(c,y.x,y.y),this.sendPointerEvent(0,y.x,y.y)}else this.sendPointerEvent(this.pointerButtonMask,y.x,y.y);return!0};this.canvas.addEventListener("contextmenu",(W)=>{W.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(W)=>{let J=this.getFramebufferPointFromEvent(W);if(!J)return;let M=String(W?.pointerType||"").toLowerCase(),D=v1(M);if(X.set(W.pointerId,J),D){let y=q.get(W.pointerId);if(y){if(y.lastClientX=Number(W?.clientX||0),y.lastClientY=Number(W?.clientY||0),y.lastPoint=J,!y.dragActivated&&H3({startX:y.startClientX,startY:y.startClientY,clientX:y.lastClientX,clientY:y.lastClientY}))N(W.pointerId),q.set(W.pointerId,{...y,holdTimer:null,dragActivated:!1});if(!y.dragActivated){this.sendPointerEvent(this.pointerButtonMask,J.x,J.y);return}}if(L)return}if(Z.has(W.pointerId)&&e$(W)){k(W,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(W.pointerId)&&e$(W)){H(J);return}if(Z.has(W.pointerId))E(W);this.sendPointerEvent(this.pointerButtonMask,J.x,J.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(W)=>{let J=this.getFramebufferPointFromEvent(W);if(!J)return;let M=String(W?.pointerType||"").toLowerCase(),D=v1(M);if(W.preventDefault(),this.canvas?.focus?.(),X.set(W.pointerId,J),D){if(K.add(W.pointerId),K.size>1){let R=[...K];L=!0,H(J);for(let S of R)K.add(S);L=!0;return}N(W.pointerId);let I={startClientX:Number(W?.clientX||0),startClientY:Number(W?.clientY||0),lastClientX:Number(W?.clientX||0),lastClientY:Number(W?.clientY||0),startedAt:Date.now(),lastPoint:J,holdTimer:null,dragActivated:!1};I.holdTimer=G.setTimeout(()=>{A(W.pointerId)},260),q.set(W.pointerId,I),this.sendPointerEvent(this.pointerButtonMask,J.x,J.y);return}if(M==="mouse")try{this.canvas?.setPointerCapture?.(W.pointerId)}catch{}let y=U3(W);if(!y)return;Z.set(W.pointerId,(Z.get(W.pointerId)??0)|y),this.pointerButtonMask|=y,E(W),this.sendPointerEvent(this.pointerButtonMask,J.x,J.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(W)=>{if(W.preventDefault(),v1(W?.pointerType)){let J=Q(W);if(O(W.pointerId,J,{clientX:W?.clientX,clientY:W?.clientY}))return}k(W)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(W)=>{if(W.preventDefault(),v1(W?.pointerType)){let J=Q(W);if(O(W.pointerId,J,{clientX:W?.clientX,clientY:W?.clientY,cancelled:!0}))return}k(W,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(W)=>{if(q.has(W.pointerId)&&v1(W?.pointerType)){O(W.pointerId,Q(W),{clientX:W?.clientX,clientY:W?.clientY,cancelled:!0});return}if(!Z.has(W.pointerId))return;if(!e$(W))return;k(W,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(W)=>{if(q.has(W.pointerId)&&v1(W?.pointerType)){O(W.pointerId,Q(W),{clientX:W?.clientX,clientY:W?.clientY,cancelled:!0});return}if(!Z.has(W.pointerId))return;if(!e$(W))return;k(W,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(W)=>{k(W,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(W)=>{if(!Z.size&&!this.pointerButtonMask||!e$(W))return;if(!Z.has(W.pointerId)&&!this.pointerButtonMask)return;k(W,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(W)=>{if(!Z.has(W.pointerId)&&!this.pointerButtonMask&&!q.has(W.pointerId))return;if(W.preventDefault?.(),v1(W?.pointerType)){let J=Q(W);if(O(W.pointerId,J,{clientX:W?.clientX,clientY:W?.clientY}))return}k(W,{resetAll:!Z.has(W.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(W)=>{if(!Z.has(W.pointerId)&&!this.pointerButtonMask&&!q.has(W.pointerId))return;if(W.preventDefault?.(),v1(W?.pointerType)){let J=Q(W);if(O(W.pointerId,J,{clientX:W?.clientX,clientY:W?.clientY,cancelled:!0}))return}k(W,{resetAll:!0})},{signal:$,passive:!1});let w=(W)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;if(!DG(W))return;let J=W?.changedTouches?.[0]||W?.touches?.[0]||null,M=V(J)||X.values().next().value||q.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&q.size===1){let[D]=q.entries().next().value||[];if(Number.isFinite(D)){O(D,M,{clientX:J?.clientX,clientY:J?.clientY,cancelled:W?.type==="touchcancel"});return}}H(M)},x=(W,J={})=>{if(!Z.size&&!this.pointerButtonMask&&!q.has(W?.pointerId))return;if(!e$(W))return;if(W?.preventDefault?.(),v1(W?.pointerType)){let M=Q(W);if(O(W.pointerId,M,{clientX:W?.clientX,clientY:W?.clientY,cancelled:J.resetAll===!0}))return}k(W,{resetAll:J.resetAll===!0||!Z.has(W?.pointerId)})};this.canvas.addEventListener("touchend",w,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",w,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",w,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",w,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",w,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",w,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(W)=>{x(W)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(W)=>{x(W,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;H()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;H()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")H()},{signal:$}),this.canvas.addEventListener("wheel",(W)=>{let J=this.getFramebufferPointFromEvent(W);if(!J)return;W.preventDefault();for(let M of WG(W.deltaY,J.x,J.y,this.pointerButtonMask))this.socketBoundary?.send?.(M)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(JG(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=D3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(AG(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??D3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new _2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await EG(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(q,K,L,Q)=>G.decodeRawRectToRgba(q,K,L,Q);let X=_4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new _2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new Q3({url:GU(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(q)=>{this.applyMetrics(q)},onMessage:(q)=>{this.handleSocketMessage(q)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(sG({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),sG({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await $U(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${l1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!qU(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return eB(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var I3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===h1||$.startsWith(`${h1}/`)?9000:!1},mount(_,$){return new _Z(_,$)}};import{classHighlighter as KU,highlightTree as LU,StreamLanguage as p4,cssLanguage as VU,cppLanguage as QU,goLanguage as FU,htmlLanguage as NU,javascriptLanguage as BU,jsxLanguage as UU,tsxLanguage as HU,typescriptLanguage as EU,jsonLanguage as DU,markdownLanguage as zU,pythonLanguage as OU,rustLanguage as WU,StandardSQL as JU,xmlLanguage as AU,yamlLanguage as kU,dockerFile as MU,powerShell as yU,ruby as wU,shell as TU,swift as xU,toml as IU}from"#editor-vendor/codemirror";function $4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var CU={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},PU=p4.define(TU).parser,RU=p4.define(yU).parser,fU=p4.define(MU).parser,SU=p4.define(wU).parser,gU=p4.define(xU).parser,uU=p4.define(IU).parser;function $Z(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return CU[$]||String(_||"").trim()}function bU(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return BU.parser;case"ts":case"typescript":return EU.parser;case"jsx":return UU.parser;case"tsx":return HU.parser;case"py":case"python":return OU.parser;case"json":return DU.parser;case"css":return VU.parser;case"html":return NU.parser;case"xml":return AU.parser;case"yaml":case"yml":return kU.parser;case"md":case"markdown":return zU.parser;case"sql":return JU.language.parser;case"go":return FU.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return QU.parser;case"sh":case"bash":case"shell":case"zsh":return PU;case"ps1":case"powershell":return RU;case"dockerfile":return fU;case"rb":case"ruby":return SU;case"rs":case"rust":return WU.parser;case"swift":return gU;case"toml":return uU;default:return null}}function $2(_,$){let j=bU($);if(!j)return $4(_);let G=[];try{let Y=j.parse(_);LU(Y,KU,(q,K,L)=>{if(!L||q>=K)return;G.push({from:q,to:K,cls:L})})}catch{return $4(_)}if(!G.length)return $4(_);G.sort((Y,q)=>Y.from-q.from||Y.to-q.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=$4(_.slice(Z,Y.from));X+=`<span class="${$4(Y.cls)}">${$4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=$4(_.slice(Z));return X}g5();var q2=/#(\w+)/g,aU=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),tU=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),eU=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),QZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},_H=new Set(["http:","https:","mailto:",""]);function $H(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(QZ[j]||new Set).has(G)||eU.has(G)}function b3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function X4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!_H.has(G.protocol))return null;return G.href}catch{return null}}function FZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let q=Y.tagName.toLowerCase();if(!tU.has(q)){let L=Y.parentNode;if(!L)continue;while(Y.firstChild)L.insertBefore(Y.firstChild,Y);L.removeChild(Y);continue}let K=QZ[q]||new Set;for(let L of Array.from(Y.attributes)){let Q=L.name.toLowerCase(),V=L.value;if(Q.startsWith("on")){Y.removeAttribute(L.name);continue}if($H(q,Q)){if(Q==="href"){let F=X4(V);if(!F)Y.removeAttribute(L.name);else if(Y.setAttribute(L.name,F),q==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(F))Y.setAttribute("target","_blank")}}else if(Q==="src"){let F=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,N=X4(F,{allowDataImage:q==="img"});if(!N)Y.removeAttribute(L.name);else Y.setAttribute(L.name,N)}continue}Y.removeAttribute(L.name)}}return j.body.innerHTML}function NZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function u5(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=NZ(j);if(Z===j)break;j=Z}return j}function jH(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function GH(_){let{text:$,frontmatter:j}=jH(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function ZH(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let q of j){if(!X&&q.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&q.trim().match(/^```\s*$/)){let K=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${K}@@`),X=!1,Y=[];continue}if(X)Y.push(q);else Z.push(q)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function XH(_){if(!_)return _;return u5(_,5)}function YH(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function qH(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function KH(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=XH(X);return`<div class="mermaid-container" data-mermaid="${YH(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function BZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function LH(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=u5(Z,2),q=X||"plaintext",K=$2(Y,X);return`<pre><code class="hljs language-${b3(q)}">${K}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var VH={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function QH(_,$){let j=VH[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${b3(q)}"`)}return G.join("")}function UZ(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,q=X.endsWith("/")?X.slice(0,-1).trim():X,[K=""]=q.split(/\s+/,1),L=K.toLowerCase();if(!L||!aU.has(L))return $;if(L==="br")return Z?"":"<br>";if(Z)return`</${L}>`;let Q=q.slice(K.length).trim(),V=QH(L,Q);return`<${L}${V}>`})}function HZ(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function EZ(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function FH(_){if(!window.katex)return _;let $=(Y)=>NZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],K=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(L)=>{let Q=q.length;return q.push(L),`@@CODE_BLOCK_${Q}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(L)=>{let Q=q.length;return q.push(L),`@@CODE_INLINE_${Q}@@`}),{html:K,blocks:q}},G=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,L)=>{let Q=Number(L);return q[Q]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,K)=>{try{let L=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${q}${L}`}catch(L){return`<span class="math-error" title="${b3(L.message)}">${Y}</span>`}}),G(X,Z.blocks)}function NH(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(q2.lastIndex=0,!q2.test(Y))continue;q2.lastIndex=0;let q=X.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let K=Y.split(q2);if(K.length<=1)continue;let L=$.createDocumentFragment();K.forEach((Q,V)=>{if(V%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",Q),F.textContent=`#${Q}`,L.appendChild(F)}else L.appendChild($.createTextNode(Q))}),X.parentNode?.replaceChild(L,X)}return $.body.innerHTML}function BH(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function UH(_){let $=GH(_||""),j=BH($),{text:G,blocks:Z}=ZH(j),X=u5(G,2),q=BZ(X).replace(/</g,"&lt;");return{safeHtml:UZ(q),mermaidBlocks:Z}}function e_(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=UH(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=HZ(X),X=EZ(X),X=LH(X),X=FH(X),X=NH(X),X=KH(X,Z),X=FZ(X,j),X}function b5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=u5($,2),Z=BZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=UZ(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=HZ(Y),Y=EZ(Y),Y=FZ(Y),Y}function HH(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((K)=>{let[L,Q]=K.split(",").map(Number);return{x:L,y:Q}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let K=1;K<Y.length-1;K++){let L=Y[K-1],Q=Y[K],V=Y[K+1],F=Q.x-L.x,N=Q.y-L.y,U=V.x-Q.x,z=V.y-Q.y,E=Math.sqrt(F*F+N*N),H=Math.sqrt(U*U+z*z),k=Math.min($,E/2,H/2);if(k<0.5){q.push(`L ${Q.x},${Q.y}`);continue}let A=Q.x-F/E*k,O=Q.y-N/E*k,w=Q.x+U/H*k,x=Q.y+z/H*k,J=F*z-N*U>0?1:0;q.push(`L ${A},${O}`),q.push(`A ${k},${k} 0 0 ${J} ${w},${x}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${q.join(" ")}"${X}/>`})}async function L$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=VZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let q=Y.dataset.mermaid,K=qH(q||""),L=u5(K,2),Q=await $(L,{...Z,transparent:!0});Q=HH(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(K),Y.removeAttribute("data-mermaid")}}f_();function wZ(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date-$,Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let K=$.toLocaleDateString(void 0,{weekday:"short"}),L=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${L}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function i5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function i_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function Q4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function x$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function $E(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),L=Z.startsWith("/")?Z:`${q?`${q}/`:""}${Z}`,Q=[];for(let F of L.split("/")){if(!F||F===".")continue;if(F===".."){if(Q.length>0)Q.pop();continue}Q.push(F)}let V=Q.join("/");return`${d5(V)}${X}${Y}`}function s5(_){return _?.preview||null}function jE(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function GE(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function ZE(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${x$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${x$(i_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${x$(Q4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${x$(GE($))}</span>`),G.push(`<span><strong>extension:</strong> ${x$(jE(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${x$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function XE(_){let $=s5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=ZE(_,$);if($.kind==="image"){let G=$.url||($.path?d5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${x$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=e_($.text||"",null,{rewriteImageSrc:(Z)=>$E(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${x$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class V7{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=XE(this.context)}getContent(){let _=s5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=s5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var Q7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=s5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new V7(_,$)}},F7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return s5(_)||_?.path?1:!1},mount(_,$){return new V7(_,$)}};var YE=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),qE={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},KE={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function xZ(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function TZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class IZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=xZ(j),X=KE[Z]||"\uD83D\uDCC4",Y=qE[Z]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${TZ(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${TZ(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let K=q.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let L=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class CZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var N7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=xZ(_?.path);if(!$||!YE.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new IZ(_,$);return new CZ(_,$)}};var LE=/\.(csv|tsv)$/i;function PZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class RZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${PZ(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${PZ(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class fZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var B7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!LE.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new RZ(_,$);return new fZ(_,$)}};var VE=/\.pdf$/i;function QE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class SZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${QE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class gZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var U7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!VE.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new SZ(_,$);return new gZ(_,$)}};var FE=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function H7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class uZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${H7(Z)}" alt="${H7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${H7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class bZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var E7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!FE.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new uZ(_,$);return new bZ(_,$)}};var NE=/\.(html|htm)$/i;function vZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class mZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${vZ(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${vZ(j)}</div>
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
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class cZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var D7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!NE.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new mZ(_,$);return new cZ(_,$)}};var BE=/\.(mp4|m4v|mov|webm|ogv)$/i;function UE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class lZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${UE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class hZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var z7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!BE.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new lZ(_,$);return new hZ(_,$)}};f_();function HE(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function pZ(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:q,pollMs:K=3000,ownerDocument:L=document}=_,Q=null,V=null,F=!1,N=!1,U=!1;async function z(){if(N||U||F)return;let O=j();if(!O)return;try{let w=await X7($);if(N||U||!w?.mtime)return;if(w.mtime!==O)F=!0,H(),k()}catch(w){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",w)}}function E(){if(H(),N)return;Q=setInterval(z,K)}function H(){if(Q)clearInterval(Q),Q=null}function k(){if(V||N)return;let O=L.createElement("div");O.className="editor-conflict-bar",O.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,O.addEventListener("click",(w)=>{let x=w.target.closest("[data-action]");if(!x)return;let W=x.getAttribute("data-action");if(W==="reload")A(),X();else if(W==="save-copy"){let J=HE($);Y(J)}else if(W==="overwrite")A(),q();else if(W==="dismiss")A()}),V=O,G.insertBefore(O,Z)}function A(){if(V)V.remove(),V=null;F=!1,E()}return{start(){E()},stop(){H()},onSaved(O){F=!1,U=!1,E()},dispose(){if(N=!0,H(),V)V.remove(),V=null}}}var EE=/\.mindmap\.ya?ml$/i,D2=String(Date.now());function DE(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function nZ(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function O7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function zE(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function OE(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(G)}class rZ{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${DE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class dZ{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(nZ())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,zE("/static/css/mindmap.css?v="+D2),await Promise.all([O7("/static/js/vendor/d3-mindmap.min.js?v="+D2),O7("/static/js/vendor/js-yaml.min.js?v="+D2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),OE(this.mindmapEl);let j=nZ(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await O7("/static/js/vendor/mindmap-editor.js?v="+D2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=pZ({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var W7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!EE.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new rZ(_,$);return new dZ(_,$)}};class oZ{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var e0=new oZ;var i4=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};w0();function iZ(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,q]=C({text:"",totalLines:0}),[K,L]=C(null),[Q,V]=C(null),[F,N]=C(null),U=u(null),z=u(0),E=u(!1),H=u(""),k=u(""),A=u(!1),O=u(0),w=u(null),x=u(null),W=u(null),J=u(null),M=u(!1),D=u(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:q,pendingRequest:K,setPendingRequest:L,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:F,setSteerQueuedTurnId:N,lastAgentEventRef:U,lastSilenceNoticeRef:z,isAgentRunningRef:E,draftBufferRef:H,thoughtBufferRef:k,previewResyncPendingRef:A,previewResyncGenerationRef:O,pendingRequestRef:w,stalledPostIdRef:x,currentTurnIdRef:W,steerQueuedTurnIdRef:J,thoughtExpandedRef:M,draftExpandedRef:D}}w0();var WE=0.1,_X=4,$X=4,sZ=160,aZ=1600,tZ=200,eZ=1600;function V$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function jX(_=V$()){return _>0?Math.floor(_*WE):0}function a5(_,$=V$(),j=0){let G=jX($)+_X+(j>0?$X+Math.max(0,j):0),Z=$>0?Math.floor($-G):aZ;return Math.min(Math.max(Number(_)||0,sZ),Math.max(sZ,Math.min(aZ,Z)))}function t5(_,$=V$(),j=0){let G=jX($)+$X+(j>0?_X+Math.max(0,j):0),Z=$>0?Math.floor($-G):eZ;return Math.min(Math.max(Number(_)||0,tZ),Math.max(tZ,Math.min(eZ,Z)))}function GX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientX,N=$.current||280,U=Q.currentTarget;U.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let z=F,E=(k)=>{z=k.clientX;let A=a5(N+(k.clientX-F),V$(),j?.current||0);V.style.setProperty("--sidebar-width",`${A}px`),$.current=A},H=()=>{let k=a5(N+(z-F),V$(),j?.current||0);$.current=k,U.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",L_("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,X=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let N=F.clientX,U=$.current||280,z=Q.currentTarget;z.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(k)=>{let A=k.touches[0];if(!A)return;k.preventDefault();let O=a5(U+(A.clientX-N),V$(),j?.current||0);V.style.setProperty("--sidebar-width",`${O}px`),$.current=O},H=()=>{z.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",L_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,Y=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientX,N=j.current||$.current||280,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let z=F,E=(k)=>{z=k.clientX;let A=t5(N+(k.clientX-F),V$(),$?.current||0);V.style.setProperty("--editor-width",`${A}px`),j.current=A},H=()=>{let k=t5(N+(z-F),V$(),$?.current||0);j.current=k,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,q=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let N=F.clientX,U=j.current||$.current||280,z=Q.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let E=(k)=>{let A=k.touches[0];if(!A)return;k.preventDefault();let O=t5(U+(A.clientX-N),V$(),$?.current||0);V.style.setProperty("--editor-width",`${O}px`),j.current=O},H=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",L_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,K=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientY,N=G?.current||200,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let z=F,E=(k)=>{z=k.clientY;let A=Math.min(Math.max(N-(k.clientY-F),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${A}px`),G)G.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let k=Math.min(Math.max(N-(z-F),100),window.innerHeight*0.5);if(G)G.current=k;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,L=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let N=F.clientY,U=G?.current||200,z=Q.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let E=(k)=>{let A=k.touches[0];if(!A)return;k.preventDefault();let O=Math.min(Math.max(U-(A.clientY-N),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",L_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:L}}w0();function J7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var ZX=J7("warning",30000),XX=J7("finalize",120000),YX=J7("refresh",30000),qX=30000;function KX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function e5(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function LX(_=30000){let[,$]=C(0);g(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function VX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function z2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function JE(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function I$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function Q$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function O2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return Q$(_)?"Compacting context":"Working..."}function QX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function _6(_,$=Date.now()){let j=z2(_);if(j===null)return null;return QX(Math.max(0,$-j))}function FX(_,$=Date.now()){let j=JE(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${QX(G)}`}w0();function AY(_={}){p1(_)}function kY(){let[_,$]=C(!1);if(g(()=>{let Z=(Y)=>{let q=s4(Y?.detail?.section);if(q)try{window.__piclawSettingsRequestedSection=q}catch(K){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=W2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(g(()=>{Promise.resolve().then(() => (JY(),WY)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return B`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;return B`
        <div class="settings-dialog-backdrop" onClick=${(Z)=>{if(Z.target===Z.currentTarget)$(!1)}}>
            <${j} onClose=${()=>$(!1)} />
        </div>
    `}w0();function hD(_,$){return new URL(String(_||""),$).toString()}function MY(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=P((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},q=hD(Z,window.location.href);if(Y)window.history.replaceState(null,"",q);else window.history.pushState(null,"",q);$(window.location.href)},[]);return{locationParams:q0(()=>new URL(_).searchParams,[_]),navigate:j}}w0();w0();function yY(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function l7(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var pD=400,h7=60,nD=220,p7="mdPreviewHeight";function rD(){return yY(localStorage,p7,h7,nD)}function S2({getContent:_,path:$,onClose:j}){let[G,Z]=C(""),[X,Y]=C(rD),q=u(null),K=u(null),L=u(""),Q=u(_);return Q.current=_,g(()=>{let N=()=>{let z=Q.current?.()||"";if(z===L.current)return;L.current=z;try{let E=e_(z,null);Z(E)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};N();let U=setInterval(N,pD);return()=>clearInterval(U)},[]),g(()=>{if(q.current&&G)L$(q.current).catch((N)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",N,{path:$})})},[G]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(N)=>{N.preventDefault();let U=N.clientY,z=K.current?.offsetHeight||X,E=K.current?.parentElement,H=E?E.offsetHeight*0.7:500,k=N.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=(w)=>{let x=Math.min(Math.max(z-(w.clientY-U),h7),H);Y(x)},O=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",l7(localStorage,p7,K.current?.offsetHeight||X),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",O)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",O)}}
            onTouchStart=${(N)=>{N.preventDefault();let U=N.touches[0];if(!U)return;let z=U.clientY,E=K.current?.offsetHeight||X,H=K.current?.parentElement,k=H?H.offsetHeight*0.7:500,A=N.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let O=(x)=>{let W=x.touches[0];if(!W)return;x.preventDefault();let J=Math.min(Math.max(E-(W.clientY-z),h7),k);Y(J)},w=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",l7(localStorage,p7,K.current?.offsetHeight||X),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",w),document.removeEventListener("touchcancel",w)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",w),document.addEventListener("touchcancel",w)}}
        ></div>
        <div class="md-preview-panel" ref=${K} style=${{height:X+"px"}}>
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
    `}function wY(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function dD(_){return _==="error"?"Could not open branch window":"Opening branch…"}function TY(_){return B`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${dD(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function xY(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:q,handleTabActivate:K,previewTabs:L,diffTabs:Q,handleTabTogglePreview:V,handleTabToggleDiff:F,editorContainerRef:N,getPaneContent:U,panePopoutPath:z}=_,E=j&&!G&&Z,H=X?`Pane window controls for ${X}`:"Pane window controls";return B`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${E&&B`
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
                ${Y.length>1&&B`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${Y.map((k)=>B`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${k.id===q?" active":""}`}
                          onClick=${(A)=>{K(k.id),A.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${k.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${q&&Q.has(q)&&B`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{F(q),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${q&&L.has(q)&&B`
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
        ${j?B`<div class="editor-pane-host" ref=${N}></div>`:B`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${z||"No pane path provided."}</p>
            </div>
          `}
        ${j&&q&&L.has(q)&&B`
          <${S2}
            getContent=${U}
            path=${q}
            onClose=${()=>V(q)}
          />
        `}
      </div>
    </div>
  `}w0();w0();function g2(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function oD(_,$){let j=g2(_),G=g2($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function X6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function n7(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function iD(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function sD(_,$,j=0,G=(Z)=>Z){let Z=g2($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=iD(X.length,j),q=X.map((K)=>g2(G(K)));for(let K of Y)if(q[K].startsWith(Z))return K;for(let K of Y)if(q[K].includes(Z))return K;return-1}function r7(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(oD(X,$))return j}return sD(Z,$,0,G)}f_();function u2(_){return String(_||"").trim().toLowerCase()}function d7(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return u2($[1]||"")}function aD(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=u2(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function IY(_,$,j={}){let G=d7($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return aD(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return u2(X?.agent_name).startsWith(G)})}function o7(_){let $=u2(_);return $?`@${$} `:""}function CY(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function PY(_,$,j={}){if(!_||_.isComposing)return!1;if(!CY(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function i7(_,$={}){if(!CY($))return!1;return String(_||"")==="@"}function s7(_){let $=a7(_);return $?`@${$}`:""}function a7(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function b2(_,$=""){let j=String(_||""),G=a7(j),Z=a7($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function tD(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function v2(_,$={}){let j=s7(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=tD(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function RY(_,$,j){let G=s7(_),Z=s7($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function m2({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function c2({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function l2(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";if(_?.type==="intent")return"dot";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function fY(_,$={}){return l2(_,$)==="dot"}w0();var SY=350;function eD(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function _z(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let q=eD(j);return{show:!0,statusClass:j,label:q,title:`Connection: ${q}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):SY,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!0,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function t7(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):SY,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return g(()=>{if(_==="disconnected"){let q=Date.now();Z((K)=>K??q),Y(q);return}Z(null),Y(Date.now())},[_]),g(()=>{if(_!=="disconnected"||G===null)return;let q=j-(Date.now()-G);if(q<=0)return;let K=setTimeout(()=>{Y(Date.now())},q);return()=>clearTimeout(K)},[_,G,j]),q0(()=>_z(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}w0();function y1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let q=`${_}-file-pill`,K=`${_}-file-name`,L=`${_}-file-remove`,Q=Y==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${q} title=${j||$} onClick=${Z}>
      ${Q}
      <span class=${K}>${$}</span>
      ${G&&B`
        <button
          class=${L}
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
  `}async function e7(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function $z(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function jz(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function _9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=C1(_),Z=$z(_),X=jz(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function gY(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let q=/[\s\n]$/.test(G)?"":" ";return`${G}${q}${Y}`}function uY(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let q=String(Y[0].transcript||"").trim();if(!q)continue;if(Y.isFinal)j=`${j} ${q}`.trim();else G=`${G} ${q}`.trim()}return{finalText:j,interimText:G}}function $9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var Gz=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],bY="piclaw_compose_history";function Zz(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function Xz(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return bY;return`${bY}:${encodeURIComponent($)}`}function Yz(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),q=Boolean(X?.archived_at);if(Y!==q)return Y?1:-1;let K=String(Z?.agent_name||"").trim(),L=String(X?.agent_name||"").trim(),Q=K.localeCompare(L,void 0,{sensitivity:"base"});if(Q!==0)return Q;let V=String(Z?.chat_jid||"").trim(),F=String(X?.chat_jid||"").trim();return V.localeCompare(F,void 0,{sensitivity:"base"})}),G}function qz(_){return Boolean(_?.is_active&&!_?.archived_at)}function Kz(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function vY(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function Lz(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function Vz(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function Qz(_){return _==="abort"||_==="compacting"}function Fz(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!0}}function Nz({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,q="Compact context",K=X!=null?`Context: ${Y6(X)} / ${Y6(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,L=typeof j==="string"?j.trim():"",Q=typeof G==="string"?G.trim():"",V=L?`${K} — ${Q||"Smart compaction"} · ${L}`:`${K} — ${"Compact context"}`,F=9,N=2*Math.PI*9,U=Z/100*N,z=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class=${`compose-context-pie icon-btn${L?" is-compacting":""}`}
            type="button"
            title=${V}
            aria-label=${L?`Smart compaction ${L}`:"Compact context"}
            onClick=${(E)=>{E.preventDefault(),E.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${z}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${N}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${L&&B`<span class="compose-context-pie-timer">${L}</span>`}
        </button>
    `}function Y6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function Bz(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function mY(_,$){let j=Number(_?.contextWindow??_?.context_window),G=Bz($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${Y6(G)} tokens, but this model only fits ${Y6(j)}. Compact first.`,tokens:G,contextWindow:j}}function j9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${Y6($)} ctx`}function Uz(_,$){let j=typeof _==="string"?_.trim():"",G=j9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function Hz(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function cY(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let V=X.trim();if(!V)continue;let F=V.indexOf("/"),N=F>0?V.slice(0,F).trim():"",U=F>0?V.slice(F+1).trim():V;Z.push({label:V,provider:N,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",q=typeof X.id==="string"?X.id.trim():"",K=Hz(X.label,Y,q);if(!K)continue;let L=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,Q=Number(X.context_window??X.contextWindow);Z.push({label:K,provider:Y,id:q,name:L,contextWindow:Number.isFinite(Q)&&Q>0?Q:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function Ez(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,j9(_.contextWindow)].filter(Boolean).join(" ")}function Dz(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=cY($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function zz(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let q=j[Z].trim();if(!q){Z+=1;continue}if(q==="Messages:"||q.startsWith("Channel:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(q)){X=!0,Z+=1;let K=[];while(Z<j.length){let L=j[Z],Q=L.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(Q))break;if(Q.startsWith("Channel:")||Q==="Messages:")break;K.push(L.startsWith("  ")?L.slice(2):L),Z+=1}if(K.length>0)G.push(K.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function Oz(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function Wz(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Files:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=Oz(L.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function Jz(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Referenced messages:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=L.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Z.push(Q[1])}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function Az(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Attachments:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=L.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(V)Z.push({id:V[1],label:(V[2]||"").trim()||`attachment:${V[1]}`,raw:Q})}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function lY(_){let $=zz(_||""),j=Wz($||""),G=Jz(j.content||""),Z=Az(G.content||"");return{text:Z.content||"",fileRefs:j.fileRefs,messageRefs:G.messageRefs,attachmentRefs:Z.attachmentRefs}}function kz(_){let $=lY(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function Mz(_){let{queuedItem:$,buildDraft:j=kz,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:q,onSetMessageRefs:K,setContent:L,textareaRef:Q,resizeTextarea:V=()=>{},scheduleTimeout:F=(H,k=0)=>setTimeout(H,k),scheduleRaf:N=(H)=>requestAnimationFrame(H),logger:U=console}=_||{};if(!$)return!1;let z=j($?.content||""),E=z.content;return U?.info?.("[compose-box] Returning queued item to editor",{text:E?.slice(0,80),fileRefs:z.fileRefs?.length,messageRefs:z.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),q?.(z.fileRefs),K?.(z.messageRefs),L?.(E),N(()=>{let H=Q?.current;if(!H)return;H.value=E,V();let k=E.length;H.selectionStart=k,H.selectionEnd=k,H.focus()}),F(()=>{try{G?.($)}catch(H){U?.warn?.("[compose-box] Failed to remove returned queued follow-up.",H)}},0),!0}function G9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return B`
        <div class="compose-queue-stack">
            ${_.map((Y,q)=>{let K=typeof Y?.content==="string"?Y.content:"",L=lY(K);if(!L.text.trim()&&L.fileRefs.length===0&&L.messageRefs.length===0&&L.attachmentRefs.length===0)return null;let Q=q>0,V=q<_.length-1,F=!0;return B`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${K}>
                            ${L.text.trim()&&B`<div class="compose-queue-stack-text">${L.text}</div>`}
                            ${(L.messageRefs.length>0||L.fileRefs.length>0||L.attachmentRefs.length>0)&&B`
                                <div class="compose-queue-stack-refs">
                                    ${L.messageRefs.map((N)=>B`
                                        <${y1}
                                            key=${"queue-msg-"+N}
                                            prefix="compose"
                                            label=${"msg:"+N}
                                            title=${"Message reference: "+N}
                                            icon="message"
                                        />
                                    `)}
                                    ${L.fileRefs.map((N)=>{let U=N.split("/").pop()||N;return B`
                                            <${y1}
                                                key=${"queue-file-"+N}
                                                prefix="compose"
                                                label=${U}
                                                title=${N}
                                                onClick=${()=>X?.(N)}
                                            />
                                        `})}
                                    ${L.attachmentRefs.map((N)=>B`
                                        <${y1}
                                            key=${"queue-attachment-"+N.id}
                                            prefix="compose"
                                            label=${N.label}
                                            title=${N.raw}
                                        />
                                    `)}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            ${_.length>1&&B`
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
                            ${F&&B`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(N)=>{N.stopPropagation(),Z?.(Y)}}
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
    `}function hY({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:q,fileRefs:K=[],onRemoveFileRef:L,onClearFileRefs:Q,messageRefs:V=[],onRemoveMessageRef:F,onClearMessageRefs:N,activeModel:U=null,agentModelsPayload:z=null,modelUsage:E=null,thinkingLevel:H=null,supportsThinking:k=!1,contextUsage:A=null,onContextCompact:O,notificationsEnabled:w=!1,notificationPermission:x="default",onToggleNotifications:W,onModelChange:J,onModelStateChange:M,activeEditorPath:D=null,onAttachEditorFile:y,onOpenFilePill:I,followupQueueItems:R=[],onInjectQueuedFollowup:S,onRemoveQueuedFollowup:v,onMoveQueuedFollowup:c,onSubmitIntercept:h,onMessageResponse:_0,isAgentActive:b=!1,activeChatAgents:t=[],currentChatJid:s="web:default",connectionStatus:K0="connected",onSetFileRefs:Z0,onSetMessageRefs:E0,onSubmitError:B0,onSwitchChat:V0,onRenameSession:Q0,isRenameSessionInProgress:U0=!1,onCreateSession:M0,onDeleteSession:r,onPurgeArchivedSession:G0,onRestoreSession:O0,showQueueStack:u0=!0,statusNotice:R0=null,extensionWorkingState:r0=null,prefillRequest:j_=null}){let[I0,i0]=C(""),[T0,s0]=C(""),[f0,t0]=C(!1),[K_,H_]=C(!1),[h0,S0]=C("or"),[P0,a0]=C([]),[F_,D_]=C(!1),[L0,A0]=C([]),[b0,N_]=C(0),[A_,__]=C(!1),E_=u(null),[B_,W_]=C([]),[$0,W0]=C(0),[k0,x0]=C(!1),[m0,e]=C(!1),[p,a]=C(!1),[j0,Y0]=C(!1),[D0,v0]=C([]),[d0,J0]=C(0),[C0,V_]=C(0),[q_,G_]=C(!1),[U_,M_]=C(0),[Z_,d]=C(null),[z0,c0]=C(null),[n0,C_]=C(()=>_9()),[O_,h_]=C({kind:"idle",title:"",detail:""}),[o1,p_]=C(()=>Date.now()),[i1,Q1]=C(0),Y_=u(null),u_=u(null),j1=u(null),T_=u(null),b_=u(null),r_=u(null),F1=u(null),D1=u(null),s_=u({value:"",updatedAt:0}),v_=u(null),z1=u(""),Y1=u(""),O1=u(""),s1=u(""),w1=u(!1),S1=u(0),q1=u(!1),B5=200,N1=Xz(s),W4=(T)=>{let l=new Set,o=[];for(let N0 of T||[]){if(typeof N0!=="string")continue;let p0=N0.trim();if(!p0||l.has(p0))continue;l.add(p0),o.push(p0)}return o},J4=(T=N1)=>{let l=H1(T);if(!l)return[];try{let o=JSON.parse(l);if(!Array.isArray(o))return[];return W4(o)}catch{return[]}},O6=(T,l=N1)=>{L_(l,JSON.stringify(T))},k_=u(J4(N1)),G1=u(-1),a1=u(""),U$=u("");g(()=>{k_.current=J4(N1),G1.current=-1,a1.current=""},[N1]),g(()=>{if(!j)return;fetch("/agent/settings-data").then((T)=>T.json()).then((T)=>{if(T?.searchMatchMode)S0(T.searchMatchMode)}).catch(()=>{})},[j]),g(()=>{let T=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(s||"web:default")}`).then((o)=>o.ok?o.json():null).then((o)=>{if(T||!o?.commands)return;E_.current=o.commands.map((N0)=>({name:N0.name,description:N0.description||""}))}).catch((o)=>{console.debug("[compose] failed to fetch dynamic commands",o)}),()=>{T=!0}},[s]),g(()=>{let T=Zz(j_,U$.current,j);if(!T.shouldApply)return;U$.current=T.nextToken,d(null),i0(T.text),k5(T.text),M5(T.text),requestAnimationFrame(()=>{I1();let l=Y_.current;if(!l)return;try{l.focus({preventScroll:!0})}catch{l.focus()}let o=T.text.length;l.setSelectionRange?.(o,o)})},[j_,j]),g(()=>{C_(_9())},[]);let U5=I0.trim()||P0.length>0||K.length>0||V.length>0,H5=O_.kind!=="idle",E5=O_.kind==="requesting_permission"||O_.kind==="listening",H$=!j&&Boolean(n0?.showButton),A4=O_.kind==="requesting_permission"||O_.kind==="listening",k4=A4?"Stop voice input":n0?.title||"Voice input",h$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),D5=typeof window<"u"&&typeof Notification<"u",K1=typeof window<"u"?Boolean(window.isSecureContext):!1,z5=D5&&K1&&x!=="denied",g1=x==="granted"&&w,W1=Q$(R0),M4=O2(R0),p$=typeof R0?.detail==="string"&&R0.detail.trim()?R0.detail.trim():"",n$=W1?_6(R0,o1):null,T1=Fz(r0,i1),d_=r0?.indicator&&typeof r0.indicator==="object"?r0.indicator:null,y4=g1?"Disable notifications":"Enable notifications",O5=P0.length>0||K.length>0||V.length>0,t1=t7(K0),r$=t1.label,d$=t1.title,E$=Lz(b,U5,W1),R_=Vz(b,W1),w4=(Array.isArray(t)?t:[]).filter((T)=>!T?.archived_at),Z1=(()=>{for(let T of Array.isArray(t)?t:[]){let l=typeof T?.chat_jid==="string"?T.chat_jid.trim():"";if(l&&l===s)return T}return null})(),C8=Boolean(Z1&&Z1.chat_jid===(Z1.root_chat_jid||Z1.chat_jid)),W6=Boolean(C8&&(Z1?.chat_jid||s)==="web:default"),D$=q0(()=>Yz(t,s),[t,s]),e1=D$.length>0,z$=e1&&typeof V0==="function",O$=e1&&typeof O0==="function",T4=Boolean(U0||q1.current),J1=!j&&typeof Q0==="function"&&!T4,_$=!j&&typeof M0==="function",$$=!j&&typeof r==="function"&&!W6,J6=!j&&typeof G0==="function",x1=!j&&(z$||O$||J1||_$||$$||J6),A6=Dz(U,z),W5=A6.showPicker,J5=A6.label,A5=k&&H?` (${H})`:"",P8=A5.trim()?`${H}`:"",k6=typeof E?.hint_short==="string"?E.hint_short.trim():"",M6=[P8||null,k6||null].filter(Boolean).join(" • "),R8=[U?`Current model: ${J5}${A5}`:null,E?.plan?`Plan: ${E.plan}`:null,k6||null,E?.primary?.reset_description||null,E?.secondary?.reset_description||null].filter(Boolean),y6=m0?"Switching model…":R8.join(" • ")||(W5?"Select a model (tap to open model picker)":`Current model: ${J5}${A5} (tap to open model picker)`),f8=!j&&(W5||A&&A.percent!=null),o$=(T)=>{if(!T||typeof T!=="object")return;let l=T.model??T.current;if(typeof M==="function")M({model:l??null,thinking_level:T.thinking_level??null,thinking_level_label:T.thinking_level_label??null,supports_thinking:T.supports_thinking,provider_usage:T.provider_usage??null});if(l&&typeof J==="function")J(l)},I1=(T)=>{let l=T||Y_.current;if(!l)return;l.style.height="auto",l.style.height=`${l.scrollHeight}px`,l.style.overflowY="hidden"},k5=(T)=>{if(!T.startsWith("/")||T.includes(`
`)){__(!1),A0([]);return}let l=T.toLowerCase().split(" ")[0];if(l.length<1){__(!1),A0([]);return}let N0=(E_.current||Gz).filter((p0)=>p0.name.startsWith(l)||p0.name.replace(/-/g,"").startsWith(l.replace(/-/g,"")));if(N0.length>0&&!(N0.length===1&&N0[0].name===l))x0(!1),W_([]),A0(N0),N_(0),__(!0);else __(!1),A0([])},w6=(T)=>{let l=I0,o=l.indexOf(" "),N0=o>=0?l.slice(o):"",p0=T.name+N0;i0(p0),__(!1),A0([]),requestAnimationFrame(()=>{let z_=Y_.current;if(!z_)return;let c_=p0.length;z_.selectionStart=c_,z_.selectionEnd=c_,z_.focus()})},M5=(T)=>{if(i7(T,{searchMode:j,showSessionSwitcherButton:x1})){x0(!1),W_([]);return}if(d7(T)==null){x0(!1),W_([]);return}let l=IY(w4,T,{currentChatJid:s});if(l.length>0&&!(l.length===1&&o7(l[0].agent_name).trim().toLowerCase()===String(T||"").trim().toLowerCase()))__(!1),A0([]),W_(l),W0(0),x0(!0);else x0(!1),W_([])},f=(T)=>{let l=o7(T?.agent_name);if(!l)return;i0(l),x0(!1),W_([]),requestAnimationFrame(()=>{let o=Y_.current;if(!o)return;let N0=l.length;o.selectionStart=N0,o.selectionEnd=N0,o.focus()})},m=()=>{if(j||!z$&&!O$&&!J1&&!_$&&!$$)return!1;return s_.current={value:"",updatedAt:0},a(!1),__(!1),A0([]),x0(!1),W_([]),Y0(!0),!0},n=(T)=>{if(T?.preventDefault?.(),T?.stopPropagation?.(),j||!z$&&!O$&&!J1&&!_$&&!$$)return;if(j0){s_.current={value:"",updatedAt:0},Y0(!1);return}m()},i=(T)=>{let l=typeof T==="string"?T.trim():"";if(Y0(!1),!l||l===s){requestAnimationFrame(()=>Y_.current?.focus());return}V0?.(l)},F0=async(T)=>{let l=typeof T==="string"?T.trim():"";if(Y0(!1),!l||typeof O0!=="function"){requestAnimationFrame(()=>Y_.current?.focus());return}try{await O0(l)}catch(o){console.warn("Failed to restore session:",o),requestAnimationFrame(()=>Y_.current?.focus())}},X0=q0(()=>{let T=[];for(let l of D$){let o=Boolean(l?.archived_at),N0=typeof l?.agent_name==="string"?l.agent_name.trim():"",p0=typeof l?.chat_jid==="string"?l.chat_jid.trim():"";if(!N0||!p0)continue;T.push({type:"session",key:`session:${p0}`,label:`@${N0} — ${p0}${l?.is_active?" active":""}${o?" archived":""}`,chat:l,disabled:o?!O$:!z$})}if(_$)T.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(J1)T.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:T4});if($$)T.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return T},[D$,O$,z$,_$,J1,$$,T4]),y0=async(T)=>{if(T?.preventDefault)T.preventDefault();if(T?.stopPropagation)T.stopPropagation();if(typeof Q0!=="function"||U0||q1.current)return;q1.current=!0,Y0(!1);try{await Q0()}catch(l){console.warn("Failed to rename session:",l)}finally{q1.current=!1}requestAnimationFrame(()=>Y_.current?.focus())},g0=async()=>{if(typeof M0!=="function")return;Y0(!1);try{await M0()}catch(T){console.warn("Failed to create session:",T)}requestAnimationFrame(()=>Y_.current?.focus())},H0=async()=>{if(typeof r!=="function")return;Y0(!1);try{await r(s)}catch(T){console.warn("Failed to delete session:",T)}requestAnimationFrame(()=>Y_.current?.focus())},l0=(T)=>{if(j)s0(T);else i0(T),k5(T),M5(T);requestAnimationFrame(()=>I1())},n_=(T)=>{let l=j?T0:I0,o=l&&!l.endsWith(`
`)?`
`:"",N0=`${l}${o}${T}`.trimStart();l0(N0)},o_=P(()=>{requestAnimationFrame(()=>{let T=Y_.current;if(!T)return;try{T.focus({preventScroll:!0})}catch{T.focus()}})},[]),a_=P(()=>{h_({kind:"idle",title:"",detail:""})},[]),T6=P((T=Y1.current,l=O1.current)=>{if(j)return;l0(gY(z1.current,T,l))},[j]),W$=P(()=>{w1.current=!0;let T=v_.current;if(!T){a_();return}try{T.stop()}catch{v_.current=null,a_()}},[a_]),cF=P(()=>{if(d(null),c0(null),v_.current){W$();return}if(!n0?.showButton)return;if(n0.mode==="fallback"){o_(),h_({kind:"guidance",title:n0.title||"Use keyboard dictation",detail:n0.detail||"Use your keyboard dictation mic for voice input here."});return}if(!n0?.canStart||!n0?.recognitionCtor){h_({kind:"error",title:n0?.title||"Voice input unavailable",detail:n0?.detail||"This browser does not expose native speech recognition in this context."});return}try{let T=new n0.recognitionCtor;if(v_.current=T,z1.current=String(I0||""),Y1.current="",O1.current="",s1.current="",w1.current=!1,T.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",T.interimResults=!0,T.continuous=!1,"maxAlternatives"in T)T.maxAlternatives=1;T.onstart=()=>{h_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},T.onresult=(l)=>{let{finalText:o,interimText:N0}=uY(l?.results,l?.resultIndex||0);if(o)Y1.current=`${Y1.current} ${o}`.trim();O1.current=N0,T6(),h_({kind:"listening",title:"Listening…",detail:N0?`Heard: ${N0}`:"Speak now. Tap the mic again to stop."})},T.onerror=(l)=>{let o=String(l?.error||"").trim();if(s1.current=o,v_.current=null,O1.current="",o==="aborted"){a_();return}h_({kind:"error",title:"Voice input failed",detail:$9(o,n0)})},T.onend=()=>{let l=s1.current,o=w1.current,N0=Boolean(Y1.current.trim()||O1.current.trim());if(v_.current=null,w1.current=!1,s1.current="",O1.current.trim())Y1.current=`${Y1.current} ${O1.current}`.trim(),O1.current="";if(N0)T6(Y1.current,"");if(l&&l!=="aborted")return;if(!N0&&!o){h_({kind:"error",title:"No speech detected",detail:$9("no-speech",n0)});return}a_()},h_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),o_(),T.start()}catch(T){v_.current=null,h_({kind:"error",title:"Voice input failed",detail:T?.message||"Could not start native browser speech recognition."})}},[T6,a_,I0,o_,n0,W$]),lF=(T)=>{let l=T?.command?.model_label;if(l)return l;let o=T?.command?.message;if(typeof o==="string"){let N0=o.match(/•\s+([^\n]+?)\s+\(current\)/);if(N0?.[1])return N0[1].trim()}return null},Vj=async(T)=>{if(j||m0)return;d(null),c0(null),e(!0);try{let l=await M1("default",T,null,[],null,s),o=lF(l);return o$({model:o??U??null,thinking_level:l?.command?.thinking_level,thinking_level_label:l?.command?.thinking_level_label,supports_thinking:l?.command?.supports_thinking}),await e7(V4,s,o$),c0(vY(T,l)),_?.(l),!0}catch(l){return console.error("Failed to switch model:",l),alert("Failed to switch model: "+l.message),!1}finally{e(!1)}},hF=async()=>{await Vj("/cycle-model")},S8=async(T)=>{let l=typeof T==="string"?T:typeof T?.label==="string"?T.label:"";if(!l||m0)return;let o=mY(T,A);if(o.blocked){d(null),c0(o.note);return}if(await Vj(`/model ${l}`))a(!1)},pF=(T)=>{if(!T||T.disabled)return;if(T.type==="session"){let l=T.chat;if(l?.archived_at)F0(l.chat_jid);else i(l.chat_jid);return}if(T.type==="action"){if(T.action==="new"){g0();return}if(T.action==="rename"){y0();return}if(T.action==="delete")H0()}},nF=(T)=>{T.preventDefault(),T.stopPropagation(),s_.current={value:"",updatedAt:0},Y0(!1),a((l)=>!l)},rF=async()=>{if(j)return;O?.(),await x4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},dF=(T)=>{if(T==="queue"||T==="steer"||T==="auto")return T;return b?"queue":void 0},x4=async(T,l,o={})=>{let N0=typeof T==="string"?T:I0;if(/^\/settings\s*$/i.test(N0.trim())){i0(""),requestAnimationFrame(()=>I1()),p1();return}if(/^\/help\s*$/i.test(N0.trim())){i0(""),requestAnimationFrame(()=>I1()),p1({section:"keyboard"});return}let{includeMedia:p0=!0,includeFileRefs:z_=!0,includeMessageRefs:c_=!0,clearAfterSubmit:m_=!0,recordHistory:u1=!0}=o||{},B1=typeof T==="string"?T:T&&typeof T?.target?.value==="string"?T.target.value:I0,Qj=typeof B1==="string"?B1:"";if(!Qj.trim()&&(p0?P0.length===0:!0)&&(z_?K.length===0:!0)&&(c_?V.length===0:!0))return;if(v_.current)W$();a_(),__(!1),A0([]),x0(!1),W_([]),Y0(!1),d(null),c0(null);let x6=p0?[...P0]:[],I6=z_?[...K]:[],C6=c_?[...V]:[],i$=Qj.trim();if(u1&&i$){let s$=k_.current,L1=W4(s$.filter((u8)=>u8!==i$));if(L1.push(i$),L1.length>200)L1.splice(0,L1.length-200);k_.current=L1,O6(L1),G1.current=-1,a1.current=""}let qN=()=>{if(p0)a0([...x6]);if(z_)Z0?.(I6);if(c_)E0?.(C6);i0(i$),requestAnimationFrame(()=>I1())};if(m_)i0(""),a0([]),Q?.(),N?.();(async()=>{try{let s$=await h?.({content:i$,submitMode:l,fileRefs:I6,messageRefs:C6,mediaFiles:x6});if(s$){_?.(s$);return}let L1=[];for(let a$ of x6){let P6=await s3(a$);L1.push(P6.id)}let u8=I6.length?`Files:
${I6.map((a$)=>`- ${a$}`).join(`
`)}`:"",KN=C6.length?`Referenced messages:
${C6.map((a$)=>`- message:${a$}`).join(`
`)}`:"",LN=L1.length?`Attachments:
${L1.map((a$,P6)=>{let QN=x6[P6]?.name||`attachment-${P6+1}`;return`- attachment:${a$} (${QN})`}).join(`
`)}`:"",VN=[i$,u8,KN,LN].filter(Boolean).join(`

`),J$=await M1("default",VN,null,L1,dF(l),s);if(_0?.(J$),J$?.command)o$({model:J$.command.model_label??U??null,thinking_level:J$.command.thinking_level,thinking_level_label:J$.command.thinking_level_label,supports_thinking:J$.command.supports_thinking}),await e7(V4,s,o$);c0(vY(i$,J$)),_?.(J$)}catch(s$){if(m_)qN();let L1=s$?.message||"Failed to send message.";d(L1),B0?.(L1),console.error("Failed to post:",s$)}})()},oF=(T)=>{S?.(T)},iF=P((T)=>{Mz({queuedItem:T,onRemoveQueuedFollowup:v,setSubmitError:d,setSubmitNotice:c0,setMediaFiles:a0,onSetFileRefs:Z0,onSetMessageRefs:E0,setContent:i0,textareaRef:Y_,resizeTextarea:I1})},[v,Z0,E0,I1]),y5=P((T)=>{if(j||!p&&!j0||T?.isComposing)return!1;let l=()=>{T.preventDefault?.(),T.stopPropagation?.()},o=()=>{s_.current={value:"",updatedAt:0}};if(T.key==="Escape"){if(l(),o(),p)a(!1);if(j0)Y0(!1);return!0}if(p){if(T.key==="ArrowDown"){if(l(),o(),D0.length>0)J0((N0)=>(N0+1)%D0.length);return!0}if(T.key==="ArrowUp"){if(l(),o(),D0.length>0)J0((N0)=>(N0-1+D0.length)%D0.length);return!0}if((T.key==="Enter"||T.key==="Tab")&&D0.length>0)return l(),o(),S8(D0[Math.max(0,Math.min(d0,D0.length-1))]),!0;if(X6(T)&&D0.length>0){l();let N0=n7(s_.current,T.key);s_.current=N0;let p0=r7(D0,N0.value,d0,(z_)=>Ez(z_));if(p0>=0)J0(p0);return!0}}if(j0){if(T.key==="ArrowDown"){if(l(),o(),X0.length>0)V_((N0)=>(N0+1)%X0.length);return!0}if(T.key==="ArrowUp"){if(l(),o(),X0.length>0)V_((N0)=>(N0-1+X0.length)%X0.length);return!0}if((T.key==="Enter"||T.key==="Tab")&&X0.length>0)return l(),o(),pF(X0[Math.max(0,Math.min(C0,X0.length-1))]),!0;if(X6(T)&&X0.length>0){l();let N0=n7(s_.current,T.key);s_.current=N0;let p0=r7(X0,N0.value,C0,(z_)=>z_.label);if(p0>=0)V_(p0);return!0}}return!1},[j,p,j0,D0,d0,X0,C0,S8]),sF=(T)=>{if(T.isComposing)return;if(j&&T.key==="Escape"){T.preventDefault(),s0(""),q?.();return}if(y5(T))return;let l=Y_.current?.value??(j?T0:I0);if(PY(T,l,{searchMode:j,showSessionSwitcherButton:x1})){T.preventDefault(),m();return}if(k0&&B_.length>0){let o=Y_.current?.value??(j?T0:I0);if(!String(o||"").match(/^@([a-zA-Z0-9_-]*)$/))x0(!1),W_([]);else{if(T.key==="ArrowDown"){T.preventDefault(),W0((N0)=>(N0+1)%B_.length);return}if(T.key==="ArrowUp"){T.preventDefault(),W0((N0)=>(N0-1+B_.length)%B_.length);return}if(T.key==="Tab"||T.key==="Enter"){T.preventDefault(),f(B_[$0]);return}if(T.key==="Escape"){T.preventDefault(),x0(!1),W_([]);return}}}if(A_&&L0.length>0){let o=Y_.current?.value??(j?T0:I0);if(!String(o||"").startsWith("/"))__(!1),A0([]);else{if(T.key==="ArrowDown"){T.preventDefault(),N_((N0)=>(N0+1)%L0.length);return}if(T.key==="ArrowUp"){T.preventDefault(),N_((N0)=>(N0-1+L0.length)%L0.length);return}if(T.key==="Tab"){T.preventDefault(),w6(L0[b0]);return}if(T.key==="Enter"&&!T.shiftKey){if(!l.includes(" ")){T.preventDefault();let p0=L0[b0];__(!1),A0([]),x4(p0.name);return}}if(T.key==="Escape"){T.preventDefault(),__(!1),A0([]);return}}}if(!j&&(T.key==="ArrowUp"||T.key==="ArrowDown")&&!T.metaKey&&!T.ctrlKey&&!T.altKey&&!T.shiftKey){let o=Y_.current;if(!o)return;let N0=o.value||"",p0=o.selectionStart===0&&o.selectionEnd===0,z_=o.selectionStart===N0.length&&o.selectionEnd===N0.length;if(T.key==="ArrowUp"&&p0||T.key==="ArrowDown"&&z_){let c_=k_.current;if(!c_.length)return;T.preventDefault();let m_=G1.current;if(T.key==="ArrowUp"){if(m_===-1)a1.current=N0,m_=c_.length-1;else if(m_>0)m_-=1;G1.current=m_,l0(c_[m_]||"")}else{if(m_===-1)return;if(m_<c_.length-1)m_+=1,G1.current=m_,l0(c_[m_]||"");else G1.current=-1,l0(a1.current||""),a1.current=""}requestAnimationFrame(()=>{let u1=Y_.current;if(!u1)return;let B1=u1.value.length;u1.selectionStart=B1,u1.selectionEnd=B1});return}}if(T.key==="Enter"&&!T.shiftKey&&(T.ctrlKey||T.metaKey)){if(T.preventDefault(),j){if(l.trim())Z?.(l.trim(),G,{images:f0,attachments:K_})}else x4(l,"steer");return}if(T.key==="Enter"&&!T.shiftKey){if(T.preventDefault(),j){if(l.trim())Z?.(l.trim(),G,{images:f0,attachments:K_})}else x4(l);return}if(T.key==="Escape"){if(p||j0||A_||k0)return;T.preventDefault(),Y_.current?.blur()}},g8=(T)=>{let l=Array.from(T||[]).filter((o)=>o instanceof File&&!String(o.name||"").startsWith(".DS_Store"));if(!l.length)return;a0((o)=>[...o,...l]),d(null)},aF=(T)=>{g8(T.target.files),T.target.value=""},tF=(T)=>{if(j)return;T.preventDefault(),T.stopPropagation(),S1.current+=1,D_(!0)},eF=(T)=>{if(j)return;if(T.preventDefault(),T.stopPropagation(),S1.current=Math.max(0,S1.current-1),S1.current===0)D_(!1)},_N=(T)=>{if(j)return;if(T.preventDefault(),T.stopPropagation(),T.dataTransfer)T.dataTransfer.dropEffect="copy";D_(!0)},$N=(T)=>{if(j)return;T.preventDefault(),T.stopPropagation(),S1.current=0,D_(!1),g8(T.dataTransfer?.files||[])},jN=(T)=>{if(j)return;let l=T.clipboardData?.items;if(!l||!l.length)return;let o=[];for(let N0 of l){if(N0.kind!=="file")continue;let p0=N0.getAsFile?.();if(p0)o.push(p0)}if(o.length>0)T.preventDefault(),g8(o)},GN=(T)=>{a0((l)=>l.filter((o,N0)=>N0!==T))},ZN=()=>{d(null),a0([]),Q?.(),N?.()},XN=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((T)=>{let{latitude:l,longitude:o,accuracy:N0}=T.coords,p0=`${l.toFixed(5)}, ${o.toFixed(5)}`,z_=Number.isFinite(N0)?` ±${Math.round(N0)}m`:"",c_=`https://maps.google.com/?q=${l},${o}`,m_=`Location: ${p0}${z_} ${c_}`;n_(m_)},(T)=>{let l=T?.message||"Unable to retrieve location.";alert(`Location error: ${l}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!p)return;s_.current={value:"",updatedAt:0},G_(!0),V4(s).then((T)=>{v0(cY(T)),o$(T)}).catch((T)=>{console.warn("Failed to load model list:",T),v0([])}).finally(()=>{G_(!1)})},[p,U]),g(()=>{if(j)a(!1),Y0(!1),__(!1),A0([]),x0(!1),W_([])},[j]),g(()=>{if(j0&&!x1)Y0(!1)},[j0,x1]),g(()=>{if(!p)return;let T=D0.findIndex((l)=>l?.label===U);J0(T>=0?T:0)},[p,D0,U]),g(()=>{if(!j0)return;V_(Kz(X0,s)),s_.current={value:"",updatedAt:0}},[j0,s,X0]),g(()=>{if(!p)return;let T=(l)=>{let o=T_.current,N0=b_.current,p0=l.target;if(o&&o.contains(p0))return;if(N0&&N0.contains(p0))return;a(!1)};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[p]),g(()=>{if(!j0)return;let T=(l)=>{let o=r_.current,N0=F1.current,p0=l.target;if(o&&o.contains(p0))return;if(N0&&N0.contains(p0))return;Y0(!1)};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[j0]),g(()=>{if(j||!p&&!j0)return;let T=(l)=>{y5(l)};return document.addEventListener("keydown",T,!0),()=>document.removeEventListener("keydown",T,!0)},[j,p,j0,y5]),g(()=>{if(!p)return;let T=T_.current;T?.focus?.(),T?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[p,d0,D0]),g(()=>{if(!j0)return;let T=r_.current;T?.focus?.(),T?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[j0,C0,X0.length]),g(()=>{if(!k0||!j1.current)return;j1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[k0,$0,B_.length]),g(()=>{if(!A_||!u_.current)return;u_.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[A_,b0,L0.length]),g(()=>{let T=(o)=>{if(!o||typeof o!=="object")return!1;if(o.isContentEditable)return!0;if(typeof o.closest!=="function")return!1;return Boolean(o.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},l=(o)=>{if(o.ctrlKey||o.metaKey||o.altKey)return;let N0=Y_.current;if(!N0)return;let p0=document.activeElement===N0;if(o.key==="Escape"&&!p0&&!T(o.target)){o.preventDefault(),N0.focus();return}if(o.key==="/"&&!p0&&!T(o.target))o.preventDefault(),l0("/"),requestAnimationFrame(()=>{N0.focus(),N0.selectionStart=1,N0.selectionEnd=1,k5("/")})};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),g(()=>{let T=()=>{let z_=D1.current?.clientWidth||0;M_((c_)=>c_===z_?c_:z_)};T();let l=D1.current,o=0,N0=()=>{if(o)cancelAnimationFrame(o);o=requestAnimationFrame(()=>{o=0,T()})},p0=null;if(l&&typeof ResizeObserver<"u")p0=new ResizeObserver(()=>N0()),p0.observe(l);if(typeof window<"u")window.addEventListener("resize",N0);return()=>{if(o)cancelAnimationFrame(o);if(p0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",N0)}},[j,U,Z1?.agent_name,x1,A?.percent]);let YN=(T)=>{let l=T.target.value;if(v_.current&&T?.isTrusted)W$();if(d(null),c0(null),O_.kind==="guidance"||O_.kind==="error")a_();if(j0)Y0(!1);if(I1(T.target),i7(l,{searchMode:j,showSessionSwitcherButton:x1})){l0(""),requestAnimationFrame(()=>{let o=Y_.current;if(!o)return;o.value="",o.selectionStart=0,o.selectionEnd=0,o.focus()}),m();return}l0(l)};return g(()=>{requestAnimationFrame(()=>I1())},[I0,T0,j]),g(()=>{if(!j)return;if(v_.current)W$();return},[j,W$]),g(()=>{if(v_.current)W$();a_()},[s,a_,W$]),g(()=>{return()=>{if(!v_.current)return;try{v_.current.stop()}catch(T){console.debug("[compose] failed to stop speech recognition during cleanup",T)}v_.current=null}},[]),g(()=>{if(!W1)return;p_(Date.now());let T=setInterval(()=>p_(Date.now()),1000);return()=>clearInterval(T)},[W1,R0?.started_at,R0?.startedAt]),g(()=>{if(Q1(0),d_?.mode!=="custom"||!Array.isArray(d_.frames)||d_.frames.length<=1)return;let T=typeof d_.intervalMs==="number"&&Number.isFinite(d_.intervalMs)&&d_.intervalMs>0?d_.intervalMs:120,l=setInterval(()=>{Q1((o)=>(o+1)%d_.frames.length)},T);return()=>clearInterval(l)},[d_]),g(()=>{if(j)return;M5(I0)},[w4,s,I0,j]),B`
        <div class="compose-box">
            ${H5&&B`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${O_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${c2({pulsing:E5})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${O_.title}</span>
                    </div>
                    ${O_.detail&&B`<div class="compose-inline-status-detail">${O_.detail}</div>`}
                </div>
            `}
            ${u0&&!j&&B`
                <${G9}
                    items=${R}
                    onInjectQueuedFollowup=${oF}
                    onRemoveQueuedFollowup=${v}
                    onMoveQueuedFollowup=${c}
                    onReturnQueuedFollowup=${iF}
                    onOpenFilePill=${I}
                />
            `}
            ${T1.visible&&B`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${T1.indicatorText?B`<span class="compose-inline-status-glyph" aria-hidden="true">${T1.indicatorText}</span>`:T1.animateDot?B`<span class=${c2({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${T1.title}</span>
                    </div>
                </div>
            `}
            ${R0&&!W1&&B`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${p$||""}
                >
                    <div class="compose-inline-status-row">
                        <span class=${c2({pulsing:!1})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${M4}</span>
                        ${n$&&B`<span class="compose-inline-status-elapsed">${n$}</span>`}
                    </div>
                    ${p$&&B`<div class="compose-inline-status-detail">${p$}</div>`}
                </div>
            `}
            ${z0&&B`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:e_(z0)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${F_?" drag-active":""}`}
                onDragEnter=${tF}
                onDragOver=${_N}
                onDragLeave=${eF}
                onDrop=${$N}
            >
                <div class="compose-input-main">
                    ${O5&&B`
                        <div class="compose-file-refs">
                            ${V.map((T)=>{return B`
                                    <${y1}
                                        key=${"msg-"+T}
                                        prefix="compose"
                                        label=${"msg:"+T}
                                        title=${"Message reference: "+T}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(T)}
                                    />
                                `})}
                            ${K.map((T)=>{let l=T.split("/").pop()||T;return B`
                                    <${y1}
                                        prefix="compose"
                                        label=${l}
                                        title=${T}
                                        onClick=${()=>I?.(T)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>L?.(T)}
                                    />
                                `})}
                            ${P0.map((T,l)=>{let o=T?.name||`attachment-${l+1}`;return B`
                                    <${y1}
                                        key=${o+l}
                                        prefix="compose"
                                        label=${o}
                                        title=${o}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>GN(l)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${ZN}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${Y_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?T0:I0}
                        onInput=${YN}
                        onKeyDown=${sF}
                        onPaste=${jN}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${k0&&B_.length>0&&B`
                        <div class="slash-autocomplete" ref=${j1}>
                            ${B_.map((T,l)=>B`
                                <div
                                    key=${T.chat_jid||T.agent_name}
                                    class=${`slash-item${l===$0?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),f(T)}}
                                    onMouseEnter=${()=>W0(l)}
                                >
                                    <span class="slash-name">@${T.agent_name}</span>
                                    <span class="slash-desc">${T.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${A_&&L0.length>0&&B`
                        <div class="slash-autocomplete" ref=${u_}>
                            ${L0.map((T,l)=>B`
                                <div
                                    key=${T.name}
                                    class=${`slash-item${l===b0?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),w6(T)}}
                                    onMouseEnter=${()=>N_(l)}
                                >
                                    <span class="slash-name">${T.name}</span>
                                    <span class="slash-desc">${T.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${p&&!j&&B`
                        <div class="compose-model-popup" ref=${T_} tabIndex="-1" onKeyDown=${y5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${q_&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!q_&&D0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!q_&&D0.map((T,l)=>{let o=typeof T?.label==="string"?T.label:"",N0=j9(T?.contextWindow),p0=T?.name||null,z_=mY(T,A);return B`
                                        <button
                                            key=${o}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${d0===l?" active":""}${U===o?" current-model":""}${z_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{S8(T)}}
                                            disabled=${m0||z_.blocked}
                                            title=${[o,p0,N0,z_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${Uz(o,T?.contextWindow)}${p0?B` <span class="compose-model-popup-model-subtitle">${p0}</span>`:""}</span>
                                                ${z_.blocked&&B`<span class="compose-model-popup-model-note">${z_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{hF()}}
                                    disabled=${m0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${j0&&!j&&B`
                        <div class="compose-model-popup" ref=${r_} tabIndex="-1" onKeyDown=${y5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!e1&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${e1&&D$.map((T,l)=>{let o=Boolean(T.archived_at),N0=T.chat_jid===(T.root_chat_jid||T.chat_jid),p0=!N0&&!T.is_active&&!o&&typeof r==="function",z_=o&&J6,c_=v2(T,{currentChatJid:s});return B`
                                        <div key=${T.chat_jid} class=${`compose-model-popup-item-row${o?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${o?" archived":""}${C0===l?" active":""}`}
                                                onClick=${()=>{if(o){F0(T.chat_jid);return}i(T.chat_jid)}}
                                                disabled=${o?!O$:!z$}
                                                title=${o?`Restore archived ${`@${T.agent_name}`}`:`Switch to ${`@${T.agent_name}`}`}
                                            >
                                                <span style=${qz(T)?"font-weight:700":""}>${c_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${T.agent_name} in new window`}
                                                aria-label=${`Open @${T.agent_name} in new window`}
                                                onClick=${(m_)=>{m_.stopPropagation(),Y0(!1);let u1=new URL(window.location.href);u1.searchParams.set("chat_jid",T.chat_jid),u1.searchParams.set("chat_only","1");let B1=document.createElement("a");B1.href=u1.toString(),B1.target="_blank",B1.rel="noopener",B1.style.display="none",document.body.appendChild(B1),B1.click(),B1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(p0||z_)&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${z_?N0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${z_?N0?`Permanently delete archived session @${T.agent_name}`:`Permanently delete archived branch @${T.agent_name}`:`Delete @${T.agent_name}`}
                                                    onClick=${(m_)=>{if(m_.stopPropagation(),Y0(!1),z_){G0?.(T.chat_jid);return}r(T.chat_jid)}}
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
                            ${(_$||J1||$$)&&B`
                                <div class="compose-model-popup-actions">
                                    ${_$&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${X0.findIndex((T)=>T.key==="action:new")===C0?" active":""}`}
                                            onClick=${()=>{g0()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${J1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${X0.findIndex((T)=>T.key==="action:rename")===C0?" active":""}`}
                                            onClick=${(T)=>{y0(T)}}
                                            title="Rename the current branch handle"
                                            disabled=${T4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${$$&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${X0.findIndex((T)=>T.key==="action:delete")===C0?" active":""}`}
                                            onClick=${()=>{H0()}}
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
                <div class="compose-footer" ref=${D1}>
                    ${f8&&B`
                    <div class="compose-meta-row">
                        ${W5&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${b_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${y6}
                                    aria-label="Open model picker"
                                    onClick=${nF}
                                    disabled=${m0}
                                >
                                    ${m0?"Switching…":J5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!m0&&M6&&B`
                                        <span class="compose-model-usage-hint" title=${y6}>
                                            ${M6}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&A&&A.percent!=null&&B`
                            <${Nz}
                                usage=${A}
                                onCompact=${rF}
                                compactionLabel=${W1?n$||"0:00":""}
                                compactionTitle=${W1?M4||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${x1&&B`
                        <div
                            ref=${F1}
                            class="compose-session-trigger-group"
                        >
                            ${Z1?.agent_name&&B`
                                <button
                                    type="button"
                                    class=${`compose-session-trigger compose-session-trigger-pill${j0?" active":""}`}
                                    onClick=${n}
                                    title=${Z1?.chat_jid||s}
                                    aria-label=${`Manage sessions for @${Z1.agent_name}`}
                                    aria-expanded=${j0?"true":"false"}
                                >
                                    <span class="compose-current-agent-label active">@${Z1.agent_name}</span>
                                </button>
                            `}
                            <button
                                type="button"
                                class=${`compose-session-trigger compose-session-trigger-icon-btn${j0?" active":""}`}
                                onClick=${n}
                                title=${Z1?.chat_jid||s}
                                aria-label=${Z1?.agent_name?`Manage sessions for @${Z1.agent_name}`:"Manage Sessions/Agents"}
                                aria-expanded=${j0?"true":"false"}
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
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${G}
                                onChange=${(T)=>X?.(T.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${f0} onChange=${()=>t0((T)=>!T)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${K_} onChange=${()=>H_((T)=>!T)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${h0==="and"?"active":""}`}
                            onClick=${()=>{let T=h0==="or"?"and":"or";S0(T),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:T})}).catch((l)=>{})}}
                            title=${h0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${h0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?q:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${h$&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${XN}
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
                    ${H$&&B`
                        <button
                            class=${`icon-btn voice-input-btn${A4?" active":""}${n0.mode==="fallback"?" fallback":""}`}
                            onClick=${cF}
                            title=${k4}
                            aria-label=${k4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${z5&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${g1?" active":""}`}
                            onClick=${W}
                            title=${y4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${D&&y&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${y}
                                title=${`Attach open file: ${D}`}
                                type="button"
                                disabled=${K.includes(D)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${aF} />
                        </label>
                    `}
                    ${(K0!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${K0!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${t1.statusClass}" title=${d$}>
                                    ${r$}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class=${E$.className}
                                    type="button"
                                    onClick=${()=>{x4()}}
                                    disabled=${E$.disabled}
                                    title=${E$.title}
                                    aria-label=${E$.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${R_&&B`
                                    <button 
                                        class=${R_.className}
                                        type="button"
                                        onClick=${()=>{if(Qz(R_.mode))x4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${R_.disabled}
                                        title=${R_.title}
                                        aria-label=${R_.ariaLabel}
                                    >
                                        ${R_.mode==="compacting"?B`
                                                <span class="compose-submit-spinner" aria-hidden="true">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                        <circle class="compose-submit-spinner-ring" cx="12" cy="12" r="10.5" stroke-width="2.25" stroke-linecap="round"></circle>
                                                        <rect class="compose-submit-spinner-stop" x="6" y="6" width="12" height="12" rx="0" fill="currentColor"></rect>
                                                    </svg>
                                                </span>
                                            `:B`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2.5"/></svg>`}
                                    </button>
                                `}
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}w0();function pY({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return B`
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
  `}w0();function nY(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function rY(_){return String(_||"").trim()||"web:default"}function dY(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function oY(_){if(!_)return!1;return _.status!=="running"}function iY(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function sY({session:_,onClose:$,onInject:j,onRetry:G}){let Z=u(null),X=u(null),Y=_?.thinking?b5(_.thinking):"",q=_?.answer?e_(_.answer,null):"";if(g(()=>{if(Z.current&&Y)L$(Z.current).catch((z)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",z)})},[Y]),g(()=>{if(X.current&&q)L$(X.current).catch((z)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",z)})},[q]),!_)return null;let K=_.status==="running",L=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=dY(_),F=oY(_),N=!K&&L,U=K?"Thinking…":_.status==="error"?"Error":"Done";return B`
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

            ${_.question&&B`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&B`<div class="btw-block btw-error">${_.error}</div>`}
            ${Q&&B`
                <details class="btw-block btw-thinking" open=${K?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${V&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </div>
            `}

            ${F&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!N}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}w0();function Z9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function X9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function yz(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function wz(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function u$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function $_(_){return typeof _==="string"&&_.trim()?_.trim():null}function tY(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var eY="__PICLAW_WIDGET_HOST__:";function aY(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Y9(_,$){if(!_||_.type!=="generated_widget")return null;let j=yz(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:tY(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function _q(_){if(!_||typeof _!=="object")return null;let $=wz(_),j=$_(_?.widget_id)||$_(_?.widgetId)||$_(_?.tool_call_id)||$_(_?.toolCallId),G=$_(_?.tool_call_id)||$_(_?.toolCallId),Z=$_(_?.turn_id)||$_(_?.turnId),X=$_(_?.title)||$_(_?.name)||"Generated widget",Y=$_(_?.subtitle)||"",q=$_(_?.description)||Y,K=$_(_?.status),L=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:X,subtitle:Y,description:q,originPostId:u$(_?.origin_post_id)??u$(_?.originPostId),originChatJid:$_(_?.origin_chat_jid)||$_(_?.originChatJid)||$_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:tY(_?.capabilities,!0),source:"live",status:L,turnId:Z,toolCallId:G,width:u$(_?.width),height:u$(_?.height),error:$_(_?.error)}}function $q(_){return Y9(_,null)!==null}function E1(_){let $=$_(_?.toolCallId)||$_(_?.tool_call_id);if($)return $;let j=$_(_?.widgetId)||$_(_?.widget_id);if(j)return j;let G=u$(_?.originPostId)??u$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function jq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function Gq(_){return jq(_)?"allow-downloads allow-scripts allow-same-origin":"allow-downloads"}function h2(_){return{title:$_(_?.title)||"Generated widget",widgetId:$_(_?.widgetId)||$_(_?.widget_id),toolCallId:$_(_?.toolCallId)||$_(_?.tool_call_id),turnId:$_(_?.turnId)||$_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:$_(_?.status)||"final"}}function p2(_){return{...h2(_),subtitle:$_(_?.subtitle)||"",description:$_(_?.description)||"",error:$_(_?.error)||null,width:u$(_?.width),height:u$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function n2(_){return`${eY}${JSON.stringify(p2(_))}`}function Zq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=$_(_.text)||$_(_.content)||$_(_.message)||$_(_.prompt)||$_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=$_(j.text)||$_(j.content)||$_(j.message)||$_(j.prompt)||$_(j.value);if(G)return G}return null}function Xq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Yq(_){let $=$_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return $_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function Tz(_){let $=h2(_);return`<script>
(function () {
  const meta = ${aY($)};
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

  const windowNamePrefix = ${aY(eY)};
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
</script>`}function qq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let q=jq(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),L=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=q?Tz(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${K}" />
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
<body>${L}</body>
</html>`}w0();function xz(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let q=$.get(Y.id);if(!q)continue;let K=Y.parentId?$.get(Y.parentId):null;if(K)K.children.push(q);else j.push(q)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let q=Y.children[0];if(q.role!=="toolResult")continue;Y.resultDetail=q.detail||null,Y.resultLength=q.contentLength||0,Y.resultId=q.id,Y.merged=!0,Y.children=q.children;for(let K of Y.children)K.parentId=Y.id;G.add(q.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),q=Y.children.length>1;for(let K=Y.children.length-1;K>=0;K--)Y.children[K].depth=q?Y.depth+1:Y.depth,X.push(Y.children[K])}return Z}function Iz(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function Kq(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function $5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function Cz(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function Pz(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function Lq(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function Rz(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(q)=>typeof q==="string"&&Z.some((K)=>K?.id===q);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((q)=>q?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function fz(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=Lq(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function Vq({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,q]=C(()=>({loading:!j,error:null,data:j})),[K,L]=C(()=>j?.leafId||null),[Q,V]=C(""),F=u(null),N=u(null),U=u(j?.leafId||null),z=u(null),E=u(""),H=async()=>{q((J)=>({...J,loading:!0,error:null}));try{let J=G?`?chat_jid=${encodeURIComponent(G)}`:"",M=await fetch(`/agent/session-tree${J}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),D=await M.json().catch(()=>({}));if(!M.ok)throw Error(D?.error||`HTTP ${M.status}`);q({loading:!1,error:null,data:D})}catch(J){q((M)=>({loading:!1,error:J?.message||"Failed to load tree.",data:M?.data||j||null}))}};z.current=H,g(()=>{H()},[G]);let k=q0(()=>{let J=Y.data;if(!J||!Array.isArray(J.nodes)||J.nodes.length===0)return[];return Iz(J.flat?xz(J.nodes):J.nodes)},[Y.data]);g(()=>{let J=Rz(k,K,U.current,Y.data?.leafId||null);if(J!==K)L(J);if(U.current&&Y.data?.leafId===U.current)U.current=null},[k,K,Y.data?.leafId]);let A=q0(()=>{let J=(Q||"").trim().toLowerCase();if(!J)return k;return k.filter((M)=>{return[M.preview,M.toolInput,M.toolInputFull,M.detail,M.toolName,M.role,M.id,M.resultDetail,M.type,M.label].some((y)=>typeof y==="string"&&y.toLowerCase().includes(J))})},[k,Q]),O=q0(()=>A.find((J)=>J.id===K)||null,[A,K]),w=q0(()=>fz(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);g(()=>{if(N.current)N.current.scrollIntoView({block:"center",behavior:"auto"})},[K,Y.data?.leafId,A.length]),g(()=>{let J=Lq(X?.preview);if(J?.targetId)U.current=J.targetId;let M=w?.refreshDelays||[];if(!M.length)return;let D=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(E.current===D)return;E.current=D;let y=M.map((I)=>setTimeout(()=>z.current?.(),I));return()=>y.forEach((I)=>clearTimeout(I))},[G,X?.type,X?.submittedAt,X?.preview,w?.refreshDelays]);let x=(J=!1)=>{let M=O?.id,D=Pz(M,J);if(!D)return;U.current=D.navigateTargetId,$?.({kind:"widget.submit",payload:D},_)},W=w?.tone||"info";return B`
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
                    ${Q&&B`<span class="session-tree-meta">${A.length} match${A.length!==1?"es":""}</span>`}
                    ${Y.error&&B`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${w?.text&&B`<span class=${`session-tree-host-update ${W}`}>${w.text}</span>`}
                    ${Y.data?.capped&&B`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&B`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&A.length===0&&!Q&&B`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&A.length===0&&!Q&&B`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&A.length===0&&Q&&B`<div class="session-tree-empty">No entries match \u201c${Q}\u201d</div>`}
                    ${A.map((J)=>{let M=K===J.id,D=`st-row${J.active?" active":""}${M?" selected":""}`,y=(J.children||[]).length>1,I=Cz(J);return B`
                            <button key=${J.id} ref=${J.active||M?N:null}
                                class=${D} type="button" role="treeitem" aria-selected=${M}
                                onClick=${()=>L(J.id)}>
                                <span class="st-indent" style=${`width:${(J.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${J.active?" active":y?" branch":""}`}></span>
                                <span class=${`st-tag ${I.tagClass}`}>${I.tag}</span>
                                <span class="st-text">${I.text}</span>
                                ${J.merged&&J.resultLength>0&&B`<span class="st-size">${Kq(J.resultLength)}</span>`}
                                ${!J.merged&&J.contentLength>3000&&B`<span class="st-size">${Kq(J.contentLength)}</span>`}
                                ${J.hasThinking&&B`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${J.label&&B`<span class="st-label">${J.label}</span>`}
                                ${J.active&&B`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${O?B`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${O.id}${O.resultId?` → ${O.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${O.role||O.type||"entry"}${O.toolName?` → ${O.toolName}`:""}${O.merged?" (merged)":""}</div>
                        </div>
                        ${O.toolInputFull&&B`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${O.toolInputFull}</pre>
                            </div>
                        `}
                        ${O.resultDetail&&B`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${O.resultLength?` (${$5(O.resultLength)})`:""}</div>
                                <pre class="st-side-code">${O.resultDetail}</pre>
                            </div>
                        `}
                        ${O.detail&&!O.toolInput&&B`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.role==="toolResult"?"Output":"Content"}${O.contentLength?` (${$5(O.contentLength)})`:""}</div>
                                <pre class="st-side-code">${O.detail}</pre>
                            </div>
                        `}
                        ${O.rawDetail&&B`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${O.rawContentLength?` (${$5(O.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${O.rawDetail}</pre>
                            </div>
                        `}
                        ${O.timestamp&&B`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(O.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(O.contentLength>0||O.hasThinking)&&B`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${O.contentLength>0&&B`<span class="st-pill">${$5(O.contentLength)} content</span>`}
                                    ${O.hasThinking&&B`<span class="st-pill thinking">${$5(O.thinkingLength)} thinking</span>`}
                                    ${O.merged&&O.resultLength>0&&B`<span class="st-pill">${$5(O.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>x(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>x(!0)}>Navigate + summarize</button>
                        </div>
                    `:B`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function Qq({widget:_,onClose:$,onWidgetEvent:j}){let G=u(null),Z=u(!1),X=q0(()=>qq(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let H=(k)=>{if(k.key==="Escape")$?.()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$]),g(()=>{Z.current=!1},[X]),g(()=>{if(!_)return;let H=G.current;if(!H)return;let k=(W)=>{let J=n2(_),M=W==="widget.init"?h2(_):p2(_);Z9(H,J),X9(H,{__piclawGeneratedWidgetHost:!0,type:W,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M})},A=()=>{k("widget.init"),k("widget.update")},O=()=>{Z.current=!0,A()};H.addEventListener("load",O);let x=[0,40,120,300,800].map((W)=>setTimeout(A,W));return()=>{H.removeEventListener("load",O),x.forEach((W)=>clearTimeout(W))}},[X,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let H=G.current;if(!H?.contentWindow)return;let k=n2(_),A=p2(_);Z9(H,k),X9(H,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:A});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let H=(k)=>{let A=k?.data;if(!A||A.__piclawGeneratedWidget!==!0)return;let O=G.current,w=E1(_),x=E1({widgetId:A.widgetId,toolCallId:A.toolCallId});if(x&&w&&x!==w)return;if(!x&&O?.contentWindow&&k.source!==O.contentWindow)return;j?.(A,_)};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[_,j]),!_)return null;let q=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",L=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",Q=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",F=Q==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",N=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",U=!X,z=Yq(_),E=Gq(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(H)=>H.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${F} • ${q.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(L||N)&&B`
                            <div class="floating-widget-subtitle">${L||N}</div>
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
                    ${q==="session_tree"?B`<${Vq} widget=${_} onWidgetEvent=${j} />`:U?B`<div class="floating-widget-empty">${z}</div>`:B`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${K}
                                    name=${n2(_)}
                                    sandbox=${E}
                                    referrerpolicy="no-referrer"
                                    srcdoc=${X}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}w0();J2();f_();a4();var Sz=new Set,Fq=new Set,q9=new Set,U4=new Map,Nq=!1,r2=null;function gz(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function Bq(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return X_.register(_),Sz.add(_.id),!0}function uz(_){return Bq(_)}function bz(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return P$(_),Fq.add(_.id),k7(),()=>{NX(_.id),Fq.delete(_.id),k7()}}function vz(_){if(typeof _!=="function")return()=>{};return q9.add(_),()=>{q9.delete(_)}}function Uq(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...q9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function mz(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return U4.set(_.id,_),()=>{if(U4.get(_.id)===_)U4.delete(_.id)}}function d2(_,$){for(let j of Array.from(U4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function Hq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return U4.get($)?.label||null}function Eq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return U4.get($)?.note||null}function Dq(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=U4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function cz(){return{registerPane:uz,registerWorkspacePane:Bq,registerSettingsPane:bz,registerStandaloneTabUrlResolver:vz,registerAttachmentPreview:mz}}function K9(_=typeof window<"u"?window:null){let $=cz();if(!_||Nq)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},Nq=!0,$}async function zq(_=typeof window<"u"?window:null){if(!_)return;if(r2)return r2;return r2=(async()=>{K9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=gz(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(q){console.warn("[addon-web] Failed to load installed addon web entry:",Y,q)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),r2}var lz=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),hz=new Set(["text/markdown"]),pz=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),nz=new Set(["application/eml","message/rfc822"]);function b$(_){return typeof _==="string"?_.trim().toLowerCase():""}function rz(_){let $=b$(_);return!!$&&$.endsWith(".eml")}function dz(_){let $=b$(_);return!!$&&$.endsWith(".pdf")}function oz(_){let $=b$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var iz=new Set(["application/zip","application/x-zip-compressed"]);function sz(_){let $=b$(_);return!!$&&$.endsWith(".zip")}function az(_){let $=b$(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function tz(_){let $=b$(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")}function q6(_,$){let j=d2(_,$);if(j?.id)return j.id;let G=b$(_);if(dz($)||G==="application/pdf")return"pdf";if(oz($)||pz.has(G))return"office";if(rz($)||nz.has(G))return"eml";if(sz($)||iz.has(G))return"archive";if(az($)||G==="text/html")return"html";if(tz($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(lz.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function Oq(_){let $=b$(_);return hz.has($)}function o2(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"archive":return"ZIP archive preview";default:return Hq(_)||"Preview unavailable"}}var ez=new TextDecoder("utf-8",{fatal:!1});function j5(_,$){return _[$]|_[$+1]<<8}function H4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function Wq(_,$,j){return ez.decode(_.subarray($,$+j))}function _O(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(H4(_,j)===101010256)return j;return-1}function $O(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(H4(_,G)===117853008)return!0;return!1}function jO(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function GO(_){return String(_||"").replace(/\\/g,"/").trim()}function Jq(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function Aq(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=_O($);if(j<0)throw Error("ZIP archive directory could not be found.");if($O($,j))throw Error("ZIP64 archives are not previewable yet.");let G=j5($,j+10),Z=H4($,j+12),X=H4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],q=X,K=X+Z;while(q<K){if(q+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(H4($,q)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let V=j5($,q+8),F=j5($,q+10),N=H4($,q+20),U=H4($,q+24),z=j5($,q+28),E=j5($,q+30),H=j5($,q+32),k=q+46,A=k+z+E,O=A+H;if(O>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let w=(V&2048)===2048,x=GO(Wq($,k,z)),W=Wq($,A,H),J=x.endsWith("/");if(x)Y.push({path:x,isDirectory:J,compressedSize:N,uncompressedSize:U,compressionMethod:F,comment:w?W:W});q=O}Y.sort((V,F)=>{if(V.isDirectory!==F.isDirectory)return V.isDirectory?-1:1;return V.path.localeCompare(F.path)});let L=Y.filter((V)=>!V.isDirectory),Q=jO(Y);return{entries:Y,summary:{fileCount:L.length,directoryCount:Q.size,totalEntries:Y.length,compressedBytes:L.reduce((V,F)=>V+F.compressedSize,0),uncompressedBytes:L.reduce((V,F)=>V+F.uncompressedSize,0)}}}function kq(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var ZO="allow-scripts";function XO(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function YO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function qO(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function KO(_,$=null,j=null){let G=_?.metadata?.size,Z=_?.content_type||"application/octet-stream",X=j?.summary||null;return[{label:"Type",value:Z},{label:"Syntax",value:$},{label:"Entries",value:X?String(X.totalEntries):null},{label:"Files",value:X?String(X.fileCount):null},{label:"Folders",value:X?String(X.directoryCount):null},{label:"Compressed",value:X?i_(X.compressedBytes):null},{label:"Uncompressed",value:X?i_(X.uncompressedBytes):null},{label:"Savings",value:kq(X)},{label:"Size",value:typeof G==="number"?i_(G):null},{label:"Added",value:_?.created_at?Q4(_.created_at):null}].filter((Y)=>Y.value)}function LO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function VO(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=f1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function Mq({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=q0(()=>d2($?.content_type,G),[$?.content_type,G]),X=q0(()=>q6($?.content_type,G),[$?.content_type,G]),Y=Z?.label||o2(X),q=q0(()=>Oq($?.content_type),[$?.content_type]),[K,L]=C(X==="text"||X==="html"||X==="archive"),[Q,V]=C(""),[F,N]=C(null),[U,z]=C(null),E=u(null),H=q0(()=>LO($,G),[$,G]),k=q0(()=>H?$Z(H):null,[H]),A=q0(()=>KO($,!q?k:null,F),[$,q,k,F]),O=q0(()=>Z?Dq(Z.id,_,G):VO(_,G,X),[Z,_,G,X]),w=q0(()=>Eq(Z?.id||X),[Z?.id,X]),x=q0(()=>{if(!q||!Q)return"";return e_(Q)},[q,Q]),W=q0(()=>{if(q||!Q||!H)return"";return $2(Q,H)},[q,Q,H]);return g(()=>{let J=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!E.current||!x)return;L$(E.current);return},[x]),g(()=>{let J=!1;async function M(){if(X!=="text"&&X!=="html"&&X!=="archive"){L(!1),z(null),V(""),N(null);return}L(!0),z(null),V(""),N(null);try{let D=await _7(_),y=new Uint8Array(await D.arrayBuffer());if(X==="text"||X==="html"){if(X==="text"&&YO($,G)&&!XO(y))throw Error("Attachment does not appear to contain text content.");let R=qO(y);if(!J)V(R);return}let I=Aq(y);if(!J)N(I)}catch(D){if(!J){let y=D instanceof Error?D.message:String(D||"Unknown error");z(X==="archive"?`Failed to load ZIP preview. ${y}`:`Failed to load text preview. ${y}`)}}finally{if(!J)L(!1)}}return M(),()=>{J=!0}},[_,X]),B`
        <${C$} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${O&&B`
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
                        ${K&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&U&&B`<div class="attachment-preview-state">${U}</div>`}
                        ${!K&&!U&&X==="image"&&B`
                            <img class="attachment-preview-image" src=${f1(_)} alt=${G} />
                        `}
                        ${!K&&!U&&X==="video"&&B`
                            <video class="attachment-preview-video" src=${f1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!K&&!U&&X==="html"&&B`
                            <iframe class="attachment-preview-frame" srcdoc=${Q||""} sandbox=${ZO} title=${G}></iframe>
                        `}
                        ${!K&&!U&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&O&&B`
                            <iframe class="attachment-preview-frame" src=${O} title=${G}></iframe>
                        `}
                        ${!K&&!U&&w&&B`
                            <div class="attachment-preview-readonly-note">${w}</div>
                        `}
                        ${!K&&!U&&X==="archive"&&F&&B`
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
                                        <strong class="attachment-preview-archive-card-value">${i_(F.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${i_(F.summary.uncompressedBytes)}</strong>
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
                                            ${F.entries.map((J)=>B`
                                                <tr key=${J.path}>
                                                    <td class="attachment-preview-archive-name">${J.path}</td>
                                                    <td>${J.isDirectory?"Folder":"File"}</td>
                                                    <td>${J.isDirectory?"—":Jq(J.compressionMethod)}</td>
                                                    <td>${J.isDirectory?"—":i_(J.compressedSize)}</td>
                                                    <td>${J.isDirectory?"—":i_(J.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!K&&!U&&X==="text"&&q&&B`
                            <div
                                ref=${E}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:x}}
                            />
                        `}
                        ${!K&&!U&&X==="text"&&!q&&W&&B`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:W}} /></pre>
                        `}
                        ${!K&&!U&&X==="text"&&!q&&!W&&B`
                            <pre class="attachment-preview-text">${Q}</pre>
                        `}
                        ${!K&&!U&&X==="unsupported"&&B`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${A.map((J)=>B`
                            <div class="attachment-preview-meta-item" key=${J.label}>
                                <span class="attachment-preview-meta-label">${J.label}</span>
                                <span class="attachment-preview-meta-value">${J.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${C$}>
    `}w0();f_();w2();g7();function QO(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function FO(_){if(!_||typeof _!=="object")return!0;if(QO(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function NO(_){if(!X6(_))return!1;if(!FO(_?.target))return!1;return!R$.some((j)=>N$(_,j.id))}function yq(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function BO(_){let $=[],j=new Map(S$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function wq(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function UO(_){if(_?.imageUrl)return B`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return B`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function i2(_,$){return B`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function HO(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function Tq({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:q,onOpenVncTab:K,onToggleTerminalDock:L,onPrefillCompose:Q}){let[V,F]=C(!1),[N,U]=C(""),[z,E]=C(0),[H,k]=C([]),[A,O]=C({workspaceCommands:null,slashCommands:null}),w=u(null),x=u(null),W=P(async()=>{try{let y=await p5();O(g$(y?.settings))}catch{O({workspaceCommands:null,slashCommands:null})}},[]);g(()=>{W()},[W]),g(()=>{let y=!1;return h5($).then((I)=>{if(y)return;k(Array.isArray(I?.commands)?I.commands:[])}).catch(()=>{if(y)return;k([])}),()=>{y=!0}},[$]);let J=q0(()=>BO({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:q,onOpenVncTab:K,onToggleTerminalDock:L}),[G,q,K,L,Z,j]),M=q0(()=>$Y({agents:_,workspaceCommands:J,slashCommands:H,settings:A,query:N}),[_,N,A,H,J]);if(g(()=>{if(M.length===0){E(-1);return}if(!N.trim()){E(0);return}let y=N.toLowerCase().replace(/^[@/]+/,"").trim();if(!y){E(0);return}let I=0,R=0;for(let S=0;S<M.length;S++){let v=M[S],c=(v.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===y){I=S;break}let h=0;if(c.startsWith(y))h=3;else if(c.includes(y))h=2;else if((v.subtitle||"").toLowerCase().includes(y))h=1;if(h>R)R=h,I=S}E(I)},[M,N]),g(()=>{if(!V)return;requestAnimationFrame(()=>x.current?.focus?.())},[V]),g(()=>{let y=(R)=>{if(!V){if(!NO(R))return;R.preventDefault(),U(String(R.key||"")),E(0),F(!0);return}if(R.key==="Escape"){R.preventDefault(),F(!1),U("");return}if(R.key==="ArrowDown"){R.preventDefault(),E((S)=>M.length>0?(S+1+M.length)%M.length:0);return}if(R.key==="ArrowUp"){R.preventDefault(),E((S)=>M.length>0?(S-1+M.length)%M.length:0);return}if(R.key==="Enter"&&M[z]){R.preventDefault();let S=M[z],v=R.altKey;if(S){if(S.kind==="agent"&&S.chatJid)if(v)HO(S.chatJid);else X?.(S.chatJid);else if(S.kind==="workspace"&&S.commandId){if(S.commandId==="toggle-workspace"||S.commandId==="open-explorer")Y?.();if(S.commandId==="toggle-chat-only")yq(G);if(S.commandId==="open-terminal-tab")q?.();if(S.commandId==="open-vnc-tab")K?.();if(S.commandId==="toggle-terminal-dock")L?.();if(S.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(S.kind==="slash"&&S.commandName)Q?.(S.commandName)}F(!1),U("")}},I=(R)=>{if(!V)return;if(w.current?.contains(R.target))return;F(!1),U("")};return window.addEventListener("keydown",y,!0),document.addEventListener("pointerdown",I,!0),()=>{window.removeEventListener("keydown",y,!0),document.removeEventListener("pointerdown",I,!0)}},[G,z,M,q,K,Q,X,L,Y,V]),g(()=>{let y=(I)=>{let R=g$(I?.detail?.settings);if(I?.detail?.settings){O(R);return}W()};return window.addEventListener("focus",y),window.addEventListener("piclaw:quick-actions-settings-updated",y),()=>{window.removeEventListener("focus",y),window.removeEventListener("piclaw:quick-actions-settings-updated",y)}},[W]),!V)return null;let D=null;return B`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${w}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${x}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${N}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(y)=>{U(y.currentTarget?.value||""),E(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${i2("Move","↑↓")}
                                ${i2("Select","↵")}
                                ${i2("Pop out","Alt+↵")}
                                ${i2("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${M.length===0&&B`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${M.map((y,I)=>{let R=y.kind!==D;return D=y.kind,B`
                                ${R&&B`<div class="timeline-quick-actions-section">${wq(y.kind)}</div>`}
                                <button
                                    key=${y.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${y.kind}${I===z?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(y.kind==="agent"&&y.chatJid)X?.(y.chatJid);if(y.kind==="workspace"&&y.commandId==="toggle-workspace")Y?.();if(y.kind==="workspace"&&y.commandId==="open-explorer")Y?.();if(y.kind==="workspace"&&y.commandId==="toggle-chat-only")yq(G);if(y.kind==="workspace"&&y.commandId==="open-terminal-tab")q?.();if(y.kind==="workspace"&&y.commandId==="open-vnc-tab")K?.();if(y.kind==="workspace"&&y.commandId==="toggle-terminal-dock")L?.();if(y.kind==="workspace"&&y.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(y.kind==="slash"&&y.commandName)Q?.(y.commandName);F(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${UO(y)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${y.title}</span>
                                            ${y.actionHint?B`<span class="timeline-quick-actions-item-action-hint">${y.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${y.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${y.categoryLabel||wq(y.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}w0();function xq({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[q,K]=C(!1),[L,Q]=C({top:8,left:8}),V=u(null),F=u(null),N=u(null);g(()=>{if(typeof document>"u")return;let H=document.createElement("div");return H.className="timeline-menu-portal in-chat",document.body.appendChild(H),N.current=H,()=>{H.remove(),N.current=null}},[]),g(()=>{let H=()=>{if(_){let O=document.querySelector(".workspace-sidebar");if(O){let w=O.getBoundingClientRect();Q({top:w.top+8,left:w.left+8})}}else Q({top:8,left:8})};H();let k=new ResizeObserver(H),A=document.querySelector(".workspace-sidebar");if(A)k.observe(A);return window.addEventListener("resize",H),()=>{k.disconnect(),window.removeEventListener("resize",H)}},[_]),g(()=>{if(N.current)N.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),g(()=>{if(!N.current)return;let H=N.current.style;H.top=`${L.top}px`,H.left=`${L.left}px`,H.right="auto"},[L]),g(()=>{if(!q)return;let H=(k)=>{if(V.current?.contains(k.target))return;if(F.current?.contains(k.target))return;K(!1)};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[q]),g(()=>{if(!q)return;let H=(k)=>{if(k.key==="Escape")K(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[q]),g(()=>{K(!1)},[_]);let U=P((H)=>{K(!1),H?.()},[]),z=P(()=>{let H=new URL(window.location.href);if(j)H.searchParams.delete("chat_only");else H.searchParams.set("chat_only","1");window.location.href=H.toString()},[j]),E=B`
        <button ref=${F} class=${`timeline-menu-btn${q?" active":""}`}
            onClick=${()=>K((H)=>!H)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${q?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${q&&B`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${V} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&B`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(z)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Z||X)&&B`<div class="workspace-menu-separator"></div>`}
                ${G&&B`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(G)}>Open terminal in tab</button>`}
                ${Z&&B`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(Z)}>Open VNC in tab</button>`}
                ${X&&B`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(X)}>${Y?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return R4(()=>{if(N.current)G$(E,N.current)}),null}w0();f_();var Iq="PiClaw";function L9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,q=X[Y],K=G.trim().toLowerCase(),L=typeof $==="string"?$.trim():"",Q=L?L:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Z,color:q,image:Q||(V?"/static/icon-192.png":null)}}function Cq(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function Pq(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function Rq(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",q=X?.dataset?.tint||"",K=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(K&&(q||Y&&Y!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function V9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function EO(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function fq(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return EO($[1].trim())||null}function Sq(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=V9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=V9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=V9(j.command),Y=fq(X);if(Y)return Y;if(Array.isArray(j.commands))for(let q of j.commands){let K=fq(q);if(K)return K}return null}var DO=B`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,zO=B`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,OO=B`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,WO=1e4;function JO(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function AO(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function kO(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function MO(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function gq(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return I$(_)!==null}function uq(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&z2(_)!==null}function yO(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=WO}function wO(_,$=Date.now()){if(!gq(_))return null;let j=I$(_);if(j===null||!yO(j,$))return null;let G=bq(new Date(j).toISOString(),$);return G?`${G} ago`:null}function TO(_,$=Date.now()){if(!uq(_))return null;if(z2(_)===null)return null;return _6(_,$)}function xO(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=_?.title,Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function bq(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function Q9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:q=new Set,onExtensionPanelAction:K,turnId:L,steerQueued:Q,onPanelToggle:V,showCorePanels:F=!0,showExtensionPanels:N=!0}){let E=($0)=>{if(!$0)return{text:"",totalLines:0,fullText:""};if(typeof $0==="string"){let m0=$0,e=m0?m0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:m0,totalLines:e,fullText:m0}}let W0=$0.text||"",k0=$0.fullText||$0.full_text||W0,x0=Number.isFinite($0.totalLines)?$0.totalLines:k0?k0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W0,totalLines:x0,fullText:k0}},H=160,k=($0)=>String($0||"").replace(/<\/?internal>/gi,""),A=($0)=>{if(!$0)return 1;return Math.max(1,Math.ceil($0.length/160))},O=($0,W0,k0)=>{let x0=($0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!x0)return{text:"",omitted:0,totalLines:Number.isFinite(k0)?k0:0,visibleLines:0};let m0=x0.split(`
`),e=m0.length>W0?m0.slice(0,W0).join(`
`):x0,p=Number.isFinite(k0)?k0:m0.reduce((Y0,D0)=>Y0+A(D0),0),a=e?e.split(`
`).reduce((Y0,D0)=>Y0+A(D0),0):0,j0=Math.max(p-a,0);return{text:e,omitted:j0,totalLines:p,visibleLines:a}},w=E(j),x=E(G),W=E($),J=Boolean(w.text)||w.totalLines>0,M=Boolean(x.text)||x.totalLines>0,D=Boolean(W.fullText?.trim()||W.text?.trim()),y=Boolean(_||D||J||M||Z||X),I=Array.isArray(Y)&&Y.length>0,[R,S]=C(new Set),[v,c]=C(null),[h,_0]=C(()=>Date.now()),b=($0)=>S((W0)=>{let k0=new Set(W0),x0=!k0.has($0);if(x0)k0.add($0);else k0.delete($0);if(typeof V==="function")V($0,x0);return k0});g(()=>{S(new Set),c(null)},[L]),g(()=>{if(!(Array.isArray(Y)&&Y.some((k0)=>k0?.started_at||k0?.last_activity_at)))return;let W0=setInterval(()=>_0(Date.now()),1000);return()=>clearInterval(W0)},[Y]);let t=q0(()=>AO(R),[R]);g(()=>{if(!t||typeof document>"u")return;let $0=(W0)=>{if(W0?.defaultPrevented)return;if(W0?.key!=="Escape")return;if(W0?.altKey||W0?.ctrlKey||W0?.metaKey||W0?.shiftKey)return;let k0=W0?.target;if(k0 instanceof Element){if(k0.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(k0.isContentEditable)return}if(S((x0)=>{if(!(x0 instanceof Set)||!x0.has(t))return x0;let m0=new Set(x0);return m0.delete(t),m0}),typeof V==="function")V(t,!1);W0.preventDefault?.(),W0.stopPropagation?.()};return document.addEventListener("keydown",$0),()=>document.removeEventListener("keydown",$0)},[t,V]);let s=Q$(_),K0=Boolean(_?.last_activity||_?.lastActivity),Z0=q0(()=>gq(_),[_]),E0=q0(()=>uq(_),[_]),B0=q0(()=>Sq(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[V0,Q0]=C(null);g(()=>{if(!Boolean(E0||_?.retry_at||_?.retryAt||Z0))return;_0(Date.now());let W0=setInterval(()=>_0(Date.now()),1000);return()=>clearInterval(W0)},[Z0,E0,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),g(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!B0){Q0(null);return}let W0=!0;return $7(B0).then((k0)=>{if(!W0)return;if(k0?.branch)Q0({branch:k0.branch,repoPath:k0.repo_path||null,path:B0});else Q0(null)}).catch(()=>{if(W0)Q0(null)}),()=>{W0=!1}},[_?.type,B0]);let U0=_?.turn_id||L,M0=Rq(U0),r=m2({steerQueued:Q}),G0=($0)=>$0,O0=fY(_,{isLastActivity:K0}),u0=l2(_,{isLastActivity:K0}),R0=l2(null,{pendingRequest:!0}),r0=($0)=>$0==="warning"?"#f59e0b":$0==="error"?"var(--danger-color)":$0==="success"?"var(--success-color)":M0,j_=X?.kind||"info",I0=r0(j_),i0=r0(_?.kind||(s?"warning":"info")),T0=xO(_,{isLastActivity:K0}),s0=wO(_,h),f0=V0?.repoPath||"",t0=V0?.branch||"",K_=V0?MO(f0,t0):"",H_=JO(_?.status_hints||_?.statusHints),h0=q0(()=>kO(H_),[H_]),S0=q0(()=>h0.filter(($0)=>$0?.key==="ssh"),[h0]),P0=q0(()=>h0.filter(($0)=>$0?.key!=="ssh"),[h0]);if((!F||!y)&&(!N||!I))return null;let a0=({panelTitle:$0,text:W0,fullText:k0,totalLines:x0,maxLines:m0,titleClass:e,panelKey:p})=>{let a=R.has(p),j0=k0||W0||"",Y0=p==="thought"||p==="draft"?k(j0):j0,D0=typeof m0==="number",v0=a&&D0,d0=D0?O(Y0,m0,x0):{text:Y0||"",omitted:0,totalLines:Number.isFinite(x0)?x0:0};if(!Y0&&!(Number.isFinite(d0.totalLines)&&d0.totalLines>0))return null;let J0=`agent-thinking-body${D0?" agent-thinking-body-collapsible":""}`,C0=D0?`--agent-thinking-collapsed-lines: ${m0};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${a?"true":"false"}
                data-collapsible=${D0?"true":"false"}
                style=${M0?`--turn-color: ${M0};`:""}
            >
                <div class="agent-thinking-title ${e||""}">
                    ${M0&&B`<span class=${r} aria-hidden="true"></span>`}
                    ${$0}
                    ${v0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$0} panel`}
                            onClick=${()=>b(p)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${J0}
                    style=${C0}
                    dangerouslySetInnerHTML=${{__html:b5(Y0)}}
                />
                ${!a&&d0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>b(p)}>
                        ▸ ${d0.omitted} more lines
                    </button>
                `}
                ${a&&d0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>b(p)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},F_=Z?.tool_call?.title,D_=F_?`Awaiting approval: ${F_}`:"Awaiting approval",L0=TO(_,h),A0=($0,W0,k0=null)=>{let x0=O2($0),m0=FX($0,h),e=[k0,m0].filter(Boolean).join(" · "),p=m2({steerQueued:Q,pulsing:Q$($0)||Boolean(m0)});return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${W0?`--turn-color: ${W0};`:""}
                title=${$0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${W0&&B`<span class=${p} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${x0}</span>
                    ${e&&B`<span class="agent-status-elapsed">${e}</span>`}
                </div>
                ${$0.detail&&B`<div class="agent-thinking-body">${$0.detail}</div>`}
            </div>
        `},b0=($0,W0,k0,x0,m0,e,p,a=8,j0=8)=>{let Y0=Math.max(m0-x0,0.000000001),D0=Math.max(W0-a*2,1),v0=Math.max(k0-j0*2,1),d0=Math.max(p-e,1),J0=p===e?W0/2:a+($0.run-e)/d0*D0,C0=j0+(v0-($0.value-x0)/Y0*v0);return{x:J0,y:C0}},N_=($0,W0,k0,x0,m0,e,p,a=8,j0=8)=>{if(!Array.isArray($0)||$0.length===0)return"";return $0.map((Y0,D0)=>{let{x:v0,y:d0}=b0(Y0,W0,k0,x0,m0,e,p,a,j0);return`${D0===0?"M":"L"} ${v0.toFixed(2)} ${d0.toFixed(2)}`}).join(" ")},A_=($0,W0="")=>{if(!Number.isFinite($0))return"—";return`${Math.abs($0)>=100?$0.toFixed(0):$0.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${W0}`},__=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],E_=($0,W0)=>{let k0=__;if(!Array.isArray(k0)||k0.length===0)return"var(--accent-color)";if(k0.length===1||!Number.isFinite(W0)||W0<=1)return k0[0];let m0=Math.max(0,Math.min(Number.isFinite($0)?$0:0,W0-1))/Math.max(1,W0-1)*(k0.length-1),e=Math.floor(m0),p=Math.min(k0.length-1,e+1),a=m0-e,j0=k0[e],Y0=k0[p];if(!Y0||e===p||a<=0.001)return j0;if(a>=0.999)return Y0;let D0=Math.round((1-a)*1000)/10,v0=Math.round(a*1000)/10;return`color-mix(in oklab, ${j0} ${D0}%, ${Y0} ${v0}%)`},B_=($0,W0="autoresearch")=>{let k0=Array.isArray($0)?$0.map((J0)=>({...J0,points:Array.isArray(J0?.points)?J0.points.filter((C0)=>Number.isFinite(C0?.value)&&Number.isFinite(C0?.run)):[]})).filter((J0)=>J0.points.length>0):[],x0=k0.map((J0,C0)=>({...J0,color:E_(C0,k0.length)}));if(x0.length===0)return null;let m0=320,e=120,p=x0.flatMap((J0)=>J0.points),a=p.map((J0)=>J0.value),j0=p.map((J0)=>J0.run),Y0=Math.min(...a),D0=Math.max(...a),v0=Math.min(...j0),d0=Math.max(...j0);return B`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${x0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${m0} ${e}`} preserveAspectRatio="none" aria-hidden="true">
                        ${x0.map((J0)=>{let C0=J0?.key||J0?.label||"series",V_=v?.panelKey===W0&&v?.seriesKey===C0;return B`
                                <g key=${C0}>
                                    <path
                                        class=${`agent-series-chart-line${V_?" is-hovered":""}`}
                                        d=${N_(J0.points,m0,e,Y0,D0,v0,d0)}
                                        style=${`--agent-series-color: ${J0.color};`}
                                        onMouseEnter=${()=>c({panelKey:W0,seriesKey:C0})}
                                        onMouseLeave=${()=>c((q_)=>q_?.panelKey===W0&&q_?.seriesKey===C0?null:q_)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${x0.flatMap((J0)=>{let C0=typeof J0?.unit==="string"?J0.unit:"",V_=J0?.key||J0?.label||"series";return J0.points.map((q_,G_)=>{let U_=b0(q_,m0,e,Y0,D0,v0,d0);return B`
                                    <button
                                        key=${`${V_}-point-${G_}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${J0.color}; left:${U_.x/m0*100}%; top:${U_.y/e*100}%;`}
                                        onMouseEnter=${()=>c({panelKey:W0,seriesKey:V_,run:q_.run,value:q_.value,unit:C0})}
                                        onMouseLeave=${()=>c((M_)=>M_?.panelKey===W0?null:M_)}
                                        onFocus=${()=>c({panelKey:W0,seriesKey:V_,run:q_.run,value:q_.value,unit:C0})}
                                        onBlur=${()=>c((M_)=>M_?.panelKey===W0?null:M_)}
                                        aria-label=${`${J0?.label||"Series"} ${A_(q_.value,C0)} at run ${q_.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${x0.map((J0)=>{let C0=J0.points[J0.points.length-1]?.value,V_=typeof J0?.unit==="string"?J0.unit:"",q_=J0?.key||J0?.label||"series",G_=v?.panelKey===W0&&v?.seriesKey===q_?v:null,U_=G_&&Number.isFinite(G_.value)?G_.value:C0,M_=G_&&typeof G_.unit==="string"?G_.unit:V_,Z_=G_&&Number.isFinite(G_.run)?G_.run:null;return B`
                            <div key=${`${q_}-legend`} class=${`agent-series-legend-item${G_?" is-hovered":""}`} style=${`--agent-series-color: ${J0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${J0.color};`}></span>
                                <span class="agent-series-legend-label">${J0?.label||"Series"}</span>
                                ${Z_!==null&&B`<span class="agent-series-legend-run">run ${Z_}</span>`}
                                <span class="agent-series-legend-value">${A_(U_,M_)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},W_=($0)=>{if(!$0)return null;let W0=typeof $0?.key==="string"?$0.key:`panel-${Math.random()}`,k0=R.has(W0),x0=$0?.title||"Extension status",m0=$0?.collapsed_text||"",e=String($0?.state||"").replace(/[-_]+/g," ").replace(/^./,(U_)=>U_.toUpperCase()),p=r0($0?.state==="completed"?"success":$0?.state==="failed"?"error":$0?.state==="stopped"?"warning":"info"),a=m2({steerQueued:Q,pulsing:$0?.state==="running"}),j0=typeof $0?.detail_markdown==="string"?$0.detail_markdown.trim():"",Y0=typeof $0?.last_run_text==="string"?$0.last_run_text.trim():"",D0=typeof $0?.tmux_command==="string"?$0.tmux_command.trim():"",v0=Array.isArray($0?.series)?$0.series:[],d0=Array.isArray($0?.actions)?$0.actions:[],J0=$0?.started_at?_6($0,h):null,C0=m0,V_=Boolean(j0||D0||J0),q_=Boolean(j0||v0.length>0||D0),G_=[x0,C0].filter(Boolean).join(" — ");return B`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${k0?"true":"false"}
                style=${p?`--turn-color: ${p};`:""}
                title=${!k0?G_||x0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>q_?b(W0):null}
                    >
                        ${p&&B`<span class=${a} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${x0}</span>
                        ${C0&&B`<span class="agent-thinking-title-meta">${C0}</span>`}
                        ${J0&&B`<span class="agent-status-elapsed">${J0}</span>`}
                    </button>
                    ${(d0.length>0||q_)&&B`
                        <div class="agent-thinking-tools-inline">
                            ${d0.length>0&&B`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${d0.map((U_)=>{let M_=`${W0}:${U_?.key||""}`,Z_=q?.has?.(M_);return B`
                                            <button
                                                key=${M_}
                                                class=${`agent-thinking-action-btn${U_?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.($0,U_)}
                                                disabled=${Boolean(Z_)}
                                            >
                                                ${Z_?"Working…":U_?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${q_&&B`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${k0?"Collapse":"Expand"} ${x0}`}
                                    title=${k0?"Collapse details":"Expand details"}
                                    onClick=${()=>b(W0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        ${k0?B`<polyline points="4 6 8 10 12 6"></polyline>`:B`<polyline points="4 10 8 6 12 10"></polyline>`}
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${k0&&B`
                    <div class=${`agent-thinking-autoresearch-layout${V_?"":" chart-only"}`}>
                        ${V_&&B`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${J0&&B`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${J0}</span>
                                        ${$0?.last_activity_at&&$0?.state==="running"&&B`<span title="Since last activity">⟳ ${bq($0.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${j0&&B`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:b5(j0)}}
                                    />
                                `}
                                ${D0&&B`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${D0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.($0,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${DO}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${v0.length>0?B`
                                <div class="agent-series-chart-stack">
                                    ${B_(v0,W0)}
                                    ${Y0&&B`<div class="agent-series-chart-note">${Y0}</div>`}
                                </div>
                            `:B`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${F&&X&&A0(X,I0)}
            ${N&&Array.isArray(Y)&&Y.map(($0)=>W_($0))}
            ${F&&_?.type==="intent"&&A0(_,i0,L0)}
            ${F&&Z&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    ${R0==="dot"&&B`<span class=${r} aria-hidden="true"></span>`}
                    ${R0==="spinner"&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${D_}</span>
                </div>
            `}
            ${F&&J&&a0({panelTitle:G0("Planning"),text:w.text,fullText:w.fullText,totalLines:w.totalLines,panelKey:"plan"})}
            ${F&&D&&a0({panelTitle:G0("Draft"),text:W.text,fullText:W.fullText,totalLines:W.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${F&&M&&a0({panelTitle:G0("Thoughts"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${F&&_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${K0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${K_||H_.length>0||s0?" agent-status-multiline":""}`} aria-live="polite" style=${M0?`--turn-color: ${M0};`:""}>
                    ${M0&&O0&&B`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:u0==="spinner"&&B`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${T0}</span>
                        ${(K_||h0.length>0||s0)&&B`
                            <span class="agent-status-meta-row">
                                ${S0.map(($0)=>B`
                                    <span key=${$0.key} class="agent-status-hint-row" title=${$0.title||$0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:$0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${$0.label}</span>
                                    </span>
                                `)}
                                ${K_&&B`
                                    <span class="agent-status-git-row" title=${B0||K_}>
                                        <span class="agent-status-git-icon">${zO}</span>
                                        <span class="agent-status-git-label">
                                            ${f0&&B`<span class="agent-status-git-part">${f0}</span>`}
                                            ${f0&&t0&&B`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${t0&&B`<span class="agent-status-git-part">${t0}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${P0.map(($0)=>B`
                                    <span key=${$0.key} class="agent-status-hint-row" title=${$0.title||$0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:$0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${$0.label}</span>
                                    </span>
                                `)}
                                ${s0&&B`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${K0?"Recent activity":"Last event"} ${s0}`}>
                                        <span class="agent-status-hint-icon">${OO}</span>
                                        <span class="agent-status-hint-label">${s0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function vq({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",q=G?.kind||"other",K=G?.rawInput||{},L=K.command||K.commands&&K.commands[0]||null,Q=K.diff||null,V=K.fileName||K.path||null,F=G?.description||K.description||K.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((A)=>A?.path).filter((A)=>Boolean(A)),z=Array.from(new Set([V,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let E=async(A)=>{try{await o4(j,A,X||null),$()}catch(O){console.error("Failed to respond to agent request:",O)}},H=async()=>{try{await t3(Y,`Auto-approved: ${Y}`),await o4(j,"approved",X||null),$()}catch(A){console.error("Failed to add to whitelist:",A)}},k=Z&&Z.length>0;return B`
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
                ${(F||L||Q||z.length>0)&&B`
                    <div class="agent-request-body">
                        ${F&&B`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${z.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${z.map((A,O)=>B`<li key=${O}>${A}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${L&&B`
                            <pre class="agent-request-command">${L}</pre>
                        `}
                        ${Q&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${k?Z.map((A)=>B`
                            <button 
                                key=${A.optionId||A.id||String(A)}
                                class="agent-request-btn ${A.kind==="allow_once"||A.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(A.optionId||A.id||A)}
                            >
                                ${A.name||A.label||A.optionId||A.id||String(A)}
                            </button>
                        `):B`
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
    `}w0();w0();f_();function K6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>K6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${K6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function mq(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:K6(j)})).filter(($)=>$.value)}function IO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function F9(_){if(!Array.isArray(_))return[];return _.filter(IO)}function s2(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=K6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=mq(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function cq(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=mq(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):K6(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function x_(_){return typeof _==="string"?_.trim():""}function lq(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function CO(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let q=x_(X.type);if(q==="text"){let K=x_(X.text)||x_(X.content);if(K)j.push(K);return}if(q==="resource_link"){let K=x_(X.uri),L=x_(X.title)||x_(X.name)||K;if(K&&L)j.push(L===K?K:`[${L}](${K})`);return}if(q==="resource"){let K=x_(X.title)||x_(X.name)||x_(X.uri)||"Embedded resource",L=x_(X.text);if(L)j.push(`### ${K}

\`\`\`
${L}
\`\`\``);else j.push(`### ${K}`);return}if(q==="generated_widget"){let K=x_(X.title)||x_(X.name)||"Generated widget",L=x_(X.description)||x_(X.subtitle);j.push(lq([`### ${K}`,L]));return}if(q==="adaptive_card"&&x_(X.fallback_text)){j.push(x_(X.fallback_text));return}if(q==="adaptive_card_submission"){let K=s2(X);if(x_(K))j.push(x_(K));return}if(q==="file"){let K=x_(X.name)||x_(X.filename)||x_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${K}`);return}if(q==="image"||!q){let K=x_(X.name)||x_(X.filename)||x_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${K}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return lq(j)}function a2(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return CO(G,Z)}function hq(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function pq(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function nq(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(hq(j,"aria-disabled","true"),hq(j,"tabindex","-1"),"disabled"in j)pq(j,"disabled");if("readOnly"in j)pq(j,"readOnly")}}function PO(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function RO(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function rq(_){return PO(_)||RO(_)}function t2(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function fO(_,$){let j=Math.max(t2(_),t2($)),G=Math.min(t2(_),t2($));return(j+0.05)/(G+0.05)}function SO(_,$,j="#ffffff"){let G=rq(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let q=rq(Y);if(!q)continue;let K=fO(G,q);if(K>X)Z=Y,X=K}return Z}function N9(){let _=getComputedStyle(document.documentElement),$=(U,z)=>{for(let E of U){let H=_.getPropertyValue(E).trim();if(H)return H}return z},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),L=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),N=SO(q,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:q,good:K,warning:L,attention:Q,border:V,fontFamily:F,buttonTextColor:N}}function dq(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:q,border:K,fontFamily:L}=N9();return{fontFamily:L,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var gO=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),oq=!1,e2=null,iq=!1;function B9(_){_.querySelector(".adaptive-card-notice")?.remove()}function uO(_,$,j="error"){B9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function bO(_,$=(j)=>e_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function vO(_=($)=>e_($,null)){return($,j)=>{try{let G=bO($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function mO(_){if(iq||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=vO(),iq=!0}async function cO(){if(oq)return;if(e2)return e2;return e2=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{oq=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),e2}function lO(){return globalThis.AdaptiveCards}function hO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function pO(_){return gO.has(_)}function H9(_){if(!Array.isArray(_))return[];return _.filter(hO)}function nO(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function U9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>U9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${U9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function rO(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return U9($);return typeof $==="string"?$:String($)}function dO(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((q)=>G(q));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=rO(Y.type,j[Y.id],Y);for(let[q,K]of Object.entries(Y))if(Array.isArray(K)||K&&typeof K==="object")Y[q]=G(K);return Y};return G(_)}function oO(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function iO(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=oO(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function sq(_,$,j){if(!pO($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await cO()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=lO();mO(G);let Z=new G.AdaptiveCard,X=N9();Z.hostConfig=new G.HostConfig(dq());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:dO($.payload,Y);Z.parse(q),Z.onExecuteAction=(Q)=>{let V=nO(Q);if(j?.onAction)B9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let N=F instanceof Error?F.message:String(F||"Action failed.");uO(_,N||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Z.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let L=iO($);if(L){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=L.label,Q.appendChild(V),L.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=L.detail,Q.appendChild(F)}_.appendChild(Q)}if(B9(_),_.appendChild(K),L)nq(K);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}w0();J2();function aq({src:_,onClose:$}){return g(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <${C$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${C$}>
    `}var _8=0,E9=null,L6={activePostId:null,speaking:!1},D9=new Set;function O9(_={}){return _.window??(typeof window<"u"?window:null)}function tq(_={}){return O9(_)?.speechSynthesis||null}function z9(){let _={...L6};for(let $ of D9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function W9(){return{...L6}}function eq(_){if(typeof _!=="function")return()=>{};return D9.add(_),_(W9()),()=>D9.delete(_)}function _K(_={}){let $=O9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function $K(_){let $=a2(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function jK(_={}){let $=tq(_);if(_8+=1,E9=null,L6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}z9()}function GK(_,$,j={}){let G=O9(j),Z=tq(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=_8+1;_8=Y;try{Z.cancel()}catch{}let q=new G.SpeechSynthesisUtterance(X);E9=q,L6={activePostId:_,speaking:!0},z9();let K=()=>{if(Y!==_8)return;E9=null,L6={activePostId:null,speaking:!1},z9()};q.onend=K,q.onerror=K;try{return Z.speak(q),!0}catch(L){return console.warn("[post-speech] speak failed:",L),K(),!1}}async function XK(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function J9(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(q)=>{let K=q?.clipboardData;if(!K||typeof K.setData!=="function")return;if(K.setData("text/plain",j),G)K.setData("text/html",G);if(typeof q.preventDefault==="function")q.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let q=_.execCommand("copy");return Boolean(X||q)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function ZK(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function YK(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let K=Z.getRangeAt(0);if(K&&typeof K.intersectsNode==="function")X=Boolean(K.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let K=ZK(Z.anchorNode),L=ZK(Z.focusNode);X=Boolean(K&&G.contains(K)||L&&G.contains(L))}if(!X)return!1;let q=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!q)return!1;return j.setData("text/plain",q),_?.preventDefault?.(),!0}function qK(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function KK(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function LK(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function sO({mediaId:_,onPreview:$}){let[j,G]=C(null);if(g(()=>{N2(_).then(G).catch((L)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,L)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?i_(X):"",K=q6(j.content_type,j.filename)!=="unsupported";return B`
        <div class="file-attachment" onClick=${(L)=>L.stopPropagation()}>
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
                        ${Y&&B`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&B`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            ${K&&B`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function aO(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function tO(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function eO(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function _W(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function $W(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function VK(_){let $=_W(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():$W(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function jW(_,$){let j=VK($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var GW={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function ZW(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=GW[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function XW(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function YW({marker:_}){let[$,j]=C(!1),G=P((V)=>{V.stopPropagation(),j((F)=>!F)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",q=_?.draft_recovered,K=String(_?.severity||"warning"),L=Y||Z||String(_?.label||_?.kind||"issue"),Q=Boolean(X||Z&&Y);return B`
        <div class=${`post-outcome-pill post-outcome-pill-${K}`}>
            <div class="post-outcome-pill-header" onClick=${Q?G:void 0}>
                ${Q&&B`
                    <span class=${`post-outcome-pill-toggle${$?" expanded":""}`} aria-hidden="true">▶</span>
                `}
                <span class="post-outcome-pill-label">${L}</span>
                ${q&&B`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&Q&&B`
                <div class="post-outcome-pill-detail">
                    ${Z&&B`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&B`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function qW({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);g(()=>{if(!Number.isFinite(j))return;N2(j).then(Z).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,Q)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?f1(j):null,q=q6(G?.content_type,G?.filename||_?.label),K=o2(q),L=q!=="unsupported";return B`
        <span class="attachment-pill" title=${X}>
            ${Y?B`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(Q)=>Q.stopPropagation()}>
                        <${y1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:B`
                    <${y1}
                        prefix="post"
                        label=${_.label}
                        title=${X}
                    />
                `}
            ${Number.isFinite(j)&&G&&L&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${K}
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function $8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?Q4(G):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&B`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function KW({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?i_(_.size):"",Z=_.mime_type||"",X=QW(Z),Y=X4(_.uri);return B`
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
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&B`<span>${Z}</span>`}
                    ${G&&B`<span>${G}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function LW({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${G}
            </button>
            ${$&&B`
                ${Z&&B`<pre class="resource-embed-content">${Z}</pre>`}
                ${X&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&B`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Y||"application/octet-stream"}),L=URL.createObjectURL(K),Q=document.createElement("a");Q.href=L,Q.download=G.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(L)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function VW({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=Y9(_,$),Z=$q(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",q=G?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",L=u(!1),Q=(V)=>{if(V)V.preventDefault(),V.stopPropagation();if(!G)return;j?.(G)};return g(()=>{if(!_?.auto_open||!G||!Z||L.current)return;let V=$?.timestamp?new Date($.timestamp).getTime():0;if(V&&Date.now()-V>1e4)return;let F=`widget_opened_${_.widget_id||$?.id||""}`;if(qK(sessionStorage,F))return;L.current=!0,KK(sessionStorage,F,"1"),j?.(G)},[_?.auto_open,G,Z]),B`
        <div class="generated-widget-launch" onClick=${(V)=>V.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${X?` • ${String(X).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${q&&B`<div class="generated-widget-launch-description">${q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${Q}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${K}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function QW(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function FW(_){let $=X4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function NW({preview:_}){let $=X4(_.url),j=FW(_.image),G=LK(_.site_name,$);return B`
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
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function BW(_,$){return typeof _==="string"?_:""}var QK=1800,UW=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,HW=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,EW=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,DW=`
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
</style>`;async function FK(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(J9(document,{text:$}))return!0;if(await XK(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function zW(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=e_($,null),G=`<html><head>${DW}</head><body>${j}</body></html>`;if(J9(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return FK($)}function OW(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let q=window.getSelection?.();if(!q||q.isCollapsed)return;for(let K of $)if(YK(Y,{root:K,selection:q}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,q)=>{let K=q||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=HW,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=EW,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=UW,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",X(K,"idle"),q.appendChild(K);let L=async(Q)=>{Q.preventDefault(),Q.stopPropagation();let F=Y.querySelector("code")?.textContent||"",N=await FK(F);X(K,N?"success":"error");let U=j.get(K);if(U)clearTimeout(U);let z=setTimeout(()=>{X(K,"idle"),j.delete(K)},QK);j.set(K,z)};K.addEventListener("click",L),G.push(()=>{K.removeEventListener("click",L);let Q=j.get(K);if(Q)clearTimeout(Q);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{G.forEach((Y)=>Y())}}function WW(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function JW(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Files:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=WW(L.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X),K=[...Y,...q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Z}}function AW(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Referenced messages:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let V=L.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X),K=[...Y,...q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Z}}function kW(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1){let Q=j[L].trim();if((Q==="Images:"||Q==="Attachments:")&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=L.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let F=V[1],N=(V[2]||"").trim()||F;Z.push({id:F,label:N,raw:Q})}else Z.push({id:null,label:Q,raw:Q})}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),q=j.slice(X),K=[...Y,...q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Z}}function MW(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function yW(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(MW).sort((Q,V)=>V.length-Q.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),K=[],L;while(L=q.nextNode())K.push(L);for(let Q of K){let V=Q.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let F=Q.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let N=V.split(Z).filter((z)=>z!=="");if(N.length===0)continue;let U=Y.createDocumentFragment();for(let z of N)if(X.test(z)){let E=Y.createElement("mark");E.className="search-highlight-term",E.textContent=z,U.appendChild(E)}else U.appendChild(Y.createTextNode(z));Q.parentNode.replaceChild(U,Q)}return Y.body.innerHTML}function NK({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:q,userAvatarUrl:K,userAvatarBackground:L,onDelete:Q,isThreadReply:V,isThreadPrev:F,isThreadNext:N,isRemoving:U,highlightQuery:z,onFileRef:E,onOpenWidget:H,onOpenAttachmentPreview:k}){let[A,O]=C(null),[w,x]=C("idle"),[W,J]=C(()=>W9()),M=u(null),D=u(null),y=_.data,I=y.type==="agent_response",R=q||"You",S=I?X||Iq:R,v=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(I&&z&&v&&v!==S),h=I?L9(X,Y,!0):L9(R,K),_0=typeof L==="string"?L.trim().toLowerCase():"",b=!I&&h.image&&(_0==="clear"||_0==="transparent"),t=I&&Boolean(h.image),s=`background-color: ${b||t?"transparent":h.color}`,K0=y.content_meta,Z0=Boolean(K0?.truncated),E0=Boolean(K0?.preview),B0=Z0&&!E0,V0=Z0?{originalLength:Number.isFinite(K0?.original_length)?K0.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(K0?.max_length)?K0.max_length:0}:null,Q0=y.content_blocks||[],U0=y.media_ids||[],M0=VK(Q0),r=Boolean(M0?.sourceAgentName),G0=BW(y.content,y.link_previews);G0=jW(G0,Q0);let{content:O0,fileRefs:u0}=JW(G0),{content:R0,messageRefs:r0}=AW(O0),j_=(d)=>{d?.preventDefault?.(),d?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},I0=(d)=>{if(d.key==="Enter"||d.key===" ")j_(d)},{content:i0,attachments:T0}=kW(R0);G0=i0;let s0=H9(Q0),f0=F9(Q0),K_=aO(Q0)[0]||null,h0=tO(Q0)[0]||null,P0=eO(Q0)[0]||null,a0=s0.length===1&&typeof s0[0]?.fallback_text==="string"?s0[0].fallback_text.trim():"",F_=f0.length===1?s2(f0[0]).trim():"",D_=Boolean(a0)&&G0?.trim()===a0||Boolean(F_)&&G0?.trim()===F_,L0=Boolean(G0)&&!B0&&!D_,A0=typeof z==="string"?z.trim():"",b0=q0(()=>{if(!G0||D_)return"";let d=e_(G0,j);return A0?yW(d,A0):d},[G0,D_,A0]),N_=q0(()=>a2(_),[_]),A_=q0(()=>_K(),[]),__=q0(()=>$K(_),[_]),E_=Boolean(W.speaking&&W.activePostId===_.id),B_=(d,z0)=>{d.stopPropagation(),O(f1(z0))},W_=(d)=>{k?.(d)},$0=(d)=>{d.stopPropagation(),Q?.(_)},W0=async(d)=>{d.stopPropagation();let z0=await zW(N_);if(x(z0?"success":"error"),D.current)clearTimeout(D.current);D.current=setTimeout(()=>{D.current=null,x("idle")},QK)},k0=(d)=>{if(d.stopPropagation(),E_){jK();return}GK(_.id,__)},x0=(d,z0)=>{let c0=new Set;if(!d||z0.length===0)return{content:d,usedIds:c0};return{content:d.replace(/attachment:([^\s)"']+)/g,(C_,O_,h_,o1)=>{let p_=O_.replace(/^\/+/,""),Q1=z0.find((u_)=>u_.name&&u_.name.toLowerCase()===p_.toLowerCase()&&!c0.has(u_.id))||z0.find((u_)=>!c0.has(u_.id));if(!Q1)return C_;if(c0.add(Q1.id),o1.slice(Math.max(0,h_-2),h_)==="](")return`/media/${Q1.id}`;return Q1.name||"attachment"}),usedIds:c0}},m0=[],e=[],p=[],a=[],j0=[],Y0=[],D0=[],v0=0;if(Q0.length>0)Q0.forEach((d)=>{if(d?.type==="text"&&d.annotations)D0.push(d.annotations);if(d?.type==="generated_widget")Y0.push(d);else if(d?.type==="resource_link")a.push(d);else if(d?.type==="resource")j0.push(d);else if(d?.type==="file"){let z0=U0[v0++];if(z0)e.push(z0),p.push({id:z0,name:d?.name||d?.filename||d?.title})}else if(d?.type==="image"||!d?.type){let z0=U0[v0++];if(z0){let c0=typeof d?.mime_type==="string"?d.mime_type:void 0;m0.push({id:z0,annotations:d?.annotations,mimeType:c0}),p.push({id:z0,name:d?.name||d?.filename||d?.title})}}});else if(U0.length>0){let d=T0.length>0;U0.forEach((z0,c0)=>{let n0=T0[c0]||null;if(p.push({id:z0,name:n0?.label||null}),d)e.push(z0);else m0.push({id:z0,annotations:null})})}if(T0.length>0)T0.forEach((d)=>{if(!d?.id)return;let z0=p.find((c0)=>String(c0.id)===String(d.id));if(z0&&!z0.name)z0.name=d.label});let{content:d0,usedIds:J0}=x0(G0,p);G0=d0;let C0=m0.filter(({id:d})=>!J0.has(d)),V_=e.filter((d)=>!J0.has(d)),q_=T0.length>0?T0.map((d,z0)=>({id:d.id||`attachment-${z0+1}`,label:d.label||`attachment-${z0+1}`})):p.map((d,z0)=>({id:d.id,label:d.name||`attachment-${z0+1}`})),G_=q0(()=>H9(Q0),[Q0]),U_=q0(()=>F9(Q0),[Q0]),M_=q0(()=>{return G_.map((d)=>`${d.card_id}:${d.state}`).join("|")},[G_]);g(()=>{if(!M.current)return;return L$(M.current),OW(M.current)},[b0]),g(()=>{return eq((d)=>{J(d)})},[]),g(()=>()=>{if(D.current)clearTimeout(D.current)},[]);let Z_=u(null);return g(()=>{if(!Z_.current||G_.length===0)return;let d=Z_.current;d.innerHTML="";for(let z0 of G_){let c0=document.createElement("div");d.appendChild(c0),sq(c0,z0,{onAction:async(n0)=>{if(n0.type==="Action.OpenUrl"){let C_=X4(n0.url||"");if(!C_)throw Error("Invalid URL");window.open(C_,"_blank","noopener,noreferrer");return}if(n0.type==="Action.Submit"){await a3({post_id:_.id,thread_id:y.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:z0.card_id,action:{type:n0.type,title:n0.title||"",data:n0.data}});return}console.warn("[post] unsupported adaptive card action:",n0.type,n0)}}).catch((n0)=>{console.error("[post] adaptive card render error:",n0),c0.textContent=z0.fallback_text||"Card failed to render."})}},[M_,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${I?"agent-post":""} ${V?"thread-reply":""} ${F?"thread-prev":""} ${N?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${I?"agent-avatar":""} ${h.image?"has-image":""}" style=${s}>
                ${h.image?B`<img src=${h.image} alt=${S} />`:h.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${I&&A_&&__&&B`
                        <button
                            class=${`post-action-btn post-speak-btn${E_?" is-active":""}`}
                            type="button"
                            title=${E_?"Stop reading aloud":"Read aloud"}
                            aria-label=${E_?"Stop reading aloud":"Read aloud"}
                            onClick=${k0}
                        >
                            ${E_?B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${w==="success"?" is-success":w==="error"?" is-error":""}`}
                        type="button"
                        title=${w==="success"?"Copied":w==="error"?"Copy failed":"Copy message"}
                        aria-label=${w==="success"?"Copied":w==="error"?"Copy failed":"Copy message"}
                        onClick=${W0}
                        disabled=${!N_}
                    >
                        ${w==="success"?B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:w==="error"?B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${$0}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${S}</span>
                    ${r&&B`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${M0?.sourceChatJid||""}`.trim()}
                        >
                            @${M0?.sourceAgentName}
                        </span>
                    `}
                    ${c&&B`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${v} and reference this message`}
                            onClick=${j_}
                            onKeyDown=${I0}
                        >
                            @${v}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${j_}>${wZ(_.timestamp)}</a>
                    ${K_&&B`
                        <span
                            class="post-recovery-chip"
                            title=${ZW(K_)}
                        >
                            recovered
                        </span>
                    `}
                    ${h0&&B`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${XW(h0)}
                        >
                            timeout
                        </span>
                    `}
                    ${P0&&B`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(P0.severity||"warning")}${P0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(P0.label||P0.kind||"issue")}
                        >
                            ${String(P0.label||P0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${P0&&B`
                    <${YW} marker=${P0} />
                `}
                ${B0&&V0&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${i5(V0.originalLength)} chars
                            ${V0.maxLength?B` • Display limit: ${i5(V0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${E0&&V0&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${i5(V0.maxLength)} of ${i5(V0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(u0.length>0||r0.length>0||q_.length>0)&&B`
                    <div class="post-file-refs">
                        ${r0.map((d)=>{let z0=(c0)=>{if(c0.preventDefault(),c0.stopPropagation(),Z)Z(d,_.chat_jid||null);else{let n0=document.getElementById("post-"+d);if(n0)n0.scrollIntoView({behavior:"smooth",block:"center"}),n0.classList.add("post-highlight"),setTimeout(()=>n0.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${d}`} class="post-msg-pill-link" onClick=${z0}>
                                    <${y1}
                                        prefix="post"
                                        label=${"msg:"+d}
                                        title=${"Message "+d}
                                        icon="message"
                                        onClick=${z0}
                                    />
                                </a>
                            `})}
                        ${u0.map((d)=>{let z0=d.split("/").pop()||d;return B`
                                <${y1}
                                    prefix="post"
                                    label=${z0}
                                    title=${d}
                                    onClick=${()=>E?.(d)}
                                />
                            `})}
                        ${q_.map((d)=>B`
                            <${qW}
                                key=${d.id}
                                attachment=${d}
                                onPreview=${W_}
                            />
                        `)}
                    </div>
                `}
                ${L0&&B`
                    <div 
                        ref=${M}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:b0}}
                        onClick=${(d)=>{if(d.target.classList.contains("hashtag")){d.preventDefault(),d.stopPropagation();let z0=d.target.dataset.hashtag;if(z0)j?.(z0)}else if(d.target.tagName==="IMG")d.preventDefault(),d.stopPropagation(),O(d.target.src)}}
                    />
                `}
                ${G_.length>0&&B`
                    <div ref=${Z_} class="post-adaptive-cards" />
                `}
                ${U_.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${U_.map((d,z0)=>{let c0=cq(d),n0=`${d.card_id}-${z0}`;return B`
                                <div key=${n0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${c0.title}</span>
                                        </div>
                                    </div>
                                    ${c0.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${c0.fields.map((C_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${C_.key}: ${C_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${C_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${C_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${Q4(c0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${Y0.length>0&&B`
                    <div class="generated-widget-launches">
                        ${Y0.map((d,z0)=>B`
                            <${VW}
                                key=${d.widget_id||d.id||`${_.id}-widget-${z0}`}
                                block=${d}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${D0.length>0&&B`
                    ${D0.map((d,z0)=>B`
                        <${$8} key=${z0} annotations=${d} />
                    `)}
                `}
                ${C0.length>0&&B`
                    <div class="media-preview">
                        ${C0.map(({id:d,mimeType:z0})=>{let n0=typeof z0==="string"&&z0.toLowerCase().startsWith("image/svg")?f1(d):e3(d);return B`
                                <img 
                                    key=${d} 
                                    src=${n0} 
                                    alt="Media" 
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(C_)=>B_(C_,d)}
                                />
                            `})}
                    </div>
                `}
                ${C0.length>0&&B`
                    ${C0.map(({annotations:d},z0)=>B`
                        ${d&&B`<${$8} key=${z0} annotations=${d} />`}
                    `)}
                `}
                ${V_.length>0&&B`
                    <div class="file-attachments">
                        ${V_.map((d)=>B`
                            <${sO} key=${d} mediaId=${d} onPreview=${W_} />
                        `)}
                    </div>
                `}
                ${a.length>0&&B`
                    <div class="resource-links">
                        ${a.map((d,z0)=>B`
                            <div key=${z0}>
                                <${KW} block=${d} />
                                <${$8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${j0.length>0&&B`
                    <div class="resource-embeds">
                        ${j0.map((d,z0)=>B`
                            <div key=${z0}>
                                <${LW} block=${d} />
                                <${$8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${y.link_previews.map((d,z0)=>B`
                            <${NW} key=${z0} preview=${d} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&B`<${aq} src=${A} onClose=${()=>O(null)} />`}

    `}function BK({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:q,onOpenWidget:K,onOpenAttachmentPreview:L,emptyMessage:Q,timelineRef:V,agents:F,user:N,onDeletePost:U,reverse:z=!0,removingPostIds:E,searchQuery:H}){let[k,A]=C(!1),O=u(null),w=typeof IntersectionObserver<"u",x=P(async()=>{if(!j||!$||k)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,k,j]),W=P((v)=>{let{scrollTop:c,scrollHeight:h,clientHeight:_0}=v.target,b=z?h-_0-c:c,t=Math.max(300,_0);if(b<t)x()},[z,x]);g(()=>{if(!w)return;let v=O.current,c=V?.current;if(!v||!c)return;let h=300,_0=new IntersectionObserver((b)=>{for(let t of b){if(!t.isIntersecting)continue;x()}},{root:c,rootMargin:`${h}px 0px ${h}px 0px`,threshold:0});return _0.observe(v),()=>_0.disconnect()},[w,$,j,V,x]);let J=u(x);if(J.current=x,g(()=>{if(w)return;if(!V?.current)return;let{scrollTop:v,scrollHeight:c,clientHeight:h}=V.current,_0=z?c-h-v:v,b=Math.max(300,h);if(_0<b)J.current?.()},[w,_,$,z,V]),g(()=>{if(!V?.current)return;if(!$||k)return;let{scrollTop:v,scrollHeight:c,clientHeight:h}=V.current,_0=z?c-h-v:v,b=Math.max(300,h);if(c<=h+1||_0<b)J.current?.()},[_,$,k,z,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let M=_.slice().sort((v,c)=>v.id-c.id),D=(v)=>{let c=v?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let h=Number(c);return Number.isFinite(h)?h:null},y=new Map;for(let v=0;v<M.length;v+=1){let c=M[v],h=Number(c?.id),_0=D(c);if(_0!==null){let b=y.get(_0)||{anchorIndex:-1,replyIndexes:[]};b.replyIndexes.push(v),y.set(_0,b)}else if(Number.isFinite(h)){let b=y.get(h)||{anchorIndex:-1,replyIndexes:[]};b.anchorIndex=v,y.set(h,b)}}let I=new Map;for(let[v,c]of y.entries()){let h=new Set;if(c.anchorIndex>=0)h.add(c.anchorIndex);for(let _0 of c.replyIndexes)h.add(_0);I.set(v,Array.from(h).sort((_0,b)=>_0-b))}let R=M.map((v,c)=>{let h=D(v);if(h===null)return{hasThreadPrev:!1,hasThreadNext:!1};let _0=I.get(h);if(!_0||_0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let b=_0.indexOf(c);if(b<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:b>0,hasThreadNext:b<_0.length-1}}),S=B`<div class="timeline-sentinel" ref=${O}></div>`;return B`
        <div class="timeline ${z?"reverse":"normal"}" ref=${V} onScroll=${W}>
            <div class="timeline-content">
                ${z?S:null}
                ${M.map((v,c)=>{let h=Boolean(v.data?.thread_id&&v.data.thread_id!==v.id),_0=E?.has?.(v.id),b=R[c]||{};return B`
                    <${NK}
                        key=${v.id}
                        post=${v}
                        isThreadReply=${h}
                        isThreadPrev=${b.hasThreadPrev}
                        isThreadNext=${b.hasThreadNext}
                        isRemoving=${_0}
                        highlightQuery=${H}
                        agentName=${Cq(v.data?.agent_id,F||{})}
                        agentAvatarUrl=${Pq(v.data?.agent_id,F||{})}
                        userName=${N?.name||N?.user_name}
                        userAvatarUrl=${N?.avatar_url||N?.avatarUrl||N?.avatar}
                        userAvatarBackground=${N?.avatar_background||N?.avatarBackground}
                        onClick=${()=>G?.(v)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${q}
                        onOpenWidget=${K}
                        onDelete=${U}
                        onOpenAttachmentPreview=${L}
                    />
                `})}
                ${z?null:S}
            </div>
        </div>
    `}w0();f_();function UK(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var j8="workspaceExplorerScale",wW=["compact","default","comfortable"],TW=new Set(wW),xW={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function HK(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return TW.has(j)?j:$}function A9(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function IW(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function CW(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function k9(_={}){let $=IW(_),j=_.stored?HK(_.stored,$):$;return CW(j,_)}function EK(_){return xW[HK(_)]}R7();function PW(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function M9(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function DK(_,$,j={}){let G=j.resolvePane;if(M9(_,G))return!0;return PW($)}var AK=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function RW(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return M9($,(j)=>X_.resolve(j))}function kK(_,$,j,G=0,Z=[]){if(!j&&AK(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)kK(X,$,j,G+1,Z);return Z}function zK(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&AK(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function x9(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((q)=>[q?.path,q])):new Map,X=!j||j.length!==G.length,Y=G.map((q)=>{let K=x9(Z.get(q.path),q);if(K!==Z.get(q.path))X=!0;return K});return X?{...$,children:Y}:_}function w9(_,$,j){if(!_)return _;if(_.path===$)return x9(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=w9(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var MK=4,y9=14,fW=16;function yK(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=yK(G);return _.__bytes=j,j}function wK(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=MK)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let q of Z){let K=Math.max(0,Number(q?.__bytes??q?.size??0));if(K<=0)continue;if(q.type==="dir")X.push({kind:"dir",node:q,size:K});else X.push({kind:"file",name:q.name,path:q.path,size:K})}X.sort((q,K)=>K.size-q.size);let Y=X;if(X.length>y9){let q=X.slice(0,y9-1),K=X.slice(y9-1),L=K.reduce((Q,V)=>Q+V.size,0);q.push({kind:"other",name:`+${K.length} more`,path:`${G.path}/[other]`,size:L}),Y=q}return G.children=Y.map((q)=>{if(q.kind==="dir")return wK(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),G}function OK(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function TK(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function G8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function I9(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,q=X-Z>Y?Z+Y:X,K=G8(_,$,G,Z),L=G8(_,$,G,q),Q=G8(_,$,j,q),V=G8(_,$,j,Z),F=q-Z>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${G} ${G} 0 ${F} 1 ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var xK={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function IK(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(q,K,L,Q)=>{let V=Array.isArray(q?.children)?q.children:[];if(!V.length)return;let F=Math.max(0,Number(q.size)||0);if(F<=0)return;let N=L-K,U=K;V.forEach((z,E)=>{let H=Math.max(0,Number(z.size)||0);if(H<=0)return;let k=H/F,A=U,O=E===V.length-1?L:U+N*k;if(U=O,O-A<0.003)return;let w=xK[Q];if(w){let x=TK(A,Q,j);if(G.push({key:z.path,path:z.path,label:z.name,size:H,color:x,depth:Q,startAngle:A,endAngle:O,innerRadius:w[0],outerRadius:w[1],d:I9(120,120,w[0],w[1],A,O)}),Q===1)Z.push({key:z.path,name:z.name,size:H,pct:X>0?H/X*100:0,color:x})}if(Q<MK)Y(z,A,O,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function T9(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=T9(G,$);if(Z)return Z}return null}function CK(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=xK[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,q=TK(X,1,G),L=`${$||"."}/[files]`;return{segments:[{key:L,path:L,label:_,size:j,color:q,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:I9(120,120,Z[0],Z[1],X,Y)}],legend:[{key:L,name:_,size:j,pct:100,color:q}]}}function WK(_,$=!1,j=!1){if(!_)return null;let G=yK(_),Z=wK(_,0),X=Z.size||G,{segments:Y,legend:q}=IK(Z,X,j);if(!Y.length&&X>0){let K=CK("[files]",Z.path,X,j);Y=K.segments,q=K.legend}return{root:Z,totalSize:X,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function SW({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[q,K]=C(!1);g(()=>{let D=_?.root?.path||".";Z(D),Y([D]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!G)return;K(!0);let D=setTimeout(()=>K(!1),180);return()=>clearTimeout(D)},[G]);let L=q0(()=>{return T9(_.root,G)||_.root},[_?.root,G]),Q=L?.size||_.totalSize||0,{segments:V,legend:F}=q0(()=>{let D=IK(L,Q,_.isDarkTheme);if(D.segments.length>0)return D;if(Q<=0)return D;let y=L?.children?.length?"Total":"[files]";return CK(y,L?.path||_?.root?.path||".",Q,_.isDarkTheme)},[L,Q,_.isDarkTheme,_?.root?.path]),[N,U]=C(V),z=u(new Map),E=u(0);g(()=>{let D=z.current,y=new Map(V.map((v)=>[v.key,v])),I=performance.now(),R=220,S=(v)=>{let c=Math.min(1,(v-I)/220),h=c*(2-c),_0=V.map((b)=>{let s=D.get(b.key)||{startAngle:b.startAngle,endAngle:b.startAngle,innerRadius:b.innerRadius,outerRadius:b.innerRadius},K0=(Q0,U0)=>Q0+(U0-Q0)*h,Z0=K0(s.startAngle,b.startAngle),E0=K0(s.endAngle,b.endAngle),B0=K0(s.innerRadius,b.innerRadius),V0=K0(s.outerRadius,b.outerRadius);return{...b,d:I9(120,120,B0,V0,Z0,E0)}});if(U(_0),c<1)E.current=requestAnimationFrame(S)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(S),z.current=y,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let H=N.length?N:V,k=Q>0?i_(Q):"0 B",A=L?.name||"",w=(A&&A!=="."?A:"Total")||"Total",x=k,W=X.length>1,J=(D)=>{if(!D?.path)return;let y=T9(_.root,D.path);if(!y||!Array.isArray(y.children)||y.children.length===0)return;Y((I)=>[...I,y.path]),Z(y.path),j(null)},M=()=>{if(!W)return;Y((D)=>{let y=D.slice(0,-1);return Z(y[y.length-1]||_?.root?.path||"."),y}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${L?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${Q}>
                ${H.map((D)=>B`
                    <path
                        key=${D.key}
                        d=${D.d}
                        fill=${D.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===D.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(D)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(D)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>J(D)}
                    >
                        <title>${D.label} — ${i_(D.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${W?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${w}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${x}</text>
                </g>
            </svg>
            ${F.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((D)=>B`
                        <div key=${D.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${D.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${D.name}>${D.name}</span>
                            <span class="workspace-folder-starburst-size">${i_(D.size)}</span>
                            <span class="workspace-folder-starburst-pct">${D.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function JK(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function PK(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function gW(_){if(!_)return"Workspace index status";let $=[PK(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function uW(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function bW(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function vW(_,$=null){let j=uW(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:bW(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function RK({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:G,onOpenTerminalTab:Z,onOpenVncTab:X,onToggleTerminal:Y,terminalVisible:q=!1}){let[K,L]=C(null),[Q,V]=C(new Set(["."])),[F,N]=C(null),[U,z]=C(null),[E,H]=C(""),[k,A]=C(null),[,O]=C(null),[w,x]=C(!0),[W,J]=C(!1),[M,D]=C(null),[y,I]=C(()=>Y$("workspaceShowHidden",!1)),[R,S]=C(!1),[v,c]=C(null),[h,_0]=C(null),[b,t]=C(null),[s,K0]=C(!1),[Z0,E0]=C(null),[B0,V0]=C(null),[Q0,U0]=C(null),[M0,r]=C(!1),[G0,O0]=C(()=>e4()),[u0,R0]=C(()=>OK()),[r0,j_]=C(()=>k9({stored:H1(j8),...A9()})),[I0,i0]=C(!1),T0=Math.max(15000,(Number(G0?.refreshIntervalSec)||60)*1000),s0=Math.max(0,Number(G0?.folderPreviewDepth)||0),f0=u(Q),t0=u(""),K_=u(null),H_=u(0),h0=u(new Set),S0=u(null),P0=u(null),a0=u(new Map),F_=u(_),D_=u(G),L0=u(null),A0=u(null),b0=u(null),N_=u(null),A_=u(null),__=u(null),E_=u("."),B_=u(0),W_=u({path:null,dragging:!1,startX:0,startY:0}),$0=u({path:null,dragging:!1,startX:0,startY:0}),W0=u({path:null,timer:0}),k0=u(!1),x0=u(0),m0=u(new Map),e=u(null),p=u(null),a=u(null),j0=u(null),Y0=u(null),D0=u(null),v0=u(y),d0=u($),J0=u(j??$),C0=u(0),V_=u(b),q_=u(R),G_=u(v),U_=u(null),M_=u({x:0,y:0}),Z_=u(0),d=u(null),z0=u(F),c0=u(U),n0=u(null),C_=u(k);F_.current=_,D_.current=G,g(()=>{f0.current=Q},[Q]),g(()=>{v0.current=y},[y]),g(()=>{d0.current=$},[$]),g(()=>{J0.current=j??$},[j,$]),g(()=>{V_.current=b},[b]);let O_=P(()=>{if(!B_.current)return;clearTimeout(B_.current),B_.current=0},[]);g(()=>()=>O_(),[O_]),g(()=>{if(typeof window>"u")return;let f=()=>{j_(k9({stored:H1(j8),...A9()}))};f();let m=()=>f(),n=()=>f(),i=(H0)=>{if(!H0||H0.key===null||H0.key===j8)f()};window.addEventListener("resize",m),window.addEventListener("focus",n),window.addEventListener("storage",i);let F0=window.matchMedia?.("(pointer: coarse)"),X0=window.matchMedia?.("(hover: none)"),y0=(H0,l0)=>{if(!H0)return;if(H0.addEventListener)H0.addEventListener("change",l0);else if(H0.addListener)H0.addListener(l0)},g0=(H0,l0)=>{if(!H0)return;if(H0.removeEventListener)H0.removeEventListener("change",l0);else if(H0.removeListener)H0.removeListener(l0)};return y0(F0,m),y0(X0,m),()=>{window.removeEventListener("resize",m),window.removeEventListener("focus",n),window.removeEventListener("storage",i),g0(F0,m),g0(X0,m)}},[]),g(()=>{if(typeof window>"u")return;let f=()=>{O0(e4())},m=(F0)=>{if(!F0||F0.key===null||F0.key===x2||F0.key===I2)f()},n=()=>f(),i=(F0)=>{let X0=F0?.detail?.settings;if(X0&&typeof X0==="object"){O0({refreshIntervalSec:Number(X0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(X0.folderPreviewDepth)||0)});return}f()};return window.addEventListener("focus",n),window.addEventListener("storage",m),window.addEventListener(T2,i),()=>{window.removeEventListener("focus",n),window.removeEventListener("storage",m),window.removeEventListener(T2,i)}},[]),g(()=>{let f=(m)=>{let n=m?.detail?.path;if(!n)return;let i=n.split("/"),F0=[];for(let X0=1;X0<i.length;X0++)F0.push(i.slice(0,X0).join("/"));if(F0.length)V((X0)=>{let y0=new Set(X0);y0.add(".");for(let g0 of F0)y0.add(g0);return y0});N(n),requestAnimationFrame(()=>{let X0=document.querySelector(`[data-path="${CSS.escape(n)}"]`);if(X0)X0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",f),()=>window.removeEventListener("workspace-reveal-path",f)},[]),g(()=>{q_.current=R},[R]),g(()=>{G_.current=v},[v]),g(()=>{z0.current=F},[F]),g(()=>{c0.current=U},[U]),g(()=>{C_.current=k},[k]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let f=()=>R0(OK());f();let m=window.matchMedia?.("(prefers-color-scheme: dark)"),n=()=>f();if(m?.addEventListener)m.addEventListener("change",n);else if(m?.addListener)m.addListener(n);let i=typeof MutationObserver<"u"?new MutationObserver(()=>f()):null;if(i?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)i?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(m?.removeEventListener)m.removeEventListener("change",n);else if(m?.removeListener)m.removeListener(n);i?.disconnect()}},[]),g(()=>{if(!U)return;let f=A_.current;if(!f)return;let m=requestAnimationFrame(()=>{UK(f)});return()=>cancelAnimationFrame(m)},[U]),g(()=>{if(!I0)return;let f=(n)=>{let i=n?.target;if(!(i instanceof Element))return;if(Y0.current?.contains(i))return;if(D0.current?.contains(i))return;i0(!1)},m=(n)=>{if(n?.key==="Escape")i0(!1),D0.current?.focus?.()};return document.addEventListener("mousedown",f),document.addEventListener("touchstart",f,{passive:!0}),document.addEventListener("keydown",m),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("touchstart",f),document.removeEventListener("keydown",m)}},[I0]);let h_=async(f,m={})=>{let n=Boolean(m?.autoOpen),i=String(f||"").trim();J(!0),A(null),O(null);try{let F0=await Z7(i,20000);if(n&&i&&DK(i,F0,{resolvePane:(X0)=>X_.resolve(X0)}))return D_.current?.(i,F0),F0;return A(F0),F0}catch(F0){let X0={error:F0.message||"Failed to load preview"};return A(X0),X0}finally{J(!1)}};L0.current=h_;let o1=P(async()=>{try{let f=await j7("all");return U0(f),f}catch(f){return console.warn("[workspace-explorer] Failed to load workspace index status:",f),null}},[]);P0.current=o1;let p_=P(()=>{P0.current?.()},[]),i1=async()=>{if(!d0.current)return;try{let f=await n5("",1,v0.current),m=zK(f.root,f0.current,v0.current);if(m===t0.current){x(!1);return}if(t0.current=m,K_.current=f.root,!H_.current)H_.current=requestAnimationFrame(()=>{H_.current=0,L((n)=>x9(n,K_.current)),x(!1)})}catch(f){D(f.message||"Failed to load workspace"),x(!1)}},Q1=async(f)=>{if(!f)return;if(h0.current.has(f))return;h0.current.add(f);try{let m=await n5(f,1,v0.current);L((n)=>w9(n,f,m.root))}catch(m){D(m.message||"Failed to load workspace")}finally{h0.current.delete(f)}};A0.current=Q1;let Y_=P(()=>{let f=F;if(!f)return".";let m=a0.current?.get(f);if(m&&m.type==="dir")return m.path;if(f==="."||!f.includes("/"))return".";let n=f.split("/");return n.pop(),n.join("/")||"."},[F]),u_=P((f)=>{let m=f?.closest?.(".workspace-row");if(!m)return null;let n=m.dataset.path,i=m.dataset.type;if(!n)return null;if(i==="dir")return n;if(n.includes("/")){let F0=n.split("/");return F0.pop(),F0.join("/")||"."}return"."},[]),j1=P((f)=>{return u_(f?.target||null)},[u_]),T_=P((f)=>{V_.current=f,t(f)},[]),b_=P(()=>{let f=W0.current;if(f?.timer)clearTimeout(f.timer);W0.current={path:null,timer:0}},[]),r_=P((f)=>{if(!f||f==="."){b_();return}let m=a0.current?.get(f);if(!m||m.type!=="dir"){b_();return}if(f0.current?.has(f)){b_();return}if(W0.current?.path===f)return;b_();let n=setTimeout(()=>{W0.current={path:null,timer:0},A0.current?.(f),V((i)=>{let F0=new Set(i);return F0.add(f),F0})},600);W0.current={path:f,timer:n}},[b_]),F1=P((f,m)=>{if(M_.current={x:f,y:m},Z_.current)return;Z_.current=requestAnimationFrame(()=>{Z_.current=0;let n=U_.current;if(!n)return;let i=M_.current;n.style.transform=`translate(${i.x+12}px, ${i.y+12}px)`})},[]),D1=P((f)=>{if(!f)return;let n=(a0.current?.get(f)?.name||f.split("/").pop()||f).trim();if(!n)return;_0({path:f,label:n})},[]),s_=P(()=>{if(_0(null),Z_.current)cancelAnimationFrame(Z_.current),Z_.current=0;if(U_.current)U_.current.style.transform="translate(-9999px, -9999px)"},[]),v_=P((f)=>{if(!f)return".";let m=a0.current?.get(f);if(m&&m.type==="dir")return m.path;if(f==="."||!f.includes("/"))return".";let n=f.split("/");return n.pop(),n.join("/")||"."},[]),z1=P(()=>{z(null),H("")},[]),Y1=P((f)=>{if(!f)return;let n=(a0.current?.get(f)?.name||f.split("/").pop()||f).trim();if(!n||f===".")return;z(f),H(n)},[]),O1=P(async()=>{let f=c0.current;if(!f)return;let m=(E||"").trim();if(!m){z1();return}let n=a0.current?.get(f),i=(n?.name||f.split("/").pop()||f).trim();if(m===i){z1();return}try{let X0=(await q7(f,m))?.path||f,y0=f.includes("/")?f.split("/").slice(0,-1).join("/")||".":".";if(z1(),D(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:f,newPath:X0,type:n?.type||"file"}})),n?.type==="dir")V((g0)=>{let H0=new Set;for(let l0 of g0)if(l0===f)H0.add(X0);else if(l0.startsWith(`${f}/`))H0.add(`${X0}${l0.slice(f.length)}`);else H0.add(l0);return H0});if(N(X0),n?.type==="dir")A(null),J(!1),O(null);else L0.current?.(X0);A0.current?.(y0),p_()}catch(F0){D(F0?.message||"Failed to rename file")}},[z1,E,p_]),s1=P(async(f)=>{let i=f||".";for(let F0=0;F0<50;F0+=1){let y0=`untitled${F0===0?"":`-${F0}`}.md`;try{let H0=(await Y7(i,y0,""))?.path||(i==="."?y0:`${i}/${y0}`);if(i&&i!==".")V((l0)=>new Set([...l0,i]));N(H0),D(null),A0.current?.(i),L0.current?.(H0),p_();return}catch(g0){if(g0?.status===409||g0?.code==="file_exists")continue;D(g0?.message||"Failed to create file");return}}D("Failed to create file (untitled name already in use).")},[]),w1=P((f)=>{if(f?.stopPropagation?.(),s)return;let m=v_(z0.current);s1(m)},[s,v_,s1]);g(()=>{if(typeof window>"u")return;let f=(m)=>{let n=m?.detail?.updates||[];if(!Array.isArray(n)||n.length===0)return;L((g0)=>{let H0=g0;for(let l0 of n){if(!l0?.root)continue;if(!H0||l0.path==="."||!l0.path)H0=l0.root;else H0=w9(H0,l0.path,l0.root)}if(H0)t0.current=zK(H0,f0.current,v0.current);return x(!1),H0});let i=z0.current;if(Boolean(i)&&n.some((g0)=>{let H0=g0?.path||"";if(!H0||H0===".")return!0;return i===H0||i.startsWith(`${H0}/`)||H0.startsWith(`${i}/`)}))m0.current.clear();if(p_(),!i||!C_.current)return;let X0=a0.current?.get(i);if(X0&&X0.type==="dir")return;if(n.some((g0)=>{let H0=g0?.path||"";if(!H0||H0===".")return!0;return i===H0||i.startsWith(`${H0}/`)}))L0.current?.(i)};return window.addEventListener("workspace-update",f),()=>window.removeEventListener("workspace-update",f)},[]),S0.current=i1;let S1=u(()=>{if(typeof window>"u")return;let f=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=J0.current??d0.current,n=document.visibilityState!=="hidden"&&(m||f.matches&&d0.current);r5(n,v0.current).catch((i)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",i,{visible:n,showHidden:v0.current})})}).current,q1=u(0),B5=u(()=>{if(q1.current)clearTimeout(q1.current);q1.current=setTimeout(()=>{q1.current=0,S1()},250)}).current;g(()=>{if(d0.current)S0.current?.(),P0.current?.();B5()},[$,j]),g(()=>{S0.current(),P0.current?.();let f=setInterval(()=>{S0.current(),P0.current?.()},T0);return()=>clearInterval(f)},[T0]),g(()=>{S1();let f=j4("previewHeight",null),m=Number.isFinite(f)?Math.min(Math.max(f,80),600):280;if(x0.current=m,b0.current)b0.current.style.setProperty("--preview-height",`${m}px`);let n=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),i=()=>B5();if(n.addEventListener)n.addEventListener("change",i);else if(n.addListener)n.addListener(i);return document.addEventListener("visibilitychange",i),()=>{if(H_.current)cancelAnimationFrame(H_.current),H_.current=0;if(n.removeEventListener)n.removeEventListener("change",i);else if(n.removeListener)n.removeListener(i);if(document.removeEventListener("visibilitychange",i),q1.current)clearTimeout(q1.current),q1.current=0;r5(!1,v0.current).catch((F0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",F0,{showHidden:v0.current})})}},[]);let N1=q0(()=>kK(K,Q,y),[K,Q,y]),W4=q0(()=>new Map(N1.map((f)=>[f.node.path,f.node])),[N1]),J4=q0(()=>EK(r0),[r0]);a0.current=W4;let k_=(F?a0.current.get(F):null)?.type==="dir";g(()=>{if(!F||!k_){V0(null),e.current=null,p.current=null;return}if(s0<=0){V0({loading:!1,error:null,payload:null,disabled:!0}),e.current=null,p.current=null;return}let f=F,m=`${y?"hidden":"visible"}:${s0}:${F}`,n=m0.current,i=n.get(m);if(i?.root){n.delete(m),n.set(m,i);let y0=WK(i.root,Boolean(i.truncated),u0);if(y0)e.current=y0,p.current=F,V0({loading:!1,error:null,payload:y0,disabled:!1});return}let F0=e.current,X0=p.current;V0({loading:!0,error:null,payload:X0===F?F0:null,disabled:!1}),n5(F,s0,y).then((y0)=>{if(z0.current!==f)return;let g0={root:y0?.root,truncated:Boolean(y0?.truncated)};n.delete(m),n.set(m,g0);while(n.size>fW){let l0=n.keys().next().value;if(!l0)break;n.delete(l0)}let H0=WK(g0.root,g0.truncated,u0);e.current=H0,p.current=F,V0({loading:!1,error:null,payload:H0,disabled:!1})}).catch((y0)=>{if(z0.current!==f)return;V0({loading:!1,error:y0?.message||"Failed to load folder size chart",payload:X0===F?F0:null,disabled:!1})})},[F,k_,y,u0,s0]);let G1=Boolean(k&&k.kind==="text"&&!k_&&(!k.size||k.size<=262144)),a1=G1?"Open in editor":k?.size>262144?"File too large to edit":"File is not editable",U$=Boolean(F&&!k_&&RW(F)),U5=Boolean(F&&F!=="."),H5=Boolean(F&&!k_),E5=Boolean(F&&!k_),H$=F&&k_?H2(F,y):null,A4=PK(Q0),k4=gW(Q0),h$=Q0?.state||"never_indexed",D5=h$!=="ready",K1=P(()=>i0(!1),[]),P_=P(async(f)=>{K1();try{await f?.()}catch(m){console.warn("[workspace-explorer] Header menu action failed:",m)}},[K1]),z5=P(async(f)=>{f?.stopPropagation?.(),r(!0),U0((m)=>({scope:"all",last_indexed_at:m?.last_indexed_at||null,last_error:null,indexed_file_count:m?.indexed_file_count||0,roots:m?.roots||[],updated_at:m?.updated_at||null,state:"indexing"}));try{let m=await G7("all");U0(m),D(null),t0.current="",S0.current?.()}catch(m){let n=m?.message||"Failed to reindex workspace";U0((i)=>({scope:"all",last_indexed_at:i?.last_indexed_at||null,last_error:n,indexed_file_count:i?.indexed_file_count||0,roots:i?.roots||[],updated_at:i?.updated_at||null,state:"failed"})),D(n)}finally{r(!1)}},[]);g(()=>{let f=a.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!f)return;if(f.innerHTML="",!F||k_||!k||k.error)return;let m={path:F,content:typeof k.text==="string"?k.text:void 0,mtime:k.mtime,size:k.size,preview:k,mode:"view"},n=X_.resolve(m)||X_.get("workspace-preview-default");if(!n)return;let i=n.mount(f,m);return j0.current=i,()=>{if(j0.current===i)i.dispose(),j0.current=null;f.innerHTML=""}},[F,k_,k]);let g1=(f)=>{let m=f?.target;if(m instanceof Element)return m;return m?.parentElement||null},W1=(f)=>{return Boolean(f?.closest?.(".workspace-node-icon, .workspace-label-text"))},M4=(f)=>{if(!f)return!1;if(f.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(f.isContentEditable)},p$=u((f)=>{let m=g1(f),n=m?.closest?.("[data-path]");if(!n)return;let i=n.dataset.path;if(!i||i===".")return;let F0=Boolean(m?.closest?.("button"))||Boolean(m?.closest?.("a"))||Boolean(m?.closest?.("input")),X0=Boolean(m?.closest?.(".workspace-caret"));if(F0||X0)return;if(c0.current===i)return;Y1(i)}).current,n$=u((f)=>{if(k0.current){k0.current=!1;return}let m=g1(f),n=m?.closest?.("[data-path]");if(N_.current?.focus?.(),!n)return;let i=n.dataset.path,F0=n.dataset.type,X0=Boolean(m?.closest?.(".workspace-caret")),y0=Boolean(m?.closest?.("button"))||Boolean(m?.closest?.("a"))||Boolean(m?.closest?.("input")),g0=z0.current===i,H0=c0.current;if(H0){if(H0===i)return;z1()}if(F0==="dir"){if(n0.current=null,N(i),A(null),O(null),J(!1),!f0.current.has(i))A0.current?.(i);if(g0&&!X0)return;V((n_)=>{let o_=new Set(n_);if(o_.has(i))o_.delete(i);else o_.add(i);return o_})}else{n0.current=null,N(i);let l0=a0.current.get(i);if(l0)F_.current?.(l0.path,l0);if(!y0&&!X0)L0.current?.(i)}}).current,T1=u(()=>{t0.current="",S0.current(),P0.current?.(),Array.from(f0.current||[]).filter((m)=>m&&m!==".").forEach((m)=>A0.current?.(m))}).current,d_=u(()=>{n0.current=null,N(null),A(null),O(null),J(!1)}).current,y4=u(()=>{I((f)=>{let m=!f;if(typeof window<"u")L_("workspaceShowHidden",String(m));return v0.current=m,r5(!0,m).catch((i)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",i,{showHidden:m})}),t0.current="",S0.current?.(),Array.from(f0.current||[]).filter((i)=>i&&i!==".").forEach((i)=>A0.current?.(i)),m})}).current,O5=u((f)=>{if(g1(f)?.closest?.("[data-path]"))return;d_()}).current,t1=P(async(f)=>{if(!f)return;let m=f.split("/").pop()||f;if(!window.confirm(`Delete "${m}"? This cannot be undone.`))return;try{await L7(f);let i=f.includes("/")?f.split("/").slice(0,-1).join("/")||".":".";if(z0.current===f)d_();A0.current?.(i),D(null),p_()}catch(i){A((F0)=>({...F0||{},error:i.message||"Failed to delete file"}))}},[d_]),r$=P((f)=>{let m=N_.current;if(!m||!f||typeof CSS>"u"||typeof CSS.escape!=="function")return;m.querySelector(`[data-path="${CSS.escape(f)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),d$=P((f)=>{let m=g1(f);if(c0.current||M4(m))return;let n=N1;if(!n||n.length===0)return;let i=F?n.findIndex((F0)=>F0.node.path===F):-1;if(f.key==="ArrowDown"){f.preventDefault();let F0=Math.min(i+1,n.length-1),X0=n[F0];if(!X0)return;if(N(X0.node.path),X0.node.type!=="dir")F_.current?.(X0.node.path,X0.node),L0.current?.(X0.node.path);else A(null),J(!1),O(null);r$(X0.node.path);return}if(f.key==="ArrowUp"){f.preventDefault();let F0=i<=0?0:i-1,X0=n[F0];if(!X0)return;if(N(X0.node.path),X0.node.type!=="dir")F_.current?.(X0.node.path,X0.node),L0.current?.(X0.node.path);else A(null),J(!1),O(null);r$(X0.node.path);return}if(f.key==="ArrowRight"&&i>=0){let F0=n[i];if(F0?.node?.type==="dir"&&!Q.has(F0.node.path))f.preventDefault(),A0.current?.(F0.node.path),V((X0)=>new Set([...X0,F0.node.path]));return}if(f.key==="ArrowLeft"&&i>=0){let F0=n[i];if(F0?.node?.type==="dir"&&Q.has(F0.node.path))f.preventDefault(),V((X0)=>{let y0=new Set(X0);return y0.delete(F0.node.path),y0});return}if(f.key==="Enter"&&i>=0){f.preventDefault();let F0=n[i];if(!F0)return;let X0=F0.node.path;if(F0.node.type==="dir"){if(!f0.current.has(X0))A0.current?.(X0);V((g0)=>{let H0=new Set(g0);if(H0.has(X0))H0.delete(X0);else H0.add(X0);return H0}),A(null),O(null),J(!1)}else F_.current?.(X0,F0.node),L0.current?.(X0);return}if((f.key==="Delete"||f.key==="Backspace")&&i>=0){let F0=n[i];if(!F0||F0.node.type==="dir")return;f.preventDefault(),t1(F0.node.path);return}if(f.key==="Escape")f.preventDefault(),d_()},[d_,t1,Q,N1,r$,F]),E$=P((f)=>{let m=vW(f,c0.current);if(!m)return;W_.current={path:m.dragPath,dragging:!1,startX:m.startX,startY:m.startY}},[]),R_=P(()=>{let f=W_.current;if(f?.dragging&&f.path){let m=V_.current||Y_(),n=d.current;if(typeof n==="function")n(f.path,m)}W_.current={path:null,dragging:!1,startX:0,startY:0},C0.current=0,S(!1),c(null),T_(null),b_(),s_()},[Y_,s_,T_,b_]),w4=P((f)=>{let m=W_.current,n=f?.touches?.[0];if(!n||!m?.path)return;let i=Math.abs(n.clientX-m.startX),F0=Math.abs(n.clientY-m.startY),X0=i>8||F0>8;if(!m.dragging&&X0)m.dragging=!0,S(!0),c("move"),D1(m.path);if(m.dragging){f.preventDefault(),F1(n.clientX,n.clientY);let y0=document.elementFromPoint(n.clientX,n.clientY),g0=u_(y0)||Y_();if(V_.current!==g0)T_(g0);r_(g0)}},[u_,Y_,D1,F1,T_,r_]),Z1=u((f)=>{f.preventDefault();let m=b0.current;if(!m)return;let n=f.clientY,i=x0.current||280,F0=f.currentTarget;F0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let X0=n,y0=(H0)=>{X0=H0.clientY;let l0=m.clientHeight-80,n_=Math.min(Math.max(i-(H0.clientY-n),80),l0);m.style.setProperty("--preview-height",`${n_}px`),x0.current=n_},g0=()=>{let H0=m.clientHeight-80,l0=Math.min(Math.max(i-(X0-n),80),H0);x0.current=l0,F0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("previewHeight",String(Math.round(l0))),document.removeEventListener("mousemove",y0),document.removeEventListener("mouseup",g0)};document.addEventListener("mousemove",y0),document.addEventListener("mouseup",g0)}).current,C8=u((f)=>{f.preventDefault();let m=b0.current;if(!m)return;let n=f.touches[0];if(!n)return;let i=n.clientY,F0=x0.current||280,X0=f.currentTarget;X0.classList.add("dragging"),document.body.style.userSelect="none";let y0=(H0)=>{let l0=H0.touches[0];if(!l0)return;H0.preventDefault();let n_=m.clientHeight-80,o_=Math.min(Math.max(F0-(l0.clientY-i),80),n_);m.style.setProperty("--preview-height",`${o_}px`),x0.current=o_},g0=()=>{X0.classList.remove("dragging"),document.body.style.userSelect="",L_("previewHeight",String(Math.round(x0.current||F0))),document.removeEventListener("touchmove",y0),document.removeEventListener("touchend",g0),document.removeEventListener("touchcancel",g0)};document.addEventListener("touchmove",y0,{passive:!1}),document.addEventListener("touchend",g0),document.addEventListener("touchcancel",g0)}).current,W6=P((f=F)=>{if(!f)return;JK(U2(f))},[F]),D$=async()=>{if(!F||k_)return;await t1(F)},e1=(f)=>{return Array.from(f?.dataTransfer?.types||[]).includes("Files")},z$=P((f)=>{if(!e1(f))return;if(f.preventDefault(),C0.current+=1,!q_.current)S(!0);c("upload");let m=j1(f)||Y_();T_(m),r_(m)},[Y_,j1,T_,r_]),O$=P((f)=>{if(!e1(f))return;if(f.preventDefault(),f.dataTransfer)f.dataTransfer.dropEffect="copy";if(!q_.current)S(!0);if(G_.current!=="upload")c("upload");let m=j1(f)||Y_();if(V_.current!==m)T_(m);r_(m)},[Y_,j1,T_,r_]),T4=P((f)=>{if(!e1(f))return;if(f.preventDefault(),C0.current=Math.max(0,C0.current-1),C0.current===0)S(!1),c(null),T_(null),b_()},[T_,b_]),J1=P(async(f,m=".")=>{let n=Array.from(f||[]);if(n.length===0)return;let i=m&&m!==""?m:".",F0=i!=="."?i:"workspace root";O_(),K0(!0),E0({current:0,total:n.length,name:"",percent:0,done:!1,error:null});try{let X0=null;for(let y0=0;y0<n.length;y0++){let g0=n[y0],H0=g0?.name||`file ${y0+1}`;E0((n_)=>({...n_,current:y0+1,name:H0,percent:0}));let l0=(n_)=>E0((o_)=>({...o_,percent:n_.percent}));try{X0=await B2(g0,i,{onProgress:l0})}catch(n_){let o_=n_?.status,a_=n_?.code;if(o_===409||a_==="file_exists"){if(!window.confirm(`"${H0}" already exists in ${F0}. Overwrite?`))continue;X0=await B2(g0,i,{overwrite:!0,onProgress:l0})}else throw n_}}if(X0?.path)n0.current=X0.path,N(X0.path),L0.current?.(X0.path);A0.current?.(i),p_(),E0((y0)=>({...y0,done:!0})),O_(),B_.current=window.setTimeout(()=>{B_.current=0,E0(null)},1500)}catch(X0){D(X0.message||"Failed to upload file"),E0((y0)=>y0?{...y0,error:X0.message||"Upload failed"}:null),O_(),B_.current=window.setTimeout(()=>{B_.current=0,E0(null)},4000)}finally{K0(!1)}},[O_]),_$=P(async(f,m)=>{if(!f)return;let n=a0.current?.get(f);if(!n)return;let i=m&&m!==""?m:".",F0=f.includes("/")?f.split("/").slice(0,-1).join("/")||".":".";if(i===F0)return;try{let y0=(await K7(f,i))?.path||f;if(n.type==="dir")V((g0)=>{let H0=new Set;for(let l0 of g0)if(l0===f)H0.add(y0);else if(l0.startsWith(`${f}/`))H0.add(`${y0}${l0.slice(f.length)}`);else H0.add(l0);return H0});if(N(y0),n.type==="dir")A(null),J(!1),O(null);else L0.current?.(y0);A0.current?.(F0),A0.current?.(i),p_()}catch(X0){D(X0?.message||"Failed to move entry")}},[]);d.current=_$;let $$=P(async(f)=>{if(!e1(f))return;f.preventDefault(),C0.current=0,S(!1),c(null),t(null),b_();let m=Array.from(f?.dataTransfer?.files||[]);if(m.length===0)return;let n=V_.current||j1(f)||Y_();await J1(m,n)},[Y_,j1,J1]),J6=P((f)=>{if(f?.stopPropagation?.(),s)return;let m=f?.currentTarget?.dataset?.uploadTarget||".";E_.current=m,__.current?.click()},[s]),x1=P(()=>{if(s)return;let f=z0.current,m=f?a0.current?.get(f):null;E_.current=m?.type==="dir"?m.path:".",__.current?.click()},[s]),A6=P(()=>{P_(()=>w1(null))},[P_,w1]),W5=P(()=>{P_(()=>x1())},[P_,x1]),J5=P(()=>{P_(()=>T1())},[P_,T1]),A5=P(()=>{P_(()=>y4())},[P_,y4]),P8=P(()=>{if(!F||!U$)return;P_(()=>D_.current?.(F,k))},[P_,F,U$,k]),k6=P(()=>{if(!F||!G1)return;P_(()=>D_.current?.(F,k))},[P_,F,G1,k]),M6=P(()=>{if(!F||F===".")return;P_(()=>Y1(F))},[P_,F,Y1]),R8=P(()=>{if(!F||k_)return;P_(()=>D$())},[P_,F,k_,D$]),y6=P(()=>{if(!F||k_)return;P_(()=>W6())},[P_,F,k_,W6]),f8=P(()=>{if(!H$)return;K1(),JK(H$)},[K1,H$]),o$=P(()=>{K1(),Z?.()},[K1,Z]),I1=P(()=>{K1(),X?.()},[K1,X]),k5=P(()=>{K1(),Y?.()},[K1,Y]),w6=P((f)=>{if(!f||f.button!==0)return;let m=f.currentTarget;if(!m||!m.dataset)return;let n=m.dataset.path;if(!n||n===".")return;if(c0.current===n)return;let i=g1(f);if(i?.closest?.("button, a, input, .workspace-caret"))return;if(!W1(i))return;f.preventDefault(),$0.current={path:n,dragging:!1,startX:f.clientX,startY:f.clientY};let F0=(y0)=>{let g0=$0.current;if(!g0?.path)return;let H0=Math.abs(y0.clientX-g0.startX),l0=Math.abs(y0.clientY-g0.startY),n_=H0>4||l0>4;if(!g0.dragging&&n_)g0.dragging=!0,k0.current=!0,S(!0),c("move"),D1(g0.path),F1(y0.clientX,y0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(g0.dragging){y0.preventDefault(),F1(y0.clientX,y0.clientY);let o_=document.elementFromPoint(y0.clientX,y0.clientY),a_=u_(o_)||Y_();if(V_.current!==a_)T_(a_);r_(a_)}},X0=()=>{document.removeEventListener("mousemove",F0),document.removeEventListener("mouseup",X0);let y0=$0.current;if(y0?.dragging&&y0.path){let g0=V_.current||Y_(),H0=d.current;if(typeof H0==="function")H0(y0.path,g0)}$0.current={path:null,dragging:!1,startX:0,startY:0},C0.current=0,S(!1),c(null),T_(null),b_(),s_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",F0),document.addEventListener("mouseup",X0)},[u_,Y_,D1,F1,s_,T_,r_,b_]),M5=P(async(f)=>{let m=Array.from(f?.target?.files||[]);if(m.length===0)return;let n=E_.current||".";if(await J1(m,n),E_.current=".",f?.target)f.target.value=""},[J1]);return B`
        <aside
            class=${`workspace-sidebar${R?" workspace-drop-active":""}`}
            data-workspace-scale=${r0}
            ref=${b0}
            onDragEnter=${z$}
            onDragOver=${O$}
            onDragLeave=${T4}
            onDrop=${$$}
        >
            <input type="file" multiple style="display:none" ref=${__} onChange=${M5} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${D0}
                            class=${`workspace-menu-button${I0?" active":""}`}
                            onClick=${(f)=>{f.stopPropagation(),i0((m)=>!m)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${I0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${I0&&B`
                            <div class="workspace-menu-dropdown" ref=${Y0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${A6} disabled=${s}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${W5} disabled=${s}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${J5}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>P_(()=>z5())} disabled=${M0}>
                                    ${M0?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${y?" active":""}`} role="menuitem" onClick=${A5}>
                                    ${y?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(Z||X||Y)&&B`<div class="workspace-menu-separator"></div>`}
                                ${Z&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${o$}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${X&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I1}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Y&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k5}>
                                        ${q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${F&&B`<div class="workspace-menu-separator"></div>`}
                                ${U$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P8}>Open in tab</button>
                                `}
                                ${F&&!k_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k6} disabled=${!G1}>Open in editor</button>
                                `}
                                ${U5&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M6}>Rename selected</button>
                                `}
                                ${E5&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${y6}>Download selected file</button>
                                `}
                                ${H$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${f8}>Download selected folder (zip)</button>
                                `}
                                ${H5&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${R8}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{i0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${w1} title="New file" disabled=${s}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${T1} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${D5&&B`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${h$}`} title=${k4}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${A4}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${O5}>
                ${Z0&&B`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${Z0.error?B`<span class="workspace-upload-strip-error">${Z0.error}</span>`:Z0.done?B`<span>Done</span>`:B`<span>${Z0.total>1?`Uploading ${Z0.current}/${Z0.total}: ${Z0.name}`:`Uploading ${Z0.name}`}${Z0.percent>0?` (${Z0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!Z0.done&&!Z0.error&&B`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${Z0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${w&&B`<div class="workspace-loading">Loading…</div>`}
                ${M&&B`<div class="workspace-error">${M}</div>`}
                ${K&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${N_}
                        tabIndex="0"
                        onClick=${n$}
                        onDblClick=${p$}
                        onKeyDown=${d$}
                        onTouchStart=${E$}
                        onTouchEnd=${R_}
                        onTouchMove=${w4}
                        onTouchCancel=${R_}
                    >
                        ${N1.map(({node:f,depth:m})=>{let n=f.type==="dir",i=f.path===F,F0=f.path===U,X0=n&&Q.has(f.path),y0=b&&f.path===b,g0=Array.isArray(f.children)&&f.children.length>0?f.children.length:Number(f.child_count)||0;return B`
                                <div
                                    key=${f.path}
                                    class=${`workspace-row${i?" selected":""}${y0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+m*J4.indentPx}px`}}
                                    data-path=${f.path}
                                    data-type=${f.type}
                                    onMouseDown=${w6}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${n?X0?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${n?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${n?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${F0?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${A_}
                                                value=${E}
                                                onInput=${(H0)=>H(H0?.target?.value||"")}
                                                onKeyDown=${(H0)=>{if(H0.stopPropagation(),H0.key==="Enter")H0.preventDefault(),O1();else if(H0.key==="Escape")H0.preventDefault(),z1()}}
                                                onBlur=${z1}
                                                onClick=${(H0)=>H0.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${f.name}</span></span>`}
                                    ${n&&!X0&&g0>0&&B`
                                        <span class="workspace-count">${g0}</span>
                                    `}
                                    ${n&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${f.path}
                                            title="Upload files to this folder"
                                            onClick=${J6}
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
            ${F&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${Z1} onTouchStart=${C8}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${F}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${w1} title="New file" disabled=${s}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!k_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>G1&&D_.current?.(F,k)}
                                    title=${a1}
                                    disabled=${!G1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${D$}
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
                            ${k_?B`
                                    <button class="workspace-download" onClick=${x1}
                                        title="Upload files to this folder" disabled=${s}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${H2(F,y)} download
                                        title="Download folder as zip" onClick=${(f)=>f.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<a class="workspace-download" href=${U2(F)} download
                                        title="Download" onClick=${(f)=>f.stopPropagation()}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </a>`}
                        </div>
                    </div>
                    ${W&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${k?.error&&B`<div class="workspace-error">${k.error}</div>`}
                    ${k_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${B0?.disabled&&B`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${B0?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${B0?.error&&B`<div class="workspace-error">${B0.error}</div>`}
                        ${B0?.payload&&B0.payload.segments?.length>0&&B`
                            <${SW} payload=${B0.payload} />
                        `}
                        ${B0?.payload&&(!B0.payload.segments||B0.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${k&&!k.error&&!k_&&B`
                        <div class="workspace-preview-body" ref=${a}></div>
                    `}
                </div>
            `}
            ${h&&B`
                <div class="workspace-drag-ghost" ref=${U_}>${h.label}</div>
            `}
        </aside>
    `}w0();var mW=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function Z8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function fK(_,$,j){let G=Z8(_,$,j);return G!=null&&mW.has(G)}function SK(_,$,j){return Z8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function gK(_,$,j){return Z8(_,$,j)==="editor"}var cW=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,lW=/\.(csv|tsv)$/i,hW=/\.pdf$/i,pW=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function nW(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=Uq(j,{hasPopOutTab:$});if(G)return G;if(cW.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(lW.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(hW.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(pW.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function uK({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:q,onToggleDiff:K,onEditSource:L,previewTabs:Q,diffTabs:V,paneOverrides:F,detachedTabs:N,onReattachTab:U,onToggleDock:z,dockVisible:E,onToggleZen:H,zenMode:k,onPopOutTab:A}){let[O,w]=C(null),x=u(null);g(()=>{if(!O)return;let b=(t)=>{if(t.type==="keydown"&&t.key!=="Escape")return;w(null)};return document.addEventListener("click",b),document.addEventListener("keydown",b),()=>{document.removeEventListener("click",b),document.removeEventListener("keydown",b)}},[O]),g(()=>{let b=(t)=>{if(t.ctrlKey&&t.key==="Tab"){if(t.preventDefault(),!_.length)return;let s=_.findIndex((K0)=>K0.id===$);if(t.shiftKey){let K0=_[(s-1+_.length)%_.length];j?.(K0.id)}else{let K0=_[(s+1)%_.length];j?.(K0.id)}return}if((t.ctrlKey||t.metaKey)&&t.key==="w"){let s=document.querySelector(".editor-pane");if(s&&s.contains(document.activeElement)){if(t.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[_,$,j,G]);let W=P((b,t)=>{if(b.button===0){j?.(t);return}if(b.button===1)b.preventDefault(),G?.(t)},[j,G]),J=P((b,t)=>{if(b.defaultPrevented)return;if(b.button===0)j?.(t)},[j]),M=P((b,t)=>{b.preventDefault(),w({id:t,x:b.clientX,y:b.clientY})},[]),D=P((b)=>{b.stopPropagation()},[]),y=P((b,t)=>{b.preventDefault(),b.stopPropagation(),G?.(t)},[G]);g(()=>{if(!$||!x.current)return;let b=x.current.querySelector(".tab-item.active");if(b)b.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let I=P((b)=>{if(!(F instanceof Map))return null;return F.get(b)||null},[F]),R=q0(()=>_.find((b)=>b.id===O?.id)||null,[O?.id,_]),S=q0(()=>{let b=O?.id;if(!b)return!1;return fK(b,I(b),(t)=>X_.resolve(t))},[O?.id,I]),v=q0(()=>{let b=O?.id;if(!b)return"Edit Source";return SK(b,I(b),(t)=>X_.resolve(t))},[O?.id,I]),c=q0(()=>{let b=O?.id;if(!b||!(N instanceof Map))return!1;return N.has(b)},[O?.id,N]),h=q0(()=>{let b=O?.id;if(!b||!(V instanceof Set))return!1;return V.has(b)},[O?.id,V]),_0=q0(()=>{let b=O?.id;if(!b)return!1;let t=_.find((K0)=>K0.id===b)||null;if(!t)return!1;return gK(b,I(b),(K0)=>X_.resolve(K0))&&Boolean(t.dirty||h)},[O?.id,h,I,_]);if(!_.length)return null;return B`
        <div class="tab-strip" ref=${x} role="tablist">
            ${_.map((b)=>B`
                <div
                    key=${b.id}
                    class=${`tab-item${b.id===$?" active":""}${b.dirty?" dirty":""}${b.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${b.id===$}
                    title=${b.path}
                    onMouseDown=${(t)=>W(t,b.id)}
                    onClick=${(t)=>J(t,b.id)}
                    onContextMenu=${(t)=>M(t,b.id)}
                >
                    ${b.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${b.label}</span>
                    ${N instanceof Map&&N.has(b.id)&&B`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${D}
                        onMouseDown=${D}
                        onClick=${(t)=>y(t,b.id)}
                        title=${b.dirty?"Unsaved changes":"Close"}
                        aria-label=${b.dirty?"Unsaved changes":`Close ${b.label}`}
                    >
                        ${b.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${z&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${E?" active":""}`}
                    onClick=${z}
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
            ${H&&B`
                <button
                    class=${`tab-strip-zen-toggle${k?" active":""}`}
                    onClick=${H}
                    title=${`${k?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${k?"Exit":"Enter"} zen mode`}
                    aria-pressed=${k?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${k?B`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:B`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&B`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{G?.(O.id),w(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),w(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),w(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(O.id),w(null)}}>
                    ${R?.pinned?"Unpin":"Pin"}
                </button>
                ${S&&L&&B`
                    <button onClick=${()=>{L(O.id),w(null)}}>${v}</button>
                `}
                ${c&&U&&B`
                    <button onClick=${()=>{U(O.id),w(null)}}>Reattach</button>
                `}
                ${A&&!c&&B`
                    <button onClick=${()=>{let b=_.find((t)=>t.id===O.id);A(O.id,b?.label),w(null)}}>Open in Window</button>
                `}
                ${_0&&K&&B`
                    <hr />
                    <button onClick=${()=>{j?.(O.id),K(O.id),w(null)}}>${h?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${q&&/\.(md|mdx|markdown)$/i.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{q(O.id),w(null)}}>
                        ${Q?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let b=nW(O.id,{hasPopOutTab:typeof A==="function"});if(!b)return null;return B`
                        <hr />
                        <button onClick=${()=>{window.open(b,"_blank","noopener"),w(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}w0();f_();M2();function Y8(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function C9(_,$=30){return Y8(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function X8(_,$=56,j=16,G={}){let Z=Y8(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let q=(j/2).toFixed(2);return`M 0 ${q} L ${$} ${q}`}if(Z.length===1){let q=(Z[0]-X)/(Y-X),K=(j-q*j).toFixed(2);return`M 0 ${K} L ${$} ${K}`}return Z.map((q,K)=>{let L=K/(Z.length-1||1)*$,Q=(q-X)/(Y-X),V=j-Q*j;return`${K===0?"M":"L"} ${L.toFixed(2)} ${V.toFixed(2)}`}).join(" ")}function G5(_){return`${Math.round(Number(_)||0)}%`}function rW(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function dW(_){let $=[`CPU ${G5(_?.cpu_percent)}`,`RAM ${G5(_?.ram_percent)}`];if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${G5(_?.swap_percent)}`);return $.join(" • ")}function bK(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function oW(_){return bK(_)>0&&Y8(_?.process_rss_series_bytes).length>0}function iW(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function vK({mode:_="overlay"}){let[$,j]=C(()=>$6(!1)),[G,Z]=C(()=>M7(!1)),[X,Y]=C(()=>iW()),[q,K]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[L,Q]=C(!1);g(()=>{let W=(M)=>{j(Boolean(M?.detail?.enabled))},J=(M)=>{Z(Boolean(M?.detail?.collapsed))};return window.addEventListener(N4,W),window.addEventListener(A2,J),()=>{window.removeEventListener(N4,W),window.removeEventListener(A2,J)}},[]),g(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let W=window.matchMedia("(max-width: 900px)"),J=()=>Y(Boolean(W.matches));if(J(),typeof W.addEventListener==="function")return W.addEventListener("change",J),()=>W.removeEventListener("change",J);return W.addListener(J),()=>W.removeListener(J)},[]);let F=_==="overlay";g(()=>{if(!$||!F)return;let W=!1,J=0,M=async()=>{Q((D)=>D||q.cpu_series.length>0?D:!0);try{let D=await h3();if(W)return;K({cpu_percent:Number(D?.cpu_percent)||0,ram_percent:Number(D?.ram_percent)||0,swap_percent:Number.isFinite(Number(D?.swap_percent))?Number(D?.swap_percent):null,cpu_series:C9(D?.cpu_series),ram_series:C9(D?.ram_series),swap_series:C9(D?.swap_series),process_rss_series_bytes:Y8(D?.process_rss_series_bytes),process_memory:{rss_bytes:Number(D?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(D?.process_memory?.vm_rss_bytes))?Number(D?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(D?.swap_total_bytes)||0,swap_used_bytes:Number(D?.swap_used_bytes)||0,sample_interval_ms:Number(D?.sample_interval_ms)||2000,platform:String(D?.platform||"")})}catch{if(W)return}finally{if(!W)Q(!1)}};return M(),J=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;M()},Math.max(1000,Number(q.sample_interval_ms)||2000)),()=>{if(W=!0,J)window.clearInterval(J)}},[$,F]);let N=q0(()=>X8(q.cpu_series,56,16,{min:0,max:100}),[q.cpu_series]),U=q0(()=>X8(q.ram_series,56,16,{min:0,max:100}),[q.ram_series]),z=q0(()=>X8(q.swap_series,56,16,{min:0,max:100}),[q.swap_series]),E=q0(()=>X8(q.process_rss_series_bytes),[q.process_rss_series_bytes]),H=Number.isFinite(Number(q.swap_percent))&&q.swap_total_bytes>0,k=bK(q),A=oW(q),O=q0(()=>dW(q),[q]);if(!$||!F)return null;let w=G?"Show system meters":L?"Updating system meters… Click to collapse.":"System meters — click to collapse.",x=(W)=>{W?.stopPropagation?.(),EX()};return B`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${w}
                aria-label=${w}
                aria-expanded=${G?"false":"true"}
                onClick=${x}
            >
                ${G?B`<span class="system-meters-collapse-tab" aria-hidden="true">◂</span>`:X?B`<span class="system-meters-compact-summary">${O}</span>`:B`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${N}></path>
                                </svg>
                                <span class="system-meters-value">${G5(q.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${G5(q.ram_percent)}</span>
                            </div>
                            ${A&&B`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${rW(k)}</span>
                                </div>
                            `}
                            ${H&&B`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${z}></path>
                                    </svg>
                                    <span class="system-meters-value">${G5(q.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function sW(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function aW(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function tW(_){let{id:$,scrollToBottom:j,getElementById:G=(L)=>document.getElementById(L),scheduleRaf:Z=(L)=>requestAnimationFrame(L),scheduleTimeout:X=(L,Q)=>{setTimeout(L,Q)},maxAttempts:Y=12}=_,q=(L)=>{L.scrollIntoView({behavior:"smooth",block:"center"}),L.classList.add("post-highlight"),X(()=>L.classList.remove("post-highlight"),2000)},K=(L)=>{let Q=G(`post-${$}`);if(Q){q(Q);return}if(L<=0){j?.();return}Z(()=>{X(()=>K(L-1),40)})};K(Y)}function eW(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(K)=>tW({id:K,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let q=aW($);if(q){Z(q);return}G()}function mK(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:q,handleRenameCurrentBranch:K,renameBranchNameDraft:L,renameBranchNameInputRef:Q,setRenameBranchNameDraft:V,renameBranchDraftState:F,isRenamingBranch:N,addFileRef:U,openEditor:z,openTerminalTab:E,openVncTab:H,hasDockPanes:k,toggleDock:A,dockVisible:O,handleSplitterMouseDown:w,handleSplitterTouchStart:x,showEditorPaneContainer:W,tabStripTabs:J,tabStripActiveId:M,handleTabActivate:D,handleTabClose:y,handleTabCloseOthers:I,handleTabCloseAll:R,handleTabTogglePin:S,handleTabTogglePreview:v,handleTabToggleDiff:c,handleTabEditSource:h,handleReattachPane:_0,previewTabs:b,diffTabs:t,tabPaneOverrides:s,toggleZenMode:K0,handlePopOutPane:Z0,isWebAppMode:E0,editorContainerRef:B0,editorInstanceRef:V0,detachedTabs:Q0,activeDetachedTab:U0,detachedDockPane:M0,handleDockSplitterMouseDown:r,handleDockSplitterTouchStart:G0,TERMINAL_TAB_PATH:O0,dockContainerRef:u0,handleEditorSplitterMouseDown:R0,handleEditorSplitterTouchStart:r0,searchQuery:j_,isIOSDevice:I0,currentBranchRecord:i0,currentChatJid:T0,currentChatBranches:s0,handleBranchPickerChange:f0,formatBranchPickerLabel:t0,openRenameCurrentBranchForm:K_,handlePruneCurrentBranch:H_,handlePurgeArchivedBranch:h0,currentHashtag:S0,handleBackToTimeline:P0,activeSearchScopeLabel:a0,oobePanelState:F_,composePrefillRequest:D_,requestComposePrefill:L0,handleOobeSetupProvider:A0,handleOobeShowModelPicker:b0,handleOobeOpenWorkspace:N_,handleDismissProviderMissingOobe:A_,handleCompleteProviderReadyOobe:__,posts:E_,isMainTimelineView:B_,hasMore:W_,loadMore:$0,timelineRef:W0,handleHashtagClick:k0,addMessageRef:x0,scrollToMessage:m0,openFileFromPill:e,openTimelineFileFromPill:p,handleDeletePost:a,handleOpenFloatingWidget:j0,agents:Y0,userProfile:D0,removingPostIds:v0,agentStatus:d0,isCompactionStatus:J0,agentDraft:C0,agentPlan:V_,agentThought:q_,pendingRequest:G_,intentToast:U_,currentTurnId:M_,steerQueued:Z_,handlePanelToggle:d,btwSession:z0,closeBtwPanel:c0,handleBtwRetry:n0,handleBtwInject:C_,floatingWidget:O_,handleCloseFloatingWidget:h_,handleFloatingWidgetEvent:o1,attachmentPreview:p_,setAttachmentPreview:i1,extensionStatusPanels:Q1,pendingExtensionPanelActions:Y_,handleExtensionPanelAction:u_,searchOpen:j1,followupQueueItems:T_,handleInjectQueuedFollowup:b_,handleRemoveQueuedFollowup:r_,handleMoveQueuedFollowup:F1,viewStateRef:D1,loadPosts:s_,scrollToBottom:v_,searchScope:z1,handleSearch:Y1,handleSearchScopeChange:O1,setSearchScope:s1,enterSearchMode:w1,exitSearchMode:S1,fileRefs:q1,removeFileRef:B5,clearFileRefs:N1,setFileRefsFromCompose:W4,messageRefs:J4,removeMessageRef:O6,clearMessageRefs:k_,setMessageRefsFromCompose:G1,handleCreateSessionFromCompose:a1,handleRestoreBranch:U$,attachActiveEditorFile:U5,followupQueueCount:H5,handleBtwIntercept:E5,handleMessageResponse:H$,handleComposeSubmitError:A4,isComposeBoxAgentActive:k4,activeChatAgents:h$,connectionStatus:D5,activeModel:K1,agentModelsPayload:P_,activeModelUsage:z5,activeThinkingLevel:g1,supportsThinking:W1,contextUsage:M4,extensionWorkingState:p$,notificationsEnabled:n$,notificationPermission:T1,handleToggleNotifications:d_,setActiveModel:y4,applyModelState:O5,setPendingRequest:t1,pendingRequestRef:r$,toggleWorkspace:d$}=_,E$=()=>{if(I0())return;v_()};return B`
    <div class=${sW({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${vK} mode="overlay" />
      ${Y&&B`
        <div class="rename-branch-overlay" onPointerDown=${(R_)=>{if(R_.target===R_.currentTarget)q()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(R_)=>{R_.preventDefault(),K(L)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${Q}
              value=${L}
              onInput=${(R_)=>{let w4=R_.currentTarget?.value??"";V(String(w4))}}
              onKeyDown=${(R_)=>{if(R_.key==="Escape")R_.preventDefault(),q()}}
              autocomplete="off"
              placeholder="Handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${F.kind||"info"}`}>
              ${F.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${N||!F.canSubmit}>
                ${N?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${q}
                disabled=${N}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&B`
        <${RK}
          onFileSelect=${U}
          visible=${j}
          active=${j||G}
          onOpenEditor=${z}
          onOpenTerminalTab=${E}
          onOpenVncTab=${H}
          onToggleTerminal=${k?A:void 0}
          terminalVisible=${Boolean(k&&O)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${d$}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${w} onTouchStart=${x}></div>
      `}
      ${W&&B`
        <div class="editor-pane-container">
          ${X&&B`<div class="zen-hover-zone"></div>`}
          ${G&&B`
            <${uK}
              tabs=${J}
              activeId=${M}
              onActivate=${D}
              onClose=${y}
              onCloseOthers=${I}
              onCloseAll=${R}
              onTogglePin=${S}
              onTogglePreview=${v}
              onToggleDiff=${c}
              onEditSource=${h}
              previewTabs=${b}
              diffTabs=${t}
              paneOverrides=${s}
              detachedTabs=${Q0}
              onReattachTab=${_0}
              onToggleDock=${k?A:void 0}
              dockVisible=${k&&O}
              onToggleZen=${K0}
              zenMode=${X}
              onPopOutTab=${E0?void 0:Z0}
            />
          `}
          ${G&&U0&&B`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${U0.label||U0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>_0(U0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!U0&&B`<div class="editor-pane-host" ref=${B0}></div>`}
          ${G&&!U0&&M&&b.has(M)&&B`
            <${S2}
              getContent=${()=>V0.current?.getContent?.()}
              path=${M}
              onClose=${()=>v(M)}
            />
          `}
          ${k&&O&&B`<div class="dock-splitter" onMouseDown=${r} onTouchStart=${G0}></div>`}
          ${k&&B`<div class=${`dock-panel${O?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!E0&&!M0&&B`
                  <button class="dock-panel-action" onClick=${()=>Z0(O0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${M0&&B`
                  <button class="dock-panel-action" onClick=${()=>_0(O0)} title="Reattach terminal" aria-label="Reattach terminal">
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
            ${M0?B`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>_0(O0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:B`<div class="dock-panel-body" ref=${u0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${R0} onTouchStart=${r0}></div>
      `}
      <${xq}
        workspaceOpen=${j}
        toggleWorkspace=${d$}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${E}
        onOpenVncTab=${H}
        onToggleTerminal=${k?A:void 0}
        terminalVisible=${Boolean(k&&O)}
      />
      <${Tq}
        activeChatAgents=${h$}
        currentChatJid=${T0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(k&&O)}
        onSwitchChat=${f0}
        onToggleWorkspace=${d$}
        onOpenTerminalTab=${E}
        onOpenVncTab=${H}
        onToggleTerminalDock=${k?A:void 0}
        onPrefillCompose=${L0}
      />
      <div class="container">
        ${j_&&I0()&&B`<div class="search-results-spacer"></div>`}
        ${(S0||j_)&&B`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${P0}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${S0?`#${S0}`:`Search: ${j_} · ${a0}`}</span>
          </div>
        `}
        ${F_?.kind&&F_.kind!=="hidden"&&B`
          <${pY}
            kind=${F_.kind}
            onSetupProvider=${A0}
            onShowModelPicker=${b0}
            onOpenWorkspace=${N_}
            onDismiss=${F_.kind==="provider-missing"?A_:__}
          />
        `}
        <${BK}
          posts=${E_}
          hasMore=${B_?W_:!1}
          onLoadMore=${B_?$0:void 0}
          timelineRef=${W0}
          onHashtagClick=${k0}
          onMessageRef=${x0}
          onScrollToMessage=${m0}
          onFileRef=${p||e}
          onPostClick=${void 0}
          onDeletePost=${a}
          onOpenWidget=${j0}
          onOpenAttachmentPreview=${i1}
          emptyMessage=${S0?`No posts with #${S0}`:j_?`No results for "${j_}"`:void 0}
          agents=${Y0}
          user=${D0}
          reverse=${B_}
          removingPostIds=${v0}
          searchQuery=${j_}
        />
        <${Q9}
          status=${J0(d0)?null:d0}
          draft=${C0}
          plan=${V_}
          thought=${q_}
          pendingRequest=${G_}
          intent=${U_}
          turnId=${M_}
          steerQueued=${Z_}
          onPanelToggle=${d}
          showExtensionPanels=${!1}
        />
        <${sY}
          session=${z0}
          onClose=${c0}
          onRetry=${n0}
          onInject=${C_}
        />
        <${Qq}
          widget=${O_}
          onClose=${h_}
          onWidgetEvent=${o1}
        />
        ${p_&&B`
          <${Mq}
            mediaId=${p_.mediaId}
            info=${p_.info}
            onClose=${()=>i1(null)}
          />
        `}
        <${kY} />
        <${Q9}
          extensionPanels=${Array.from(Q1.values())}
          pendingPanelActions=${Y_}
          onExtensionPanelAction=${u_}
          turnId=${M_}
          steerQueued=${Z_}
          onPanelToggle=${d}
          showCorePanels=${!1}
        />
        <${G9}
          items=${j1?[]:T_}
          onInjectQueuedFollowup=${b_}
          onRemoveQueuedFollowup=${r_}
          onMoveQueuedFollowup=${F1}
          onOpenFilePill=${e}
        />
        <${hY}
          onPost=${(R_)=>{eW({response:R_,viewStateRef:D1,scrollToBottom:v_})}}
          onFocus=${E$}
          searchMode=${j1}
          searchScope=${z1}
          onSearch=${Y1}
          onSearchScopeChange=${O1||s1}
          onEnterSearch=${w1}
          onExitSearch=${S1}
          fileRefs=${q1}
          onRemoveFileRef=${B5}
          onClearFileRefs=${N1}
          onSetFileRefs=${W4}
          messageRefs=${J4}
          onRemoveMessageRef=${O6}
          onClearMessageRefs=${k_}
          onSetMessageRefs=${G1}
          onSwitchChat=${f0}
          onRenameSession=${K}
          isRenameSessionInProgress=${N}
          onCreateSession=${a1}
          onDeleteSession=${H_}
          onPurgeArchivedSession=${h0}
          onRestoreSession=${U$}
          activeEditorPath=${Z?null:M}
          onAttachEditorFile=${Z?void 0:U5}
          onOpenFilePill=${e}
          followupQueueCount=${H5}
          followupQueueItems=${T_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${b_}
          onRemoveQueuedFollowup=${r_}
          onMoveQueuedFollowup=${F1}
          onSubmitIntercept=${E5}
          onMessageResponse=${H$}
          onSubmitError=${A4}
          isAgentActive=${k4}
          activeChatAgents=${h$}
          currentChatJid=${T0}
          connectionStatus=${D5}
          activeModel=${K1}
          agentModelsPayload=${P_}
          modelUsage=${z5}
          thinkingLevel=${g1}
          supportsThinking=${W1}
          contextUsage=${M4}
          notificationsEnabled=${n$}
          notificationPermission=${T1}
          onToggleNotifications=${d_}
          onModelChange=${y4}
          onModelStateChange=${O5}
          statusNotice=${J0(d0)?d0:null}
          extensionWorkingState=${p$}
          prefillRequest=${D_}
        />
        <${vq}
          request=${G_}
          onRespond=${()=>{t1(null),r$.current=null}}
        />
      </div>
    </div>
  `}function cK(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,q=wY({branchLoaderMode:$,panePopoutMode:j}),K=Y?.renderBranchLoaderMode||TY,L=Y?.renderPanePopoutMode||xY,Q=Y?.renderMainShell||mK;if(q==="branch-loader")return K(G);if(q==="pane-popout")return L(Z);return Q(X)}var K8="piclaw_btw_session",hK=900,lK="__piclawRenameBranchFormLock__";function _J(){try{return import.meta.url}catch{return null}}function P9(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function $J(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function q8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function pK(_={}){let $=_.importMetaUrl===void 0?_J():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=$J($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((L)=>String(L?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let K=new URL(Y,G).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function nK(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[lK];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[lK]=G,G}function rK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function dK(_={}){let $=typeof _.readItem==="function"?_.readItem:H1,j=_.storageKey||K8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",q=typeof Z.thinking==="string"?Z.thinking:"",K=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,L=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:q,error:L==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:L}}catch{return null}}function oK(_,$={}){let j=$.defaultChatJid||"web:default",G=q8(_,"chat_jid",j),Z=P9(_?.get?.("chat_only")||_?.get?.("chat-only")),X=P9(_?.get?.("pane_popout")),Y=q8(_,"pane_path"),q=q8(_,"pane_label"),K=P9(_?.get?.("branch_loader")),L=q8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:L}}function iK(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function sK(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function R9(_,$,j){return _||$?.label||j||"Pane"}function aK(_,$,j){return`${R9(_,$,j)} · PiClaw`}function tK(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function eK(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function _L(_,$,j,G){return _===$&&!j||G}function $L(_,$,j,G,Z){return _||!$&&(j||G&&Z)}f_();function jJ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function $1(_,$,j){let G=_?.[$];return typeof G==="function"?G:jJ($,j)}var jL=!1,GL=!1,ZL=!1;function GJ(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function ZJ(_=typeof window<"u"?window:null){if(!_||GL)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),GL=!0}function XJ(){X_.register(t8),X_.register(F7),X_.register(Q7),X_.register(N7),X_.register(B7),X_.register(U7),X_.register(E7),X_.register(D7),X_.register(z7),X_.register(W7),X_.register(I3),e8(),X_.register(Z3),X_.register(X3)}function YJ(_=typeof window<"u"?window:null){if(!_||ZL)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;ZL=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function XL(){if(jL)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(GJ($),ZJ(_),K9(_),_)try{let j=await Promise.resolve().then(() => (w0(),vj));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}XJ(),await zq(_),YJ(_),jL=!0}function qJ(_=o5){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:$1(_,"getAgentContext",null),getAutoresearchStatus:$1(_,"getAutoresearchStatus",null),stopAutoresearch:$1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:$1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:$1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:$1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:$1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:$1(_,"getChatBranches",{chats:[]}),renameChatBranch:$1(_,"renameChatBranch",null),pruneChatBranch:$1(_,"pruneChatBranch",null),restoreChatBranch:$1(_,"restoreChatBranch",null),getAgentQueueState:$1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:$1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:$1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:$1(_,"streamSidePrompt",null)}}var YL=qJ(o5);function qL(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:q,shellState:K,agentState:L,composeState:Q,modelState:V}=_,F={appShellRef:K.appShellRef,editorOpen:K.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:K.tabStripTabs,tabStripActiveId:K.tabStripActiveId,handleTabActivate:K.handleTabActivate,previewTabs:K.previewTabs,diffTabs:K.diffTabs,handleTabTogglePreview:K.handleTabTogglePreview,handleTabToggleDiff:K.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:K.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},N={appShellRef:K.appShellRef,workspaceOpen:K.workspaceOpen,editorOpen:K.editorOpen,chatOnlyMode:K.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:K.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:K.renameBranchNameDraft,renameBranchNameInputRef:K.renameBranchNameInputRef,setRenameBranchNameDraft:K.setRenameBranchNameDraft,renameBranchDraftState:K.renameBranchDraftState,isRenamingBranch:K.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:K.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:K.TERMINAL_TAB_PATH,isIOSDevice:K.isIOSDevice,currentBranchRecord:K.currentBranchRecord,currentChatJid:K.currentChatJid,currentChatBranches:K.currentChatBranches,formatBranchPickerLabel:K.formatBranchPickerLabel,activeSearchScopeLabel:K.activeSearchScopeLabel,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,oobePanelState:K.oobePanelState,composePrefillRequest:K.composePrefillRequest,requestComposePrefill:K.requestComposePrefill,handleOobeSetupProvider:K.handleOobeSetupProvider,handleOobeShowModelPicker:K.handleOobeShowModelPicker,handleOobeOpenWorkspace:K.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:K.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:K.handleCompleteProviderReadyOobe,posts:K.posts,hasMore:K.hasMore,loadMore:K.loadMore,timelineRef:K.timelineRef,agents:K.agents,userProfile:K.userProfile,removingPostIds:K.removingPostIds,extensionStatusPanels:K.extensionStatusPanels,pendingExtensionPanelActions:K.pendingExtensionPanelActions,searchOpen:K.searchOpen,followupQueueItems:K.followupQueueItems,viewStateRef:K.viewStateRef,loadPosts:K.loadPosts,scrollToBottom:K.scrollToBottom,searchScope:K.searchScope,tabStripTabs:K.tabStripTabs,tabStripActiveId:K.tabStripActiveId,handleTabActivate:K.handleTabActivate,previewTabs:K.previewTabs,diffTabs:K.diffTabs,handleTabTogglePreview:K.handleTabTogglePreview,handleTabToggleDiff:K.handleTabToggleDiff,panePopoutPath:K.panePopoutPath,tabPaneOverrides:K.tabPaneOverrides,handleTabClose:K.handleTabClose,handleTabCloseOthers:K.handleTabCloseOthers,handleTabCloseAll:K.handleTabCloseAll,handleTabTogglePin:K.handleTabTogglePin,handleTabEditSource:K.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:K.openEditor,openTerminalTab:K.openTerminalTab,openVncTab:K.openVncTab,fileRefs:Q.fileRefs,messageRefs:Q.messageRefs,followupQueueCount:Q.followupQueueCount,attachmentPreview:Q.attachmentPreview,setAttachmentPreview:Q.setAttachmentPreview,extensionWorkingState:Q.extensionWorkingState,activeChatAgents:V.activeChatAgents,connectionStatus:V.connectionStatus,activeModel:V.activeModel,activeModelUsage:V.activeModelUsage,activeThinkingLevel:V.activeThinkingLevel,supportsThinking:V.supportsThinking,contextUsage:V.contextUsage,notificationsEnabled:V.notificationsEnabled,notificationPermission:V.notificationPermission,handleToggleNotifications:V.handleToggleNotifications,setActiveModel:V.setActiveModel,applyModelState:V.applyModelState,setPendingRequest:L.setPendingRequest,pendingRequestRef:L.pendingRequestRef,...G,...Z,...X,...Y,...q,...L,...Q,...V};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:F,mainShellOptions:N}}function KJ(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function KL(_){let $=KJ({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return qL({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}w0();var VL="(min-width: 1024px) and (orientation: landscape)";function f9(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function LL(_,$){let j=f9(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function LJ(_,$,j){let G=f9(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function V6(_=typeof window<"u"?window:null){let $=f9(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function QL(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function FL(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||V6($),Y=QL(X),q=LL($,Y);if(typeof q==="boolean")return q;if(G&&X==="desktop"){let K=LL($,"workspaceOpen");if(typeof K==="boolean")return K}return Z}function NL(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||V6(j);LJ(j,QL(Z),Boolean(_))}g5();var VJ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function BL(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(C1({window:j,navigator:G}))};Z();let Y=VJ.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",Z),()=>q.removeEventListener("change",Z);if(typeof q.addListener==="function")return q.addListener(Z),()=>q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let q of Y)q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function L8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function UL(_={}){return C1(_)&&o6(_)}function QJ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let G=Number($?.innerHeight||0);if(Number.isFinite(G)&&G>0)return Math.round(G);return null}function FJ(_={},$={}){if(!UL(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=QJ({window:j});if(Z&&Z>0)G.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(X){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",X)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(X){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",X)}}return Z}function HL(_={}){if(!UL(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},Y=()=>{G=0,FJ({window:$,document:j})},q=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},K=()=>{q();for(let V of[80,220,420]){let F=$.setTimeout?.(()=>{Z.delete(F),q()},V);if(F!=null)Z.add(F)}},L=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},Q=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",L),j.addEventListener("focusin",K,!0),Q?.addEventListener?.("resize",K),Q?.addEventListener?.("scroll",K),()=>{X(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",L),j.removeEventListener("focusin",K,!0),Q?.removeEventListener?.("resize",K),Q?.removeEventListener?.("scroll",K)}}var S9="resume-layout-settling",NJ=220,Z5=new WeakMap;function BJ(_){if(!_){L_(K8,"");return}L_(K8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function UJ(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function HJ(_,$={}){if(!_)return()=>{};let{durationMs:j=NJ,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=Z5.get(_);if(X)Z(X);_.classList.add(S9);let Y=G(()=>{if(Z5.get(_)===Y)_.classList.remove(S9),Z5.delete(_)},j);return Z5.set(_,Y),()=>{let q=Z5.get(_);if(q)Z(q),Z5.delete(_);_.classList.remove(S9)}}function EJ(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function EL(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:q,agents:K,agentsRef:L,currentChatJid:Q,activeChatJidRef:V,userProfile:F,userProfileRef:N,brandingRef:U,panePopoutMode:z=!1}=_;LX(30000),g(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),g(()=>LZ(),[]),g(()=>BL(Z),[Z]),g(()=>{let k=()=>{},A=L8(()=>{k(),k=HJ(G.current)});return()=>{A(),k()}},[G]);let E=u(V6());return g(()=>{NL(X,{bucket:E.current})},[X]),g(()=>{if(typeof window>"u"||!window.matchMedia)return;let k=window.matchMedia(VL),A=()=>{let O=V6(window);if(E.current===O)return;let w=E.current;if(E.current=O,w==="desktop"&&O==="narrow")Y(!1)};if(k.addEventListener)k.addEventListener("change",A);else if(k.addListener)k.addListener(A);return()=>{if(k.removeEventListener)k.removeEventListener("change",A);else if(k.removeListener)k.removeListener(A)}},[Y]),g(()=>HL(),[]),g(()=>{BJ(q)},[q]),g(()=>{L.current=K||{}},[K,L]),g(()=>{V.current=Q},[V,Q]),g(()=>{N.current=F||{name:"You",avatar_url:null,avatar_background:null}},[F,N]),{applyBranding:P((k,A,O=null)=>{if(typeof document>"u")return;let w=(k||"").trim()||"PiClaw";if(U.current.title!==w){if(UJ({panePopoutMode:z,search:typeof window<"u"?window.location.search:""})){document.title=w;let W=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(W&&W.getAttribute("content")!==w)W.setAttribute("content",w)}U.current.title=w}let x=A?`${A}|${O||""}`:"";if(U.current.avatarBase!==x){U.current.avatarBase=x;let W=O||Date.now();EJ(document,W)}},[U])}}w0();function DL(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function g9(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function u9(_,$){let j=Array.isArray(_)?_:[],G=g9($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function b9(_,$){let j=Array.isArray(_)?_:[],G=g9($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function v9(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=g9(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function zL(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function OL(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function m9(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:q,setCurrentHashtag:K,setPosts:L,setHasMore:Q}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let F=j==="root"||j==="all"?j:"current";Y(F),q(V),K(null),L(null);try{let N=await X(V,50,0,G,F,Z,_.filters);L(Array.isArray(N?.results)?N.results:[]),Q(!1)}catch(N){console.error("Failed to search:",N),L([])}}async function WL(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:q,hasMoreRef:K,loadMoreRef:L,confirm:Q=(H)=>window.confirm(H),showAlert:V=(H)=>alert(H),scheduleTimeout:F=(H,k)=>{setTimeout(H,k)}}=_;if(!$)return;let N=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,z=j?.filter((H)=>H?.data?.thread_id===N&&H?.id!==N).length||0;if(z>0){if(!Q(`Delete this message and its ${z} replies?`))return}let E=(H)=>{if(!H.length)return;q((k)=>{let A=new Set(k);return H.forEach((O)=>A.add(O)),A}),F(()=>{if(X(()=>{Y((k)=>k?k.filter((A)=>!H.includes(A.id)):k)}),q((k)=>{let A=new Set(k);return H.forEach((O)=>A.delete(O)),A}),K.current)L.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let H=await Z(N,z>0,U);if(H?.ids?.length)E(H.ids)}catch(H){let k=H instanceof Error?H.message:String(H||"");if(z===0&&k.includes("Replies exist")){if(!Q("Delete this message and its replies?"))return;let O=await Z(N,!0,U);if(O?.ids?.length)E(O.ids);return}console.error("Failed to delete post:",H),V(`Failed to delete message: ${k}`)}}async function JL(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(V)=>document.getElementById(V),scheduleRaf:q=(V)=>requestAnimationFrame(V),scheduleTimeout:K=(V,F)=>{setTimeout(V,F)}}=_,L=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),K(()=>V.classList.remove("post-highlight"),2000)},Q=Y(`post-${$}`);if(Q){L(Q);return}try{let V=typeof j==="string"&&j.trim()?j.trim():G,N=(await Z($,V))?.thread?.[0];if(!N)return;X((U)=>{if(!U)return[N];if(U.some((z)=>z.id===N.id))return U;return[...U,N]}),q(()=>{K(()=>{let U=Y(`post-${$}`);if(U)L(U)},50)})}catch(V){console.error("[scrollToMessage] Failed to fetch message",$,V)}}function DJ(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function zJ(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:q,setSearchQuery:K,setSearchOpen:L,setMessageRefs:Q,navigate:V,chatOnlyMode:F,baseHref:N=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let z=typeof j==="string"&&j.trim()?j.trim():G,E=z!==G,H=Boolean(Y||X||Z);if(!E&&!H)return Q((k)=>u9(k,U)),!0;if(Q([U]),q?.(null),K?.(null),L?.(!1),E&&typeof V==="function"){let k=k1(N,z,{chatOnly:F});V(k)}return!0}function AL(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:q,setMessageRefs:K,currentChatJid:L,currentHashtag:Q,searchQuery:V,searchOpen:F,setCurrentHashtag:N,setSearchQuery:U,setSearchOpen:z,navigate:E,chatOnlyMode:H,baseHref:k,getThread:A,setPosts:O}=_,w=P(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);g(()=>{return()=>{w()}},[w]);let x=P((s)=>{q((K0)=>u9(K0,s))},[q]),W=P((s)=>{q((K0)=>b9(K0,s))},[q]),J=P(()=>{q([])},[q]),M=P((s)=>{q(v9(s))},[q]),D=P((s,K0=null,Z0="info",E0=3000)=>{w(),$({title:s,detail:K0||null,kind:Z0||"info"}),j.current=setTimeout(()=>{$((B0)=>B0?.title===s?null:B0)},E0)},[w,j,$]),y=P((s,{autoOpenEditor:K0=!1}={})=>{let Z0=DL(s,{editorOpen:G,autoOpenEditor:K0,resolvePane:X});if(Z0.kind==="open"){Z(Z0.path);return}if(Z0.kind==="toast")D(Z0.title,Z0.detail,Z0.level)},[G,Z,X,D]),I=P((s)=>{y(s,{autoOpenEditor:!1})},[y]),R=P((s)=>{y(s,{autoOpenEditor:!0})},[y]),S=P(()=>{let s=Y;if(s)x(s)},[x,Y]),v=P((s,K0=null)=>{zJ({id:s,targetChatJid:K0,currentChatJid:L,currentHashtag:Q,searchQuery:V,searchOpen:F,setCurrentHashtag:N,setSearchQuery:U,setSearchOpen:z,setMessageRefs:K,navigate:E,chatOnlyMode:H,baseHref:k})},[k,H,L,Q,E,F,V,N,K,z,U]),c=P(async(s,K0=null)=>{await JL({id:s,targetChatJid:K0,currentChatJid:L,getThread:A,setPosts:O})},[L,A,O]),h=P((s)=>{K((K0)=>b9(K0,s))},[K]),_0=P(()=>{K([])},[K]),b=P((s)=>{K(v9(s))},[K]),t=P((s)=>{D("Compose failed",DJ(s),"error",5000)},[D]);return{clearIntentToast:w,addFileRef:x,removeFileRef:W,clearFileRefs:J,setFileRefsFromCompose:M,showIntentToast:D,openFileFromPill:I,openTimelineFileFromPill:R,attachActiveEditorFile:S,addMessageRef:v,scrollToMessage:c,removeMessageRef:h,clearMessageRefs:_0,setMessageRefsFromCompose:b,handleComposeSubmitError:t}}w0();async function kL(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:q,thoughtBufferRef:K,draftBufferRef:L,setAgentThought:Q,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let F=G.current;if($==="thought"){if(Z.current=j,F)try{await Y(F,"thought",j)}catch(N){console.warn("Failed to update thought visibility:",N)}if(!j)return;try{let N=F?await q(F,"thought"):null;if(N?.text)K.current=N.text;Q((U)=>({...U||{text:"",totalLines:0},fullText:K.current||U?.fullText||"",totalLines:Number.isFinite(N?.total_lines)?N.total_lines:U?.totalLines||0}))}catch(N){console.warn("Failed to fetch full thought:",N)}return}if(X.current=j,F)try{await Y(F,"draft",j)}catch(N){console.warn("Failed to update draft visibility:",N)}if(!j)return;try{let N=F?await q(F,"draft"):null;if(N?.text)L.current=N.text;V((U)=>({...U||{text:"",totalLines:0},fullText:L.current||U?.fullText||"",totalLines:Number.isFinite(N?.total_lines)?N.total_lines:U?.totalLines||0}))}catch(N){console.warn("Failed to fetch full draft:",N)}}function OJ(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function WJ(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function ML(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:q,setAgentStatus:K,draftBufferRef:L,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,currentTurnIdRef:N,steerQueuedTurnIdRef:U,agentStatusRef:z,silentRecoveryRef:E,thoughtExpandedRef:H,draftExpandedRef:k,setCurrentTurnId:A,setSteerQueuedTurnId:O,currentTurnIdRefForPanel:w,setAgentThoughtVisibility:x,getAgentThought:W,setAgentThought:J,setAgentDraft:M}=_,D=P((c={})=>{let h=Number(c.atMs),_0=Number.isFinite(h)&&h>0?h:Date.now();if(Z.current=_0,c.running)Y.current=!0,q((b)=>b?b:!0);if(c.clearSilence)X.current=0},[Y,Z,X,q]),y=P(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);g(()=>()=>{y()},[y]);let I=P(()=>{y(),K((c)=>OJ(c))},[y,K]),R=P((c)=>{if(!c)return;y();let h=Date.now();G.current=h,K(WJ(c)),j.current=setTimeout(()=>{if(G.current!==h)return;K((_0)=>{if(!_0||!(_0.last_activity||_0.lastActivity))return _0;return null})},$)},[y,j,G,$,K]),S=P(()=>{Y.current=!1,q(!1),Z.current=null,X.current=0,L.current="",Q.current="",V.current=null,F.current=null,N.current=null,U.current=null,z.current=null,E.current={inFlight:!1,lastAttemptAt:0,turnId:null},y(),A(null),O(null),H.current=!1,k.current=!1},[z,y,N,L,k,Y,Z,F,X,V,A,q,O,E,U,Q,H]),v=P(async(c,h)=>{await kL({panelKey:c,expanded:h,currentTurnIdRef:w,thoughtExpandedRef:H,draftExpandedRef:k,setAgentThoughtVisibility:x,getAgentThought:W,thoughtBufferRef:Q,draftBufferRef:L,setAgentThought:J,setAgentDraft:M})},[w,L,k,W,M,J,x,Q,H]);return{noteAgentActivity:D,clearLastActivityTimer:y,clearLastActivityFlag:I,showLastActivity:R,clearAgentRunState:S,handlePanelToggle:v}}w0();function V8(_){return _?{..._}:{text:"",totalLines:0}}function yL(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function JJ(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function AJ(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function wL(_){return{agentStatus:_.agentStatus,agentDraft:V8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:V8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:yL(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:JJ(_.silentRecovery)}}function TL(_){let $=_.snapshot||AJ(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(V8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(V8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(yL($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function c9(_){return String(_||"").trim()||"web:default"}function xL({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function kJ(_){return xL(_)}function MJ(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function IL(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:q,agentPlan:K,agentThought:L,pendingRequest:Q,pendingRequestRef:V,followupQueueItems:F,activeModel:N,activeThinkingLevel:U,supportsThinking:z,activeModelUsage:E,contextUsage:H,isAgentRunningRef:k,wasAgentActiveRef:A,draftBufferRef:O,thoughtBufferRef:w,lastAgentEventRef:x,lastSilenceNoticeRef:W,lastAgentResponseRef:J,currentTurnIdRef:M,thoughtExpandedRef:D,draftExpandedRef:y,agentStatusRef:I,silentRecoveryRef:R,clearLastActivityTimer:S,setIsAgentTurnActive:v,setAgentStatus:c,setAgentDraft:h,setAgentPlan:_0,setAgentThought:b,setPendingRequest:t,setCurrentTurnId:s,setFollowupQueueItems:K0,setActiveModel:Z0,setActiveThinkingLevel:E0,setSupportsThinking:B0,setActiveModelUsage:V0,setContextUsage:Q0,lastNotifiedIdRef:U0,agentsRef:M0,notify:r,shouldNotifyLocallyForChat:G0}=_,O0=P((I0)=>{if(!kJ({remainingQueueCount:I0,steerQueuedTurnId:Z.current,currentTurnId:M.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,M,X,Z]),u0=P(()=>wL({agentStatus:Y,agentDraft:q,agentPlan:K,agentThought:L,pendingRequest:Q,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:F,activeModel:N,activeThinkingLevel:U,supportsThinking:z,activeModelUsage:E,contextUsage:H,isAgentRunning:k.current,wasAgentActive:A.current,draftBuffer:O.current,thoughtBuffer:w.current,lastAgentEvent:x.current,lastSilenceNotice:W.current,lastAgentResponse:J.current,currentTurnIdRef:M.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:D.current,draftExpanded:y.current,agentStatusRef:I.current,silentRecovery:R.current}),[N,E,U,q,K,Y,L,H,G,F,$,Q,j,z,k,A,O,w,x,W,J,M,Z,D,y,I,R]),R0=P((I0)=>{TL({snapshot:I0,clearLastActivityTimer:S,refs:{isAgentRunningRef:k,wasAgentActiveRef:A,lastAgentEventRef:x,lastSilenceNoticeRef:W,draftBufferRef:O,thoughtBufferRef:w,pendingRequestRef:V,lastAgentResponseRef:J,currentTurnIdRef:M,steerQueuedTurnIdRef:Z,agentStatusRef:I,silentRecoveryRef:R,thoughtExpandedRef:D,draftExpandedRef:y},setters:{setIsAgentTurnActive:v,setAgentStatus:c,setAgentDraft:h,setAgentPlan:_0,setAgentThought:b,setPendingRequest:t,setCurrentTurnId:s,setSteerQueuedTurnId:X,setFollowupQueueItems:K0,setActiveModel:Z0,setActiveThinkingLevel:E0,setSupportsThinking:B0,setActiveModelUsage:V0,setContextUsage:Q0}})},[I,S,M,O,y,k,x,J,W,V,Z0,V0,E0,h,_0,c,b,Q0,s,K0,v,t,X,B0,R,Z,w,D,A]),r0=P((I0)=>{if(!I0)return;if(M.current===I0)return;M.current=I0,R.current={inFlight:!1,lastAttemptAt:0,turnId:I0},s(I0),Z.current=null,X(null),O.current="",w.current="",h({text:"",totalLines:0}),_0(""),b({text:"",totalLines:0}),t(null),V.current=null,J.current=null,D.current=!1,y.current=!1},[M,O,y,J,V,h,_0,b,s,t,X,R,Z,w,D]),j_=P((I0)=>{let i0=J.current;if(!i0||!i0.post)return;if(I0&&i0.turnId&&i0.turnId!==I0)return;let T0=i0.post,s0=typeof T0?.chat_jid==="string"&&T0.chat_jid.trim()?T0.chat_jid.trim():"";if(!s0||!G0(s0))return;if(T0.id&&U0.current===T0.id)return;let f0=MJ(T0);if(!f0)return;U0.current=T0.id||U0.current,J.current=null;let t0=M0.current||{},H_=(T0?.data?.agent_id?t0[T0.data.agent_id]:null)?.name||"Pi";r(H_,f0,{sourceLabel:"Local"})},[M0,J,U0,r,G0]);return{clearQueuedSteerStateIfStale:O0,snapshotCurrentChatPaneState:u0,restoreChatPaneState:R0,setActiveTurn:r0,notifyForFinalResponse:j_}}w0();function Q8(_){return _?.turn_id||_?.turnId||null}function X5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function l9(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function h9(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function F8(_,$){return{text:_,totalLines:h9(_,$)}}function p9(_,$){return{text:$?.text||"",totalLines:VX(_),fullText:_}}function CL(_,$,j){return j==="replace"?$:`${_||""}${$}`}function PL(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function RL(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function n1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function fL(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function n9(_,$){return _&&$}function SL(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function gL(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function uL(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function bL(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:q,agentStatusRef:K,pendingRequestRef:L,thoughtBufferRef:Q,draftBufferRef:V,setAgentStatus:F,setAgentDraft:N,setAgentPlan:U,setAgentThought:z,setPendingRequest:E,setActiveTurn:H,noteAgentActivity:k,clearLastActivityFlag:A}=_,O=$;try{let w=await j(O);if(G.current!==O)return null;if(!w||w.status!=="active"||!w.data){if(Z.current&&n1(X.current))Y();return Z.current=!1,q(),K.current=null,F(null),N({text:"",totalLines:0}),U(""),z({text:"",totalLines:0}),E(null),L.current=null,w??null}Z.current=!0;let x=w.data;K.current=x;let W=Q8(x);if(W)H(W);k({running:!0,clearSilence:!0,atMs:I$(x)??Date.now()}),A(),F(x);let J=X5(w.thought);if(J)z((D)=>{if(l9(D,J.text))return D;return Q.current=J.text,J});let M=X5(w.draft);if(M)N((D)=>{if(l9(D,M.text))return D;return V.current=M.text,M});return w}catch(w){return console.warn("Failed to fetch agent status:",w),null}}async function vL(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:q,refreshQueueState:K,refreshAgentStatus:L,now:Q=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=G.current||null,F=Z.current,N=Q();if(F.inFlight)return null;if(F.turnId===V&&N-F.lastAttemptAt<X)return null;F.inFlight=!0,F.lastAttemptAt=N,F.turnId=V;try{if(n1(Y.current))await q();return await K(),await L()}finally{F.inFlight=!1}}function yJ(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function mL(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:q,silenceRefreshMs:K,isCompactionStatus:L,setAgentStatus:Q,reconcileSilentTurn:V,now:F=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let N=G.current;if(!N)return;let U=F(),z=U-N,E=X.current,H=L(E),k=yJ(E);if(z>=q){if(!H&&!k)Q({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(z>=Y&&U-Z.current>=K){if(!H&&!k){let A=Math.floor(z/1000);Q({type:"waiting",title:`Waiting for model… No events for ${A}s`})}Z.current=U,V()}}function wJ(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function cL(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:q,thoughtBufferRef:K,pendingRequestRef:L,lastAgentResponseRef:Q,agentStatusRef:V,stalledPostIdRef:F,scrollToBottomRef:N,setCurrentTurnId:U,setAgentDraft:z,setAgentPlan:E,setAgentThought:H,setPendingRequest:k,setAgentStatus:A,setPosts:O,dedupePosts:w,now:x=()=>Date.now(),nowIso:W=()=>new Date().toISOString()}=_;if(!$.current)return;let J=wJ(V.current);$.current=!1,j.current=0,G.current=null,V.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let M=(q.current||"").trim();if(q.current="",K.current="",E(""),H({text:"",totalLines:0}),k(null),L.current=null,Q.current=null,!M){z({text:"",totalLines:0}),A({type:"error",title:"Response stalled - No content received"});return}z({text:M,totalLines:h9(M,null),fullText:M});let D=M,y=x(),I=W(),R={id:y,timestamp:I,data:{type:"agent_response",content:D,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:J?.summary||"",tool_title:J?.title||"",tool_name:J?.toolName||"",tool_status:J?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};F.current=y,O((S)=>S?w([...S,R]):[R]),N.current?.(),A(null)}function TJ(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function xJ(_){cL(_)}function lL(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;g(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function hL(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:K,draftBufferRef:L,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,agentStatusRef:N,scrollToBottomRef:U,setCurrentTurnId:z,setAgentDraft:E,setAgentPlan:H,setAgentThought:k,setPendingRequest:A,setAgentStatus:O,dedupePosts:w}=_,x=P(()=>{TJ({stalledPostIdRef:$,setPosts:j})},[j,$]),W=P(()=>{xJ({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:K,draftBufferRef:L,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,agentStatusRef:N,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:z,setAgentDraft:E,setAgentPlan:H,setAgentThought:k,setPendingRequest:A,setAgentStatus:O,setPosts:j,dedupePosts:w})},[Y,w,L,K,G,X,F,N,Z,V,U,E,H,O,k,z,A,j,$,Q,q]);return{removeStalledPost:x,finalizeStalledResponse:W}}function IJ(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function CJ(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function pL(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:q}=_,{applyBranding:K}=EL($),L=AL(j);IJ({removeFileRefRef:q,composeReferenceActions:L});let Q=ML(G),V=IL({...Z,clearLastActivityTimer:Q.clearLastActivityTimer}),F=hL(X);return lL(Y),CJ({applyBranding:K,composeReferenceActions:L,agentActivity:Q,chatPaneRuntime:V,recoveryCallbacks:F})}w0();w0();f_();var N8=new Map,r9=new Map;function nL(){return Date.now()}function Q6(_){return String(_||"").trim()}function rL(_,$=600000){return Boolean(_&&nL()-_.cachedAt<=$)}function PJ(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function dL(_,$){return N8.delete(_),N8.set(_,$),PJ(N8),$}function B8(_,$){let j=Q6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:nL()};return dL(j,G)}function d9(_,$={}){let j=Q6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=N8.get(j)||null;if(!rL(Z,G))return null;return dL(j,Z)}function oL(_,$,j=5){if(!Array.isArray(_))return[];let G=Q6($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let q of _){let K=Q6(q?.chat_jid);if(!K||K===G||X.has(K))continue;if(X.add(K),Y.push(K),Y.length>=Z)break}return Y}async function iL(_){let $=Array.from(new Set((_.chatJids||[]).map((q)=>Q6(q)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((q)=>!rL(d9(q,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let q=Z[X++],K=r9.get(q);if(K){await K;continue}let L=(async()=>{try{let Q=await _.fetchTimeline(q);B8(q,Q)}catch(Q){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",Q,{chatJid:q})}finally{r9.delete(q)}})();r9.set(q,L),await L}});await Promise.all(Y)}function sL(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let q=Y?.id;if(typeof q==="number"&&Number.isFinite(q)&&q<Z)Z=q}if(!Number.isFinite(Z))return i4([...G,...j]);let X=j.filter((Y)=>{let q=Y?.id;return typeof q==="number"&&Number.isFinite(q)&&q<Z});return i4([...G,...X])}function aL({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[q,K]=C(!1),L=u(!1),Q=u(null),V=u(!1),F=u(null),N=u(null),U=u(0),z=u(0);g(()=>{L.current=q},[q]),g(()=>{N.current=X},[X]);let E=!G&&!Z,H=u(E);g(()=>{H.current=E},[E]),g(()=>{U.current+=1,Y(null),N.current=null,F.current=null,V.current=!1,L.current=!1,K(!1),z.current=0},[j]);let k=P((J,M)=>{if(!E)return;B8(j,{posts:Array.isArray(J)?J:[],has_more:Boolean(M)})},[j,E]),A=P((J,M)=>{N.current=Array.isArray(J)?J:[],L.current=Boolean(M),Y(N.current),K(L.current),k(N.current,L.current)},[k]),O=P(async(J=null)=>{let M=U.current;try{if(J){let R=await l3(J,50,0,j);if(M!==U.current)return;Y(R.posts),K(!1);return}let D=(R)=>{if(M!==U.current)return;let S=Array.isArray(R?.posts)?R.posts:[],v=Boolean(R?.has_more);A(S,v)},y=d9(j);if(y){A(y.posts,y.has_more);let R=z.current;T$(10,null,j).then((S)=>{if(M!==U.current||z.current!==R)return;if(!H.current)return;let v=Array.isArray(S?.posts)?S.posts:[],c=Boolean(S?.has_more);A(sL(N.current,v),c)}).catch((S)=>{if(M!==U.current)return;console.error("Failed to refresh cached timeline:",S)});return}let I=await T$(10,null,j);D(I)}catch(D){if(M!==U.current)return;throw console.error("Failed to load posts:",D),D}},[j,A]),w=P(async()=>{let J=U.current;try{let M=await T$(10,null,j);if(J!==U.current)return;A(sL(N.current,M?.posts),Boolean(M?.has_more))}catch(M){if(J!==U.current)return;console.error("Failed to refresh timeline:",M)}},[j,A]),x=P(async(J={})=>{let M=U.current,D=N.current;if(!D||D.length===0)return;if(V.current)return;let{preserveScroll:y=!0,preserveMode:I="top",allowRepeat:R=!1}=J,S=(h)=>{if(!y){h();return}if(I==="top")$(h);else _(h)},c=D.slice().sort((h,_0)=>h.id-_0.id)[0]?.id;if(!Number.isFinite(c))return;if(!R&&F.current===c)return;V.current=!0,F.current=c;try{let h=await T$(10,c,j);if(M!==U.current)return;if(z.current+=1,h.posts.length>0)S(()=>{let _0=i4([...h.posts,...N.current||[]]);A(_0,h.has_more)});else A(N.current||[],!1)}catch(h){if(M!==U.current)return;console.error("Failed to load more posts:",h)}finally{if(M===U.current)V.current=!1}},[j,_,$,A]);g(()=>{Q.current=x},[x]);let W=P((J)=>{Y((M)=>{let D=typeof J==="function"?J(M):J;if(N.current=D,Array.isArray(D)){if(z.current+=1,E)B8(j,{posts:D,has_more:L.current})}return D})},[j,E]);return{posts:X,setPosts:W,hasMore:q,setHasMore:K,hasMoreRef:L,loadPosts:O,refreshTimeline:w,loadMore:x,loadMoreRef:Q,loadingMoreRef:V,lastBeforeIdRef:F}}w0();function RJ(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function tL(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!RJ(Z));return G.length===_.length?_:G}function eL(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function _V(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function v$(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function $V(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function jV(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function fJ(_,$=150){return Math.abs(_)<=$}function GV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=P(()=>{let K=$.current;if(!K)return;if(fJ(K.scrollTop))K.scrollTop=0},[$]),X=P((K)=>{let L=$.current;if(!L||typeof K!=="function"){K?.();return}let{currentHashtag:Q,searchQuery:V,searchOpen:F}=j.current||{},N=!((V||F)&&!Q),U=N?L.scrollHeight-L.scrollTop:L.scrollTop;K(),requestAnimationFrame(()=>{let z=$.current;if(!z)return;if(N){let E=Math.max(z.scrollHeight-U,0);z.scrollTop=E}else{let E=Math.max(z.scrollHeight-z.clientHeight,0),H=Math.min(U,E);z.scrollTop=H}})},[$,j]),Y=P((K)=>{let L=$.current;if(!L||typeof K!=="function"){K?.();return}let Q=L.scrollTop;K(),requestAnimationFrame(()=>{let V=$.current;if(!V)return;let F=Math.max(V.scrollHeight-V.clientHeight,0);V.scrollTop=Math.min(Q,F)})},[$]),q=P((K)=>{return tL(K,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:q}}function SJ(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function gJ(_){_.scrollToBottomRef.current=_.scrollToBottom}function ZV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:q}=_,K=u(null),{scrollToBottom:L,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,filterQueuedPosts:F}=GV({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});gJ({scrollToBottomRef:K,scrollToBottom:L});let{posts:N,setPosts:U,hasMore:z,setHasMore:E,hasMoreRef:H,loadPosts:k,refreshTimeline:A,loadMore:O,loadMoreRef:w}=aL({preserveTimelineScroll:Q,preserveTimelineScrollTop:V,chatJid:Z,currentHashtag:X,searchQuery:Y}),x=q0(()=>SJ({rawPosts:N,followupQueueItems:q,filterQueuedPosts:F}),[F,q,N]);return{scrollToBottomRef:K,scrollToBottom:L,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,rawPosts:N,setPosts:U,hasMore:z,setHasMore:E,hasMoreRef:H,loadPosts:k,refreshTimeline:A,loadMore:O,loadMoreRef:w,posts:x}}w0();function uJ(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function XV(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:q,loadPosts:K,searchPosts:L,setCurrentHashtag:Q,setSearchQuery:V,setSearchOpen:F,setSearchScope:N,setPosts:U,setHasMore:z,preserveTimelineScrollTop:E,setRemovingPostIds:H,deletePost:k,hasMoreRef:A,loadMoreRef:O}=_,w=P(async(R)=>{await zL({hashtag:R,setCurrentHashtag:Q,setPosts:U,loadPosts:K})},[K,Q,U]),x=P(async()=>{await OL({setCurrentHashtag:Q,setSearchQuery:V,setPosts:U,loadPosts:K})},[K,Q,U,V]),W=P(async(R,S=Z,v)=>{await m9({query:R,scope:S,currentChatJid:X,currentRootChatJid:Y,searchPosts:L,setSearchScope:N,setSearchQuery:V,setCurrentHashtag:Q,setPosts:U,setHasMore:z,filters:v})},[X,Y,L,Z,Q,z,U,V,N]),J=P((R)=>{if(N(R),j&&j.trim())m9({query:j,scope:R,currentChatJid:X,currentRootChatJid:Y,searchPosts:L,setSearchScope:N,setSearchQuery:V,setCurrentHashtag:Q,setPosts:U,setHasMore:z})},[X,Y,L,j,Q,z,U,V,N]),M=P(()=>{F(!0),V(null),Q(null),N("current"),U([])},[Q,U,F,V,N]),D=P(()=>{F(!1),V(null),K()},[K,F,V]),y=q0(()=>uJ({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),I=P(async(R)=>{await WL({post:R,posts:q,currentChatJid:X,deletePost:k,preserveTimelineScrollTop:E,setPosts:U,setRemovingPostIds:H,hasMoreRef:A,loadMoreRef:O})},[X,k,A,O,q,E,U,H]);return{handleHashtagClick:w,handleBackToTimeline:x,handleSearch:W,handleSearchScopeChange:J,enterSearchMode:M,exitSearchMode:D,isMainTimelineView:y,handleDeletePost:I}}w0();function o9(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function YV(_,$){let j=new Map(_),G=o9($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function qV(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=o9($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function KV(_){if(_?.options?.remove)return!0;return o9(_)?.state!=="running"}function i9(_,$){return`${_}:${$}`}function LV(_,$,j){let G=i9($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function VV(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function U8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function QV(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var FV="piclaw:ctx:";function m$(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function Y5(_,$){let j=m$(_),G=m$($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function q5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{L_(FV+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function NV(_){if(!_)return null;return j2(FV+_)}async function BV(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}=_,K=++j.current,L=$;try{let Q=await X(L);if(K!==j.current)return;if(G.current!==L)return;let V=Z.current,F=Array.isArray(Q?.items)?Q.items:[],N=eL(F,V);if(N.length){Y((U)=>_V(U,N)?U:N);return}if(F.length>0)return;V.clear(),q(0),Y((U)=>U.length===0?U:[])}catch{if(K!==j.current)return;if(G.current!==L)return;Y((Q)=>Q.length===0?Q:[])}}async function UV(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=m$(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((q)=>Y5(q,Y)?q:Y),q5(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function HV(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let q=await G(Y);if(j.current!==Y)return;Z((K)=>YV(K,q)),X((K)=>U8(K,"autoresearch"))}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",q)}}function EV(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function DV(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(n1($.current))j();G()}l5();var H8=new Map,E8=new Map,bJ=250,zV=1500,OV=300000;function K5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function vJ(_,$){return`${_}:${$}`}function mJ(_){for(let[$,j]of E8.entries())if(_-j>OV)E8.delete($)}function cJ(_){for(let[$,j]of H8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>OV)H8.delete($)}}function WV(_=K5()){mJ(_),cJ(_)}function JV(_){let{chatJid:$,nowMs:j=K5()}=_;if(!$)return;E8.set($,j),WV(j)}function F6(_,$=zV,j=K5()){if(!_)return!1;let G=E8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function B$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=bJ,activationWindowMs:X=zV,nowMs:Y=K5()}=_;WV(Y);let q=vJ($,j),K=H8.get(q)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(H8.set(q,K),K.inFlight)return await K.inFlight;if(Boolean(V2("thread-switch",j)||F6(j,X,Y))&&Number.isFinite(K.lastCompletedAt)&&Y-K.lastCompletedAt<=Z)return K.lastValue;let Q=Promise.resolve().then(G).then((V)=>{return K.lastCompletedAt=K5(),K.lastValue=V??null,K.inFlight=null,V}).catch((V)=>{throw K.lastCompletedAt=K5(),K.inFlight=null,V});return K.inFlight=Q,await Q}function AV(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:q,showIntentToast:K}=_,L=typeof $==="string"&&$.trim()?$.trim():null;if(!L||!j||L===j)return!1;if(G.current===L)return!0;G.current=L;let Q=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!Q&&!Y.current&&!q.current&&!Z.current);return K("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function s9(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function kV(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:q,setPendingRequest:K,pendingRequestRef:L,clearAgentRunState:Q,hasConnectedOnceRef:V,viewStateRef:F,refreshTimeline:N,refreshAgentStatus:U,refreshQueueState:z,refreshContextUsage:E}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),L.current=null,Q();return}if(!V.current){if(V.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),L.current=null,Q(),F6($))return;if(s9(F.current))N();U(),z(),E();return}if(s9(F.current))N();U(),z(),E()}function MV(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_,K=s9($.current);if(j){if(K)G();Z(),X(),Y(),q();return}if(K)G();X(),Y(),q()}function lJ(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function yV(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q,getAgentContext:K,setContextUsage:L,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,getAgentStatus:N,wasAgentActiveRef:U,viewStateRef:z,refreshTimeline:E,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:A,thoughtBufferRef:O,draftBufferRef:w,setAgentStatus:x,setAgentDraft:W,setAgentPlan:J,setAgentThought:M,setPendingRequest:D,setActiveTurn:y,noteAgentActivity:I,clearLastActivityFlag:R,isAgentRunningRef:S,currentTurnIdRef:v,silentRecoveryRef:c,silenceRefreshMs:h,lastAgentEventRef:_0,lastSilenceNoticeRef:b,silenceWarningMs:t,silenceFinalizeMs:s,isCompactionStatus:K0,serverVersionContext:Z0,setConnectionStatus:E0,setPendingRequestForConnection:B0,hasConnectedOnceRef:V0}=_,Q0=P(()=>{return B$({kind:"queue-state",chatJid:$,run:async()=>{return await BV({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}),null}})},[j,q,$,Z,X,G,Y]),U0=P(async()=>{await B$({kind:"context-usage",chatJid:$,run:async()=>{return await UV({currentChatJid:$,activeChatJidRef:j,getAgentContext:K,setContextUsage:L}),null}})},[j,$,K,L]),M0=P(async()=>{await B$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await HV({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F}),null}})},[j,$,Q,V,F]),r=P(async()=>{return await B$({kind:"agent-status",chatJid:$,run:async()=>{return await bL({currentChatJid:$,getAgentStatus:N,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:z,refreshTimeline:E,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:A,thoughtBufferRef:O,draftBufferRef:w,setAgentStatus:x,setAgentDraft:W,setAgentPlan:J,setAgentThought:M,setPendingRequest:D,setActiveTurn:y,noteAgentActivity:I,clearLastActivityFlag:R})}})},[j,k,H,R,$,w,N,I,A,E,y,W,J,x,M,D,O,z,U]),G0=P(async()=>{return await vL({isAgentRunningRef:S,pendingRequestRef:A,currentTurnIdRef:v,silentRecoveryRef:c,silenceRefreshMs:h,viewStateRef:z,refreshTimeline:E,refreshQueueState:Q0,refreshAgentStatus:r})},[v,S,A,r,Q0,E,h,c,z]);g(()=>{let R0=lJ(t),r0=setInterval(()=>{mL({isAgentRunningRef:S,pendingRequestRef:A,lastAgentEventRef:_0,lastSilenceNoticeRef:b,agentStatusRef:k,silenceWarningMs:t,silenceFinalizeMs:s,silenceRefreshMs:h,isCompactionStatus:K0,setAgentStatus:x,reconcileSilentTurn:G0})},R0);return()=>clearInterval(r0)},[k,S,K0,_0,b,A,G0,x,s,h,t]);let O0=P((R0)=>{return AV({serverVersion:R0,...Z0})},[Z0]),u0=P((R0)=>{kV({currentChatJid:$,status:R0,setConnectionStatus:E0,setAgentStatus:x,setAgentDraft:W,setAgentPlan:J,setAgentThought:M,setPendingRequest:B0,pendingRequestRef:A,clearAgentRunState:H,hasConnectedOnceRef:V0,viewStateRef:z,refreshTimeline:E,refreshAgentStatus:r,refreshQueueState:Q0,refreshContextUsage:U0})},[H,$,V0,A,r,U0,Q0,E,W,J,x,M,E0,B0,z]);return{refreshQueueState:Q0,refreshContextUsage:U0,refreshAutoresearchStatus:M0,refreshAgentStatus:r,handleUiVersionDrift:O0,handleConnectionStatusChange:u0}}w0();function N6(_){return typeof _==="string"}function B6(_){return typeof _==="string"&&_.trim().length>0}function D8(_){if(!B6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function a9(_){if(!Array.isArray(_))return[];return _.filter(($)=>B6($?.chat_jid)&&B6($?.agent_name))}function wV(_){if(!Array.isArray(_))return[];return _.filter(($)=>N6($?.chat_jid)&&N6($?.agent_name))}function TV(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(N6(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!N6(Y?.chat_jid))return Y;let q=G.get(Y.chat_jid);return q?{...Y,...q,is_active:q.is_active??Y.is_active}:Y}),X=N6(j)?j:"";return Z.sort((Y,q)=>{if(Y.chat_jid===X&&q.chat_jid!==X)return-1;if(q.chat_jid===X&&Y.chat_jid!==X)return 1;let K=Boolean(Y.archived_at),L=Boolean(q.archived_at);if(K!==L)return K?1:-1;if(Boolean(Y.is_active)!==Boolean(q.is_active))return Y.is_active?-1:1;let Q=D8(Y.updated_at)||D8(Y.created_at),V=D8(q.updated_at)||D8(q.created_at);if(Q!==V)return V-Q;let F=B6(Y.agent_name)?Y.agent_name.trim():"",N=B6(q.agent_name)?q.agent_name.trim():"",U=F.localeCompare(N,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(q.chat_jid))}),Z}var hJ={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function xV(_){if(!_||typeof _!=="object")return hJ;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function IV(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function CV(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},q=Y.name||null,K=Y.avatar_url??Y.avatarUrl??Y.avatar??null,L=!1,Q=!1;if(Z&&Z!==Y.name)q=Z,L=!0;if(X!==void 0){let V=typeof X==="string"?X.trim():null,F=typeof K==="string"?K.trim():null,N=V||null;if(N!==(F||null))K=N,Q=!0}if(!L&&!Q)return null;return{agentId:G,nameChanged:L,avatarChanged:Q,resolvedName:q,resolvedAvatar:K}}function PV(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function RV(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,q=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===q)return _;return{name:X,avatar_url:Y,avatar_background:q}}async function SV(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(KX(X));let Y=X?.user||{};G((K)=>PV(K,Y));let q=IV(X?.agents);Z(q.name,q.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function gV(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=CV($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let K={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)K.name=X.resolvedName;if(X.avatarChanged)K.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:K}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function uV(_){let{payload:$,setUserProfile:j}=_;j((G)=>RV(G,$))}function fV(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function bV(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:q}=_;if($&&typeof $==="object")Y?.((L)=>fV(L,$)?L:$),q?.(!0);let K=xV($);if(K.hasModel)j((L)=>Object.is(L,K.model)?L:K.model);if(K.hasThinkingLevel){let L=K.thinkingLevelLabel??K.thinkingLevel;G((Q)=>Object.is(Q,L)?Q:L)}if(K.hasSupportsThinking)Z((L)=>L===K.supportsThinking?L:K.supportsThinking);if(K.hasProviderUsage)X((L)=>fV(L,K.providerUsage)?L:K.providerUsage)}async function vV(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[q,K]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let L=a9(q?.chats),Q=a9(K?.chats),V=TV(L,Q,Y);return X(V),V}catch{if(Z.current!==Y)return[];return X([]),[]}}async function mV(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(wV(Z?.chats))}catch{G([])}}function cV(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),jV($))Y()}function lV(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,q=$("sidebarWidth",null),K=Number.isFinite(q)?Math.min(Math.max(Number(q),Z),X):Y;if(j.current=K,G)G.style.setProperty("--sidebar-width",`${K}px`);return K}async function hV(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:q,setPosts:K,setHasMore:L,scrollToBottom:Q,isCancelled:V,scheduleRaf:F=(O)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(O);return}setTimeout(O,0)},scheduleTimeout:N=(O,w)=>{setTimeout(O,w)},onTimelineLoadStart:U,onTimelineDataReady:z,onTimelineFirstPaint:E,onTimelineError:H}=_,k=(O)=>{if(V())return;F(()=>{if(V())return;F(()=>{if(V())return;E?.(O)})})},A=()=>{if(V())return;F(()=>{if(V())return;N(()=>{if(V())return;Q()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),V())return;z?.({mode:"hashtag",hashtag:$}),k({mode:"hashtag"})}catch(O){if(V())return;throw H?.(O,{mode:"hashtag",hashtag:$}),O}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let O=await q(j,50,0,Z,G,X);if(V())return;K(Array.isArray(O?.results)?O.results:[]),L(!1),z?.({mode:"search",resultCount:Array.isArray(O?.results)?O.results.length:0}),k({mode:"search"})}catch(O){if(V())return;H?.(O,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",O),K([]),L(!1)}return}U?.({mode:"timeline"});try{if(await Y(),V())return;z?.({mode:"timeline"}),k({mode:"timeline"}),A()}catch(O){if(V())return;H?.(O,{mode:"timeline"}),console.error("Failed to load timeline:",O)}}l5();f_();function pJ(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:q=60000,scheduleInterval:K=(V,F)=>setInterval(V,F),clearScheduledInterval:L=(V)=>clearInterval(V)}=_;if(Y)$();let Q=K(()=>{j(),G(),Z(),X()},q);return()=>{L(Q)}}function nJ(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:q=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:q}),G(),Z(),X(),Y()}function rJ(_){let $=oL(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;iL({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>T$(10,null,j))})}function pV(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:q,currentChatJid:K,currentRootChatJid:L,getAgentModels:Q,getAgentContext:V,getActiveChatAgents:F,getChatBranches:N,activeChatJidRef:U,setActiveChatAgents:z,setCurrentChatBranches:E,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:A,setActiveModelUsage:O,setAgentModelsPayload:w,setHasLoadedAgentModels:x,agentsRef:W,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:D,setContextUsage:y,setExtensionWorkingState:I}=_,R=P(async()=>{await SV({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);g(()=>{R(),lV({readStoredNumber:X,sidebarWidthRef:Y,shellElement:q.current,maxWidth:a5(Number.POSITIVE_INFINITY)})},[q,R,X,Y]);let S=P((Z0)=>{bV({payload:Z0,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:A,setActiveModelUsage:O,setAgentModelsPayload:w,setHasLoadedAgentModels:x})},[H,O,k,w,x,A]),v=P(()=>V2("thread-switch",K),[K]),c=P(()=>{return B$({kind:"model-state",chatJid:K,run:async()=>{let Z0=v();if(Z0)_1(Z0,"runtime-hydration-start",{phase:"model-state"});let E0=K;try{let[V0,Q0]=await Promise.all([(async()=>{let M0=Z0||v();if(M0)_1(M0,"model-request-start",{chatJid:E0});let r=await Q(E0);if(M0)_1(M0,"model-request-ready",{chatJid:E0,hasCurrent:Boolean(r?.current),modelCount:Array.isArray(r?.models)?r.models.length:0});return r})(),V(E0).catch(()=>null)]);if(U.current&&U.current!==E0)return null;S(V0);let U0=m$(Q0);if(U0&&U0.percent!=null)y((M0)=>Y5(M0,U0)?M0:U0),q5(E0,U0)}catch{if(U.current&&U.current!==E0)return null;S(null)}let B0=Z0||v();if(B0)_1(B0,"runtime-hydration-ready",{chatJid:K}),Q2(B0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:K});return null}})},[U,S,K,V,Q,v,y]);g(()=>{JV({chatJid:K}),H(null),k(null),A(!1),O(null),x(!1),w(null),I({message:null,indicator:null,visible:!0});let Z0=NV(K);if(Z0)y(Z0);else y(null);c()},[K,c,H,O,k,w,y,I,x,A]);let h=P((Z0)=>{gV({payload:Z0,agentsRef:W,setAgents:j,applyBranding:Z})},[W,Z,j]),_0=P((Z0)=>{uV({payload:Z0,setUserProfile:G})},[G]),b=P((Z0)=>{let E0=Boolean(Z0?.prewarmRecent),B0=Number.isFinite(Z0?.prewarmLimit)?Number(Z0?.prewarmLimit):5;return B$({kind:"active-chat-agents",chatJid:K,run:async()=>{let V0=v(),Q0=await vV({currentChatJid:K,getActiveChatAgents:async()=>{if(V0)_1(V0,"active-chat-list-request-start",{chatJid:K});let U0=await F(K);if(V0)_1(V0,"active-chat-list-request-ready",{rowCount:Array.isArray(U0?.chats)?U0.chats.length:0});return U0},getChatBranches:async(U0,M0)=>{if(V0)_1(V0,"branch-list-request-start",{rootChatJid:U0});let r=await N(U0,M0);if(V0)_1(V0,"branch-list-request-ready",{rootChatJid:U0,rowCount:Array.isArray(r?.chats)?r.chats.length:0});return r},activeChatJidRef:U,setActiveChatAgents:z});if(E0)rJ({chats:Q0,currentChatJid:K,prewarmLimit:B0});return null}})},[U,K,F,N,v,z]),t=P(()=>{return B$({kind:"current-chat-branches",chatJid:K,run:async()=>{let Z0=v();return await mV({currentRootChatJid:L,getChatBranches:async(E0,B0)=>{if(Z0)_1(Z0,"root-branch-request-start",{rootChatJid:E0});let V0=await N(E0,B0);if(Z0)_1(Z0,"root-branch-request-ready",{rootChatJid:E0,rowCount:Array.isArray(V0?.chats)?V0.chats.length:0});return V0},setCurrentChatBranches:E}),null}})},[K,L,N,v,E]),s=P(()=>{EV({refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:t,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:D})},[b,D,M,t,c,J]),K0=P(()=>{nJ({refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:t,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:D,prewarmLimit:5})},[b,D,M,t,c,J]);return g(()=>pJ({refreshModelAndQueueState:s,refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:t,refreshQueueState:J,runImmediately:!1}),[b,t,s,c,J]),g(()=>{let Z0=setInterval(()=>{c()},5000);return()=>clearInterval(Z0)},[c]),{updateAgentProfile:h,updateUserProfile:_0,applyModelState:S,refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:t,refreshModelAndQueueState:s,refreshPostPaintThreadState:K0}}w0();function dJ(_,$){let j=E1(_);return Boolean(_&&j===$)}function L5(_,$,j){if(!dJ(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function nV(_,$){return{..._,openedAt:$}}function rV(_){let $=E1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function dV(_,$,j){let G=_q({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=E1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=E1(_),Y=Boolean(Z&&X&&Z===X),q={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:q,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function oV(_,$){if(!_||_?.source!=="live")return _||null;let j=E1($),G=E1(_);if(j&&G&&j!==G)return _;return null}function iV(_,$,j){return L5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function t9(_,$,j){if(j.errorMessage)return L5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return L5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function sV(_,$,j){return L5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function aV(_,$,j){return L5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function tV(_,$,j){return L5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}l5();function oJ(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function eV(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function _Q(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:q,setPosts:K,setHasMore:L,scrollToBottom:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,setExtensionWorkingState:N,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:z,snapshotCurrentChatPaneState:E,restoreChatPaneState:H,dismissedQueueRowIdsRef:k,refreshAgentStatus:A,viewStateRef:O,refreshTimeline:w,refreshModelAndQueueState:x,refreshPostPaintThreadState:W,setFloatingWidget:J,dismissedLiveWidgetKeysRef:M}=_;g(()=>{oJ({setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,setExtensionWorkingState:N})},[$,V,F,N]),g(()=>{let I=!1,R=AZ("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return _1(R,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),hV({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:q,setPosts:K,setHasMore:L,scrollToBottom:Q,isCancelled:()=>I,onTimelineLoadStart:(S)=>{_1(R,"timeline-load-start",S||null)},onTimelineDataReady:(S)=>{_1(R,"timeline-data-ready",S||null)},onTimelineFirstPaint:(S)=>{_1(R,"timeline-first-paint",S||null),Q2(R,["runtime-hydration-ready","timeline-first-paint"],"settled",S||null),eV({refreshAgentStatus:A,refreshPostPaintThreadState:W})},onTimelineError:(S,v)=>{kZ(R,S,"timeline-load-failed",v||null),eV({refreshAgentStatus:A,refreshPostPaintThreadState:W})}}),()=>{I=!0,MZ(R,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,Q,q,L,K,A,W]),g(()=>{let I=U.current||$;z.current.set(I,E())},[z,$,U,E]),g(()=>{let I=U.current||$;if(I===$)return;z.current.set(I,E()),U.current=$,k.current.clear(),H(z.current.get($)||null)},[z,$,k,U,H,E]);let D=P(()=>{DV({viewStateRef:O,refreshTimeline:w,refreshModelAndQueueState:x})},[x,w,O]),y=P((I,R="streaming")=>{let S=new Date().toISOString();J((v)=>dV(v,I,{fallbackStatus:R,currentChatJid:$,dismissedSessionKeys:M.current,updatedAt:S}))},[$,M,J]);return{refreshCurrentView:D,applyLiveGeneratedWidgetUpdate:y}}w0();w0();f_();function iJ({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!e5(),q=Z.visibilityState&&Z.visibilityState!=="visible",K=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return q=!0,!0;return!1},L=()=>{if(K())return;if(q)q=!1,X(),$?.()},Q=()=>{if(K())return;if(q){L();return}if(Y)_.reconnectIfNeeded()},V=()=>{L()},F=()=>{L()};return G.addEventListener("focus",Q),G.addEventListener("pageshow",V),Z.addEventListener("visibilitychange",F),()=>{G.removeEventListener("focus",Q),G.removeEventListener("pageshow",V),Z.removeEventListener("visibilitychange",F)}}function $Q({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=u(_);X.current=_;let Y=u($);Y.current=$;let q=u(j);q.current=j;let K=u(G);K.current=G,g(()=>{let L=new E2((V,F)=>X.current(V,F),(V)=>Y.current(V),{chatJid:Z});L.connect();let Q=iJ({sse:L,onWake:()=>K.current?.()});return()=>{Q(),L.disconnect()}},[Z])}g5();M2();function E4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function V5(_,$){return Boolean(_)&&!Boolean($)}function jQ(_,$){return _||$||null}function GQ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function Q5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=v$(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function e9(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function sJ(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function ZQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:sJ($,j),panelKey:typeof $?.key==="string"?$.key:""}}function aJ(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function XQ(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=aJ($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function YQ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var tJ=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function qQ(_){return tJ.has(String(_||"").trim())}function eJ(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function z8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(eJ(_),{detail:G})),!0}function KQ(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function LQ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function VQ(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:q,pendingRequestRef:K,draftBufferRef:L,thoughtBufferRef:Q,previewResyncPendingRef:V,previewResyncGenerationRef:F,steerQueuedTurnIdRef:N,thoughtExpandedRef:U,draftExpandedRef:z,draftThrottleRef:E,thoughtThrottleRef:H,viewStateRef:k,followupQueueItemsRef:A,dismissedQueueRowIdsRef:O,scrollToBottomRef:w,hasMoreRef:x,loadMoreRef:W,lastAgentResponseRef:J,wasAgentActiveRef:M,setActiveTurn:D,applyLiveGeneratedWidgetUpdate:y,setFloatingWidget:I,clearLastActivityFlag:R,handleUiVersionDrift:S,setAgentStatus:v,setAgentDraft:c,setAgentPlan:h,setAgentThought:_0,setPendingRequest:b,clearAgentRunState:t,getAgentStatus:s,noteAgentActivity:K0,showLastActivity:Z0,refreshTimeline:E0,refreshModelAndQueueState:B0,refreshActiveChatAgents:V0,refreshCurrentChatBranches:Q0,notifyForFinalResponse:U0,setContextUsage:M0,refreshContextUsage:r,refreshQueueState:G0,setFollowupQueueItems:O0,clearQueuedSteerStateIfStale:u0,setSteerQueuedTurnId:R0,applyModelState:r0,getAgentContext:j_,setExtensionStatusPanels:I0,setPendingExtensionPanelActions:i0,setExtensionWorkingState:T0,refreshActiveEditorFromWorkspace:s0,showIntentToast:f0,removeStalledPost:t0,setPosts:K_,preserveTimelineScrollTop:H_,openEditor:h0}=j,{turnId:S0,isCurrentChatEvent:P0}=KQ(_,$,G);if(P0)Z($),X($);if(_==="ui_theme"){r4($);return}if(_==="ui_meters"){DX($);return}if(_==="ui_open_tab"){let L0=typeof $?.path==="string"?$.path.trim():"",A0=typeof $?.label==="string"?$.label.trim():void 0;if(L0==="piclaw://settings"){let b0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:b0?{section:b0}:void 0}));return}if(L0&&typeof h0==="function")h0(L0,A0?{label:A0}:void 0);return}let a0=GQ(_);if(a0.kind==="update"){if(!P0)return;if(a0.shouldAdoptTurn&&V5(S0,Y.current))D(S0);y($,a0.fallbackStatus||"streaming");return}if(a0.kind==="close"){if(!P0)return;I((L0)=>oV(L0,$));return}if(_?.startsWith("agent_")&&!LQ(_))R();if(_==="connected"){if(S($?.app_asset_version))return;if($?.ui_theme){let b0=$.ui_theme.theme||"default",N_=$.ui_theme.tint||null;r4({theme:b0,tint:N_})}let L0=F.current+1;if(F.current=L0,V.current=!0,L.current="",Q.current="",v(null),c({text:"",totalLines:0}),h(""),_0({text:"",totalLines:0}),T0({message:null,indicator:null,visible:!0}),b(null),K.current=null,t(),F6(G)){if(F.current===L0)V.current=!1;return}let A0=G;if(s(A0).then((b0)=>{if(q.current!==A0)return;if(!b0||b0.status!=="active"||!b0.data)return;let N_=b0.data,A_=Q8(N_);if(A_)D(A_);v(N_),K0({clearSilence:!0,atMs:I$(N_)??Date.now()}),Z0(N_);let __=X5(b0.thought);if(__)Q.current=__.text,_0(__);let E_=X5(b0.draft);if(E_)L.current=E_.text,c(E_)}).catch((b0)=>{console.warn("Failed to fetch agent status:",b0)}).finally(()=>{if(F.current===L0)V.current=!1}),n1(k.current))E0();B0();return}if(_==="agent_status"){if(!P0){if($?.type==="done"||$?.type==="error")V0(),Q0();return}if($.type==="done"||$.type==="error"){if(E4(S0,Y.current))return;if($.type==="done"){if(U0(S0||Y.current),n1(k.current))E0();let L0=m$($.context_usage);if(L0&&L0.percent!=null)M0((A0)=>Y5(A0,L0)?A0:L0),q5(G,L0)}if(r(),M.current=!1,t(),O.current.clear(),V0(),G0(),c({text:"",totalLines:0}),h(""),_0({text:"",totalLines:0}),T0({message:null,indicator:null,visible:!0}),b(null),$.type==="error")v({type:"error",title:$.title||"Agent error"}),setTimeout(()=>v(null),8000);else v(null)}else{if(S0)D(S0);if(K0({running:!0,clearSilence:!0,atMs:I$($)??Date.now()}),$.type==="thinking")L.current="",Q.current="",c({text:"",totalLines:0}),h(""),_0({text:"",totalLines:0});v($)}return}if(_==="agent_steer_queued"){if(!P0)return;if(E4(S0,Y.current))return;let L0=jQ(S0,Y.current);if(!L0)return;N.current=L0,R0(L0);return}if(_==="agent_followup_queued"){if(!P0)return;O0((L0)=>$V(L0,$)),G0();return}if(_==="agent_followup_consumed"){if(!P0)return;let L0=Q5(A.current,$);if(L0)u0(L0.remainingQueueCount),O0((A0)=>v$(A0,L0.rowId).items);if(G0(),n1(k.current))E0();return}if(_==="agent_followup_removed"){if(!P0)return;let L0=Q5(A.current,$);if(L0)O.current.add(L0.rowId),u0(L0.remainingQueueCount),O0((A0)=>v$(A0,L0.rowId).items);G0();return}if(_==="agent_draft_delta"){if(!P0)return;if(V.current)return;if(E4(S0,Y.current))return;if(V5(S0,Y.current))D(S0);K0({running:!0,clearSilence:!0}),L.current=PL(L.current,$);let L0=Date.now();if(!E.current||L0-E.current>=100){E.current=L0;let A0=L.current;if(z.current)c((b0)=>p9(A0,b0));else c(F8(A0,null))}return}if(_==="agent_draft"){if(!P0)return;if(V.current)return;if(E4(S0,Y.current))return;if(V5(S0,Y.current))D(S0);K0({running:!0,clearSilence:!0});let L0=$.text||"",A0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")h((b0)=>CL(b0,L0,A0));else if(!z.current)L.current=L0,c(F8(L0,$.total_lines));return}if(_==="agent_thought_delta"){if(!P0)return;if(V.current)return;if(E4(S0,Y.current))return;if(V5(S0,Y.current))D(S0);K0({running:!0,clearSilence:!0}),Q.current=RL(Q.current,$);let L0=Date.now();if(U.current&&(!H.current||L0-H.current>=100)){H.current=L0;let A0=Q.current;_0((b0)=>p9(A0,b0))}return}if(_==="agent_thought"){if(!P0)return;if(V.current)return;if(E4(S0,Y.current))return;if(V5(S0,Y.current))D(S0);K0({running:!0,clearSilence:!0});let L0=$.text||"";if(!U.current)Q.current=L0,_0(F8(L0,$.total_lines));return}if(_==="model_changed"){if(!P0)return;r0($);let L0=G;j_(L0).then((A0)=>{if(q.current!==L0)return;let b0=m$(A0);if(b0&&b0.percent!=null)M0((N_)=>Y5(N_,b0)?N_:b0),q5(L0,b0)}).catch(()=>{if(q.current!==L0)return});return}let F_=ZQ(_,$,G);if(F_.isStatusPanelWidgetEvent){if(F_.eventChatJid!==G)return;if(!F_.panelKey)return;if(I0((L0)=>qV(L0,$)),KV($))i0((L0)=>U8(L0,F_.panelKey));z8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));s0($?.updates);return}if(qQ(_)){if(_==="extension_ui_title"){V0(),Q0(),z8(_,$);return}if(!P0)return;T0((A0)=>{return XQ(A0,_,$)??A0}),z8(_,$);let L0=YQ(_,$);if(L0)f0(L0.title,L0.detail,L0.kind,L0.durationMs);return}let D_=n1(k.current);if(_==="agent_response"){if(!P0)return;T0({message:null,indicator:null,visible:!0}),t0(),J.current={post:$,turnId:Y.current}}if(fL(_,P0,D_))K_((L0)=>SL(L0,$)),w.current?.();if(_==="interaction_updated"){if(!n9(P0,D_))return;K_((L0)=>gL(L0,$))}if(_==="interaction_deleted"){if(!n9(P0,D_))return;let L0=$?.ids||[];if(L0.length){if(H_(()=>{K_((A0)=>uL(A0,L0))}),x.current)W.current?.({preserveScroll:!0,preserveMode:"top"})}}}function _A(_){return _?15000:60000}function QQ(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:q,updateUserProfile:K,currentTurnIdRef:L,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:F,thoughtBufferRef:N,previewResyncPendingRef:U,previewResyncGenerationRef:z,steerQueuedTurnIdRef:E,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:A,thoughtThrottleRef:O,viewStateRef:w,followupQueueItemsRef:x,dismissedQueueRowIdsRef:W,scrollToBottomRef:J,hasMoreRef:M,loadMoreRef:D,lastAgentResponseRef:y,wasAgentActiveRef:I,setActiveTurn:R,applyLiveGeneratedWidgetUpdate:S,setFloatingWidget:v,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:_0,setAgentDraft:b,setAgentPlan:t,setAgentThought:s,setPendingRequest:K0,clearAgentRunState:Z0,getAgentStatus:E0,noteAgentActivity:B0,showLastActivity:V0,refreshTimeline:Q0,refreshModelAndQueueState:U0,refreshActiveChatAgents:M0,refreshCurrentChatBranches:r,notifyForFinalResponse:G0,setContextUsage:O0,refreshContextUsage:u0,refreshQueueState:R0,setFollowupQueueItems:r0,clearQueuedSteerStateIfStale:j_,setSteerQueuedTurnId:I0,applyModelState:i0,getAgentContext:T0,setExtensionStatusPanels:s0,setPendingExtensionPanelActions:f0,setExtensionWorkingState:t0,refreshActiveEditorFromWorkspace:K_,showIntentToast:H_,removeStalledPost:h0,setPosts:S0,preserveTimelineScrollTop:P0,openEditor:a0,finalizeStalledResponse:F_,connectionStatus:D_,agentStatus:L0,refreshAgentStatus:A0,refreshAutoresearchStatus:b0}=_,N_=P((__,E_)=>{VQ(__,E_,{currentChatJid:$,updateAgentProfile:q,updateUserProfile:K,currentTurnIdRef:L,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:F,thoughtBufferRef:N,previewResyncPendingRef:U,previewResyncGenerationRef:z,steerQueuedTurnIdRef:E,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:A,thoughtThrottleRef:O,viewStateRef:w,followupQueueItemsRef:x,dismissedQueueRowIdsRef:W,scrollToBottomRef:J,hasMoreRef:M,loadMoreRef:D,lastAgentResponseRef:y,wasAgentActiveRef:I,setActiveTurn:R,applyLiveGeneratedWidgetUpdate:S,setFloatingWidget:v,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:_0,setAgentDraft:b,setAgentPlan:t,setAgentThought:s,setPendingRequest:K0,clearAgentRunState:Z0,getAgentStatus:E0,noteAgentActivity:B0,showLastActivity:V0,refreshTimeline:Q0,refreshModelAndQueueState:U0,refreshActiveChatAgents:M0,refreshCurrentChatBranches:r,notifyForFinalResponse:G0,setContextUsage:O0,refreshContextUsage:u0,refreshQueueState:R0,setFollowupQueueItems:r0,clearQueuedSteerStateIfStale:j_,setSteerQueuedTurnId:I0,applyModelState:i0,getAgentContext:T0,setExtensionStatusPanels:s0,setPendingExtensionPanelActions:f0,setExtensionWorkingState:t0,refreshActiveEditorFromWorkspace:K_,showIntentToast:H_,removeStalledPost:h0,setPosts:S0,preserveTimelineScrollTop:P0,openEditor:a0})},[Q,S,i0,Z0,c,j_,$,L,W,F,k,A,x,T0,E0,h,M,y,D,B0,G0,V,P0,z,U,M0,K_,u0,r,U0,R0,Q0,h0,J,R,b,t,_0,s,O0,s0,t0,v,r0,f0,K0,S0,I0,H_,V0,E,N,H,O,q,K,w,I,a0]);g(()=>{if(typeof window>"u")return;let __=window.__PICLAW_TEST_API||{};return __.emit=N_,__.reset=()=>{h0(),Z0(),_0(null),b({text:"",totalLines:0}),t(""),s({text:"",totalLines:0}),t0({message:null,indicator:null,visible:!0}),K0(null)},__.finalize=()=>F_(),window.__PICLAW_TEST_API=__,()=>{if(window.__PICLAW_TEST_API===__)window.__PICLAW_TEST_API=void 0}},[Z0,F_,N_,h0,b,t,_0,s,t0,K0]),$Q({handleSseEvent:N_,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),g(()=>{if(!j||j.length===0)return;let __=location.hash;if(!__||!__.startsWith("#msg-"))return;let E_=__.slice(5);G(E_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let A_=L0!==null;g(()=>{if(D_!=="connected")return;let __=_A(A_),E_=setInterval(()=>{MV({viewStateRef:w,isAgentActive:A_,refreshTimeline:Q0,refreshQueueState:R0,refreshAgentStatus:A0,refreshContextUsage:u0,refreshAutoresearchStatus:b0})},__);return()=>clearInterval(E_)},[D_,A_,A0,b0,u0,R0,Q0,w]),g(()=>{return L8(()=>{A0(),u0(),R0(),b0()})},[A0,b0,u0,R0])}function $A(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function jA(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function GA(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function ZA(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function FQ(_){let $=yV($A(_)),j=pV(jA({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=_Q(GA({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return QQ(ZA({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}w0();var NQ="piclaw:pane-host-transfer:",XA=300000;function BQ(_){try{return _?.localStorage??null}catch{return null}}function UQ(_){return typeof _==="string"?_.trim():""}function HQ(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function YA(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function qA(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function KA(_,$=globalThis,j=Date.now()){let G=BQ($),Z=UQ(_?.path),X=HQ(_?.payload);if(!G||!Z||!X)return null;let Y=YA(j);try{return G.setItem(`${NQ}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function _j(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=BQ($);if(!G||!Z)return null;let X=`${NQ}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;qA(Z,X);try{let q=JSON.parse(Y),K=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(K+XA<j)return null;let L=UQ(q?.path),Q=HQ(q?.payload);if(!L||!Q)return null;return{path:L,payload:Q,capturedAt:K}}catch{return null}}function O8(_,$=globalThis,j=Date.now()){let G=KA(_,$,j);return G?{pane_transfer:G}:null}function EQ(_=globalThis,$=Date.now()){let j=f4("pane_transfer",_);return _j(j,_,$)}function D4(_){return typeof _==="string"?_.trim():""}function LA(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function $j(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(LA($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function VA(_){try{return _?.(),!0}catch($){return!1}}function F5(_,$=typeof window<"u"?window:null){let j=$j($),G=D4(_?.panePath),Z=D4(_?.paneInstanceId),X=D4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function DQ(_,$=typeof window<"u"?window:null){let j=$j($),G=D4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function zQ(_,$,j,G){let Z=$j(_),X=D4($?.panePath),Y=D4($?.paneInstanceId),q=D4($?.paneWindowId);if(!Z||!X||!Y||!q)return null;let K=Z.get(q)||null;if(!K)return null;if(K.panePath!==X||K.paneInstanceId!==Y)return null;if(typeof K.instance?.moveHost!=="function")return null;if(!await K.instance.moveHost(j,G))return null;return Z.delete(q),VA(K.releaseSourceHost),K.instance}w2();function U6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function OQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)G?.(V,F)},q=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)Z?.(V,F)},K=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)X?.(V,F)},L=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return L.forEach((Q)=>j.addEventListener(Q,Y)),j.addEventListener("html-viewer:edit-source",q),j.addEventListener("pane:popout",K),()=>{L.forEach((Q)=>j.removeEventListener(Q,Y)),j.removeEventListener("html-viewer:edit-source",q),j.removeEventListener("pane:popout",K)}}function WQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(U6(Z?.target))return;if(!N$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function JQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(q)=>{if(U6(q?.target))return;if(N$(q,"toggleZenMode")){q.preventDefault?.(),G?.();return}if(q?.key==="Escape"&&X())q.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function AQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(U6(Z?.target))return;if(N$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(N$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function kQ(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(U6(G?.target))return;if(!N$(G,"openSettings"))return;G.preventDefault(),p1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function MQ(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(U6(G?.target))return;if(!N$(G,"openHelp"))return;G.preventDefault(),p1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function yQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let L=X?.()||null;if(!L)return!1;if(G||K<Number(Z||0)||L.inFlight||K<Number(L.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),q?.(!0),!0}function wQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function TQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:q,setIsRenamingBranch:K,renameChatBranch:L,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,navigate:F,baseHref:N,chatOnlyMode:U,showIntentToast:z,closeRenameForm:E,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let k=H(),A=q?.()||null;if(!A)return!1;if(X.current||k<Number(Y.current||0)||A.inFlight||k<Number(A.cooldownUntil||0))return!1;X.current=!0,A.inFlight=!0,K?.(!0);try{let O=j.agent_name||"",w=b2(G,O);if(!w.canSubmit)return z?.("Could not rename branch",w.message||"Enter a valid branch handle.","warning",4000),!1;let x=w.normalized||O,W=await L(j.chat_jid,{agentName:x});await Promise.allSettled([Q?.(),V?.()]);let J=W?.branch?.agent_name||x||O,M=W?.branch?.chat_jid;if(M&&M!==j.chat_jid){let D=k1(N,M,{chatOnly:U});F?.(D)}return z?.("Branch renamed",`@${J}`,"info",3500),E?.(),!0}catch(O){let w=O instanceof Error?O.message:String(O||"Could not rename branch."),x=/already in use/i.test(w||"")?`${w} Switch to or restore that existing session from the session manager.`:w;return z?.("Could not rename branch",x||"Could not rename branch.","warning",5000),!1}finally{X.current=!1,K?.(!1);let O=H()+hK;Y.current=O;let w=q?.()||null;if(w)w.inFlight=!1,w.cooldownUntil=O}}async function xQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:q,refreshActiveChatAgents:K,refreshCurrentChatBranches:L,showIntentToast:Q,baseHref:V,chatOnlyMode:F,navigate:N,confirm:U=(J)=>window.confirm(J)}=_;if(!$)return!1;let z=typeof j==="string"&&j.trim()?j.trim():"",E=typeof G==="string"&&G.trim()?G.trim():"",H=z||Z?.chat_jid||E;if(!H)return Q?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let k=(Z?.chat_jid===H?Z:null)||X.find((J)=>J?.chat_jid===H)||Y.find((J)=>J?.chat_jid===H)||null,A=k?.chat_jid===(k?.root_chat_jid||k?.chat_jid),O=Boolean(A&&H==="web:default"),w=Boolean(A&&X.some((J)=>{let M=typeof J?.chat_jid==="string"?J.chat_jid.trim():"",D=typeof J?.root_chat_jid==="string"?J.root_chat_jid.trim():M;return M&&M!==H&&D===H&&!J?.archived_at}));if(O)return Q?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(w)return Q?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let x=`@${k?.agent_name||H}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!U(A?`Archive ${x}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${x}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await q(H),await Promise.allSettled([K?.(),L?.()]);let J=A?"web:default":k?.root_chat_jid||"web:default";Q?.(A?"Session archived":"Branch pruned",`${x} has been archived.`,"info",3000);let M=k1(V,J,{chatOnly:F});return N?.(M),!0}catch(J){let M=J instanceof Error?J.message:String(J||"Could not prune branch.");return Q?.("Could not prune branch",M||"Could not prune branch.","warning",5000),!1}}async function IQ(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:q=(z)=>window.confirm(z)}=_,K=typeof $==="string"?$.trim():"";if(!K||typeof j!=="function")return!1;let L=G.find((z)=>z?.chat_jid===K)||null;if(!Boolean(L?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let V=Boolean(L?.chat_jid&&L.chat_jid===(L.root_chat_jid||L.chat_jid)),F=`@${L?.agent_name||K}`;if(!q(`Permanently delete ${F}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${V?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(K),await Promise.allSettled([Z?.(),X?.()]),Y?.(V?"Archived session deleted":"Archived branch deleted",`${F} was permanently deleted.`,"info",4000),!0}catch(z){let E=z instanceof Error?z.message:String(z||`Could not permanently delete archived ${V?"session":"branch"}.`);return Y?.("Could not delete branch",E||`Could not permanently delete archived ${V?"session":"branch"}.`,"warning",5000),!1}}async function CQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:q,chatOnlyMode:K,navigate:L}=_,Q=typeof $==="string"?$.trim():"";if(!Q||typeof j!=="function")return!1;try{let V=G.find((H)=>H?.chat_jid===Q)||null,F=await j(Q);await Promise.allSettled([Z?.(),X?.()]);let N=F?.branch,U=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():Q,z=RY(V?.agent_name,N?.agent_name,U);Y?.("Branch restored",z,"info",4200);let E=k1(q,U,{chatOnly:K});return L?.(E),!0}catch(V){let F=V instanceof Error?V.message:String(V||"Could not restore branch.");return Y?.("Could not restore branch",F||"Could not restore branch.","warning",5000),!1}}async function PQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let q=await j($);if(Y())return!1;let K=q?.branch,L=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!L)throw Error("Branch fork did not return a chat id.");let Q=k1(X,L,{chatOnly:!0});return Z?.(Q,{replace:!0}),!0}catch(q){if(Y())return!1;return G?.({status:"error",message:u4(q)}),!1}}function fQ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let q=typeof j==="string"?j.trim():"";if(!q||q===G)return!1;let K=k1(X,q,{chatOnly:Z});return Y?.(K),!0}function QA(_){return typeof _==="string"?_.trim():""}function FA(_){return new Promise(($)=>setTimeout($,_))}async function RQ(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function SQ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:q,resolveTab:K,buildEditorPopoutTransfer:L}=_,Q=$===X&&Boolean(K?.($));if($===X&&!Q){let z=Z.current;if(await RQ(z,$),typeof z?.preparePopoutTransfer!=="function")return null;return await z.preparePopoutTransfer()}let V=()=>QA(q?.()??j),F=V(),N=G.current;if(F!==$)Y?.($);let U=F===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let z=0;z<12;z+=1){if(z>0)await FA(16);else await Promise.resolve();let E=V(),H=G.current,k=E===$,A=H!==N;if(!k||typeof H?.preparePopoutTransfer!=="function")continue;if(F===$||A||z>0){U=H;break}}if(await RQ(U,$),typeof U?.preparePopoutTransfer==="function"){let z=await U.preparePopoutTransfer();if(z)return z}return L?.($)??null}function gQ(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,q=Z($);if(q&&!q.dirty){X($);return}if($===j&&G)Y(!1)}function uQ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:q}=_;if(!j||!$||!G)return;if(!Z.current){let K=q("editorWidth",null),L=Y.current||280,Q=Number.isFinite(K)?Number(K):L;Z.current=t5(Q,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let K=q("dockHeight",null);X.current=Number.isFinite(K)?Number(K):200}G.style.setProperty("--dock-height",`${X.current}px`)}async function bQ(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function vQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:K}=_;if(typeof q==="function")try{let L=V3(K,$,{chatOnly:j});return q(L),!0}catch(L){return Y?.("Could not create branch",u4(L),"warning",5000),!1}try{let Q=(await G($))?.branch,V=typeof Q?.chat_jid==="string"&&Q.chat_jid.trim()?Q.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let F=Q?.agent_name?`@${Q.agent_name}`:V;Y?.("New branch created",`Switched to ${F}.`,"info",2500);let N=k1(K,V,{chatOnly:j});return q?.(N),!0}catch(L){return Y?.("Could not create branch",u4(L),"warning",5000),!1}}async function mQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:q,onPaneWindowOpened:K,currentChatJid:L,baseHref:Q}=_;if(!$||j)return!1;let V=typeof G==="string"&&G.trim()?G.trim():"";if(!V)return!1;let F=VG(V);if(!F)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let N=Y3(F);if(!N)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;q3(N,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(V),z=Boolean(U&&Object.keys(U).length>0),E=LG(Q,V,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:L,params:U});if(K3(N,E),K?.(V,N,U||null),z&&!K)q?.(V);return!0}catch(U){L3(N);let z=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",z,"warning",5000),!1}}async function cQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:q,setActiveChatAgents:K,setCurrentChatBranches:L,showIntentToast:Q,baseHref:V}=_;if(!$||j)return!1;let F=KG(G);if(!F)return Q?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(F.mode==="tab"){let U=V3(V,G,{chatOnly:!0});if(!window.open(U,F.target))return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let N=Y3(F);if(!N)return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;q3(N,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let z=(await X(G))?.branch,E=typeof z?.chat_jid==="string"&&z.chat_jid.trim()?z.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let H=await bQ(()=>Y?.());if(H)K?.(Array.isArray(H?.chats)?H.chats:[]);let k=await bQ(()=>q?.(Z));if(k)L?.(Array.isArray(k?.chats)?k.chats:[]);let A=k1(V,E,{chatOnly:!0});return K3(N,A),!0}catch(U){return L3(N),Q?.("Could not open branch window",u4(U),"error",5000),!1}}function NA(_){_(($)=>!$)}function BA(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return fQ({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function UA(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:q=typeof window<"u"}=_;return yQ({hasWindow:q,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function HA(_){wQ(_)}async function EA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await TQ({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function DA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await xQ({hasWindow:$,baseHref:j,...G})}async function zA(_){await IQ(_)}async function OA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await CQ({baseHref:j,...G})}function WA(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:q=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:K=PQ}=_;if(!$||!Y)return;let L=!1;return K({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:q,isCancelled:()=>L}),()=>{L=!0}}async function JA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await vQ({baseHref:j,...G})}async function AA(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:L,terminalTabPath:Q,tabPaneOverrides:V,buildPaneDetachTransfer:F,registerDetachedPaneWindow:N,dockVisible:U,resolveTab:z,closeTab:E,setDockVisible:H,hasWindow:k=typeof window<"u",baseHref:A=k?window.location.href:"http://localhost/"}=_,O=F?.(j)||null;return await mQ({hasWindow:k,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:A,resolveSourceTransfer:async(w)=>{let x=await SQ({panePath:w,activateTab:Y,getActiveTabId:()=>e0.getActiveId(),tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:L,terminalTabPath:Q,resolveTab:z,buildEditorPopoutTransfer:(D)=>{if(!D||D===Q)return null;let y=K.current,I=typeof y?.getContent==="function"?y.getContent():void 0,R=typeof y?.isDirty==="function"?y.isDirty():!1,S=V instanceof Map?V.get(D)||null:null,v=e0.getViewState(D)||null;return n6({path:D,content:R?I:void 0,paneOverrideId:S,viewState:v})}}),W=w===Q&&!z(w)?L.current:K.current,J=typeof W?.exportHostTransferState==="function"?W.exportHostTransferState():null,M=J?O8({path:w,payload:J}):null;if(O?.paneInstanceId&&O?.paneWindowId&&W&&w!==Q&&J?.kind!=="terminal")F5({panePath:w,paneInstanceId:O.paneInstanceId,paneWindowId:O.paneWindowId,instance:W,releaseSourceHost:()=>{if(w===Q){if(L.current===W)L.current=null;if(K.current===W)K.current=null;return}if(K.current===W)K.current=null}});return{...x||{},...M||{},...O?.params||{}}},onPaneWindowOpened:N?(w,x,W)=>{N(w,G,x,W)}:void 0,closeSourcePaneIfTransferred:N?void 0:(w)=>{gQ({panePath:w,terminalTabPath:Q,dockVisible:U,resolveTab:z,closeTab:E,setDockVisible:H})}})}function kA(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=OQ}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function MA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await cQ({hasWindow:$,baseHref:j,...G})}function yA(_){let{hasWindow:$=typeof window<"u",...j}=_;uQ({hasWindow:$,...j})}function lQ(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setRenameBranchNameDraft:L,setIsRenameBranchFormOpen:Q,setIsRenamingBranch:V,renameChatBranch:F,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:z,currentChatBranches:E,activeChatAgents:H,pruneChatBranch:k,purgeChatBranch:A,restoreChatBranch:O,branchLoaderMode:w,branchLoaderSourceChatJid:x,forkChatBranch:W,setBranchLoaderState:J,currentRootChatJid:M,isWebAppMode:D,getActiveChatAgents:y,getChatBranches:I,setActiveChatAgents:R,setCurrentChatBranches:S,openEditor:v,activateTab:c,tabStripActiveId:h,editorInstanceRef:_0,dockInstanceRef:b,terminalTabPath:t,tabPaneOverrides:s,buildPaneDetachTransfer:K0,registerDetachedPaneWindow:Z0,dockVisible:E0,resolveTab:B0,closeTab:V0,setDockVisible:Q0,editorOpen:U0,shellElement:M0,editorWidthRef:r,dockHeightRef:G0,sidebarWidthRef:O0,readStoredNumber:u0}=_,R0=P(()=>{NA($)},[$]),r0=P((h0)=>{BA({nextChatJid:h0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),j_=P(()=>{UA({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:q.current,getFormLock:K,setRenameBranchNameDraft:L,setIsRenameBranchFormOpen:Q})},[X,K,Y,q,Q,L]),I0=P(()=>{HA({setIsRenameBranchFormOpen:Q,setRenameBranchNameDraft:L})},[Q,L]),i0=P(async(h0)=>{await EA({currentBranchRecord:X,nextName:h0,openRenameForm:j_,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:V,renameChatBranch:F,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:z,closeRenameForm:I0})},[I0,X,G,K,Z,j_,N,U,Y,q,F,V,z]),T0=P(async(h0=null)=>{await DA({targetChatJid:h0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:E,activeChatAgents:H,pruneChatBranch:k,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:z,chatOnlyMode:G,navigate:Z})},[H,G,X,E,j,Z,k,N,U,z]),s0=P(async(h0)=>{await zA({targetChatJid:h0,purgeChatBranch:A,currentChatBranches:E,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:z})},[E,A,N,U,z]),f0=P(async(h0)=>{await OA({targetChatJid:h0,restoreChatBranch:O,currentChatBranches:E,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:z,chatOnlyMode:G,navigate:Z})},[G,E,Z,N,U,O,z]);g(()=>WA({branchLoaderMode:w,branchLoaderSourceChatJid:x,forkChatBranch:W,setBranchLoaderState:J,navigate:Z}),[w,x,W,Z,J]);let t0=P(async()=>{await JA({currentChatJid:j,chatOnlyMode:G,forkChatBranch:W,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:z,navigate:Z})},[G,j,W,Z,N,U,z]),K_=P(async(h0,S0)=>{return await AA({isWebAppMode:D,path:h0,label:S0,showIntentToast:z,currentChatJid:j,activateTab:c,tabStripActiveId:h,editorInstanceRef:_0,dockInstanceRef:b,terminalTabPath:t,tabPaneOverrides:s,buildPaneDetachTransfer:K0,registerDetachedPaneWindow:Z0,dockVisible:E0,resolveTab:B0,closeTab:V0,setDockVisible:Q0})},[c,K0,V0,j,b,E0,_0,D,Z0,B0,Q0,z,s,h,t]);g(()=>kA({openEditor:v,popOutPane:(h0,S0)=>{K_(h0,S0)}}),[K_,v]);let H_=P(async()=>{await MA({isWebAppMode:D,currentChatJid:j,currentRootChatJid:M,forkChatBranch:W,getActiveChatAgents:y,getChatBranches:I,setActiveChatAgents:R,setCurrentChatBranches:S,showIntentToast:z})},[j,M,W,y,I,D,R,S,z]);return g(()=>{yA({editorOpen:U0,shellElement:M0,editorWidthRef:r,dockHeightRef:G0,sidebarWidthRef:O0,readStoredNumber:u0})},[G0,U0,r,u0,M0,O0]),{toggleWorkspace:R0,handleBranchPickerChange:r0,openRenameCurrentBranchForm:j_,closeRenameCurrentBranchForm:I0,handleRenameCurrentBranch:i0,handlePruneCurrentBranch:T0,handlePurgeArchivedBranch:s0,handleRestoreBranch:f0,handleCreateSessionFromCompose:t0,handlePopOutPane:K_,handlePopOutChat:H_}}w0();function c$(_){return _.status==="fulfilled"?_.value:null}function W8(_){return Math.max(0,Math.min(100,_))}function hQ(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((E)=>E?.data?.is_bot_message).length,Z=$.filter((E)=>!E?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,q=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,K=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,L=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,Q=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,F=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,N=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),z=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:q},agent:{status:U,phase:z,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:F,supportsThinking:Boolean(N)},context:{tokens:L,contextWindow:Q,percent:K},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:W8(Math.round(K))},{key:"queue",label:"Queue",value:W8(X*18)},{key:"activeChats",label:"Active chats",value:W8(Y*12)},{key:"posts",label:"Timeline load",value:W8($.length*5)}]}}function pQ(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function nQ(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function rQ(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function dQ(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function oQ(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function iQ(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function sQ(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:q,getActiveChatAgents:K,getChatBranches:L,getTimeline:Q,rawPosts:V,activeChatAgents:F,currentChatBranches:N,contextUsage:U,followupQueueItems:z,activeModel:E,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:A}=_,[O,w,x,W,J,M,D]=await Promise.allSettled([Z(j),X(j),Y(j),q(j),K(),L(G),Q(20,null,j)]);return hQ({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:c$(O),contextPayload:c$(w),queuePayload:c$(x),modelsPayload:c$(W),activeChatsPayload:c$(J),branchesPayload:c$(M),timelinePayload:c$(D),rawPosts:V,activeChatAgents:F,currentChatBranches:N,contextUsage:U,followupQueueItems:z,activeModel:E,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:A})}function aQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,steerAgentQueueItem:K}=_,L=Q5(j.current,$);if(!L)return;let{rowId:Q}=L;G.current.add(Q),Y((V)=>v$(V,Q).items),K(Q,c9(Z)).then(()=>{X()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let F=e9("steer");q(F.title,F.detail,"warning"),G.current.delete(Q),X()})}function tQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,clearQueuedSteerStateIfStale:K,removeAgentQueueItem:L}=_,Q=Q5(j.current,$);if(!Q)return;let{rowId:V}=Q;G.current.add(V),K?.(Q.remainingQueueCount),Y((F)=>v$(F,V).items),L(V,c9(Z)).then(()=>{X()}).catch((F)=>{console.warn("[queue] Failed to remove queued item:",F);let N=e9("remove");q(N.title,N.detail,"warning"),G.current.delete(V),X()})}function eQ(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=E1($);if(Z)j.current.delete(Z);G(nV($,new Date().toISOString()))}function _F(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=rV(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function $F(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:q,showIntentToast:K,sendAgentMessage:L,buildFloatingWidgetDashboardSnapshot:Q}=_,V=typeof $?.kind==="string"?$.kind:"",F=E1(j);if(!V||!F)return;if(V==="widget.close"){Y();return}if(V==="widget.submit"){let N=Zq($?.payload),U=Xq($?.payload),z=new Date().toISOString();if(X((E)=>iV(E,F,{kind:V,payload:$?.payload||null,submittedAt:z,submissionText:N})),!N){if(K("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let E=await L("default",N,null,[],Z?"queue":null,G);q(E),X((k)=>t9(k,F,{submittedAt:z,submissionText:N,queued:E?.queued||null}));let H=pQ(E?.queued);if(K(H.title,H.detail,H.kind,H.durationMs),U)Y()}catch(E){X((k)=>t9(k,F,{submittedAt:z,submissionText:N,errorMessage:E?.message||"Could not send the widget message."}));let H=nQ(E?.message);K(H.title,H.detail,H.kind,H.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let N=new Date().toISOString(),U=rQ($?.payload||null,j?.runtimeState?.refreshCount);if(X((z)=>sV(z,F,{kind:V,payload:$?.payload||null,eventAt:N,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),V==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let z=await Q($?.payload||null);X((H)=>aV(H,F,{dashboard:z,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let E=dQ();K(E.title,E.detail,E.kind,E.durationMs)}catch(z){X((H)=>tV(H,F,{errorMessage:z?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let E=oQ(z?.message);K(E.title,E.detail,E.kind,E.durationMs)}})();else{let z=iQ();K(z.title,z.detail,z.kind,z.durationMs)}}}function wA(_,$=aQ){$(_)}function TA(_,$=tQ){$(_)}function xA(_,$,j=cV){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function jF(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:K,removeAgentQueueItem:L,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:F,refreshAutoresearchStatus:N}=_,U=P((k)=>{wA({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:K,removeAgentQueueItem:L})},[$,G,j,Z,L,X,Y,K]),z=P((k)=>{TA({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:K,removeAgentQueueItem:L})},[q,$,G,j,Z,L,X,Y,K]),E=P(async(k,A)=>{X((O)=>{if(!Array.isArray(O)||k<0||A<0||k>=O.length||A>=O.length||k===A)return O;let w=[...O],[x]=w.splice(k,1);return w.splice(A,0,x),w});try{let{reorderAgentQueueItem:O}=await Promise.resolve().then(() => (f_(),o5));await O(k,A,$)}catch(O){console.warn("Failed to persist queue reorder:",O),Z()}},[$,Z,X]),H=P((k)=>{xA(k,{refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:F,refreshAutoresearchStatus:N,refreshQueueState:Z})},[Q,N,F,V,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:z,handleMoveQueuedFollowup:E,handleMessageResponse:H}}w0();function GF(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function ZF(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:q}=_,K=String($||"").trim();if(!K)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let L=new AbortController;Y.current=L,q({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let Q=await G(K,{signal:L.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")q((F)=>F?{...F,status:"running"}:F)},onThinkingDelta:(V)=>{q((F)=>F?{...F,thinking:`${F.thinking||""}${V||""}`}:F)},onTextDelta:(V)=>{q((F)=>F?{...F,answer:`${F.answer||""}${V||""}`}:F)}});if(Y.current!==L)return!0;q((V)=>V?{...V,answer:Q?.result||V.answer||"",thinking:Q?.thinking||V.thinking||"",model:Q?.model||null,status:"success",error:null}:V)}catch(Q){if(L.signal.aborted)return!0;q((V)=>V?{...V,status:"error",error:Q?.payload?.error||Q?.message||"BTW request failed."}:V)}finally{if(Y.current===L)Y.current=null}return!0}async function XF(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function YF(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:q}=_,K=j($);if(!K)return!1;try{let L=await X("default",K,null,[],G?"queue":null,Z);return Y(L),q(L?.queued==="followup"?"BTW queued":"BTW injected",L?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(L){return q("BTW inject failed",L?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function IA(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function CA(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function qF(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:q,dismissAutoresearch:K,streamSidePrompt:L,btwAbortRef:Q,btwSession:V,setBtwSession:F,sendAgentMessage:N,handleMessageResponse:U,dismissedLiveWidgetKeysRef:z,setFloatingWidget:E,getAgentStatus:H,getAgentContext:k,getAgentQueueState:A,getAgentModels:O,getActiveChatAgents:w,getChatBranches:x,getTimeline:W,rawPosts:J,activeChatAgents:M,currentChatBranches:D,contextUsage:y,followupQueueItemsRef:I,activeModel:R,activeThinkingLevel:S,supportsThinking:v,isAgentTurnActive:c}=_,h=P(async(Q0,U0)=>{let M0=typeof Q0?.key==="string"?Q0.key:"",r=typeof U0?.key==="string"?U0.key:"",G0=i9(M0,r);if(!M0||!r)return;X((O0)=>LV(O0,M0,r));try{let O0=await QV({panel:Q0,action:U0,currentChatJid:$,stopAutoresearch:q,dismissAutoresearch:K,writeClipboard:async(u0)=>{if(!await IA(u0))throw Error("Clipboard access is unavailable.")}});if(O0.refreshAutoresearchStatus)Y();if(O0.toast)Z(O0.toast.title,O0.toast.detail,O0.toast.kind,O0.toast.durationMs)}catch(O0){Z("Panel action failed",O0?.message||"Could not complete that action.","warning")}finally{X((O0)=>VV(O0,G0))}},[$,K,Y,X,Z,q]),_0=P(()=>{GF({btwAbortRef:Q,setBtwSession:F})},[Q,F]),b=P(async(Q0)=>{return await ZF({question:Q0,currentChatJid:$,streamSidePrompt:L,resolveBtwChatJid:rY,showIntentToast:Z,btwAbortRef:Q,setBtwSession:F})},[Q,$,F,Z,L]),t=P(async({content:Q0})=>{return await XF({content:Q0,parseBtwCommand:nY,closeBtwPanel:_0,runBtwPrompt:b,showIntentToast:Z})},[_0,b,Z]),s=P(()=>{if(V?.question)b(V.question)},[V,b]),K0=P(async()=>{await YF({btwSession:V,buildBtwInjectionText:iY,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:N,handleMessageResponse:U,showIntentToast:Z})},[V,$,U,G,N,Z]),Z0=P(async(Q0=null)=>{return sQ({requestPayload:Q0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:H,getAgentContext:k,getAgentQueueState:A,getAgentModels:O,getActiveChatAgents:w,getChatBranches:x,getTimeline:W,rawPosts:J,activeChatAgents:M,currentChatBranches:D,contextUsage:y,followupQueueItems:I.current,activeModel:R,activeThinkingLevel:S,supportsThinking:v,isAgentTurnActive:c})},[M,R,S,y,D,$,j,I,w,k,O,A,H,x,W,c,J,v]),E0=P((Q0)=>{eQ({widget:Q0,dismissedLiveWidgetKeysRef:z,setFloatingWidget:E})},[z,E]),B0=P(()=>{_F({dismissedLiveWidgetKeysRef:z,setFloatingWidget:E})},[z,E]),V0=P((Q0,U0)=>{$F({event:Q0,widget:U0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:E,handleCloseFloatingWidget:B0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:N,buildFloatingWidgetDashboardSnapshot:Z0})},[Z0,$,B0,U,G,N,E,Z]);return g(()=>{CA({dismissedLiveWidgetKeysRef:z,setFloatingWidget:E})},[$,z,E]),{handleExtensionPanelAction:h,closeBtwPanel:_0,handleBtwIntercept:t,handleBtwRetry:s,handleBtwInject:K0,handleOpenFloatingWidget:E0,handleCloseFloatingWidget:B0,handleFloatingWidgetEvent:V0}}w0();function PA(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function RA(_){return!_}function KF(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:q,nextChat:K}=_;g(()=>{if(!PA({hasDockPanes:$,chatOnlyMode:j}))return;return WQ(G)},[j,$,G]),g(()=>{if(!RA(j))return;return JQ({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),g(()=>{if(typeof q!=="function"&&typeof K!=="function")return;return AQ({previousChat:q,nextChat:K})},[K,q]),g(()=>MQ(),[]),g(()=>kQ(),[])}function fA(_){return Boolean(_&&typeof _.closest==="function")}function LF(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function SA(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function gA(){return{lastTriggeredAt:0,accumX:0}}function jj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var uA=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),bA=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function VF(_){if(!_||!fA(_))return!1;let $=_.closest(uA);if(!$)return!0;return Boolean($.closest(bA))}function FF(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function Gj(_){let $=FF(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function QF(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function vA(_){let $=FF(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:QF(_.candidates,G)},next:{chatJid:Z,name:QF(_.candidates,Z)}}}function mA(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function cA(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function lA(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let q=$<0,K=q?G.next:G.prev,L=_.querySelector(".chat-swipe-chevron");if(L)L.textContent=q?"›":"‹",L.style.order=q?"2":"0";let Q=_.querySelector(".chat-swipe-name");if(Q)Q.textContent=K?.name??""}function H6(_){_.style.display="none",_.style.opacity="0"}function NF(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,q=$.current;if(!q)return()=>{};let K=X(),L=typeof Y==="function"?Y():!1;if(!K&&!L)return()=>{};let Q=SA(),V=gA(),F=null,N={prev:null,next:null},U=!1;function z(){N=vA({candidates:j,currentChatJid:G})}z();function E(){if(!F)F=cA(q);return F}function H(J){let M=J==="next"?N.next:N.prev;if(M)Z(M.chatJid)}function k(J){U=String(J.pointerType||"").toLowerCase()==="pen"}function A(J){if(jj(Q),z(),!K)return;if(J.touches.length!==1)return;if(U)return;if(LF())return;if(!VF(J.target))return;let M=J.touches[0];Q.active=!0,Q.startX=M.clientX,Q.startY=M.clientY,Q.lastX=M.clientX,Q.lastY=M.clientY,Q.startedAt=Date.now()}function O(J){if(!Q.active||Q.cancelled)return;if(LF()){Q.cancelled=!0,H6(E());return}let M=J.touches[0];if(!M)return;Q.lastX=M.clientX,Q.lastY=M.clientY;let D=Q.lastX-Q.startX,y=Q.lastY-Q.startY;if(!Q.horizontalLocked){if(Math.abs(y)>16&&Math.abs(y)>=Math.abs(D)){Q.cancelled=!0,H6(E());return}if(Math.abs(D)>12&&Math.abs(D)>Math.abs(y)*1.15)Q.horizontalLocked=!0}if(Q.horizontalLocked){if(J.cancelable)J.preventDefault();lA(E(),D,q.clientWidth,N)}}function w(){if(!Q.active)return;let J=Q.lastX-Q.startX,M=Q.lastY-Q.startY,D=!Q.cancelled&&mA({dx:J,dy:M});if(H6(E()),jj(Q),D)H(J<0?"next":"prev")}function x(){H6(E()),jj(Q)}function W(J){if(K)return;if(!L)return;if(!VF(J.target))return;let{deltaX:M,deltaY:D}=J;if(!Number.isFinite(M)||Math.abs(M)<72)return;if(Math.abs(M)<=Math.abs(D)*1.35)return;if(J.cancelable)J.preventDefault();let y=Date.now();if(y-V.lastTriggeredAt<450)return;V.lastTriggeredAt=y,H(M>0?"next":"prev")}return q.addEventListener("pointerdown",k,{passive:!0}),q.addEventListener("touchstart",A,{passive:!0}),q.addEventListener("touchmove",O,{passive:!1}),q.addEventListener("touchend",w,{passive:!0}),q.addEventListener("touchcancel",x,{passive:!0}),q.addEventListener("wheel",W,{passive:!1}),()=>{if(q.removeEventListener("pointerdown",k),q.removeEventListener("touchstart",A),q.removeEventListener("touchmove",O),q.removeEventListener("touchend",w),q.removeEventListener("touchcancel",x),q.removeEventListener("wheel",W),F)H6(F),F.remove(),F=null}}function hA(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function pA(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function nA(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function rA(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=Gj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=Gj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function BF(_){let $=jF(hA(_)),j=qF(pA({..._,handleMessageResponse:$.handleMessageResponse})),G=lQ(nA(_));return KF(rA({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function dA(_,$){return Boolean(_||$!==null)}function oA(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function iA(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:q,refs:K,setters:L,services:Q,helpers:V}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,getAgentQueueState:Q.getAgentQueueState,setFollowupQueueItems:L.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:Q.getAgentContext,setContextUsage:L.setContextUsage,getAutoresearchStatus:Q.getAutoresearchStatus,setExtensionStatusPanels:L.setExtensionStatusPanels,setPendingExtensionPanelActions:L.setPendingExtensionPanelActions,setExtensionWorkingState:L.setExtensionWorkingState,getAgentStatus:Q.getAgentStatus,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:K.agentStatusRef,pendingRequestRef:K.pendingRequestRef,thoughtBufferRef:K.thoughtBufferRef,draftBufferRef:K.draftBufferRef,previewResyncPendingRef:K.previewResyncPendingRef,previewResyncGenerationRef:K.previewResyncGenerationRef,setAgentStatus:L.setAgentStatus,setAgentDraft:L.setAgentDraft,setAgentPlan:L.setAgentPlan,setAgentThought:L.setAgentThought,setPendingRequest:L.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:K.isAgentRunningRef,currentTurnIdRef:K.currentTurnIdRef,silentRecoveryRef:K.silentRecoveryRef,silenceRefreshMs:Q.silenceRefreshMs,lastAgentEventRef:K.lastAgentEventRef,lastSilenceNoticeRef:K.lastSilenceNoticeRef,silenceWarningMs:Q.silenceWarningMs,silenceFinalizeMs:Q.silenceFinalizeMs,isCompactionStatus:Q.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:Q.currentAppAssetVersion,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,tabStoreHasUnsaved:Q.tabStoreHasUnsaved,isAgentRunningRef:K.isAgentRunningRef,pendingRequestRef:K.pendingRequestRef,showIntentToast:$},setConnectionStatus:L.setConnectionStatus,hasConnectedOnceRef:K.hasConnectedOnceRef,getAgents:Q.getAgents,setAgents:L.setAgents,setUserProfile:L.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:V.readStoredNumber,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,setActiveChatAgents:L.setActiveChatAgents,setCurrentChatBranches:L.setCurrentChatBranches,setActiveModel:L.setActiveModel,setActiveThinkingLevel:L.setActiveThinkingLevel,setSupportsThinking:L.setSupportsThinking,setActiveModelUsage:L.setActiveModelUsage,setAgentModelsPayload:L.setAgentModelsPayload,setHasLoadedAgentModels:L.setHasLoadedAgentModels,agentsRef:K.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:Q.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:L.setFloatingWidget,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:K.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:L.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:q.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{L.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:Q.agentStatus,thoughtExpandedRef:K.thoughtExpandedRef,draftExpandedRef:K.draftExpandedRef,steerQueuedTurnIdRef:K.steerQueuedTurnIdRef}}function UF(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:q,setters:K,services:L,helpers:Q}=_,V=X.composeReferenceActions.showIntentToast,F=XV({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:L.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:K.setRemovingPostIds,deletePost:L.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),N=FQ(iA(_,V)),U=dA(L.isAgentTurnActive,L.agentStatus),z=BF({currentChatJid:$.currentChatJid,followupQueueItemsRef:q.followupQueueItemsRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,setFollowupQueueItems:K.setFollowupQueueItems,showIntentToast:V,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:L.steerAgentQueueItem,removeAgentQueueItem:L.removeAgentQueueItem,refreshQueueState:N.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:N.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:N.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:N.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:N.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,stopAutoresearch:L.stopAutoresearch,dismissAutoresearch:L.dismissAutoresearch,streamSidePrompt:L.streamSidePrompt,btwAbortRef:q.btwAbortRef,btwSession:G.btwSession,setBtwSession:K.setBtwSession,sendAgentMessage:L.sendAgentMessage,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,setFloatingWidget:K.setFloatingWidget,getAgentStatus:L.getAgentStatus,getAgentContext:L.getAgentContext,getAgentQueueState:L.getAgentQueueState,getAgentModels:L.getAgentModels,getActiveChatAgents:L.getActiveChatAgents,getChatBranches:L.getChatBranches,getTimeline:L.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:L.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,getFormLock:Q.getFormLock,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch,renameChatBranch:L.renameChatBranch,pruneChatBranch:L.pruneChatBranch,purgeChatBranch:L.purgeChatBranch,restoreChatBranch:L.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:L.forkChatBranch,setBranchLoaderState:K.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,openEditor:L.openEditor,tabStripActiveId:L.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:L.terminalTabPath,tabPaneOverrides:L.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:L.resolveTab,closeTab:L.closeTab,setDockVisible:Y.setDockVisible,editorOpen:L.editorOpen,shellElement:q.appShellRef.current,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef,sidebarWidthRef:q.sidebarWidthRef,readStoredNumber:Q.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return oA({agentStatusLifecycleBundle:N,actionBundle:z,timelineViewActions:F,isComposeBoxAgentActive:U})}w0();f_();w0();function HF(_){try{return _?.focus?.(),!0}catch($){return!1}}function E6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function Zj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function EF(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function DF(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function l$(_=typeof window<"u"?window:null){let $=_?.localStorage,j=E6($,"piclaw.notifications.deviceId");if(j)return j;let G=DF("device");return Zj($,"piclaw.notifications.deviceId",G),E6($,"piclaw.notifications.deviceId")||G}function D6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=E6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=DF("client");if(Zj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=E6($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function zF(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function Xj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():l$($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():D6($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),q=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),L=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:L,hasFocus:q,updatedAtMs:Y}}function OF(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return Zj(j,zF(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function WF(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return EF(j,zF(G,Z)),!0}function sA(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():l$($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,q=[],K=[];for(let L=0;L<j.length;L+=1){let Q=j.key(L);if(!Q||!Q.startsWith(Y))continue;let V=E6(j,Q);if(!V){K.push(Q);continue}try{let F=JSON.parse(V),N=Number(F?.updatedAtMs);if(!Number.isFinite(N)||Z-N>X){K.push(Q);continue}let U=typeof F?.chatJid==="string"?F.chatJid.trim():"",z=typeof F?.clientId==="string"?F.clientId.trim():"";if(!U||!z){K.push(Q);continue}q.push({deviceId:G,clientId:z,chatJid:U,visibilityState:F?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(F?.hasFocus),updatedAtMs:N})}catch{K.push(Q)}}return K.forEach((L)=>EF(j,L)),q.sort((L,Q)=>L.clientId.localeCompare(Q.clientId))}function JF(_={}){let $=Xj(_),j=$.chatJid;if(!j)return!1;let G=sA({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,q)=>Y.clientId.localeCompare(q.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function aA(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function tA(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=aA(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function eA(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function J8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function kF(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function _k(_){let $=await kF(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await d3(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:eA(Z)})}async function AF(_,$){if(!J8(_))return!1;let j=await _k(_);return await o3(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function $k(_,$){if(!J8(_))return!1;let G=await(await kF(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await i3(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function jk(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function Gk(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function MF(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=u(!1),q=u(null),K=u(null);g(()=>{let N=Y$("notificationsEnabled",!1);if(Y.current=N,G(N),typeof window<"u")q.current=l$(window),K.current=D6(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&N){Y.current=!1,G(!1),L_("notificationsEnabled","false");return}if(U==="granted"&&N&&typeof window<"u"&&J8(window))AF(window,q.current||l$(window)).catch((z)=>{console.warn("Failed to refresh stored web push subscription:",z)})},[]),g(()=>{Y.current=j},[j]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let N=q.current||l$(window),U=K.current||D6(window);q.current=N,K.current=U;let z=(A=!0,O="fetch")=>{let w=Xj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:N,clientId:U});if(A)OF(w,window);else WF({deviceId:N,clientId:U},window);let x={device_id:N,client_id:U,chat_jid:$,visibility_state:w.visibilityState,has_focus:w.hasFocus,active:A};if(!A&&O==="beacon"&&Gk(x,window))return;jk(x,{runtimeWindow:window,keepalive:!A||O==="keepalive"})},E=()=>z(!0),H=()=>z(!1,"beacon");z(!0);let k=setInterval(()=>z(!0),15000);return document.addEventListener("visibilitychange",E),window.addEventListener("focus",E),window.addEventListener("blur",E),window.addEventListener("pageshow",E),window.addEventListener("pagehide",H),window.addEventListener("beforeunload",H),()=>{clearInterval(k),document.removeEventListener("visibilitychange",E),window.removeEventListener("focus",E),window.removeEventListener("blur",E),window.removeEventListener("pageshow",E),window.removeEventListener("pagehide",H),window.removeEventListener("beforeunload",H),z(!1,"beacon")}},[$]);let L=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch(N){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",N),Promise.resolve("default")}},[]),Q=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let z=await L();if(X(z||"default"),z!=="granted"){Y.current=!1,G(!1),L_("notificationsEnabled","false");return}}let N=!Y.current;Y.current=N,G(N),L_("notificationsEnabled",String(N));let U=q.current||l$(window);if(q.current=U,J8(window))try{if(N)await AF(window,U);else await $k(window,U)}catch(z){if(console.warn("Failed to sync web push notifications:",z),N)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[L]),V=P((N,U,z={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let E=new Notification(tA(N,z?.sourceLabel||"",window),{body:U});return E.onclick=()=>{HF(window)},!0}catch(E){return console.debug("[use-notifications] Local notification creation failed.",E,{title:typeof N==="string"?N:null}),!1}},[]),F=P((N)=>{if(typeof window>"u"||typeof document>"u")return!1;return JF({chatJid:typeof N==="string"&&N.trim()?N.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:q.current||l$(window),clientId:K.current||D6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:Q,notify:V,shouldNotifyLocallyForChat:F}}function Zk(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function Xk(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function Yk(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function yF(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(()=>C1()),[q,K]=C(null),[L,Q]=C(null),[V,F]=C(!1),[N,U]=C("current"),[z,E]=C([]),[H,k]=C([]),[A,O]=C(null),[w,x]=C({}),[W,J]=C(null),[M,D]=C(null),[y,I]=C(!1),[R,S]=C(null),[v,c]=C(null),[h,_0]=C(!1),[b,t]=C([]),[s,K0]=C([]),[Z0,E0]=C(null),[B0,V0]=C(()=>new Map),[Q0,U0]=C(()=>new Set),[M0,r]=C(()=>({message:null,indicator:null,visible:!0})),[G0,O0]=C([]),[u0,R0]=C(!1),[r0,j_]=C(()=>dK()),[I0,i0]=C(null),[T0,s0]=C(null),f0=u(new Set),t0=q0(()=>Zk({activeChatAgents:b,currentChatBranches:s,currentChatJid:$}),[b,s,$]),K_=q0(()=>Yk($,t0),[t0,$]),H_=rK(N),[h0,S0]=C(()=>Xk(j)),P0=G0.length,a0=u(new Set),F_=u([]),D_=u(new Set),L0=u(0),A0=u({inFlight:!1,lastAttemptAt:0,turnId:null});a0.current=new Set(G0.map((D1)=>D1.row_id)),F_.current=G0;let{notificationsEnabled:b0,notificationPermission:N_,toggleNotifications:A_,notify:__,shouldNotifyLocallyForChat:E_}=MF({chatJid:$}),[B_,W_]=C(()=>new Set),[$0,W0]=C(()=>FL({allowLegacyFallback:!0,defaultValue:!1})),[k0,x0]=C({name:"You",avatar_url:null,avatar_background:null}),m0=u(null),e=u(!1),p=u(!1),a=u(!1),j0=u(null),Y0=u($),D0=u(new Map),v0=u($),d0=u(0),J0=u(0),C0=u({}),V_=u({name:null,avatar_url:null}),q_=u({currentHashtag:null,searchQuery:null,searchOpen:!1}),G_=u(null),U_=u(null),M_=u(0),Z_=u(0),d=u(0),z0=u(null),c0=u(null),n0=u(null),C_=u(null),O_=u(0),h_=u({title:null,avatarBase:null}),o1=u(null),p_=u(!1),[i1,Q1]=C(!1),Y_=u(0),[u_,j1]=C(!1),[T_,b_]=C(""),r_=q0(()=>b2(T_,t0?.agent_name||""),[t0?.agent_name,T_]),F1=u(null);return{connectionStatus:G,setConnectionStatus:Z,isWebAppMode:X,setIsWebAppMode:Y,currentHashtag:q,setCurrentHashtag:K,searchQuery:L,setSearchQuery:Q,searchOpen:V,setSearchOpen:F,searchScope:N,setSearchScope:U,fileRefs:z,setFileRefs:E,messageRefs:H,setMessageRefs:k,intentToast:A,setIntentToast:O,agents:w,setAgents:x,activeModel:W,setActiveModel:J,activeThinkingLevel:M,setActiveThinkingLevel:D,supportsThinking:y,setSupportsThinking:I,activeModelUsage:R,setActiveModelUsage:S,agentModelsPayload:v,setAgentModelsPayload:c,hasLoadedAgentModels:h,setHasLoadedAgentModels:_0,activeChatAgents:b,setActiveChatAgents:t,currentChatBranches:s,setCurrentChatBranches:K0,contextUsage:Z0,setContextUsage:E0,extensionStatusPanels:B0,setExtensionStatusPanels:V0,pendingExtensionPanelActions:Q0,setPendingExtensionPanelActions:U0,extensionWorkingState:M0,setExtensionWorkingState:r,followupQueueItems:G0,setFollowupQueueItems:O0,isAgentTurnActive:u0,setIsAgentTurnActive:R0,btwSession:r0,setBtwSession:j_,floatingWidget:I0,setFloatingWidget:i0,attachmentPreview:T0,setAttachmentPreview:s0,dismissedLiveWidgetKeysRef:f0,currentBranchRecord:t0,currentRootChatJid:K_,activeSearchScopeLabel:H_,branchLoaderState:h0,setBranchLoaderState:S0,followupQueueCount:P0,followupQueueRowIdsRef:a0,followupQueueItemsRef:F_,dismissedQueueRowIdsRef:D_,queueRefreshGenRef:L0,silentRecoveryRef:A0,notificationsEnabled:b0,notificationPermission:N_,handleToggleNotifications:A_,notify:__,shouldNotifyLocallyForChat:E_,removingPostIds:B_,setRemovingPostIds:W_,workspaceOpen:$0,setWorkspaceOpen:W0,userProfile:k0,setUserProfile:x0,staleUiVersionRef:m0,staleUiReloadScheduledRef:e,hasConnectedOnceRef:p,wasAgentActiveRef:a,agentStatusRef:j0,activeChatJidRef:Y0,chatPaneStateByChatRef:D0,paneStateOwnerChatJidRef:v0,draftThrottleRef:d0,thoughtThrottleRef:J0,agentsRef:C0,userProfileRef:V_,viewStateRef:q_,timelineRef:G_,appShellRef:U_,sidebarWidthRef:M_,editorWidthRef:Z_,dockHeightRef:d,lastNotifiedIdRef:z0,lastAgentResponseRef:c0,btwAbortRef:n0,lastActivityTimerRef:C_,lastActivityTokenRef:O_,brandingRef:h_,intentToastTimerRef:o1,renameBranchInFlightRef:p_,isRenamingBranch:i1,setIsRenamingBranch:Q1,renameBranchLockUntilRef:Y_,isRenameBranchFormOpen:u_,setIsRenameBranchFormOpen:j1,renameBranchNameDraft:T_,setRenameBranchNameDraft:b_,renameBranchDraftState:r_,renameBranchNameInputRef:F1}}w0();w0();function qk(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,q]of _.entries()){let K=Y;if(G==="dir"){if(Y===$)K=j,Z=!0;else if(Y.startsWith(`${$}/`))K=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)K=j,Z=!0;X.set(K,q)}return Z?X:_}function wF(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let q=Y;if(G==="dir"){if(Y===$)q=j,Z=!0;else if(Y.startsWith(`${$}/`))q=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)q=j,Z=!0;X.add(q)}return Z?X:_}function TF({onTabClosed:_}={}){let $=u(_);$.current=_;let[j,G]=C(()=>e0.getTabs()),[Z,X]=C(()=>e0.getActiveId()),[Y,q]=C(()=>e0.getTabs().length>0);g(()=>{return e0.onChange((I,R)=>{G(I),X(R),q(I.length>0)})},[]);let[K,L]=C(()=>new Set),[Q,V]=C(()=>new Set),[F,N]=C(()=>new Map),U=P((I)=>{L((R)=>{let S=new Set(R);if(S.has(I))S.delete(I);else S.add(I);return S})},[]),z=P((I)=>{L((R)=>{if(!R.has(I))return R;let S=new Set(R);return S.delete(I),S})},[]),E=P((I)=>{V((R)=>{if(!R.has(I))return R;let S=new Set(R);return S.delete(I),S})},[]),H=P((I)=>{N((R)=>{if(!R.has(I))return R;let S=new Map(R);return S.delete(I),S})},[]),k=P((I,R={})=>{if(!I)return;let S=typeof R?.paneOverrideId==="string"&&R.paneOverrideId.trim()?R.paneOverrideId.trim():null,v={path:I,mode:"edit"};try{if(!(S?X_.get(S):X_.resolve(v))){if(!X_.get("editor")){console.warn(`[openEditor] No pane handler for: ${I}`);return}}}catch(b){console.warn(`[openEditor] paneRegistry.resolve() error for "${I}":`,b)}let c=typeof R?.label==="string"&&R.label.trim()?R.label.trim():void 0,h=R?.viewState&&typeof R.viewState==="object"?R.viewState:null,_0=R?.diffMode==="saved"?"saved":null;if(e0.open(I,c),h)e0.saveViewState(I,h);if(S)N((b)=>{if(b.get(I)===S)return b;let t=new Map(b);return t.set(I,S),t});if(_0==="saved")V((b)=>{if(b.has(I))return b;let t=new Set(b);return t.add(I),t})},[]),A=P(()=>{let I=e0.getActiveId();if(I){let R=e0.get(I);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}e0.close(I),z(I),E(I),H(I),$.current?.(I)}},[E,H,z]),O=P((I)=>{let R=e0.get(I);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}e0.close(I),z(I),E(I),H(I),$.current?.(I)},[E,H,z]),w=P((I)=>{e0.activate(I)},[]),x=P((I)=>{let R=e0.getTabs().filter((c)=>c.id!==I&&!c.pinned),S=R.filter((c)=>c.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let v=R.map((c)=>c.id);e0.closeOthers(I),v.forEach((c)=>{z(c),E(c),H(c),$.current?.(c)})},[E,H,z]),W=P(()=>{let I=e0.getTabs().filter((v)=>!v.pinned),R=I.filter((v)=>v.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let S=I.map((v)=>v.id);e0.closeAll(),S.forEach((v)=>{z(v),E(v),H(v),$.current?.(v)})},[E,H,z]),J=P((I)=>{e0.togglePin(I)},[]),M=P((I)=>{if(!I)return;V((R)=>{let S=new Set(R);if(S.has(I))S.delete(I);else S.add(I);return S}),e0.activate(I)},[]),D=P((I)=>{if(!I)return;N((R)=>{if(R.get(I)==="editor")return R;let S=new Map(R);return S.set(I,"editor"),S}),e0.activate(I)},[]),y=P(()=>{let I=e0.getActiveId();if(I)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:I}}))},[]);return g(()=>{let I=(R)=>{let{oldPath:S,newPath:v,type:c}=R.detail||{};if(!S||!v)return;if(c==="dir"){for(let h of e0.getTabs())if(h.path===S||h.path.startsWith(`${S}/`)){let _0=`${v}${h.path.slice(S.length)}`;e0.rename(h.id,_0)}}else e0.rename(S,v);L((h)=>wF(h,S,v,c)),V((h)=>wF(h,S,v,c)),N((h)=>qk(h,S,v,c))};return window.addEventListener("workspace-file-renamed",I),()=>window.removeEventListener("workspace-file-renamed",I)},[]),g(()=>{let I=(R)=>{if(e0.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",I),()=>window.removeEventListener("beforeunload",I)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:K,diffTabs:Q,tabPaneOverrides:F,openEditor:k,closeEditor:A,handleTabClose:O,handleTabActivate:w,handleTabCloseOthers:x,handleTabCloseAll:W,handleTabTogglePin:J,handleTabTogglePreview:U,handleTabToggleDiff:M,handleTabEditSource:D,revealInExplorer:y}}w0();function r1(_){return typeof _==="string"&&_.trim()?_.trim():null}function Kk(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function z4(_="pane"){let $=Kk();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function xF(_){let $=r1(_?.paneInstanceId),j=r1(_?.paneWindowId);if(!$||!j)return{};let G=r1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function IF(_={}){let $=new URLSearchParams(_.search||"");return{panePath:r1($.get("pane_path"))||r1(_.panePath),paneLabel:r1($.get("pane_label"))||r1(_.paneLabel),paneInstanceId:r1($.get("pane_instance_id")),paneWindowId:r1($.get("pane_window_id")),paneSourceWindowId:r1($.get("pane_source_window_id"))}}function O4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function d1(_){return typeof _==="string"&&_.trim()?_.trim():null}function CF(_){let $=d1(_?.panePath),j=d1(_?.paneInstanceId),G=d1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=d1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:d1(_?.label),sourceWindowId:d1(_?.sourceWindowId)}}function Yj(_,$){if(!_||!$)return!1;return d1($.panePath)===_.panePath&&d1($.paneInstanceId)===_.paneInstanceId&&d1($.paneWindowId)===_.ownerWindowId}function qj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:d1($)||new Date().toISOString(),label:_.label||null}}function A8(_){try{return _?.close?.(),!0}catch($){return!1}}function Kj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function Lk(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function PF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var Vk=400;function Qk(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function Fk(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return Qk(j).some((Z)=>Z==="."||Z===_)})}async function RF(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function Nk(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function y8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function fF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function k8(_){if(!fF(_))return!1;return y8(_?.runtimeNavigator)}function M8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return y8(_?.runtimeNavigator)}function N5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function Bk(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",q=_?.allowLiveTransfer!==!1,K=_?.instance||null,L=typeof K?.exportHostTransferState==="function"?K.exportHostTransferState():null,Q=$===Y,V=L&&!Q?O8({path:$,payload:L},j,G):null,F=null;if($!==Y){let N=L&&typeof L==="object"?typeof L.mtime==="string"?L.mtime:L.mtime===null?null:void 0:void 0,U=typeof K?.isDirty==="function"?K.isDirty():!1,z=typeof K?.getContent==="function"?K.getContent():void 0;F=n6({path:$,content:U?z:void 0,mtime:N,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...F?.editor_popout?{editorPopoutToken:F.editor_popout}:{},...V?.pane_transfer?{paneTransferToken:V.pane_transfer}:{},...Q&&L?{paneTransferPayload:L}:{},...q?{}:{allowLiveTransfer:!1}}}function Uk(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",q=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,K=X?_3(X,j,G):null,L=q?{panePath:$,path:$,payload:q,capturedAt:G}:Y?_j(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:K?.path===$?K:null,hostTransfer:L?.path===$?L:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function SF(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:q,previewTabs:K,diffTabs:L,tabPaneOverrides:Q,terminalTabPath:V,vncTabPrefix:F,openEditor:N,closeEditor:U,getWorkspaceFile:z}=_,E=u(null),H=u(null),k=u(null),A=u(null),O=u((()=>{if(!$)return null;let e=f4("editor_popout");return _3(e)})()),w=u((()=>{if(!$)return null;return EQ()})()),x=u(IF({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),W=u(x.current.paneWindowId||z4("pane-window")),J=u(new Map),M=u(new Map),D=u(new Map),y=u(new Map),I=u(!1),R=u(new Map),S=u(z4("pane-instance")),v=u(new Map),c=u(new Map),h=u(new Set),[_0,b]=C(()=>new Map),t=u(_0);t.current=_0;let[s,K0]=C(()=>new Map),Z0=u(s);Z0.current=s;let[E0,B0]=C(null),V0=u(E0);V0.current=E0;let[Q0,U0]=C(null),M0=u(Q0);M0.current=Q0;let r=X_.getDockPanes().length>0,[G0,O0]=C(!1),u0=P(()=>O0((e)=>!e),[]),R0=P(()=>{N(V,{label:"Terminal"})},[N,V]),r0=P(()=>{N(F,{label:"VNC"})},[N,F]),j_=P((e)=>{let p=typeof e==="string"?e.trim():"";if(!p)return z4("pane-instance");if(p===V&&!e0.get(p)){if(!S.current)S.current=z4("pane-instance");return S.current}let j0=R.current.get(p);if(j0)return j0;let Y0=z4("pane-instance");return R.current.set(p,Y0),Y0},[V]),I0=q0(()=>!$&&q?s.get(q)||null:null,[s,$,q]),i0=!$?Q0:null,T0=P((e)=>{if(!e)return;DQ(e),c.current.delete(e),h.current.delete(e),B0((p)=>p?.panePath===e?null:p),b((p)=>{if(!p.has(e))return p;let a=new Map(p);return a.delete(e),a})},[]),s0=P((e)=>{if(!e)return;v.current.delete(e),c.current.delete(e),h.current.delete(e),T0(e),U0((p)=>p?.panePath===e?null:p),K0((p)=>{if(!p.has(e))return p;let a=new Map(p);return a.delete(e),a})},[T0]),f0=P((e,p={})=>{let a=typeof e==="string"?e.trim():"";if(!a)return!1;if(M8({panePath:a,terminalTabPath:V}))return!1;let j0=v.current.get(a),Y0=Boolean(Z0.current.get(a)),D0=Boolean(M0.current?.panePath===a);if(s0(a),a===V&&D0&&!Y0)O0(!0);else if(a===V&&Y0)N(a,{label:"Terminal"});else if(e0.get(a))e0.activate(a);else N(a);if(p.closeDetachedWindow!==!1&&j0&&typeof j0.close==="function")A8(j0);return!0},[s0,N,O0,V]),t0=P(()=>{if($)return;if(!Nk())return;let e=Date.now();for(let[p,a]of c.current.entries()){if(a>e)continue;c.current.delete(p),f0(p,{closeDetachedWindow:!1})}},[$,f0]),K_=P((e,p={})=>{let a=typeof e==="string"?e.trim():"";if(!a)return!1;let j0={panePath:a,terminalTabPath:V,allowLiveTransfer:p.allowLiveTransfer,reason:p.reason};if(k8(j0))return v.current.delete(a),c.current.delete(a),h.current.add(a),!0;if(!fF(j0))return f0(a,{closeDetachedWindow:!1});return c.current.set(a,Date.now()+Vk),t0(),!0},[t0,f0,V]),H_=P((e)=>{let p=typeof e==="string"?e.trim():"";if(!p)return null;let a=j_(p),j0=z4("pane-window");return{paneInstanceId:a,paneWindowId:j0,params:xF({paneInstanceId:a,paneWindowId:j0,paneSourceWindowId:W.current})}},[j_]),h0=P((e,p,a,j0)=>{let Y0=typeof e==="string"?e.trim():"";if(!Y0||!j0)return;let D0=CF({panePath:Y0,paneInstanceId:j0.pane_instance_id,ownerWindowId:j0.pane_window_id,sourceWindowId:j0.pane_source_window_id,label:p});if(!D0)return;if(v.current.set(Y0,a||null),Y0===V&&!e0.get(Y0)){B0(D0);return}b((d0)=>{let J0=new Map(d0);return J0.set(Y0,D0),J0})},[V]),S0=P((e,p)=>{let a=typeof e?.panePath==="string"?e.panePath.trim():"";if(!a)return!1;let j0=v.current.get(a);if(j0&&p&&j0!==p)return!1;let Y0=t.current.get(a)||null;if(Yj(Y0,e)){let C0=H.current,V_=N5({panePath:a,terminalTabPath:V});if(V_&&C0&&typeof C0.moveHost==="function")F5({panePath:a,paneInstanceId:Y0.paneInstanceId,paneWindowId:Y0.ownerWindowId,instance:C0,releaseSourceHost:()=>{if(H.current===C0)H.current=null}});if(V_&&H.current)H.current=null;let q_=qj(Y0);if(!q_)return!1;return b((G_)=>{if(!G_.has(a))return G_;let U_=new Map(G_);return U_.delete(a),U_}),K0((G_)=>{let U_=new Map(G_);return U_.set(a,q_),U_}),PF({panePath:a,terminalTabPath:V,closeTab:(G_)=>e0.close(G_),sourceHost:"tab"}),!0}if(a!==V)return!1;let D0=V0.current,v0=A.current,d0=N5({panePath:a,terminalTabPath:V});if(d0&&D0&&v0&&typeof v0.moveHost==="function")F5({panePath:a,paneInstanceId:D0.paneInstanceId,paneWindowId:D0.ownerWindowId,instance:v0,releaseSourceHost:()=>{if(A.current===v0)A.current=null}});if(d0&&A.current)A.current=null;if(!Yj(D0,e))return!1;let J0=qj(D0);if(!J0)return!1;return B0(null),U0(J0),PF({panePath:a,terminalTabPath:V,setDockVisible:O0,sourceHost:"dock"}),!0},[O0,V]),P0=P((e=!1,p=!0)=>{if(!$)return!1;let a=x.current;if(!O4(a))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(I.current){if(e)A8(window);return!0}let j0=a.panePath||j,Y0=j0===V?A.current||H.current:H.current,D0=p&&N5({panePath:j0,terminalTabPath:V}),v0=Bk({panePath:j0,paneInstanceId:a.paneInstanceId,paneOverrideId:j0===V?null:typeof Q?.get==="function"?Q.get(j0)||null:null,terminalTabPath:V,viewState:j0===V?null:e0.getViewState(j0)||null,allowLiveTransfer:D0,instance:Y0});if(!v0)return!1;if(D0&&v0.paneTransferToken&&typeof Y0?.moveHost==="function"){if(A.current===Y0)A.current=null;if(H.current===Y0)H.current=null}if(!Kj(window.opener,v0,window.location.origin))return!1;if(I.current=!0,e)A8(window);return!0},[$,j,Q,V]),a0=P(()=>P0(!0,!0),[P0]);g(()=>{if(!$||typeof window>"u")return;let e=()=>{let p=x.current,a=O4(p)?p.panePath||j||"":"";if(k8({panePath:a,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"}))return;P0(!1,!1)};return window.addEventListener("pagehide",e),window.addEventListener("beforeunload",e),()=>{window.removeEventListener("pagehide",e),window.removeEventListener("beforeunload",e)}},[$,P0]);let F_=q0(()=>iK(Y,q),[q,Y]),D_=q0(()=>sK(Q,q),[Q,q]),L0=q0(()=>R9(G,F_,j),[F_,G,j]),A0=q0(()=>q&&L.has(q)?"saved":null,[L,q]),b0=u(A0);g(()=>{b0.current=A0},[A0]);let N_=q0(()=>tK(Y,K,L,q),[L,K,q,Y]),A_=q0(()=>eK(j,F),[j,F]),__=q0(()=>_L(j,V,N_,A_),[A_,N_,j,V]),E_=$L($,Z,X,r,G0),[B_,W_]=C(!1),$0=u(!1),W0=P(()=>{if(!X||Z)return;if($0.current=G0,G0)O0(!1);W_(!0)},[Z,G0,X]),k0=P(()=>{if(!B_)return;if(W_(!1),$0.current)O0(!0),$0.current=!1},[B_]),x0=P(()=>{if(B_){k0();return}W0()},[W0,k0,B_]);g(()=>{if(B_&&!X)k0()},[X,k0,B_]),g(()=>{let e=new Set(Y.map((j0)=>j0.id)),p=new Set(t.current.keys()),a=new Set(Z0.current.keys());for(let j0 of Array.from(R.current.keys()))if(!Lk({panePath:j0,openTabIds:e,pendingDetachedTabPaths:p,detachedTabPaths:a,terminalTabPath:V,hasPendingDetachedDockPane:Boolean(V0.current),hasDetachedDockPane:Boolean(M0.current)}))R.current.delete(j0)},[Y,V]),g(()=>{if($||typeof window>"u")return;let e=(p)=>{if(p.origin!==window.location.origin)return;let a=p.data;if(!a||typeof a!=="object")return;if(a.type==="piclaw-pane-detach-claim"){S0({panePath:a.panePath,paneInstanceId:a.paneInstanceId,paneWindowId:a.paneWindowId},p.source);return}if(a.type!=="piclaw-pane-reattach-request")return;let j0=Uk({payload:a}),Y0=j0?.panePath||"";if(!Y0)return;if(j0?.editorTransfer)J.current.set(Y0,j0.editorTransfer);if(j0?.hostTransfer)if(M.current.set(Y0,j0.hostTransfer),j0.allowLiveTransfer&&p.source)D.current.set(Y0,p.source);else D.current.delete(Y0);let D0=Z0.current.get(Y0)||null,v0=Y0===V?M0.current:null,d0=N5({panePath:Y0,terminalTabPath:V}),J0=D0||v0;if(!J0)return;if(j0?.paneInstanceId&&j0.paneInstanceId!==J0.paneInstanceId)return;if(M8({panePath:Y0,terminalTabPath:V})){D.current.delete(Y0),y.current.delete(Y0),M.current.delete(Y0),J.current.delete(Y0);return}if(j0?.hostTransfer&&j0.allowLiveTransfer&&d0)y.current.set(Y0,{panePath:Y0,paneInstanceId:J0.paneInstanceId,paneWindowId:J0.ownerWindowId});else y.current.delete(Y0);if(k8({panePath:Y0,terminalTabPath:V,allowLiveTransfer:j0?.allowLiveTransfer,reason:"message"})){D.current.delete(Y0),v.current.delete(Y0),c.current.delete(Y0),h.current.add(Y0);return}K_(Y0,{allowLiveTransfer:j0?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[S0,$,K_,V]),g(()=>{if($||typeof window>"u"||typeof document>"u")return;let e=()=>t0();window.addEventListener("focus",e),window.addEventListener("pageshow",e),document.addEventListener("visibilitychange",e);let p=setInterval(()=>{t0();for(let[a,j0]of v.current.entries()){if(!j0||!j0.closed)continue;if(a===V?Boolean(V0.current):t.current.has(a)){v.current.delete(a),T0(a);continue}if(M8({panePath:a,terminalTabPath:V})){s0(a);continue}if(k8({panePath:a,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"})){v.current.delete(a),c.current.delete(a),h.current.add(a);continue}if(h.current.has(a)){v.current.delete(a);continue}K_(a,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",e),window.removeEventListener("pageshow",e),document.removeEventListener("visibilitychange",e),clearInterval(p)}},[s0,T0,t0,$,K_,V]),g(()=>{if(!$||!j)return;if(e0.getActiveId()===j)return;let p=O.current?.path===j?O.current:null,a=w.current?.path===j?w.current:null;N(j,{...G?{label:G}:{},...p?.paneOverrideId?{paneOverrideId:p.paneOverrideId}:{},...p?.viewState?{viewState:p.viewState}:{},...a?.payload?.diffMode?{diffMode:a.payload.diffMode}:{}})},[N,G,$,j]),g(()=>{if(!$)return;let e=x.current;if(!O4(e))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;Kj(window.opener,{type:"piclaw-pane-detach-claim",panePath:e.panePath,paneInstanceId:e.paneInstanceId,paneWindowId:e.paneWindowId},window.location.origin)},[$]),g(()=>{let e=E.current;if(!e)return;if(H.current)H.current.dispose(),H.current=null;let p=q;if(!p)return;if(!$&&I0?.panePath===p){e.innerHTML="";return}let a=O.current?.path===p?O.current:null,j0=J.current.get(p)||null,Y0=a||j0,D0=w.current?.path===p?w.current:null,v0=M.current.get(p)||null,d0=D0||v0,J0=D_||Y0?.paneOverrideId||null,C0=d0?.payload?{...d0.payload}:null;if(b0.current)C0={...C0||{},diffMode:b0.current};else if(C0&&"diffMode"in C0)delete C0.diffMode;let V_={path:p,mode:"edit",...Y0?.content!==void 0?{content:Y0.content}:{},...Y0?.mtime!==void 0?{mtime:Y0.mtime}:{},...C0?{transferState:C0}:{}},q_=(J0?X_.get(J0):null)||X_.resolve(V_)||X_.get("editor");if(!q_){e.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let G_=null,U_=!1,M_=(Z_)=>{G_=Z_,H.current=Z_,Z_.onDirtyChange?.((c0)=>{e0.setDirty(p,c0)}),Z_.onSaveRequest?.(()=>{}),Z_.onClose?.(()=>{U()});let d=e0.getViewState(p);if(d&&typeof Z_.restoreViewState==="function")requestAnimationFrame(()=>Z_.restoreViewState(d));if(typeof Z_.onViewStateChange==="function")Z_.onViewStateChange((c0)=>{e0.saveViewState(p,c0)});let z0=x.current;if($&&O4(z0)&&typeof Z_?.moveHost==="function"&&N5({panePath:p,terminalTabPath:V}))F5({panePath:p,paneInstanceId:z0.paneInstanceId||"",paneWindowId:z0.paneWindowId||"",instance:Z_,releaseSourceHost:()=>{if(A.current===Z_)A.current=null;if(H.current===Z_)H.current=null}});RF(Z_,{path:p,hostMode:$?"popout":"main",transferState:C0}).catch((c0)=>{console.warn("[pane-attach] afterAttachToHost failed:",c0)}),requestAnimationFrame(()=>Z_.focus?.())};return(async()=>{let Z_=x.current,d=$&&O4(Z_)&&Z_.panePath===p?{panePath:p,paneInstanceId:Z_.paneInstanceId||"",paneWindowId:Z_.paneWindowId||""}:null,z0=y.current.get(p)||null,c0=N5({panePath:p,terminalTabPath:V})?d||z0:null,n0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:D.current.get(p)||null,C_=$?"popout":"main";if(d0&&c0&&n0)try{let O_=await zQ(n0,c0,e,{path:p,hostMode:C_,transferState:C0});if(!U_&&O_){if(M_(O_),a)O.current=null;if(j0)J.current.delete(p);if(D0)w.current=null;if(v0)M.current.delete(p);D.current.delete(p),y.current.delete(p);return}}catch(O_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",O_)}if(U_)return;if(M_(q_.mount(e,V_)),a)O.current=null;if(j0)J.current.delete(p);if(D0)w.current=null;if(v0)M.current.delete(p);D.current.delete(p),y.current.delete(p)})(),()=>{if(U_=!0,H.current===G_)G_.dispose(),H.current=null}},[I0,D_,U,$,q]),g(()=>{let e=q,p=H.current;if(!e||typeof p?.setDiffMode!=="function")return;p.setDiffMode(A0)},[A0,q]);let m0=P(async(e)=>{let p=typeof q==="string"?q.trim():"",a=H.current;if(!p||!a?.setContent)return;if(typeof a.isDirty==="function"&&a.isDirty())return;if(!Fk(p,e))return;try{let j0=await z(p,1e6,"edit"),Y0=typeof j0?.text==="string"?j0.text:"",D0=typeof j0?.mtime==="string"&&j0.mtime.trim()?j0.mtime.trim():new Date().toISOString();a.setContent(Y0,D0)}catch(j0){console.warn("[workspace_update] Failed to refresh active pane:",j0)}},[z,q]);return g(()=>{let e=k.current;if(A.current)A.current.dispose(),A.current=null;if(!e||!r||!G0)return;if(!$&&i0?.panePath===V){e.innerHTML="";return}let p=X_.getDockPanes()[0];if(!p){e.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let a=w.current?.path===V?w.current:null,j0=M.current.get(V)||null,Y0=a||j0,D0=p.mount(e,{mode:"view",...Y0?.payload?{transferState:Y0.payload}:{}});if(A.current=D0,RF(D0,{path:V,hostMode:$?"popout":"main",transferState:Y0?.payload||null}).catch((v0)=>{console.warn("[pane-attach] afterAttachToHost failed:",v0)}),a)w.current=null;if(j0)M.current.delete(V);return requestAnimationFrame(()=>D0.focus?.()),()=>{if(A.current===D0)D0.dispose(),A.current=null}},[i0,G0,r,$,V]),{editorContainerRef:E,editorInstanceRef:H,dockContainerRef:k,dockInstanceRef:A,hasDockPanes:r,dockVisible:G0,setDockVisible:O0,toggleDock:u0,openTerminalTab:R0,openVncTab:r0,panePopoutTitle:L0,panePopoutHasMenuActions:N_,hidePanePopoutControls:__,showEditorPaneContainer:E_,zenMode:B_,exitZenMode:k0,toggleZenMode:x0,refreshActiveEditorFromWorkspace:m0,detachedTabs:s,activeDetachedTab:I0,detachedDockPane:i0,buildPaneDetachTransfer:H_,registerDetachedPaneWindow:h0,reattachPane:f0,requestPanePopoutReattach:a0,canReattachPanePopout:$&&O4(x.current)&&!M8({panePath:j||"",terminalTabPath:V})}}function Hk(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function gF(_){let $=u(null),j=TF({onTabClosed:(Z)=>$.current?.(Z)}),G=SF({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Hk({removeFileRefRef:$,editorState:j,paneRuntime:G})}f_();var T8=1280,x8=820;function w8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function z6(_){return typeof _==="string"&&_.trim()?_.trim():null}function Ek(_){let $=z6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function Dk(_){if(_.isMobile)return!1;let $=w8(_.windowWidth),j=w8(_.windowHeight);if($===null||j===null)return!1;if($<T8||j<x8)return!1;let G=w8(_.screenWidth),Z=w8(_.screenHeight);if(G!==null&&G<T8)return!1;if(Z!==null&&Z<x8)return!1;return!0}function zk(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function Ok(_){if(!_||_.kind!=="custom")return null;let $=z6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=z6(j.path);if(!Ek(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:z6(_.chat_jid),path:G,label:z6(j.label),target:Z}}async function Wk(_,$,j){await o4(_,$,j||void 0)}async function uF(_,$){let j=Ok(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||Wk,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:T8,height:x8};if(j.target==="popout"){if(!Dk({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:zk(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${T8}×${x8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let K=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:K,opened:K,reason:K?void 0:"popout_failed",detail:K?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var Lj="piclaw:oobe:provider-missing:dismissed";function Jk(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function Ak(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function bF(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=Jk(G),Y=X>0,q=Ak(G),K=Y||q;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};if(K)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q}}var kk=pK();await XL();var{searchPosts:Mk,deletePost:yk,getAgents:wk,getAgentThought:vF,setAgentThoughtVisibility:mF,getAgentStatus:Tk,getAgentContext:xk,getAutoresearchStatus:Ik,stopAutoresearch:Ck,dismissAutoresearch:Pk,getAgentModels:Rk,getActiveChatAgents:fk,getChatBranches:Sk,renameChatBranch:gk,pruneChatBranch:uk,purgeChatBranch:bk,restoreChatBranch:vk,getAgentQueueState:mk,steerAgentQueueItem:ck,removeAgentQueueItem:lk,streamSidePrompt:hk,getWorkspaceFile:pk,getThread:nk,getTimeline:rk,sendAgentMessage:dk,forkChatBranch:ok}=YL;function ik({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:q,branchLoaderSourceChatJid:K}=q0(()=>oK(_),[_]),L=yF({currentChatJid:j,branchLoaderMode:q}),[Q,V]=C(()=>Y$(Lj,!1)),[F,N]=C(null),U=P((T0)=>{let s0=typeof T0==="string"?T0:"";if(!s0.trim())return;N({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:s0})},[]),{agentStatus:z,setAgentStatus:E,agentDraft:H,setAgentDraft:k,agentPlan:A,setAgentPlan:O,agentThought:w,setAgentThought:x,pendingRequest:W,setPendingRequest:J,currentTurnId:M,setCurrentTurnId:D,steerQueuedTurnId:y,setSteerQueuedTurnId:I,lastAgentEventRef:R,lastSilenceNoticeRef:S,isAgentRunningRef:v,draftBufferRef:c,thoughtBufferRef:h,previewResyncPendingRef:_0,previewResyncGenerationRef:b,pendingRequestRef:t,stalledPostIdRef:s,currentTurnIdRef:K0,steerQueuedTurnIdRef:Z0,thoughtExpandedRef:E0,draftExpandedRef:B0}=iZ(),V0=gF({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:g4,vncTabPrefix:h1,getWorkspaceFile:pk}),Q0=ZV({timelineRef:L.timelineRef,viewStateRef:L.viewStateRef,followupQueueRowIdsRef:L.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,followupQueueItems:L.followupQueueItems,onIdentity:P((T0)=>{if(!T0)return;let{assistant_name:s0,assistant_avatar_url:f0}=T0;if(s0||f0)L.setAgents((S0)=>{let P0=S0.default||{id:"default"},a0=s0&&!P0.name,F_=f0&&!P0.avatar_url;if(!a0&&!F_)return S0;return{...S0,["default"]:{...P0,...a0?{name:s0}:{},...F_?{avatar_url:f0}:{}}}});let{user_name:t0,user_avatar_url:K_,user_avatar_background:H_}=T0;if(t0||K_||H_)L.setUserProfile((h0)=>{let S0=t0&&!h0.name,P0=K_&&!h0.avatar_url,a0=H_&&!h0.avatar_background;if(!S0&&!P0&&!a0)return h0;return{...h0,...S0?{name:t0}:{},...P0?{avatar_url:K_}:{},...a0?{avatar_background:H_}:{}}})},[L.setAgents,L.setUserProfile])}),U0=pL({environment:{isRenameBranchFormOpen:L.isRenameBranchFormOpen,renameBranchNameInputRef:L.renameBranchNameInputRef,appShellRef:L.appShellRef,setIsWebAppMode:L.setIsWebAppMode,workspaceOpen:L.workspaceOpen,setWorkspaceOpen:L.setWorkspaceOpen,btwSession:L.btwSession,agents:L.agents,agentsRef:L.agentsRef,currentChatJid:j,activeChatJidRef:L.activeChatJidRef,userProfile:L.userProfile,userProfileRef:L.userProfileRef,brandingRef:L.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:L.setIntentToast,intentToastTimerRef:L.intentToastTimerRef,editorOpen:V0.editorState.editorOpen,openEditor:V0.editorState.openEditor,resolvePane:(T0)=>X_.resolve(T0),tabStripActiveId:V0.editorState.tabStripActiveId,setFileRefs:L.setFileRefs,setMessageRefs:L.setMessageRefs,currentChatJid:j,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,searchOpen:L.searchOpen,setCurrentHashtag:L.setCurrentHashtag,setSearchQuery:L.setSearchQuery,setSearchOpen:L.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:nk,setPosts:Q0.setPosts},agentActivity:{lastActivityTtlMs:qX,lastActivityTimerRef:L.lastActivityTimerRef,lastActivityTokenRef:L.lastActivityTokenRef,lastAgentEventRef:R,lastSilenceNoticeRef:S,isAgentRunningRef:v,setIsAgentTurnActive:L.setIsAgentTurnActive,setAgentStatus:E,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:t,lastAgentResponseRef:L.lastAgentResponseRef,currentTurnIdRef:K0,steerQueuedTurnIdRef:Z0,agentStatusRef:L.agentStatusRef,silentRecoveryRef:L.silentRecoveryRef,thoughtExpandedRef:E0,draftExpandedRef:B0,setCurrentTurnId:D,setSteerQueuedTurnId:I,currentTurnIdRefForPanel:K0,setAgentThoughtVisibility:mF,getAgentThought:vF,setAgentThought:x,setAgentDraft:k},chatPaneRuntime:{isAgentTurnActive:L.isAgentTurnActive,steerQueuedTurnId:y,currentTurnId:M,steerQueuedTurnIdRef:Z0,setSteerQueuedTurnId:I,agentStatus:z,agentDraft:H,agentPlan:A,agentThought:w,pendingRequest:W,pendingRequestRef:t,followupQueueItems:L.followupQueueItems,activeModel:L.activeModel,activeThinkingLevel:L.activeThinkingLevel,supportsThinking:L.supportsThinking,activeModelUsage:L.activeModelUsage,contextUsage:L.contextUsage,isAgentRunningRef:v,wasAgentActiveRef:L.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:h,lastAgentEventRef:R,lastSilenceNoticeRef:S,lastAgentResponseRef:L.lastAgentResponseRef,currentTurnIdRef:K0,thoughtExpandedRef:E0,draftExpandedRef:B0,agentStatusRef:L.agentStatusRef,silentRecoveryRef:L.silentRecoveryRef,setIsAgentTurnActive:L.setIsAgentTurnActive,setAgentStatus:E,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:J,setCurrentTurnId:D,setFollowupQueueItems:L.setFollowupQueueItems,setActiveModel:L.setActiveModel,setActiveThinkingLevel:L.setActiveThinkingLevel,setSupportsThinking:L.setSupportsThinking,setActiveModelUsage:L.setActiveModelUsage,setContextUsage:L.setContextUsage,lastNotifiedIdRef:L.lastNotifiedIdRef,agentsRef:L.agentsRef,notify:L.notify,shouldNotifyLocallyForChat:L.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:v,lastSilenceNoticeRef:S,lastAgentEventRef:R,currentTurnIdRef:K0,thoughtExpandedRef:E0,draftExpandedRef:B0,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:t,lastAgentResponseRef:L.lastAgentResponseRef,agentStatusRef:L.agentStatusRef,stalledPostIdRef:s,scrollToBottomRef:Q0.scrollToBottomRef,setCurrentTurnId:D,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:J,setAgentStatus:E,setPosts:Q0.setPosts,dedupePosts:i4},viewState:{viewStateRef:L.viewStateRef,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,searchOpen:L.searchOpen},removeFileRefRef:V0.removeFileRefRef}),M0=GX({appShellRef:L.appShellRef,sidebarWidthRef:L.sidebarWidthRef,editorWidthRef:L.editorWidthRef,dockHeightRef:L.dockHeightRef}),{chatRefreshLifecycle:r,timelineViewActions:G0,isComposeBoxAgentActive:O0,followupActions:u0,sidepanelActions:R0,branchPaneActions:r0}=UF({routeState:{currentChatJid:j,currentRootChatJid:L.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:q,branchLoaderSourceChatJid:K,isWebAppMode:L.isWebAppMode},searchState:{currentHashtag:L.currentHashtag,setCurrentHashtag:L.setCurrentHashtag,searchQuery:L.searchQuery,setSearchQuery:L.setSearchQuery,searchOpen:L.searchOpen,setSearchOpen:L.setSearchOpen,searchScope:L.searchScope,setSearchScope:L.setSearchScope},shellState:{activeChatAgents:L.activeChatAgents,currentChatBranches:L.currentChatBranches,currentBranchRecord:L.currentBranchRecord,contextUsage:L.contextUsage,activeModel:L.activeModel,activeThinkingLevel:L.activeThinkingLevel,supportsThinking:L.supportsThinking,activeModelUsage:L.activeModelUsage,connectionStatus:L.connectionStatus,notificationsEnabled:L.notificationsEnabled,notificationPermission:L.notificationPermission,workspaceOpen:L.workspaceOpen,setWorkspaceOpen:L.setWorkspaceOpen,userProfile:L.userProfile,agents:L.agents,removingPostIds:L.removingPostIds,btwSession:L.btwSession},timeline:Q0,interaction:U0,paneRuntime:V0.paneRuntime,refs:{activeChatJidRef:L.activeChatJidRef,queueRefreshGenRef:L.queueRefreshGenRef,dismissedQueueRowIdsRef:L.dismissedQueueRowIdsRef,wasAgentActiveRef:L.wasAgentActiveRef,viewStateRef:L.viewStateRef,agentStatusRef:L.agentStatusRef,pendingRequestRef:t,thoughtBufferRef:h,draftBufferRef:c,previewResyncPendingRef:_0,previewResyncGenerationRef:b,isAgentRunningRef:v,currentTurnIdRef:K0,silentRecoveryRef:L.silentRecoveryRef,lastAgentEventRef:R,lastSilenceNoticeRef:S,staleUiVersionRef:L.staleUiVersionRef,staleUiReloadScheduledRef:L.staleUiReloadScheduledRef,hasConnectedOnceRef:L.hasConnectedOnceRef,sidebarWidthRef:L.sidebarWidthRef,appShellRef:L.appShellRef,agentsRef:L.agentsRef,paneStateOwnerChatJidRef:L.paneStateOwnerChatJidRef,chatPaneStateByChatRef:L.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:L.dismissedLiveWidgetKeysRef,draftThrottleRef:L.draftThrottleRef,thoughtThrottleRef:L.thoughtThrottleRef,followupQueueItemsRef:L.followupQueueItemsRef,lastAgentResponseRef:L.lastAgentResponseRef,thoughtExpandedRef:E0,draftExpandedRef:B0,steerQueuedTurnIdRef:Z0,btwAbortRef:L.btwAbortRef,renameBranchInFlightRef:L.renameBranchInFlightRef,renameBranchLockUntilRef:L.renameBranchLockUntilRef,editorWidthRef:L.editorWidthRef,dockHeightRef:L.dockHeightRef},setters:{setFollowupQueueItems:L.setFollowupQueueItems,setContextUsage:L.setContextUsage,setExtensionStatusPanels:L.setExtensionStatusPanels,setPendingExtensionPanelActions:L.setPendingExtensionPanelActions,setExtensionWorkingState:L.setExtensionWorkingState,setAgentStatus:E,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:J,setConnectionStatus:L.setConnectionStatus,setAgents:L.setAgents,setUserProfile:L.setUserProfile,setActiveChatAgents:L.setActiveChatAgents,setCurrentChatBranches:L.setCurrentChatBranches,setActiveModel:L.setActiveModel,setActiveThinkingLevel:L.setActiveThinkingLevel,setSupportsThinking:L.setSupportsThinking,setActiveModelUsage:L.setActiveModelUsage,setAgentModelsPayload:L.setAgentModelsPayload,setHasLoadedAgentModels:L.setHasLoadedAgentModels,setHasMore:Q0.setHasMore,setFloatingWidget:L.setFloatingWidget,setSteerQueuedTurnId:I,setRemovingPostIds:L.setRemovingPostIds,setBtwSession:L.setBtwSession,setWorkspaceOpen:L.setWorkspaceOpen,setRenameBranchNameDraft:L.setRenameBranchNameDraft,setIsRenameBranchFormOpen:L.setIsRenameBranchFormOpen,setIsRenamingBranch:L.setIsRenamingBranch},services:{searchPosts:Mk,deletePost:yk,getAgentQueueState:mk,getAgentContext:xk,getAutoresearchStatus:Ik,getAgentStatus:Tk,getAgents:wk,getAgentModels:Rk,getActiveChatAgents:fk,getChatBranches:Sk,getTimeline:rk,stopAutoresearch:Ck,dismissAutoresearch:Pk,streamSidePrompt:hk,sendAgentMessage:dk,renameChatBranch:gk,pruneChatBranch:uk,purgeChatBranch:bk,restoreChatBranch:vk,forkChatBranch:ok,steerAgentQueueItem:ck,removeAgentQueueItem:lk,getAgentThought:vF,setAgentThoughtVisibility:mF,silenceRefreshMs:YX,silenceWarningMs:ZX,silenceFinalizeMs:XX,isCompactionStatus:Q$,currentAppAssetVersion:kk,tabStoreHasUnsaved:()=>e0.hasUnsaved(),agentStatus:z,isAgentTurnActive:L.isAgentTurnActive,openEditor:V0.editorState.openEditor,activateTab:V0.editorState.handleTabActivate,tabStripActiveId:V0.editorState.tabStripActiveId,terminalTabPath:g4,resolveTab:(T0)=>e0.get(T0),closeTab:V0.editorState.handleTabClose,editorOpen:V0.editorState.editorOpen},helpers:{getFormLock:nK,readStoredNumber:j4}});g(()=>{return NF({timelineRef:L.timelineRef,activeChatAgents:L.activeChatAgents,currentChatJid:j,onSwitch:(T0)=>r0.handleBranchPickerChange(T0),isIOSDevice:e5,isLikelySafari:y8})},[L.timelineRef,L.activeChatAgents,j,r0.handleBranchPickerChange]);let j_=q0(()=>bF({panePopoutMode:Z,modelsLoaded:L.hasLoadedAgentModels,modelPayload:L.agentModelsPayload,providerMissingDismissed:Q}),[Z,L.hasLoadedAgentModels,L.agentModelsPayload,Q]),I0=P(()=>{AY()},[]),i0=P(()=>{V(!0),L_(Lj,"true")},[]);return g(()=>{if(!Z||typeof document>"u")return;document.title=aK(Y,V0.paneRuntime.activePaneTab,X)},[V0.paneRuntime.activePaneTab,Y,Z,X]),g(()=>{if(typeof window>"u")return;let T0=(s0)=>{uF(s0,{currentChatJid:j,openEditor:V0.editorState.openEditor,popOutPane:r0.handlePopOutPane,showIntentToast:U0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",T0),()=>{window.removeEventListener("piclaw-extension-ui:request",T0)}},[r0.handlePopOutPane,j,U0.composeReferenceActions.showIntentToast,V0.editorState.openEditor]),cK(KL({routeState:{branchLoaderMode:q,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:V0.paneRuntime,splitters:M0,orchestration:{branchPaneActions:r0,timelineViewActions:G0,sidepanelActions:R0,followupActions:u0,chatRefreshLifecycle:r,isComposeBoxAgentActive:O0},interaction:U0,timeline:Q0,surface:{...L,oobePanelState:j_,composePrefillRequest:F,requestComposePrefill:U,handleOobeSetupProvider:I0,handleOobeShowModelPicker:I0,handleOobeOpenWorkspace:I0,handleDismissProviderMissingOobe:i0},editorState:V0.editorState,agentState:{agentStatus:z,agentDraft:H,agentPlan:A,agentThought:w,pendingRequest:W,currentTurnId:M,steerQueuedTurnId:y,setPendingRequest:J,pendingRequestRef:t,isCompactionStatus:Q$},helpers:{formatBranchPickerLabel:v2,isIOSDevice:e5,terminalTabPath:g4}}))}function sk(){let{locationParams:_,navigate:$}=MY();return B`<${ik} locationParams=${_} navigate=${$} />`}var I8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(I8){if(G$(null,I8),I8.replaceChildren(),G$(B`<${sk} />`,I8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=2421FECC3A7C0A7264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
